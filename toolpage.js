/**
 * HUZIKIT — ALL TOOLS OVERVIEW JAVASCRIPT
 * Fast, lightweight, accessible client-side logic
 * Zero third-party dependencies
 */

(function () {
  "use strict";

  // -------------------------------------------------------------------------
  // 1. DATASET: ALL 30 HUZIKIT TOOLS (EXACT DATA & URLS)
  // -------------------------------------------------------------------------
  const TOOLS_DATA = [
    // --- TEXT TOOLS (8) ---
    {
      id: "word-counter",
      name: "Word Counter",
      category: "text",
      categoryLabel: "Text Tools",
      url: "/texttools/word-counter.html",
      description:
        "Count words, characters, sentences and other useful writing statistics.",
      keywords: [
        "word",
        "counter",
        "length",
        "sentences",
        "reading time",
        "paragraphs",
        "text statistics",
      ],
      tag: "Statistics",
      iconSvg: '<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',
    },
    {
      id: "character-counter",
      name: "Character Counter",
      category: "text",
      categoryLabel: "Text Tools",
      url: "/texttools/character-counter.html",
      description: "Count characters, letters, spaces and text length quickly.",
      keywords: [
        "character",
        "letter",
        "spaces",
        "count",
        "length",
        "social limits",
        "twitter count",
      ],
      tag: "Precision",
      iconSvg:
        '<path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM9 16l3-8 3 8M10.5 13h3"/>',
    },
    {
      id: "case-converter",
      name: "Case Converter",
      category: "text",
      categoryLabel: "Text Tools",
      url: "/texttools/case-converter.html",
      description:
        "Convert text between uppercase, lowercase, title case and other formats.",
      keywords: [
        "case",
        "converter",
        "uppercase",
        "lowercase",
        "title case",
        "camelcase",
        "snake case",
        "capitalize",
      ],
      tag: "Formatting",
      iconSvg:
        '<path d="m3 15 4-8 4 8M4.5 12h5M15 9v6M15 12a3 3 0 1 1 6 0v3"/>',
    },
    {
      id: "remove-duplicate-lines",
      name: "Remove Duplicate Lines",
      category: "text",
      categoryLabel: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
      description: "Find and remove repeated lines from text instantly.",
      keywords: [
        "duplicate",
        "lines",
        "remove",
        "dedupe",
        "unique",
        "clean list",
        "sanitize",
      ],
      tag: "Cleaner",
      iconSvg: '<path d="M4 6h16M4 12h16M4 18h10M18 15l3 3-3 3"/>',
    },
    {
      id: "lorem-ipsum-generator",
      name: "Lorem Ipsum Generator",
      category: "text",
      categoryLabel: "Text Tools",
      url: "/texttools/loremipsumgenerator.html",
      description:
        "Generate customizable placeholder text for websites and designs.",
      keywords: [
        "lorem",
        "ipsum",
        "placeholder",
        "dummy text",
        "mockup",
        "paragraphs",
        "design filler",
      ],
      tag: "Generator",
      iconSvg:
        '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    },
    {
      id: "password-generator",
      name: "Password Generator",
      category: "text",
      categoryLabel: "Text Tools",
      url: "/texttools/passwordgenerator.html",
      description:
        "Generate strong customizable passwords directly in your browser.",
      keywords: [
        "password",
        "generator",
        "security",
        "strong",
        "random",
        "credentials",
        "entropy",
      ],
      tag: "Security",
      iconSvg:
        '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    },
    {
      id: "text-reverser",
      name: "Text Reverser",
      category: "text",
      categoryLabel: "Text Tools",
      url: "/texttools/text-reverser.html",
      description:
        "Reverse text and characters instantly for testing and creative use.",
      keywords: ["reverse", "flip", "backward", "mirror text", "invert string"],
      tag: "String Utility",
      iconSvg: '<path d="m8 3 4 8 5-5M4 14v4h16M7 21l-3-3 3-3"/>',
    },
    {
      id: "online-notepad",
      name: "Online Notepad",
      category: "text",
      categoryLabel: "Text Tools",
      url: "/texttools/onlinenotepad.html",
      description:
        "Write, edit and organize quick notes directly in your browser.",
      keywords: [
        "notepad",
        "notes",
        "scratchpad",
        "editor",
        "text editor",
        "draft",
        "write",
      ],
      tag: "Drafting",
      iconSvg:
        '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5ZM15 5l4 4"/>',
    },

    // --- CALCULATORS (8) ---
    {
      id: "age-calculator",
      name: "Age Calculator",
      category: "calc",
      categoryLabel: "Calculators",
      url: "/calculator/agecalculator.html",
      description:
        "Calculate exact age in years, months, and days with upcoming birthday countdown.",
      keywords: [
        "age",
        "birthday",
        "date of birth",
        "years",
        "months",
        "days",
        "countdown",
      ],
      tag: "Dates",
      iconSvg:
        '<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
    },
    {
      id: "bmi-calculator",
      name: "BMI Calculator",
      category: "calc",
      categoryLabel: "Calculators",
      url: "/calculator/bmi-calculator.html",
      description:
        "Determine Body Mass Index, health category, and ideal weight targets.",
      keywords: [
        "bmi",
        "body mass index",
        "weight",
        "health",
        "fitness",
        "height",
        "metric",
        "imperial",
      ],
      tag: "Health",
      iconSvg:
        '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    },
    {
      id: "percentage-calculator",
      name: "Percentage Calculator",
      category: "calc",
      categoryLabel: "Calculators",
      url: "/calculator/percentage-calculator.html",
      description:
        "Compute percentage differences, increases, decreases, and fractions effortlessly.",
      keywords: [
        "percentage",
        "percent",
        "fraction",
        "ratio",
        "increase",
        "decrease",
        "discount math",
      ],
      tag: "Math",
      iconSvg:
        '<path d="m19 5-14 14M6.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM17.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>',
    },
    {
      id: "calorie-calculator",
      name: "Calorie Calculator",
      category: "calc",
      categoryLabel: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
      description:
        "Estimate daily caloric needs and Basal Metabolic Rate for nutrition goals.",
      keywords: [
        "calorie",
        "bmr",
        "tdee",
        "metabolism",
        "diet",
        "nutrition",
        "energy intake",
      ],
      tag: "Nutrition",
      iconSvg:
        '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    },
    {
      id: "discount-calculator",
      name: "Discount Calculator",
      category: "calc",
      categoryLabel: "Calculators",
      url: "/calculator/discount-calculator.html",
      description:
        "Compute final sales price, total savings, and tax deductions instantly.",
      keywords: [
        "discount",
        "sale",
        "shopping",
        "savings",
        "percentage off",
        "coupon",
        "tax",
      ],
      tag: "Commerce",
      iconSvg: '<path d="M9 14 4 9l10-7h6v6L10 18l-1-4zM16 6h.01"/>',
    },
    {
      id: "savings-goal-calculator",
      name: "Savings & Goal Calculator",
      category: "calc",
      categoryLabel: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
      description:
        "Plan personal savings, interest accumulation, and milestone timelines.",
      keywords: [
        "savings",
        "goal",
        "investment",
        "finance",
        "budget",
        "interest",
        "future value",
      ],
      tag: "Finance",
      iconSvg:
        '<path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-1.8.5-1.5.5-3.2 0-4.2-.3-.5-1-1.5-1-2"/>',
    },
    {
      id: "tip-calculator",
      name: "Tip Calculator",
      category: "calc",
      categoryLabel: "Calculators",
      url: "/calculator/tip-calculator.html",
      description:
        "Split bills evenly and calculate tip percentages accurately among groups.",
      keywords: [
        "tip",
        "bill split",
        "gratuity",
        "restaurant",
        "dining",
        "check splitter",
      ],
      tag: "Dining",
      iconSvg:
        '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4ZM3 6h18M16 10a4 4 0 0 1-8 0"/>',
    },
    {
      id: "gpa-calculator",
      name: "GPA Calculator",
      category: "calc",
      categoryLabel: "Calculators",
      url: "/calculator/gpa-calculator.html",
      description:
        "Calculate cumulative grade point averages across credits and grading scales.",
      keywords: [
        "gpa",
        "grade point",
        "college",
        "semester",
        "high school",
        "grades",
        "academic",
      ],
      tag: "Academic",
      iconSvg:
        '<path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c3 3 9 3 12 0v-5"/>',
    },

    // --- IMAGE & PDF (6) ---
    {
      id: "image-compressor",
      name: "Image Compressor",
      category: "image",
      categoryLabel: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
      description:
        "Compress JPEG, PNG, and WebP images directly in your browser without quality loss.",
      keywords: [
        "compress",
        "image compressor",
        "shrink",
        "optimize",
        "reduce file size",
        "jpeg",
        "png",
        "webp",
      ],
      tag: "Optimization",
      iconSvg:
        '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21M4 21h16"/>',
    },
    {
      id: "image-resizer",
      name: "Image Resizer",
      category: "image",
      categoryLabel: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
      description:
        "Resize pictures by dimensions or aspect ratio with fast browser-based processing.",
      keywords: [
        "resize",
        "dimensions",
        "width",
        "height",
        "aspect ratio",
        "scale picture",
        "crop",
      ],
      tag: "Dimensions",
      iconSvg:
        '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M21 3h-6M15 9l6-6M9 21v-6M3 15l6 6"/>',
    },
    {
      id: "pdf-to-word",
      name: "PDF to Word",
      category: "image",
      categoryLabel: "Image & PDF",
      url: "/image&pdf/pdftowordconverter.html",
      description:
        "Convert portable document files into editable Word documents quickly.",
      keywords: [
        "pdf",
        "word",
        "doc",
        "docx",
        "convert pdf",
        "document conversion",
        "editable",
      ],
      tag: "Documents",
      iconSvg:
        '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2zM14 2v6h6M10 13v6M14 13v6M8 17h8"/>',
    },
    {
      id: "jpg-to-png",
      name: "JPG to PNG",
      category: "image",
      categoryLabel: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
      description:
        "Convert JPG images to transparent PNG format with high-fidelity output.",
      keywords: [
        "jpg",
        "png",
        "convert format",
        "transparency",
        "lossless",
        "image converter",
      ],
      tag: "Converter",
      iconSvg:
        '<path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3M12 8v8M8 12h8"/>',
    },
    {
      id: "color-picker",
      name: "Color Picker / HEX",
      category: "image",
      categoryLabel: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
      description:
        "Inspect and copy HEX, RGB, HSL values and inspect color palettes with ease.",
      keywords: [
        "color picker",
        "hex",
        "rgb",
        "hsl",
        "palette",
        "eyedropper",
        "color codes",
      ],
      tag: "Color Palette",
      iconSvg:
        '<path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11ZM5 2l5 5M2 5l5 5"/>',
    },
    {
      id: "qr-code-generator",
      name: "QR Code Generator",
      category: "image",
      categoryLabel: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
      description:
        "Generate custom QR codes for URLs, contact cards, text, and Wi-Fi credentials.",
      keywords: [
        "qr code",
        "generator",
        "barcode",
        "scan",
        "url qr",
        "wifi qr",
        "vcard",
      ],
      tag: "Scannable",
      iconSvg:
        '<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3M21 21v.01M12 7v3a2 2 0 0 1-2 2H7M12 12v3a2 2 0 0 0 2 2h3"/>',
    },

    // --- DEVELOPER TOOLS (8) ---
    {
      id: "json-formatter",
      name: "JSON Formatter",
      category: "dev",
      categoryLabel: "Developer",
      url: "/developertools/JSONFORMATTER.html",
      description:
        "Validate, format, indent, and beautify messy JSON data instantly.",
      keywords: [
        "json",
        "formatter",
        "beautify",
        "validate",
        "minify json",
        "syntax check",
        "indent",
      ],
      tag: "Validation",
      iconSvg:
        '<path d="M4 8a2 2 0 0 1 2-2h2M4 16a2 2 0 0 0 2 2h2M8 12H4M20 8a2 2 0 0 0-2-2h-2M20 16a2 2 0 0 1-2 2h-2M16 12h4M10 8h4M10 16h4"/>',
    },
    {
      id: "base64-encoder-decoder",
      name: "Base64 Encoder/Decoder",
      category: "dev",
      categoryLabel: "Developer",
      url: "/developertools/base64encoderdecoder.html",
      description:
        "Encode and decode Base64 strings, files, and binary representations securely.",
      keywords: [
        "base64",
        "encoder",
        "decoder",
        "binary",
        "ascii",
        "atob",
        "btoa",
        "hash",
      ],
      tag: "Encoding",
      iconSvg: '<path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"/>',
    },
    {
      id: "url-encoder-decoder",
      name: "URL Encoder/Decoder",
      category: "dev",
      categoryLabel: "Developer",
      url: "/developertools/urlencoderdecoder.html",
      description:
        "Safely encode and decode query parameters, URIs, and percent-encoded paths.",
      keywords: [
        "url",
        "uri",
        "encode",
        "decode",
        "percent encoding",
        "query params",
        "uri component",
      ],
      tag: "Web URLs",
      iconSvg:
        '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    },
    {
      id: "meta-tag-generator",
      name: "Meta Tag Generator",
      category: "dev",
      categoryLabel: "Developer",
      url: "/developertools/meta-tag-generator.html",
      description:
        "Create search-optimized HTML meta tags, OpenGraph tags, and Twitter cards.",
      keywords: [
        "meta tags",
        "seo",
        "opengraph",
        "twitter cards",
        "html head",
        "search engine",
        "preview cards",
      ],
      tag: "SEO & Social",
      iconSvg:
        '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01"/>',
    },
    {
      id: "regex-tester",
      name: "Regex Tester",
      category: "dev",
      categoryLabel: "Developer",
      url: "/developertools/regextester.html",
      description:
        "Test and debug regular expressions with live syntax highlighting and match groups.",
      keywords: [
        "regex",
        "regular expression",
        "pattern test",
        "matcher",
        "syntax highlight",
        "regex debug",
      ],
      tag: "Expressions",
      iconSvg: '<circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6z"/>',
    },
    {
      id: "markdown-to-html",
      name: "Markdown to HTML",
      category: "dev",
      categoryLabel: "Developer",
      url: "/developertools/markdownhtml.html",
      description:
        "Convert Markdown syntax into clean, production-ready HTML code instantly.",
      keywords: [
        "markdown",
        "html",
        "md converter",
        "preview",
        "headings",
        "lists",
        "code blocks",
      ],
      tag: "Syntax Parser",
      iconSvg:
        '<path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM7 15V9l3 3 3-3v6M18 12l-2-2v4M14 12h4"/>',
    },
    {
      id: "css-minifier",
      name: "CSS Minifier",
      category: "dev",
      categoryLabel: "Developer",
      url: "/developertools/cssminifier.html",
      description:
        "Strip whitespace, comments, and redundant declarations to compress stylesheets.",
      keywords: [
        "css minifier",
        "minify",
        "compress css",
        "clean stylesheets",
        "reduce size",
        "web performance",
      ],
      tag: "Stylesheets",
      iconSvg: '<path d="m4 6 8-4 8 4M4 18l8 4 8-4M4 12l8 4 8-4"/>',
    },
    {
      id: "unix-timestamp",
      name: "Unix Timestamp",
      category: "dev",
      categoryLabel: "Developer",
      url: "/developertools/unixtimestamp.html",
      description:
        "Convert epoch timestamps to human-readable dates and formats across timezones.",
      keywords: [
        "unix timestamp",
        "epoch",
        "seconds converter",
        "utc",
        "timezone",
        "posix time",
        "date parsing",
      ],
      tag: "Epoch Time",
      iconSvg:
        '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    },
  ];

  // -------------------------------------------------------------------------
  // 2. STATE MANAGEMENT & STORAGE
  // -------------------------------------------------------------------------
  const STORAGE_KEYS = {
    FAVORITES: "huzikit_favorites",
    RECENT: "huzikit_recent",
  };

  let activeCategory = "all";
  let searchQuery = "";
  let sortMode = "default";

  function getFavorites() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function toggleFavorite(toolId) {
    try {
      const favs = getFavorites();
      const index = favs.indexOf(toolId);
      if (index > -1) {
        favs.splice(index, 1);
      } else {
        favs.push(toolId);
      }
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favs));
      updateFavCountBadge();
      renderTools();
    } catch (e) {
      console.warn("Storage unavailable", e);
    }
  }

  function getRecentTools() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.RECENT);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function recordRecentVisit(toolId) {
    try {
      let recent = getRecentTools();
      recent = recent.filter((id) => id !== toolId);
      recent.unshift(toolId);
      if (recent.length > 8) recent = recent.slice(0, 8);
      localStorage.setItem(STORAGE_KEYS.RECENT, JSON.stringify(recent));
    } catch (e) {
      // silent fallback
    }
  }

  function updateFavCountBadge() {
    const favs = getFavorites();
    const badge = document.getElementById("fav-count-pill");
    if (badge) {
      badge.textContent = favs.length;
    }
  }

  // -------------------------------------------------------------------------
  // 3. CARD RENDERING ENGINE (Accessible, Semantic, Exact URLs)
  // -------------------------------------------------------------------------
  const categoryInfo = {
    text: {
      title: "Text Tools",
      description:
        "8 powerful utilities for writing, formatting, and manipulating text.",
      icon: '<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',
    },
    calc: {
      title: "Calculators",
      description:
        "8 accurate calculation tools for personal finance, wellness, and academics.",
      icon: '<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    },
    image: {
      title: "Image & PDF Tools",
      description:
        "6 fast client-side image and document processing utilities.",
      icon: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
    },
    dev: {
      title: "Developer Tools",
      description:
        "8 developer productivity utilities for formatting, encoding, and regex.",
      icon: '<path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"/>',
    },
  };

  function createToolCardElement(tool, isFav) {
    const card = document.createElement("div");
    card.className = "tool-card";
    card.setAttribute("data-tool-id", tool.id);
    card.setAttribute("data-category", tool.category);

    // SVG wrapper
    const iconSvgContent = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${tool.iconSvg}</svg>`;

    card.innerHTML = `
            <div class="tool-card-top">
                <div class="tool-icon-frame" aria-hidden="true">
                    ${iconSvgContent}
                </div>
                <div class="tool-card-meta">
                    <span class="tool-category-badge">${tool.categoryLabel}</span>
                    <button type="button" class="tool-fav-btn ${isFav ? "favorited" : ""}" 
                        aria-label="${isFav ? "Remove from favorites" : "Add to favorites"}" 
                        title="${isFav ? "Remove from favorites" : "Add to favorites"}">
                        <svg viewBox="0 0 24 24" fill="${isFav ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="tool-card-body">
                <a href="${tool.url}" class="tool-name-link">${tool.name}</a>
                <p class="tool-description">${tool.description}</p>
            </div>
            <div class="tool-card-bottom">
                <span class="tool-tag-pill">${tool.tag}</span>
                <span class="tool-open-text" aria-hidden="true">
                    Open Tool
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </span>
            </div>
        `;

    // Card navigation listener to record recent visit
    const link = card.querySelector(".tool-name-link");
    link.addEventListener("click", function () {
      recordRecentVisit(tool.id);
    });

    // Favorite button listener
    const favBtn = card.querySelector(".tool-fav-btn");
    favBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleFavorite(tool.id);
    });

    return card;
  }

  function renderTools() {
    const container = document.getElementById("tools-grid-container");
    const emptyState = document.getElementById("search-empty-state");
    const activeCountEl = document.getElementById("active-tool-count");
    const activeLabelEl = document.getElementById("filter-active-label");

    if (!container) return;

    const favorites = getFavorites();
    const recentIds = getRecentTools();
    const query = searchQuery.trim().toLowerCase();

    // Filter list
    let filtered = TOOLS_DATA.filter((tool) => {
      // Category match
      if (activeCategory === "favorites") {
        if (!favorites.includes(tool.id)) return false;
      } else if (activeCategory === "recent") {
        if (!recentIds.includes(tool.id)) return false;
      } else if (activeCategory !== "all" && tool.category !== activeCategory) {
        return false;
      }

      // Search query match (name, category, description, keywords)
      if (query.length > 0) {
        const nameMatch = tool.name.toLowerCase().includes(query);
        const descMatch = tool.description.toLowerCase().includes(query);
        const catMatch = tool.categoryLabel.toLowerCase().includes(query);
        const tagMatch = tool.tag.toLowerCase().includes(query);
        const kwMatch = tool.keywords.some((k) =>
          k.toLowerCase().includes(query),
        );
        return nameMatch || descMatch || catMatch || tagMatch || kwMatch;
      }

      return true;
    });

    // Sorting
    if (sortMode === "alpha") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortMode === "category") {
      filtered.sort((a, b) => a.category.localeCompare(b.category));
    }

    // Update counts
    if (activeCountEl) {
      activeCountEl.textContent = filtered.length;
    }

    if (activeLabelEl) {
      let labelText = "Showing All 30 Tools";
      if (activeCategory === "text") labelText = "Showing 8 Text Tools";
      else if (activeCategory === "calc") labelText = "Showing 8 Calculators";
      else if (activeCategory === "image")
        labelText = "Showing 6 Image & PDF Tools";
      else if (activeCategory === "dev")
        labelText = "Showing 8 Developer Tools";
      else if (activeCategory === "favorites")
        labelText = `Showing ${filtered.length} Saved Favorites`;
      else if (activeCategory === "recent")
        labelText = `Showing ${filtered.length} Recently Opened Tools`;

      if (query) {
        labelText += ` matching "${query}"`;
      }
      activeLabelEl.textContent = labelText;
    }

    container.innerHTML = "";

    if (filtered.length === 0) {
      if (emptyState) emptyState.style.display = "block";
      return;
    }

    if (emptyState) emptyState.style.display = "none";

    // When viewing "All" and no specific query or sort mode is active, organize into semantic category blocks
    if (
      activeCategory === "all" &&
      query.length === 0 &&
      sortMode === "default"
    ) {
      const categories = ["text", "calc", "image", "dev"];

      categories.forEach((catKey) => {
        const catTools = filtered.filter((t) => t.category === catKey);
        if (catTools.length === 0) return;

        const catMeta = categoryInfo[catKey];
        const block = document.createElement("div");
        block.className = "category-block";
        block.id = `category-${catKey}`;

        block.innerHTML = `
                    <div class="category-block-header">
                        <div class="category-title-group">
                            <div class="category-icon-box" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    ${catMeta.icon}
                                </svg>
                            </div>
                            <div>
                                <h3 class="category-heading">${catMeta.title}</h3>
                                <p class="category-description-text">${catMeta.description}</p>
                            </div>
                        </div>
                        <span class="category-count-badge">${catTools.length} Utilities</span>
                    </div>
                    <div class="tools-grid"></div>
                `;

        const grid = block.querySelector(".tools-grid");
        catTools.forEach((tool) => {
          const card = createToolCardElement(tool, favorites.includes(tool.id));
          grid.appendChild(card);
        });

        container.appendChild(block);
      });
    } else {
      // Flat grid when filtered by category or search query
      const grid = document.createElement("div");
      grid.className = "tools-grid";
      filtered.forEach((tool) => {
        const card = createToolCardElement(tool, favorites.includes(tool.id));
        grid.appendChild(card);
      });
      container.appendChild(grid);
    }
  }

  // -------------------------------------------------------------------------
  // 4. SEARCH & FILTER EVENT BINDINGS
  // -------------------------------------------------------------------------
  function setupControls() {
    const searchInput = document.getElementById("tool-search-input");
    const clearBtn = document.getElementById("search-clear-btn");
    const filterButtons = document.querySelectorAll(".filter-pill");
    const sortSelect = document.getElementById("tool-sort-select");
    const resetBtn = document.getElementById("empty-reset-btn");

    if (searchInput) {
      searchInput.addEventListener("input", function (e) {
        searchQuery = e.target.value;
        if (clearBtn) {
          clearBtn.style.display = searchQuery ? "flex" : "none";
        }
        renderTools();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        if (searchInput) {
          searchInput.value = "";
          searchInput.focus();
        }
        searchQuery = "";
        clearBtn.style.display = "none";
        renderTools();
      });
    }

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        filterButtons.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
        activeCategory = this.getAttribute("data-category");
        renderTools();
      });
    });

    if (sortSelect) {
      sortSelect.addEventListener("change", function () {
        sortMode = this.value;
        renderTools();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        if (searchInput) searchInput.value = "";
        searchQuery = "";
        if (clearBtn) clearBtn.style.display = "none";
        activeCategory = "all";
        filterButtons.forEach((b) => {
          b.classList.toggle(
            "active",
            b.getAttribute("data-category") === "all",
          );
        });
        renderTools();
      });
    }

    // Quick Category buttons from mobile menu
    const mobileCategoryButtons =
      document.querySelectorAll(".mobile-cat-filter");
    mobileCategoryButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const cat = this.getAttribute("data-category");
        activeCategory = cat;
        filterButtons.forEach((b) => {
          b.classList.toggle("active", b.getAttribute("data-category") === cat);
        });
        closeMobileDrawer();
        renderTools();
        const dirSection = document.getElementById("tools-directory");
        if (dirSection) {
          dirSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 5. SEARCH MODAL (Cmd+K / Ctrl+K)
  // -------------------------------------------------------------------------
  function setupSearchModal() {
    const modal = document.getElementById("search-modal");
    const modalInput = document.getElementById("modal-search-input");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalResults = document.getElementById("modal-results");
    const openTriggers = document.querySelectorAll(".trigger-search-modal");

    if (!modal || !modalInput || !modalResults) return;

    function openModal() {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      modalInput.value = "";
      renderModalResults("");
      setTimeout(() => modalInput.focus(), 50);
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    openTriggers.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openModal();
      });
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", closeModal);
    }

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (modal.classList.contains("open")) {
          closeModal();
        } else {
          openModal();
        }
      } else if (e.key === "Escape" && modal.classList.contains("open")) {
        closeModal();
      }
    });

    function renderModalResults(term) {
      const clean = term.trim().toLowerCase();
      modalResults.innerHTML = "";

      const matches = TOOLS_DATA.filter((t) => {
        if (!clean) return true;
        return (
          t.name.toLowerCase().includes(clean) ||
          t.description.toLowerCase().includes(clean) ||
          t.categoryLabel.toLowerCase().includes(clean) ||
          t.keywords.some((k) => k.toLowerCase().includes(clean))
        );
      }).slice(0, 8);

      if (matches.length === 0) {
        modalResults.innerHTML = `
                    <li style="padding: 20px; text-align: center; color: var(--ink-faint);">
                        No matching tools found for "${term}"
                    </li>
                `;
        return;
      }

      matches.forEach((tool, index) => {
        const li = document.createElement("li");
        li.className = "modal-result-item";
        if (index === 0) li.classList.add("selected");

        li.innerHTML = `
                    <a href="${tool.url}">
                        <div class="modal-item-info">
                            <div class="modal-item-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    ${tool.iconSvg}
                                </svg>
                            </div>
                            <div>
                                <div class="modal-item-name">${tool.name}</div>
                                <div class="modal-item-cat">${tool.categoryLabel} &bull; ${tool.tag}</div>
                            </div>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </a>
                `;

        li.querySelector("a").addEventListener("click", function () {
          recordRecentVisit(tool.id);
          closeModal();
        });

        modalResults.appendChild(li);
      });
    }

    modalInput.addEventListener("input", function (e) {
      renderModalResults(e.target.value);
    });

    // Arrow key navigation inside modal results
    modalInput.addEventListener("keydown", function (e) {
      const items = modalResults.querySelectorAll(".modal-result-item");
      if (items.length === 0) return;

      let currentIndex = Array.from(items).findIndex((it) =>
        it.classList.contains("selected"),
      );

      if (e.key === "ArrowDown") {
        e.preventDefault();
        items.forEach((it) => it.classList.remove("selected"));
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add("selected");
        items[currentIndex].scrollIntoView({ block: "nearest" });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        items.forEach((it) => it.classList.remove("selected"));
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        items[currentIndex].classList.add("selected");
        items[currentIndex].scrollIntoView({ block: "nearest" });
      } else if (e.key === "Enter") {
        e.preventDefault();
        const selected = modalResults.querySelector(
          ".modal-result-item.selected a",
        );
        if (selected) {
          selected.click();
        }
      }
    });
  }

  // -------------------------------------------------------------------------
  // 6. MOBILE NAVIGATION DRAWER
  // -------------------------------------------------------------------------
  function closeMobileDrawer() {
    const drawer = document.getElementById("mobile-drawer");
    const hamburger = document.getElementById("hamburger-btn");
    if (drawer && hamburger) {
      drawer.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  }

  function setupMobileNav() {
    const hamburger = document.getElementById("hamburger-btn");
    const drawer = document.getElementById("mobile-drawer");

    if (!hamburger || !drawer) return;

    hamburger.addEventListener("click", function () {
      const isOpen = drawer.classList.contains("open");
      if (isOpen) {
        closeMobileDrawer();
      } else {
        drawer.classList.add("open");
        hamburger.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
      }
    });

    // Close on escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.classList.contains("open")) {
        closeMobileDrawer();
      }
    });

    // Close when clicking nav links inside
    const drawerLinks = drawer.querySelectorAll("a");
    drawerLinks.forEach((link) => {
      link.addEventListener("click", closeMobileDrawer);
    });
  }

  // -------------------------------------------------------------------------
  // 7. LIGHTWEIGHT HERO 3D ECOSYSTEM VISUAL (Contained, Zero Overflow)
  // -------------------------------------------------------------------------
  function setupHeroVisual() {
    const stage = document.querySelector(".ecosystem-stage");
    const centerCard = document.querySelector(".ecosystem-center");
    const orbitRing = document.querySelector(".ecosystem-orbit-ring");

    if (!stage || !centerCard) return;

    // Subtle tilt on mouse move within stage container on desktop
    stage.addEventListener("mousemove", function (e) {
      if (window.innerWidth < 992) return;
      const rect = stage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = (-y / rect.height) * 14;
      const rotateY = (x / rect.width) * 14;

      centerCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      if (orbitRing) {
        orbitRing.style.transform = `rotateX(${rotateX * 0.5}deg) rotateY(${rotateY * 0.5}deg)`;
      }
    });

    stage.addEventListener("mouseleave", function () {
      centerCard.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      if (orbitRing) {
        orbitRing.style.transform = "rotateX(0deg) rotateY(0deg)";
      }
    });
  }

  // -------------------------------------------------------------------------
  // 8. HEADER SHADOW ON SCROLL
  // -------------------------------------------------------------------------
  function setupScrollHeader() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    window.addEventListener(
      "scroll",
      function () {
        if (window.scrollY > 20) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      },
      { passive: true },
    );
  }

  // -------------------------------------------------------------------------
  // 9. INITIALIZATION
  // -------------------------------------------------------------------------
  function init() {
    updateFavCountBadge();
    renderTools();
    setupControls();
    setupSearchModal();
    setupMobileNav();
    setupHeroVisual();
    setupScrollHeader();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
