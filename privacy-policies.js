/**
 * HUZIKIT.COM — PRIVACY POLICY INTERACTIVITY
 * Production-ready Vanilla JavaScript
 * Handles Navigation, Mobile Drawers, Search Modal, FAQ Accordions, and TOC Highlighting
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* ==========================================================================
     1. Tool Search Database (Exact 30 Tools)
     ========================================================================== */
  const HUZIKIT_TOOLS = [
    // Text Tools
    {
      name: "Word Counter",
      category: "Text Tools",
      url: "/texttools/word-counter.html",
      keywords: "words characters sentences paragraphs reading time",
    },
    {
      name: "Character Counter",
      category: "Text Tools",
      url: "/texttools/character-counter.html",
      keywords: "characters letters length spaces text size",
    },
    {
      name: "Case Converter",
      category: "Text Tools",
      url: "/texttools/case-converter.html",
      keywords: "uppercase lowercase titlecase sentence case camelcase",
    },
    {
      name: "Remove Duplicate Lines",
      category: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
      keywords: "dedupe clean text unique lines list filter",
    },
    {
      name: "Lorem Ipsum Generator",
      category: "Text Tools",
      url: "/texttools/loremipsumgenerator.html",
      keywords: "dummy text placeholder filler typography",
    },
    {
      name: "Password Generator",
      category: "Text Tools",
      url: "/texttools/passwordgenerator.html",
      keywords: "secure random password strong key entropy",
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      url: "/texttools/text-reverser.html",
      keywords: "reverse backward flip text mirror string",
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      url: "/texttools/onlinenotepad.html",
      keywords: "scratchpad notes write text draft browser",
    },

    // Calculators
    {
      name: "Age Calculator",
      category: "Calculators",
      url: "/calculator/agecalculator.html",
      keywords: "birthday birth date years months days age",
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
      keywords: "percent fraction ratio discount increase math",
    },
    {
      name: "Calorie Calculator",
      category: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
      keywords: "calories bmr diet nutrition energy expenditure",
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      url: "/calculator/discount-calculator.html",
      keywords: "sale price savings percent off bargain shopping",
    },
    {
      name: "Savings & Goal Calculator",
      category: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
      keywords: "compound interest investment finance money future",
    },
    {
      name: "Tip Calculator",
      category: "Calculators",
      url: "/calculator/tip-calculator.html",
      keywords: "restaurant bill split gratuity dining payment",
    },
    {
      name: "GPA Calculator",
      category: "Calculators",
      url: "/calculator/gpa-calculator.html",
      keywords: "grade point average college university school grades",
    },

    // Image & PDF
    {
      name: "Image Compressor",
      category: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
      keywords: "compress photo shrink size optimize webp jpg png",
    },
    {
      name: "Image Resizer",
      category: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
      keywords: "dimensions width height scale crop photo size",
    },
    {
      name: "PDF to Word",
      category: "Image & PDF",
      url: "/image&pdf/pdftowordconverter.html",
      keywords: "pdf doc docx convert document word document",
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
      keywords: "rgb hex hsl palette eyedropper css colors",
    },
    {
      name: "QR Code Generator",
      category: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
      keywords: "barcode qr link wifi scan generator matrix",
    },

    // Developer Tools
    {
      name: "JSON Formatter",
      category: "Developer",
      url: "/developertools/JSONFORMATTER.html",
      keywords: "prettify beautify validate format json parse",
    },
    {
      name: "Base64 Encoder/Decoder",
      category: "Developer",
      url: "/developertools/base64encoderdecoder.html",
      keywords: "encode decode b64 string binary ascii conversion",
    },
    {
      name: "URL Encoder/Decoder",
      category: "Developer",
      url: "/developertools/urlencoderdecoder.html",
      keywords: "uri percent encoding sanitize query parameters",
    },
    {
      name: "Meta Tag Generator",
      category: "Developer",
      url: "/developertools/meta-tag-generator.html",
      keywords: "seo open graph twitter cards social tags html",
    },
    {
      name: "Regex Tester",
      category: "Developer",
      url: "/developertools/regextester.html",
      keywords: "regular expression pattern match test flags regex",
    },
    {
      name: "Markdown to HTML",
      category: "Developer",
      url: "/developertools/markdownhtml.html",
      keywords: "md converter render formatting rich text syntax",
    },
    {
      name: "CSS Minifier",
      category: "Developer",
      url: "/developertools/cssminifier.html",
      keywords: "compress minify styles optimize css bundle clean",
    },
    {
      name: "Unix Timestamp",
      category: "Developer",
      url: "/developertools/unixtimestamp.html",
      keywords: "epoch time date converter seconds milliseconds",
    },
  ];

  /* ==========================================================================
     2. Sticky Header Scroll State
     ========================================================================== */
  const siteHeader = document.querySelector(".site-header");
  if (siteHeader) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        siteHeader.classList.add("scrolled");
      } else {
        siteHeader.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  /* ==========================================================================
     3. Desktop Navigation Dropdown Accessibility
     ========================================================================== */
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    const trigger = item.querySelector(".nav-dropdown-btn");
    const menu = item.querySelector(".nav-dropdown-menu");

    if (!trigger || !menu) return;

    // Toggle on button click
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = item.classList.contains("is-open");
      closeAllDropdowns();
      if (!isOpen) {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });

    // Keyboard support
    item.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        item.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
        trigger.focus();
      }
    });
  });

  function closeAllDropdowns() {
    navItems.forEach((item) => {
      item.classList.remove("is-open");
      const trigger = item.querySelector(".nav-dropdown-btn");
      if (trigger) {
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-item")) {
      closeAllDropdowns();
    }
  });

  /* ==========================================================================
     4. Mobile Navigation Drawer & Accordions
     ========================================================================== */
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const mobileCloseBtn = document.getElementById("mobileCloseBtn");

  function openMobileNav() {
    if (!mobileDrawer || !mobileOverlay) return;
    mobileDrawer.classList.add("is-active");
    mobileOverlay.classList.add("is-active");
    if (hamburgerBtn) {
      hamburgerBtn.classList.add("is-active");
      hamburgerBtn.setAttribute("aria-expanded", "true");
    }
    document.body.style.overflow = "hidden";
  }

  function closeMobileNav() {
    if (!mobileDrawer || !mobileOverlay) return;
    mobileDrawer.classList.remove("is-active");
    mobileOverlay.classList.remove("is-active");
    if (hamburgerBtn) {
      hamburgerBtn.classList.remove("is-active");
      hamburgerBtn.setAttribute("aria-expanded", "false");
    }
    document.body.style.overflow = "";
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.contains("is-active");
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener("click", closeMobileNav);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener("click", closeMobileNav);
  }

  // Close mobile nav when clicking any link inside it
  if (mobileDrawer) {
    const mobileLinks = mobileDrawer.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", closeMobileNav);
    });
  }

  // Mobile Accordions
  const mobileAccordionItems = document.querySelectorAll(
    ".mobile-accordion-item",
  );
  mobileAccordionItems.forEach((item) => {
    const btn = item.querySelector(".mobile-accordion-btn");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      mobileAccordionItems.forEach((other) => {
        other.classList.remove("is-open");
        const otherBtn = other.querySelector(".mobile-accordion-btn");
        if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ==========================================================================
     5. Search Modal Functionality (Ctrl+K, Cmd+K, Keyboard Nav)
     ========================================================================== */
  const searchModal = document.getElementById("searchModal");
  const searchTriggers = document.querySelectorAll(".js-open-search");
  const searchCloseBtn = document.getElementById("searchCloseBtn");
  const searchInput = document.getElementById("searchInput");
  const searchResultsContainer = document.getElementById("searchResults");
  let currentFocusedIndex = -1;

  function openSearchModal() {
    if (!searchModal) return;
    searchModal.classList.add("is-open");
    searchModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (searchInput) {
      searchInput.value = "";
      renderSearchResults("");
      setTimeout(() => searchInput.focus(), 50);
    }
  }

  function closeSearchModal() {
    if (!searchModal) return;
    searchModal.classList.remove("is-open");
    searchModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    currentFocusedIndex = -1;
  }

  searchTriggers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      closeMobileNav();
      openSearchModal();
    });
  });

  if (searchCloseBtn) {
    searchCloseBtn.addEventListener("click", closeSearchModal);
  }

  if (searchModal) {
    searchModal.addEventListener("click", (e) => {
      if (e.target === searchModal) {
        closeSearchModal();
      }
    });
  }

  // Global Keyboard Shortcuts (Ctrl+K, Cmd+K, Escape)
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
      e.preventDefault();
      if (searchModal && searchModal.classList.contains("is-open")) {
        closeSearchModal();
      } else {
        openSearchModal();
      }
    } else if (e.key === "Escape") {
      if (searchModal && searchModal.classList.contains("is-open")) {
        closeSearchModal();
      }
      if (mobileDrawer && mobileDrawer.classList.contains("is-active")) {
        closeMobileNav();
      }
      closeAllDropdowns();
    }
  });

  // Filter and Render Search Results
  function renderSearchResults(query) {
    if (!searchResultsContainer) return;
    const cleanQuery = query.trim().toLowerCase();
    searchResultsContainer.innerHTML = "";
    currentFocusedIndex = -1;

    const filtered =
      cleanQuery === ""
        ? HUZIKIT_TOOLS.slice(0, 8)
        : HUZIKIT_TOOLS.filter((tool) => {
            return (
              tool.name.toLowerCase().includes(cleanQuery) ||
              tool.category.toLowerCase().includes(cleanQuery) ||
              tool.keywords.toLowerCase().includes(cleanQuery)
            );
          });

    if (filtered.length === 0) {
      const emptyDiv = document.createElement("div");
      emptyDiv.className = "search-empty-state";
      emptyDiv.textContent = `No utilities found matching "${query}". Try searching for text, image, calculator, or developer tools.`;
      searchResultsContainer.appendChild(emptyDiv);
      return;
    }

    filtered.forEach((tool, index) => {
      const a = document.createElement("a");
      a.className = "search-result-item";
      a.href = tool.url;
      a.setAttribute("data-index", String(index));

      const info = document.createElement("div");
      info.className = "search-result-info";

      const nameSpan = document.createElement("span");
      nameSpan.className = "search-result-name";
      nameSpan.textContent = tool.name;

      const catSpan = document.createElement("span");
      catSpan.className = "search-result-cat";
      catSpan.textContent = tool.category;

      info.appendChild(nameSpan);
      info.appendChild(catSpan);

      const arrow = document.createElement("span");
      arrow.className = "search-result-arrow";
      arrow.innerHTML = "&#8594;";

      a.appendChild(info);
      a.appendChild(arrow);

      a.addEventListener("click", closeSearchModal);

      searchResultsContainer.appendChild(a);
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderSearchResults(e.target.value);
    });

    // Keyboard navigation in search list
    searchInput.addEventListener("keydown", (e) => {
      const items = searchResultsContainer.querySelectorAll(
        ".search-result-item",
      );
      if (items.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        currentFocusedIndex = (currentFocusedIndex + 1) % items.length;
        updateFocusedItem(items);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        currentFocusedIndex =
          (currentFocusedIndex - 1 + items.length) % items.length;
        updateFocusedItem(items);
      } else if (e.key === "Enter") {
        if (currentFocusedIndex >= 0 && items[currentFocusedIndex]) {
          e.preventDefault();
          items[currentFocusedIndex].click();
        }
      }
    });
  }

  function updateFocusedItem(items) {
    items.forEach((item, idx) => {
      if (idx === currentFocusedIndex) {
        item.classList.add("focused");
        item.scrollIntoView({ block: "nearest" });
      } else {
        item.classList.remove("focused");
      }
    });
  }

  /* ==========================================================================
     6. FAQ Accordion Interactivity
     ========================================================================== */
  const faqCards = document.querySelectorAll(".faq-card");
  faqCards.forEach((card) => {
    const trigger = card.querySelector(".faq-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      const isOpen = card.classList.contains("is-open");

      // Optional: Close others for a clean single-open feel or keep multi-open
      faqCards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.remove("is-open");
          const otherTrigger = otherCard.querySelector(".faq-trigger");
          if (otherTrigger) otherTrigger.setAttribute("aria-expanded", "false");
        }
      });

      if (!isOpen) {
        card.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      } else {
        card.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  });

  /* ==========================================================================
     7. Table of Contents Active Link Highlighting (IntersectionObserver)
     ========================================================================== */
  const tocLinks = document.querySelectorAll(".toc-link");
  const policyBlocks = document.querySelectorAll(".policy-block");

  if (
    tocLinks.length > 0 &&
    policyBlocks.length > 0 &&
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
          if (id) {
            tocLinks.forEach((link) => {
              if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }
            });
          }
        }
      });
    }, observerOptions);

    policyBlocks.forEach((block) => {
      observer.observe(block);
    });
  }
});
