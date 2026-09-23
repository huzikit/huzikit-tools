/**
 * HuziHub Character Counter Master Script
 * Fully modular, robust search engine, real-time counters, mobile drawer & FAQ handler.
 */
(() => {
  "use strict";

  // Complete 30 Tools Search Index for HuziHub
  const toolsIndex = [
    {
      name: "Word Counter",
      category: "Text Tools",
      description: "Count words, characters, sentences and more.",
      url: "/texttools/word-counter.html",
    },
    {
      name: "Character Counter",
      category: "Text Tools",
      description: "Count characters, words, sentences and more.",
      url: "/texttools/character-counter.html",
    },
    {
      name: "Case Converter",
      category: "Text Tools",
      description: "Convert text to uppercase, lowercase, title case and more.",
      url: "/texttools/case-converter.html",
    },
    {
      name: "Remove Duplicates",
      category: "Text Tools",
      description: "Clean up text lists by removing duplicate entries.",
      url: "/texttools/remove-duplicate-lines.html",
    },
    {
      name: "Lorem Ipsum Generator",
      category: "Text Tools",
      description: "Generate placeholder dummy text for design mockups.",
      url: "/texttools/loremipsumgenerator.html",
    },
    {
      name: "Password Generator",
      category: "Text Tools",
      description: "Generate secure, random cryptographic passwords.",
      url: "/texttools/passwordgenerator.html",
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      description: "Reverse text strings, words, or character order.",
      url: "/texttools/text-reverser.html",
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      description: "A fast, secure, browser-based scratchpad for notes.",
      url: "/texttools/onlinenotepad.html",
    },

    {
      name: "Age Calculator",
      category: "Calculators",
      description: "Calculate exact age in years, months, and days.",
      url: "/calculator/agecalculator.html",
    },
    {
      name: "BMI Calculator",
      category: "Calculators",
      description: "Calculate Body Mass Index and health status.",
      url: "https://huzihub.com/bmi-calculator/",
    },
    {
      name: "Percentage Calculator",
      category: "Calculators",
      description: "Calculate percentages, increases, and decreases.",
      url: "/calculator/percentage-calculator.html",
    },
    {
      name: "Calorie Calculator",
      category: "Calculators",
      description: "Estimate daily caloric requirements and BMR.",
      url: "/calculator/Calorie-Calculator.html",
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      description: "Calculate sale discounts and final savings.",
      url: "/calculator/discount-calculator.html",
    },
    {
      name: "Savings Calculator",
      category: "Calculators",
      description: "Project compound savings growth over time.",
      url: "/calculator/saving&goalcalculator.html",
    },
    {
      name: "Tip Calculator",
      category: "Calculators",
      description: "Calculate restaurant tips and bill splits.",
      url: "/calculators/tip-calculator.html",
    },
    {
      name: "GPA Calculator",
      category: "Calculators",
      description: "Calculate Grade Point Average and academic standing.",
      url: "/calculator/gpa-calculator.html",
    },

    {
      name: "Image Compressor",
      category: "Image & PDF",
      description: "Compress JPEG, PNG, and WebP images securely.",
      url: "/image&pdf/image-compressor.html",
    },
    {
      name: "Image Resizer",
      category: "Image & PDF",
      description: "Resize images by pixel dimensions or percentages.",
      url: "/image&pdf/image-resizer.html",
    },
    {
      name: "PDF to Word",
      category: "Image & PDF",
      description: "Convert PDF documents into editable Word files.",
      url: "/image-pdf/pdf-to-word.html",
    },
    {
      name: "JPG to PNG",
      category: "Image & PDF",
      description: "Convert image file formats seamlessly.",
      url: "/image&pdf/jpg-to-png.html",
    },
    {
      name: "Color Picker",
      category: "Image & PDF",
      description: "Pick and convert HEX, RGB, and HSL color codes.",
      url: "/image&pdf/colorpicker.html",
    },
    {
      name: "QR Code Generator",
      category: "Image & PDF",
      description: "Generate custom QR codes for URLs and text.",
      url: "/image&pdf/QRGenrator.html",
    },

    {
      name: "JSON Formatter",
      category: "Developer",
      description: "Format, validate, and minify JSON data structures.",
      url: "/developertools/JSONFORMATTER.html",
    },
    {
      name: "Base64 Utility",
      category: "Developer",
      description: "Encode and decode Base64 strings instantly.",
      url: "/developertools/base64encoderdecoder.html",
    },
    {
      name: "URL Encoder",
      category: "Developer",
      description: "URL encode and decode special characters.",
      url: "/developertools/urlencoderdecoder.html",
    },
    {
      name: "Meta Tag Generator",
      category: "Developer",
      description: "Generate SEO-optimized meta tags for web pages.",
      url: "/developertools/meta-tag-generator.html",
    },
    {
      name: "Regex Tester",
      category: "Developer",
      description: "Test and debug Regular Expressions in real-time.",
      url: "/developertools/regextester.html",
    },
    {
      name: "Markdown to HTML",
      category: "Developer",
      description: "Convert Markdown syntax into clean HTML code.",
      url: "/developertools/markdownhtml.html",
    },
    {
      name: "CSS Minifier",
      category: "Developer",
      description: "Minify CSS stylesheets to improve load times.",
      url: "/developertools/cssminifier.html",
    },
    {
      name: "Unix Timestamp",
      category: "Developer",
      description: "Convert between Unix timestamps and human dates.",
      url: "/developertools/unixtimestamp.html",
    },
  ];

  // DOM Loaded Execution
  document.addEventListener("DOMContentLoaded", () => {
    initSearchSystem();
    initMobileDrawer();
    initCharacterCounter();
    initFAQAccordion();
  });

  /* --------------------------------------------------------
     1. SEARCH SYSTEM (Fully Functional & Robust)
  -------------------------------------------------------- */
  function initSearchSystem() {
    const searchModal = document.getElementById("searchModal");
    const searchOpenBtn = document.getElementById("searchOpenBtn");
    const searchCloseBtn = document.getElementById("searchCloseBtn");
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    if (!searchModal || !searchOpenBtn || !searchInput || !searchResults)
      return;

    let selectedIndex = -1;
    let currentFilteredTools = [];

    const openSearch = () => {
      searchModal.classList.add("open");
      searchModal.setAttribute("aria-hidden", "false");
      searchInput.value = "";
      renderResults(toolsIndex);
      setTimeout(() => searchInput.focus(), 50);
    };

    const closeSearch = () => {
      searchModal.classList.remove("open");
      searchModal.setAttribute("aria-hidden", "true");
      selectedIndex = -1;
    };

    searchOpenBtn.addEventListener("click", openSearch);
    if (searchCloseBtn) searchCloseBtn.addEventListener("click", closeSearch);

    searchModal.addEventListener("click", (e) => {
      if (
        e.target === searchModal ||
        e.target.classList.contains("search-modal-overlay")
      ) {
        closeSearch();
      }
    });

    // Keyboard Shortcuts: Ctrl+K / Cmd+K & Esc
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (searchModal.classList.contains("open")) {
          closeSearch();
        } else {
          openSearch();
        }
      }
      if (e.key === "Escape" && searchModal.classList.contains("open")) {
        closeSearch();
      }
    });

    // Input filtering
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim().toLowerCase();
      selectedIndex = -1;
      if (!query) {
        renderResults(toolsIndex);
        return;
      }
      currentFilteredTools = toolsIndex.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query) ||
          tool.category.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query),
      );
      renderResults(currentFilteredTools);
    });

    // Keyboard navigation inside search
    searchInput.addEventListener("keydown", (e) => {
      const items = searchResults.querySelectorAll(".search-result-item");
      if (!items.length) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % items.length;
        updateActiveResult(items);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        updateActiveResult(items);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          items[selectedIndex].click();
        } else if (items.length > 0) {
          items[0].click();
        }
      }
    });

    function renderResults(list) {
      currentFilteredTools = list;
      if (list.length === 0) {
        searchResults.innerHTML = `
          <div class="search-empty-state">
            <h4>No tools found</h4>
            <p>Try searching for another tool or category.</p>
          </div>
        `;
        return;
      }

      searchResults.innerHTML = list
        .map(
          (tool, index) => `
        <a href="${tool.url}" class="search-result-item" data-index="${index}">
          <div class="search-result-title-row">
            <span class="search-result-name">${highlightMatch(tool.name, searchInput.value)}</span>
            <span class="search-result-category">${tool.category}</span>
          </div>
          <span class="search-result-desc">${tool.description}</span>
        </a>
      `,
        )
        .join("");
    }

    function highlightMatch(text, query) {
      if (!query) return text;
      const regex = new RegExp(`(${escapeRegExp(query)})`, "gi");
      return text.replace(
        regex,
        '<mark style="background:var(--primary-light); color:var(--primary);">$1</mark>',
      );
    }

    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function updateActiveResult(items) {
      items.forEach((item, idx) => {
        if (idx === selectedIndex) {
          item.classList.add("selected");
          item.scrollIntoView({ block: "nearest", behavior: "smooth" });
        } else {
          item.classList.remove("selected");
        }
      });
    }
  }

  /* --------------------------------------------------------
     2. MOBILE DRAWER & ACCORDIONS
  -------------------------------------------------------- */
  function initMobileDrawer() {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const mobileCloseBtn = document.getElementById("mobileCloseBtn");
    const overlay = mobileDrawer?.querySelector(".mobile-drawer-overlay");

    if (!hamburgerBtn || !mobileDrawer) return;

    const openDrawer = () => {
      mobileDrawer.classList.add("open");
      mobileDrawer.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };

    const closeDrawer = () => {
      mobileDrawer.classList.remove("open");
      mobileDrawer.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    hamburgerBtn.addEventListener("click", openDrawer);
    if (mobileCloseBtn) mobileCloseBtn.addEventListener("click", closeDrawer);
    if (overlay) overlay.addEventListener("click", closeDrawer);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileDrawer.classList.contains("open")) {
        closeDrawer();
      }
    });

    // Mobile category accordions
    const accordions = mobileDrawer.querySelectorAll(".mobile-accordion");
    accordions.forEach((acc) => {
      const toggle = acc.querySelector(".mobile-accordion-toggle");
      toggle.addEventListener("click", () => {
        accordions.forEach((other) => {
          if (other !== acc) other.classList.remove("active");
        });
        acc.classList.toggle("active");
      });
    });
  }

  /* --------------------------------------------------------
     3. CHARACTER COUNTER ENGINE & ACTIONS
  -------------------------------------------------------- */
  function initCharacterCounter() {
    const textInput = document.getElementById("textInput");
    const statChars = document.getElementById("statChars");
    const statCharsNoSpaces = document.getElementById("statCharsNoSpaces");
    const statWords = document.getElementById("statWords");
    const statSentences = document.getElementById("statSentences");
    const statParagraphs = document.getElementById("statParagraphs");
    const statLines = document.getElementById("statLines");
    const statSpaces = document.getElementById("statSpaces");
    const statReadingTime = document.getElementById("statReadingTime");
    const statSpeakingTime = document.getElementById("statSpeakingTime");

    // Hero live card elements
    const mockCharVal = document.getElementById("mockCharVal");
    const mockWordVal = document.getElementById("mockWordVal");
    const mockReadVal = document.getElementById("mockReadVal");

    // Action buttons
    const copyBtn = document.getElementById("copyBtn");
    const copyStatsBtn = document.getElementById("copyStatsBtn");
    const sampleBtn = document.getElementById("sampleBtn");
    const downloadBtn = document.getElementById("downloadBtn");
    const clearBtn = document.getElementById("clearBtn");

    if (!textInput) return;

    const sampleTextContent =
      "HuziHub is the ultimate modern suite of lightning-fast, secure online web utilities, calculators, and developer tools. Designed with precision, elegance, and high performance, HuziHub empowers developers, writers, students, and professionals worldwide to accomplish tasks effortlessly without signups or artificial limits.";

    const updateStats = () => {
      const val = textInput.value;

      // Characters
      const chars = val.length;
      // Characters without spaces (excluding spaces, tabs, newlines)
      const charsNoSpaces = val.replace(/\s/g, "").length;

      // Words
      const trimmed = val.trim();
      const words = trimmed === "" ? 0 : trimmed.split(/\s+/).length;

      // Sentences (split by period, exclamation, question mark)
      const sentences =
        trimmed === ""
          ? 0
          : (
              val.match(/[^.!?]+[.!?]+(\s|$)/g) ||
              val.split(/[.!?]+/).filter(Boolean)
            ).length;

      // Paragraphs (split by double newline or newlines)
      const paragraphs =
        trimmed === ""
          ? 0
          : val.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length;

      // Lines
      const lines = val === "" ? 0 : val.split(/\r*\n/).length;

      // Spaces
      const spaces = (val.match(/\s/g) || []).length;

      // Reading Time (avg 200 wpm)
      const readingSeconds = Math.ceil((words / 200) * 60);
      const readingTimeStr =
        readingSeconds < 60
          ? `${readingSeconds} sec`
          : `${(readingSeconds / 60).toFixed(1)} min`;

      // Speaking Time (avg 130 wpm)
      const speakingSeconds = Math.ceil((words / 130) * 60);
      const speakingTimeStr =
        speakingSeconds < 60
          ? `${speakingSeconds} sec`
          : `${(speakingSeconds / 60).toFixed(1)} min`;

      // DOM Updates
      if (statChars) statChars.textContent = chars.toLocaleString();
      if (statCharsNoSpaces)
        statCharsNoSpaces.textContent = charsNoSpaces.toLocaleString();
      if (statWords) statWords.textContent = words.toLocaleString();
      if (statSentences) statSentences.textContent = sentences.toLocaleString();
      if (statParagraphs)
        statParagraphs.textContent = paragraphs.toLocaleString();
      if (statLines) statLines.textContent = lines.toLocaleString();
      if (statSpaces) statSpaces.textContent = spaces.toLocaleString();
      if (statReadingTime) statReadingTime.textContent = readingTimeStr;
      if (statSpeakingTime) statSpeakingTime.textContent = speakingTimeStr;

      // Hero mock card update
      if (mockCharVal) mockCharVal.textContent = chars;
      if (mockWordVal) mockWordVal.textContent = words;
      if (mockReadVal) mockReadVal.textContent = readingTimeStr;
    };

    textInput.addEventListener("input", updateStats);

    // Button Actions
    if (sampleBtn) {
      sampleBtn.addEventListener("click", () => {
        textInput.value = sampleTextContent;
        updateStats();
        showToast("Sample text inserted successfully");
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        textInput.value = "";
        updateStats();
        showToast("Text cleared");
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        if (!textInput.value) {
          showToast("No text to copy");
          return;
        }
        navigator.clipboard
          .writeText(textInput.value)
          .then(() => {
            showToast("Text copied successfully");
          })
          .catch(() => {
            showToast("Failed to copy text");
          });
      });
    }

    if (copyStatsBtn) {
      copyStatsBtn.addEventListener("click", () => {
        const statsSummary = `HuziHub Character Counter Statistics:
- Characters: ${statChars.textContent}
- Characters without spaces: ${statCharsNoSpaces.textContent}
- Words: ${statWords.textContent}
- Sentences: ${statSentences.textContent}
- Paragraphs: ${statParagraphs.textContent}
- Lines: ${statLines.textContent}
- Spaces: ${statSpaces.textContent}
- Reading time: ${statReadingTime.textContent}
- Speaking time: ${statSpeakingTime.textContent}`;

        navigator.clipboard
          .writeText(statsSummary)
          .then(() => {
            showToast("Statistics copied successfully");
          })
          .catch(() => {
            showToast("Failed to copy statistics");
          });
      });
    }

    if (downloadBtn) {
      downloadBtn.addEventListener("click", () => {
        const text = textInput.value;
        if (!text) {
          showToast("No text to download");
          return;
        }
        const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "huzihub-character-counter.txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast("Text downloaded as .txt");
      });
    }

    // Initial run
    updateStats();
  }

  /* --------------------------------------------------------
     4. FAQ ACCORDION HANDLER
  -------------------------------------------------------- */
  function initFAQAccordion() {
    const faqItems = document.querySelectorAll(".faq-item");
    if (!faqItems.length) return;

    faqItems.forEach((item) => {
      const questionBtn = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");

      questionBtn.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        // Close all other items
        faqItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove("active");
            other.querySelector(".faq-answer").style.maxHeight = null;
          }
        });

        if (isActive) {
          item.classList.remove("active");
          answer.style.maxHeight = null;
        } else {
          item.classList.add("active");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  }

  /* --------------------------------------------------------
     5. TOAST NOTIFICATION UTILITY
  -------------------------------------------------------- */
  function showToast(message) {
    let toast = document.getElementById("toastNotification");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toastNotification";
      toast.className = "toast-notification";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }
})();
