/**
 * HUZIKIT — ABOUT PAGE INTERACTIVE LOGIC (about.js)
 * Clean, lightweight, fully accessible, zero dependencies
 */

(function () {
  "use strict";

  // Complete catalog of all 30 Huzikit tools
  const TOOLS_CATALOG = [
    // Text Tools (8)
    {
      name: "Word Counter",
      category: "text",
      categoryLabel: "Text Tools",
      url: "/texttools/word-counter.html",
      description:
        "Real-time word, character, sentence count, and estimated reading time.",
      keywords: "words characters reading time length writing count",
    },
    {
      name: "Character Counter",
      category: "text",
      categoryLabel: "Text Tools",
      url: "/texttools/character-counter.html",
      description:
        "Precise character count with and without spaces for post limits.",
      keywords: "chars letters spaces limit twitter bio length",
    },
    {
      name: "Case Converter",
      category: "text",
      categoryLabel: "Text Tools",
      url: "/texttools/case-converter.html",
      description:
        "Transform text to UPPERCASE, lowercase, Title Case, camelCase, or snake_case.",
      keywords: "capitalize uppercase lowercase title case camelcase format",
    },
    {
      name: "Remove Duplicate Lines",
      category: "text",
      categoryLabel: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
      description:
        "Clean lists, email rosters, or text datasets by stripping repeated lines.",
      keywords: "deduplicate unique lines clean list filter repeated",
    },
    {
      name: "Lorem Ipsum Generator",
      category: "text",
      categoryLabel: "Text Tools",
      url: "/texttools/loremipsumgenerator.html",
      description:
        "Generate standard dummy placeholder text by words, sentences, or paragraphs.",
      keywords: "dummy placeholder latin text mock paragraphs",
    },
    {
      name: "Password Generator",
      category: "text",
      categoryLabel: "Text Tools",
      url: "/texttools/passwordgenerator.html",
      description:
        "Generate strong, cryptographically secure random passwords with custom rules.",
      keywords: "security strong pass random symbols entropy",
    },
    {
      name: "Text Reverser",
      category: "text",
      categoryLabel: "Text Tools",
      url: "/texttools/text-reverser.html",
      description:
        "Reverse characters, mirror word sequences, or flip entire lines of text.",
      keywords: "reverse backwards mirror flip string",
    },
    {
      name: "Online Notepad",
      category: "text",
      categoryLabel: "Text Tools",
      url: "/texttools/onlinenotepad.html",
      description:
        "Minimal, distraction-free browser scratchpad that stores drafts locally.",
      keywords: "notes scratchpad memo draft writing editor",
    },

    // Calculators (8)
    {
      name: "Age Calculator",
      category: "calc",
      categoryLabel: "Calculators",
      url: "/calculator/agecalculator.html",
      description:
        "Calculate chronological age in years, months, weeks, days, hours, and minutes.",
      keywords: "birthday years months days time born date",
    },
    {
      name: "BMI Calculator",
      category: "calc",
      categoryLabel: "Calculators",
      url: "/calculator/bmi-calculator.html",
      description:
        "Compute Body Mass Index and healthy weight ranges for metric and imperial units.",
      keywords: "body mass index health weight height fitness",
    },
    {
      name: "Percentage Calculator",
      category: "calc",
      categoryLabel: "Calculators",
      url: "/calculator/percentage-calculator.html",
      description:
        "Calculate percentage increase, decrease, fractions, and proportions instantly.",
      keywords: "percent math proportion fraction discount increase",
    },
    {
      name: "Calorie Calculator",
      category: "calc",
      categoryLabel: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
      description:
        "Estimate daily basal metabolic rate (BMR) and caloric maintenance goals.",
      keywords: "nutrition calories bmr tdee diet fitness",
    },
    {
      name: "Discount Calculator",
      category: "calc",
      categoryLabel: "Calculators",
      url: "/calculator/discount-calculator.html",
      description:
        "Find final checkout price, dollar savings, and sales tax adjustments.",
      keywords: "sale savings retail price coupon percent off",
    },
    {
      name: "Saving & Goal Calculator",
      category: "calc",
      categoryLabel: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
      description:
        "Plan future savings balance with recurring deposits and compound interest.",
      keywords: "money finance compound interest deposit future wealth",
    },
    {
      name: "Tip Calculator",
      category: "calc",
      categoryLabel: "Calculators",
      url: "/calculator/tip-calculator.html",
      description:
        "Calculate gratuity and split restaurant dining checks among multiple diners.",
      keywords: "gratuity bill split restaurant dining check",
    },
    {
      name: "GPA Calculator",
      category: "calc",
      categoryLabel: "Calculators",
      url: "/calculator/gpa-calculator.html",
      description:
        "Calculate high school and college semester or cumulative Grade Point Averages.",
      keywords: "grades college semester credit hours school",
    },

    // Image & PDF (6)
    {
      name: "Image Compressor",
      category: "media",
      categoryLabel: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
      description:
        "Reduce image file size for JPG, PNG, and WebP without sacrificing visual clarity.",
      keywords: "shrink compress photo picture optimize mb kb",
    },
    {
      name: "Image Resizer",
      category: "media",
      categoryLabel: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
      description:
        "Scale image dimensions, change width and height, and lock aspect ratios.",
      keywords: "resize scale width height pixels crop dimensions",
    },
    {
      name: "PDF to Word Converter",
      category: "media",
      categoryLabel: "Image & PDF",
      url: "/image&pdf/pdftowordconverter.html",
      description:
        "Extract and convert PDF documents into editable Word (.docx) formats.",
      keywords: "convert doc docx document text extract pdf",
    },
    {
      name: "JPG to PNG Converter",
      category: "media",
      categoryLabel: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
      description:
        "Convert raster JPG/JPEG images into transparent PNG graphics.",
      keywords: "convert format jpeg transparency raster",
    },
    {
      name: "Color Picker / HEX",
      category: "media",
      categoryLabel: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
      description:
        "Sample colors, inspect palettes, and convert between HEX, RGB, and HSL codes.",
      keywords: "palette hex rgb hsl color design css web",
    },
    {
      name: "QR Code Generator",
      category: "media",
      categoryLabel: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
      description:
        "Generate high-resolution scannable QR codes for links, text, and Wi-Fi networks.",
      keywords: "qr code barcode scan link url wifi generator",
    },

    // Developer Tools (8)
    {
      name: "JSON Formatter",
      category: "dev",
      categoryLabel: "Developer",
      url: "/developertools/JSONFORMATTER.html",
      description:
        "Validate, beautify, indent, or minify JSON data with error highlights.",
      keywords: "json beautify validate parse format indent debug",
    },
    {
      name: "Base64 Encoder/Decoder",
      category: "dev",
      categoryLabel: "Developer",
      url: "/developertools/base64encoderdecoder.html",
      description:
        "Encode plain text and binary bytes to Base64 or decode back to ASCII.",
      keywords: "base64 encode decode binary string token",
    },
    {
      name: "URL Encoder/Decoder",
      category: "dev",
      categoryLabel: "Developer",
      url: "/developertools/urlencoderdecoder.html",
      description:
        "Percent-encode query parameters or decode URL components cleanly.",
      keywords: "url uri query percent escape encode decode",
    },
    {
      name: "Meta Tag Generator",
      category: "dev",
      categoryLabel: "Developer",
      url: "/developertools/meta-tag-generator.html",
      description:
        "Generate SEO meta tags, OpenGraph cards, and Twitter tags for web pages.",
      keywords: "seo opengraph twitter meta head tags social cards",
    },
    {
      name: "Regex Tester",
      category: "dev",
      categoryLabel: "Developer",
      url: "/developertools/regextester.html",
      description:
        "Test and debug JavaScript regular expressions with real-time match groups.",
      keywords: "regex regexp pattern match test expression javascript",
    },
    {
      name: "Markdown to HTML",
      category: "dev",
      categoryLabel: "Developer",
      url: "/developertools/markdownhtml.html",
      description:
        "Convert Markdown formatted documents into clean semantic HTML markup.",
      keywords: "markdown html md preview convert render parse",
    },
    {
      name: "CSS Minifier",
      category: "dev",
      categoryLabel: "Developer",
      url: "/developertools/cssminifier.html",
      description:
        "Strip comments, tabs, and redundant whitespace to compress CSS stylesheets.",
      keywords: "css minify compress style optimize clean",
    },
    {
      name: "Unix Timestamp",
      category: "dev",
      categoryLabel: "Developer",
      url: "/developertools/unixtimestamp.html",
      description:
        "Convert epoch seconds and milliseconds into human dates and UTC strings.",
      keywords: "epoch unix time timestamp date seconds milliseconds utc",
    },
  ];

  /* --------------------------------------------------------------------------
     1. STICKY HEADER ELEVATION
     -------------------------------------------------------------------------- */
  const siteHeader = document.getElementById("site-header");
  if (siteHeader) {
    window.addEventListener(
      "scroll",
      function () {
        if (window.scrollY > 20) {
          siteHeader.classList.add("scrolled");
        } else {
          siteHeader.classList.remove("scrolled");
        }
      },
      { passive: true },
    );
  }

  /* --------------------------------------------------------------------------
     2. MOBILE NAVIGATION DRAWER
     -------------------------------------------------------------------------- */
  const mobileToggleBtn = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-navigation");
  const mobileBackdrop = document.getElementById("mobile-nav-backdrop");
  const mobileCloseBtn = document.getElementById("mobile-nav-close");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  function openMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add("active");
    mobileDrawer.setAttribute("aria-hidden", "false");
    if (mobileBackdrop) mobileBackdrop.classList.add("active");
    if (mobileToggleBtn) mobileToggleBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("scroll-locked");
  }

  function closeMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove("active");
    mobileDrawer.setAttribute("aria-hidden", "true");
    if (mobileBackdrop) mobileBackdrop.classList.remove("active");
    if (mobileToggleBtn) mobileToggleBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("scroll-locked");
  }

  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener("click", function () {
      const isExpanded =
        mobileToggleBtn.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener("click", closeMobileMenu);
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener("click", closeMobileMenu);
  }

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
  });

  /* --------------------------------------------------------------------------
     3. DESKTOP ACCESSIBLE DROPDOWN NAVIGATION
     -------------------------------------------------------------------------- */
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";

      // Close any other open dropdowns first
      dropdownToggles.forEach(function (other) {
        if (other !== toggle) {
          other.setAttribute("aria-expanded", "false");
          const menu = other.nextElementSibling;
          if (menu && menu.classList.contains("dropdown-menu")) {
            menu.classList.remove("show");
          }
        }
      });

      toggle.setAttribute("aria-expanded", String(!isExpanded));
      const menu = toggle.nextElementSibling;
      if (menu && menu.classList.contains("dropdown-menu")) {
        menu.classList.toggle("show", !isExpanded);
      }
    });
  });

  // Close dropdowns on outside click
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".has-dropdown")) {
      dropdownToggles.forEach(function (toggle) {
        toggle.setAttribute("aria-expanded", "false");
        const menu = toggle.nextElementSibling;
        if (menu && menu.classList.contains("dropdown-menu")) {
          menu.classList.remove("show");
        }
      });
    }
  });

  /* --------------------------------------------------------------------------
     4. SEARCH MODAL & 30-TOOL FILTERING
     -------------------------------------------------------------------------- */
  const searchBackdrop = document.getElementById("search-modal-backdrop");
  const openSearchBtn = document.getElementById("open-search-btn");
  const mobileSearchTrigger = document.getElementById("mobile-search-trigger");
  const ctaSearchBtn = document.getElementById("cta-search-btn");
  const closeSearchBtn = document.getElementById("close-search-btn");
  const searchInput = document.getElementById("tool-search-input");
  const searchClearBtn = document.getElementById("search-clear-btn");
  const searchResultsArea = document.getElementById("search-results-list");
  const filterPills = document.querySelectorAll(".filter-pill");

  let activeCategory = "all";
  let selectedResultIndex = -1;

  function renderSearchResults() {
    if (!searchResultsArea) return;
    const query = (searchInput ? searchInput.value : "").trim().toLowerCase();

    // Toggle clear button
    if (searchClearBtn) {
      searchClearBtn.style.display = query.length > 0 ? "inline-block" : "none";
    }

    const filtered = TOOLS_CATALOG.filter(function (tool) {
      const matchesCategory =
        activeCategory === "all" || tool.category === activeCategory;
      if (!matchesCategory) return false;

      if (!query) return true;

      const inName = tool.name.toLowerCase().includes(query);
      const inDesc = tool.description.toLowerCase().includes(query);
      const inKeywords = tool.keywords.toLowerCase().includes(query);
      const inCategory = tool.categoryLabel.toLowerCase().includes(query);

      return inName || inDesc || inKeywords || inCategory;
    });

    searchResultsArea.innerHTML = "";
    selectedResultIndex = -1;

    if (filtered.length === 0) {
      const emptyMsg = document.createElement("div");
      emptyMsg.className = "search-empty-state";
      emptyMsg.textContent =
        'No tools found matching your search. Try searching for "calculate", "counter", or "JSON".';
      searchResultsArea.appendChild(emptyMsg);
      return;
    }

    filtered.forEach(function (tool, index) {
      const link = document.createElement("a");
      link.href = tool.url;
      link.className = "search-result-item";
      link.setAttribute("role", "option");
      link.setAttribute("data-index", String(index));

      const infoDiv = document.createElement("div");
      infoDiv.className = "result-info";

      const nameEl = document.createElement("div");
      nameEl.className = "result-name";
      nameEl.textContent = tool.name;

      const descEl = document.createElement("div");
      descEl.className = "result-desc";
      descEl.textContent = tool.description;

      infoDiv.appendChild(nameEl);
      infoDiv.appendChild(descEl);

      const badge = document.createElement("span");
      badge.className = "result-category-badge";
      badge.textContent = tool.categoryLabel;

      link.appendChild(infoDiv);
      link.appendChild(badge);

      link.addEventListener("click", closeSearchModal);

      searchResultsArea.appendChild(link);
    });
  }

  function openSearchModal() {
    if (!searchBackdrop) return;
    searchBackdrop.classList.add("open");
    searchBackdrop.setAttribute("aria-hidden", "false");
    document.body.classList.add("scroll-locked");
    closeMobileMenu();

    if (searchInput) {
      searchInput.value = "";
      renderSearchResults();
      setTimeout(function () {
        searchInput.focus();
      }, 50);
    }
  }

  function closeSearchModal() {
    if (!searchBackdrop) return;
    searchBackdrop.classList.remove("open");
    searchBackdrop.setAttribute("aria-hidden", "true");
    document.body.classList.remove("scroll-locked");
  }

  if (openSearchBtn) openSearchBtn.addEventListener("click", openSearchModal);
  if (mobileSearchTrigger)
    mobileSearchTrigger.addEventListener("click", openSearchModal);
  if (ctaSearchBtn) ctaSearchBtn.addEventListener("click", openSearchModal);
  if (closeSearchBtn)
    closeSearchBtn.addEventListener("click", closeSearchModal);

  if (searchBackdrop) {
    searchBackdrop.addEventListener("click", function (e) {
      if (e.target === searchBackdrop) {
        closeSearchModal();
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", renderSearchResults);
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", function () {
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
        renderSearchResults();
      }
    });
  }

  // Category filter tabs inside modal
  filterPills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      filterPills.forEach(function (p) {
        p.classList.remove("active");
        p.setAttribute("aria-selected", "false");
      });
      pill.classList.add("active");
      pill.setAttribute("aria-selected", "true");
      activeCategory = pill.getAttribute("data-category") || "all";
      renderSearchResults();
    });
  });

  // Keyboard navigation inside search results (ArrowDown, ArrowUp, Enter, Escape)
  document.addEventListener("keydown", function (e) {
    // Ctrl+K or Cmd+K shortcut
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (searchBackdrop && searchBackdrop.classList.contains("open")) {
        closeSearchModal();
      } else {
        openSearchModal();
      }
      return;
    }

    // Escape shortcut
    if (e.key === "Escape") {
      if (searchBackdrop && searchBackdrop.classList.contains("open")) {
        closeSearchModal();
        return;
      }
      if (mobileDrawer && mobileDrawer.classList.contains("active")) {
        closeMobileMenu();
        return;
      }
    }

    // Arrow keys inside search modal
    if (searchBackdrop && searchBackdrop.classList.contains("open")) {
      const items = searchResultsArea
        ? searchResultsArea.querySelectorAll(".search-result-item")
        : [];
      if (!items.length) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedResultIndex = (selectedResultIndex + 1) % items.length;
        updateSelectedSearchResult(items);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedResultIndex =
          (selectedResultIndex - 1 + items.length) % items.length;
        updateSelectedSearchResult(items);
      } else if (
        e.key === "Enter" &&
        selectedResultIndex >= 0 &&
        items[selectedResultIndex]
      ) {
        e.preventDefault();
        items[selectedResultIndex].click();
      }
    }
  });

  function updateSelectedSearchResult(items) {
    items.forEach(function (item, idx) {
      if (idx === selectedResultIndex) {
        item.classList.add("selected");
        item.scrollIntoView({ block: "nearest" });
      } else {
        item.classList.remove("selected");
      }
    });
  }

  /* --------------------------------------------------------------------------
     5. FAQ ACCORDION (ACCESSIBLE KEYBOARD + ARIA)
     -------------------------------------------------------------------------- */
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    const btn = item.querySelector(".faq-question-btn");
    const panel = item.querySelector(".faq-answer-panel");

    if (!btn || !panel) return;

    btn.addEventListener("click", function () {
      const isExpanded = btn.getAttribute("aria-expanded") === "true";

      // Toggle current item
      if (isExpanded) {
        btn.setAttribute("aria-expanded", "false");
        panel.hidden = true;
        item.classList.remove("active");
      } else {
        btn.setAttribute("aria-expanded", "true");
        panel.hidden = false;
        item.classList.add("active");
      }
    });
  });
})();
