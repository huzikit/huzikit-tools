/**
 * HUZIKIT.COM — PREMIUM IMAGE RESIZER ENGINE
 * Pure Client-Side Image Resizing, Multi-File Batch Queue, Aspect Ratio Lock,
 * Quality Optimization, Format Conversion & Global Navigation/Search.
 */

(function () {
  "use strict";

  /* ==========================================================================
     GLOBAL HUZIKIT TOOLS SEARCH DATASET (All 30 Official Tools)
     ========================================================================== */
  const HUZIKIT_TOOLS = [
    // Text Tools (8)
    {
      name: "Word Counter",
      category: "Text Tools",
      url: "/texttools/word-counter.html",
      desc: "Count words, characters, sentences, paragraphs, and reading time in real time.",
      keywords: ["word", "counter", "character", "reading time", "text"],
    },
    {
      name: "Character Counter",
      category: "Text Tools",
      url: "/texttools/character-counter.html",
      desc: "Accurately count characters with and without whitespace for social media limits.",
      keywords: ["character", "letter", "length", "count", "twitter"],
    },
    {
      name: "Case Converter",
      category: "Text Tools",
      url: "/texttools/case-converter.html",
      desc: "Transform text into UPPERCASE, lowercase, Title Case, camelCase, and snake_case.",
      keywords: ["case", "uppercase", "lowercase", "title case", "camelcase"],
    },
    {
      name: "Remove Duplicate Lines",
      category: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
      desc: "Clean messy text lists and deduplicate lines with sensitive or insensitive sorting.",
      keywords: ["duplicate", "lines", "deduplicate", "list", "cleaner"],
    },
    {
      name: "Lorem Ipsum Generator",
      category: "Text Tools",
      url: "/texttools/loremipsumgenerator.html",
      desc: "Generate placeholder dummy text paragraphs, sentences, and words for design layouts.",
      keywords: ["lorem", "ipsum", "dummy", "text", "placeholder"],
    },
    {
      name: "Password Generator",
      category: "Text Tools",
      url: "/texttools/passwordgenerator.html",
      desc: "Create ultra-secure, cryptographically strong random passwords with custom symbols.",
      keywords: ["password", "generator", "security", "random", "pin"],
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      url: "/texttools/text-reverser.html",
      desc: "Instantly reverse text characters, words, or full sentences backward.",
      keywords: ["reverse", "flip", "backwards", "invert"],
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      url: "/texttools/onlinenotepad.html",
      desc: "Distraction-free scratchpad with instant local autosave and word metrics.",
      keywords: ["notepad", "notes", "scratchpad", "editor", "draft"],
    },

    // Calculators (8)
    {
      name: "Age Calculator",
      category: "Calculators",
      url: "/calculator/agecalculator.html",
      desc: "Calculate exact age in years, months, weeks, days, hours, and minutes.",
      keywords: ["age", "birthday", "chronological", "dates", "calculator"],
    },
    {
      name: "BMI Calculator",
      category: "Calculators",
      url: "/calculator/bmi-calculator.html",
      desc: "Calculate your Body Mass Index (BMI), healthy weight range, and category.",
      keywords: ["bmi", "body mass", "weight", "health", "fitness"],
    },
    {
      name: "Percentage Calculator",
      category: "Calculators",
      url: "/calculator/percentage-calculator.html",
      desc: "Solve percentage increases, decreases, differences, and fractions effortlessly.",
      keywords: ["percentage", "percent", "math", "increase", "decrease"],
    },
    {
      name: "Calorie Calculator",
      category: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
      desc: "Determine daily calorie needs and basal metabolic rate (BMR) for fitness goals.",
      keywords: ["calorie", "bmr", "diet", "nutrition", "tdee"],
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      url: "/calculator/discount-calculator.html",
      desc: "Calculate final prices, savings, and sales tax from original costs and coupons.",
      keywords: ["discount", "sale", "shopping", "savings", "coupon"],
    },
    {
      name: "Savings & Goal Calculator",
      category: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
      desc: "Project compound interest, investment returns, and milestone savings timelines.",
      keywords: ["savings", "interest", "compound", "goal", "investment"],
    },
    {
      name: "Tip Calculator",
      category: "Calculators",
      url: "/calculators/tip-calculator.html",
      desc: "Calculate restaurant bill tips and split totals evenly among friends.",
      keywords: ["tip", "bill", "split", "gratuity", "dining"],
    },
    {
      name: "GPA Calculator",
      category: "Calculators",
      url: "/calculator/gpa-calculator.html",
      desc: "Calculate cumulative high school or university Grade Point Average and credits.",
      keywords: ["gpa", "grades", "college", "school", "credits"],
    },

    // Image & PDF (6)
    {
      name: "Image Compressor",
      category: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
      desc: "Compress JPG, PNG, and WebP images up to 90% without visible quality degradation.",
      keywords: [
        "compress",
        "image compressor",
        "shrink",
        "optimize",
        "file size",
      ],
    },
    {
      name: "Image Resizer",
      category: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
      desc: "Free client-side image resizer for JPG, PNG, and WebP with aspect lock and batch mode.",
      keywords: [
        "image resizer",
        "resizer",
        "resize",
        "photo resizer",
        "crop",
        "dimensions",
        "aspect ratio",
      ],
    },
    {
      name: "PDF to Word",
      category: "Image & PDF",
      url: "/image&pdf/pdf-to-word.html",
      desc: "Extract text and layout from PDF files into editable Microsoft Word documents.",
      keywords: ["pdf to word", "pdf", "docx", "convert", "extract"],
    },
    {
      name: "JPG to PNG",
      category: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
      desc: "Convert JPEG and JPG image files directly into crisp PNG format in your browser.",
      keywords: ["jpg to png", "jpeg", "convert", "transparency"],
    },
    {
      name: "Color Picker / HEX",
      category: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
      desc: "Extract HEX, RGB, HSL, and CMYK color codes with interactive palettes and gradients.",
      keywords: ["color picker", "hex", "rgb", "hsl", "palette"],
    },
    {
      name: "QR Code Generator",
      category: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
      desc: "Create custom QR codes for URLs, WiFi credentials, plain text, and contact vCards.",
      keywords: ["qr code", "barcode", "generator", "wifi", "link"],
    },

    // Developer (8)
    {
      name: "JSON Formatter",
      category: "Developer",
      url: "/developertools/JSONFORMATTER.html",
      desc: "Format, validate, beautify, and minify raw JSON with colored syntax tree views.",
      keywords: ["json", "formatter", "beautifier", "validator", "minify"],
    },
    {
      name: "Base64 Encoder/Decoder",
      category: "Developer",
      url: "/developertools/base64encoderdecoder.html",
      desc: "Encode and decode plain text or binary files to and from Base64 representations.",
      keywords: ["base64", "encoder", "decoder", "binary", "ascii"],
    },
    {
      name: "URL Encoder/Decoder",
      category: "Developer",
      url: "/developertools/urlencoderdecoder.html",
      desc: "Encode and decode query strings and special characters for safe URI transmission.",
      keywords: ["url", "uri", "encode", "decode", "percent-encoding"],
    },
    {
      name: "Meta Tag Generator",
      category: "Developer",
      url: "/developertools/meta-tag-generator.html",
      desc: "Generate clean HTML SEO meta tags, OpenGraph cards, and Twitter summary cards.",
      keywords: ["meta tag", "seo", "opengraph", "twitter card", "html head"],
    },
    {
      name: "Regex Tester",
      category: "Developer",
      url: "/developertools/regextester.html",
      desc: "Test and debug JavaScript Regular Expressions in real time with syntax highlighting.",
      keywords: ["regex", "regular expression", "pattern", "test", "matcher"],
    },
    {
      name: "Markdown to HTML",
      category: "Developer",
      url: "/developertools/markdownhtml.html",
      desc: "Convert standard Markdown text into sanitized, copy-paste-ready HTML markup.",
      keywords: ["markdown", "html", "converter", "md", "parser"],
    },
    {
      name: "CSS Minifier",
      category: "Developer",
      url: "/developertools/cssminifier.html",
      desc: "Compress and minify CSS stylesheets by stripping unnecessary whitespace and comments.",
      keywords: ["css", "minifier", "compress", "stylesheet", "optimize"],
    },
    {
      name: "Unix Timestamp",
      category: "Developer",
      url: "/developertools/unixtimestamp.html",
      desc: "Convert Epoch Unix timestamps to human-readable dates and back in any time zone.",
      keywords: ["unix", "timestamp", "epoch", "time", "date"],
    },
  ];

  /* ==========================================================================
     APPLICATION STATE
     ========================================================================== */
  const AppState = {
    queue: [], // Array of QueueItem objects
    activeId: null, // Currently selected image ID
    aspectRatioLocked: true, // Aspect ratio lock toggle state
    originalRatio: 1, // Original aspect ratio (W / H) of active item
    preventUpscale: true, // Prevent upscaling toggle
    maxBoundsEnabled: false, // Max bounds mode toggle
    quality: 0.8, // Default 80% compression quality (0.1 - 1.0)
    outputFormat: "auto", // 'auto', 'image/jpeg', 'image/png', 'image/webp'
    jpegBgColor: "#ffffff", // Background fill color for JPEG transparency
    isProcessingBatch: false,
  };

  /* ==========================================================================
     DOM ELEMENTS REPOSITORY
     ========================================================================== */
  const DOM = {
    // Navigation & Mobile
    desktopNav: document.getElementById("desktopNav"),
    mobileToggle: document.getElementById("mobileToggle"),
    mobileDrawer: document.getElementById("mobileDrawer"),
    drawerCloseBtn: document.getElementById("drawerCloseBtn"),
    drawerBackdrop: document.getElementById("drawerBackdrop"),
    mobileSearchTrigger: document.getElementById("mobileSearchTrigger"),

    // Global Search
    searchOpenBtn: document.getElementById("searchOpenBtn"),
    searchModalBackdrop: document.getElementById("searchModalBackdrop"),
    searchDialog: document.getElementById("searchDialog"),
    globalSearchInput: document.getElementById("globalSearchInput"),
    searchClearBtn: document.getElementById("searchClearBtn"),
    searchCloseBtn: document.getElementById("searchCloseBtn"),
    searchResultsList: document.getElementById("searchResultsList"),
    searchFilterPills: document.querySelectorAll(
      ".search-filter-pills .filter-pill",
    ),

    // Toast Region
    toastRegion: document.getElementById("toastRegion"),

    // Uploader
    dropZone: document.getElementById("dropZone"),
    fileInput: document.getElementById("fileInput"),
    browseBtn: document.getElementById("browseBtn"),

    // Workspace & Queue
    workspaceArea: document.getElementById("workspaceArea"),
    queueCountBadge: document.getElementById("queueCountBadge"),
    resizeAllBtn: document.getElementById("resizeAllBtn"),
    downloadAllBtn: document.getElementById("downloadAllBtn"),
    resetSettingsBtn: document.getElementById("resetSettingsBtn"),
    clearAllBtn: document.getElementById("clearAllBtn"),
    batchProgressBar: document.getElementById("batchProgressBar"),
    batchProgressLabel: document.getElementById("batchProgressLabel"),
    batchProgressPercent: document.getElementById("batchProgressPercent"),
    batchProgressFill: document.getElementById("batchProgressFill"),
    queueItemsList: document.getElementById("queueItemsList"),

    // Dimensions Controls
    modePixelsTab: document.getElementById("modePixelsTab"),
    modePercentTab: document.getElementById("modePercentTab"),
    pixelsPanel: document.getElementById("pixelsPanel"),
    percentPanel: document.getElementById("percentPanel"),
    inputWidth: document.getElementById("inputWidth"),
    inputHeight: document.getElementById("inputHeight"),
    lockRatioBtn: document.getElementById("lockRatioBtn"),
    lockRatioLabel: document.getElementById("lockRatioLabel"),
    swapDimensionsBtn: document.getElementById("swapDimensionsBtn"),
    resetToOriginalBtn: document.getElementById("resetToOriginalBtn"),
    presetChips: document.querySelectorAll(".preset-chip"),
    percentChips: document.querySelectorAll(".percent-chip"),
    customPercentInput: document.getElementById("customPercentInput"),
    applyPercentBtn: document.getElementById("applyPercentBtn"),

    // Guards & Bounds
    preventUpscaleToggle: document.getElementById("preventUpscaleToggle"),
    maxBoundsToggle: document.getElementById("maxBoundsToggle"),
    maxBoundsBox: document.getElementById("maxBoundsBox"),
    maxBoundWidth: document.getElementById("maxBoundWidth"),
    maxBoundHeight: document.getElementById("maxBoundHeight"),
    applyMaxBoundsBtn: document.getElementById("applyMaxBoundsBtn"),

    // Output & Quality
    outputFormatSelect: document.getElementById("outputFormatSelect"),
    qualityRange: document.getElementById("qualityRange"),
    qualityValueBadge: document.getElementById("qualityValueBadge"),
    pngQualityNote: document.getElementById("pngQualityNote"),
    jpegBgField: document.getElementById("jpegBgField"),
    jpegBgColor: document.getElementById("jpegBgColor"),
    jpegBgHex: document.getElementById("jpegBgHex"),

    // Execution & Comparison
    applyCurrentResizeBtn: document.getElementById("applyCurrentResizeBtn"),
    comparisonCard: document.getElementById("comparisonCard"),
    activeImageName: document.getElementById("activeImageName"),
    activeImageStatus: document.getElementById("activeImageStatus"),
    downloadActiveBtn: document.getElementById("downloadActiveBtn"),
    previewOriginalImg: document.getElementById("previewOriginalImg"),
    previewResizedImg: document.getElementById("previewResizedImg"),
    previewResizedPlaceholder: document.getElementById(
      "previewResizedPlaceholder",
    ),
    statOrigDims: document.getElementById("statOrigDims"),
    statOrigSize: document.getElementById("statOrigSize"),
    statOrigFormat: document.getElementById("statOrigFormat"),
    statResizedDims: document.getElementById("statResizedDims"),
    statResizedSize: document.getElementById("statResizedSize"),
    statSizeDiff: document.getElementById("statSizeDiff"),

    // FAQ Accordion
    faqAccordion: document.getElementById("faqAccordion"),
  };

  /* ==========================================================================
     HELPER UTILITIES
     ========================================================================== */
  function formatBytes(bytes, decimals = 2) {
    if (!bytes || bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  function getReadableFormat(mimeType) {
    if (!mimeType) return "Unknown";
    if (mimeType === "image/jpeg" || mimeType.includes("jpg")) return "JPG";
    if (mimeType === "image/png") return "PNG";
    if (mimeType === "image/webp") return "WebP";
    return mimeType.replace("image/", "").toUpperCase();
  }

  function getFileExtension(mimeType) {
    if (mimeType === "image/jpeg") return "jpg";
    if (mimeType === "image/png") return "png";
    if (mimeType === "image/webp") return "webp";
    return "jpg";
  }

  function showToast(message, type = "info", duration = 3800) {
    if (!DOM.toastRegion) return;
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    DOM.toastRegion.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 0.25s ease";
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 260);
    }, duration);
  }

  /* ==========================================================================
     1. NAVIGATION & MOBILE DRAWER
     ========================================================================== */
  function initNavigation() {
    // Mobile hamburger drawer toggle
    if (DOM.mobileToggle) {
      DOM.mobileToggle.addEventListener("click", openMobileDrawer);
    }
    if (DOM.drawerCloseBtn) {
      DOM.drawerCloseBtn.addEventListener("click", closeMobileDrawer);
    }
    if (DOM.drawerBackdrop) {
      DOM.drawerBackdrop.addEventListener("click", closeMobileDrawer);
    }

    // Accordions inside mobile drawer
    const mobileAccTriggers = document.querySelectorAll(".mobile-acc-trigger");
    mobileAccTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const isExpanded = trigger.getAttribute("aria-expanded") === "true";
        const content = trigger.nextElementSibling;
        trigger.setAttribute("aria-expanded", String(!isExpanded));
        if (content) {
          content.classList.toggle("show", !isExpanded);
        }
      });
    });

    // Close drawer on link click
    const drawerLinks = document.querySelectorAll(".mobile-drawer a");
    drawerLinks.forEach((link) => {
      link.addEventListener("click", closeMobileDrawer);
    });

    // Desktop Dropdowns keyboard navigation
    const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");
    dropdownTriggers.forEach((btn) => {
      btn.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown" || e.key === "Enter") {
          e.preventDefault();
          const menu = btn.nextElementSibling;
          if (menu) {
            const firstLink = menu.querySelector("a");
            if (firstLink) firstLink.focus();
          }
        }
      });
    });

    // Mobile search button triggers search modal
    if (DOM.mobileSearchTrigger) {
      DOM.mobileSearchTrigger.addEventListener("click", () => {
        closeMobileDrawer();
        openSearchModal();
      });
    }
  }

  function openMobileDrawer() {
    if (!DOM.mobileDrawer || !DOM.drawerBackdrop) return;
    DOM.mobileDrawer.classList.add("open");
    DOM.mobileDrawer.setAttribute("aria-hidden", "false");
    DOM.drawerBackdrop.classList.add("open");
    DOM.drawerBackdrop.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
    if (DOM.mobileToggle)
      DOM.mobileToggle.setAttribute("aria-expanded", "true");
  }

  function closeMobileDrawer() {
    if (!DOM.mobileDrawer || !DOM.drawerBackdrop) return;
    DOM.mobileDrawer.classList.remove("open");
    DOM.mobileDrawer.setAttribute("aria-hidden", "true");
    DOM.drawerBackdrop.classList.remove("open");
    DOM.drawerBackdrop.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
    if (DOM.mobileToggle)
      DOM.mobileToggle.setAttribute("aria-expanded", "false");
  }

  /* ==========================================================================
     2. GLOBAL SEARCH MODAL (All 30 Tools)
     ========================================================================== */
  let currentSearchCategory = "all";

  function initSearch() {
    if (DOM.searchOpenBtn) {
      DOM.searchOpenBtn.addEventListener("click", openSearchModal);
    }
    if (DOM.searchCloseBtn) {
      DOM.searchCloseBtn.addEventListener("click", closeSearchModal);
    }
    if (DOM.searchModalBackdrop) {
      DOM.searchModalBackdrop.addEventListener("click", (e) => {
        if (e.target === DOM.searchModalBackdrop) {
          closeSearchModal();
        }
      });
    }

    if (DOM.globalSearchInput) {
      DOM.globalSearchInput.addEventListener("input", () => {
        const val = DOM.globalSearchInput.value.trim();
        if (DOM.searchClearBtn) {
          DOM.searchClearBtn.hidden = val.length === 0;
        }
        renderSearchResults(val, currentSearchCategory);
      });

      DOM.globalSearchInput.addEventListener("keydown", handleSearchKeyboard);
    }

    if (DOM.searchClearBtn) {
      DOM.searchClearBtn.addEventListener("click", () => {
        if (DOM.globalSearchInput) {
          DOM.globalSearchInput.value = "";
          DOM.globalSearchInput.focus();
          DOM.searchClearBtn.hidden = true;
          renderSearchResults("", currentSearchCategory);
        }
      });
    }

    // Category filter pills
    DOM.searchFilterPills.forEach((pill) => {
      pill.addEventListener("click", () => {
        DOM.searchFilterPills.forEach((p) => {
          p.classList.remove("active");
          p.setAttribute("aria-selected", "false");
        });
        pill.classList.add("active");
        pill.setAttribute("aria-selected", "true");
        currentSearchCategory = pill.dataset.category || "all";
        const query = DOM.globalSearchInput
          ? DOM.globalSearchInput.value.trim()
          : "";
        renderSearchResults(query, currentSearchCategory);
      });
    });

    // Global shortcut Ctrl+K or Cmd+K
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        if (
          DOM.searchModalBackdrop &&
          DOM.searchModalBackdrop.classList.contains("open")
        ) {
          closeSearchModal();
        } else {
          openSearchModal();
        }
      } else if (e.key === "Escape") {
        if (
          DOM.searchModalBackdrop &&
          DOM.searchModalBackdrop.classList.contains("open")
        ) {
          closeSearchModal();
        }
        if (DOM.mobileDrawer && DOM.mobileDrawer.classList.contains("open")) {
          closeMobileDrawer();
        }
      }
    });
  }

  function openSearchModal() {
    if (!DOM.searchModalBackdrop) return;
    DOM.searchModalBackdrop.classList.add("open");
    DOM.searchModalBackdrop.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
    if (DOM.globalSearchInput) {
      DOM.globalSearchInput.value = "";
      DOM.globalSearchInput.focus();
      if (DOM.searchClearBtn) DOM.searchClearBtn.hidden = true;
    }
    renderSearchResults("", currentSearchCategory);
  }

  function closeSearchModal() {
    if (!DOM.searchModalBackdrop) return;
    DOM.searchModalBackdrop.classList.remove("open");
    DOM.searchModalBackdrop.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
  }

  function renderSearchResults(query = "", category = "all") {
    if (!DOM.searchResultsList) return;
    DOM.searchResultsList.innerHTML = "";

    const cleanQuery = query.toLowerCase();

    const filtered = HUZIKIT_TOOLS.filter((tool) => {
      const matchCat =
        category === "all" ||
        tool.category.toLowerCase() === category.toLowerCase();
      if (!matchCat) return false;
      if (!cleanQuery) return true;

      const matchName = tool.name.toLowerCase().includes(cleanQuery);
      const matchDesc = tool.desc.toLowerCase().includes(cleanQuery);
      const matchKey = tool.keywords.some((kw) =>
        kw.toLowerCase().includes(cleanQuery),
      );
      return matchName || matchDesc || matchKey;
    });

    if (filtered.length === 0) {
      const emptyDiv = document.createElement("div");
      emptyDiv.className = "search-no-results";
      emptyDiv.textContent = `No tools found matching "${query}". Try "resizer", "calculator", "word", or "PDF".`;
      DOM.searchResultsList.appendChild(emptyDiv);
      return;
    }

    filtered.forEach((tool, index) => {
      const item = document.createElement("a");
      item.href = tool.url;
      item.className =
        "search-result-item" + (index === 0 ? " highlighted" : "");
      item.setAttribute("role", "option");

      const mainBlock = document.createElement("div");
      mainBlock.className = "result-main";

      const title = document.createElement("span");
      title.className = "result-title";
      title.textContent = tool.name;

      const desc = document.createElement("span");
      desc.className = "result-desc";
      desc.textContent = tool.desc;

      mainBlock.appendChild(title);
      mainBlock.appendChild(desc);

      const catBadge = document.createElement("span");
      catBadge.className = "result-category-badge";
      catBadge.textContent = tool.category;

      item.appendChild(mainBlock);
      item.appendChild(catBadge);

      item.addEventListener("click", () => {
        closeSearchModal();
      });

      DOM.searchResultsList.appendChild(item);
    });
  }

  function handleSearchKeyboard(e) {
    if (!DOM.searchResultsList) return;
    const items = DOM.searchResultsList.querySelectorAll(".search-result-item");
    if (items.length === 0) return;

    let currentIndex = -1;
    items.forEach((it, idx) => {
      if (it.classList.contains("highlighted")) currentIndex = idx;
    });

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      items.forEach((it) => it.classList.remove("highlighted"));
      items[nextIndex].classList.add("highlighted");
      items[nextIndex].scrollIntoView({ block: "nearest" });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      items.forEach((it) => it.classList.remove("highlighted"));
      items[prevIndex].classList.add("highlighted");
      items[prevIndex].scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter") {
      if (currentIndex >= 0 && items[currentIndex]) {
        e.preventDefault();
        items[currentIndex].click();
      }
    }
  }

  /* ==========================================================================
     3. FILE UPLOADER & DRAG-AND-DROP ENGINE
     ========================================================================== */
  function initUploader() {
    if (!DOM.dropZone || !DOM.fileInput) return;

    // Trigger file browser on click
    DOM.dropZone.addEventListener("click", (e) => {
      // Avoid recursive re-trigger if clicking browseBtn
      if (e.target !== DOM.fileInput) {
        DOM.fileInput.click();
      }
    });

    if (DOM.browseBtn) {
      DOM.browseBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        DOM.fileInput.click();
      });
    }

    // Keyboard support for upload card (Enter / Space)
    DOM.dropZone.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        DOM.fileInput.click();
      }
    });

    DOM.fileInput.addEventListener("change", (e) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        handleIncomingFiles(files);
      }
      DOM.fileInput.value = ""; // Reset input to allow re-uploading same file if desired
    });

    // Drag and Drop Events
    ["dragenter", "dragover"].forEach((eventName) => {
      DOM.dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        DOM.dropZone.classList.add("drag-over");
      });
    });

    ["dragleave", "dragend"].forEach((eventName) => {
      DOM.dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        DOM.dropZone.classList.remove("drag-over");
      });
    });

    DOM.dropZone.addEventListener("drop", (e) => {
      e.preventDefault();
      e.stopPropagation();
      DOM.dropZone.classList.remove("drag-over");
      const dt = e.dataTransfer;
      if (dt && dt.files && dt.files.length > 0) {
        handleIncomingFiles(dt.files);
      }
    });

    // Window level drag prevention so browser doesn't open dropped images directly
    window.addEventListener("dragover", (e) => e.preventDefault());
    window.addEventListener("drop", (e) => e.preventDefault());

    // Clipboard Paste support
    window.addEventListener("paste", (e) => {
      const clipboardItems = e.clipboardData ? e.clipboardData.items : null;
      if (!clipboardItems) return;
      const imageFiles = [];
      for (let i = 0; i < clipboardItems.length; i++) {
        if (clipboardItems[i].type.indexOf("image") !== -1) {
          const file = clipboardItems[i].getAsFile();
          if (file) imageFiles.push(file);
        }
      }
      if (imageFiles.length > 0) {
        handleIncomingFiles(imageFiles);
        showToast(
          `Pasted ${imageFiles.length} image(s) from clipboard.`,
          "success",
        );
      }
    });
  }

  function validateImageFile(file) {
    const validMimes = ["image/jpeg", "image/png", "image/webp"];
    const validExtensions = [".jpg", ".jpeg", ".png", ".webp"];

    const hasValidMime = validMimes.includes(file.type);
    const hasValidExt = validExtensions.some((ext) =>
      file.name.toLowerCase().endsWith(ext),
    );

    if (!hasValidMime && !hasValidExt) {
      return {
        valid: false,
        error: `Unsupported file format: "${file.name}". Please upload JPG, PNG, or WebP images.`,
      };
    }

    // 50MB Safety check
    const maxBytes = 50 * 1024 * 1024;
    if (file.size > maxBytes) {
      return {
        valid: false,
        error: `File "${file.name}" exceeds the 50MB browser processing limit.`,
      };
    }

    return { valid: true };
  }

  function handleIncomingFiles(fileList) {
    const files = Array.from(fileList);
    let validCount = 0;

    files.forEach((file) => {
      const validation = validateImageFile(file);
      if (!validation.valid) {
        showToast(validation.error, "error", 4500);
        return;
      }

      validCount++;
      const id =
        "img_" + Date.now() + "_" + Math.random().toString(36).substring(2, 8);
      const originalUrl = URL.createObjectURL(file);

      const item = {
        id: id,
        file: file,
        name: file.name,
        originalWidth: 0,
        originalHeight: 0,
        originalSize: file.size,
        originalType: file.type || "image/jpeg",
        originalUrl: originalUrl,
        resultBlob: null,
        resultUrl: null,
        resultWidth: 0,
        resultHeight: 0,
        resultSize: 0,
        resultType: null,
        status: "ready", // 'ready', 'processing', 'completed', 'failed'
        errorMsg: "",
      };

      // Read image dimensions via Image constructor
      const img = new Image();
      img.onload = function () {
        item.originalWidth = img.naturalWidth || img.width;
        item.originalHeight = img.naturalHeight || img.height;
        item.aspectRatio = item.originalWidth / item.originalHeight;

        // If this is the first item or no active item, select it
        if (!AppState.activeId) {
          selectActiveItem(item.id);
        }
        renderQueue();
        updateToolbarState();
      };
      img.onerror = function () {
        item.status = "failed";
        item.errorMsg = "Failed to decode image data.";
        renderQueue();
      };
      img.src = originalUrl;

      AppState.queue.push(item);
    });

    if (validCount > 0) {
      showToast(
        `Added ${validCount} image(s) to the resizing queue.`,
        "success",
      );
      if (DOM.workspaceArea) DOM.workspaceArea.hidden = false;
      renderQueue();
      updateToolbarState();
    }
  }

  /* ==========================================================================
     4. RESIZE CONTROLS & ASPECT RATIO SYNC
     ========================================================================== */
  function initResizeControls() {
    // Mode tabs: Custom Pixels vs Percentage
    if (DOM.modePixelsTab && DOM.modePercentTab) {
      DOM.modePixelsTab.addEventListener("click", () =>
        switchModeTab("pixels"),
      );
      DOM.modePercentTab.addEventListener("click", () =>
        switchModeTab("percent"),
      );
    }

    // Aspect Ratio Lock Toggle
    if (DOM.lockRatioBtn) {
      DOM.lockRatioBtn.addEventListener("click", () => {
        AppState.aspectRatioLocked = !AppState.aspectRatioLocked;
        updateLockRatioUI();
      });
    }

    // Width input change handler
    if (DOM.inputWidth) {
      DOM.inputWidth.addEventListener("input", () => {
        handleWidthChange();
      });
    }

    // Height input change handler
    if (DOM.inputHeight) {
      DOM.inputHeight.addEventListener("input", () => {
        handleHeightChange();
      });
    }

    // Swap dimensions button
    if (DOM.swapDimensionsBtn) {
      DOM.swapDimensionsBtn.addEventListener("click", () => {
        const curW = parseInt(DOM.inputWidth.value, 10);
        const curH = parseInt(DOM.inputHeight.value, 10);
        if (!isNaN(curW) && !isNaN(curH)) {
          DOM.inputWidth.value = curH;
          DOM.inputHeight.value = curW;
          if (AppState.originalRatio) {
            AppState.originalRatio = curH / curW;
          }
          showToast("Swapped width and height dimensions.", "info", 2000);
        }
      });
    }

    // Restore original dimensions
    if (DOM.resetToOriginalBtn) {
      DOM.resetToOriginalBtn.addEventListener("click", () => {
        const active = getActiveItem();
        if (active && active.originalWidth > 0) {
          DOM.inputWidth.value = active.originalWidth;
          DOM.inputHeight.value = active.originalHeight;
          AppState.originalRatio = active.originalWidth / active.originalHeight;
          showToast("Restored original image dimensions.", "info", 2000);
        }
      });
    }

    // Preset chips
    DOM.presetChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const w = parseInt(chip.dataset.w, 10);
        const h = parseInt(chip.dataset.h, 10);
        if (!isNaN(w) && !isNaN(h)) {
          DOM.inputWidth.value = w;
          DOM.inputHeight.value = h;
          AppState.originalRatio = w / h;
          showToast(
            `Applied preset: ${chip.querySelector(".preset-name").textContent} (${w}×${h}px)`,
            "info",
            2000,
          );
        }
      });
    });

    // Percentage quick chips
    DOM.percentChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        DOM.percentChips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        const percent = parseInt(chip.dataset.percent, 10);
        if (DOM.customPercentInput) DOM.customPercentInput.value = percent;
        applyPercentageScale(percent);
      });
    });

    // Apply custom percentage button
    if (DOM.applyPercentBtn && DOM.customPercentInput) {
      DOM.applyPercentBtn.addEventListener("click", () => {
        const percent = parseInt(DOM.customPercentInput.value, 10);
        if (isNaN(percent) || percent <= 0) {
          showToast(
            "Please enter a valid percentage greater than 0%.",
            "warning",
          );
          return;
        }
        applyPercentageScale(percent);
      });
    }

    // Prevent Upscaling toggle
    if (DOM.preventUpscaleToggle) {
      DOM.preventUpscaleToggle.addEventListener("change", (e) => {
        AppState.preventUpscale = e.target.checked;
      });
    }

    // Max bounds toggle
    if (DOM.maxBoundsToggle) {
      DOM.maxBoundsToggle.addEventListener("change", (e) => {
        AppState.maxBoundsEnabled = e.target.checked;
        if (DOM.maxBoundsBox) {
          DOM.maxBoundsBox.hidden = !AppState.maxBoundsEnabled;
        }
      });
    }

    // Apply Max Bounds button
    if (DOM.applyMaxBoundsBtn) {
      DOM.applyMaxBoundsBtn.addEventListener(
        "click",
        applyMaxBoundsCalculation,
      );
    }

    // Output Format selector
    if (DOM.outputFormatSelect) {
      DOM.outputFormatSelect.addEventListener("change", (e) => {
        AppState.outputFormat = e.target.value;
        updateFormatUI();
      });
    }

    // Quality range slider
    if (DOM.qualityRange) {
      DOM.qualityRange.addEventListener("input", (e) => {
        const val = parseInt(e.target.value, 10);
        AppState.quality = val / 100;
        if (DOM.qualityValueBadge) {
          DOM.qualityValueBadge.textContent = val + "%";
        }
      });
    }

    // JPEG Background color picker
    if (DOM.jpegBgColor) {
      DOM.jpegBgColor.addEventListener("input", (e) => {
        AppState.jpegBgColor = e.target.value;
        if (DOM.jpegBgHex) {
          DOM.jpegBgHex.textContent = e.target.value.toUpperCase();
        }
      });
    }

    // Action buttons
    if (DOM.applyCurrentResizeBtn) {
      DOM.applyCurrentResizeBtn.addEventListener("click", () => {
        const active = getActiveItem();
        if (active) {
          processSingleItem(active);
        } else {
          showToast("Please upload or select an image first.", "warning");
        }
      });
    }

    if (DOM.resizeAllBtn) {
      DOM.resizeAllBtn.addEventListener("click", processBatch);
    }

    if (DOM.downloadAllBtn) {
      DOM.downloadAllBtn.addEventListener("click", downloadAllImages);
    }

    if (DOM.downloadActiveBtn) {
      DOM.downloadActiveBtn.addEventListener("click", () => {
        const active = getActiveItem();
        if (active && active.resultBlob) {
          downloadSingleItem(active);
        }
      });
    }

    if (DOM.clearAllBtn) {
      DOM.clearAllBtn.addEventListener("click", clearAllQueue);
    }

    if (DOM.resetSettingsBtn) {
      DOM.resetSettingsBtn.addEventListener("click", resetSettingsToDefault);
    }
  }

  function switchModeTab(mode) {
    if (!DOM.modePixelsTab || !DOM.modePercentTab) return;
    if (mode === "pixels") {
      DOM.modePixelsTab.classList.add("active");
      DOM.modePixelsTab.setAttribute("aria-selected", "true");
      DOM.modePercentTab.classList.remove("active");
      DOM.modePercentTab.setAttribute("aria-selected", "false");
      if (DOM.pixelsPanel) DOM.pixelsPanel.hidden = false;
      if (DOM.percentPanel) DOM.percentPanel.hidden = true;
    } else {
      DOM.modePercentTab.classList.add("active");
      DOM.modePercentTab.setAttribute("aria-selected", "true");
      DOM.modePixelsTab.classList.remove("active");
      DOM.modePixelsTab.setAttribute("aria-selected", "false");
      if (DOM.percentPanel) DOM.percentPanel.hidden = false;
      if (DOM.pixelsPanel) DOM.pixelsPanel.hidden = true;
    }
  }

  function updateLockRatioUI() {
    if (!DOM.lockRatioBtn || !DOM.lockRatioLabel) return;
    if (AppState.aspectRatioLocked) {
      DOM.lockRatioBtn.classList.add("locked");
      DOM.lockRatioBtn.setAttribute("aria-pressed", "true");
      DOM.lockRatioBtn.title = "Lock Aspect Ratio (Active)";
      DOM.lockRatioLabel.textContent = "Ratio Locked";
    } else {
      DOM.lockRatioBtn.classList.remove("locked");
      DOM.lockRatioBtn.setAttribute("aria-pressed", "false");
      DOM.lockRatioBtn.title = "Lock Aspect Ratio (Inactive)";
      DOM.lockRatioLabel.textContent = "Ratio Unlocked";
    }
  }

  function handleWidthChange() {
    const w = parseInt(DOM.inputWidth.value, 10);
    if (isNaN(w) || w <= 0) return;

    if (AppState.aspectRatioLocked && AppState.originalRatio > 0) {
      const calculatedH = Math.max(1, Math.round(w / AppState.originalRatio));
      DOM.inputHeight.value = calculatedH;
    }
  }

  function handleHeightChange() {
    const h = parseInt(DOM.inputHeight.value, 10);
    if (isNaN(h) || h <= 0) return;

    if (AppState.aspectRatioLocked && AppState.originalRatio > 0) {
      const calculatedW = Math.max(1, Math.round(h * AppState.originalRatio));
      DOM.inputWidth.value = calculatedW;
    }
  }

  function applyPercentageScale(percent) {
    const active = getActiveItem();
    if (!active || active.originalWidth <= 0) {
      showToast(
        "Please upload an image to calculate percentage resize.",
        "warning",
      );
      return;
    }
    const factor = percent / 100;
    const targetW = Math.max(1, Math.round(active.originalWidth * factor));
    const targetH = Math.max(1, Math.round(active.originalHeight * factor));

    DOM.inputWidth.value = targetW;
    DOM.inputHeight.value = targetH;
    AppState.originalRatio = targetW / targetH;
    showToast(
      `Calculated ${percent}% scale: ${targetW} × ${targetH}px`,
      "info",
      2200,
    );
  }

  function applyMaxBoundsCalculation() {
    const active = getActiveItem();
    if (!active || active.originalWidth <= 0) {
      showToast("Upload an image to fit inside maximum bounds.", "warning");
      return;
    }
    const maxW = parseInt(DOM.maxBoundWidth.value, 10);
    const maxH = parseInt(DOM.maxBoundHeight.value, 10);

    if (isNaN(maxW) || isNaN(maxH) || maxW <= 0 || maxH <= 0) {
      showToast(
        "Please enter valid positive numbers for Max Width and Max Height.",
        "warning",
      );
      return;
    }

    const scaleW = maxW / active.originalWidth;
    const scaleH = maxH / active.originalHeight;
    const scale = Math.min(scaleW, scaleH, 1); // Never upscale

    const targetW = Math.max(1, Math.round(active.originalWidth * scale));
    const targetH = Math.max(1, Math.round(active.originalHeight * scale));

    DOM.inputWidth.value = targetW;
    DOM.inputHeight.value = targetH;
    AppState.originalRatio = targetW / targetH;
    showToast(
      `Fitted within bounds: ${targetW} × ${targetH}px`,
      "success",
      2500,
    );
  }

  function updateFormatUI() {
    const fmt = AppState.outputFormat;
    // Show/hide PNG notice
    if (DOM.pngQualityNote) {
      DOM.pngQualityNote.hidden = fmt !== "image/png";
    }
    // Show/hide JPEG transparency background fill option
    if (DOM.jpegBgField) {
      DOM.jpegBgField.hidden = fmt !== "image/jpeg";
    }
  }

  /* ==========================================================================
     5. QUEUE MANAGEMENT & BEFORE/AFTER INSPECTION
     ========================================================================== */
  function getActiveItem() {
    return AppState.queue.find((item) => item.id === AppState.activeId) || null;
  }

  function selectActiveItem(id) {
    AppState.activeId = id;
    const active = getActiveItem();
    if (!active) return;

    if (active.originalWidth > 0 && active.originalHeight > 0) {
      AppState.originalRatio = active.originalWidth / active.originalHeight;
      // Populate inputs with current image dimensions if inputs are empty or unset
      if (!DOM.inputWidth.value || parseInt(DOM.inputWidth.value, 10) === 0) {
        DOM.inputWidth.value = active.originalWidth;
        DOM.inputHeight.value = active.originalHeight;
      }
    }

    renderComparisonCard(active);
    renderQueue();
  }

  function renderComparisonCard(item) {
    if (!item) return;

    if (DOM.activeImageName) DOM.activeImageName.textContent = item.name;
    if (DOM.activeImageStatus) {
      DOM.activeImageStatus.className = `comp-status-tag ${item.status}`;
      DOM.activeImageStatus.textContent = item.status.toUpperCase();
    }

    // Original side
    if (DOM.previewOriginalImg) {
      DOM.previewOriginalImg.src = item.originalUrl;
      DOM.previewOriginalImg.alt = `Original: ${item.name}`;
    }
    if (DOM.statOrigDims) {
      DOM.statOrigDims.textContent = `${item.originalWidth} × ${item.originalHeight} px`;
    }
    if (DOM.statOrigSize) {
      DOM.statOrigSize.textContent = formatBytes(item.originalSize);
    }
    if (DOM.statOrigFormat) {
      DOM.statOrigFormat.textContent = getReadableFormat(item.originalType);
    }

    // Resized side
    if (item.resultBlob && item.resultUrl) {
      if (DOM.previewResizedImg) {
        DOM.previewResizedImg.src = item.resultUrl;
        DOM.previewResizedImg.hidden = false;
      }
      if (DOM.previewResizedPlaceholder) {
        DOM.previewResizedPlaceholder.hidden = true;
      }

      if (DOM.statResizedDims) {
        DOM.statResizedDims.textContent = `${item.resultWidth} × ${item.resultHeight} px`;
      }
      if (DOM.statResizedSize) {
        DOM.statResizedSize.textContent = formatBytes(item.resultSize);
      }

      // Savings calculation
      if (DOM.statSizeDiff) {
        const diffBytes = item.resultSize - item.originalSize;
        const diffPercent = ((diffBytes / item.originalSize) * 100).toFixed(1);
        if (diffBytes <= 0) {
          DOM.statSizeDiff.textContent = `${diffPercent}% (${formatBytes(Math.abs(diffBytes))} saved)`;
          DOM.statSizeDiff.className = "stat-value badge-savings";
        } else {
          DOM.statSizeDiff.textContent = `+${diffPercent}% (${formatBytes(diffBytes)} larger)`;
          DOM.statSizeDiff.className = "stat-value highlight-val";
        }
      }

      if (DOM.downloadActiveBtn) {
        DOM.downloadActiveBtn.disabled = false;
      }
    } else {
      if (DOM.previewResizedImg) DOM.previewResizedImg.hidden = true;
      if (DOM.previewResizedPlaceholder)
        DOM.previewResizedPlaceholder.hidden = false;
      if (DOM.statResizedDims) DOM.statResizedDims.textContent = "—";
      if (DOM.statResizedSize) DOM.statResizedSize.textContent = "—";
      if (DOM.statSizeDiff) DOM.statSizeDiff.textContent = "—";
      if (DOM.downloadActiveBtn) DOM.downloadActiveBtn.disabled = true;
    }
  }

  function renderQueue() {
    if (!DOM.queueItemsList) return;
    DOM.queueItemsList.innerHTML = "";

    if (DOM.queueCountBadge) {
      DOM.queueCountBadge.textContent = `${AppState.queue.length} image${AppState.queue.length === 1 ? "" : "s"}`;
    }

    if (AppState.queue.length === 0) {
      if (DOM.workspaceArea) DOM.workspaceArea.hidden = true;
      return;
    }

    AppState.queue.forEach((item) => {
      const row = document.createElement("div");
      row.className =
        "queue-row" + (item.id === AppState.activeId ? " selected" : "");
      row.setAttribute("role", "listitem");

      // Click to select/inspect
      row.addEventListener("click", (e) => {
        if (!e.target.closest("button")) {
          selectActiveItem(item.id);
        }
      });

      // Thumbnail + Info
      const thumbMeta = document.createElement("div");
      thumbMeta.className = "queue-thumb-meta";

      const thumbImg = document.createElement("img");
      thumbImg.className = "queue-thumb";
      thumbImg.src = item.originalUrl;
      thumbImg.alt = item.name;

      const fileInfo = document.createElement("div");
      fileInfo.className = "queue-file-info";

      const fileName = document.createElement("span");
      fileName.className = "queue-file-name";
      fileName.textContent = item.name;

      const fileSub = document.createElement("div");
      fileSub.className = "queue-file-sub";

      const origDimSpan = document.createElement("span");
      origDimSpan.textContent = `${item.originalWidth}×${item.originalHeight}px`;

      const origSizeSpan = document.createElement("span");
      origSizeSpan.textContent = `• ${formatBytes(item.originalSize)}`;

      const formatSpan = document.createElement("span");
      formatSpan.textContent = `• ${getReadableFormat(item.originalType)}`;

      fileSub.appendChild(origDimSpan);
      fileSub.appendChild(origSizeSpan);
      fileSub.appendChild(formatSpan);

      fileInfo.appendChild(fileName);
      fileInfo.appendChild(fileSub);

      thumbMeta.appendChild(thumbImg);
      thumbMeta.appendChild(fileInfo);

      // Actions & Status
      const rowActions = document.createElement("div");
      rowActions.className = "queue-row-actions";

      const statusBadge = document.createElement("span");
      statusBadge.className = `status-badge ${item.status}`;
      statusBadge.textContent = item.status.toUpperCase();
      rowActions.appendChild(statusBadge);

      // Download button for completed row
      if (item.status === "completed" && item.resultBlob) {
        const downloadBtn = document.createElement("button");
        downloadBtn.type = "button";
        downloadBtn.className = "btn btn-primary btn-sm";
        downloadBtn.innerHTML = `
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>Download</span>
        `;
        downloadBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          downloadSingleItem(item);
        });
        rowActions.appendChild(downloadBtn);
      }

      // Remove button
      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "btn-remove-row";
      removeBtn.title = "Remove image";
      removeBtn.setAttribute("aria-label", `Remove ${item.name}`);
      removeBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;
      removeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        removeItemFromQueue(item.id);
      });
      rowActions.appendChild(removeBtn);

      row.appendChild(thumbMeta);
      row.appendChild(rowActions);

      DOM.queueItemsList.appendChild(row);
    });
  }

  function removeItemFromQueue(id) {
    const idx = AppState.queue.findIndex((item) => item.id === id);
    if (idx === -1) return;

    const item = AppState.queue[idx];
    if (item.originalUrl) URL.revokeObjectURL(item.originalUrl);
    if (item.resultUrl) URL.revokeObjectURL(item.resultUrl);

    AppState.queue.splice(idx, 1);

    if (AppState.activeId === id) {
      AppState.activeId =
        AppState.queue.length > 0 ? AppState.queue[0].id : null;
    }

    if (AppState.activeId) {
      selectActiveItem(AppState.activeId);
    } else {
      if (DOM.workspaceArea) DOM.workspaceArea.hidden = true;
    }

    renderQueue();
    updateToolbarState();
    showToast("Image removed from queue.", "info", 1800);
  }

  function clearAllQueue() {
    if (AppState.queue.length === 0) return;
    AppState.queue.forEach((item) => {
      if (item.originalUrl) URL.revokeObjectURL(item.originalUrl);
      if (item.resultUrl) URL.revokeObjectURL(item.resultUrl);
    });

    AppState.queue = [];
    AppState.activeId = null;

    if (DOM.workspaceArea) DOM.workspaceArea.hidden = true;
    renderQueue();
    updateToolbarState();
    showToast("Cleared all images from queue.", "info", 2000);
  }

  function resetSettingsToDefault() {
    AppState.aspectRatioLocked = true;
    AppState.preventUpscale = true;
    AppState.maxBoundsEnabled = false;
    AppState.quality = 0.8;
    AppState.outputFormat = "auto";
    AppState.jpegBgColor = "#ffffff";

    if (DOM.preventUpscaleToggle) DOM.preventUpscaleToggle.checked = true;
    if (DOM.maxBoundsToggle) DOM.maxBoundsToggle.checked = false;
    if (DOM.maxBoundsBox) DOM.maxBoundsBox.hidden = true;
    if (DOM.qualityRange) DOM.qualityRange.value = 80;
    if (DOM.qualityValueBadge) DOM.qualityValueBadge.textContent = "80%";
    if (DOM.outputFormatSelect) DOM.outputFormatSelect.value = "auto";
    if (DOM.jpegBgColor) DOM.jpegBgColor.value = "#ffffff";
    if (DOM.jpegBgHex) DOM.jpegBgHex.textContent = "#FFFFFF";

    updateLockRatioUI();
    updateFormatUI();

    const active = getActiveItem();
    if (active && active.originalWidth > 0) {
      DOM.inputWidth.value = active.originalWidth;
      DOM.inputHeight.value = active.originalHeight;
      AppState.originalRatio = active.originalWidth / active.originalHeight;
    }

    showToast("Reset settings to default values.", "info", 2000);
  }

  function updateToolbarState() {
    const hasItems = AppState.queue.length > 0;
    const hasCompleted = AppState.queue.some((i) => i.status === "completed");

    if (DOM.resizeAllBtn)
      DOM.resizeAllBtn.disabled = !hasItems || AppState.isProcessingBatch;
    if (DOM.downloadAllBtn)
      DOM.downloadAllBtn.disabled = !hasCompleted || AppState.isProcessingBatch;
  }

  /* ==========================================================================
     6. REAL CANVAS RESIZING ENGINE (Pixel-Accurate)
     ========================================================================== */
  function calculateTargetDimensions(item) {
    let targetW = parseInt(DOM.inputWidth.value, 10);
    let targetH = parseInt(DOM.inputHeight.value, 10);

    // Validate inputs
    if (isNaN(targetW) || targetW <= 0) targetW = item.originalWidth;
    if (isNaN(targetH) || targetH <= 0) targetH = item.originalHeight;

    // 1. Prevent Upscaling rule
    if (AppState.preventUpscale) {
      if (targetW > item.originalWidth || targetH > item.originalHeight) {
        if (AppState.aspectRatioLocked) {
          const scale = Math.min(
            item.originalWidth / targetW,
            item.originalHeight / targetH,
          );
          targetW = Math.max(1, Math.round(targetW * scale));
          targetH = Math.max(1, Math.round(targetH * scale));
        } else {
          targetW = Math.min(targetW, item.originalWidth);
          targetH = Math.min(targetH, item.originalHeight);
        }
      }
    }

    // 2. Maximum Bounds rule (if active)
    if (AppState.maxBoundsEnabled) {
      const maxW = parseInt(DOM.maxBoundWidth.value, 10);
      const maxH = parseInt(DOM.maxBoundHeight.value, 10);
      if (!isNaN(maxW) && !isNaN(maxH) && maxW > 0 && maxH > 0) {
        const scaleW = maxW / targetW;
        const scaleH = maxH / targetH;
        const scale = Math.min(scaleW, scaleH, 1);
        targetW = Math.max(1, Math.round(targetW * scale));
        targetH = Math.max(1, Math.round(targetH * scale));
      }
    }

    // 3. Browser safety guard (16,384px is hardware canvas ceiling)
    const MAX_CANVAS_DIM = 16384;
    if (targetW > MAX_CANVAS_DIM || targetH > MAX_CANVAS_DIM) {
      const downscale = Math.min(
        MAX_CANVAS_DIM / targetW,
        MAX_CANVAS_DIM / targetH,
      );
      targetW = Math.round(targetW * downscale);
      targetH = Math.round(targetH * downscale);
    }

    return { width: targetW, height: targetH };
  }

  function resolveMimeType(item) {
    if (AppState.outputFormat === "auto") {
      return item.originalType || "image/jpeg";
    }
    return AppState.outputFormat;
  }

  function processSingleItem(item) {
    return new Promise((resolve) => {
      item.status = "processing";
      renderQueue();
      if (item.id === AppState.activeId) {
        renderComparisonCard(item);
      }

      const dims = calculateTargetDimensions(item);
      const targetW = dims.width;
      const targetH = dims.height;
      const mimeType = resolveMimeType(item);

      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = function () {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = targetW;
          canvas.height = targetH;
          const ctx = canvas.getContext("2d");

          if (!ctx) {
            throw new Error("Canvas 2D context creation failed.");
          }

          // Enable high quality bicubic interpolation
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";

          // For JPEG, fill with background color to handle alpha transparency cleanly
          if (mimeType === "image/jpeg") {
            ctx.fillStyle = AppState.jpegBgColor || "#ffffff";
            ctx.fillRect(0, 0, targetW, targetH);
          }

          ctx.drawImage(img, 0, 0, targetW, targetH);

          // Real canvas.toBlob execution
          const quality =
            mimeType === "image/png" ? undefined : AppState.quality;

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                item.status = "failed";
                item.errorMsg = "Failed to generate output image blob.";
                showToast(`Failed to resize "${item.name}".`, "error");
                renderQueue();
                resolve(false);
                return;
              }

              // Cleanup previous result URL if present
              if (item.resultUrl) {
                URL.revokeObjectURL(item.resultUrl);
              }

              item.resultBlob = blob;
              item.resultUrl = URL.createObjectURL(blob);
              item.resultWidth = targetW;
              item.resultHeight = targetH;
              item.resultSize = blob.size;
              item.resultType = mimeType;
              item.status = "completed";

              renderQueue();
              updateToolbarState();
              if (item.id === AppState.activeId) {
                renderComparisonCard(item);
              }

              resolve(true);
            },
            mimeType,
            quality,
          );
        } catch (err) {
          console.error(err);
          item.status = "failed";
          item.errorMsg = err.message || "Image processing error.";
          showToast(
            `Error processing "${item.name}": ${item.errorMsg}`,
            "error",
          );
          renderQueue();
          resolve(false);
        }
      };

      img.onerror = function () {
        item.status = "failed";
        item.errorMsg = "Could not load image source.";
        renderQueue();
        resolve(false);
      };

      img.src = item.originalUrl;
    });
  }

  /* ==========================================================================
     7. BATCH MULTI-FILE RESIZE ENGINE & PROGRESS
     ========================================================================== */
  async function processBatch() {
    if (AppState.isProcessingBatch || AppState.queue.length === 0) return;

    AppState.isProcessingBatch = true;
    updateToolbarState();

    if (DOM.batchProgressBar) {
      DOM.batchProgressBar.hidden = false;
      DOM.batchProgressBar.setAttribute("aria-hidden", "false");
    }

    const total = AppState.queue.length;
    let completedCount = 0;

    for (let i = 0; i < total; i++) {
      const currentItem = AppState.queue[i];

      // Update progress display
      const percent = Math.round((i / total) * 100);
      if (DOM.batchProgressLabel) {
        DOM.batchProgressLabel.textContent = `Processing image ${i + 1} of ${total}: "${currentItem.name}"...`;
      }
      if (DOM.batchProgressPercent) {
        DOM.batchProgressPercent.textContent = `${percent}%`;
      }
      if (DOM.batchProgressFill) {
        DOM.batchProgressFill.style.width = `${percent}%`;
      }

      await processSingleItem(currentItem);
      completedCount++;
    }

    // Complete progress
    if (DOM.batchProgressPercent) DOM.batchProgressPercent.textContent = "100%";
    if (DOM.batchProgressFill) DOM.batchProgressFill.style.width = "100%";
    if (DOM.batchProgressLabel) {
      DOM.batchProgressLabel.textContent = `Batch resize complete! Successfully processed ${completedCount} image(s).`;
    }

    showToast(
      `Batch completed: ${completedCount} images resized successfully.`,
      "success",
      3500,
    );

    AppState.isProcessingBatch = false;
    updateToolbarState();

    setTimeout(() => {
      if (DOM.batchProgressBar && !AppState.isProcessingBatch) {
        DOM.batchProgressBar.hidden = true;
        DOM.batchProgressBar.setAttribute("aria-hidden", "true");
      }
    }, 4000);
  }

  /* ==========================================================================
     8. DOWNLOAD ENGINE: INDIVIDUAL & BATCH ZIP
     ========================================================================== */
  function getResizedFilename(item) {
    const lastDot = item.name.lastIndexOf(".");
    const baseName =
      lastDot !== -1 ? item.name.substring(0, lastDot) : item.name;
    const ext = getFileExtension(item.resultType || item.originalType);
    return `${baseName}-resized.${ext}`;
  }

  function downloadSingleItem(item) {
    if (!item.resultBlob || !item.resultUrl) return;

    const filename = getResizedFilename(item);
    const link = document.createElement("a");
    link.href = item.resultUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast(`Downloading "${filename}"...`, "success", 2000);
  }

  async function downloadAllImages() {
    const completedItems = AppState.queue.filter(
      (i) => i.status === "completed" && i.resultBlob,
    );
    if (completedItems.length === 0) {
      showToast(
        'No resized images ready for download. Please click "Resize All" first.',
        "warning",
      );
      return;
    }

    // If JSZip is available in window, bundle into a true .zip archive
    if (typeof JSZip !== "undefined") {
      try {
        showToast("Packaging images into ZIP archive...", "info", 2500);
        const zip = new JSZip();

        completedItems.forEach((item) => {
          const filename = getResizedFilename(item);
          zip.file(filename, item.resultBlob);
        });

        const zipBlob = await zip.generateAsync({ type: "blob" });
        const zipUrl = URL.createObjectURL(zipBlob);

        const link = document.createElement("a");
        link.href = zipUrl;
        link.download = "huzikit-resized-images.zip";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => URL.revokeObjectURL(zipUrl), 20000);
        showToast("ZIP archive downloaded successfully!", "success", 3000);
        return;
      } catch (err) {
        console.error("JSZip error, falling back to sequential download:", err);
      }
    }

    // Fallback: sequential direct downloads with safe interval
    showToast(
      `Downloading ${completedItems.length} files sequentially...`,
      "info",
      3000,
    );
    completedItems.forEach((item, idx) => {
      setTimeout(() => {
        downloadSingleItem(item);
      }, idx * 300);
    });
  }

  /* ==========================================================================
     9. ACCESSIBLE FAQ ACCORDION
     ========================================================================== */
  function initFAQ() {
    if (!DOM.faqAccordion) return;
    const triggers = DOM.faqAccordion.querySelectorAll(".faq-trigger");

    triggers.forEach((btn) => {
      btn.addEventListener("click", () => {
        const isExpanded = btn.getAttribute("aria-expanded") === "true";
        const panelId = btn.getAttribute("aria-controls");
        const panel = document.getElementById(panelId);

        // Close other panels for clean accordion behavior
        triggers.forEach((otherBtn) => {
          if (otherBtn !== btn) {
            otherBtn.setAttribute("aria-expanded", "false");
            const otherPanel = document.getElementById(
              otherBtn.getAttribute("aria-controls"),
            );
            if (otherPanel) otherPanel.hidden = true;
          }
        });

        btn.setAttribute("aria-expanded", String(!isExpanded));
        if (panel) {
          panel.hidden = isExpanded;
        }
      });
    });
  }

  /* ==========================================================================
     10. INITIALIZATION ENTRY POINT
     ========================================================================== */
  function initApp() {
    initNavigation();
    initSearch();
    initUploader();
    initResizeControls();
    initFAQ();
    updateLockRatioUI();
    updateFormatUI();
  }

  // Boot when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();
