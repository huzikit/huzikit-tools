/**
 * HUZIKIT.COM — IMAGE COMPRESSOR
 * Ultra-Strict Zero-Overflow Client-Side Compression Engine
 * Production Vanilla JavaScript Architecture
 */

(function () {
  "use strict";

  /* ==========================================================================
     1. COMPLETE 30-TOOLS DATASET FOR GLOBAL SEARCH
     ========================================================================== */
  const HUZIKIT_TOOLS = [
    // Text Tools (8)
    {
      name: "Word Counter",
      category: "Text Tools",
      url: "/texttools/word-counter.html",
      keywords: "word count length character paragraphs reading time",
    },
    {
      name: "Character Counter",
      category: "Text Tools",
      url: "/texttools/character-counter.html",
      keywords: "letters count spaces words frequency",
    },
    {
      name: "Case Converter",
      category: "Text Tools",
      url: "/texttools/case-converter.html",
      keywords: "uppercase lowercase titlecase camelcase snakecase",
    },
    {
      name: "Remove Duplicate Lines",
      category: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
      keywords: "dedupe clean text unique lines sort list",
    },
    {
      name: "Lorem Ipsum Generator",
      category: "Text Tools",
      url: "/texttools/loremipsumgenerator.html",
      keywords: "dummy placeholder text generator paragraphs",
    },
    {
      name: "Password Generator",
      category: "Text Tools",
      url: "/texttools/passwordgenerator.html",
      keywords: "secure random strong password maker",
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      url: "/texttools/text-reverser.html",
      keywords: "reverse flip mirror words letters backward",
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      url: "/texttools/onlinenotepad.html",
      keywords: "scratchpad text editor save notes browser",
    },

    // Calculators (8)
    {
      name: "Age Calculator",
      category: "Calculators",
      url: "/calculator/agecalculator.html",
      keywords: "birthday age years months days hours seconds",
    },
    {
      name: "BMI Calculator",
      category: "Calculators",
      url: "/calculator/bmi-calculator.html",
      keywords: "body mass index health weight fitness",
    },
    {
      name: "Percentage Calculator",
      category: "Calculators",
      url: "/calculator/percentage-calculator.html",
      keywords: "percent increase decrease difference ratio",
    },
    {
      name: "Calorie Calculator",
      category: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
      keywords: "bmr tdee nutrition diet weight loss",
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      url: "/calculator/discount-calculator.html",
      keywords: "sale price savings shopping coupon off",
    },
    {
      name: "Saving & Goal Calculator",
      category: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
      keywords: "finance interest compound future value plan",
    },
    {
      name: "Tip Calculator",
      category: "Calculators",
      url: "/calculator/tip-calculator.html",
      keywords: "restaurant bill split gratuity dining",
    },
    {
      name: "GPA Calculator",
      category: "Calculators",
      url: "/calculator/gpa-calculator.html",
      keywords: "grade point average college university school",
    },

    // Image & PDF Tools (6)
    {
      name: "Image Compressor",
      category: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
      keywords: "compress jpg png webp reduce size photo optimizer",
    },
    {
      name: "Image Resizer",
      category: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
      keywords: "resize scale dimensions width height crop",
    },
    {
      name: "PDF to Word Converter",
      category: "Image & PDF",
      url: "/image&pdf/pdftowordconverter.html",
      keywords: "pdf docx document convert edit",
    },
    {
      name: "JPG to PNG Converter",
      category: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
      keywords: "convert image format transparency vector",
    },
    {
      name: "Color Picker",
      category: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
      keywords: "hex rgb hsl eye dropper palette generator",
    },
    {
      name: "QR Code Generator",
      category: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
      keywords: "qrcode barcode link generator generator",
    },

    // Developer Tools (8)
    {
      name: "JSON Formatter",
      category: "Developer",
      url: "/developertools/JSONFORMATTER.html",
      keywords: "beautify validator parse minify json string",
    },
    {
      name: "Base64 Encoder/Decoder",
      category: "Developer",
      url: "/developertools/base64encoderdecoder.html",
      keywords: "encode decode binary ascii data uri",
    },
    {
      name: "URL Encoder/Decoder",
      category: "Developer",
      url: "/developertools/urlencoderdecoder.html",
      keywords: "encodeURIComponent percent uri escape string",
    },
    {
      name: "Meta Tag Generator",
      category: "Developer",
      url: "/developertools/meta-tag-generator.html",
      keywords: "seo open graph twitter cards social tags",
    },
    {
      name: "Regex Tester",
      category: "Developer",
      url: "/developertools/regextester.html",
      keywords: "regular expression pattern match test regex",
    },
    {
      name: "Markdown to HTML",
      category: "Developer",
      url: "/developertools/markdownhtml.html",
      keywords: "markdown converter md parse html viewer",
    },
    {
      name: "CSS Minifier",
      category: "Developer",
      url: "/developertools/cssminifier.html",
      keywords: "compress stylesheet minify clean css optimize",
    },
    {
      name: "Unix Timestamp Converter",
      category: "Developer",
      url: "/developertools/unixtimestamp.html",
      keywords: "epoch time date conversion milliseconds",
    },
  ];

  /* ==========================================================================
     2. APPLICATION STATE
     ========================================================================== */
  const state = {
    queue: [], // Array of image items
    settings: {
      quality: 80,
      preset: "balanced", // 'max', 'balanced', 'high', 'custom'
      outputFormat: "auto", // 'auto', 'image/jpeg', 'image/png', 'image/webp'
      resizeEnabled: false,
      targetWidth: null,
      targetHeight: null,
      aspectRatioLocked: true,
      scalePercent: 100,
      preventUpscaling: true,
      fillWhiteBackground: true,
    },
    isProcessing: false,
    activeComparisonItem: null,
  };

  /* ==========================================================================
     3. DOM UTILITIES & HELPERS
     ========================================================================== */
  function $(selector, context = document) {
    return context.querySelector(selector);
  }

  function $$(selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
  }

  function formatBytes(bytes, decimals = 2) {
    if (!bytes || bytes <= 0) return "0 B";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  function showToast(message, type = "info") {
    const container = $("#toastContainer") || createToastContainer();
    const toast = document.createElement("div");
    toast.className = `toast ${type === "error" ? "toast-error" : type === "success" ? "toast-success" : ""}`;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      toast.style.transition = "all 0.25s ease";
      setTimeout(() => toast.remove(), 250);
    }, 3500);
  }

  function createToastContainer() {
    const container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
    return container;
  }

  /* ==========================================================================
     4. NAVBAR & DROPDOWNS INITIALIZATION
     ========================================================================== */
  function initNavbar() {
    const navItems = $$(".nav-item.has-dropdown");

    navItems.forEach((item) => {
      const toggle = $(".nav-link", item);
      if (!toggle) return;

      // Mouse hover handled via CSS, but add explicit click/keyboard support
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const isOpen = item.classList.contains("dropdown-open");
        closeAllDropdowns();
        if (!isOpen) {
          item.classList.add("dropdown-open");
          toggle.setAttribute("aria-expanded", "true");
        }
      });

      // Keyboard accessibility
      item.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          item.classList.remove("dropdown-open");
          toggle.setAttribute("aria-expanded", "false");
          toggle.focus();
        }
      });
    });

    // Close dropdowns on outside click
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav-item.has-dropdown")) {
        closeAllDropdowns();
      }
    });
  }

  function closeAllDropdowns() {
    $$(".nav-item.has-dropdown").forEach((item) => {
      item.classList.remove("dropdown-open");
      const toggle = $(".nav-link", item);
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  }

  /* ==========================================================================
     5. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  function initMobileMenu() {
    const hamburger = $("#hamburgerBtn");
    const drawer = $("#mobileNavDrawer");
    if (!hamburger || !drawer) return;

    hamburger.addEventListener("click", () => {
      const isOpen = hamburger.getAttribute("aria-expanded") === "true";
      toggleMobileMenu(!isOpen);
    });

    // Mobile category accordion headers
    const categoryHeaders = $$(".mobile-category-header", drawer);
    categoryHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const isExpanded = header.getAttribute("aria-expanded") === "true";
        header.setAttribute("aria-expanded", !isExpanded ? "true" : "false");
      });
    });

    // Close when clicking any link inside drawer
    $$("a", drawer).forEach((link) => {
      link.addEventListener("click", () => toggleMobileMenu(false));
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        hamburger.getAttribute("aria-expanded") === "true"
      ) {
        toggleMobileMenu(false);
        hamburger.focus();
      }
    });
  }

  function toggleMobileMenu(open) {
    const hamburger = $("#hamburgerBtn");
    const drawer = $("#mobileNavDrawer");
    if (!hamburger || !drawer) return;

    hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      drawer.classList.add("is-active");
      document.body.style.overflow = "hidden";
    } else {
      drawer.classList.remove("is-active");
      document.body.style.overflow = "";
    }
  }

  /* ==========================================================================
     6. GLOBAL SEARCH SYSTEM (Ctrl+K, Cmd+K, Modal, 30 Tools)
     ========================================================================== */
  function initSearch() {
    const searchTrigger = $("#searchTrigger");
    const searchModal = $("#searchModal");
    const searchInput = $("#searchInput");
    const searchClose = $("#searchClose");
    const searchResults = $("#searchResults");

    if (!searchTrigger || !searchModal || !searchInput || !searchResults)
      return;

    // Open Search Modal
    searchTrigger.addEventListener("click", openSearch);

    // Close Search Modal
    if (searchClose) searchClose.addEventListener("click", closeSearch);

    searchModal.addEventListener("click", (e) => {
      if (e.target === searchModal) closeSearch();
    });

    // Keyboard Shortcuts: Ctrl+K, Cmd+K, Escape
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        const isOpen = searchModal.classList.contains("is-open");
        if (isOpen) closeSearch();
        else openSearch();
      } else if (
        e.key === "Escape" &&
        searchModal.classList.contains("is-open")
      ) {
        closeSearch();
      }
    });

    // Real-time Search Input Listener
    searchInput.addEventListener("input", (e) => {
      renderSearchResults(e.target.value.trim());
    });

    // Arrow Key Navigation in Results
    searchInput.addEventListener("keydown", (e) => {
      const items = $$(".search-result-item", searchResults);
      if (!items.length) return;

      const active = $(".search-result-item.is-selected", searchResults);
      let index = active ? items.indexOf(active) : -1;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        index = (index + 1) % items.length;
        highlightSearchResult(items, index);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        index = (index - 1 + items.length) % items.length;
        highlightSearchResult(items, index);
      } else if (e.key === "Enter") {
        if (active) {
          e.preventDefault();
          window.location.href = active.getAttribute("href");
        }
      }
    });
  }

  function openSearch() {
    const searchModal = $("#searchModal");
    const searchInput = $("#searchInput");
    if (!searchModal || !searchInput) return;

    searchModal.classList.add("is-open");
    searchModal.setAttribute("aria-hidden", "false");
    searchInput.value = "";
    renderSearchResults("");
    setTimeout(() => searchInput.focus(), 80);
    document.body.style.overflow = "hidden";
  }

  function closeSearch() {
    const searchModal = $("#searchModal");
    const searchTrigger = $("#searchTrigger");
    if (!searchModal) return;

    searchModal.classList.remove("is-open");
    searchModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (searchTrigger) searchTrigger.focus();
  }

  function renderSearchResults(query) {
    const container = $("#searchResults");
    if (!container) return;

    const lowerQuery = query.toLowerCase();
    const filtered = HUZIKIT_TOOLS.filter((tool) => {
      if (!lowerQuery) return true;
      return (
        tool.name.toLowerCase().includes(lowerQuery) ||
        tool.category.toLowerCase().includes(lowerQuery) ||
        tool.keywords.toLowerCase().includes(lowerQuery)
      );
    });

    container.innerHTML = "";

    if (!filtered.length) {
      const empty = document.createElement("div");
      empty.className = "search-empty-state";
      empty.textContent = `No tools found matching "${query}". Try searching "compress", "word", or "calculator".`;
      container.appendChild(empty);
      return;
    }

    filtered.forEach((tool, index) => {
      const a = document.createElement("a");
      a.className = `search-result-item ${index === 0 ? "is-selected" : ""}`;
      a.href = tool.url;

      const info = document.createElement("div");
      info.className = "search-result-info";

      const name = document.createElement("div");
      name.className = "search-result-name";
      name.textContent = tool.name;

      const cat = document.createElement("div");
      cat.className = "search-result-category";
      cat.textContent = tool.category;

      info.appendChild(name);
      info.appendChild(cat);

      const badge = document.createElement("span");
      badge.className = "search-result-badge";
      badge.textContent = "Open Tool";

      a.appendChild(info);
      a.appendChild(badge);

      a.addEventListener("mouseenter", () => {
        $$(".search-result-item", container).forEach((el) =>
          el.classList.remove("is-selected"),
        );
        a.classList.add("is-selected");
      });

      container.appendChild(a);
    });
  }

  function highlightSearchResult(items, index) {
    items.forEach((el) => el.classList.remove("is-selected"));
    if (items[index]) {
      items[index].classList.add("is-selected");
      items[index].scrollIntoView({ block: "nearest" });
    }
  }

  /* ==========================================================================
     7. UPLOADER & FILE HANDLING SYSTEM
     ========================================================================== */
  function initUploader() {
    const dropzone = $("#uploadZone");
    const fileInput = $("#uploadInput");

    if (!dropzone || !fileInput) return;

    // Click to upload
    dropzone.addEventListener("click", () => {
      fileInput.click();
    });

    // Keyboard support for dropzone
    dropzone.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        fileInput.click();
      }
    });

    // File input selection
    fileInput.addEventListener("change", (e) => {
      handleFiles(e.target.files);
      fileInput.value = ""; // Reset so the same file can be re-selected if removed
    });

    // Drag and Drop Events
    ["dragenter", "dragover"].forEach((eventName) => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.add("is-dragover");
      });
    });

    ["dragleave", "dragend", "drop"].forEach((eventName) => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.remove("is-dragover");
      });
    });

    dropzone.addEventListener("drop", (e) => {
      const dt = e.dataTransfer;
      if (dt && dt.files && dt.files.length) {
        handleFiles(dt.files);
      }
    });
  }

  function validateImageFile(file) {
    const validMimes = ["image/jpeg", "image/png", "image/webp"];
    const validExtensions = [".jpg", ".jpeg", ".png", ".webp"];

    if (validMimes.includes(file.type)) return true;

    const lowerName = file.name.toLowerCase();
    return validExtensions.some((ext) => lowerName.endsWith(ext));
  }

  async function handleFiles(fileList) {
    if (!fileList || !fileList.length) return;

    const files = Array.from(fileList);
    let validCount = 0;

    for (const file of files) {
      if (!validateImageFile(file)) {
        showToast(
          `Skipped "${file.name}": Unsupported format. Only JPG, PNG, and WebP are supported.`,
          "error",
        );
        continue;
      }

      validCount++;
      const id = "img_" + Math.random().toString(36).substring(2, 11);
      const originalUrl = URL.createObjectURL(file);

      // Extract image dimensions asynchronously
      const dimensions = await readImageDimensions(originalUrl);

      const queueItem = {
        id,
        file,
        name: file.name,
        originalSize: file.size,
        originalWidth: dimensions.width,
        originalHeight: dimensions.height,
        originalType: file.type || getFallbackMime(file.name),
        originalUrl,
        compressedBlob: null,
        compressedSize: null,
        compressedWidth: null,
        compressedHeight: null,
        compressedType: null,
        compressedUrl: null,
        reductionPercent: 0,
        status: "ready", // 'ready', 'processing', 'done', 'error'
      };

      state.queue.push(queueItem);
    }

    if (validCount > 0) {
      renderQueue();
      updateSavingsSummary();
      showToast(
        `Added ${validCount} image${validCount > 1 ? "s" : ""} to queue`,
        "success",
      );
    }
  }

  function getFallbackMime(filename) {
    const lower = filename.toLowerCase();
    if (lower.endsWith(".png")) return "image/png";
    if (lower.endsWith(".webp")) return "image/webp";
    return "image/jpeg";
  }

  function readImageDimensions(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve({
          width: img.naturalWidth || 800,
          height: img.naturalHeight || 600,
        });
      };
      img.onerror = () => {
        resolve({ width: 800, height: 600 });
      };
      img.src = url;
    });
  }

  /* ==========================================================================
     8. COMPRESSION SETTINGS & CONTROLS
     ========================================================================== */
  function initControls() {
    const qualitySlider = $("#qualitySlider");
    const qualityBadge = $("#qualityValueBadge");
    const formatSelect = $("#formatSelect");
    const presetBtns = $$(".preset-btn");

    // Quality slider
    if (qualitySlider && qualityBadge) {
      qualitySlider.addEventListener("input", (e) => {
        const val = parseInt(e.target.value, 10);
        state.settings.quality = val;
        qualityBadge.textContent = val + "%";
        setPresetActive("custom");
      });
    }

    // Presets
    presetBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const preset = btn.dataset.preset;
        applyPreset(preset);
      });
    });

    // Format select
    if (formatSelect) {
      formatSelect.addEventListener("change", (e) => {
        state.settings.outputFormat = e.target.value;
      });
    }

    // Resize section toggle
    const resizeToggle = $("#resizeToggle");
    if (resizeToggle) {
      resizeToggle.addEventListener("click", () => {
        const isExpanded =
          resizeToggle.getAttribute("aria-expanded") === "true";
        resizeToggle.setAttribute(
          "aria-expanded",
          !isExpanded ? "true" : "false",
        );
      });
    }

    // Resize inputs
    const widthInput = $("#targetWidth");
    const heightInput = $("#targetHeight");
    const lockBtn = $("#aspectRatioLockBtn");

    if (lockBtn) {
      lockBtn.addEventListener("click", () => {
        state.settings.aspectRatioLocked = !state.settings.aspectRatioLocked;
        lockBtn.classList.toggle("is-locked", state.settings.aspectRatioLocked);
        lockBtn.setAttribute(
          "title",
          state.settings.aspectRatioLocked
            ? "Aspect Ratio Locked"
            : "Aspect Ratio Unlocked",
        );
      });
    }

    if (widthInput && heightInput) {
      widthInput.addEventListener("input", (e) => {
        const w = parseInt(e.target.value, 10);
        state.settings.targetWidth = !isNaN(w) && w > 0 ? w : null;
        if (
          state.settings.aspectRatioLocked &&
          state.settings.targetWidth &&
          state.queue.length > 0
        ) {
          const firstItem = state.queue[0];
          const ratio = firstItem.originalHeight / firstItem.originalWidth;
          const h = Math.round(state.settings.targetWidth * ratio);
          heightInput.value = h;
          state.settings.targetHeight = h;
        }
      });

      heightInput.addEventListener("input", (e) => {
        const h = parseInt(e.target.value, 10);
        state.settings.targetHeight = !isNaN(h) && h > 0 ? h : null;
        if (
          state.settings.aspectRatioLocked &&
          state.settings.targetHeight &&
          state.queue.length > 0
        ) {
          const firstItem = state.queue[0];
          const ratio = firstItem.originalWidth / firstItem.originalHeight;
          const w = Math.round(state.settings.targetHeight * ratio);
          widthInput.value = w;
          state.settings.targetWidth = w;
        }
      });
    }

    // Scale percentage pills
    $$(".scale-pill-btn").forEach((pill) => {
      pill.addEventListener("click", () => {
        $$(".scale-pill-btn").forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        state.settings.scalePercent = parseInt(pill.dataset.scale, 10);
      });
    });

    // Checkboxes
    const preventUpscalingCb = $("#preventUpscaling");
    if (preventUpscalingCb) {
      preventUpscalingCb.addEventListener("change", (e) => {
        state.settings.preventUpscaling = e.target.checked;
      });
    }

    // Action Toolbar Buttons
    const compressAllBtn = $("#compressAllBtn");
    const clearAllBtn = $("#clearAllBtn");
    const resetSettingsBtn = $("#resetSettingsBtn");
    const downloadAllBtn = $("#downloadAllBtn");

    if (compressAllBtn)
      compressAllBtn.addEventListener("click", processAllImages);
    if (clearAllBtn) clearAllBtn.addEventListener("click", clearAllQueue);
    if (resetSettingsBtn)
      resetSettingsBtn.addEventListener("click", resetSettings);
    if (downloadAllBtn)
      downloadAllBtn.addEventListener("click", downloadAllCompressed);
  }

  function applyPreset(preset) {
    const slider = $("#qualitySlider");
    const badge = $("#qualityValueBadge");

    let quality = 80;
    if (preset === "max") quality = 60;
    else if (preset === "balanced") quality = 80;
    else if (preset === "high") quality = 92;

    state.settings.preset = preset;
    state.settings.quality = quality;

    if (slider) slider.value = quality;
    if (badge) badge.textContent = quality + "%";

    setPresetActive(preset);
  }

  function setPresetActive(preset) {
    $$(".preset-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.preset === preset);
    });
  }

  function resetSettings() {
    state.settings = {
      quality: 80,
      preset: "balanced",
      outputFormat: "auto",
      resizeEnabled: false,
      targetWidth: null,
      targetHeight: null,
      aspectRatioLocked: true,
      scalePercent: 100,
      preventUpscaling: true,
      fillWhiteBackground: true,
    };

    const slider = $("#qualitySlider");
    const badge = $("#qualityValueBadge");
    const format = $("#formatSelect");
    const widthInput = $("#targetWidth");
    const heightInput = $("#targetHeight");
    const lockBtn = $("#aspectRatioLockBtn");
    const preventUpscaling = $("#preventUpscaling");

    if (slider) slider.value = 80;
    if (badge) badge.textContent = "80%";
    if (format) format.value = "auto";
    if (widthInput) widthInput.value = "";
    if (heightInput) heightInput.value = "";
    if (preventUpscaling) preventUpscaling.checked = true;
    if (lockBtn) lockBtn.classList.add("is-locked");

    setPresetActive("balanced");
    $$(".scale-pill-btn").forEach((pill) => {
      pill.classList.toggle("active", pill.dataset.scale === "100");
    });

    showToast("Settings reset to default (Balanced 80% Quality)", "info");
  }

  /* ==========================================================================
     9. REAL IN-BROWSER IMAGE COMPRESSION ENGINE
     ========================================================================== */
  async function compressSingleImage(item) {
    item.status = "processing";
    renderQueueItemStatus(item);

    try {
      // Determine output MIME type
      let outputMime = item.originalType;
      if (state.settings.outputFormat !== "auto") {
        outputMime = state.settings.outputFormat;
      }

      // Calculate Target Dimensions
      let targetW = item.originalWidth;
      let targetH = item.originalHeight;

      // Apply Scale percentage if set
      if (state.settings.scalePercent && state.settings.scalePercent < 100) {
        const factor = state.settings.scalePercent / 100;
        targetW = Math.round(targetW * factor);
        targetH = Math.round(targetH * factor);
      }

      // Apply exact dimensions if specified
      if (state.settings.targetWidth && state.settings.targetWidth > 0) {
        if (
          state.settings.preventUpscaling &&
          state.settings.targetWidth > item.originalWidth
        ) {
          targetW = item.originalWidth;
        } else {
          targetW = state.settings.targetWidth;
        }
        if (state.settings.aspectRatioLocked) {
          targetH = Math.round(
            targetW * (item.originalHeight / item.originalWidth),
          );
        }
      }

      if (
        state.settings.targetHeight &&
        state.settings.targetHeight > 0 &&
        !state.settings.aspectRatioLocked
      ) {
        if (
          state.settings.preventUpscaling &&
          state.settings.targetHeight > item.originalHeight
        ) {
          targetH = item.originalHeight;
        } else {
          targetH = state.settings.targetHeight;
        }
      }

      // Guard against zero dimensions
      targetW = Math.max(1, Math.round(targetW));
      targetH = Math.max(1, Math.round(targetH));

      // Load Image onto HTML5 Canvas
      const img = await loadImageElement(item.originalUrl);

      const canvas = document.createElement("canvas");
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext("2d");

      // Transparency safeguard: If converting transparent image (PNG/WebP) to JPEG, paint clean white background first
      if (outputMime === "image/jpeg") {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, targetW, targetH);
      }

      // High quality image smoothing
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      ctx.drawImage(img, 0, 0, targetW, targetH);

      // Convert quality 10-100 to 0.1-1.0
      const qualityFactor = Math.max(
        0.1,
        Math.min(1.0, state.settings.quality / 100),
      );

      // Export Blob
      const blob = await canvasToBlob(canvas, outputMime, qualityFactor);

      // Cleanup prior compressed URL if present to avoid memory leak
      if (item.compressedUrl) {
        URL.revokeObjectURL(item.compressedUrl);
      }

      item.compressedBlob = blob;
      item.compressedSize = blob.size;
      item.compressedWidth = targetW;
      item.compressedHeight = targetH;
      item.compressedType = outputMime;
      item.compressedUrl = URL.createObjectURL(blob);

      // Calculate actual savings percentage
      const diff = item.originalSize - item.compressedSize;
      item.reductionPercent = parseFloat(
        ((diff / item.originalSize) * 100).toFixed(1),
      );
      item.status = "done";
    } catch (err) {
      console.error("Compression error:", err);
      item.status = "error";
    }

    renderQueue();
    updateSavingsSummary();
  }

  function loadImageElement(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
      img.src = url;
    });
  }

  function canvasToBlob(canvas, mimeType, quality) {
    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          resolve(blob);
        },
        mimeType,
        quality,
      );
    });
  }

  async function processAllImages() {
    if (!state.queue.length) {
      showToast("Please upload one or more images first", "error");
      return;
    }

    if (state.isProcessing) return;

    state.isProcessing = true;
    const compressBtn = $("#compressAllBtn");
    if (compressBtn) {
      compressBtn.disabled = true;
      compressBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10"></path>
        </svg>
        Compressing...
      `;
    }

    for (const item of state.queue) {
      await compressSingleImage(item);
    }

    state.isProcessing = false;
    if (compressBtn) {
      compressBtn.disabled = false;
      compressBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Compress All
      `;
    }

    showToast("Batch compression completed!", "success");
  }

  /* ==========================================================================
     10. QUEUE RENDERING & ITEM ACTIONS
     ========================================================================== */
  function renderQueue() {
    const queueList = $("#imageQueueList");
    const queueCountBadge = $("#queueCountBadge");
    const emptyState = $("#emptyQueueState");

    if (!queueList) return;

    if (queueCountBadge) {
      queueCountBadge.textContent = `${state.queue.length} image${state.queue.length !== 1 ? "s" : ""}`;
    }

    if (!state.queue.length) {
      queueList.innerHTML = "";
      if (emptyState) emptyState.style.display = "block";
      return;
    }

    if (emptyState) emptyState.style.display = "none";

    queueList.innerHTML = "";

    state.queue.forEach((item) => {
      const card = document.createElement("div");
      card.className = "queue-card";
      card.id = `card_${item.id}`;

      // 1. Thumbnail Box
      const thumbBox = document.createElement("div");
      thumbBox.className = "queue-thumb-box";
      const img = document.createElement("img");
      img.className = "queue-thumb-img";
      img.src = item.compressedUrl || item.originalUrl;
      img.alt = item.name;
      thumbBox.appendChild(img);

      // 2. Metadata Column
      const metaCol = document.createElement("div");
      metaCol.className = "queue-meta-col";

      const nameEl = document.createElement("div");
      nameEl.className = "queue-filename";
      nameEl.textContent = item.name;

      const specsRow = document.createElement("div");
      specsRow.className = "queue-specs-row";

      // Original specs
      const origSpecs = document.createElement("span");
      origSpecs.className = "spec-item";
      origSpecs.textContent = `Original: ${formatBytes(item.originalSize)} (${item.originalWidth}×${item.originalHeight})`;
      specsRow.appendChild(origSpecs);

      // If compressed, show outcome
      if (item.status === "done" && item.compressedSize !== null) {
        const compSpecs = document.createElement("span");
        compSpecs.className = "spec-item";
        compSpecs.innerHTML = `<strong>→ ${formatBytes(item.compressedSize)}</strong> (${item.compressedWidth}×${item.compressedHeight})`;
        specsRow.appendChild(compSpecs);

        const savingsBadge = document.createElement("span");
        if (item.reductionPercent > 0) {
          savingsBadge.className = "spec-badge savings";
          savingsBadge.textContent = `-${item.reductionPercent}% Saved`;
        } else if (item.reductionPercent === 0) {
          savingsBadge.className = "spec-badge";
          savingsBadge.textContent = `Same Size (0%)`;
        } else {
          savingsBadge.className = "spec-badge larger";
          savingsBadge.textContent = `+${Math.abs(item.reductionPercent)}% Larger`;
        }
        specsRow.appendChild(savingsBadge);
      }

      // Progress bar
      const statusBar = document.createElement("div");
      statusBar.className = "queue-status-bar";
      const statusFill = document.createElement("div");
      statusFill.className = `queue-status-fill ${item.status === "done" ? "done" : ""}`;
      if (item.status === "processing") {
        statusFill.style.width = "60%";
      } else if (item.status === "done") {
        statusFill.style.width = "100%";
      }
      statusBar.appendChild(statusFill);

      metaCol.appendChild(nameEl);
      metaCol.appendChild(specsRow);
      metaCol.appendChild(statusBar);

      // 3. Actions Column
      const actionsCol = document.createElement("div");
      actionsCol.className = "queue-actions-col";

      // Compare Button (if compressed)
      if (item.status === "done" && item.compressedUrl) {
        const compareBtn = document.createElement("button");
        compareBtn.type = "button";
        compareBtn.className = "btn btn-secondary btn-sm";
        compareBtn.title = "Compare Before and After";
        compareBtn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          Compare
        `;
        compareBtn.addEventListener("click", () => openComparisonModal(item));
        actionsCol.appendChild(compareBtn);
      }

      // Single Compress Button (if ready)
      if (item.status !== "done") {
        const singleCompBtn = document.createElement("button");
        singleCompBtn.type = "button";
        singleCompBtn.className = "btn btn-primary btn-sm";
        singleCompBtn.innerHTML = `Compress`;
        singleCompBtn.addEventListener("click", () =>
          compressSingleImage(item),
        );
        actionsCol.appendChild(singleCompBtn);
      }

      // Download Button (if compressed)
      if (item.status === "done" && item.compressedBlob) {
        const dlBtn = document.createElement("button");
        dlBtn.type = "button";
        dlBtn.className = "btn btn-primary btn-sm";
        dlBtn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download
        `;
        dlBtn.addEventListener("click", () => downloadItem(item));
        actionsCol.appendChild(dlBtn);
      }

      // Remove Button
      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "btn btn-outline-danger btn-sm";
      removeBtn.title = "Remove Image";
      removeBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;
      removeBtn.addEventListener("click", () => removeQueueItem(item.id));
      actionsCol.appendChild(removeBtn);

      // Assemble card
      card.appendChild(thumbBox);
      card.appendChild(metaCol);
      card.appendChild(actionsCol);

      queueList.appendChild(card);
    });
  }

  function renderQueueItemStatus(item) {
    const card = $(`#card_${item.id}`);
    if (!card) return;
    const fill = $(".queue-status-fill", card);
    if (fill) {
      fill.style.width = "60%";
    }
  }

  function removeQueueItem(id) {
    const index = state.queue.findIndex((item) => item.id === id);
    if (index === -1) return;

    const item = state.queue[index];
    // Cleanup memory
    if (item.originalUrl) URL.revokeObjectURL(item.originalUrl);
    if (item.compressedUrl) URL.revokeObjectURL(item.compressedUrl);

    state.queue.splice(index, 1);
    renderQueue();
    updateSavingsSummary();
    showToast("Image removed from queue", "info");
  }

  function clearAllQueue() {
    if (!state.queue.length) return;

    // Cleanup all object URLs
    state.queue.forEach((item) => {
      if (item.originalUrl) URL.revokeObjectURL(item.originalUrl);
      if (item.compressedUrl) URL.revokeObjectURL(item.compressedUrl);
    });

    state.queue = [];
    renderQueue();
    updateSavingsSummary();
    showToast("Queue cleared", "info");
  }

  /* ==========================================================================
     11. DOWNLOAD & SAVINGS SYSTEM
     ========================================================================== */
  function downloadItem(item) {
    if (!item.compressedBlob || !item.compressedUrl) return;

    // Determine extension based on compressed MIME
    let ext = "jpg";
    if (item.compressedType === "image/png") ext = "png";
    else if (item.compressedType === "image/webp") ext = "webp";

    const baseName =
      item.name.substring(0, item.name.lastIndexOf(".")) || item.name;
    const cleanName = `${baseName}-compressed.${ext}`;

    const a = document.createElement("a");
    a.href = item.compressedUrl;
    a.download = cleanName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function downloadAllCompressed() {
    const completed = state.queue.filter(
      (i) => i.status === "done" && i.compressedUrl,
    );
    if (!completed.length) {
      showToast("No compressed images available for download", "error");
      return;
    }

    completed.forEach((item, idx) => {
      // Trigger downloads with slight delay to prevent browser block
      setTimeout(() => {
        downloadItem(item);
      }, idx * 250);
    });

    showToast(
      `Downloading ${completed.length} image${completed.length > 1 ? "s" : ""}...`,
      "success",
    );
  }

  function updateSavingsSummary() {
    const banner = $("#savingsSummaryBanner");
    const totalOriginalEl = $("#totalOriginalSize");
    const totalCompressedEl = $("#totalCompressedSize");
    const totalSavedEl = $("#totalSavedPercent");

    if (!banner) return;

    const completed = state.queue.filter(
      (i) => i.status === "done" && i.compressedSize !== null,
    );

    if (!completed.length) {
      banner.classList.remove("is-visible");
      return;
    }

    banner.classList.add("is-visible");

    let totalOrig = 0;
    let totalComp = 0;

    completed.forEach((item) => {
      totalOrig += item.originalSize;
      totalComp += item.compressedSize;
    });

    if (totalOriginalEl) totalOriginalEl.textContent = formatBytes(totalOrig);
    if (totalCompressedEl)
      totalCompressedEl.textContent = formatBytes(totalComp);

    if (totalSavedEl) {
      const diff = totalOrig - totalComp;
      const pct = parseFloat(((diff / totalOrig) * 100).toFixed(1));
      if (pct > 0) {
        totalSavedEl.textContent = `-${pct}% Saved`;
        totalSavedEl.className = "savings-stat-value highlight";
      } else if (pct === 0) {
        totalSavedEl.textContent = "0%";
        totalSavedEl.className = "savings-stat-value";
      } else {
        totalSavedEl.textContent = `+${Math.abs(pct)}% (Larger)`;
        totalSavedEl.className = "savings-stat-value";
      }
    }
  }

  /* ==========================================================================
     12. BEFORE / AFTER COMPARISON MODAL
     ========================================================================== */
  function initComparisonModal() {
    const modal = $("#previewModal");
    const closeBtn = $("#previewModalClose");

    if (!modal) return;

    if (closeBtn) {
      closeBtn.addEventListener("click", closeComparisonModal);
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeComparisonModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) {
        closeComparisonModal();
      }
    });
  }

  function openComparisonModal(item) {
    const modal = $("#previewModal");
    if (!modal || !item) return;

    $("#previewOriginalImg").src = item.originalUrl;
    $("#previewCompressedImg").src = item.compressedUrl || item.originalUrl;

    $("#previewOriginalMeta").textContent =
      `${formatBytes(item.originalSize)} (${item.originalWidth}×${item.originalHeight})`;
    $("#previewCompressedMeta").textContent =
      `${formatBytes(item.compressedSize)} (${item.compressedWidth}×${item.compressedHeight})`;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeComparisonModal() {
    const modal = $("#previewModal");
    if (!modal) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  /* ==========================================================================
     13. FAQ ACCORDION SYSTEM
     ========================================================================== */
  function initFAQ() {
    const faqButtons = $$(".faq-question-btn");

    faqButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const isExpanded = button.getAttribute("aria-expanded") === "true";

        // Optional: close other FAQs to maintain single-open cleaner view
        faqButtons.forEach((otherBtn) => {
          if (otherBtn !== button) {
            otherBtn.setAttribute("aria-expanded", "false");
          }
        });

        button.setAttribute("aria-expanded", !isExpanded ? "true" : "false");
      });

      // Keyboard support: Enter / Space
      button.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          button.click();
        }
      });
    });
  }

  /* ==========================================================================
     14. INITIALIZATION LIFECYCLE
     ========================================================================== */
  function init() {
    initNavbar();
    initMobileMenu();
    initSearch();
    initUploader();
    initControls();
    initComparisonModal();
    initFAQ();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
