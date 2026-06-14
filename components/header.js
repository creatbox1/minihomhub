/**
 * Header Component – Premium SaaS 2026
 * Full-width glass navbar with nav, sign in, get started
 */

function loadHeader() {
  const headerContainer = document.getElementById('site-header-container');
  if (!headerContainer) return;

  const path = window.location.pathname;
  const isActive = (p) => path === p || path === p + '/';

  headerContainer.innerHTML = `
<header class="site-header" role="banner">
  <div class="header-inner">
    <a href="/" class="site-logo" aria-label="HVAC Cost Guide - Home">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
      HVAC Cost Guide
    </a>

    <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="main-nav">
      <span></span><span></span><span></span>
    </button>

    <nav class="main-nav" id="main-nav" aria-label="Main navigation">
      <ul>
        <li><a href="/" ${isActive('/') ? 'class="active"' : ''}>Home</a></li>
        <li><a href="/tools/" ${path.startsWith('/tools') ? 'class="active"' : ''}>Cost Calculators</a></li>
        <li><a href="/blog/" ${path.startsWith('/blog') ? 'class="active"' : ''}>Blog</a></li>
        <li><a href="/about.html" ${isActive('/about.html') ? 'class="active"' : ''}>About</a></li>
      </ul>
      <div class="nav-right-mobile" style="display:none;">
        <a href="/contact.html" class="btn-signin">Contact</a>
        <a href="/tools/hvac-cost-calculator.html" class="btn-getstarted">Get Started</a>
      </div>
    </nav>

    <div class="nav-right">
      <a href="/contact.html" class="btn-signin">Contact</a>
      <a href="/tools/hvac-cost-calculator.html" class="btn-getstarted">Get Started →</a>
    </div>
  </div>
</header>`;
}

document.addEventListener('DOMContentLoaded', loadHeader);
