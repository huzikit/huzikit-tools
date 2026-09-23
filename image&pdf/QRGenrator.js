/**
 * HUZIKIT.COM — QR CODE GENERATOR JAVASCRIPT
 * Complete, production-ready, client-side application logic.
 * Modular, robust, fully accessible, and resilient.
 */

(function () {
  "use strict";

  /* ==========================================================================
     GLOBAL HUZIKIT 30 TOOLS CATALOG (FOR INSTANT SEARCH)
     ========================================================================== */
  const HUZIKIT_TOOLS = [
    // Text Tools
    {
      name: "Word Counter",
      cat: "Text Tools",
      url: "/texttools/word-counter.html",
      keywords: "words characters count text density",
    },
    {
      name: "Character Counter",
      cat: "Text Tools",
      url: "/texttools/character-counter.html",
      keywords: "letters length characters count",
    },
    {
      name: "Case Converter",
      cat: "Text Tools",
      url: "/texttools/case-converter.html",
      keywords: "uppercase lowercase title case sentence camel",
    },
    {
      name: "Remove Duplicate Lines",
      cat: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
      keywords: "dedupe list clean lines duplicate",
    },
    {
      name: "Lorem Ipsum Generator",
      cat: "Text Tools",
      url: "/texttools/loremipsumgenerator.html",
      keywords: "dummy text placeholder filler paragraphs",
    },
    {
      name: "Password Generator",
      cat: "Text Tools",
      url: "/texttools/passwordgenerator.html",
      keywords: "random secure password credentials generator",
    },
    {
      name: "Text Reverser",
      cat: "Text Tools",
      url: "/texttools/text-reverser.html",
      keywords: "backward flip words reverse text mirror",
    },
    {
      name: "Online Notepad",
      cat: "Text Tools",
      url: "/texttools/onlinenotepad.html",
      keywords: "notes scratchpad write autosave text",
    },

    // Calculators
    {
      name: "Age Calculator",
      cat: "Calculators",
      url: "/calculator/agecalculator.html",
      keywords: "birthday years days months age birth",
    },
    {
      name: "BMI Calculator",
      cat: "Calculators",
      url: "/calculator/bmi-calculator.html",
      keywords: "body mass index health weight fitness",
    },
    {
      name: "Percentage Calculator",
      cat: "Calculators",
      url: "/calculator/percentage-calculator.html",
      keywords: "math percent increase decrease ratio",
    },
    {
      name: "Calorie Calculator",
      cat: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
      keywords: "tdee bmr nutrition energy weight loss",
    },
    {
      name: "Discount Calculator",
      cat: "Calculators",
      url: "/calculator/discount-calculator.html",
      keywords: "sale coupon price off percent discount",
    },
    {
      name: "Savings & Goal Calculator",
      cat: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
      keywords: "finance interest deposit growth compound",
    },
    {
      name: "Tip Calculator",
      cat: "Calculators",
      url: "/calculators/tip-calculator.html",
      keywords: "bill split dining gratuity percentage",
    },
    {
      name: "GPA Calculator",
      cat: "Calculators",
      url: "/calculator/gpa-calculator.html",
      keywords: "grade college school academic credits",
    },

    // Image & PDF
    {
      name: "Image Compressor",
      cat: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
      keywords: "shrink compress reduce photo optimize",
    },
    {
      name: "Image Resizer",
      cat: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
      keywords: "scale dimensions pixels crop resize",
    },
    {
      name: "PDF to Word",
      cat: "Image & PDF",
      url: "/image&pdf/pdf-to-word.html",
      keywords: "document convert docx extract pdf",
    },
    {
      name: "JPG to PNG",
      cat: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
      keywords: "image format convert jpeg transparency",
    },
    {
      name: "Color Picker / HEX",
      cat: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
      keywords: "rgb hsl palette dropper hex color",
    },
    {
      name: "QR Code Generator",
      cat: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
      keywords: "qr code barcode generator create wifi vcard url",
    },

    // Developer
    {
      name: "JSON Formatter",
      cat: "Developer",
      url: "/developertools/JSONFORMATTER.html",
      keywords: "beautify validate minify parse json",
    },
    {
      name: "Base64 Encoder/Decoder",
      cat: "Developer",
      url: "/developertools/base64encoderdecoder.html",
      keywords: "binary string encode decode base64",
    },
    {
      name: "URL Encoder/Decoder",
      cat: "Developer",
      url: "/developertools/urlencoderdecoder.html",
      keywords: "uri percent encoding sanitize",
    },
    {
      name: "Meta Tag Generator",
      cat: "Developer",
      url: "/developertools/meta-tag-generator.html",
      keywords: "seo open graph twitter social header",
    },
    {
      name: "Regex Tester",
      cat: "Developer",
      url: "/developertools/regextester.html",
      keywords: "regular expression match patterns test",
    },
    {
      name: "Markdown to HTML",
      cat: "Developer",
      url: "/developertools/markdownhtml.html",
      keywords: "converter md parse rich text syntax",
    },
    {
      name: "CSS Minifier",
      cat: "Developer",
      url: "/developertools/cssminifier.html",
      keywords: "compress clean stylesheet code optimizer",
    },
    {
      name: "Unix Timestamp",
      cat: "Developer",
      url: "/developertools/unixtimestamp.html",
      keywords: "epoch time date converter milliseconds",
    },
  ];

  /* ==========================================================================
     APPLICATION STATE
     ========================================================================== */
  const AppState = {
    currentType: "url",
    qrSize: 512,
    errorCorrection: "M",
    margin: 4,
    fgColor: "#15132B",
    bgColor: "#FFFFFF",
    logoImage: null,
    logoFileName: "",
    logoFileSize: "",
    logoSizeRatio: 0.22, // 22% of QR dimension
    encodedString: "",
    lastGeneratedMatrix: null,
    moduleCount: 0,
    contrastRatio: 21.0,
  };

  /* ==========================================================================
     INITIALIZATION ROUTINE
     ========================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initMobileMenu();
    initSearch();
    initHero3DCard();
    initQRTypeSelector();
    initCustomizationControls();
    initLogoUpload();
    initActionButtons();
    initExportHandlers();
    initFAQAccordions();

    // Initial QR Code Generation
    generateQR();
  });

  /* ==========================================================================
     1. NAVIGATION & DROPDOWNS
     ========================================================================== */
  function initNavigation() {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      const trigger = item.querySelector(".nav-trigger");
      if (!trigger) return;

      // Keyboard accessibility for dropdown triggers
      trigger.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const dropdown = item.querySelector(".nav-dropdown");
          if (dropdown) {
            const isVisible =
              window.getComputedStyle(dropdown).visibility === "visible";
            dropdown.style.opacity = isVisible ? "0" : "1";
            dropdown.style.visibility = isVisible ? "hidden" : "visible";
            dropdown.style.transform = isVisible
              ? "translateY(8px)"
              : "translateY(0)";
          }
        }
      });
    });
  }

  /* ==========================================================================
     2. MOBILE MENU & ACCORDIONS
     ========================================================================== */
  function initMobileMenu() {
    const triggerBtn = document.getElementById("mobileMenuTrigger");
    const drawer = document.getElementById("mobileNav");
    const backdrop = document.getElementById("mobileNavBackdrop");
    const closeBtn = document.getElementById("mobileNavCloseBtn");

    if (!triggerBtn || !drawer || !backdrop) return;

    function openMobileMenu() {
      drawer.classList.add("open");
      backdrop.classList.add("open");
      triggerBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }

    function closeMobileMenu() {
      drawer.classList.remove("open");
      backdrop.classList.remove("open");
      triggerBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    triggerBtn.addEventListener("click", () => {
      const isOpen = drawer.classList.contains("open");
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    if (closeBtn) closeBtn.addEventListener("click", closeMobileMenu);
    backdrop.addEventListener("click", closeMobileMenu);

    // Close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("open")) {
        closeMobileMenu();
      }
    });

    // Close on link click
    const mobileLinks = drawer.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    // Mobile Category Accordions
    const accordionButtons = drawer.querySelectorAll(".mobile-accordion-btn");
    accordionButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const isExpanded = btn.getAttribute("aria-expanded") === "true";
        const panel = btn.nextElementSibling;
        if (!panel) return;

        // Close other panels in mobile menu
        accordionButtons.forEach((otherBtn) => {
          if (otherBtn !== btn) {
            otherBtn.setAttribute("aria-expanded", "false");
            if (otherBtn.nextElementSibling) {
              otherBtn.nextElementSibling.classList.remove("open");
            }
          }
        });

        btn.setAttribute("aria-expanded", String(!isExpanded));
        panel.classList.toggle("open", !isExpanded);
      });
    });
  }

  /* ==========================================================================
     3. SEARCH SYSTEM (CTRL+K / CMD+K)
     ========================================================================== */
  function initSearch() {
    const searchTrigger = document.getElementById("searchTrigger");
    const mobileSearchTrigger = document.getElementById("mobileSearchTrigger");
    const modalBackdrop = document.getElementById("searchModalBackdrop");
    const searchInput = document.getElementById("globalSearchInput");
    const searchCloseBtn = document.getElementById("searchCloseBtn");
    const resultsContainer = document.getElementById("searchResultsList");

    if (!modalBackdrop || !searchInput || !resultsContainer) return;

    let selectedResultIndex = -1;

    function openSearchModal() {
      modalBackdrop.classList.add("open");
      searchInput.value = "";
      selectedResultIndex = -1;
      renderSearchResults("");
      setTimeout(() => searchInput.focus(), 80);
      document.body.style.overflow = "hidden";
    }

    function closeSearchModal() {
      modalBackdrop.classList.remove("open");
      document.body.style.overflow = "";
    }

    if (searchTrigger) searchTrigger.addEventListener("click", openSearchModal);
    if (mobileSearchTrigger)
      mobileSearchTrigger.addEventListener("click", () => {
        // Close mobile drawer if open
        const drawer = document.getElementById("mobileNav");
        if (drawer) drawer.classList.remove("open");
        const backdrop = document.getElementById("mobileNavBackdrop");
        if (backdrop) backdrop.classList.remove("open");
        openSearchModal();
      });

    if (searchCloseBtn)
      searchCloseBtn.addEventListener("click", closeSearchModal);

    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeSearchModal();
    });

    // Global Shortcut Ctrl+K / Cmd+K and ESC
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        if (modalBackdrop.classList.contains("open")) {
          closeSearchModal();
        } else {
          openSearchModal();
        }
      } else if (
        e.key === "Escape" &&
        modalBackdrop.classList.contains("open")
      ) {
        closeSearchModal();
      }
    });

    // Input filter
    searchInput.addEventListener("input", (e) => {
      renderSearchResults(e.target.value.trim().toLowerCase());
    });

    // Keyboard navigation within search results
    searchInput.addEventListener("keydown", (e) => {
      const items = resultsContainer.querySelectorAll(".search-result-item");
      if (!items.length) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedResultIndex = (selectedResultIndex + 1) % items.length;
        updateSearchHighlight(items);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedResultIndex =
          (selectedResultIndex - 1 + items.length) % items.length;
        updateSearchHighlight(items);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (selectedResultIndex >= 0 && items[selectedResultIndex]) {
          items[selectedResultIndex].click();
        } else if (items[0]) {
          items[0].click();
        }
      }
    });

    function updateSearchHighlight(items) {
      items.forEach((item, idx) => {
        item.classList.toggle("selected", idx === selectedResultIndex);
        if (idx === selectedResultIndex) {
          item.scrollIntoView({ block: "nearest" });
        }
      });
    }

    function renderSearchResults(query) {
      resultsContainer.innerHTML = "";
      selectedResultIndex = -1;

      const filtered = HUZIKIT_TOOLS.filter((tool) => {
        if (!query) return true;
        return (
          tool.name.toLowerCase().includes(query) ||
          tool.cat.toLowerCase().includes(query) ||
          tool.keywords.toLowerCase().includes(query)
        );
      });

      if (filtered.length === 0) {
        const empty = document.createElement("li");
        empty.className = "search-empty";
        empty.textContent = `No tools found matching "${query}". Try "QR", "Image", or "Calculator".`;
        resultsContainer.appendChild(empty);
        return;
      }

      filtered.forEach((tool) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.className = "search-result-item";
        a.href = tool.url;

        const infoDiv = document.createElement("div");
        infoDiv.className = "search-item-info";

        const titleSpan = document.createElement("span");
        titleSpan.className = "search-item-title";
        titleSpan.textContent = tool.name;

        const catSpan = document.createElement("span");
        catSpan.className = "search-item-cat";
        catSpan.textContent = tool.cat;

        infoDiv.appendChild(titleSpan);
        infoDiv.appendChild(catSpan);
        a.appendChild(infoDiv);

        const arrowSvg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg",
        );
        arrowSvg.setAttribute("viewBox", "0 0 24 24");
        arrowSvg.setAttribute("width", "16");
        arrowSvg.setAttribute("height", "16");
        arrowSvg.setAttribute("fill", "none");
        arrowSvg.setAttribute("stroke", "currentColor");
        arrowSvg.setAttribute("stroke-width", "2");
        arrowSvg.innerHTML = '<path d="M5 12h14M12 5l7 7-7 7"/>';
        a.appendChild(arrowSvg);

        a.addEventListener("click", () => closeSearchModal());
        li.appendChild(a);
        resultsContainer.appendChild(li);
      });
    }
  }

  /* ==========================================================================
     4. HERO SECTION 3D INTERACTION
     ========================================================================== */
  function initHero3DCard() {
    const card = document.getElementById("hero3dCard");
    const heroSection = document.querySelector(".hero-section");
    if (!card || !heroSection) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    heroSection.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      const diffX = (e.clientX - cardCenterX) / (window.innerWidth / 2);
      const diffY = (e.clientY - cardCenterY) / (window.innerHeight / 2);

      const rotateY = diffX * 12; // tilt left/right
      const rotateX = -diffY * 12; // tilt up/down

      card.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    });

    heroSection.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  }

  /* ==========================================================================
     5. QR TYPE SELECTOR & DYNAMIC FORMS
     ========================================================================== */
  function initQRTypeSelector() {
    const typeButtons = document.querySelectorAll(".type-btn");
    const formPanels = document.querySelectorAll(".type-form-panel");

    typeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const selectedType = btn.getAttribute("data-type");
        if (!selectedType || selectedType === AppState.currentType) return;

        AppState.currentType = selectedType;

        typeButtons.forEach((b) => b.classList.toggle("active", b === btn));
        formPanels.forEach((panel) => {
          panel.classList.toggle(
            "active",
            panel.getAttribute("data-panel") === selectedType,
          );
        });

        // Hide old validation messages
        clearFieldErrors();

        // Generate QR code for the new type
        generateQR();
      });
    });

    // Auto-listen to input changes for live update (debounced)
    let debounceTimer = null;
    const allInputs = document.querySelectorAll(
      ".type-form-panel input, .type-form-panel textarea, .type-form-panel select",
    );
    allInputs.forEach((input) => {
      input.addEventListener("input", () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          generateQR();
        }, 250);
      });
    });
  }

  /* ==========================================================================
     6. CUSTOMIZATION CONTROLS (COLORS, SIZE, ERROR CORRECTION)
     ========================================================================== */
  function initCustomizationControls() {
    // Accordion toggle in customization options
    const accButtons = document.querySelectorAll(
      ".customization-accordion .accordion-header-btn",
    );
    accButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const isExpanded = btn.getAttribute("aria-expanded") === "true";
        const content = btn.nextElementSibling;
        btn.setAttribute("aria-expanded", String(!isExpanded));
        if (content) content.classList.toggle("open", !isExpanded);
      });
    });

    // Foreground Color inputs
    const fgPicker = document.getElementById("fgColorPicker");
    const fgText = document.getElementById("fgColorText");
    if (fgPicker && fgText) {
      fgPicker.addEventListener("input", (e) => {
        AppState.fgColor = e.target.value;
        fgText.value = e.target.value.toUpperCase();
        updateContrastWarning();
        generateQR();
      });
      fgText.addEventListener("change", (e) => {
        let val = e.target.value.trim();
        if (!val.startsWith("#")) val = "#" + val;
        if (/^#[0-9A-F]{6}$/i.test(val)) {
          AppState.fgColor = val;
          fgPicker.value = val;
          updateContrastWarning();
          generateQR();
        }
      });
    }

    // Background Color inputs
    const bgPicker = document.getElementById("bgColorPicker");
    const bgText = document.getElementById("bgColorText");
    if (bgPicker && bgText) {
      bgPicker.addEventListener("input", (e) => {
        AppState.bgColor = e.target.value;
        bgText.value = e.target.value.toUpperCase();
        updateContrastWarning();
        generateQR();
      });
      bgText.addEventListener("change", (e) => {
        let val = e.target.value.trim();
        if (!val.startsWith("#")) val = "#" + val;
        if (/^#[0-9A-F]{6}$/i.test(val)) {
          AppState.bgColor = val;
          bgPicker.value = val;
          updateContrastWarning();
          generateQR();
        }
      });
    }

    // Preset color pills
    const presetPills = document.querySelectorAll(".preset-pill-btn");
    presetPills.forEach((pill) => {
      pill.addEventListener("click", () => {
        const fg = pill.getAttribute("data-fg");
        const bg = pill.getAttribute("data-bg");
        if (fg && bg) {
          AppState.fgColor = fg;
          AppState.bgColor = bg;
          if (fgPicker) fgPicker.value = fg;
          if (fgText) fgText.value = fg.toUpperCase();
          if (bgPicker) bgPicker.value = bg;
          if (bgText) bgText.value = bg.toUpperCase();
          updateContrastWarning();
          generateQR();
        }
      });
    });

    // QR Size selector
    const sizeSelect = document.getElementById("qrSizeSelect");
    if (sizeSelect) {
      sizeSelect.addEventListener("change", (e) => {
        AppState.qrSize = parseInt(e.target.value, 10) || 512;
        generateQR();
      });
    }

    // Margin selector
    const marginSelect = document.getElementById("qrMarginSelect");
    if (marginSelect) {
      marginSelect.addEventListener("change", (e) => {
        AppState.margin = parseInt(e.target.value, 10);
        generateQR();
      });
    }

    // Error Correction selector
    const ecSelect = document.getElementById("qrEcSelect");
    if (ecSelect) {
      ecSelect.addEventListener("change", (e) => {
        AppState.errorCorrection = e.target.value;
        generateQR();
      });
    }
  }

  /* ==========================================================================
     7. LOGO / CENTER IMAGE UPLOAD
     ========================================================================== */
  function initLogoUpload() {
    const uploadZone = document.getElementById("logoUploadZone");
    const fileInput = document.getElementById("logoFileInput");
    const previewCard = document.getElementById("logoPreviewCard");
    const previewThumb = document.getElementById("logoPreviewThumb");
    const nameLabel = document.getElementById("logoNameLabel");
    const sizeLabel = document.getElementById("logoSizeLabel");
    const removeBtn = document.getElementById("removeLogoBtn");
    const logoScaleSlider = document.getElementById("logoScaleSlider");
    const logoScaleVal = document.getElementById("logoScaleVal");

    if (!uploadZone || !fileInput) return;

    uploadZone.addEventListener("click", () => fileInput.click());

    // Drag & Drop
    ["dragenter", "dragover"].forEach((event) => {
      uploadZone.addEventListener(event, (e) => {
        e.preventDefault();
        uploadZone.classList.add("drag-over");
      });
    });

    ["dragleave", "drop"].forEach((event) => {
      uploadZone.addEventListener(event, (e) => {
        e.preventDefault();
        uploadZone.classList.remove("drag-over");
      });
    });

    uploadZone.addEventListener("drop", (e) => {
      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        handleLogoFile(files[0]);
      }
    });

    fileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files.length > 0) {
        handleLogoFile(e.target.files[0]);
      }
    });

    if (removeBtn) {
      removeBtn.addEventListener("click", () => {
        clearLogo();
        generateQR();
      });
    }

    if (logoScaleSlider && logoScaleVal) {
      logoScaleSlider.addEventListener("input", (e) => {
        const val = parseInt(e.target.value, 10);
        AppState.logoSizeRatio = val / 100;
        logoScaleVal.textContent = `${val}%`;
        generateQR();
      });
    }

    function handleLogoFile(file) {
      const validTypes = [
        "image/png",
        "image/jpeg",
        "image/svg+xml",
        "image/webp",
      ];
      if (!validTypes.includes(file.type)) {
        showToast("Invalid file format. Please upload PNG, JPG, WebP, or SVG.");
        return;
      }

      if (file.size > 3 * 1024 * 1024) {
        showToast("Logo file too large. Maximum size is 3 MB.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          AppState.logoImage = img;
          AppState.logoFileName = file.name;
          AppState.logoFileSize = `${(file.size / 1024).toFixed(1)} KB`;

          // UI update
          if (uploadZone) uploadZone.style.display = "none";
          if (previewCard) previewCard.classList.add("visible");
          if (previewThumb) previewThumb.src = event.target.result;
          if (nameLabel) nameLabel.textContent = file.name;
          if (sizeLabel) sizeLabel.textContent = AppState.logoFileSize;

          // Automatically elevate error correction to Quartile or High for scan safety
          const ecSelect = document.getElementById("qrEcSelect");
          if (
            AppState.errorCorrection === "L" ||
            AppState.errorCorrection === "M"
          ) {
            AppState.errorCorrection = "Q";
            if (ecSelect) ecSelect.value = "Q";
            showToast(
              "Error correction set to Quartile (25%) for logo scan safety",
            );
          }

          generateQR();
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }

    function clearLogo() {
      AppState.logoImage = null;
      AppState.logoFileName = "";
      AppState.logoFileSize = "";
      if (fileInput) fileInput.value = "";
      if (uploadZone) uploadZone.style.display = "flex";
      if (previewCard) previewCard.classList.remove("visible");
      if (previewThumb) previewThumb.src = "";
    }
  }

  /* ==========================================================================
     8. CONTRAST CALCULATION & ACCESSIBILITY
     ========================================================================== */
  function getLuminance(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return 0;
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  function getContrastRatio(hex1, hex2) {
    const l1 = getLuminance(hex1);
    const l2 = getLuminance(hex2);
    const brightest = Math.max(l1, l2);
    const darkest = Math.min(l1, l2);
    return (brightest + 0.05) / (darkest + 0.05);
  }

  function hexToRgb(hex) {
    let cleaned = hex.replace("#", "");
    if (cleaned.length === 3) {
      cleaned = cleaned
        .split("")
        .map((c) => c + c)
        .join("");
    }
    const num = parseInt(cleaned, 16);
    if (isNaN(num)) return null;
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255,
    };
  }

  function updateContrastWarning() {
    const warning = document.getElementById("contrastWarningBadge");
    if (!warning) return;

    const ratio = getContrastRatio(AppState.fgColor, AppState.bgColor);
    AppState.contrastRatio = ratio;

    const fgLum = getLuminance(AppState.fgColor);
    const bgLum = getLuminance(AppState.bgColor);

    // Warning if contrast ratio is under 3.0:1 or if foreground is brighter than background (inverted)
    if (ratio < 3.2 || fgLum > bgLum) {
      warning.classList.add("visible");
      warning.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
        <span>Low contrast ratio (${ratio.toFixed(1)}:1). Smartphones may have trouble scanning. We recommend a dark code on a light background.</span>
      `;
    } else {
      warning.classList.remove("visible");
    }
  }

  /* ==========================================================================
     9. DATA ENCODING & VALIDATION
     ========================================================================== */
  function validateAndEncodeData() {
    clearFieldErrors();
    const type = AppState.currentType;
    let payload = "";

    switch (type) {
      case "url": {
        const input = document.getElementById("urlInput");
        let val = input ? input.value.trim() : "";
        if (!val) {
          showFieldError("urlInput", "Please enter a website URL.");
          return null;
        }
        // Auto-prepend https:// if no protocol provided
        if (!/^https?:\/\//i.test(val)) {
          val = "https://" + val;
        }
        try {
          new URL(val);
        } catch (_) {
          showFieldError(
            "urlInput",
            "Please enter a valid website address (e.g. example.com).",
          );
          return null;
        }
        payload = val;
        break;
      }

      case "text": {
        const input = document.getElementById("textInput");
        const val = input ? input.value : "";
        if (!val.trim()) {
          showFieldError("textInput", "Please enter plain text to encode.");
          return null;
        }
        payload = val;
        break;
      }

      case "email": {
        const address =
          document.getElementById("emailAddressInput")?.value.trim() || "";
        const subject =
          document.getElementById("emailSubjectInput")?.value.trim() || "";
        const body = document.getElementById("emailBodyInput")?.value || "";

        if (!address) {
          showFieldError(
            "emailAddressInput",
            "Recipient email address is required.",
          );
          return null;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address)) {
          showFieldError(
            "emailAddressInput",
            "Please enter a valid email address.",
          );
          return null;
        }

        const params = [];
        if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
        if (body) params.push(`body=${encodeURIComponent(body)}`);
        payload = `mailto:${address}${params.length ? "?" + params.join("&") : ""}`;
        break;
      }

      case "phone": {
        const phone = document.getElementById("phoneInput")?.value.trim() || "";
        if (!phone) {
          showFieldError("phoneInput", "Phone number is required.");
          return null;
        }
        if (!/^[\d\s+\-().]{6,25}$/.test(phone)) {
          showFieldError(
            "phoneInput",
            "Please enter a valid phone number (e.g. +1 555 123 4567).",
          );
          return null;
        }
        payload = `tel:${phone.replace(/\s+/g, "")}`;
        break;
      }

      case "sms": {
        const phone =
          document.getElementById("smsPhoneInput")?.value.trim() || "";
        const message = document.getElementById("smsMessageInput")?.value || "";

        if (!phone) {
          showFieldError(
            "smsPhoneInput",
            "Recipient phone number is required.",
          );
          return null;
        }
        if (!/^[\d\s+\-().]{6,25}$/.test(phone)) {
          showFieldError("smsPhoneInput", "Please enter a valid phone number.");
          return null;
        }
        payload = `smsto:${phone.replace(/\s+/g, "")}:${message}`;
        break;
      }

      case "wifi": {
        const ssid =
          document.getElementById("wifiSsidInput")?.value.trim() || "";
        const pass = document.getElementById("wifiPassInput")?.value || "";
        const enc = document.getElementById("wifiEncSelect")?.value || "WPA";
        const hidden =
          document.getElementById("wifiHiddenCheckbox")?.checked || false;

        if (!ssid) {
          showFieldError("wifiSsidInput", "Wi-Fi Network SSID is required.");
          return null;
        }

        function escapeWifi(str) {
          return str
            .replace(/\\/g, "\\\\")
            .replace(/;/g, "\\;")
            .replace(/:/g, "\\:")
            .replace(/,/g, "\\,")
            .replace(/"/g, '\\"');
        }

        const encStr = enc === "nopass" ? "nopass" : enc;
        const passPart = enc === "nopass" ? "" : `P:${escapeWifi(pass)};`;
        const hiddenPart = hidden ? "H:true;" : "";

        payload = `WIFI:T:${encStr};S:${escapeWifi(ssid)};${passPart}${hiddenPart};`;
        break;
      }

      case "vcard": {
        const firstName =
          document.getElementById("vcardFirstNameInput")?.value.trim() || "";
        const lastName =
          document.getElementById("vcardLastNameInput")?.value.trim() || "";
        const org =
          document.getElementById("vcardOrgInput")?.value.trim() || "";
        const title =
          document.getElementById("vcardTitleInput")?.value.trim() || "";
        const phone =
          document.getElementById("vcardPhoneInput")?.value.trim() || "";
        const email =
          document.getElementById("vcardEmailInput")?.value.trim() || "";
        const website =
          document.getElementById("vcardUrlInput")?.value.trim() || "";
        const address =
          document.getElementById("vcardAddressInput")?.value.trim() || "";

        if (!firstName && !lastName && !org) {
          showFieldError(
            "vcardFirstNameInput",
            "Please provide at least a name or organization.",
          );
          return null;
        }

        const fullName = `${firstName} ${lastName}`.trim() || org;
        const vcardLines = [
          "BEGIN:VCARD",
          "VERSION:3.0",
          `N:${lastName};${firstName};;;`,
          `FN:${fullName}`,
        ];

        if (org) vcardLines.push(`ORG:${org}`);
        if (title) vcardLines.push(`TITLE:${title}`);
        if (phone) vcardLines.push(`TEL;TYPE=CELL,VOICE:${phone}`);
        if (email) vcardLines.push(`EMAIL;TYPE=PREF,INTERNET:${email}`);
        if (website)
          vcardLines.push(
            `URL:${website.startsWith("http") ? website : "https://" + website}`,
          );
        if (address)
          vcardLines.push(`ADR:;;${address.replace(/\n/g, " ")};;;;`);
        vcardLines.push("END:VCARD");

        payload = vcardLines.join("\n");
        break;
      }

      case "location": {
        const lat = document.getElementById("locLatInput")?.value.trim() || "";
        const lng = document.getElementById("locLngInput")?.value.trim() || "";
        const name =
          document.getElementById("locNameInput")?.value.trim() || "";

        const latNum = parseFloat(lat);
        const lngNum = parseFloat(lng);

        if (isNaN(latNum) || latNum < -90 || latNum > 90) {
          showFieldError("locLatInput", "Latitude must be between -90 and 90.");
          return null;
        }
        if (isNaN(lngNum) || lngNum < -180 || lngNum > 180) {
          showFieldError(
            "locLngInput",
            "Longitude must be between -180 and 180.",
          );
          return null;
        }

        // Use Google Maps link format for universal compatibility across camera scanners
        if (name) {
          payload = `https://www.google.com/maps/search/?api=1&query=${latNum},${lngNum}&query_place_id=${encodeURIComponent(name)}`;
        } else {
          payload = `https://maps.google.com/local?q=${latNum},${lngNum}`;
        }
        break;
      }
    }

    return payload;
  }

  function showFieldError(inputId, message) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const parent = input.closest(".form-group") || input.parentElement;
    if (!parent) return;
    const errEl = parent.querySelector(".field-error-msg");
    if (errEl) {
      errEl.textContent = message;
      errEl.classList.add("visible");
    }
  }

  function clearFieldErrors() {
    const errorMsgs = document.querySelectorAll(".field-error-msg");
    errorMsgs.forEach((el) => {
      el.textContent = "";
      el.classList.remove("visible");
    });
  }

  /* ==========================================================================
     10. CORE QR CODE GENERATION ENGINE
     ========================================================================== */
  function generateQR() {
    const canvas = document.getElementById("qrCanvas");
    const statusBadge = document.getElementById("previewStatusBadge");
    if (!canvas) return;

    const payload = validateAndEncodeData();
    if (!payload) {
      if (statusBadge) {
        statusBadge.className = "status-badge error-state";
        statusBadge.textContent = "⚠️ Invalid Input";
      }
      return;
    }

    AppState.encodedString = payload;

    // Build QR code matrix using qrcode-generator
    try {
      if (typeof qrcode === "undefined") {
        throw new Error("QR library loading failed.");
      }

      // typeNumber: 0 (automatic sizing based on text length and EC level)
      // errorCorrectionLevel: L, M, Q, H
      const qr = qrcode(0, AppState.errorCorrection);
      qr.addData(payload);
      qr.make();

      const moduleCount = qr.getModuleCount();
      AppState.moduleCount = moduleCount;
      AppState.lastGeneratedMatrix = qr;

      // Render to HTML5 Canvas with custom colors, margins, and center logo
      renderQrToCanvas(canvas, qr, moduleCount);

      // Update Info Panel
      updateQrInfoPanel(payload, moduleCount);

      if (statusBadge) {
        statusBadge.className = "status-badge";
        statusBadge.innerHTML = "✓ Scannable &amp; Ready";
      }
    } catch (err) {
      console.error("QR Generation Error:", err);
      if (statusBadge) {
        statusBadge.className = "status-badge error-state";
        statusBadge.textContent = "❌ Data Exceeds Capacity";
      }
      showToast(
        "Payload too large for selected error correction. Try lower EC level.",
      );
    }
  }

  /* ==========================================================================
     11. CANVAS RENDERING WITH LOGO EMBEDDING
     ========================================================================== */
  function renderQrToCanvas(canvas, qr, moduleCount) {
    const ctx = canvas.getContext("2d");
    const targetSize = AppState.qrSize;
    const marginModules = AppState.margin;

    canvas.width = targetSize;
    canvas.height = targetSize;

    const totalModules = moduleCount + marginModules * 2;
    const modulePixelSize = targetSize / totalModules;

    // Fill Canvas Background
    ctx.fillStyle = AppState.bgColor;
    ctx.fillRect(0, 0, targetSize, targetSize);

    // Render Dark Modules
    ctx.fillStyle = AppState.fgColor;
    for (let r = 0; r < moduleCount; r++) {
      for (let c = 0; c < moduleCount; c++) {
        if (qr.isDark(r, c)) {
          const x = (c + marginModules) * modulePixelSize;
          const y = (r + marginModules) * modulePixelSize;
          // Math.ceil prevents micro-hairline gaps between adjacent modules
          ctx.fillRect(
            Math.floor(x),
            Math.floor(y),
            Math.ceil(modulePixelSize),
            Math.ceil(modulePixelSize),
          );
        }
      }
    }

    // Embed Center Logo if uploaded
    if (AppState.logoImage) {
      const logoRatio = AppState.logoSizeRatio; // e.g. 0.22
      const logoSize = targetSize * logoRatio;
      const logoX = (targetSize - logoSize) / 2;
      const logoY = (targetSize - logoSize) / 2;
      const badgePadding = logoSize * 0.12;

      // Draw background protective pill behind the logo
      ctx.fillStyle = AppState.bgColor;
      ctx.beginPath();
      const badgeRadius = 12;
      const bx = logoX - badgePadding;
      const by = logoY - badgePadding;
      const bw = logoSize + badgePadding * 2;
      const bh = logoSize + badgePadding * 2;
      roundRect(ctx, bx, by, bw, bh, badgeRadius);
      ctx.fill();

      // Draw thin accent border around logo badge
      ctx.strokeStyle = AppState.fgColor;
      ctx.lineWidth = Math.max(1, targetSize * 0.003);
      ctx.stroke();

      // Draw the logo inside with high smoothing quality
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(AppState.logoImage, logoX, logoY, logoSize, logoSize);
    }
  }

  function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  /* ==========================================================================
     12. INFORMATION PANEL UPDATES
     ========================================================================== */
  function updateQrInfoPanel(payload, moduleCount) {
    const typeLabel = document.getElementById("infoQrType");
    const lengthLabel = document.getElementById("infoContentLength");
    const sizeLabel = document.getElementById("infoQrSize");
    const ecLabel = document.getElementById("infoEcLevel");

    const typeNames = {
      url: "Website URL",
      text: "Plain Text",
      email: "Email Message",
      phone: "Phone Number",
      sms: "SMS Message",
      wifi: "Wi-Fi Network",
      vcard: "vCard Contact",
      location: "Geolocation",
    };

    const ecNames = {
      L: "Low (~7%)",
      M: "Medium (~15%)",
      Q: "Quartile (~25%)",
      H: "High (~30%)",
    };

    if (typeLabel)
      typeLabel.textContent = typeNames[AppState.currentType] || "Standard";
    if (lengthLabel) lengthLabel.textContent = `${payload.length} chars`;
    if (sizeLabel)
      sizeLabel.textContent = `${AppState.qrSize} × ${AppState.qrSize} px`;
    if (ecLabel)
      ecLabel.textContent =
        ecNames[AppState.errorCorrection] || AppState.errorCorrection;
  }

  /* ==========================================================================
     13. ACTION BUTTONS (GENERATE, RESET, CLEAR)
     ========================================================================== */
  function initActionButtons() {
    const genBtn = document.getElementById("generateBtn");
    const resetBtn = document.getElementById("resetBtn");
    const clearBtn = document.getElementById("clearBtn");

    if (genBtn) {
      genBtn.addEventListener("click", (e) => {
        e.preventDefault();
        generateQR();
        showToast("QR code regenerated successfully!");
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", (e) => {
        e.preventDefault();
        resetToDefaults();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", (e) => {
        e.preventDefault();
        clearCurrentInputs();
      });
    }
  }

  function resetToDefaults() {
    AppState.qrSize = 512;
    AppState.errorCorrection = "M";
    AppState.margin = 4;
    AppState.fgColor = "#15132B";
    AppState.bgColor = "#FFFFFF";
    AppState.logoImage = null;
    AppState.logoFileName = "";
    AppState.logoFileSize = "";
    AppState.logoSizeRatio = 0.22;

    // Reset Form Controls
    const sizeSelect = document.getElementById("qrSizeSelect");
    if (sizeSelect) sizeSelect.value = "512";
    const marginSelect = document.getElementById("qrMarginSelect");
    if (marginSelect) marginSelect.value = "4";
    const ecSelect = document.getElementById("qrEcSelect");
    if (ecSelect) ecSelect.value = "M";

    const fgPicker = document.getElementById("fgColorPicker");
    const fgText = document.getElementById("fgColorText");
    if (fgPicker) fgPicker.value = "#15132B";
    if (fgText) fgText.value = "#15132B";

    const bgPicker = document.getElementById("bgColorPicker");
    const bgText = document.getElementById("bgColorText");
    if (bgPicker) bgPicker.value = "#FFFFFF";
    if (bgText) bgText.value = "#FFFFFF";

    // Clear logo UI
    const fileInput = document.getElementById("logoFileInput");
    if (fileInput) fileInput.value = "";
    const uploadZone = document.getElementById("logoUploadZone");
    if (uploadZone) uploadZone.style.display = "flex";
    const previewCard = document.getElementById("logoPreviewCard");
    if (previewCard) previewCard.classList.remove("visible");

    // Default URL sample
    const urlInput = document.getElementById("urlInput");
    if (urlInput) urlInput.value = "https://huzikit.com";

    updateContrastWarning();
    generateQR();
    showToast("Reset to default settings.");
  }

  function clearCurrentInputs() {
    const activePanel = document.querySelector(".type-form-panel.active");
    if (!activePanel) return;

    const fields = activePanel.querySelectorAll("input, textarea");
    fields.forEach((f) => {
      if (f.type === "checkbox") {
        f.checked = false;
      } else {
        f.value = "";
      }
    });

    clearFieldErrors();
    showToast("Cleared input fields.");
  }

  /* ==========================================================================
     14. EXPORT HANDLERS (PNG, SVG, CLIPBOARD)
     ========================================================================== */
  function initExportHandlers() {
    const downloadPngBtn = document.getElementById("downloadPngBtn");
    const downloadSvgBtn = document.getElementById("downloadSvgBtn");
    const copyContentBtn = document.getElementById("copyContentBtn");

    if (downloadPngBtn) {
      downloadPngBtn.addEventListener("click", downloadPng);
    }

    if (downloadSvgBtn) {
      downloadSvgBtn.addEventListener("click", downloadSvg);
    }

    if (copyContentBtn) {
      copyContentBtn.addEventListener("click", copyEncodedContent);
    }
  }

  function downloadPng() {
    const canvas = document.getElementById("qrCanvas");
    if (!canvas) return;

    try {
      const filename = `huzikit-qr-${AppState.currentType}.png`;
      if (canvas.toBlob) {
        canvas.toBlob((blob) => {
          if (!blob) {
            fallbackDownloadDataUrl(canvas.toDataURL("image/png"), filename);
            return;
          }
          const url = URL.createObjectURL(blob);
          triggerDownload(url, filename);
          setTimeout(() => URL.revokeObjectURL(url), 1000);
          showToast(`Downloaded ${filename}!`);
        }, "image/png");
      } else {
        fallbackDownloadDataUrl(canvas.toDataURL("image/png"), filename);
      }
    } catch (err) {
      console.error("Download PNG failed:", err);
      showToast("Error generating PNG download.");
    }
  }

  function fallbackDownloadDataUrl(dataUrl, filename) {
    triggerDownload(dataUrl, filename);
    showToast(`Downloaded ${filename}!`);
  }

  function downloadSvg() {
    const qr = AppState.lastGeneratedMatrix;
    const moduleCount = AppState.moduleCount;
    if (!qr || !moduleCount) {
      showToast("Please generate a QR code first.");
      return;
    }

    try {
      const margin = AppState.margin;
      const totalModules = moduleCount + margin * 2;
      const size = AppState.qrSize;
      const moduleSize = size / totalModules;

      let rects = [];
      for (let r = 0; r < moduleCount; r++) {
        for (let c = 0; c < moduleCount; c++) {
          if (qr.isDark(r, c)) {
            const x = ((c + margin) * moduleSize).toFixed(2);
            const y = ((r + margin) * moduleSize).toFixed(2);
            const w = moduleSize.toFixed(2);
            const h = moduleSize.toFixed(2);
            rects.push(
              `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${AppState.fgColor}" />`,
            );
          }
        }
      }

      let logoSvg = "";
      if (AppState.logoImage) {
        const logoSize = size * AppState.logoSizeRatio;
        const logoX = (size - logoSize) / 2;
        const logoY = (size - logoSize) / 2;
        const badgePadding = logoSize * 0.12;

        logoSvg = `
          <rect x="${logoX - badgePadding}" y="${logoY - badgePadding}" width="${logoSize + badgePadding * 2}" height="${logoSize + badgePadding * 2}" rx="12" fill="${AppState.bgColor}" stroke="${AppState.fgColor}" stroke-width="1.5" />
          <image href="${AppState.logoImage.src}" x="${logoX}" y="${logoY}" width="${logoSize}" height="${logoSize}" />
        `;
      }

      const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <rect width="100%" height="100%" fill="${AppState.bgColor}" />
  ${rects.join("\n  ")}
  ${logoSvg}
</svg>`;

      const blob = new Blob([svgContent], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const filename = `huzikit-qr-${AppState.currentType}.svg`;
      triggerDownload(url, filename);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      showToast(`Downloaded vector ${filename}!`);
    } catch (err) {
      console.error("Download SVG failed:", err);
      showToast("Error generating SVG download.");
    }
  }

  function triggerDownload(url, filename) {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function copyEncodedContent() {
    if (!AppState.encodedString) {
      showToast("No QR code content to copy.");
      return;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(AppState.encodedString)
        .then(() => {
          showToast("Copied encoded QR content!");
        })
        .catch(() => {
          fallbackCopyText(AppState.encodedString);
        });
    } else {
      fallbackCopyText(AppState.encodedString);
    }
  }

  function fallbackCopyText(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      showToast("Copied encoded QR content!");
    } catch (_) {
      showToast("Unable to copy to clipboard.");
    }
    document.body.removeChild(textArea);
  }

  /* ==========================================================================
     15. TOAST NOTIFICATIONS
     ========================================================================== */
  let toastTimeout = null;
  function showToast(message) {
    let toast = document.getElementById("globalToastNotice");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "globalToastNotice";
      toast.className = "toast-notice";
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      <span>${message}</span>
    `;

    toast.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 3200);
  }

  /* ==========================================================================
     16. FAQ ACCORDIONS (12 WORKING ACCORDIONS)
     ========================================================================== */
  function initFAQAccordions() {
    const faqButtons = document.querySelectorAll(".faq-question-btn");
    faqButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const isExpanded = btn.getAttribute("aria-expanded") === "true";
        const panel = btn.nextElementSibling;
        if (!panel) return;

        btn.setAttribute("aria-expanded", String(!isExpanded));
        panel.classList.toggle("open", !isExpanded);
      });
    });
  }
})();
