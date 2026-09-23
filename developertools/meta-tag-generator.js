/**
 * HUZIKIT META TAG GENERATOR — PRODUCTION SCRIPT
 * Complete Mobile Menu, Accordions, Search Modal, Live Generator & Previews
 * Zero Dependencies | Vanilla JavaScript
 */

(function () {
  "use strict";

  // ==========================================================================
  // 1. LOCKED DATA: HUZIKIT 30 TOOLS & ROUTES
  // ==========================================================================
  const HUZIKIT_TOOLS = [
    // TEXT TOOLS
    {
      name: "Word Counter",
      url: "/texttools/word-counter.html",
      category: "Text Tools",
      keywords: "words characters letters paragraphs reading time",
    },
    {
      name: "Character Counter",
      url: "/texttools/character-counter.html",
      category: "Text Tools",
      keywords: "character length letter count limit",
    },
    {
      name: "Case Converter",
      url: "/texttools/case-converter.html",
      category: "Text Tools",
      keywords: "uppercase lowercase titlecase sentencecase camelcase",
    },
    {
      name: "Remove Duplicate Lines",
      url: "/texttools/remove-duplicate-lines.html",
      category: "Text Tools",
      keywords: "dedupe clean lines sort unique",
    },
    {
      name: "Lorem Ipsum Generator",
      url: "/texttools/loremipsumgenerator.html",
      category: "Text Tools",
      keywords: "dummy text placeholder dummy paragraphs",
    },
    {
      name: "Password Generator",
      url: "/texttools/passwordgenerator.html",
      category: "Text Tools",
      keywords: "strong password secure random token credentials",
    },
    {
      name: "Text Reverser",
      url: "/texttools/text-reverser.html",
      category: "Text Tools",
      keywords: "reverse flip mirror backwards palindrome",
    },
    {
      name: "Online Notepad",
      url: "/texttools/onlinenotepad.html",
      category: "Text Tools",
      keywords: "scratchpad notes auto-save browser editor",
    },

    // CALCULATORS
    {
      name: "Age Calculator",
      url: "/calculator/agecalculator.html",
      category: "Calculators",
      keywords: "birth date years months days hours age",
    },
    {
      name: "BMI Calculator",
      url: "/calculator/bmi-calculator.html",
      category: "Calculators",
      keywords: "body mass index health weight height fitness",
    },
    {
      name: "Percentage Calculator",
      url: "/calculator/percentage-calculator.html",
      category: "Calculators",
      keywords: "percent increase decrease fraction proportion",
    },
    {
      name: "Calorie Calculator",
      url: "/calculator/Calorie-Calculator.html",
      category: "Calculators",
      keywords: "bmr tdee daily calories nutrition deficit",
    },
    {
      name: "Discount Calculator",
      url: "/calculator/discount-calculator.html",
      category: "Calculators",
      keywords: "sale price coupon savings retail percentage",
    },
    {
      name: "Savings & Goal Calculator",
      url: "/calculator/saving&goalcalculator.html",
      category: "Calculators",
      keywords: "compound interest savings goal investment finance",
    },
    {
      name: "Tip Calculator",
      url: "/calculator/tip-calculator.html",
      category: "Calculators",
      keywords: "restaurant bill split gratuity dining",
    },
    {
      name: "GPA Calculator",
      url: "/calculator/gpa-calculator.html",
      category: "Calculators",
      keywords: "grade point average college university school score",
    },

    // IMAGE & PDF
    {
      name: "Image Compressor",
      url: "/image&pdf/image-compressor.html",
      category: "Image & PDF",
      keywords: "reduce image size optimize jpg png webp",
    },
    {
      name: "Image Resizer",
      url: "/image&pdf/image-resizer.html",
      category: "Image & PDF",
      keywords: "scale dimensions crop resize aspect ratio",
    },
    {
      name: "PDF to Word",
      url: "/image&pdf/pdftowordconverter.html",
      category: "Image & PDF",
      keywords: "convert pdf docx document extract",
    },
    {
      name: "JPG to PNG",
      url: "/image&pdf/jpg-to-png.html",
      category: "Image & PDF",
      keywords: "image format convert transparent png jpeg",
    },
    {
      name: "Color Picker / HEX",
      url: "/image&pdf/colorpicker.html",
      category: "Image & PDF",
      keywords: "palette rgb hex hsl eye-dropper shades",
    },
    {
      name: "QR Code Generator",
      url: "/image&pdf/QRGenrator.html",
      category: "Image & PDF",
      keywords: "qr barcode scanner link generator vcard",
    },

    // DEVELOPER
    {
      name: "JSON Formatter",
      url: "/developertools/JSONFORMATTER.html",
      category: "Developer",
      keywords: "prettify validator minify json parser",
    },
    {
      name: "Base64 Encoder/Decoder",
      url: "/developertools/base64encoderdecoder.html",
      category: "Developer",
      keywords: "base64 encode decode binary string",
    },
    {
      name: "URL Encoder/Decoder",
      url: "/developertools/urlencoderdecoder.html",
      category: "Developer",
      keywords: "uri percent encoding query parameter decode",
    },
    {
      name: "Meta Tag Generator",
      url: "/developertools/meta-tag-generator.html",
      category: "Developer",
      keywords: "seo open graph twitter card social meta tags",
    },
    {
      name: "Regex Tester",
      url: "/developertools/regextester.html",
      category: "Developer",
      keywords: "regular expressions pattern match test regex",
    },
    {
      name: "Markdown to HTML",
      url: "/developertools/markdownhtml.html",
      category: "Developer",
      keywords: "markdown converter render preview parser",
    },
    {
      name: "CSS Minifier",
      url: "/developertools/cssminifier.html",
      category: "Developer",
      keywords: "compress css stylesheet reduce optimize",
    },
    {
      name: "Unix Timestamp",
      url: "/developertools/unixtimestamp.html",
      category: "Developer",
      keywords: "epoch time converter date clock seconds millis",
    },
  ];

  // ==========================================================================
  // 2. MOBILE NAVIGATION CONTROLLER (STATE, ACCESSIBILITY, ACCORDIONS)
  // ==========================================================================
  let isMobileMenuOpen = false;

  const menuToggleBtn = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNavigation");
  const mobileNavBackdrop = document.getElementById("mobileNavBackdrop");

  function openMobileMenu() {
    isMobileMenuOpen = true;
    if (menuToggleBtn) {
      menuToggleBtn.setAttribute("aria-expanded", "true");
      menuToggleBtn.setAttribute("aria-label", "Close navigation menu");
    }
    if (mobileNav) {
      mobileNav.classList.add("is-open");
      mobileNav.setAttribute("aria-hidden", "false");
    }
    if (mobileNavBackdrop) {
      mobileNavBackdrop.classList.add("is-active");
    }
    document.body.classList.add("nav-locked");
  }

  function closeMobileMenu() {
    if (!isMobileMenuOpen) return;
    isMobileMenuOpen = false;
    if (menuToggleBtn) {
      menuToggleBtn.setAttribute("aria-expanded", "false");
      menuToggleBtn.setAttribute("aria-label", "Open navigation menu");
    }
    if (mobileNav) {
      mobileNav.classList.remove("is-open");
      mobileNav.setAttribute("aria-hidden", "true");
    }
    if (mobileNavBackdrop) {
      mobileNavBackdrop.classList.remove("is-active");
    }
    document.body.classList.remove("nav-locked");
  }

  function toggleMobileMenu() {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  // Bind Menu Toggle Button
  if (menuToggleBtn) {
    menuToggleBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  // Close when tapping backdrop
  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener("click", closeMobileMenu);
  }

  // Close when clicking any tool link inside mobile navigation
  if (mobileNav) {
    mobileNav.addEventListener("click", function (e) {
      const link = e.target.closest("a");
      if (link) {
        closeMobileMenu();
      }
    });
  }

  // Mobile Accordion Categories
  const mobileAccordionBtns = document.querySelectorAll(".mobile-category-btn");
  mobileAccordionBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("aria-controls");
      const targetList = document.getElementById(targetId);
      const isExpanded = this.getAttribute("aria-expanded") === "true";

      if (isExpanded) {
        this.setAttribute("aria-expanded", "false");
        if (targetList) targetList.classList.remove("is-expanded");
      } else {
        this.setAttribute("aria-expanded", "true");
        if (targetList) targetList.classList.add("is-expanded");
      }
    });
  });

  // ==========================================================================
  // 3. GLOBAL SEARCH MODAL (CMD+K, CTRL+K, REAL LINKS)
  // ==========================================================================
  let isSearchModalOpen = false;
  const searchModalBackdrop = document.getElementById("searchModalBackdrop");
  const searchTriggerBtns = document.querySelectorAll(".search-trigger-btn");
  const searchCloseBtn = document.getElementById("searchCloseBtn");
  const searchInput = document.getElementById("globalSearchInput");
  const searchResultsList = document.getElementById("searchResultsList");

  function openSearchModal() {
    isSearchModalOpen = true;
    if (searchModalBackdrop) {
      searchModalBackdrop.classList.add("is-open");
      searchModalBackdrop.setAttribute("aria-hidden", "false");
    }
    closeMobileMenu();
    if (searchInput) {
      searchInput.value = "";
      renderSearchResults("");
      setTimeout(() => searchInput.focus(), 80);
    }
    document.body.classList.add("nav-locked");
  }

  function closeSearchModal() {
    if (!isSearchModalOpen) return;
    isSearchModalOpen = false;
    if (searchModalBackdrop) {
      searchModalBackdrop.classList.remove("is-open");
      searchModalBackdrop.setAttribute("aria-hidden", "true");
    }
    document.body.classList.remove("nav-locked");
  }

  searchTriggerBtns.forEach((btn) => {
    btn.addEventListener("click", openSearchModal);
  });

  if (searchCloseBtn) {
    searchCloseBtn.addEventListener("click", closeSearchModal);
  }

  if (searchModalBackdrop) {
    searchModalBackdrop.addEventListener("click", function (e) {
      if (e.target === searchModalBackdrop) {
        closeSearchModal();
      }
    });
  }

  function renderSearchResults(query) {
    if (!searchResultsList) return;
    const cleanQuery = (query || "").trim().toLowerCase();

    const filtered = HUZIKIT_TOOLS.filter((tool) => {
      if (!cleanQuery) return true;
      return (
        tool.name.toLowerCase().includes(cleanQuery) ||
        tool.category.toLowerCase().includes(cleanQuery) ||
        tool.keywords.toLowerCase().includes(cleanQuery)
      );
    });

    if (filtered.length === 0) {
      searchResultsList.innerHTML = `
        <div class="search-empty-state">
          No tools found matching "<strong>${escapeHtml(cleanQuery)}</strong>".
        </div>
      `;
      return;
    }

    searchResultsList.innerHTML = filtered
      .map(
        (tool) => `
      <a href="${tool.url}" class="search-result-link">
        <div class="search-result-info">
          <span class="search-result-title">${escapeHtml(tool.name)}</span>
          <span class="search-result-category">${escapeHtml(tool.category)}</span>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </a>
    `,
      )
      .join("");
  }

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      renderSearchResults(this.value);
    });

    // Arrow navigation inside search results
    searchInput.addEventListener("keydown", function (e) {
      const links = searchResultsList
        ? searchResultsList.querySelectorAll(".search-result-link")
        : [];
      if (links.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        links[0].focus();
      }
    });
  }

  // Global Keyboard Shortcuts (Ctrl+K, Cmd+K, Escape)
  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (isSearchModalOpen) {
        closeSearchModal();
      } else {
        openSearchModal();
      }
    } else if (e.key === "Escape") {
      if (isSearchModalOpen) {
        closeSearchModal();
      } else if (isMobileMenuOpen) {
        closeMobileMenu();
      }
    }
  });

  // Sticky header border enhancement on scroll
  const siteHeader = document.querySelector(".site-header");
  window.addEventListener(
    "scroll",
    function () {
      if (siteHeader) {
        if (window.scrollY > 12) {
          siteHeader.classList.add("scrolled");
        } else {
          siteHeader.classList.remove("scrolled");
        }
      }
    },
    { passive: true },
  );

  // ==========================================================================
  // 4. META TAG GENERATOR ENGINE & FORM CONTROLS
  // ==========================================================================
  const formElements = {
    // Basic SEO
    title: document.getElementById("inputTitle"),
    description: document.getElementById("inputDescription"),
    keywords: document.getElementById("inputKeywords"),
    author: document.getElementById("inputAuthor"),
    canonical: document.getElementById("inputCanonical"),
    language: document.getElementById("inputLanguage"),
    charset: document.getElementById("inputCharset"),
    robots: document.getElementById("inputRobots"),
    themeColor: document.getElementById("inputThemeColor"),
    themeColorSwatch: document.getElementById("themeColorSwatch"),
    viewport: document.getElementById("inputViewport"),

    // Open Graph
    ogTitle: document.getElementById("inputOgTitle"),
    ogDescription: document.getElementById("inputOgDescription"),
    ogUrl: document.getElementById("inputOgUrl"),
    ogImage: document.getElementById("inputOgImage"),
    ogImageWidth: document.getElementById("inputOgWidth"),
    ogImageHeight: document.getElementById("inputOgHeight"),
    ogImageAlt: document.getElementById("inputOgAlt"),
    ogType: document.getElementById("inputOgType"),
    ogSiteName: document.getElementById("inputOgSiteName"),
    ogLocale: document.getElementById("inputOgLocale"),

    // Twitter / X
    twitterCard: document.getElementById("inputTwitterCard"),
    twitterTitle: document.getElementById("inputTwitterTitle"),
    twitterDescription: document.getElementById("inputTwitterDescription"),
    twitterImage: document.getElementById("inputTwitterImage"),
    twitterImageAlt: document.getElementById("inputTwitterAlt"),
    twitterSite: document.getElementById("inputTwitterSite"),
    twitterCreator: document.getElementById("inputTwitterCreator"),

    // Additional
    favicon: document.getElementById("inputFavicon"),
    appleTouchIcon: document.getElementById("inputAppleTouchIcon"),
    googleVerification: document.getElementById("inputGoogleVerification"),
    bingVerification: document.getElementById("inputBingVerification"),
    pinterestVerification: document.getElementById(
      "inputPinterestVerification",
    ),
    yandexVerification: document.getElementById("inputYandexVerification"),
    referrerPolicy: document.getElementById("inputReferrerPolicy"),
    colorScheme: document.getElementById("inputColorScheme"),

    // Output options
    includeComments: document.getElementById("optIncludeComments"),
    minifyOutput: document.getElementById("optMinifyOutput"),
  };

  // Preview elements
  const previewElements = {
    // Google SERP
    serpUrl: document.getElementById("serpUrlDisplay"),
    serpTitle: document.getElementById("serpTitleDisplay"),
    serpDesc: document.getElementById("serpDescDisplay"),
    serpFavicon: document.getElementById("serpFavicon"),

    // Facebook / OG
    ogImage: document.getElementById("ogPreviewImage"),
    ogPlaceholder: document.getElementById("ogPlaceholderBox"),
    ogDomain: document.getElementById("ogDomainDisplay"),
    ogTitle: document.getElementById("ogTitleDisplay"),
    ogDesc: document.getElementById("ogDescDisplay"),

    // Twitter / X
    twitterImage: document.getElementById("twitterPreviewImage"),
    twitterPlaceholder: document.getElementById("twitterPlaceholderBox"),
    twitterDomain: document.getElementById("twitterDomainDisplay"),
    twitterTitle: document.getElementById("twitterTitleDisplay"),
    twitterDesc: document.getElementById("twitterDescDisplay"),

    // Code output
    codeOutput: document.getElementById("codeOutput"),

    // Counters
    titleCounter: document.getElementById("titleCharCount"),
    descCounter: document.getElementById("descCharCount"),

    // SEO Health
    healthScoreVal: document.getElementById("healthScoreValue"),
    healthBarFill: document.getElementById("healthBarFill"),
    checkTitle: document.getElementById("checkTitle"),
    checkDesc: document.getElementById("checkDesc"),
    checkOg: document.getElementById("checkOg"),
    checkTwitter: document.getElementById("checkTwitter"),
    checkCanonical: document.getElementById("checkCanonical"),
    checkRobots: document.getElementById("checkRobots"),
  };

  // Synchronize color swatch with text input
  if (formElements.themeColor && formElements.themeColorSwatch) {
    formElements.themeColor.addEventListener("input", function () {
      if (/^#[0-9A-F]{6}$/i.test(this.value)) {
        formElements.themeColorSwatch.value = this.value;
      }
      updateGenerator();
    });

    formElements.themeColorSwatch.addEventListener("input", function () {
      formElements.themeColor.value = this.value;
      updateGenerator();
    });
  }

  // Switch form tabs (SEO, Open Graph, Twitter, Verification)
  const formTabBtns = document.querySelectorAll(".form-tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  formTabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const targetPanelId = this.getAttribute("data-target-panel");
      formTabBtns.forEach((b) => b.classList.remove("active"));
      tabPanels.forEach((p) => p.classList.remove("active"));

      this.classList.add("active");
      const panel = document.getElementById(targetPanelId);
      if (panel) panel.classList.add("active");
    });
  });

  // Switch preview tabs (Google, Facebook, Twitter)
  const previewTabBtns = document.querySelectorAll(".preview-tab-btn");
  const previewPanels = document.querySelectorAll(".preview-target-panel");

  previewTabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const targetPreviewId = this.getAttribute("data-preview-target");
      previewTabBtns.forEach((b) => b.classList.remove("active"));
      previewPanels.forEach((p) => (p.style.display = "none"));

      this.classList.add("active");
      const targetPanel = document.getElementById(targetPreviewId);
      if (targetPanel) targetPanel.style.display = "block";
    });
  });

  // Sync SEO to Social Button
  const syncSocialBtn = document.getElementById("syncSocialBtn");
  if (syncSocialBtn) {
    syncSocialBtn.addEventListener("click", function () {
      const titleVal = formElements.title
        ? formElements.title.value.trim()
        : "";
      const descVal = formElements.description
        ? formElements.description.value.trim()
        : "";
      const urlVal = formElements.canonical
        ? formElements.canonical.value.trim()
        : "";

      if (formElements.ogTitle) formElements.ogTitle.value = titleVal;
      if (formElements.ogDescription)
        formElements.ogDescription.value = descVal;
      if (formElements.ogUrl) formElements.ogUrl.value = urlVal;

      if (formElements.twitterTitle) formElements.twitterTitle.value = titleVal;
      if (formElements.twitterDescription)
        formElements.twitterDescription.value = descVal;

      updateGenerator();
      showToast(
        "Synced title, description & canonical URL to Open Graph and Twitter!",
      );
    });
  }

  // Preset Template Chips
  const presetChips = document.querySelectorAll(".preset-chip");
  const PRESET_DATA = {
    blog: {
      title: "10 Essential Principles for High-Performance Web Applications",
      desc: "Discover practical techniques for reducing load times, optimizing CSS architecture, and delivering lightning-fast web experiences.",
      keywords:
        "web performance, frontend, speed optimization, core web vitals",
      author: "Alex Mercer",
      canonical: "https://example.com/blog/web-performance-principles",
      ogType: "article",
      ogImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
      ogWidth: "1200",
      ogHeight: "630",
      ogSiteName: "TechCraft Magazine",
      twitterCard: "summary_large_image",
      twitterSite: "@techcraft",
    },
    saas: {
      title: "PulseAnalytics — Privacy-First Product & User Behavior Insights",
      desc: "Understand how users interact with your digital products without tracking personal data. Simple, powerful, and compliant analytics for modern teams.",
      keywords: "saas, product analytics, privacy, conversion tracking",
      author: "PulseAnalytics Inc.",
      canonical: "https://example.com/",
      ogType: "website",
      ogImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
      ogWidth: "1200",
      ogHeight: "630",
      ogSiteName: "PulseAnalytics",
      twitterCard: "summary_large_image",
      twitterSite: "@pulseanalytics",
    },
    ecommerce: {
      title: "Minimalist Ergonomic Wool Desk Mat — Studio Workspace Collection",
      desc: "Crafted from premium merino wool felt with natural cork backing. Protect your desktop in comfort with timeless Nordic craftsmanship.",
      keywords:
        "desk mat, ergonomic accessories, office decor, minimalist workspace",
      author: "Studio Nordic",
      canonical: "https://example.com/products/merino-desk-mat",
      ogType: "product",
      ogImage:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=1200&h=630&fit=crop",
      ogWidth: "1200",
      ogHeight: "630",
      ogSiteName: "Studio Nordic Goods",
      twitterCard: "summary_large_image",
      twitterSite: "@studionordic",
    },
    portfolio: {
      title: "Jordan Vance — Senior Full-Stack Architect & Interface Designer",
      desc: "Portfolio and selected engineering projects by Jordan Vance. Specializing in high-throughput web applications, accessible design systems, and cloud infrastructure.",
      keywords:
        "software engineer, design systems, portfolio, full stack developer",
      author: "Jordan Vance",
      canonical: "https://example.com/portfolio",
      ogType: "profile",
      ogImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop",
      ogWidth: "1200",
      ogHeight: "630",
      ogSiteName: "Jordan Vance Portfolio",
      twitterCard: "summary_large_image",
      twitterSite: "@jordanvance",
    },
  };

  presetChips.forEach((chip) => {
    chip.addEventListener("click", function () {
      const presetKey = this.getAttribute("data-preset");
      const data = PRESET_DATA[presetKey];
      if (!data) return;

      if (formElements.title) formElements.title.value = data.title;
      if (formElements.description) formElements.description.value = data.desc;
      if (formElements.keywords) formElements.keywords.value = data.keywords;
      if (formElements.author) formElements.author.value = data.author;
      if (formElements.canonical) formElements.canonical.value = data.canonical;
      if (formElements.ogType) formElements.ogType.value = data.ogType;
      if (formElements.ogImage) formElements.ogImage.value = data.ogImage;
      if (formElements.ogImageWidth)
        formElements.ogImageWidth.value = data.ogWidth;
      if (formElements.ogImageHeight)
        formElements.ogImageHeight.value = data.ogHeight;
      if (formElements.ogSiteName)
        formElements.ogSiteName.value = data.ogSiteName;
      if (formElements.twitterCard)
        formElements.twitterCard.value = data.twitterCard;
      if (formElements.twitterSite)
        formElements.twitterSite.value = data.twitterSite;

      // Also populate Open Graph and Twitter
      if (formElements.ogTitle) formElements.ogTitle.value = data.title;
      if (formElements.ogDescription)
        formElements.ogDescription.value = data.desc;
      if (formElements.ogUrl) formElements.ogUrl.value = data.canonical;
      if (formElements.twitterTitle)
        formElements.twitterTitle.value = data.title;
      if (formElements.twitterDescription)
        formElements.twitterDescription.value = data.desc;
      if (formElements.twitterImage)
        formElements.twitterImage.value = data.ogImage;

      updateGenerator();
      showToast(`Applied ${this.textContent.trim()} template preset!`);
    });
  });

  // Attach real-time input listeners to all form controls
  Object.values(formElements).forEach((element) => {
    if (element) {
      const eventType =
        element.type === "checkbox" || element.tagName === "SELECT"
          ? "change"
          : "input";
      element.addEventListener(eventType, updateGenerator);
    }
  });

  // ==========================================================================
  // 5. GENERATOR & LIVE PREVIEW ENGINE
  // ==========================================================================
  function updateGenerator() {
    const values = {
      title: formElements.title ? formElements.title.value.trim() : "",
      desc: formElements.description
        ? formElements.description.value.trim()
        : "",
      keywords: formElements.keywords ? formElements.keywords.value.trim() : "",
      author: formElements.author ? formElements.author.value.trim() : "",
      canonical: formElements.canonical
        ? formElements.canonical.value.trim()
        : "",
      lang: formElements.language ? formElements.language.value.trim() : "en",
      charset: formElements.charset
        ? formElements.charset.value.trim()
        : "UTF-8",
      robots: formElements.robots
        ? formElements.robots.value.trim()
        : "index, follow",
      themeColor: formElements.themeColor
        ? formElements.themeColor.value.trim()
        : "#4F46E5",
      viewport: formElements.viewport
        ? formElements.viewport.value.trim()
        : "width=device-width, initial-scale=1.0",

      ogTitle: formElements.ogTitle ? formElements.ogTitle.value.trim() : "",
      ogDesc: formElements.ogDescription
        ? formElements.ogDescription.value.trim()
        : "",
      ogUrl: formElements.ogUrl ? formElements.ogUrl.value.trim() : "",
      ogImage: formElements.ogImage ? formElements.ogImage.value.trim() : "",
      ogWidth: formElements.ogImageWidth
        ? formElements.ogImageWidth.value.trim()
        : "",
      ogHeight: formElements.ogImageHeight
        ? formElements.ogImageHeight.value.trim()
        : "",
      ogAlt: formElements.ogImageAlt
        ? formElements.ogImageAlt.value.trim()
        : "",
      ogType: formElements.ogType
        ? formElements.ogType.value.trim()
        : "website",
      ogSiteName: formElements.ogSiteName
        ? formElements.ogSiteName.value.trim()
        : "",
      ogLocale: formElements.ogLocale
        ? formElements.ogLocale.value.trim()
        : "en_US",

      twitterCard: formElements.twitterCard
        ? formElements.twitterCard.value.trim()
        : "summary_large_image",
      twitterTitle: formElements.twitterTitle
        ? formElements.twitterTitle.value.trim()
        : "",
      twitterDesc: formElements.twitterDescription
        ? formElements.twitterDescription.value.trim()
        : "",
      twitterImage: formElements.twitterImage
        ? formElements.twitterImage.value.trim()
        : "",
      twitterAlt: formElements.twitterImageAlt
        ? formElements.twitterImageAlt.value.trim()
        : "",
      twitterSite: formElements.twitterSite
        ? formElements.twitterSite.value.trim()
        : "",
      twitterCreator: formElements.twitterCreator
        ? formElements.twitterCreator.value.trim()
        : "",

      favicon: formElements.favicon ? formElements.favicon.value.trim() : "",
      appleTouchIcon: formElements.appleTouchIcon
        ? formElements.appleTouchIcon.value.trim()
        : "",
      googleVerification: formElements.googleVerification
        ? formElements.googleVerification.value.trim()
        : "",
      bingVerification: formElements.bingVerification
        ? formElements.bingVerification.value.trim()
        : "",
      pinterestVerification: formElements.pinterestVerification
        ? formElements.pinterestVerification.value.trim()
        : "",
      yandexVerification: formElements.yandexVerification
        ? formElements.yandexVerification.value.trim()
        : "",
      referrerPolicy: formElements.referrerPolicy
        ? formElements.referrerPolicy.value.trim()
        : "no-referrer-when-downgrade",
      colorScheme: formElements.colorScheme
        ? formElements.colorScheme.value.trim()
        : "light dark",

      includeComments: formElements.includeComments
        ? formElements.includeComments.checked
        : true,
      minifyOutput: formElements.minifyOutput
        ? formElements.minifyOutput.checked
        : false,
    };

    // 1. Update Character Counters
    updateCounters(values.title, values.desc);

    // 2. Update Live Visual Previews
    updatePreviews(values);

    // 3. Update SEO Health Score & Checklist
    updateHealthScore(values);

    // 4. Generate Code Output HTML
    renderGeneratedCode(values);
  }

  function updateCounters(title, desc) {
    if (previewElements.titleCounter) {
      const len = title.length;
      previewElements.titleCounter.textContent = `${len}/60`;
      previewElements.titleCounter.className = "char-counter";
      if (len >= 45 && len <= 60) {
        previewElements.titleCounter.classList.add("good");
      } else if (len > 60) {
        previewElements.titleCounter.classList.add("over");
      } else if (len > 0) {
        previewElements.titleCounter.classList.add("warning");
      }
    }

    if (previewElements.descCounter) {
      const len = desc.length;
      previewElements.descCounter.textContent = `${len}/160`;
      previewElements.descCounter.className = "char-counter";
      if (len >= 120 && len <= 160) {
        previewElements.descCounter.classList.add("good");
      } else if (len > 160) {
        previewElements.descCounter.classList.add("over");
      } else if (len > 0) {
        previewElements.descCounter.classList.add("warning");
      }
    }
  }

  function parseDomain(urlStr) {
    if (!urlStr) return "example.com";
    try {
      const parsed = new URL(
        urlStr.startsWith("http") ? urlStr : `https://${urlStr}`,
      );
      return parsed.hostname.replace(/^www\./, "");
    } catch {
      return urlStr.replace(/^https?:\/\//, "").split("/")[0] || "example.com";
    }
  }

  function updatePreviews(val) {
    const domain = parseDomain(
      val.canonical || val.ogUrl || "https://example.com",
    );
    const effectiveTitle =
      val.title || "Page Title — Concise, descriptive SEO title";
    const effectiveDesc =
      val.desc ||
      "Provide an informative meta description between 120 and 160 characters to optimize your search engine snippet presentation.";

    // Google SERP
    if (previewElements.serpUrl) {
      previewElements.serpUrl.textContent = `${domain} › ...`;
    }
    if (previewElements.serpTitle) {
      previewElements.serpTitle.textContent = effectiveTitle;
    }
    if (previewElements.serpDesc) {
      previewElements.serpDesc.textContent = effectiveDesc;
    }

    // Facebook / Open Graph Preview
    const ogTitleText =
      val.ogTitle || val.title || "Open Graph Title for Social Media";
    const ogDescText =
      val.ogDesc ||
      val.desc ||
      "Brief engaging summary for social platforms like Facebook and LinkedIn.";
    const ogImgUrl = val.ogImage;

    if (previewElements.ogDomain)
      previewElements.ogDomain.textContent = domain.toUpperCase();
    if (previewElements.ogTitle)
      previewElements.ogTitle.textContent = ogTitleText;
    if (previewElements.ogDesc) previewElements.ogDesc.textContent = ogDescText;

    if (previewElements.ogImage && previewElements.ogPlaceholder) {
      if (ogImgUrl) {
        previewElements.ogImage.src = ogImgUrl;
        previewElements.ogImage.style.display = "block";
        previewElements.ogPlaceholder.style.display = "none";
        previewElements.ogImage.onerror = function () {
          previewElements.ogImage.style.display = "none";
          previewElements.ogPlaceholder.style.display = "flex";
          previewElements.ogPlaceholder.textContent =
            "Failed to load preview image";
        };
      } else {
        previewElements.ogImage.style.display = "none";
        previewElements.ogPlaceholder.style.display = "flex";
        previewElements.ogPlaceholder.textContent =
          "1200 × 630 Open Graph Image Preview";
      }
    }

    // Twitter / X Preview
    const twTitleText =
      val.twitterTitle || val.ogTitle || val.title || "Twitter / X Card Title";
    const twDescText =
      val.twitterDesc ||
      val.ogDesc ||
      val.desc ||
      "Summary designed specifically for Twitter feed cards.";
    const twImgUrl = val.twitterImage || val.ogImage;

    if (previewElements.twitterDomain)
      previewElements.twitterDomain.textContent = domain;
    if (previewElements.twitterTitle)
      previewElements.twitterTitle.textContent = twTitleText;
    if (previewElements.twitterDesc)
      previewElements.twitterDesc.textContent = twDescText;

    if (previewElements.twitterImage && previewElements.twitterPlaceholder) {
      if (twImgUrl) {
        previewElements.twitterImage.src = twImgUrl;
        previewElements.twitterImage.style.display = "block";
        previewElements.twitterPlaceholder.style.display = "none";
        previewElements.twitterImage.onerror = function () {
          previewElements.twitterImage.style.display = "none";
          previewElements.twitterPlaceholder.style.display = "flex";
          previewElements.twitterPlaceholder.textContent =
            "Failed to load card image";
        };
      } else {
        previewElements.twitterImage.style.display = "none";
        previewElements.twitterPlaceholder.style.display = "flex";
        previewElements.twitterPlaceholder.textContent =
          "Twitter Summary Card Image Preview";
      }
    }
  }

  function updateHealthScore(val) {
    let score = 0;
    const checks = {
      title: false,
      desc: false,
      og: false,
      twitter: false,
      canonical: false,
      robots: false,
    };

    // Title score (25 pts)
    if (val.title.length >= 30 && val.title.length <= 65) {
      score += 25;
      checks.title = true;
    } else if (val.title.length > 0) {
      score += 15;
    }

    // Description score (25 pts)
    if (val.desc.length >= 70 && val.desc.length <= 165) {
      score += 25;
      checks.desc = true;
    } else if (val.desc.length > 0) {
      score += 15;
    }

    // Canonical check (15 pts)
    if (
      val.canonical.startsWith("http://") ||
      val.canonical.startsWith("https://")
    ) {
      score += 15;
      checks.canonical = true;
    }

    // OG check (15 pts)
    if (val.ogTitle || (val.ogImage && val.ogImage.startsWith("http"))) {
      score += 15;
      checks.og = true;
    }

    // Twitter Card check (10 pts)
    if (val.twitterCard && (val.twitterTitle || val.twitterSite)) {
      score += 10;
      checks.twitter = true;
    }

    // Robots check (10 pts)
    if (val.robots && val.viewport) {
      score += 10;
      checks.robots = true;
    }

    // Update UI
    if (previewElements.healthScoreVal) {
      previewElements.healthScoreVal.textContent = `${score}%`;
    }
    if (previewElements.healthBarFill) {
      previewElements.healthBarFill.style.width = `${score}%`;
      if (score >= 80) {
        previewElements.healthBarFill.style.background =
          "linear-gradient(90deg, #10B981, #059669)";
      } else if (score >= 50) {
        previewElements.healthBarFill.style.background =
          "linear-gradient(90deg, #F59E0B, #10B981)";
      } else {
        previewElements.healthBarFill.style.background =
          "linear-gradient(90deg, #EF4444, #F59E0B)";
      }
    }

    setChecklistItem(
      previewElements.checkTitle,
      checks.title,
      "Title optimal length",
    );
    setChecklistItem(
      previewElements.checkDesc,
      checks.desc,
      "Meta description optimal",
    );
    setChecklistItem(
      previewElements.checkCanonical,
      checks.canonical,
      "Canonical URL valid",
    );
    setChecklistItem(previewElements.checkOg, checks.og, "Open Graph tags set");
    setChecklistItem(
      previewElements.checkTwitter,
      checks.twitter,
      "Twitter Card configured",
    );
    setChecklistItem(
      previewElements.checkRobots,
      checks.robots,
      "Robots & Viewport valid",
    );
  }

  function setChecklistItem(el, passed, labelText) {
    if (!el) return;
    el.className = `health-check-item ${passed ? "pass" : "fail"}`;
    el.innerHTML = passed
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${labelText}</span>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> <span>${labelText}</span>`;
  }

  function renderGeneratedCode(val) {
    if (!previewElements.codeOutput) return;

    const lines = [];

    const addComment = (comment) => {
      if (val.includeComments && !val.minifyOutput) {
        lines.push(`<!-- ${comment} -->`);
      }
    };

    const addTag = (tag) => {
      lines.push(tag);
    };

    // Primary Meta
    addComment("Primary Meta Tags");
    if (val.charset) addTag(`<meta charset="${escapeHtml(val.charset)}">`);
    if (val.viewport)
      addTag(`<meta name="viewport" content="${escapeHtml(val.viewport)}">`);
    if (val.title) addTag(`<title>${escapeHtml(val.title)}</title>`);
    if (val.title)
      addTag(`<meta name="title" content="${escapeHtml(val.title)}">`);
    if (val.desc)
      addTag(`<meta name="description" content="${escapeHtml(val.desc)}">`);
    if (val.keywords)
      addTag(`<meta name="keywords" content="${escapeHtml(val.keywords)}">`);
    if (val.author)
      addTag(`<meta name="author" content="${escapeHtml(val.author)}">`);
    if (val.robots)
      addTag(`<meta name="robots" content="${escapeHtml(val.robots)}">`);
    if (val.canonical)
      addTag(`<link rel="canonical" href="${escapeHtml(val.canonical)}">`);
    if (val.themeColor)
      addTag(
        `<meta name="theme-color" content="${escapeHtml(val.themeColor)}">`,
      );
    if (val.colorScheme)
      addTag(
        `<meta name="color-scheme" content="${escapeHtml(val.colorScheme)}">`,
      );
    if (val.referrerPolicy)
      addTag(
        `<meta name="referrer" content="${escapeHtml(val.referrerPolicy)}">`,
      );

    // Open Graph
    addComment("Open Graph / Facebook");
    if (val.ogType)
      addTag(`<meta property="og:type" content="${escapeHtml(val.ogType)}">`);
    if (val.ogUrl || val.canonical)
      addTag(
        `<meta property="og:url" content="${escapeHtml(val.ogUrl || val.canonical)}">`,
      );
    if (val.ogTitle || val.title)
      addTag(
        `<meta property="og:title" content="${escapeHtml(val.ogTitle || val.title)}">`,
      );
    if (val.ogDesc || val.desc)
      addTag(
        `<meta property="og:description" content="${escapeHtml(val.ogDesc || val.desc)}">`,
      );
    if (val.ogImage)
      addTag(`<meta property="og:image" content="${escapeHtml(val.ogImage)}">`);
    if (val.ogWidth)
      addTag(
        `<meta property="og:image:width" content="${escapeHtml(val.ogWidth)}">`,
      );
    if (val.ogHeight)
      addTag(
        `<meta property="og:image:height" content="${escapeHtml(val.ogHeight)}">`,
      );
    if (val.ogAlt)
      addTag(
        `<meta property="og:image:alt" content="${escapeHtml(val.ogAlt)}">`,
      );
    if (val.ogSiteName)
      addTag(
        `<meta property="og:site_name" content="${escapeHtml(val.ogSiteName)}">`,
      );
    if (val.ogLocale)
      addTag(
        `<meta property="og:locale" content="${escapeHtml(val.ogLocale)}">`,
      );

    // Twitter
    addComment("Twitter / X");
    if (val.twitterCard)
      addTag(
        `<meta name="twitter:card" content="${escapeHtml(val.twitterCard)}">`,
      );
    if (val.twitterUrl || val.canonical)
      addTag(
        `<meta name="twitter:url" content="${escapeHtml(val.twitterUrl || val.canonical)}">`,
      );
    if (val.twitterTitle || val.title)
      addTag(
        `<meta name="twitter:title" content="${escapeHtml(val.twitterTitle || val.title)}">`,
      );
    if (val.twitterDesc || val.desc)
      addTag(
        `<meta name="twitter:description" content="${escapeHtml(val.twitterDesc || val.desc)}">`,
      );
    if (val.twitterImage || val.ogImage)
      addTag(
        `<meta name="twitter:image" content="${escapeHtml(val.twitterImage || val.ogImage)}">`,
      );
    if (val.twitterAlt || val.ogAlt)
      addTag(
        `<meta name="twitter:image:alt" content="${escapeHtml(val.twitterAlt || val.ogAlt)}">`,
      );
    if (val.twitterSite)
      addTag(
        `<meta name="twitter:site" content="${escapeHtml(val.twitterSite)}">`,
      );
    if (val.twitterCreator)
      addTag(
        `<meta name="twitter:creator" content="${escapeHtml(val.twitterCreator)}">`,
      );

    // Verification & Icons
    const hasVerification =
      val.googleVerification ||
      val.bingVerification ||
      val.pinterestVerification ||
      val.yandexVerification;
    if (hasVerification) {
      addComment("Search Engine Verification");
      if (val.googleVerification)
        addTag(
          `<meta name="google-site-verification" content="${escapeHtml(val.googleVerification)}">`,
        );
      if (val.bingVerification)
        addTag(
          `<meta name="msvalidate.01" content="${escapeHtml(val.bingVerification)}">`,
        );
      if (val.pinterestVerification)
        addTag(
          `<meta name="p:domain_verify" content="${escapeHtml(val.pinterestVerification)}">`,
        );
      if (val.yandexVerification)
        addTag(
          `<meta name="yandex-verification" content="${escapeHtml(val.yandexVerification)}">`,
        );
    }

    if (val.favicon || val.appleTouchIcon) {
      addComment("Favicon & App Icons");
      if (val.favicon)
        addTag(
          `<link rel="icon" type="image/x-icon" href="${escapeHtml(val.favicon)}">`,
        );
      if (val.appleTouchIcon)
        addTag(
          `<link rel="apple-touch-icon" href="${escapeHtml(val.appleTouchIcon)}">`,
        );
    }

    let resultHtml = "";
    if (val.minifyOutput) {
      resultHtml = lines.join("").replace(/\s+/g, " ").trim();
    } else {
      resultHtml = lines.join("\n");
    }

    // Syntax highlight preview
    previewElements.codeOutput.innerHTML = highlightHtml(resultHtml);
    previewElements.codeOutput.setAttribute("data-raw-code", resultHtml);
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function highlightHtml(code) {
    return code
      .replace(/(&lt;!--.*?--&gt;)/g, '<span class="token-comment">$1</span>')
      .replace(/(&lt;\/?[a-z1-6]+)/gi, '<span class="token-tag">$1</span>')
      .replace(/([a-z0-9_:-]+)=/gi, '<span class="token-attr">$1</span>=')
      .replace(
        /(&quot;.*?&quot;|&#039;.*?&#039;)/g,
        '<span class="token-val">$1</span>',
      )
      .replace(/(&gt;)/g, '<span class="token-tag">$1</span>');
  }

  // ==========================================================================
  // 6. ACTION BUTTONS: COPY, DOWNLOAD, RESET
  // ==========================================================================
  const copyBtn = document.getElementById("copyTagsBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", async function () {
      const rawCode = previewElements.codeOutput
        ? previewElements.codeOutput.getAttribute("data-raw-code") || ""
        : "";
      if (!rawCode) return;

      try {
        await navigator.clipboard.writeText(rawCode);
        showToast("Meta tags copied to clipboard!");
        const origText = copyBtn.innerHTML;
        copyBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Copied!</span>
        `;
        setTimeout(() => {
          copyBtn.innerHTML = origText;
        }, 2000);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = rawCode;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        showToast("Meta tags copied to clipboard!");
      }
    });
  }

  const downloadBtn = document.getElementById("downloadTagsBtn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
      const rawCode = previewElements.codeOutput
        ? previewElements.codeOutput.getAttribute("data-raw-code") || ""
        : "";
      if (!rawCode) return;

      const blob = new Blob([rawCode], { type: "text/html;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "meta-tags.html";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      showToast("Downloaded meta-tags.html");
    });
  }

  const resetBtn = document.getElementById("resetTagsBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      if (
        confirm(
          "Are you sure you want to reset all meta tag fields to defaults?",
        )
      ) {
        document.getElementById("metaGeneratorForm").reset();
        if (formElements.themeColor) formElements.themeColor.value = "#4F46E5";
        if (formElements.themeColorSwatch)
          formElements.themeColorSwatch.value = "#4F46E5";
        updateGenerator();
        showToast("Workspace reset to defaults.");
      }
    });
  }

  // Toast notification helper
  const toastNotice = document.getElementById("toastNotice");
  const toastMessage = document.getElementById("toastMessage");
  let toastTimer = null;

  function showToast(msg) {
    if (!toastNotice || !toastMessage) return;
    toastMessage.textContent = msg;
    toastNotice.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove("is-visible");
    }, 3200);
  }

  // ==========================================================================
  // 7. FAQ ACCORDION CONTROLLER
  // ==========================================================================
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-question-btn");
    if (btn) {
      btn.addEventListener("click", function () {
        const isOpen = item.classList.contains("is-open");
        // Toggle current item
        if (isOpen) {
          item.classList.remove("is-open");
          btn.setAttribute("aria-expanded", "false");
        } else {
          item.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    }
  });

  // ==========================================================================
  // 8. LIGHTWEIGHT 3D HERO TILT (PURE CSS 3D + VANILLA JS, MOTION SAFE)
  // ==========================================================================
  const heroWrapper = document.getElementById("heroVisualWrapper");
  const heroCard = document.getElementById("hero3dCard");

  if (heroWrapper && heroCard) {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!prefersReducedMotion) {
      heroWrapper.addEventListener("pointermove", function (e) {
        const rect = heroWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -9;
        const rotateY = ((x - centerX) / centerX) * 9;

        heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      heroWrapper.addEventListener("pointerleave", function () {
        heroCard.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      });
    }
  }

  // ==========================================================================
  // 9. INITIALIZATION
  // ==========================================================================
  document.addEventListener("DOMContentLoaded", function () {
    // Initial run to generate baseline tags & previews
    updateGenerator();
  });

  // Also run immediately if DOM is already parsed
  if (
    document.readyState === "interactive" ||
    document.readyState === "complete"
  ) {
    updateGenerator();
  }
})();
