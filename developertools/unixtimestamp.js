/**
 * HUZIKIT — UNIX TIMESTAMP MASTER CONTROLLER
 * Brand: Huzikit.com
 * Zero external runtime dependencies. Native browser APIs.
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* ==========================================================================
     1. GLOBAL DATA: 30 HUZIKIT TOOLS (LOCKED ROUTES)
     ========================================================================== */
  const HUZIKIT_TOOLS = [
    // Text Tools
    {
      name: "Word Counter",
      category: "Text Tools",
      url: "/texttools/word-counter.html",
      keywords: "words characters letters density",
    },
    {
      name: "Character Counter",
      category: "Text Tools",
      url: "/texttools/character-counter.html",
      keywords: "length string count utf8",
    },
    {
      name: "Case Converter",
      category: "Text Tools",
      url: "/texttools/case-converter.html",
      keywords: "uppercase lowercase titlecase camelcase",
    },
    {
      name: "Remove Duplicate Lines",
      category: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
      keywords: "dedupe clean unique text",
    },
    {
      name: "Lorem Ipsum Generator",
      category: "Text Tools",
      url: "/texttools/loremipsumgenerator.html",
      keywords: "dummy placeholder text",
    },
    {
      name: "Password Generator",
      category: "Text Tools",
      url: "/texttools/passwordgenerator.html",
      keywords: "random strong secure key",
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      url: "/texttools/text-reverser.html",
      keywords: "reverse backward flip",
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      url: "/texttools/onlinenotepad.html",
      keywords: "notes draft write scratchpad",
    },

    // Calculators
    {
      name: "Age Calculator",
      category: "Calculators",
      url: "/calculator/agecalculator.html",
      keywords: "birth date years days months",
    },
    {
      name: "BMI Calculator",
      category: "Calculators",
      url: "/calculator/bmi-calculator.html",
      keywords: "body mass index health weight",
    },
    {
      name: "Percentage Calculator",
      category: "Calculators",
      url: "/calculator/percentage-calculator.html",
      keywords: "percent fraction math ratio",
    },
    {
      name: "Calorie Calculator",
      category: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
      keywords: "bmr tdee nutrition energy diet",
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      url: "/calculator/discount-calculator.html",
      keywords: "sale price savings percent off",
    },
    {
      name: "Savings & Goal Calculator",
      category: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
      keywords: "finance interest target money",
    },
    {
      name: "Tip Calculator",
      category: "Calculators",
      url: "/calculator/tip-calculator.html",
      keywords: "gratuity bill split restaurant",
    },
    {
      name: "GPA Calculator",
      category: "Calculators",
      url: "/calculator/gpa-calculator.html",
      keywords: "grades college semester credit",
    },

    // Image & PDF
    {
      name: "Image Compressor",
      category: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
      keywords: "optimize size shrink webp",
    },
    {
      name: "Image Resizer",
      category: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
      keywords: "scale dimensions pixels crop",
    },
    {
      name: "PDF to Word",
      category: "Image & PDF",
      url: "/image&pdf/pdftowordconverter.html",
      keywords: "convert docx document pdf",
    },
    {
      name: "JPG to PNG",
      category: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
      keywords: "convert image format transparent",
    },
    {
      name: "Color Picker / HEX",
      category: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
      keywords: "palette rgb hsl hex eyedropper",
    },
    {
      name: "QR Code Generator",
      category: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
      keywords: "barcode 2d scan url link",
    },

    // Developer Tools
    {
      name: "JSON Formatter",
      category: "Developer",
      url: "/developertools/JSONFORMATTER.html",
      keywords: "prettify parse validate minify",
    },
    {
      name: "Base64 Encoder/Decoder",
      category: "Developer",
      url: "/developertools/base64encoderdecoder.html",
      keywords: "binary ascii data uri",
    },
    {
      name: "URL Encoder/Decoder",
      category: "Developer",
      url: "/developertools/urlencoderdecoder.html",
      keywords: "percent uri component sanitize",
    },
    {
      name: "Meta Tag Generator",
      category: "Developer",
      url: "/developertools/meta-tag-generator.html",
      keywords: "seo open graph twitter schema",
    },
    {
      name: "Regex Tester",
      category: "Developer",
      url: "/developertools/regextester.html",
      keywords: "regular expression pattern test",
    },
    {
      name: "Markdown to HTML",
      category: "Developer",
      url: "/developertools/markdownhtml.html",
      keywords: "convert md rich text web",
    },
    {
      name: "CSS Minifier",
      category: "Developer",
      url: "/developertools/cssminifier.html",
      keywords: "compress stylesheet bundle reduce",
    },
    {
      name: "Unix Timestamp",
      category: "Developer",
      url: "/developertools/unixtimestamp.html",
      keywords: "epoch time date converter milliseconds seconds",
    },
  ];

  /* ==========================================================================
     2. GLOBAL NAVIGATION & MOBILE DRAWER
     ========================================================================== */
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");

  function toggleMobileMenu(isOpen) {
    if (!mobileToggle || !mobileDrawer) return;
    const shouldOpen =
      typeof isOpen === "boolean"
        ? isOpen
        : !mobileDrawer.classList.contains("active");

    if (shouldOpen) {
      mobileDrawer.classList.add("active");
      mobileToggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("menu-open");
    } else {
      mobileDrawer.classList.remove("active");
      mobileToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => toggleMobileMenu());
  }

  if (mobileDrawer) {
    mobileDrawer.addEventListener("click", (e) => {
      if (e.target === mobileDrawer) toggleMobileMenu(false);
    });
    // Close on navigation link click
    const mobileLinks = mobileDrawer.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => toggleMobileMenu(false));
    });
  }

  /* ==========================================================================
     3. SEARCH SYSTEM (MODAL, KEYBOARD SHORTCUTS, ACCESSIBILITY)
     ========================================================================== */
  const searchModal = document.getElementById("searchModal");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const searchTrigger = document.getElementById("searchTrigger");
  const searchClose = document.getElementById("searchClose");

  function openSearchModal() {
    if (!searchModal || !searchInput) return;
    searchModal.classList.add("active");
    document.body.classList.add("modal-open");
    searchInput.value = "";
    renderSearchResults(HUZIKIT_TOOLS);
    setTimeout(() => searchInput.focus(), 50);
  }

  function closeSearchModal() {
    if (!searchModal) return;
    searchModal.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  function renderSearchResults(items) {
    if (!searchResults) return;
    searchResults.innerHTML = "";

    if (!items || items.length === 0) {
      const empty = document.createElement("li");
      empty.className = "search-empty-state";
      empty.textContent =
        'No matching tools found. Try searching for "timestamp", "calculator", or "json".';
      searchResults.appendChild(empty);
      return;
    }

    items.forEach((tool) => {
      const li = document.createElement("li");
      li.className = "search-result-item";

      const link = document.createElement("a");
      link.href = tool.url;

      const titleSpan = document.createElement("span");
      titleSpan.className = "search-result-title";
      titleSpan.textContent = tool.name;

      const catSpan = document.createElement("span");
      catSpan.className = "search-result-category";
      catSpan.textContent = tool.category;

      link.appendChild(titleSpan);
      link.appendChild(catSpan);
      li.appendChild(link);
      searchResults.appendChild(li);
    });
  }

  if (searchTrigger) searchTrigger.addEventListener("click", openSearchModal);
  if (searchClose) searchClose.addEventListener("click", closeSearchModal);

  if (searchModal) {
    searchModal.addEventListener("click", (e) => {
      if (e.target === searchModal) closeSearchModal();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        renderSearchResults(HUZIKIT_TOOLS);
        return;
      }
      const filtered = HUZIKIT_TOOLS.filter((tool) => {
        return (
          tool.name.toLowerCase().includes(q) ||
          tool.category.toLowerCase().includes(q) ||
          tool.keywords.toLowerCase().includes(q)
        );
      });
      renderSearchResults(filtered);
    });
  }

  // Global Keyboard Shortcuts (Ctrl+K, Cmd+K, Escape)
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
      e.preventDefault();
      openSearchModal();
    } else if (e.key === "Escape") {
      if (searchModal && searchModal.classList.contains("active")) {
        closeSearchModal();
      }
      if (mobileDrawer && mobileDrawer.classList.contains("active")) {
        toggleMobileMenu(false);
      }
    }
  });

  /* ==========================================================================
     4. CLIPBOARD COPY UTILITY & NOTIFICATION
     ========================================================================== */
  async function copyTextToClipboard(text, btnElement) {
    if (!text) return;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for non-secure contexts or legacy browsers
        const temp = document.createElement("textarea");
        temp.value = text;
        temp.style.position = "fixed";
        temp.style.left = "-9999px";
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
      }

      if (btnElement) {
        const originalText =
          btnElement.getAttribute("data-original-html") || btnElement.innerHTML;
        if (!btnElement.getAttribute("data-original-html")) {
          btnElement.setAttribute("data-original-html", originalText);
        }
        btnElement.classList.add("copied");
        btnElement.textContent = "✓ Copied";

        setTimeout(() => {
          btnElement.classList.remove("copied");
          btnElement.innerHTML = btnElement.getAttribute("data-original-html");
        }, 1800);
      }
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  }

  // Attach click listeners to all data-copy-trigger elements
  document.addEventListener("click", (e) => {
    const copyBtn = e.target.closest("[data-copy-target]");
    if (copyBtn) {
      const targetSelector = copyBtn.getAttribute("data-copy-target");
      const targetEl = document.querySelector(targetSelector);
      if (targetEl) {
        const value =
          targetEl.value !== undefined ? targetEl.value : targetEl.textContent;
        copyTextToClipboard(value.trim(), copyBtn);
      }
    }

    const directCopyBtn = e.target.closest("[data-copy-direct]");
    if (directCopyBtn) {
      const val = directCopyBtn.getAttribute("data-copy-direct");
      copyTextToClipboard(val, directCopyBtn);
    }
  });

  /* ==========================================================================
     5. LIVE TIMESTAMP TICKER
     ========================================================================== */
  const liveSecEl = document.getElementById("liveSeconds");
  const liveMsEl = document.getElementById("liveMilliseconds");
  const liveUtcEl = document.getElementById("liveUtc");
  const liveLocalEl = document.getElementById("liveLocal");
  const livePauseBtn = document.getElementById("livePauseBtn");
  const liveSyncBtn = document.getElementById("liveSyncBtn");

  let isClockPaused = false;
  let clockInterval = null;

  function updateLiveClock() {
    if (isClockPaused) return;
    const now = new Date();
    const ms = now.getTime();
    const sec = Math.floor(ms / 1000);

    if (liveSecEl) liveSecEl.textContent = sec.toString();
    if (liveMsEl) liveMsEl.textContent = ms.toString();
    if (liveUtcEl) liveUtcEl.textContent = now.toUTCString();
    if (liveLocalEl) liveLocalEl.textContent = now.toLocaleString();
  }

  function startLiveClock() {
    updateLiveClock();
    if (clockInterval) clearInterval(clockInterval);
    clockInterval = setInterval(updateLiveClock, 50);
  }

  if (livePauseBtn) {
    livePauseBtn.addEventListener("click", () => {
      isClockPaused = !isClockPaused;
      if (isClockPaused) {
        livePauseBtn.innerHTML =
          '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16"><polygon points="5 3 19 12 5 21 5 3"/></svg> Resume';
        livePauseBtn.classList.remove("btn-secondary");
        livePauseBtn.classList.add("btn-primary");
      } else {
        livePauseBtn.innerHTML =
          '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> Pause';
        livePauseBtn.classList.remove("btn-primary");
        livePauseBtn.classList.add("btn-secondary");
        updateLiveClock();
      }
    });
  }

  if (liveSyncBtn) {
    liveSyncBtn.addEventListener("click", () => {
      isClockPaused = false;
      if (livePauseBtn) {
        livePauseBtn.innerHTML =
          '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> Pause';
        livePauseBtn.classList.remove("btn-primary");
        livePauseBtn.classList.add("btn-secondary");
      }
      updateLiveClock();
    });
  }

  startLiveClock();

  /* ==========================================================================
     6. DATE & TIME UTILITY HELPERS
     ========================================================================== */
  function getRelativeTimeString(date, now = new Date()) {
    const diffSeconds = Math.round((date.getTime() - now.getTime()) / 1000);
    const absSec = Math.abs(diffSeconds);

    if (absSec < 5) return "just now";

    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
    if (absSec < 60) return rtf.format(diffSeconds, "second");
    const diffMinutes = Math.round(diffSeconds / 60);
    if (Math.abs(diffMinutes) < 60) return rtf.format(diffMinutes, "minute");
    const diffHours = Math.round(diffMinutes / 60);
    if (Math.abs(diffHours) < 24) return rtf.format(diffHours, "hour");
    const diffDays = Math.round(diffHours / 24);
    if (Math.abs(diffDays) < 30) return rtf.format(diffDays, "day");
    const diffMonths = Math.round(diffDays / 30);
    if (Math.abs(diffMonths) < 12) return rtf.format(diffMonths, "month");
    const diffYears = Math.round(diffDays / 365);
    return rtf.format(diffYears, "year");
  }

  function getDayOfYear(date) {
    const start = new Date(Date.UTC(date.getUTCFullYear(), 0, 0));
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

  function getWeekOfYear(date) {
    const target = new Date(date.valueOf());
    const dayNr = (date.getUTCDay() + 6) % 7;
    target.setUTCDate(target.getUTCDate() - dayNr + 3);
    const firstThursday = target.valueOf();
    target.setUTCMonth(0, 1);
    if (target.getUTCDay() !== 4) {
      target.setUTCMonth(0, 1 + ((4 - target.getUTCDay() + 7) % 7));
    }
    return 1 + Math.ceil((firstThursday - target) / (7 * 24 * 3600 * 1000));
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  function formatInTimezone(date, timeZone) {
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: timeZone || "UTC",
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZoneName: "short",
      }).format(date);
    } catch (e) {
      return date.toUTCString();
    }
  }

  /* ==========================================================================
     7. TIMESTAMP TO DATE CONVERTER
     ========================================================================== */
  const tsInput = document.getElementById("tsInput");
  const tsUnitMode = document.getElementById("tsUnitMode");
  const tsTzSelect = document.getElementById("tsTzSelect");
  const tsErrorMsg = document.getElementById("tsErrorMsg");
  const tsDetectedBadge = document.getElementById("tsDetectedBadge");

  // Outputs
  const outLocal = document.getElementById("outLocal");
  const outUtc = document.getElementById("outUtc");
  const outIso = document.getElementById("outIso");
  const outRelative = document.getElementById("outRelative");
  const outSec = document.getElementById("outSec");
  const outMs = document.getElementById("outMs");
  const outTz = document.getElementById("outTz");
  const outDayYear = document.getElementById("outDayYear");

  // Quick action buttons
  const btnTsNow = document.getElementById("btnTsNow");
  const btnTsClear = document.getElementById("btnTsClear");
  const btnTsDownload = document.getElementById("btnTsDownload");
  const btnTsFavorite = document.getElementById("btnTsFavorite");

  let activeTsUnit = "auto"; // 'auto' | 'seconds' | 'milliseconds'

  function convertTimestampToDate() {
    if (!tsInput) return;
    const rawVal = tsInput.value.trim();

    if (!rawVal) {
      if (tsErrorMsg) tsErrorMsg.classList.remove("visible");
      if (tsDetectedBadge) tsDetectedBadge.textContent = "Auto-detecting...";
      clearTimestampOutputs();
      return;
    }

    // Check numeric validity (allowing optional negative sign for dates prior to 1970)
    if (!/^-?\d+(\.\d+)?$/.test(rawVal)) {
      showTsError("Please enter a valid numeric timestamp (e.g. 1700000000).");
      return;
    }

    const numVal = parseFloat(rawVal);
    let ms = 0;
    let detectedUnit = "seconds";

    if (activeTsUnit === "seconds") {
      ms = numVal * 1000;
      detectedUnit = "seconds";
    } else if (activeTsUnit === "milliseconds") {
      ms = numVal;
      detectedUnit = "milliseconds";
    } else {
      // Auto-detect: if absolute integer digits >= 12, treat as ms, else sec
      const intDigits = Math.abs(Math.trunc(numVal)).toString().length;
      if (intDigits >= 12) {
        ms = numVal;
        detectedUnit = "milliseconds";
      } else {
        ms = numVal * 1000;
        detectedUnit = "seconds";
      }
    }

    if (tsDetectedBadge) {
      tsDetectedBadge.textContent = `Unit: ${detectedUnit === "seconds" ? "Seconds (s)" : "Milliseconds (ms)"}`;
    }

    // Verify Date range validity (-100,000,000 to +100,000,000 days in ms)
    const MAX_SAFE_DATE_MS = 8.64e15;
    if (Math.abs(ms) > MAX_SAFE_DATE_MS) {
      showTsError(
        "Timestamp is beyond the maximum supported JavaScript Date range (±100,000,000 days from 1970).",
      );
      return;
    }

    const date = new Date(ms);
    if (isNaN(date.getTime())) {
      showTsError("Invalid date resulting from this timestamp value.");
      return;
    }

    hideTsError();

    // Populate Outputs
    const chosenTz = tsTzSelect ? tsTzSelect.value : "UTC";
    const secVal = Math.floor(ms / 1000);

    if (outLocal) outLocal.textContent = date.toLocaleString();
    if (outUtc) outUtc.textContent = date.toUTCString();
    if (outIso) outIso.textContent = date.toISOString();
    if (outRelative) outRelative.textContent = getRelativeTimeString(date);
    if (outSec) outSec.textContent = secVal.toString();
    if (outMs) outMs.textContent = Math.round(ms).toString();
    if (outTz) outTz.textContent = formatInTimezone(date, chosenTz);

    if (outDayYear) {
      const doy = getDayOfYear(date);
      const woy = getWeekOfYear(date);
      const leap = isLeapYear(date.getUTCFullYear())
        ? "Leap Year"
        : "Regular Year";
      outDayYear.textContent = `Day ${doy} of Year • Week ${woy} • ${leap}`;
    }

    // Save to local conversion history
    saveConversionHistory({
      type: "ts2date",
      input: rawVal,
      unit: detectedUnit,
      result: date.toISOString(),
      timestamp: Date.now(),
    });
  }

  function showTsError(msg) {
    if (!tsErrorMsg || !tsInput) return;
    tsErrorMsg.textContent = msg;
    tsErrorMsg.classList.add("visible");
    tsInput.classList.add("has-error");
  }

  function hideTsError() {
    if (!tsErrorMsg || !tsInput) return;
    tsErrorMsg.classList.remove("visible");
    tsInput.classList.remove("has-error");
  }

  function clearTimestampOutputs() {
    const dashes = "—";
    if (outLocal) outLocal.textContent = dashes;
    if (outUtc) outUtc.textContent = dashes;
    if (outIso) outIso.textContent = dashes;
    if (outRelative) outRelative.textContent = dashes;
    if (outSec) outSec.textContent = dashes;
    if (outMs) outMs.textContent = dashes;
    if (outTz) outTz.textContent = dashes;
    if (outDayYear) outDayYear.textContent = dashes;
  }

  // Unit toggle pills
  const unitPills = document.querySelectorAll(".unit-pill[data-unit]");
  unitPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      unitPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      activeTsUnit = pill.getAttribute("data-unit");
      convertTimestampToDate();
    });
  });

  if (tsInput) {
    tsInput.addEventListener("input", convertTimestampToDate);
  }

  if (tsTzSelect) {
    tsTzSelect.addEventListener("change", convertTimestampToDate);
  }

  if (btnTsNow) {
    btnTsNow.addEventListener("click", () => {
      if (tsInput) {
        tsInput.value = Math.floor(Date.now() / 1000).toString();
        convertTimestampToDate();
      }
    });
  }

  if (btnTsClear) {
    btnTsClear.addEventListener("click", () => {
      if (tsInput) {
        tsInput.value = "";
        hideTsError();
        clearTimestampOutputs();
        tsInput.focus();
      }
    });
  }

  if (btnTsDownload) {
    btnTsDownload.addEventListener("click", () => {
      if (!tsInput || !tsInput.value) return;
      const content = [
        "=============================================",
        "HUZIKIT.COM — UNIX TIMESTAMP CONVERSION RESULT",
        "=============================================",
        `Generated: ${new Date().toISOString()}`,
        `Input Timestamp: ${tsInput.value.trim()}`,
        `Detected Unit: ${activeTsUnit}`,
        `Selected Timezone: ${tsTzSelect ? tsTzSelect.value : "UTC"}`,
        "---------------------------------------------",
        `Local Date/Time: ${outLocal ? outLocal.textContent : ""}`,
        `UTC Date/Time:   ${outUtc ? outUtc.textContent : ""}`,
        `ISO 8601:        ${outIso ? outIso.textContent : ""}`,
        `Relative Time:   ${outRelative ? outRelative.textContent : ""}`,
        `Unix Seconds:    ${outSec ? outSec.textContent : ""}`,
        `Unix Millis:     ${outMs ? outMs.textContent : ""}`,
        `Timezone String: ${outTz ? outTz.textContent : ""}`,
        `Calendar Info:   ${outDayYear ? outDayYear.textContent : ""}`,
        "=============================================",
        "Thank you for using Huzikit (https://huzikit.com)",
      ].join("\n");

      downloadTxtFile(`huzikit-timestamp-${tsInput.value.trim()}.txt`, content);
    });
  }

  if (btnTsFavorite) {
    btnTsFavorite.addEventListener("click", () => {
      if (!tsInput || !tsInput.value) return;
      addSavedFavorite({
        id: "fav_" + Date.now(),
        type: "Timestamp to Date",
        title: tsInput.value.trim(),
        subtitle: outIso ? outIso.textContent : "",
        timestamp: Date.now(),
      });
      copyTextToClipboard(tsInput.value.trim(), btnTsFavorite);
      btnTsFavorite.textContent = "★ Saved";
      setTimeout(() => {
        btnTsFavorite.textContent = "★ Save";
      }, 1600);
    });
  }

  /* ==========================================================================
     8. DATE TO TIMESTAMP CONVERTER
     ========================================================================== */
  const dateInput = document.getElementById("dateInput");
  const timeInput = document.getElementById("timeInput");
  const dateTzSelect = document.getElementById("dateTzSelect");
  const dateErrorMsg = document.getElementById("dateErrorMsg");

  // Outputs
  const outDateSec = document.getElementById("outDateSec");
  const outDateMs = document.getElementById("outDateMs");
  const outDateIso = document.getElementById("outDateIso");
  const outDateUtc = document.getElementById("outDateUtc");
  const outDateRfc = document.getElementById("outDateRfc");
  const btnDateDownload = document.getElementById("btnDateDownload");

  function convertDateToTimestamp() {
    if (!dateInput || !timeInput) return;
    const dVal = dateInput.value;
    const tVal = timeInput.value || "00:00:00";

    if (!dVal) {
      if (dateErrorMsg) dateErrorMsg.classList.remove("visible");
      clearDateOutputs();
      return;
    }

    const chosenTz = dateTzSelect ? dateTzSelect.value : "UTC";

    try {
      // Build ISO string components: YYYY-MM-DD and HH:mm[:ss]
      const [year, month, day] = dVal.split("-").map(Number);
      const [hours, minutes, seconds = 0] = tVal.split(":").map(Number);

      let targetMs;

      if (chosenTz === "UTC") {
        targetMs = Date.UTC(year, month - 1, day, hours, minutes, seconds);
      } else if (chosenTz === "Local") {
        const localD = new Date(year, month - 1, day, hours, minutes, seconds);
        targetMs = localD.getTime();
      } else {
        // Timezone calculation using Intl
        // Create an approximate UTC date and compute offset
        const naiveDate = new Date(
          Date.UTC(year, month - 1, day, hours, minutes, seconds),
        );
        // Format naiveDate in chosen timezone to determine offset
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: chosenTz,
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hourCycle: "h23",
        });

        const parts = formatter.formatToParts(naiveDate);
        const p = {};
        parts.forEach((pt) => {
          p[pt.type] = Number(pt.value);
        });

        const tzMs = Date.UTC(
          p.year,
          p.month - 1,
          p.day,
          p.hour,
          p.minute,
          p.second,
        );
        const offset = tzMs - naiveDate.getTime();
        targetMs = naiveDate.getTime() - offset;
      }

      const resultDate = new Date(targetMs);
      if (isNaN(resultDate.getTime())) {
        showDateError("Unable to construct a valid date from input values.");
        return;
      }

      hideDateError();

      const sec = Math.floor(targetMs / 1000);
      if (outDateSec) outDateSec.textContent = sec.toString();
      if (outDateMs) outDateMs.textContent = targetMs.toString();
      if (outDateIso) outDateIso.textContent = resultDate.toISOString();
      if (outDateUtc) outDateUtc.textContent = resultDate.toUTCString();
      if (outDateRfc) outDateRfc.textContent = resultDate.toUTCString();

      // Record to history
      saveConversionHistory({
        type: "date2ts",
        input: `${dVal} ${tVal} (${chosenTz})`,
        unit: "seconds",
        result: sec.toString(),
        timestamp: Date.now(),
      });
    } catch (err) {
      showDateError("Error calculating timestamp from date.");
      console.error(err);
    }
  }

  function showDateError(msg) {
    if (dateErrorMsg) {
      dateErrorMsg.textContent = msg;
      dateErrorMsg.classList.add("visible");
    }
  }

  function hideDateError() {
    if (dateErrorMsg) dateErrorMsg.classList.remove("visible");
  }

  function clearDateOutputs() {
    const dashes = "—";
    if (outDateSec) outDateSec.textContent = dashes;
    if (outDateMs) outDateMs.textContent = dashes;
    if (outDateIso) outDateIso.textContent = dashes;
    if (outDateUtc) outDateUtc.textContent = dashes;
    if (outDateRfc) outDateRfc.textContent = dashes;
  }

  if (dateInput) dateInput.addEventListener("input", convertDateToTimestamp);
  if (timeInput) timeInput.addEventListener("input", convertDateToTimestamp);
  if (dateTzSelect)
    dateTzSelect.addEventListener("change", convertDateToTimestamp);

  // Date Quick Presets
  const datePresets = document.querySelectorAll(
    ".preset-chip[data-date-preset]",
  );
  datePresets.forEach((preset) => {
    preset.addEventListener("click", () => {
      const mode = preset.getAttribute("data-date-preset");
      const now = new Date();

      if (mode === "now") {
        const y = now.getFullYear();
        const m = String(now.getMonth() + 1).padStart(2, "0");
        const d = String(now.getDate()).padStart(2, "0");
        const hh = String(now.getHours()).padStart(2, "0");
        const mm = String(now.getMinutes()).padStart(2, "0");
        const ss = String(now.getSeconds()).padStart(2, "0");
        if (dateInput) dateInput.value = `${y}-${m}-${d}`;
        if (timeInput) timeInput.value = `${hh}:${mm}:${ss}`;
      } else if (mode === "today_start") {
        const y = now.getFullYear();
        const m = String(now.getMonth() + 1).padStart(2, "0");
        const d = String(now.getDate()).padStart(2, "0");
        if (dateInput) dateInput.value = `${y}-${m}-${d}`;
        if (timeInput) timeInput.value = "00:00:00";
      } else if (mode === "today_end") {
        const y = now.getFullYear();
        const m = String(now.getMonth() + 1).padStart(2, "0");
        const d = String(now.getDate()).padStart(2, "0");
        if (dateInput) dateInput.value = `${y}-${m}-${d}`;
        if (timeInput) timeInput.value = "23:59:59";
      } else if (mode === "year_start") {
        const y = now.getFullYear();
        if (dateInput) dateInput.value = `${y}-01-01`;
        if (timeInput) timeInput.value = "00:00:00";
      } else if (mode === "plus_1d") {
        const future = new Date(now.getTime() + 86400000);
        const y = future.getFullYear();
        const m = String(future.getMonth() + 1).padStart(2, "0");
        const d = String(future.getDate()).padStart(2, "0");
        if (dateInput) dateInput.value = `${y}-${m}-${d}`;
      } else if (mode === "plus_1h") {
        const future = new Date(now.getTime() + 3600000);
        const hh = String(future.getHours()).padStart(2, "0");
        const mm = String(future.getMinutes()).padStart(2, "0");
        const ss = String(future.getSeconds()).padStart(2, "0");
        if (timeInput) timeInput.value = `${hh}:${mm}:${ss}`;
      }

      convertDateToTimestamp();
    });
  });

  if (btnDateDownload) {
    btnDateDownload.addEventListener("click", () => {
      if (!outDateSec || outDateSec.textContent === "—") return;
      const content = [
        "=============================================",
        "HUZIKIT.COM — DATE TO TIMESTAMP RESULT",
        "=============================================",
        `Generated: ${new Date().toISOString()}`,
        `Input Date: ${dateInput ? dateInput.value : ""}`,
        `Input Time: ${timeInput ? timeInput.value : ""}`,
        `Timezone:   ${dateTzSelect ? dateTzSelect.value : ""}`,
        "---------------------------------------------",
        `Unix Timestamp (Seconds): ${outDateSec.textContent}`,
        `Unix Timestamp (Millis):  ${outDateMs ? outDateMs.textContent : ""}`,
        `ISO 8601 String:          ${outDateIso ? outDateIso.textContent : ""}`,
        `UTC Formatted:            ${outDateUtc ? outDateUtc.textContent : ""}`,
        `RFC 2822:                 ${outDateRfc ? outDateRfc.textContent : ""}`,
        "=============================================",
        "Thank you for using Huzikit (https://huzikit.com)",
      ].join("\n");

      downloadTxtFile(`huzikit-date-${dateInput.value}.txt`, content);
    });
  }

  // Initialize Date/Time input with current date
  (() => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
    if (dateInput && !dateInput.value) dateInput.value = `${y}-${m}-${d}`;
    if (timeInput && !timeInput.value) timeInput.value = `${hh}:${mm}:${ss}`;
    convertDateToTimestamp();
  })();

  /* ==========================================================================
     9. DATE DIFFERENCE CALCULATOR
     ========================================================================== */
  const diffStartInput = document.getElementById("diffStartInput");
  const diffEndInput = document.getElementById("diffEndInput");
  const btnDiffNowStart = document.getElementById("btnDiffNowStart");
  const btnDiffNowEnd = document.getElementById("btnDiffNowEnd");
  const diffHeroText = document.getElementById("diffHeroText");
  const diffSubText = document.getElementById("diffSubText");

  const diffDaysEl = document.getElementById("diffDays");
  const diffHoursEl = document.getElementById("diffHours");
  const diffMinsEl = document.getElementById("diffMins");
  const diffSecsEl = document.getElementById("diffSecs");
  const diffMsEl = document.getElementById("diffMs");
  const diffWeeksEl = document.getElementById("diffWeeks");

  function calculateDateDifference() {
    if (!diffStartInput || !diffEndInput) return;
    const startVal = diffStartInput.value;
    const endVal = diffEndInput.value;

    if (!startVal || !endVal) {
      if (diffHeroText) diffHeroText.textContent = "Select start and end dates";
      if (diffSubText)
        diffSubText.textContent = "Detailed breakdown will appear below.";
      return;
    }

    const startDate = new Date(startVal);
    const endDate = new Date(endVal);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      if (diffHeroText) diffHeroText.textContent = "Invalid date selection";
      return;
    }

    const diffMs = endDate.getTime() - startDate.getTime();
    const isReversed = diffMs < 0;
    const absMs = Math.abs(diffMs);

    const totalSeconds = Math.floor(absMs / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalWeeks = (totalDays / 7).toFixed(1);

    // Approximate Calendar Breakdown (Years, Months, Days, Hours, Mins, Secs)
    let remSec = totalSeconds;
    const dYears = Math.floor(remSec / (365.25 * 86400));
    remSec -= Math.floor(dYears * 365.25 * 86400);
    const dMonths = Math.floor(remSec / (30.4375 * 86400));
    remSec -= Math.floor(dMonths * 30.4375 * 86400);
    const dDays = Math.floor(remSec / 86400);
    remSec -= dDays * 86400;
    const dHours = Math.floor(remSec / 3600);
    remSec -= dHours * 3600;
    const dMins = Math.floor(remSec / 60);
    const dSecs = remSec % 60;

    const parts = [];
    if (dYears > 0) parts.push(`${dYears}y`);
    if (dMonths > 0) parts.push(`${dMonths}m`);
    if (dDays > 0 || parts.length === 0) parts.push(`${dDays}d`);
    parts.push(`${dHours}h ${dMins}m ${dSecs}s`);

    const prefix = isReversed ? "- " : "";
    if (diffHeroText) {
      diffHeroText.textContent = `${prefix}${totalDays.toLocaleString()} Days (${prefix}${parts.join(" ")})`;
    }
    if (diffSubText) {
      diffSubText.textContent = isReversed
        ? "End date is earlier than start date (negative interval)."
        : "Exact duration between chosen timestamps.";
    }

    if (diffDaysEl)
      diffDaysEl.textContent =
        (isReversed ? "-" : "") + totalDays.toLocaleString();
    if (diffHoursEl)
      diffHoursEl.textContent =
        (isReversed ? "-" : "") + totalHours.toLocaleString();
    if (diffMinsEl)
      diffMinsEl.textContent =
        (isReversed ? "-" : "") + totalMinutes.toLocaleString();
    if (diffSecsEl)
      diffSecsEl.textContent =
        (isReversed ? "-" : "") + totalSeconds.toLocaleString();
    if (diffMsEl)
      diffMsEl.textContent = (isReversed ? "-" : "") + absMs.toLocaleString();
    if (diffWeeksEl)
      diffWeeksEl.textContent = (isReversed ? "-" : "") + totalWeeks;
  }

  if (diffStartInput)
    diffStartInput.addEventListener("input", calculateDateDifference);
  if (diffEndInput)
    diffEndInput.addEventListener("input", calculateDateDifference);

  function formatDateTimeLocal(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    const hh = String(date.getHours()).padStart(2, "0");
    const mm = String(date.getMinutes()).padStart(2, "0");
    return `${y}-${m}-${d}T${hh}:${mm}`;
  }

  if (btnDiffNowStart) {
    btnDiffNowStart.addEventListener("click", () => {
      if (diffStartInput) {
        diffStartInput.value = formatDateTimeLocal(new Date());
        calculateDateDifference();
      }
    });
  }

  if (btnDiffNowEnd) {
    btnDiffNowEnd.addEventListener("click", () => {
      if (diffEndInput) {
        diffEndInput.value = formatDateTimeLocal(new Date());
        calculateDateDifference();
      }
    });
  }

  // Initialize Diff with sample 7-day interval
  (() => {
    if (diffStartInput && !diffStartInput.value) {
      diffStartInput.value = formatDateTimeLocal(new Date());
    }
    if (diffEndInput && !diffEndInput.value) {
      const nextWeek = new Date(Date.now() + 7 * 86400000);
      diffEndInput.value = formatDateTimeLocal(nextWeek);
    }
    calculateDateDifference();
  })();

  /* ==========================================================================
     10. ADD / SUBTRACT TIME UTILITY
     ========================================================================== */
  const mathBaseDate = document.getElementById("mathBaseDate");
  const mathOp = document.getElementById("mathOp");
  const mathAmount = document.getElementById("mathAmount");
  const mathUnit = document.getElementById("mathUnit");

  const outMathDate = document.getElementById("outMathDate");
  const outMathUtc = document.getElementById("outMathUtc");
  const outMathSec = document.getElementById("outMathSec");
  const outMathIso = document.getElementById("outMathIso");

  function calculateTimeMath() {
    if (!mathBaseDate || !mathAmount || !mathUnit) return;
    const baseVal = mathBaseDate.value;
    const amountVal = parseFloat(mathAmount.value);
    const unitVal = mathUnit.value;
    const op = mathOp ? mathOp.value : "add";

    if (!baseVal || isNaN(amountVal)) {
      if (outMathDate) outMathDate.textContent = "—";
      if (outMathUtc) outMathUtc.textContent = "—";
      if (outMathSec) outMathSec.textContent = "—";
      if (outMathIso) outMathIso.textContent = "—";
      return;
    }

    const base = new Date(baseVal);
    if (isNaN(base.getTime())) return;

    const multiplier = op === "subtract" ? -1 : 1;
    const signedAmount = amountVal * multiplier;

    const result = new Date(base.getTime());

    switch (unitVal) {
      case "seconds":
        result.setSeconds(result.getSeconds() + signedAmount);
        break;
      case "minutes":
        result.setMinutes(result.getMinutes() + signedAmount);
        break;
      case "hours":
        result.setHours(result.getHours() + signedAmount);
        break;
      case "days":
        result.setDate(result.getDate() + signedAmount);
        break;
      case "weeks":
        result.setDate(result.getDate() + signedAmount * 7);
        break;
      case "months":
        result.setMonth(result.getMonth() + signedAmount);
        break;
      case "years":
        result.setFullYear(result.getFullYear() + signedAmount);
        break;
      default:
        result.setSeconds(result.getSeconds() + signedAmount);
    }

    if (isNaN(result.getTime())) return;

    if (outMathDate) outMathDate.textContent = result.toLocaleString();
    if (outMathUtc) outMathUtc.textContent = result.toUTCString();
    if (outMathSec)
      outMathSec.textContent = Math.floor(result.getTime() / 1000).toString();
    if (outMathIso) outMathIso.textContent = result.toISOString();
  }

  if (mathBaseDate) mathBaseDate.addEventListener("input", calculateTimeMath);
  if (mathOp) mathOp.addEventListener("change", calculateTimeMath);
  if (mathAmount) mathAmount.addEventListener("input", calculateTimeMath);
  if (mathUnit) mathUnit.addEventListener("change", calculateTimeMath);

  (() => {
    if (mathBaseDate && !mathBaseDate.value) {
      mathBaseDate.value = formatDateTimeLocal(new Date());
    }
    calculateTimeMath();
  })();

  /* ==========================================================================
     11. WORKSPACE TABS SWITCHER
     ========================================================================== */
  const workspaceTabBtns = document.querySelectorAll(".tab-btn[data-tab]");
  const workspaceTabPanels = document.querySelectorAll(".tool-tab-panel");

  workspaceTabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");
      workspaceTabBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      workspaceTabPanels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });

  /* ==========================================================================
     12. LOCAL HISTORY & SAVED FAVORITES (LOCALSTORAGE SAFE)
     ========================================================================== */
  const HISTORY_STORAGE_KEY = "huzikit_timestamp_history_v1";
  const FAVORITES_STORAGE_KEY = "huzikit_timestamp_favorites_v1";

  const historyListContainer = document.getElementById("historyList");
  const favoritesListContainer = document.getElementById("favoritesList");
  const btnClearHistory = document.getElementById("btnClearHistory");
  const btnClearFavorites = document.getElementById("btnClearFavorites");

  function getStorageData(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function setStorageData(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn("LocalStorage unavailable or quota exceeded:", e);
    }
  }

  function saveConversionHistory(item) {
    const list = getStorageData(HISTORY_STORAGE_KEY);
    // Avoid duplicate immediate entries
    if (list.length > 0 && list[0].input === item.input) return;
    list.unshift(item);
    if (list.length > 30) list.pop(); // keep last 30
    setStorageData(HISTORY_STORAGE_KEY, list);
    renderHistoryUI();
  }

  function addSavedFavorite(item) {
    const favs = getStorageData(FAVORITES_STORAGE_KEY);
    favs.unshift(item);
    setStorageData(FAVORITES_STORAGE_KEY, favs);
    renderFavoritesUI();
  }

  function renderHistoryUI() {
    if (!historyListContainer) return;
    const history = getStorageData(HISTORY_STORAGE_KEY);
    historyListContainer.innerHTML = "";

    if (history.length === 0) {
      historyListContainer.innerHTML =
        '<div class="history-empty-msg">No conversion history yet. Use the converter above to record timestamps.</div>';
      return;
    }

    history.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "history-item-card";

      const header = document.createElement("div");
      header.className = "history-item-header";

      const label = document.createElement("span");
      label.className = "form-label-badge";
      label.textContent =
        item.type === "ts2date" ? "Timestamp → Date" : "Date → Timestamp";

      const time = document.createElement("span");
      time.className = "history-item-time";
      time.textContent = new Date(item.timestamp).toLocaleTimeString();

      header.appendChild(label);
      header.appendChild(time);

      const dataBox = document.createElement("div");
      dataBox.className = "history-item-data";

      const inputP = document.createElement("div");
      inputP.className = "history-raw-input";
      inputP.textContent = item.input;

      const resultP = document.createElement("div");
      resultP.className = "history-converted-val";
      resultP.textContent = item.result;

      dataBox.appendChild(inputP);
      dataBox.appendChild(resultP);

      const actions = document.createElement("div");
      actions.className = "history-actions";

      const restoreBtn = document.createElement("button");
      restoreBtn.className = "btn btn-secondary btn-sm";
      restoreBtn.textContent = "Restore";
      restoreBtn.addEventListener("click", () => {
        if (item.type === "ts2date") {
          const tab = document.querySelector('[data-tab="tabTsToDate"]');
          if (tab) tab.click();
          if (tsInput) {
            tsInput.value = item.input;
            convertTimestampToDate();
          }
        }
        window.scrollTo({ top: 400, behavior: "smooth" });
      });

      const copyBtn = document.createElement("button");
      copyBtn.className = "btn btn-outline btn-sm";
      copyBtn.textContent = "Copy";
      copyBtn.addEventListener("click", () =>
        copyTextToClipboard(item.result, copyBtn),
      );

      actions.appendChild(restoreBtn);
      actions.appendChild(copyBtn);

      card.appendChild(header);
      card.appendChild(dataBox);
      card.appendChild(actions);

      historyListContainer.appendChild(card);
    });
  }

  function renderFavoritesUI() {
    if (!favoritesListContainer) return;
    const favs = getStorageData(FAVORITES_STORAGE_KEY);
    favoritesListContainer.innerHTML = "";

    if (favs.length === 0) {
      favoritesListContainer.innerHTML =
        '<div class="history-empty-msg">No saved conversions. Click "Save" on any timestamp to store it here for future access.</div>';
      return;
    }

    favs.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "history-item-card";

      const header = document.createElement("div");
      header.className = "history-item-header";

      const label = document.createElement("span");
      label.className = "form-label-badge";
      label.textContent = item.type;

      const delBtn = document.createElement("button");
      delBtn.className = "btn-icon-only btn-outline btn-sm";
      delBtn.innerHTML = "✕";
      delBtn.title = "Remove Favorite";
      delBtn.addEventListener("click", () => {
        favs.splice(index, 1);
        setStorageData(FAVORITES_STORAGE_KEY, favs);
        renderFavoritesUI();
      });

      header.appendChild(label);
      header.appendChild(delBtn);

      const dataBox = document.createElement("div");
      dataBox.className = "history-item-data";

      const titleP = document.createElement("div");
      titleP.className = "history-raw-input";
      titleP.textContent = item.title;

      const subP = document.createElement("div");
      subP.className = "history-converted-val";
      subP.textContent = item.subtitle;

      dataBox.appendChild(titleP);
      dataBox.appendChild(subP);

      card.appendChild(header);
      card.appendChild(dataBox);
      favoritesListContainer.appendChild(card);
    });
  }

  if (btnClearHistory) {
    btnClearHistory.addEventListener("click", () => {
      setStorageData(HISTORY_STORAGE_KEY, []);
      renderHistoryUI();
    });
  }

  if (btnClearFavorites) {
    btnClearFavorites.addEventListener("click", () => {
      setStorageData(FAVORITES_STORAGE_KEY, []);
      renderFavoritesUI();
    });
  }

  renderHistoryUI();
  renderFavoritesUI();

  /* ==========================================================================
     13. CODE SNIPPET TABS & COPIERS
     ========================================================================== */
  const codeTabBtns = document.querySelectorAll(".code-tab-btn[data-code]");
  const codePre = document.getElementById("codeDisplayPre");

  const CODE_SNIPPETS = {
    javascript: `// JavaScript / Node.js
// Get current timestamp (seconds & milliseconds)
const nowSeconds = Math.floor(Date.now() / 1000);
const nowMilliseconds = Date.now();

// Convert Unix timestamp (seconds) to Date
const timestamp = 1700000000;
const date = new Date(timestamp * 1000);
console.log(date.toISOString()); // "2023-11-14T22:13:20.000Z"

// Convert Date to Unix timestamp (seconds)
const specificDate = new Date('2026-09-20T12:00:00Z');
const unixSeconds = Math.floor(specificDate.getTime() / 1000);`,

    python: `# Python 3
import time
from datetime import datetime, timezone

# Current timestamp in seconds
now_sec = int(time.time())

# Timestamp to datetime (UTC)
ts = 1700000000
dt = datetime.fromtimestamp(ts, tz=timezone.utc)
print(dt.isoformat()) # 2023-11-14T22:13:20+00:00

# Datetime to timestamp
ts_back = int(dt.timestamp())`,

    php: `<?php
// PHP
// Current Unix timestamp
$now = time();

// Timestamp to formatted date
$timestamp = 1700000000;
$utcDate = gmdate("Y-m-d\\TH:i:s\\Z", $timestamp);

// Date to Unix timestamp
$ts = strtotime("2026-09-20 12:00:00 UTC");
?>`,

    golang: `// Go (Golang)
package main
import (
    "fmt"
    "time"
)

func main() {
    // Current Unix timestamp (seconds and nanos)
    now := time.Now().Unix()
    nowMilli := time.Now().UnixMilli()

    // Unix to Time
    tm := time.Unix(1700000000, 0).UTC()
    fmt.Println(tm.Format(time.RFC3339))
}`,

    sql: `-- SQL (PostgreSQL & MySQL)
-- PostgreSQL:
SELECT EXTRACT(EPOCH FROM NOW())::BIGINT; -- Current seconds
SELECT TO_TIMESTAMP(1700000000);          -- Timestamp to TimestampTZ

-- MySQL:
SELECT UNIX_TIMESTAMP();                  -- Current seconds
SELECT FROM_UNIXTIME(1700000000);         -- Timestamp to DATETIME`,
  };

  codeTabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-code");
      codeTabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      if (codePre && CODE_SNIPPETS[lang]) {
        codePre.textContent = CODE_SNIPPETS[lang];
      }
    });
  });

  const copyCodeBtn = document.getElementById("copyCodeBtn");
  if (copyCodeBtn && codePre) {
    copyCodeBtn.addEventListener("click", () => {
      copyTextToClipboard(codePre.textContent, copyCodeBtn);
    });
  }

  /* ==========================================================================
     14. INTERACTIVE 3D HERO VISUAL (TILT EFFECT)
     ========================================================================== */
  const heroCard = document.getElementById("hero3dCard");
  if (
    heroCard &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    heroCard.addEventListener("mousemove", (e) => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / (rect.height / 2)) * 8;
      const rotateY = (x / (rect.width / 2)) * 8;
      heroCard.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
    });

    heroCard.addEventListener("mouseleave", () => {
      heroCard.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    });
  }

  /* ==========================================================================
     15. UTILITY: SAFE BLOB FILE DOWNLOAD
     ========================================================================== */
  function downloadTxtFile(filename, text) {
    try {
      const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1500);
    } catch (e) {
      console.error("File download failed:", e);
    }
  }

  // Initial trigger
  convertTimestampToDate();
});
