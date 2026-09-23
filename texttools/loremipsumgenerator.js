"use strict";

/* ====================================================================
   HUZIKIT — LOREM IPSUM GENERATOR SCRIPT
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

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      searchOverlay.classList.contains("open") ? closeSearch() : openSearch();
    }
    if (e.key === "Escape") {
      if (searchOverlay.classList.contains("open")) closeSearch();
      if (mobileDrawer.classList.contains("open")) closeDrawer();
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
    }
    if (searchOverlay.classList.contains("open") && e.key === "Enter") {
      const items = Array.from(
        searchResults.querySelectorAll(".search-result-item"),
      );
      if (activeResultIndex >= 0 && items[activeResultIndex]) {
        window.location.href = items[activeResultIndex].getAttribute("href");
      }
    }
  });

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
     LOREM IPSUM GENERATOR — TOOL LOGIC
     ==================================================================== */

  const LOREM_WORDS = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
    "enim",
    "ad",
    "minim",
    "veniam",
    "quis",
    "nostrud",
    "exercitation",
    "ullamco",
    "laboris",
    "nisi",
    "aliquip",
    "ex",
    "ea",
    "commodo",
    "consequat",
    "duis",
    "aute",
    "irure",
    "in",
    "reprehenderit",
    "voluptate",
    "velit",
    "esse",
    "cillum",
    "fugiat",
    "nulla",
    "pariatur",
    "excepteur",
    "sint",
    "occaecat",
    "cupidatat",
    "non",
    "proident",
    "sunt",
    "culpa",
    "qui",
    "officia",
    "deserunt",
    "mollit",
    "anim",
    "id",
    "est",
    "laborum",
    "at",
    "vero",
    "eos",
    "accusamus",
    "iusto",
    "odio",
    "dignissimos",
    "ducimus",
    "blanditiis",
    "praesentium",
    "voluptatum",
    "deleniti",
    "atque",
    "corrupti",
    "quos",
    "quas",
    "molestias",
    "excepturi",
    "sint",
    "occaecati",
    "cupiditate",
    "similique",
    "rerum",
    "facilis",
    "distinctio",
    "nam",
    "libero",
    "tempore",
  ];

  const CLASSIC_OPENER_WORDS = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
  ];

  const textOutput = document.getElementById("textOutput");
  const amountInput = document.getElementById("amountInput");
  const startLorem = document.getElementById("startLorem");
  const randomStart = document.getElementById("randomStart");
  const generateBtn = document.getElementById("generateBtn");
  const copyBtn = document.getElementById("copyBtn");
  const downloadTxtBtn = document.getElementById("downloadTxtBtn");
  const downloadHtmlBtn = document.getElementById("downloadHtmlBtn");
  const clearBtn = document.getElementById("clearBtn");

  const statParagraphs = document.getElementById("statParagraphs");
  const statSentences = document.getElementById("statSentences");
  const statWords = document.getElementById("statWords");
  const statChars = document.getElementById("statChars");
  const statReadTime = document.getElementById("statReadTime");

  const WORDS_PER_MINUTE = 200;

  const state = { unit: "paragraphs", format: "plain" };

  document.querySelectorAll(".segmented").forEach((group) => {
    group.querySelectorAll(".segmented-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const optionKey = btn.dataset.option;
        group
          .querySelectorAll(".segmented-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state[optionKey] = btn.dataset.value;
        if (textOutput.dataset.hasContent === "true") {
          generate();
        }
      });
    });
  });

  startLorem.addEventListener("change", () => {
    if (startLorem.checked && randomStart.checked) {
      randomStart.checked = false;
    }
    if (textOutput.dataset.hasContent === "true") {
      generate();
    }
  });
  randomStart.addEventListener("change", () => {
    if (randomStart.checked && startLorem.checked) {
      startLorem.checked = false;
    }
    if (textOutput.dataset.hasContent === "true") {
      generate();
    }
  });
  amountInput.addEventListener("change", () => {
    let val = parseInt(amountInput.value, 10);
    if (isNaN(val) || val < 1) val = 1;
    if (val > 200) val = 200;
    amountInput.value = val;
    if (textOutput.dataset.hasContent === "true") {
      generate();
    }
  });

  function randomWord() {
    return LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)];
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  function buildSentence(wordCount, forceOpener) {
    let words;
    if (forceOpener) {
      words = CLASSIC_OPENER_WORDS.slice(
        0,
        Math.min(wordCount, CLASSIC_OPENER_WORDS.length),
      );
      while (words.length < wordCount) {
        words.push(randomWord());
      }
    } else {
      words = [];
      for (let i = 0; i < wordCount; i++) {
        words.push(randomWord());
      }
    }

    let sentence = words.join(" ");

    // Insert a comma partway through longer sentences for natural rhythm
    if (wordCount > 8) {
      const commaPos = randomInt(3, wordCount - 3);
      const parts = sentence.split(" ");
      parts[commaPos - 1] = parts[commaPos - 1] + ",";
      sentence = parts.join(" ");
    }

    sentence = capitalize(sentence) + ".";
    return sentence;
  }

  function buildParagraph(sentenceCount, forceOpener) {
    const sentences = [];
    for (let i = 0; i < sentenceCount; i++) {
      const wordCount = randomInt(7, 16);
      sentences.push(buildSentence(wordCount, forceOpener && i === 0));
    }
    return sentences.join(" ");
  }

  function buildParagraphsArray() {
    const amount = Math.max(
      1,
      Math.min(200, parseInt(amountInput.value, 10) || 1),
    );
    const useOpener = startLorem.checked && !randomStart.checked;
    const paragraphsArr = [];

    if (state.unit === "paragraphs") {
      for (let p = 0; p < amount; p++) {
        const sentenceCount = randomInt(3, 6);
        paragraphsArr.push(buildParagraph(sentenceCount, useOpener && p === 0));
      }
    } else if (state.unit === "sentences") {
      const sentences = [];
      for (let s = 0; s < amount; s++) {
        const wordCount = randomInt(7, 16);
        sentences.push(buildSentence(wordCount, useOpener && s === 0));
      }
      paragraphsArr.push(sentences.join(" "));
    } else if (state.unit === "words") {
      let words;
      if (useOpener) {
        words = CLASSIC_OPENER_WORDS.slice(
          0,
          Math.min(amount, CLASSIC_OPENER_WORDS.length),
        );
        while (words.length < amount) {
          words.push(randomWord());
        }
      } else {
        words = [];
        for (let w = 0; w < amount; w++) {
          words.push(randomWord());
        }
      }
      let text = words.join(" ");
      text = capitalize(text) + ".";
      paragraphsArr.push(text);
    }

    return paragraphsArr;
  }

  function generate() {
    const paragraphsArr = buildParagraphsArray();
    const plainText = paragraphsArr.join("\n\n");
    const htmlText = paragraphsArr.map((p) => `<p>${p}</p>`).join("\n");

    const displayText = state.format === "html" ? htmlText : plainText;
    textOutput.value = displayText;
    textOutput.dataset.hasContent = "true";

    updateStats(paragraphsArr, plainText, displayText);
  }

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

  function updateStats(paragraphsArr, plainText, displayText) {
    const paragraphCount = paragraphsArr.length;
    const sentenceMatches = plainText.match(/[.!?]+/g);
    const sentenceCount = sentenceMatches ? sentenceMatches.length : 0;
    const wordCount =
      plainText.trim() === "" ? 0 : plainText.trim().split(/\s+/).length;
    const charCount = displayText.length;
    const minutes = wordCount / WORDS_PER_MINUTE;
    let readTime;
    if (wordCount === 0) {
      readTime = "0s";
    } else if (minutes < 1) {
      readTime = Math.max(1, Math.round(minutes * 60)) + "s";
    } else {
      readTime = Math.round(minutes) + "m";
    }

    animateStatValue(statParagraphs, paragraphCount);
    animateStatValue(statSentences, sentenceCount);
    animateStatValue(statWords, wordCount);
    animateStatValue(statChars, charCount);
    statReadTime.textContent = readTime;
  }

  function resetStats() {
    [statParagraphs, statSentences, statWords, statChars].forEach(
      (el) => (el.textContent = "0"),
    );
    statReadTime.textContent = "0s";
  }

  function flashButton(btn, message) {
    const original = btn.textContent;
    btn.textContent = message;
    setTimeout(() => {
      btn.textContent = original;
    }, 1500);
  }

  async function copyResult() {
    if (textOutput.value === "") return;
    try {
      await navigator.clipboard.writeText(textOutput.value);
      flashButton(copyBtn, "Copied!");
    } catch (err) {
      textOutput.select();
      document.execCommand("copy");
      flashButton(copyBtn, "Copied!");
    }
  }

  function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType + ";charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function downloadTxt() {
    if (textOutput.value === "") return;
    downloadFile(textOutput.value, "lorem-ipsum.txt", "text/plain");
    flashButton(downloadTxtBtn, "Downloaded!");
  }

  function downloadHtml() {
    if (textOutput.value === "") return;
    const paragraphsArr = buildParagraphsArrayFromCurrentOutput();
    const htmlDoc = `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<title>Lorem Ipsum</title>\n</head>\n<body>\n${paragraphsArr}\n</body>\n</html>`;
    downloadFile(htmlDoc, "lorem-ipsum.html", "text/html");
    flashButton(downloadHtmlBtn, "Downloaded!");
  }

  function buildParagraphsArrayFromCurrentOutput() {
    if (state.format === "html") {
      return textOutput.value;
    }
    return textOutput.value
      .split("\n\n")
      .map((p) => `<p>${p}</p>`)
      .join("\n");
  }

  function clearAll() {
    textOutput.value = "";
    textOutput.dataset.hasContent = "false";
    resetStats();
  }

  generateBtn.addEventListener("click", generate);
  copyBtn.addEventListener("click", copyResult);
  downloadTxtBtn.addEventListener("click", downloadTxt);
  downloadHtmlBtn.addEventListener("click", downloadHtml);
  clearBtn.addEventListener("click", clearAll);

  /* ---- Initial generation for live preview ---- */
  generate();
})();
