(function () {
  'use strict';

  var THEME_KEY = 'voxellab_theme';

  function initTheme() {
    var saved = localStorage.getItem(THEME_KEY);
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  }

  function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem(
      THEME_KEY,
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
  }

  function initMobileMenu() {
    var toggle = document.querySelector('[data-mobile-menu-toggle]');
    var menu = document.querySelector('[data-mobile-menu]');
    var closeBtn = document.querySelector('[data-mobile-menu-close]');
    if (!toggle || !menu) return;

    function open() {
      menu.classList.remove('hidden');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      menu.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', close);
    });
  }

  function initCollectionFilters() {
    var toggle = document.querySelector('[data-filter-toggle]');
    var sidebar = document.querySelector('[data-collection-sidebar]');
    var closeBtn = document.querySelector('[data-filter-close]');
    if (!toggle || !sidebar) return;

    toggle.addEventListener('click', function () {
      sidebar.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        sidebar.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    }
  }

  function initQuantity(root) {
    var scope = root || document;

    scope.querySelectorAll('[data-qty-minus]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var input = btn.parentElement.querySelector('[data-qty-input], .quantity-selector__input');
        if (!input) return;
        var val = parseInt(input.value, 10) || 1;
        input.value = Math.max(1, val - 1);
      });
    });

    scope.querySelectorAll('[data-qty-plus]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var input = btn.parentElement.querySelector('[data-qty-input], .quantity-selector__input');
        if (!input) return;
        var val = parseInt(input.value, 10) || 1;
        input.value = val + 1;
      });
    });

    scope.querySelectorAll('[data-line-qty-minus]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var line = btn.getAttribute('data-line');
        var input = scope.querySelector('[data-line="' + line + '"].quantity-selector__input');
        if (!input) return;
        var val = parseInt(input.value, 10) || 1;
        input.value = Math.max(0, val - 1);
        input.closest('form').submit();
      });
    });

    scope.querySelectorAll('[data-line-qty-plus]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var line = btn.getAttribute('data-line');
        var input = scope.querySelector('[data-line="' + line + '"].quantity-selector__input');
        if (!input) return;
        var val = parseInt(input.value, 10) || 0;
        input.value = val + 1;
        input.closest('form').submit();
      });
    });
  }

  function initProductGallery() {
    var mainImage = document.getElementById('ProductMainImage');
    if (!mainImage) return;

    document.querySelectorAll('.product-gallery__thumb').forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var url = thumb.getAttribute('data-media-url');
        if (url) mainImage.src = url;
        document.querySelectorAll('.product-gallery__thumb').forEach(function (t) {
          t.classList.remove('product-gallery__thumb--active');
        });
        thumb.classList.add('product-gallery__thumb--active');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initTheme();

    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', toggleTheme);
    });

    initMobileMenu();
    initCollectionFilters();
    initQuantity();
    initProductGallery();
  });
})();
