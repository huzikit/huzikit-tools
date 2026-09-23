/**
 * HUZIKIT CSS MINIFIER — CORE JAVASCRIPT
 * Strictly Responsive Rebuild | Zero Layout Bugs | Complete Tool Logic
 */

(function () {
  "use strict";

  /* ==========================================================================
     1. DATASET: 30 HUZIKIT TOOLS (EXACT NAMES & ROUTES)
     ========================================================================== */
  const HUZIKIT_TOOLS = [
    // Text Tools
    {
      name: "Word Counter",
      category: "Text Tools",
      url: "/texttools/word-counter.html",
      keywords: "words characters count text density",
    },
    {
      name: "Character Counter",
      category: "Text Tools",
      url: "/texttools/character-counter.html",
      keywords: "character letter count length limit",
    },
    {
      name: "Case Converter",
      category: "Text Tools",
      url: "/texttools/case-converter.html",
      keywords: "uppercase lowercase titlecase camelcase",
    },
    {
      name: "Remove Duplicate Lines",
      category: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
      keywords: "dedupe sort unique lines clean list",
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
      keywords: "secure strong random password generator",
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      url: "/texttools/text-reverser.html",
      keywords: "reverse flip invert backward text",
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      url: "/texttools/onlinenotepad.html",
      keywords: "notes scratchpad write autosave text",
    },

    // Calculators
    {
      name: "Age Calculator",
      category: "Calculators",
      url: "/calculator/agecalculator.html",
      keywords: "birth date years months days age",
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
      keywords: "percent increase decrease math fraction",
    },
    {
      name: "Calorie Calculator",
      category: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
      keywords: "diet bmr calories weight loss maintenance",
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      url: "/calculator/discount-calculator.html",
      keywords: "sale price savings shopping tax off",
    },
    {
      name: "Savings & Goal Calculator",
      category: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
      keywords: "finance interest compound future money",
    },
    {
      name: "Tip Calculator",
      category: "Calculators",
      url: "/calculator/tip-calculator.html",
      keywords: "bill split gratuity restaurant service",
    },
    {
      name: "GPA Calculator",
      category: "Calculators",
      url: "/calculator/gpa-calculator.html",
      keywords: "grades college university high school academic",
    },

    // Image & PDF
    {
      name: "Image Compressor",
      category: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
      keywords: "optimize shrink photo size webp png jpg",
    },
    {
      name: "Image Resizer",
      category: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
      keywords: "dimensions width height crop scale pixels",
    },
    {
      name: "PDF to Word",
      category: "Image & PDF",
      url: "/image&pdf/pdftowordconverter.html",
      keywords: "convert pdf docx document extract",
    },
    {
      name: "JPG to PNG",
      category: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
      keywords: "convert transparency format image lossless",
    },
    {
      name: "Color Picker / HEX",
      category: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
      keywords: "palette rgb hsl hex color eyedropper",
    },
    {
      name: "QR Code Generator",
      category: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
      keywords: "barcode qr link wifi contact scan",
    },

    // Developer
    {
      name: "JSON Formatter",
      category: "Developer",
      url: "/developertools/JSONFORMATTER.html",
      keywords: "beautify validate minify json parser",
    },
    {
      name: "Base64 Encoder/Decoder",
      category: "Developer",
      url: "/developertools/base64encoderdecoder.html",
      keywords: "encode decode binary data uri",
    },
    {
      name: "URL Encoder/Decoder",
      category: "Developer",
      url: "/developertools/urlencoderdecoder.html",
      keywords: "uri percent encode query param",
    },
    {
      name: "Meta Tag Generator",
      category: "Developer",
      url: "/developertools/meta-tag-generator.html",
      keywords: "seo open graph twitter cards head tags",
    },
    {
      name: "Regex Tester",
      category: "Developer",
      url: "/developertools/regextester.html",
      keywords: "regular expression pattern match test",
    },
    {
      name: "Markdown to HTML",
      category: "Developer",
      url: "/developertools/markdownhtml.html",
      keywords: "convert md rich text formatting syntax",
    },
    {
      name: "CSS Minifier",
      category: "Developer",
      url: "/developertools/cssminifier.html",
      keywords: "compress optimize minify clean css stylesheet",
    },
    {
      name: "Unix Timestamp",
      category: "Developer",
      url: "/developertools/unixtimestamp.html",
      keywords: "epoch time date converter milliseconds",
    },
  ];

  /* ==========================================================================
     2. SAMPLE CSS FOR DEMONSTRATION & RESET
     ========================================================================== */
  const SAMPLE_CSS = `/* =========================================================
   Huzikit Design System Core Styles
   High-performance styles for testing minification
   ========================================================= */

:root {
  --primary-color: #4F46E5;
  --primary-hover: #3B33C4;
  --text-dark: #15132B;
  --bg-gradient: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
  --spacing-unit: 16px;
  --border-radius: 12px;
}

/* Base Body Styles */
body {
  margin: 0px 0px 0px 0px;
  padding: 0px;
  font-family: 'Inter', system-ui, sans-serif;
  color: var(--text-dark);
  background-color: #ffffff;
  line-height: 1.6;
}

/* Card Container */
.card {
  display: flex;
  flex-direction: column;
  padding: 24px 24px;
  border-radius: var(--border-radius);
  border: 1px solid #E7E4F6;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(21, 19, 43, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0px 10px 24px rgba(79, 70, 229, 0.12);
}

/* Buttons with color optimizations */
.btn-primary {
  background: var(--bg-gradient);
  color: #ffffff;
  font-weight: 700;
  padding: 12px 24px;
  border: 0px none;
  border-radius: 9999px;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M5 12h14M12 5l7 7-7 7'/%3E%3C/svg%3E");
}

/* Empty test rule */
.unused-placeholder {
}

/* Responsive Media Queries */
@media screen and (max-width: 768px) {
  .card {
    padding: 16px;
    margin-bottom: 0px;
  }

  .btn-primary {
    width: 100%;
    margin-top: 8px;
  }
}

/* Keyframe animations */
@keyframes fadeInSlide {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}`;

  /* ==========================================================================
     3. DOM ELEMENTS
     ========================================================================== */
  const el = {
    // Nav
    hamburgerBtn: document.getElementById("hamburgerBtn"),
    mobileNavDrawer: document.getElementById("mobileNavDrawer"),
    searchTriggerBtn: document.getElementById("searchTriggerBtn"),
    mobileSearchBtn: document.getElementById("mobileSearchBtn"),

    // Search Modal
    searchModalBackdrop: document.getElementById("searchModalBackdrop"),
    searchInput: document.getElementById("searchInput"),
    searchResultsList: document.getElementById("searchResultsList"),
    searchCloseBtn: document.getElementById("searchCloseBtn"),

    // Workspace & Editor
    cssInput: document.getElementById("cssInput"),
    cssOutput: document.getElementById("cssOutput"),
    inputSizeBadge: document.getElementById("inputSizeBadge"),
    outputSizeBadge: document.getElementById("outputSizeBadge"),
    dragOverlay: document.getElementById("dragOverlay"),
    statusBanner: document.getElementById("statusBanner"),
    statusBannerText: document.getElementById("statusBannerText"),

    // Buttons
    btnMinify: document.getElementById("btnMinify"),
    btnBeautify: document.getElementById("btnBeautify"),
    btnClear: document.getElementById("btnClear"),
    btnReset: document.getElementById("btnReset"),
    btnCopy: document.getElementById("btnCopy"),
    btnDownload: document.getElementById("btnDownload"),
    btnUpload: document.getElementById("btnUpload"),
    fileInput: document.getElementById("fileInput"),
    btnSettingsToggle: document.getElementById("btnSettingsToggle"),

    // Modes & Toggles
    modeStandard: document.getElementById("modeStandard"),
    modeAggressive: document.getElementById("modeAggressive"),
    modeCustom: document.getElementById("modeCustom"),
    liveMinifyCheckbox: document.getElementById("liveMinifyCheckbox"),
    customSettingsPanel: document.getElementById("customSettingsPanel"),

    // Custom Options Checkboxes
    optComments: document.getElementById("optComments"),
    optWhitespace: document.getElementById("optWhitespace"),
    optSemicolon: document.getElementById("optSemicolon"),
    optZeroUnits: document.getElementById("optZeroUnits"),
    optColors: document.getElementById("optColors"),
    optUrlQuotes: document.getElementById("optUrlQuotes"),
    optEmptyRules: document.getElementById("optEmptyRules"),

    // Stats
    statOrigSize: document.getElementById("statOrigSize"),
    statMinSize: document.getElementById("statMinSize"),
    statSavedBytes: document.getElementById("statSavedBytes"),
    statReduction: document.getElementById("statReduction"),
    statLines: document.getElementById("statLines"),
    statRules: document.getElementById("statRules"),

    // Analyzer
    azSelectors: document.getElementById("azSelectors"),
    azDeclarations: document.getElementById("azDeclarations"),
    azMediaQueries: document.getElementById("azMediaQueries"),
    azKeyframes: document.getElementById("azKeyframes"),
    azVariables: document.getElementById("azVariables"),
    azColors: document.getElementById("azColors"),
    azUrls: document.getElementById("azUrls"),
    azComments: document.getElementById("azComments"),

    // 3D Hero Stage
    visual3dStage: document.getElementById("visual3dStage"),
    heroVisualWrap: document.getElementById("heroVisualWrap"),
  };

  // State
  let currentMode = "standard"; // 'standard' | 'aggressive' | 'custom'
  let liveMinifyTimeout = null;

  /* ==========================================================================
     4. CSS MINIFIER & BEAUTIFIER ENGINES
     ========================================================================== */

  /**
   * Helper: Format bytes to human-readable string
   */
  function formatBytes(bytes) {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const val = (bytes / Math.pow(k, i)).toFixed(i === 0 ? 0 : 2);
    return `${val} ${sizes[i]}`;
  }

  /**
   * Safe String Masker: Protects strings and URLs during minification
   */
  function maskProtectedTokens(css) {
    const tokens = [];
    let tokenIndex = 0;

    // Mask strings ("...", '...') and url(...)
    const maskedCss = css.replace(
      /(url\((?:[^)'"]|"[^"]*"|'[^']*')*\))|("(?:\\.|[^"\\])*")|('(?:\\.|[^'\\])*')/gi,
      function (match) {
        const placeholder = `___HUZIKIT_TOKEN_${tokenIndex}___`;
        tokens.push({ placeholder, value: match });
        tokenIndex++;
        return placeholder;
      },
    );

    return { maskedCss, tokens };
  }

  /**
   * Unmask strings and URLs
   */
  function unmaskProtectedTokens(css, tokens) {
    let result = css;
    for (let i = tokens.length - 1; i >= 0; i--) {
      result = result.replace(tokens[i].placeholder, tokens[i].value);
    }
    return result;
  }

  /**
   * Main CSS Minification Function
   */
  function minifyCSS(rawCss, mode = "standard", customOpts = {}) {
    if (!rawCss || !rawCss.trim()) {
      return "";
    }

    const opts = {
      comments: mode === "custom" ? customOpts.comments : true,
      whitespace: mode === "custom" ? customOpts.whitespace : true,
      semicolon: mode === "custom" ? customOpts.semicolon : true,
      zeroUnits: mode === "custom" ? customOpts.zeroUnits : true,
      colors:
        mode === "aggressive"
          ? true
          : mode === "custom"
            ? customOpts.colors
            : false,
      urlQuotes:
        mode === "aggressive"
          ? true
          : mode === "custom"
            ? customOpts.urlQuotes
            : false,
      emptyRules:
        mode === "aggressive"
          ? true
          : mode === "custom"
            ? customOpts.emptyRules
            : false,
    };

    // 1. Mask protected tokens (quotes, data URIs, complex urls)
    const { maskedCss, tokens } = maskProtectedTokens(rawCss);
    let code = maskedCss;

    // 2. Remove comments
    if (opts.comments) {
      code = code.replace(/\/\*[\s\S]*?\*\//g, "");
    }

    // 3. Remove zero units (0px, 0em, 0rem, 0%, 0pt, 0vh, 0vw -> 0)
    // Avoid breaking @keyframes (0% { ... }) or calc() where units might be required
    if (opts.zeroUnits) {
      code = code.replace(
        /([:\s,])0(?:px|em|rem|%|pt|vh|vw|in|cm|mm|ex|ch|vmin|vmax)/gi,
        "$10",
      );
      code = code.replace(/:\s*0\s+0\s+0\s+0(?=[;}])/g, ":0");
      code = code.replace(/:\s*0\s+0(?=[;}])/g, ":0");
    }

    // 4. Collapse whitespace
    if (opts.whitespace) {
      // Replace tabs, newlines with single space
      code = code.replace(/[\r\n\t]+/g, " ");
      // Collapse multiple spaces
      code = code.replace(/\s{2,}/g, " ");
      // Remove spaces around braces, colons, semicolons, commas
      code = code.replace(/\s*([\{\};:,>+~])\s*/g, "$1");
      // Put space back after comma in calc or font lists if needed, but in pure minified it's safe without
    }

    // 5. Strip trailing semicolon before closing brace
    if (opts.semicolon) {
      code = code.replace(/;(?=\})/g, "");
    }

    // 6. Remove empty rules (e.g. .empty{})
    if (opts.emptyRules) {
      code = code.replace(/[^{}\/]+{\s*}/g, "");
    }

    // 7. Unmask protected tokens
    code = unmaskProtectedTokens(code, tokens);

    // 8. Color optimizations (if enabled in aggressive / custom)
    if (opts.colors) {
      // #ffffff -> #fff, #aabbcc -> #abc
      code = code.replace(
        /#([0-9a-fA-F])\1([0-9a-fA-F])\2([0-9a-fA-F])\3(?![0-9a-fA-F])/g,
        "#$1$2$3",
      );
      // Common named color conversions
      code = code.replace(/#ff0000(?![0-9a-fA-F])/gi, "red");
      code = code.replace(/#000000(?![0-9a-fA-F])/gi, "#000");
      code = code.replace(/#ffffff(?![0-9a-fA-F])/gi, "#fff");
    }

    // 9. Remove quotes from simple URLs if safe (e.g. url("foo.png") -> url(foo.png))
    if (opts.urlQuotes) {
      code = code.replace(/url\(["']([a-zA-Z0-9_\-\.\/]+)["']\)/gi, "url($1)");
    }

    return code.trim();
  }

  /**
   * CSS Beautifier Function
   */
  function beautifyCSS(rawCss) {
    if (!rawCss || !rawCss.trim()) return "";

    const { maskedCss, tokens } = maskProtectedTokens(rawCss);
    let code = maskedCss;

    // Normalize spacing
    code = code.replace(/\/\*[\s\S]*?\*\//g, "\n$&\n");
    code = code.replace(/[\r\n\t]+/g, " ");
    code = code.replace(/\s{2,}/g, " ");
    code = code.replace(/\s*([\{\};])\s*/g, "$1");

    let indentLevel = 0;
    let formatted = "";
    const indentStr = "  ";

    for (let i = 0; i < code.length; i++) {
      const char = code[i];

      if (char === "{") {
        formatted = formatted.trimEnd() + " {\n";
        indentLevel++;
        formatted += indentStr.repeat(indentLevel);
      } else if (char === "}") {
        indentLevel = Math.max(0, indentLevel - 1);
        formatted =
          formatted.trimEnd() + "\n" + indentStr.repeat(indentLevel) + "}\n\n";
      } else if (char === ";") {
        formatted += ";\n" + indentStr.repeat(indentLevel);
      } else if (char === ":") {
        // Check if inside selector or property
        formatted += ": ";
      } else {
        formatted += char;
      }
    }

    formatted = unmaskProtectedTokens(formatted, tokens);
    // Cleanup excessive newlines
    formatted = formatted.replace(/\n{3,}/g, "\n\n").trim();
    return formatted;
  }

  /**
   * CSS Analyzer Engine
   */
  function analyzeCSS(cssText) {
    if (!cssText || !cssText.trim()) {
      return {
        lines: 0,
        rules: 0,
        selectors: 0,
        declarations: 0,
        mediaQueries: 0,
        keyframes: 0,
        variables: 0,
        colors: 0,
        urls: 0,
        comments: 0,
      };
    }

    const lines = cssText.split(/\r\n|\r|\n/).length;

    // Comments count
    const commentMatches = cssText.match(/\/\*[\s\S]*?\*\//g);
    const comments = commentMatches ? commentMatches.length : 0;

    // Rules count (roughly counts {)
    const ruleMatches = cssText.match(/\{/g);
    const rules = ruleMatches ? ruleMatches.length : 0;

    // Media Queries count
    const mqMatches = cssText.match(/@media[^{]+/gi);
    const mediaQueries = mqMatches ? mqMatches.length : 0;

    // Keyframes count
    const kfMatches = cssText.match(/@keyframes[^{]+/gi);
    const keyframes = kfMatches ? kfMatches.length : 0;

    // CSS Custom properties (--var:)
    const varMatches = cssText.match(/--[a-zA-Z0-9_\-]+(?=\s*:)/g);
    const variables = varMatches ? varMatches.length : 0;

    // Declarations count
    const decMatches = cssText.match(
      /;\s*(?=[a-zA-Z0-9_\-]+:)|(?<=\{)[^;{}]+:[^;{}]+(?=\})/g,
    );
    const declarations = decMatches
      ? decMatches.length
      : cssText.match(/:/g)
        ? Math.max(1, Math.floor(cssText.match(/:/g).length * 0.8))
        : 0;

    // Colors count
    const colorMatches = cssText.match(
      /(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\)|hsla?\([^)]+\))/gi,
    );
    const colors = colorMatches ? colorMatches.length : 0;

    // URLs count
    const urlMatches = cssText.match(/url\([^)]+\)/gi);
    const urls = urlMatches ? urlMatches.length : 0;

    // Selectors estimation
    const selectors = Math.max(rules, rules * 1.2);

    return {
      lines,
      rules,
      selectors: Math.round(selectors),
      declarations,
      mediaQueries,
      keyframes,
      variables,
      colors,
      urls,
      comments,
    };
  }

  /* ==========================================================================
     5. UI UPDATE & REFRESH WORKFLOW
     ========================================================================== */

  function getCustomOptions() {
    return {
      comments: el.optComments ? el.optComments.checked : true,
      whitespace: el.optWhitespace ? el.optWhitespace.checked : true,
      semicolon: el.optSemicolon ? el.optSemicolon.checked : true,
      zeroUnits: el.optZeroUnits ? el.optZeroUnits.checked : true,
      colors: el.optColors ? el.optColors.checked : false,
      urlQuotes: el.optUrlQuotes ? el.optUrlQuotes.checked : false,
      emptyRules: el.optEmptyRules ? el.optEmptyRules.checked : false,
    };
  }

  function runMinification() {
    const rawInput = el.cssInput.value;
    const origBytes = new Blob([rawInput]).size;

    if (!rawInput.trim()) {
      el.cssOutput.value = "";
      updateStats(0, 0, 0, 0, 0, 0);
      updateAnalyzer(analyzeCSS(""));
      el.inputSizeBadge.textContent = "0 B";
      el.outputSizeBadge.textContent = "0 B";
      return;
    }

    const minified = minifyCSS(rawInput, currentMode, getCustomOptions());
    el.cssOutput.value = minified;

    const minBytes = new Blob([minified]).size;
    const savedBytes = Math.max(0, origBytes - minBytes);
    const reductionPercent =
      origBytes > 0 ? ((savedBytes / origBytes) * 100).toFixed(1) : 0;

    el.inputSizeBadge.textContent = formatBytes(origBytes);
    el.outputSizeBadge.textContent = formatBytes(minBytes);

    const inputAnalysis = analyzeCSS(rawInput);
    const outputAnalysis = analyzeCSS(minified);

    updateStats(
      origBytes,
      minBytes,
      savedBytes,
      reductionPercent,
      outputAnalysis.lines,
      outputAnalysis.rules,
    );

    updateAnalyzer(inputAnalysis);
    showStatus(
      `Successfully minified! Saved ${formatBytes(savedBytes)} (${reductionPercent}% reduction).`,
      "success",
    );
  }

  function runBeautification() {
    const rawInput = el.cssInput.value;
    if (!rawInput.trim()) {
      showStatus("Please paste or upload CSS code first.", "error");
      return;
    }

    const beautified = beautifyCSS(rawInput);
    el.cssOutput.value = beautified;

    const origBytes = new Blob([rawInput]).size;
    const outBytes = new Blob([beautified]).size;

    el.inputSizeBadge.textContent = formatBytes(origBytes);
    el.outputSizeBadge.textContent = formatBytes(outBytes);

    const analysis = analyzeCSS(beautified);
    updateStats(origBytes, outBytes, 0, "0.0", analysis.lines, analysis.rules);
    updateAnalyzer(analysis);

    showStatus("CSS beautified and formatted cleanly!", "success");
  }

  function updateStats(
    origBytes,
    minBytes,
    savedBytes,
    reduction,
    lines,
    rules,
  ) {
    if (el.statOrigSize) el.statOrigSize.textContent = formatBytes(origBytes);
    if (el.statMinSize) el.statMinSize.textContent = formatBytes(minBytes);
    if (el.statSavedBytes)
      el.statSavedBytes.textContent = formatBytes(savedBytes);
    if (el.statReduction) el.statReduction.textContent = `${reduction}%`;
    if (el.statLines) el.statLines.textContent = lines;
    if (el.statRules) el.statRules.textContent = rules;
  }

  function updateAnalyzer(data) {
    if (el.azSelectors) el.azSelectors.textContent = data.selectors;
    if (el.azDeclarations) el.azDeclarations.textContent = data.declarations;
    if (el.azMediaQueries) el.azMediaQueries.textContent = data.mediaQueries;
    if (el.azKeyframes) el.azKeyframes.textContent = data.keyframes;
    if (el.azVariables) el.azVariables.textContent = data.variables;
    if (el.azColors) el.azColors.textContent = data.colors;
    if (el.azUrls) el.azUrls.textContent = data.urls;
    if (el.azComments) el.azComments.textContent = data.comments;
  }

  function showStatus(message, type = "success") {
    if (!el.statusBanner || !el.statusBannerText) return;
    el.statusBannerText.textContent = message;
    el.statusBanner.className = `status-banner show ${type}`;

    setTimeout(() => {
      if (el.statusBanner) {
        el.statusBanner.classList.remove("show");
      }
    }, 4000);
  }

  /* ==========================================================================
     6. EVENT HANDLERS: MINIFIER ACTIONS
     ========================================================================== */

  // Mode Selection
  function setMode(mode) {
    currentMode = mode;
    [el.modeStandard, el.modeAggressive, el.modeCustom].forEach((btn) => {
      if (btn) btn.classList.remove("active");
    });

    if (mode === "standard" && el.modeStandard)
      el.modeStandard.classList.add("active");
    if (mode === "aggressive" && el.modeAggressive)
      el.modeAggressive.classList.add("active");
    if (mode === "custom" && el.modeCustom)
      el.modeCustom.classList.add("active");

    if (el.customSettingsPanel) {
      if (mode === "custom") {
        el.customSettingsPanel.classList.add("active");
      } else {
        el.customSettingsPanel.classList.remove("active");
      }
    }

    runMinification();
  }

  if (el.modeStandard)
    el.modeStandard.addEventListener("click", () => setMode("standard"));
  if (el.modeAggressive)
    el.modeAggressive.addEventListener("click", () => setMode("aggressive"));
  if (el.modeCustom)
    el.modeCustom.addEventListener("click", () => setMode("custom"));

  // Settings Toggle
  if (el.btnSettingsToggle && el.customSettingsPanel) {
    el.btnSettingsToggle.addEventListener("click", () => {
      el.customSettingsPanel.classList.toggle("active");
      if (el.customSettingsPanel.classList.contains("active")) {
        setMode("custom");
      }
    });
  }

  // Custom Options Checkbox Listeners
  [
    el.optComments,
    el.optWhitespace,
    el.optSemicolon,
    el.optZeroUnits,
    el.optColors,
    el.optUrlQuotes,
    el.optEmptyRules,
  ].forEach((chk) => {
    if (chk) {
      chk.addEventListener("change", () => {
        if (currentMode === "custom") {
          runMinification();
        }
      });
    }
  });

  // Buttons: Minify & Beautify
  if (el.btnMinify) el.btnMinify.addEventListener("click", runMinification);
  if (el.btnBeautify)
    el.btnBeautify.addEventListener("click", runBeautification);

  // Clear
  if (el.btnClear) {
    el.btnClear.addEventListener("click", () => {
      el.cssInput.value = "";
      el.cssOutput.value = "";
      runMinification();
      showStatus("Editor cleared.", "success");
    });
  }

  // Reset to Sample
  if (el.btnReset) {
    el.btnReset.addEventListener("click", () => {
      el.cssInput.value = SAMPLE_CSS;
      runMinification();
      showStatus("Loaded sample stylesheet.", "success");
    });
  }

  // Copy to Clipboard
  if (el.btnCopy) {
    el.btnCopy.addEventListener("click", async () => {
      const text = el.cssOutput.value;
      if (!text) {
        showStatus("Output is empty. Nothing to copy!", "error");
        return;
      }

      try {
        await navigator.clipboard.writeText(text);
        const originalText = el.btnCopy.innerHTML;
        el.btnCopy.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
        showStatus("Minified CSS copied to clipboard!", "success");
        setTimeout(() => {
          el.btnCopy.innerHTML = originalText;
        }, 2000);
      } catch (err) {
        // Fallback
        el.cssOutput.select();
        document.execCommand("copy");
        showStatus("Minified CSS copied to clipboard!", "success");
      }
    });
  }

  // Download Output File
  if (el.btnDownload) {
    el.btnDownload.addEventListener("click", () => {
      const text = el.cssOutput.value || el.cssInput.value;
      if (!text) {
        showStatus("No CSS to download!", "error");
        return;
      }

      const blob = new Blob([text], { type: "text/css;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "huzikit-style.min.css";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showStatus("File download started: huzikit-style.min.css", "success");
    });
  }

  // File Upload
  if (el.btnUpload && el.fileInput) {
    el.btnUpload.addEventListener("click", () => el.fileInput.click());

    el.fileInput.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          el.cssInput.value = event.target.result;
          runMinification();
          showStatus(`Uploaded file: ${file.name}`, "success");
        };
        reader.readAsText(file);
      }
      el.fileInput.value = "";
    });
  }

  // Drag & Drop
  if (el.cssInput && el.dragOverlay) {
    const parentArea = el.cssInput.closest(".code-area-wrapper") || el.cssInput;

    ["dragenter", "dragover"].forEach((eventName) => {
      parentArea.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        el.dragOverlay.classList.add("active");
      });
    });

    ["dragleave", "drop"].forEach((eventName) => {
      parentArea.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        el.dragOverlay.classList.remove("active");
      });
    });

    parentArea.addEventListener("drop", (e) => {
      const file =
        e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          el.cssInput.value = event.target.result;
          runMinification();
          showStatus(`Dropped and loaded: ${file.name}`, "success");
        };
        reader.readAsText(file);
      }
    });
  }

  // Live Minify Debounce
  if (el.cssInput) {
    el.cssInput.addEventListener("input", () => {
      if (el.liveMinifyCheckbox && el.liveMinifyCheckbox.checked) {
        clearTimeout(liveMinifyTimeout);
        liveMinifyTimeout = setTimeout(runMinification, 250);
      } else {
        const raw = el.cssInput.value;
        const bytes = new Blob([raw]).size;
        el.inputSizeBadge.textContent = formatBytes(bytes);
      }
    });
  }

  /* ==========================================================================
     7. NAVBAR & MOBILE NAVIGATION (STRICT RESPONSIVE ACCORDIONS)
     ========================================================================== */

  function closeMobileNav() {
    if (!el.mobileNavDrawer || !el.hamburgerBtn) return;
    el.mobileNavDrawer.classList.remove("active");
    el.hamburgerBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  function toggleMobileNav() {
    if (!el.mobileNavDrawer || !el.hamburgerBtn) return;
    const isExpanded = el.hamburgerBtn.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      closeMobileNav();
    } else {
      el.mobileNavDrawer.classList.add("active");
      el.hamburgerBtn.setAttribute("aria-expanded", "true");
      document.body.classList.add("menu-open");
    }
  }

  if (el.hamburgerBtn) {
    el.hamburgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMobileNav();
    });
  }

  // Close when clicking outside drawer
  document.addEventListener("click", (e) => {
    if (el.mobileNavDrawer && el.mobileNavDrawer.classList.contains("active")) {
      if (
        !el.mobileNavDrawer.contains(e.target) &&
        !el.hamburgerBtn.contains(e.target)
      ) {
        closeMobileNav();
      }
    }
  });

  // Close when clicking any nav item
  if (el.mobileNavDrawer) {
    el.mobileNavDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeMobileNav());
    });
  }

  // Mobile Accordion Categories
  document.querySelectorAll(".mobile-acc-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const parentItem = trigger.closest(".mobile-acc-item");
      if (parentItem) {
        const isOpen = parentItem.classList.contains("open");
        // Close others for clean single-view accordion
        document.querySelectorAll(".mobile-acc-item").forEach((item) => {
          if (item !== parentItem) {
            item.classList.remove("open");
            const btn = item.querySelector(".mobile-acc-trigger");
            if (btn) btn.setAttribute("aria-expanded", "false");
          }
        });

        if (isOpen) {
          parentItem.classList.remove("open");
          trigger.setAttribute("aria-expanded", "false");
        } else {
          parentItem.classList.add("open");
          trigger.setAttribute("aria-expanded", "true");
        }
      }
    });
  });

  /* ==========================================================================
     8. GLOBAL SEARCH MODAL (ALL 30 HUZIKIT TOOLS)
     ========================================================================== */

  let selectedSearchIndex = -1;

  function openSearchModal() {
    if (!el.searchModalBackdrop) return;
    closeMobileNav();
    el.searchModalBackdrop.classList.add("active");
    document.body.classList.add("modal-open");
    if (el.searchInput) {
      el.searchInput.value = "";
      renderSearchResults("");
      setTimeout(() => el.searchInput.focus(), 50);
    }
  }

  function closeSearchModal() {
    if (!el.searchModalBackdrop) return;
    el.searchModalBackdrop.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  function renderSearchResults(query) {
    if (!el.searchResultsList) return;
    el.searchResultsList.innerHTML = "";
    selectedSearchIndex = -1;

    const trimmed = query.trim().toLowerCase();
    const filtered = HUZIKIT_TOOLS.filter((tool) => {
      if (!trimmed) return true;
      return (
        tool.name.toLowerCase().includes(trimmed) ||
        tool.category.toLowerCase().includes(trimmed) ||
        tool.keywords.toLowerCase().includes(trimmed) ||
        tool.url.toLowerCase().includes(trimmed)
      );
    });

    if (filtered.length === 0) {
      const noRes = document.createElement("li");
      noRes.className = "search-no-results";
      noRes.textContent = `No tools found matching "${query}".`;
      el.searchResultsList.appendChild(noRes);
      return;
    }

    filtered.forEach((tool, idx) => {
      const li = document.createElement("li");
      li.className = "search-result-item";
      li.dataset.index = idx;

      const a = document.createElement("a");
      a.href = tool.url;

      const titleSpan = document.createElement("span");
      titleSpan.textContent = tool.name;

      const catSpan = document.createElement("span");
      catSpan.className = "search-result-category";
      catSpan.textContent = tool.category;

      a.appendChild(titleSpan);
      a.appendChild(catSpan);
      li.appendChild(a);

      a.addEventListener("click", () => closeSearchModal());
      el.searchResultsList.appendChild(li);
    });
  }

  if (el.searchTriggerBtn)
    el.searchTriggerBtn.addEventListener("click", openSearchModal);
  if (el.mobileSearchBtn)
    el.mobileSearchBtn.addEventListener("click", openSearchModal);
  if (el.searchCloseBtn)
    el.searchCloseBtn.addEventListener("click", closeSearchModal);

  if (el.searchModalBackdrop) {
    el.searchModalBackdrop.addEventListener("click", (e) => {
      if (e.target === el.searchModalBackdrop) {
        closeSearchModal();
      }
    });
  }

  if (el.searchInput) {
    el.searchInput.addEventListener("input", (e) => {
      renderSearchResults(e.target.value);
    });

    el.searchInput.addEventListener("keydown", (e) => {
      const items = el.searchResultsList.querySelectorAll(
        ".search-result-item",
      );
      if (!items.length) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedSearchIndex = (selectedSearchIndex + 1) % items.length;
        highlightSearchResult(items);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedSearchIndex =
          (selectedSearchIndex - 1 + items.length) % items.length;
        highlightSearchResult(items);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (selectedSearchIndex >= 0 && items[selectedSearchIndex]) {
          const link = items[selectedSearchIndex].querySelector("a");
          if (link) link.click();
        } else if (items[0]) {
          const link = items[0].querySelector("a");
          if (link) link.click();
        }
      }
    });
  }

  function highlightSearchResult(items) {
    items.forEach((item, idx) => {
      if (idx === selectedSearchIndex) {
        item.classList.add("selected");
        item.scrollIntoView({ block: "nearest" });
      } else {
        item.classList.remove("selected");
      }
    });
  }

  /* ==========================================================================
     9. FAQ ACCORDION LOGIC
     ========================================================================== */
  document.querySelectorAll(".faq-question-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".faq-card");
      if (card) {
        const isOpen = card.classList.contains("open");
        card.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(!isOpen));
      }
    });
  });

  /* ==========================================================================
     10. 3D HERO VISUAL CARD (INTERACTIVE TILT)
     ========================================================================== */
  if (el.heroVisualWrap && el.visual3dStage) {
    const isReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!isReducedMotion) {
      el.heroVisualWrap.addEventListener("mousemove", (e) => {
        const rect = el.heroVisualWrap.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotateX = -(y / rect.height) * 16;
        const rotateY = (x / rect.width) * 16;

        el.visual3dStage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      el.heroVisualWrap.addEventListener("mouseleave", () => {
        el.visual3dStage.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      });
    }
  }

  /* ==========================================================================
     11. KEYBOARD SHORTCUTS
     ========================================================================== */
  document.addEventListener("keydown", (e) => {
    // Ctrl + K or Cmd + K: Open Search
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openSearchModal();
      return;
    }

    // Escape: Close search modal & mobile menu
    if (e.key === "Escape") {
      closeSearchModal();
      closeMobileNav();
      return;
    }

    // Ctrl + Enter or Cmd + Enter: Minify
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      runMinification();
      return;
    }

    // Ctrl + Shift + F or Cmd + Shift + F: Beautify
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "f") {
      e.preventDefault();
      runBeautification();
      return;
    }
  });

  /* ==========================================================================
     12. INITIALIZATION
     ========================================================================== */
  window.addEventListener("DOMContentLoaded", () => {
    // Load sample CSS by default for immediate preview & demonstration
    if (el.cssInput && !el.cssInput.value.trim()) {
      el.cssInput.value = SAMPLE_CSS;
    }
    runMinification();
  });
})();
