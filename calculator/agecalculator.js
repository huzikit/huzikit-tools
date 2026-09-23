/**
 * HUZIHUB HUMAN AGE CALCULATOR — PRODUCTION SCRIPT
 * Fully modular, robust, and optimized Vanilla JavaScript.
 */

(function () {
  "use strict";

  // ----------------------------------------------------------
  // 1. ALL 30 HUZIHUB TOOLS SEARCH INDEX
  // ----------------------------------------------------------
  const huzihubTools = [
    {
      name: "Age Calculator",
      category: "Calculators",
      description: "Calculate your exact age in years, months, days and more.",
      url: "/calculator/agecalculator.html",
      keywords: ["age", "birthday", "date of birth", "calculator"],
    },
    {
      name: "Word Counter",
      category: "Text Tools",
      description:
        "Count words, characters, sentences, and paragraphs instantly.",
      url: "/texttools/word-counter.html",
      keywords: ["word", "counter", "count", "text", "characters"],
    },
    {
      name: "Character Counter",
      category: "Text Tools",
      description: "Count characters with and without spaces instantly.",
      url: "/texttools/character-counter.html",
      keywords: ["character", "counter", "length", "text"],
    },
    {
      name: "Case Converter",
      category: "Text Tools",
      description:
        "Convert text to uppercase, lowercase, title case, and camelCase.",
      url: "/texttools/case-converter.html",
      keywords: ["case", "uppercase", "lowercase", "converter", "text"],
    },
    {
      name: "Remove Duplicates",
      category: "Text Tools",
      description:
        "Remove duplicate lines or words from your text lists instantly.",
      url: "/texttools/remove-duplicate-lines.html",
      keywords: ["remove", "duplicates", "unique", "lines"],
    },
    {
      name: "Lorem Ipsum Generator",
      category: "Text Tools",
      description:
        "Generate placeholder filler text for your web designs and mockups.",
      url: "/texttools/loremipsumgenerator.html",
      keywords: ["lorem", "ipsum", "placeholder", "dummy text"],
    },
    {
      name: "Password Generator",
      category: "Text Tools",
      description:
        "Generate secure, cryptographically strong random passwords.",
      url: "/texttools/passwordgenerator.html",
      keywords: ["password", "secure", "generator", "random"],
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      description: "Reverse text strings, words, or letters instantly.",
      url: "/texttools/text-reverser.html",
      keywords: ["reverse", "text", "string", "backwards"],
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      description: "A fast, private browser-based notepad with auto-save.",
      url: "/texttools/onlinenotepad.html",
      keywords: ["notepad", "notes", "write", "pad"],
    },
    {
      name: "BMI Calculator",
      category: "Calculators",
      description: "Calculate your Body Mass Index and health category.",
      url: "/calculator/bmi-calculator.html",
      keywords: ["bmi", "body mass index", "health", "weight", "calculator"],
    },
    {
      name: "Percentage Calculator",
      category: "Calculators",
      description:
        "Calculate percentage increases, decreases, and proportions.",
      url: "/calculator/percentage-calculator.html",
      keywords: ["percentage", "percent", "math", "calculator"],
    },
    {
      name: "Calorie Calculator",
      category: "Calculators",
      description: "Estimate daily caloric needs based on activity and goals.",
      url: "/calculator/Calorie-Calculator.html",
      keywords: ["calorie", "diet", "tdee", "bmr", "calculator"],
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      description: "Calculate sale prices and saved amounts effortlessly.",
      url: "/calculator/discount-calculator.html",
      keywords: ["discount", "sale", "price", "savings", "calculator"],
    },
    {
      name: "Savings Calculator",
      category: "Calculators",
      description: "Plan financial goals with compound interest growth models.",
      url: "/calculator/saving&goalcalculator.html",
      keywords: ["savings", "interest", "finance", "money", "calculator"],
    },
    {
      name: "Tip Calculator",
      category: "Calculators",
      description: "Calculate restaurant tips and split bills among groups.",
      url: "/calculators/tip-calculator.html",
      keywords: ["tip", "restaurant", "bill", "split", "calculator"],
    },
    {
      name: "GPA Calculator",
      category: "Calculators",
      description: "Calculate your Grade Point Average across semesters.",
      category: "Calculators",
      url: "/calculator/gpa-calculator.html",
      keywords: ["gpa", "grades", "university", "school", "calculator"],
    },
    {
      name: "Image Compressor",
      category: "Image & PDF",
      description: "Compress JPEG, PNG, and WebP images without quality loss.",
      url: "/image&pdf/image-compressor.html",
      keywords: ["image", "compressor", "optimizer", "photo"],
    },
    {
      name: "Image Resizer",
      category: "Image & PDF",
      description: "Resize images by exact pixel dimensions or percentages.",
      url: "/image&pdf/image-resizer.html",
      keywords: ["image", "resizer", "dimensions", "scale"],
    },
    {
      name: "PDF to Word",
      category: "Image & PDF",
      description: "Convert PDF documents into editable Word files securely.",
      url: "/image-pdf/pdf-to-word.html",
      keywords: ["pdf", "word", "convert", "document"],
    },
    {
      name: "JPG to PNG",
      category: "Image & PDF",
      description: "Convert image formats between JPG and transparent PNG.",
      url: "/image&pdf/jpg-to-png.html",
      keywords: ["jpg", "png", "convert", "image format"],
    },
    {
      name: "Color Picker",
      category: "Image & PDF",
      description: "Pick colors and convert between HEX, RGB, and HSL codes.",
      url: "/image&pdf/colorpicker.html",
      keywords: ["color", "picker", "hex", "rgb", "design"],
    },
    {
      name: "QR Code Generator",
      category: "Image & PDF",
      description: "Create high-resolution custom QR codes for URLs and text.",
      url: "/image&pdf/QRGenrator.html",
      keywords: ["qr code", "generator", "barcode", "link"],
    },
    {
      name: "JSON Formatter",
      category: "Developer",
      description: "Format, validate, and minify JSON data structures.",
      url: "/developertools/JSONFORMATTER.html",
      keywords: ["json", "formatter", "validator", "developer"],
    },
    {
      name: "Base64 Utility",
      category: "Developer",
      description: "Encode and decode Base64 strings securely in your browser.",
      url: "/developertools/base64encoderdecoder.html",
      keywords: ["base64", "encode", "decode", "developer"],
    },
    {
      name: "URL Encoder",
      category: "Developer",
      description: "URL encode and decode query parameters and strings.",
      url: "/developertools/urlencoderdecoder.html",
      keywords: ["url", "encoder", "decoder", "uri"],
    },
    {
      name: "Meta Tag Generator",
      category: "Developer",
      description: "Generate SEO-friendly meta tags and Open Graph cards.",
      url: "/developertools/meta-tag-generator.html",
      keywords: ["meta tag", "seo", "generator", "open graph"],
    },
    {
      name: "Regex Tester",
      category: "Developer",
      description:
        "Test and debug Regular Expressions with real-time matching.",
      url: "/developertools/regextester.html",
      keywords: ["regex", "regular expression", "tester", "debug"],
    },
    {
      name: "Markdown to HTML",
      category: "Developer",
      description: "Convert Markdown syntax into clean HTML code instantly.",
      url: "/developertools/markdownhtml.html",
      keywords: ["markdown", "html", "converter", "developer"],
    },
    {
      name: "CSS Minifier",
      category: "Developer",
      description: "Minify CSS stylesheets to improve website loading speeds.",
      url: "/developertools/cssminifier.html",
      keywords: ["css", "minifier", "compress", "stylesheet"],
    },
    {
      name: "Unix Timestamp",
      category: "Developer",
      description: "Convert between Unix epoch timestamps and readable dates.",
      url: "/developertools/unixtimestamp.html",
      keywords: ["unix", "timestamp", "epoch", "time"],
    },
  ];

  // ----------------------------------------------------------
  // 2. SEARCH SYSTEM LOGIC
  // ----------------------------------------------------------
  let selectedSearchIndex = -1;

  function initializeSearch() {
    const searchTrigger = document.getElementById("searchTrigger");
    const searchModalOverlay = document.getElementById("searchModalOverlay");
    const searchCloseBtn = document.getElementById("searchCloseBtn");
    const searchInput = document.getElementById("searchInput");
    const resultsContainer = document.getElementById("searchResultsContainer");

    if (!searchTrigger || !searchModalOverlay) return;

    function openSearchModal() {
      searchModalOverlay.classList.add("active");
      searchModalOverlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      setTimeout(() => searchInput.focus(), 50);
      renderSearchResults("");
    }

    function closeSearchModal() {
      searchModalOverlay.classList.remove("active");
      searchModalOverlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      searchInput.value = "";
    }

    searchTrigger.addEventListener("click", openSearchModal);
    searchCloseBtn.addEventListener("click", closeSearchModal);
    searchModalOverlay.addEventListener("click", (e) => {
      if (e.target === searchModalOverlay) closeSearchModal();
    });

    // Keyboard shortcut Ctrl+K / Cmd+K
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (searchModalOverlay.classList.contains("active")) {
          closeSearchModal();
        } else {
          openSearchModal();
        }
      }
      if (
        e.key === "Escape" &&
        searchModalOverlay.classList.contains("active")
      ) {
        closeSearchModal();
      }
    });

    searchInput.addEventListener("input", (e) => {
      renderSearchResults(e.target.value.trim());
    });

    searchInput.addEventListener("keydown", (e) => {
      const items = resultsContainer.querySelectorAll(".search-result-item");
      if (!items.length) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedSearchIndex = (selectedSearchIndex + 1) % items.length;
        updateSearchSelection(items);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedSearchIndex =
          (selectedSearchIndex - 1 + items.length) % items.length;
        updateSearchSelection(items);
      } else if (
        e.key === "Enter" &&
        selectedSearchIndex >= 0 &&
        items[selectedSearchIndex]
      ) {
        e.preventDefault();
        items[selectedSearchIndex].click();
      }
    });
  }

  function renderSearchResults(query) {
    const container = document.getElementById("searchResultsContainer");
    selectedSearchIndex = -1;

    if (!query) {
      container.innerHTML = `
        <div class="search-initial-state">
          <p>Start typing to search instant tools & utilities...</p>
        </div>
      `;
      return;
    }

    const q = query.toLowerCase();
    const filtered = huzihubTools.filter((tool) => {
      return (
        tool.name.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.keywords.some((kw) => kw.toLowerCase().includes(q))
      );
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="search-empty-state">
          <p><strong>No tools found</strong></p>
          <p style="font-size: 0.85rem; color: var(--ink-faint); margin-top: 0.3rem;">Try searching for "age", "json", "word counter", or "bmi".</p>
        </div>
      `;
      return;
    }

    let html = '<div class="search-results-list">';
    filtered.forEach((tool, index) => {
      html += `
        <a href="${tool.url}" class="search-result-item" data-index="${index}">
          <div class="search-result-title">${tool.name} <span style="font-size: 0.75rem; color: var(--primary); font-weight: 500; float: right;">${tool.category}</span></div>
          <div class="search-result-desc">${tool.description}</div>
        </a>
      `;
    });
    html += "</div>";
    container.innerHTML = html;
  }

  function updateSearchSelection(items) {
    items.forEach((item, idx) => {
      if (idx === selectedSearchIndex) {
        item.classList.add("selected");
        item.scrollIntoView({ block: "nearest" });
      } else {
        item.classList.remove("selected");
      }
    });
  }

  // ----------------------------------------------------------
  // 3. MOBILE HAMBURGER & ACCORDIONS
  // ----------------------------------------------------------
  function initializeMobileMenu() {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const mobileOverlay = document.getElementById("mobileOverlay");
    const mobileCloseBtn = document.getElementById("mobileCloseBtn");

    if (!hamburgerBtn || !mobileDrawer) return;

    function openMobileMenu() {
      mobileDrawer.classList.add("active");
      mobileOverlay.classList.add("active");
      hamburgerBtn.setAttribute("aria-expanded", "true");
      mobileDrawer.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeMobileMenu() {
      mobileDrawer.classList.remove("active");
      mobileOverlay.classList.remove("active");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      mobileDrawer.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    hamburgerBtn.addEventListener("click", openMobileMenu);
    mobileCloseBtn.addEventListener("click", closeMobileMenu);
    mobileOverlay.addEventListener("click", closeMobileMenu);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileDrawer.classList.contains("active")) {
        closeMobileMenu();
      }
    });
  }

  function initializeMobileAccordions() {
    const toggles = document.querySelectorAll(".mobile-accordion-toggle");
    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const submenu = toggle.nextElementSibling;
        const isActive = toggle.classList.contains("active");

        // Toggle current
        toggle.classList.toggle("active", !isActive);
        toggle.setAttribute("aria-expanded", !isActive);
        if (submenu) {
          submenu.classList.toggle("show", !isActive);
        }
      });
    });
  }

  // ----------------------------------------------------------
  // 4. FAQ ACCORDION LOGIC
  // ----------------------------------------------------------
  function initializeFAQ() {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
      const questionBtn = item.querySelector(".faq-question");
      if (!questionBtn) return;

      questionBtn.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        // Close all other items for clean accordion UX
        faqItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove("active");
            const btn = other.querySelector(".faq-question");
            if (btn) btn.setAttribute("aria-expanded", "false");
          }
        });

        item.classList.toggle("active", !isActive);
        questionBtn.setAttribute("aria-expanded", !isActive);
      });
    });
  }

  // ----------------------------------------------------------
  // 5. AGE CALCULATOR LOGIC
  // ----------------------------------------------------------
  function initializeCalculator() {
    const form = document.getElementById("ageCalculatorForm");
    const dobInput = document.getElementById("dobInput");
    const asOfInput = document.getElementById("asOfInput");
    const resetBtn = document.getElementById("resetBtn");
    const resultsDashboard = document.getElementById("resultsDashboard");
    const dobError = document.getElementById("dobError");
    const asOfError = document.getElementById("asOfError");

    if (!form || !dobInput || !asOfInput) return;

    // Set default As Of date to today
    const todayStr = formatDateISO(new Date());
    asOfInput.value = todayStr;

    // Set default DOB for instant preview (e.g., 26 years ago)
    const defaultDOB = new Date();
    defaultDOB.setFullYear(defaultDOB.getFullYear() - 26);
    defaultDOB.setMonth(defaultDOB.getMonth() - 2);
    defaultDOB.setDate(defaultDOB.getDate() - 5);
    dobInput.value = formatDateISO(defaultDOB);

    // Auto calculate initial preview on load
    performCalculation(false);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      performCalculation(true);
    });

    resetBtn.addEventListener("click", () => {
      dobInput.value = "";
      asOfInput.value = formatDateISO(new Date());
      dobError.textContent = "";
      asOfError.textContent = "";
      resultsDashboard.style.display = "none";
    });
  }

  function formatDateISO(dateObj) {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function performCalculation(showErrors) {
    const dobInput = document.getElementById("dobInput");
    const asOfInput = document.getElementById("asOfInput");
    const resultsDashboard = document.getElementById("resultsDashboard");
    const dobError = document.getElementById("dobError");
    const asOfError = document.getElementById("asOfError");

    dobError.textContent = "";
    asOfError.textContent = "";

    const dobVal = dobInput.value;
    const asOfVal = asOfInput.value;

    if (!dobVal) {
      if (showErrors)
        dobError.textContent = "Please enter a valid date of birth.";
      return;
    }
    if (!asOfVal) {
      if (showErrors) asOfError.textContent = "Please enter a target date.";
      return;
    }

    const birthDate = new Date(dobVal + "T00:00:00");
    const targetDate = new Date(asOfVal + "T00:00:00");

    if (isNaN(birthDate.getTime())) {
      if (showErrors)
        dobError.textContent = "Please enter a valid date of birth.";
      return;
    }
    if (isNaN(targetDate.getTime())) {
      if (showErrors)
        asOfError.textContent = "Please enter a valid target date.";
      return;
    }

    const now = new Date();
    if (birthDate > now) {
      dobError.textContent = "Date of birth cannot be in the future.";
      resultsDashboard.style.display = "none";
      return;
    }

    if (targetDate < birthDate) {
      asOfError.textContent =
        "As-of date cannot be earlier than date of birth.";
      resultsDashboard.style.display = "none";
      return;
    }

    // --- ACCURATE CALENDAR AGE CALCULATION ---
    let years = targetDate.getFullYear() - birthDate.getFullYear();
    let months = targetDate.getMonth() - birthDate.getMonth();
    let days = targetDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      // Get number of days in the previous month of the target date
      const prevMonth = new Date(
        targetDate.getFullYear(),
        targetDate.getMonth(),
        0,
      );
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // --- EXTENDED METRICS ---
    const diffTime = Math.abs(targetDate - birthDate);
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const totalWeeks = (totalDays / 7).toFixed(1);
    const totalMonths = years * 12 + months + (days / 30.436875).toFixed(1);
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;
    const totalSeconds = totalMinutes * 60;

    // --- DAY OF BIRTH ---
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfBirthStr = daysOfWeek[birthDate.getDay()];

    // --- NEXT BIRTHDAY ---
    let nextBday = new Date(
      targetDate.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate(),
    );
    if (nextBday < targetDate) {
      nextBday.setFullYear(targetDate.getFullYear() + 1);
    }
    const bdayDiffTime = nextBday - targetDate;
    const daysToBday = Math.ceil(bdayDiffTime / (1000 * 60 * 60 * 24));
    const nextBdayFormatted = nextBday.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    // --- MILESTONES ---
    // Major day milestones: 10000, 15000, 20000, 25000, 30000 days
    const milestones = [10000, 15000, 20000, 25000, 30000, 35000];
    let nextMilestoneDays =
      milestones.find((m) => m > totalDays) ||
      Math.ceil(totalDays / 5000) * 5000;
    const daysToMilestone = nextMilestoneDays - totalDays;
    const milestoneDate = new Date(birthDate.getTime());
    milestoneDate.setDate(milestoneDate.getDate() + nextMilestoneDays);
    const milestoneDateStr = milestoneDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    // --- UPDATE DOM ---
    document.getElementById("resYears").textContent = years;
    document.getElementById("resMonths").textContent = months;
    document.getElementById("resDays").textContent = days;

    document.getElementById("statMonths").textContent =
      Number(totalMonths).toLocaleString();
    document.getElementById("statWeeks").textContent =
      Number(totalWeeks).toLocaleString();
    document.getElementById("statDays").textContent =
      totalDays.toLocaleString();
    document.getElementById("statHours").textContent =
      totalHours.toLocaleString();
    document.getElementById("statMinutes").textContent =
      totalMinutes.toLocaleString();
    document.getElementById("statSeconds").textContent =
      totalSeconds.toLocaleString();

    document.getElementById("insightNextBday").textContent =
      `${nextBdayFormatted} (in ${daysToBday} days)`;
    document.getElementById("insightDayOfBirth").textContent =
      `You were born on a ${dayOfBirthStr} (${birthDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })})`;
    document.getElementById("insightMilestone").textContent =
      `${nextMilestoneDays.toLocaleString()} Days old on ${milestoneDateStr} (${daysToMilestone} days left)`;

    // Update hero visual preview elements if present
    const heroY = document.getElementById("heroYearsPreview");
    const heroM = document.getElementById("heroMonthsPreview");
    const heroD = document.getElementById("heroDaysPreview");
    if (heroY) heroY.textContent = years;
    if (heroM) heroM.textContent = String(months).padStart(2, "0");
    if (heroD) heroD.textContent = String(days).padStart(2, "0");

    resultsDashboard.style.display = "block";

    // Bind copy and share actions
    setupResultActions({
      years,
      months,
      days,
      totalMonths,
      totalWeeks,
      totalDays,
      nextBdayFormatted,
      daysToBday,
    });
  }

  function setupResultActions(data) {
    const copyBtn = document.getElementById("copyResultsBtn");
    const shareBtn = document.getElementById("shareResultsBtn");
    const toast = document.getElementById("toastNotification");

    if (copyBtn) {
      // Remove old listener by cloning
      const newCopyBtn = copyBtn.cloneNode(true);
      copyBtn.parentNode.replaceChild(newCopyBtn, copyBtn);

      newCopyBtn.addEventListener("click", () => {
        const textToCopy = `HuziHub Human Age Calculator Results:\n\nExact Age: ${data.years} Years, ${data.months} Months, ${data.days} Days\nTotal Months: ${data.totalMonths}\nTotal Weeks: ${data.totalWeeks}\nTotal Days: ${data.totalDays.toLocaleString()}\nNext Birthday: ${data.nextBdayFormatted} (in ${data.daysToBday} days)\n\nCalculated on https://huzihub.com/age-calculator/`;

        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            toast.classList.add("show");
            setTimeout(() => toast.classList.remove("show"), 3000);
          })
          .catch((err) => console.error("Copy failed", err));
      });
    }

    if (shareBtn) {
      const newShareBtn = shareBtn.cloneNode(true);
      shareBtn.parentNode.replaceChild(newShareBtn, shareBtn);

      newShareBtn.addEventListener("click", () => {
        if (navigator.share) {
          navigator
            .share({
              title: "HuziHub Human Age Calculator",
              text: `My exact age is ${data.years} years, ${data.months} months, and ${data.days} days!`,
              url: "https://huzihub.com/age-calculator/",
            })
            .catch((err) => console.log("Share canceled", err));
        } else {
          // Fallback to copy
          const textToShare = `My exact age is ${data.years} years, ${data.months} months, and ${data.days} days! Check it out at https://huzihub.com/age-calculator/`;
          navigator.clipboard.writeText(textToShare).then(() => {
            toast.textContent = "Calculation link copied to clipboard!";
            toast.classList.add("show");
            setTimeout(() => {
              toast.classList.remove("show");
              toast.textContent = "Results copied successfully!";
            }, 3000);
          });
        }
      });
    }
  }

  // ----------------------------------------------------------
  // 6. INITIALIZATION ON DOM READY
  // ----------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    initializeSearch();
    initializeMobileMenu();
    initializeMobileAccordions();
    initializeFAQ();
    initializeCalculator();
  });
})();
