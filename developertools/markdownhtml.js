/**
 * HUZIKIT — MARKDOWN TO HTML CONVERTER
 * Production Script: markdownhtml.js
 * Architecture: Clean Vanilla ES6+, Strict Mode, Defensive DOM Checks
 */

"use strict";

(function () {
  // ==========================================================================
  // 1. ALL 30 HUZIKIT TOOLS DATABASE (EXACT LOCKED ROUTES & NAMES)
  // ==========================================================================
  const HUZIKIT_TOOLS = [
    // TEXT TOOLS
    {
      name: "Word Counter",
      category: "Text Tools",
      url: "/texttools/word-counter.html",
    },
    {
      name: "Character Counter",
      category: "Text Tools",
      url: "/texttools/character-counter.html",
    },
    {
      name: "Case Converter",
      category: "Text Tools",
      url: "/texttools/case-converter.html",
    },
    {
      name: "Remove Duplicate Lines",
      category: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
    },
    {
      name: "Lorem Ipsum Generator",
      category: "Text Tools",
      url: "/texttools/loremipsumgenerator.html",
    },
    {
      name: "Password Generator",
      category: "Text Tools",
      url: "/texttools/passwordgenerator.html",
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      url: "/texttools/text-reverser.html",
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      url: "/texttools/onlinenotepad.html",
    },

    // CALCULATORS
    {
      name: "Age Calculator",
      category: "Calculators",
      url: "/calculator/agecalculator.html",
    },
    {
      name: "BMI Calculator",
      category: "Calculators",
      url: "/calculator/bmi-calculator.html",
    },
    {
      name: "Percentage Calculator",
      category: "Calculators",
      url: "/calculator/percentage-calculator.html",
    },
    {
      name: "Calorie Calculator",
      category: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      url: "/calculator/discount-calculator.html",
    },
    {
      name: "Savings & Goal Calculator",
      category: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
    },
    {
      name: "Tip Calculator",
      category: "Calculators",
      url: "/calculator/tip-calculator.html",
    },
    {
      name: "GPA Calculator",
      category: "Calculators",
      url: "/calculator/gpa-calculator.html",
    },

    // IMAGE & PDF
    {
      name: "Image Compressor",
      category: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
    },
    {
      name: "Image Resizer",
      category: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
    },
    {
      name: "PDF to Word",
      category: "Image & PDF",
      url: "/image&pdf/pdftowordconverter.html",
    },
    {
      name: "JPG to PNG",
      category: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
    },
    {
      name: "Color Picker / HEX",
      category: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
    },
    {
      name: "QR Code Generator",
      category: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
    },

    // DEVELOPER
    {
      name: "JSON Formatter",
      category: "Developer",
      url: "/developertools/JSONFORMATTER.html",
    },
    {
      name: "Base64 Encoder/Decoder",
      category: "Developer",
      url: "/developertools/base64encoderdecoder.html",
    },
    {
      name: "URL Encoder/Decoder",
      category: "Developer",
      url: "/developertools/urlencoderdecoder.html",
    },
    {
      name: "Meta Tag Generator",
      category: "Developer",
      url: "/developertools/meta-tag-generator.html",
    },
    {
      name: "Regex Tester",
      category: "Developer",
      url: "/developertools/regextester.html",
    },
    {
      name: "Markdown to HTML",
      category: "Developer",
      url: "/developertools/markdownhtml.html",
    },
    {
      name: "CSS Minifier",
      category: "Developer",
      url: "/developertools/cssminifier.html",
    },
    {
      name: "Unix Timestamp",
      category: "Developer",
      url: "/developertools/unixtimestamp.html",
    },
  ];

  // ==========================================================================
  // 2. SAMPLE PRESET DATA
  // ==========================================================================
  const SAMPLE_MARKDOWN = `# Huzikit Markdown to HTML Converter

Welcome to the **Huzikit Markdown to HTML Converter**, a high-precision developer utility designed for seamless document formatting, real-time sanitization, and instant export.

---

## Key Features Overview

* **Instant Live Preview**: Dual-pane synchronization with debounced parsing
* **Sanitized Output**: Client-side rendering shielded against malicious scripts
* **Developer Export**: Clean \`.html\` and \`.md\` file generation in one click
* **Extensive Formatting**: Full support for tables, task lists, code blocks, and blockquotes

> "Simplicity is the soul of efficiency. Markdown provides the speed of plain text with the power of modern web markup."
> — *Developer Proverb*

---

## Code Example

Here is how simple and safe browser-side conversion looks in JavaScript:

\`\`\`javascript
function convertMarkdown(source) {
  // Safe client-side transformation
  const cleanMarkup = marked.parse(source, { gfm: true, breaks: true });
  return DOMPurify.sanitize(cleanMarkup);
}

console.log("Ready for production!");
\`\`\`

---

## Feature Comparison Table

| Feature | Huzikit Converter | Standard Text Editors |
| :--- | :---: | :---: |
| **Live HTML Preview** | Supported (Real-time) | Rare |
| **Security Sanitization** | Strict Client-side | None |
| **Document Metrics** | 10+ Live Stats | Basic Count |
| **Export Options** | \`.html\` & \`.md\` Blob | Plain text |

---

## Task List & Workflow

- [x] Write rich Markdown with intuitive formatting toolbar
- [x] Verify live rendered output in the Preview tab
- [ ] Inspect generated HTML source code
- [ ] Export production-ready HTML document for web deployment

---

### External Resources & Quick Links

Check out [Huzikit Developer Suite](https://huzikit.com/developertools/JSONFORMATTER.html) for more utilities, or test inline formatting like \`const isReady = true;\` whenever you build.

![Huzikit Secure Banner](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80)
`;

  const PRESET_DOCUMENTATION = `# API Documentation & Architecture

## Authentication
Every incoming HTTP request must include a bearer token inside the \`Authorization\` header.

\`\`\`bash
curl -X GET "https://api.example.com/v1/projects" \\
  -H "Authorization: Bearer YOUR_API_KEY"
\`\`\`

### Status Response Codes

| Status Code | Description | Action |
| :--- | :--- | :--- |
| **200 OK** | Request processed successfully | Parse JSON payload |
| **401 Unauthorized** | Missing or expired token | Refresh credentials |
| **429 Rate Limited** | Request quota exhausted | Back off exponentially |

> **Important**: Never expose secret API keys in client-side code bundles.
`;

  const PRESET_TABLES_TASKS = `# Sprint Roadmap & Planning

## High Priority Milestones

- [x] Complete Markdown parser integration
- [x] Build dual-pane editor and line-gutter system
- [x] Implement DOMPurify sanitization pipeline
- [ ] Conduct multi-device responsive audit (320px – 1920px)
- [ ] Finalize AdSense-compliant documentation

### Component Review Checklist

| Component | Status | Assignee | Priority |
| :--- | :---: | :---: | :---: |
| \`EditorPane\` | Completed | Frontend | P0 |
| \`SanitizerEngine\` | Completed | Security | P0 |
| \`MetricsDashboard\` | Completed | Analytics | P1 |
| \`HistoryManager\` | Completed | Storage | P2 |
`;

  const PRESET_BLOG = `# Designing Developer-First Tools in 2026

Modern developers expect online web tools to be **lightning-fast**, **privacy-respecting**, and visually refined. 

## The Three Pillars of Technical Utilities

1. **Zero-Latency Interactions**: Every keystroke should yield instantaneous feedback without visual stutter.
2. **Local-First Privacy**: Sensitive configuration files, API payloads, and markdown documentation must never touch remote backend servers.
3. **Ergonomic Typography**: Code and prose require distinct typographic treatments to ensure long-session legibility.

> "A great developer tool gets out of your way and lets your thoughts turn into running code."
`;

  // ==========================================================================
  // 3. APPLICATION STATE
  // ==========================================================================
  const state = {
    markdown: "",
    html: "",
    currentTab: "preview", // 'preview' or 'html'
    isLiveConversion: true,
    isBeautified: true,
    history: [],
  };

  // Debounce timer reference
  let parseDebounceTimer = null;
  let lineSyncScheduled = false;

  // ==========================================================================
  // 4. DOM REFERENCES
  // ==========================================================================
  const dom = {
    // Editor elements
    markdownInput: document.getElementById("markdown-input"),
    lineGutter: document.getElementById("line-gutter"),
    editorWrapper: document.getElementById("editor-wrapper"),
    dropZoneOverlay: document.getElementById("drop-zone-overlay"),
    fileUploadInput: document.getElementById("file-upload-input"),

    // Status & Count badges
    editorStatusBadge: document.getElementById("editor-status-badge"),
    outputStatusBadge: document.getElementById("output-status-badge"),
    inputLineCount: document.getElementById("input-line-count"),
    inputWordCount: document.getElementById("input-word-count"),
    inputCharCount: document.getElementById("input-char-count"),
    outputSizeCount: document.getElementById("output-size-count"),
    outputLineCount: document.getElementById("output-line-count"),

    // Output panels & tabs
    tabPreviewBtn: document.getElementById("tab-preview-btn"),
    tabHtmlBtn: document.getElementById("tab-html-btn"),
    previewPane: document.getElementById("preview-pane"),
    htmlSourcePane: document.getElementById("html-source-pane"),
    htmlCodePre: document.getElementById("html-code-pre"),

    // Editor Actions
    btnUpload: document.getElementById("btn-upload"),
    btnClear: document.getElementById("btn-clear"),
    btnResetSample: document.getElementById("btn-reset-sample"),
    btnCopyMarkdown: document.getElementById("btn-copy-markdown"),
    btnDownloadMarkdown: document.getElementById("btn-download-markdown"),

    // Output Actions
    btnCopyHtml: document.getElementById("btn-copy-html"),
    btnDownloadHtml: document.getElementById("btn-download-html"),
    btnBeautifyHtml: document.getElementById("btn-beautify-html"),
    btnSelectAllHtml: document.getElementById("btn-select-all-html"),
    btnManualConvert: document.getElementById("btn-manual-convert"),

    // Metrics Dashboard
    metricMdChars: document.getElementById("metric-md-chars"),
    metricMdWords: document.getElementById("metric-md-words"),
    metricMdLines: document.getElementById("metric-md-lines"),
    metricHtmlChars: document.getElementById("metric-html-chars"),
    metricHtmlLines: document.getElementById("metric-html-lines"),
    metricHeadings: document.getElementById("metric-headings"),
    metricLinks: document.getElementById("metric-links"),
    metricImages: document.getElementById("metric-images"),
    metricLists: document.getElementById("metric-lists"),
    metricCodeBlocks: document.getElementById("metric-code-blocks"),
    metricTables: document.getElementById("metric-tables"),

    // HTML Analyzer
    analyzerTotalTags: document.getElementById("analyzer-total-tags"),
    analyzerUniqueTags: document.getElementById("analyzer-unique-tags"),
    analyzerHeadings: document.getElementById("analyzer-headings"),
    analyzerParagraphs: document.getElementById("analyzer-paragraphs"),
    analyzerLinks: document.getElementById("analyzer-links"),
    analyzerImages: document.getElementById("analyzer-images"),
    analyzerLists: document.getElementById("analyzer-lists"),
    analyzerTables: document.getElementById("analyzer-tables"),
    analyzerCodeBlocks: document.getElementById("analyzer-code-blocks"),

    // Local History
    historyList: document.getElementById("history-list"),
    btnSaveSnapshot: document.getElementById("btn-save-snapshot"),
    btnClearHistory: document.getElementById("btn-clear-history"),

    // Search Modal
    searchModal: document.getElementById("search-modal"),
    searchTriggerBtn: document.getElementById("search-trigger-btn"),
    searchCloseBtn: document.getElementById("search-close-btn"),
    searchInput: document.getElementById("search-input"),
    searchResultsList: document.getElementById("search-results-list"),

    // Mobile Navigation Drawer
    mobileToggleBtn: document.getElementById("mobile-toggle-btn"),
    mobileMenuBackdrop: document.getElementById("mobile-menu-backdrop"),
    mobileNavDrawer: document.getElementById("mobile-nav-drawer"),
    mobileCloseBtn: document.getElementById("mobile-close-btn"),

    // Toast
    toast: document.getElementById("toast-notification"),
    toastMessage: document.getElementById("toast-message"),
  };

  // ==========================================================================
  // 5. TOAST NOTIFICATION UTILITY
  // ==========================================================================
  let toastTimeout = null;

  function showToast(message, duration = 2800) {
    if (!dom.toast || !dom.toastMessage) return;
    dom.toastMessage.textContent = message;
    dom.toast.classList.add("show");

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      dom.toast.classList.remove("show");
    }, duration);
  }

  // ==========================================================================
  // 6. BUILT-IN AUTONOMOUS MARKDOWN PARSER (Fallback & Resilience Engine)
  // ==========================================================================
  /**
   * Complete, robust autonomous parser that functions independently if
   * marked.js is blocked, unavailable, or offline.
   */
  function autonomousMarkdownParser(src) {
    if (!src || typeof src !== "string") return "";

    let lines = src.split(/\r?\n/);
    let output = [];
    let inCodeBlock = false;
    let codeLanguage = "";
    let codeBuffer = [];
    let inList = false;
    let listType = ""; // 'ul' or 'ol'
    let inTable = false;
    let tableBuffer = [];

    const flushTable = () => {
      if (tableBuffer.length === 0) return;
      let html = '<div class="table-responsive-wrapper"><table>\n';
      let hasHeader = false;

      tableBuffer.forEach((rowLine, idx) => {
        let cells = rowLine
          .trim()
          .split("|")
          .map((c) => c.trim())
          .filter((c, i, arr) => i !== 0 && i !== arr.length - 1);
        // Check if separator line
        if (cells.some((c) => /^:?-+:?$/.test(c))) {
          hasHeader = true;
          return;
        }

        if (idx === 0 || !hasHeader) {
          html += "<thead><tr>\n";
          cells.forEach((cell) => {
            html += `  <th>${parseInline(cell)}</th>\n`;
          });
          html += "</tr></thead>\n<tbody>\n";
        } else {
          html += "<tr>\n";
          cells.forEach((cell) => {
            html += `  <td>${parseInline(cell)}</td>\n`;
          });
          html += "</tr>\n";
        }
      });

      if (hasHeader) html += "</tbody>\n";
      html += "</table></div>\n";
      output.push(html);
      tableBuffer = [];
      inTable = false;
    };

    const flushList = () => {
      if (inList) {
        output.push(`</${listType}>\n`);
        inList = false;
        listType = "";
      }
    };

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];

      // Fenced code blocks
      let codeMatch = line.match(/^```(\w+)?/);
      if (codeMatch) {
        if (inCodeBlock) {
          let escapedCode = codeBuffer
            .join("\n")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
          let langClass = codeLanguage
            ? ` class="language-${codeLanguage}"`
            : "";
          output.push(`<pre><code${langClass}>${escapedCode}</code></pre>\n`);
          codeBuffer = [];
          inCodeBlock = false;
          codeLanguage = "";
        } else {
          flushList();
          flushTable();
          inCodeBlock = true;
          codeLanguage = codeMatch[1] || "";
        }
        continue;
      }

      if (inCodeBlock) {
        codeBuffer.push(line);
        continue;
      }

      // Markdown tables
      if (/^\|(.+)\|$/.test(line.trim())) {
        flushList();
        inTable = true;
        tableBuffer.push(line);
        continue;
      } else if (inTable) {
        flushTable();
      }

      // Horizontal rules
      if (/^(?:[-*_]\s*){3,}$/.test(line.trim())) {
        flushList();
        output.push("<hr>\n");
        continue;
      }

      // Headings (H1 - H6)
      let headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
      if (headingMatch) {
        flushList();
        let level = headingMatch[1].length;
        let text = parseInline(headingMatch[2]);
        output.push(`<h${level}>${text}</h${level}>\n`);
        continue;
      }

      // Blockquotes
      let quoteMatch = line.match(/^>\s*(.*)$/);
      if (quoteMatch) {
        flushList();
        let text = parseInline(quoteMatch[1]);
        output.push(`<blockquote><p>${text}</p></blockquote>\n`);
        continue;
      }

      // Task lists
      let taskMatch = line.match(/^[-*]\s+\[([ xX])\]\s+(.*)$/);
      if (taskMatch) {
        if (!inList || listType !== "ul") {
          flushList();
          output.push('<ul class="task-list">\n');
          inList = true;
          listType = "ul";
        }
        let checked =
          taskMatch[1].toLowerCase() === "x"
            ? ' checked="" disabled=""'
            : ' disabled=""';
        let text = parseInline(taskMatch[2]);
        output.push(
          `<li class="task-list-item"><input type="checkbox"${checked}> ${text}</li>\n`,
        );
        continue;
      }

      // Unordered lists
      let ulMatch = line.match(/^[-*+]\s+(.*)$/);
      if (ulMatch) {
        if (!inList || listType !== "ul") {
          flushList();
          output.push("<ul>\n");
          inList = true;
          listType = "ul";
        }
        output.push(`<li>${parseInline(ulMatch[1])}</li>\n`);
        continue;
      }

      // Ordered lists
      let olMatch = line.match(/^\d+\.\s+(.*)$/);
      if (olMatch) {
        if (!inList || listType !== "ol") {
          flushList();
          output.push("<ol>\n");
          inList = true;
          listType = "ol";
        }
        output.push(`<li>${parseInline(olMatch[1])}</li>\n`);
        continue;
      }

      // Empty line breaks lists
      if (line.trim() === "") {
        flushList();
        continue;
      }

      // Regular paragraph
      flushList();
      output.push(`<p>${parseInline(line)}</p>\n`);
    }

    if (inCodeBlock) {
      let escapedCode = codeBuffer
        .join("\n")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      output.push(`<pre><code>${escapedCode}</code></pre>\n`);
    }

    flushList();
    flushTable();

    return output.join("");
  }

  // Parse inline elements (Bold, Italic, Code, Images, Links, Strikethrough)
  function parseInline(str) {
    if (!str) return "";

    // Escape raw HTML entities first to prevent injection
    str = str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Inline Code
    str = str.replace(/`([^`]+)`/g, "<code>$1</code>");

    // Images: ![alt](url)
    str = str.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, url) => {
      let safeUrl = sanitizeUrl(url);
      return `<img src="${safeUrl}" alt="${alt}" loading="lazy">`;
    });

    // Links: [text](url)
    str = str.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
      let safeUrl = sanitizeUrl(url);
      return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    });

    // Bold + Italic: ***text***
    str = str.replace(/\*\*\*([^*]+)\*\*\*/g, "<strong><em>$1</em></strong>");

    // Bold: **text** or __text__
    str = str.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    str = str.replace(/__([^_]+)__/g, "<strong>$1</strong>");

    // Italic: *text* or _text_
    str = str.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    str = str.replace(/_([^_]+)_/g, "<em>$1</em>");

    // Strikethrough: ~~text~~
    str = str.replace(/~~([^~]+)~~/g, "<del>$1</del>");

    return str;
  }

  // Protocol filter to block javascript: or data: injection
  function sanitizeUrl(url) {
    let trimmed = url.trim();
    if (/^(?:javascript|data|vbscript):/i.test(trimmed)) {
      return "#";
    }
    return trimmed;
  }

  // ==========================================================================
  // 7. SECURITY & SANITIZATION ENGINE
  // ==========================================================================
  /**
   * Sanitizes output markup thoroughly using DOMPurify if available, or an
   * aggressive built-in AST sanitizer.
   */
  function sanitizeGeneratedMarkup(rawHtml) {
    if (!rawHtml) return "";

    // 1. Prefer DOMPurify if loaded in browser
    if (
      typeof window.DOMPurify !== "undefined" &&
      typeof window.DOMPurify.sanitize === "function"
    ) {
      return window.DOMPurify.sanitize(rawHtml, {
        ALLOWED_TAGS: [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "p",
          "a",
          "img",
          "blockquote",
          "ul",
          "ol",
          "li",
          "code",
          "pre",
          "table",
          "thead",
          "tbody",
          "tr",
          "th",
          "td",
          "hr",
          "strong",
          "em",
          "del",
          "span",
          "div",
          "input",
          "br",
        ],
        ALLOWED_ATTR: [
          "href",
          "src",
          "alt",
          "title",
          "class",
          "target",
          "rel",
          "loading",
          "type",
          "checked",
          "disabled",
        ],
      });
    }

    // 2. Strict built-in DOM fallback sanitizer
    let parser = new DOMParser();
    let doc = parser.parseFromString(rawHtml, "text/html");

    // Remove all scripts, styles, objects, embeds, iframes
    let dangerousNodes = doc.querySelectorAll(
      "script, style, iframe, object, embed, link, meta",
    );
    dangerousNodes.forEach((n) => n.remove());

    // Clean attributes and unsafe protocols
    let allElements = doc.body.querySelectorAll("*");
    allElements.forEach((el) => {
      // Remove inline event handlers (onclick, onload, onerror, etc.)
      for (let i = el.attributes.length - 1; i >= 0; i--) {
        let attr = el.attributes[i];
        if (attr.name.startsWith("on") || attr.name === "srcdoc") {
          el.removeAttribute(attr.name);
        }
      }

      // Check href and src
      if (el.hasAttribute("href")) {
        let href = el.getAttribute("href");
        if (/^(?:javascript|data|vbscript):/i.test(href)) {
          el.setAttribute("href", "#");
        } else {
          el.setAttribute("rel", "noopener noreferrer");
          el.setAttribute("target", "_blank");
        }
      }

      if (el.hasAttribute("src")) {
        let src = el.getAttribute("src");
        if (/^(?:javascript|vbscript):/i.test(src)) {
          el.removeAttribute("src");
        }
      }
    });

    return doc.body.innerHTML;
  }

  // ==========================================================================
  // 8. CORE CONVERSION PIPELINE
  // ==========================================================================
  function convertMarkdownToHtml(markdownSource) {
    if (!markdownSource || markdownSource.trim() === "") {
      return "";
    }

    let parsed = "";

    // If external marked library is available, use it with GFM
    if (
      typeof window.marked !== "undefined" &&
      typeof window.marked.parse === "function"
    ) {
      try {
        parsed = window.marked.parse(markdownSource, {
          gfm: true,
          breaks: true,
        });
      } catch (err) {
        console.warn(
          "External marked parser encountered an issue. Falling back to autonomous parser:",
          err,
        );
        parsed = autonomousMarkdownParser(markdownSource);
      }
    } else {
      parsed = autonomousMarkdownParser(markdownSource);
    }

    // Sanitize before any DOM injection or code view
    return sanitizeGeneratedMarkup(parsed);
  }

  // Beautify / Format HTML helper
  function formatHtml(html) {
    if (!html) return "";
    let tab = "  ";
    let result = "";
    let indent = 0;

    html.split(/>\s*</).forEach((element) => {
      if (element.match(/^\/\w/)) {
        indent -= 1;
      }
      result += tab.repeat(Math.max(0, indent)) + "<" + element + ">\n";
      if (
        element.match(/^<?\w[^>]*[^\/]$/) &&
        !element.startsWith("input") &&
        !element.startsWith("img") &&
        !element.startsWith("hr") &&
        !element.startsWith("br")
      ) {
        indent += 1;
      }
    });

    return result.substring(1, result.length - 2);
  }

  // ==========================================================================
  // 9. LIVE VIEW & DISPLAY UPDATE
  // ==========================================================================
  function updateApplicationView() {
    state.markdown = dom.markdownInput ? dom.markdownInput.value : "";
    state.html = convertMarkdownToHtml(state.markdown);

    // 1. Update Preview Pane
    if (dom.previewPane) {
      if (!state.html || state.html.trim() === "") {
        dom.previewPane.innerHTML = `<div style="color: var(--ink-faint); text-align: center; padding: 60px 20px; font-style: italic;">Your live rendered Markdown will appear here...</div>`;
      } else {
        dom.previewPane.innerHTML = `<div class="rendered-markdown-content">${state.html}</div>`;
      }
    }

    // 2. Update HTML Source View
    if (dom.htmlCodePre) {
      let displayHtml = state.html;
      if (state.isBeautified && state.html) {
        try {
          displayHtml = formatHtml(state.html);
        } catch (e) {
          displayHtml = state.html;
        }
      }
      dom.htmlCodePre.textContent =
        displayHtml || "<!-- Generated HTML source will appear here -->";
    }

    // 3. Update Status Badges
    if (dom.editorStatusBadge) {
      if (!state.markdown) {
        dom.editorStatusBadge.className = "status-badge status-ready";
        dom.editorStatusBadge.textContent = "Empty";
      } else {
        dom.editorStatusBadge.className = "status-badge status-ready";
        dom.editorStatusBadge.textContent = "Ready";
      }
    }

    if (dom.outputStatusBadge) {
      dom.outputStatusBadge.className = "status-badge status-ready";
      dom.outputStatusBadge.textContent = state.html
        ? "Converted"
        : "Awaiting Input";
    }

    // 4. Update Header & Footer Counters
    calculateAndDisplayMetrics();

    // 5. Update Synchronized Line Numbers
    updateLineNumbers();
  }

  // ==========================================================================
  // 10. REAL METRICS & HTML ANALYZER CALCULATIONS
  // ==========================================================================
  function calculateAndDisplayMetrics() {
    let md = state.markdown || "";
    let html = state.html || "";

    // Markdown Stats
    let mdChars = md.length;
    let mdWords = md.trim() ? (md.trim().match(/\S+/g) || []).length : 0;
    let mdLines = md ? md.split("\n").length : 0;

    // HTML Stats
    let htmlChars = html.length;
    let htmlLines = html ? html.split("\n").length : 0;
    let htmlBytes = new Blob([html]).size;

    // Structural counts parsed via lightweight DOM inspection
    let tempDoc = document.createElement("div");
    tempDoc.innerHTML = html;

    let headingsCount = tempDoc.querySelectorAll(
      "h1, h2, h3, h4, h5, h6",
    ).length;
    let linksCount = tempDoc.querySelectorAll("a").length;
    let imagesCount = tempDoc.querySelectorAll("img").length;
    let listsCount = tempDoc.querySelectorAll("ul, ol").length;
    let codeBlocksCount = tempDoc.querySelectorAll("pre code").length;
    let tablesCount = tempDoc.querySelectorAll("table").length;
    let paragraphsCount = tempDoc.querySelectorAll("p").length;

    // Total and Unique Tags for Analyzer
    let allTags = Array.from(tempDoc.querySelectorAll("*")).map((el) =>
      el.tagName.toLowerCase(),
    );
    let totalTagsCount = allTags.length;
    let uniqueTagsCount = new Set(allTags).size;

    // Update Quick Counter Badges
    if (dom.inputLineCount) dom.inputLineCount.textContent = mdLines;
    if (dom.inputWordCount) dom.inputWordCount.textContent = mdWords;
    if (dom.inputCharCount) dom.inputCharCount.textContent = mdChars;
    if (dom.outputSizeCount) dom.outputSizeCount.textContent = `${htmlBytes} B`;
    if (dom.outputLineCount) dom.outputLineCount.textContent = htmlLines;

    // Update Dashboard Metrics Cards
    if (dom.metricMdChars)
      dom.metricMdChars.textContent = mdChars.toLocaleString();
    if (dom.metricMdWords)
      dom.metricMdWords.textContent = mdWords.toLocaleString();
    if (dom.metricMdLines)
      dom.metricMdLines.textContent = mdLines.toLocaleString();
    if (dom.metricHtmlChars)
      dom.metricHtmlChars.textContent = htmlChars.toLocaleString();
    if (dom.metricHtmlLines)
      dom.metricHtmlLines.textContent = htmlLines.toLocaleString();
    if (dom.metricHeadings) dom.metricHeadings.textContent = headingsCount;
    if (dom.metricLinks) dom.metricLinks.textContent = linksCount;
    if (dom.metricImages) dom.metricImages.textContent = imagesCount;
    if (dom.metricLists) dom.metricLists.textContent = listsCount;
    if (dom.metricCodeBlocks)
      dom.metricCodeBlocks.textContent = codeBlocksCount;
    if (dom.metricTables) dom.metricTables.textContent = tablesCount;

    // Update HTML Analyzer Section
    if (dom.analyzerTotalTags)
      dom.analyzerTotalTags.textContent = totalTagsCount;
    if (dom.analyzerUniqueTags)
      dom.analyzerUniqueTags.textContent = uniqueTagsCount;
    if (dom.analyzerHeadings) dom.analyzerHeadings.textContent = headingsCount;
    if (dom.analyzerParagraphs)
      dom.analyzerParagraphs.textContent = paragraphsCount;
    if (dom.analyzerLinks) dom.analyzerLinks.textContent = linksCount;
    if (dom.analyzerImages) dom.analyzerImages.textContent = imagesCount;
    if (dom.analyzerLists) dom.analyzerLists.textContent = listsCount;
    if (dom.analyzerTables) dom.analyzerTables.textContent = tablesCount;
    if (dom.analyzerCodeBlocks)
      dom.analyzerCodeBlocks.textContent = codeBlocksCount;
  }

  // ==========================================================================
  // 11. LINE NUMBER GUTTER & SCROLL SYNCHRONIZATION
  // ==========================================================================
  function updateLineNumbers() {
    if (!dom.lineGutter || !dom.markdownInput) return;
    let lineCount = dom.markdownInput.value.split("\n").length;
    let numbers = [];
    for (let i = 1; i <= Math.max(lineCount, 1); i++) {
      numbers.push(i);
    }
    dom.lineGutter.innerHTML = numbers.join("<br>");
  }

  function handleEditorScroll() {
    if (!lineSyncScheduled) {
      lineSyncScheduled = true;
      requestAnimationFrame(() => {
        if (dom.lineGutter && dom.markdownInput) {
          dom.lineGutter.scrollTop = dom.markdownInput.scrollTop;
        }
        lineSyncScheduled = false;
      });
    }
  }

  // ==========================================================================
  // 12. TEXTAREA TOOLBAR ACTIONS & SELECTION MANIPULATION
  // ==========================================================================
  function insertFormatting(prefix, suffix, placeholder = "") {
    if (!dom.markdownInput) return;
    let input = dom.markdownInput;
    let start = input.selectionStart;
    let end = input.selectionEnd;
    let selected = input.value.substring(start, end);
    let textToWrap = selected || placeholder;

    let replacement = prefix + textToWrap + suffix;
    let before = input.value.substring(0, start);
    let after = input.value.substring(end);

    input.value = before + replacement + after;

    // Reset selection nicely
    let newCursorPos = start + prefix.length + textToWrap.length;
    input.focus();
    input.setSelectionRange(newCursorPos, newCursorPos);

    // Trigger update
    handleInputChange();
  }

  function insertBlockFormatting(prefix) {
    if (!dom.markdownInput) return;
    let input = dom.markdownInput;
    let start = input.selectionStart;
    let end = input.selectionEnd;
    let before = input.value.substring(0, start);
    let selected = input.value.substring(start, end);
    let after = input.value.substring(end);

    let needsNewlineBefore = before.length > 0 && !before.endsWith("\n");
    let needsNewlineAfter = after.length > 0 && !after.startsWith("\n");

    let finalPrefix = (needsNewlineBefore ? "\n" : "") + prefix;
    let finalSuffix = needsNewlineAfter ? "\n" : "";

    input.value = before + finalPrefix + selected + finalSuffix;
    let newCursor = start + finalPrefix.length + selected.length;
    input.focus();
    input.setSelectionRange(newCursor, newCursor);

    handleInputChange();
  }

  // ==========================================================================
  // 13. FILE UPLOAD, DRAG & DROP
  // ==========================================================================
  function loadFileContent(file) {
    if (!file) return;

    // Validate extension
    let validExtensions = [".md", ".markdown", ".txt", ".mdown", ".mkd"];
    let fileName = file.name.toLowerCase();
    let isValid = validExtensions.some((ext) => fileName.endsWith(ext));

    if (!isValid) {
      showToast("Please select a valid Markdown file (.md, .markdown, .txt)");
      return;
    }

    // Size limit guard: 5MB
    if (file.size > 5 * 1024 * 1024) {
      showToast("File is larger than 5MB. Please choose a smaller document.");
      return;
    }

    let reader = new FileReader();
    reader.onload = function (e) {
      if (dom.markdownInput) {
        dom.markdownInput.value = e.target.result;
        handleInputChange();
        showToast(
          `Loaded "${file.name}" (${(file.size / 1024).toFixed(1)} KB)`,
        );
      }
    };
    reader.onerror = function () {
      showToast("Error reading the selected file.");
    };
    reader.readAsText(file);
  }

  function setupDragAndDrop() {
    if (!dom.editorWrapper || !dom.dropZoneOverlay) return;

    let dragCounter = 0;

    dom.editorWrapper.addEventListener("dragenter", (e) => {
      e.preventDefault();
      dragCounter++;
      dom.dropZoneOverlay.classList.add("active");
    });

    dom.editorWrapper.addEventListener("dragleave", (e) => {
      e.preventDefault();
      dragCounter--;
      if (dragCounter <= 0) {
        dragCounter = 0;
        dom.dropZoneOverlay.classList.remove("active");
      }
    });

    dom.editorWrapper.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    dom.editorWrapper.addEventListener("drop", (e) => {
      e.preventDefault();
      dragCounter = 0;
      dom.dropZoneOverlay.classList.remove("active");

      if (
        e.dataTransfer &&
        e.dataTransfer.files &&
        e.dataTransfer.files.length > 0
      ) {
        loadFileContent(e.dataTransfer.files[0]);
      }
    });
  }

  // ==========================================================================
  // 14. CLIPBOARD & DOWNLOAD EXPORTS
  // ==========================================================================
  async function copyToClipboard(text, successMessage) {
    if (!text) {
      showToast("Nothing to copy!");
      return;
    }

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        showToast(successMessage);
      } else {
        // Fallback for older contexts
        let textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        let successful = document.execCommand("copy");
        document.body.removeChild(textarea);
        if (successful) {
          showToast(successMessage);
        } else {
          showToast("Copy command failed. Please copy manually.");
        }
      }
    } catch (err) {
      showToast("Unable to access clipboard. Please copy manually.");
    }
  }

  function downloadFile(content, filename, mimeType) {
    if (!content) {
      showToast("Document is empty!");
      return;
    }

    try {
      let blob = new Blob([content], { type: mimeType });
      let url = URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast(`Downloaded ${filename}`);
    } catch (err) {
      showToast("Download failed. Please check browser permissions.");
    }
  }

  // ==========================================================================
  // 15. LOCAL STORAGE HISTORY
  // ==========================================================================
  const HISTORY_STORAGE_KEY = "huzikit_markdown_history";

  function loadHistoryFromStorage() {
    try {
      let stored = localStorage.getItem(HISTORY_STORAGE_KEY);
      if (stored) {
        state.history = JSON.parse(stored);
      }
    } catch (e) {
      state.history = [];
    }
    renderHistoryList();
  }

  function saveHistoryToStorage() {
    try {
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(state.history));
    } catch (e) {
      console.warn("localStorage quota exceeded or disabled.");
    }
  }

  function addSnapshotToHistory() {
    if (!state.markdown || !state.markdown.trim()) {
      showToast("Cannot save empty document to history.");
      return;
    }

    let firstLine = state.markdown
      .trim()
      .split("\n")[0]
      .replace(/^[#\s*>-]+/, "")
      .trim();
    let title = firstLine.substring(0, 45) || "Markdown Document";

    let item = {
      id: "doc_" + Date.now(),
      title: title,
      content: state.markdown,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        month: "short",
        day: "numeric",
      }),
    };

    // Keep maximum 10 recent items
    state.history.unshift(item);
    if (state.history.length > 10) {
      state.history = state.history.slice(0, 10);
    }

    saveHistoryToStorage();
    renderHistoryList();
    showToast("Saved document snapshot to local history.");
  }

  function renderHistoryList() {
    if (!dom.historyList) return;

    if (!state.history || state.history.length === 0) {
      dom.historyList.innerHTML = `<div class="history-empty-state">No saved document snapshots in browser history yet. Click "Save Snapshot" to record current work.</div>`;
      return;
    }

    dom.historyList.innerHTML = "";
    state.history.forEach((item, index) => {
      let div = document.createElement("div");
      div.className = "history-item";
      div.innerHTML = `
        <div class="history-meta">
          <span class="history-snippet">${escapeHtml(item.title)}</span>
          <span class="history-timestamp">${item.timestamp}</span>
        </div>
        <div class="history-actions">
          <button type="button" class="tool-btn btn-restore" data-id="${item.id}">Restore</button>
          <button type="button" class="tool-btn btn-delete-item" data-id="${item.id}" aria-label="Delete history item">✕</button>
        </div>
      `;

      // Restore button
      div.querySelector(".btn-restore").addEventListener("click", () => {
        if (dom.markdownInput) {
          dom.markdownInput.value = item.content;
          handleInputChange();
          showToast(`Restored: "${item.title}"`);
          dom.markdownInput.scrollIntoView({ behavior: "smooth" });
        }
      });

      // Delete button
      div.querySelector(".btn-delete-item").addEventListener("click", () => {
        state.history = state.history.filter((h) => h.id !== item.id);
        saveHistoryToStorage();
        renderHistoryList();
        showToast("Deleted item from history.");
      });

      dom.historyList.appendChild(div);
    });
  }

  function escapeHtml(text) {
    return text.replace(/[&<>"']/g, function (m) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[m];
    });
  }

  // ==========================================================================
  // 16. EVENT HANDLERS & DEBOUNCED INPUT
  // ==========================================================================
  function handleInputChange() {
    if (dom.editorStatusBadge) {
      dom.editorStatusBadge.className = "status-badge status-typing";
      dom.editorStatusBadge.textContent = "Typing...";
    }

    if (parseDebounceTimer) clearTimeout(parseDebounceTimer);
    parseDebounceTimer = setTimeout(() => {
      updateApplicationView();
    }, 120);
  }

  // ==========================================================================
  // 17. SEARCH MODAL FUNCTIONALITY (All 30 Tools)
  // ==========================================================================
  function openSearchModal() {
    if (!dom.searchModal) return;
    dom.searchModal.classList.add("open");
    if (dom.searchInput) {
      dom.searchInput.value = "";
      dom.searchInput.focus();
      renderSearchResults("");
    }
  }

  function closeSearchModal() {
    if (!dom.searchModal) return;
    dom.searchModal.classList.remove("open");
  }

  function renderSearchResults(query) {
    if (!dom.searchResultsList) return;
    dom.searchResultsList.innerHTML = "";

    let q = query.trim().toLowerCase();
    let filtered = HUZIKIT_TOOLS.filter((tool) => {
      return (
        tool.name.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q)
      );
    });

    if (filtered.length === 0) {
      dom.searchResultsList.innerHTML = `<div class="search-empty-text">No tools found matching "${escapeHtml(query)}"</div>`;
      return;
    }

    filtered.forEach((tool, index) => {
      let li = document.createElement("li");
      li.className = "search-result-item";
      li.innerHTML = `
        <a href="${tool.url}" class="${index === 0 ? "highlighted" : ""}">
          <span>${escapeHtml(tool.name)}</span>
          <span class="search-result-cat">${escapeHtml(tool.category)}</span>
        </a>
      `;
      dom.searchResultsList.appendChild(li);
    });
  }

  // ==========================================================================
  // 18. MOBILE NAVIGATION & DRAWER ACCORDIONS
  // ==========================================================================
  function toggleMobileMenu() {
    if (!dom.mobileNavDrawer || !dom.mobileMenuBackdrop || !dom.mobileToggleBtn)
      return;
    let isOpen = dom.mobileNavDrawer.classList.contains("open");

    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    dom.mobileNavDrawer.classList.add("open");
    dom.mobileMenuBackdrop.classList.add("open");
    dom.mobileToggleBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden"; // Prevent page scroll when open
  }

  function closeMobileMenu() {
    dom.mobileNavDrawer.classList.remove("open");
    dom.mobileMenuBackdrop.classList.remove("open");
    dom.mobileToggleBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  // ==========================================================================
  // 19. FAQ ACCORDION HANDLERS
  // ==========================================================================
  function setupFaqAccordions() {
    let faqButtons = document.querySelectorAll(".faq-question-btn");
    faqButtons.forEach((button) => {
      button.addEventListener("click", () => {
        let parentItem = button.closest(".faq-item");
        let isExpanded = button.getAttribute("aria-expanded") === "true";

        // Close others for clean accordion pattern
        document.querySelectorAll(".faq-item").forEach((item) => {
          if (item !== parentItem) {
            item.classList.remove("active");
            let btn = item.querySelector(".faq-question-btn");
            if (btn) btn.setAttribute("aria-expanded", "false");
          }
        });

        if (isExpanded) {
          parentItem.classList.remove("active");
          button.setAttribute("aria-expanded", "false");
        } else {
          parentItem.classList.add("active");
          button.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  // ==========================================================================
  // 20. INITIALIZATION & ATTACH LISTENERS
  // ==========================================================================
  function initializeEventListeners() {
    // Editor typing & scroll
    if (dom.markdownInput) {
      dom.markdownInput.addEventListener("input", handleInputChange);
      dom.markdownInput.addEventListener("scroll", handleEditorScroll);

      // Keyboard shortcuts
      dom.markdownInput.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "b") {
          e.preventDefault();
          insertFormatting("**", "**", "bold text");
        } else if ((e.ctrlKey || e.metaKey) && e.key === "i") {
          e.preventDefault();
          insertFormatting("*", "*", "italic text");
        } else if (e.key === "Tab") {
          e.preventDefault();
          let start = dom.markdownInput.selectionStart;
          let end = dom.markdownInput.selectionEnd;
          dom.markdownInput.value =
            dom.markdownInput.value.substring(0, start) +
            "  " +
            dom.markdownInput.value.substring(end);
          dom.markdownInput.selectionStart = dom.markdownInput.selectionEnd =
            start + 2;
          handleInputChange();
        }
      });
    }

    // View Switcher Tabs (Live Preview vs HTML Source)
    if (dom.tabPreviewBtn && dom.tabHtmlBtn) {
      dom.tabPreviewBtn.addEventListener("click", () => {
        state.currentTab = "preview";
        dom.tabPreviewBtn.classList.add("active");
        dom.tabHtmlBtn.classList.remove("active");
        if (dom.previewPane) dom.previewPane.classList.remove("hidden");
        if (dom.htmlSourcePane) dom.htmlSourcePane.classList.add("hidden");
      });

      dom.tabHtmlBtn.addEventListener("click", () => {
        state.currentTab = "html";
        dom.tabHtmlBtn.classList.add("active");
        dom.tabPreviewBtn.classList.remove("active");
        if (dom.htmlSourcePane) dom.htmlSourcePane.classList.remove("hidden");
        if (dom.previewPane) dom.previewPane.classList.add("hidden");
      });
    }

    // Toolbar Buttons
    let tbActionButtons = document.querySelectorAll("[data-tb-action]");
    tbActionButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        let action = btn.getAttribute("data-tb-action");
        switch (action) {
          case "bold":
            insertFormatting("**", "**", "bold text");
            break;
          case "italic":
            insertFormatting("*", "*", "italic text");
            break;
          case "strike":
            insertFormatting("~~", "~~", "strikethrough text");
            break;
          case "link":
            insertFormatting("[", "](https://example.com)", "link title");
            break;
          case "image":
            insertFormatting(
              "![",
              "](https://example.com/image.jpg)",
              "Image alt",
            );
            break;
          case "quote":
            insertBlockFormatting("> ");
            break;
          case "code-inline":
            insertFormatting("`", "`", "code");
            break;
          case "code-block":
            insertBlockFormatting("```javascript\n// Write code here\n```\n");
            break;
          case "ul":
            insertBlockFormatting("- Item 1\n- Item 2\n- Item 3\n");
            break;
          case "ol":
            insertBlockFormatting("1. Step 1\n2. Step 2\n3. Step 3\n");
            break;
          case "task":
            insertBlockFormatting(
              "- [ ] Task to complete\n- [x] Completed task\n",
            );
            break;
          case "hr":
            insertBlockFormatting("\n---\n");
            break;
          case "table":
            insertBlockFormatting(
              "\n| Column 1 | Column 2 | Column 3 |\n| :--- | :---: | ---: |\n| Value 1 | Value 2 | Value 3 |\n| Value 4 | Value 5 | Value 6 |\n",
            );
            break;
        }
      });
    });

    // Heading Select dropdown
    let headingSelect = document.getElementById("tb-heading-select");
    if (headingSelect) {
      headingSelect.addEventListener("change", (e) => {
        let val = e.target.value;
        if (val) {
          insertBlockFormatting(val + " ");
          e.target.value = "";
        }
      });
    }

    // Editor Quick Actions
    if (dom.btnClear) {
      dom.btnClear.addEventListener("click", () => {
        if (dom.markdownInput) {
          dom.markdownInput.value = "";
          handleInputChange();
          showToast("Cleared editor input.");
        }
      });
    }

    if (dom.btnResetSample) {
      dom.btnResetSample.addEventListener("click", () => {
        if (dom.markdownInput) {
          dom.markdownInput.value = SAMPLE_MARKDOWN;
          handleInputChange();
          showToast("Reset to sample Markdown.");
        }
      });
    }

    if (dom.btnCopyMarkdown) {
      dom.btnCopyMarkdown.addEventListener("click", () => {
        copyToClipboard(state.markdown, "Markdown copied to clipboard!");
      });
    }

    if (dom.btnDownloadMarkdown) {
      dom.btnDownloadMarkdown.addEventListener("click", () => {
        downloadFile(
          state.markdown,
          "huzikit-markdown.md",
          "text/markdown;charset=utf-8",
        );
      });
    }

    // File Upload Button Trigger
    if (dom.btnUpload && dom.fileUploadInput) {
      dom.btnUpload.addEventListener("click", () => {
        dom.fileUploadInput.click();
      });
      dom.fileUploadInput.addEventListener("change", (e) => {
        if (e.target.files && e.target.files.length > 0) {
          loadFileContent(e.target.files[0]);
          e.target.value = ""; // Reset for re-selection
        }
      });
    }

    // Output Actions
    if (dom.btnCopyHtml) {
      dom.btnCopyHtml.addEventListener("click", () => {
        copyToClipboard(state.html, "HTML copied to clipboard!");
      });
    }

    if (dom.btnDownloadHtml) {
      dom.btnDownloadHtml.addEventListener("click", () => {
        let completeDocument = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Converted Document</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #15132B; }
    pre { background: #1B1834; color: #F8F7FF; padding: 16px; border-radius: 8px; overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; margin: 1.5em 0; }
    th, td { border: 1px solid #E7E4F6; padding: 8px 12px; text-align: left; }
    th { background: #F4F2FF; }
    blockquote { border-left: 4px solid #4F46E5; padding-left: 16px; color: #4D4A6B; margin: 1.5em 0; }
    img { max-width: 100%; height: auto; border-radius: 6px; }
  </style>
</head>
<body>
${state.html}
</body>
</html>`;
        downloadFile(
          completeDocument,
          "huzikit-markdown.html",
          "text/html;charset=utf-8",
        );
      });
    }

    if (dom.btnBeautifyHtml) {
      dom.btnBeautifyHtml.addEventListener("click", () => {
        state.isBeautified = !state.isBeautified;
        dom.btnBeautifyHtml.classList.toggle(
          "tool-btn-primary",
          state.isBeautified,
        );
        updateApplicationView();
        showToast(
          state.isBeautified
            ? "Beautified HTML formatting active"
            : "Compact HTML format active",
        );
      });
    }

    if (dom.btnSelectAllHtml) {
      dom.btnSelectAllHtml.addEventListener("click", () => {
        if (dom.htmlCodePre) {
          let range = document.createRange();
          range.selectNodeContents(dom.htmlCodePre);
          let sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          showToast("Selected all HTML output");
        }
      });
    }

    if (dom.btnManualConvert) {
      dom.btnManualConvert.addEventListener("click", () => {
        updateApplicationView();
        showToast("Manually converted Markdown to HTML!");
      });
    }

    // Preset Loaders
    document.querySelectorAll("[data-preset]").forEach((btn) => {
      btn.addEventListener("click", () => {
        let presetType = btn.getAttribute("data-preset");
        switch (presetType) {
          case "default":
            dom.markdownInput.value = SAMPLE_MARKDOWN;
            break;
          case "docs":
            dom.markdownInput.value = PRESET_DOCUMENTATION;
            break;
          case "tables":
            dom.markdownInput.value = PRESET_TABLES_TASKS;
            break;
          case "blog":
            dom.markdownInput.value = PRESET_BLOG;
            break;
        }
        handleInputChange();
        showToast(`Loaded ${btn.textContent.trim()}`);
      });
    });

    // History buttons
    if (dom.btnSaveSnapshot)
      dom.btnSaveSnapshot.addEventListener("click", addSnapshotToHistory);
    if (dom.btnClearHistory) {
      dom.btnClearHistory.addEventListener("click", () => {
        state.history = [];
        saveHistoryToStorage();
        renderHistoryList();
        showToast("Cleared local document history.");
      });
    }

    // Cheat Sheet Copy buttons
    document.querySelectorAll(".cheat-copy-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        let codeElem = btn.closest(".cheat-card").querySelector(".cheat-code");
        if (codeElem) {
          copyToClipboard(codeElem.textContent, "Snippet copied to clipboard!");
        }
      });
    });

    // Global Search Modal Events
    if (dom.searchTriggerBtn)
      dom.searchTriggerBtn.addEventListener("click", openSearchModal);
    if (dom.searchCloseBtn)
      dom.searchCloseBtn.addEventListener("click", closeSearchModal);

    if (dom.searchModal) {
      dom.searchModal.addEventListener("click", (e) => {
        if (e.target === dom.searchModal) closeSearchModal();
      });
    }

    if (dom.searchInput) {
      dom.searchInput.addEventListener("input", (e) => {
        renderSearchResults(e.target.value);
      });

      dom.searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeSearchModal();
      });
    }

    // Global Shortcut: Ctrl+K / Cmd+K
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        openSearchModal();
      }
      if (e.key === "Escape") {
        closeSearchModal();
        closeMobileMenu();
      }
    });

    // Mobile Hamburger & Backdrop
    if (dom.mobileToggleBtn)
      dom.mobileToggleBtn.addEventListener("click", toggleMobileMenu);
    if (dom.mobileCloseBtn)
      dom.mobileCloseBtn.addEventListener("click", closeMobileMenu);
    if (dom.mobileMenuBackdrop)
      dom.mobileMenuBackdrop.addEventListener("click", closeMobileMenu);

    // Mobile Drawer Accordions
    document.querySelectorAll(".mobile-accordion-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        let item = btn.closest(".mobile-accordion-item");
        let wasExpanded = item.classList.contains("expanded");

        // Close sibling accordions
        document.querySelectorAll(".mobile-accordion-item").forEach((other) => {
          if (other !== item) other.classList.remove("expanded");
        });

        item.classList.toggle("expanded", !wasExpanded);
      });
    });

    // Close mobile drawer when any link is clicked
    document
      .querySelectorAll(".mobile-sublink, .mobile-direct-link")
      .forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
      });

    // Initialize Drag & Drop
    setupDragAndDrop();

    // Initialize FAQ
    setupFaqAccordions();

    // Load Local History
    loadHistoryFromStorage();
  }

  // ==========================================================================
  // 21. STARTUP
  // ==========================================================================
  function init() {
    initializeEventListeners();

    // Set initial sample content
    if (dom.markdownInput) {
      dom.markdownInput.value = SAMPLE_MARKDOWN;
      updateApplicationView();
    }
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
