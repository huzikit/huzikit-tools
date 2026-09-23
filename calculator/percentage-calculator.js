document.addEventListener("DOMContentLoaded", () => {
  initPercentageCalculator();
  initNavbar();
  initDropdowns();
  initMobileMenu();
  initSearch();
  initParallax();
  initFAQAccordions();
});

/* ==========================================================
   PERCENTAGE CALCULATOR LOGIC
   ========================================================== */
function initPercentageCalculator() {
  const tabs = document.querySelectorAll(".calc-tab");
  const panels = document.querySelectorAll(".calc-mode-panel");
  const calculateBtn = document.getElementById("calculateBtn");
  const resetBtn = document.getElementById("resetBtn");
  const copyBtn = document.getElementById("copyResultBtn");
  const shareBtn = document.getElementById("shareResultBtn");

  let currentMode = "mode1";

  // Tab Switching
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      currentMode = tab.getAttribute("data-mode");
      panels.forEach((p) => (p.style.display = "none"));

      const activePanel = document.getElementById(`panel-${currentMode}`);
      if (activePanel) {
        activePanel.style.display = "block";
      }
      clearErrors();
    });
  });

  calculateBtn.addEventListener("click", () => {
    performCalculation(currentMode);
  });

  resetBtn.addEventListener("click", () => {
    resetCalculator();
  });

  copyBtn.addEventListener("click", () => {
    copyResult();
  });

  shareBtn.addEventListener("click", () => {
    shareResult();
  });

  // Enter key triggers calculation
  document.querySelectorAll(".calc-mode-panel input").forEach((input) => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        performCalculation(currentMode);
      }
    });
  });
}

function performCalculation(mode) {
  clearErrors();
  let result = 0;
  let explanation = "";
  let ringPercentage = 0;

  try {
    if (mode === "mode1") {
      const x = parseFloat(document.getElementById("m1-x").value);
      const y = parseFloat(document.getElementById("m1-y").value);
      if (isNaN(x)) {
        showFieldError("m1-x", "Enter percentage");
        return;
      }
      if (isNaN(y)) {
        showFieldError("m1-y", "Enter total number");
        return;
      }

      result = (x / 100) * y;
      explanation = `${x}% of ${y} = ${formatNumber(result)}`;
      ringPercentage = Math.min(Math.max(x, 0), 100);
    } else if (mode === "mode2") {
      const x = parseFloat(document.getElementById("m2-x").value);
      const y = parseFloat(document.getElementById("m2-y").value);
      if (isNaN(x)) {
        showFieldError("m2-x", "Enter part value");
        return;
      }
      if (isNaN(y)) {
        showFieldError("m2-y", "Enter total value");
        return;
      }
      if (y === 0) {
        showFieldError("m2-y", "Division by zero");
        return;
      }

      result = (x / y) * 100;
      explanation = `${x} is ${formatNumber(result)}% of ${y}`;
      ringPercentage = Math.min(Math.max(result, 0), 100);
    } else if (mode === "mode3") {
      const orig = parseFloat(document.getElementById("m3-orig").value);
      const newVal = parseFloat(document.getElementById("m3-new").value);
      if (isNaN(orig)) {
        showFieldError("m3-orig", "Enter original value");
        return;
      }
      if (isNaN(newVal)) {
        showFieldError("m3-new", "Enter new value");
        return;
      }
      if (orig === 0) {
        showFieldError("m3-orig", "Cannot be zero");
        return;
      }

      result = ((newVal - orig) / orig) * 100;
      explanation = `Percentage Increase: ${formatNumber(result)}%`;
      ringPercentage = Math.min(Math.max(result, 0), 100);
    } else if (mode === "mode4") {
      const orig = parseFloat(document.getElementById("m4-orig").value);
      const newVal = parseFloat(document.getElementById("m4-new").value);
      if (isNaN(orig)) {
        showFieldError("m4-orig", "Enter original value");
        return;
      }
      if (isNaN(newVal)) {
        showFieldError("m4-new", "Enter new value");
        return;
      }
      if (orig === 0) {
        showFieldError("m4-orig", "Cannot be zero");
        return;
      }

      result = ((orig - newVal) / orig) * 100;
      explanation = `Percentage Decrease: ${formatNumber(result)}%`;
      ringPercentage = Math.min(Math.max(result, 0), 100);
    } else if (mode === "mode5") {
      const a = parseFloat(document.getElementById("m5-a").value);
      const b = parseFloat(document.getElementById("m5-b").value);
      if (isNaN(a)) {
        showFieldError("m5-a", "Enter value A");
        return;
      }
      if (isNaN(b)) {
        showFieldError("m5-b", "Enter value B");
        return;
      }

      const avg = (a + b) / 2;
      if (avg === 0) {
        showFieldError("m5-b", "Average is zero");
        return;
      }

      result = (Math.abs(a - b) / avg) * 100;
      explanation = `Percentage Difference: ${formatNumber(result)}%`;
      ringPercentage = Math.min(Math.max(result, 0), 100);
    } else if (mode === "mode6") {
      const type = document.getElementById("m6-type").value;
      const finalVal = parseFloat(document.getElementById("m6-val").value);
      const pct = parseFloat(document.getElementById("m6-pct").value);

      if (isNaN(finalVal)) {
        showFieldError("m6-val", "Enter final value");
        return;
      }
      if (isNaN(pct)) {
        showFieldError("m6-pct", "Enter percentage");
        return;
      }

      if (type === "increase") {
        result = finalVal / (1 + pct / 100);
        explanation = `Original Value before ${pct}% increase: ${formatNumber(result)}`;
      } else {
        result = finalVal / (1 - pct / 100);
        if (!isFinite(result)) {
          showFieldError("m6-pct", "Invalid percentage");
          return;
        }
        explanation = `Original Value before ${pct}% decrease: ${formatNumber(result)}`;
      }
      ringPercentage = Math.min(Math.max(pct, 0), 100);
    }

    updateResultDisplay(formatNumber(result), explanation, ringPercentage);
  } catch (err) {
    showToast("Calculation error occurred.");
  }
}

function formatNumber(num) {
  if (!isFinite(num)) return "0";
  return Number.isInteger(num) ? num.toString() : num.toFixed(2);
}

function showFieldError(inputId, message) {
  const errorEl = document.getElementById(`${inputId}-error`);
  if (errorEl) {
    errorEl.textContent = message;
  }
  const inputEl = document.getElementById(inputId);
  if (inputEl) {
    inputEl.style.borderColor = "#EF4444";
    inputEl.focus();
  }
}

function clearErrors() {
  document
    .querySelectorAll(".error-msg")
    .forEach((el) => (el.textContent = ""));
  document.querySelectorAll(".calc-mode-panel input").forEach((input) => {
    input.style.borderColor = "var(--line)";
  });
}

function updateResultDisplay(numberText, explanationText, percentage) {
  const numEl = document.getElementById("resultNumber");
  const expEl = document.getElementById("resultExplanation");
  const ringFill = document.getElementById("ringFill");
  const ringText = document.getElementById("ringInnerText");

  numEl.textContent = numberText;
  expEl.textContent = explanationText;
  ringText.textContent = `${Math.round(percentage)}%`;

  // SVG Circumference for r=70 is ~439.8
  const circumference = 439.8;
  const offset = circumference - (percentage / 100) * circumference;
  ringFill.style.strokeDashoffset = offset;
}

function resetCalculator() {
  document.querySelectorAll(".calc-mode-panel input").forEach((input) => {
    input.value = "";
  });
  clearErrors();
  updateResultDisplay("30", "20% of 150 = 30", 20);
}

function copyResult() {
  const textToCopy = document.getElementById("resultExplanation").textContent;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      showToast("Result copied to clipboard!");
    })
    .catch(() => {
      showToast("Failed to copy result.");
    });
}

function shareResult() {
  const textToShare = document.getElementById("resultExplanation").textContent;
  if (navigator.share) {
    navigator
      .share({
        title: "HuziHub Percentage Calculator",
        text: `Check out this calculation: ${textToShare}`,
        url: window.location.href,
      })
      .catch(() => {});
  } else {
    copyResult();
  }
}

function showToast(msg) {
  const toast = document.getElementById("toastNotification");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

/* ==========================================================
   NAVBAR & DROPDOWNS
   ========================================================== */
function initNavbar() {
  // Keyboard accessibility for dropdowns
  const dropdowns = document.querySelectorAll(".desktop-nav .dropdown");
  dropdowns.forEach((drop) => {
    const btn = drop.querySelector(".dropdown-toggle");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const expanded = btn.getAttribute("aria-expanded") === "true";
      closeAllDropdowns();
      btn.setAttribute("aria-expanded", !expanded);
      drop.classList.toggle("active", !expanded);
    });
  });

  document.addEventListener("click", () => {
    closeAllDropdowns();
  });
}

function closeAllDropdowns() {
  document.querySelectorAll(".desktop-nav .dropdown").forEach((drop) => {
    drop.classList.remove("active");
    const btn = drop.querySelector(".dropdown-toggle");
    if (btn) btn.setAttribute("aria-expanded", "false");
  });
}

function initDropdowns() {
  // Additional hover polish if needed
}

/* ==========================================================
   MOBILE MENU DRAWER
   ========================================================== */
function initMobileMenu() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");

  function toggleMenu(open) {
    mobileDrawer.classList.toggle("open", open);
    drawerBackdrop.classList.toggle("active", open);
    hamburgerBtn.setAttribute("aria-expanded", open);
    mobileDrawer.setAttribute("aria-hidden", !open);
  }

  hamburgerBtn.addEventListener("click", () => toggleMenu(true));
  closeDrawerBtn.addEventListener("click", () => toggleMenu(false));
  drawerBackdrop.addEventListener("click", () => toggleMenu(false));

  // Mobile accordions
  const accordions = document.querySelectorAll(".mobile-accordion-toggle");
  accordions.forEach((acc) => {
    acc.addEventListener("click", () => {
      const panel = acc.nextElementSibling;
      const isOpen = panel.style.display === "block";

      // Close others
      document
        .querySelectorAll(".mobile-accordion-panel")
        .forEach((p) => (p.style.display = "none"));

      panel.style.display = isOpen ? "none" : "block";
    });
  });
}

/* ==========================================================
   SEARCH MODAL & CTRL+K
   ========================================================== */
function initSearch() {
  const triggerBtn = document.getElementById("searchTriggerBtn");
  const overlay = document.getElementById("searchModalOverlay");
  const closeBtn = document.getElementById("searchCloseBtn");
  const input = document.getElementById("searchInput");
  const resultsList = document.getElementById("searchResultsList");

  const toolsList = [
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
      url: "/image-pdf/pdf-to-word.html",
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

  function toggleSearch(open) {
    overlay.classList.toggle("active", open);
    overlay.setAttribute("aria-hidden", !open);
    if (open) {
      input.value = "";
      input.focus();
      renderSearchResults("");
    }
  }

  triggerBtn.addEventListener("click", () => toggleSearch(true));
  closeBtn.addEventListener("click", () => toggleSearch(false));
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) toggleSearch(false);
  });

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      toggleSearch(true);
    }
    if (e.key === "Escape") {
      toggleSearch(false);
    }
  });

  input.addEventListener("input", (e) => {
    renderSearchResults(e.target.value.trim().toLowerCase());
  });

  function renderSearchResults(query) {
    const filtered = toolsList.filter((t) =>
      t.name.toLowerCase().includes(query),
    );
    if (filtered.length === 0) {
      resultsList.innerHTML = `<div class="search-hint">No tools found matching "${query}"</div>`;
      return;
    }

    resultsList.innerHTML = filtered
      .map(
        (t) => `
            <a href="${t.url}" class="search-result-item">${t.name}</a>
        `,
      )
      .join("");
  }
}

/* ==========================================================
   3D HERO PARALLAX TILT
   ========================================================== */
function initParallax() {
  const card = document.getElementById("hero3DCard");
  if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return;

  const heroSection = document.querySelector(".hero-section");
  heroSection.addEventListener("mousemove", (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  });

  heroSection.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  });
}

/* ==========================================================
   FAQ ACCORDIONS
   ========================================================== */
function initFAQAccordions() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item) => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      items.forEach((i) => i.classList.remove("active"));
      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });
}
