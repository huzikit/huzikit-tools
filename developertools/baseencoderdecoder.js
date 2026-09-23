/**
 * HUZIKIT — PREMIUM BASE64 ENCODER / DECODER JAVASCRIPT
 * Complete Vanilla JS Implementation (Zero External Dependencies)
 * Fully compliant with Huzikit Brand, UTF-8, Binary Safety & Global Search
 */

(function () {
  "use strict";

  // =========================================================================
  // 1. DATASET: ALL 30 HUZIKIT TOOLS FOR GLOBAL SEARCH
  // =========================================================================
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
      keywords: "characters letters length limit count",
    },
    {
      name: "Case Converter",
      category: "Text Tools",
      url: "/texttools/case-converter.html",
      keywords: "uppercase lowercase titlecase sentencecase camelcase",
    },
    {
      name: "Remove Duplicate Lines",
      category: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
      keywords: "dedupe sort filter lines clean text",
    },
    {
      name: "Lorem Ipsum Generator",
      category: "Text Tools",
      url: "/texttools/loremipsumgenerator.html",
      keywords: "dummy text placeholder filler generator",
    },
    {
      name: "Password Generator",
      category: "Text Tools",
      url: "/texttools/passwordgenerator.html",
      keywords: "secure strong random passkeys credentials",
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      url: "/texttools/text-reverser.html",
      keywords: "reverse flip mirror backwards invert",
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      url: "/texttools/onlinenotepad.html",
      keywords: "scratchpad notes memo browser local write",
    },

    // Calculators (8)
    {
      name: "Age Calculator",
      category: "Calculators",
      url: "/calculator/agecalculator.html",
      keywords: "birthday years months days birthdate age",
    },
    {
      name: "BMI Calculator",
      category: "Calculators",
      url: "/calculator/bmi-calculator.html",
      keywords: "body mass index health weight height fitness",
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
      keywords: "nutrition calories diet daily energy bmr",
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      url: "/calculator/discount-calculator.html",
      keywords: "sale discount savings price coupon",
    },
    {
      name: "Saving & Goal Calculator",
      category: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
      keywords: "savings target compound interest finance money",
    },
    {
      name: "Tip Calculator",
      category: "Calculators",
      url: "/calculator/tip-calculator.html",
      keywords: "tip bill split restaurant gratuity",
    },
    {
      name: "GPA Calculator",
      category: "Calculators",
      url: "/calculator/gpa-calculator.html",
      keywords: "grades college university semester score",
    },

    // Image & PDF (6)
    {
      name: "Image Compressor",
      category: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
      keywords: "compress reduce kb size optimize photo",
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
      keywords: "pdf doc docx convert document word",
    },
    {
      name: "JPG to PNG Converter",
      category: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
      keywords: "convert format jpeg image png transparency",
    },
    {
      name: "Color Picker",
      category: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
      keywords: "hex rgb hsl eye dropper palette shade",
    },
    {
      name: "QR Code Generator",
      category: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
      keywords: "qr barcode link generator scanner mobile",
    },

    // Developer Tools (8)
    {
      name: "JSON Formatter",
      category: "Developer Tools",
      url: "/developertools/JSONFORMATTER.html",
      keywords: "json format prettify minify validator parser",
    },
    {
      name: "Base64 Encoder / Decoder",
      category: "Developer Tools",
      url: "/developertools/base64encoderdecoder.html",
      keywords: "base64 encode decode binary utf8 text file image",
    },
    {
      name: "URL Encoder / Decoder",
      category: "Developer Tools",
      url: "/developertools/urlencoderdecoder.html",
      keywords: "url encode decode percent uri query params",
    },
    {
      name: "Meta Tag Generator",
      category: "Developer Tools",
      url: "/developertools/meta-tag-generator.html",
      keywords: "seo meta tags opengraph twitter social html",
    },
    {
      name: "Regex Tester",
      category: "Developer Tools",
      url: "/developertools/regextester.html",
      keywords: "regular expressions regex pattern test match",
    },
    {
      name: "Markdown to HTML",
      category: "Developer Tools",
      url: "/developertools/markdownhtml.html",
      keywords: "markdown md html convert preview compile",
    },
    {
      name: "CSS Minifier",
      category: "Developer Tools",
      url: "/developertools/cssminifier.html",
      keywords: "css minify compress clean stylesheet styles",
    },
    {
      name: "Unix Timestamp Converter",
      category: "Developer Tools",
      url: "/developertools/unixtimestamp.html",
      keywords: "timestamp epoch unix date time convert",
    },
  ];

  // =========================================================================
  // 2. CORE BASE64 & BINARY ENGINES (UTF-8 & Chunked Binary Safe)
  // =========================================================================

  /**
   * Converts a Uint8Array of bytes into standard or URL-safe Base64 string
   */
  function bytesToBase64(
    bytes,
    isUrlSafe = false,
    keepPadding = true,
    lineWrap = 0,
  ) {
    let binary = "";
    const len = bytes.byteLength;
    const chunkSize = 8192; // Chunking prevents call stack overflow
    for (let i = 0; i < len; i += chunkSize) {
      const slice = bytes.subarray(i, Math.min(i + chunkSize, len));
      binary += String.fromCharCode.apply(null, slice);
    }
    let base64 = btoa(binary);

    if (isUrlSafe) {
      base64 = base64.replace(/\+/g, "-").replace(/\//g, "_");
      if (!keepPadding) {
        base64 = base64.replace(/=+$/, "");
      }
    } else if (!keepPadding) {
      base64 = base64.replace(/=+$/, "");
    }

    if (lineWrap > 0) {
      const regex = new RegExp(`.{1,${lineWrap}}`, "g");
      base64 = base64.match(regex)?.join("\n") || base64;
    }

    return base64;
  }

  /**
   * Converts standard or URL-safe Base64 string into a Uint8Array of bytes
   */
  function base64ToBytes(base64Str) {
    if (typeof base64Str !== "string") {
      throw new Error("Input must be a valid string");
    }

    // 1. Strip Data URI prefix if present
    let cleaned = base64Str.trim();
    if (cleaned.startsWith("data:")) {
      const commaIdx = cleaned.indexOf(",");
      if (commaIdx !== -1) {
        cleaned = cleaned.slice(commaIdx + 1);
      }
    }

    // 2. Strip any whitespace, carriage returns, or newlines
    cleaned = cleaned.replace(/\s+/g, "");

    // 3. Normalize URL-safe Base64 back to Standard Base64
    cleaned = cleaned.replace(/-/g, "+").replace(/_/g, "/");

    // 4. Validate valid alphabet characters
    if (/[^A-Za-z0-9+/=]/.test(cleaned)) {
      throw new Error(
        "Invalid Base64 characters detected (allowed: A-Z, a-z, 0-9, +, /, = or -, _)",
      );
    }

    // 5. Restore missing padding if stripped
    const mod4 = cleaned.length % 4;
    if (mod4 === 1) {
      throw new Error("Invalid Base64 length (cannot decode 1 modulo byte)");
    } else if (mod4 === 2) {
      cleaned += "==";
    } else if (mod4 === 3) {
      cleaned += "=";
    }

    // 6. Validate padding placement
    const firstPad = cleaned.indexOf("=");
    if (firstPad !== -1) {
      if (
        firstPad < cleaned.length - 2 ||
        (firstPad === cleaned.length - 2 && cleaned[cleaned.length - 1] !== "=")
      ) {
        throw new Error("Invalid Base64 padding structure");
      }
    }

    // 7. Binary decode via atob
    let binary;
    try {
      binary = atob(cleaned);
    } catch (e) {
      throw new Error(
        "Malformed Base64 payload: " + (e.message || "Decoding failed"),
      );
    }

    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  /**
   * UTF-8 safe text encoder
   */
  function encodeTextToBase64(text, isUrlSafe, keepPadding, lineWrap) {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(text);
    return bytesToBase64(bytes, isUrlSafe, keepPadding, lineWrap);
  }

  /**
   * UTF-8 safe text decoder with strict error reporting
   */
  function decodeBase64ToText(base64Str) {
    const bytes = base64ToBytes(base64Str);
    try {
      const decoder = new TextDecoder("utf-8", { fatal: true });
      return decoder.decode(bytes);
    } catch (e) {
      throw new Error(
        "Unable to decode Base64 as UTF-8 text (data may be binary or another charset)",
      );
    }
  }

  /**
   * Converts bytes to formatted Hexadecimal
   */
  function bytesToHex(bytes, delimiter = " ") {
    const hexArr = [];
    for (let i = 0; i < bytes.length; i++) {
      hexArr.push(bytes[i].toString(16).padStart(2, "0").toUpperCase());
    }
    return hexArr.join(delimiter);
  }

  /**
   * Converts Hex string back to Uint8Array bytes
   */
  function hexToBytes(hexStr) {
    const cleanHex = hexStr.replace(/\s+/g, "");
    if (/[^0-9A-Fa-f]/.test(cleanHex)) {
      throw new Error("Invalid Hexadecimal characters (allowed: 0-9, A-F)");
    }
    if (cleanHex.length % 2 !== 0) {
      throw new Error(
        "Invalid Hex length (must be an even number of characters)",
      );
    }
    const bytes = new Uint8Array(cleanHex.length / 2);
    for (let i = 0; i < cleanHex.length; i += 2) {
      bytes[i / 2] = parseInt(cleanHex.substr(i, 2), 16);
    }
    return bytes;
  }

  /**
   * Detects image MIME type from binary magic bytes
   */
  function detectImageMime(bytes) {
    if (!bytes || bytes.length < 4) return null;

    // PNG: 89 50 4E 47
    if (
      bytes[0] === 0x89 &&
      bytes[1] === 0x50 &&
      bytes[2] === 0x4e &&
      bytes[3] === 0x47
    ) {
      return "image/png";
    }
    // JPEG: FF D8 FF
    if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
      return "image/jpeg";
    }
    // GIF: 47 49 46 38
    if (
      bytes[0] === 0x47 &&
      bytes[1] === 0x49 &&
      bytes[2] === 0x46 &&
      bytes[3] === 0x38
    ) {
      return "image/gif";
    }
    // WebP: RIFF ... WEBP
    if (
      bytes.length >= 12 &&
      bytes[0] === 0x52 &&
      bytes[1] === 0x49 &&
      bytes[2] === 0x46 &&
      bytes[3] === 0x46 &&
      bytes[8] === 0x57 &&
      bytes[9] === 0x45 &&
      bytes[10] === 0x42 &&
      bytes[11] === 0x50
    ) {
      return "image/webp";
    }
    // SVG detection (ASCII <svg)
    if (bytes.length >= 4) {
      try {
        const textSample = new TextDecoder("ascii")
          .decode(bytes.subarray(0, 100))
          .toLowerCase();
        if (textSample.includes("<svg")) {
          return "image/svg+xml";
        }
      } catch (e) {}
    }
    return null;
  }

  // =========================================================================
  // 3. APPLICATION STATE
  // =========================================================================
  const state = {
    activeTab: "text", // 'text', 'file', 'hex', 'batch'
    mode: "encode", // 'encode' or 'decode'
    isUrlSafe: false,
    keepPadding: true,
    lineWrap: 0,
    currentFile: null,
    currentFileBytes: null,
    batchQueue: [],
    history: [],
  };

  // =========================================================================
  // 4. DOM ELEMENT CACHE
  // =========================================================================
  const els = {
    // Mode toggles
    encodeBtn: document.getElementById("btn-mode-encode"),
    decodeBtn: document.getElementById("btn-mode-decode"),
    swapBtn: document.getElementById("btn-swap"),
    clearBtn: document.getElementById("btn-clear"),
    exampleBtn: document.getElementById("btn-example"),
    autoDetectBtn: document.getElementById("btn-auto-detect"),

    // Tab buttons & panels
    tabBtns: document.querySelectorAll(".tool-tab-btn"),
    tabPanels: document.querySelectorAll(".tab-panel"),

    // Text Editor
    inputText: document.getElementById("input-text"),
    outputText: document.getElementById("output-text"),
    inputPaneTitle: document.getElementById("input-pane-title"),
    outputPaneTitle: document.getElementById("output-pane-title"),
    inputCharCount: document.getElementById("input-char-count"),
    inputByteCount: document.getElementById("input-byte-count"),
    outputCharCount: document.getElementById("output-char-count"),
    outputByteCount: document.getElementById("output-byte-count"),

    // Format Options
    optUrlSafe: document.getElementById("opt-url-safe"),
    optPadding: document.getElementById("opt-padding"),
    optWrap: document.getElementById("opt-wrap"),

    // Actions
    copyBtn: document.getElementById("btn-copy-output"),
    downloadTextBtn: document.getElementById("btn-download-text"),
    downloadFileBtn: document.getElementById("btn-download-file"),
    dataUriBtn: document.getElementById("btn-data-uri"),

    // Status & Size Analyzer
    statusBanner: document.getElementById("status-banner"),
    statusText: document.getElementById("status-text"),
    analyzerOriginalSize: document.getElementById("stat-original-size"),
    analyzerEncodedSize: document.getElementById("stat-encoded-size"),
    analyzerOverheadPct: document.getElementById("stat-overhead-pct"),

    // File Dropzone
    fileDropzone: document.getElementById("file-dropzone"),
    fileInput: document.getElementById("file-input"),
    fileMetaBox: document.getElementById("file-meta-box"),
    fileNameText: document.getElementById("file-name-text"),
    fileMetaSize: document.getElementById("file-meta-size"),
    fileMetaMime: document.getElementById("file-meta-mime"),
    fileActionEncode: document.getElementById("btn-file-encode"),

    // Image Preview
    imagePreviewCard: document.getElementById("image-preview-card"),
    imagePreviewImg: document.getElementById("image-preview-img"),
    imageDimensions: document.getElementById("image-dimensions"),

    // Hex Inspector
    hexInput: document.getElementById("hex-input"),
    hexOutput: document.getElementById("hex-output"),
    btnHexToBase64: document.getElementById("btn-hex-to-b64"),
    btnBase64ToHex: document.getElementById("btn-b64-to-hex"),
    byteTableBody: document.getElementById("byte-table-body"),

    // Batch Queue
    batchDropzone: document.getElementById("batch-dropzone"),
    batchInput: document.getElementById("batch-input"),
    batchQueueList: document.getElementById("batch-queue-list"),
    btnBatchEncodeAll: document.getElementById("btn-batch-encode-all"),
    btnBatchClear: document.getElementById("btn-batch-clear"),

    // History
    historyList: document.getElementById("history-list"),
    btnClearHistory: document.getElementById("btn-clear-history"),

    // Navigation & Search
    hamburgerBtn: document.getElementById("hamburger-btn"),
    mobileDrawer: document.getElementById("mobile-drawer"),
    mobileDrawerOverlay: document.getElementById("mobile-drawer-overlay"),
    searchTriggerBtns: document.querySelectorAll(".search-trigger-btn"),
    searchModal: document.getElementById("search-modal-backdrop"),
    searchInput: document.getElementById("search-input-field"),
    searchResultsList: document.getElementById("search-results-list"),
    searchCloseBtn: document.getElementById("search-close-btn"),

    // Toast
    toast: document.getElementById("toast-notice"),
    toastMsg: document.getElementById("toast-message"),

    // 3D Visual Stage
    hero3dStage: document.getElementById("hero-3d-stage"),
    hero3dCard1: document.getElementById("card-3d-1"),
    hero3dCard2: document.getElementById("card-3d-2"),
  };

  // =========================================================================
  // 5. TOAST FEEDBACK NOTIFIER
  // =========================================================================
  let toastTimer = null;
  function showToast(message) {
    if (!els.toast) return;
    if (els.toastMsg) els.toastMsg.textContent = message;
    els.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      els.toast.classList.remove("show");
    }, 2400);
  }

  // =========================================================================
  // 6. WORKSPACE STATUS & SIZE ANALYZER
  // =========================================================================
  function setStatus(message, type = "neutral") {
    if (!els.statusBanner || !els.statusText) return;
    els.statusBanner.className = `status-banner status-${type}`;
    els.statusText.textContent = message;
  }

  function updateMetrics(inputStr, outputStr) {
    const inputEncoder = new TextEncoder();
    const inBytes = inputEncoder.encode(inputStr || "").length;
    const inChars = (inputStr || "").length;

    const outEncoder = new TextEncoder();
    const outBytes = outEncoder.encode(outputStr || "").length;
    const outChars = (outputStr || "").length;

    if (els.inputCharCount)
      els.inputCharCount.textContent = inChars.toLocaleString();
    if (els.inputByteCount)
      els.inputByteCount.textContent = inBytes.toLocaleString();
    if (els.outputCharCount)
      els.outputCharCount.textContent = outChars.toLocaleString();
    if (els.outputByteCount)
      els.outputByteCount.textContent = outBytes.toLocaleString();

    // Size Analyzer
    if (els.analyzerOriginalSize) {
      els.analyzerOriginalSize.textContent = formatBytes(
        state.mode === "encode" ? inBytes : outBytes,
      );
    }
    if (els.analyzerEncodedSize) {
      els.analyzerEncodedSize.textContent = formatBytes(
        state.mode === "encode" ? outBytes : inBytes,
      );
    }
    if (els.analyzerOverheadPct) {
      const orig = state.mode === "encode" ? inBytes : outBytes;
      const enc = state.mode === "encode" ? outBytes : inBytes;
      if (orig > 0 && enc > 0) {
        const delta = Math.round(((enc - orig) / orig) * 100);
        els.analyzerOverheadPct.textContent =
          delta >= 0 ? `+${delta}%` : `${delta}%`;
      } else {
        els.analyzerOverheadPct.textContent = "0%";
      }
    }
  }

  function formatBytes(bytes) {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  // =========================================================================
  // 7. TEXT ENCODE / DECODE PROCESSOR
  // =========================================================================
  function processText() {
    const val = els.inputText ? els.inputText.value : "";

    if (!val) {
      if (els.outputText) els.outputText.value = "";
      setStatus("Ready — Enter text or Base64 above", "neutral");
      updateMetrics("", "");
      hideImagePreview();
      return;
    }

    try {
      if (state.mode === "encode") {
        const encoded = encodeTextToBase64(
          val,
          state.isUrlSafe,
          state.keepPadding,
          state.lineWrap,
        );
        if (els.outputText) els.outputText.value = encoded;
        setStatus(
          `Encoded successfully using UTF-8 (${state.isUrlSafe ? "URL-safe" : "Standard"} Base64)`,
          "success",
        );
        updateMetrics(val, encoded);
        saveHistory("encode", val, encoded);
        hideImagePreview();
      } else {
        // Decode mode
        const decoded = decodeBase64ToText(val);
        if (els.outputText) els.outputText.value = decoded;
        setStatus("Decoded successfully as UTF-8 text", "success");
        updateMetrics(val, decoded);
        saveHistory("decode", val, decoded);
        checkAndRenderImagePreview(val);
      }
    } catch (err) {
      if (els.outputText) els.outputText.value = "";
      setStatus(err.message || "Operation failed", "error");
      updateMetrics(val, "");
      hideImagePreview();
    }
  }

  function setMode(newMode) {
    if (state.mode === newMode) return;
    state.mode = newMode;

    if (newMode === "encode") {
      els.encodeBtn?.classList.add("active");
      els.decodeBtn?.classList.remove("active");
      if (els.inputPaneTitle)
        els.inputPaneTitle.textContent = "Text / Raw Input";
      if (els.outputPaneTitle)
        els.outputPaneTitle.textContent = "Base64 Output";
      if (els.inputText)
        els.inputText.placeholder =
          "Type, paste, or drop your UTF-8 text, Unicode, emojis, or code here...";
      if (els.outputText)
        els.outputText.placeholder =
          "Base64 encoded string will appear here...";
    } else {
      els.decodeBtn?.classList.add("active");
      els.encodeBtn?.classList.remove("active");
      if (els.inputPaneTitle)
        els.inputPaneTitle.textContent = "Base64 / Data URI Input";
      if (els.outputPaneTitle)
        els.outputPaneTitle.textContent = "Decoded Text Output";
      if (els.inputText)
        els.inputText.placeholder =
          "Paste Base64 string, URL-safe Base64, or data:image/... URI here to decode...";
      if (els.outputText)
        els.outputText.placeholder = "Decoded plain text will appear here...";
    }
    processText();
  }

  function swapInputOutput() {
    if (!els.inputText || !els.outputText) return;
    const currentOutput = els.outputText.value;
    if (!currentOutput) return;

    els.inputText.value = currentOutput;
    setMode(state.mode === "encode" ? "decode" : "encode");
    showToast("Swapped Input & Output");
  }

  function loadExample() {
    if (!els.inputText) return;
    if (state.mode === "encode") {
      els.inputText.value =
        "Hello Huzikit! 👋\nمرحبا بالعالم — 🚀 UTF-8 Multi-byte Test — 编码测试";
    } else {
      els.inputText.value =
        "SGVsbG8gSHV6aWtpdCEg8J+Riwrev9mK2KfYqNinINio2KfZhNi52KfZhNmFINKAlCDwn5qAIFVURi04IE11bHRpLWJ5dGUgVGVzdCDigJQg57yW56CB5rWL6K+V";
    }
    processText();
    showToast("Loaded Sample Example");
  }

  function autoDetectAndDecode() {
    const val = (els.inputText?.value || "").trim();
    if (!val) {
      showToast("Enter text or Base64 first");
      return;
    }

    // Heuristic: Does it look like Base64?
    // Data URI check or valid Base64 charset without long whitespace
    const isDataUri = val.startsWith("data:");
    const b64Pattern = /^[A-Za-z0-9+/_\-=\s]+$/;

    if (isDataUri || (b64Pattern.test(val) && val.length % 4 === 0)) {
      setMode("decode");
      showToast("Base64 pattern detected — switched to Decode mode");
    } else {
      setMode("encode");
      showToast("Plain text detected — switched to Encode mode");
    }
  }

  // =========================================================================
  // 8. IMAGE PREVIEW HANDLER
  // =========================================================================
  function checkAndRenderImagePreview(base64OrDataUri) {
    if (!els.imagePreviewCard || !els.imagePreviewImg) return;

    let dataUri = "";
    const trimmed = base64OrDataUri.trim();

    if (trimmed.startsWith("data:image/")) {
      dataUri = trimmed;
    } else {
      try {
        const bytes = base64ToBytes(trimmed);
        const mime = detectImageMime(bytes);
        if (mime) {
          dataUri = `data:${mime};base64,${trimmed}`;
        }
      } catch (e) {
        hideImagePreview();
        return;
      }
    }

    if (dataUri) {
      els.imagePreviewImg.onload = function () {
        if (els.imageDimensions) {
          els.imageDimensions.textContent = `${this.naturalWidth} × ${this.naturalHeight} px`;
        }
        els.imagePreviewCard.classList.add("active");
      };
      els.imagePreviewImg.onerror = function () {
        hideImagePreview();
      };
      els.imagePreviewImg.src = dataUri;
    } else {
      hideImagePreview();
    }
  }

  function hideImagePreview() {
    if (els.imagePreviewCard) {
      els.imagePreviewCard.classList.remove("active");
    }
  }

  // =========================================================================
  // 9. BINARY FILE ENCODING & DECODING
  // =========================================================================
  function handleFileSelected(file) {
    if (!file) return;

    state.currentFile = file;
    if (els.fileNameText) els.fileNameText.textContent = file.name;
    if (els.fileMetaSize) els.fileMetaSize.textContent = formatBytes(file.size);
    if (els.fileMetaMime)
      els.fileMetaMime.textContent = file.type || "application/octet-stream";
    if (els.fileMetaBox) els.fileMetaBox.classList.add("active");

    const reader = new FileReader();
    reader.onload = function (e) {
      const buffer = e.target.result;
      state.currentFileBytes = new Uint8Array(buffer);
      encodeCurrentFile();
    };
    reader.onerror = function () {
      showToast("Error reading file");
    };
    reader.readAsArrayBuffer(file);
  }

  function encodeCurrentFile() {
    if (!state.currentFileBytes) return;

    const base64 = bytesToBase64(
      state.currentFileBytes,
      state.isUrlSafe,
      state.keepPadding,
      state.lineWrap,
    );
    if (els.outputText) els.outputText.value = base64;
    setMode("encode");

    // Switch to Text tab to inspect output
    switchTab("text");
    setStatus(
      `File "${state.currentFile?.name}" successfully encoded to binary Base64`,
      "success",
    );
    updateMetrics(
      new TextDecoder().decode(state.currentFileBytes.subarray(0, 100)),
      base64,
    );
    showToast(`Encoded ${state.currentFile?.name}`);

    // If image, preview it
    if (state.currentFile && state.currentFile.type.startsWith("image/")) {
      checkAndRenderImagePreview(base64);
    }
  }

  function downloadDecodedFile() {
    const val = (els.outputText?.value || els.inputText?.value || "").trim();
    if (!val) {
      showToast("No Base64 data available to decode and download");
      return;
    }

    try {
      let b64 = val;
      let mimeType = "application/octet-stream";

      if (b64.startsWith("data:")) {
        const match = b64.match(/^data:([^;]+);base64,(.*)$/);
        if (match) {
          mimeType = match[1];
          b64 = match[2];
        }
      }

      const bytes = base64ToBytes(b64);
      const detected = detectImageMime(bytes);
      if (detected) mimeType = detected;

      const blob = new Blob([bytes], { type: mimeType });
      const url = URL.createObjectURL(blob);

      let filename = "decoded-file";
      if (mimeType === "image/png") filename += ".png";
      else if (mimeType === "image/jpeg") filename += ".jpg";
      else if (mimeType === "image/gif") filename += ".gif";
      else if (mimeType === "image/webp") filename += ".webp";
      else if (mimeType === "application/pdf") filename += ".pdf";
      else filename += ".bin";

      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Clean up memory
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      showToast(`Downloaded: ${filename}`);
    } catch (err) {
      showToast("Decode error: " + (err.message || "Cannot build file"));
    }
  }

  function generateDataUri() {
    const val = (els.outputText?.value || "").trim();
    if (!val) {
      showToast("Output is empty");
      return;
    }

    let mime = "text/plain";
    try {
      const bytes = base64ToBytes(val);
      const detected = detectImageMime(bytes);
      if (detected) mime = detected;
    } catch (e) {}

    const dataUri = `data:${mime};base64,${val}`;
    navigator.clipboard
      .writeText(dataUri)
      .then(() => {
        showToast("Data URI copied to clipboard!");
      })
      .catch(() => {
        if (els.outputText) els.outputText.value = dataUri;
        showToast("Data URI generated in output box");
      });
  }

  // =========================================================================
  // 10. BASE64 ↔ HEX & BYTE INSPECTOR
  // =========================================================================
  function convertBase64ToHex() {
    const val = (
      els.hexInput?.value ||
      els.outputText?.value ||
      els.inputText?.value ||
      ""
    ).trim();
    if (!val) {
      showToast("Enter Base64 first");
      return;
    }
    try {
      const bytes = base64ToBytes(val);
      const hex = bytesToHex(bytes);
      if (els.hexOutput) els.hexOutput.value = hex;
      renderByteTable(bytes);
      showToast("Converted Base64 to Hexadecimal");
    } catch (err) {
      showToast(err.message || "Invalid Base64");
    }
  }

  function convertHexToBase64() {
    const val = (els.hexInput?.value || "").trim();
    if (!val) {
      showToast("Enter Hex string first");
      return;
    }
    try {
      const bytes = hexToBytes(val);
      const b64 = bytesToBase64(
        bytes,
        state.isUrlSafe,
        state.keepPadding,
        state.lineWrap,
      );
      if (els.hexOutput) els.hexOutput.value = b64;
      renderByteTable(bytes);
      showToast("Converted Hex to Base64");
    } catch (err) {
      showToast(err.message || "Invalid Hex");
    }
  }

  function renderByteTable(bytes) {
    if (!els.byteTableBody) return;
    els.byteTableBody.innerHTML = "";

    const maxBytes = Math.min(bytes.length, 256); // Limit preview to avoid large DOM
    for (let i = 0; i < maxBytes; i += 16) {
      const row = document.createElement("tr");
      const offsetHex = i.toString(16).padStart(6, "0").toUpperCase();

      let hexCol = "";
      let asciiCol = "";

      for (let j = 0; j < 16; j++) {
        if (i + j < maxBytes) {
          const byte = bytes[i + j];
          hexCol += byte.toString(16).padStart(2, "0").toUpperCase() + " ";
          asciiCol +=
            byte >= 32 && byte <= 126 ? String.fromCharCode(byte) : ".";
        } else {
          hexCol += "   ";
        }
      }

      row.innerHTML = `
        <td style="color: var(--ink-faint); font-weight:600;">0x${offsetHex}</td>
        <td style="color: var(--primary);">${hexCol.trim()}</td>
        <td style="color: var(--ink-soft);">${asciiCol}</td>
      `;
      els.byteTableBody.appendChild(row);
    }
  }

  // =========================================================================
  // 11. BATCH FILE PROCESSING
  // =========================================================================
  function addFilesToBatch(files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      state.batchQueue.push({
        id: Date.now() + "-" + i,
        file: file,
        name: file.name,
        size: file.size,
        type: file.type || "application/octet-stream",
        status: "pending",
        base64: null,
      });
    }
    renderBatchQueue();
    showToast(`Added ${files.length} file(s) to queue`);
  }

  function renderBatchQueue() {
    if (!els.batchQueueList) return;
    els.batchQueueList.innerHTML = "";

    if (state.batchQueue.length === 0) {
      els.batchQueueList.innerHTML =
        '<div style="text-align:center; padding: 24px; color: var(--ink-faint);">Batch queue is empty. Drag and drop multiple files above.</div>';
      return;
    }

    state.batchQueue.forEach((item, idx) => {
      const div = document.createElement("div");
      div.className = "batch-queue-item";
      div.innerHTML = `
        <div class="batch-item-left">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          <div>
            <div class="batch-item-name" title="${item.name}">${item.name}</div>
            <div class="batch-item-size">${formatBytes(item.size)} • ${item.type}</div>
          </div>
        </div>
        <div class="batch-item-actions">
          <span class="batch-item-status status-${item.status === "done" ? "done" : "pending"}">${item.status === "done" ? "Encoded" : "Pending"}</span>
          ${
            item.status === "done"
              ? `
            <button class="btn-secondary" style="padding: 4px 8px;" onclick="window.huzikitDownloadBatchItem('${item.id}')">Download</button>
            <button class="btn-secondary" style="padding: 4px 8px;" onclick="window.huzikitCopyBatchItem('${item.id}')">Copy</button>
          `
              : ""
          }
          <button class="btn-secondary" style="padding: 4px 8px; color: var(--danger);" onclick="window.huzikitRemoveBatchItem('${item.id}')">×</button>
        </div>
      `;
      els.batchQueueList.appendChild(div);
    });
  }

  window.huzikitRemoveBatchItem = function (id) {
    state.batchQueue = state.batchQueue.filter((it) => it.id !== id);
    renderBatchQueue();
  };

  window.huzikitCopyBatchItem = function (id) {
    const item = state.batchQueue.find((it) => it.id === id);
    if (item && item.base64) {
      navigator.clipboard
        .writeText(item.base64)
        .then(() => showToast(`Copied Base64 of ${item.name}`));
    }
  };

  window.huzikitDownloadBatchItem = function (id) {
    const item = state.batchQueue.find((it) => it.id === id);
    if (item && item.base64) {
      const blob = new Blob([item.base64], {
        type: "text/plain;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${item.name}.base64.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      showToast(`Downloaded: ${item.name}.base64.txt`);
    }
  };

  function processBatchQueue() {
    const pendingItems = state.batchQueue.filter(
      (it) => it.status === "pending",
    );
    if (pendingItems.length === 0) {
      showToast("All files in batch are already encoded");
      return;
    }

    let processed = 0;
    pendingItems.forEach((item) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        const bytes = new Uint8Array(e.target.result);
        item.base64 = bytesToBase64(
          bytes,
          state.isUrlSafe,
          state.keepPadding,
          state.lineWrap,
        );
        item.status = "done";
        processed++;
        if (processed === pendingItems.length) {
          renderBatchQueue();
          showToast(`Finished encoding ${processed} file(s)!`);
        }
      };
      reader.readAsArrayBuffer(item.file);
    });
  }

  // =========================================================================
  // 12. LOCAL HISTORY (Privacy Safe & Non-leaking)
  // =========================================================================
  function loadHistory() {
    try {
      const stored = localStorage.getItem("huzikit_base64_history");
      if (stored) {
        state.history = JSON.parse(stored);
        renderHistory();
      }
    } catch (e) {}
  }

  function saveHistory(mode, input, output) {
    // Only save reasonable snippets (first 200 chars) to prevent LocalStorage bloat
    const item = {
      id: Date.now(),
      mode: mode,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      snippet: input.slice(0, 120),
      input: input.length > 5000 ? input.slice(0, 5000) : input,
      output: output.length > 5000 ? output.slice(0, 5000) : output,
    };

    state.history.unshift(item);
    if (state.history.length > 10) state.history.pop();

    try {
      localStorage.setItem(
        "huzikit_base64_history",
        JSON.stringify(state.history),
      );
      renderHistory();
    } catch (e) {}
  }

  function renderHistory() {
    if (!els.historyList) return;
    els.historyList.innerHTML = "";

    if (state.history.length === 0) {
      els.historyList.innerHTML =
        '<div style="color: var(--ink-faint); font-size: 0.85rem; padding: 12px 0;">No recent operations stored.</div>';
      return;
    }

    state.history.forEach((item) => {
      const div = document.createElement("div");
      div.className = "history-item";
      div.innerHTML = `
        <div class="history-item-left">
          <span class="history-mode-badge">${item.mode}</span>
          <span class="history-snippet" title="${item.snippet}">${item.snippet}</span>
        </div>
        <div class="history-item-actions">
          <span style="color: var(--ink-faint); font-size: 0.72rem; margin-right: 6px;">${item.time}</span>
          <button class="pane-tool-btn" onclick="window.huzikitRestoreHistory(${item.id})">Load</button>
          <button class="pane-tool-btn" onclick="window.huzikitDeleteHistory(${item.id})">×</button>
        </div>
      `;
      els.historyList.appendChild(div);
    });
  }

  window.huzikitRestoreHistory = function (id) {
    const item = state.history.find((it) => it.id === id);
    if (item && els.inputText) {
      els.inputText.value = item.input;
      setMode(item.mode);
      switchTab("text");
      showToast("Restored operation from history");
    }
  };

  window.huzikitDeleteHistory = function (id) {
    state.history = state.history.filter((it) => it.id !== id);
    try {
      localStorage.setItem(
        "huzikit_base64_history",
        JSON.stringify(state.history),
      );
      renderHistory();
    } catch (e) {}
  };

  // =========================================================================
  // 13. GLOBAL SEARCH MODAL (All 30 Tools)
  // =========================================================================
  function openSearchModal() {
    if (!els.searchModal) return;
    els.searchModal.classList.add("active");
    if (els.searchInput) {
      els.searchInput.value = "";
      els.searchInput.focus();
    }
    renderSearchResults("");
    document.body.style.overflow = "hidden";
  }

  function closeSearchModal() {
    if (!els.searchModal) return;
    els.searchModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  function renderSearchResults(query) {
    if (!els.searchResultsList) return;
    els.searchResultsList.innerHTML = "";

    const cleanQuery = query.toLowerCase().trim();
    const matched = HUZIKIT_TOOLS.filter((tool) => {
      if (!cleanQuery) return true;
      return (
        tool.name.toLowerCase().includes(cleanQuery) ||
        tool.category.toLowerCase().includes(cleanQuery) ||
        tool.keywords.toLowerCase().includes(cleanQuery)
      );
    });

    if (matched.length === 0) {
      els.searchResultsList.innerHTML = `
        <div class="search-empty-state">
          No matching tools found for "<strong>${escapeHtml(query)}</strong>".
        </div>
      `;
      return;
    }

    matched.forEach((tool, idx) => {
      const a = document.createElement("a");
      a.href = tool.url;
      a.className = `search-result-item ${idx === 0 ? "selected" : ""}`;
      a.innerHTML = `
        <div class="search-result-left">
          <div class="search-result-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <div>
            <div class="search-result-title">${tool.name}</div>
          </div>
        </div>
        <span class="search-result-badge">${tool.category}</span>
      `;
      els.searchResultsList.appendChild(a);
    });
  }

  function escapeHtml(str) {
    return str.replace(
      /[&<>'"]/g,
      (tag) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        })[tag] || tag,
    );
  }

  // =========================================================================
  // 14. ACCESSIBLE FAQ ACCORDION
  // =========================================================================
  function initFAQ() {
    const faqTriggers = document.querySelectorAll(".faq-trigger");
    faqTriggers.forEach((btn) => {
      btn.addEventListener("click", function () {
        const isExpanded = this.getAttribute("aria-expanded") === "true";
        const contentId = this.getAttribute("aria-controls");
        const content = document.getElementById(contentId);

        // Close other FAQs for clean single-view accordion
        faqTriggers.forEach((otherBtn) => {
          if (otherBtn !== btn) {
            otherBtn.setAttribute("aria-expanded", "false");
            const otherContent = document.getElementById(
              otherBtn.getAttribute("aria-controls"),
            );
            if (otherContent) otherContent.classList.remove("open");
          }
        });

        if (isExpanded) {
          this.setAttribute("aria-expanded", "false");
          if (content) content.classList.remove("open");
        } else {
          this.setAttribute("aria-expanded", "true");
          if (content) content.classList.add("open");
        }
      });
    });
  }

  // =========================================================================
  // 15. MOBILE MENU & ACCORDIONS
  // =========================================================================
  function initMobileMenu() {
    if (els.hamburgerBtn) {
      els.hamburgerBtn.addEventListener("click", function () {
        const isOpen = els.mobileDrawer?.classList.contains("active");
        if (isOpen) {
          closeMobileDrawer();
        } else {
          openMobileDrawer();
        }
      });
    }

    if (els.mobileDrawerOverlay) {
      els.mobileDrawerOverlay.addEventListener("click", closeMobileDrawer);
    }

    const accordionBtns = document.querySelectorAll(".mobile-accordion-btn");
    accordionBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const isExpanded = this.getAttribute("aria-expanded") === "true";
        const list = this.nextElementSibling;
        this.setAttribute("aria-expanded", !isExpanded);
        if (list) list.classList.toggle("open", !isExpanded);
      });
    });
  }

  function openMobileDrawer() {
    els.hamburgerBtn?.classList.add("is-active");
    els.mobileDrawer?.classList.add("active");
    els.mobileDrawerOverlay?.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMobileDrawer() {
    els.hamburgerBtn?.classList.remove("is-active");
    els.mobileDrawer?.classList.remove("active");
    els.mobileDrawerOverlay?.classList.remove("active");
    document.body.style.overflow = "";
  }

  // =========================================================================
  // 16. TAB NAVIGATION
  // =========================================================================
  function switchTab(tabName) {
    state.activeTab = tabName;
    els.tabBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === tabName);
    });
    els.tabPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === `tab-${tabName}`);
    });
  }

  // =========================================================================
  // 17. 3D HERO PERSPECTIVE INTERACTION
  // =========================================================================
  function init3DHeroVisual() {
    const stage = els.hero3dStage;
    if (!stage || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;

    const heroWrap = document.querySelector(".hero-visual-container");
    if (!heroWrap) return;

    heroWrap.addEventListener("mousemove", function (e) {
      const rect = heroWrap.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotX = (y / (rect.height / 2)) * -10;
      const rotY = (x / (rect.width / 2)) * 12;

      stage.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });

    heroWrap.addEventListener("mouseleave", function () {
      stage.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  }

  // =========================================================================
  // 18. INITIALIZE ALL EVENT LISTENERS
  // =========================================================================
  function initEvents() {
    // Mode switcher
    els.encodeBtn?.addEventListener("click", () => setMode("encode"));
    els.decodeBtn?.addEventListener("click", () => setMode("decode"));
    els.swapBtn?.addEventListener("click", swapInputOutput);
    els.clearBtn?.addEventListener("click", () => {
      if (els.inputText) els.inputText.value = "";
      if (els.outputText) els.outputText.value = "";
      processText();
      showToast("Cleared Workspace");
    });
    els.exampleBtn?.addEventListener("click", loadExample);
    els.autoDetectBtn?.addEventListener("click", autoDetectAndDecode);

    // Text input typing
    els.inputText?.addEventListener("input", () => {
      processText();
    });

    // Options toggles
    els.optUrlSafe?.addEventListener("change", function () {
      state.isUrlSafe = this.checked;
      processText();
    });
    els.optPadding?.addEventListener("change", function () {
      state.keepPadding = this.checked;
      processText();
    });
    els.optWrap?.addEventListener("change", function () {
      state.lineWrap = parseInt(this.value, 10) || 0;
      processText();
    });

    // Copy to clipboard
    els.copyBtn?.addEventListener("click", function () {
      const val = els.outputText ? els.outputText.value : "";
      if (!val) {
        showToast("Nothing to copy");
        return;
      }
      navigator.clipboard
        .writeText(val)
        .then(() => {
          showToast("Copied to clipboard!");
        })
        .catch(() => {
          // Fallback
          if (els.outputText) {
            els.outputText.select();
            document.execCommand("copy");
            showToast("Copied to clipboard!");
          }
        });
    });

    // Download text output
    els.downloadTextBtn?.addEventListener("click", function () {
      const val = els.outputText ? els.outputText.value : "";
      if (!val) {
        showToast("No output to download");
        return;
      }
      const blob = new Blob([val], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download =
        state.mode === "encode" ? "encoded-base64.txt" : "decoded-text.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      showToast("File downloaded");
    });

    // Download file & Data URI buttons
    els.downloadFileBtn?.addEventListener("click", downloadDecodedFile);
    els.dataUriBtn?.addEventListener("click", generateDataUri);

    // Tab buttons
    els.tabBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const tab = this.getAttribute("data-tab");
        if (tab) switchTab(tab);
      });
    });

    // File Dropzone & input
    if (els.fileDropzone && els.fileInput) {
      els.fileDropzone.addEventListener("click", () => els.fileInput.click());
      els.fileInput.addEventListener("change", function () {
        if (this.files && this.files[0]) handleFileSelected(this.files[0]);
      });

      ["dragenter", "dragover"].forEach((eventName) => {
        els.fileDropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          els.fileDropzone.classList.add("dragover");
        });
      });
      ["dragleave", "drop"].forEach((eventName) => {
        els.fileDropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          els.fileDropzone.classList.remove("dragover");
        });
      });
      els.fileDropzone.addEventListener("drop", (e) => {
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
          handleFileSelected(e.dataTransfer.files[0]);
        }
      });
    }

    if (els.fileActionEncode) {
      els.fileActionEncode.addEventListener("click", encodeCurrentFile);
    }

    // Hex Inspector controls
    els.btnBase64ToHex?.addEventListener("click", convertBase64ToHex);
    els.btnHexToBase64?.addEventListener("click", convertHexToBase64);

    // Batch Queue Dropzone & Controls
    if (els.batchDropzone && els.batchInput) {
      els.batchDropzone.addEventListener("click", () => els.batchInput.click());
      els.batchInput.addEventListener("change", function () {
        if (this.files && this.files.length) addFilesToBatch(this.files);
      });
      ["dragenter", "dragover"].forEach((eventName) => {
        els.batchDropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          els.batchDropzone.classList.add("dragover");
        });
      });
      ["dragleave", "drop"].forEach((eventName) => {
        els.batchDropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          els.batchDropzone.classList.remove("dragover");
        });
      });
      els.batchDropzone.addEventListener("drop", (e) => {
        if (
          e.dataTransfer &&
          e.dataTransfer.files &&
          e.dataTransfer.files.length
        ) {
          addFilesToBatch(e.dataTransfer.files);
        }
      });
    }

    els.btnBatchEncodeAll?.addEventListener("click", processBatchQueue);
    els.btnBatchClear?.addEventListener("click", () => {
      state.batchQueue = [];
      renderBatchQueue();
      showToast("Cleared batch queue");
    });

    // History Clear
    els.btnClearHistory?.addEventListener("click", () => {
      state.history = [];
      try {
        localStorage.removeItem("huzikit_base64_history");
      } catch (e) {}
      renderHistory();
      showToast("History cleared");
    });

    // Search events
    els.searchTriggerBtns.forEach((btn) => {
      btn.addEventListener("click", openSearchModal);
    });
    els.searchCloseBtn?.addEventListener("click", closeSearchModal);
    els.searchModal?.addEventListener("click", (e) => {
      if (e.target === els.searchModal) closeSearchModal();
    });
    els.searchInput?.addEventListener("input", function () {
      renderSearchResults(this.value);
    });

    // Desktop nav dropdowns
    const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");
    dropdownTriggers.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        const isOpen = this.getAttribute("aria-expanded") === "true";
        // Close others
        dropdownTriggers.forEach((other) => {
          if (other !== btn) {
            other.setAttribute("aria-expanded", "false");
            const menu = other.nextElementSibling;
            if (menu) menu.classList.remove("active");
          }
        });

        this.setAttribute("aria-expanded", !isOpen);
        const menu = this.nextElementSibling;
        if (menu) menu.classList.toggle("active", !isOpen);
      });
    });

    document.addEventListener("click", () => {
      dropdownTriggers.forEach((btn) => {
        btn.setAttribute("aria-expanded", "false");
        const menu = btn.nextElementSibling;
        if (menu) menu.classList.remove("active");
      });
    });

    // Keyboard Shortcuts (Ctrl+K / Cmd+K, Escape)
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearchModal();
      } else if (e.key === "Escape") {
        closeSearchModal();
        closeMobileDrawer();
        dropdownTriggers.forEach((btn) => {
          btn.setAttribute("aria-expanded", "false");
          const menu = btn.nextElementSibling;
          if (menu) menu.classList.remove("active");
        });
      }
    });
  }

  // =========================================================================
  // 19. APP INITIALIZATION
  // =========================================================================
  function init() {
    initEvents();
    initFAQ();
    initMobileMenu();
    init3DHeroVisual();
    loadHistory();

    // Default sample load to give users an immediate functional experience
    if (els.inputText) {
      els.inputText.value =
        "Hello Huzikit! 👋 Encode & decode Unicode, files & images safely.";
      processText();
    }
  }

  // Boot on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
