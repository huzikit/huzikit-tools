/**
 * HUZIKIT — PREMIUM JSON FORMATTER & DEVELOPER UTILITY
 * Production-ready Vanilla JavaScript Implementation
 * 100% Client-side, Secure, Zero Dependencies
 */

(function () {
  "use strict";

  // ==========================================================================
  // 1. GLOBAL STATE MANAGEMENT
  // ==========================================================================
  const state = {
    rawJson: "",
    parsedData: null,
    formattedJson: "",
    indentation: "2", // '2', '4', 'tab'
    mode: "format", // 'format', 'minify', 'validate'
    formatOnPaste: false,
    editorTheme: "light", // 'light' or 'dark'
    history: [],
    historyIndex: -1,
    maxHistory: 30,
    searchQuery: "",
    searchResults: [],
    currentSearchIndex: -1,
    selectedPath: "$",
    activeTab: "code", // 'code', 'tree', 'diff', 'stats', 'converters'
  };

  // ==========================================================================
  // 2. HUZIKIT 30-TOOL GLOBAL SEARCH DATASET
  // ==========================================================================
  const HUZIKIT_TOOLS = [
    // Text Tools (8)
    {
      name: "Word Counter",
      category: "Text Tools",
      url: "/texttools/word-counter.html",
      keywords: "words characters count reading time text",
    },
    {
      name: "Character Counter",
      category: "Text Tools",
      url: "/texttools/character-counter.html",
      keywords: "characters letters length twitter count",
    },
    {
      name: "Case Converter",
      category: "Text Tools",
      url: "/texttools/case-converter.html",
      keywords: "uppercase lowercase titlecase camelcase kebab",
    },
    {
      name: "Remove Duplicate Lines",
      category: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
      keywords: "dedupe unique lines clean list text",
    },
    {
      name: "Lorem Ipsum Generator",
      category: "Text Tools",
      url: "/texttools/loremipsumgenerator.html",
      keywords: "dummy text placeholder paragraphs latin",
    },
    {
      name: "Password Generator",
      category: "Text Tools",
      url: "/texttools/passwordgenerator.html",
      keywords: "secure random password generator strong",
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      url: "/texttools/text-reverser.html",
      keywords: "reverse flip backwards string text",
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      url: "/texttools/onlinenotepad.html",
      keywords: "notes scratchpad autosave write editor text",
    },

    // Calculators (8)
    {
      name: "Age Calculator",
      category: "Calculators",
      url: "/calculator/agecalculator.html",
      keywords: "birthday age years months days calculate",
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
      keywords: "percent fraction increase decrease math",
    },
    {
      name: "Calorie Calculator",
      category: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
      keywords: "tdee bmr calories nutrition diet",
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      url: "/calculator/discount-calculator.html",
      keywords: "sale price discount saving coupon shopping",
    },
    {
      name: "Saving & Goal Calculator",
      category: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
      keywords: "savings compound interest money investment",
    },
    {
      name: "Tip Calculator",
      category: "Calculators",
      url: "/calculator/tip-calculator.html",
      keywords: "restaurant bill split tip percentage",
    },
    {
      name: "GPA Calculator",
      category: "Calculators",
      url: "/calculator/gpa-calculator.html",
      keywords: "grade point average college school grades",
    },

    // Image & PDF (6)
    {
      name: "Image Compressor",
      category: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
      keywords: "compress reduce kb size jpg png webp",
    },
    {
      name: "Image Resizer",
      category: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
      keywords: "resize scale dimensions width height photo",
    },
    {
      name: "PDF to Word Converter",
      category: "Image & PDF",
      url: "/image&pdf/pdftowordconverter.html",
      keywords: "pdf doc docx convert document word",
    },
    {
      name: "JPG to PNG Converter",
      category: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
      keywords: "convert format jpeg transparent png image",
    },
    {
      name: "Color Picker",
      category: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
      keywords: "hex rgb hsl color palette eyedropper",
    },
    {
      name: "QR Code Generator",
      category: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
      keywords: "qr barcode scanner link wifi code generator",
    },

    // Developer Tools (8)
    {
      name: "JSON Formatter",
      category: "Developer",
      url: "/developertools/JSONFORMATTER.html",
      keywords: "json format validator beautify minify tree diff escape",
    },
    {
      name: "Base64 Encoder/Decoder",
      category: "Developer",
      url: "/developertools/base64encoderdecoder.html",
      keywords: "base64 encode decode binary string",
    },
    {
      name: "URL Encoder/Decoder",
      category: "Developer",
      url: "/developertools/urlencoderdecoder.html",
      keywords: "url uri percent encoding decode query",
    },
    {
      name: "Meta Tag Generator",
      category: "Developer",
      url: "/developertools/meta-tag-generator.html",
      keywords: "seo meta tags opengraph twitter head html",
    },
    {
      name: "Regex Tester",
      category: "Developer",
      url: "/developertools/regextester.html",
      keywords: "regular expression regex match test pattern",
    },
    {
      name: "Markdown to HTML",
      category: "Developer",
      url: "/developertools/markdownhtml.html",
      keywords: "markdown md html convert preview parser",
    },
    {
      name: "CSS Minifier",
      category: "Developer",
      url: "/developertools/cssminifier.html",
      keywords: "css minify compress stylesheet code speed",
    },
    {
      name: "Unix Timestamp",
      category: "Developer",
      url: "/developertools/unixtimestamp.html",
      keywords: "epoch unix time timestamp date convert",
    },
  ];

  // ==========================================================================
  // 3. SAMPLE JSON LIBRARY (GENUINE & FULLY VALID)
  // ==========================================================================
  const SAMPLE_LIBRARY = {
    basic: {
      tool: "Huzikit JSON Formatter",
      status: "active",
      version: 2.5,
      free: true,
      tags: ["json", "formatter", "developer", "privacy"],
    },
    nested: {
      service: "Huzikit Cloud Engine",
      runtime: {
        node: "20.x",
        region: "us-east-1",
        cluster: {
          nodes: 12,
          healthy: true,
          latencyMs: 14.8,
        },
      },
      features: {
        inBrowserProcessing: true,
        zeroDataTracking: true,
        diffSupport: true,
      },
    },
    userProfile: {
      id: "usr_948271",
      username: "huzaifa_dev",
      personal: {
        fullName: "Huzaifa Ahmad",
        email: "huzihack97@gmail.com",
        age: 24,
        verified: true,
      },
      roles: ["architect", "developer", "designer"],
      preferences: {
        theme: "purple-dark",
        notifications: {
          email: true,
          desktop: false,
        },
      },
    },
    apiResponse: {
      status: 200,
      message: "Resource fetched successfully",
      timestamp: "2026-09-20T08:44:58Z",
      pagination: {
        page: 1,
        limit: 10,
        totalItems: 42,
        totalPages: 5,
      },
      data: [
        { id: 101, title: "Modern API Architecture", ready: true },
        { id: 102, title: "High-Performance JSON Handling", ready: true },
        { id: 103, title: "Zero-Latency Client Utilities", ready: false },
      ],
    },
    products: [
      {
        sku: "HZK-001",
        name: "Huzikit Developer Suite",
        price: 0.0,
        inStock: true,
        rating: 4.9,
      },
      {
        sku: "HZK-002",
        name: "High Speed JSON Formatter",
        price: 0.0,
        inStock: true,
        rating: 5.0,
      },
      {
        sku: "HZK-003",
        name: "Browser Security Sandbox",
        price: 0.0,
        inStock: true,
        rating: 4.8,
      },
    ],
    devConfig: {
      $schema: "https://huzikit.com/schemas/tool-config.json",
      compilerOptions: {
        target: "ES2024",
        module: "NodeNext",
        strict: true,
        esModuleInterop: true,
        skipLibCheck: true,
        forceConsistentCasingInFileNames: true,
      },
      include: ["src/**/*", "tests/**/*"],
      exclude: ["node_modules", "dist"],
    },
  };

  // ==========================================================================
  // 4. DOM ELEMENT CACHE
  // ==========================================================================
  const dom = {
    // Inputs & Editor
    inputJson: document.getElementById("hz-input-json"),
    inputLineNumbers: document.getElementById("hz-input-lines"),
    outputLineNumbers: document.getElementById("hz-output-lines"),
    outputCode: document.getElementById("hz-output-code"),
    toolCard: document.getElementById("hz-tool-card"),
    dropOverlay: document.getElementById("hz-dropzone-overlay"),
    fileInput: document.getElementById("hz-file-input"),

    // Buttons & Controls
    btnFormat: document.getElementById("hz-btn-format"),
    btnValidate: document.getElementById("hz-btn-validate"),
    btnMinify: document.getElementById("hz-btn-minify"),
    btnClear: document.getElementById("hz-btn-clear"),
    btnCopy: document.getElementById("hz-btn-copy"),
    btnDownload: document.getElementById("hz-btn-download"),
    btnUndo: document.getElementById("hz-btn-undo"),
    btnRedo: document.getElementById("hz-btn-redo"),
    btnFocus: document.getElementById("hz-btn-focus"),
    btnTheme: document.getElementById("hz-btn-theme"),
    selectSample: document.getElementById("hz-sample-select"),
    selectIndent: document.getElementById("hz-indent-select"),
    selectSort: document.getElementById("hz-sort-select"),
    selectRemoveEmpty: document.getElementById("hz-remove-empty-select"),
    chkAutoFormat: document.getElementById("hz-chk-auto-format"),

    // Banners
    bannerValid: document.getElementById("hz-banner-valid"),
    bannerInvalid: document.getElementById("hz-banner-invalid"),
    bannerWarn: document.getElementById("hz-banner-warn"),
    invalidMessage: document.getElementById("hz-invalid-message"),
    warnMessage: document.getElementById("hz-warn-message"),

    // Status Area
    statusIndicator: document.getElementById("hz-status-indicator"),
    statusText: document.getElementById("hz-status-text"),
    statusSize: document.getElementById("hz-status-size"),
    statusLineCol: document.getElementById("hz-status-linecol"),

    // Tabs & Right Pane
    tabButtons: document.querySelectorAll(".hz-tab-btn"),
    tabContents: document.querySelectorAll(".hz-tab-content"),

    // Tree View
    treeContainer: document.getElementById("hz-tree-container"),
    treeSearchInput: document.getElementById("hz-tree-search-input"),
    treeSearchCount: document.getElementById("hz-tree-search-count"),
    btnTreeExpandAll: document.getElementById("hz-btn-tree-expand"),
    btnTreeCollapseAll: document.getElementById("hz-btn-tree-collapse"),
    pathDisplay: document.getElementById("hz-path-display"),
    btnCopyPath: document.getElementById("hz-btn-copy-path"),

    // Diff / Compare
    diffInputA: document.getElementById("hz-diff-input-a"),
    diffInputB: document.getElementById("hz-diff-input-b"),
    btnRunDiff: document.getElementById("hz-btn-run-diff"),
    diffResults: document.getElementById("hz-diff-results"),
    diffList: document.getElementById("hz-diff-list"),
    diffSummary: document.getElementById("hz-diff-summary"),

    // Stats
    statObjects: document.getElementById("hz-stat-objects"),
    statArrays: document.getElementById("hz-stat-arrays"),
    statKeys: document.getElementById("hz-stat-keys"),
    statDepth: document.getElementById("hz-stat-depth"),
    statStrings: document.getElementById("hz-stat-strings"),
    statNumbers: document.getElementById("hz-stat-numbers"),
    statBooleans: document.getElementById("hz-stat-booleans"),
    statNulls: document.getElementById("hz-stat-nulls"),
    sizeInput: document.getElementById("hz-size-input"),
    sizeFormatted: document.getElementById("hz-size-formatted"),
    sizeMinified: document.getElementById("hz-size-minified"),
    sizeSavings: document.getElementById("hz-size-savings"),

    // Converters
    btnJsonToCsv: document.getElementById("hz-btn-json-csv"),
    csvOutput: document.getElementById("hz-csv-output"),
    btnDownloadCsv: document.getElementById("hz-btn-download-csv"),
    csvInput: document.getElementById("hz-csv-input"),
    btnCsvToJson: document.getElementById("hz-btn-csv-json"),
    strEscapeInput: document.getElementById("hz-str-escape-input"),
    btnEscapeStr: document.getElementById("hz-btn-escape-str"),
    btnUnescapeStr: document.getElementById("hz-btn-unescape-str"),

    // Global Nav & Search
    hamburgerBtn: document.getElementById("hz-hamburger-btn"),
    mobileMenu: document.getElementById("hz-mobile-menu"),
    searchModal: document.getElementById("hz-search-modal"),
    searchTriggers: document.querySelectorAll(
      ".hz-search-trigger, .hz-mobile-search-btn",
    ),
    searchCloseBtn: document.getElementById("hz-search-close-btn"),
    searchInput: document.getElementById("hz-search-input"),
    searchResultsList: document.getElementById("hz-search-results-list"),
  };

  // ==========================================================================
  // 5. HELPER UTILITIES (BYTE CALCULATION, SAFE DOM, ERROR EXTRACTION)
  // ==========================================================================

  function formatBytes(bytes) {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  function getByteSize(str) {
    if (!str) return 0;
    return new TextEncoder().encode(str).length;
  }

  function sanitizeFilename(name) {
    return name.replace(/[^a-zA-Z0-9_\-\.]/g, "_");
  }

  function getIndentation() {
    if (state.indentation === "4") return 4;
    if (state.indentation === "tab") return "\t";
    return 2;
  }

  // Real Duplicate Key Detection before native JSON.parse collapses them
  function detectDuplicateKeys(rawString) {
    if (!rawString || rawString.trim() === "") return null;
    const duplicates = [];
    const stack = [new Set()];
    let inString = false;
    let escaped = false;
    let currentToken = "";
    let isKey = false;

    for (let i = 0; i < rawString.length; i++) {
      const char = rawString[i];

      if (escaped) {
        escaped = false;
        currentToken += char;
        continue;
      }

      if (char === "\\") {
        escaped = true;
        currentToken += char;
        continue;
      }

      if (char === '"') {
        inString = !inString;
        if (!inString) {
          // String ended, check if it's followed by a colon ':'
          let nextIdx = i + 1;
          while (nextIdx < rawString.length && /\s/.test(rawString[nextIdx])) {
            nextIdx++;
          }
          if (rawString[nextIdx] === ":") {
            const keyName = currentToken;
            const currentScope = stack[stack.length - 1];
            if (currentScope) {
              if (currentScope.has(keyName)) {
                if (!duplicates.includes(keyName)) {
                  duplicates.push(keyName);
                }
              } else {
                currentScope.add(keyName);
              }
            }
          }
        } else {
          currentToken = "";
        }
        continue;
      }

      if (inString) {
        currentToken += char;
        continue;
      }

      if (char === "{") {
        stack.push(new Set());
      } else if (char === "}") {
        if (stack.length > 1) {
          stack.pop();
        }
      }
    }

    return duplicates.length > 0 ? duplicates : null;
  }

  // Exact JSON error line & column locator
  function parseJsonError(error, rawText) {
    let message = error.message || "Invalid JSON syntax";
    let line = 1;
    let col = 1;

    // Pattern 1: "at position X"
    const posMatch = message.match(/at position (\d+)/i);
    // Pattern 2: "line X column Y"
    const lineColMatch = message.match(/line (\d+) column (\d+)/i);

    if (lineColMatch) {
      line = parseInt(lineColMatch[1], 10);
      col = parseInt(lineColMatch[2], 10);
    } else if (posMatch) {
      const pos = parseInt(posMatch[1], 10);
      const sub = rawText.slice(0, pos);
      const lines = sub.split("\n");
      line = lines.length;
      col = lines[lines.length - 1].length + 1;
    } else {
      // Fallback: analyze syntax characters
      line = 1;
      col = 1;
    }

    return {
      message,
      line,
      col,
      readableLocation: `Line ${line}, Column ${col}`,
    };
  }

  // ==========================================================================
  // 6. LINE NUMBERS SYNCHRONIZATION
  // ==========================================================================
  function updateLineNumbers() {
    if (!dom.inputJson || !dom.inputLineNumbers) return;
    const text = dom.inputJson.value || "";
    const lines = text.split("\n").length;
    let lineNumStr = "";
    for (let i = 1; i <= lines; i++) {
      lineNumStr += i + "\n";
    }
    dom.inputLineNumbers.textContent = lineNumStr;

    // Output line numbers
    if (dom.outputCode && dom.outputLineNumbers) {
      const outText = dom.outputCode.textContent || "";
      const outLines = outText.split("\n").length;
      let outLineNumStr = "";
      for (let i = 1; i <= outLines; i++) {
        outLineNumStr += i + "\n";
      }
      dom.outputLineNumbers.textContent = outLineNumStr;
    }
  }

  function syncScroll() {
    if (dom.inputLineNumbers && dom.inputJson) {
      dom.inputLineNumbers.scrollTop = dom.inputJson.scrollTop;
    }
  }

  // Cursor tracker
  function updateCursorPosition() {
    if (!dom.inputJson || !dom.statusLineCol) return;
    const pos = dom.inputJson.selectionStart || 0;
    const lines = dom.inputJson.value.substr(0, pos).split("\n");
    const line = lines.length;
    const col = lines[lines.length - 1].length + 1;
    dom.statusLineCol.textContent = `Ln ${line}, Col ${col}`;
  }

  // ==========================================================================
  // 7. HISTORY MANAGEMENT (UNDO / REDO)
  // ==========================================================================
  function pushHistory(val) {
    if (state.historyIndex >= 0 && state.history[state.historyIndex] === val)
      return;
    if (state.historyIndex < state.history.length - 1) {
      state.history = state.history.slice(0, state.historyIndex + 1);
    }
    state.history.push(val);
    if (state.history.length > state.maxHistory) {
      state.history.shift();
    }
    state.historyIndex = state.history.length - 1;
    updateHistoryButtons();
  }

  function updateHistoryButtons() {
    if (dom.btnUndo) dom.btnUndo.disabled = state.historyIndex <= 0;
    if (dom.btnRedo)
      dom.btnRedo.disabled = state.historyIndex >= state.history.length - 1;
  }

  function handleUndo() {
    if (state.historyIndex > 0) {
      state.historyIndex--;
      dom.inputJson.value = state.history[state.historyIndex];
      handleProcess("format", false);
      updateLineNumbers();
      updateHistoryButtons();
    }
  }

  function handleRedo() {
    if (state.historyIndex < state.history.length - 1) {
      state.historyIndex++;
      dom.inputJson.value = state.history[state.historyIndex];
      handleProcess("format", false);
      updateLineNumbers();
      updateHistoryButtons();
    }
  }

  // ==========================================================================
  // 8. CORE FORMATTING, VALIDATION & MINIFICATION
  // ==========================================================================

  function hideBanners() {
    if (dom.bannerValid) dom.bannerValid.classList.remove("show");
    if (dom.bannerInvalid) dom.bannerInvalid.classList.remove("show");
    if (dom.bannerWarn) dom.bannerWarn.classList.remove("show");
  }

  function handleProcess(action = "format", recordHistory = true) {
    hideBanners();
    const rawText = dom.inputJson ? dom.inputJson.value : "";
    state.rawJson = rawText;

    if (!rawText.trim()) {
      state.parsedData = null;
      state.formattedJson = "";
      if (dom.outputCode) dom.outputCode.textContent = "";
      if (dom.statusIndicator) {
        dom.statusIndicator.className = "hz-status-dot";
      }
      if (dom.statusText) dom.statusText.textContent = "Awaiting input";
      if (dom.statusSize) dom.statusSize.textContent = "0 B";
      renderEmptyTree();
      renderStats(null);
      updateLineNumbers();
      return;
    }

    if (recordHistory) {
      pushHistory(rawText);
    }

    // Step 1: Detect Duplicate Keys warning
    const duplicates = detectDuplicateKeys(rawText);
    if (duplicates && dom.bannerWarn && dom.warnMessage) {
      dom.warnMessage.textContent = `Duplicate keys detected: ${duplicates.map((k) => `"${k}"`).join(", ")}. Note that JSON specification dictates keys in an object should be unique.`;
      dom.bannerWarn.classList.add("show");
    }

    // Step 2: Native JSON Parse
    try {
      const parsed = JSON.parse(rawText);
      state.parsedData = parsed;

      // Update status to VALID
      if (dom.statusIndicator) {
        dom.statusIndicator.className = "hz-status-dot valid";
      }
      if (dom.statusText) dom.statusText.textContent = "Valid JSON";

      if (action === "minify") {
        state.formattedJson = JSON.stringify(parsed);
      } else {
        const indent = getIndentation();
        state.formattedJson = JSON.stringify(parsed, null, indent);
      }

      if (dom.outputCode) {
        dom.outputCode.textContent = state.formattedJson;
      }

      // Show valid banner on validate action
      if (action === "validate" && dom.bannerValid) {
        dom.bannerValid.classList.add("show");
      }

      // Update byte sizes
      const inBytes = getByteSize(rawText);
      const outBytes = getByteSize(state.formattedJson);
      if (dom.statusSize) {
        dom.statusSize.textContent = `${formatBytes(outBytes)} (${formatBytes(inBytes)} input)`;
      }

      // Update Subsystems
      renderTree(parsed);
      renderStats(parsed, inBytes, outBytes);

      updateLineNumbers();
    } catch (err) {
      state.parsedData = null;
      state.formattedJson = "";
      const diag = parseJsonError(err, rawText);

      // Status invalid
      if (dom.statusIndicator) {
        dom.statusIndicator.className = "hz-status-dot invalid";
      }
      if (dom.statusText) dom.statusText.textContent = "Invalid JSON";
      if (dom.statusSize)
        dom.statusSize.textContent = formatBytes(getByteSize(rawText));

      if (dom.bannerInvalid && dom.invalidMessage) {
        dom.invalidMessage.textContent = `${diag.message} (${diag.readableLocation})`;
        dom.bannerInvalid.classList.add("show");
      }

      if (dom.outputCode) {
        dom.outputCode.textContent = `/* Syntax Error */\n${diag.message}\nLocation: ${diag.readableLocation}\n\nPlease verify commas, quotes, and closing brackets.`;
      }

      renderEmptyTree("Fix the JSON syntax before viewing the structure.");
      renderStats(null);
      updateLineNumbers();
    }
  }

  // ==========================================================================
  // 9. ADVANCED KEY RECURSIVE SORTING
  // ==========================================================================
  function sortObjectKeys(data, direction = "asc") {
    if (data === null || typeof data !== "object") return data;

    if (Array.isArray(data)) {
      // Arrays strictly preserve their element order as mandated
      return data.map((item) => sortObjectKeys(item, direction));
    }

    const keys = Object.keys(data);
    keys.sort((a, b) => {
      const cmp = a.localeCompare(b);
      return direction === "asc" ? cmp : -cmp;
    });

    const sortedObj = {};
    for (const key of keys) {
      sortedObj[key] = sortObjectKeys(data[key], direction);
    }
    return sortedObj;
  }

  function handleKeySort(direction) {
    if (!state.parsedData) {
      handleProcess("format");
      if (!state.parsedData) return;
    }
    const sorted = sortObjectKeys(state.parsedData, direction);
    state.parsedData = sorted;
    const indent = getIndentation();
    state.formattedJson = JSON.stringify(sorted, null, indent);
    dom.inputJson.value = state.formattedJson;
    handleProcess("format", true);
  }

  // ==========================================================================
  // 10. REMOVE EMPTY VALUES UTILITY
  // ==========================================================================
  function removeEmptyValues(data, mode = "all") {
    if (data === null || typeof data !== "object") return data;

    if (Array.isArray(data)) {
      const cleanedArray = data
        .map((item) => removeEmptyValues(item, mode))
        .filter((item) => {
          if (mode === "null" || mode === "all") {
            if (item === null) return false;
          }
          if (mode === "strings" || mode === "all") {
            if (item === "") return false;
          }
          return true;
        });
      return cleanedArray;
    }

    const cleanedObj = {};
    for (const [key, val] of Object.entries(data)) {
      const processed = removeEmptyValues(val, mode);

      if (mode === "null" || mode === "all") {
        if (processed === null) continue;
      }
      if (mode === "strings" || mode === "all") {
        if (processed === "") continue;
      }
      if (mode === "arrays" || mode === "all") {
        if (Array.isArray(processed) && processed.length === 0) continue;
      }
      if (mode === "objects" || mode === "all") {
        if (
          typeof processed === "object" &&
          processed !== null &&
          !Array.isArray(processed) &&
          Object.keys(processed).length === 0
        )
          continue;
      }

      // Note: 0 and false are strictly retained
      cleanedObj[key] = processed;
    }

    return cleanedObj;
  }

  function handleRemoveEmpty(mode) {
    if (!state.parsedData) {
      handleProcess("format");
      if (!state.parsedData) return;
    }
    const cleaned = removeEmptyValues(state.parsedData, mode);
    state.parsedData = cleaned;
    const indent = getIndentation();
    state.formattedJson = JSON.stringify(cleaned, null, indent);
    dom.inputJson.value = state.formattedJson;
    handleProcess("format", true);
  }

  // ==========================================================================
  // 11. INTERACTIVE JSON TREE VIEWER (SAFE DOM, PATH DISPLAY, TYPE BADGES)
  // ==========================================================================

  function renderEmptyTree(message = "No valid JSON to display.") {
    if (!dom.treeContainer) return;
    dom.treeContainer.replaceChildren();
    const emptyNotice = document.createElement("div");
    emptyNotice.style.padding = "30px 16px";
    emptyNotice.style.textAlign = "center";
    emptyNotice.style.color = "var(--ink-faint)";
    emptyNotice.textContent = message;
    dom.treeContainer.appendChild(emptyNotice);
    if (dom.pathDisplay) dom.pathDisplay.textContent = "$";
  }

  function buildTreeDOM(data, key = null, path = "$") {
    const nodeEl = document.createElement("div");
    nodeEl.className = "hz-tree-node" + (path === "$" ? " root" : "");
    nodeEl.dataset.path = path;

    const rowEl = document.createElement("div");
    rowEl.className = "hz-tree-row";
    rowEl.addEventListener("click", (e) => {
      e.stopPropagation();
      document
        .querySelectorAll(".hz-tree-row.selected")
        .forEach((el) => el.classList.remove("selected"));
      rowEl.classList.add("selected");
      state.selectedPath = path;
      if (dom.pathDisplay) dom.pathDisplay.textContent = path;
    });

    const isObject = data !== null && typeof data === "object";
    const isArray = Array.isArray(data);

    if (isObject) {
      // Toggle arrow
      const toggle = document.createElement("span");
      toggle.className = "hz-tree-toggle";
      toggle.innerHTML =
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>';
      rowEl.appendChild(toggle);

      if (key !== null) {
        const keySpan = document.createElement("span");
        keySpan.className = "hz-tree-key";
        keySpan.textContent = isNaN(key) ? `"${key}"` : key;
        rowEl.appendChild(keySpan);

        const sep = document.createElement("span");
        sep.className = "hz-tree-sep";
        sep.textContent = ": ";
        rowEl.appendChild(sep);
      }

      const badge = document.createElement("span");
      badge.className = "hz-type-badge";
      badge.style.background = isArray
        ? "rgba(79, 70, 229, 0.15)"
        : "rgba(124, 58, 237, 0.15)";
      badge.style.color = isArray ? "var(--primary)" : "var(--accent)";
      badge.textContent = isArray
        ? `[${data.length}]`
        : `{${Object.keys(data).length}}`;
      rowEl.appendChild(badge);

      nodeEl.appendChild(rowEl);

      const childrenContainer = document.createElement("div");
      childrenContainer.className = "hz-tree-children";

      const entries = isArray ? data.entries() : Object.entries(data);
      for (const [subKey, subVal] of entries) {
        const subPath = isArray ? `${path}[${subKey}]` : `${path}.${subKey}`;
        childrenContainer.appendChild(buildTreeDOM(subVal, subKey, subPath));
      }

      nodeEl.appendChild(childrenContainer);

      // Toggle action
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const isCollapsed = toggle.classList.toggle("collapsed");
        childrenContainer.style.display = isCollapsed ? "none" : "block";
      });
    } else {
      // Leaf primitive
      const spacer = document.createElement("span");
      spacer.style.display = "inline-block";
      spacer.style.width = "16px";
      rowEl.appendChild(spacer);

      if (key !== null) {
        const keySpan = document.createElement("span");
        keySpan.className = "hz-tree-key";
        keySpan.textContent = isNaN(key) ? `"${key}"` : key;
        rowEl.appendChild(keySpan);

        const sep = document.createElement("span");
        sep.className = "hz-tree-sep";
        sep.textContent = ": ";
        rowEl.appendChild(sep);
      }

      const valSpan = document.createElement("span");
      if (typeof data === "string") {
        valSpan.className = "hz-type-string";
        valSpan.textContent = `"${data}"`;
      } else if (typeof data === "number") {
        valSpan.className = "hz-type-number";
        valSpan.textContent = String(data);
      } else if (typeof data === "boolean") {
        valSpan.className = "hz-type-boolean";
        valSpan.textContent = String(data);
      } else if (data === null) {
        valSpan.className = "hz-type-null";
        valSpan.textContent = "null";
      }

      rowEl.appendChild(valSpan);
      nodeEl.appendChild(rowEl);
    }

    return nodeEl;
  }

  function renderTree(data) {
    if (!dom.treeContainer) return;
    dom.treeContainer.replaceChildren();
    const treeRoot = buildTreeDOM(data, null, "$");
    dom.treeContainer.appendChild(treeRoot);
    if (dom.pathDisplay) dom.pathDisplay.textContent = "$";
  }

  function handleTreeExpandAll(expand = true) {
    if (!dom.treeContainer) return;
    const toggles = dom.treeContainer.querySelectorAll(".hz-tree-toggle");
    const containers = dom.treeContainer.querySelectorAll(".hz-tree-children");

    toggles.forEach((t) => {
      if (expand) t.classList.remove("collapsed");
      else t.classList.add("collapsed");
    });

    containers.forEach((c) => {
      c.style.display = expand ? "block" : "none";
    });
  }

  // Tree search & highlight
  function handleTreeSearch(query) {
    if (!dom.treeContainer) return;
    const rows = dom.treeContainer.querySelectorAll(".hz-tree-row");
    state.searchResults = [];
    state.currentSearchIndex = -1;

    // Clear old marks
    dom.treeContainer.querySelectorAll("mark.hz-highlight").forEach((mark) => {
      const parent = mark.parentNode;
      parent.replaceChild(document.createTextNode(mark.textContent), mark);
      parent.normalize();
    });

    if (!query || !query.trim()) {
      if (dom.treeSearchCount) dom.treeSearchCount.textContent = "";
      return;
    }

    const lowerQuery = query.toLowerCase();
    rows.forEach((row) => {
      const text = row.textContent.toLowerCase();
      if (text.includes(lowerQuery)) {
        state.searchResults.push(row);
      }
    });

    if (dom.treeSearchCount) {
      dom.treeSearchCount.textContent = `${state.searchResults.length} match${state.searchResults.length === 1 ? "" : "es"}`;
    }

    if (state.searchResults.length > 0) {
      state.searchResults[0].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
      state.searchResults[0].classList.add("selected");
    }
  }

  // ==========================================================================
  // 12. STATISTICS & RECURSIVE SIZE ANALYZER
  // ==========================================================================
  function calculateJsonStats(data) {
    const stats = {
      objects: 0,
      arrays: 0,
      keys: 0,
      strings: 0,
      numbers: 0,
      booleans: 0,
      nulls: 0,
      maxDepth: 0,
    };

    function traverse(node, currentDepth) {
      if (currentDepth > stats.maxDepth) {
        stats.maxDepth = currentDepth;
      }

      if (node === null) {
        stats.nulls++;
        return;
      }

      if (Array.isArray(node)) {
        stats.arrays++;
        for (let i = 0; i < node.length; i++) {
          traverse(node[i], currentDepth + 1);
        }
        return;
      }

      if (typeof node === "object") {
        stats.objects++;
        const keys = Object.keys(node);
        stats.keys += keys.length;
        for (const k of keys) {
          traverse(node[k], currentDepth + 1);
        }
        return;
      }

      if (typeof node === "string") {
        stats.strings++;
      } else if (typeof node === "number") {
        stats.numbers++;
      } else if (typeof node === "boolean") {
        stats.booleans++;
      }
    }

    if (data !== null && data !== undefined) {
      traverse(data, 1);
    }

    return stats;
  }

  function renderStats(data, inBytes = 0, outBytes = 0) {
    if (!data) {
      if (dom.statObjects) dom.statObjects.textContent = "0";
      if (dom.statArrays) dom.statArrays.textContent = "0";
      if (dom.statKeys) dom.statKeys.textContent = "0";
      if (dom.statDepth) dom.statDepth.textContent = "0";
      if (dom.statStrings) dom.statStrings.textContent = "0";
      if (dom.statNumbers) dom.statNumbers.textContent = "0";
      if (dom.statBooleans) dom.statBooleans.textContent = "0";
      if (dom.statNulls) dom.statNulls.textContent = "0";
      if (dom.sizeInput) dom.sizeInput.textContent = "0 B";
      if (dom.sizeFormatted) dom.sizeFormatted.textContent = "0 B";
      if (dom.sizeMinified) dom.sizeMinified.textContent = "0 B";
      if (dom.sizeSavings) dom.sizeSavings.textContent = "0%";
      return;
    }

    const stats = calculateJsonStats(data);
    if (dom.statObjects)
      dom.statObjects.textContent = stats.objects.toLocaleString();
    if (dom.statArrays)
      dom.statArrays.textContent = stats.arrays.toLocaleString();
    if (dom.statKeys) dom.statKeys.textContent = stats.keys.toLocaleString();
    if (dom.statDepth)
      dom.statDepth.textContent = stats.maxDepth.toLocaleString();
    if (dom.statStrings)
      dom.statStrings.textContent = stats.strings.toLocaleString();
    if (dom.statNumbers)
      dom.statNumbers.textContent = stats.numbers.toLocaleString();
    if (dom.statBooleans)
      dom.statBooleans.textContent = stats.booleans.toLocaleString();
    if (dom.statNulls) dom.statNulls.textContent = stats.nulls.toLocaleString();

    const minifiedStr = JSON.stringify(data);
    const minBytes = getByteSize(minifiedStr);

    if (dom.sizeInput) dom.sizeInput.textContent = formatBytes(inBytes);
    if (dom.sizeFormatted)
      dom.sizeFormatted.textContent = formatBytes(outBytes);
    if (dom.sizeMinified) dom.sizeMinified.textContent = formatBytes(minBytes);

    if (outBytes > 0 && minBytes < outBytes) {
      const savings = Math.round(((outBytes - minBytes) / outBytes) * 100);
      if (dom.sizeSavings) dom.sizeSavings.textContent = `${savings}% smaller`;
    } else {
      if (dom.sizeSavings) dom.sizeSavings.textContent = "0%";
    }
  }

  // ==========================================================================
  // 13. REAL JSON STRUCTURAL DIFF / COMPARE
  // ==========================================================================
  function compareJsonStructures(objA, objB, path = "$") {
    const differences = [];

    function compare(a, b, currentPath) {
      // Type difference
      const typeA = a === null ? "null" : Array.isArray(a) ? "array" : typeof a;
      const typeB = b === null ? "null" : Array.isArray(b) ? "array" : typeof b;

      if (typeA !== typeB) {
        differences.push({
          type: "modified",
          path: currentPath,
          desc: `Type changed from ${typeA} to ${typeB}`,
          oldVal: JSON.stringify(a),
          newVal: JSON.stringify(b),
        });
        return;
      }

      // Arrays
      if (typeA === "array") {
        if (a.length !== b.length) {
          differences.push({
            type: "modified",
            path: currentPath,
            desc: `Array length changed from ${a.length} to ${b.length}`,
            oldVal: `length: ${a.length}`,
            newVal: `length: ${b.length}`,
          });
        }
        const maxLen = Math.max(a.length, b.length);
        for (let i = 0; i < maxLen; i++) {
          const itemPath = `${currentPath}[${i}]`;
          if (i >= a.length) {
            differences.push({
              type: "added",
              path: itemPath,
              desc: "Array element added",
              newVal: JSON.stringify(b[i]),
            });
          } else if (i >= b.length) {
            differences.push({
              type: "removed",
              path: itemPath,
              desc: "Array element removed",
              oldVal: JSON.stringify(a[i]),
            });
          } else {
            compare(a[i], b[i], itemPath);
          }
        }
        return;
      }

      // Objects
      if (typeA === "object") {
        const keysA = new Set(Object.keys(a));
        const keysB = new Set(Object.keys(b));

        for (const k of keysA) {
          const propPath = `${currentPath}.${k}`;
          if (!keysB.has(k)) {
            differences.push({
              type: "removed",
              path: propPath,
              desc: `Property "${k}" removed`,
              oldVal: JSON.stringify(a[k]),
            });
          } else {
            compare(a[k], b[k], propPath);
          }
        }

        for (const k of keysB) {
          const propPath = `${currentPath}.${k}`;
          if (!keysA.has(k)) {
            differences.push({
              type: "added",
              path: propPath,
              desc: `Property "${k}" added`,
              newVal: JSON.stringify(b[k]),
            });
          }
        }
        return;
      }

      // Primitives
      if (a !== b) {
        differences.push({
          type: "modified",
          path: currentPath,
          desc: `Value modified`,
          oldVal: JSON.stringify(a),
          newVal: JSON.stringify(b),
        });
      }
    }

    compare(objA, objB, path);
    return differences;
  }

  function handleRunDiff() {
    if (!dom.diffInputA || !dom.diffInputB || !dom.diffList || !dom.diffSummary)
      return;

    let parsedA, parsedB;
    try {
      parsedA = JSON.parse(dom.diffInputA.value);
    } catch (e) {
      alert("JSON A is invalid: " + e.message);
      return;
    }

    try {
      parsedB = JSON.parse(dom.diffInputB.value);
    } catch (e) {
      alert("JSON B is invalid: " + e.message);
      return;
    }

    const diffs = compareJsonStructures(parsedA, parsedB);
    dom.diffList.replaceChildren();

    if (diffs.length === 0) {
      dom.diffSummary.textContent =
        "JSON documents are identical in structure and values.";
      const emptyItem = document.createElement("li");
      emptyItem.className = "hz-diff-item";
      emptyItem.textContent = "No differences found.";
      dom.diffList.appendChild(emptyItem);
      return;
    }

    const added = diffs.filter((d) => d.type === "added").length;
    const removed = diffs.filter((d) => d.type === "removed").length;
    const modified = diffs.filter((d) => d.type === "modified").length;

    dom.diffSummary.innerHTML = `
      <span class="hz-diff-pill added">+ ${added} Added</span>
      <span class="hz-diff-pill removed">- ${removed} Removed</span>
      <span class="hz-diff-pill changed">~ ${modified} Changed</span>
    `;

    for (const diff of diffs) {
      const li = document.createElement("li");
      li.className = `hz-diff-item ${diff.type === "added" ? "add" : diff.type === "removed" ? "del" : "mod"}`;

      const title = document.createElement("div");
      title.style.fontWeight = "600";
      title.textContent = `${diff.path} — ${diff.desc}`;
      li.appendChild(title);

      if (diff.oldVal !== undefined && diff.newVal !== undefined) {
        const changeVal = document.createElement("div");
        changeVal.style.fontSize = "0.75rem";
        changeVal.style.color = "var(--ink-soft)";
        changeVal.textContent = `${diff.oldVal}  →  ${diff.newVal}`;
        li.appendChild(changeVal);
      } else if (diff.newVal !== undefined) {
        const addVal = document.createElement("div");
        addVal.style.fontSize = "0.75rem";
        addVal.style.color = "var(--valid)";
        addVal.textContent = `Value: ${diff.newVal}`;
        li.appendChild(addVal);
      } else if (diff.oldVal !== undefined) {
        const remVal = document.createElement("div");
        remVal.style.fontSize = "0.75rem";
        remVal.style.color = "var(--invalid)";
        remVal.textContent = `Old value: ${diff.oldVal}`;
        li.appendChild(remVal);
      }

      dom.diffList.appendChild(li);
    }
  }

  // ==========================================================================
  // 14. CONVERTERS & STRING UTILITIES (JSON -> CSV, CSV -> JSON, ESCAPE)
  // ==========================================================================

  function jsonToCsv(jsonArray) {
    if (!Array.isArray(jsonArray) || jsonArray.length === 0) {
      throw new Error(
        "Input must be a non-empty array of objects for tabular CSV conversion.",
      );
    }

    // Collect all unique keys from all objects
    const keySet = new Set();
    jsonArray.forEach((item) => {
      if (typeof item === "object" && item !== null) {
        Object.keys(item).forEach((k) => keySet.add(k));
      }
    });

    const headers = Array.from(keySet);
    if (headers.length === 0) {
      throw new Error("Objects in array contain no keys.");
    }

    const rows = [headers.join(",")];

    for (const item of jsonArray) {
      const row = headers.map((header) => {
        let val = item[header];
        if (val === undefined || val === null) return '""';
        if (typeof val === "object") {
          val = JSON.stringify(val);
        } else {
          val = String(val);
        }
        // Escape quotes
        val = val.replace(/"/g, '""');
        return `"${val}"`;
      });
      rows.push(row.join(","));
    }

    return rows.join("\n");
  }

  function csvToJson(csvText) {
    const lines = csvText.trim().split("\n");
    if (lines.length < 2) {
      throw new Error(
        "CSV must contain a header row and at least one data row.",
      );
    }

    // Simple robust comma & quoted cell parser
    function parseCsvRow(rowStr) {
      const cells = [];
      let inQuote = false;
      let cell = "";
      for (let i = 0; i < rowStr.length; i++) {
        const c = rowStr[i];
        if (c === '"') {
          if (inQuote && rowStr[i + 1] === '"') {
            cell += '"';
            i++;
          } else {
            inQuote = !inQuote;
          }
        } else if (c === "," && !inQuote) {
          cells.push(cell.trim());
          cell = "";
        } else {
          cell += c;
        }
      }
      cells.push(cell.trim());
      return cells;
    }

    const headers = parseCsvRow(lines[0]);
    const results = [];

    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;
      const values = parseCsvRow(lines[i]);
      const obj = {};
      headers.forEach((h, idx) => {
        let val = values[idx] !== undefined ? values[idx] : "";
        // Cast basic primitives
        if (val.toLowerCase() === "true") val = true;
        else if (val.toLowerCase() === "false") val = false;
        else if (!isNaN(Number(val)) && val !== "") val = Number(val);
        obj[h] = val;
      });
      results.push(obj);
    }

    return results;
  }

  // ==========================================================================
  // 15. CLIPBOARD & FILE DOWNLOAD
  // ==========================================================================

  function copyToClipboard(text, btnElement, successLabel = "Copied!") {
    if (!text) return;
    const originalHtml = btnElement ? btnElement.innerHTML : "";

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          if (btnElement) {
            btnElement.textContent = successLabel;
            setTimeout(() => {
              btnElement.innerHTML = originalHtml;
            }, 1800);
          }
        })
        .catch(() =>
          fallbackCopy(text, btnElement, originalHtml, successLabel),
        );
    } else {
      fallbackCopy(text, btnElement, originalHtml, successLabel);
    }
  }

  function fallbackCopy(text, btnElement, originalHtml, successLabel) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.top = "-9999px";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand("copy");
      if (btnElement) {
        btnElement.textContent = successLabel;
        setTimeout(() => {
          btnElement.innerHTML = originalHtml;
        }, 1800);
      }
    } catch (e) {
      alert("Unable to copy to clipboard.");
    }
    document.body.removeChild(ta);
  }

  function downloadTextFile(filename, content, mimeType = "application/json") {
    if (!content) return;
    const cleanFilename = sanitizeFilename(filename);
    const blob = new Blob([content], { type: `${mimeType};charset=utf-8;` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = cleanFilename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 100);
  }

  // ==========================================================================
  // 16. DRAG & DROP / FILE IMPORT
  // ==========================================================================
  function handleFileRead(file) {
    if (!file) return;
    if (
      !file.name.toLowerCase().endsWith(".json") &&
      file.type &&
      !file.type.includes("json") &&
      !file.type.includes("text")
    ) {
      alert("Please upload a valid .json file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      if (dom.inputJson) {
        dom.inputJson.value = content;
        handleProcess("format", true);
        updateLineNumbers();
      }
    };
    reader.onerror = () => {
      alert("Error reading the uploaded file.");
    };
    reader.readAsText(file);
  }

  // ==========================================================================
  // 17. GLOBAL SEARCH SYSTEM (KEYBOARD, DIALOG, EXACT NAVIGATION)
  // ==========================================================================
  function openSearchModal() {
    if (!dom.searchModal) return;
    dom.searchModal.classList.add("open");
    if (dom.searchInput) {
      dom.searchInput.value = "";
      dom.searchInput.focus();
    }
    renderSearchResults("");
    document.body.classList.add("scroll-locked");
  }

  function closeSearchModal() {
    if (!dom.searchModal) return;
    dom.searchModal.classList.remove("open");
    document.body.classList.remove("scroll-locked");
  }

  function renderSearchResults(query) {
    if (!dom.searchResultsList) return;
    dom.searchResultsList.replaceChildren();

    const q = query.trim().toLowerCase();
    const filtered = HUZIKIT_TOOLS.filter((tool) => {
      if (!q) return true;
      return (
        tool.name.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q) ||
        tool.keywords.toLowerCase().includes(q)
      );
    });

    if (filtered.length === 0) {
      const empty = document.createElement("li");
      empty.className = "hz-search-empty";
      empty.textContent = `No tools found matching "${query}".`;
      dom.searchResultsList.appendChild(empty);
      return;
    }

    filtered.forEach((tool) => {
      const li = document.createElement("li");
      li.className = "hz-search-item";

      const a = document.createElement("a");
      a.href = tool.url;

      const info = document.createElement("div");
      info.className = "hz-search-item-info";

      const name = document.createElement("span");
      name.className = "hz-search-item-name";
      name.textContent = tool.name;

      const desc = document.createElement("span");
      desc.className = "hz-search-item-desc";
      desc.textContent = tool.keywords;

      info.appendChild(name);
      info.appendChild(desc);

      const cat = document.createElement("span");
      cat.className = "hz-search-item-category";
      cat.textContent = tool.category;

      a.appendChild(info);
      a.appendChild(cat);
      li.appendChild(a);

      dom.searchResultsList.appendChild(li);
    });
  }

  // ==========================================================================
  // 18. INITIALIZATION & EVENT BINDINGS
  // ==========================================================================
  function init() {
    // 1. Line numbers & input sync
    if (dom.inputJson) {
      dom.inputJson.addEventListener("input", () => {
        updateLineNumbers();
        updateCursorPosition();
      });

      dom.inputJson.addEventListener("scroll", syncScroll);
      dom.inputJson.addEventListener("keyup", updateCursorPosition);
      dom.inputJson.addEventListener("click", updateCursorPosition);

      // Auto-format on paste if enabled
      dom.inputJson.addEventListener("paste", () => {
        if (state.formatOnPaste) {
          setTimeout(() => {
            handleProcess("format", true);
            updateLineNumbers();
          }, 40);
        }
      });
    }

    // 2. Toolbar Action Buttons
    if (dom.btnFormat)
      dom.btnFormat.addEventListener("click", () =>
        handleProcess("format", true),
      );
    if (dom.btnValidate)
      dom.btnValidate.addEventListener("click", () =>
        handleProcess("validate", true),
      );
    if (dom.btnMinify)
      dom.btnMinify.addEventListener("click", () =>
        handleProcess("minify", true),
      );

    if (dom.btnClear) {
      dom.btnClear.addEventListener("click", () => {
        if (dom.inputJson) dom.inputJson.value = "";
        handleProcess("format", true);
        updateLineNumbers();
      });
    }

    if (dom.btnCopy && dom.outputCode) {
      dom.btnCopy.addEventListener("click", () => {
        copyToClipboard(dom.outputCode.textContent, dom.btnCopy);
      });
    }

    if (dom.btnDownload) {
      dom.btnDownload.addEventListener("click", () => {
        const content = dom.outputCode ? dom.outputCode.textContent : "";
        if (content) {
          downloadTextFile("formatted.json", content);
        }
      });
    }

    // Undo / Redo
    if (dom.btnUndo) dom.btnUndo.addEventListener("click", handleUndo);
    if (dom.btnRedo) dom.btnRedo.addEventListener("click", handleRedo);

    // Indentation Selector
    if (dom.selectIndent) {
      dom.selectIndent.addEventListener("change", (e) => {
        state.indentation = e.target.value;
        if (state.parsedData) {
          handleProcess("format", false);
        }
      });
    }

    // Sample Selector
    if (dom.selectSample) {
      dom.selectSample.addEventListener("change", (e) => {
        const val = e.target.value;
        if (SAMPLE_LIBRARY[val] && dom.inputJson) {
          dom.inputJson.value = JSON.stringify(SAMPLE_LIBRARY[val], null, 2);
          handleProcess("format", true);
          updateLineNumbers();
        }
      });
    }

    // Key Sorter Selector
    if (dom.selectSort) {
      dom.selectSort.addEventListener("change", (e) => {
        const dir = e.target.value;
        if (dir === "asc" || dir === "desc") {
          handleKeySort(dir);
        }
      });
    }

    // Remove Empty Selector
    if (dom.selectRemoveEmpty) {
      dom.selectRemoveEmpty.addEventListener("change", (e) => {
        const mode = e.target.value;
        if (mode) {
          handleRemoveEmpty(mode);
        }
      });
    }

    // Auto Format Checkbox
    if (dom.chkAutoFormat) {
      dom.chkAutoFormat.addEventListener("change", (e) => {
        state.formatOnPaste = e.target.checked;
      });
    }

    // Theme Switch
    if (dom.btnTheme && dom.toolCard) {
      dom.btnTheme.addEventListener("click", () => {
        state.editorTheme = state.editorTheme === "light" ? "dark" : "light";
        dom.toolCard.classList.toggle(
          "theme-dark",
          state.editorTheme === "dark",
        );
        dom.btnTheme.textContent =
          state.editorTheme === "dark" ? "☀ Light" : "☾ Ink";
      });
    }

    // Focus Mode
    if (dom.btnFocus && dom.toolCard) {
      dom.btnFocus.addEventListener("click", () => {
        const isFocused = dom.toolCard.classList.toggle("focus-mode");
        document.body.classList.toggle("scroll-locked", isFocused);
        dom.btnFocus.textContent = isFocused ? "✕ Exit Focus" : "⛶ Focus";
      });
    }

    // Close focus mode with ESC
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (dom.toolCard && dom.toolCard.classList.contains("focus-mode")) {
          dom.toolCard.classList.remove("focus-mode");
          document.body.classList.remove("scroll-locked");
          if (dom.btnFocus) dom.btnFocus.textContent = "⛶ Focus";
        }
        if (dom.searchModal && dom.searchModal.classList.contains("open")) {
          closeSearchModal();
        }
      }
      // Ctrl+K / Cmd+K search shortcut
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearchModal();
      }
    });

    // File Drag & Drop
    if (dom.inputJson && dom.dropOverlay) {
      ["dragenter", "dragover"].forEach((eventName) => {
        window.addEventListener(
          eventName,
          (e) => {
            e.preventDefault();
            dom.dropOverlay.classList.add("active");
          },
          false,
        );
      });

      ["dragleave", "drop"].forEach((eventName) => {
        dom.dropOverlay.addEventListener(
          eventName,
          (e) => {
            e.preventDefault();
            dom.dropOverlay.classList.remove("active");
            if (eventName === "drop" && e.dataTransfer.files.length > 0) {
              handleFileRead(e.dataTransfer.files[0]);
            }
          },
          false,
        );
      });
    }

    if (dom.fileInput) {
      dom.fileInput.addEventListener("change", (e) => {
        if (e.target.files.length > 0) {
          handleFileRead(e.target.files[0]);
        }
      });
    }

    // 3. Tab Navigation
    dom.tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetTab = btn.dataset.tab;
        dom.tabButtons.forEach((b) => b.classList.remove("active"));
        dom.tabContents.forEach((c) => c.classList.remove("active"));

        btn.classList.add("active");
        const content = document.getElementById(`hz-tab-${targetTab}`);
        if (content) content.classList.add("active");
        state.activeTab = targetTab;
      });
    });

    // 4. Tree Controls
    if (dom.btnTreeExpandAll)
      dom.btnTreeExpandAll.addEventListener("click", () =>
        handleTreeExpandAll(true),
      );
    if (dom.btnTreeCollapseAll)
      dom.btnTreeCollapseAll.addEventListener("click", () =>
        handleTreeExpandAll(false),
      );
    if (dom.treeSearchInput) {
      dom.treeSearchInput.addEventListener("input", (e) =>
        handleTreeSearch(e.target.value),
      );
    }
    if (dom.btnCopyPath && dom.pathDisplay) {
      dom.btnCopyPath.addEventListener("click", () =>
        copyToClipboard(
          dom.pathDisplay.textContent,
          dom.btnCopyPath,
          "Copied!",
        ),
      );
    }

    // 5. Diff / Compare
    if (dom.btnRunDiff) dom.btnRunDiff.addEventListener("click", handleRunDiff);

    // 6. Converters
    if (dom.btnJsonToCsv && dom.csvOutput) {
      dom.btnJsonToCsv.addEventListener("click", () => {
        if (!state.parsedData) {
          alert("Please input and format valid JSON first.");
          return;
        }
        try {
          const csv = jsonToCsv(state.parsedData);
          dom.csvOutput.value = csv;
          if (dom.btnDownloadCsv) dom.btnDownloadCsv.disabled = false;
        } catch (err) {
          alert("CSV Conversion Error: " + err.message);
        }
      });
    }

    if (dom.btnDownloadCsv && dom.csvOutput) {
      dom.btnDownloadCsv.addEventListener("click", () => {
        downloadTextFile("converted.csv", dom.csvOutput.value, "text/csv");
      });
    }

    if (dom.btnCsvToJson && dom.csvInput) {
      dom.btnCsvToJson.addEventListener("click", () => {
        try {
          const jsonArr = csvToJson(dom.csvInput.value);
          dom.inputJson.value = JSON.stringify(jsonArr, null, 2);
          handleProcess("format", true);
          // Switch to code tab
          const codeTabBtn = document.querySelector('[data-tab="code"]');
          if (codeTabBtn) codeTabBtn.click();
        } catch (err) {
          alert("CSV to JSON Error: " + err.message);
        }
      });
    }

    if (dom.btnEscapeStr && dom.strEscapeInput) {
      dom.btnEscapeStr.addEventListener("click", () => {
        dom.strEscapeInput.value = JSON.stringify(dom.strEscapeInput.value);
      });
    }

    if (dom.btnUnescapeStr && dom.strEscapeInput) {
      dom.btnUnescapeStr.addEventListener("click", () => {
        try {
          dom.strEscapeInput.value = JSON.parse(dom.strEscapeInput.value);
        } catch (e) {
          alert(
            "Could not unescape string. Ensure it is wrapped in quotes or valid JSON escaped format.",
          );
        }
      });
    }

    // 7. Global Search Modal Bindings
    dom.searchTriggers.forEach((t) =>
      t.addEventListener("click", openSearchModal),
    );
    if (dom.searchCloseBtn)
      dom.searchCloseBtn.addEventListener("click", closeSearchModal);
    if (dom.searchModal) {
      dom.searchModal.addEventListener("click", (e) => {
        if (e.target === dom.searchModal) closeSearchModal();
      });
    }
    if (dom.searchInput) {
      dom.searchInput.addEventListener("input", (e) =>
        renderSearchResults(e.target.value),
      );
    }

    // 8. Mobile Menu & Accordions
    if (dom.hamburgerBtn && dom.mobileMenu) {
      dom.hamburgerBtn.addEventListener("click", () => {
        const isOpen = dom.mobileMenu.classList.toggle("open");
        dom.hamburgerBtn.setAttribute(
          "aria-expanded",
          isOpen ? "true" : "false",
        );
        document.body.classList.toggle("scroll-locked", isOpen);
      });
    }

    document.querySelectorAll(".hz-accordion-trigger").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const isExpanded = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", isExpanded ? "false" : "true");
        const content = trigger.nextElementSibling;
        if (content) {
          content.classList.toggle("open", !isExpanded);
        }
      });
    });

    // 9. FAQ Accordion
    document.querySelectorAll(".hz-faq-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const isExpanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", isExpanded ? "false" : "true");
        const panel = document.getElementById(
          btn.getAttribute("aria-controls"),
        );
        if (panel) {
          panel.classList.toggle("open", !isExpanded);
        }
      });
    });

    // 10. Initial load with Sample JSON
    if (dom.inputJson && !dom.inputJson.value) {
      dom.inputJson.value = JSON.stringify(SAMPLE_LIBRARY.basic, null, 2);
      handleProcess("format", true);
      updateLineNumbers();
    }

    // Populate Initial Diff fields with clean samples
    if (dom.diffInputA && dom.diffInputB) {
      dom.diffInputA.value = JSON.stringify(
        {
          appName: "Huzikit",
          version: "2.4.0",
          active: true,
          features: ["Format", "Minify"],
        },
        null,
        2,
      );

      dom.diffInputB.value = JSON.stringify(
        {
          appName: "Huzikit Pro",
          version: "2.5.0",
          active: true,
          features: ["Format", "Minify", "Diff"],
          author: "Huzaifa",
        },
        null,
        2,
      );
    }
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
