/**
 * Huzikit.com — Official Contact Page JavaScript
 * Features:
 * - Direct Gmail Web Compose URL generator & new-tab launcher
 * - Popup-blocker detection & fallback links
 * - Copy email to clipboard utility
 * - Client-side form validation with inline feedback
 * - 3D card tilt animation (respecting prefers-reduced-motion)
 * - 30-tool search modal (Cmd/Ctrl + K, Arrow keys, Enter)
 * - Accessible FAQ accordion (click, space, enter, ARIA sync)
 * - Mobile responsive drawer with body scroll locking
 */

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================================================
  // 1. DATASET: 30 HUZIKIT TOOLS
  // ==========================================================================
  const HUZIKIT_TOOLS = [
    // Text Tools (8)
    {
      name: "Word Counter",
      category: "Text Tools",
      url: "https://huzikit.com/texttools/word-counter.html",
    },
    {
      name: "Character Counter",
      category: "Text Tools",
      url: "https://huzikit.com/texttools/character-counter.html",
    },
    {
      name: "Case Converter",
      category: "Text Tools",
      url: "https://huzikit.com/texttools/case-converter.html",
    },
    {
      name: "Remove Duplicate Lines",
      category: "Text Tools",
      url: "https://huzikit.com/texttools/remove-duplicate-lines.html",
    },
    {
      name: "Lorem Ipsum Generator",
      category: "Text Tools",
      url: "https://huzikit.com/texttools/loremipsumgenerator.html",
    },
    {
      name: "Password Generator",
      category: "Text Tools",
      url: "https://huzikit.com/texttools/passwordgenerator.html",
    },
    {
      name: "Text Reverser",
      category: "Text Tools",
      url: "https://huzikit.com/texttools/text-reverser.html",
    },
    {
      name: "Online Notepad",
      category: "Text Tools",
      url: "https://huzikit.com/texttools/onlinenotepad.html",
    },

    // Calculators (8)
    {
      name: "Age Calculator",
      category: "Calculators",
      url: "https://huzikit.com/calculator/agecalculator.html",
    },
    {
      name: "BMI Calculator",
      category: "Calculators",
      url: "https://huzikit.com/calculator/bmi-calculator.html",
    },
    {
      name: "Percentage Calculator",
      category: "Calculators",
      url: "https://huzikit.com/calculator/percentage-calculator.html",
    },
    {
      name: "Calorie Calculator",
      category: "Calculators",
      url: "https://huzikit.com/calculator/Calorie-Calculator.html",
    },
    {
      name: "Discount Calculator",
      category: "Calculators",
      url: "https://huzikit.com/calculator/discount-calculator.html",
    },
    {
      name: "Savings & Goal Calculator",
      category: "Calculators",
      url: "https://huzikit.com/calculator/saving&goalcalculator.html",
    },
    {
      name: "Tip Calculator",
      category: "Calculators",
      url: "https://huzikit.com/calculator/tip-calculator.html",
    },
    {
      name: "GPA Calculator",
      category: "Calculators",
      url: "https://huzikit.com/calculator/gpa-calculator.html",
    },

    // Image & PDF (6)
    {
      name: "Image Compressor",
      category: "Image & PDF",
      url: "https://huzikit.com/image&pdf/image-compressor.html",
    },
    {
      name: "Image Resizer",
      category: "Image & PDF",
      url: "https://huzikit.com/image&pdf/image-resizer.html",
    },
    {
      name: "PDF to Word",
      category: "Image & PDF",
      url: "https://huzikit.com/image&pdf/pdftowordconverter.html",
    },
    {
      name: "JPG to PNG",
      category: "Image & PDF",
      url: "https://huzikit.com/image&pdf/jpg-to-png.html",
    },
    {
      name: "Color Picker / HEX",
      category: "Image & PDF",
      url: "https://huzikit.com/image&pdf/colorpicker.html",
    },
    {
      name: "QR Code Generator",
      category: "Image & PDF",
      url: "https://huzikit.com/image&pdf/QRGenrator.html",
    },

    // Developer (8)
    {
      name: "JSON Formatter",
      category: "Developer",
      url: "https://huzikit.com/developertools/JSONFORMATTER.html",
    },
    {
      name: "Base64 Encoder/Decoder",
      category: "Developer",
      url: "https://huzikit.com/developertools/base64encoderdecoder.html",
    },
    {
      name: "URL Encoder/Decoder",
      category: "Developer",
      url: "https://huzikit.com/developertools/urlencoderdecoder.html",
    },
    {
      name: "Meta Tag Generator",
      category: "Developer",
      url: "https://huzikit.com/developertools/meta-tag-generator.html",
    },
    {
      name: "Regex Tester",
      category: "Developer",
      url: "https://huzikit.com/developertools/regextester.html",
    },
    {
      name: "Markdown to HTML",
      category: "Developer",
      url: "https://huzikit.com/developertools/markdownhtml.html",
    },
    {
      name: "CSS Minifier",
      category: "Developer",
      url: "https://huzikit.com/developertools/cssminifier.html",
    },
    {
      name: "Unix Timestamp",
      category: "Developer",
      url: "https://huzikit.com/developertools/unixtimestamp.html",
    },
  ];

  const SUPPORT_EMAIL = "support@huzikit.com";
  const GMAIL_BASE = "https://mail.google.com/mail/?view=cm&fs=1";

  // Topic subject map
  const TOPIC_SUBJECT_MAP = {
    "General Question": "[Huzikit Contact] General Question",
    "Tool Feedback": "[Huzikit Contact] Tool Feedback",
    "Bug Report": "[Huzikit Contact] Bug Report",
    "Feature Request": "[Huzikit Contact] Feature Request",
    "Privacy Question": "[Huzikit Contact] Privacy Question",
    "Business / Partnership": "[Huzikit Contact] Business / Partnership",
    Other: "[Huzikit Contact] General Message",
  };

  // ==========================================================================
  // 2. DOM ELEMENTS
  // ==========================================================================
  const contactForm = document.getElementById("huzikitContactForm");
  const nameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("emailAddress");
  const topicSelect = document.getElementById("topic");
  const messageInput = document.getElementById("message");
  const charCounter = document.getElementById("charCounter");
  const formStatus = document.getElementById("formStatus");
  const copyEmailBtns = document.querySelectorAll(".js-copy-email");
  const toastNotice = document.getElementById("toastNotice");

  // Search Modal Elements
  const searchTrigger = document.getElementById("searchTrigger");
  const searchModal = document.getElementById("searchModal");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const searchCloseKey = document.getElementById("searchCloseKey");

  // Mobile Menu Elements
  const mobileToggleBtn = document.getElementById("mobileMenuToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const drawerCloseBtn = document.getElementById("drawerCloseBtn");

  // 3D Visual Card
  const visualCard = document.getElementById("visual3DCard");
  const visualStage = document.getElementById("heroVisualStage");

  // Live Preview fields on 3D Card
  const liveTopicEl = document.getElementById("liveCardTopic");
  const liveSenderEl = document.getElementById("liveCardSender");

  // ==========================================================================
  // 3. TOAST NOTIFICATION UTILITY
  // ==========================================================================
  let toastTimer = null;
  function showToast(message) {
    if (!toastNotice) return;
    const toastText = document.getElementById("toastText");
    if (toastText) toastText.textContent = message;

    toastNotice.classList.add("active");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove("active");
    }, 3200);
  }

  // ==========================================================================
  // 4. COPY EMAIL TO CLIPBOARD
  // ==========================================================================
  copyEmailBtns.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(SUPPORT_EMAIL);
        } else {
          const tempArea = document.createElement("textarea");
          tempArea.value = SUPPORT_EMAIL;
          tempArea.style.position = "fixed";
          tempArea.style.opacity = "0";
          document.body.appendChild(tempArea);
          tempArea.focus();
          tempArea.select();
          document.execCommand("copy");
          document.body.removeChild(tempArea);
        }
        showToast("Email address copied.");
      } catch (err) {
        showToast("Email: support@huzikit.com");
      }
    });
  });

  // ==========================================================================
  // 5. LIVE CARD UPDATE & CHARACTER COUNTER
  // ==========================================================================
  if (messageInput && charCounter) {
    messageInput.addEventListener("input", () => {
      const len = messageInput.value.length;
      charCounter.textContent = `${len} / 3000`;
      if (len > 3000) {
        charCounter.style.color = "var(--error)";
      } else {
        charCounter.style.color = "var(--ink-faint)";
      }
    });
  }

  if (topicSelect && liveTopicEl) {
    topicSelect.addEventListener("change", () => {
      liveTopicEl.textContent = topicSelect.value || "General Question";
    });
  }

  if (nameInput && liveSenderEl) {
    nameInput.addEventListener("input", () => {
      liveSenderEl.textContent = nameInput.value.trim() || "Ready to Compose";
    });
  }

  // ==========================================================================
  // 6. FORM VALIDATION
  // ==========================================================================
  function setFieldError(fieldId, errorId, message) {
    const group = document.getElementById(fieldId)?.closest(".form-group");
    const errorEl = document.getElementById(errorId);
    if (group) group.classList.add("has-error");
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add("active");
    }
  }

  function clearFieldError(fieldId, errorId) {
    const group = document.getElementById(fieldId)?.closest(".form-group");
    const errorEl = document.getElementById(errorId);
    if (group) group.classList.remove("has-error");
    if (errorEl) {
      errorEl.textContent = "";
      errorEl.classList.remove("active");
    }
  }

  function clearAllErrors() {
    ["fullName", "emailAddress", "topic", "message"].forEach((id) => {
      const group = document.getElementById(id)?.closest(".form-group");
      if (group) group.classList.remove("has-error");
    });
    ["nameError", "emailError", "topicError", "messageError"].forEach((id) => {
      const err = document.getElementById(id);
      if (err) {
        err.textContent = "";
        err.classList.remove("active");
      }
    });
  }

  // Clear errors on input
  if (nameInput)
    nameInput.addEventListener("input", () =>
      clearFieldError("fullName", "nameError"),
    );
  if (emailInput)
    emailInput.addEventListener("input", () =>
      clearFieldError("emailAddress", "emailError"),
    );
  if (topicSelect)
    topicSelect.addEventListener("change", () =>
      clearFieldError("topic", "topicError"),
    );
  if (messageInput)
    messageInput.addEventListener("input", () =>
      clearFieldError("message", "messageError"),
    );

  function validateEmailFormat(email) {
    const re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    return re.test(email);
  }

  // ==========================================================================
  // 7. GMAIL COMPOSE URL GENERATION & LAUNCH (LOCKED BEHAVIOR)
  // ==========================================================================
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      clearAllErrors();

      const nameVal = nameInput ? nameInput.value.trim() : "";
      const emailVal = emailInput ? emailInput.value.trim() : "";
      const topicVal = topicSelect ? topicSelect.value.trim() : "";
      const messageVal = messageInput ? messageInput.value.trim() : "";

      let isValid = true;
      let firstInvalidEl = null;

      // 1. Validate Name
      if (!nameVal) {
        setFieldError("fullName", "nameError", "Please enter your full name.");
        isValid = false;
        if (!firstInvalidEl) firstInvalidEl = nameInput;
      } else if (nameVal.length < 2) {
        setFieldError(
          "fullName",
          "nameError",
          "Name must be at least 2 characters.",
        );
        isValid = false;
        if (!firstInvalidEl) firstInvalidEl = nameInput;
      } else if (nameVal.length > 100) {
        setFieldError(
          "fullName",
          "nameError",
          "Name must not exceed 100 characters.",
        );
        isValid = false;
        if (!firstInvalidEl) firstInvalidEl = nameInput;
      }

      // 2. Validate Email
      if (!emailVal) {
        setFieldError(
          "emailAddress",
          "emailError",
          "Please enter your email address.",
        );
        isValid = false;
        if (!firstInvalidEl) firstInvalidEl = emailInput;
      } else if (!validateEmailFormat(emailVal)) {
        setFieldError(
          "emailAddress",
          "emailError",
          "Please enter a valid email address (e.g. alex@example.com).",
        );
        isValid = false;
        if (!firstInvalidEl) firstInvalidEl = emailInput;
      } else if (emailVal.length > 120) {
        setFieldError(
          "emailAddress",
          "emailError",
          "Email address is too long.",
        );
        isValid = false;
        if (!firstInvalidEl) firstInvalidEl = emailInput;
      }

      // 3. Validate Topic
      if (!topicVal) {
        setFieldError("topic", "topicError", "Please select a topic.");
        isValid = false;
        if (!firstInvalidEl) firstInvalidEl = topicSelect;
      }

      // 4. Validate Message
      if (!messageVal) {
        setFieldError("message", "messageError", "Please enter your message.");
        isValid = false;
        if (!firstInvalidEl) firstInvalidEl = messageInput;
      } else if (messageVal.length < 10) {
        setFieldError(
          "message",
          "messageError",
          "Message must be at least 10 characters.",
        );
        isValid = false;
        if (!firstInvalidEl) firstInvalidEl = messageInput;
      } else if (messageVal.length > 3000) {
        setFieldError(
          "message",
          "messageError",
          "Message exceeds maximum length of 3000 characters.",
        );
        isValid = false;
        if (!firstInvalidEl) firstInvalidEl = messageInput;
      }

      if (!isValid) {
        if (firstInvalidEl) firstInvalidEl.focus();
        return;
      }

      // 5. Generate Subject
      const generatedSubject =
        TOPIC_SUBJECT_MAP[topicVal] || `[Huzikit Contact] ${topicVal}`;

      // 6. Generate Plain Text Body (Preserve line breaks, no HTML)
      const generatedBody = `Hello Huzikit Team,

I am contacting you through the Huzikit website.

Name:
${nameVal}

Email:
${emailVal}

Topic:
${topicVal}

Message:
${messageVal}

Thank you.`;

      // 7. Construct URL with encodeURIComponent
      const gmailUrl = `${GMAIL_BASE}&to=${encodeURIComponent(SUPPORT_EMAIL)}&su=${encodeURIComponent(generatedSubject)}&body=${encodeURIComponent(generatedBody)}`;

      // 8. Open in a NEW TAB synchronously inside user click event
      let newTab = null;
      try {
        newTab = window.open(gmailUrl, "_blank", "noopener,noreferrer");
      } catch (err) {
        newTab = null;
      }

      // 9. Popup Blocker Detection & Accurate Status Display
      if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
        // Popup was blocked or prevented by browser
        if (formStatus) {
          formStatus.className = "status-banner status-banner-warning active";
          formStatus.innerHTML = `
            <div class="status-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <div class="status-content">
              <strong>Gmail could not be opened automatically.</strong>
              Please <a href="${gmailUrl}" target="_blank" rel="noopener noreferrer">click here to open Gmail compose</a>, or visit <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">mail.google.com</a> and send your message to <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>.
            </div>
          `;
          formStatus.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      } else {
        // Successfully opened new tab
        if (formStatus) {
          formStatus.className = "status-banner status-banner-success active";
          formStatus.innerHTML = `
            <div class="status-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div class="status-content">
              <strong>Gmail has been opened.</strong>
              Review your message in the newly opened tab and press Gmail's own "Send" button. (Huzikit does not send or store emails directly).
            </div>
          `;
          formStatus.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    });
  }

  // ==========================================================================
  // 8. 3D INTERACTIVE HERO CARD VISUAL (HTML + CSS + VANILLA JS)
  // ==========================================================================
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (visualStage && visualCard && !prefersReducedMotion) {
    let isHovering = false;

    visualStage.addEventListener("mouseenter", () => {
      isHovering = true;
    });

    visualStage.addEventListener("mousemove", (e) => {
      if (!isHovering) return;
      const rect = visualStage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Max tilt degrees: ~12deg
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      visualCard.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    });

    visualStage.addEventListener("mouseleave", () => {
      isHovering = false;
      visualCard.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  }

  // ==========================================================================
  // 9. SEARCH MODAL LOGIC (CTRL/CMD + K, KEYBOARD NAVIGATION)
  // ==========================================================================
  let selectedIndex = -1;
  let currentFilteredTools = [];

  function openSearchModal() {
    if (!searchModal) return;
    searchModal.classList.add("active");
    document.body.classList.add("scroll-locked");
    if (searchInput) {
      searchInput.value = "";
      searchInput.focus();
      renderSearchResults(HUZIKIT_TOOLS);
    }
  }

  function closeSearchModal() {
    if (!searchModal) return;
    searchModal.classList.remove("active");
    document.body.classList.remove("scroll-locked");
    selectedIndex = -1;
  }

  function renderSearchResults(tools) {
    currentFilteredTools = tools;
    selectedIndex = -1;
    if (!searchResults) return;

    if (tools.length === 0) {
      searchResults.innerHTML = `
        <div class="search-empty-state">
          <p>No tools found matching your search.</p>
        </div>
      `;
      return;
    }

    // Group by category
    const grouped = {};
    tools.forEach((tool) => {
      if (!grouped[tool.category]) grouped[tool.category] = [];
      grouped[tool.category].push(tool);
    });

    let html = "";
    let globalIdx = 0;
    for (const [catName, list] of Object.entries(grouped)) {
      html += `<div class="search-category-group">`;
      html += `<div class="search-group-title">${catName}</div>`;
      list.forEach((t) => {
        html += `
          <a href="${t.url}" class="search-result-item" data-index="${globalIdx}">
            <span class="search-result-title">${t.name}</span>
            <span class="search-result-badge">${t.category}</span>
          </a>
        `;
        globalIdx++;
      });
      html += `</div>`;
    }
    searchResults.innerHTML = html;
  }

  if (searchTrigger) {
    searchTrigger.addEventListener("click", openSearchModal);
  }

  if (searchCloseKey) {
    searchCloseKey.addEventListener("click", closeSearchModal);
  }

  if (searchModal) {
    searchModal.addEventListener("click", (e) => {
      if (e.target === searchModal) closeSearchModal();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim().toLowerCase();
      if (!q) {
        renderSearchResults(HUZIKIT_TOOLS);
        return;
      }
      const filtered = HUZIKIT_TOOLS.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q),
      );
      renderSearchResults(filtered);
    });

    searchInput.addEventListener("keydown", (e) => {
      const items = searchResults?.querySelectorAll(".search-result-item");
      if (!items || items.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % items.length;
        updateSearchSelection(items);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        updateSearchSelection(items);
      } else if (e.key === "Enter") {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          items[selectedIndex].click();
        }
      }
    });
  }

  function updateSearchSelection(items) {
    items.forEach((item, idx) => {
      if (idx === selectedIndex) {
        item.classList.add("selected");
        item.scrollIntoView({ block: "nearest" });
      } else {
        item.classList.remove("selected");
      }
    });
  }

  // Global Keyboard Shortcuts (Ctrl+K / Cmd+K / Escape)
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (searchModal?.classList.contains("active")) {
        closeSearchModal();
      } else {
        openSearchModal();
      }
    } else if (e.key === "Escape") {
      if (searchModal?.classList.contains("active")) {
        closeSearchModal();
      }
      if (mobileDrawer?.classList.contains("active")) {
        closeMobileMenu();
      }
    }
  });

  // ==========================================================================
  // 10. MOBILE NAVIGATION DRAWER
  // ==========================================================================
  function openMobileMenu() {
    if (mobileDrawer && mobileOverlay) {
      mobileDrawer.classList.add("active");
      mobileOverlay.classList.add("active");
      document.body.classList.add("scroll-locked");
      if (mobileToggleBtn)
        mobileToggleBtn.setAttribute("aria-expanded", "true");
    }
  }

  function closeMobileMenu() {
    if (mobileDrawer && mobileOverlay) {
      mobileDrawer.classList.remove("active");
      mobileOverlay.classList.remove("active");
      document.body.classList.remove("scroll-locked");
      if (mobileToggleBtn)
        mobileToggleBtn.setAttribute("aria-expanded", "false");
    }
  }

  if (mobileToggleBtn)
    mobileToggleBtn.addEventListener("click", openMobileMenu);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeMobileMenu);

  // Mobile Accordion Inside Drawer
  const mobileAccordions = document.querySelectorAll(
    ".mobile-accordion-trigger",
  );
  mobileAccordions.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const parent = trigger.closest(".mobile-accordion-item");
      if (parent) {
        parent.classList.toggle("active");
      }
    });
  });

  // ==========================================================================
  // 11. ACCESSIBLE FAQ ACCORDION (Click, Enter, Space, ARIA sync)
  // ==========================================================================
  const faqTriggers = document.querySelectorAll(".faq-trigger");
  faqTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      toggleFaq(trigger);
    });

    trigger.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleFaq(trigger);
      }
    });
  });

  function toggleFaq(btn) {
    const parent = btn.closest(".faq-item");
    const answer = parent?.querySelector(".faq-answer-panel");
    if (!parent || !answer) return;

    const isExpanded = btn.getAttribute("aria-expanded") === "true";

    // Toggle current item
    if (isExpanded) {
      btn.setAttribute("aria-expanded", "false");
      parent.classList.remove("active");
      answer.setAttribute("hidden", "");
    } else {
      btn.setAttribute("aria-expanded", "true");
      parent.classList.add("active");
      answer.removeAttribute("hidden");
    }
  }
});
