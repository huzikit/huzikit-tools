"use strict";

/* ====================================================================
   HUZIHUB — REMOVE DUPLICATE LINES SCRIPT
   ==================================================================== */

(function () {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  /* ---------- Navbar scroll shadow ---------- */
  const navbar = document.getElementById("navbar");
  const onScroll = () => {
    if (window.scrollY > 4) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Dropdown keyboard/click toggling ---------- */
  const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");
  dropdownTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".nav-item");
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".nav-item.open").forEach((el) => {
        el.classList.remove("open");
        el.querySelector(".dropdown-trigger")?.setAttribute(
          "aria-expanded",
          "false",
        );
      });
      if (!isOpen) {
        item.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-item")) {
      document.querySelectorAll(".nav-item.open").forEach((el) => {
        el.classList.remove("open");
        el.querySelector(".dropdown-trigger")?.setAttribute(
          "aria-expanded",
          "false",
        );
      });
    }
  });

  /* ---------- Mobile drawer ---------- */
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerOverlay = document.getElementById("drawerOverlay");
  const drawerClose = document.getElementById("drawerClose");

  function openDrawer() {
    mobileDrawer.classList.add("open");
    drawerOverlay.classList.add("open");
    hamburgerBtn.classList.add("open");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
  }
  function closeDrawer() {
    mobileDrawer.classList.remove("open");
    drawerOverlay.classList.remove("open");
    hamburgerBtn.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  }
  hamburgerBtn.addEventListener("click", () => {
    mobileDrawer.classList.contains("open") ? closeDrawer() : openDrawer();
  });
  drawerClose.addEventListener("click", closeDrawer);
  drawerOverlay.addEventListener("click", closeDrawer);

  document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const panel = trigger.nextElementSibling;
      const isOpen = panel.classList.contains("open");
      document
        .querySelectorAll(".accordion-panel.open")
        .forEach((p) => p.classList.remove("open"));
      document
        .querySelectorAll(".accordion-trigger")
        .forEach((t) => t.setAttribute("aria-expanded", "false"));
      if (!isOpen) {
        panel.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- Search overlay ---------- */
  const searchBtn = document.getElementById("searchBtn");
  const searchOverlay = document.getElementById("searchOverlay");
  const searchInput = document.getElementById("searchInput");
  const searchClose = document.getElementById("searchClose");
  const searchResults = document.getElementById("searchResults");

  const ALL_TOOLS = [
    {
      title: "Word Counter",
      cat: "Text Tools",
      url: "/texttools/word-counter.html",
    },
    {
      title: "Character Counter",
      cat: "Text Tools",
      url: "/texttools/character-counter.html",
    },
    {
      title: "Case Converter",
      cat: "Text Tools",
      url: "/texttools/case-converter.html",
    },
    {
      title: "Remove Duplicate Lines",
      cat: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
    },
    {
      title: "Lorem Ipsum Generator",
      cat: "Text Tools",
      url: "/texttools/loremipsumgenerator.html",
    },
    {
      title: "Password Generator",
      cat: "Text Tools",
      url: "/texttools/passwordgenerator.html",
    },
    {
      title: "Text Reverser",
      cat: "Text Tools",
      url: "/texttools/text-reverser.html",
    },
    {
      title: "Online Notepad",
      cat: "Text Tools",
      url: "/texttools/onlinenotepad.html",
    },
    {
      title: "Age Calculator",
      cat: "Calculators",
      url: "/calculator/agecalculator.html",
    },
    {
      title: "BMI Calculator",
      cat: "Calculators",
      url: "/calculator/bmi-calculator.html",
    },
    {
      title: "Percentage Calculator",
      cat: "Calculators",
      url: "/calculator/percentage-calculator.html",
    },
    {
      title: "Calorie Calculator",
      cat: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
    },
    {
      title: "Discount Calculator",
      cat: "Calculators",
      url: "/calculator/discount-calculator.html",
    },
    {
      title: "savings&Goal Calculator",
      cat: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
    },
    {
      title: "Tip Calculator",
      cat: "Calculators",
      url: "/calculators/tip-calculator.html",
    },
    {
      title: "GPA Calculator",
      cat: "Calculators",
      url: "/calculator/gpa-calculator.html",
    },
    {
      title: "Image Compressor",
      cat: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
    },
    {
      title: "Image Resizer",
      cat: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
    },
    {
      title: "PDF to Word",
      cat: "Image & PDF",
      url: "/image-pdf/pdf-to-word.html",
    },
    {
      title: "JPG to PNG",
      cat: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
    },
    {
      title: "Color Picker / HEX",
      cat: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
    },
    {
      title: "QR Code Generator",
      cat: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
    },
    {
      title: "JSON Formatter",
      cat: "Developer",
      url: "/developertools/JSONFORMATTER.html",
    },
    {
      title: "Base64 Encoder / Decoder",
      cat: "Developer",
      url: "/developertools/base64encoderdecoder.html",
    },
    {
      title: "URL Encoder / Decoder",
      cat: "Developer",
      url: "/developertools/urlencoderdecoder.html",
    },
    {
      title: "Meta Tag Generator",
      cat: "Developer",
      url: "/developertools/meta-tag-generator.html",
    },
    {
      title: "Regex Tester",
      cat: "Developer",
      url: "/developertools/regextester.html",
    },
    {
      title: "Markdown to HTML",
      cat: "Developer",
      rl: "/developertools/markdownhtml.html",
    },
    {
      title: "CSS Minifier",
      cat: "Developer",
      url: "/developertools/cssminifier.html",
    },
    {
      title: "Unix Timestamp Converter",
      cat: "Developer",
      url: "/developertools/unixtimestamp.html",
      url: "/tools/unix-timestamp",
    },
  ];

  let activeResultIndex = -1;

  function renderResults(query) {
    searchResults.innerHTML = "";
    const q = query.trim().toLowerCase();
    const list =
      q === ""
        ? ALL_TOOLS.slice(0, 8)
        : ALL_TOOLS.filter((t) => t.title.toLowerCase().includes(q));
    activeResultIndex = -1;

    list.forEach((tool) => {
      const item = document.createElement("a");
      item.href = tool.url;
      item.className = "search-result-item";
      item.innerHTML = `<div><span class="srt-title">${escapeHtml(tool.title)}</span><br><span class="srt-cat">${escapeHtml(tool.cat)}</span></div>`;
      searchResults.appendChild(item);
    });

    if (list.length === 0) {
      const empty = document.createElement("p");
      empty.style.padding = "12px";
      empty.style.color = "var(--ink-faint)";
      empty.textContent = "No tools found.";
      searchResults.appendChild(empty);
    }
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function openSearch() {
    searchOverlay.classList.add("open");
    renderResults("");
    setTimeout(() => searchInput.focus(), 50);
  }
  function closeSearch() {
    searchOverlay.classList.remove("open");
    searchInput.value = "";
  }

  searchBtn.addEventListener("click", openSearch);
  searchClose.addEventListener("click", closeSearch);
  searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) closeSearch();
  });
  searchInput.addEventListener("input", () => renderResults(searchInput.value));

  /* ====================================================================
     PREMIUM HERO INTERACTIONS
     ==================================================================== */

  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    if (isNaN(target)) {
      return;
    }
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * target);
      el.textContent = value.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    }
    if (prefersReducedMotion) {
      el.textContent = target.toLocaleString() + suffix;
    } else {
      requestAnimationFrame(tick);
    }
  }

  const statEls = document.querySelectorAll(".hero-stat-value[data-count]");
  let statsAnimated = false;
  function triggerStatsOnce() {
    if (statsAnimated) return;
    statsAnimated = true;
    statEls.forEach(animateCount);
  }

  const scene = document.getElementById("heroScene");
  if (
    scene &&
    !prefersReducedMotion &&
    window.matchMedia("(hover: hover)").matches
  ) {
    const layers = scene.querySelectorAll("[data-depth]");
    let rafId = null;
    let targetX = 0,
      targetY = 0,
      curX = 0,
      curY = 0;

    scene.addEventListener("mousemove", (e) => {
      const rect = scene.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      if (!rafId) {
        rafId = requestAnimationFrame(update);
      }
    });

    scene.addEventListener("mouseleave", () => {
      targetX = 0;
      targetY = 0;
      if (!rafId) {
        rafId = requestAnimationFrame(update);
      }
    });

    function update() {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;

      scene.style.transform = `rotateY(${curX * 6}deg) rotateX(${curY * -6}deg)`;

      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.depth) / 10;
        layer.style.transform = `translate3d(${curX * depth}px, ${curY * depth}px, 0)`;
      });

      if (
        Math.abs(curX - targetX) > 0.001 ||
        Math.abs(curY - targetY) > 0.001
      ) {
        rafId = requestAnimationFrame(update);
      } else {
        rafId = null;
      }
    }
  }

  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            if (entry.target.classList.contains("hero-left")) {
              triggerStatsOnce();
            }
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
    triggerStatsOnce();
  }

  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      if (prefersReducedMotion || btn.disabled) return;
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.className = "btn-ripple";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = e.clientX - rect.left - size / 2 + "px";
      ripple.style.top = e.clientY - rect.top - size / 2 + "px";
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });
      }
    });
  });

  /* ====================================================================
     REMOVE DUPLICATE LINES — TOOL LOGIC
     ==================================================================== */

  const textInput = document.getElementById("textInput");
  const processBtn = document.getElementById("processBtn");
  const undoBtn = document.getElementById("undoBtn");
  const redoBtn = document.getElementById("redoBtn");
  const copyBtn = document.getElementById("copyBtn");
  const downloadBtn = document.getElementById("downloadBtn");
  const clearBtn = document.getElementById("clearBtn");

  const statTotal = document.getElementById("statTotal");
  const statUnique = document.getElementById("statUnique");
  const statDuplicates = document.getElementById("statDuplicates");
  const statChars = document.getElementById("statChars");
  const statWords = document.getElementById("statWords");
  const statReadTime = document.getElementById("statReadTime");

  const trimWhitespace = document.getElementById("trimWhitespace");
  const removeEmpty = document.getElementById("removeEmpty");

  const WORDS_PER_MINUTE = 200;

  const options = {
    caseMode: "insensitive",
    keepMode: "first",
    sortMode: "none",
  };

  /* ---- Segmented control wiring ---- */
  document.querySelectorAll(".segmented").forEach((group) => {
    group.querySelectorAll(".segmented-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const optionKey = btn.dataset.option;
        group
          .querySelectorAll(".segmented-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        options[optionKey] = btn.dataset.value;
      });
    });
  });

  /* ---- Undo / Redo history ---- */
  let history = [""];
  let historyIndex = 0;
  let suppressHistory = false;

  function pushHistory(value) {
    if (suppressHistory) return;
    if (history[historyIndex] === value) return;
    history = history.slice(0, historyIndex + 1);
    history.push(value);
    historyIndex = history.length - 1;
    updateUndoRedoState();
  }

  function updateUndoRedoState() {
    undoBtn.disabled = historyIndex <= 0;
    redoBtn.disabled = historyIndex >= history.length - 1;
  }

  function undo() {
    if (historyIndex <= 0) return;
    historyIndex -= 1;
    suppressHistory = true;
    textInput.value = history[historyIndex];
    suppressHistory = false;
    updateStats();
    updateUndoRedoState();
  }

  function redo() {
    if (historyIndex >= history.length - 1) return;
    historyIndex += 1;
    suppressHistory = true;
    textInput.value = history[historyIndex];
    suppressHistory = false;
    updateStats();
    updateUndoRedoState();
  }

  let debounceTimer = null;
  textInput.addEventListener("input", () => {
    updateStats();
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => pushHistory(textInput.value), 400);
  });

  /* ---- Core dedupe logic ---- */
  function removeDuplicates() {
    const rawLines = textInput.value.split("\n");
    let lines = rawLines;

    if (removeEmpty.checked) {
      lines = lines.filter((line) => line.trim() !== "");
    }

    const seen = new Map(); // key -> index in result array
    const result = [];

    lines.forEach((line) => {
      let key = trimWhitespace.checked ? line.trim() : line;
      if (options.caseMode === "insensitive") {
        key = key.toLowerCase();
      }

      if (seen.has(key)) {
        if (options.keepMode === "last") {
          const idx = seen.get(key);
          result[idx] = line;
        }
        // 'first' mode: ignore the new duplicate, keep existing
      } else {
        seen.set(key, result.length);
        result.push(line);
      }
    });

    let finalLines = result;
    if (options.sortMode === "asc") {
      finalLines = [...result].sort((a, b) => a.localeCompare(b));
    } else if (options.sortMode === "desc") {
      finalLines = [...result].sort((a, b) => b.localeCompare(a));
    }

    const totalLines = lines.length;
    const uniqueLines = finalLines.length;
    const duplicatesRemoved = Math.max(0, totalLines - uniqueLines);

    textInput.value = finalLines.join("\n");
    updateStats({
      totalOverride: totalLines,
      uniqueOverride: uniqueLines,
      dupOverride: duplicatesRemoved,
    });
    pushHistory(textInput.value);
  }

  /* ---- Animated small counter for stat cards ---- */
  function animateStatValue(el, newValue) {
    const current = parseInt(el.textContent.replace(/[^\d-]/g, ""), 10) || 0;
    if (current === newValue || prefersReducedMotion) {
      el.textContent = newValue.toLocaleString();
      return;
    }
    const duration = 260;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.round(current + (newValue - current) * progress);
      el.textContent = value.toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }
    requestAnimationFrame(tick);
  }

  function updateStats(overrides) {
    const value = textInput.value;
    const lines = value === "" ? [] : value.split("\n");
    const totalLines =
      overrides && overrides.totalOverride !== undefined
        ? overrides.totalOverride
        : lines.length;
    const uniqueLines =
      overrides && overrides.uniqueOverride !== undefined
        ? overrides.uniqueOverride
        : new Set(
            lines.map((l) =>
              (trimWhitespace.checked ? l.trim() : l).toLowerCase(),
            ),
          ).size;
    const duplicatesRemoved =
      overrides && overrides.dupOverride !== undefined
        ? overrides.dupOverride
        : Math.max(0, totalLines - uniqueLines);

    const chars = value.length;
    const words = value.trim() === "" ? 0 : value.trim().split(/\s+/).length;
    const minutes = words / WORDS_PER_MINUTE;
    let readTime;
    if (words === 0) {
      readTime = "0s";
    } else if (minutes < 1) {
      readTime = Math.max(1, Math.round(minutes * 60)) + "s";
    } else {
      readTime = Math.round(minutes) + "m";
    }

    animateStatValue(statTotal, totalLines);
    animateStatValue(statUnique, uniqueLines);
    animateStatValue(statDuplicates, duplicatesRemoved);
    animateStatValue(statChars, chars);
    animateStatValue(statWords, words);
    statReadTime.textContent = readTime;
  }

  /* ---- Copy / Download / Clear ---- */
  async function copyResult() {
    if (textInput.value === "") return;
    try {
      await navigator.clipboard.writeText(textInput.value);
      flashButton(copyBtn, "Copied!");
    } catch (err) {
      textInput.select();
      document.execCommand("copy");
      flashButton(copyBtn, "Copied!");
    }
  }

  function flashButton(btn, message) {
    const original = btn.textContent;
    btn.textContent = message;
    setTimeout(() => {
      btn.textContent = original;
    }, 1500);
  }

  function downloadResult() {
    if (textInput.value === "") return;
    const blob = new Blob([textInput.value], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "deduplicated-lines.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    flashButton(downloadBtn, "Downloaded!");
  }

  function clearAll() {
    textInput.value = "";
    updateStats();
    pushHistory("");
    textInput.focus();
  }

  processBtn.addEventListener("click", removeDuplicates);
  undoBtn.addEventListener("click", undo);
  redoBtn.addEventListener("click", redo);
  copyBtn.addEventListener("click", copyResult);
  downloadBtn.addEventListener("click", downloadResult);
  clearBtn.addEventListener("click", clearAll);

  trimWhitespace.addEventListener("change", updateStats);
  removeEmpty.addEventListener("change", updateStats);

  /* ---- Keyboard shortcuts ---- */
  document.addEventListener("keydown", (e) => {
    const ctrlOrCmd = e.ctrlKey || e.metaKey;

    if (ctrlOrCmd && e.key.toLowerCase() === "k") {
      e.preventDefault();
      searchOverlay.classList.contains("open") ? closeSearch() : openSearch();
      return;
    }

    if (e.key === "Escape") {
      if (searchOverlay.classList.contains("open")) closeSearch();
      if (mobileDrawer.classList.contains("open")) closeDrawer();
      return;
    }

    if (
      searchOverlay.classList.contains("open") &&
      (e.key === "ArrowDown" || e.key === "ArrowUp")
    ) {
      e.preventDefault();
      const items = Array.from(
        searchResults.querySelectorAll(".search-result-item"),
      );
      if (items.length === 0) return;
      items.forEach((i) => i.classList.remove("active"));
      if (e.key === "ArrowDown")
        activeResultIndex = (activeResultIndex + 1) % items.length;
      else
        activeResultIndex =
          (activeResultIndex - 1 + items.length) % items.length;
      items[activeResultIndex].classList.add("active");
      items[activeResultIndex].scrollIntoView({ block: "nearest" });
      return;
    }
    if (searchOverlay.classList.contains("open") && e.key === "Enter") {
      const items = Array.from(
        searchResults.querySelectorAll(".search-result-item"),
      );
      if (activeResultIndex >= 0 && items[activeResultIndex]) {
        window.location.href = items[activeResultIndex].getAttribute("href");
      }
      return;
    }
    if (searchOverlay.classList.contains("open")) return;

    /* Tool shortcuts */
    if (ctrlOrCmd && e.key.toLowerCase() === "c") {
      const hasSelection =
        document.activeElement === textInput &&
        textInput.selectionStart !== textInput.selectionEnd;
      if (!hasSelection) {
        e.preventDefault();
        copyResult();
      }
      return;
    }
    if (ctrlOrCmd && e.key.toLowerCase() === "l") {
      e.preventDefault();
      clearAll();
      return;
    }
    if (ctrlOrCmd && e.shiftKey && e.key.toLowerCase() === "z") {
      e.preventDefault();
      redo();
      return;
    }
    if (ctrlOrCmd && e.key.toLowerCase() === "z") {
      e.preventDefault();
      undo();
      return;
    }
    if (ctrlOrCmd && e.key.toLowerCase() === "s") {
      e.preventDefault();
      downloadResult();
      return;
    }
  });

  /* ---- Init ---- */
  updateStats();
  updateUndoRedoState();
})();
