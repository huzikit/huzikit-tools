/**
 * HUZIKIT.COM — JPG TO PNG CONVERTER
 * Master Client-Side Engine
 * Features: Real JPG/JPEG -> PNG conversion, Drag-and-drop, Batch processing,
 * Resizing, Aspect ratio locking, Real file size comparison, Working search modal,
 * Accessible dropdowns & mobile menu, FAQ accordion, Memory cleanup.
 */

(function () {
  "use strict";

  // ==========================================================================
  // 1. SEARCH DATASET (ALL 30 HUZIKIT TOOLS)
  // ==========================================================================
  const HUZIKIT_TOOLS = [
    // Text Tools (8)
    {
      name: "Word Counter",
      category: "Text Tools",
      url: "/texttools/word-counter.html",
      keywords:
        "word counter character count length paragraphs reading time text",
    },
    {
      name: "Character Counter",
      category: "Text Tools",
      url: "/texttools/character-counter.html",
      keywords:
        "character counter count letters symbols spaces length text limit",
    },
    {
      name: "Case Converter",
      category: "Text Tools",
      url: "/texttools/case-converter.html",
      keywords:
        "case converter uppercase lowercase titlecase sentence capital toggle",
    },
    {
      name: "Remove Duplicate Lines",
      category: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
      keywords:
        "remove duplicate lines clean list deduplicate sort unique rows",
    },
    {
      name: "Lorem Ipsum Generator",
      category: "Text Tools",
      url: "/texttools/loremipsumgenerator.html",
      keywords: "lorem ipsum generator dummy placeholder text paragraphs words",
    },
    {
      name: "Password Generator",
      category: "Text Tools",
      url: "/texttools/passwordgenerator.html",
      keywords:
        "password generator secure random strong credentials safety crypto",
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      url: "/texttools/text-reverser.html",
      keywords: "text reverser flip backwards reverse letters words sentences",
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      url: "/texttools/onlinenotepad.html",
      keywords: "online notepad notes scratchpad quick memo text editor draft",
    },

    // Calculators (8)
    {
      name: "Age Calculator",
      category: "Calculators",
      url: "/calculator/agecalculator.html",
      keywords:
        "age calculator date of birth years months days calculate birthday",
    },
    {
      name: "BMI Calculator",
      category: "Calculators",
      url: "/calculator/bmi-calculator.html",
      keywords: "bmi calculator body mass index weight height health fitness",
    },
    {
      name: "Percentage Calculator",
      category: "Calculators",
      url: "/calculator/percentage-calculator.html",
      keywords:
        "percentage calculator discount increase decrease percent ratio math",
    },
    {
      name: "Calorie Calculator",
      category: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
      keywords:
        "calorie calculator bmr daily nutrition fitness deficit surplus",
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      url: "/calculator/discount-calculator.html",
      keywords:
        "discount calculator sale price off savings coupon percent shopping",
    },
    {
      name: "Saving & Goal Calculator",
      category: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
      keywords:
        "saving goal calculator money interest compound financial plan deposit",
    },
    {
      name: "Tip Calculator",
      category: "Calculators",
      url: "/calculator/tip-calculator.html",
      keywords:
        "tip calculator bill split gratuity restaurant service share math",
    },
    {
      name: "GPA Calculator",
      category: "Calculators",
      url: "/calculator/gpa-calculator.html",
      keywords:
        "gpa calculator grade point average college school academic credits",
    },

    // Image & PDF (6)
    {
      name: "Image Compressor",
      category: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
      keywords:
        "image compressor reduce size shrink photos optimize compress jpg png",
    },
    {
      name: "Image Resizer",
      category: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
      keywords: "image resizer resize scale dimensions crop width height photo",
    },
    {
      name: "PDF to Word Converter",
      category: "Image & PDF",
      url: "/image&pdf/pdftowordconverter.html",
      keywords:
        "pdf to word converter convert doc docx document extract office",
    },
    {
      name: "JPG to PNG Converter",
      category: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
      keywords:
        "jpg to png converter convert jpeg to png image lossless picture format",
    },
    {
      name: "Color Picker",
      category: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
      keywords:
        "color picker hex rgb hsl eyedropper palette design css inspect",
    },
    {
      name: "QR Code Generator",
      category: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
      keywords: "qr code generator create barcode link wifi text scanner make",
    },

    // Developer Tools (8)
    {
      name: "JSON Formatter",
      category: "Developer Tools",
      url: "/developertools/JSONFORMATTER.html",
      keywords:
        "json formatter validator beautifier prettify minify parse structure",
    },
    {
      name: "Base64 Encoder / Decoder",
      category: "Developer Tools",
      url: "/developertools/base64encoderdecoder.html",
      keywords: "base64 encoder decoder binary string ascii convert data",
    },
    {
      name: "URL Encoder / Decoder",
      category: "Developer Tools",
      url: "/developertools/urlencoderdecoder.html",
      keywords: "url encoder decoder uri percent encoding query string link",
    },
    {
      name: "Meta Tag Generator",
      category: "Developer Tools",
      url: "/developertools/meta-tag-generator.html",
      keywords:
        "meta tag generator seo opengraph twitter head tags website preview",
    },
    {
      name: "Regex Tester",
      category: "Developer Tools",
      url: "/developertools/regextester.html",
      keywords:
        "regex tester regular expression pattern matcher test regex debug",
    },
    {
      name: "Markdown to HTML",
      category: "Developer Tools",
      url: "/developertools/markdownhtml.html",
      keywords:
        "markdown to html md preview converter parse markup formatted text",
    },
    {
      name: "CSS Minifier",
      category: "Developer Tools",
      url: "/developertools/cssminifier.html",
      keywords:
        "css minifier compress minify stylesheet optimize code reduce size",
    },
    {
      name: "Unix Timestamp Converter",
      category: "Developer Tools",
      url: "/developertools/unixtimestamp.html",
      keywords:
        "unix timestamp converter epoch time date milliseconds seconds utc",
    },
  ];

  // ==========================================================================
  // 2. STATE MANAGEMENT
  // ==========================================================================
  const state = {
    queue: [], // Array of image items
    settings: {
      maintainAspectRatio: true,
      preventUpscaling: true,
      scalePercent: 100, // 25, 50, 75, 100 or custom
      customWidth: 0,
      customHeight: 0,
    },
    activeRatio: 1, // default aspect ratio for resizing
  };

  // Helper: Format bytes
  function formatBytes(bytes) {
    if (!bytes || bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  // ==========================================================================
  // 3. DOM ELEMENT REFERENCES
  // ==========================================================================
  const elements = {
    // Search
    searchTrigger: document.getElementById("searchTrigger"),
    searchModal: document.getElementById("searchModal"),
    searchInput: document.getElementById("searchInput"),
    searchResults: document.getElementById("searchResults"),
    searchClose: document.getElementById("searchClose"),

    // Mobile nav
    hamburger: document.getElementById("hamburger"),
    mobileMenu: document.getElementById("mobileMenu"),

    // Converter
    statusBanner: document.getElementById("statusBanner"),
    statusMessage: document.getElementById("statusMessage"),
    bannerCloseBtn: document.getElementById("bannerCloseBtn"),
    uploadZone: document.getElementById("uploadZone"),
    uploadInput: document.getElementById("uploadInput"),
    queueContainer: document.getElementById("queueContainer"),
    queueList: document.getElementById("queueList"),
    emptyQueueState: document.getElementById("emptyQueueState"),
    queueStatsText: document.getElementById("queueStatsText"),

    // Action buttons
    convertAllButton: document.getElementById("convertAllButton"),
    downloadAllButton: document.getElementById("downloadAllButton"),
    clearButton: document.getElementById("clearButton"),
    resetButton: document.getElementById("resetButton"),

    // Resize controls
    resizeWidthInput: document.getElementById("resizeWidthInput"),
    resizeHeightInput: document.getElementById("resizeHeightInput"),
    aspectRatioToggle: document.getElementById("aspectRatioToggle"),
    preventUpscaleToggle: document.getElementById("preventUpscaleToggle"),
    presetScaleBtns: document.querySelectorAll(".preset-pill-btn"),

    // Comparison section elements
    compareSection: document.getElementById("comparisonSection"),
    compareOrigImg: document.getElementById("compareOrigImg"),
    compareOrigDims: document.getElementById("compareOrigDims"),
    compareOrigSize: document.getElementById("compareOrigSize"),
    comparePngImg: document.getElementById("comparePngImg"),
    comparePngDims: document.getElementById("comparePngDims"),
    comparePngSize: document.getElementById("comparePngSize"),
    compareDifference: document.getElementById("compareDifference"),
  };

  // ==========================================================================
  // 4. STATUS & NOTIFICATIONS
  // ==========================================================================
  function showStatus(message, type = "info") {
    if (!elements.statusBanner || !elements.statusMessage) return;

    elements.statusBanner.className = "status-banner is-visible banner-" + type;
    elements.statusMessage.textContent = message;
    elements.statusBanner.setAttribute("aria-live", "polite");
  }

  function hideStatus() {
    if (elements.statusBanner) {
      elements.statusBanner.className = "status-banner";
    }
  }

  // ==========================================================================
  // 5. SEARCH IMPLEMENTATION
  // ==========================================================================
  function initSearch() {
    if (
      !elements.searchTrigger ||
      !elements.searchModal ||
      !elements.searchInput
    )
      return;

    function openSearch() {
      elements.searchModal.classList.add("is-active");
      elements.searchModal.setAttribute("aria-hidden", "false");
      elements.searchInput.value = "";
      renderSearchResults("");
      setTimeout(() => elements.searchInput.focus(), 50);
      document.body.style.overflow = "hidden";
    }

    function closeSearch() {
      elements.searchModal.classList.remove("is-active");
      elements.searchModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      elements.searchTrigger.focus();
    }

    elements.searchTrigger.addEventListener("click", openSearch);

    if (elements.searchClose) {
      elements.searchClose.addEventListener("click", closeSearch);
    }

    // Backdrop click
    elements.searchModal.addEventListener("click", (e) => {
      if (e.target === elements.searchModal) {
        closeSearch();
      }
    });

    // Keyboard Shortcuts: Ctrl+K, Cmd+K, ESC
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (elements.searchModal.classList.contains("is-active")) {
          closeSearch();
        } else {
          openSearch();
        }
      } else if (e.key === "Escape") {
        if (elements.searchModal.classList.contains("is-active")) {
          closeSearch();
        }
      }
    });

    // Input filter
    elements.searchInput.addEventListener("input", (e) => {
      renderSearchResults(e.target.value);
    });
  }

  function renderSearchResults(query) {
    if (!elements.searchResults) return;

    const trimmed = query.trim().toLowerCase();
    let matches = HUZIKIT_TOOLS;

    if (trimmed) {
      matches = HUZIKIT_TOOLS.filter((tool) => {
        return (
          tool.name.toLowerCase().includes(trimmed) ||
          tool.category.toLowerCase().includes(trimmed) ||
          tool.keywords.toLowerCase().includes(trimmed)
        );
      });
    }

    elements.searchResults.innerHTML = "";

    if (matches.length === 0) {
      const empty = document.createElement("div");
      empty.className = "search-empty-state";
      empty.textContent = `No tools found matching "${query}". Try searching "image", "jpg", "pdf", or "calculator".`;
      elements.searchResults.appendChild(empty);
      return;
    }

    matches.slice(0, 8).forEach((tool) => {
      const link = document.createElement("a");
      link.href = tool.url;
      link.className = "search-result-link";

      const info = document.createElement("div");
      info.className = "search-item-info";

      const title = document.createElement("span");
      title.className = "search-item-title";
      title.textContent = tool.name;

      const cat = document.createElement("span");
      cat.className = "search-item-cat";
      cat.textContent = tool.category;

      info.appendChild(title);
      info.appendChild(cat);

      const badge = document.createElement("span");
      badge.className = "search-item-badge";
      badge.textContent = "Open";

      link.appendChild(info);
      link.appendChild(badge);

      elements.searchResults.appendChild(link);
    });
  }

  // ==========================================================================
  // 6. NAVBAR & MOBILE MENU
  // ==========================================================================
  function initNavigation() {
    // Desktop Dropdowns Keyboard Accessibility
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      const trigger = item.querySelector(".nav-link");
      if (!trigger) return;

      trigger.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const expanded = trigger.getAttribute("aria-expanded") === "true";
          trigger.setAttribute("aria-expanded", String(!expanded));
          item.classList.toggle("is-open", !expanded);
        } else if (e.key === "Escape") {
          trigger.setAttribute("aria-expanded", "false");
          item.classList.remove("is-open");
        }
      });
    });

    // Close open desktop dropdowns when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav-item")) {
        navItems.forEach((item) => {
          item.classList.remove("is-open");
          const trigger = item.querySelector(".nav-link");
          if (trigger) trigger.setAttribute("aria-expanded", "false");
        });
      }
    });

    // Mobile Hamburger
    if (elements.hamburger && elements.mobileMenu) {
      elements.hamburger.addEventListener("click", () => {
        const isOpen = elements.mobileMenu.classList.contains("is-open");
        elements.hamburger.classList.toggle("is-active", !isOpen);
        elements.hamburger.setAttribute("aria-expanded", String(!isOpen));
        elements.mobileMenu.classList.toggle("is-open", !isOpen);
        document.body.classList.toggle("menu-open", !isOpen);
      });

      // Mobile Accordion Group Toggles
      const mobileHeadings = elements.mobileMenu.querySelectorAll(
        ".mobile-nav-heading",
      );
      mobileHeadings.forEach((heading) => {
        heading.addEventListener("click", () => {
          const isExpanded = heading.getAttribute("aria-expanded") === "true";
          heading.setAttribute("aria-expanded", String(!isExpanded));
          const subLinks = heading.nextElementSibling;
          if (subLinks) {
            subLinks.classList.toggle("is-expanded", !isExpanded);
          }
        });
      });

      // Close mobile menu when a sublink is clicked
      const mobileSubLinks =
        elements.mobileMenu.querySelectorAll(".mobile-sub-link");
      mobileSubLinks.forEach((link) => {
        link.addEventListener("click", () => {
          elements.hamburger.classList.remove("is-active");
          elements.hamburger.setAttribute("aria-expanded", "false");
          elements.mobileMenu.classList.remove("is-open");
          document.body.classList.remove("menu-open");
        });
      });
    }
  }

  // ==========================================================================
  // 7. FAQ ACCORDION
  // ==========================================================================
  function initFAQ() {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
      const trigger = item.querySelector(".faq-trigger");
      if (!trigger) return;

      trigger.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");

        // Close all other items for a clean single-open accordion feel
        faqItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove("is-open");
            const otherBtn = other.querySelector(".faq-trigger");
            if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          }
        });

        item.classList.toggle("is-open", !isOpen);
        trigger.setAttribute("aria-expanded", String(!isOpen));
      });
    });
  }

  // ==========================================================================
  // 8. FILE VALIDATION & INTAKE
  // ==========================================================================
  function validateFile(file) {
    const validMimes = ["image/jpeg", "image/pjpeg"];
    const validExts = [".jpg", ".jpeg"];

    const fileName = file.name.toLowerCase();
    const hasValidExt = validExts.some((ext) => fileName.endsWith(ext));
    const hasValidMime =
      validMimes.includes(file.type.toLowerCase()) || file.type === "";

    if (!hasValidExt && !hasValidMime) {
      return {
        valid: false,
        error: `"${file.name}" is not a JPG or JPEG file. This tool accepts only .jpg and .jpeg images.`,
      };
    }

    if (file.size === 0) {
      return {
        valid: false,
        error: `"${file.name}" is an empty file (0 bytes) and cannot be converted.`,
      };
    }

    return { valid: true };
  }

  function handleFiles(fileList) {
    if (!fileList || fileList.length === 0) return;

    let addedCount = 0;
    const errors = [];

    Array.from(fileList).forEach((file) => {
      const validation = validateFile(file);
      if (!validation.valid) {
        errors.push(validation.error);
        return;
      }

      // Check if file is already queued
      const alreadyQueued = state.queue.some(
        (item) => item.name === file.name && item.origSize === file.size,
      );
      if (alreadyQueued) {
        return;
      }

      const origUrl = URL.createObjectURL(file);
      const queueItem = {
        id:
          "img_" +
          Date.now() +
          "_" +
          Math.random().toString(36).substring(2, 8),
        file: file,
        name: file.name,
        origSize: file.size,
        origWidth: 0,
        origHeight: 0,
        origUrl: origUrl,
        status: "ready", // 'ready' | 'converting' | 'converted' | 'error'
        pngBlob: null,
        pngUrl: null,
        pngSize: 0,
        pngWidth: 0,
        pngHeight: 0,
        errorMsg: null,
      };

      state.queue.push(queueItem);
      addedCount++;

      // Preload image to extract exact intrinsic dimensions
      const img = new Image();
      img.onload = () => {
        queueItem.origWidth = img.naturalWidth || img.width;
        queueItem.origHeight = img.naturalHeight || img.height;
        if (queueItem.origWidth > 0 && queueItem.origHeight > 0) {
          state.activeRatio = queueItem.origWidth / queueItem.origHeight;
          if (elements.resizeWidthInput && !elements.resizeWidthInput.value) {
            elements.resizeWidthInput.value = queueItem.origWidth;
            elements.resizeHeightInput.value = queueItem.origHeight;
          }
        }
        renderQueue();
      };
      img.onerror = () => {
        queueItem.status = "error";
        queueItem.errorMsg = "Could not decode image bitmap.";
        renderQueue();
      };
      img.src = origUrl;
    });

    if (errors.length > 0) {
      showStatus(errors.join(" | "), "warning");
    } else if (addedCount > 0) {
      showStatus(
        `Added ${addedCount} JPG file${addedCount > 1 ? "s" : ""} to queue. Ready to convert!`,
        "success",
      );
    }

    renderQueue();
  }

  // ==========================================================================
  // 9. RESIZE & SETTINGS CONTROLS
  // ==========================================================================
  function initSettingsControls() {
    if (!elements.resizeWidthInput || !elements.resizeHeightInput) return;

    // Aspect ratio toggle
    if (elements.aspectRatioToggle) {
      elements.aspectRatioToggle.addEventListener("change", (e) => {
        state.settings.maintainAspectRatio = e.target.checked;
      });
    }

    // Prevent upscaling toggle
    if (elements.preventUpscaleToggle) {
      elements.preventUpscaleToggle.addEventListener("change", (e) => {
        state.settings.preventUpscaling = e.target.checked;
      });
    }

    // Width input change
    elements.resizeWidthInput.addEventListener("input", () => {
      const w = parseInt(elements.resizeWidthInput.value, 10);
      if (
        !isNaN(w) &&
        w > 0 &&
        state.settings.maintainAspectRatio &&
        state.activeRatio
      ) {
        const calculatedH = Math.round(w / state.activeRatio);
        elements.resizeHeightInput.value = calculatedH;
      }
    });

    // Height input change
    elements.resizeHeightInput.addEventListener("input", () => {
      const h = parseInt(elements.resizeHeightInput.value, 10);
      if (
        !isNaN(h) &&
        h > 0 &&
        state.settings.maintainAspectRatio &&
        state.activeRatio
      ) {
        const calculatedW = Math.round(h * state.activeRatio);
        elements.resizeWidthInput.value = calculatedW;
      }
    });

    // Scale preset buttons (25%, 50%, 75%, 100%)
    if (elements.presetScaleBtns) {
      elements.presetScaleBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          elements.presetScaleBtns.forEach((b) =>
            b.classList.remove("is-active"),
          );
          btn.classList.add("is-active");

          const scale = parseInt(btn.getAttribute("data-scale"), 10);
          state.settings.scalePercent = scale;

          // If there's an active image, calculate dimensions
          if (state.queue.length > 0) {
            const first = state.queue[0];
            if (first.origWidth > 0 && first.origHeight > 0) {
              const targetW = Math.round((first.origWidth * scale) / 100);
              const targetH = Math.round((first.origHeight * scale) / 100);
              elements.resizeWidthInput.value = targetW;
              elements.resizeHeightInput.value = targetH;
            }
          }
        });
      });
    }
  }

  // ==========================================================================
  // 10. REAL CONVERSION ENGINE (JPG -> CANVAS -> PNG BLOB)
  // ==========================================================================
  function convertSingleImage(item) {
    return new Promise((resolve) => {
      if (item.status === "converting") {
        return resolve(false);
      }

      item.status = "converting";
      renderQueue();

      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = () => {
        try {
          const originalW = img.naturalWidth || img.width;
          const originalH = img.naturalHeight || img.height;

          // Determine target dimensions
          let targetW = originalW;
          let targetH = originalH;

          const customW = parseInt(elements.resizeWidthInput?.value, 10);
          const customH = parseInt(elements.resizeHeightInput?.value, 10);

          if (
            !isNaN(customW) &&
            customW > 0 &&
            !isNaN(customH) &&
            customH > 0
          ) {
            targetW = customW;
            targetH = customH;
          } else if (
            state.settings.scalePercent &&
            state.settings.scalePercent !== 100
          ) {
            targetW = Math.round(
              (originalW * state.settings.scalePercent) / 100,
            );
            targetH = Math.round(
              (originalH * state.settings.scalePercent) / 100,
            );
          }

          // Enforce Prevent Upscaling
          if (state.settings.preventUpscaling) {
            if (targetW > originalW) targetW = originalW;
            if (targetH > originalH) targetH = originalH;
          }

          // Boundary checks: minimum 1px, maximum 16,384px (safe browser canvas limit)
          targetW = Math.max(1, Math.min(targetW, 16384));
          targetH = Math.max(1, Math.min(targetH, 16384));

          // Create canvas
          const canvas = document.createElement("canvas");
          canvas.width = targetW;
          canvas.height = targetH;

          const ctx = canvas.getContext("2d");
          if (!ctx) {
            throw new Error("Canvas 2D context could not be initialized.");
          }

          // Draw image to canvas
          ctx.drawImage(img, 0, 0, targetW, targetH);

          // Export actual PNG Blob via standard browser API
          canvas.toBlob((blob) => {
            if (!blob) {
              item.status = "error";
              item.errorMsg = "Failed to generate PNG Blob.";
              renderQueue();
              return resolve(false);
            }

            // Revoke any previous PNG Object URL for this item
            if (item.pngUrl) {
              URL.revokeObjectURL(item.pngUrl);
            }

            item.pngBlob = blob;
            item.pngSize = blob.size;
            item.pngWidth = targetW;
            item.pngHeight = targetH;
            item.pngUrl = URL.createObjectURL(blob);
            item.status = "converted";
            item.errorMsg = null;

            // Update Before/After Inspector
            updateComparisonView(item);

            renderQueue();
            resolve(true);
          }, "image/png");
        } catch (err) {
          item.status = "error";
          item.errorMsg = err.message || "Conversion error occurred.";
          renderQueue();
          resolve(false);
        }
      };

      img.onerror = () => {
        item.status = "error";
        item.errorMsg = "Could not decode JPG source image.";
        renderQueue();
        resolve(false);
      };

      img.src = item.origUrl;
    });
  }

  async function convertAllImages() {
    const readyItems = state.queue.filter(
      (item) => item.status !== "converted",
    );
    if (readyItems.length === 0) {
      showStatus("All items are already converted to PNG.", "info");
      return;
    }

    if (elements.convertAllButton) {
      elements.convertAllButton.disabled = true;
      elements.convertAllButton.textContent = "Converting...";
    }

    showStatus(
      `Converting ${readyItems.length} image${readyItems.length > 1 ? "s" : ""} to PNG...`,
      "info",
    );

    let successCount = 0;
    for (const item of readyItems) {
      const ok = await convertSingleImage(item);
      if (ok) successCount++;
    }

    if (elements.convertAllButton) {
      elements.convertAllButton.disabled = false;
      elements.convertAllButton.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
          <path d="m9 11 3 3L22 4"/>
        </svg>
        Convert All to PNG
      `;
    }

    showStatus(
      `Successfully converted ${successCount} image${successCount > 1 ? "s" : ""} to PNG!`,
      "success",
    );
  }

  // ==========================================================================
  // 11. DOWNLOAD LOGIC
  // ==========================================================================
  function getPngDownloadFilename(origName) {
    const lastDot = origName.lastIndexOf(".");
    const baseName = lastDot !== -1 ? origName.substring(0, lastDot) : origName;
    return `${baseName}.png`;
  }

  function downloadSinglePng(item) {
    if (!item.pngUrl || !item.pngBlob) {
      showStatus(
        "Please convert the image first before downloading.",
        "warning",
      );
      return;
    }

    const filename = getPngDownloadFilename(item.name);
    const a = document.createElement("a");
    a.href = item.pngUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function downloadAllPngs() {
    const convertedItems = state.queue.filter(
      (item) => item.status === "converted" && item.pngUrl,
    );
    if (convertedItems.length === 0) {
      showStatus("No converted PNG images available to download.", "warning");
      return;
    }

    showStatus(
      `Initiating download for ${convertedItems.length} PNG image${convertedItems.length > 1 ? "s" : ""}...`,
      "info",
    );

    convertedItems.forEach((item, index) => {
      setTimeout(() => {
        downloadSinglePng(item);
      }, index * 250); // Stagger by 250ms to prevent browser download queue blockage
    });
  }

  // ==========================================================================
  // 12. COMPARISON INSPECTOR
  // ==========================================================================
  function updateComparisonView(item) {
    if (!elements.compareSection) return;

    elements.compareSection.style.display = "block";

    if (elements.compareOrigImg) {
      elements.compareOrigImg.src = item.origUrl;
      elements.compareOrigImg.alt = `Original JPG - ${item.name}`;
    }
    if (elements.compareOrigDims) {
      elements.compareOrigDims.textContent = `${item.origWidth} × ${item.origHeight} px`;
    }
    if (elements.compareOrigSize) {
      elements.compareOrigSize.textContent = formatBytes(item.origSize);
    }

    if (elements.comparePngImg) {
      elements.comparePngImg.src = item.pngUrl || item.origUrl;
      elements.comparePngImg.alt = `Converted PNG - ${item.name}`;
    }
    if (elements.comparePngDims) {
      elements.comparePngDims.textContent = `${item.pngWidth || item.origWidth} × ${item.pngHeight || item.origHeight} px`;
    }
    if (elements.comparePngSize) {
      elements.comparePngSize.textContent = item.pngSize
        ? formatBytes(item.pngSize)
        : "Pending conversion";
    }

    if (elements.compareDifference && item.pngSize) {
      const diff = item.pngSize - item.origSize;
      const diffPct = Math.round((Math.abs(diff) / item.origSize) * 100);

      if (diff > 0) {
        elements.compareDifference.className = "compare-callout";
        elements.compareDifference.innerHTML = `
          <strong>Result Analysis:</strong> PNG output is <strong>${formatBytes(diff)} (+${diffPct}%) larger</strong> than the original JPG.
          Because JPG uses lossy DCT quantization and PNG is a lossless raster format with uncompressed RGB arrays, photographs usually take more bytes in PNG.
        `;
      } else if (diff < 0) {
        elements.compareDifference.className = "compare-callout";
        elements.compareDifference.innerHTML = `
          <strong>Result Analysis:</strong> PNG output is <strong>${formatBytes(Math.abs(diff))} (-${diffPct}%) smaller</strong> than the original JPG.
        `;
      } else {
        elements.compareDifference.className = "compare-callout";
        elements.compareDifference.innerHTML = `
          <strong>Result Analysis:</strong> PNG file size matches the original JPG size exactly.
        `;
      }
    }
  }

  // ==========================================================================
  // 13. UI QUEUE RENDERING
  // ==========================================================================
  function renderQueue() {
    if (!elements.queueList || !elements.emptyQueueState) return;

    elements.queueList.innerHTML = "";

    if (state.queue.length === 0) {
      elements.emptyQueueState.style.display = "flex";
      if (elements.queueStatsText) {
        elements.queueStatsText.innerHTML =
          "Queue is empty. Select or drop JPG files above.";
      }
      if (elements.convertAllButton) elements.convertAllButton.disabled = true;
      if (elements.downloadAllButton)
        elements.downloadAllButton.disabled = true;
      if (elements.clearButton) elements.clearButton.disabled = true;
      if (elements.compareSection)
        elements.compareSection.style.display = "none";
      return;
    }

    elements.emptyQueueState.style.display = "none";

    // Update batch stats & buttons
    const convertedCount = state.queue.filter(
      (i) => i.status === "converted",
    ).length;
    const totalOrigBytes = state.queue.reduce((acc, i) => acc + i.origSize, 0);

    if (elements.queueStatsText) {
      elements.queueStatsText.innerHTML = `
        <strong>${state.queue.length}</strong> image${state.queue.length > 1 ? "s" : ""} (${formatBytes(totalOrigBytes)}) &bull; 
        <strong>${convertedCount}</strong> converted to PNG
      `;
    }

    if (elements.convertAllButton) elements.convertAllButton.disabled = false;
    if (elements.downloadAllButton)
      elements.downloadAllButton.disabled = convertedCount === 0;
    if (elements.clearButton) elements.clearButton.disabled = false;

    // Build each card safely using createElement & textContent (No unsafe innerHTML with filenames!)
    state.queue.forEach((item) => {
      const card = document.createElement("div");
      card.className = "queue-item-card";
      card.id = item.id;

      // 1. Preview thumbnails column
      const previewsCol = document.createElement("div");
      previewsCol.className = "queue-item-previews";

      // Original JPG Preview
      const origBox = document.createElement("div");
      origBox.className = "preview-box";
      const origImg = document.createElement("img");
      origImg.src = item.origUrl;
      origImg.alt = "JPG Preview";
      const origBadge = document.createElement("span");
      origBadge.className = "preview-badge-overlay";
      origBadge.textContent = "JPG";
      origBox.appendChild(origImg);
      origBox.appendChild(origBadge);
      previewsCol.appendChild(origBox);

      // PNG Preview if converted
      if (item.status === "converted" && item.pngUrl) {
        const pngBox = document.createElement("div");
        pngBox.className = "preview-box checker-bg";
        const pngImg = document.createElement("img");
        pngImg.src = item.pngUrl;
        pngImg.alt = "PNG Preview";
        const pngBadge = document.createElement("span");
        pngBadge.className = "preview-badge-overlay";
        pngBadge.style.backgroundColor = "var(--primary)";
        pngBadge.textContent = "PNG";
        pngBox.appendChild(pngImg);
        pngBox.appendChild(pngBadge);
        previewsCol.appendChild(pngBox);
      }

      card.appendChild(previewsCol);

      // 2. Details column
      const detailsCol = document.createElement("div");
      detailsCol.className = "queue-item-details";

      const titleEl = document.createElement("div");
      titleEl.className = "queue-item-name";
      titleEl.textContent = item.name; // Safe against XSS!
      detailsCol.appendChild(titleEl);

      const metaRow = document.createElement("div");
      metaRow.className = "queue-item-meta";

      const formatPill = document.createElement("span");
      formatPill.className = "meta-pill";
      formatPill.textContent = "JPG/JPEG";
      metaRow.appendChild(formatPill);

      const sizePill = document.createElement("span");
      sizePill.className = "meta-pill";
      sizePill.textContent = formatBytes(item.origSize);
      metaRow.appendChild(sizePill);

      if (item.origWidth > 0 && item.origHeight > 0) {
        const dimsPill = document.createElement("span");
        dimsPill.className = "meta-pill";
        dimsPill.textContent = `${item.origWidth} × ${item.origHeight} px`;
        metaRow.appendChild(dimsPill);
      }

      detailsCol.appendChild(metaRow);

      // Status info
      const statusRow = document.createElement("div");
      statusRow.className = `queue-item-status status-${item.status}`;

      const dot = document.createElement("span");
      dot.className = "status-dot";
      statusRow.appendChild(dot);

      const statusText = document.createElement("span");
      if (item.status === "ready") {
        statusText.textContent = "Ready to convert to PNG";
      } else if (item.status === "converting") {
        statusText.textContent = "Converting to PNG in browser...";
      } else if (item.status === "converted") {
        statusText.textContent = `Converted: ${formatBytes(item.pngSize)} (${item.pngWidth} × ${item.pngHeight} px)`;
      } else if (item.status === "error") {
        statusText.textContent = item.errorMsg || "Conversion error";
      }
      statusRow.appendChild(statusText);
      detailsCol.appendChild(statusRow);

      // Real difference badge if converted
      if (item.status === "converted" && item.pngSize) {
        const diff = item.pngSize - item.origSize;
        const diffTag = document.createElement("span");
        if (diff > 0) {
          diffTag.className = "size-diff-tag size-diff-larger";
          diffTag.textContent = `PNG output is larger (+${formatBytes(diff)})`;
        } else if (diff < 0) {
          diffTag.className = "size-diff-tag size-diff-smaller";
          diffTag.textContent = `PNG is smaller (-${formatBytes(Math.abs(diff))})`;
        } else {
          diffTag.className = "size-diff-tag";
          diffTag.textContent = "Same file size";
        }
        detailsCol.appendChild(diffTag);
      }

      card.appendChild(detailsCol);

      // 3. Actions column
      const actionsCol = document.createElement("div");
      actionsCol.className = "queue-item-actions";

      if (item.status !== "converted") {
        const convertBtn = document.createElement("button");
        convertBtn.type = "button";
        convertBtn.className = "btn-card-action btn-card-convert";
        convertBtn.textContent = "Convert to PNG";
        convertBtn.addEventListener("click", () => convertSingleImage(item));
        actionsCol.appendChild(convertBtn);
      } else {
        const downloadBtn = document.createElement("button");
        downloadBtn.type = "button";
        downloadBtn.className = "btn-card-action btn-card-download";
        downloadBtn.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download PNG
        `;
        downloadBtn.addEventListener("click", () => downloadSinglePng(item));
        actionsCol.appendChild(downloadBtn);
      }

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "btn-card-action btn-card-remove";
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => removeImage(item.id));
      actionsCol.appendChild(removeBtn);

      card.appendChild(actionsCol);

      elements.queueList.appendChild(card);
    });
  }

  // ==========================================================================
  // 14. REMOVE, CLEAR ALL, RESET
  // ==========================================================================
  function removeImage(id) {
    const index = state.queue.findIndex((i) => i.id === id);
    if (index !== -1) {
      const [item] = state.queue.splice(index, 1);
      // Clean up object URLs to prevent memory leaks
      if (item.origUrl) URL.revokeObjectURL(item.origUrl);
      if (item.pngUrl) URL.revokeObjectURL(item.pngUrl);
      renderQueue();
    }
  }

  function clearAll() {
    state.queue.forEach((item) => {
      if (item.origUrl) URL.revokeObjectURL(item.origUrl);
      if (item.pngUrl) URL.revokeObjectURL(item.pngUrl);
    });
    state.queue = [];
    if (elements.uploadInput) elements.uploadInput.value = "";
    renderQueue();
    showStatus("All items removed from queue.", "info");
  }

  function resetTool() {
    clearAll();
    state.settings.maintainAspectRatio = true;
    state.settings.preventUpscaling = true;
    state.settings.scalePercent = 100;

    if (elements.aspectRatioToggle) elements.aspectRatioToggle.checked = true;
    if (elements.preventUpscaleToggle)
      elements.preventUpscaleToggle.checked = true;
    if (elements.resizeWidthInput) elements.resizeWidthInput.value = "";
    if (elements.resizeHeightInput) elements.resizeHeightInput.value = "";

    if (elements.presetScaleBtns) {
      elements.presetScaleBtns.forEach((b) => {
        b.classList.toggle("is-active", b.getAttribute("data-scale") === "100");
      });
    }

    hideStatus();
    showStatus("Tool settings reset to defaults.", "info");
  }

  // ==========================================================================
  // 15. DRAG & DROP & UPLOAD SETUP
  // ==========================================================================
  function initUploader() {
    if (!elements.uploadZone || !elements.uploadInput) return;

    // File input change
    elements.uploadInput.addEventListener("change", (e) => {
      handleFiles(e.target.files);
      elements.uploadInput.value = ""; // Reset input so same file can be re-selected if removed
    });

    // Drag events
    ["dragenter", "dragover"].forEach((eventName) => {
      elements.uploadZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        elements.uploadZone.classList.add("is-dragover");
      });
    });

    ["dragleave", "drop"].forEach((eventName) => {
      elements.uploadZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        elements.uploadZone.classList.remove("is-dragover");
      });
    });

    elements.uploadZone.addEventListener("drop", (e) => {
      const dt = e.dataTransfer;
      if (dt && dt.files && dt.files.length > 0) {
        handleFiles(dt.files);
      }
    });

    // Banner close button
    if (elements.bannerCloseBtn) {
      elements.bannerCloseBtn.addEventListener("click", hideStatus);
    }

    // Action buttons
    if (elements.convertAllButton) {
      elements.convertAllButton.addEventListener("click", convertAllImages);
    }
    if (elements.downloadAllButton) {
      elements.downloadAllButton.addEventListener("click", downloadAllPngs);
    }
    if (elements.clearButton) {
      elements.clearButton.addEventListener("click", clearAll);
    }
    if (elements.resetButton) {
      elements.resetButton.addEventListener("click", resetTool);
    }
  }

  // ==========================================================================
  // 16. INIT ALL
  // ==========================================================================
  function init() {
    initNavigation();
    initSearch();
    initUploader();
    initSettingsControls();
    initFAQ();
    renderQueue();
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
