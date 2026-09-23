/**
 * ============================================================
 * HUZIKIT DISCOUNT CALCULATOR & GLOBAL APPLICATION SCRIPT
 * ============================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize All Subsystems
  initializeCalculator();
  initializeSearch();
  initializeMobileMenu();
  initializeMobileAccordions();
  initializeFAQ();
  initializeHeroParallax();
});

/* ============================================================
   1. DISCOUNT CALCULATOR LOGIC
   ============================================================ */
function initializeCalculator() {
  const originalPriceInput = document.getElementById("originalPrice");
  const discountPercentageInput = document.getElementById("discountPercentage");
  const enableTaxToggle = document.getElementById("enableTaxToggle");
  const taxInputWrap = document.getElementById("taxInputWrap");
  const taxPercentageInput = document.getElementById("taxPercentage");
  const currencySelect = document.getElementById("currencySelect");
  const prefixSymbol = document.getElementById("prefixSymbol");

  const calculateBtn = document.getElementById("calculateBtn");
  const resetBtn = document.getElementById("resetBtn");
  const copyResultBtn = document.getElementById("copyResultBtn");
  const calcErrorAlert = document.getElementById("calcErrorAlert");
  const copyToast = document.getElementById("copyToast");

  // Quick discount buttons
  const quickDiscBtns = document.querySelectorAll(".quick-disc-btn");

  // Result displays
  const finalPriceDisplay = document.getElementById("finalPriceDisplay");
  const taxIncludedSub = document.getElementById("taxIncludedSub");
  const resOriginalPrice = document.getElementById("resOriginalPrice");
  const resDiscountRate = document.getElementById("resDiscountRate");
  const resDiscountAmount = document.getElementById("resDiscountAmount");
  const resTaxCard = document.getElementById("resTaxCard");
  const resTaxAmount = document.getElementById("resTaxAmount");

  // Flow steps
  const flowOrig = document.getElementById("flowOrig");
  const flowDiscText = document.getElementById("flowDiscText");
  const flowDisc = document.getElementById("flowDisc");
  const flowSave = document.getElementById("flowSave");

  // Tax toggle change
  enableTaxToggle.addEventListener("change", () => {
    if (enableTaxToggle.checked) {
      taxInputWrap.style.display = "block";
      resTaxCard.style.display = "block";
      taxIncludedSub.style.display = "block";
    } else {
      taxInputWrap.style.display = "none";
      resTaxCard.style.display = "none";
      taxIncludedSub.style.display = "none";
    }
    calculateDiscount();
  });

  // Currency selector change
  currencySelect.addEventListener("change", () => {
    prefixSymbol.textContent = currencySelect.value;
    calculateDiscount();
  });

  // Quick discount buttons
  quickDiscBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      quickDiscBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      discountPercentageInput.value = btn.getAttribute("data-discount");
      calculateDiscount();
    });
  });

  // Input listeners for live calculation
  [originalPriceInput, discountPercentageInput, taxPercentageInput].forEach(
    (input) => {
      input.addEventListener("input", () => {
        calculateDiscount();
      });
    },
  );

  calculateBtn.addEventListener("click", () => {
    calculateDiscount();
  });

  resetBtn.addEventListener("click", () => {
    originalPriceInput.value = "100";
    discountPercentageInput.value = "20";
    taxPercentageInput.value = "5";
    enableTaxToggle.checked = false;
    taxInputWrap.style.display = "none";
    resTaxCard.style.display = "none";
    taxIncludedSub.style.display = "none";
    currencySelect.value = "$";
    prefixSymbol.textContent = "$";

    quickDiscBtns.forEach((b) => b.classList.remove("active"));
    document
      .querySelector('.quick-disc-btn[data-discount="20"]')
      .classList.add("active");

    calcErrorAlert.style.display = "none";
    calcErrorAlert.textContent = "";
    calculateDiscount();
  });

  copyResultBtn.addEventListener("click", () => {
    const curr = currencySelect.value;
    const orig = parseFloat(originalPriceInput.value) || 0;
    const disc = parseFloat(discountPercentageInput.value) || 0;
    const discAmt = (orig * disc) / 100;
    const finalP = orig - discAmt;

    let copyText = `Huzikit Discount Calculator\n\nOriginal Price: ${curr}${orig.toFixed(2)}\nDiscount: ${disc}%\nDiscount Amount: ${curr}${discAmt.toFixed(2)}\nFinal Price: ${curr}${finalP.toFixed(2)}\nSavings: ${curr}${discAmt.toFixed(2)}`;

    if (enableTaxToggle.checked) {
      const taxRate = parseFloat(taxPercentageInput.value) || 0;
      const taxAmt = (finalP * taxRate) / 100;
      const finalWithTax = finalP + taxAmt;
      copyText += `\nSales Tax (${taxRate}%): ${curr}${taxAmt.toFixed(2)}\nFinal Total (with tax): ${curr}${finalWithTax.toFixed(2)}`;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(copyText)
        .then(() => {
          showToast();
        })
        .catch(() => {
          fallbackCopy(copyText);
        });
    } else {
      fallbackCopy(copyText);
    }
  });

  function showToast() {
    copyToast.classList.add("show");
    setTimeout(() => {
      copyToast.classList.remove("show");
    }, 2500);
  }

  function fallbackCopy(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand("copy");
      showToast();
    } catch (err) {
      console.error("Copy failed", err);
    }
    document.body.removeChild(textarea);
  }

  function calculateDiscount() {
    const origVal = parseFloat(originalPriceInput.value);
    const discVal = parseFloat(discountPercentageInput.value);
    const curr = currencySelect.value;

    // Validation
    calcErrorAlert.style.display = "none";
    calcErrorAlert.textContent = "";

    if (isNaN(origVal) || origVal < 0) {
      showError("Please enter a valid original price.");
      return;
    }
    if (isNaN(discVal) || discVal < 0 || discVal > 100) {
      showError("Discount must be between 0% and 100%.");
      return;
    }

    let taxVal = 0;
    if (enableTaxToggle.checked) {
      taxVal = parseFloat(taxPercentageInput.value);
      if (isNaN(taxVal) || taxVal < 0) {
        showError("Please enter a valid sales tax rate.");
        return;
      }
    }

    // Core Calculations
    const discountAmount = (origVal * discVal) / 100;
    const priceAfterDiscount = origVal - discountAmount;

    let finalPrice = priceAfterDiscount;
    let taxAmount = 0;

    if (enableTaxToggle.checked) {
      taxAmount = (priceAfterDiscount * taxVal) / 100;
      finalPrice = priceAfterDiscount + taxAmount;
    }

    // Prevent NaN or Infinity
    if (!isFinite(finalPrice)) finalPrice = 0;
    if (!isFinite(discountAmount)) discountAmount = 0;
    if (!isFinite(taxAmount)) taxAmount = 0;

    // Update UI
    finalPriceDisplay.textContent = `${curr}${finalPrice.toFixed(2)}`;
    resOriginalPrice.textContent = `${curr}${origVal.toFixed(2)}`;
    resDiscountRate.textContent = `${discVal}%`;
    resDiscountAmount.textContent = `${curr}${discountAmount.toFixed(2)}`;
    resTaxAmount.textContent = `${curr}${taxAmount.toFixed(2)}`;

    // Flow box updates
    flowOrig.textContent = `${curr}${origVal.toFixed(2)}`;
    flowDiscText.textContent = discVal;
    flowDisc.textContent = `-${curr}${discountAmount.toFixed(2)}`;
    flowSave.textContent = `${curr}${discountAmount.toFixed(2)}`;
  }

  function showError(msg) {
    calcErrorAlert.textContent = msg;
    calcErrorAlert.style.display = "block";
  }

  // Run initial calculation on load
  calculateDiscount();
}

/* ============================================================
   2. SEARCH ENGINE & MODAL SYSTEM (ALL 30 TOOLS)
   ============================================================ */
const toolsIndex = [
  {
    name: "Word Counter",
    category: "Text Tools",
    description:
      "Count words, characters, sentences, and paragraphs instantly.",
    keywords: ["word counter", "text count", "word count", "character count"],
    url: "/texttools/word-counter.html",
  },
  {
    name: "Character Counter",
    category: "Text Tools",
    description: "Count characters with and without spaces instantly.",
    keywords: ["character counter", "letters count", "length"],
    url: "/texttools/character-counter.html",
  },
  {
    name: "Case Converter",
    category: "Text Tools",
    description:
      "Convert text between uppercase, lowercase, title case, and camelCase.",
    keywords: ["case converter", "uppercase", "lowercase", "title case"],
    url: "/texttools/case-converter.html",
  },
  {
    name: "Remove Duplicate Lines",
    category: "Text Tools",
    description:
      "Clean up text lists by stripping out identical duplicate lines.",
    keywords: ["remove duplicates", "duplicate lines", "clean text"],
    url: "/texttools/remove-duplicate-lines.html",
  },
  {
    name: "Lorem Ipsum Generator",
    category: "Text Tools",
    description:
      "Generate placeholder filler text for web designs and layouts.",
    keywords: ["lorem ipsum", "dummy text", "placeholder"],
    url: "/texttools/loremipsumgenerator.html",
  },
  {
    name: "Password Generator",
    category: "Text Tools",
    description: "Generate secure cryptographic passwords with custom symbols.",
    keywords: ["password generator", "secure password", "random key"],
    url: "/texttools/passwordgenerator.html",
  },
  {
    name: "Text Reverser",
    category: "Text Tools",
    description: "Reverse strings, words, and text lines instantly.",
    keywords: ["text reverser", "reverse text", "backward"],
    url: "/texttools/text-reverser.html",
  },
  {
    name: "Online Notepad",
    category: "Text Tools",
    description: "Save notes securely right in your browser storage.",
    keywords: ["online notepad", "notepad", "notes"],
    url: "/texttools/onlinenotepad.html",
  },

  {
    name: "Age Calculator",
    category: "Calculators",
    description: "Calculate exact age in years, months, and days.",
    keywords: ["age calculator", "birthday", "how old"],
    url: "/calculator/agecalculator.html",
  },
  {
    name: "BMI Calculator",
    category: "Calculators",
    description: "Calculate Body Mass Index and check healthy weight ranges.",
    keywords: ["bmi calculator", "body mass index", "weight"],
    url: "/calculator/bmi-calculator.html",
  },
  {
    name: "Percentage Calculator",
    category: "Calculators",
    description: "Calculate percentage increases, decreases, and ratios.",
    keywords: ["percentage calculator", "percent", "ratio"],
    url: "/calculator/percentage-calculator.html",
  },
  {
    name: "Calorie Calculator",
    category: "Calculators",
    description: "Estimate daily caloric needs and BMR.",
    keywords: ["calorie calculator", "bmr", "diet", "nutrition"],
    url: "/calculator/Calorie-Calculator.html",
  },
  {
    name: "Discount Calculator",
    category: "Calculators",
    description:
      "Calculate discounts, final sale prices, and savings instantly.",
    keywords: [
      "discount calculator",
      "sale price",
      "percentage discount",
      "savings",
    ],
    url: "/calculator/discount-calculator.html",
  },
  {
    name: "Savings & Goal Calculator",
    category: "Calculators",
    description: "Plan financial goals and compound savings over time.",
    keywords: ["savings calculator", "goal", "compound interest"],
    url: "/calculator/saving&goalcalculator.html",
  },
  {
    name: "Tip Calculator",
    category: "Calculators",
    description: "Calculate gratuities and split restaurant bills.",
    keywords: ["tip calculator", "gratuity", "bill split"],
    url: "/calculators/tip-calculator.html",
  },
  {
    name: "GPA Calculator",
    category: "Calculators",
    description: "Calculate Grade Point Average and semester grades.",
    keywords: ["gpa calculator", "grades", "university"],
    url: "/calculator/gpa-calculator.html",
  },

  {
    name: "Image Compressor",
    category: "Image & PDF",
    description: "Compress JPG and PNG images without losing quality.",
    keywords: ["image compressor", "shrink image", "optimize photo"],
    url: "/image&pdf/image-compressor.html",
  },
  {
    name: "Image Resizer",
    category: "Image & PDF",
    description: "Resize images to custom dimensions in pixels.",
    keywords: ["image resizer", "scale image", "dimensions"],
    url: "/image&pdf/image-resizer.html",
  },
  {
    name: "PDF to Word",
    category: "Image & PDF",
    description: "Convert PDF documents to editable Word files.",
    keywords: ["pdf to word", "convert pdf", "document"],
    url: "/image-pdf/pdf-to-word.html",
  },
  {
    name: "JPG to PNG",
    category: "Image & PDF",
    description: "Convert image file formats instantly.",
    keywords: ["jpg to png", "image converter", "format"],
    url: "/image&pdf/jpg-to-png.html",
  },
  {
    name: "Color Picker / HEX",
    category: "Image & PDF",
    description: "Pick colors and get HEX, RGB, and HSL codes.",
    keywords: ["color picker", "hex code", "rgb", "palette"],
    url: "/image&pdf/colorpicker.html",
  },
  {
    name: "QR Code Generator",
    category: "Image & PDF",
    description: "Generate custom QR codes for URLs and text.",
    keywords: ["qr code generator", "barcode", "scan"],
    url: "/image&pdf/QRGenrator.html",
  },

  {
    name: "JSON Formatter",
    category: "Developer",
    description: "Format, validate, and beautify JSON payloads.",
    keywords: ["json formatter", "json beautifier", "lint json"],
    url: "/developertools/JSONFORMATTER.html",
  },
  {
    name: "Base64 Encoder/Decoder",
    category: "Developer",
    description: "Encode and decode Base64 strings securely.",
    keywords: ["base64", "encoder", "decoder"],
    url: "/developertools/base64encoderdecoder.html",
  },
  {
    name: "URL Encoder/Decoder",
    category: "Developer",
    description: "Encode and decode web URLs and query strings.",
    keywords: ["url encoder", "url decoder", "uri"],
    url: "/developertools/urlencoderdecoder.html",
  },
  {
    name: "Meta Tag Generator",
    category: "Developer",
    description: "Generate SEO meta tags for websites.",
    keywords: ["meta tag generator", "seo tags", "open graph"],
    url: "/developertools/meta-tag-generator.html",
  },
  {
    name: "Regex Tester",
    category: "Developer",
    description: "Test regular expressions against sample text.",
    keywords: ["regex tester", "regular expression", "pattern"],
    url: "/developertools/regextester.html",
  },
  {
    name: "Markdown to HTML",
    category: "Developer",
    description: "Convert Markdown syntax into clean HTML code.",
    keywords: ["markdown to html", "md parser"],
    url: "/developertools/markdownhtml.html",
  },
  {
    name: "CSS Minifier",
    category: "Developer",
    description: "Minify CSS stylesheets to improve site speed.",
    keywords: ["css minifier", "compress css", "optimize"],
    url: "/developertools/cssminifier.html",
  },
  {
    name: "Unix Timestamp",
    category: "Developer",
    description: "Convert between Unix timestamps and human dates.",
    keywords: ["unix timestamp", "epoch", "date converter"],
    url: "/developertools/unixtimestamp.html",
  },
];

function initializeSearch() {
  const searchTriggerBtn = document.getElementById("searchTriggerBtn");
  const searchModalBackdrop = document.getElementById("searchModalBackdrop");
  const searchModalCloseBtn = document.getElementById("searchModalCloseBtn");
  const searchInputModal = document.getElementById("searchInputModal");
  const searchModalResults = document.getElementById("searchModalResults");

  let selectedSearchIndex = -1;

  function openSearchModal() {
    searchModalBackdrop.classList.add("active");
    searchModalBackdrop.setAttribute("aria-hidden", "false");
    searchInputModal.value = "";
    renderSearchResults("");
    searchInputModal.focus();
    document.body.style.overflow = "hidden";
  }

  function closeSearchModal() {
    searchModalBackdrop.classList.remove("active");
    searchModalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (searchTriggerBtn) {
    searchTriggerBtn.addEventListener("click", openSearchModal);
  }

  if (searchModalCloseBtn) {
    searchModalCloseBtn.addEventListener("click", closeSearchModal);
  }

  if (searchModalBackdrop) {
    searchModalBackdrop.addEventListener("click", (e) => {
      if (e.target === searchModalBackdrop) {
        closeSearchModal();
      }
    });
  }

  // Ctrl + K or Cmd + K shortcut
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (searchModalBackdrop.classList.contains("active")) {
        closeSearchModal();
      } else {
        openSearchModal();
      }
    }
    if (
      e.key === "Escape" &&
      searchModalBackdrop.classList.contains("active")
    ) {
      closeSearchModal();
    }
  });

  if (searchInputModal) {
    searchInputModal.addEventListener("input", (e) => {
      selectedSearchIndex = -1;
      renderSearchResults(e.target.value);
    });

    searchInputModal.addEventListener("keydown", (e) => {
      const items = searchModalResults.querySelectorAll(".search-result-item");
      if (!items.length) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedSearchIndex = (selectedSearchIndex + 1) % items.length;
        updateSelectedSearchItem(items);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedSearchIndex =
          (selectedSearchIndex - 1 + items.length) % items.length;
        updateSelectedSearchItem(items);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (selectedSearchIndex >= 0 && items[selectedSearchIndex]) {
          items[selectedSearchIndex].click();
        } else if (items.length > 0) {
          items[0].click();
        }
      }
    });
  }

  function updateSelectedSearchItem(items) {
    items.forEach((item, idx) => {
      if (idx === selectedSearchIndex) {
        item.classList.add("selected");
        item.scrollIntoView({ block: "nearest" });
      } else {
        item.classList.remove("selected");
      }
    });
  }

  function renderSearchResults(query) {
    const q = query.trim().toLowerCase();
    let filtered = toolsIndex;

    if (q !== "") {
      filtered = toolsIndex.filter((tool) => {
        const matchName = tool.name.toLowerCase().includes(q);
        const matchCat = tool.category.toLowerCase().includes(q);
        const matchDesc = tool.description.toLowerCase().includes(q);
        const matchKw = tool.keywords.some((kw) =>
          kw.toLowerCase().includes(q),
        );
        return matchName || matchCat || matchDesc || matchKw;
      });
    }

    if (filtered.length === 0) {
      searchModalResults.innerHTML = `
                <div class="search-empty-state">
                    <h4>No tools found</h4>
                    <p>Try another keyword such as: calculator, text, image, developer</p>
                </div>
            `;
      return;
    }

    searchModalResults.innerHTML = filtered
      .map(
        (tool) => `
            <a href="${tool.url}" class="search-result-item">
                <span class="search-result-title">${tool.name}</span>
                <span class="search-result-desc">${tool.category} — ${tool.description}</span>
            </a>
        `,
      )
      .join("");
  }
}

/* ============================================================
   3. MOBILE MENU & ACCORDIONS
   ============================================================ */
function initializeMobileMenu() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const mobileCloseBtn = document.getElementById("mobileCloseBtn");

  function openMenu() {
    mobileMenu.classList.add("active");
    mobileOverlay.classList.add("active");
    mobileMenu.setAttribute("aria-hidden", "false");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileMenu.classList.remove("active");
    mobileOverlay.classList.remove("active");
    mobileMenu.setAttribute("aria-hidden", "true");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener("click", openMenu);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener("click", closeMenu);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
      closeMenu();
    }
  });
}

function initializeMobileAccordions() {
  const toggles = document.querySelectorAll(".mobile-accordion-toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const accordion = toggle.parentElement;
      const panel = accordion.querySelector(".mobile-accordion-panel");
      const isOpen = accordion.classList.contains("open");

      // Close all
      document.querySelectorAll(".mobile-accordion").forEach((acc) => {
        acc.classList.remove("open");
        acc.querySelector(".mobile-accordion-panel").classList.remove("open");
        acc
          .querySelector(".mobile-accordion-toggle")
          .setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        accordion.classList.add("open");
        panel.classList.add("open");
        toggle.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* ============================================================
   4. FAQ ACCORDIONS
   ============================================================ */
function initializeFAQ() {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement;
      const isOpen = faqItem.classList.contains("open");

      // Optional: Close others or allow multiple. Here we toggle single item.
      faqItem.classList.toggle("open");
      question.setAttribute("aria-expanded", !isOpen);
    });
  });
}

/* ============================================================
   5. HERO 3D PARALLAX EFFECT
   ============================================================ */
function initializeHeroParallax() {
  const wrapper = document.getElementById("heroVisualWrapper");
  const card = document.getElementById("hero3DCard");

  if (!wrapper || !card) return;

  // Respect reduced motion
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReducedMotion) return;

  wrapper.addEventListener("mousemove", (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  });

  wrapper.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0px)";
    card.style.transition = "transform 0.5s ease";
  });

  wrapper.addEventListener("mouseenter", () => {
    card.style.transition = "none";
  });
}
