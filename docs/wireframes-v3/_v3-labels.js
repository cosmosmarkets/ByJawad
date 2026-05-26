/**
 * Wireframe v3 — inject section labels + toggle toolbar
 */
(function () {
  var SECTION_SKIP = new Set(['main', 'site-nav', 'mobile-drawer', 'menu-open', 'menu-close', 'menu-backdrop', 'nav-logo', 'newsletter', 'newsletter-order', 'c-name', 'c-email', 'c-type', 'c-budget', 'c-timeline', 'c-msg', 'error-title', 'trust-title', 'why-order-title', 'work-title', 'process-title', 'tools-title', 'cta-title', 'form-title', 'socials-title', 'book-title', 'faq-title', 'story-title', 'stack-title', 'photo-title', 'personal-title', 'featured-title', 'grid-title', 'newsletter-title', 'related-title', 'gallery-title', 'end-cta-title', 'mid-cta-title', 'portfolio-title', 'addons-title', 'portfolio-card']);

  var TOKEN_HINTS = {
    hero: 'font.display · section-v-desktop: 96px · heat.red',
    trust: 'font.mono kicker · section-v: 48px',
    'why-order': 'surface.ink · shadow.sticker · radius.lg',
    work: 'shadow.sticker · card hover (hi-fi 2+ projects)',
    process: 'font.display h2 · connector (hi-fi)',
    tools: 'grid 4×2 desktop · emoji → logo (production)',
    cta: 'font.script Caveat · shadow.poster · accent.mustard CTA',
    form: 'font.body · border.width.bold · form states',
    book: 'Calendly embed (production)',
    faq: 'accordion · focus-visible',
    portfolio: 'panel-card · shadow.sticker',
    landing: 'panel-card · shadow.sticker',
    addons: 'table responsive · font.body',
    overview: 'cs-block · font.display h2',
    problem: 'cs-block',
    approach: 'cs-block',
    result: 'cs-block',
    gallery: 'gallery grid · placeholders',
    related: 'related-row · 3 cards',
    featured: 'featured-card · 21:9 thumb',
    grid: 'article-card · 3-col @900px',
    newsletter: 'newsletter (production Resend)',
    story: 'story-chapter · shadow.sticker',
    stack: 'stack-grid · tool logos deferred',
    photo: 'avatar · hi-fi asset',
    personal: 'font.body bullets',
    body: 'prose MDX (production)',
    'mid-cta': 'inline CTA card · shadow.sticker',
    'end-cta': 'band-cta · Book a Call',
  };

  function injectLabels() {
    var main = document.getElementById('main');
    if (!main) return;

    var nodes = main.querySelectorAll('[id]');
    nodes.forEach(function (el) {
      var id = el.id;
      if (!id || SECTION_SKIP.has(id)) return;
      if (el.querySelector('.v3-label')) return;

      el.classList.add('v3-labeled');

      var sectionLabel = document.createElement('span');
      sectionLabel.className = 'v3-label';
      sectionLabel.setAttribute('aria-hidden', 'true');
      sectionLabel.textContent = '#' + id;

      var tokenHint = TOKEN_HINTS[id];
      if (tokenHint) {
        var tokenLabel = document.createElement('span');
        tokenLabel.className = 'v3-label v3-label--token';
        tokenLabel.setAttribute('aria-hidden', 'true');
        tokenLabel.textContent = tokenHint;
        el.appendChild(tokenLabel);
      }

      el.insertBefore(sectionLabel, el.firstChild);
    });
  }

  function setupToolbar() {
    var bar = document.createElement('div');
    bar.className = 'v3-toolbar';
    bar.setAttribute('role', 'toolbar');
    bar.setAttribute('aria-label', 'V3 review controls');

    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.textContent = 'Toggle v3 labels';
    toggle.addEventListener('click', function () {
      document.body.classList.toggle('show-v3-labels');
      toggle.textContent = document.body.classList.contains('show-v3-labels')
        ? 'Hide v3 labels'
        : 'Show v3 labels';
    });

    if (document.body.classList.contains('show-v3-labels')) {
      toggle.textContent = 'Hide v3 labels';
    }

    bar.appendChild(toggle);
    document.body.appendChild(bar);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      injectLabels();
      setupToolbar();
    });
  } else {
    injectLabels();
    setupToolbar();
  }
})();
