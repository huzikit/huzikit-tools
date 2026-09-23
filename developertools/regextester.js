/**
 * HUZIKIT REGEX TESTER — PRODUCTION ENGINE
 * Native ECMAScript JavaScript RegExp Engine
 * Zero Dependencies • 100% Client-Side • Safe DOM Construction
 */

(function () {
  "use strict";

  // ==========================================================================
  // 1. Huzikit Tools Directory Database (All 30 Tools for Global Search)
  // ==========================================================================
  const HUZIKIT_TOOLS = [
    // Developer Tools
    {
      title: "Regex Tester",
      url: "/developertools/regextester.html",
      category: "Developer",
      keywords: "regex regular expression pattern match test debug validator",
    },
    {
      title: "JSON Formatter",
      url: "/developertools/JSONFORMATTER.html",
      category: "Developer",
      keywords: "json format validate prettify minify beautifier",
    },
    {
      title: "Base64 Utility",
      url: "/developertools/base64encoderdecoder.html",
      category: "Developer",
      keywords: "base64 encode decode binary string",
    },
    {
      title: "URL Encoder / Decoder",
      url: "/developertools/urlencoderdecoder.html",
      category: "Developer",
      keywords: "url uri encode decode query percent escape",
    },
    {
      title: "Meta Tag Generator",
      url: "/developertools/meta-tag-generator.html",
      category: "Developer",
      keywords: "meta tags seo open graph twitter card",
    },
    {
      title: "Markdown to HTML",
      url: "/developertools/markdownhtml.html",
      category: "Developer",
      keywords: "markdown md html convert compile",
    },
    {
      title: "CSS Minifier",
      url: "/developertools/cssminifier.html",
      category: "Developer",
      keywords: "css minify compress stylesheet",
    },
    {
      title: "Unix Timestamp Converter",
      url: "/developertools/unixtimestamp.html",
      category: "Developer",
      keywords: "unix time timestamp epoch date convert",
    },

    // Text Tools
    {
      title: "Word Counter",
      url: "/texttools/word-counter.html",
      category: "Text Tools",
      keywords: "word count character reading time length",
    },
    {
      title: "Character Counter",
      url: "/texttools/character-counter.html",
      category: "Text Tools",
      keywords: "character letters symbols length",
    },
    {
      title: "Case Converter",
      url: "/texttools/case-converter.html",
      category: "Text Tools",
      keywords: "case upper lower title camel snake kebab capital",
    },
    {
      title: "Remove Duplicate Lines",
      url: "/texttools/remove-duplicate-lines.html",
      category: "Text Tools",
      keywords: "duplicate lines clean unique filter",
    },
    {
      title: "Lorem Ipsum Generator",
      url: "/texttools/loremipsumgenerator.html",
      category: "Text Tools",
      keywords: "lorem ipsum dummy placeholder text generate",
    },
    {
      title: "Password Generator",
      url: "/texttools/passwordgenerator.html",
      category: "Text Tools",
      keywords: "password secure random generator strong",
    },
    {
      title: "Text Reverser",
      url: "/texttools/text-reverser.html",
      category: "Text Tools",
      keywords: "reverse flip backwards mirror text",
    },
    {
      title: "Online Notepad",
      url: "/texttools/onlinenotepad.html",
      category: "Text Tools",
      keywords: "notes scratchpad write editor notepad",
    },

    // Calculators
    {
      title: "Age Calculator",
      url: "/calculator/agecalculator.html",
      category: "Calculators",
      keywords: "age birth birthday years months days",
    },
    {
      title: "BMI Calculator",
      url: "/calculator/bmi-calculator.html",
      category: "Calculators",
      keywords: "bmi body mass index health fitness weight",
    },
    {
      title: "Percentage Calculator",
      url: "/calculator/percentage-calculator.html",
      category: "Calculators",
      keywords: "percentage percent discount ratio math",
    },
    {
      title: "Calorie Calculator",
      url: "/calculator/Calorie-Calculator.html",
      category: "Calculators",
      keywords: "calorie diet bmr maintenance fitness nutrition",
    },
    {
      title: "Discount Calculator",
      url: "/calculator/discount-calculator.html",
      category: "Calculators",
      keywords: "discount sale price save percentage",
    },
    {
      title: "Saving & Goal Calculator",
      url: "/calculator/saving&goalcalculator.html",
      category: "Calculators",
      keywords: "savings finance investment interest compound goal",
    },
    {
      title: "Tip Calculator",
      url: "/calculator/tip-calculator.html",
      category: "Calculators",
      keywords: "tip bill split gratuity restaurant",
    },
    {
      title: "GPA Calculator",
      url: "/calculator/gpa-calculator.html",
      category: "Calculators",
      keywords: "gpa grade college school university academic",
    },

    // Image & PDF
    {
      title: "Image Compressor",
      url: "/image&pdf/image-compressor.html",
      category: "Image & PDF",
      keywords: "image compress reduce size jpg png webp",
    },
    {
      title: "Image Resizer",
      url: "/image&pdf/image-resizer.html",
      category: "Image & PDF",
      keywords: "image resize dimensions scale width height",
    },
    {
      title: "PDF to Word Converter",
      url: "/image&pdf/pdftowordconverter.html",
      category: "Image & PDF",
      keywords: "pdf word doc docx convert document",
    },
    {
      title: "JPG to PNG Converter",
      url: "/image&pdf/jpg-to-png.html",
      category: "Image & PDF",
      keywords: "jpg jpeg png format convert transparent",
    },
    {
      title: "Color Picker",
      url: "/image&pdf/colorpicker.html",
      category: "Image & PDF",
      keywords: "color picker hex rgb hsl palette",
    },
    {
      title: "QR Code Generator",
      url: "/image&pdf/QRGenrator.html",
      category: "Image & PDF",
      keywords: "qr code barcode generator create scan",
    },
  ];

  // ==========================================================================
  // 2. 16 Practical Regex Presets
  // ==========================================================================
  const REGEX_PRESETS = [
    {
      id: "email",
      name: "Email Address",
      pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
      flags: "gim",
      sample:
        "Contact us at team@huzikit.com, dev_ops+alert@cloud.co.uk or test.user@example.org. Avoid invalid user@.com or missing@domain.",
      desc: "RFC-compliant practical email address detection.",
    },
    {
      id: "url",
      name: "URL / Web Address",
      pattern:
        "https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b[-a-zA-Z0-9()@:%_+.~#?&/=]*",
      flags: "gim",
      sample:
        "Visit https://huzikit.com/developertools/regextester.html or http://sub.domain.org/path?q=regex&page=1#intro for docs.",
      desc: "Matches standard HTTP and HTTPS URLs with query params and anchors.",
    },
    {
      id: "phone",
      name: "Phone Number (International)",
      pattern:
        "(?:\\+?\\d{1,3}[-.\s]?)?\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}",
      flags: "gm",
      sample:
        "Call +1 (800) 555-0199 or 415-555-2671. International line: +44 20 7946 0991.",
      desc: "Matches North American and international phone numbers.",
    },
    {
      id: "ipv4",
      name: "IPv4 Address",
      pattern:
        "\\b(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)\\b",
      flags: "g",
      sample:
        "Valid IPs: 127.0.0.1, 192.168.1.254, 10.0.0.1. Out of range: 999.300.1.1, 256.0.0.1.",
      desc: "Validates 4 octets each strictly bounded between 0 and 255.",
    },
    {
      id: "ipv6",
      name: "IPv6 Address",
      pattern: "\\b(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}\\b",
      flags: "gi",
      sample:
        "Server host: 2001:0db8:85a3:0000:0000:8a2e:0370:7334 and fe80:0000:0000:0000:0204:61ff:fe9d:f156.",
      desc: "Matches full 8-hextet hexadecimal IPv6 addresses.",
    },
    {
      id: "date",
      name: "Date (YYYY-MM-DD)",
      pattern: "\\b\\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\\d|3[01])\\b",
      flags: "g",
      sample:
        "Project release: 2026-09-20. Previous milestones: 2025-12-31 and 2026-01-15.",
      desc: "Matches ISO 8601 calendar date formats.",
    },
    {
      id: "time",
      name: "Time (24-Hour HH:MM:SS)",
      pattern: "\\b(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d)?\\b",
      flags: "g",
      sample:
        "Server backup starts at 03:00:00. Next sync scheduled at 14:45 and 23:59:59.",
      desc: "Matches 24-hour military or standard timestamps.",
    },
    {
      id: "integer",
      name: "Integer (Signed & Unsigned)",
      pattern: "^-?\\d+$",
      flags: "gm",
      sample: "1042\n-450\n0\n+99 (fails due to +)\n3.14 (fails)",
      desc: "Validates whole positive or negative integers.",
    },
    {
      id: "decimal",
      name: "Decimal Number",
      pattern: "^-?\\d+(?:\\.\\d+)?$",
      flags: "gm",
      sample: "3.14159\n-0.08\n42\n100.55\nabc",
      desc: "Matches positive or negative integers and floating-point decimals.",
    },
    {
      id: "hex",
      name: "Hex Color Code",
      pattern: "#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b",
      flags: "g",
      sample:
        "Palette colors: #4F46E5 (primary), #7C3AED (accent), #FFF (white), and #15132BEE.",
      desc: "Matches 3, 4, 6, and 8-digit CSS hexadecimal color strings.",
    },
    {
      id: "username",
      name: "Username (Alphanumeric 3-16)",
      pattern: "^[a-zA-Z0-9_-]{3,16}$",
      flags: "gm",
      sample:
        "huzi_hack\ndev-master99\nalice_2026\nab (too short)\nthis_username_is_way_too_long",
      desc: "Validates usernames containing letters, digits, underscores, or hyphens.",
    },
    {
      id: "strongpw",
      name: "Strong Password Policy",
      pattern:
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
      flags: "gm",
      sample:
        "Huzikit@2026 (PASS)\nP@ssw0rd123! (PASS)\nweakpass (FAIL)\nNoSpecial123 (FAIL)",
      desc: "Requires min 8 characters: 1 uppercase, 1 lowercase, 1 digit, 1 special character.",
    },
    {
      id: "zipcode",
      name: "US ZIP / Postal Code",
      pattern: "\\b\\d{5}(?:-\\d{4})?\\b",
      flags: "g",
      sample: "Shipped to 90210, 10001-1234, and 94103. Invalid: 1234, ABCDE.",
      desc: "Matches standard 5-digit and ZIP+4 postal codes.",
    },
    {
      id: "htmltag",
      name: "HTML Tag Stripper / Matcher",
      pattern:
        "<([a-zA-Z][a-zA-Z0-9]*)\\b[^>]*>(.*?)<\\/\\1>|<([a-zA-Z][a-zA-Z0-9]*)\\b[^>]*\\/>",
      flags: "gim",
      sample:
        'Welcome to <h1 class="title">Huzikit</h1> with an <img src="logo.png" /> icon and <p>content</p>.',
      desc: "Extracts HTML tags, element names, and inner content.",
    },
    {
      id: "whitespace",
      name: "Duplicate / Trailing Whitespace",
      pattern: "[ \\t]{2,}|^\\s+|\\s+$",
      flags: "gm",
      sample:
        "  Text with    excessive   spaces inside   and trailing tabs\t\t",
      desc: "Identifies multiple consecutive spaces or line edge whitespaces for cleaning.",
    },
    {
      id: "duplicatewords",
      name: "Duplicate Consecutive Words",
      pattern: "\\b(\\w+)\\s+\\1\\b",
      flags: "gi",
      sample: "Did you you notice the the duplicate word in in this sentence?",
      desc: "Catches repeated identical words using capture groups and backreferences.",
    },
  ];

  // ==========================================================================
  // 3. Default Test Cases Suite
  // ==========================================================================
  const DEFAULT_TEST_CASES = [
    {
      text: "contact@huzikit.com",
      expected: "match",
      desc: "Standard business domain",
    },
    {
      text: "dev_ops+alert.2026@cloud-infra.co.uk",
      expected: "match",
      desc: "Complex tags and subdomains",
    },
    {
      text: "plainaddress-no-at-sign",
      expected: "nomatch",
      desc: "Missing @ symbol",
    },
    {
      text: "user@.domain-without-name.com",
      expected: "nomatch",
      desc: "Invalid dot after @",
    },
  ];

  // ==========================================================================
  // 4. State Management
  // ==========================================================================
  const state = {
    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
    flags: "gim",
    testString: "",
    replacePattern: "[EMAIL: $&]",
    activeMode: "test",
    matches: [],
    execTimeMs: 0,
    isValidRegex: true,
    errorMessage: "",
    testCases: JSON.parse(JSON.stringify(DEFAULT_TEST_CASES)),
    selectedLang: "js",
    history: [],
    savedSnippets: [],
  };

  // Local Storage Keys
  const LS_HISTORY_KEY = "huzikit_regex_history_v1";
  const LS_SAVED_KEY = "huzikit_regex_saved_v1";

  // ==========================================================================
  // 5. DOM References
  // ==========================================================================
  let dom = {};

  function initDOMReferences() {
    dom = {
      // Header & Navigation
      header: document.getElementById("site-header"),
      mobileToggle: document.getElementById("mobile-menu-toggle"),
      mobilePanel: document.getElementById("mobile-nav-panel"),
      mobileBackdrop: document.getElementById("mobile-nav-backdrop"),
      mobileClose: document.getElementById("btn-close-mobile"),
      mobileSearchBtn: document.getElementById("mobile-search-btn"),
      mobileAccordions: document.querySelectorAll(".mobile-accordion-btn"),

      // Global Search
      btnSearchTrigger: document.getElementById("btn-search-trigger"),
      searchModal: document.getElementById("search-modal-backdrop"),
      searchInput: document.getElementById("global-search-input"),
      searchResults: document.getElementById("search-results-list"),
      btnCloseModal: document.getElementById("btn-close-modal"),
      btnClearSearch: document.getElementById("btn-clear-search"),
      searchKbd: document.getElementById("search-kbd"),

      // Tool Tabs
      tabBtns: document.querySelectorAll(".tab-btn"),
      modePanels: document.querySelectorAll(".mode-panel"),

      // Pattern & Flags
      patternInput: document.getElementById("regex-pattern"),
      flagsContainer: document.getElementById("flags-container"),
      activeFlagsDisplay: document.getElementById("active-flags-display"),
      regexErrorAlert: document.getElementById("regex-error-alert"),
      regexErrorMessage: document.getElementById("regex-error-message"),
      btnCopyRegex: document.getElementById("btn-copy-regex"),
      btnSaveSnippet: document.getElementById("btn-save-snippet"),
      btnClearPattern: document.getElementById("btn-clear-pattern"),

      // Test String Editor
      editorContainer: document.getElementById("editor-container"),
      editorBackdrop: document.getElementById("editor-backdrop"),
      testStringInput: document.getElementById("test-string-input"),
      testStringCounter: document.getElementById("test-string-counter"),
      btnLoadSample: document.getElementById("btn-load-sample"),
      fileUploadInput: document.getElementById("file-upload-input"),
      btnPasteTest: document.getElementById("btn-paste-test"),
      btnClearTest: document.getElementById("btn-clear-test"),

      // Statistics
      statMatchCount: document.getElementById("stat-match-count"),
      statExecTime: document.getElementById("stat-exec-time"),
      statCharCount: document.getElementById("stat-char-count"),
      statPatternLen: document.getElementById("stat-pattern-len"),
      statGroupsCount: document.getElementById("stat-groups-count"),
      statStatus: document.getElementById("stat-status"),
      matchSummaryPill: document.getElementById("match-summary-pill"),

      // Matches List & Actions
      matchesListContainer: document.getElementById("matches-list-container"),
      btnCopyAllMatches: document.getElementById("btn-copy-all-matches"),
      btnDownloadMatchesTxt: document.getElementById(
        "btn-download-matches-txt",
      ),
      btnDownloadMatchesJson: document.getElementById(
        "btn-download-matches-json",
      ),

      // Pattern Explanation
      patternExplanationBody: document.getElementById(
        "pattern-explanation-body",
      ),

      // Replace Mode
      replaceInput: document.getElementById("replace-input"),
      replaceBeforeView: document.getElementById("replace-before-view"),
      replaceAfterView: document.getElementById("replace-after-view"),
      replaceBeforeLen: document.getElementById("replace-before-len"),
      replaceAfterLen: document.getElementById("replace-after-len"),
      btnCopyReplaceResult: document.getElementById("btn-copy-replace-result"),
      btnApplyReplaceToTest: document.getElementById(
        "btn-apply-replace-to-test",
      ),
      btnDownloadReplaceResult: document.getElementById(
        "btn-download-replace-result",
      ),

      // Split Mode
      splitPartsCount: document.getElementById("split-parts-count"),
      splitResultsGrid: document.getElementById("split-results-grid"),
      btnCopySplitJson: document.getElementById("btn-copy-split-json"),
      btnDownloadSplitJson: document.getElementById("btn-download-split-json"),

      // Test Cases Suite
      testcasesList: document.getElementById("testcases-list"),
      btnAddTestCase: document.getElementById("btn-add-testcase"),
      btnRunAllTestCases: document.getElementById("btn-run-all-testcases"),
      btnResetTestCases: document.getElementById("btn-reset-testcases"),
      tcSummaryText: document.getElementById("tc-summary-text"),
      tcProgressFill: document.getElementById("tc-progress-fill"),
      badgeTcCount: document.getElementById("badge-tc-count"),

      // Presets
      presetsCardsGrid: document.getElementById("presets-cards-grid"),
      presetFilterInput: document.getElementById("preset-filter-input"),

      // Code Generator
      langBtns: document.querySelectorAll(".lang-btn"),
      flavorNoticeText: document.getElementById("flavor-notice-text"),
      codeLangLabel: document.getElementById("code-lang-label"),
      generatedCodeViewer: document.getElementById("generated-code-viewer"),
      btnCopyCode: document.getElementById("btn-copy-code"),

      // History & Saved
      savedSnippetsGrid: document.getElementById("saved-snippets-grid"),
      recentHistoryList: document.getElementById("recent-history-list"),
      btnClearHistory: document.getElementById("btn-clear-history"),

      // FAQ
      faqItems: document.querySelectorAll(".faq-item"),

      // Toast Notification Container
      toastContainer: document.getElementById("toast-container"),
    };
  }

  // ==========================================================================
  // 6. Safe Highlighting & Regex Execution Engine
  // ==========================================================================

  /**
   * Constructs active regex instance with safeguards.
   */
  function buildRegexInstance() {
    try {
      const flags = getActiveFlagsString();
      const pattern = state.pattern;
      const regex = new RegExp(pattern, flags);
      state.isValidRegex = true;
      state.errorMessage = "";
      return regex;
    } catch (err) {
      state.isValidRegex = false;
      state.errorMessage =
        err && err.message ? err.message : "Invalid regular expression syntax";
      return null;
    }
  }

  /**
   * Safely reads selected flags from checkbox inputs.
   */
  function getActiveFlagsString() {
    const flagCheckboxes = dom.flagsContainer
      ? dom.flagsContainer.querySelectorAll('input[type="checkbox"]:checked')
      : [];
    let flags = "";
    flagCheckboxes.forEach((cb) => {
      flags += cb.value;
    });
    return flags;
  }

  /**
   * Core execution pipeline: Runs regex, finds matches, prevents infinite loops.
   */
  function executeRegex() {
    state.pattern = dom.patternInput.value;
    state.flags = getActiveFlagsString();
    state.testString = dom.testStringInput.value;

    if (dom.activeFlagsDisplay) {
      dom.activeFlagsDisplay.textContent = state.flags || "(none)";
    }

    const startTime = performance.now();
    const regex = buildRegexInstance();

    // Reset error state
    if (!state.isValidRegex) {
      dom.regexErrorAlert.style.display = "flex";
      dom.regexErrorMessage.textContent = state.errorMessage;
      dom.statStatus.textContent = "Syntax Error";
      dom.statStatus.className = "stat-value status-err";
      state.matches = [];
      renderNoMatches("Regex syntax error. Please correct pattern or flags.");
      updateBackdropHighlights([]);
      updateStatistics(0, 0);
      return;
    }

    dom.regexErrorAlert.style.display = "none";
    dom.statStatus.textContent = "Valid";
    dom.statStatus.className = "stat-value status-ok";

    const str = state.testString;
    const matches = [];
    const MAX_MATCH_LIMIT = 2000; // Safeguard against pathological matching

    if (state.pattern.length > 0 && str.length > 0) {
      if (regex.global) {
        let match;
        let matchCount = 0;
        while ((match = regex.exec(str)) !== null) {
          matchCount++;
          matches.push({
            index: match.index,
            length: match[0].length,
            value: match[0],
            groups: match.slice(1),
            namedGroups: match.groups ? Object.assign({}, match.groups) : null,
          });

          // Zero-length match protection (e.g. /^/g, /\b/g, /a*/g)
          if (match.index === regex.lastIndex) {
            regex.lastIndex++;
          }

          if (matchCount >= MAX_MATCH_LIMIT) {
            break;
          }
        }
      } else {
        const match = regex.exec(str);
        if (match !== null) {
          matches.push({
            index: match.index,
            length: match[0].length,
            value: match[0],
            groups: match.slice(1),
            namedGroups: match.groups ? Object.assign({}, match.groups) : null,
          });
        }
      }
    }

    state.execTimeMs = performance.now() - startTime;
    state.matches = matches;

    // Update UI components
    updateStatistics(matches.length, state.execTimeMs);
    updateBackdropHighlights(matches);
    renderMatchesList(matches);
    renderPatternExplanation();
    updateReplaceMode();
    updateSplitMode();
    updateCodeGenerator();
    runAllTestCases();
    syncEditorScroll();
  }

  /**
   * Updates stats counters across the dashboard.
   */
  function updateStatistics(matchCount, execTime) {
    if (dom.statMatchCount) dom.statMatchCount.textContent = String(matchCount);
    if (dom.statExecTime) {
      dom.statExecTime.textContent =
        execTime < 1 ? "< 1 ms" : execTime.toFixed(1) + " ms";
    }
    if (dom.statCharCount)
      dom.statCharCount.textContent = String(state.testString.length);
    if (dom.statPatternLen)
      dom.statPatternLen.textContent = String(state.pattern.length);

    // Count capturing groups in current regex pattern
    let groupsCount = 0;
    try {
      const matchGroups = state.pattern.match(/\((?!\?)/g);
      groupsCount = matchGroups ? matchGroups.length : 0;
    } catch (e) {
      groupsCount = 0;
    }
    if (dom.statGroupsCount)
      dom.statGroupsCount.textContent = String(groupsCount);

    if (dom.matchSummaryPill) {
      dom.matchSummaryPill.textContent =
        matchCount === 1 ? "1 Match" : matchCount + " Matches";
    }

    const lines = state.testString ? state.testString.split("\n").length : 0;
    if (dom.testStringCounter) {
      dom.testStringCounter.textContent =
        state.testString.length +
        " chars • " +
        lines +
        (lines === 1 ? " line" : " lines");
    }
  }

  /**
   * 100% Safe DOM Construction for Backdrop Highlighting.
   * STRICTLY NO raw innerHTML = userInput!
   */
  function updateBackdropHighlights(matches) {
    if (!dom.editorBackdrop) return;

    const str = state.testString;
    const fragment = document.createDocumentFragment();

    if (!matches || matches.length === 0 || str.length === 0) {
      fragment.appendChild(document.createTextNode(str));
      dom.editorBackdrop.replaceChildren(fragment);
      return;
    }

    let lastIdx = 0;

    for (let i = 0; i < matches.length; i++) {
      const m = matches[i];
      const start = m.index;
      const end = start + m.length;

      // Append plain text before match
      if (start > lastIdx) {
        fragment.appendChild(
          document.createTextNode(str.slice(lastIdx, start)),
        );
      }

      // Append highlighted match element
      const mark = document.createElement("mark");
      mark.className = "match-hl";
      mark.appendChild(document.createTextNode(m.value));
      fragment.appendChild(mark);

      lastIdx = end;
    }

    // Append remaining string
    if (lastIdx < str.length) {
      fragment.appendChild(document.createTextNode(str.slice(lastIdx)));
    }

    dom.editorBackdrop.replaceChildren(fragment);
  }

  /**
   * Renders the match list cards safely.
   */
  function renderMatchesList(matches) {
    if (!dom.matchesListContainer) return;

    if (!matches || matches.length === 0) {
      renderNoMatches(
        "No matches found for the current pattern in test string.",
      );
      return;
    }

    const fragment = document.createDocumentFragment();

    matches.forEach((m, idx) => {
      const card = document.createElement("div");
      card.className = "match-item-card";

      // Header row
      const header = document.createElement("div");
      header.className = "match-card-header";

      const meta = document.createElement("div");
      meta.className = "match-meta-group";

      const badge = document.createElement("span");
      badge.className = "match-idx-badge";
      badge.textContent = "Match #" + (idx + 1);

      const range = document.createElement("span");
      range.className = "match-range-text";
      range.textContent =
        "Index: " +
        m.index +
        ".." +
        (m.index + m.length) +
        " (" +
        m.length +
        " chars)";

      meta.appendChild(badge);
      meta.appendChild(range);

      const copyBtn = document.createElement("button");
      copyBtn.type = "button";
      copyBtn.className = "btn-copy-match";
      copyBtn.setAttribute("aria-label", "Copy match #" + (idx + 1));
      copyBtn.innerHTML =
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg><span>Copy</span>';
      copyBtn.addEventListener("click", () => {
        copyToClipboard(m.value, "Match #" + (idx + 1) + " copied");
      });

      header.appendChild(meta);
      header.appendChild(copyBtn);
      card.appendChild(header);

      // Match Value Display
      const textBlock = document.createElement("div");
      textBlock.className = "match-text-block";
      textBlock.textContent = m.value;
      card.appendChild(textBlock);

      // Capture Groups Display
      if (
        (m.groups && m.groups.length > 0) ||
        (m.namedGroups && Object.keys(m.namedGroups).length > 0)
      ) {
        const groupsWrap = document.createElement("div");
        groupsWrap.className = "match-groups-wrap";

        // Indexed Groups
        if (m.groups && m.groups.length > 0) {
          m.groups.forEach((gVal, gIdx) => {
            const gRow = document.createElement("div");
            gRow.className = "group-row";

            const tag = document.createElement("span");
            tag.className = "group-tag";
            tag.textContent = "$" + (gIdx + 1);

            const val = document.createElement("span");
            val.className = "group-val";
            val.textContent = gVal !== undefined ? gVal : "(undefined)";

            gRow.appendChild(tag);
            gRow.appendChild(val);
            groupsWrap.appendChild(gRow);
          });
        }

        // Named Groups
        if (m.namedGroups) {
          for (const [name, val] of Object.entries(m.namedGroups)) {
            const gRow = document.createElement("div");
            gRow.className = "group-row";

            const tag = document.createElement("span");
            tag.className = "group-tag";
            tag.textContent = "$<" + name + ">";

            const valSpan = document.createElement("span");
            valSpan.className = "group-val";
            valSpan.textContent = val !== undefined ? val : "(undefined)";

            gRow.appendChild(tag);
            gRow.appendChild(valSpan);
            groupsWrap.appendChild(gRow);
          }
        }

        card.appendChild(groupsWrap);
      }

      fragment.appendChild(card);
    });

    dom.matchesListContainer.replaceChildren(fragment);
  }

  function renderNoMatches(message) {
    if (!dom.matchesListContainer) return;
    const box = document.createElement("div");
    box.className = "no-matches-box";
    box.textContent = message;
    dom.matchesListContainer.replaceChildren(box);
  }

  // ==========================================================================
  // 7. Regex Token Breakdown & Explanation
  // ==========================================================================
  function renderPatternExplanation() {
    if (!dom.patternExplanationBody) return;

    const pattern = state.pattern;
    if (!pattern) {
      dom.patternExplanationBody.replaceChildren(
        document.createTextNode(
          "Enter a pattern above to view token breakdown.",
        ),
      );
      return;
    }

    const fragment = document.createDocumentFragment();

    // Tokenize common regex components
    const tokens = [
      {
        regex: /^\^/,
        token: "^",
        desc: "Anchor: Matches the start of the string (or line if /m flag is on).",
      },
      {
        regex: /\$$/,
        token: "$",
        desc: "Anchor: Matches the end of the string (or line if /m flag is on).",
      },
      {
        regex: /\\d/,
        token: "\\d",
        desc: "Character Class: Any digit from 0 to 9.",
      },
      {
        regex: /\\D/,
        token: "\\D",
        desc: "Character Class: Any non-digit character.",
      },
      {
        regex: /\\w/,
        token: "\\w",
        desc: "Character Class: Any word character [a-zA-Z0-9_].",
      },
      {
        regex: /\\W/,
        token: "\\W",
        desc: "Character Class: Any non-word character.",
      },
      {
        regex: /\\s/,
        token: "\\s",
        desc: "Character Class: Any whitespace (space, tab, newline).",
      },
      {
        regex: /\\S/,
        token: "\\S",
        desc: "Character Class: Any non-whitespace character.",
      },
      { regex: /\\b/, token: "\\b", desc: "Anchor: Word boundary." },
      { regex: /\\B/, token: "\\B", desc: "Anchor: Non-word boundary." },
      {
        regex: /\./,
        token: ".",
        desc: "Wildcard: Any character except newlines (or all chars if /s flag is on).",
      },
      {
        regex: /\+/,
        token: "+",
        desc: "Quantifier: Matches 1 or more times (greedy).",
      },
      {
        regex: /\*/,
        token: "*",
        desc: "Quantifier: Matches 0 or more times (greedy).",
      },
      {
        regex: /\?/,
        token: "?",
        desc: "Quantifier: Optional (matches 0 or 1 time).",
      },
      {
        regex: /\[.*?\]/,
        token: "[...]",
        desc: "Character Set: Matches any single character included inside the brackets.",
      },
      {
        regex: /\(\?<=.*?\)/,
        token: "(?<=...)",
        desc: "Lookbehind: Positive lookbehind assertion.",
      },
      {
        regex: /\(\?<!.*?\)/,
        token: "(?<!...)",
        desc: "Lookbehind: Negative lookbehind assertion.",
      },
      {
        regex: /\(\?=.*?\)/,
        token: "(?=...)",
        desc: "Lookahead: Positive lookahead assertion.",
      },
      {
        regex: /\(\?!.*?\)/,
        token: "(?!...)",
        desc: "Lookahead: Negative lookahead assertion.",
      },
      {
        regex: /\(\?<.*?>.*?\)/,
        token: "(?<name>...)",
        desc: "Named Group: Captures matched substring into named dictionary.",
      },
      {
        regex: /\(\?:.*?\)/,
        token: "(?:...)",
        desc: "Non-capturing Group: Groups tokens without allocating capture index.",
      },
      {
        regex: /\(.*?\)/,
        token: "(...)",
        desc: "Capturing Group: Groups tokens and extracts value into $1, $2, etc.",
      },
    ];

    let foundAny = false;

    tokens.forEach((t) => {
      if (t.regex.test(pattern)) {
        foundAny = true;
        const row = document.createElement("div");
        row.className = "token-row";

        const badge = document.createElement("code");
        badge.className = "token-badge";
        badge.textContent = t.token;

        const desc = document.createElement("span");
        desc.className = "token-desc";
        desc.textContent = t.desc;

        row.appendChild(badge);
        row.appendChild(desc);
        fragment.appendChild(row);
      }
    });

    if (!foundAny) {
      const row = document.createElement("div");
      row.className = "token-row";
      const desc = document.createElement("span");
      desc.className = "token-desc";
      desc.textContent =
        "Standard literal sequence. Matches the exact characters as written.";
      row.appendChild(desc);
      fragment.appendChild(row);
    }

    dom.patternExplanationBody.replaceChildren(fragment);
  }

  // ==========================================================================
  // 8. Replace Mode Logic
  // ==========================================================================
  function updateReplaceMode() {
    if (!dom.replaceBeforeView || !dom.replaceAfterView) return;

    state.replacePattern = dom.replaceInput.value;
    const str = state.testString;
    const regex = buildRegexInstance();

    dom.replaceBeforeView.textContent = str;
    if (dom.replaceBeforeLen)
      dom.replaceBeforeLen.textContent = str.length + " chars";

    if (!regex || !state.isValidRegex) {
      dom.replaceAfterView.textContent =
        "[Cannot replace: invalid regex pattern]";
      if (dom.replaceAfterLen) dom.replaceAfterLen.textContent = "0 chars";
      return;
    }

    try {
      const replaced = str.replace(regex, state.replacePattern);
      dom.replaceAfterView.textContent = replaced;
      if (dom.replaceAfterLen)
        dom.replaceAfterLen.textContent = replaced.length + " chars";
    } catch (err) {
      dom.replaceAfterView.textContent =
        "[Replacement Error: " +
        (err.message || "Check replacement tokens") +
        "]";
    }
  }

  // ==========================================================================
  // 9. Split Mode Logic
  // ==========================================================================
  function updateSplitMode() {
    if (!dom.splitResultsGrid) return;

    const str = state.testString;
    const regex = buildRegexInstance();

    if (!regex || !state.isValidRegex || !state.pattern) {
      dom.splitResultsGrid.replaceChildren(
        document.createTextNode("Enter a valid pattern to split string."),
      );
      if (dom.splitPartsCount) dom.splitPartsCount.textContent = "0 items";
      return;
    }

    try {
      const parts = str.split(regex);
      if (dom.splitPartsCount)
        dom.splitPartsCount.textContent = parts.length + " parts";

      const fragment = document.createDocumentFragment();

      parts.forEach((part, idx) => {
        const card = document.createElement("div");
        card.className = "split-item-card";

        const idxBadge = document.createElement("span");
        idxBadge.className = "split-idx-badge";
        idxBadge.textContent = "[" + idx + "]";

        const valText = document.createElement("span");
        valText.className = "split-val-text";
        valText.textContent = part.length > 0 ? part : "(empty string)";

        card.appendChild(idxBadge);
        card.appendChild(valText);
        fragment.appendChild(card);
      });

      dom.splitResultsGrid.replaceChildren(fragment);
    } catch (err) {
      dom.splitResultsGrid.replaceChildren(
        document.createTextNode("Error during split: " + err.message),
      );
    }
  }

  // ==========================================================================
  // 10. Test Cases Suite Logic
  // ==========================================================================
  function renderTestCases() {
    if (!dom.testcasesList) return;

    const fragment = document.createDocumentFragment();

    state.testCases.forEach((tc, idx) => {
      const card = document.createElement("div");
      card.className = "testcase-card " + (tc.status || "pending");

      const header = document.createElement("div");
      header.className = "tc-header";

      const badge = document.createElement("span");
      badge.className = "tc-status-badge " + (tc.status || "");
      badge.textContent = tc.status ? tc.status.toUpperCase() : "PENDING";

      const actions = document.createElement("div");
      actions.className = "tc-actions";

      const delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "btn-text-action";
      delBtn.title = "Delete test case";
      delBtn.innerHTML =
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>';
      delBtn.addEventListener("click", () => {
        state.testCases.splice(idx, 1);
        renderTestCases();
        runAllTestCases();
      });

      actions.appendChild(delBtn);
      header.appendChild(badge);
      header.appendChild(actions);
      card.appendChild(header);

      const inputRow = document.createElement("div");
      inputRow.className = "tc-input-row";

      const input = document.createElement("input");
      input.type = "text";
      input.className = "tc-text-input";
      input.value = tc.text;
      input.placeholder = "Test string input...";
      input.addEventListener("input", (e) => {
        tc.text = e.target.value;
        runAllTestCases();
      });

      const select = document.createElement("select");
      select.className = "tc-expected-select";
      select.innerHTML =
        '<option value="match"' +
        (tc.expected === "match" ? " selected" : "") +
        '>Should Match</option><option value="nomatch"' +
        (tc.expected === "nomatch" ? " selected" : "") +
        ">Should Not Match</option>";
      select.addEventListener("change", (e) => {
        tc.expected = e.target.value;
        runAllTestCases();
      });

      inputRow.appendChild(input);
      inputRow.appendChild(select);
      card.appendChild(inputRow);

      fragment.appendChild(card);
    });

    dom.testcasesList.replaceChildren(fragment);
    if (dom.badgeTcCount)
      dom.badgeTcCount.textContent = String(state.testCases.length);
  }

  function runAllTestCases() {
    const regex = buildRegexInstance();
    if (!regex || !state.isValidRegex) {
      if (dom.tcSummaryText)
        dom.tcSummaryText.textContent =
          "Cannot evaluate test cases: Regex is invalid.";
      return;
    }

    let passedCount = 0;

    state.testCases.forEach((tc) => {
      // Test regex without stateful sticky / lastIndex interference
      const testRegex = new RegExp(state.pattern, state.flags);
      const isMatch = testRegex.test(tc.text);
      const shouldMatch = tc.expected === "match";

      if ((isMatch && shouldMatch) || (!isMatch && !shouldMatch)) {
        tc.status = "pass";
        passedCount++;
      } else {
        tc.status = "fail";
      }
    });

    const total = state.testCases.length;
    const pct = total > 0 ? (passedCount / total) * 100 : 0;

    if (dom.tcProgressFill) {
      dom.tcProgressFill.style.width = pct + "%";
      dom.tcProgressFill.style.backgroundColor =
        passedCount === total ? "var(--success)" : "var(--error)";
    }

    if (dom.tcSummaryText) {
      dom.tcSummaryText.textContent =
        passedCount +
        " of " +
        total +
        " test cases passed (" +
        Math.round(pct) +
        "%)";
    }

    // Update status pills in DOM without full rebuild
    if (dom.testcasesList) {
      const cards = dom.testcasesList.querySelectorAll(".testcase-card");
      cards.forEach((card, idx) => {
        if (state.testCases[idx]) {
          const status = state.testCases[idx].status;
          card.className = "testcase-card " + status;
          const badge = card.querySelector(".tc-status-badge");
          if (badge) {
            badge.className = "tc-status-badge " + status;
            badge.textContent = status.toUpperCase();
          }
        }
      });
    }
  }

  // ==========================================================================
  // 11. Code Generator (JavaScript, Python, PHP, Java, C#, Go)
  // ==========================================================================
  function updateCodeGenerator() {
    if (!dom.generatedCodeViewer) return;

    const pattern = state.pattern;
    const flags = state.flags;
    const lang = state.selectedLang;

    let code = "";
    let flavorDesc = "";

    switch (lang) {
      case "js":
        flavorDesc = "JavaScript ECMAScript RegExp syntax (Browser & Node.js)";
        code = `// JavaScript (ES6+ / V8 Engine)
const regex = /${pattern}/${flags};
const str = \`${escapeBackticks(state.testString)}\`;

// 1. Check if string matches
const isMatch = regex.test(str);
console.log("Matches:", isMatch);

// 2. Retrieve all matches with groups
const matches = [...str.matchAll(regex)];
for (const match of matches) {
  console.log("Found match:", match[0], "at index", match.index);
  if (match.groups) {
    console.log("Named groups:", match.groups);
  }
}`;
        break;

      case "python":
        flavorDesc = "Python re module (Standard Library)";
        let pyFlags = [];
        if (flags.includes("i")) pyFlags.push("re.IGNORECASE");
        if (flags.includes("m")) pyFlags.push("re.MULTILINE");
        if (flags.includes("s")) pyFlags.push("re.DOTALL");
        const pyFlagArg = pyFlags.length > 0 ? ", " + pyFlags.join(" | ") : "";

        code = `# Python 3 (re module)
import re

pattern = r"${pattern.replace(/\\/g, "\\\\")}"
text = """${state.testString.replace(/"""/g, '\\"\\"\\"')}"""

# Find all matches
matches = re.finditer(pattern, text${pyFlagArg})
for match in matches:
    print(f"Match: {match.group(0)} at {match.span()}")
    if match.groupdict():
        print(f"Named groups: {match.groupdict()}")`;
        break;

      case "php":
        flavorDesc = "PHP PCRE Engine (preg_match / preg_match_all)";
        code = `<?php
// PHP 8+ PCRE
$pattern = '/${pattern.replace(/'/g, "\\'")}/${flags}';
$text = "${state.testString.replace(/"/g, '\\"').replace(/\n/g, "\\n")}";

if (preg_match_all($pattern, $text, $matches, PREG_OFFSET_CAPTURE)) {
    echo "Found " . count($matches[0]) . " matches:\\n";
    print_r($matches);
}
?>`;
        break;

      case "java":
        flavorDesc = "Java java.util.regex (JVM)";
        let javaFlags = [];
        if (flags.includes("i")) javaFlags.push("Pattern.CASE_INSENSITIVE");
        if (flags.includes("m")) javaFlags.push("Pattern.MULTILINE");
        if (flags.includes("s")) javaFlags.push("Pattern.DOTALL");
        const javaFlagArg =
          javaFlags.length > 0 ? ", " + javaFlags.join(" | ") : "";

        code = `import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class RegexRunner {
    public static void main(String[] args) {
        String regex = "${pattern.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}";
        Pattern pattern = Pattern.compile(regex${javaFlagArg});
        Matcher matcher = pattern.matcher("Your test text here");

        while (matcher.find()) {
            System.out.println("Match: " + matcher.group() + " at [" + matcher.start() + ".." + matcher.end() + "]");
        }
    }
}`;
        break;

      case "csharp":
        flavorDesc = "C# .NET System.Text.RegularExpressions";
        let csFlags = [];
        if (flags.includes("i")) csFlags.push("RegexOptions.IgnoreCase");
        if (flags.includes("m")) csFlags.push("RegexOptions.Multiline");
        if (flags.includes("s")) csFlags.push("RegexOptions.Singleline");
        const csFlagArg = csFlags.length > 0 ? ", " + csFlags.join(" | ") : "";

        code = `using System;
using System.Text.RegularExpressions;

class Program {
    static void Main() {
        string pattern = @"${pattern.replace(/"/g, '""')}";
        string input = "Your test text here";

        MatchCollection matches = Regex.Matches(input, pattern${csFlagArg});
        foreach (Match m in matches) {
            Console.WriteLine($"Match: {m.Value} at index {m.Index}");
        }
    }
}`;
        break;

      case "go":
        flavorDesc = "Go regexp package (RE2 Syntax - ReDoS Safe)";
        code = `package main

import (
    "fmt"
    "regexp"
)

func main() {
    pattern := \`${pattern.replace(/`/g, '` + "`" + `')}\`
    re := regexp.MustCompile(pattern)
    text := "Your test text here"

    matches := re.FindAllString(text, -1)
    fmt.Printf("Found %d matches: %v\\n", len(matches), matches)
}`;
        break;
    }

    if (dom.flavorNoticeText) dom.flavorNoticeText.textContent = flavorDesc;
    dom.generatedCodeViewer.querySelector("code").textContent = code;
  }

  function escapeBackticks(str) {
    return str ? str.replace(/`/g, "\\`").replace(/\${/g, "\\${") : "";
  }

  // ==========================================================================
  // 12. Presets Population & Loading
  // ==========================================================================
  function renderPresets(filter = "") {
    if (!dom.presetsCardsGrid) return;

    const lowerFilter = filter.toLowerCase().trim();
    const filtered = REGEX_PRESETS.filter((p) => {
      return (
        !lowerFilter ||
        p.name.toLowerCase().includes(lowerFilter) ||
        p.pattern.toLowerCase().includes(lowerFilter) ||
        p.desc.toLowerCase().includes(lowerFilter)
      );
    });

    const fragment = document.createDocumentFragment();

    filtered.forEach((preset) => {
      const card = document.createElement("div");
      card.className = "preset-card-item";

      const top = document.createElement("div");
      top.className = "preset-card-top";

      const name = document.createElement("h3");
      name.className = "preset-name";
      name.textContent = preset.name;

      const loadBtn = document.createElement("button");
      loadBtn.type = "button";
      loadBtn.className = "btn-primary-sm";
      loadBtn.textContent = "Load Preset";
      loadBtn.addEventListener("click", () => {
        applyPreset(preset);
      });

      top.appendChild(name);
      top.appendChild(loadBtn);
      card.appendChild(top);

      const preview = document.createElement("code");
      preview.className = "preset-code-preview";
      preview.textContent = "/" + preset.pattern + "/" + preset.flags;
      card.appendChild(preview);

      const desc = document.createElement("p");
      desc.className = "section-desc";
      desc.textContent = preset.desc;
      card.appendChild(desc);

      fragment.appendChild(card);
    });

    dom.presetsCardsGrid.replaceChildren(fragment);
  }

  function applyPreset(preset) {
    dom.patternInput.value = preset.pattern;

    // Set flags
    const checkboxes = dom.flagsContainer.querySelectorAll(
      'input[type="checkbox"]',
    );
    checkboxes.forEach((cb) => {
      cb.checked = preset.flags.includes(cb.value);
    });

    dom.testStringInput.value = preset.sample;

    // Switch to test tab
    switchTab("test");
    executeRegex();
    saveToHistory();
    showToast("Loaded preset: " + preset.name);
  }

  // ==========================================================================
  // 13. History & Saved Snippets (localStorage with Error Recovery)
  // ==========================================================================
  function loadStoredData() {
    try {
      const rawHistory = localStorage.getItem(LS_HISTORY_KEY);
      if (rawHistory) state.history = JSON.parse(rawHistory);
    } catch (e) {
      state.history = [];
    }

    try {
      const rawSaved = localStorage.getItem(LS_SAVED_KEY);
      if (rawSaved) state.savedSnippets = JSON.parse(rawSaved);
    } catch (e) {
      state.savedSnippets = [];
    }
  }

  function saveToHistory() {
    if (!state.pattern) return;
    const entry = {
      pattern: state.pattern,
      flags: state.flags,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Avoid duplicate head
    if (
      state.history.length > 0 &&
      state.history[0].pattern === entry.pattern &&
      state.history[0].flags === entry.flags
    ) {
      return;
    }

    state.history.unshift(entry);
    if (state.history.length > 20) state.history.pop();

    try {
      localStorage.setItem(LS_HISTORY_KEY, JSON.stringify(state.history));
    } catch (e) {
      // Ignore quota errors
    }
    renderHistoryAndSaved();
  }

  function saveCurrentAsSnippet() {
    if (!state.pattern) {
      showToast("Pattern cannot be empty to save.");
      return;
    }

    const title = prompt(
      "Enter a label for this regex snippet:",
      "My Custom Regex",
    );
    if (!title) return;

    const snippet = {
      id: "snip_" + Date.now(),
      title: title.trim(),
      pattern: state.pattern,
      flags: state.flags,
      sample: state.testString,
    };

    state.savedSnippets.unshift(snippet);
    try {
      localStorage.setItem(LS_SAVED_KEY, JSON.stringify(state.savedSnippets));
      showToast("Saved snippet: " + snippet.title);
    } catch (e) {
      showToast("Failed to save to local storage.");
    }
    renderHistoryAndSaved();
  }

  function renderHistoryAndSaved() {
    // Saved Snippets
    if (dom.savedSnippetsGrid) {
      if (state.savedSnippets.length === 0) {
        dom.savedSnippetsGrid.replaceChildren(
          document.createTextNode(
            'No saved snippets yet. Click "Save" in the pattern toolbar to bookmark.',
          ),
        );
      } else {
        const fragment = document.createDocumentFragment();
        state.savedSnippets.forEach((snip, idx) => {
          const card = document.createElement("div");
          card.className = "snippet-card-item";

          const title = document.createElement("strong");
          title.textContent = snip.title;

          const code = document.createElement("code");
          code.className = "preset-code-preview";
          code.textContent = "/" + snip.pattern + "/" + snip.flags;

          const actions = document.createElement("div");
          actions.className = "card-actions";

          const loadBtn = document.createElement("button");
          loadBtn.type = "button";
          loadBtn.className = "btn-outline-sm";
          loadBtn.textContent = "Load";
          loadBtn.addEventListener("click", () => {
            dom.patternInput.value = snip.pattern;
            const checkboxes = dom.flagsContainer.querySelectorAll(
              'input[type="checkbox"]',
            );
            checkboxes.forEach((cb) => {
              cb.checked = snip.flags.includes(cb.value);
            });
            if (snip.sample) dom.testStringInput.value = snip.sample;
            switchTab("test");
            executeRegex();
            showToast("Loaded snippet: " + snip.title);
          });

          const delBtn = document.createElement("button");
          delBtn.type = "button";
          delBtn.className = "btn-text-action";
          delBtn.textContent = "Delete";
          delBtn.addEventListener("click", () => {
            state.savedSnippets.splice(idx, 1);
            localStorage.setItem(
              LS_SAVED_KEY,
              JSON.stringify(state.savedSnippets),
            );
            renderHistoryAndSaved();
            showToast("Snippet deleted");
          });

          actions.appendChild(loadBtn);
          actions.appendChild(delBtn);

          card.appendChild(title);
          card.appendChild(code);
          card.appendChild(actions);
          fragment.appendChild(card);
        });
        dom.savedSnippetsGrid.replaceChildren(fragment);
      }
    }

    // Recent History
    if (dom.recentHistoryList) {
      if (state.history.length === 0) {
        dom.recentHistoryList.replaceChildren(
          document.createTextNode("No history recorded yet."),
        );
      } else {
        const fragment = document.createDocumentFragment();
        state.history.forEach((item) => {
          const row = document.createElement("div");
          row.className = "history-item-row";

          const text = document.createElement("code");
          text.className = "history-pattern-text";
          text.textContent = "/" + item.pattern + "/" + item.flags;

          const time = document.createElement("span");
          time.className = "card-hint";
          time.textContent = item.timestamp;

          const loadBtn = document.createElement("button");
          loadBtn.type = "button";
          loadBtn.className = "btn-outline-sm";
          loadBtn.textContent = "Apply";
          loadBtn.addEventListener("click", () => {
            dom.patternInput.value = item.pattern;
            const checkboxes = dom.flagsContainer.querySelectorAll(
              'input[type="checkbox"]',
            );
            checkboxes.forEach((cb) => {
              cb.checked = item.flags.includes(cb.value);
            });
            switchTab("test");
            executeRegex();
          });

          row.appendChild(text);
          row.appendChild(time);
          row.appendChild(loadBtn);
          fragment.appendChild(row);
        });
        dom.recentHistoryList.replaceChildren(fragment);
      }
    }
  }

  // ==========================================================================
  // 14. Global Search Modal Implementation
  // ==========================================================================
  function openSearchModal() {
    if (!dom.searchModal) return;
    dom.searchModal.classList.add("open");
    dom.searchModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    dom.searchInput.value = "";
    renderSearchResults("");
    setTimeout(() => dom.searchInput.focus(), 50);
  }

  function closeSearchModal() {
    if (!dom.searchModal) return;
    dom.searchModal.classList.remove("open");
    dom.searchModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function renderSearchResults(query) {
    if (!dom.searchResults) return;

    const lower = query.toLowerCase().trim();
    const matches = HUZIKIT_TOOLS.filter((tool) => {
      return (
        !lower ||
        tool.title.toLowerCase().includes(lower) ||
        tool.category.toLowerCase().includes(lower) ||
        tool.keywords.toLowerCase().includes(lower)
      );
    });

    if (matches.length === 0) {
      dom.searchResults.innerHTML =
        '<div class="search-no-results">No tools matching "' +
        escapeHTML(query) +
        '"</div>';
      return;
    }

    const fragment = document.createDocumentFragment();

    matches.forEach((tool, idx) => {
      const item = document.createElement("a");
      item.href = tool.url;
      item.className = "search-result-item" + (idx === 0 ? " selected" : "");
      item.setAttribute("role", "option");

      const info = document.createElement("div");
      info.className = "search-item-info";

      const title = document.createElement("span");
      title.className = "search-item-title";
      title.textContent = tool.title;

      const category = document.createElement("span");
      category.className = "search-item-category";
      category.textContent = tool.category;

      info.appendChild(title);
      info.appendChild(category);

      const badge = document.createElement("span");
      badge.className = "search-item-badge";
      badge.textContent = tool.category;

      item.appendChild(info);
      item.appendChild(badge);
      fragment.appendChild(item);
    });

    dom.searchResults.replaceChildren(fragment);
  }

  // ==========================================================================
  // 15. Mobile Navigation Panel Implementation
  // ==========================================================================
  function openMobileNav() {
    if (!dom.mobilePanel) return;
    dom.mobilePanel.classList.add("open");
    dom.mobilePanel.setAttribute("aria-hidden", "false");
    dom.mobileToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMobileNav() {
    if (!dom.mobilePanel) return;
    dom.mobilePanel.classList.remove("open");
    dom.mobilePanel.setAttribute("aria-hidden", "true");
    dom.mobileToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  // ==========================================================================
  // 16. Tab Switching
  // ==========================================================================
  function switchTab(modeName) {
    state.activeMode = modeName;

    dom.tabBtns.forEach((btn) => {
      const isTarget = btn.getAttribute("aria-controls") === "mode-" + modeName;
      btn.classList.toggle("active", isTarget);
      btn.setAttribute("aria-selected", isTarget ? "true" : "false");
    });

    dom.modePanels.forEach((panel) => {
      const isTarget = panel.id === "mode-" + modeName;
      panel.classList.toggle("active", isTarget);
    });

    if (modeName === "replace") updateReplaceMode();
    if (modeName === "split") updateSplitMode();
    if (modeName === "codegen") updateCodeGenerator();
    if (modeName === "history") renderHistoryAndSaved();
  }

  // ==========================================================================
  // 17. Utilities (Clipboard, Downloads, Debouncing, Toast)
  // ==========================================================================
  function copyToClipboard(text, successMessage = "Copied to clipboard!") {
    if (!navigator.clipboard) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        showToast(successMessage);
      } catch (err) {
        showToast("Failed to copy");
      }
      document.body.removeChild(textarea);
      return;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        showToast(successMessage);
      })
      .catch(() => {
        showToast("Clipboard access denied");
      });
  }

  function downloadTextFile(
    filename,
    content,
    mimeType = "text/plain;charset=utf-8",
  ) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 100);
    showToast("Downloaded " + filename);
  }

  function showToast(message) {
    if (!dom.toastContainer) return;

    const toast = document.createElement("div");
    toast.className = "toast-msg";
    toast.innerHTML =
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>' +
      escapeHTML(message) +
      "</span>";

    dom.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 200ms ease";
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 200);
    }, 2800);
  }

  function debounce(fn, delay = 150) {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  function syncEditorScroll() {
    if (dom.editorBackdrop && dom.testStringInput) {
      dom.editorBackdrop.scrollTop = dom.testStringInput.scrollTop;
      dom.editorBackdrop.scrollLeft = dom.testStringInput.scrollLeft;
    }
  }

  function escapeHTML(str) {
    if (!str) return "";
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

  // ==========================================================================
  // 18. Event Listeners Setup
  // ==========================================================================
  function setupEventListeners() {
    const debouncedExecute = debounce(() => {
      executeRegex();
      saveToHistory();
    }, 120);

    // Pattern input & flags
    dom.patternInput.addEventListener("input", debouncedExecute);

    dom.flagsContainer
      .querySelectorAll('input[type="checkbox"]')
      .forEach((cb) => {
        cb.addEventListener("change", () => {
          executeRegex();
          saveToHistory();
        });
      });

    // Test String input
    dom.testStringInput.addEventListener("input", () => {
      debouncedExecute();
      syncEditorScroll();
    });

    dom.testStringInput.addEventListener("scroll", syncEditorScroll);

    // Pattern Toolbar
    dom.btnCopyRegex.addEventListener("click", () => {
      copyToClipboard(dom.patternInput.value, "Regex pattern copied!");
    });

    dom.btnSaveSnippet.addEventListener("click", saveCurrentAsSnippet);

    dom.btnClearPattern.addEventListener("click", () => {
      dom.patternInput.value = "";
      executeRegex();
      dom.patternInput.focus();
    });

    // Editor Toolbar Actions
    dom.btnLoadSample.addEventListener("click", () => {
      dom.testStringInput.value = `Hello team!
Please send all official feedback to contact@huzikit.com or info@example.org.
Billing inquiries can reach support-team.2026@cloud-service.co.uk.
For security reports, please use sec_alert+ops@domain.io.
Invalid emails like user@.com, test@domain, or @missing.org will not match!`;
      executeRegex();
      showToast("Sample dataset loaded");
    });

    dom.btnClearTest.addEventListener("click", () => {
      dom.testStringInput.value = "";
      executeRegex();
      dom.testStringInput.focus();
    });

    dom.btnPasteTest.addEventListener("click", async () => {
      try {
        if (navigator.clipboard) {
          const text = await navigator.clipboard.readText();
          dom.testStringInput.value = text;
          executeRegex();
          showToast("Text pasted from clipboard");
        }
      } catch (err) {
        showToast("Please paste manually using Ctrl+V");
      }
    });

    // File Upload Handler
    dom.fileUploadInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        dom.testStringInput.value = event.target.result;
        executeRegex();
        showToast("Loaded " + file.name);
      };
      reader.readAsText(file);
    });

    // Mode Tabs
    dom.tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const mode = btn.id.replace("tab-", "");
        switchTab(mode);
      });
    });

    // Hero Preset Pills
    document.querySelectorAll(".preset-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-preset");
        const found = REGEX_PRESETS.find((p) => p.id === id);
        if (found) applyPreset(found);
      });
    });

    // Match Exports
    dom.btnCopyAllMatches.addEventListener("click", () => {
      if (state.matches.length === 0) {
        showToast("No matches to copy");
        return;
      }
      const text = state.matches.map((m) => m.value).join("\n");
      copyToClipboard(text, "All " + state.matches.length + " matches copied");
    });

    dom.btnDownloadMatchesTxt.addEventListener("click", () => {
      if (state.matches.length === 0) {
        showToast("No matches to export");
        return;
      }
      const lines = [
        "HUZIKIT REGEX TESTER — MATCH EXPORT REPORT",
        "Pattern: /" + state.pattern + "/" + state.flags,
        "Date: " + new Date().toISOString(),
        "Matches Found: " + state.matches.length,
        "--------------------------------------------",
        ...state.matches.map(
          (m, i) =>
            `#${i + 1} [Index ${m.index}..${m.index + m.length}]: ${m.value}`,
        ),
      ].join("\n");
      downloadTextFile("huzikit_regex_matches.txt", lines);
    });

    dom.btnDownloadMatchesJson.addEventListener("click", () => {
      if (state.matches.length === 0) {
        showToast("No matches to export");
        return;
      }
      const data = {
        tool: "Huzikit Regex Tester",
        pattern: state.pattern,
        flags: state.flags,
        totalMatches: state.matches.length,
        matches: state.matches,
      };
      downloadTextFile(
        "huzikit_regex_matches.json",
        JSON.stringify(data, null, 2),
        "application/json",
      );
    });

    // Replace Mode Events
    dom.replaceInput.addEventListener("input", updateReplaceMode);

    dom.btnCopyReplaceResult.addEventListener("click", () => {
      copyToClipboard(dom.replaceAfterView.textContent, "Replaced text copied");
    });

    dom.btnApplyReplaceToTest.addEventListener("click", () => {
      dom.testStringInput.value = dom.replaceAfterView.textContent;
      switchTab("test");
      executeRegex();
      showToast("Applied replacement as active test string");
    });

    dom.btnDownloadReplaceResult.addEventListener("click", () => {
      downloadTextFile(
        "huzikit_replace_result.txt",
        dom.replaceAfterView.textContent,
      );
    });

    // Split Mode Events
    dom.btnCopySplitJson.addEventListener("click", () => {
      const regex = buildRegexInstance();
      if (!regex) return;
      const parts = state.testString.split(regex);
      copyToClipboard(
        JSON.stringify(parts, null, 2),
        "Split array JSON copied",
      );
    });

    dom.btnDownloadSplitJson.addEventListener("click", () => {
      const regex = buildRegexInstance();
      if (!regex) return;
      const parts = state.testString.split(regex);
      downloadTextFile(
        "huzikit_split_tokens.json",
        JSON.stringify(parts, null, 2),
        "application/json",
      );
    });

    // Test Cases Events
    dom.btnAddTestCase.addEventListener("click", () => {
      state.testCases.push({
        text: "sample-input",
        expected: "match",
        status: "pending",
      });
      renderTestCases();
      runAllTestCases();
    });

    dom.btnRunAllTestCases.addEventListener("click", () => {
      runAllTestCases();
      showToast("Evaluated all test cases");
    });

    dom.btnResetTestCases.addEventListener("click", () => {
      state.testCases = JSON.parse(JSON.stringify(DEFAULT_TEST_CASES));
      renderTestCases();
      runAllTestCases();
      showToast("Reset to default test suite");
    });

    // Preset Filter
    dom.presetFilterInput.addEventListener("input", (e) => {
      renderPresets(e.target.value);
    });

    // Cheat Sheet Token Clicks (Inject into Pattern)
    document.querySelectorAll(".cs-token").forEach((tokenElem) => {
      tokenElem.addEventListener("click", () => {
        const text = tokenElem.textContent;
        const input = dom.patternInput;
        const start = input.selectionStart || input.value.length;
        const end = input.selectionEnd || input.value.length;
        input.value =
          input.value.slice(0, start) + text + input.value.slice(end);
        input.focus();
        input.setSelectionRange(start + text.length, start + text.length);
        executeRegex();
        showToast("Inserted token: " + text);
      });
    });

    // Code Gen Language Selector
    dom.langBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        dom.langBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.selectedLang = btn.getAttribute("data-lang");
        dom.codeLangLabel.textContent = btn.textContent;
        updateCodeGenerator();
      });
    });

    dom.btnCopyCode.addEventListener("click", () => {
      copyToClipboard(
        dom.generatedCodeViewer.querySelector("code").textContent,
        "Code snippet copied",
      );
    });

    // History Actions
    dom.btnClearHistory.addEventListener("click", () => {
      if (confirm("Clear all session regex history?")) {
        state.history = [];
        localStorage.removeItem(LS_HISTORY_KEY);
        renderHistoryAndSaved();
        showToast("History cleared");
      }
    });

    // Mobile Navigation Controls
    dom.mobileToggle.addEventListener("click", () => {
      const isOpen = dom.mobilePanel.classList.contains("open");
      if (isOpen) closeMobileNav();
      else openMobileNav();
    });

    dom.mobileClose.addEventListener("click", closeMobileNav);
    dom.mobileBackdrop.addEventListener("click", closeMobileNav);

    dom.mobileAccordions.forEach((btn) => {
      btn.addEventListener("click", () => {
        const isActive = btn.classList.contains("active");
        btn.classList.toggle("active", !isActive);
        btn.setAttribute("aria-expanded", !isActive ? "true" : "false");
        const content = btn.nextElementSibling;
        if (content) {
          content.classList.toggle("active", !isActive);
        }
      });
    });

    // Global Search Controls
    dom.btnSearchTrigger.addEventListener("click", openSearchModal);
    if (dom.mobileSearchBtn) {
      dom.mobileSearchBtn.addEventListener("click", () => {
        closeMobileNav();
        openSearchModal();
      });
    }

    dom.btnCloseModal.addEventListener("click", closeSearchModal);
    dom.searchModal.addEventListener("click", (e) => {
      if (e.target === dom.searchModal) closeSearchModal();
    });

    dom.searchInput.addEventListener("input", (e) => {
      const val = e.target.value;
      dom.btnClearSearch.style.display = val.length > 0 ? "block" : "none";
      renderSearchResults(val);
    });

    dom.btnClearSearch.addEventListener("click", () => {
      dom.searchInput.value = "";
      dom.btnClearSearch.style.display = "none";
      renderSearchResults("");
      dom.searchInput.focus();
    });

    // Keyboard Shortcuts (Ctrl+K, Cmd+K, Escape)
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (dom.searchModal.classList.contains("open")) {
          closeSearchModal();
        } else {
          openSearchModal();
        }
      } else if (e.key === "Escape") {
        if (dom.searchModal.classList.contains("open")) closeSearchModal();
        if (dom.mobilePanel.classList.contains("open")) closeMobileNav();
      }
    });

    // Update shortcut kbd label on Mac
    if (/Mac|iPod|iPhone|iPad/.test(navigator.platform)) {
      if (dom.searchKbd) dom.searchKbd.textContent = "⌘ K";
    }

    // FAQ Accordion Toggle
    dom.faqItems.forEach((item) => {
      const questionBtn = item.querySelector(".faq-question");
      if (questionBtn) {
        questionBtn.addEventListener("click", () => {
          const isActive = item.classList.contains("active");
          dom.faqItems.forEach((other) => other.classList.remove("active"));
          if (!isActive) {
            item.classList.add("active");
            questionBtn.setAttribute("aria-expanded", "true");
          } else {
            questionBtn.setAttribute("aria-expanded", "false");
          }
        });
      }
    });
  }

  // ==========================================================================
  // 19. Initial Engine Boot
  // ==========================================================================
  function init() {
    initDOMReferences();
    loadStoredData();
    renderPresets();
    renderTestCases();
    setupEventListeners();
    executeRegex();
  }

  // Boot when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
