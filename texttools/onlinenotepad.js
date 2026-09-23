"use strict";

/* ====================================================================
   HUZIHUB — ONLINE NOTEPAD SCRIPT
   ==================================================================== */

(function () {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  /* ====================================================================
     NAVBAR / MOBILE DRAWER / SEARCH (shared HuziHub components)
     ==================================================================== */
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

  document.querySelectorAll(".dropdown-trigger").forEach((trigger) => {
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
      title: "Savings&Goal Calculator",
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
      url: "/image&pdf/pdftowordconverter.html",
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
      tag: "dev",
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
      url: "/developertools/markdownhtml.html",
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
    },
  ];

  let activeResultIndex = -1;

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

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
    if (isNaN(target) || target === 0) {
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
     TOAST NOTIFICATIONS
     ==================================================================== */
  const toastContainer = document.getElementById("toastContainer");
  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 2500);
  }

  /* ====================================================================
     CONFIRMATION MODAL
     ==================================================================== */
  const modalOverlay = document.getElementById("modalOverlay");
  const modalTitle = document.getElementById("modalTitle");
  const modalMessage = document.getElementById("modalMessage");
  const modalConfirmBtn = document.getElementById("modalConfirmBtn");
  const modalCancelBtn = document.getElementById("modalCancelBtn");

  function showConfirm(title, message, confirmLabel, onConfirm) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modalConfirmBtn.textContent = confirmLabel;
    modalOverlay.hidden = false;

    function cleanup() {
      modalOverlay.hidden = true;
      modalConfirmBtn.removeEventListener("click", confirmHandler);
      modalCancelBtn.removeEventListener("click", cancelHandler);
    }
    function confirmHandler() {
      cleanup();
      onConfirm();
    }
    function cancelHandler() {
      cleanup();
    }

    modalConfirmBtn.addEventListener("click", confirmHandler);
    modalCancelBtn.addEventListener("click", cancelHandler);
    modalConfirmBtn.focus();
  }
  function closeModal() {
    modalOverlay.hidden = true;
  }

  /* ====================================================================
     ONLINE NOTEPAD — CORE APPLICATION
     ==================================================================== */

  const noteTitle = document.getElementById("noteTitle");
  const noteEditor = document.getElementById("noteEditor");
  const saveStatus = document.getElementById("saveStatus");

  const newNoteBtn = document.getElementById("newNoteBtn");
  const importBtn = document.getElementById("importBtn");
  const importFileInput = document.getElementById("importFileInput");
  const downloadBtn = document.getElementById("downloadBtn");
  const printBtn = document.getElementById("printBtn");
  const copyBtn = document.getElementById("copyBtn");
  const selectAllBtn = document.getElementById("selectAllBtn");
  const findBtn = document.getElementById("findBtn");
  const fullscreenBtn = document.getElementById("fullscreenBtn");
  const clearBtn = document.getElementById("clearBtn");

  const findBar = document.getElementById("findBar");
  const findInput = document.getElementById("findInput");
  const findCount = document.getElementById("findCount");
  const findPrevBtn = document.getElementById("findPrevBtn");
  const findNextBtn = document.getElementById("findNextBtn");
  const findCloseBtn = document.getElementById("findCloseBtn");

  const statWords = document.getElementById("statWords");
  const statChars = document.getElementById("statChars");
  const statCharsNoSpaces = document.getElementById("statCharsNoSpaces");
  const statLines = document.getElementById("statLines");
  const statParagraphs = document.getElementById("statParagraphs");
  const statReadTime = document.getElementById("statReadTime");

  const STORAGE_KEY = "huzihub_notepad_note_v1";
  const WORDS_PER_MINUTE = 200;
  const AUTOSAVE_DELAY = 600;

  let saveTimer = null;
  let statsTimer = null;

  /* ---------- Storage ---------- */
  function storageAvailable() {
    try {
      const testKey = "__huzihub_test__";
      window.localStorage.setItem(testKey, "1");
      window.localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
  const hasStorage = storageAvailable();

  function loadSavedNote() {
    if (!hasStorage) return null;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  function saveNote() {
    if (!hasStorage) {
      saveStatus.textContent = "Storage unavailable";
      saveStatus.classList.remove("is-saving");
      return;
    }
    try {
      const data = {
        title: noteTitle.value,
        content: noteEditor.value,
        updatedAt: Date.now(),
      };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      updateSaveStatus(false);
    } catch (e) {
      saveStatus.textContent = "Storage full — could not save";
      saveStatus.classList.remove("is-saving");
    }
  }

  function updateSaveStatus(isSaving) {
    if (isSaving) {
      saveStatus.textContent = "Saving...";
      saveStatus.classList.add("is-saving");
    } else {
      saveStatus.textContent = "Saved locally";
      saveStatus.classList.remove("is-saving");
    }
  }

  function scheduleAutoSave() {
    updateSaveStatus(true);
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveNote, AUTOSAVE_DELAY);
  }

  /* ---------- Statistics ---------- */
  function updateStatistics() {
    const text = noteEditor.value;
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, "").length;
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const lines = text === "" ? 0 : text.split("\n").length;
    const paragraphs =
      text.trim() === ""
        ? 0
        : text.split(/\n\s*\n/).filter((p) => p.trim() !== "").length ||
          (text.trim() !== "" ? 1 : 0);
    const minutes = words / WORDS_PER_MINUTE;
    let readTime;
    if (words === 0) {
      readTime = "0s";
    } else if (minutes < 1) {
      readTime = Math.max(1, Math.round(minutes * 60)) + "s";
    } else {
      readTime = Math.round(minutes) + "m";
    }

    statWords.textContent = words.toLocaleString();
    statChars.textContent = chars.toLocaleString();
    statCharsNoSpaces.textContent = charsNoSpaces.toLocaleString();
    statLines.textContent = lines.toLocaleString();
    statParagraphs.textContent = paragraphs.toLocaleString();
    statReadTime.textContent = readTime;
  }

  function scheduleStatsUpdate() {
    clearTimeout(statsTimer);
    statsTimer = setTimeout(updateStatistics, 80);
  }

  /* ---------- Undo / Redo (editor content) ---------- */
  let history = [""];
  let historyIndex = 0;
  let suppressHistory = false;
  let historyTimer = null;

  function pushHistory(value) {
    if (suppressHistory) return;
    if (history[historyIndex] === value) return;
    history = history.slice(0, historyIndex + 1);
    history.push(value);
    historyIndex = history.length - 1;
  }

  function undo() {
    if (historyIndex <= 0) return;
    historyIndex -= 1;
    suppressHistory = true;
    noteEditor.value = history[historyIndex];
    suppressHistory = false;
    updateStatistics();
    scheduleAutoSave();
  }

  function redo() {
    if (historyIndex >= history.length - 1) return;
    historyIndex += 1;
    suppressHistory = true;
    noteEditor.value = history[historyIndex];
    suppressHistory = false;
    updateStatistics();
    scheduleAutoSave();
  }

  /* ---------- Editor events ---------- */
  noteEditor.addEventListener("input", () => {
    scheduleStatsUpdate();
    scheduleAutoSave();
    clearTimeout(historyTimer);
    historyTimer = setTimeout(() => pushHistory(noteEditor.value), 400);
  });

  noteTitle.addEventListener("input", scheduleAutoSave);

  /* ---------- Load saved note on start ---------- */
  function initializeEditor() {
    const saved = loadSavedNote();
    if (saved) {
      noteTitle.value = saved.title || "";
      noteEditor.value = saved.content || "";
    }
    history = [noteEditor.value];
    historyIndex = 0;
    updateStatistics();
    updateSaveStatus(false);
  }
  initializeEditor();

  /* ---------- New Note ---------- */
  function performNewNote() {
    noteTitle.value = "";
    noteEditor.value = "";
    history = [""];
    historyIndex = 0;
    updateStatistics();
    saveNote();
    showToast("New note created");
    noteEditor.focus();
  }
  newNoteBtn.addEventListener("click", () => {
    if (noteEditor.value.trim() !== "") {
      showConfirm(
        "Start a new note?",
        "Your current note is already saved locally.",
        "New Note",
        performNewNote,
      );
    } else {
      performNewNote();
    }
  });

  /* ---------- Clear ---------- */
  function performClear() {
    noteEditor.value = "";
    pushHistory("");
    updateStatistics();
    saveNote();
    showToast("Note cleared");
    noteEditor.focus();
  }
  clearBtn.addEventListener("click", () => {
    if (noteEditor.value.trim() !== "") {
      showConfirm(
        "Clear this note?",
        "This will remove the note content. It is currently saved locally.",
        "Clear",
        performClear,
      );
    } else {
      performClear();
    }
  });

  /* ---------- Copy / Select All ---------- */
  async function copyNote() {
    if (noteEditor.value === "") {
      showToast("Nothing to copy");
      return;
    }
    try {
      await navigator.clipboard.writeText(noteEditor.value);
      showToast("Copied successfully");
    } catch (err) {
      try {
        noteEditor.select();
        document.execCommand("copy");
        showToast("Copied successfully");
      } catch (err2) {
        showToast("Clipboard unavailable");
      }
    }
  }
  copyBtn.addEventListener("click", copyNote);
  selectAllBtn.addEventListener("click", () => {
    noteEditor.focus();
    noteEditor.select();
  });

  /* ---------- Download ---------- */
  function sanitizeFilename(name) {
    const trimmed = (name || "").trim();
    if (trimmed === "") return "huzihub-note";
    return trimmed.replace(/[\\/:*?"<>|]+/g, "-").slice(0, 80);
  }
  function downloadNote() {
    try {
      const filename = sanitizeFilename(noteTitle.value) + ".txt";
      const blob = new Blob([noteEditor.value], {
        type: "text/plain;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("Note downloaded");
    } catch (err) {
      showToast("Download failed");
    }
  }
  downloadBtn.addEventListener("click", downloadNote);

  /* ---------- Import ---------- */
  const MAX_IMPORT_SIZE = 3 * 1024 * 1024; // 3MB
  function handleImportedFile(file) {
    if (!file) {
      return;
    }
    if (!/\.txt$/i.test(file.name) && file.type !== "text/plain") {
      showToast("Error reading file — please choose a .txt file");
      return;
    }
    if (file.size > MAX_IMPORT_SIZE) {
      showToast("File too large to import");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const text = typeof reader.result === "string" ? reader.result : "";
      noteEditor.value = text;
      const baseName = file.name.replace(/\.txt$/i, "");
      if (noteTitle.value.trim() === "") {
        noteTitle.value = baseName;
      }
      pushHistory(text);
      updateStatistics();
      saveNote();
      showToast("Note imported");
    };
    reader.onerror = () => {
      showToast("Error reading file");
    };
    reader.readAsText(file);
  }
  importBtn.addEventListener("click", () => importFileInput.click());
  importFileInput.addEventListener("change", () => {
    const file = importFileInput.files && importFileInput.files[0];
    handleImportedFile(file);
    importFileInput.value = "";
  });

  /* ---------- Print ---------- */
  printBtn.addEventListener("click", () => {
    window.print();
  });

  /* ---------- Fullscreen ---------- */
  let isFullscreen = false;
  async function enterFullscreen() {
    document.body.classList.add("notepad-fullscreen-active");
    if (document.documentElement.requestFullscreen) {
      try {
        await document.documentElement.requestFullscreen();
      } catch (e) {
        /* ignore unsupported */
      }
    }
    isFullscreen = true;
    fullscreenBtn.querySelector("span").textContent = "Exit Fullscreen";
    showToast("Fullscreen enabled");
    noteEditor.focus();
  }
  async function exitFullscreen() {
    document.body.classList.remove("notepad-fullscreen-active");
    if (document.fullscreenElement && document.exitFullscreen) {
      try {
        await document.exitFullscreen();
      } catch (e) {
        /* ignore */
      }
    }
    isFullscreen = false;
    fullscreenBtn.querySelector("span").textContent = "Fullscreen";
    showToast("Fullscreen disabled");
  }
  function toggleFullscreen() {
    isFullscreen ? exitFullscreen() : enterFullscreen();
  }
  fullscreenBtn.addEventListener("click", toggleFullscreen);
  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement && isFullscreen) {
      document.body.classList.remove("notepad-fullscreen-active");
      isFullscreen = false;
      fullscreenBtn.querySelector("span").textContent = "Fullscreen";
    }
  });

  /* ---------- Find in Note ---------- */
  let findMatches = [];
  let findIndex = -1;

  function getMatches(text, query) {
    const positions = [];
    if (!query) return positions;
    const hay = text.toLowerCase();
    const needle = query.toLowerCase();
    let idx = hay.indexOf(needle);
    while (idx !== -1) {
      positions.push(idx);
      idx = hay.indexOf(needle, idx + needle.length);
    }
    return positions;
  }

  function scrollTextareaToPosition(ta, pos) {
    const before = ta.value.substring(0, pos);
    const lineNumber = before.split("\n").length - 1;
    const lineHeight = parseFloat(getComputedStyle(ta).lineHeight) || 24;
    ta.scrollTop = Math.max(0, lineNumber * lineHeight - ta.clientHeight / 2);
  }

  function updateFindUI() {
    findCount.textContent = findMatches.length
      ? `${findIndex + 1} / ${findMatches.length}`
      : "0 / 0";
  }

  function selectCurrentMatch() {
    if (findIndex === -1 || findMatches.length === 0) return;
    const start = findMatches[findIndex];
    const end = start + findInput.value.length;
    noteEditor.focus();
    noteEditor.setSelectionRange(start, end);
    scrollTextareaToPosition(noteEditor, start);
  }

  function runFind() {
    const query = findInput.value;
    findMatches = getMatches(noteEditor.value, query);
    findIndex = findMatches.length ? 0 : -1;
    updateFindUI();
    selectCurrentMatch();
  }

  function findNext() {
    if (findMatches.length === 0) return;
    findIndex = (findIndex + 1) % findMatches.length;
    updateFindUI();
    selectCurrentMatch();
  }
  function findPrevious() {
    if (findMatches.length === 0) return;
    findIndex = (findIndex - 1 + findMatches.length) % findMatches.length;
    updateFindUI();
    selectCurrentMatch();
  }

  function openFind() {
    findBar.hidden = false;
    findBtn.setAttribute("aria-expanded", "true");
    findInput.focus();
    if (findInput.value) {
      runFind();
    }
  }
  function closeFind() {
    findBar.hidden = true;
    findBtn.setAttribute("aria-expanded", "false");
    findMatches = [];
    findIndex = -1;
    updateFindUI();
  }

  findBtn.addEventListener("click", () => {
    findBar.hidden ? openFind() : closeFind();
  });
  findInput.addEventListener("input", runFind);
  findNextBtn.addEventListener("click", findNext);
  findPrevBtn.addEventListener("click", findPrevious);
  findCloseBtn.addEventListener("click", closeFind);
  findInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.shiftKey ? findPrevious() : findNext();
    }
  });

  /* ---------- Keyboard Shortcuts ---------- */
  document.addEventListener("keydown", (e) => {
    const ctrlOrCmd = e.ctrlKey || e.metaKey;

    if (ctrlOrCmd && e.key.toLowerCase() === "k") {
      e.preventDefault();
      searchOverlay.classList.contains("open") ? closeSearch() : openSearch();
      return;
    }

    if (e.key === "Escape") {
      if (searchOverlay.classList.contains("open")) {
        closeSearch();
        return;
      }
      if (!modalOverlay.hidden) {
        closeModal();
        return;
      }
      if (!findBar.hidden) {
        closeFind();
        return;
      }
      if (isFullscreen) {
        exitFullscreen();
        return;
      }
      if (mobileDrawer.classList.contains("open")) {
        closeDrawer();
        return;
      }
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

    if (ctrlOrCmd && e.key.toLowerCase() === "s") {
      e.preventDefault();
      saveNote();
      showToast("Note saved");
      return;
    }
    if (ctrlOrCmd && e.key.toLowerCase() === "n") {
      e.preventDefault();
      newNoteBtn.click();
      return;
    }
    if (ctrlOrCmd && e.key.toLowerCase() === "f") {
      e.preventDefault();
      openFind();
      return;
    }
    if (ctrlOrCmd && e.shiftKey && e.key.toLowerCase() === "z") {
      e.preventDefault();
      redo();
      return;
    }
    if (
      ctrlOrCmd &&
      e.key.toLowerCase() === "z" &&
      document.activeElement === noteEditor
    ) {
      e.preventDefault();
      undo();
      return;
    }
    /* Ctrl+A and Ctrl+C are left to native browser/textarea behavior */
  });

  /* ---------- Warn before leaving with unsaved timer pending ---------- */
  window.addEventListener("beforeunload", () => {
    if (saveTimer) {
      saveNote();
    }
  });
})();
