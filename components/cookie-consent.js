(function() {
  var CONSENT_KEY = 'hvac_cookie_consent';
  var consent = localStorage.getItem(CONSENT_KEY);

  function loadAnalytics() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){dataLayer.push(arguments);};
    window.gtag('js', new Date());
    window.gtag('config', 'G-3J0SQFFQVF');
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-3J0SQFFQVF';
    document.head.appendChild(s);
  }

  function loadAdsense() {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6607290664261914';
    s.crossOrigin = 'anonymous';
    s.onload = function() {
      if (typeof adsbygoogle !== 'undefined') {
        try { adsbygoogle.push({}); } catch(e) {}
      }
    };
    document.head.appendChild(s);
  }

  function loadThirdParty(analytics, marketing) {
    if (analytics) loadAnalytics();
    if (marketing) loadAdsense();
  }

  if (consent === 'accepted') {
    loadThirdParty(true, true);
    return;
  }
  if (consent === 'rejected') {
    return;
  }

  function showBanner() {
    var container = document.getElementById('cookie-consent-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'cookie-consent-container';
      document.body.appendChild(container);
    }
    container.innerHTML =
      '<div id="cookie-banner" class="cookie-banner" role="dialog" aria-label="Cookie consent" aria-describedby="cookie-message">' +
        '<div class="cookie-content">' +
          '<p id="cookie-message">We use cookies to improve your experience and analyze site traffic. By continuing to use our site, you consent to our use of cookies. <a href="/legal/cookie-policy.html">Read our Cookie Policy</a></p>' +
          '<div class="cookie-buttons">' +
            '<button class="cookie-btn cookie-btn-accept" aria-label="Accept all cookies">Accept All</button>' +
            '<button class="cookie-btn cookie-btn-reject" aria-label="Reject non-essential cookies">Reject All</button>' +
            '<button class="cookie-btn cookie-btn-customize" aria-label="Customize cookie preferences">Customize</button>' +
          '</div>' +
          '<div id="cookie-customize-panel" class="cookie-customize-panel" style="display:none;margin-top:1rem;padding-top:1rem;border-top:1px solid var(--border-color);">' +
            '<label style="display:flex;align-items:center;gap:0.5rem;cursor:pointer;font-size:0.9rem;">' +
              '<input type="checkbox" id="cookie-opt-analytics" checked> Analytics cookies (help us improve)' +
            '</label>' +
            '<label style="display:flex;align-items:center;gap:0.5rem;cursor:pointer;font-size:0.9rem;margin-top:0.5rem;">' +
              '<input type="checkbox" id="cookie-opt-marketing" checked> Marketing cookies (personalized ads)' +
            '</label>' +
            '<button class="cookie-btn cookie-btn-save" id="cookie-btn-save" style="margin-top:0.75rem;padding:0.5rem 1.25rem;border-radius:8px;border:none;background:var(--blue-500);color:#fff;cursor:pointer;font-weight:600;">' +
              'Save Preferences' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    container.querySelector('.cookie-btn-accept').addEventListener('click', function() {
      localStorage.setItem(CONSENT_KEY, 'accepted');
      container.style.display = 'none';
      loadThirdParty(true, true);
    });

    container.querySelector('.cookie-btn-reject').addEventListener('click', function() {
      localStorage.setItem(CONSENT_KEY, 'rejected');
      container.style.display = 'none';
    });

    container.querySelector('.cookie-btn-customize').addEventListener('click', function() {
      var panel = document.getElementById('cookie-customize-panel');
      panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    });

    container.querySelector('#cookie-btn-save').addEventListener('click', function() {
      var analytics = document.getElementById('cookie-opt-analytics').checked;
      var marketing = document.getElementById('cookie-opt-marketing').checked;
      localStorage.setItem(CONSENT_KEY, analytics || marketing ? 'accepted' : 'rejected');
      container.style.display = 'none';
      loadThirdParty(analytics, marketing);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showBanner);
  } else {
    showBanner();
  }
})();
