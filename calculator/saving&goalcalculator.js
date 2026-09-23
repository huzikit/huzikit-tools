/* ============================================================
   HUZIHUB SAVINGS & GOAL CALCULATOR — SCRIPT.JS
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // --- ALL 30 TOOLS CATALOG FOR SEARCH & NAVIGATION ---
  const allToolsAndPages = [
    // Text Tools
    {
      name: "Word Counter",
      category: "Text Tools",
      url: "/texttools/word-counter.html",
      desc: "Count words, characters & paragraphs",
    },
    {
      name: "Character Counter",
      category: "Text Tools",
      url: "/texttools/character-counter.html",
      desc: "Track character counts instantly",
    },
    {
      name: "Case Converter",
      category: "Text Tools",
      url: "/texttools/case-converter.html",
      desc: "Uppercase, lowercase, title case",
    },
    {
      name: "Remove Duplicate Lines",
      category: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
      desc: "Clean up text lists fast",
    },
    {
      name: "Lorem Ipsum Generator",
      category: "Text Tools",
      url: "https://huzihub.com/lorem-ipsum-generator/",
      desc: "Placeholder text for designs",
    },
    {
      name: "Password Generator",
      category: "Text Tools",
      url: "/texttools/passwordgenerator.html",
      desc: "Secure randomized passwords",
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      url: "/texttools/text-reverser.html",
      desc: "Reverse words or letters",
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      url: "/texttools/onlinenotepad.html",
      desc: "Quick browser scratchpad",
    },

    // Calculators
    {
      name: "Age Calculator",
      category: "Calculators",
      url: "/calculator/agecalculator.html",
      desc: "Exact age & date intervals",
    },
    {
      name: "BMI Calculator",
      category: "Calculators",
      url: "/calculator/bmi-calculator.html",
      desc: "Body mass index metrics",
    },
    {
      name: "Percentage Calculator",
      category: "Calculators",
      url: "/calculator/percentage-calculator.html",
      desc: "Calculate % increases & drops",
    },
    {
      name: "Calorie Calculator",
      category: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
      desc: "Daily energy expenditure",
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      url: "/calculator/discount-calculator.html",
      desc: "Sale prices & savings",
    },
    {
      name: "Savings & Goal Calculator",
      category: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
      desc: "Plan goals & compound interest",
    },
    {
      name: "Tip Calculator",
      category: "Calculators",
      url: "/calculators/tip-calculator.html",
      desc: "Split bills & tips easily",
    },
    {
      name: "GPA Calculator",
      category: "Calculators",
      url: "/calculator/gpa-calculator.html",
      desc: "Semester grade point average",
    },

    // Image & PDF
    {
      name: "Image Compressor",
      category: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
      desc: "Optimize image file sizes",
    },
    {
      name: "Image Resizer",
      category: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
      desc: "Resize dimensions securely",
    },
    {
      name: "PDF to Word",
      category: "Image & PDF",
      url: "/image-pdf/pdf-to-word.html",
      desc: "Document format conversion",
    },
    {
      name: "JPG to PNG",
      category: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
      desc: "Raster format conversion",
    },
    {
      name: "Color Picker / HEX",
      category: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
      desc: "Extract color codes",
    },
    {
      name: "QR Code Generator",
      category: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
      desc: "Custom scannable QR codes",
    },

    // Developer
    {
      name: "JSON Formatter",
      category: "Developer",
      url: "/developertools/JSONFORMATTER.html",
      desc: "Validate & beautify JSON",
    },
    {
      name: "Base64 Encoder/Decoder",
      category: "Developer",
      url: "/developertools/base64encoderdecoder.html",
      desc: "Encode string data safely",
    },
    {
      name: "URL Encoder/Decoder",
      category: "Developer",
      url: "/developertools/urlencoderdecoder.html",
      desc: "Percent encoding utilities",
    },
    {
      name: "Meta Tag Generator",
      category: "Developer",
      url: "/developertools/meta-tag-generator.html",
      desc: "SEO meta tags & previews",
    },
    {
      name: "Regex Tester",
      category: "Developer",
      url: "/developertools/regextester.html",
      desc: "Test regular expressions",
    },
    {
      name: "Markdown to HTML",
      category: "Developer",
      url: "/developertools/markdownhtml.html",
      desc: "Compile markdown syntax",
    },
    {
      name: "CSS Minifier",
      category: "Developer",
      url: "/developertools/cssminifier.html",
      desc: "Compress stylesheets",
    },
    {
      name: "Unix Timestamp",
      category: "Developer",
      url: "/developertools/unixtimestamp.html",
      desc: "Convert epoch time formats",
    },

    // Simple Pages
    {
      name: "Blog",
      category: "Navigation",
      url: "https://huzihub.com/blog/",
      desc: "Latest tips, updates & articles",
    },
    {
      name: "About",
      category: "Navigation",
      url: "https://huzihub.com/about/",
      desc: "Learn more about HuziHub",
    },
  ];

  // --- CURRENCY SYMBOLS MAP ---
  const currencySymbols = { USD: "$", CAD: "$", GBP: "£", AUD: "$", EUR: "€" };

  // --- INITIALIZE ALL MODULES ---
  initMobileMenu();
  initSearchModal();
  initAccordions();
  initCalculator();

  /* ============================================================
       1. MOBILE MENU SYSTEM
       ============================================================ */
  function initMobileMenu() {
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const closeBtn = document.getElementById("mobile-close-btn");
    const overlay = document.getElementById("mobile-nav-overlay");
    const panel = document.getElementById("mobile-nav-panel");

    function openMenu() {
      toggleBtn.setAttribute("aria-expanded", "true");
      overlay.classList.add("open");
      panel.classList.add("open");
      panel.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      toggleBtn.setAttribute("aria-expanded", "false");
      overlay.classList.remove("open");
      panel.classList.remove("open");
      panel.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    toggleBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    });
  }

  /* ============================================================
       2. MOBILE ACCORDIONS
       ============================================================ */
  function initAccordions() {
    // Mobile Navigation Accordions
    const accordionBtns = document.querySelectorAll(".mobile-accordion-btn");
    accordionBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        const isOpen = btn.getAttribute("aria-expanded") === "true";

        // Close all others
        accordionBtns.forEach((otherBtn) => {
          if (otherBtn !== btn) {
            otherBtn.setAttribute("aria-expanded", "false");
            otherBtn.nextElementSibling.style.maxHeight = null;
            otherBtn.querySelector(".accordion-icon").textContent = "+";
          }
        });

        btn.setAttribute("aria-expanded", !isOpen);
        if (!isOpen) {
          content.style.maxHeight = content.scrollHeight + "px";
          btn.querySelector(".accordion-icon").textContent = "-";
        } else {
          content.style.maxHeight = null;
          btn.querySelector(".accordion-icon").textContent = "+";
        }
      });
    });

    // Educational FAQs
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach((btn) => {
      btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        const isOpen = btn.getAttribute("aria-expanded") === "true";

        btn.setAttribute("aria-expanded", !isOpen);
        if (!isOpen) {
          answer.style.maxHeight = answer.scrollHeight + "px";
          btn.querySelector(".faq-icon").textContent = "-";
        } else {
          answer.style.maxHeight = null;
          btn.querySelector(".faq-icon").textContent = "+";
        }
      });
    });
  }

  /* ============================================================
       3. SEARCH MODAL SYSTEM
       ============================================================ */
  function initSearchModal() {
    const triggerBtn = document.getElementById("search-trigger-btn");
    const backdrop = document.getElementById("search-modal-backdrop");
    const closeBtn = document.getElementById("search-close-btn");
    const input = document.getElementById("global-search-input");
    const resultsContainer = document.getElementById(
      "search-results-container",
    );

    function openSearch() {
      backdrop.classList.add("open");
      backdrop.setAttribute("aria-hidden", "false");
      input.value = "";
      renderSearchResults("");
      setTimeout(() => input.focus(), 50);
      document.body.style.overflow = "hidden";
    }

    function closeSearch() {
      backdrop.classList.remove("open");
      backdrop.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    triggerBtn.addEventListener("click", openSearch);
    closeBtn.addEventListener("click", closeSearch);
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeSearch();
    });

    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearch();
      }
      if (e.key === "Escape") {
        closeSearch();
      }
    });

    input.addEventListener("input", (e) => {
      renderSearchResults(e.target.value.trim().toLowerCase());
    });

    function renderSearchResults(query) {
      const filtered = allToolsAndPages.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query),
      );

      if (filtered.length === 0) {
        resultsContainer.innerHTML = `<div class="search-hint">No tools found matching "${query}"</div>`;
        return;
      }

      resultsContainer.innerHTML = filtered
        .map(
          (item) => `
                <a href="${item.url}" class="search-result-item">
                    <span class="search-result-title">${item.name}</span>
                    <span class="search-result-cat">${item.category} — ${item.desc}</span>
                </a>
            `,
        )
        .join("");
    }
  }

  /* ============================================================
       4. SAVINGS & GOAL CALCULATOR CORE LOGIC
       ============================================================ */
  function initCalculator() {
    let currentMode = "time"; // 'time' or 'contribution'

    // Elements
    const modeBtns = document.querySelectorAll(".mode-btn");
    const wrapperContribution = document.getElementById("wrapper-contribution");
    const wrapperTimeframe = document.getElementById("wrapper-timeframe");
    const resultHeadlineSub = document.getElementById("result-headline-sub");
    const primaryResultValue = document.getElementById("primary-result-value");
    const estimatedDateBadge = document.getElementById("estimated-date-badge");

    const currencySelect = document.getElementById("currency-select");
    const savingsGoalInput = document.getElementById("savings-goal");
    const currentSavingsInput = document.getElementById("current-savings");
    const regularContributionInput = document.getElementById(
      "regular-contribution",
    );
    const targetTimeframeInput = document.getElementById("target-timeframe");
    const contributionFreqSelect = document.getElementById("contribution-freq");
    const compoundingFreqSelect = document.getElementById("compounding-freq");
    const interestRateInput = document.getElementById("interest-rate");

    const calculateBtn = document.getElementById("calculate-btn");
    const resetBtn = document.getElementById("reset-btn");
    const copyBtn = document.getElementById("copy-results-btn");
    const downloadBtn = document.getElementById("download-results-btn");
    const toggleBreakdownBtn = document.getElementById("toggle-breakdown-btn");
    const breakdownTableWrapper = document.getElementById(
      "breakdown-table-wrapper",
    );
    const breakdownTbody = document.getElementById("breakdown-tbody");

    // Presets configuration
    const presets = {
      emergency: { goal: 10000, current: 1500, contribution: 300, rate: 4.5 },
      vacation: { goal: 3500, current: 500, contribution: 200, rate: 3.0 },
      laptop: { goal: 1800, current: 300, contribution: 250, rate: 2.5 },
      car: { goal: 8000, current: 2000, contribution: 400, rate: 4.0 },
      home: { goal: 40000, current: 8000, contribution: 800, rate: 5.0 },
    };

    document.querySelectorAll(".preset-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const presetKey = chip.getAttribute("data-preset");
        const p = presets[presetKey];
        if (p) {
          savingsGoalInput.value = p.goal;
          currentSavingsInput.value = p.current;
          regularContributionInput.value = p.contribution;
          interestRateInput.value = p.rate;
          runCalculation();
          showToast(`Loaded ${chip.textContent} preset`);
        }
      });
    });

    // Mode Switching
    modeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        modeBtns.forEach((b) => {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
        currentMode = btn.getAttribute("data-mode");

        if (currentMode === "time") {
          wrapperContribution.style.display = "block";
          wrapperTimeframe.style.display = "none";
          resultHeadlineSub.textContent = "Estimated Time to Goal";
        } else {
          wrapperContribution.style.display = "none";
          wrapperTimeframe.style.display = "block";
          resultHeadlineSub.textContent = "Required Regular Contribution";
        }
        runCalculation();
      });
    });

    // Currency update
    currencySelect.addEventListener("change", () => {
      const sym = currencySymbols[currencySelect.value] || "$";
      document.getElementById("currency-symbol").textContent = sym;
      document
        .querySelectorAll(".curr-sym")
        .forEach((el) => (el.textContent = sym));
      runCalculation();
    });

    calculateBtn.addEventListener("click", runCalculation);
    resetBtn.addEventListener("click", resetCalculator);

    toggleBreakdownBtn.addEventListener("click", () => {
      const isHidden = breakdownTableWrapper.style.display === "none";
      breakdownTableWrapper.style.display = isHidden ? "block" : "none";
      toggleBreakdownBtn.textContent = isHidden
        ? "Hide Breakdown Table"
        : "View Breakdown Table";
    });

    copyBtn.addEventListener("click", copyResultsToClipboard);
    downloadBtn.addEventListener("click", downloadResultsTxt);

    // Run initial calculation on load
    runCalculation();

    function runCalculation() {
      const currency = currencySelect.value;
      const sym = currencySymbols[currency] || "$";
      const goal = parseFloat(savingsGoalInput.value) || 0;
      const current = parseFloat(currentSavingsInput.value) || 0;
      const annualRate = (parseFloat(interestRateInput.value) || 0) / 100;
      const cFreqVal = contributionFreqSelect.value;
      const compFreqVal = compoundingFreqSelect.value;

      // Compounding periods per year
      const nComp = getCompoundingPeriods(compFreqVal);
      // Contribution periods per year
      const nContrib = getContributionPeriods(cFreqVal);

      // Validation check
      if (goal <= 0) {
        primaryResultValue.textContent = "Invalid Goal";
        return;
      }

      if (current >= goal) {
        primaryResultValue.textContent = "Goal Already Reached!";
        estimatedDateBadge.textContent = "Completed";
        updateProgressUI(goal, goal, 0, 0, 0, sym);
        breakdownTbody.innerHTML =
          '<tr><td colspan="5" style="text-align:center;">Current savings already equal or exceed the goal!</td></tr>';
        return;
      }

      let periodsPerYear = nContrib; // Align calculation periods to contribution frequency

      if (current2Mode() === "time") {
        const contribution = parseFloat(regularContributionInput.value) || 0;

        // If contribution is 0 and interest is 0 -> Impossible
        if (contribution <= 0 && annualRate <= 0) {
          primaryResultValue.textContent = "Goal Unreachable";
          estimatedDateBadge.textContent = "Increase contribution or interest";
          return;
        }

        let balance = current;
        let totalContrib = 0;
        let totalInterest = 0;
        let periods = 0;
        const maxPeriods = 1200; // 100 years cap

        const ratePerPeriod = annualRate / nComp;
        const contribPerPeriod = contribution;

        let yearlyData = [];
        let yearStartBalance = current;
        let yearContribSum = 0;
        let yearInterestSum = 0;

        while (balance < goal && periods < maxPeriods) {
          // Compound interest calculation per period
          let interestEarned =
            balance * (Math.pow(1 + ratePerPeriod, nComp / periodsPerYear) - 1);
          balance += interestEarned + contribPerPeriod;
          totalContrib += contribPerPeriod;
          totalInterest += interestEarned;
          periods++;

          yearContribSum += contribPerPeriod;
          yearInterestSum += interestEarned;

          if (periods % periodsPerYear === 0 || balance >= goal) {
            let currentYearNum = Math.ceil(periods / periodsPerYear);
            yearlyData.push({
              year: currentYearNum,
              start: yearStartBalance,
              contrib: yearContribSum,
              interest: yearInterestSum,
              end: balance,
            });
            yearStartBalance = balance;
            yearContribSum = 0;
            yearInterestSum = 0;
          }
        }

        if (periods >= maxPeriods) {
          primaryResultValue.textContent = "Exceeds 100 Years";
          estimatedDateBadge.textContent = "Adjust parameters";
          return;
        }

        // Format Time Output
        const years = Math.floor(periods / periodsPerYear);
        const remPeriods = periods % periodsPerYear;
        const months = Math.round((remPeriods / periodsPerYear) * 12);

        let timeString = "";
        if (years > 0) timeString += `${years} year${years > 1 ? "s" : ""} `;
        if (months > 0 || years === 0)
          timeString += `${months} month${months !== 1 ? "s" : ""}`;
        primaryResultValue.textContent = timeString.trim();

        // Estimated Date
        const targetDate = new Date();
        targetDate.setMonth(
          targetDate.getMonth() + Math.round((periods / periodsPerYear) * 12),
        );
        estimatedDateBadge.textContent = `Estimated Date: ${targetDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}`;

        updateProgressUI(
          current,
          goal,
          totalContrib,
          totalInterest,
          balance,
          sym,
        );
        renderYearlyTable(yearlyData, sym);
      } else {
        // Mode: Contribution Required
        const timeframeYears = parseFloat(targetTimeframeInput.value) || 1;
        const totalPeriods = timeframeYears * nContrib;
        const ratePerPeriod = annualRate / nComp;

        // Solve for PMT using standard future value formula with compounding
        // FV = PV*(1+r)^n + PMT * [((1+r)^n - 1) / r]
        const effectiveRate = Math.pow(1 + ratePerPeriod, nComp / nContrib) - 1;

        let requiredPMT = 0;
        if (effectiveRate > 0) {
          const growthFactor = Math.pow(1 + effectiveRate, totalPeriods);
          const numerator = goal - current * growthFactor;
          const denominator = (growthFactor - 1) / effectiveRate;
          requiredPMT = numerator / denominator;
        } else {
          requiredPMT = (goal - current) / totalPeriods;
        }

        if (requiredPMT < 0) requiredPMT = 0;

        primaryResultValue.textContent = `${sym}${formatNumber(requiredPMT)} / ${cFreqVal.slice(0, -2)}`;
        estimatedDateBadge.textContent = `Target: ${timeframeYears} Year${timeframeYears > 1 ? "s" : ""}`;

        let totalContrib = requiredPMT * totalPeriods;
        let estimatedInterest = goal - current - totalContrib;
        if (estimatedInterest < 0) estimatedInterest = 0;

        updateProgressUI(
          current,
          goal,
          totalContrib,
          estimatedInterest,
          goal,
          sym,
        );
        breakdownTbody.innerHTML = `<tr><td colspan="5" style="text-align:center;">Breakdown generated for fixed timeframe of ${timeframeYears} years with ${sym}${formatNumber(requiredPMT)} ${cFreqVal} contributions.</td></tr>`;
      }
    }

    function current2Mode() {
      return currentMode;
    }

    function getCompoundingPeriods(freq) {
      switch (freq) {
        case "daily":
          return 365;
        case "monthly":
          return 12;
        case "quarterly":
          return 4;
        case "semiannually":
          return 2;
        case "annually":
          return 1;
        default:
          return 12;
      }
    }

    function getContributionPeriods(freq) {
      switch (freq) {
        case "weekly":
          return 52;
        case "biweekly":
          return 26;
        case "monthly":
          return 12;
        case "yearly":
          return 1;
        default:
          return 12;
      }
    }

    function updateProgressUI(
      current,
      goal,
      contributions,
      interest,
      balance,
      sym,
    ) {
      const percent = Math.min(100, Math.max(0, (current / goal) * 100));

      document.getElementById("progress-text-fraction").textContent =
        `${sym}${formatNumber(current)} / ${sym}${formatNumber(goal)}`;
      document.getElementById("progress-text-percent").textContent =
        `${percent.toFixed(1)}%`;
      document.getElementById("main-progress-bar").style.width = `${percent}%`;

      const remaining = Math.max(0, goal - current);
      document.getElementById("res-remaining").textContent =
        `${sym}${formatNumber(remaining)}`;
      document.getElementById("res-contributions").textContent =
        `${sym}${formatNumber(contributions)}`;
      document.getElementById("res-interest").textContent =
        `${sym}${formatNumber(interest)}`;
      document.getElementById("res-balance").textContent =
        `${sym}${formatNumber(balance)}`;
    }

    function renderYearlyTable(data, sym) {
      if (!data || data.length === 0) {
        breakdownTbody.innerHTML =
          '<tr><td colspan="5" style="text-align:center;">No breakdown available.</td></tr>';
        return;
      }

      breakdownTbody.innerHTML = data
        .map(
          (row) => `
                <tr>
                    <td>Year ${row.year}</td>
                    <td>${sym}${formatNumber(row.start)}</td>
                    <td>${sym}${formatNumber(row.contrib)}</td>
                    <td>${sym}${formatNumber(row.interest)}</td>
                    <td>${sym}${formatNumber(row.end)}</td>
                </tr>
            `,
        )
        .join("");
    }

    function formatNumber(num) {
      return num.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }

    function resetCalculator() {
      savingsGoalInput.value = "10000";
      currentSavingsInput.value = "1000";
      regularContributionInput.value = "250";
      targetTimeframeInput.value = "3";
      interestRateInput.value = "4.5";
      currencySelect.value = "USD";
      contributionFreqSelect.value = "monthly";
      compoundingFreqSelect.value = "monthly";
      document.getElementById("currency-symbol").textContent = "$";
      document
        .querySelectorAll(".curr-sym")
        .forEach((el) => (el.textContent = "$"));
      runCalculation();
      showToast("Calculator reset to default values");
    }

    function copyResultsToClipboard() {
      const text =
        `HuziHub Savings & Goal Calculator Results:\n` +
        `- Goal: ${document.getElementById("savings-goal").value}\n` +
        `- Current Savings: ${document.getElementById("current-savings").value}\n` +
        `- Result / Timeline: ${primaryResultValue.textContent}\n` +
        `- Projected Balance: ${document.getElementById("res-balance").textContent}\n` +
        `Calculated free on https://huzihub.com/savings-goal-calculator/`;

      navigator.clipboard
        .writeText(text)
        .then(() => {
          showToast("Results copied to clipboard!");
        })
        .catch(() => {
          showToast("Failed to copy results.");
        });
    }

    function downloadResultsTxt() {
      const content =
        `HUZIHUB SAVINGS & GOAL CALCULATOR REPORT\n` +
        `========================================\n` +
        `Savings Goal: ${document.getElementById("savings-goal").value}\n` +
        `Current Savings: ${document.getElementById("current-savings").value}\n` +
        `Regular Contribution: ${document.getElementById("regular-contribution").value}\n` +
        `Contribution Frequency: ${contributionFreqSelect.value}\n` +
        `Compounding Frequency: ${compoundingFreqSelect.value}\n` +
        `Annual Interest Rate: ${interestRateInput.value}%\n` +
        `----------------------------------------\n` +
        `Primary Result: ${primaryResultValue.textContent}\n` +
        `Total Contributions: ${document.getElementById("res-contributions").textContent}\n` +
        `Estimated Interest: ${document.getElementById("res-interest").textContent}\n` +
        `Projected Balance: ${document.getElementById("res-balance").textContent}\n` +
        `----------------------------------------\n` +
        `Generated via HuziHub (https://huzihub.com/savings-goal-calculator/)`;

      const blob = new Blob([content], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "huzihub-savings-goal-report.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("Report downloaded successfully!");
    }
  }

  /* ============================================================
       5. TOAST NOTIFICATION HELPER
       ============================================================ */
  function showToast(msg) {
    const toast = document.getElementById("toast-notification");
    document.getElementById("toast-message").textContent = msg;
    toast.classList.add("show");
    toast.setAttribute("aria-hidden", "false");

    setTimeout(() => {
      toast.classList.remove("show");
      toast.setAttribute("aria-hidden", "true");
    }, 3000);
  }
});
