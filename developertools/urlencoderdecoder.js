/**
 * HUZIKIT — URL ENCODER / DECODER MASTER JAVASCRIPT
 * Brand: Huzikit (https://huzikit.com)
 * Pure Vanilla JavaScript — Zero heavy dependencies
 */

(function () {
  "use strict";

  // ---------------------------------------------------------------------------
  // 1. All 30 Locked Huzikit Tool Dataset for Global Search
  // ---------------------------------------------------------------------------
  const HUZIKIT_TOOLS = [
    // Text Tools
    {
      name: "Word Counter",
      category: "Text Tools",
      url: "/texttools/word-counter.html",
      keywords: "words characters count text reading time",
    },
    {
      name: "Character Counter",
      category: "Text Tools",
      url: "/texttools/character-counter.html",
      keywords: "letters length characters count space",
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
      keywords: "dedupe sort unique lines clean list",
    },
    {
      name: "Lorem Ipsum Generator",
      category: "Text Tools",
      url: "/texttools/loremipsumgenerator.html",
      keywords: "dummy text placeholder filler paragraphs",
    },
    {
      name: "Password Generator",
      category: "Text Tools",
      url: "/texttools/passwordgenerator.html",
      keywords: "secure random password strong credentials",
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      url: "/texttools/text-reverser.html",
      keywords: "reverse flip backwards string mirror",
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      url: "/texttools/onlinenotepad.html",
      keywords: "notes editor scratchpad draft local storage",
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
      keywords: "percent increase decrease math discount",
    },
    {
      name: "Calorie Calculator",
      category: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
      keywords: "nutrition diet bmr tdee fitness energy",
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      url: "/calculator/discount-calculator.html",
      keywords: "sale price savings off markdown tax",
    },
    {
      name: "Savings & Goal Calculator",
      category: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
      keywords: "investment interest target future wealth",
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
      keywords: "grades college semester grade point average",
    },

    // Image & PDF
    {
      name: "Image Compressor",
      category: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
      keywords: "reduce size compress png jpg webp optimize",
    },
    {
      name: "Image Resizer",
      category: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
      keywords: "dimensions scale crop width height resize",
    },
    {
      name: "PDF to Word",
      category: "Image & PDF",
      url: "/image&pdf/pdftowordconverter.html",
      keywords: "convert pdf docx document extract word",
    },
    {
      name: "JPG to PNG",
      category: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
      keywords: "convert image format transparent png jpeg",
    },
    {
      name: "Color Picker / HEX",
      category: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
      keywords: "palette rgb hsl hex color code eyedropper",
    },
    {
      name: "QR Code Generator",
      category: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
      keywords: "barcode qr url wifi vcard scan generator",
    },

    // Developer Tools
    {
      name: "JSON Formatter",
      category: "Developer",
      url: "/developertools/JSONFORMATTER.html",
      keywords: "prettify validator minify json parser tree",
    },
    {
      name: "Base64 Encoder/Decoder",
      category: "Developer",
      url: "/developertools/base64encoderdecoder.html",
      keywords: "base64 binary ascii convert decode encode",
    },
    {
      name: "URL Encoder/Decoder",
      category: "Developer",
      url: "/developertools/urlencoderdecoder.html",
      keywords: "percent encoding decode uri component query escape",
    },
    {
      name: "Meta Tag Generator",
      category: "Developer",
      url: "/developertools/meta-tag-generator.html",
      keywords: "seo open graph twitter card social tags",
    },
    {
      name: "Regex Tester",
      category: "Developer",
      url: "/developertools/regextester.html",
      keywords: "regular expression match patterns cheat sheet test",
    },
    {
      name: "Markdown to HTML",
      category: "Developer",
      url: "/developertools/markdownhtml.html",
      keywords: "markdown md preview html convert table render",
    },
    {
      name: "CSS Minifier",
      category: "Developer",
      url: "/developertools/cssminifier.html",
      keywords: "optimize compress stylesheets minify css clean",
    },
    {
      name: "Unix Timestamp",
      category: "Developer",
      url: "/developertools/unixtimestamp.html",
      keywords: "epoch time date convert milliseconds utc",
    },
  ];

  // ---------------------------------------------------------------------------
  // 2. Preset Examples
  // ---------------------------------------------------------------------------
  const PRESET_EXAMPLES = {
    search_url:
      "https://example.com/search?q=hello world&category=developer tools&page=1",
    query_param: "John Doe & Company: Sales & Marketing (2026)",
    unicode_arabic: "https://example.com/مرحبا-بالعالم/دليل?lang=ar&tag=تطوير",
    unicode_asian: "https://example.com/search?q=你好世界&city=東京&emoji=🚀✨",
    special_chars: "user=admin&token=a%2B/=?#:@$!*&callback=jsonp_func",
    complex_api:
      'https://api.huzikit.com/v1/data?filter={"status":"active","tags":["fast","secure"]}&redirect=https://huzikit.com/auth',
  };

  // ---------------------------------------------------------------------------
  // 3. State Management
  // ---------------------------------------------------------------------------
  const state = {
    mode: "encode_component", // 'encode_uri' | 'decode_uri' | 'encode_component' | 'decode_component'
    isLive: true,
    lastError: null,
    history: [],
    snippets: [],
    historyEnabled: true,
    debounceTimer: null,
  };

  // Safe localStorage helper
  const storage = {
    get(key, fallback) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : fallback;
      } catch (e) {
        return fallback;
      }
    },
    set(key, val) {
      try {
        localStorage.setItem(key, JSON.stringify(val));
      } catch (e) {
        // Safe fail
      }
    },
  };

  // ---------------------------------------------------------------------------
  // 4. Core Encoding / Decoding Engine
  // ---------------------------------------------------------------------------
  function processConversion(input, mode) {
    if (!input) {
      return { output: "", error: null };
    }

    try {
      let res = "";
      switch (mode) {
        case "encode_uri":
          res = encodeURI(input);
          break;
        case "decode_uri":
          res = decodeURI(input);
          break;
        case "encode_component":
          res = encodeURIComponent(input);
          break;
        case "decode_component":
          res = decodeURIComponent(input);
          break;
        default:
          res = encodeURIComponent(input);
      }
      return { output: res, error: null };
    } catch (err) {
      let friendlyMsg =
        "Invalid encoded URL sequence. Check the % escape sequence and try again.";
      if (err instanceof URIError) {
        friendlyMsg =
          "Malformed URI sequence: The input contains invalid percent-encoded bytes (such as incomplete % or non-hexadecimal digits).";
      }
      return { output: "", error: friendlyMsg };
    }
  }

  // Calculate UTF-8 byte length safely
  function getUtf8Bytes(str) {
    if (!str) return 0;
    try {
      return new TextEncoder().encode(str).length;
    } catch (e) {
      return str.length;
    }
  }

  // ---------------------------------------------------------------------------
  // 5. DOM Elements Cache
  // ---------------------------------------------------------------------------
  const DOM = {};

  function cacheDOMElements() {
    DOM.mainInput = document.getElementById("main-input");
    DOM.mainOutput = document.getElementById("main-output");
    DOM.smartBanner = document.getElementById("smart-suggestion-banner");
    DOM.smartText = document.getElementById("smart-suggestion-text");
    DOM.smartBtn = document.getElementById("smart-suggestion-btn");
    DOM.modeButtons = document.querySelectorAll(".btn-mode");
    DOM.liveToggle = document.getElementById("live-toggle");
    DOM.presetSelect = document.getElementById("preset-select");

    // Action buttons
    DOM.btnPrimary = document.getElementById("btn-primary-action");
    DOM.btnCopy = document.getElementById("btn-copy-output");
    DOM.btnSwap = document.getElementById("btn-swap");
    DOM.btnClear = document.getElementById("btn-clear");
    DOM.btnReset = document.getElementById("btn-reset");
    DOM.btnDownload = document.getElementById("btn-download-output");

    // Stats
    DOM.statInputChars = document.getElementById("stat-input-chars");
    DOM.statOutputChars = document.getElementById("stat-output-chars");
    DOM.statDiff = document.getElementById("stat-diff");
    DOM.statInputBytes = document.getElementById("stat-input-bytes");
    DOM.statOutputBytes = document.getElementById("stat-output-bytes");
    DOM.statEncodedCount = document.getElementById("stat-encoded-count");

    // Diff inspection
    DOM.diffInspectionBox = document.getElementById("diff-inspection-box");

    // URL Analyzer
    DOM.analyzerUrlInput = document.getElementById("analyzer-url-input");
    DOM.btnAnalyze = document.getElementById("btn-analyze-url");
    DOM.parsedProtocol = document.getElementById("parsed-protocol");
    DOM.parsedHost = document.getElementById("parsed-host");
    DOM.parsedPort = document.getElementById("parsed-port");
    DOM.parsedPath = document.getElementById("parsed-path");
    DOM.parsedQuery = document.getElementById("parsed-query");
    DOM.parsedHash = document.getElementById("parsed-hash");
    DOM.parsedOrigin = document.getElementById("parsed-origin");
    DOM.parsedAuth = document.getElementById("parsed-auth");

    // Query Param Editor
    DOM.paramsTbody = document.getElementById("params-tbody");
    DOM.btnAddParam = document.getElementById("btn-add-param");
    DOM.btnRebuildUrl = document.getElementById("btn-rebuild-url");
    DOM.rebuiltUrlPreview = document.getElementById("rebuilt-url-preview");

    // URL Builder
    DOM.builderProtocol = document.getElementById("builder-protocol");
    DOM.builderHost = document.getElementById("builder-host");
    DOM.builderPort = document.getElementById("builder-port");
    DOM.builderPath = document.getElementById("builder-path");
    DOM.builderQuery = document.getElementById("builder-query");
    DOM.builderHash = document.getElementById("builder-hash");
    DOM.builderResult = document.getElementById("builder-result");
    DOM.btnBuilderCopy = document.getElementById("btn-builder-copy");
    DOM.btnBuilderSend = document.getElementById("btn-builder-send");
    DOM.btnBuilderClear = document.getElementById("btn-builder-clear");

    // Batch Tool
    DOM.batchInput = document.getElementById("batch-input");
    DOM.batchMode = document.getElementById("batch-mode");
    DOM.batchIgnoreEmpty = document.getElementById("batch-ignore-empty");
    DOM.batchTrim = document.getElementById("batch-trim");
    DOM.btnProcessBatch = document.getElementById("btn-process-batch");
    DOM.batchTotalBadge = document.getElementById("batch-total-badge");
    DOM.batchSuccessBadge = document.getElementById("batch-success-badge");
    DOM.batchFailBadge = document.getElementById("batch-fail-badge");
    DOM.batchResultsList = document.getElementById("batch-results-list");
    DOM.btnBatchCopyAll = document.getElementById("btn-batch-copy-all");
    DOM.btnBatchDownload = document.getElementById("btn-batch-download");

    // History & Snippets
    DOM.historyList = document.getElementById("history-list");
    DOM.btnClearHistory = document.getElementById("btn-clear-history");
    DOM.historyToggle = document.getElementById("history-toggle");
    DOM.btnSaveSnippet = document.getElementById("btn-save-snippet");
    DOM.snippetsList = document.getElementById("snippets-list");

    // Navigation & Modals
    DOM.btnHamburger = document.getElementById("btn-hamburger");
    DOM.mobileNavDrawer = document.getElementById("mobile-nav-drawer");
    DOM.mobileNavBackdrop = document.getElementById("mobile-nav-backdrop");
    DOM.btnCloseMobile = document.getElementById("btn-close-mobile");
    DOM.searchBtn = document.getElementById("btn-open-search");
    DOM.searchModalBackdrop = document.getElementById("search-modal-backdrop");
    DOM.searchModal = document.getElementById("search-modal");
    DOM.searchField = document.getElementById("search-field");
    DOM.searchResultsBox = document.getElementById("search-results-box");
    DOM.btnCloseSearch = document.getElementById("btn-close-search");

    // Toast
    DOM.toastContainer = document.getElementById("toast-container");
  }

  // ---------------------------------------------------------------------------
  // 6. UI Synchronization & Tool Execution
  // ---------------------------------------------------------------------------
  function runTransformation(saveToHistory = false) {
    if (!DOM.mainInput || !DOM.mainOutput) return;

    const inputVal = DOM.mainInput.value;
    const { output, error } = processConversion(inputVal, state.mode);

    state.lastError = error;

    if (error) {
      DOM.mainOutput.textContent = error;
      DOM.mainOutput.classList.add("has-error");
    } else {
      DOM.mainOutput.textContent = output;
      DOM.mainOutput.classList.remove("has-error");
    }

    updateStats(inputVal, output, error);
    renderDiff(inputVal, output, error);
    smartDetectInput(inputVal);

    if (saveToHistory && inputVal.trim() && !error && state.historyEnabled) {
      addHistoryItem(state.mode, inputVal, output);
    }
  }

  function updateStats(input, output, error) {
    const inLen = input.length;
    const outLen = error ? 0 : output.length;
    const diff = outLen - inLen;

    const inBytes = getUtf8Bytes(input);
    const outBytes = error ? 0 : getUtf8Bytes(output);
    const percentMatches = output.match(/%[0-9A-Fa-f]{2}/g) || [];

    if (DOM.statInputChars)
      DOM.statInputChars.textContent = inLen.toLocaleString();
    if (DOM.statOutputChars)
      DOM.statOutputChars.textContent = outLen.toLocaleString();

    if (DOM.statDiff) {
      DOM.statDiff.textContent = (
        diff > 0 ? `+${diff}` : `${diff}`
      ).toLocaleString();
      DOM.statDiff.className =
        "stat-value " +
        (diff > 0 ? "delta-positive" : diff < 0 ? "delta-negative" : "");
    }

    if (DOM.statInputBytes)
      DOM.statInputBytes.textContent = inBytes.toLocaleString() + " B";
    if (DOM.statOutputBytes)
      DOM.statOutputBytes.textContent = outBytes.toLocaleString() + " B";
    if (DOM.statEncodedCount)
      DOM.statEncodedCount.textContent = percentMatches.length.toLocaleString();
  }

  // Safe Diff & Highlight Generator using DOM text nodes
  function renderDiff(input, output, error) {
    if (!DOM.diffInspectionBox) return;
    DOM.diffInspectionBox.innerHTML = "";

    if (error) {
      const errSpan = document.createElement("span");
      errSpan.style.color = "var(--error)";
      errSpan.textContent = "Conversion halted due to encoding syntax error.";
      DOM.diffInspectionBox.appendChild(errSpan);
      return;
    }

    if (!output) {
      const emptySpan = document.createElement("span");
      emptySpan.style.color = "var(--ink-faint)";
      emptySpan.textContent =
        "Type or paste content above to inspect transformed tokens.";
      DOM.diffInspectionBox.appendChild(emptySpan);
      return;
    }

    // Split output into percent-encoded tokens and raw text safely
    const regex = /(%[0-9A-Fa-f]{2})/g;
    let lastIndex = 0;
    let match;

    const fragment = document.createDocumentFragment();

    while ((match = regex.exec(output)) !== null) {
      // Prior plain text
      if (match.index > lastIndex) {
        const plainText = output.substring(lastIndex, match.index);
        fragment.appendChild(document.createTextNode(plainText));
      }

      // Highlighting token
      const tokenSpan = document.createElement("span");
      tokenSpan.className = "diff-encoded-token";
      tokenSpan.textContent = match[0];
      fragment.appendChild(tokenSpan);

      lastIndex = regex.lastIndex;
    }

    // Trailing text
    if (lastIndex < output.length) {
      fragment.appendChild(
        document.createTextNode(output.substring(lastIndex)),
      );
    }

    DOM.diffInspectionBox.appendChild(fragment);
  }

  // Non-destructive Smart Detection suggestion
  function smartDetectInput(val) {
    if (!DOM.smartBanner || !DOM.smartText || !DOM.smartBtn) return;

    if (!val || val.length < 3) {
      DOM.smartBanner.classList.remove("active");
      return;
    }

    const hasPercentSeq = /%[0-9A-Fa-f]{2}/.test(val);
    const hasHttpScheme = /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(val);
    const hasQueryParams = val.includes("?") && val.includes("=");

    let suggestion = null;

    if (
      hasPercentSeq &&
      (state.mode === "encode_uri" || state.mode === "encode_component")
    ) {
      suggestion = {
        text: "Input contains percent-encoded characters (%XX). Did you mean to Decode?",
        targetMode: hasHttpScheme ? "decode_uri" : "decode_component",
        btnText: hasHttpScheme
          ? "Switch to Decode URI"
          : "Switch to Decode Component",
      };
    } else if (
      hasHttpScheme &&
      hasQueryParams &&
      state.mode === "encode_component"
    ) {
      suggestion = {
        text: "Full URL with scheme detected. Encoding via Component will break the protocol & host.",
        targetMode: "encode_uri",
        btnText: "Switch to Encode URI",
      };
    } else if (
      !hasPercentSeq &&
      hasQueryParams &&
      state.mode === "decode_uri"
    ) {
      suggestion = {
        text: "Plain unencoded query parameters detected. Did you mean to Encode?",
        targetMode: "encode_uri",
        btnText: "Switch to Encode URI",
      };
    }

    if (suggestion) {
      DOM.smartText.textContent = suggestion.text;
      DOM.smartBtn.textContent = suggestion.btnText;
      DOM.smartBtn.onclick = () => {
        setMode(suggestion.targetMode);
        DOM.smartBanner.classList.remove("active");
      };
      DOM.smartBanner.classList.add("active");
    } else {
      DOM.smartBanner.classList.remove("active");
    }
  }

  function setMode(newMode) {
    state.mode = newMode;
    DOM.modeButtons.forEach((btn) => {
      if (btn.dataset.mode === newMode) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Update primary button text
    if (DOM.btnPrimary) {
      const modeNames = {
        encode_uri: "Encode Full URI",
        decode_uri: "Decode URI",
        encode_component: "Encode Component",
        decode_component: "Decode Component",
      };
      DOM.btnPrimary.querySelector(".btn-label").textContent =
        modeNames[newMode] || "Convert";
    }

    runTransformation(true);
  }

  // ---------------------------------------------------------------------------
  // 7. Clipboard & Download Utilities
  // ---------------------------------------------------------------------------
  function copyToClipboard(text, successMsg = "Copied to clipboard!") {
    if (!text) {
      showToast("Nothing to copy", "warning");
      return;
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => showToast(successMsg))
        .catch(() => fallbackCopy(text, successMsg));
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.left = "-999999px";
      textarea.style.top = "-999999px";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textarea);
      if (successful) {
        showToast(successMsg);
      } else {
        showToast("Unable to copy. Please select text manually.", "error");
      }
    } catch (err) {
      showToast("Copy failed.", "error");
    }
  }

  function downloadTextFile(filename, content) {
    if (!content) {
      showToast("No content to download", "warning");
      return;
    }
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 100);
    showToast(`Downloaded ${filename}`);
  }

  function showToast(message, type = "info") {
    if (!DOM.toastContainer) return;
    const toast = document.createElement("div");
    toast.className = "toast-msg";

    const iconSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg",
    );
    iconSvg.setAttribute("viewBox", "0 0 24 24");
    iconSvg.setAttribute("width", "16");
    iconSvg.setAttribute("height", "16");
    iconSvg.setAttribute("fill", "none");
    iconSvg.setAttribute("stroke", "currentColor");
    iconSvg.setAttribute("stroke-width", "2");
    iconSvg.setAttribute("stroke-linecap", "round");
    iconSvg.setAttribute("stroke-linejoin", "round");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M20 6L9 17l-5-5");
    iconSvg.appendChild(path);

    toast.appendChild(iconSvg);
    const span = document.createElement("span");
    span.textContent = message;
    toast.appendChild(span);

    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(12px)";
      toast.style.transition = "all 0.2s ease";
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 200);
    }, 2400);
  }

  // ---------------------------------------------------------------------------
  // 8. History & Snippets System (Local Storage)
  // ---------------------------------------------------------------------------
  function loadHistory() {
    state.history = storage.get("huzikit_url_history", []);
    renderHistory();
  }

  function addHistoryItem(mode, input, output) {
    if (!state.historyEnabled) return;

    // Avoid exact consecutive duplicate
    if (
      state.history.length > 0 &&
      state.history[0].input === input &&
      state.history[0].mode === mode
    ) {
      return;
    }

    const item = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 4),
      mode: mode,
      input: input.length > 200 ? input.substring(0, 200) + "…" : input,
      fullInput: input,
      output: output.length > 200 ? output.substring(0, 200) + "…" : output,
      fullOutput: output,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    state.history.unshift(item);
    if (state.history.length > 25) state.history.pop();
    storage.set("huzikit_url_history", state.history);
    renderHistory();
  }

  function renderHistory() {
    if (!DOM.historyList) return;
    DOM.historyList.innerHTML = "";

    if (state.history.length === 0) {
      const empty = document.createElement("div");
      empty.className = "search-empty";
      empty.textContent =
        "No transformation history yet. Process any URL to log operations locally.";
      DOM.historyList.appendChild(empty);
      return;
    }

    state.history.forEach((item) => {
      const card = document.createElement("div");
      card.className = "history-card";

      const details = document.createElement("div");
      details.className = "history-card-details";

      const meta = document.createElement("div");
      meta.className = "history-meta";

      const badge = document.createElement("span");
      badge.className = "history-badge";
      badge.textContent = item.mode.replace("_", " ").toUpperCase();

      const time = document.createElement("span");
      time.textContent = item.timestamp;

      meta.appendChild(badge);
      meta.appendChild(time);

      const preview = document.createElement("div");
      preview.className = "history-preview";
      preview.textContent = item.fullInput;

      details.appendChild(meta);
      details.appendChild(preview);

      const actions = document.createElement("div");
      actions.className = "history-actions";

      const btnRestore = document.createElement("button");
      btnRestore.className = "btn-text-action";
      btnRestore.textContent = "Restore";
      btnRestore.onclick = () => {
        if (DOM.mainInput) {
          DOM.mainInput.value = item.fullInput;
          setMode(item.mode);
          runTransformation(false);
          DOM.mainInput.scrollIntoView({ behavior: "smooth" });
          showToast("Restored from history");
        }
      };

      const btnCopy = document.createElement("button");
      btnCopy.className = "btn-text-action";
      btnCopy.textContent = "Copy";
      btnCopy.onclick = () =>
        copyToClipboard(item.fullOutput, "Copied output from history");

      actions.appendChild(btnRestore);
      actions.appendChild(btnCopy);

      card.appendChild(details);
      card.appendChild(actions);

      DOM.historyList.appendChild(card);
    });
  }

  function clearHistory() {
    state.history = [];
    storage.set("huzikit_url_history", []);
    renderHistory();
    showToast("History cleared");
  }

  // Saved Snippets
  function loadSnippets() {
    state.snippets = storage.get("huzikit_url_snippets", [
      {
        id: "1",
        title: "OAuth Callback Endpoint",
        val: "https://auth.example.com/oauth/v2/authorize?client_id=client_123&redirect_uri=https%3A%2F%2Fmyapp.com%2Fcallback&response_type=code&scope=openid%20profile%20email",
      },
      {
        id: "2",
        title: "Unicode Multi-language Query",
        val: "https://api.huzikit.com/translate?source=auto&target=ur&q=Developer%20Tools%20Suite",
      },
    ]);
    renderSnippets();
  }

  function renderSnippets() {
    if (!DOM.snippetsList) return;
    DOM.snippetsList.innerHTML = "";

    if (state.snippets.length === 0) {
      const empty = document.createElement("div");
      empty.className = "search-empty";
      empty.textContent =
        "No saved snippets yet. Save frequently used URLs below.";
      DOM.snippetsList.appendChild(empty);
      return;
    }

    state.snippets.forEach((snippet) => {
      const card = document.createElement("div");
      card.className = "history-card";

      const details = document.createElement("div");
      details.className = "history-card-details";

      const title = document.createElement("div");
      title.style.fontWeight = "600";
      title.style.fontSize = "0.875rem";
      title.textContent = snippet.title;

      const preview = document.createElement("div");
      preview.className = "history-preview";
      preview.textContent = snippet.val;

      details.appendChild(title);
      details.appendChild(preview);

      const actions = document.createElement("div");
      actions.className = "history-actions";

      const btnLoad = document.createElement("button");
      btnLoad.className = "btn-text-action";
      btnLoad.textContent = "Load";
      btnLoad.onclick = () => {
        if (DOM.mainInput) {
          DOM.mainInput.value = snippet.val;
          runTransformation(true);
          DOM.mainInput.scrollIntoView({ behavior: "smooth" });
          showToast(`Loaded snippet: ${snippet.title}`);
        }
      };

      const btnDel = document.createElement("button");
      btnDel.className = "btn-text-action";
      btnDel.textContent = "Delete";
      btnDel.onclick = () => {
        state.snippets = state.snippets.filter((s) => s.id !== snippet.id);
        storage.set("huzikit_url_snippets", state.snippets);
        renderSnippets();
        showToast("Snippet deleted");
      };

      actions.appendChild(btnLoad);
      actions.appendChild(btnDel);

      card.appendChild(details);
      card.appendChild(actions);

      DOM.snippetsList.appendChild(card);
    });
  }

  function saveCurrentAsSnippet() {
    const inputVal = DOM.mainInput ? DOM.mainInput.value.trim() : "";
    if (!inputVal) {
      showToast("Enter a URL first to save snippet", "warning");
      return;
    }

    const title = prompt(
      "Enter a label for this URL snippet:",
      "Custom URL Example",
    );
    if (!title) return;

    const newSnippet = {
      id: Date.now().toString(36),
      title: title.trim(),
      val: inputVal,
    };

    state.snippets.unshift(newSnippet);
    storage.set("huzikit_url_snippets", state.snippets);
    renderSnippets();
    showToast("Snippet saved locally");
  }

  // ---------------------------------------------------------------------------
  // 9. URL Parser / Analyzer Module
  // ---------------------------------------------------------------------------
  function parseCurrentURL(urlStr) {
    if (!urlStr) {
      showToast("Please provide a URL to analyze", "warning");
      return;
    }

    let parsed = null;
    let fallbackUsed = false;

    try {
      parsed = new URL(urlStr);
    } catch (e) {
      // Attempt prepending https:// if missing scheme
      try {
        parsed = new URL("https://" + urlStr);
        fallbackUsed = true;
      } catch (err) {
        showToast(
          "Invalid URL format. Include valid hostname or scheme.",
          "error",
        );
        return;
      }
    }

    if (DOM.parsedProtocol)
      DOM.parsedProtocol.textContent = parsed.protocol || "(none)";
    if (DOM.parsedHost)
      DOM.parsedHost.textContent = parsed.hostname || "(none)";
    if (DOM.parsedPort) DOM.parsedPort.textContent = parsed.port || "(default)";
    if (DOM.parsedPath) DOM.parsedPath.textContent = parsed.pathname || "/";
    if (DOM.parsedQuery)
      DOM.parsedQuery.textContent = parsed.search || "(none)";
    if (DOM.parsedHash) DOM.parsedHash.textContent = parsed.hash || "(none)";
    if (DOM.parsedOrigin)
      DOM.parsedOrigin.textContent = parsed.origin || "(none)";
    if (DOM.parsedAuth) {
      const hasAuth = Boolean(parsed.username || parsed.password);
      DOM.parsedAuth.textContent = hasAuth
        ? "Credentials Present (Masked for privacy)"
        : "None";
    }

    // Populate Query Parameter Analyzer with the parsed search string
    populateQueryParamsFromSearch(parsed.search);

    showToast(
      fallbackUsed
        ? "Parsed URL (Assumed https://)"
        : "URL Analyzed Successfully",
    );
  }

  // ---------------------------------------------------------------------------
  // 10. Query Parameter Analyzer & Editor Module
  // ---------------------------------------------------------------------------
  // Safe query parsing preserving duplicate keys!
  let currentParamsList = [];

  function populateQueryParamsFromSearch(searchStr) {
    currentParamsList = [];
    if (!searchStr || searchStr === "?") {
      renderParamsTable();
      return;
    }

    const cleanStr = searchStr.startsWith("?") ? searchStr.slice(1) : searchStr;
    const pairs = cleanStr.split("&");

    pairs.forEach((pair) => {
      if (!pair) return;
      const eqIdx = pair.indexOf("=");
      let rawKey = "";
      let rawVal = "";

      if (eqIdx >= 0) {
        rawKey = pair.slice(0, eqIdx);
        rawVal = pair.slice(eqIdx + 1);
      } else {
        rawKey = pair;
        rawVal = "";
      }

      currentParamsList.push({
        id: Math.random().toString(36).substr(2, 6),
        key: rawKey,
        value: rawVal,
      });
    });

    renderParamsTable();
  }

  function renderParamsTable() {
    if (!DOM.paramsTbody) return;
    DOM.paramsTbody.innerHTML = "";

    if (currentParamsList.length === 0) {
      const row = document.createElement("tr");
      const td = document.createElement("td");
      td.colSpan = 4;
      td.style.textAlign = "center";
      td.style.padding = "24px 16px";
      td.style.color = "var(--ink-faint)";
      td.textContent =
        'No query parameters present. Click "Add Parameter" or paste a URL above.';
      row.appendChild(td);
      DOM.paramsTbody.appendChild(row);
      updateRebuiltUrlPreview();
      return;
    }

    currentParamsList.forEach((param, index) => {
      const row = document.createElement("tr");

      // Key Cell
      const tdKey = document.createElement("td");
      const keyInput = document.createElement("input");
      keyInput.className = "param-input-edit";
      keyInput.value = param.key;
      keyInput.placeholder = "key";
      keyInput.oninput = (e) => {
        param.key = e.target.value;
        updateRebuiltUrlPreview();
      };
      tdKey.appendChild(keyInput);

      // Value Cell
      const tdVal = document.createElement("td");
      const valInput = document.createElement("input");
      valInput.className = "param-input-edit";
      valInput.value = param.value;
      valInput.placeholder = "value";
      valInput.oninput = (e) => {
        param.value = e.target.value;
        updateRebuiltUrlPreview();
      };
      tdVal.appendChild(valInput);

      // Decoded Representation
      const tdDecoded = document.createElement("td");
      tdDecoded.className = "param-val";
      tdDecoded.style.fontFamily = "var(--font-mono)";
      tdDecoded.style.fontSize = "0.8125rem";
      try {
        const decVal = decodeURIComponent(param.value.replace(/\+/g, " "));
        tdDecoded.textContent = decVal || "—";
      } catch (e) {
        tdDecoded.textContent = "(invalid % sequence)";
        tdDecoded.style.color = "var(--error)";
      }

      // Actions Cell
      const tdActions = document.createElement("td");
      tdActions.style.whiteSpace = "nowrap";

      // Encode button
      const btnEnc = document.createElement("button");
      btnEnc.className = "btn-text-action";
      btnEnc.textContent = "Encode";
      btnEnc.onclick = () => {
        param.value = encodeURIComponent(param.value);
        valInput.value = param.value;
        renderParamsTable();
      };

      // Decode button
      const btnDec = document.createElement("button");
      btnDec.className = "btn-text-action";
      btnDec.textContent = "Decode";
      btnDec.onclick = () => {
        try {
          param.value = decodeURIComponent(param.value.replace(/\+/g, " "));
          valInput.value = param.value;
          renderParamsTable();
        } catch (e) {
          showToast("Cannot decode: invalid percent sequence", "error");
        }
      };

      // Duplicate button
      const btnDup = document.createElement("button");
      btnDup.className = "btn-text-action";
      btnDup.textContent = "Duplicate";
      btnDup.onclick = () => {
        currentParamsList.splice(index + 1, 0, {
          id: Math.random().toString(36).substr(2, 6),
          key: param.key,
          value: param.value,
        });
        renderParamsTable();
      };

      // Delete button
      const btnDel = document.createElement("button");
      btnDel.className = "btn-icon-cell";
      btnDel.title = "Remove Parameter";
      btnDel.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      `;
      btnDel.onclick = () => {
        currentParamsList.splice(index, 1);
        renderParamsTable();
      };

      tdActions.appendChild(btnEnc);
      tdActions.appendChild(btnDec);
      tdActions.appendChild(btnDup);
      tdActions.appendChild(btnDel);

      row.appendChild(tdKey);
      row.appendChild(tdVal);
      row.appendChild(tdDecoded);
      row.appendChild(tdActions);

      DOM.paramsTbody.appendChild(row);
    });

    updateRebuiltUrlPreview();
  }

  function addParamRow() {
    currentParamsList.push({
      id: Math.random().toString(36).substr(2, 6),
      key: "param_" + (currentParamsList.length + 1),
      value: "",
    });
    renderParamsTable();
  }

  function updateRebuiltUrlPreview() {
    if (!DOM.rebuiltUrlPreview) return;

    if (currentParamsList.length === 0) {
      DOM.rebuiltUrlPreview.textContent = "(no parameters)";
      return;
    }

    const queryStr = currentParamsList
      .map((p) => {
        const k = p.key.trim();
        return p.value !== "" ? `${k}=${p.value}` : k;
      })
      .filter(Boolean)
      .join("&");

    DOM.rebuiltUrlPreview.textContent = queryStr
      ? "?" + queryStr
      : "(empty query)";
  }

  // ---------------------------------------------------------------------------
  // 11. URL Builder Module
  // ---------------------------------------------------------------------------
  function generateBuilderURL() {
    if (!DOM.builderResult) return "";

    const protocol = DOM.builderProtocol
      ? DOM.builderProtocol.value
      : "https://";
    let host = DOM.builderHost ? DOM.builderHost.value.trim() : "example.com";
    const port = DOM.builderPort ? DOM.builderPort.value.trim() : "";
    let path = DOM.builderPath ? DOM.builderPath.value.trim() : "";
    const query = DOM.builderQuery ? DOM.builderQuery.value.trim() : "";
    let hash = DOM.builderHash ? DOM.builderHash.value.trim() : "";

    if (!host) host = "example.com";

    // Ensure path starts with slash if not empty
    if (path && !path.startsWith("/")) {
      path = "/" + path;
    }

    let urlString = `${protocol}${host}`;
    if (port) {
      urlString += `:${port}`;
    }
    urlString += path || "/";

    if (query) {
      urlString += query.startsWith("?") ? query : `?${query}`;
    }

    if (hash) {
      urlString += hash.startsWith("#") ? hash : `#${hash}`;
    }

    DOM.builderResult.textContent = urlString;
    return urlString;
  }

  // ---------------------------------------------------------------------------
  // 12. Batch URL Encoder / Decoder
  // ---------------------------------------------------------------------------
  let batchResults = [];

  function processBatchTool() {
    if (!DOM.batchInput) return;

    const raw = DOM.batchInput.value;
    const mode = DOM.batchMode ? DOM.batchMode.value : "encode_component";
    const ignoreEmpty = DOM.batchIgnoreEmpty
      ? DOM.batchIgnoreEmpty.checked
      : true;
    const trimLines = DOM.batchTrim ? DOM.batchTrim.checked : true;

    let lines = raw.split(/\r?\n/);
    if (trimLines) {
      lines = lines.map((l) => l.trim());
    }
    if (ignoreEmpty) {
      lines = lines.filter((l) => l.length > 0);
    }

    batchResults = [];
    let successCount = 0;
    let failCount = 0;

    lines.forEach((line) => {
      const { output, error } = processConversion(line, mode);
      if (error) {
        failCount++;
        batchResults.push({ original: line, result: error, hasError: true });
      } else {
        successCount++;
        batchResults.push({ original: line, result: output, hasError: false });
      }
    });

    if (DOM.batchTotalBadge) DOM.batchTotalBadge.textContent = lines.length;
    if (DOM.batchSuccessBadge) DOM.batchSuccessBadge.textContent = successCount;
    if (DOM.batchFailBadge) DOM.batchFailBadge.textContent = failCount;

    renderBatchResults();
    showToast(`Batch finished: ${successCount} ok, ${failCount} failed`);
  }

  function renderBatchResults() {
    if (!DOM.batchResultsList) return;
    DOM.batchResultsList.innerHTML = "";

    if (batchResults.length === 0) {
      const empty = document.createElement("div");
      empty.className = "search-empty";
      empty.textContent = "Batch results will appear here once processed.";
      DOM.batchResultsList.appendChild(empty);
      return;
    }

    batchResults.forEach((item, idx) => {
      const row = document.createElement("div");
      row.className = "batch-item";

      const originalDiv = document.createElement("div");
      originalDiv.className = "batch-item-input";
      originalDiv.textContent = `#${idx + 1} Raw: ${item.original}`;

      const resDiv = document.createElement("div");
      resDiv.className = "batch-item-output";
      if (item.hasError) {
        resDiv.style.color = "var(--error)";
        resDiv.textContent = `Error: ${item.result}`;
      } else {
        resDiv.textContent = item.result;
      }

      row.appendChild(originalDiv);
      row.appendChild(resDiv);

      row.style.cursor = "pointer";
      row.title = "Click to copy result";
      row.onclick = () =>
        copyToClipboard(item.result, `Copied line #${idx + 1}`);

      DOM.batchResultsList.appendChild(row);
    });
  }

  // ---------------------------------------------------------------------------
  // 13. Special Characters Interactive Tester
  // ---------------------------------------------------------------------------
  const SPECIAL_CHAR_LIST = [
    { char: " ", name: "Space", rfc: "Reserved/Component" },
    { char: "&", name: "Ampersand", rfc: "Sub-delimiter" },
    { char: "=", name: "Equals", rfc: "Sub-delimiter" },
    { char: "?", name: "Question Mark", rfc: "Query Start" },
    { char: "#", name: "Hash / Anchor", rfc: "Fragment" },
    { char: "%", name: "Percent Sign", rfc: "Escape Prefix" },
    { char: "+", name: "Plus Sign", rfc: "Space or Sub-del" },
    { char: "/", name: "Slash", rfc: "Path Segment" },
    { char: ":", name: "Colon", rfc: "Scheme / Port" },
    { char: ";", name: "Semicolon", rfc: "Sub-delimiter" },
    { char: "@", name: "At Symbol", rfc: "Userinfo Delim" },
    { char: "$", name: "Dollar Sign", rfc: "Sub-delimiter" },
    { char: ",", name: "Comma", rfc: "Sub-delimiter" },
    { char: "!", name: "Exclamation", rfc: "Sub-delimiter" },
    { char: "'", name: "Single Quote", rfc: "Sub-delimiter" },
    { char: "(", name: "Left Paren", rfc: "Sub-delimiter" },
    { char: ")", name: "Right Paren", rfc: "Sub-delimiter" },
    { char: "*", name: "Asterisk", rfc: "Sub-delimiter" },
  ];

  function renderCharsetGrid() {
    const grid = document.getElementById("special-charset-grid");
    if (!grid) return;
    grid.innerHTML = "";

    SPECIAL_CHAR_LIST.forEach((item) => {
      const encoded = encodeURIComponent(item.char);
      const card = document.createElement("div");
      card.className = "char-card";
      card.title = `Click to test ${item.name} in main workspace`;

      const sym = document.createElement("div");
      sym.className = "char-symbol";
      sym.textContent = item.char === " " ? "␣" : item.char;

      const code = document.createElement("div");
      code.className = "char-code";
      code.textContent = encoded;

      const desc = document.createElement("div");
      desc.className = "char-desc";
      desc.textContent = item.name;

      card.appendChild(sym);
      card.appendChild(code);
      card.appendChild(desc);

      card.onclick = () => {
        if (DOM.mainInput) {
          DOM.mainInput.value += item.char;
          runTransformation(true);
          DOM.mainInput.scrollIntoView({ behavior: "smooth" });
          showToast(`Appended '${item.char}' (${encoded}) to input`);
        }
      };

      grid.appendChild(card);
    });
  }

  // ---------------------------------------------------------------------------
  // 14. Global Search Modal
  // ---------------------------------------------------------------------------
  function setupGlobalSearch() {
    if (!DOM.searchBtn || !DOM.searchModalBackdrop) return;

    function openSearch() {
      DOM.searchModalBackdrop.classList.add("active");
      if (DOM.searchField) {
        DOM.searchField.value = "";
        setTimeout(() => DOM.searchField.focus(), 50);
      }
      renderSearchResults("");
    }

    function closeSearch() {
      DOM.searchModalBackdrop.classList.remove("active");
    }

    DOM.searchBtn.onclick = openSearch;
    if (DOM.btnCloseSearch) DOM.btnCloseSearch.onclick = closeSearch;

    DOM.searchModalBackdrop.onclick = (e) => {
      if (e.target === DOM.searchModalBackdrop) closeSearch();
    };

    if (DOM.searchField) {
      DOM.searchField.oninput = (e) => {
        renderSearchResults(e.target.value.trim());
      };
    }

    // Keyboard shortcuts (Ctrl+K / Cmd+K / Esc)
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearch();
      } else if (e.key === "Escape") {
        closeSearch();
        closeMobileMenu();
      }
    });
  }

  function renderSearchResults(query) {
    if (!DOM.searchResultsBox) return;
    DOM.searchResultsBox.innerHTML = "";

    const lower = query.toLowerCase();
    const matches = HUZIKIT_TOOLS.filter((tool) => {
      if (!query) return true;
      return (
        tool.name.toLowerCase().includes(lower) ||
        tool.category.toLowerCase().includes(lower) ||
        tool.keywords.toLowerCase().includes(lower) ||
        tool.url.toLowerCase().includes(lower)
      );
    });

    if (matches.length === 0) {
      const empty = document.createElement("div");
      empty.className = "search-empty";
      empty.textContent = `No tools matching "${query}". Check spelling or try a broader category.`;
      DOM.searchResultsBox.appendChild(empty);
      return;
    }

    // Group by category
    const categories = [
      "Developer",
      "Text Tools",
      "Calculators",
      "Image & PDF",
    ];

    categories.forEach((cat) => {
      const catTools = matches.filter((t) => t.category === cat);
      if (catTools.length === 0) return;

      const groupTitle = document.createElement("div");
      groupTitle.className = "search-result-group-title";
      groupTitle.textContent = cat;
      DOM.searchResultsBox.appendChild(groupTitle);

      catTools.forEach((tool) => {
        const item = document.createElement("a");
        item.className = "search-result-item";
        item.href = tool.url;

        const info = document.createElement("div");
        info.className = "search-result-info";

        const name = document.createElement("div");
        name.className = "search-result-name";
        name.textContent = tool.name;

        const path = document.createElement("div");
        path.className = "search-result-path";
        path.textContent = tool.url;

        info.appendChild(name);
        info.appendChild(path);

        const badge = document.createElement("span");
        badge.className = "search-result-cat";
        badge.textContent = tool.category;

        item.appendChild(info);
        item.appendChild(badge);

        DOM.searchResultsBox.appendChild(item);
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 15. Mobile Navigation
  // ---------------------------------------------------------------------------
  function openMobileMenu() {
    if (DOM.mobileNavDrawer) DOM.mobileNavDrawer.classList.add("active");
    if (DOM.mobileNavBackdrop) DOM.mobileNavBackdrop.classList.add("active");
    if (DOM.btnHamburger)
      DOM.btnHamburger.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  }

  function closeMobileMenu() {
    if (DOM.mobileNavDrawer) DOM.mobileNavDrawer.classList.remove("active");
    if (DOM.mobileNavBackdrop) DOM.mobileNavBackdrop.classList.remove("active");
    if (DOM.btnHamburger)
      DOM.btnHamburger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  function setupMobileNavigation() {
    if (DOM.btnHamburger) DOM.btnHamburger.onclick = openMobileMenu;
    if (DOM.btnCloseMobile) DOM.btnCloseMobile.onclick = closeMobileMenu;
    if (DOM.mobileNavBackdrop) DOM.mobileNavBackdrop.onclick = closeMobileMenu;

    // Accordions inside mobile menu
    const accordions = document.querySelectorAll(".mobile-accordion-header");
    accordions.forEach((btn) => {
      btn.onclick = () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", !expanded);
        const content = btn.nextElementSibling;
        if (content) {
          content.classList.toggle("open", !expanded);
        }
      };
    });
  }

  // ---------------------------------------------------------------------------
  // 16. FAQ Accordion
  // ---------------------------------------------------------------------------
  function setupFAQAccordions() {
    const faqTriggers = document.querySelectorAll(".faq-trigger");
    faqTriggers.forEach((trigger) => {
      trigger.onclick = () => {
        const isExpanded = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", !isExpanded);
        const panel = trigger.nextElementSibling;
        if (panel) {
          panel.classList.toggle("open", !isExpanded);
        }
      };
    });
  }

  // ---------------------------------------------------------------------------
  // 17. Secondary Tab Switcher
  // ---------------------------------------------------------------------------
  function setupTabs() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const moduleCards = document.querySelectorAll(".module-card");

    tabButtons.forEach((btn) => {
      btn.onclick = () => {
        const targetId = btn.dataset.target;
        tabButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        moduleCards.forEach((card) => {
          if (card.id === targetId) {
            card.classList.add("active");
          } else {
            card.classList.remove("active");
          }
        });
      };
    });
  }

  // ---------------------------------------------------------------------------
  // 18. Event Listeners Setup
  // ---------------------------------------------------------------------------
  function setupEventListeners() {
    // Mode Buttons
    DOM.modeButtons.forEach((btn) => {
      btn.onclick = () => setMode(btn.dataset.mode);
    });

    // Primary action
    if (DOM.btnPrimary) {
      DOM.btnPrimary.onclick = () => runTransformation(true);
    }

    // Live mode input listener
    if (DOM.mainInput) {
      DOM.mainInput.oninput = () => {
        if (state.isLive) {
          clearTimeout(state.debounceTimer);
          state.debounceTimer = setTimeout(() => {
            runTransformation(false);
          }, 80);
        } else {
          smartDetectInput(DOM.mainInput.value);
        }
      };
    }

    // Live switch toggle
    if (DOM.liveToggle) {
      DOM.liveToggle.onchange = (e) => {
        state.isLive = e.target.checked;
        if (state.isLive) runTransformation(false);
      };
    }

    // Presets dropdown
    if (DOM.presetSelect) {
      DOM.presetSelect.onchange = (e) => {
        const key = e.target.value;
        if (PRESET_EXAMPLES[key]) {
          DOM.mainInput.value = PRESET_EXAMPLES[key];
          runTransformation(true);
          showToast("Loaded example");
        }
        DOM.presetSelect.value = "";
      };
    }

    // Swap input and output
    if (DOM.btnSwap) {
      DOM.btnSwap.onclick = () => {
        if (!DOM.mainOutput || DOM.mainOutput.classList.contains("has-error")) {
          showToast("Cannot swap: output has errors or is empty", "warning");
          return;
        }
        const temp = DOM.mainInput.value;
        DOM.mainInput.value = DOM.mainOutput.textContent;
        // Invert mode logically
        if (state.mode === "encode_uri") setMode("decode_uri");
        else if (state.mode === "decode_uri") setMode("encode_uri");
        else if (state.mode === "encode_component") setMode("decode_component");
        else if (state.mode === "decode_component") setMode("encode_component");
        else runTransformation(true);
        showToast("Swapped input & output");
      };
    }

    // Copy output
    if (DOM.btnCopy) {
      DOM.btnCopy.onclick = () => {
        if (DOM.mainOutput) {
          copyToClipboard(
            DOM.mainOutput.textContent,
            "Output copied to clipboard!",
          );
        }
      };
    }

    // Clear
    if (DOM.btnClear) {
      DOM.btnClear.onclick = () => {
        if (DOM.mainInput) DOM.mainInput.value = "";
        if (DOM.mainOutput) {
          DOM.mainOutput.textContent = "";
          DOM.mainOutput.classList.remove("has-error");
        }
        updateStats("", "", null);
        renderDiff("", "", null);
        if (DOM.smartBanner) DOM.smartBanner.classList.remove("active");
        showToast("Cleared input and output");
      };
    }

    // Reset
    if (DOM.btnReset) {
      DOM.btnReset.onclick = () => {
        if (DOM.mainInput) DOM.mainInput.value = "";
        if (DOM.mainOutput) {
          DOM.mainOutput.textContent = "";
          DOM.mainOutput.classList.remove("has-error");
        }
        setMode("encode_component");
        if (DOM.liveToggle) DOM.liveToggle.checked = true;
        state.isLive = true;
        updateStats("", "", null);
        renderDiff("", "", null);
        if (DOM.smartBanner) DOM.smartBanner.classList.remove("active");
        showToast("Tool reset to default state");
      };
    }

    // Download text output
    if (DOM.btnDownload) {
      DOM.btnDownload.onclick = () => {
        if (DOM.mainOutput && DOM.mainOutput.textContent) {
          downloadTextFile(
            "huzikit-url-output.txt",
            DOM.mainOutput.textContent,
          );
        } else {
          showToast("Nothing to download", "warning");
        }
      };
    }

    // Analyzer actions
    if (DOM.btnAnalyze) {
      DOM.btnAnalyze.onclick = () => {
        const urlToParse = DOM.analyzerUrlInput
          ? DOM.analyzerUrlInput.value.trim()
          : "";
        parseCurrentURL(
          urlToParse || (DOM.mainInput ? DOM.mainInput.value.trim() : ""),
        );
      };
    }

    // Query params actions
    if (DOM.btnAddParam) DOM.btnAddParam.onclick = addParamRow;
    if (DOM.btnRebuildUrl) {
      DOM.btnRebuildUrl.onclick = () => {
        if (DOM.rebuiltUrlPreview && DOM.mainInput) {
          DOM.mainInput.value = DOM.rebuiltUrlPreview.textContent;
          runTransformation(true);
          DOM.mainInput.scrollIntoView({ behavior: "smooth" });
          showToast("Rebuilt query string loaded into main tool");
        }
      };
    }

    // URL Builder listeners
    const builderInputs = [
      DOM.builderProtocol,
      DOM.builderHost,
      DOM.builderPort,
      DOM.builderPath,
      DOM.builderQuery,
      DOM.builderHash,
    ];
    builderInputs.forEach((el) => {
      if (el) el.oninput = generateBuilderURL;
    });

    if (DOM.btnBuilderCopy) {
      DOM.btnBuilderCopy.onclick = () => {
        const url = generateBuilderURL();
        copyToClipboard(url, "Generated URL copied!");
      };
    }

    if (DOM.btnBuilderSend) {
      DOM.btnBuilderSend.onclick = () => {
        const url = generateBuilderURL();
        if (DOM.mainInput) {
          DOM.mainInput.value = url;
          runTransformation(true);
          DOM.mainInput.scrollIntoView({ behavior: "smooth" });
          showToast("Loaded builder URL into main workspace");
        }
      };
    }

    if (DOM.btnBuilderClear) {
      DOM.btnBuilderClear.onclick = () => {
        if (DOM.builderHost) DOM.builderHost.value = "example.com";
        if (DOM.builderPort) DOM.builderPort.value = "";
        if (DOM.builderPath) DOM.builderPath.value = "/api/v1/search";
        if (DOM.builderQuery)
          DOM.builderQuery.value = "q=developer+tools&sort=asc";
        if (DOM.builderHash) DOM.builderHash.value = "results";
        generateBuilderURL();
        showToast("Builder reset");
      };
    }

    // Batch actions
    if (DOM.btnProcessBatch) DOM.btnProcessBatch.onclick = processBatchTool;
    if (DOM.btnBatchCopyAll) {
      DOM.btnBatchCopyAll.onclick = () => {
        if (batchResults.length === 0) {
          showToast("No batch results to copy", "warning");
          return;
        }
        const text = batchResults.map((b) => b.result).join("\n");
        copyToClipboard(text, "All batch results copied!");
      };
    }
    if (DOM.btnBatchDownload) {
      DOM.btnBatchDownload.onclick = () => {
        if (batchResults.length === 0) {
          showToast("No batch results to download", "warning");
          return;
        }
        const text = batchResults.map((b) => b.result).join("\n");
        downloadTextFile("huzikit-batch-results.txt", text);
      };
    }

    // History controls
    if (DOM.btnClearHistory) DOM.btnClearHistory.onclick = clearHistory;
    if (DOM.historyToggle) {
      DOM.historyToggle.onchange = (e) => {
        state.historyEnabled = e.target.checked;
        showToast(state.historyEnabled ? "History enabled" : "History paused");
      };
    }
    if (DOM.btnSaveSnippet) DOM.btnSaveSnippet.onclick = saveCurrentAsSnippet;
  }

  // ---------------------------------------------------------------------------
  // 19. Initializer
  // ---------------------------------------------------------------------------
  function init() {
    cacheDOMElements();
    setupEventListeners();
    setupGlobalSearch();
    setupMobileNavigation();
    setupFAQAccordions();
    setupTabs();
    renderCharsetGrid();
    loadHistory();
    loadSnippets();

    // Default builder url initial generation
    generateBuilderURL();

    // Initialize with a default clean demo if empty
    if (DOM.mainInput && !DOM.mainInput.value) {
      DOM.mainInput.value =
        "https://huzikit.com/search?q=developer tools&category=URL Encoder & Decoder&safe=true";
      runTransformation(false);
    }
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
