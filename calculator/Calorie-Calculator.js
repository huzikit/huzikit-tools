/**
 * Huzihub Calorie Calculator & Global UI Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================
       1. TOOL DATABASE FOR SEARCH MODAL
       ========================================== */
  const toolsDatabase = [
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

  /* ==========================================
       2. MOBILE NAVIGATION DRAWER
       ========================================== */
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");
  const mobileNavOverlay = document.getElementById("mobileNavOverlay");
  const mobileCloseBtn = document.getElementById("mobileCloseBtn");

  function openMobileMenu() {
    mobileNavDrawer.classList.add("active");
    mobileNavOverlay.classList.add("active");
    mobileNavDrawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    mobileNavDrawer.classList.remove("active");
    mobileNavOverlay.classList.remove("active");
    mobileNavDrawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (mobileMenuToggle)
    mobileMenuToggle.addEventListener("click", openMobileMenu);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener("click", closeMobileMenu);
  if (mobileNavOverlay)
    mobileNavOverlay.addEventListener("click", closeMobileMenu);

  // Mobile Accordion Toggle
  const mobileAccHeaders = document.querySelectorAll(".mobile-acc-header");
  mobileAccHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      header.classList.toggle("active");
      const content = header.nextElementSibling;
      content.classList.toggle("open");
    });
  });

  /* ==========================================
       3. SEARCH MODAL & CTRL+K SYSTEM
       ========================================== */
  const searchTriggerBtn = document.getElementById("searchTriggerBtn");
  const mobileSearchPrompt = document.getElementById("mobileSearchPrompt");
  const searchModalBackdrop = document.getElementById("searchModalBackdrop");
  const searchModalClose = document.getElementById("searchModalClose");
  const searchInputModal = document.getElementById("searchInputModal");
  const searchModalResults = document.getElementById("searchModalResults");

  function openSearchModal() {
    searchModalBackdrop.classList.add("active");
    searchInputModal.focus();
    document.body.style.overflow = "hidden";
    renderSearchResults("");
  }

  function closeSearchModal() {
    searchModalBackdrop.classList.remove("active");
    searchInputModal.value = "";
    document.body.style.overflow = "";
  }

  if (searchTriggerBtn)
    searchTriggerBtn.addEventListener("click", openSearchModal);
  if (mobileSearchPrompt) {
    mobileSearchPrompt.addEventListener("click", () => {
      closeMobileMenu();
      openSearchModal();
    });
  }
  if (searchModalClose)
    searchModalClose.addEventListener("click", closeSearchModal);
  if (searchModalBackdrop) {
    searchModalBackdrop.addEventListener("click", (e) => {
      if (e.target === searchModalBackdrop) closeSearchModal();
    });
  }

  // Keyboard shortcut Ctrl+K & ESC
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openSearchModal();
    }
    if (e.key === "Escape") {
      closeSearchModal();
      closeMobileMenu();
    }
  });

  function renderSearchResults(query) {
    const q = query.trim().toLowerCase();
    const filtered =
      q === ""
        ? toolsDatabase.slice(0, 8)
        : toolsDatabase.filter(
            (t) =>
              t.name.toLowerCase().includes(q) ||
              t.category.toLowerCase().includes(q),
          );

    if (filtered.length === 0) {
      searchModalResults.innerHTML = `<div class="search-hint">No matching tools found for "${query}".</div>`;
      return;
    }

    searchModalResults.innerHTML = filtered
      .map(
        (tool) => `
            <a href="${tool.url}" class="search-result-item">
                <span class="tool-name">${escapeHTML(tool.name)}</span>
                <span class="tool-category">${escapeHTML(tool.category)}</span>
            </a>
        `,
      )
      .join("");
  }

  if (searchInputModal) {
    searchInputModal.addEventListener("input", (e) => {
      renderSearchResults(e.target.value);
    });
  }

  /* ==========================================
       4. FAQ ACCORDION
       ========================================== */
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach((i) => i.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
  });

  /* ==========================================
       5. CALCULATION ENGINE & UI LOGIC
       ========================================== */
  const calorieForm = document.getElementById("calorieForm");
  const unitBtns = document.querySelectorAll(".unit-btn");
  const heightGroupMetric = document.getElementById("heightGroupMetric");
  const heightGroupImperial = document.getElementById("heightGroupImperial");
  const weightLabel = document.getElementById("weightLabel");
  const weightUnitTag = document.getElementById("weightUnitTag");

  const resultsEmptyState = document.getElementById("resultsEmptyState");
  const resultsActiveState = document.getElementById("resultsActiveState");

  let currentUnitSystem = "metric";

  // Unit toggle
  unitBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      unitBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      currentUnitSystem = btn.getAttribute("data-unit");

      if (currentUnitSystem === "imperial") {
        heightGroupMetric.style.display = "none";
        heightGroupImperial.style.display = "block";
        weightLabel.innerHTML = 'Weight <span class="required">*</span>';
        weightUnitTag.textContent = "lb";
        document.getElementById("weightInput").placeholder = "154";
      } else {
        heightGroupMetric.style.display = "block";
        heightGroupImperial.style.display = "none";
        weightLabel.innerHTML = 'Weight <span class="required">*</span>';
        weightUnitTag.textContent = "kg";
        document.getElementById("weightInput").placeholder = "70";
      }
    });
  });

  // Form Submit Calculation
  if (calorieForm) {
    calorieForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (validateAndCalculate()) {
        resultsEmptyState.style.display = "none";
        resultsActiveState.style.display = "block";
        resultsActiveState.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    });
  }

  // Reset Button
  const resetBtn = document.getElementById("resetBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      calorieForm.reset();
      // Reset unit to metric default
      unitBtns[0].click();
      clearValidationErrors();
      resultsEmptyState.style.display = "block";
      resultsActiveState.style.display = "none";
    });
  }

  function clearValidationErrors() {
    document
      .querySelectorAll(".form-group")
      .forEach((g) => g.classList.remove("has-error"));
  }

  function validateAndCalculate() {
    clearValidationErrors();
    let isValid = true;

    const ageInput = document.getElementById("ageInput");
    const weightInput = document.getElementById("weightInput");

    const age = parseFloat(ageInput.value);
    const weightVal = parseFloat(weightInput.value);

    if (isNaN(age) || age < 15 || age > 100) {
      ageInput.closest(".form-group").classList.add("has-error");
      isValid = false;
    }

    let heightCm = 0;
    let weightKg = 0;

    if (currentUnitSystem === "metric") {
      const heightMetricInput = document.getElementById("heightMetricInput");
      const hMetric = parseFloat(heightMetricInput.value);
      if (isNaN(hMetric) || hMetric < 100 || hMetric > 250) {
        heightMetricInput.closest(".form-group").classList.add("has-error");
        isValid = false;
      } else {
        heightCm = hMetric;
      }

      if (isNaN(weightVal) || weightVal < 30 || weightVal > 350) {
        weightInput.closest(".form-group").classList.add("has-error");
        isValid = false;
      } else {
        weightKg = weightVal;
      }
    } else {
      const hFeet =
        parseFloat(document.getElementById("heightFeetInput").value) || 0;
      const hInches =
        parseFloat(document.getElementById("heightInchesInput").value) || 0;
      const totalInches = hFeet * 12 + hInches;

      if (totalInches < 40 || totalInches > 95) {
        document
          .getElementById("heightGroupImperial")
          .classList.add("has-error");
        isValid = false;
      } else {
        heightCm = totalInches * 2.54;
      }

      if (isNaN(weightVal) || weightVal < 66 || weightVal > 770) {
        weightInput.closest(".form-group").classList.add("has-error");
        isValid = false;
      } else {
        weightKg = weightVal * 0.45359237; // lb to kg
      }
    }

    if (!isValid) return false;

    const sex = document.querySelector('input[name="sex"]:checked').value;
    const activityMultiplier = parseFloat(
      document.getElementById("activitySelect").value,
    );
    const goal = document.querySelector('input[name="goal"]:checked').value;

    // Mifflin-St Jeor Formula
    let bmr = 10 * weightKg + 6.25 * heightCm - 5 * age;
    if (sex === "male") {
      bmr += 5;
    } else {
      bmr -= 161;
    }

    const tdee = bmr * activityMultiplier;
    let targetCalories = tdee;
    let goalLabelText = "Maintenance Calories";

    if (goal === "lose") {
      targetCalories = tdee - 500;
      goalLabelText = "Weight Loss Target (-500 kcal)";
    } else if (goal === "gain") {
      targetCalories = tdee + 300;
      goalLabelText = "Weight Gain Target (+300 kcal)";
    }

    // Safety Floor Warning Check
    const safetyWarningBox = document.getElementById("safetyWarningBox");
    const minSafeLimit = sex === "male" ? 1500 : 1200;
    if (targetCalories < minSafeLimit) {
      safetyWarningBox.style.display = "flex";
    } else {
      safetyWarningBox.style.display = "none";
    }

    // Render Results
    document.getElementById("targetCaloriesVal").textContent =
      Math.round(targetCalories).toLocaleString();
    document.getElementById("goalModeLabel").textContent = goalLabelText;
    document.getElementById("bmrVal").textContent =
      Math.round(bmr).toLocaleString();
    document.getElementById("tdeeVal").textContent =
      Math.round(tdee).toLocaleString();

    // Macro Breakdown calculation (Protein 30%, Carbs 45%, Fat 25%)
    const proteinCalories = targetCalories * 0.3;
    const carbsCalories = targetCalories * 0.45;
    const fatCalories = targetCalories * 0.25;

    const proteinGrams = Math.round(proteinCalories / 4);
    const carbsGrams = Math.round(carbsCalories / 4);
    const fatGrams = Math.round(fatCalories / 9);

    document.getElementById("macroProteinVal").textContent = `${proteinGrams}g`;
    document.getElementById("macroCarbsVal").textContent = `${carbsGrams}g`;
    document.getElementById("macroFatVal").textContent = `${fatGrams}g`;

    return true;
  }

  /* ==========================================
       6. COPY RESULTS TO CLIPBOARD
       ========================================== */
  const copyResultsBtn = document.getElementById("copyResultsBtn");
  if (copyResultsBtn) {
    copyResultsBtn.addEventListener("click", () => {
      const target = document.getElementById("targetCaloriesVal").textContent;
      const goalLabel = document.getElementById("goalModeLabel").textContent;
      const bmr = document.getElementById("bmrVal").textContent;
      const tdee = document.getElementById("tdeeVal").textContent;

      const summaryText = `HuziHub Calorie Calculator Summary\n\nTarget Goal: ${target} kcal/day (${goalLabel})\nBMR (Basal Rate): ${bmr} kcal/day\nTDEE (Maintenance): ${tdee} kcal/day\n\nCalculated via HuziHub (https://huzihub.com)`;

      navigator.clipboard
        .writeText(summaryText)
        .then(() => {
          showToast("Results copied to clipboard!");
        })
        .catch(() => {
          showToast("Failed to copy. Please try manually.");
        });
    });
  }

  function showToast(message) {
    const toast = document.getElementById("toastNotification");
    const toastMsg = document.getElementById("toastMessage");
    toastMsg.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  function escapeHTML(str) {
    return str.replace(
      /[&<>'"]/g,
      (tag) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        })[tag] || tag,
    );
  }
});
