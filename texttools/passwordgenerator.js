/**
 * HuziHub Password Generator & Tool Suite JavaScript
 * Production-ready vanilla JS with secure cryptographic PRNG and zero overflow logic.
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
       1. Master Tool Index for Search Modal (30 Tools)
       ========================================================================== */
  const allToolsData = [
    {
      name: "Word Counter",
      category: "Text Tools",
      url: "/texttools/word-counter.html",
    },
    {
      name: "Character Counter",
      category: "Text Tools",
      url: "/texttools/character-counter.html",
    },
    {
      name: "Case Converter",
      category: "Text Tools",
      url: "/texttools/case-converter.html",
    },
    {
      name: "Remove Duplicate Lines",
      category: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
    },
    {
      name: "Lorem Ipsum Generator",
      category: "Text Tools",
      url: "/texttools/loremipsumgenerator.html",
    },
    {
      name: "Password Generator",
      category: "Text Tools",
      url: "/texttools/passwordgenerator.html",
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      url: "/texttools/text-reverser.html",
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      url: "/texttools/onlinenotepad.html",
    },

    {
      name: "Age Calculator",
      category: "Calculators",
      url: "/calculator/agecalculator.html",
    },
    {
      name: "BMI Calculator",
      category: "Calculators",
      url: "/calculator/bmi-calculator.html",
    },
    {
      name: "Percentage Calculator",
      category: "Calculators",
      url: "/calculator/percentage-calculator.html",
    },
    {
      name: "Calorie Calculator",
      category: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      url: "/calculator/discount-calculator.html",
    },
    {
      name: "Savings&Goal Calculator",
      category: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
    },
    {
      name: "Tip Calculator",
      category: "Calculators",
      url: "/calculators/tip-calculator.html",
    },
    {
      name: "GPA Calculator",
      category: "Calculators",
      url: "/calculator/gpa-calculator.html",
    },

    {
      name: "Image Compressor",
      category: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
    },
    {
      name: "Image Resizer",
      category: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
    },
    {
      name: "PDF to Word",
      category: "Image & PDF",
      url: "/image&pdf/pdftowordconverter.html",
    },
    {
      name: "JPG to PNG",
      category: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
    },
    {
      name: "Color Picker / HEX",
      category: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
    },
    {
      name: "QR Code Generator",
      category: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
    },

    {
      name: "JSON Formatter",
      category: "Developer",
      url: "/developertools/JSONFORMATTER.html",
    },
    {
      name: "Base64 Encoder/Decoder",
      category: "Developer",
      url: "/developertools/base64encoderdecoder.html",
    },
    {
      name: "URL Encoder/Decoder",
      category: "Developer",
      url: "https://huzihub.com/url-encoder/",
    },
    {
      name: "Meta Tag Generator",
      category: "Developer",
      url: "/developertools/meta-tag-generator.html",
    },
    {
      name: "Regex Tester",
      category: "Developer",
      url: "/developertools/regextester.html",
    },
    {
      name: "Markdown to HTML",
      category: "Developer",
      url: "/developertools/markdownhtml.html",
    },
    {
      name: "CSS Minifier",
      category: "Developer",
      uurl: "/developertools/cssminifier.html",
    },
    {
      name: "Unix Timestamp",
      category: "Developer",
      url: "/developertools/unixtimestamp.html",
    },
  ];

  /* ==========================================================================
       2. Mobile Navigation Drawer & Accordion Logic
       ================================================================---------- */
  const hamburgerToggle = document.getElementById("hamburger-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const mobileOverlay = document.getElementById("mobile-overlay");
  const mobileClose = document.getElementById("mobile-close");

  function openMobileMenu() {
    mobileDrawer.classList.add("active");
    mobileOverlay.classList.add("active");
    hamburgerToggle.setAttribute("aria-expanded", "true");
    mobileDrawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove("active");
    mobileOverlay.classList.remove("active");
    hamburgerToggle.setAttribute("aria-expanded", "false");
    mobileDrawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (hamburgerToggle)
    hamburgerToggle.addEventListener("click", openMobileMenu);
  if (mobileClose) mobileClose.addEventListener("click", closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeMobileMenu);

  // Mobile Accordions
  const mobileAccordions = document.querySelectorAll(
    ".mobile-accordion-header",
  );
  mobileAccordions.forEach((acc) => {
    acc.addEventListener("click", () => {
      const parent = acc.parentElement;
      parent.classList.toggle("active");
    });
  });

  /* ==========================================================================
       3. Fully Functional Search Modal Logic & Ctrl+K Shortcut
       ================================================================---------- */
  const searchModal = document.getElementById("search-modal");
  const searchTrigger = document.getElementById("search-trigger");
  const searchModalClose = document.getElementById("search-modal-close");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  function openSearchModal() {
    searchModal.classList.add("active");
    searchModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    setTimeout(() => searchInput.focus(), 100);
  }

  function closeSearchModal() {
    searchModal.classList.remove("active");
    searchModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    searchInput.value = "";
    searchResults.innerHTML =
      '<div class="search-placeholder-text">Start typing to search tools instantly...</div>';
  }

  if (searchTrigger) searchTrigger.addEventListener("click", openSearchModal);
  if (searchModalClose)
    searchModalClose.addEventListener("click", closeSearchModal);
  if (searchModal) {
    searchModal.addEventListener("click", (e) => {
      if (e.target === searchModal) closeSearchModal();
    });
  }

  // Keyboard shortcut Ctrl+K or Cmd+K
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (searchModal.classList.contains("active")) {
        closeSearchModal();
      } else {
        openSearchModal();
      }
    }
    if (e.key === "Escape") {
      if (searchModal.classList.contains("active")) closeSearchModal();
      if (mobileDrawer.classList.contains("active")) closeMobileMenu();
    }
  });

  // Live filtering in search modal
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (!query) {
        searchResults.innerHTML =
          '<div class="search-placeholder-text">Start typing to search tools instantly...</div>';
        return;
      }

      const filtered = allToolsData.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query) ||
          tool.category.toLowerCase().includes(query),
      );

      if (filtered.length === 0) {
        searchResults.innerHTML = `<div class="search-placeholder-text">No tools found matching "${query}"</div>`;
        return;
      }

      searchResults.innerHTML = filtered
        .map(
          (tool) => `
                <a href="${tool.url}" class="search-result-item">
                    <span class="search-result-title">${tool.name}</span>
                    <span class="search-result-category">${tool.category}</span>
                </a>
            `,
        )
        .join("");
    });
  }

  /* ==========================================================================
       4. 3D Hero Mouse Parallax Effect
       ================================================================---------- */
  const heroCard = document.getElementById("hero-3d-card");
  if (heroCard) {
    const glassCard = heroCard.querySelector(".floating-card-glass");
    heroCard.addEventListener("mousemove", (e) => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      glassCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    heroCard.addEventListener("mouseleave", () => {
      glassCard.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  }

  /* ==========================================================================
       5. Cryptographic Password Generator Engine & Strength Checker
       ================================================================---------- */
  const CHAR_SETS = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
  };

  const SIMILAR_CHARS = /[il1Lo0O]/g;
  const AMBIGUOUS_CHARS = /[{}[\]()/\'"`~,;:.<>]/g;

  const passwordOutput = document.getElementById("password-output");
  const refreshBtn = document.getElementById("refresh-btn");
  const copyBtn = document.getElementById("copy-btn");
  const lengthSlider = document.getElementById("length-slider");
  const lengthValDisplay = document.getElementById("length-val-display");

  const cbUppercase = document.getElementById("include-uppercase");
  const cbLowercase = document.getElementById("include-lowercase");
  const cbNumbers = document.getElementById("include-numbers");
  const cbSymbols = document.getElementById("include-symbols");
  const cbExcludeSimilar = document.getElementById("exclude-similar");
  const cbExcludeAmbiguous = document.getElementById("exclude-ambiguous");

  const strengthTextLabel = document.getElementById("strength-text-label");
  const sbBars = [
    document.getElementById("sb-1"),
    document.getElementById("sb-2"),
    document.getElementById("sb-3"),
    document.getElementById("sb-4"),
  ];

  // Cryptographic secure random generator
  function secureRandomInt(max) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % max;
  }

  function generatePassword() {
    let chars = "";
    if (cbUppercase.checked) chars += CHAR_SETS.uppercase;
    if (cbLowercase.checked) chars += CHAR_SETS.lowercase;
    if (cbNumbers.checked) chars += CHAR_SETS.numbers;
    if (cbSymbols.checked) chars += CHAR_SETS.symbols;

    if (!chars) {
      // Fallback if all unchecked
      chars = CHAR_SETS.lowercase + CHAR_SETS.numbers;
      cbLowercase.checked = true;
      cbNumbers.checked = true;
    }

    if (cbExcludeSimilar.checked) {
      chars = chars.replace(SIMILAR_CHARS, "");
    }
    if (cbExcludeAmbiguous.checked) {
      chars = chars.replace(AMBIGUOUS_CHARS, "");
    }

    const length = parseInt(lengthSlider.value, 10);
    let password = "";
    const charsLength = chars.length;

    if (charsLength === 0) {
      passwordOutput.value = "Please select at least one character set!";
      return;
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = secureRandomInt(charsLength);
      password += chars[randomIndex];
    }

    passwordOutput.value = password;
    analyzePasswordStrength(password);
  }

  // Real-time Strength Checker Engine
  function analyzePasswordStrength(pwd) {
    const length = pwd.length;
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSymbol = /[^A-Za-z0-9]/.test(pwd);

    // Update Audit Checklist
    updateAuditItem("audit-length", length >= 12);
    updateAuditItem("audit-upper", hasUpper);
    updateAuditItem("audit-lower", hasLower);
    updateAuditItem("audit-number", hasNumber);
    updateAuditItem("audit-symbol", hasSymbol);

    // Calculate Pool Size for Entropy
    let poolSize = 0;
    if (/[A-Z]/.test(pwd)) poolSize += 26;
    if (/[a-z]/.test(pwd)) poolSize += 26;
    if (/[0-9]/.test(pwd)) poolSize += 10;
    if (/[^A-Za-z0-9]/.test(pwd)) poolSize += 32;

    const entropy = poolSize > 0 ? Math.round(length * Math.log2(poolSize)) : 0;

    // Score calculation (0 to 4)
    let score = 0;
    if (length >= 8) score++;
    if (length >= 12) score++;
    if (length >= 16) score++;
    if (hasUpper && hasLower && (hasNumber || hasSymbol)) score++;
    if (hasUpper && hasLower && hasNumber && hasSymbol && length >= 14)
      score = 4;

    if (length === 0) score = 0;

    updateStrengthUI(
      score,
      entropy,
      length,
      hasUpper,
      hasLower,
      hasNumber,
      hasSymbol,
    );
  }

  function updateAuditItem(id, isValid) {
    const el = document.getElementById(id);
    if (!el) return;
    if (isValid) {
      el.classList.add("valid");
      el.querySelector("svg").innerHTML =
        '<polyline points="20 6 9 17 4 12"></polyline>';
    } else {
      el.classList.remove("valid");
      el.querySelector("svg").innerHTML =
        '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
    }
  }

  function updateStrengthUI(
    score,
    entropy,
    length,
    upper,
    lower,
    number,
    symbol,
  ) {
    // Color bars
    const colors = ["#EF4444", "#F59E0B", "#3B82F6", "#10B981"];
    const labels = ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"];
    const classNames = [
      "strength-label-very-weak",
      "strength-label-weak",
      "strength-label-medium",
      "strength-label-strong",
      "strength-label-very-strong",
    ];

    strengthTextLabel.textContent = labels[score];
    strengthTextLabel.className = classNames[score];

    sbBars.forEach((bar, idx) => {
      if (idx < score) {
        bar.style.background = colors[Math.min(score - 1, 3)];
      } else {
        bar.style.background = "var(--line)";
      }
    });

    // Metrics update
    document.getElementById("metric-entropy").textContent = `${entropy} bits`;

    // Crack time estimation
    let crackTime = "Instant";
    if (entropy > 120) crackTime = "Centuries";
    else if (entropy > 90) crackTime = "Millennia";
    else if (entropy > 70) crackTime = "Centuries";
    else if (entropy > 50) crackTime = "Years";
    else if (entropy > 35) cliffTime = "Days";
    else if (entropy > 20) crackTime = "Minutes";
    document.getElementById("metric-cracktime").textContent = crackTime;

    let varietyCount = [upper, lower, number, symbol].filter(Boolean).length;
    document.getElementById("metric-variety").textContent =
      `${varietyCount} / 4 Types`;
  }

  // Event listeners for generator controls
  if (lengthSlider) {
    lengthSlider.addEventListener("input", () => {
      lengthValDisplay.textContent = lengthSlider.value;
      generatePassword();
    });
  }

  [
    cbUppercase,
    cbLowercase,
    cbNumbers,
    cbSymbols,
    cbExcludeSimilar,
    cbExcludeAmbiguous,
  ].forEach((cb) => {
    if (cb) cb.addEventListener("change", generatePassword);
  });

  if (refreshBtn) {
    refreshBtn.addEventListener("click", generatePassword);
  }

  // Initial password generation on load
  generatePassword();

  /* ==========================================================================
       6. Manual Password Testing Input
       ========================================================================== */
  const manualTestInput = document.getElementById("manual-test-input");
  const toggleManualVisibility = document.getElementById(
    "toggle-manual-visibility",
  );

  if (manualTestInput) {
    manualTestInput.addEventListener("input", (e) => {
      analyzePasswordStrength(e.target.value);
    });
  }

  if (toggleManualVisibility) {
    toggleManualVisibility.addEventListener("click", () => {
      const type =
        manualTestInput.getAttribute("type") === "password"
          ? "text"
          : "password";
      manualTestInput.setAttribute("type", type);
    });
  }

  /* ==========================================================================
       7. Copy to Clipboard & Toast Notification
       ========================================================================== */
  const toastNotification = document.getElementById("toast-notification");
  const toastMsg = document.getElementById("toast-msg");

  function showToast(message) {
    toastMsg.textContent = message;
    toastNotification.classList.add("active");
    setTimeout(() => {
      toastNotification.classList.remove("active");
    }, 2500);
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const pwd = passwordOutput.value;
      if (!pwd || pwd.includes("Please select")) return;
      navigator.clipboard
        .writeText(pwd)
        .then(() => {
          showToast("Password copied securely!");
        })
        .catch(() => {
          // Fallback
          passwordOutput.select();
          document.execCommand("copy");
          showToast("Password copied securely!");
        });
    });
  }

  /* ==========================================================================
       8. FAQ Accordion Logic
       ========================================================================== */
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    questionBtn.addEventListener("click", () => {
      const currentlyActive = document.querySelector(".faq-item.active");
      if (currentlyActive && currentlyActive !== item) {
        currentlyActive.classList.remove("active");
      }
      item.classList.toggle("active");
    });
  });
});
