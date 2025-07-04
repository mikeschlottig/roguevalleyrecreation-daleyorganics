/**
 * Rogue Valley Recreation & Daley Organics
 * Cloudflare Worker for serving local SEO content
 */

// HTML content imports (we'll inline them for now)
const GRANGE_COOP_HTML = `<!-- Will be populated with actual content -->`;
const TOURIST_ATTRACTIONS_HTML = `<!-- Will be populated with actual content -->`;

// Main request handler
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Handle different routes
    switch (pathname) {
      case '/':
        return handleHomePage();
      case '/grange-co-op':
      case '/grange-co-op/':
        return handleGrangeCoOp();
      case '/tourist-attractions':
      case '/tourist-attractions/':
        return handleTouristAttractions();
      default:
        return handle404();
    }
  },
};

/**
 * Handle home page request
 */
async function handleHomePage() {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rogue Valley Recreation & Daley Organics - Local Community Hub</title>
    <meta name="description" content="Community and locally focused content to add SEO value to Daley Organics in the Rogue Valley region">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Georgia', serif;
            line-height: 1.6;
            background: linear-gradient(135deg, #2d5a27 0%, #56ab2f 50%, #a8e6cf 100%);
            color: #333;
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .header {
            text-align: center;
            margin-bottom: 50px;
            background: rgba(255, 255, 255, 0.95);
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .header h1 {
            font-size: 3em;
            color: #2d5a27;
            margin-bottom: 20px;
            background: linear-gradient(45deg, #2d5a27, #56ab2f);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .header p {
            font-size: 1.3em;
            color: #555;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .nav-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }
        
        .nav-card {
            background: rgba(255, 255, 255, 0.95);
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            text-decoration: none;
            color: #333;
            transition: all 0.3s ease;
            border-left: 8px solid #56ab2f;
            position: relative;
            overflow: hidden;
        }
        
        .nav-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, transparent, rgba(86, 171, 47, 0.1), transparent);
            transform: translateX(-100%);
            transition: transform 0.6s ease;
        }
        
        .nav-card:hover::before {
            transform: translateX(100%);
        }
        
        .nav-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .nav-card h2 {
            font-size: 2em;
            color: #2d5a27;
            margin-bottom: 20px;
            position: relative;
            z-index: 1;
        }
        
        .nav-card p {
            font-size: 1.1em;
            line-height: 1.6;
            position: relative;
            z-index: 1;
        }
        
        .nav-card .icon {
            font-size: 3em;
            margin-bottom: 20px;
            display: block;
            position: relative;
            z-index: 1;
        }
        
        .footer {
            text-align: center;
            margin-top: 60px;
            padding: 30px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            color: white;
        }
        
        @media (max-width: 768px) {
            .nav-grid {
                grid-template-columns: 1fr;
            }
            
            .header h1 {
                font-size: 2em;
            }
            
            .nav-card {
                padding: 30px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🌲 Rogue Valley Recreation & Daley Organics</h1>
            <p>Community and locally focused content to add SEO value to Daley Organics in the beautiful Rogue Valley region</p>
        </div>
        
        <div class="nav-grid">
            <a href="/grange-co-op" class="nav-card">
                <span class="icon">🌾</span>
                <h2>The Grange Co-op</h2>
                <p>Comprehensive SEO strategy dashboard for Southern Oregon & Northern California's Premier Agricultural Cooperative. Explore 90+ years of farmer-owned excellence and regional authority.</p>
            </a>
            
            <a href="/tourist-attractions" class="nav-card">
                <span class="icon">🏔️</span>
                <h2>Tourist Attractions</h2>
                <p>Discover the best recreational and tourist destinations in the Rogue Valley region. From outdoor adventures to cultural experiences, explore what makes our area special.</p>
            </a>
        </div>
        
        <div class="footer">
            <p>&copy; 2025 Rogue Valley Recreation & Daley Organics. Supporting local community and sustainable agriculture.</p>
        </div>
    </div>
</body>
</html>`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}

/**
 * Handle Grange Co-op page request
 */
async function handleGrangeCoOp() {
  // For now, return a simple response - we'll enhance this
  return new Response("Grange Co-op content will be served here", {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}

/**
 * Handle Tourist Attractions page request
 */
async function handleTouristAttractions() {
  // For now, return a simple response - we'll enhance this
  return new Response("Tourist Attractions content will be served here", {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}

/**
 * Handle 404 errors
 */
function handle404() {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found - Rogue Valley Recreation</title>
    <style>
        body {
            font-family: Georgia, serif;
            background: linear-gradient(135deg, #2d5a27, #56ab2f);
            color: white;
            text-align: center;
            padding: 100px 20px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        h1 {
            font-size: 4em;
            margin-bottom: 20px;
        }
        
        p {
            font-size: 1.2em;
            margin-bottom: 30px;
        }
        
        a {
            color: #a8e6cf;
            text-decoration: none;
            font-size: 1.1em;
            border: 2px solid #a8e6cf;
            padding: 15px 30px;
            border-radius: 30px;
            transition: all 0.3s ease;
            display: inline-block;
        }
        
        a:hover {
            background: #a8e6cf;
            color: #2d5a27;
        }
    </style>
</head>
<body>
    <h1>🌲 404</h1>
    <p>Page not found in the Rogue Valley</p>
    <a href="/">Return to Home</a>
</body>
</html>`;

  return new Response(html, {
    status: 404,
    headers: {
      'Content-Type': 'text/html',
    }
  });
}
