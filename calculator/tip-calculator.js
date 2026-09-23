"use strict";

/* ============================================================
   CENTRALIZED TOOL DATABASE FOR SEARCH
   ============================================================ */
const HUZIHUB_TOOLS = [
  {
    name: "Word Counter",
    category: "Text Tools",
    description: "Count words, characters, and sentences online.",
    keywords: ["words", "count", "text", "length"],
    url: "/texttools/word-counter.html",
  },
  {
    name: "Character Counter",
    category: "Text Tools",
    description: "Instant character count for social media and text limits.",
    keywords: ["character", "length", "letters"],
    url: "/texttools/character-counter.html",
  },
  {
    name: "Case Converter",
    category: "Text Tools",
    description:
      "Convert text to uppercase, lowercase, title case, and camelCase.",
    keywords: ["case", "uppercase", "lowercase"],
    url: "/texttools/case-converter.html",
  },
  {
    name: "Remove Duplicate Lines",
    category: "Text Tools",
    description: "Clean text data by instantly removing repeated lines.",
    keywords: ["duplicate", "clean", "lines"],
    url: "/texttools/remove-duplicate-lines.html",
  },
  {
    name: "Lorem Ipsum Generator",
    category: "Text Tools",
    description: "Generate placeholder text for web design mockups.",
    keywords: ["lorem", "ipsum", "placeholder", "dummy"],
    url: "/texttools/loremipsumgenerator.html",
  },
  {
    name: "Password Generator",
    category: "Text Tools",
    description: "Create strong, secure passwords with customizable options.",
    keywords: ["password", "security", "generator", "pass"],
    url: "/texttools/passwordgenerator.html",
  },
  {
    name: "Text Reverser",
    category: "Text Tools",
    description: "Reverse string characters or word order instantly.",
    keywords: ["reverse", "flip", "text"],
    url: "/texttools/text-reverser.html",
  },
  {
    name: "Online Notepad",
    category: "Text Tools",
    description: "A simple, clean online text editor with auto-save.",
    keywords: ["notes", "pad", "editor", "memo"],
    url: "/texttools/onlinenotepad.html",
  },

  {
    name: "Age Calculator",
    category: "Calculators",
    description: "Calculate exact age in years, months, days, and hours.",
    keywords: ["age", "birthday", "date", "years"],
    url: "/calculator/agecalculator.html",
  },
  {
    name: "BMI Calculator",
    category: "Calculators",
    description: "Calculate body mass index to evaluate healthy weight range.",
    keywords: ["bmi", "body", "mass", "weight", "health"],
    url: "/calculator/bmi-calculator.html",
  },
  {
    name: "Percentage Calculator",
    category: "Calculators",
    description: "Easily compute percentage changes, margins, and ratios.",
    keywords: ["percentage", "percent", "math", "ratio"],
    url: "/calculator/percentage-calculator.html",
  },
  {
    name: "Calorie Calculator",
    category: "Calculators",
    description: "Calculate daily caloric intake recommendations.",
    keywords: ["calorie", "diet", "nutrition", "fitness"],
    url: "/calculator/Calorie-Calculator.html",
  },
  {
    name: "Discount Calculator",
    category: "Calculators",
    description: "Estimate monthly mortgage payments and loan breakdown.",
    keywords: ["mortgage", "loan", "house", "finance", "home"],
    url: "/calculator/discount-calculator.html",
  },
  {
    name: "Savings&Goal Calculator",
    category: "Calculators",
    description: "Project savings growth over time with compounding.",
    keywords: ["compound", "interest", "investment", "savings"],
    url: "/calculator/saving&goalcalculator.html",
  },
  {
    name: "Tip Calculator",
    category: "Calculators",
    description: "Calculate tips, gratuity, and split restaurant bills easily.",
    keywords: [
      "tip",
      "tips",
      "restaurant",
      "bill",
      "gratuity",
      "split",
      "diners",
    ],
    url: "/calculators/tip-calculator.html",
  },
  {
    name: "GPA Calculator",
    category: "Calculators",
    description: "Compute high school or college grade point average.",
    keywords: ["gpa", "grade", "school", "grades"],
    url: "/calculator/gpa-calculator.html",
  },

  {
    name: "Image Compressor",
    category: "Image & PDF",
    description: "Compress image file sizes without losing quality.",
    keywords: ["compress", "image", "jpg", "png"],
    url: "/image&pdf/image-compressor.html",
  },
  {
    name: "Image Resizer",
    category: "Image & PDF",
    description: "Resize images by dimension or percentage.",
    keywords: ["resize", "dimensions", "crop"],
    url: "/image&pdf/image-resizer.html",
  },
  {
    name: "PDF to Word",
    category: "Image & PDF",
    description: "Convert PDF documents into editable Word files.",
    keywords: ["pdf", "word", "convert", "doc"],
    url: "/image-pdf/pdf-to-word.html",
  },
  {
    name: "JPG to PNG",
    category: "Image & PDF",
    description: "Convert JPG image files into transparent PNG format.",
    keywords: ["jpg", "png", "image", "convert"],
    url: "/image&pdf/jpg-to-png.html",
  },
  {
    name: "Color Picker",
    category: "Image & PDF",
    description: "Pick colors and copy HEX, RGB, and HSL values.",
    url: "/image&pdf/colorpicker.html",
    url: "/image&pdf/jpg-to-png.html",
  },
  {
    name: "QR Code Generator",
    category: "Image & PDF",
    description: "Generate custom QR codes for web links and text.",
    keywords: ["qr", "code", "barcode", "link"],
    url: "/image&pdf/QRGenrator.html",
  },

  {
    name: "JSON Formatter",
    category: "Developer",
    description: "Format, validate, and beautify raw JSON data.",
    keywords: ["json", "format", "beautify", "developer"],
    url: "/developertools/JSONFORMATTER.html",
  },
  {
    name: "Base64 Encoder/Decoder",
    category: "Developer",
    description: "Encode and decode strings or binary to Base64 format.",
    keywords: ["base64", "encode", "decode", "binary"],
    url: "/developertools/base64encoderdecoder.html",
  },
  {
    name: "URL Encoder/Decoder",
    category: "Developer",
    description: "Encode and decode URL parameters safely.",
    keywords: ["url", "encode", "decode", "uri"],
    url: "/developertools/urlencoderdecoder.html",
  },
  {
    name: "Meta Teg Genrator",
    category: "Developer",
    description: "Create meta Tag ",
    keywords: ["meta", "tag", "Genrator"],
    url: "/developertools/meta-tag-generator.html",
  },
  {
    name: "Regex Tester",
    category: "Developer",
    description: "Test regular expressions against target strings live.",
    keywords: ["regex", "test", "pattern", "match"],
    url: "/developertools/regextester.html",
  },
  {
    name: "Markdown to HTML",
    category: "Developer",
    description: "Convert raw Markdown content into formatted HTML.",
    keywords: ["markdown", "html", "convert"],
    url: "/developertools/markdownhtml.html",
  },
  {
    name: "CSS Minifier",
    category: "Developer",
    description: "Compress CSS files by removing whitespace and comments.",
    keywords: ["css", "minify", "compress", "style"],
    url: "/developertools/cssminifier.html",
  },
  {
    name: "Unix Timestamp",
    category: "Developer",
    description: "Convert epoch timestamps into human-readable dates.",
    keywords: ["unix", "timestamp", "epoch", "time", "date"],
    url: "/developertools/unixtimestamp.html",
  },
];

/* ============================================================
   APPLICATION STATE & INITIALIZATION
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  initSearch();
  initCalculator();
});

/* ============================================================
   NAVBAR & DROPDOWNS
   ============================================================ */
function initNavbar() {
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  dropdownItems.forEach((item) => {
    const toggleBtn = item.querySelector(".dropdown-toggle");

    // Hover functionality for desktop
    item.addEventListener("mouseenter", () => {
      if (window.innerWidth > 840) {
        closeAllDropdowns();
        item.classList.add("open");
        toggleBtn.setAttribute("aria-expanded", "true");
      }
    });

    item.addEventListener("mouseleave", () => {
      if (window.innerWidth > 840) {
        item.classList.remove("open");
        toggleBtn.setAttribute("aria-expanded", "false");
      }
    });

    // Click toggle
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = item.classList.contains("open");
      closeAllDropdowns();
      if (!isOpen) {
        item.classList.add("open");
        toggleBtn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-item")) {
      closeAllDropdowns();
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllDropdowns();
    }
  });
}

function closeAllDropdowns() {
  document.querySelectorAll(".dropdown-item").forEach((item) => {
    item.classList.remove("open");
    const toggle = item.querySelector(".dropdown-toggle");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  });
}

/* ============================================================
   MOBILE MENU ACCORDION
   ============================================================ */
function initMobileMenu() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileAccTriggers = document.querySelectorAll(".mobile-acc-trigger");

  hamburgerBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("open");
    if (isOpen) {
      mobileMenu.classList.remove("open");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      mobileMenu.setAttribute("aria-hidden", "true");
    } else {
      mobileMenu.classList.add("open");
      hamburgerBtn.setAttribute("aria-expanded", "true");
      mobileMenu.setAttribute("aria-hidden", "false");
    }
  });

  mobileAccTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const parent = trigger.parentElement;
      const isOpen = parent.classList.contains("open");

      document.querySelectorAll(".mobile-acc-item").forEach((item) => {
        item.classList.remove("open");
        item
          .querySelector(".mobile-acc-trigger")
          .setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        parent.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* ============================================================
   SEARCH OVERLAY & MATCHING ENGINE
   ============================================================ */
function initSearch() {
  const triggerBtn = document.getElementById("searchTriggerBtn");
  const overlay = document.getElementById("searchOverlay");
  const closeBtn = document.getElementById("searchCloseBtn");
  const searchInput = document.getElementById("searchInput");
  const resultsContainer = document.getElementById("searchResults");

  function openSearch() {
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    searchInput.focus();
    renderSearchResults(searchInput.value.trim());
  }

  function closeSearch() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    searchInput.value = "";
  }

  triggerBtn.addEventListener("click", openSearch);
  closeBtn.addEventListener("click", closeSearch);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeSearch();
  });

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openSearch();
    }
    if (e.key === "Escape" && overlay.classList.contains("open")) {
      closeSearch();
    }
  });

  searchInput.addEventListener("input", (e) => {
    renderSearchResults(e.target.value.trim());
  });

  function renderSearchResults(query) {
    resultsContainer.innerHTML = "";
    const q = query.toLowerCase();

    const filtered = HUZIHUB_TOOLS.filter((tool) => {
      if (!q) return true; // Show all tools if search string is empty
      return (
        tool.name.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.keywords.some((kw) => kw.toLowerCase().includes(q))
      );
    });

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `<div class="no-results">No tools matching "${query}"</div>`;
      return;
    }

    filtered.forEach((tool) => {
      const a = document.createElement("a");
      a.href = tool.url;
      a.className = "search-result-item";
      a.innerHTML = `
        <span class="s-cat">${tool.category}</span>
        <span class="s-name">${tool.name}</span>
        <span class="s-desc">${tool.description}</span>
      `;
      resultsContainer.appendChild(a);
    });
  }
}

/* ============================================================
   TIP CALCULATOR LOGIC
   ============================================================ */
function initCalculator() {
  const billInput = document.getElementById("billAmount");
  const peopleInput = document.getElementById("peopleCount");
  const customTipToggle = document.getElementById("customTipToggle");
  const customTipContainer = document.getElementById("customTipContainer");
  const customTipInput = document.getElementById("customTipInput");
  const presetBtns = document.querySelectorAll(
    ".tip-btn:not(.custom-toggle-btn)",
  );

  const incPeopleBtn = document.getElementById("incrementPeople");
  const decPeopleBtn = document.getElementById("decrementPeople");
  const resetBtn = document.getElementById("resetBtn");
  const copyBtn = document.getElementById("copyBtn");
  const shareBtn = document.getElementById("shareBtn");

  let currentTipPercent = 20;
  let isCustom = false;

  // Preset Button Selection
  presetBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      presetBtns.forEach((b) => b.classList.remove("active"));
      customTipToggle.classList.remove("active");
      customTipContainer.classList.add("hidden");

      btn.classList.add("active");
      currentTipPercent = parseFloat(btn.dataset.percent);
      isCustom = false;
      calculateTip();
    });
  });

  // Custom Tip Toggle
  customTipToggle.addEventListener("click", () => {
    presetBtns.forEach((b) => b.classList.remove("active"));
    customTipToggle.classList.add("active");
    customTipContainer.classList.remove("hidden");
    customTipInput.focus();
    isCustom = true;

    const val = parseFloat(customTipInput.value);
    currentTipPercent = isNaN(val) ? 0 : val;
    calculateTip();
  });

  customTipInput.addEventListener("input", (e) => {
    const val = parseFloat(e.target.value);
    currentTipPercent = isNaN(val) || val < 0 ? 0 : val;
    calculateTip();
  });

  // Steppers for people
  incPeopleBtn.addEventListener("click", () => {
    let val = parseInt(peopleInput.value) || 1;
    peopleInput.value = val + 1;
    calculateTip();
  });

  decPeopleBtn.addEventListener("click", () => {
    let val = parseInt(peopleInput.value) || 1;
    if (val > 1) {
      peopleInput.value = val - 1;
      calculateTip();
    }
  });

  // Input Listeners
  billInput.addEventListener("input", calculateTip);
  peopleInput.addEventListener("input", calculateTip);

  // Reset Button
  resetBtn.addEventListener("click", () => {
    billInput.value = "100.00";
    peopleInput.value = "1";
    customTipInput.value = "";
    customTipContainer.classList.add("hidden");
    customTipToggle.classList.remove("active");

    presetBtns.forEach((b) => b.classList.remove("active"));
    document
      .querySelector('.tip-btn[data-percent="20"]')
      .classList.add("active");

    currentTipPercent = 20;
    isCustom = false;
    calculateTip();
    showToast("Calculator reset to defaults.");
  });

  // Copy Results Button
  copyBtn.addEventListener("click", () => {
    const bill = parseFloat(billInput.value) || 0;
    const people = parseInt(peopleInput.value) || 1;
    const tipAmount = (bill * currentTipPercent) / 100;
    const total = bill + tipAmount;
    const perPerson = total / people;

    const summary = `HuziHub Tip Calculator Results:
Bill: $${bill.toFixed(2)}
Tip (${currentTipPercent}%): $${tipAmount.toFixed(2)}
Total: $${total.toFixed(2)}
People: ${people}
Total Per Person: $${perPerson.toFixed(2)}`;

    navigator.clipboard
      .writeText(summary)
      .then(() => {
        showToast("Results copied to clipboard!");
      })
      .catch(() => {
        showToast("Failed to copy results.");
      });
  });

  // Share Results Button
  shareBtn.addEventListener("click", () => {
    const bill = parseFloat(billInput.value) || 0;
    const total = bill + (bill * currentTipPercent) / 100;

    if (navigator.share) {
      navigator
        .share({
          title: "Tip Calculation Summary",
          text: `My total bill split is $${total.toFixed(2)} using HuziHub Tip Calculator.`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      copyBtn.click();
    }
  });

  // Calculation Engine
  function calculateTip() {
    clearErrors();
    const bill = parseFloat(billInput.value);
    const people = parseInt(peopleInput.value);

    let isValid = true;

    if (isNaN(bill) || bill < 0) {
      document.getElementById("billError").textContent =
        "Please enter a valid bill amount.";
      isValid = false;
    }

    if (isNaN(people) || people < 1) {
      document.getElementById("peopleError").textContent =
        "Number of people must be at least 1.";
      isValid = false;
    }

    if (isCustom && (isNaN(currentTipPercent) || currentTipPercent < 0)) {
      document.getElementById("tipError").textContent =
        "Please enter a valid tip percentage.";
      isValid = false;
    }

    if (!isValid) return;

    // Formulas
    const tipAmount = bill * (currentTipPercent / 100);
    const totalBill = bill + tipAmount;
    const tipPerPerson = tipAmount / people;
    const totalPerPerson = totalBill / people;

    // Render Results
    document.getElementById("totalPerPersonVal").textContent =
      formatCurrency(totalPerPerson);
    document.getElementById("tipPerPersonVal").textContent =
      `Tip per person: ${formatCurrency(tipPerPerson)}`;
    document.getElementById("tipAmountVal").textContent =
      formatCurrency(tipAmount);
    document.getElementById("totalBillVal").textContent =
      formatCurrency(totalBill);

    // Render Visual Split Bar
    const barBill = document.getElementById("barBill");
    const barTip = document.getElementById("barTip");
    const visualRatio = document.getElementById("visualRatio");

    if (totalBill > 0) {
      const billPercent = (bill / totalBill) * 100;
      const tipPercent = (tipAmount / totalBill) * 100;
      barBill.style.width = `${billPercent.toFixed(2)}%`;
      barTip.style.width = `${tipPercent.toFixed(2)}%`;
      visualRatio.textContent = `${Math.round(billPercent)}% Bill / ${Math.round(tipPercent)}% Tip`;
    } else {
      barBill.style.width = "100%";
      barTip.style.width = "0%";
      visualRatio.textContent = "100% Bill / 0% Tip";
    }
  }

  function clearErrors() {
    document.getElementById("billError").textContent = "";
    document.getElementById("tipError").textContent = "";
    document.getElementById("peopleError").textContent = "";
  }

  function formatCurrency(val) {
    return (
      "$" +
      val.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  }

  // Initial Calculation Run
  calculateTip();
}

/* ============================================================
   TOAST NOTIFICATIONS
   ============================================================ */
function showToast(message) {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
