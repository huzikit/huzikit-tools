/**
 * HUZIKIT.COM — PDF TO WORD CONVERTER
 * Complete Production-Ready Client-Side Application
 *
 * Features:
 * - Real PDF parsing via PDF.js
 * - Real page-by-page text extraction with line/paragraph reconstruction
 * - Real Office Open XML (.docx) binary package generation with page breaks
 * - Real file download ([name]-converted.docx)
 * - Multi-file queue with individual progress, metadata, preview, and copy
 * - Global 30-tool search engine with Ctrl+K / Cmd+K and keyboard navigation
 * - Desktop dropdowns & mobile accordion navigation
 * - Complete error handling for corrupt, encrypted, or scanned PDFs
 */

(function () {
  "use strict";

  // ============================================================
  // 1. GLOBAL CONSTANTS & HUZIKIT TOOLS DATASET (30 TOOLS)
  // ============================================================
  const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024; // 50MB Safeguard
  const HUZIKIT_TOOLS = [
    // Text Tools (8)
    {
      name: "Word Counter",
      category: "Text Tools",
      url: "/texttools/word-counter.html",
      description:
        "Count words, characters, sentences, paragraphs, and reading time in real-time.",
      keywords: [
        "word",
        "counter",
        "words",
        "count",
        "reading time",
        "text metrics",
      ],
    },
    {
      name: "Character Counter",
      category: "Text Tools",
      url: "/texttools/character-counter.html",
      description:
        "Precise character count with and without spaces for social media and essays.",
      keywords: [
        "character",
        "counter",
        "letters",
        "length",
        "glyphs",
        "twitter count",
      ],
    },
    {
      name: "Case Converter",
      category: "Text Tools",
      url: "/texttools/case-converter.html",
      description:
        "Convert text to UPPERCASE, lowercase, Title Case, Sentence case, and camelCase.",
      keywords: [
        "case",
        "converter",
        "uppercase",
        "lowercase",
        "title case",
        "camelcase",
      ],
    },
    {
      name: "Remove Duplicate Lines",
      category: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
      description:
        "Clean up repetitive lines, sort data, and deduplicate text lists instantly.",
      keywords: [
        "duplicate",
        "duplicates",
        "remove",
        "dedup",
        "lines",
        "clean list",
      ],
    },
    {
      name: "Lorem Ipsum Generator",
      category: "Text Tools",
      url: "/texttools/loremipsumgenerator.html",
      description:
        "Generate placeholder dummy copy by paragraphs, sentences, or words.",
      keywords: [
        "lorem",
        "ipsum",
        "dummy",
        "placeholder",
        "generator",
        "mock text",
      ],
    },
    {
      name: "Password Generator",
      category: "Text Tools",
      url: "/texttools/passwordgenerator.html",
      description:
        "Create cryptographically strong, custom passwords with symbols and numbers.",
      keywords: [
        "password",
        "generator",
        "security",
        "secure pass",
        "random password",
      ],
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      url: "/texttools/text-reverser.html",
      description:
        "Reverse entire strings, flip words, or reverse line orders effortlessly.",
      keywords: ["reverse", "reverser", "flip", "backwards", "invert text"],
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      url: "/texttools/onlinenotepad.html",
      description:
        "Simple web scratchpad with instant auto-save in your local browser storage.",
      keywords: [
        "notepad",
        "notes",
        "online notepad",
        "scratchpad",
        "text editor",
      ],
    },

    // Calculators (8)
    {
      name: "Age Calculator",
      category: "Calculators",
      url: "/calculator/agecalculator.html",
      description:
        "Calculate your exact age in years, months, weeks, days, hours, and minutes.",
      keywords: [
        "age",
        "calculator",
        "birthday",
        "birth date",
        "years old",
        "how old",
      ],
    },
    {
      name: "BMI Calculator",
      category: "Calculators",
      url: "/calculator/bmi-calculator.html",
      description:
        "Calculate Body Mass Index and healthy weight category for adults and teens.",
      keywords: [
        "bmi",
        "calculator",
        "body mass index",
        "weight",
        "health",
        "fitness",
      ],
    },
    {
      name: "Percentage Calculator",
      category: "Calculators",
      url: "/calculator/percentage-calculator.html",
      description:
        "Solve percentage increase, decrease, fraction to percent, and ratio math.",
      keywords: [
        "percentage",
        "calculator",
        "percent",
        "math",
        "ratio",
        "fraction",
      ],
    },
    {
      name: "Calorie Calculator",
      category: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
      description:
        "Estimate daily caloric needs, Basal Metabolic Rate (BMR), and TDEE.",
      keywords: [
        "calorie",
        "calculator",
        "calories",
        "bmr",
        "tdee",
        "diet",
        "nutrition",
      ],
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      url: "/calculator/discount-calculator.html",
      description:
        "Find sale price savings, markdown percentage, and final checkout total.",
      keywords: [
        "discount",
        "calculator",
        "sale",
        "savings",
        "coupon",
        "retail price",
      ],
    },
    {
      name: "Saving & Goal Calculator",
      category: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
      description:
        "Calculate compound interest growth and monthly savings targets.",
      keywords: [
        "saving",
        "goal",
        "calculator",
        "compound interest",
        "investment",
        "finance",
      ],
    },
    {
      name: "Tip Calculator",
      category: "Calculators",
      url: "/calculator/tip-calculator.html",
      description:
        "Calculate restaurant gratuity and split the bill among multiple diners.",
      keywords: [
        "tip",
        "calculator",
        "gratuity",
        "split bill",
        "restaurant",
        "dining",
      ],
    },
    {
      name: "GPA Calculator",
      category: "Calculators",
      url: "/calculator/gpa-calculator.html",
      description:
        "Compute semester and cumulative college Grade Point Average accurately.",
      keywords: [
        "gpa",
        "calculator",
        "grade",
        "college",
        "semester",
        "academic grades",
      ],
    },

    // Image & PDF (6)
    {
      name: "PDF to Word Converter",
      category: "Image & PDF",
      url: "/image&pdf/pdftowordconverter.html",
      description:
        "Convert PDF documents into editable Word (.docx) files client-side.",
      keywords: [
        "pdf to word",
        "pdf to docx",
        "convert pdf to word",
        "pdf converter",
        "word",
        "docx",
        "pdf",
      ],
    },
    {
      name: "Image Compressor",
      category: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
      description:
        "Compress JPEG, PNG, and WebP images while preserving high visual quality.",
      keywords: [
        "image compressor",
        "compress image",
        "reduce image size",
        "optimize photos",
      ],
    },
    {
      name: "Image Resizer",
      category: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
      description:
        "Resize image dimensions in pixels or percentage with aspect ratio lock.",
      keywords: [
        "image resizer",
        "resize image",
        "scale photo",
        "crop dimensions",
        "aspect ratio",
      ],
    },
    {
      name: "JPG to PNG",
      category: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
      description:
        "Convert JPEG photos into PNG format with support for transparent layers.",
      keywords: ["jpg to png", "jpeg to png", "image convert", "png format"],
    },
    {
      name: "Color Picker",
      category: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
      description:
        "Eyedropper tool, HEX, RGB, HSL converter, and harmonious palette generator.",
      keywords: [
        "color picker",
        "hex color",
        "rgb",
        "hsl",
        "color palette",
        "eyedropper",
      ],
    },
    {
      name: "QR Generator",
      category: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
      description:
        "Create custom QR codes for website URLs, Wi-Fi passwords, vCards, and text.",
      keywords: ["qr code", "qr generator", "barcode", "make qr", "wifi qr"],
    },

    // Developer Tools (8)
    {
      name: "JSON Formatter",
      category: "Developer",
      url: "/developertools/JSONFORMATTER.html",
      description:
        "Validate, beautify, indent, and minify complex JSON data structures.",
      keywords: [
        "json formatter",
        "json beautifier",
        "validate json",
        "minify json",
        "json parser",
      ],
    },
    {
      name: "Base64 Encoder/Decoder",
      category: "Developer",
      url: "/developertools/base64encoderdecoder.html",
      description:
        "Encode text and binary to Base64 strings, or decode Base64 back to plaintext.",
      keywords: [
        "base64",
        "encoder",
        "decoder",
        "base64 encode",
        "binary to string",
      ],
    },
    {
      name: "URL Encoder/Decoder",
      category: "Developer",
      url: "/developertools/urlencoderdecoder.html",
      description:
        "Encode URL parameters with percent-encoding or decode URI strings safely.",
      keywords: [
        "url encoder",
        "url decoder",
        "uri encode",
        "percent encoding",
        "query string",
      ],
    },
    {
      name: "Meta Tag Generator",
      category: "Developer",
      url: "/developertools/meta-tag-generator.html",
      description:
        "Generate complete SEO, Open Graph, and Twitter Card meta tags for websites.",
      keywords: [
        "meta tag generator",
        "seo tags",
        "open graph",
        "twitter cards",
        "html meta",
      ],
    },
    {
      name: "Regex Tester",
      category: "Developer",
      url: "/developertools/regextester.html",
      description:
        "Test regular expressions in real time with match highlighting and explanations.",
      keywords: [
        "regex tester",
        "regular expression",
        "regex matcher",
        "pattern test",
      ],
    },
    {
      name: "Markdown to HTML",
      category: "Developer",
      url: "/developertools/markdownhtml.html",
      description:
        "Convert Markdown syntax into clean, formatted HTML markup with live preview.",
      keywords: [
        "markdown to html",
        "md to html",
        "markdown converter",
        "markup preview",
      ],
    },
    {
      name: "CSS Minifier",
      category: "Developer",
      url: "/developertools/cssminifier.html",
      description:
        "Minify CSS files to reduce bandwidth and accelerate web page loading speeds.",
      keywords: [
        "css minifier",
        "minify css",
        "compress stylesheet",
        "css optimizer",
      ],
    },
    {
      name: "Unix Timestamp",
      category: "Developer",
      url: "/developertools/unixtimestamp.html",
      description:
        "Convert epoch seconds and milliseconds to human-readable dates and back.",
      keywords: [
        "unix timestamp",
        "epoch converter",
        "unix time",
        "date to timestamp",
      ],
    },
  ];

  // ============================================================
  // 2. STATE MANAGEMENT
  // ============================================================
  const state = {
    files: [], // Array of { id, file, name, size, pageCount, status, error, extractedPages, docxBlob, docxName, fullText }
    isProcessing: false,
    activePreviewFileId: null,
  };

  // Configure PDF.js Worker
  if (window.pdfjsLib) {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  }

  // ============================================================
  // 3. APPLICATION INITIALIZATION
  // ============================================================
  document.addEventListener("DOMContentLoaded", () => {
    initApp();
  });

  function initApp() {
    initDesktopDropdowns();
    initMobileMenu();
    initSearch();
    initFAQ();
    initPdfConverter();
  }

  // ============================================================
  // 4. DESKTOP DROPDOWNS
  // ============================================================
  function initDesktopDropdowns() {
    const dropdownItems = document.querySelectorAll(".nav-item.has-dropdown");

    dropdownItems.forEach((item) => {
      const btn = item.querySelector(".dropdown-toggle");
      if (!btn) return;

      // Keyboard & Click toggle
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const isOpen = item.classList.contains("open");

        // Close others
        dropdownItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove("open");
            const otherBtn = other.querySelector(".dropdown-toggle");
            if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          }
        });

        if (isOpen) {
          item.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
        } else {
          item.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });

    // Close dropdowns on outside click or ESC
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav-item.has-dropdown")) {
        dropdownItems.forEach((item) => {
          item.classList.remove("open");
          const btn = item.querySelector(".dropdown-toggle");
          if (btn) btn.setAttribute("aria-expanded", "false");
        });
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        dropdownItems.forEach((item) => {
          item.classList.remove("open");
          const btn = item.querySelector(".dropdown-toggle");
          if (btn) btn.setAttribute("aria-expanded", "false");
        });
      }
    });
  }

  // ============================================================
  // 5. MOBILE MENU & ACCORDIONS
  // ============================================================
  function initMobileMenu() {
    const menuBtn = document.getElementById("mobileMenuBtn");
    const drawer = document.getElementById("mobileDrawer");
    const backdrop = document.getElementById("mobileBackdrop");
    const closeBtn = document.getElementById("drawerCloseBtn");
    const mobileSearchTrigger = document.getElementById("mobileSearchBtn");

    if (!menuBtn || !drawer || !backdrop) return;

    function openDrawer() {
      drawer.classList.add("open");
      backdrop.classList.add("open");
      drawer.setAttribute("aria-hidden", "false");
      backdrop.setAttribute("aria-hidden", "false");
      menuBtn.setAttribute("aria-expanded", "true");
      document.body.classList.add("drawer-open");
    }

    function closeDrawer() {
      drawer.classList.remove("open");
      backdrop.classList.remove("open");
      drawer.setAttribute("aria-hidden", "true");
      backdrop.setAttribute("aria-hidden", "true");
      menuBtn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("drawer-open");
    }

    menuBtn.addEventListener("click", openDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    backdrop.addEventListener("click", closeDrawer);

    // ESC closes mobile drawer
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("open")) {
        closeDrawer();
      }
    });

    // Close when clicking any nav link
    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });

    // Mobile Search button inside drawer opens search modal
    if (mobileSearchTrigger) {
      mobileSearchTrigger.addEventListener("click", () => {
        closeDrawer();
        openSearchModal();
      });
    }

    // Mobile Drawer Accordions
    const accordions = drawer.querySelectorAll(".mobile-accordion");
    accordions.forEach((accordion) => {
      const header = accordion.querySelector(".accordion-header");
      if (!header) return;

      header.addEventListener("click", () => {
        const isOpen = accordion.classList.contains("open");
        accordions.forEach((acc) => {
          if (acc !== accordion) {
            acc.classList.remove("open");
            const h = acc.querySelector(".accordion-header");
            if (h) h.setAttribute("aria-expanded", "false");
          }
        });

        if (isOpen) {
          accordion.classList.remove("open");
          header.setAttribute("aria-expanded", "false");
        } else {
          accordion.classList.add("open");
          header.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  // ============================================================
  // 6. SEARCH MODAL ENGINE (30 TOOLS)
  // ============================================================
  let searchModal,
    searchBackdrop,
    searchInput,
    searchResultsList,
    searchEmptyState,
    searchHint;

  function initSearch() {
    searchModal = document.getElementById("searchModal");
    searchBackdrop = document.getElementById("searchBackdrop");
    searchInput = document.getElementById("searchInput");
    searchResultsList = document.getElementById("searchResultsList");
    searchEmptyState = document.getElementById("searchEmptyState");
    searchHint = document.getElementById("searchHint");

    const searchTriggerBtn = document.getElementById("searchTriggerBtn");
    const searchCloseBtn = document.getElementById("searchCloseBtn");

    if (searchTriggerBtn) {
      searchTriggerBtn.addEventListener("click", openSearchModal);
    }
    if (searchCloseBtn) {
      searchCloseBtn.addEventListener("click", closeSearchModal);
    }
    if (searchBackdrop) {
      searchBackdrop.addEventListener("click", closeSearchModal);
    }

    // Keyboard Shortcuts: Ctrl+K or Cmd+K
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (searchModal.classList.contains("open")) {
          closeSearchModal();
        } else {
          openSearchModal();
        }
      } else if (e.key === "Escape" && searchModal.classList.contains("open")) {
        closeSearchModal();
      }
    });

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        performSearch(e.target.value.trim());
      });
    }
  }

  function openSearchModal() {
    if (!searchModal || !searchBackdrop) return;
    searchModal.classList.add("open");
    searchBackdrop.classList.add("open");
    searchModal.setAttribute("aria-hidden", "false");
    searchBackdrop.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    if (searchInput) {
      searchInput.value = "";
      setTimeout(() => searchInput.focus(), 50);
      renderSearchResults(HUZIKIT_TOOLS.slice(0, 8)); // Initial popular tools
    }
  }

  function closeSearchModal() {
    if (!searchModal || !searchBackdrop) return;
    searchModal.classList.remove("open");
    searchBackdrop.classList.remove("open");
    searchModal.setAttribute("aria-hidden", "true");
    searchBackdrop.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  function performSearch(query) {
    if (!query) {
      if (searchHint) searchHint.style.display = "block";
      renderSearchResults(HUZIKIT_TOOLS.slice(0, 8));
      return;
    }

    if (searchHint) searchHint.style.display = "none";
    const q = query.toLowerCase();

    const matches = HUZIKIT_TOOLS.filter((tool) => {
      const nameMatch = tool.name.toLowerCase().includes(q);
      const catMatch = tool.category.toLowerCase().includes(q);
      const descMatch = tool.description.toLowerCase().includes(q);
      const keywordMatch = tool.keywords.some((k) =>
        k.toLowerCase().includes(q),
      );
      return nameMatch || catMatch || descMatch || keywordMatch;
    });

    renderSearchResults(matches);
  }

  function renderSearchResults(results) {
    if (!searchResultsList || !searchEmptyState) return;
    searchResultsList.innerHTML = "";

    if (results.length === 0) {
      searchEmptyState.style.display = "block";
      return;
    }

    searchEmptyState.style.display = "none";

    results.forEach((tool) => {
      const li = document.createElement("li");
      li.className = "search-result-item";
      li.setAttribute("role", "option");

      const a = document.createElement("a");
      a.href = tool.url;
      a.style.display = "flex";
      a.style.width = "100%";
      a.style.alignItems = "center";
      a.style.justifyContent = "space-between";

      const info = document.createElement("div");
      info.className = "search-result-info";

      const title = document.createElement("span");
      title.className = "search-result-title";
      title.textContent = tool.name;

      const desc = document.createElement("span");
      desc.style.fontSize = "0.785rem";
      desc.style.color = "var(--ink-soft)";
      desc.textContent = tool.description;

      info.appendChild(title);
      info.appendChild(desc);

      const category = document.createElement("span");
      category.className = "search-result-category";
      category.textContent = tool.category;

      a.appendChild(info);
      a.appendChild(category);
      li.appendChild(a);

      a.addEventListener("click", () => {
        closeSearchModal();
      });

      searchResultsList.appendChild(li);
    });
  }

  // ============================================================
  // 7. FAQ ACCORDION
  // ============================================================
  function initFAQ() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
      const btn = item.querySelector(".faq-question-btn");
      if (!btn) return;

      btn.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        // Toggle clicked
        if (isActive) {
          item.classList.remove("active");
          btn.setAttribute("aria-expanded", "false");
        } else {
          item.classList.add("active");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  // ============================================================
  // 8. PDF CONVERTER LOGIC & CORE WORKFLOW
  // ============================================================
  let dropZone, fileInput, appAlert, alertTitle, alertMessage, alertDismissBtn;
  let fileQueueSection, queueCountBadge, addMoreFilesBtn, clearAllBtn, fileList;
  let convertAllBtn, conversionSummary;
  let progressCard,
    progressStageText,
    progressPercent,
    progressBar,
    progressDetail;
  let resultsSection, resultsGrid, convertAnotherBtn;
  let previewModal,
    previewBackdrop,
    previewCloseBtn,
    previewContent,
    previewStats;
  let copyPreviewBtn, copyBtnText, downloadFromPreviewBtn;

  function initPdfConverter() {
    dropZone = document.getElementById("dropZone");
    fileInput = document.getElementById("fileInput");
    appAlert = document.getElementById("appAlert");
    alertTitle = document.getElementById("alertTitle");
    alertMessage = document.getElementById("alertMessage");
    alertDismissBtn = document.getElementById("alertDismissBtn");

    fileQueueSection = document.getElementById("fileQueueSection");
    queueCountBadge = document.getElementById("queueCountBadge");
    addMoreFilesBtn = document.getElementById("addMoreFilesBtn");
    clearAllBtn = document.getElementById("clearAllBtn");
    fileList = document.getElementById("fileList");

    convertAllBtn = document.getElementById("convertAllBtn");
    conversionSummary = document.getElementById("conversionSummary");

    progressCard = document.getElementById("progressCard");
    progressStageText = document.getElementById("progressStageText");
    progressPercent = document.getElementById("progressPercent");
    progressBar = document.getElementById("progressBar");
    progressDetail = document.getElementById("progressDetail");

    resultsSection = document.getElementById("resultsSection");
    resultsGrid = document.getElementById("resultsGrid");
    convertAnotherBtn = document.getElementById("convertAnotherBtn");

    previewModal = document.getElementById("previewModal");
    previewBackdrop = document.getElementById("previewBackdrop");
    previewCloseBtn = document.getElementById("previewCloseBtn");
    previewContent = document.getElementById("previewContent");
    previewStats = document.getElementById("previewStats");
    copyPreviewBtn = document.getElementById("copyPreviewBtn");
    copyBtnText = document.getElementById("copyBtnText");
    downloadFromPreviewBtn = document.getElementById("downloadFromPreviewBtn");

    // Drag and drop listeners
    if (dropZone && fileInput) {
      dropZone.addEventListener("click", (e) => {
        // Prevent click if clicking an interactive element
        if (e.target !== fileInput) {
          fileInput.click();
        }
      });

      dropZone.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          fileInput.click();
        }
      });

      ["dragenter", "dragover"].forEach((eventName) => {
        dropZone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropZone.classList.add("dragover");
        });
      });

      ["dragleave", "drop"].forEach((eventName) => {
        dropZone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropZone.classList.remove("dragover");
        });
      });

      dropZone.addEventListener("drop", (e) => {
        const droppedFiles = e.dataTransfer.files;
        if (droppedFiles && droppedFiles.length > 0) {
          handleSelectedFiles(droppedFiles);
        }
      });

      fileInput.addEventListener("change", (e) => {
        if (e.target.files && e.target.files.length > 0) {
          handleSelectedFiles(e.target.files);
          // Reset input value so re-selecting same file triggers change
          fileInput.value = "";
        }
      });
    }

    if (alertDismissBtn) {
      alertDismissBtn.addEventListener("click", hideAlert);
    }

    if (addMoreFilesBtn) {
      addMoreFilesBtn.addEventListener("click", () => {
        fileInput.click();
      });
    }

    if (clearAllBtn) {
      clearAllBtn.addEventListener("click", clearAllFiles);
    }

    if (convertAllBtn) {
      convertAllBtn.addEventListener("click", startBatchConversion);
    }

    if (convertAnotherBtn) {
      convertAnotherBtn.addEventListener("click", resetConverterToInitial);
    }

    // Preview modal actions
    if (previewCloseBtn)
      previewCloseBtn.addEventListener("click", closePreviewModal);
    if (previewBackdrop)
      previewBackdrop.addEventListener("click", closePreviewModal);
    if (copyPreviewBtn)
      copyPreviewBtn.addEventListener("click", copyExtractedText);
    if (downloadFromPreviewBtn) {
      downloadFromPreviewBtn.addEventListener("click", () => {
        if (state.activePreviewFileId) {
          const fileItem = state.files.find(
            (f) => f.id === state.activePreviewFileId,
          );
          if (fileItem && fileItem.docxBlob) {
            triggerDownload(fileItem.docxBlob, fileItem.docxName);
          }
        }
      });
    }
  }

  // ============================================================
  // 9. FILE SELECTION & VALIDATION
  // ============================================================
  function handleSelectedFiles(fileListObj) {
    hideAlert();
    const incomingFiles = Array.from(fileListObj);

    incomingFiles.forEach((file) => {
      // Validate PDF MIME or extension
      const isPdfMime = file.type === "application/pdf";
      const isPdfExt = file.name.toLowerCase().endsWith(".pdf");

      if (!isPdfMime && !isPdfExt) {
        showAlert(
          "Invalid File Type",
          `"${file.name}" is not a PDF file. Please select genuine .pdf documents.`,
        );
        return;
      }

      // Validate File Size
      if (file.size > MAX_FILE_SIZE_BYTES) {
        showAlert(
          "File Size Limit Exceeded",
          `"${file.name}" is ${formatFileSize(file.size)}. Huzikit's client-side browser converter has a 50MB safety limit to protect your device memory.`,
        );
        return;
      }

      // Check duplicates
      const isDuplicate = state.files.some(
        (f) => f.name === file.name && f.size === file.size,
      );
      if (isDuplicate) {
        showAlert(
          "Document Already Queued",
          `"${file.name}" is already in your conversion list.`,
          true,
        );
        return;
      }

      // Create File Record
      const fileId =
        "pdf_" + Date.now() + "_" + Math.random().toString(36).substring(2, 8);
      const cleanDocxName = generateConvertedDocxFilename(file.name);

      const fileRecord = {
        id: fileId,
        file: file,
        name: file.name,
        size: file.size,
        pageCount: null,
        status: "ready", // 'ready' | 'processing' | 'complete' | 'error'
        error: null,
        extractedPages: [],
        docxBlob: null,
        docxName: cleanDocxName,
        fullText: "",
      };

      state.files.push(fileRecord);

      // Pre-probe page count asynchronously using PDF.js
      probePdfPageCount(fileRecord);
    });

    updateQueueUI();
  }

  function generateConvertedDocxFilename(pdfName) {
    let base = pdfName;
    if (base.toLowerCase().endsWith(".pdf")) {
      base = base.substring(0, base.length - 4);
    }
    return `${base}-converted.docx`;
  }

  function formatFileSize(bytes) {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  // Pre-load basic PDF metadata (real page count)
  async function probePdfPageCount(fileRecord) {
    try {
      if (!window.pdfjsLib) return;
      const arrayBuffer = await fileRecord.file.arrayBuffer();
      const pdfDoc = await window.pdfjsLib.getDocument({ data: arrayBuffer })
        .promise;
      fileRecord.pageCount = pdfDoc.numPages;
      updateQueueUI();
    } catch (err) {
      if (err.name === "PasswordException") {
        fileRecord.status = "error";
        fileRecord.error = "Password Protected";
        updateQueueUI();
      }
    }
  }

  // ============================================================
  // 10. QUEUE UI UPDATES
  // ============================================================
  function updateQueueUI() {
    if (state.files.length === 0) {
      if (fileQueueSection) fileQueueSection.style.display = "none";
      if (dropZone) dropZone.style.display = "block";
      return;
    }

    if (fileQueueSection) fileQueueSection.style.display = "flex";
    if (queueCountBadge) {
      queueCountBadge.textContent = `${state.files.length} ${state.files.length === 1 ? "file" : "files"}`;
    }

    if (fileList) {
      fileList.innerHTML = "";

      state.files.forEach((fileItem) => {
        const card = document.createElement("div");
        card.className = "file-card";
        card.id = `fileCard_${fileItem.id}`;

        const info = document.createElement("div");
        info.className = "file-card-info";

        const icon = document.createElement("div");
        icon.className = "file-card-icon";
        icon.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line></svg>`;

        const details = document.createElement("div");
        details.className = "file-card-details";

        const name = document.createElement("span");
        name.className = "file-card-name";
        name.textContent = fileItem.name;

        const meta = document.createElement("div");
        meta.className = "file-card-meta";

        const sizeSpan = document.createElement("span");
        sizeSpan.className = "file-meta-item";
        sizeSpan.textContent = formatFileSize(fileItem.size);

        const pagesSpan = document.createElement("span");
        pagesSpan.className = "file-meta-item";
        pagesSpan.textContent =
          fileItem.pageCount !== null
            ? `${fileItem.pageCount} ${fileItem.pageCount === 1 ? "page" : "pages"}`
            : "Detecting pages...";

        const statusBadge = document.createElement("span");
        statusBadge.className = `status-badge ${fileItem.status}`;
        statusBadge.textContent = getStatusLabel(
          fileItem.status,
          fileItem.error,
        );

        meta.appendChild(sizeSpan);
        meta.appendChild(document.createTextNode("•"));
        meta.appendChild(pagesSpan);
        meta.appendChild(document.createTextNode("•"));
        meta.appendChild(statusBadge);

        details.appendChild(name);
        details.appendChild(meta);

        info.appendChild(icon);
        info.appendChild(details);

        // Right controls (Remove, or Convert item)
        const controls = document.createElement("div");
        controls.className = "file-card-controls";

        if (fileItem.status === "ready" && !state.isProcessing) {
          const removeBtn = document.createElement("button");
          removeBtn.type = "button";
          removeBtn.className = "btn-icon-danger";
          removeBtn.setAttribute("aria-label", `Remove ${fileItem.name}`);
          removeBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`;
          removeBtn.addEventListener("click", () => removeFile(fileItem.id));
          controls.appendChild(removeBtn);
        }

        card.appendChild(info);
        card.appendChild(controls);
        fileList.appendChild(card);
      });
    }

    // Update summary text
    if (conversionSummary) {
      const readyCount = state.files.filter((f) => f.status === "ready").length;
      if (readyCount > 0) {
        conversionSummary.textContent = `Ready to convert ${readyCount} ${readyCount === 1 ? "PDF document" : "PDF documents"} to Word`;
      } else {
        conversionSummary.textContent =
          "All documents in queue have been processed.";
      }
    }
  }

  function getStatusLabel(status, err) {
    if (status === "ready") return "Ready";
    if (status === "processing") return "Converting...";
    if (status === "complete") return "Converted";
    if (status === "error") return err || "Error";
    return status;
  }

  function removeFile(fileId) {
    state.files = state.files.filter((f) => f.id !== fileId);
    updateQueueUI();
  }

  function clearAllFiles() {
    state.files = [];
    updateQueueUI();
    hideAlert();
    if (resultsSection) resultsSection.style.display = "none";
  }

  function resetConverterToInitial() {
    state.files = [];
    state.isProcessing = false;
    updateQueueUI();
    if (resultsSection) resultsSection.style.display = "none";
    if (progressCard) progressCard.style.display = "none";
    if (dropZone) dropZone.style.display = "block";
    hideAlert();
  }

  // ============================================================
  // 11. PDF PARSING, TEXT EXTRACTION & DOCX CREATION
  // ============================================================
  async function startBatchConversion() {
    const readyFiles = state.files.filter((f) => f.status === "ready");
    if (readyFiles.length === 0) {
      showAlert(
        "No Documents to Convert",
        "Please add text-based PDF documents to the conversion queue.",
        true,
      );
      return;
    }

    state.isProcessing = true;
    showProgressCard(true);

    if (convertAllBtn) convertAllBtn.disabled = true;

    for (let i = 0; i < readyFiles.length; i++) {
      const fileRecord = readyFiles[i];
      await convertSinglePdf(fileRecord, i, readyFiles.length);
    }

    state.isProcessing = false;
    showProgressCard(false);
    if (convertAllBtn) convertAllBtn.disabled = false;

    renderResultsSection();
  }

  async function convertSinglePdf(fileRecord, index, totalFiles) {
    fileRecord.status = "processing";
    updateQueueUI();

    updateProgress(
      `Reading PDF (${index + 1}/${totalFiles})`,
      10,
      `Loading binary stream for "${fileRecord.name}" into local memory...`,
    );

    try {
      if (!window.pdfjsLib) {
        throw new Error(
          "PDF.js library was unable to load from CDN. Please check your internet connection.",
        );
      }

      // Step 1: Read ArrayBuffer
      const arrayBuffer = await fileRecord.file.arrayBuffer();

      // Step 2: Load document with PDF.js
      const pdfLoadingTask = window.pdfjsLib.getDocument({ data: arrayBuffer });
      const pdfDoc = await pdfLoadingTask.promise;

      fileRecord.pageCount = pdfDoc.numPages;
      const pagesText = [];
      let totalExtractedChars = 0;

      // Step 3: Iterate through every single page
      for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
        const pagePct = Math.round(15 + ((pageNum - 1) / pdfDoc.numPages) * 60);
        updateProgress(
          `Extracting page ${pageNum} of ${pdfDoc.numPages}`,
          pagePct,
          `Parsing textual glyph streams from page ${pageNum}...`,
        );

        const page = await pdfDoc.getPage(pageNum);
        const textContent = await page.getTextContent();

        // Reconstruct readable lines and paragraphs
        const pageParagraphs = reconstructPageParagraphs(textContent.items);
        pagesText.push(pageParagraphs);

        // Count characters for scanned PDF detection
        pageParagraphs.forEach((p) => {
          totalExtractedChars += p.length;
        });
      }

      fileRecord.extractedPages = pagesText;
      fileRecord.fullText = pagesText
        .map((pList, idx) => `--- PAGE ${idx + 1} ---\n\n` + pList.join("\n\n"))
        .join("\n\n");

      // Check if document has selectable text
      if (totalExtractedChars < 10) {
        showAlert(
          "Scanned / Image-Only PDF Detected",
          `"${fileRecord.name}" appears to consist of scanned images with no selectable digital text streams. Word documents require text streams or OCR (Optical Character Recognition). An editable document was generated with raw page references.`,
          true,
        );
      }

      // Step 4: Generate Real Office Open XML DOCX
      updateProgress(
        "Generating Word Document",
        85,
        "Packaging Office Open XML (.docx) binary container...",
      );
      const docxBlob = await buildRealDocx(fileRecord.name, pagesText);

      fileRecord.docxBlob = docxBlob;
      fileRecord.status = "complete";

      updateProgress(
        "Finalizing DOCX",
        100,
        `Completed "${fileRecord.docxName}" successfully.`,
      );
    } catch (err) {
      console.error("PDF Conversion Error:", err);
      fileRecord.status = "error";

      if (err.name === "PasswordException") {
        fileRecord.error = "Password Protected";
        showAlert(
          "Password Protected PDF",
          `"${fileRecord.name}" is password protected and cannot be converted without the correct decryption credentials.`,
        );
      } else {
        fileRecord.error = "Failed to Parse";
        showAlert(
          "Conversion Failed",
          `Could not convert "${fileRecord.name}". The document may be corrupted or malformed (${err.message || "Unknown error"}).`,
        );
      }
    }

    updateQueueUI();
  }

  // ============================================================
  // 12. TEXT RECONSTRUCTION ALGORITHM
  // ============================================================
  /**
   * Reconstructs readable paragraphs from unordered PDF.js text items.
   * Considers vertical (Y) alignment to group lines, horizontal (X) spacing
   * to separate words, and vertical gaps to detect paragraph boundaries.
   */
  function reconstructPageParagraphs(items) {
    if (!items || items.length === 0) {
      return ["[No selectable text found on this page]"];
    }

    // Sort items vertically (top to bottom: PDF Y is inverted), then horizontally (left to right)
    const sorted = [...items].sort((a, b) => {
      const yA = a.transform[5];
      const yB = b.transform[5];
      const xA = a.transform[4];
      const xB = b.transform[4];

      // If Y coordinates are close (within 4 points), treat as same line
      if (Math.abs(yA - yB) < 4) {
        return xA - xB;
      }
      return yB - yA; // Higher Y comes first in PDF coordinate space
    });

    const lines = [];
    let currentLine = [];
    let lastY = null;
    let lastX = null;
    let lastWidth = null;

    sorted.forEach((item) => {
      const str = item.str;
      if (!str || (str.trim() === "" && !item.hasEOL)) return;

      const x = item.transform[4];
      const y = item.transform[5];
      const width = item.width || 0;

      if (lastY === null) {
        currentLine.push(str);
        lastY = y;
        lastX = x;
        lastWidth = width;
      } else if (Math.abs(y - lastY) < 4) {
        // Same line
        const gap = x - (lastX + lastWidth);
        if (gap > 2) {
          currentLine.push(" " + str);
        } else {
          currentLine.push(str);
        }
        lastX = x;
        lastWidth = width;
      } else {
        // New line
        lines.push({
          text: currentLine.join("").trim(),
          y: lastY,
        });
        currentLine = [str];
        lastY = y;
        lastX = x;
        lastWidth = width;
      }
    });

    if (currentLine.length > 0) {
      lines.push({
        text: currentLine.join("").trim(),
        y: lastY,
      });
    }

    // Now group lines into paragraphs based on vertical spacing
    const paragraphs = [];
    let currentParagraph = [];
    let prevLineY = null;

    lines.forEach((lineObj) => {
      if (!lineObj.text) return;

      if (prevLineY === null) {
        currentParagraph.push(lineObj.text);
      } else {
        const deltaY = Math.abs(prevLineY - lineObj.y);
        // Typical line height is 12-16pt. A gap > 22 indicates paragraph break
        if (deltaY > 22) {
          if (currentParagraph.length > 0) {
            paragraphs.push(currentParagraph.join(" "));
            currentParagraph = [];
          }
        }
        currentParagraph.push(lineObj.text);
      }
      prevLineY = lineObj.y;
    });

    if (currentParagraph.length > 0) {
      paragraphs.push(currentParagraph.join(" "));
    }

    return paragraphs.length > 0 ? paragraphs : ["[Empty Page]"];
  }

  // ============================================================
  // 13. REAL OFFICE OPEN XML (.DOCX) BINARY BUILDER
  // ============================================================
  /**
   * Generates a 100% compliant Microsoft Word (.docx) file.
   * Tries the `docx` library if available, and seamlessly utilizes JSZip
   * to package the full Office Open XML document structure.
   */
  async function buildRealDocx(originalFilename, pagesText) {
    // Strategy A: If `docx` library is present on window
    if (window.docx && window.docx.Document && window.docx.Packer) {
      try {
        const docxLib = window.docx;
        const children = [];

        pagesText.forEach((pageParagraphs, pageIndex) => {
          pageParagraphs.forEach((paraText) => {
            children.push(
              new docxLib.Paragraph({
                children: [
                  new docxLib.TextRun({
                    text: paraText,
                    font: "Calibri",
                    size: 24, // 12pt
                  }),
                ],
                spacing: {
                  after: 160,
                  line: 276,
                },
              }),
            );
          });

          // Insert page break between PDF pages (except after the last page)
          if (pageIndex < pagesText.length - 1) {
            children.push(
              new docxLib.Paragraph({
                children: [new docxLib.PageBreak()],
              }),
            );
          }
        });

        const doc = new docxLib.Document({
          creator: "Huzikit PDF to Word Converter",
          title: originalFilename,
          sections: [
            {
              properties: {
                page: {
                  margin: {
                    top: 1440,
                    right: 1440,
                    bottom: 1440,
                    left: 1440,
                  },
                },
              },
              children: children,
            },
          ],
        });

        const blob = await docxLib.Packer.toBlob(doc);
        return blob;
      } catch (docxErr) {
        console.warn(
          "docx UMD generator encountered an issue, switching to JSZip XML engine:",
          docxErr,
        );
      }
    }

    // Strategy B: Robust Office Open XML Builder with JSZip
    if (window.JSZip) {
      const zip = new window.JSZip();

      // [Content_Types].xml
      zip.file(
        "[Content_Types].xml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
  <Override PartName="/word/settings.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>`,
      );

      // _rels/.rels
      zip.folder("_rels").file(
        ".rels",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>`,
      );

      // word/_rels/document.xml.rels
      zip
        .folder("word")
        .folder("_rels")
        .file(
          "document.xml.rels",
          `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/>
</Relationships>`,
        );

      // word/styles.xml
      zip.folder("word").file(
        "styles.xml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:docDefaults>
    <w:rPrDefault>
      <w:rPr>
        <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/>
        <w:sz w:val="24"/>
        <w:szCs w:val="24"/>
        <w:color w:val="15132B"/>
      </w:rPr>
    </w:rPrDefault>
    <w:pPrDefault>
      <w:pPr>
        <w:spacing w:after="160" w:line="276" w:lineRule="auto"/>
      </w:pPr>
    </w:pPrDefault>
  </w:docDefaults>
</w:styles>`,
      );

      // word/settings.xml
      zip.folder("word").file(
        "settings.xml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:settings xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:defaultTabStop w:val="720"/>
</w:settings>`,
      );

      // docProps/core.xml
      const isoDate = new Date().toISOString();
      zip.folder("docProps").file(
        "core.xml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/">
  <dc:title>${escapeXml(originalFilename)}</dc:title>
  <dc:creator>Huzikit PDF to Word Converter</dc:creator>
  <cp:lastModifiedBy>Huzikit</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">${isoDate}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">${isoDate}</dcterms:modified>
</cp:coreProperties>`,
      );

      // docProps/app.xml
      zip.folder("docProps").file(
        "app.xml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties">
  <Application>Huzikit Web Suite</Application>
  <DocSecurity>0</DocSecurity>
  <ScaleCrop>false</ScaleCrop>
  <Pages>${pagesText.length}</Pages>
</Properties>`,
      );

      // Assemble word/document.xml with paragraphs and page breaks
      let docXmlBody = "";

      pagesText.forEach((pageParagraphs, pageIndex) => {
        pageParagraphs.forEach((para) => {
          docXmlBody += `<w:p><w:pPr><w:spacing w:after="160" w:line="276" w:lineRule="auto"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/><w:sz w:val="24"/></w:rPr><w:t xml:space="preserve">${escapeXml(para)}</w:t></w:r></w:p>`;
        });

        // Add page break between pages
        if (pageIndex < pagesText.length - 1) {
          docXmlBody += `<w:p><w:r><w:br w:type="page"/></w:r></w:p>`;
        }
      });

      // Section properties with standard 1-inch margins
      docXmlBody += `<w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/></w:sectPr>`;

      const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <w:body>
    ${docXmlBody}
  </w:body>
</w:document>`;

      zip.folder("word").file("document.xml", documentXml);

      // Generate binary Blob
      const blob = await zip.generateAsync({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        compression: "DEFLATE",
        compressionOptions: { level: 6 },
      });

      return blob;
    }

    throw new Error(
      "Neither docx nor JSZip library is available to package the Word document.",
    );
  }

  function escapeXml(unsafe) {
    if (!unsafe) return "";
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  }

  // ============================================================
  // 14. PROGRESS CARD LOGIC
  // ============================================================
  function showProgressCard(visible) {
    if (!progressCard) return;
    progressCard.style.display = visible ? "block" : "none";
  }

  function updateProgress(stage, percent, detail) {
    if (progressStageText) progressStageText.textContent = stage;
    if (progressPercent) progressPercent.textContent = `${percent}%`;
    if (progressBar) progressBar.style.width = `${percent}%`;
    if (progressDetail) progressDetail.textContent = detail;
  }

  // ============================================================
  // 15. RESULTS DASHBOARD & DOWNLOAD TRIGGER
  // ============================================================
  function renderResultsSection() {
    const completedFiles = state.files.filter((f) => f.status === "complete");
    if (completedFiles.length === 0) return;

    if (resultsSection) resultsSection.style.display = "flex";
    if (resultsGrid) {
      resultsGrid.innerHTML = "";

      completedFiles.forEach((fileItem) => {
        const card = document.createElement("div");
        card.className = "result-card";

        const info = document.createElement("div");
        info.className = "result-card-info";

        const icon = document.createElement("div");
        icon.className = "result-docx-icon";
        icon.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;

        const metaBlock = document.createElement("div");
        metaBlock.className = "result-meta-block";

        const name = document.createElement("span");
        name.className = "result-filename";
        name.textContent = fileItem.docxName;

        const details = document.createElement("div");
        details.className = "result-details";
        details.innerHTML = `<span>Original: <strong>${fileItem.name}</strong></span> <span>•</span> <span>${fileItem.pageCount || 1} Pages</span> <span>•</span> <span>${formatFileSize(fileItem.size)}</span>`;

        metaBlock.appendChild(name);
        metaBlock.appendChild(details);

        info.appendChild(icon);
        info.appendChild(metaBlock);

        // Actions: Download & Preview
        const actions = document.createElement("div");
        actions.className = "result-actions";

        const previewBtn = document.createElement("button");
        previewBtn.type = "button";
        previewBtn.className = "btn-secondary-sm";
        previewBtn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> <span>Preview Text</span>`;
        previewBtn.addEventListener("click", () =>
          openPreviewModal(fileItem.id),
        );

        const downloadBtn = document.createElement("button");
        downloadBtn.type = "button";
        downloadBtn.className = "btn-primary-sm";
        downloadBtn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> <span>Download Word (.docx)</span>`;
        downloadBtn.addEventListener("click", () =>
          triggerDownload(fileItem.docxBlob, fileItem.docxName),
        );

        actions.appendChild(previewBtn);
        actions.appendChild(downloadBtn);

        card.appendChild(info);
        card.appendChild(actions);
        resultsGrid.appendChild(card);
      });
    }

    // Smooth scroll down to results
    setTimeout(() => {
      resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  function triggerDownload(blob, filename) {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up temporary Object URL to avoid memory leak
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1500);
  }

  // ============================================================
  // 16. TEXT PREVIEW & CLIPBOARD API
  // ============================================================
  function openPreviewModal(fileId) {
    const fileItem = state.files.find((f) => f.id === fileId);
    if (!fileItem) return;

    state.activePreviewFileId = fileId;

    if (previewModal && previewBackdrop) {
      previewModal.classList.add("open");
      previewBackdrop.classList.add("open");
      previewModal.setAttribute("aria-hidden", "false");
      previewBackdrop.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
    }

    if (previewContent) {
      // Limit preview to first 3000 chars if massive, with notice
      const text = fileItem.fullText || "[No extracted text]";
      if (text.length > 5000) {
        previewContent.textContent =
          text.substring(0, 5000) +
          "\n\n[... Remaining content truncated for preview performance. Complete text is saved in your downloaded Word document ...]";
      } else {
        previewContent.textContent = text;
      }
    }

    if (previewStats) {
      const words = (fileItem.fullText.match(/\S+/g) || []).length;
      const chars = fileItem.fullText.length;
      previewStats.textContent = `${words.toLocaleString()} words | ${chars.toLocaleString()} characters | ${fileItem.pageCount || 1} pages`;
    }
  }

  function closePreviewModal() {
    if (!previewModal || !previewBackdrop) return;
    previewModal.classList.remove("open");
    previewBackdrop.classList.remove("open");
    previewModal.setAttribute("aria-hidden", "true");
    previewBackdrop.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    state.activePreviewFileId = null;
  }

  async function copyExtractedText() {
    if (!state.activePreviewFileId) return;
    const fileItem = state.files.find(
      (f) => f.id === state.activePreviewFileId,
    );
    if (!fileItem || !fileItem.fullText) return;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(fileItem.fullText);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = fileItem.fullText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      if (copyBtnText) {
        const originalText = copyBtnText.textContent;
        copyBtnText.textContent = "Copied!";
        setTimeout(() => {
          copyBtnText.textContent = originalText;
        }, 2000);
      }
    } catch (err) {
      console.error("Clipboard copy failed:", err);
    }
  }

  // ============================================================
  // 17. NOTIFICATIONS & ALERTS
  // ============================================================
  function showAlert(title, message, isInfo = false) {
    if (!appAlert || !alertTitle || !alertMessage) return;

    alertTitle.textContent = title;
    alertMessage.textContent = message;

    if (isInfo) {
      appAlert.className = "app-alert info";
    } else {
      appAlert.className = "app-alert";
    }

    appAlert.style.display = "flex";
  }

  function hideAlert() {
    if (appAlert) appAlert.style.display = "none";
  }
})();
