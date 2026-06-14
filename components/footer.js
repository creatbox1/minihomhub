/**
 * Footer Component – Premium SaaS 2026
 * Author bio (E-E-A-T) + multi-column footer with trust signals
 */

function loadFooter() {
  const footerContainer = document.getElementById('site-footer-container');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-brand">
        <h2>⬡ HVAC Cost Guide</h2>
        <p>Helping homeowners in the USA and Canada understand, calculate, and reduce their heating and cooling costs. Independent, data-driven, and free to use since 2024.</p>
        <div class="footer-flags" style="margin-top:1rem;">
          <span>🇺🇸</span> <span>🇨🇦</span> Built on 340+ real home energy audits across North America
        </div>
        <div class="footer-social" style="margin-top:1.25rem; display:flex; gap:0.75rem;">
          <a href="mailto:support@minihomehub.online" aria-label="Email us" style="display:flex; align-items:center; justify-content:center; width:44px; height:44px; background:rgba(255,255,255,0.1); border-radius:8px; transition:all 0.2s;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#fff;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/michael-carter-872388416/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style="display:flex; align-items:center; justify-content:center; width:44px; height:44px; background:rgba(255,255,255,0.1); border-radius:8px; transition:all 0.2s;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://x.com/michaelcarhvq" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" style="display:flex; align-items:center; justify-content:center; width:44px; height:44px; background:rgba(255,255,255,0.1); border-radius:8px; transition:all 0.2s;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h3>Popular Guides</h3>
        <ul>
          <li><a href="/blog/average-heating-cost-per-month-usa.html">Average Heating Cost Per Month</a></li>
          <li><a href="/blog/how-much-does-ac-cost-per-month-usa.html">AC Cost Per Month in USA</a></li>
          <li><a href="/blog/ac-running-cost-calculator.html">AC Running Cost Calculator</a></li>
          <li><a href="/blog/hvac-installation-cost-usa-canada.html">HVAC Installation Cost Guide</a></li>
          <li><a href="/blog/heat-pump-vs-furnace-cost-comparison.html">Heat Pump vs Furnace</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Categories</h3>
        <ul>
          <li><a href="/blog/categories/heating-costs.html">🔥 Heating Costs</a></li>
          <li><a href="/blog/categories/cooling-ac-costs.html">❄️ Cooling &amp; AC Costs</a></li>
          <li><a href="/blog/categories/energy-saving-guides.html">⚡ Energy Saving Guides</a></li>
          <li><a href="/blog/categories/hvac-installation-guides.html">🏠 HVAC &amp; Installation</a></li>
          <li><a href="/tools/">All 20 Calculators</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Company</h3>
        <ul>
          <li><a href="/about.html">About Michael Carter</a></li>
          <li><a href="/contact.html">Contact Us</a></li>
          <li><a href="/sitemap-page.html">Sitemap</a></li>
          <li><a href="/privacy-policy.html">Privacy Policy</a></li>
          <li><a href="/terms.html">Terms of Use</a></li>
          <li><a href="/disclaimer.html">Disclaimer</a></li>
          <li><a href="/editorial-policy.html">Editorial Policy</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© <span class="current-year"></span> HVAC Cost Guide. All rights reserved.</p>
      <p>
        <a href="/accessibility.html">Accessibility</a> ·
        <a href="/dmca.html">DMCA</a> ·
        <a href="/cookie-policy.html">Cookie Settings</a> ·
        <a href="/cookie-policy.html">Cookie Policy</a>
      </p>
    </div>
  </div>
</footer>`;
}

document.addEventListener('DOMContentLoaded', loadFooter);
