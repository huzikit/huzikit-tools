/**
 * HUZIKit BMI CALCULATOR - PRODUCTION VANILLA JAVASCRIPT
 */
(function () {
  "use strict";

  // 30 Tools Index for Search Functionality
  const toolsIndex = [
    {
      name: "Word Counter",
      category: "Text Tools",
      description: "Count words, characters, sentences, and reading time.",
      url: "/texttools/word-counter.html",
      keywords: "text count words characters",
    },
    {
      name: "Character Counter",
      category: "Text Tools",
      description: "Count exact characters and spaces in your text.",
      url: "/texttools/character-counter.html",
      keywords: "character count letters",
    },
    {
      name: "Case Converter",
      category: "Text Tools",
      description:
        "Convert text to uppercase, lowercase, title case, and more.",
      url: "/texttools/case-converter.html",
      keywords: "uppercase lowercase text convert",
    },
    {
      name: "Remove Duplicates",
      category: "Text Tools",
      description: "Clean duplicate lines and words instantly.",
      url: "/texttools/remove-duplicate-lines.html",
      keywords: "duplicates remove lines unique",
    },
    {
      name: "Lorem Ipsum Generator",
      category: "Text Tools",
      description: "Generate placeholder text for design and layouts.",
      url: "/texttools/loremipsumgenerator.html",
      keywords: "lorem ipsum dummy text generator",
    },
    {
      name: "Password Generator",
      category: "Text Tools",
      description: "Create secure, randomized cryptographic passwords.",
      url: "/texttools/passwordgenerator.html",
      keywords: "password secure generator random",
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      description: "Reverse text strings, words, or letters.",
      url: "/texttools/text-reverser.html",
      keywords: "reverse text mirror",
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      description: "Store notes locally in your browser with auto-save.",
      url: "/texttools/onlinenotepad.html",
      keywords: "notepad notes scratchpad",
    },

    {
      name: "Age Calculator",
      category: "Calculators",
      description: "Calculate exact age in years, months, and days.",
      url: "/calculator/agecalculator.html",
      keywords: "age calculator birth date",
    },
    {
      name: "BMI Calculator",
      category: "Calculators",
      description: "Calculate Body Mass Index and health category.",
      url: "/calculator/bmi-calculator.html",
      keywords: "bmi body mass index calculator health",
    },
    {
      name: "Percentage Calculator",
      category: "Calculators",
      description: "Compute percentage increase, decrease, and proportions.",
      url: "/calculator/percentage-calculator.html",
      keywords: "percentage math calculator",
    },
    {
      name: "Calorie Calculator",
      category: "Calculators",
      description: "Estimate daily caloric expenditure and targets.",

      url: "/calculator/Calorie-Calculator.html",
      keywords: "calorie bmr tdee fitness",
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      description: "Calculate sale prices and total savings.",
      url: "/calculator/discount-calculator.html",
      keywords: "discount sale price savings",
    },
    {
      name: "Savings&Goal Calculator",
      category: "Calculators",
      description: "Project compound interest and financial savings.",
      url: "/calculator/saving&goalcalculator.html",
      keywords: "savings compound interest finance",
    },
    {
      name: "Tip Calculator",
      category: "Calculators",
      description: "Calculate tips and split bills among groups.",
      url: "/calculators/tip-calculator.html",
      keywords: "tip calculator bill split",
    },
    {
      name: "GPA Calculator",
      category: "Calculators",
      description: "Calculate cumulative grade point averages.",
      url: "/calculator/gpa-calculator.html",
      keywords: "gpa grades student calculator",
    },

    {
      name: "Image Compressor",
      category: "Image & PDF",
      description: "Compress JPEG and PNG images losslessly.",
      url: "/image&pdf/image-compressor.html",
      keywords: "image compress reduce size",
    },
    {
      name: "Image Resizer",
      category: "Image & PDF",
      description: "Resize images to precise dimensions instantly.",
      url: "/image&pdf/image-resizer.html",
      keywords: "image resizer dimensions scale",
    },
    {
      name: "PDF to Word",
      category: "Image & PDF",
      description: "Convert PDF documents to editable Word files.",
      url: "/image-pdf/pdf-to-word.html",
      keywords: "pdf to word converter document",
    },
    {
      name: "JPG to PNG",
      category: "Image & PDF",
      description: "Convert image file formats instantly.",
      url: "/image&pdf/jpg-to-png.html",
      keywords: "jpg png convert image format",
    },
    {
      name: "Color Picker",
      category: "Image & PDF",
      description: "Extract HEX, RGB, and HSL color values.",
      url: "/image&pdf/colorpicker.html",
      keywords: "color picker hex rgb",
    },
    {
      name: "QR Code Generator",
      category: "Image & PDF",
      description: "Generate custom QR codes for URLs and text.",
      url: "/image&pdf/QRGenrator.html",
      keywords: "qr code generator barcode",
    },

    {
      name: "JSON Formatter",
      category: "Developer",
      description: "Format, validate, and minify JSON payloads.",
      url: "/developertools/JSONFORMATTER.html",
      keywords: "json formatter validator",
    },
    {
      name: "Base64 Utility",
      category: "Developer",
      description: "Encode and decode Base64 data strings.",
      url: "/developertools/base64encoderdecoder.html",
      keywords: "base64 encode decode",
    },
    {
      name: "URL Encoder",
      category: "Developer",
      description: "URL encode and decode query parameters.",
      url: "/developertools/urlencoderdecoder.html",
      keywords: "url encoder decoder",
    },
    {
      name: "Meta Tag Generator",
      category: "Developer",
      description: "Generate optimized SEO meta tags.",
      url: "/developertools/meta-tag-generator.html",
      keywords: "meta tag seo generator",
    },
    {
      name: "Regex Tester",
      category: "Developer",
      description: "Test regular expressions in real-time.",
      url: "/developertools/regextester.html",
      keywords: "regex regular expression tester",
    },
    {
      name: "Markdown to HTML",
      category: "Developer",
      description: "Convert Markdown syntax to rendered HTML.",
      url: "/developertools/markdownhtml.html",
      keywords: "markdown html converter",
    },
    {
      name: "CSS Minifier",
      category: "Developer",
      description: "Minify and optimize CSS style sheets.",
      url: "/developertools/cssminifier.html",
      keywords: "css minifier compressor",
    },
    {
      name: "Unix Timestamp",
      category: "Developer",
      description: "Convert Unix timestamps to readable dates.",
      url: "/developertools/unixtimestamp.html",
      keywords: "unix timestamp date converter",
    },
  ];

  document.addEventListener("DOMContentLoaded", () => {
    initializeBMI();
    initializeSearch();
    initializeMobileMenu();
    initializeFAQ();
  });

  // ==========================================================
  // 1. BMI CALCULATOR LOGIC
  // ==========================================================
  function initializeBMI() {
    const metricTab = document.getElementById("metricTab");
    const imperialTab = document.getElementById("imperialTab");
    const metricInputs = document.getElementById("metricInputs");
    const imperialInputs = document.getElementById("imperialInputs");
    const bmiForm = document.getElementById("bmiForm");
    const resetBtn = document.getElementById("resetBtn");
    const copyResultBtn = document.getElementById("copyResultBtn");

    let currentUnit = "metric";

    metricTab.addEventListener("click", () => {
      currentUnit = "metric";
      metricTab.classList.add("active");
      metricTab.setAttribute("aria-selected", "true");
      imperialTab.classList.remove("active");
      imperialTab.setAttribute("aria-selected", "false");
      metricInputs.style.display = "block";
      imperialInputs.style.display = "none";
      clearErrors();
    });

    imperialTab.addEventListener("click", () => {
      currentUnit = "imperial";
      imperialTab.classList.add("active");
      imperialTab.setAttribute("aria-selected", "true");
      metricTab.classList.remove("active");
      metricTab.setAttribute("aria-selected", "false");
      imperialInputs.style.display = "block";
      metricInputs.style.display = "none";
      clearErrors();
    });

    bmiForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (validateInputs(currentUnit)) {
        calculateBMI(currentUnit);
      }
    });

    resetBtn.addEventListener("click", () => {
      bmiForm.reset();
      clearErrors();
      document.getElementById("resultDashboard").style.display = "none";
    });

    if (copyResultBtn) {
      copyResultBtn.addEventListener("click", () => {
        const bmiNum = document.getElementById("bmiResultNumber").textContent;
        const category =
          document.getElementById("bmiCategoryBadge").textContent;
        const textToCopy = `Huzikit BMI Calculator\nBMI: ${bmiNum}\nCategory: ${category}\nCalculated at https://huzikit.com/bmi-calculator/`;

        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast("BMI result copied successfully");
        });
      });
    }
  }

  function validateInputs(unit) {
    clearErrors();
    let isValid = true;

    if (unit === "metric") {
      const hCm = document.getElementById("heightCm");
      const wKg = document.getElementById("weightKg");

      if (
        !hCm.value ||
        parseFloat(hCm.value) <= 0 ||
        parseFloat(hCm.value) > 300
      ) {
        showError("heightCm", "heightCmError");
        isValid = false;
      }
      if (
        !wKg.value ||
        parseFloat(wKg.value) <= 0 ||
        parseFloat(wKg.value) > 500
      ) {
        showError("weightKg", "weightKgError");
        isValid = false;
      }
    } else {
      const hFt = document.getElementById("heightFt");
      const hIn = document.getElementById("heightIn");
      const wLb = document.getElementById("weightLb");

      const ftVal = parseFloat(hFt.value) || 0;
      const inVal = parseFloat(hIn.value) || 0;

      if ((ftVal <= 0 && inVal <= 0) || ftVal > 8 || inVal >= 12) {
        showError("heightFt", "heightImperialError");
        isValid = false;
      }
      if (
        !wLb.value ||
        parseFloat(wLb.value) <= 0 ||
        parseFloat(wLb.value) > 1000
      ) {
        showError("weightLb", "weightLbError");
        isValid = false;
      }
    }
    return isValid;
  }

  function showError(inputId, errorId) {
    const inputElem = document.getElementById(inputId);
    if (inputElem && inputElem.closest(".form-control-wrap")) {
      inputElem.closest(".form-control-wrap").classList.add("error");
    }
  }

  function clearErrors() {
    document
      .querySelectorAll(".form-control-wrap")
      .forEach((el) => el.classList.remove("error"));
  }

  function calculateBMI(unit) {
    let bmi = 0;

    if (unit === "metric") {
      const hMeters =
        parseFloat(document.getElementById("heightCm").value) / 100;
      const wKg = parseFloat(document.getElementById("weightKg").value);
      bmi = wKg / (hMeters * hMeters);
    } else {
      const ft = parseFloat(document.getElementById("heightFt").value) || 0;
      const inches = parseFloat(document.getElementById("heightIn").value) || 0;
      const totalInches = ft * 12 + inches;
      const wLb = parseFloat(document.getElementById("weightLb").value);
      bmi = (703 * wLb) / (totalInches * totalInches);
    }

    const roundedBMI = Math.round(bmi * 10) / 10;
    displayBMIResult(roundedBMI);
  }

  function displayBMIResult(bmi) {
    const resultDashboard = document.getElementById("resultDashboard");
    const bmiNumElem = document.getElementById("bmiResultNumber");
    const badgeElem = document.getElementById("bmiCategoryBadge");
    const textElem = document.getElementById("bmiInterpretationText");
    const markerElem = document.getElementById("bmiScaleMarker");
    const tooltipElem = document.getElementById("markerTooltip");

    bmiNumElem.textContent = bmi;
    tooltipElem.textContent = bmi;

    let category = "";
    let interpretation = "";
    let badgeClass = "";
    let markerPosition = 0;

    if (bmi < 18.5) {
      category = "Underweight";
      interpretation =
        "Your BMI falls within the underweight range. Consider consulting a nutritionist.";
      badgeClass = "warning";
      markerPosition = Math.max(5, (bmi / 18.5) * 22);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Normal Weight";
      interpretation =
        "Your BMI falls within the normal-weight range for adults.";
      badgeClass = "normal";
      markerPosition = 25 + ((bmi - 18.5) / 6.4) * 25;
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      category = "Overweight";
      interpretation =
        "Your BMI falls within the overweight range. Regular physical activity is recommended.";
      badgeClass = "warning";
      markerPosition = 52 + ((bmi - 25.0) / 4.9) * 23;
    } else {
      category = "Obesity";
      interpretation =
        "Your BMI falls within the obesity range. Consult a healthcare professional for guidance.";
      badgeClass = "danger";
      markerPosition = Math.min(95, 78 + ((bmi - 30.0) / 15) * 20);
    }

    badgeElem.textContent = category;
    badgeElem.className = "bmi-category-badge " + badgeClass;
    textElem.textContent = interpretation;
    markerElem.style.left = markerPosition + "%";

    resultDashboard.style.display = "block";
    resultDashboard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // ==========================================================
  // 2. SEARCH MODAL LOGIC
  // ==========================================================
  function initializeSearch() {
    const searchTrigger = document.getElementById("searchTriggerBtn");
    const searchOverlay = document.getElementById("searchModalOverlay");
    const searchInput = document.getElementById("searchInput");
    const searchClose = document.getElementById("searchCloseBtn");
    const resultsContainer = document.getElementById("searchResultsContainer");

    let selectedIndex = -1;

    function openSearch() {
      searchOverlay.classList.add("open");
      searchInput.focus();
      renderResults(toolsIndex);
    }

    function closeSearch() {
      searchOverlay.classList.remove("open");
      searchInput.value = "";
      selectedIndex = -1;
    }

    searchTrigger.addEventListener("click", openSearch);
    searchClose.addEventListener("click", closeSearch);
    searchOverlay.addEventListener("click", (e) => {
      if (e.target === searchOverlay) closeSearch();
    });

    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (searchOverlay.classList.contains("open")) {
          closeSearch();
        } else {
          openSearch();
        }
      }
      if (e.key === "Escape" && searchOverlay.classList.contains("open")) {
        closeSearch();
      }
    });

    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        renderResults(toolsIndex);
        return;
      }
      const filtered = toolsIndex.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query) ||
          tool.category.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.keywords.toLowerCase().includes(query),
      );
      renderResults(filtered);
      selectedIndex = -1;
    });

    searchInput.addEventListener("keydown", (e) => {
      const items = resultsContainer.querySelectorAll(".search-result-item");
      if (!items.length) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % items.length;
        updateSelection(items);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        updateSelection(items);
      } else if (
        e.key === "Enter" &&
        selectedIndex >= 0 &&
        items[selectedIndex]
      ) {
        e.preventDefault();
        items[selectedIndex].click();
      }
    });

    function renderResults(tools) {
      if (!tools.length) {
        resultsContainer.innerHTML = `<div class="search-hint">No tools found<br><span style="font-size:0.85rem">Try another search term.</span></div>`;
        return;
      }
      resultsContainer.innerHTML = tools
        .map(
          (tool) => `
                <a href="${tool.url}" class="search-result-item">
                    <span class="search-result-title">${tool.name} <span style="font-size:0.75rem; color:var(--ink-faint); font-weight:normal;">(${tool.category})</span></span>
                    <span class="search-result-desc">${tool.description}</span>
                </a>
            `,
        )
        .join("");
    }

    function updateSelection(items) {
      items.forEach((item, idx) => {
        if (idx === selectedIndex) {
          item.classList.add("selected");
          item.scrollIntoView({ block: "nearest" });
        } else {
          item.classList.remove("selected");
        }
      });
    }
  }

  // ==========================================================
  // 3. MOBILE MENU & ACCORDIONS LOGIC
  // ==========================================================
  function initializeMobileMenu() {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const mobileDrawer = document.getElementById("mobileMenuDrawer");
    const mobileOverlay = document.getElementById("mobileMenuOverlay");
    const mobileCloseBtn = document.getElementById("mobileCloseBtn");

    function openMobileMenu() {
      mobileDrawer.classList.add("open");
      mobileOverlay.classList.add("open");
      mobileDrawer.setAttribute("aria-hidden", "false");
      hamburgerBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }

    function closeMobileMenu() {
      mobileDrawer.classList.remove("open");
      mobileOverlay.classList.remove("open");
      mobileDrawer.setAttribute("aria-hidden", "true");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    hamburgerBtn.addEventListener("click", openMobileMenu);
    mobileCloseBtn.addEventListener("click", closeMobileMenu);
    mobileOverlay.addEventListener("click", closeMobileMenu);

    document.querySelectorAll(".mobile-acc-header").forEach((btn) => {
      btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        const isOpen = btn.classList.contains("active");

        document.querySelectorAll(".mobile-acc-header").forEach((b) => {
          b.classList.remove("active");
          b.setAttribute("aria-expanded", "false");
          b.nextElementSibling.style.display = "none";
        });

        if (!isOpen) {
          btn.classList.add("active");
          btn.setAttribute("aria-expanded", "true");
          content.style.display = "block";
        }
      });
    });
  }

  // ==========================================================
  // 4. FAQ ACCORDION LOGIC
  // ==========================================================
  function initializeFAQ() {
    document.querySelectorAll(".faq-question").forEach((question) => {
      question.addEventListener("click", () => {
        const item = question.closest(".faq-item");
        const isOpen = item.classList.contains("active");

        document.querySelectorAll(".faq-item").forEach((i) => {
          i.classList.remove("active");
          i.querySelector(".faq-question").setAttribute(
            "aria-expanded",
            "false",
          );
        });

        if (!isOpen) {
          item.classList.add("active");
          question.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  // ==========================================================
  // 5. TOAST NOTIFICATION UTILITY
  // ==========================================================
  function showToast(message) {
    const toast = document.getElementById("toastNotification");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
})();
