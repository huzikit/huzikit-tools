/**
 * Huzikit.com — Disclaimer Page Script (disclaimer.js)
 * Production-ready, modular, safe vanilla JavaScript.
 * Includes Mobile Drawer, Accessible Dropdowns, Search Modal with Keyboard Navigation,
 * FAQ Accordion, and Table-of-Contents Scroll-Spy.
 */

(function () {
  "use strict";

  // ---------------------------------------------------------------------------
  // 1. ALL 30 LOCKED HUZIKIT TOOLS DATA FOR LIVE SEARCH
  // ---------------------------------------------------------------------------
  const HUZIKIT_TOOLS = [
    // Text Tools (8)
    {
      name: "Word Counter",
      category: "Text Tools",
      url: "/texttools/word-counter.html",
      keywords:
        "words characters count lines sentences reading time text stats",
    },
    {
      name: "Character Counter",
      category: "Text Tools",
      url: "/texttools/character-counter.html",
      keywords: "characters letters length twitter sms limit count",
    },
    {
      name: "Case Converter",
      category: "Text Tools",
      url: "/texttools/case-converter.html",
      keywords:
        "uppercase lowercase title case camelCase snake_case capitalize",
    },
    {
      name: "Remove Duplicate Lines",
      category: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
      keywords: "clean text deduplicate unique lines sort trim",
    },
    {
      name: "Lorem Ipsum Generator",
      category: "Text Tools",
      url: "/texttools/loremipsumgenerator.html",
      keywords: "dummy text placeholder paragraphs latin mock content",
    },
    {
      name: "Password Generator",
      category: "Text Tools",
      url: "/texttools/passwordgenerator.html",
      keywords: "secure password generator symbols entropy random pin",
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      url: "/texttools/text-reverser.html",
      keywords: "reverse words flip text backwards mirror string",
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      url: "/texttools/onlinenotepad.html",
      keywords: "notes scratchpad draft quick editor paste save text",
    },

    // Calculators (8)
    {
      name: "Age Calculator",
      category: "Calculators",
      url: "/calculator/agecalculator.html",
      keywords: "birth date age in days months years birthday time elapsed",
    },
    {
      name: "BMI Calculator",
      category: "Calculators",
      url: "/calculator/bmi-calculator.html",
      keywords:
        "body mass index health weight height fitness screening metric imperial",
    },
    {
      name: "Percentage Calculator",
      category: "Calculators",
      url: "/calculator/percentage-calculator.html",
      keywords: "percent discount difference increase decrease ratio math",
    },
    {
      name: "Calorie Calculator",
      category: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
      keywords:
        "daily calories bmr tdee maintenance deficit weight loss nutrition",
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      url: "/calculator/discount-calculator.html",
      keywords: "sale price savings percent off shopping discount tax",
    },
    {
      name: "Savings & Goal Calculator",
      category: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
      keywords:
        "compound interest savings goal money timeline financial budget",
    },
    {
      name: "Tip Calculator",
      category: "Calculators",
      url: "/calculator/tip-calculator.html",
      keywords: "restaurant bill split gratuity tip per person total dining",
    },
    {
      name: "GPA Calculator",
      category: "Calculators",
      url: "/calculator/gpa-calculator.html",
      keywords:
        "grade point average college high school semester academic credit",
    },

    // Image & PDF (6)
    {
      name: "Image Compressor",
      category: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
      keywords: "compress jpg png webp optimize reduce size photo compression",
    },
    {
      name: "Image Resizer",
      category: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
      keywords: "resize dimension scale crop width height pixel aspect ratio",
    },
    {
      name: "PDF to Word",
      category: "Image & PDF",
      url: "/image&pdf/pdftowordconverter.html",
      keywords: "pdf docx convert document word extract text",
    },
    {
      name: "JPG to PNG",
      category: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
      keywords: "image convert format transparent png jpeg",
    },
    {
      name: "Color Picker / HEX",
      category: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
      keywords: "hex rgb hsl color palette eyedropper design css",
    },
    {
      name: "QR Code Generator",
      category: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
      keywords: "qr code barcode generator url text wifi scan download",
    },

    // Developer Tools (8)
    {
      name: "JSON Formatter",
      category: "Developer",
      url: "/developertools/JSONFORMATTER.html",
      keywords: "json prettify minify format validate parse tree syntax",
    },
    {
      name: "Base64 Encoder/Decoder",
      category: "Developer",
      url: "/developertools/base64encoderdecoder.html",
      keywords: "base64 encode decode ascii binary string converter data url",
    },
    {
      name: "URL Encoder/Decoder",
      category: "Developer",
      url: "/developertools/urlencoderdecoder.html",
      keywords: "percent encoding uri query string escape unescape url encode",
    },
    {
      name: "Meta Tag Generator",
      category: "Developer",
      url: "/developertools/meta-tag-generator.html",
      keywords: "seo open graph twitter tags title description head snippet",
    },
    {
      name: "Regex Tester",
      category: "Developer",
      url: "/developertools/regextester.html",
      keywords: "regular expression pattern test match flags regex debug",
    },
    {
      name: "Markdown to HTML",
      category: "Developer",
      url: "/developertools/markdownhtml.html",
      keywords: "markdown parser convert preview html code blog render",
    },
    {
      name: "CSS Minifier",
      category: "Developer",
      url: "/developertools/cssminifier.html",
      keywords: "minify css clean code stylesheet speed web performance",
    },
    {
      name: "Unix Timestamp",
      category: "Developer",
      url: "/developertools/unixtimestamp.html",
      keywords: "epoch time unix timestamp converter utc date human format",
    },
  ];

  // ---------------------------------------------------------------------------
  // 2. DOM CONTENT LOADED INITIALIZATION
  // ---------------------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", function () {
    initMobileNavigation();
    initSearchModal();
    initFaqAccordion();
    initTableOfContents();
    initMobileTocToggle();
  });

  // ---------------------------------------------------------------------------
  // 3. MOBILE DRAWER & ACCORDIONS
  // ---------------------------------------------------------------------------
  function initMobileNavigation() {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const mobileDrawer = document.getElementById("mobileNavDrawer");
    const mobileLinks = document.querySelectorAll(
      ".mobile-sublink, .mobile-direct-link",
    );
    const accordionHeaders = document.querySelectorAll(
      ".mobile-accordion-header",
    );

    if (!hamburgerBtn || !mobileDrawer) return;

    function openMenu() {
      hamburgerBtn.setAttribute("aria-expanded", "true");
      mobileDrawer.classList.add("is-active");
      document.body.classList.add("menu-open");
    }

    function closeMenu() {
      hamburgerBtn.setAttribute("aria-expanded", "false");
      mobileDrawer.classList.remove("is-active");
      document.body.classList.remove("menu-open");
    }

    function toggleMenu() {
      const isExpanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    hamburgerBtn.addEventListener("click", toggleMenu);

    // Close when clicking the semi-transparent backdrop
    mobileDrawer.addEventListener("click", function (event) {
      if (event.target === mobileDrawer) {
        closeMenu();
      }
    });

    // Close when navigation links are tapped
    mobileLinks.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Mobile Category Accordions
    accordionHeaders.forEach(function (header) {
      header.addEventListener("click", function () {
        const isExpanded = header.getAttribute("aria-expanded") === "true";
        const targetId = header.getAttribute("aria-controls");
        const panel = document.getElementById(targetId);

        if (!panel) return;

        if (isExpanded) {
          header.setAttribute("aria-expanded", "false");
          panel.style.maxHeight = "0px";
        } else {
          // Close other open accordions
          accordionHeaders.forEach(function (otherHeader) {
            if (otherHeader !== header) {
              otherHeader.setAttribute("aria-expanded", "false");
              const otherPanel = document.getElementById(
                otherHeader.getAttribute("aria-controls"),
              );
              if (otherPanel) otherPanel.style.maxHeight = "0px";
            }
          });

          header.setAttribute("aria-expanded", "true");
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });

    // Close with Escape key
    document.addEventListener("keydown", function (event) {
      if (
        event.key === "Escape" &&
        hamburgerBtn.getAttribute("aria-expanded") === "true"
      ) {
        closeMenu();
        hamburgerBtn.focus();
      }
    });
  }

  // ---------------------------------------------------------------------------
  // 4. SEARCH MODAL SYSTEM (CTRL+K / CMD+K)
  // ---------------------------------------------------------------------------
  function initSearchModal() {
    const searchModal = document.getElementById("searchModal");
    const searchTriggerBtns = document.querySelectorAll(
      '[data-action="open-search"]',
    );
    const searchCloseBtn = document.getElementById("searchCloseBtn");
    const searchInput = document.getElementById("searchField");
    const resultsContainer = document.getElementById("searchResults");
    let selectedIndex = -1;

    if (!searchModal || !searchInput || !resultsContainer) return;

    function openSearch() {
      searchModal.classList.add("is-open");
      searchModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("menu-open");
      searchInput.value = "";
      selectedIndex = -1;
      renderSearchResults("");
      setTimeout(function () {
        searchInput.focus();
      }, 50);
    }

    function closeSearch() {
      searchModal.classList.remove("is-open");
      searchModal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("menu-open");
    }

    searchTriggerBtns.forEach(function (btn) {
      btn.addEventListener("click", openSearch);
    });

    if (searchCloseBtn) {
      searchCloseBtn.addEventListener("click", closeSearch);
    }

    searchModal.addEventListener("click", function (event) {
      if (event.target === searchModal) {
        closeSearch();
      }
    });

    // Keyboard Shortcuts: Ctrl+K or Cmd+K
    document.addEventListener("keydown", function (event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (searchModal.classList.contains("is-open")) {
          closeSearch();
        } else {
          openSearch();
        }
      } else if (
        event.key === "Escape" &&
        searchModal.classList.contains("is-open")
      ) {
        closeSearch();
      }
    });

    // Live search query handling
    searchInput.addEventListener("input", function () {
      selectedIndex = -1;
      renderSearchResults(searchInput.value.trim().toLowerCase());
    });

    // Arrow navigation inside results list
    searchInput.addEventListener("keydown", function (event) {
      const items = resultsContainer.querySelectorAll(".search-result-link");
      if (!items.length) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();
        selectedIndex = (selectedIndex + 1) % items.length;
        updateSelectedResult(items);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        updateSelectedResult(items);
      } else if (event.key === "Enter") {
        if (selectedIndex >= 0 && items[selectedIndex]) {
          event.preventDefault();
          items[selectedIndex].click();
        }
      }
    });

    function updateSelectedResult(items) {
      items.forEach(function (item, index) {
        if (index === selectedIndex) {
          item.classList.add("is-selected");
          item.scrollIntoView({ block: "nearest" });
        } else {
          item.classList.remove("is-selected");
        }
      });
    }

    function renderSearchResults(query) {
      while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.firstChild);
      }

      let matches = [];

      if (!query) {
        // Show featured starter tools when empty
        matches = HUZIKIT_TOOLS.slice(0, 8);
      } else {
        matches = HUZIKIT_TOOLS.filter(function (tool) {
          const matchName = tool.name.toLowerCase().includes(query);
          const matchCategory = tool.category.toLowerCase().includes(query);
          const matchKeywords = tool.keywords.toLowerCase().includes(query);
          return matchName || matchCategory || matchKeywords;
        });
      }

      if (matches.length === 0) {
        const emptyEl = document.createElement("li");
        emptyEl.className = "search-no-results";
        emptyEl.textContent =
          'No matching Huzikit tools found for "' + query + '"';
        resultsContainer.appendChild(emptyEl);
        return;
      }

      matches.forEach(function (tool) {
        const li = document.createElement("li");
        li.className = "search-result-item";

        const link = document.createElement("a");
        link.className = "search-result-link";
        link.href = tool.url;

        const infoDiv = document.createElement("div");
        infoDiv.className = "search-res-info";

        const titleSpan = document.createElement("span");
        titleSpan.className = "search-res-title";
        titleSpan.textContent = tool.name;

        const catSpan = document.createElement("span");
        catSpan.className = "search-res-cat";
        catSpan.textContent = tool.category;

        infoDiv.appendChild(titleSpan);
        infoDiv.appendChild(catSpan);

        // SVG arrow
        const svg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg",
        );
        svg.setAttribute("class", "search-res-arrow");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("fill", "none");
        svg.setAttribute("stroke", "currentColor");
        svg.setAttribute("stroke-width", "2");
        svg.setAttribute("stroke-linecap", "round");
        svg.setAttribute("stroke-linejoin", "round");

        const path = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path",
        );
        path.setAttribute("d", "M5 12h14M12 5l7 7-7 7");
        svg.appendChild(path);

        link.appendChild(infoDiv);
        link.appendChild(svg);
        li.appendChild(link);
        resultsContainer.appendChild(li);
      });
    }
  }

  // ---------------------------------------------------------------------------
  // 5. FAQ ACCORDION
  // ---------------------------------------------------------------------------
  function initFaqAccordion() {
    const faqTriggers = document.querySelectorAll(".faq-trigger");

    faqTriggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        const isExpanded = trigger.getAttribute("aria-expanded") === "true";
        const panelId = trigger.getAttribute("aria-controls");
        const panel = document.getElementById(panelId);

        if (!panel) return;

        if (isExpanded) {
          trigger.setAttribute("aria-expanded", "false");
          panel.style.maxHeight = "0px";
        } else {
          // Close other open FAQs for a clean accordion flow
          faqTriggers.forEach(function (otherTrigger) {
            if (otherTrigger !== trigger) {
              otherTrigger.setAttribute("aria-expanded", "false");
              const otherPanel = document.getElementById(
                otherTrigger.getAttribute("aria-controls"),
              );
              if (otherPanel) otherPanel.style.maxHeight = "0px";
            }
          });

          trigger.setAttribute("aria-expanded", "true");
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 6. TABLE OF CONTENTS SCROLL-SPY
  // ---------------------------------------------------------------------------
  function initTableOfContents() {
    const tocLinks = document.querySelectorAll(".toc-link");
    const sections = document.querySelectorAll(".doc-section");

    if (
      !tocLinks.length ||
      !sections.length ||
      !("IntersectionObserver" in window)
    )
      return;

    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          tocLinks.forEach(function (link) {
            if (link.getAttribute("href") === "#" + id) {
              link.classList.add("is-active");
            } else {
              link.classList.remove("is-active");
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // ---------------------------------------------------------------------------
  // 7. MOBILE TABLE OF CONTENTS PANEL TOGGLE
  // ---------------------------------------------------------------------------
  function initMobileTocToggle() {
    const mobileTocToggle = document.getElementById("mobileTocToggle");
    const docSidebar = document.getElementById("docSidebar");

    if (!mobileTocToggle || !docSidebar) return;

    mobileTocToggle.addEventListener("click", function () {
      const isVisible = docSidebar.classList.contains("mobile-visible");
      if (isVisible) {
        docSidebar.classList.remove("mobile-visible");
        mobileTocToggle.setAttribute("aria-expanded", "false");
      } else {
        docSidebar.classList.add("mobile-visible");
        mobileTocToggle.setAttribute("aria-expanded", "true");
      }
    });

    // Close on mobile when link is clicked
    const tocLinks = docSidebar.querySelectorAll(".toc-link");
    tocLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 1024) {
          docSidebar.classList.remove("mobile-visible");
          mobileTocToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }
})();
