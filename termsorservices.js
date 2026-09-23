/**
 * HUZIKIT.COM — TERMS OF SERVICE INTERACTIVE SCRIPT
 * Features:
 * 1. Desktop dropdown hover & keyboard navigation
 * 2. Mobile hamburger menu & accordion category toggles
 * 3. 30-tool search system with Ctrl+K / Cmd+K / Escape support
 * 4. FAQ accordion expandable answers
 * 5. Table of Contents active scrollspy
 * 6. Accessible focus and body scroll locks
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* ==========================================================================
     LOCKED TOOL DIRECTORY (ALL 30 HUZIKIT TOOLS & EXACT ROUTES)
     ========================================================================== */
  const HUZIKIT_TOOLS = [
    // Text Tools
    {
      name: "Word Counter",
      category: "Text Tools",
      url: "/texttools/word-counter.html",
      keywords: [
        "words",
        "characters",
        "reading time",
        "text statistics",
        "count",
      ],
    },
    {
      name: "Character Counter",
      category: "Text Tools",
      url: "/texttools/character-counter.html",
      keywords: ["letters", "symbols", "length", "count", "characters"],
    },
    {
      name: "Case Converter",
      category: "Text Tools",
      url: "/texttools/case-converter.html",
      keywords: [
        "uppercase",
        "lowercase",
        "title case",
        "camelcase",
        "kebab",
        "capitalize",
      ],
    },
    {
      name: "Remove Duplicate Lines",
      category: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
      keywords: ["dedup", "clean list", "unique lines", "filter", "text lines"],
    },
    {
      name: "Lorem Ipsum Generator",
      category: "Text Tools",
      url: "/texttools/loremipsumgenerator.html",
      keywords: ["placeholder text", "dummy copy", "mock text", "paragraphs"],
    },
    {
      name: "Password Generator",
      category: "Text Tools",
      url: "/texttools/passwordgenerator.html",
      keywords: [
        "random password",
        "entropy",
        "credentials",
        "security",
        "keys",
      ],
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      url: "/texttools/text-reverser.html",
      keywords: ["backwards", "flip text", "reverse letters", "mirror"],
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      url: "/texttools/onlinenotepad.html",
      keywords: ["scratchpad", "notes", "browser editor", "memo", "paste"],
    },

    // Calculators
    {
      name: "Age Calculator",
      category: "Calculators",
      url: "/calculator/agecalculator.html",
      keywords: ["birthdate", "years", "months", "days", "chronological age"],
    },
    {
      name: "BMI Calculator",
      category: "Calculators",
      url: "/calculator/bmi-calculator.html",
      keywords: [
        "body mass index",
        "weight",
        "height",
        "health index",
        "fitness",
      ],
    },
    {
      name: "Percentage Calculator",
      category: "Calculators",
      url: "/calculator/percentage-calculator.html",
      keywords: [
        "percent difference",
        "increase",
        "decrease",
        "fraction",
        "ratio",
      ],
    },
    {
      name: "Calorie Calculator",
      category: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
      keywords: ["bmr", "daily calories", "metabolism", "nutrition", "energy"],
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      url: "/calculator/discount-calculator.html",
      keywords: ["sale", "savings", "percent off", "shopping", "tax"],
    },
    {
      name: "Savings & Goal Calculator",
      category: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
      keywords: [
        "target accumulation",
        "interest",
        "deposit",
        "finance",
        "goal",
      ],
    },
    {
      name: "Tip Calculator",
      category: "Calculators",
      url: "/calculator/tip-calculator.html",
      keywords: ["gratuity", "split bill", "restaurant", "dining", "total"],
    },
    {
      name: "GPA Calculator",
      category: "Calculators",
      url: "/calculator/gpa-calculator.html",
      keywords: ["grades", "academic", "college", "semester", "cumulative gpa"],
    },

    // Image & PDF
    {
      name: "Image Compressor",
      category: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
      keywords: [
        "shrink photo",
        "reduce size",
        "optimize jpg",
        "png compression",
      ],
    },
    {
      name: "Image Resizer",
      category: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
      keywords: ["scale dimensions", "pixels", "aspect ratio", "crop"],
    },
    {
      name: "PDF to Word",
      category: "Image & PDF",
      url: "/image&pdf/pdftowordconverter.html",
      keywords: ["convert pdf", "docx", "extract text", "document conversion"],
    },
    {
      name: "JPG to PNG",
      category: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
      keywords: ["image convert", "transparency", "format shift", "graphics"],
    },
    {
      name: "Color Picker / HEX",
      category: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
      keywords: ["hex codes", "rgb", "hsl", "color palette", "eyedropper"],
    },
    {
      name: "QR Code Generator",
      category: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
      keywords: ["qr code", "barcode", "scan", "url barcode", "vector qr"],
    },

    // Developer Tools
    {
      name: "JSON Formatter",
      category: "Developer",
      url: "/developertools/JSONFORMATTER.html",
      keywords: [
        "prettify json",
        "validate json",
        "json parser",
        "tree viewer",
      ],
    },
    {
      name: "Base64 Encoder/Decoder",
      category: "Developer",
      url: "/developertools/base64encoderdecoder.html",
      keywords: ["base64 encode", "base64 decode", "binary to text", "payload"],
    },
    {
      name: "URL Encoder/Decoder",
      category: "Developer",
      url: "/developertools/urlencoderdecoder.html",
      keywords: ["percent encoding", "uri", "sanitize query", "decode url"],
    },
    {
      name: "Meta Tag Generator",
      category: "Developer",
      url: "/developertools/meta-tag-generator.html",
      keywords: [
        "seo tags",
        "opengraph",
        "twitter card",
        "html head",
        "metadata",
      ],
    },
    {
      name: "Regex Tester",
      category: "Developer",
      url: "/developertools/regextester.html",
      keywords: [
        "regular expression",
        "pattern match",
        "flags",
        "regex tester",
      ],
    },
    {
      name: "Markdown to HTML",
      category: "Developer",
      url: "/developertools/markdownhtml.html",
      keywords: ["md to html", "render markdown", "gfm", "commonmark"],
    },
    {
      name: "CSS Minifier",
      category: "Developer",
      url: "/developertools/cssminifier.html",
      keywords: ["compress css", "remove whitespace", "stylesheet optimize"],
    },
    {
      name: "Unix Timestamp",
      category: "Developer",
      url: "/developertools/unixtimestamp.html",
      keywords: ["epoch time", "seconds converter", "utc date", "timestamp"],
    },
  ];

  /* ==========================================================================
     1. DESKTOP NAVIGATION DROPDOWNS
     ========================================================================== */
  const dropdowns = document.querySelectorAll(".desktop-nav .dropdown");

  dropdowns.forEach((dropdown) => {
    const toggleBtn = dropdown.querySelector(".dropdown-toggle");
    const panel = dropdown.querySelector(".dropdown-panel");

    if (!toggleBtn || !panel) return;

    // Click toggle for keyboard & touch
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";

      // Close other dropdowns
      dropdowns.forEach((other) => {
        if (other !== dropdown) {
          other.classList.remove("is-active");
          const otherBtn = other.querySelector(".dropdown-toggle");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        }
      });

      if (isExpanded) {
        dropdown.classList.remove("is-active");
        toggleBtn.setAttribute("aria-expanded", "false");
      } else {
        dropdown.classList.add("is-active");
        toggleBtn.setAttribute("aria-expanded", "true");
      }
    });

    // Hover support for mouse devices
    dropdown.addEventListener("mouseenter", () => {
      dropdown.classList.add("is-active");
      toggleBtn.setAttribute("aria-expanded", "true");
    });

    dropdown.addEventListener("mouseleave", () => {
      dropdown.classList.remove("is-active");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Close dropdowns on outside click or Escape
  document.addEventListener("click", (e) => {
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("is-active");
        const toggleBtn = dropdown.querySelector(".dropdown-toggle");
        if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("is-active");
        const toggleBtn = dropdown.querySelector(".dropdown-toggle");
        if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
      });
    }
  });

  /* ==========================================================================
     2. MOBILE NAVIGATION DRAWER & ACCORDIONS
     ========================================================================== */
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenuDrawer = document.getElementById("mobile-menu-drawer");
  const mobileAccordionTriggers = document.querySelectorAll(
    ".mobile-accordion-trigger",
  );
  const mobileLinks = document.querySelectorAll(".mobile-menu-drawer a");

  function openMobileMenu() {
    if (!hamburgerBtn || !mobileMenuDrawer) return;
    hamburgerBtn.setAttribute("aria-expanded", "true");
    mobileMenuDrawer.classList.add("is-open");
    mobileMenuDrawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    if (!hamburgerBtn || !mobileMenuDrawer) return;
    hamburgerBtn.setAttribute("aria-expanded", "false");
    mobileMenuDrawer.classList.remove("is-open");
    mobileMenuDrawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (hamburgerBtn && mobileMenuDrawer) {
    hamburgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isExpanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close when clicking any link in mobile menu
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMobileMenu();
      });
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        hamburgerBtn.getAttribute("aria-expanded") === "true"
      ) {
        closeMobileMenu();
      }
    });
  }

  // Mobile Accordions
  mobileAccordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!isExpanded));
    });
  });

  /* ==========================================================================
     3. SEARCH MODAL SYSTEM (30 TOOLS, KEYBOARD NAVIGATION)
     ========================================================================== */
  const searchTriggerBtn = document.getElementById("search-trigger-btn");
  const mobileSearchBtn = document.getElementById("mobile-search-btn");
  const searchModalBackdrop = document.getElementById("search-modal-backdrop");
  const searchModalClose = document.getElementById("search-modal-close");
  const searchModalInput = document.getElementById("search-modal-input");
  const searchResultsList = document.getElementById("search-results-list");
  const searchEmptyState = document.getElementById("search-empty-state");

  let selectedResultIndex = -1;

  function openSearchModal() {
    if (!searchModalBackdrop || !searchModalInput) return;
    searchModalBackdrop.classList.add("is-open");
    searchModalBackdrop.setAttribute("aria-hidden", "false");
    searchModalInput.value = "";
    renderSearchResults("");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      searchModalInput.focus();
    }, 50);
  }

  function closeSearchModal() {
    if (!searchModalBackdrop) return;
    searchModalBackdrop.classList.remove("is-open");
    searchModalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    selectedResultIndex = -1;
  }

  if (searchTriggerBtn) {
    searchTriggerBtn.addEventListener("click", openSearchModal);
  }

  if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener("click", () => {
      closeMobileMenu();
      openSearchModal();
    });
  }

  if (searchModalClose) {
    searchModalClose.addEventListener("click", closeSearchModal);
  }

  if (searchModalBackdrop) {
    searchModalBackdrop.addEventListener("click", (e) => {
      if (e.target === searchModalBackdrop) {
        closeSearchModal();
      }
    });
  }

  // Global Keyboard Shortcuts (Ctrl+K, Cmd+K, Escape)
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (
        searchModalBackdrop &&
        searchModalBackdrop.classList.contains("is-open")
      ) {
        closeSearchModal();
      } else {
        openSearchModal();
      }
    } else if (e.key === "Escape") {
      if (
        searchModalBackdrop &&
        searchModalBackdrop.classList.contains("is-open")
      ) {
        closeSearchModal();
      }
    }
  });

  // Render Search Results securely without eval or unsafe innerHTML
  function renderSearchResults(query) {
    if (!searchResultsList || !searchEmptyState) return;
    searchResultsList.replaceChildren();
    selectedResultIndex = -1;

    const trimmedQuery = query.trim().toLowerCase();

    if (!trimmedQuery) {
      searchEmptyState.style.display = "block";
      const promptP = searchEmptyState.querySelector("p");
      if (promptP) {
        promptP.textContent =
          "Type to search across Text Tools, Calculators, Image & PDF, and Developer Tools...";
      }
      return;
    }

    const matches = HUZIKIT_TOOLS.filter((tool) => {
      const inName = tool.name.toLowerCase().includes(trimmedQuery);
      const inCat = tool.category.toLowerCase().includes(trimmedQuery);
      const inKeys = tool.keywords.some((k) =>
        k.toLowerCase().includes(trimmedQuery),
      );
      return inName || inCat || inKeys;
    });

    if (matches.length === 0) {
      searchEmptyState.style.display = "block";
      const promptP = searchEmptyState.querySelector("p");
      if (promptP) {
        promptP.textContent = `No tools found matching "${trimmedQuery}". Try "json", "age", "counter", or "regex".`;
      }
      return;
    }

    searchEmptyState.style.display = "none";

    matches.forEach((tool, idx) => {
      const li = document.createElement("li");
      li.setAttribute("role", "option");

      const a = document.createElement("a");
      a.className = "search-result-item";
      a.href = tool.url;
      a.dataset.index = String(idx);

      const infoDiv = document.createElement("div");
      infoDiv.className = "search-result-info";

      const titleSpan = document.createElement("span");
      titleSpan.className = "search-result-title";
      titleSpan.textContent = tool.name;

      const catSpan = document.createElement("span");
      catSpan.className = "search-result-cat";
      catSpan.textContent = tool.category;

      infoDiv.appendChild(titleSpan);
      infoDiv.appendChild(catSpan);

      const badgeSpan = document.createElement("span");
      badgeSpan.className = "search-result-badge";
      badgeSpan.textContent = "Open Tool";

      a.appendChild(infoDiv);
      a.appendChild(badgeSpan);
      li.appendChild(a);
      searchResultsList.appendChild(li);
    });
  }

  if (searchModalInput) {
    searchModalInput.addEventListener("input", (e) => {
      renderSearchResults(e.target.value);
    });

    // Keyboard navigation in search results
    searchModalInput.addEventListener("keydown", (e) => {
      const items = searchResultsList.querySelectorAll(".search-result-item");
      if (!items || items.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedResultIndex = (selectedResultIndex + 1) % items.length;
        updateSearchSelection(items);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedResultIndex =
          (selectedResultIndex - 1 + items.length) % items.length;
        updateSearchSelection(items);
      } else if (e.key === "Enter") {
        if (selectedResultIndex >= 0 && selectedResultIndex < items.length) {
          e.preventDefault();
          items[selectedResultIndex].click();
        } else if (items.length > 0) {
          e.preventDefault();
          items[0].click();
        }
      }
    });
  }

  function updateSearchSelection(items) {
    items.forEach((item, index) => {
      if (index === selectedResultIndex) {
        item.classList.add("is-selected");
        item.scrollIntoView({ block: "nearest" });
      } else {
        item.classList.remove("is-selected");
      }
    });
  }

  /* ==========================================================================
     4. FAQ ACCORDION EXPANSION
     ========================================================================== */
  const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isExpanded));
    });
  });

  /* ==========================================================================
     5. TABLE OF CONTENTS ACTIVE SCROLLSPY
     ========================================================================== */
  const tocLinks = document.querySelectorAll(".toc-link");
  const sections = document.querySelectorAll(".legal-section");

  if (
    tocLinks.length > 0 &&
    sections.length > 0 &&
    "IntersectionObserver" in window
  ) {
    const observerOptions = {
      root: null,
      rootMargin: "-80px 0px -65% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          tocLinks.forEach((link) => {
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("is-current");
            } else {
              link.classList.remove("is-current");
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  /* ==========================================================================
     6. SMOOTH SCROLL OFFSET FOR ANCHOR LINKS
     ========================================================================== */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Set focus for accessibility without jumping
        targetElement.setAttribute("tabindex", "-1");
        targetElement.focus({ preventScroll: true });
      }
    });
  });
});
