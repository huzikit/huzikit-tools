/**
 * HUZIKIT — WORD COUNTER MASTER ENGINE
 * Brand: Huzikit (https://huzikit.com)
 * Pure Vanilla JavaScript — Production Ready & High Performance
 */

(function () {
  "use strict";

  /* --------------------------------------------------------------------------
     1. LOCKED GLOBAL 30 TOOLS DATASET
     -------------------------------------------------------------------------- */
  const HUZIKIT_TOOLS = [
    // TEXT TOOLS
    {
      name: "Word Counter",
      url: "/texttools/word-counter.html",
      category: "Text Tools",
      keywords: "words characters sentences paragraphs reading time",
    },
    {
      name: "Character Counter",
      url: "/texttools/character-counter.html",
      category: "Text Tools",
      keywords: "characters letters length twitter limits",
    },
    {
      name: "Case Converter",
      url: "/texttools/case-converter.html",
      category: "Text Tools",
      keywords: "uppercase lowercase titlecase sentencecase capital",
    },
    {
      name: "Remove Duplicate Lines",
      url: "/texttools/remove-duplicate-lines.html",
      category: "Text Tools",
      keywords: "dedupe lines unique list cleaner",
    },
    {
      name: "Lorem Ipsum Generator",
      url: "/texttools/loremipsumgenerator.html",
      category: "Text Tools",
      keywords: "dummy text placeholder generator filler",
    },
    {
      name: "Password Generator",
      url: "/texttools/passwordgenerator.html",
      category: "Text Tools",
      keywords: "secure random password generator key",
    },
    {
      name: "Text Reverser",
      url: "/texttools/text-reverser.html",
      category: "Text Tools",
      keywords: "reverse flip backwards invert text",
    },
    {
      name: "Online Notepad",
      url: "/texttools/onlinenotepad.html",
      category: "Text Tools",
      keywords: "notes scratchpad online editor write",
    },

    // CALCULATORS
    {
      name: "Age Calculator",
      url: "/calculator/agecalculator.html",
      category: "Calculators",
      keywords: "age birthdate years months days birthday",
    },
    {
      name: "BMI Calculator",
      url: "/calculator/bmi-calculator.html",
      category: "Calculators",
      keywords: "body mass index health weight fitness",
    },
    {
      name: "Percentage Calculator",
      url: "/calculator/percentage-calculator.html",
      category: "Calculators",
      keywords: "percentage percent discount math ratio",
    },
    {
      name: "Calorie Calculator",
      url: "/calculator/Calorie-Calculator.html",
      category: "Calculators",
      keywords: "calories diet bmr tdee nutrition weight",
    },
    {
      name: "Discount Calculator",
      url: "/calculator/discount-calculator.html",
      category: "Calculators",
      keywords: "discount sale savings price off shopping",
    },
    {
      name: "Savings & Goal Calculator",
      url: "/calculator/saving&goalcalculator.html",
      category: "Calculators",
      keywords: "finance savings money target goal investment",
    },
    {
      name: "Tip Calculator",
      url: "/calculator/tip-calculator.html",
      category: "Calculators",
      keywords: "tip bill split restaurant gratuity",
    },
    {
      name: "GPA Calculator",
      url: "/calculator/gpa-calculator.html",
      category: "Calculators",
      keywords: "grade point average college school academic",
    },

    // IMAGE & PDF
    {
      name: "Image Compressor",
      url: "/image&pdf/image-compressor.html",
      category: "Image & PDF",
      keywords: "compress reduce file size photo optimize",
    },
    {
      name: "Image Resizer",
      url: "/image&pdf/image-resizer.html",
      category: "Image & PDF",
      keywords: "resize scale dimensions width height pixels",
    },
    {
      name: "PDF to Word",
      url: "/image&pdf/pdftowordconverter.html",
      category: "Image & PDF",
      keywords: "pdf word docx convert document",
    },
    {
      name: "JPG to PNG",
      url: "/image&pdf/jpg-to-png.html",
      category: "Image & PDF",
      keywords: "convert image format transparent png jpeg",
    },
    {
      name: "Color Picker / HEX",
      url: "/image&pdf/colorpicker.html",
      category: "Image & PDF",
      keywords: "color picker hex rgb hsl palette",
    },
    {
      name: "QR Code Generator",
      url: "/image&pdf/QRGenrator.html",
      category: "Image & PDF",
      keywords: "qr code generator barcode link",
    },

    // DEVELOPER
    {
      name: "JSON Formatter",
      url: "/developertools/JSONFORMATTER.html",
      category: "Developer",
      keywords: "json format beautify validate minify lint",
    },
    {
      name: "Base64 Encoder/Decoder",
      url: "/developertools/base64encoderdecoder.html",
      category: "Developer",
      keywords: "base64 encode decode binary string",
    },
    {
      name: "URL Encoder/Decoder",
      url: "/developertools/urlencoderdecoder.html",
      category: "Developer",
      keywords: "url encode decode percent encoding uri",
    },
    {
      name: "Meta Tag Generator",
      url: "/developertools/meta-tag-generator.html",
      category: "Developer",
      keywords: "seo meta tags open graph twitter title",
    },
    {
      name: "Regex Tester",
      url: "/developertools/regextester.html",
      category: "Developer",
      keywords: "regex regular expression pattern match test",
    },
    {
      name: "Markdown to HTML",
      url: "/developertools/markdownhtml.html",
      category: "Developer",
      keywords: "markdown html converter preview md",
    },
    {
      name: "CSS Minifier",
      url: "/developertools/cssminifier.html",
      category: "Developer",
      keywords: "css minify compress stylesheet code",
    },
    {
      name: "Unix Timestamp",
      url: "/developertools/unixtimestamp.html",
      category: "Developer",
      keywords: "unix timestamp epoch date time converter",
    },
  ];

  /* --------------------------------------------------------------------------
     2. SAMPLE TEXTS DATASET
     -------------------------------------------------------------------------- */
  const SAMPLE_TEXTS = {
    blog: `Artificial intelligence is fundamentally reshaping how modern creators compose, edit, and refine digital prose. When writers approach drafting with structured clarity, reader engagement accelerates naturally. High-performing essays maintain dynamic rhythm: balancing brisk, punchy sentences with thoughtful, descriptive paragraphs. By monitoring metrics like reading time, keyword density, and lexical variety, digital publishers ensure their ideas resonate across diverse global audiences without sacrificing authenticity.`,
    academic: `The empirical evaluation of linguistic complexity requires a rigorous differentiation between lexical diversity, syntactic depth, and orthographic variance. Contemporary statistical models corroborate that cognitive readability correlates significantly with word frequency distributions and mean sentence length. Furthermore, multilingual corpora demonstrate that cross-linguistic segmentation algorithms must accommodate non-concatenative morphology to mitigate analytical bias in computational textual analysis.`,
    business: `Huzikit delivers enterprise-grade text optimization utilities designed for product teams, marketing strategists, and editorial leaders. Our modular analytics suite accelerates content velocity, verifies brand consistency, and streamlines workflow handoffs. By eliminating manual editorial bottlenecks, organizations empower knowledge workers to craft high-conversion communications with verifiable precision and complete data confidentiality.`,
    product: `Engineered from aerospace-grade anodized aluminum, the Studio Pro Keyboard redefines tactile typing performance. Each hot-swappable mechanical switch is lubricated for whisper-quiet acoustics, while per-key RGB backlighting illuminates your workspace with soothing gradients. Compatible with macOS, Windows, and Linux, it features 80 hours of continuous wireless battery endurance on a single high-speed USB-C charge.`,
    story: `The ancient lighthouse stood resilient against the tempestuous winter sea, its beam cutting through dense violet fog. Inside the tower, rain drummed against the salt-streaked glass as Samuel adjusted the brass gears. Every revolution of the prism cast sweeping arcs across churning waves, guiding forgotten sailors toward the safety of the harbor before the tide turned violent.`,
    technical: `When implementing high-throughput stream processing pipelines, memory allocation and garbage collection pauses become paramount bottlenecks. Utilizing lock-free ring buffers and off-heap memory structures prevents latency spikes under saturated network ingress. Furthermore, asynchronous non-blocking event loops guarantee deterministic execution benchmarks across containerized microservices architectures.`,
  };

  /* Common English Stop Words for Frequency Filtering */
  const STOP_WORDS = new Set([
    "a",
    "about",
    "above",
    "after",
    "again",
    "against",
    "all",
    "am",
    "an",
    "and",
    "any",
    "are",
    "as",
    "at",
    "be",
    "because",
    "been",
    "before",
    "being",
    "below",
    "between",
    "both",
    "but",
    "by",
    "could",
    "did",
    "do",
    "does",
    "doing",
    "down",
    "during",
    "each",
    "few",
    "for",
    "from",
    "further",
    "had",
    "has",
    "have",
    "having",
    "he",
    "her",
    "here",
    "hers",
    "herself",
    "him",
    "himself",
    "his",
    "how",
    "i",
    "if",
    "in",
    "into",
    "is",
    "it",
    "its",
    "itself",
    "just",
    "me",
    "more",
    "most",
    "my",
    "myself",
    "no",
    "nor",
    "not",
    "now",
    "of",
    "off",
    "on",
    "once",
    "only",
    "or",
    "other",
    "our",
    "ours",
    "ourselves",
    "out",
    "over",
    "own",
    "s",
    "same",
    "she",
    "should",
    "so",
    "some",
    "such",
    "t",
    "than",
    "that",
    "the",
    "their",
    "theirs",
    "them",
    "themselves",
    "then",
    "there",
    "these",
    "they",
    "this",
    "those",
    "through",
    "to",
    "too",
    "under",
    "until",
    "up",
    "very",
    "was",
    "we",
    "were",
    "what",
    "when",
    "where",
    "which",
    "while",
    "who",
    "whom",
    "why",
    "with",
    "would",
    "you",
    "your",
    "yours",
    "yourself",
    "yourselves",
  ]);

  /* --------------------------------------------------------------------------
     3. DOM ELEMENTS CACHE
     -------------------------------------------------------------------------- */
  const DOM = {
    // Textareas
    editor: document.getElementById("main-editor"),
    compareA: document.getElementById("compare-text-a"),
    compareB: document.getElementById("compare-text-b"),

    // Live Hero Stats
    heroWords:
      document.getElementById("visual-words") ||
      document.getElementById("hero-stat-words"),
    heroChars:
      document.getElementById("visual-chars") ||
      document.getElementById("hero-stat-chars"),
    heroReadingTime:
      document.getElementById("visual-read") ||
      document.getElementById("hero-stat-reading-time"),
    hero3DInner:
      document.querySelector(".visual-3d-inner") ||
      document.getElementById("hero-3d-card"),

    // Core Metrics
    metricWords: document.getElementById("metric-words"),
    metricChars: document.getElementById("metric-chars"),
    metricCharsNoSpace: document.getElementById("metric-chars-no-space"),
    metricSentences: document.getElementById("metric-sentences"),
    metricParagraphs: document.getElementById("metric-paragraphs"),
    metricLines: document.getElementById("metric-lines"),
    metricReadingTime: document.getElementById("metric-reading-time"),
    metricSpeakingTime: document.getElementById("metric-speaking-time"),
    metricUniqueWords: document.getElementById("metric-unique-words"),
    metricLexicalDiversity: document.getElementById("metric-lexical-diversity"),

    // Status bar pills
    statusGraphemes: document.getElementById("status-graphemes"),
    statusLines: document.getElementById("status-lines"),
    selectionBadge: document.getElementById("selection-badge"),

    // Goal Controls & Progress
    goalStrip: document.getElementById("goal-progress-strip"),
    goalTrack: document.getElementById("goal-track"),
    goalCurrent: document.getElementById("goal-current-val"),
    goalTarget: document.getElementById("goal-target-val"),
    goalRemaining: document.getElementById("goal-remaining-val"),
    goalPercent: document.getElementById("goal-percent-val"),
    goalPresetSelect: document.getElementById("goal-preset-select"),
    goalCustomInput: document.getElementById("goal-custom-input"),

    // Find & Replace
    findReplaceDrawer: document.getElementById("find-replace-drawer"),
    findInput: document.getElementById("find-input"),
    replaceInput: document.getElementById("replace-input"),
    findMatchCase: document.getElementById("find-match-case"),
    findWholeWord: document.getElementById("find-whole-word"),
    btnFindReplaceOne: document.getElementById("btn-replace-one"),
    btnFindReplaceAll: document.getElementById("btn-replace-all"),

    // Comparison Drawer
    comparisonSection: document.getElementById("comparison-section"),
    diffWords: document.getElementById("diff-words"),
    diffChars: document.getElementById("diff-chars"),
    diffSentences: document.getElementById("diff-sentences"),
    diffParagraphs: document.getElementById("diff-paragraphs"),

    // Readability
    gaugeCircle: document.getElementById("gauge-circle"),
    gaugeScore: document.getElementById("gauge-score"),
    gaugeLabel: document.getElementById("gauge-label"),
    gaugeDesc: document.getElementById("gauge-desc"),
    fleschGrade: document.getElementById("flesch-grade"),
    syllablesCount: document.getElementById("syllables-count"),
    complexWordsCount: document.getElementById("complex-words-count"),

    // Sentence & Paragraph Details
    avgWordsSentence: document.getElementById("avg-words-sentence"),
    shortestSentence: document.getElementById("shortest-sentence"),
    longestSentence: document.getElementById("longest-sentence"),
    avgWordsParagraph: document.getElementById("avg-words-paragraph"),
    shortestParagraph: document.getElementById("shortest-paragraph"),
    longestParagraph: document.getElementById("longest-paragraph"),
    distSentenceList: document.getElementById("dist-sentence-list"),
    distParagraphList: document.getElementById("dist-paragraph-list"),

    // Word Length & Vocabulary
    avgWordLength: document.getElementById("avg-word-length"),
    shortestWord: document.getElementById("shortest-word"),
    longestWord: document.getElementById("longest-word"),
    repeatedWordCount: document.getElementById("repeated-word-count"),
    repeatedWordPct: document.getElementById("repeated-word-pct"),

    // Writing Health Checklist
    healthChecklist: document.getElementById("health-checklist"),

    // Word Frequency & Keywords
    freqTableBody: document.getElementById("freq-table-body"),
    toggleStopWords: document.getElementById("toggle-stop-words"),
    toggleCaseSensitive: document.getElementById("toggle-case-sensitive"),
    toggleIncludeNumbers: document.getElementById("toggle-include-numbers"),
    keywordInput: document.getElementById("keyword-input"),
    keywordResultsBody: document.getElementById("keyword-results-body"),
    topTermsList: document.getElementById("top-terms-list"),

    // Repeated Phrases (N-grams)
    phraseNgramSelect: document.getElementById("phrase-ngram-select"),
    phraseThresholdSelect: document.getElementById("phrase-threshold-select"),
    phraseResultsBody: document.getElementById("phrase-results-body"),

    // Document Structure
    docStructureBody: document.getElementById("doc-structure-body"),

    // Local History & Privacy
    historySection: document.getElementById("history-section"),
    historyList: document.getElementById("history-list"),
    historyEmpty: document.getElementById("history-empty"),
    toggleDisableHistory: document.getElementById("toggle-disable-history"),

    // Global Search
    searchModal: document.getElementById("search-modal"),
    searchInput: document.getElementById("search-input"),
    searchResults: document.getElementById("search-results"),
    searchFilterChips: document.querySelectorAll(".search-filter-chip"),

    // Mobile Navigation
    mobileDrawer:
      document.getElementById("mobile-nav-drawer") ||
      document.getElementById("mobile-drawer"),
    mobileBackdrop: document.getElementById("mobile-backdrop"),

    // Toast
    toastContainer: document.getElementById("toast-container"),
  };

  /* --------------------------------------------------------------------------
     4. APPLICATION STATE
     -------------------------------------------------------------------------- */
  const state = {
    text: "",
    readingWPM: 225,
    speakingWPM: 140,
    targetGoal: 0, // 0 = inactive
    targetType: "words",
    filterStopWords: true,
    filterCaseSensitive: false,
    filterIncludeNumbers: false,
    phraseNgram: 2,
    phraseThreshold: 2,
    historyEnabled: true,
    activeSearchCategory: "All",
    undoStack: [],
    redoStack: [],
  };

  let debounceTimer = null;

  /* --------------------------------------------------------------------------
     5. ROBUST UNICODE-AWARE TEXT SEGMENTATION
     -------------------------------------------------------------------------- */

  /**
   * Accurate word counting using Intl.Segmenter where supported, with regex fallback.
   * Gracefully handles Urdu, Arabic, CJK, Hindi, European languages, emoji, punctuation.
   */
  function extractWords(text, options = {}) {
    if (!text || !text.trim()) return [];

    const caseSensitive = options.caseSensitive || false;
    const includeNumbers = options.includeNumbers || false;

    // Use Intl.Segmenter if available
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      try {
        const segmenter = new Intl.Segmenter(undefined, {
          granularity: "word",
        });
        const segments = segmenter.segment(text);
        const words = [];

        for (const { segment, isWordLike } of segments) {
          if (isWordLike) {
            const clean = segment.trim();
            if (!clean) continue;
            if (!includeNumbers && /^[\d\s.,]+$/.test(clean)) continue;
            words.push(caseSensitive ? clean : clean.toLowerCase());
          }
        }
        return words;
      } catch (e) {
        // Fallback below
      }
    }

    // Unicode aware fallback regex
    const regex = /[\p{L}\p{M}\p{N}]+/gu;
    const matches = text.match(regex) || [];
    const results = [];

    for (const raw of matches) {
      const w = raw.trim();
      if (!includeNumbers && /^\d+$/.test(w)) continue;
      results.push(caseSensitive ? w : w.toLowerCase());
    }

    return results;
  }

  /**
   * Grapheme cluster counter for accurate human-perceived characters (emoji, accents)
   */
  function countGraphemes(text) {
    if (!text) return 0;
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      try {
        const segmenter = new Intl.Segmenter(undefined, {
          granularity: "grapheme",
        });
        let count = 0;
        for (const _ of segmenter.segment(text)) {
          count++;
        }
        return count;
      } catch (e) {}
    }
    // Fallback: Array.from handles astral plane code points
    return Array.from(text).length;
  }

  /**
   * Sentence extractor with accurate punctuation boundary detection
   */
  function extractSentences(text) {
    if (!text || !text.trim()) return [];

    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      try {
        const segmenter = new Intl.Segmenter(undefined, {
          granularity: "sentence",
        });
        const sentences = [];
        for (const { segment } of segmenter.segment(text)) {
          const s = segment.trim();
          if (s) sentences.push(s);
        }
        if (sentences.length > 0) return sentences;
      } catch (e) {}
    }

    // Fallback regex boundary
    return text
      .split(/(?<=[.!?؟。！？])\s+|\n+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }

  /**
   * Paragraph extractor
   */
  function extractParagraphs(text) {
    if (!text || !text.trim()) return [];
    return text
      .split(/\n{1,}/)
      .map((p) => p.trim())
      .filter((p) => p.length > 0);
  }

  /**
   * Format seconds into friendly "X min Y sec"
   */
  function formatDuration(totalSeconds) {
    if (totalSeconds <= 0) return "0 sec";
    const mins = Math.floor(totalSeconds / 60);
    const secs = Math.round(totalSeconds % 60);

    if (mins === 0) return `${secs} sec`;
    if (secs === 0) return `${mins} min`;
    return `${mins} min ${secs} sec`;
  }

  /**
   * English Syllable Counter (heuristic for Flesch Readability)
   */
  function countSyllablesInWord(word) {
    if (!word) return 0;
    const clean = word.toLowerCase().replace(/[^a-z]/g, "");
    if (clean.length <= 3) return 1;

    // Remove common non-syllable endings
    let w = clean.replace(/(?:[^laeiouy]|ed|es|e)$/, "");
    w = w.replace(/^y/, "");
    const matches = w.match(/[aeiouy]{1,2}/g);
    return matches ? Math.max(1, matches.length) : 1;
  }

  /* --------------------------------------------------------------------------
     6. CORE STATS CALCULATION (INSTANT)
     -------------------------------------------------------------------------- */
  function calculateInstantStats(text) {
    const rawLen = text.length;
    const charsNoSpace = text.replace(/\s/g, "").length;
    const graphemes = countGraphemes(text);

    const words = extractWords(text, {
      includeNumbers: true,
      caseSensitive: false,
    });
    const wordCount = words.length;

    const sentences = extractSentences(text);
    const sentenceCount = sentences.length;

    const paragraphs = extractParagraphs(text);
    const paragraphCount = paragraphs.length;

    const lines = text.length === 0 ? 0 : text.split(/\r\n|\r|\n/).length;

    // Time calculations
    const readingSecs = wordCount > 0 ? (wordCount / state.readingWPM) * 60 : 0;
    const speakingSecs =
      wordCount > 0 ? (wordCount / state.speakingWPM) * 60 : 0;
    const readingTimeFormatted = formatDuration(readingSecs);
    const speakingTimeFormatted = formatDuration(speakingSecs);

    // Update Hero 3D Card
    if (DOM.heroWords) DOM.heroWords.textContent = wordCount.toLocaleString();
    if (DOM.heroChars) DOM.heroChars.textContent = rawLen.toLocaleString();
    if (DOM.heroReadingTime)
      DOM.heroReadingTime.textContent = readingTimeFormatted;

    // Update Primary Metrics
    if (DOM.metricWords)
      DOM.metricWords.textContent = wordCount.toLocaleString();
    if (DOM.metricChars) DOM.metricChars.textContent = rawLen.toLocaleString();
    if (DOM.metricCharsNoSpace)
      DOM.metricCharsNoSpace.textContent = charsNoSpace.toLocaleString();
    if (DOM.metricSentences)
      DOM.metricSentences.textContent = sentenceCount.toLocaleString();
    if (DOM.metricParagraphs)
      DOM.metricParagraphs.textContent = paragraphCount.toLocaleString();
    if (DOM.metricLines) DOM.metricLines.textContent = lines.toLocaleString();
    if (DOM.metricReadingTime)
      DOM.metricReadingTime.textContent = readingTimeFormatted;
    if (DOM.metricSpeakingTime)
      DOM.metricSpeakingTime.textContent = speakingTimeFormatted;

    // Status bar
    if (DOM.statusGraphemes)
      DOM.statusGraphemes.textContent = `${graphemes.toLocaleString()} graphemes`;
    if (DOM.statusLines)
      DOM.statusLines.textContent = `${lines.toLocaleString()} lines`;

    // Goal calculation if active
    updateGoalProgress(wordCount, rawLen);

    return {
      wordCount,
      words,
      rawLen,
      charsNoSpace,
      sentences,
      sentenceCount,
      paragraphs,
      paragraphCount,
      lines,
      readingTimeFormatted,
    };
  }

  /* --------------------------------------------------------------------------
     7. WRITING GOAL & TARGET PROGRESS
     -------------------------------------------------------------------------- */
  function updateGoalProgress(wordCount, charCount) {
    if (!DOM.goalStrip || state.targetGoal <= 0) {
      if (DOM.goalStrip) DOM.goalStrip.classList.remove("open");
      return;
    }

    DOM.goalStrip.classList.add("open");
    const current = state.targetType === "characters" ? charCount : wordCount;
    const target = state.targetGoal;
    const pct = Math.min(Math.round((current / target) * 100), 100);
    const remaining = Math.max(0, target - current);

    if (DOM.goalCurrent) DOM.goalCurrent.textContent = current.toLocaleString();
    if (DOM.goalTarget)
      DOM.goalTarget.textContent = `${target.toLocaleString()} ${state.targetType}`;
    if (DOM.goalRemaining)
      DOM.goalRemaining.textContent = `${remaining.toLocaleString()} left`;
    if (DOM.goalPercent) DOM.goalPercent.textContent = `${pct}%`;

    if (DOM.goalTrack) {
      DOM.goalTrack.style.width = `${pct}%`;
      if (current > target) {
        DOM.goalTrack.classList.add("over-limit");
      } else {
        DOM.goalTrack.classList.remove("over-limit");
      }
    }
  }

  /* --------------------------------------------------------------------------
     8. ADVANCED ANALYTICS (DEBOUNCED)
     -------------------------------------------------------------------------- */
  function runDeepAnalytics(text, instantData) {
    if (!text.trim()) {
      resetDeepAnalyticsUI();
      return;
    }

    const { words, sentences, paragraphs } = instantData;
    const totalWords = words.length;

    // Unique Words & Lexical Diversity (Type-Token Ratio)
    const wordFreqMap = new Map();
    let totalSyllables = 0;
    let complexWordCount = 0;
    let totalWordLength = 0;
    let shortest = words[0] || "";
    let longest = words[0] || "";

    words.forEach((w) => {
      const lower = w.toLowerCase();
      wordFreqMap.set(lower, (wordFreqMap.get(lower) || 0) + 1);

      // Syllables
      const syl = countSyllablesInWord(w);
      totalSyllables += syl;
      if (syl >= 3) complexWordCount++;

      // Length
      const len = w.length;
      totalWordLength += len;
      if (len < shortest.length) shortest = w;
      if (len > longest.length) longest = w;
    });

    const uniqueWordsCount = wordFreqMap.size;
    const lexicalDiversityPct =
      totalWords > 0 ? Math.round((uniqueWordsCount / totalWords) * 100) : 0;
    const repeatedCount = totalWords - uniqueWordsCount;

    if (DOM.metricUniqueWords)
      DOM.metricUniqueWords.textContent = uniqueWordsCount.toLocaleString();
    if (DOM.metricLexicalDiversity)
      DOM.metricLexicalDiversity.textContent = `${lexicalDiversityPct}%`;
    if (DOM.repeatedWordCount)
      DOM.repeatedWordCount.textContent = repeatedCount.toLocaleString();
    if (DOM.repeatedWordPct)
      DOM.repeatedWordPct.textContent =
        totalWords > 0
          ? `${Math.round((repeatedCount / totalWords) * 100)}%`
          : "0%";

    // Word Length UI
    const avgLen =
      totalWords > 0 ? (totalWordLength / totalWords).toFixed(1) : 0;
    if (DOM.avgWordLength) DOM.avgWordLength.textContent = `${avgLen} chars`;
    if (DOM.shortestWord)
      DOM.shortestWord.textContent = shortest ? `"${shortest}"` : "—";
    if (DOM.longestWord)
      DOM.longestWord.textContent = longest ? `"${longest}"` : "—";

    // Sentence Stats
    const sentenceLengths = sentences.map((s) => extractWords(s).length);
    const avgSentLen =
      sentenceLengths.length > 0
        ? (
            sentenceLengths.reduce((a, b) => a + b, 0) / sentenceLengths.length
          ).toFixed(1)
        : 0;
    const minSentLen =
      sentenceLengths.length > 0 ? Math.min(...sentenceLengths) : 0;
    const maxSentLen =
      sentenceLengths.length > 0 ? Math.max(...sentenceLengths) : 0;

    if (DOM.avgWordsSentence)
      DOM.avgWordsSentence.textContent = `${avgSentLen} words`;
    if (DOM.shortestSentence)
      DOM.shortestSentence.textContent = `${minSentLen} words`;
    if (DOM.longestSentence)
      DOM.longestSentence.textContent = `${maxSentLen} words`;

    // Sentence Distribution
    renderSentenceDistribution(sentenceLengths);

    // Paragraph Stats
    const paragraphLengths = paragraphs.map((p) => extractWords(p).length);
    const avgParaLen =
      paragraphLengths.length > 0
        ? (
            paragraphLengths.reduce((a, b) => a + b, 0) /
            paragraphLengths.length
          ).toFixed(1)
        : 0;
    const minParaLen =
      paragraphLengths.length > 0 ? Math.min(...paragraphLengths) : 0;
    const maxParaLen =
      paragraphLengths.length > 0 ? Math.max(...paragraphLengths) : 0;

    if (DOM.avgWordsParagraph)
      DOM.avgWordsParagraph.textContent = `${avgParaLen} words`;
    if (DOM.shortestParagraph)
      DOM.shortestParagraph.textContent = `${minParaLen} words`;
    if (DOM.longestParagraph)
      DOM.longestParagraph.textContent = `${maxParaLen} words`;

    renderParagraphDistribution(paragraphLengths);

    // Readability Analysis (Flesch Formulas)
    calculateReadability(
      totalWords,
      sentences.length,
      totalSyllables,
      complexWordCount,
    );

    // Writing Health Assessment
    assessWritingHealth(
      text,
      words,
      sentences,
      paragraphs,
      sentenceLengths,
      paragraphLengths,
      wordFreqMap,
    );

    // Word Frequency & Keywords
    renderWordFrequency(wordFreqMap, totalWords);
    renderKeywordDensity(text, totalWords);
    renderRepeatedPhrases(text);
    renderDocumentStructure(text, paragraphs);
  }

  function resetDeepAnalyticsUI() {
    if (DOM.metricUniqueWords) DOM.metricUniqueWords.textContent = "0";
    if (DOM.metricLexicalDiversity)
      DOM.metricLexicalDiversity.textContent = "0%";
    if (DOM.gaugeScore) DOM.gaugeScore.textContent = "—";
    if (DOM.gaugeLabel) DOM.gaugeLabel.textContent = "Waiting for input";
    if (DOM.gaugeDesc)
      DOM.gaugeDesc.textContent =
        "Type or paste content to compute readability.";
    if (DOM.freqTableBody)
      DOM.freqTableBody.innerHTML =
        '<tr><td colspan="3" style="text-align:center;color:var(--ink-faint);">No text entered</td></tr>';
    if (DOM.phraseResultsBody)
      DOM.phraseResultsBody.innerHTML =
        '<tr><td colspan="3" style="text-align:center;color:var(--ink-faint);">No repeated phrases detected</td></tr>';
  }

  /* --------------------------------------------------------------------------
     9. READABILITY CALCULATION
     -------------------------------------------------------------------------- */
  function calculateReadability(
    totalWords,
    totalSentences,
    totalSyllables,
    complexCount,
  ) {
    if (totalWords < 5 || totalSentences < 1) {
      if (DOM.gaugeScore) DOM.gaugeScore.textContent = "—";
      if (DOM.gaugeLabel) DOM.gaugeLabel.textContent = "Need more text";
      return;
    }

    // Flesch Reading Ease
    // 206.835 - (1.015 * ASL) - (84.6 * ASW)
    const asl = totalWords / totalSentences;
    const asw = totalSyllables / totalWords;
    let ease = Math.round(206.835 - 1.015 * asl - 84.6 * asw);
    ease = Math.max(0, Math.min(100, ease));

    // Flesch-Kincaid Grade Level
    // 0.39 * ASL + 11.8 * ASW - 15.59
    let grade = (0.39 * asl + 11.8 * asw - 15.59).toFixed(1);
    if (grade < 0) grade = "0.0";

    let label = "Standard";
    let desc =
      "Conversational English easily understood by 13- to 15-year-old students.";

    if (ease >= 90) {
      label = "Very Easy";
      desc =
        "Simple conversational prose readable by an average 5th-grade student.";
    } else if (ease >= 80) {
      label = "Easy";
      desc = "Straightforward language suitable for 6th-grade readers.";
    } else if (ease >= 70) {
      label = "Fairly Easy";
      desc = "Relaxed tone suitable for general public audiences.";
    } else if (ease >= 60) {
      label = "Standard";
      desc = "Conversational English easily understood by 13- to 15-year-olds.";
    } else if (ease >= 50) {
      label = "Fairly Difficult";
      desc =
        "Moderate academic or business writing suitable for high school students.";
    } else if (ease >= 30) {
      label = "Difficult";
      desc =
        "Complex college-level writing with formal syntax and multi-syllabic vocabulary.";
    } else {
      label = "Very Confusing";
      desc =
        "Highly technical or legal prose requiring specialized graduate-level comprehension.";
    }

    if (DOM.gaugeScore) DOM.gaugeScore.textContent = ease;
    if (DOM.gaugeCircle) DOM.gaugeCircle.style.setProperty("--score", ease);
    if (DOM.gaugeLabel) DOM.gaugeLabel.textContent = label;
    if (DOM.gaugeDesc) DOM.gaugeDesc.textContent = desc;
    if (DOM.fleschGrade) DOM.fleschGrade.textContent = `Grade ${grade}`;
    if (DOM.syllablesCount)
      DOM.syllablesCount.textContent = totalSyllables.toLocaleString();
    if (DOM.complexWordsCount)
      DOM.complexWordsCount.textContent = complexCount.toLocaleString();
  }

  /* --------------------------------------------------------------------------
     10. DISTRIBUTIONS & HEALTH AUDIT
     -------------------------------------------------------------------------- */
  function renderSentenceDistribution(lengths) {
    if (!DOM.distSentenceList) return;
    if (lengths.length === 0) {
      DOM.distSentenceList.innerHTML =
        '<p style="font-size:0.85rem;color:var(--ink-faint);">No sentences</p>';
      return;
    }

    const short = lengths.filter((l) => l < 10).length;
    const normal = lengths.filter((l) => l >= 10 && l <= 22).length;
    const long = lengths.filter((l) => l > 22 && l <= 32).length;
    const veryLong = lengths.filter((l) => l > 32).length;
    const total = lengths.length;

    DOM.distSentenceList.innerHTML = `
      <div class="dist-item">
        <div class="dist-meta"><span>Short (&lt;10 words)</span><span>${short} (${Math.round((short / total) * 100)}%)</span></div>
        <div class="dist-track"><div class="dist-fill" style="width:${(short / total) * 100}%"></div></div>
      </div>
      <div class="dist-item">
        <div class="dist-meta"><span>Optimal (10–22 words)</span><span>${normal} (${Math.round((normal / total) * 100)}%)</span></div>
        <div class="dist-track"><div class="dist-fill" style="width:${(normal / total) * 100}%"></div></div>
      </div>
      <div class="dist-item">
        <div class="dist-meta"><span>Long (23–32 words)</span><span>${long} (${Math.round((long / total) * 100)}%)</span></div>
        <div class="dist-track"><div class="dist-fill" style="width:${(long / total) * 100}%"></div></div>
      </div>
      <div class="dist-item">
        <div class="dist-meta"><span>Very Long (&gt;32 words)</span><span>${veryLong} (${Math.round((veryLong / total) * 100)}%)</span></div>
        <div class="dist-track"><div class="dist-fill" style="width:${(veryLong / total) * 100}%"></div></div>
      </div>
    `;
  }

  function renderParagraphDistribution(lengths) {
    if (!DOM.distParagraphList) return;
    if (lengths.length === 0) {
      DOM.distParagraphList.innerHTML =
        '<p style="font-size:0.85rem;color:var(--ink-faint);">No paragraphs</p>';
      return;
    }

    const short = lengths.filter((l) => l < 40).length;
    const medium = lengths.filter((l) => l >= 40 && l <= 120).length;
    const long = lengths.filter((l) => l > 120).length;
    const total = lengths.length;

    DOM.distParagraphList.innerHTML = `
      <div class="dist-item">
        <div class="dist-meta"><span>Compact (&lt;40 words)</span><span>${short}</span></div>
        <div class="dist-track"><div class="dist-fill" style="width:${(short / total) * 100}%"></div></div>
      </div>
      <div class="dist-item">
        <div class="dist-meta"><span>Standard (40–120 words)</span><span>${medium}</span></div>
        <div class="dist-track"><div class="dist-fill" style="width:${(medium / total) * 100}%"></div></div>
      </div>
      <div class="dist-item">
        <div class="dist-meta"><span>Dense (&gt;120 words)</span><span>${long}</span></div>
        <div class="dist-track"><div class="dist-fill" style="width:${(long / total) * 100}%"></div></div>
      </div>
    `;
  }

  function assessWritingHealth(
    text,
    words,
    sentences,
    paragraphs,
    sentenceLengths,
    paragraphLengths,
    wordFreqMap,
  ) {
    if (!DOM.healthChecklist) return;

    const items = [];

    // 1. Long sentences pattern
    const longSentCount = sentenceLengths.filter((l) => l > 30).length;
    if (longSentCount > 0) {
      items.push({
        status: "suggestion",
        title: `${longSentCount} sentence${longSentCount > 1 ? "s" : ""} exceed 30 words`,
        desc: "Consider splitting extended compound sentences to enhance reader pacing and cognitive retention.",
      });
    } else if (sentences.length > 0) {
      items.push({
        status: "good",
        title: "Well-balanced sentence pacing",
        desc: "All sentences are within healthy structural lengths (under 30 words).",
      });
    }

    // 2. Dense paragraphs pattern
    const denseParaCount = paragraphLengths.filter((l) => l > 140).length;
    if (denseParaCount > 0) {
      items.push({
        status: "suggestion",
        title: `${denseParaCount} dense paragraph${denseParaCount > 1 ? "s" : ""} detected`,
        desc: "Lengthy paragraphs can fatigue screen readers; consider inserting whitespace breaks.",
      });
    }

    // 3. Repeated punctuation
    const doublePunctuation = (text.match(/([!?.,]){2,}/g) || []).length;
    if (doublePunctuation > 0) {
      items.push({
        status: "suggestion",
        title: `${doublePunctuation} repeated punctuation clusters`,
        desc: 'Consecutive punctuation marks (e.g., "??" or "!!") detected; consider normalizing.',
      });
    }

    // 4. Excessive whitespace
    const doubleSpaces = (text.match(/[^\S\r\n]{2,}/g) || []).length;
    if (doubleSpaces > 0) {
      items.push({
        status: "suggestion",
        title: `${doubleSpaces} consecutive whitespace gaps`,
        desc: "Use Text Cleanup to automatically remove superfluous spaces between words.",
      });
    }

    // 5. Passive voice indicator (heuristic for English)
    const passiveMatches =
      text.match(/\b(is|are|was|were|been|being)\s+([a-z]+ed|[a-z]+en)\b/gi) ||
      [];
    if (passiveMatches.length > 0) {
      items.push({
        status: "suggestion",
        title: `${passiveMatches.length} passive verb pattern${passiveMatches.length > 1 ? "s" : ""}`,
        desc: `Examples: "${passiveMatches.slice(0, 2).join('", "')}". Active voice often sharpens editorial impact.`,
      });
    }

    // 6. Vocabulary Variety
    const totalWords = words.length;
    if (totalWords > 50) {
      const diversity = wordFreqMap.size / totalWords;
      if (diversity > 0.55) {
        items.push({
          status: "good",
          title: "High lexical variety",
          desc: "Rich vocabulary range with low repetitive token clustering.",
        });
      }
    }

    DOM.healthChecklist.innerHTML = items
      .map(
        (item) => `
      <div class="health-item">
        <div class="health-icon" style="color: ${item.status === "good" ? "#10B981" : "#7C3AED"}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            ${item.status === "good" ? '<polyline points="20 6 9 17 4 12"></polyline>' : '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'}
          </svg>
        </div>
        <div class="health-content">
          <div class="health-title">${item.title}</div>
          <div class="health-desc">${item.desc}</div>
        </div>
      </div>
    `,
      )
      .join("");
  }

  /* --------------------------------------------------------------------------
     11. WORD FREQUENCY & KEYWORDS
     -------------------------------------------------------------------------- */
  function renderWordFrequency(wordFreqMap, totalWords) {
    if (!DOM.freqTableBody) return;
    if (totalWords === 0) {
      DOM.freqTableBody.innerHTML =
        '<tr><td colspan="3" style="text-align:center;color:var(--ink-faint);">No words</td></tr>';
      return;
    }

    let entries = Array.from(wordFreqMap.entries());

    if (state.filterStopWords) {
      entries = entries.filter(([word]) => !STOP_WORDS.has(word));
    }

    // Sort descending by count
    entries.sort((a, b) => b[1] - a[1]);
    const top = entries.slice(0, 10);

    if (top.length === 0) {
      DOM.freqTableBody.innerHTML =
        '<tr><td colspan="3" style="text-align:center;color:var(--ink-faint);">All words filtered by stop-words</td></tr>';
      return;
    }

    DOM.freqTableBody.innerHTML = top
      .map(([word, count]) => {
        const pct = ((count / totalWords) * 100).toFixed(1);
        return `
        <tr>
          <td><span class="term-tag">${escapeHTML(word)}</span></td>
          <td><strong>${count.toLocaleString()}</strong></td>
          <td><span class="density-badge">${pct}%</span></td>
        </tr>
      `;
      })
      .join("");

    // Top Terms Chips
    if (DOM.topTermsList) {
      DOM.topTermsList.innerHTML = top
        .slice(0, 6)
        .map(
          ([word, count]) => `
        <span class="hero-tag" style="background-color: var(--bg-soft); border-color: var(--line);">
          <strong>${escapeHTML(word)}</strong> <span style="color:var(--primary); font-weight:700;">${count}</span>
        </span>
      `,
        )
        .join("");
    }
  }

  function renderKeywordDensity(text, totalWords) {
    if (!DOM.keywordResultsBody || !DOM.keywordInput) return;
    const query = DOM.keywordInput.value.trim();

    if (!query || totalWords === 0) {
      DOM.keywordResultsBody.innerHTML =
        '<tr><td colspan="4" style="text-align:center;color:var(--ink-faint);">Enter keyword above to analyze density</td></tr>';
      return;
    }

    const keywords = query
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean);
    if (keywords.length === 0) return;

    const lowerText = text.toLowerCase();

    const rows = keywords.map((kw) => {
      const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`\\b${escaped}\\b`, "gi");
      const matches = text.match(regex) || [];
      const count = matches.length;
      const density =
        totalWords > 0 ? ((count / totalWords) * 100).toFixed(2) : "0.00";

      let firstPos = "None";
      const idx = lowerText.indexOf(kw.toLowerCase());
      if (idx !== -1) {
        firstPos = `Char ${idx}`;
      }

      return `
        <tr>
          <td><strong>${escapeHTML(kw)}</strong></td>
          <td>${count}</td>
          <td><span class="density-badge">${density}%</span></td>
          <td style="font-size:0.8rem;color:var(--ink-faint);">${firstPos}</td>
        </tr>
      `;
    });

    DOM.keywordResultsBody.innerHTML = rows.join("");
  }

  function renderRepeatedPhrases(text) {
    if (!DOM.phraseResultsBody) return;
    const n = parseInt(state.phraseNgram, 10) || 2;
    const threshold = parseInt(state.phraseThreshold, 10) || 2;

    const words = extractWords(text, {
      caseSensitive: false,
      includeNumbers: false,
    });
    if (words.length < n) {
      DOM.phraseResultsBody.innerHTML =
        '<tr><td colspan="3" style="text-align:center;color:var(--ink-faint);">Not enough words for phrase detection</td></tr>';
      return;
    }

    const phrasesMap = new Map();
    for (let i = 0; i <= words.length - n; i++) {
      const phrase = words.slice(i, i + n).join(" ");
      phrasesMap.set(phrase, (phrasesMap.get(phrase) || 0) + 1);
    }

    const repeated = Array.from(phrasesMap.entries())
      .filter(([_, count]) => count >= threshold)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    if (repeated.length === 0) {
      DOM.phraseResultsBody.innerHTML =
        '<tr><td colspan="3" style="text-align:center;color:var(--ink-faint);">No repeated phrases meet threshold</td></tr>';
      return;
    }

    DOM.phraseResultsBody.innerHTML = repeated
      .map(
        ([phrase, count]) => `
      <tr>
        <td><strong>${escapeHTML(phrase)}</strong></td>
        <td>${count} times</td>
        <td><span class="density-badge">${((count / (words.length - n + 1)) * 100).toFixed(1)}%</span></td>
      </tr>
    `,
      )
      .join("");
  }

  function renderDocumentStructure(text, paragraphs) {
    if (!DOM.docStructureBody) return;
    if (!text.trim()) {
      DOM.docStructureBody.innerHTML =
        '<tr><td colspan="3" style="text-align:center;color:var(--ink-faint);">Empty text</td></tr>';
      return;
    }

    const lines = text.split(/\r?\n/);
    const rows = [];
    let headingCount = 0;
    let listCount = 0;

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return;

      // Pattern detection
      const isHeadingLike =
        trimmed.length < 60 &&
        !/[.!?]$/.test(trimmed) &&
        (line.startsWith("#") ||
          /^[A-Z0-9\s:—–-]+$/.test(trimmed) ||
          /^[A-Z][A-Za-z0-9\s]+$/.test(trimmed));
      const isListItem = /^[*-•]|\d+\.\s/.test(trimmed);

      if (isHeadingLike) headingCount++;
      if (isListItem) listCount++;

      if (rows.length < 8 && (isHeadingLike || isListItem)) {
        rows.push(`
          <tr>
            <td><span class="density-badge" style="background-color:${isHeadingLike ? "var(--primary-light)" : "var(--line-soft)"}; color:${isHeadingLike ? "var(--primary)" : "var(--ink)"}">${isHeadingLike ? "Heading-like" : "List Item"}</span></td>
            <td>Line ${index + 1}</td>
            <td style="max-width:280px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${escapeHTML(trimmed)}</td>
          </tr>
        `);
      }
    });

    if (rows.length === 0) {
      DOM.docStructureBody.innerHTML = `
        <tr>
          <td><span class="density-badge">Continuous Text</span></td>
          <td>${paragraphs.length} Paragraphs</td>
          <td style="color:var(--ink-soft);">Standard paragraph flow without detected section headers or list blocks.</td>
        </tr>
      `;
    } else {
      DOM.docStructureBody.innerHTML = rows.join("");
    }
  }

  /* --------------------------------------------------------------------------
     12. TEXT COMPARISON ENGINE
     -------------------------------------------------------------------------- */
  function updateComparison() {
    if (!DOM.compareA || !DOM.compareB) return;
    const textA = DOM.compareA.value;
    const textB = DOM.compareB.value;

    const wordsA = extractWords(textA).length;
    const wordsB = extractWords(textB).length;
    const diffW = wordsB - wordsA;

    const charsA = textA.length;
    const charsB = textB.length;
    const diffC = charsB - charsA;

    const sentsA = extractSentences(textA).length;
    const sentsB = extractSentences(textB).length;
    const diffS = sentsB - sentsA;

    const parasA = extractParagraphs(textA).length;
    const parasB = extractParagraphs(textB).length;
    const diffP = parasB - parasA;

    function renderDiff(elem, valA, valB, diff) {
      if (!elem) return;
      const badgeClass =
        diff > 0 ? "diff-plus" : diff < 0 ? "diff-minus" : "diff-same";
      const sign = diff > 0 ? "+" : "";
      elem.innerHTML = `
        <span class="diff-val-a">${valB}</span>
        <span class="diff-badge ${badgeClass}">${sign}${diff} vs ${valA}</span>
      `;
    }

    renderDiff(DOM.diffWords, wordsA, wordsB, diffW);
    renderDiff(DOM.diffChars, charsA, charsB, diffC);
    renderDiff(DOM.diffSentences, sentsA, sentsB, diffS);
    renderDiff(DOM.diffParagraphs, parasA, parasB, diffP);
  }

  /* --------------------------------------------------------------------------
     13. TEXT CLEANER & TRANSFORMATIONS
     -------------------------------------------------------------------------- */
  function cleanText(action) {
    if (!DOM.editor) return;
    saveToUndo();
    let val = DOM.editor.value;

    switch (action) {
      case "spaces":
        // Replace multiple whitespace with single space
        val = val.replace(/[^\S\r\n]+/g, " ");
        break;
      case "lines":
        // Remove empty lines
        val = val
          .split(/\r?\n/)
          .filter((line) => line.trim().length > 0)
          .join("\n");
        break;
      case "trim":
        // Trim trailing whitespace on lines
        val = val
          .split(/\r?\n/)
          .map((line) => line.trimEnd())
          .join("\n")
          .trim();
        break;
      case "punctuation":
        // Clean repeated punctuation like '!!!' to '!'
        val = val.replace(/([!?.,]){2,}/g, "$1");
        break;
      case "quotes":
        // Normalize curly quotes to straight quotes
        val = val
          .replace(/[\u2018\u2019]/g, "'")
          .replace(/[\u201C\u201D]/g, '"');
        break;
    }

    DOM.editor.value = val;
    handleEditorInput();
    showToast(`Cleaned: ${action}`);
  }

  function transformText(type) {
    if (!DOM.editor) return;
    saveToUndo();
    let val = DOM.editor.value;

    switch (type) {
      case "upper":
        val = val.toUpperCase();
        break;
      case "lower":
        val = val.toLowerCase();
        break;
      case "title":
        val = val.replace(
          /\w\S*/g,
          (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
        );
        break;
      case "sentence":
        val = val
          .toLowerCase()
          .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
        break;
    }

    DOM.editor.value = val;
    handleEditorInput();
    showToast(`Transformed to ${type} case`);
  }

  /* --------------------------------------------------------------------------
     14. FIND & REPLACE
     -------------------------------------------------------------------------- */
  function executeFindReplace(replaceAll = false) {
    if (!DOM.editor || !DOM.findInput) return;
    const findStr = DOM.findInput.value;
    const replaceStr = DOM.replaceInput ? DOM.replaceInput.value : "";

    if (!findStr) {
      showToast("Please enter text to find");
      return;
    }

    saveToUndo();
    const caseSens = DOM.findMatchCase ? DOM.findMatchCase.checked : false;
    const wholeWord = DOM.findWholeWord ? DOM.findWholeWord.checked : false;

    let escaped = findStr.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (wholeWord) escaped = `\\b${escaped}\\b`;

    const flags = (caseSens ? "" : "i") + (replaceAll ? "g" : "");
    const regex = new RegExp(escaped, flags);

    const original = DOM.editor.value;
    const updated = original.replace(regex, replaceStr);

    if (original === updated) {
      showToast("Pattern not found");
      return;
    }

    DOM.editor.value = updated;
    handleEditorInput();
    showToast(
      replaceAll ? "Replaced all occurrences" : "Replaced first occurrence",
    );
  }

  /* --------------------------------------------------------------------------
     15. UNDO & REDO STACKS
     -------------------------------------------------------------------------- */
  function saveToUndo() {
    if (!DOM.editor) return;
    state.undoStack.push(DOM.editor.value);
    if (state.undoStack.length > 30) state.undoStack.shift();
    state.redoStack = [];
  }

  function executeUndo() {
    if (state.undoStack.length === 0 || !DOM.editor) {
      showToast("Nothing to undo");
      return;
    }
    state.redoStack.push(DOM.editor.value);
    DOM.editor.value = state.undoStack.pop();
    handleEditorInput();
  }

  function executeRedo() {
    if (state.redoStack.length === 0 || !DOM.editor) {
      showToast("Nothing to redo");
      return;
    }
    state.undoStack.push(DOM.editor.value);
    DOM.editor.value = state.redoStack.pop();
    handleEditorInput();
  }

  /* --------------------------------------------------------------------------
     16. LOCAL HISTORY & PRIVACY MANAGEMENT
     -------------------------------------------------------------------------- */
  const HISTORY_KEY = "huzikit_wordcounter_history_v1";

  function saveHistoryItem(text) {
    if (!state.historyEnabled || !text || text.trim().length < 10) return;

    try {
      const stored = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
      const words = extractWords(text).length;
      const chars = text.length;

      const item = {
        id: Date.now().toString(),
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          month: "short",
          day: "numeric",
        }),
        snippet: text.trim().slice(0, 60),
        full: text,
        words,
        chars,
      };

      // Prevent exact duplicate of top item
      if (stored.length > 0 && stored[0].snippet === item.snippet) return;

      stored.unshift(item);
      if (stored.length > 15) stored.pop(); // Keep top 15

      localStorage.setItem(HISTORY_KEY, JSON.stringify(stored));
      renderHistoryList();
    } catch (e) {}
  }

  function renderHistoryList() {
    if (!DOM.historyList) return;
    try {
      const stored = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
      if (stored.length === 0) {
        if (DOM.historyEmpty) DOM.historyEmpty.style.display = "block";
        DOM.historyList.innerHTML = "";
        return;
      }

      if (DOM.historyEmpty) DOM.historyEmpty.style.display = "none";

      DOM.historyList.innerHTML = stored
        .map(
          (item) => `
        <div class="history-item">
          <div class="history-info">
            <div class="history-snippet">${escapeHTML(item.snippet)}...</div>
            <div class="history-meta">${item.timestamp} • ${item.words} words • ${item.chars} chars</div>
          </div>
          <div class="history-actions">
            <button class="tool-btn" data-history-restore="${item.id}" title="Restore into editor">Restore</button>
            <button class="tool-btn" data-history-delete="${item.id}" title="Delete item" style="color:#DC2626;">Delete</button>
          </div>
        </div>
      `,
        )
        .join("");
    } catch (e) {}
  }

  function restoreHistoryItem(id) {
    try {
      const stored = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
      const found = stored.find((item) => item.id === id);
      if (found && DOM.editor) {
        saveToUndo();
        DOM.editor.value = found.full;
        handleEditorInput();
        showToast("Restored draft from history");
      }
    } catch (e) {}
  }

  function deleteHistoryItem(id) {
    try {
      let stored = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
      stored = stored.filter((item) => item.id !== id);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(stored));
      renderHistoryList();
      showToast("Deleted entry");
    } catch (e) {}
  }

  function clearAllHistory() {
    try {
      localStorage.removeItem(HISTORY_KEY);
      renderHistoryList();
      showToast("All local history cleared");
    } catch (e) {}
  }

  /* --------------------------------------------------------------------------
     17. COPY & EXPORT (CLEAN BLOB DOWNLOADS)
     -------------------------------------------------------------------------- */
  function copyTextToClipboard(text, successMsg = "Text copied to clipboard!") {
    if (!text) {
      showToast("Nothing to copy");
      return;
    }
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showToast(successMsg);
      })
      .catch(() => {
        // Fallback
        const el = document.createElement("textarea");
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        showToast(successMsg);
      });
  }

  function downloadTextFile(content, filename) {
    if (!content) {
      showToast("Nothing to download");
      return;
    }
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 100);
    showToast(`Downloaded: ${filename}`);
  }

  function generateAnalysisSummary() {
    if (!DOM.editor) return "";
    const text = DOM.editor.value;
    const instant = calculateInstantStats(text);
    return `HUZIKIT WORD COUNTER — WRITING ANALYTICS SUMMARY
Generated: ${new Date().toLocaleString()}
Domain: https://huzikit.com/texttools/word-counter.html

--- KEY METRICS ---
Words: ${instant.wordCount.toLocaleString()}
Characters (with spaces): ${instant.rawLen.toLocaleString()}
Characters (excluding spaces): ${instant.charsNoSpace.toLocaleString()}
Sentences: ${instant.sentenceCount.toLocaleString()}
Paragraphs: ${instant.paragraphCount.toLocaleString()}
Lines: ${instant.lines.toLocaleString()}
Estimated Reading Time: ${instant.readingTimeFormatted}

--- PRIVACY NOTE ---
Processed 100% locally in your browser. No text is stored on external servers.
`;
  }

  /* --------------------------------------------------------------------------
     18. TOAST NOTIFICATION SYSTEM
     -------------------------------------------------------------------------- */
  function showToast(message) {
    if (!DOM.toastContainer) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    DOM.toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add("show");
    });

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 2400);
  }

  function escapeHTML(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* --------------------------------------------------------------------------
     19. EVENT COORDINATION & ENGINE LOOP
     -------------------------------------------------------------------------- */
  function handleEditorInput() {
    if (!DOM.editor) return;
    const text = DOM.editor.value;
    state.text = text;

    // 1. Instant responsive stats
    const instantData = calculateInstantStats(text);

    // 2. Debounced deep calculations
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      runDeepAnalytics(text, instantData);
      saveHistoryItem(text);
    }, 250);
  }

  function handleSelectionChange() {
    if (!DOM.editor || !DOM.selectionBadge) return;
    const start = DOM.editor.selectionStart;
    const end = DOM.editor.selectionEnd;

    if (start !== end && end > start) {
      const selected = DOM.editor.value.substring(start, end);
      const w = extractWords(selected).length;
      const c = selected.length;
      const s = extractSentences(selected).length;

      DOM.selectionBadge.style.display = "inline-block";
      DOM.selectionBadge.textContent = `Selected: ${w} words, ${c} chars, ${s} sent`;
    } else {
      DOM.selectionBadge.style.display = "none";
    }
  }

  /* --------------------------------------------------------------------------
     20. 3D HERO VISUAL TILT (LIGHTWEIGHT & SAFE)
     -------------------------------------------------------------------------- */
  function init3DHeroTilt() {
    const card = DOM.hero3DInner;
    if (!card) return;

    card.parentElement.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotX = -(y / (rect.height / 2)) * 8;
      const rotY = (x / (rect.width / 2)) * 8;

      card.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
    });

    card.parentElement.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  }

  /* --------------------------------------------------------------------------
     21. GLOBAL SEARCH SYSTEM (30 LOCKED TOOLS)
     -------------------------------------------------------------------------- */
  function initGlobalSearch() {
    const modal = DOM.searchModal;
    const input = DOM.searchInput;
    const resultsContainer = DOM.searchResults;

    if (!modal || !input || !resultsContainer) return;

    function openSearch() {
      modal.classList.add("open");
      input.value = "";
      input.focus();
      renderSearchResults("", state.activeSearchCategory);
      document.body.style.overflow = "hidden";
    }

    function closeSearch() {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }

    function renderSearchResults(query, category) {
      const q = query.toLowerCase().trim();
      const filtered = HUZIKIT_TOOLS.filter((tool) => {
        const matchesCategory =
          category === "All" ||
          tool.category.toLowerCase() === category.toLowerCase();
        const matchesQuery =
          !q ||
          tool.name.toLowerCase().includes(q) ||
          tool.keywords.toLowerCase().includes(q) ||
          tool.category.toLowerCase().includes(q);
        return matchesCategory && matchesQuery;
      });

      if (filtered.length === 0) {
        resultsContainer.innerHTML =
          '<div class="search-empty-state">No matching Huzikit tools found.</div>';
        return;
      }

      resultsContainer.innerHTML = filtered
        .map(
          (t) => `
        <li class="search-result-item">
          <a href="${t.url}">
            <span class="search-result-title">${escapeHTML(t.name)}</span>
            <span class="search-result-cat">${escapeHTML(t.category)}</span>
          </a>
        </li>
      `,
        )
        .join("");
    }

    // Open triggers
    document
      .querySelectorAll(
        "[data-search-trigger], #search-trigger, #search-trigger-btn",
      )
      .forEach((btn) => {
        btn.addEventListener("click", openSearch);
      });

    // Close triggers
    document
      .querySelectorAll("[data-search-close], #search-close-btn")
      .forEach((btn) => {
        btn.addEventListener("click", closeSearch);
      });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeSearch();
    });

    // Live search input
    input.addEventListener("input", (e) => {
      renderSearchResults(e.target.value, state.activeSearchCategory);
    });

    // Category chips
    document.querySelectorAll(".search-filter-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        document
          .querySelectorAll(".search-filter-chip")
          .forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        const filterVal = (
          chip.dataset.filter ||
          chip.dataset.category ||
          "all"
        ).toLowerCase();
        let cat = "All";
        if (filterVal.includes("text")) cat = "Text Tools";
        else if (filterVal.includes("calc")) cat = "Calculators";
        else if (filterVal.includes("image") || filterVal.includes("pdf"))
          cat = "Image & PDF";
        else if (filterVal.includes("dev")) cat = "Developer";
        state.activeSearchCategory = cat;
        renderSearchResults(input.value, state.activeSearchCategory);
      });
    });

    // Keyboard Shortcuts (Ctrl+K, Cmd+K, Escape)
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (modal.classList.contains("open")) {
          closeSearch();
        } else {
          openSearch();
        }
      } else if (e.key === "Escape") {
        if (modal.classList.contains("open")) closeSearch();
        if (document.body.classList.contains("focus-mode-active")) {
          document.body.classList.remove("focus-mode-active");
          showToast("Exited focus mode");
        }
      }
    });
  }

  /* --------------------------------------------------------------------------
     22. MOBILE NAVIGATION & ACCORDIONS
     -------------------------------------------------------------------------- */
  function initMobileNav() {
    const hamburger =
      document.getElementById("mobile-menu-trigger") ||
      document.getElementById("hamburger-btn");
    const drawer =
      DOM.mobileDrawer ||
      document.getElementById("mobile-nav-drawer") ||
      document.getElementById("mobile-drawer");
    const backdrop =
      DOM.mobileBackdrop || document.getElementById("mobile-backdrop");
    const closeBtn = document.getElementById("mobile-close-btn");

    if (!hamburger || !drawer) return;

    function openMobile() {
      drawer.classList.add("open");
      drawer.setAttribute("aria-hidden", "false");
      if (backdrop) backdrop.classList.add("open");
      hamburger.setAttribute("aria-expanded", "true");
      document.body.classList.add("mobile-nav-open");
    }

    function closeMobile() {
      drawer.classList.remove("open");
      drawer.setAttribute("aria-hidden", "true");
      if (backdrop) backdrop.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("mobile-nav-open");
    }

    hamburger.addEventListener("click", openMobile);
    if (closeBtn) closeBtn.addEventListener("click", closeMobile);
    if (backdrop) backdrop.addEventListener("click", closeMobile);

    // Accordions
    document
      .querySelectorAll(".mobile-accordion-trigger")
      .forEach((trigger) => {
        trigger.addEventListener("click", () => {
          const expanded = trigger.getAttribute("aria-expanded") === "true";
          trigger.setAttribute("aria-expanded", !expanded);
          const content = trigger.nextElementSibling;
          if (content) {
            content.classList.toggle("expanded", !expanded);
          }
        });
      });
  }

  /* --------------------------------------------------------------------------
     23. FAQ ACCORDION ENGINE
     -------------------------------------------------------------------------- */
  function initFAQAccordion() {
    document.querySelectorAll(".faq-trigger").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const isOpen = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", !isOpen);
        const ans = trigger.nextElementSibling;
        if (ans) ans.classList.toggle("open", !isOpen);
      });
    });
  }

  /* --------------------------------------------------------------------------
     24. INITIALIZE ALL WORKSPACE LISTENERS
     -------------------------------------------------------------------------- */
  function initWorkspaceControls() {
    if (!DOM.editor) return;

    // Textarea input & selection
    DOM.editor.addEventListener("input", handleEditorInput);
    DOM.editor.addEventListener("mouseup", handleSelectionChange);
    DOM.editor.addEventListener("keyup", handleSelectionChange);
    DOM.editor.addEventListener("select", handleSelectionChange);

    // Sample Texts loader
    const sampleSelect = document.getElementById("sample-text-select");
    if (sampleSelect) {
      sampleSelect.addEventListener("change", (e) => {
        const val = e.target.value;
        if (SAMPLE_TEXTS[val]) {
          saveToUndo();
          DOM.editor.value = SAMPLE_TEXTS[val];
          handleEditorInput();
          showToast(`Loaded ${val} sample text`);
        }
        sampleSelect.value = "";
      });
    }

    // Clear & Reset
    const btnClear = document.getElementById("btn-clear");
    if (btnClear) {
      btnClear.addEventListener("click", () => {
        saveToUndo();
        DOM.editor.value = "";
        handleEditorInput();
        showToast("Editor cleared");
      });
    }

    const btnReset = document.getElementById("btn-reset");
    if (btnReset) {
      btnReset.addEventListener("click", () => {
        saveToUndo();
        DOM.editor.value = SAMPLE_TEXTS.blog;
        handleEditorInput();
        showToast("Reset to default example");
      });
    }

    // Copy Text
    const btnCopy = document.getElementById("btn-copy-text");
    if (btnCopy) {
      btnCopy.addEventListener("click", () => {
        copyTextToClipboard(DOM.editor.value, "Text copied to clipboard!");
      });
    }

    // Paste Text
    const btnPaste = document.getElementById("btn-paste-text");
    if (btnPaste) {
      btnPaste.addEventListener("click", () => {
        navigator.clipboard
          .readText()
          .then((clip) => {
            if (clip) {
              saveToUndo();
              DOM.editor.value = clip;
              handleEditorInput();
              showToast("Pasted clipboard text");
            }
          })
          .catch(() => {
            showToast("Clipboard access was denied by browser");
          });
      });
    }

    // Undo / Redo
    const btnUndo = document.getElementById("btn-undo");
    if (btnUndo) btnUndo.addEventListener("click", executeUndo);

    const btnRedo = document.getElementById("btn-redo");
    if (btnRedo) btnRedo.addEventListener("click", executeRedo);

    // Focus Mode
    const btnFocus = document.getElementById("btn-focus-mode");
    if (btnFocus) {
      btnFocus.addEventListener("click", () => {
        document.body.classList.toggle("focus-mode-active");
        const active = document.body.classList.contains("focus-mode-active");
        btnFocus.classList.toggle("active", active);
        showToast(
          active
            ? "Focus mode enabled (Press ESC to exit)"
            : "Exited focus mode",
        );
      });
    }

    // Fullscreen Mode
    const btnFullscreen = document.getElementById("btn-fullscreen");
    if (btnFullscreen) {
      btnFullscreen.addEventListener("click", () => {
        const target =
          document.querySelector(".workspace-card") || document.documentElement;
        if (!document.fullscreenElement) {
          target.requestFullscreen().catch(() => {
            showToast("Fullscreen not supported in this frame");
          });
        } else {
          document.exitFullscreen();
        }
      });
    }

    // Toggle Find & Replace Drawer
    const btnToggleFind = document.getElementById("btn-toggle-find");
    if (btnToggleFind && DOM.findReplaceDrawer) {
      btnToggleFind.addEventListener("click", () => {
        DOM.findReplaceDrawer.classList.toggle("open");
        btnToggleFind.classList.toggle("active");
        if (DOM.findReplaceDrawer.classList.contains("open") && DOM.findInput) {
          DOM.findInput.focus();
        }
      });
    }

    if (DOM.btnFindReplaceOne)
      DOM.btnFindReplaceOne.addEventListener("click", () =>
        executeFindReplace(false),
      );
    if (DOM.btnFindReplaceAll)
      DOM.btnFindReplaceAll.addEventListener("click", () =>
        executeFindReplace(true),
      );

    // Text Cleaner dropdown
    const selectCleaner = document.getElementById("select-text-cleaner");
    if (selectCleaner) {
      selectCleaner.addEventListener("change", (e) => {
        if (e.target.value) {
          cleanText(e.target.value);
          e.target.value = "";
        }
      });
    }

    // Transformations dropdown
    const selectTransform = document.getElementById("select-transform");
    if (selectTransform) {
      selectTransform.addEventListener("change", (e) => {
        if (e.target.value) {
          transformText(e.target.value);
          e.target.value = "";
        }
      });
    }

    // Writing Goals Presets
    if (DOM.goalPresetSelect) {
      DOM.goalPresetSelect.addEventListener("change", (e) => {
        const val = e.target.value;
        if (!val || val === "0") {
          state.targetGoal = 0;
          if (DOM.goalStrip) DOM.goalStrip.classList.remove("open");
          return;
        }

        if (val === "twitter") {
          state.targetGoal = 280;
          state.targetType = "characters";
        } else {
          state.targetGoal = parseInt(val, 10);
          state.targetType = "words";
        }

        const instant = calculateInstantStats(DOM.editor.value);
        updateGoalProgress(instant.wordCount, instant.rawLen);
        showToast(`Target goal set to ${state.targetGoal} ${state.targetType}`);
      });
    }

    // Reading Speed Selector
    const readingSpeedSelect = document.getElementById("reading-speed-select");
    if (readingSpeedSelect) {
      readingSpeedSelect.addEventListener("change", (e) => {
        state.readingWPM = parseInt(e.target.value, 10) || 225;
        calculateInstantStats(DOM.editor.value);
        showToast(`Reading speed: ${state.readingWPM} WPM`);
      });
    }

    // Comparison Mode Toggle & Events
    const btnToggleCompare = document.getElementById("btn-toggle-compare");
    if (btnToggleCompare && DOM.comparisonSection) {
      btnToggleCompare.addEventListener("click", () => {
        DOM.comparisonSection.classList.toggle("open");
        btnToggleCompare.classList.toggle("active");
        if (DOM.comparisonSection.classList.contains("open")) {
          if (DOM.compareA && !DOM.compareA.value)
            DOM.compareA.value = DOM.editor.value;
          updateComparison();
        }
      });
    }

    if (DOM.compareA) DOM.compareA.addEventListener("input", updateComparison);
    if (DOM.compareB) DOM.compareB.addEventListener("input", updateComparison);

    // Analytics Tabs Switching
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.dataset.tab;
        document
          .querySelectorAll(".tab-btn")
          .forEach((b) => b.classList.remove("active"));
        document
          .querySelectorAll(".tab-panel")
          .forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        const panel = document.getElementById(`tab-${targetId}`);
        if (panel) panel.classList.add("active");
      });
    });

    // Word Frequency Filters
    if (DOM.toggleStopWords) {
      DOM.toggleStopWords.addEventListener("change", (e) => {
        state.filterStopWords = e.target.checked;
        handleEditorInput();
      });
    }

    // Keyword Density Input
    if (DOM.keywordInput) {
      DOM.keywordInput.addEventListener("input", () => {
        const instant = calculateInstantStats(DOM.editor.value);
        renderKeywordDensity(DOM.editor.value, instant.wordCount);
      });
    }

    // Phrase N-gram selectors
    if (DOM.phraseNgramSelect) {
      DOM.phraseNgramSelect.addEventListener("change", (e) => {
        state.phraseNgram = parseInt(e.target.value, 10);
        renderRepeatedPhrases(DOM.editor.value);
      });
    }

    if (DOM.phraseThresholdSelect) {
      DOM.phraseThresholdSelect.addEventListener("change", (e) => {
        state.phraseThreshold = parseInt(e.target.value, 10);
        renderRepeatedPhrases(DOM.editor.value);
      });
    }

    // History Toggle & Actions
    const btnToggleHistory = document.getElementById("btn-toggle-history");
    if (btnToggleHistory && DOM.historySection) {
      btnToggleHistory.addEventListener("click", () => {
        DOM.historySection.classList.toggle("open");
        renderHistoryList();
      });
    }

    if (DOM.historyList) {
      DOM.historyList.addEventListener("click", (e) => {
        const restoreId = e.target.dataset.historyRestore;
        const deleteId = e.target.dataset.historyDelete;
        if (restoreId) restoreHistoryItem(restoreId);
        if (deleteId) deleteHistoryItem(deleteId);
      });
    }

    const btnClearHistory = document.getElementById("btn-clear-history");
    if (btnClearHistory)
      btnClearHistory.addEventListener("click", clearAllHistory);

    if (DOM.toggleDisableHistory) {
      DOM.toggleDisableHistory.addEventListener("change", (e) => {
        state.historyEnabled = !e.target.checked;
        showToast(
          state.historyEnabled ? "History enabled" : "History disabled",
        );
      });
    }

    // Export & Copy Summary Actions
    const btnCopySummary = document.getElementById("btn-copy-summary");
    if (btnCopySummary) {
      btnCopySummary.addEventListener("click", () => {
        copyTextToClipboard(
          generateAnalysisSummary(),
          "Analysis summary copied!",
        );
      });
    }

    const btnDownloadText = document.getElementById("btn-download-text");
    if (btnDownloadText) {
      btnDownloadText.addEventListener("click", () => {
        downloadTextFile(DOM.editor.value, "huzikit-word-counter-document.txt");
      });
    }

    const btnDownloadSummary = document.getElementById("btn-download-summary");
    if (btnDownloadSummary) {
      btnDownloadSummary.addEventListener("click", () => {
        downloadTextFile(
          generateAnalysisSummary(),
          "huzikit-writing-analysis.txt",
        );
      });
    }
  }

  /* --------------------------------------------------------------------------
     25. DOM CONTENT LOADED ENTRY POINT
     -------------------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    init3DHeroTilt();
    initGlobalSearch();
    initMobileNav();
    initFAQAccordion();
    initWorkspaceControls();

    // Populate initial text if editor is empty
    if (DOM.editor && !DOM.editor.value.trim()) {
      DOM.editor.value = SAMPLE_TEXTS.blog;
    }

    // Trigger initial calculation
    handleEditorInput();
  });
})();
