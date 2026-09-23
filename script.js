/**
 * ==========================================================================
 * HuziKit Interactive Controller & Utility Engine
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Tool Master Directory for Search & Navigation
  const toolsDirectory = [
    // Text Tools
    {
      name: "Word Counter",
      category: "Text Tools",
      url: "/texttools/word-counter.html",
      tag: "text",
    },
    {
      name: "Character Counter",
      category: "Text Tools",
      url: "/texttools/character-counter.html",
      tag: "text",
    },
    {
      name: "Case-Converter",
      category: "Text Tools",
      url: "/texttools/case-converter.html",
      tag: "text",
    },
    {
      name: "Remove Duplicate Lines",
      category: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
      tag: "text",
    },
    {
      name: "Lorem Ipsum Generator",
      category: "Text Tools",
      url: "/texttools/loremipsumgenerator.html",
      tag: "text",
    },
    {
      name: "Password Generator",
      category: "Text Tools",
      url: "/texttools/passwordgenerator.html",
      tag: "text",
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      url: "/texttools/text-reverser.html",
      tag: "text",
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      url: "/texttools/onlinenotepad.html",
      tag: "text",
    },

    // Calculators
    {
      name: "Age Calculator",
      category: "Calculators",
      url: "/calculator/agecalculator.html",
      tag: "calc",
    },
    {
      name: "BMI Calculator",
      category: "Calculators",
      url: "/calculator/bmi-calculator.html",
      tag: "calc",
    },
    {
      name: "Percentage Calculator",
      category: "Calculators",
      url: "/calculator/percentage-calculator.html",
      tag: "calc",
    },
    {
      name: "Calorie Calculator",
      category: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
      tag: "calc",
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      url: "/calculator/discount-calculator.html",
      tag: "calc",
    },
    {
      name: "Saving&Goal Calculator",
      category: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
      tag: "calc",
    },
    {
      name: "Tip Calculator",
      category: "Calculators",
      url: "/calculators/tip-calculator.html",
      tag: "calc",
    },
    {
      name: "GPA Calculator",
      category: "Calculators",
      url: "/calculator/gpa-calculator.html",
      tag: "calc",
    },

    // Image & PDF
    {
      name: "Image Compressor",
      category: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
      tag: "image",
    },
    {
      name: "Image Resizer",
      category: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
      tag: "image",
    },
    {
      name: "PDF to Word Converter",
      category: "Image & PDF",
      url: "/image&pdf/pdf-to-word.html",
      tag: "image",
    },
    {
      name: "JPG to PNG Converter",
      category: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
      tag: "image",
    },
    {
      name: "Color Picker & HEX Converter",
      category: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
      tag: "image",
    },
    {
      name: "QR Code Generator",
      category: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
      tag: "image",
    },

    // Developer Tools
    {
      name: "JSON Formatter & Validator",
      category: "Developer",
      url: "/developertools/JSONFORMATTER.html",
      tag: "dev",
    },
    {
      name: "Base64 Encoder / Decoder",
      category: "Developer",
      url: "/developertools/base64encoderdecoder.html",
      tag: "dev",
    },
    {
      name: "URL Encoder / Decoder",
      category: "Developer",
      url: "/developertools/urlencoderdecoder.html",
      tag: "dev",
    },
    {
      name: "Meta Tag Generator",
      category: "Developer",
      url: "/developertools/meta-tag-generator.html",
      tag: "dev",
    },
    {
      name: "Regex Expression Tester",
      category: "Developer",
      url: "/developertools/regextester.html",
      tag: "dev",
    },
    {
      name: "Markdown to HTML Converter",
      category: "Developer",
      url: "/developertools/markdownhtml.html",
      tag: "dev",
    },
    {
      name: "CSS Minifier",
      category: "Developer",
      url: "/developertools/cssminifier.html",
      tag: "dev",
    },
    {
      name: "Unix Timestamp Converter",
      category: "Developer",
      url: "/developertools/unixtimestamp.html",
      tag: "dev",
    },
  ];

  // 2. Navbar Mobile Toggle & Dropdowns
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const navMenu = document.querySelector(".nav-menu");
  const dropdowns = document.querySelectorAll(".nav-item.dropdown");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
      mobileToggle.setAttribute("aria-expanded", !isExpanded);
      mobileToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // Handle Dropdowns on Mobile / Desktop
  dropdowns.forEach((dropdown) => {
    const toggleBtn = dropdown.querySelector(".dropdown-toggle");

    toggleBtn.addEventListener("click", (e) => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        dropdown.classList.toggle("active");
        toggleBtn.classList.toggle("active");
        toggleBtn.setAttribute(
          "aria-expanded",
          dropdown.classList.contains("active"),
        );
      }
    });

    // Hover support for desktop
    dropdown.addEventListener("mouseenter", () => {
      if (window.innerWidth > 992) {
        dropdown.classList.add("active");
        toggleBtn.classList.add("active");
        toggleBtn.setAttribute("aria-expanded", "true");
      }
    });

    dropdown.addEventListener("mouseleave", () => {
      if (window.innerWidth > 992) {
        dropdown.classList.remove("active");
        toggleBtn.classList.remove("active");
        toggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  });

  // 3. Hero Instant Search Functionality
  const globalSearchInput = document.getElementById("globalToolSearch");
  const searchResultsContainer = document.getElementById(
    "searchResultsContainer",
  );
  const searchClearBtn = document.getElementById("searchClearBtn");

  if (globalSearchInput && searchResultsContainer) {
    globalSearchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (query.length > 0) {
        searchClearBtn.style.display = "block";
        const filtered = toolsDirectory.filter(
          (tool) =>
            tool.name.toLowerCase().includes(query) ||
            tool.category.toLowerCase().includes(query),
        );

        if (filtered.length > 0) {
          searchResultsContainer.innerHTML = filtered
            .map(
              (tool) => `
                        <a href="${tool.url}" class="search-result-item">
                            <span>${tool.name}</span>
                            <small style="color: var(--ink-faint); font-weight: 400;">${tool.category}</small>
                        </a>
                    `,
            )
            .join("");
          searchResultsContainer.classList.add("active");
        } else {
          searchResultsContainer.innerHTML = `<div class="search-result-item" style="color: var(--ink-faint);">No matching utilities found. Try another keyword.</div>`;
          searchResultsContainer.classList.add("active");
        }
      } else {
        searchClearBtn.style.display = "none";
        searchResultsContainer.classList.remove("active");
      }
    });

    searchClearBtn.addEventListener("click", () => {
      globalSearchInput.value = "";
      searchClearBtn.style.display = "none";
      searchResultsContainer.classList.remove("active");
      globalSearchInput.focus();
    });

    // Hide results on outside click
    document.addEventListener("click", (e) => {
      if (!document.getElementById("heroSearchWrapper").contains(e.target)) {
        searchResultsContainer.classList.remove("active");
      }
    });
  }

  // 4. Command K Shortcut & Search Modal
  const searchModalOverlay = document.getElementById("searchModalOverlay");
  const modalSearchInput = document.getElementById("modalSearchInput");
  const modalSearchResults = document.getElementById("modalSearchResults");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const searchTrigger = document.getElementById("searchTrigger");

  function openSearchModal() {
    if (searchModalOverlay) {
      searchModalOverlay.classList.add("active");
      modalSearchInput.value = "";
      modalSearchInput.focus();
      renderModalResults(toolsDirectory);
    }
  }

  function closeSearchModal() {
    if (searchModalOverlay) {
      searchModalOverlay.classList.remove("active");
    }
  }

  if (searchTrigger) {
    searchTrigger.addEventListener("click", openSearchModal);
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeSearchModal);
  }

  if (searchModalOverlay) {
    searchModalOverlay.addEventListener("click", (e) => {
      if (e.target === searchModalOverlay) {
        closeSearchModal();
      }
    });
  }

  // Global keyboard shortcuts (Ctrl+K or Cmd+K, and Esc)
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openSearchModal();
    }
    if (e.key === "Escape") {
      closeSearchModal();
    }
  });

  function renderModalResults(items) {
    if (!modalSearchResults) return;
    if (items.length === 0) {
      modalSearchResults.innerHTML = `<div class="search-hint">No utilities found matching your query.</div>`;
      return;
    }

    modalSearchResults.innerHTML = items
      .map(
        (tool) => `
            <div class="modal-result-item" onclick="window.location.href='${tool.url}';">
                <strong>${tool.name}</strong>
                <span>${tool.category}</span>
            </div>
        `,
      )
      .join("");
  }

  if (modalSearchInput) {
    modalSearchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (query === "") {
        renderModalResults(toolsDirectory);
      } else {
        const filtered = toolsDirectory.filter(
          (tool) =>
            tool.name.toLowerCase().includes(query) ||
            tool.category.toLowerCase().includes(query),
        );
        renderModalResults(filtered);
      }
    });
  }

  // 5. FAQ Accordion Functionality
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all items first (optional accordion behavior)
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
        otherItem
          .querySelector(".faq-question")
          .setAttribute("aria-expanded", "false");
      });

      if (!isActive) {
        item.classList.add("active");
        questionBtn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // 6. Intersection Observer for Smooth Scroll Reveals & Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select cards and sections for reveal animation
  const revealElements = document.querySelectorAll(
    ".category-card, .tool-card, .why-card, .step-card, .testimonial-card",
  );

  revealElements.forEach((el) => {
    // Respect prefers-reduced-motion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition =
        "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
      fadeInObserver.observe(el);
    }
  });

  // 7. Interactive 3D Tilt Effect on Cards
  const tiltCards = document.querySelectorAll(".tilt-card");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    tiltCards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; //x position within card
        const y = e.clientY - rect.top; //y position within card

        const xc = rect.width / 2;
        const yc = rect.height / 2;

        const dx = (x - xc) / xc;
        const dy = (y - yc) / yc;

        card.style.transform = `perspective(800px) rotateY(${dx * 4}deg) rotateX(${-dy * 4}deg) translateY(-4px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform =
          "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0)";
      });
    });
  }
});
