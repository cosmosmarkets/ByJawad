/**
 * Studio Kitchen — shared chrome behaviors (Wave 0)
 * Spec: docs/wireframes-v2/shared-chrome-spec.md
 *
 * HTML: data-nav-surface="hero" | "cream" on <html>
 */
(function () {
  'use strict';

  var LOGO_NAV = '../../brand_assets/logo/jawad-design-lockup-nav.svg';
  var LOGO_BLACK = '../../brand_assets/logo/jawad-design-lockup-black.svg';
  var SCROLL_THRESHOLD = 64;

  function initNavScroll() {
    var nav = document.getElementById('site-nav');
    var logo = document.getElementById('nav-logo');
    if (!nav) return;

    function applyScrolled(scrolled) {
      nav.classList.toggle('is-scrolled', scrolled);
      if (logo) {
        logo.src = scrolled ? LOGO_BLACK : LOGO_NAV;
      }
    }

    function onScroll() {
      applyScrolled(window.scrollY > SCROLL_THRESHOLD);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initNavCream() {
    var nav = document.getElementById('site-nav');
    var logo = document.getElementById('nav-logo');
    if (!nav) return;

    nav.classList.add('is-scrolled');
    if (logo) {
      logo.src = LOGO_BLACK;
    }
  }

  function initMobileDrawer() {
    var drawer = document.getElementById('mobile-drawer');
    var openBtn = document.getElementById('menu-open');
    var closeBtn = document.getElementById('menu-close');
    var backdrop = document.getElementById('menu-backdrop');

    if (!drawer || !openBtn) return;

    function setDrawer(open) {
      drawer.classList.toggle('is-open', open);
      drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    }

    openBtn.addEventListener('click', function () {
      setDrawer(true);
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        setDrawer(false);
      });
    }

    if (backdrop) {
      backdrop.addEventListener('click', function () {
        setDrawer(false);
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        setDrawer(false);
      }
    });

    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setDrawer(false);
      });
    });
  }

  function initFaqAccordion() {
    var accordions = document.querySelectorAll('[data-faq-accordion]');
    if (!accordions.length) return;

    var oneOpenMobile = window.matchMedia('(max-width: 899px)').matches;

    accordions.forEach(function (root) {
      var items = root.querySelectorAll('.faq-item');

      items.forEach(function (item) {
        var trigger = item.querySelector('.faq-item__trigger');
        var panel = item.querySelector('.faq-item__panel');
        if (!trigger || !panel) return;

        trigger.addEventListener('click', function () {
          var willOpen = !item.classList.contains('is-open');

          if (oneOpenMobile && willOpen) {
            items.forEach(function (other) {
              if (other !== item) {
                other.classList.remove('is-open');
                var t = other.querySelector('.faq-item__trigger');
                if (t) t.setAttribute('aria-expanded', 'false');
              }
            });
          }

          item.classList.toggle('is-open', willOpen);
          trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        });

        trigger.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            trigger.click();
          }
        });
      });
    });
  }

  function initHashHighlight() {
    var hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    var target = document.querySelector(hash);
    if (!target) return;

    requestAnimationFrame(function () {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.classList.add('is-hash-target');
      setTimeout(function () {
        target.classList.remove('is-hash-target');
      }, 2400);
    });
  }

  function initSiteChrome() {
    var surface = document.documentElement.getAttribute('data-nav-surface') || 'hero';

    if (surface === 'cream') {
      initNavCream();
    } else {
      initNavScroll();
    }

    initMobileDrawer();
    initFaqAccordion();
    initHashHighlight();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSiteChrome);
  } else {
    initSiteChrome();
  }
})();
