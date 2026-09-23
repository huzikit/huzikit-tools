/* Huzikit Premium GPA Calculator — Production Vanilla JS Architecture */

document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});

// Complete Huzikit Tools Registry for Search Modal
const huzikitTools = [
  {
    name: "Word Counter",
    category: "Text Tools",
    url: "/texttools/word-counter.html",
    keywords: ["words", "characters", "count", "text"],
  },
  {
    name: "Character Counter",
    category: "Text Tools",
    url: "/texttools/character-counter.html",
    keywords: ["characters", "letters", "spaces"],
  },
  {
    name: "Case Converter",
    category: "Text Tools",
    url: "/texttools/case-converter.html",
    keywords: ["uppercase", "lowercase", "titlecase"],
  },
  {
    name: "Remove Duplicate Lines",
    category: "Text Tools",
    url: "/texttools/remove-duplicate-lines.html",
    keywords: ["duplicates", "lines", "clean"],
  },
  {
    name: "Lorem Ipsum Generator",
    category: "Text Tools",
    url: "/texttools/loremipsumgenerator.html",
    keywords: ["dummy text", "placeholder"],
  },
  {
    name: "Password Generator",
    category: "Text Tools",
    url: "/texttools/passwordgenerator.html",
    keywords: ["secure", "passwords", "keys"],
  },
  {
    name: "Text Reverser",
    category: "Text Tools",
    url: "/texttools/text-reverser.html",
    keywords: ["reverse", "flip", "text"],
  },
  {
    name: "Online Notepad",
    category: "Text Tools",
    url: "/texttools/onlinenotepad.html",
    keywords: ["notepad", "notes", "write"],
  },

  {
    name: "Age Calculator",
    category: "Calculators",
    url: "/calculator/agecalculator.html",
    keywords: ["age", "date", "birth"],
  },
  {
    name: "BMI Calculator",
    category: "Calculators",
    url: "/calculator/bmi-calculator.html",
    keywords: ["bmi", "body mass", "health"],
  },
  {
    name: "Percentage Calculator",
    category: "Calculators",
    url: "/calculator/percentage-calculator.html",
    keywords: ["percentage", "math"],
  },
  {
    name: "Calorie Calculator",
    category: "Calculators",
    url: "/calculator/Calorie-Calculator.html",
    keywords: ["calories", "diet", "brm"],
  },
  {
    name: "Discount Calculator",
    category: "Calculators",
    url: "/calculator/discount-calculator.html",
    keywords: ["discount", "sale", "price"],
  },
  {
    name: "Savings & Goal Calculator",
    category: "Calculators",
    url: "/calculator/saving&goalcalculator.html",
    keywords: ["savings", "money", "goal"],
  },
  {
    name: "Tip Calculator",
    category: "Calculators",
    url: "/calculator/tip-calculator.html",
    keywords: ["tip", "restaurant", "bill"],
  },
  {
    name: "GPA Calculator",
    category: "Calculators",
    url: "/calculator/gpa-calculator.html",
    keywords: ["gpa", "grades", "university", "college"],
  },

  {
    name: "Image Compressor",
    category: "Image & PDF",
    url: "/image&pdf/image-compressor.html",
    keywords: ["compress", "image", "jpg", "png"],
  },
  {
    name: "Image Resizer",
    category: "Image & PDF",
    url: "/image&pdf/image-resizer.html",
    keywords: ["resize", "dimensions", "image"],
  },
  {
    name: "PDF to Word",
    category: "Image & PDF",
    url: "/image&pdf/pdftowordconverter.html",
    keywords: ["pdf", "word", "convert"],
  },
  {
    name: "JPG to PNG",
    category: "Image & PDF",
    url: "/image&pdf/jpg-to-png.html",
    keywords: ["jpg", "png", "convert"],
  },
  {
    name: "Color Picker / HEX",
    category: "Image & PDF",
    url: "/image&pdf/colorpicker.html",
    keywords: ["color", "hex", "picker"],
  },
  {
    name: "QR Code Generator",
    category: "Image & PDF",
    url: "/image&pdf/QRGenrator.html",
    keywords: ["qr code", "barcode", "generator"],
  },

  {
    name: "JSON Formatter",
    category: "Developer",
    url: "/developertools/JSONFORMATTER.html",
    keywords: ["json", "format", "validate"],
  },
  {
    name: "Base64 Encoder/Decoder",
    category: "Developer",
    url: "/developertools/base64encoderdecoder.html",
    keywords: ["base64", "encode", "decode"],
  },
  {
    name: "URL Encoder/Decoder",
    category: "Developer",
    url: "/developertools/urlencoderdecoder.html",
    keywords: ["url", "encode", "decode"],
  },
  {
    name: "Meta Tag Generator",
    category: "Developer",
    url: "/developertools/meta-tag-generator.html",
    keywords: ["meta", "seo", "tags"],
  },
  {
    name: "Regex Tester",
    category: "Developer",
    url: "/developertools/regextester.html",
    keywords: ["regex", "regular expression"],
  },
  {
    name: "Markdown to HTML",
    category: "Developer",
    url: "/developertools/markdownhtml.html",
    keywords: ["markdown", "html", "convert"],
  },
  {
    name: "CSS Minifier",
    category: "Developer",
    url: "/developertools/cssminifier.html",
    keywords: ["css", "minify", "compress"],
  },
  {
    name: "Unix Timestamp",
    category: "Developer",
    url: "/developertools/unixtimestamp.html",
    keywords: ["unix", "timestamp", "time"],
  },
];

// Default Grade Mappings (4.0 Scale)
const defaultGradePoints = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  F: 0.0,
};

let currentGradePoints = { ...defaultGradePoints };

// Initial Default Course Rows
let courses = [
  { name: "Mathematics", credits: 3, grade: "A" },
  { name: "English", credits: 3, grade: "B+" },
  { name: "Physics", credits: 4, grade: "A-" },
  { name: "Computer Science", credits: 3, grade: "A" },
];

let whatIfCourses = [];

function initializeApp() {
  initializeNavigation();
  initializeSearch();
  initializeFAQ();
  initializeCalculator();
}

// Navigation & Mobile Menu
function initializeNavigation() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileClose = document.getElementById("mobileClose");
  const accordions = document.querySelectorAll(".mobile-accordion");

  function toggleMenu(open) {
    if (open) {
      mobileMenu.classList.add("active");
      hamburgerBtn.classList.add("active");
      document.body.style.overflow = "hidden";
      hamburgerBtn.setAttribute("aria-expanded", "true");
    } else {
      mobileMenu.classList.remove("active");
      hamburgerBtn.classList.remove("active");
      document.body.style.overflow = "";
      hamburgerBtn.setAttribute("aria-expanded", "false");
    }
  }

  hamburgerBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("active");
    toggleMenu(!isOpen);
  });

  mobileClose.addEventListener("click", () => toggleMenu(false));
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) toggleMenu(false);
  });

  accordions.forEach((acc) => {
    const btn = acc.querySelector(".acc-btn");
    const content = acc.querySelector(".acc-content");
    btn.addEventListener("click", () => {
      const isActive = acc.classList.contains("active");
      accordions.forEach((a) => {
        a.classList.remove("active");
        a.querySelector(".acc-content").style.maxHeight = null;
      });
      if (!isActive) {
        acc.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      toggleMenu(false);
      closeSearchModal();
    }
  });
}

// Search System
function initializeSearch() {
  const searchTrigger = document.getElementById("searchTrigger");
  const searchModal = document.getElementById("searchModal");
  const searchModalClose = document.getElementById("searchModalClose");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  function openSearch() {
    searchModal.classList.add("active");
    searchModal.setAttribute("aria-hidden", "false");
    searchInput.focus();
    document.body.style.overflow = "hidden";
  }

  function closeSearchModal() {
    searchModal.classList.remove("active");
    searchModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    searchInput.value = "";
    searchResults.innerHTML =
      '<div class="search-hint">Type to instantly search web utilities and calculators.</div>';
  }

  searchTrigger.addEventListener("click", openSearch);
  searchModalClose.addEventListener("click", closeSearchModal);
  searchModal.addEventListener("click", (e) => {
    if (e.target === searchModal) closeSearchModal();
  });

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openSearch();
    }
  });

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
      searchResults.innerHTML =
        '<div class="search-hint">Type to instantly search web utilities and calculators.</div>';
      return;
    }

    const filtered = huzikitTools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query) ||
        tool.keywords.some((kw) => kw.includes(query)),
    );

    if (filtered.length === 0) {
      searchResults.innerHTML =
        '<div class="search-hint">No matching tools found.</div>';
      return;
    }

    searchResults.innerHTML = filtered
      .map(
        (tool) => `
            <a href="${tool.url}" class="search-result-item">
                <div class="search-result-cat">${tool.category}</div>
                <div class="search-result-title">${tool.name}</div>
            </a>
        `,
      )
      .join("");
  });
}

// FAQ Accordion
function initializeFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      faqItems.forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        i.querySelector(".faq-answer").style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

// GPA Calculator Core Logic
function initializeCalculator() {
  renderCourseTable();
  setupEventListeners();
  calculateGPA();
}

function renderCourseTable() {
  const tbody = document.getElementById("courseTableBody");
  tbody.innerHTML = "";

  courses.forEach((course, index) => {
    const tr = document.createElement("tr");

    let gradeOptions = "";
    for (const [gradeKey] of Object.entries(currentGradePoints)) {
      gradeOptions += `<option value="${gradeKey}" ${course.grade === gradeKey ? "selected" : ""}>${gradeKey}</option>`;
    }

    const gradePts =
      currentGradePoints[course.grade] !== undefined
        ? currentGradePoints[course.grade]
        : 0.0;
    const qualityPts = (Number(course.credits) || 0) * gradePts;

    tr.innerHTML = `
            <td><input type="text" class="form-control course-name-input" data-index="${index}" value="${course.name}" placeholder="Course Name"></td>
            <td><input type="number" class="form-control course-cred-input" data-index="${index}" value="${course.credits}" step="0.5" min="0.1" placeholder="Credits"></td>
            <td><select class="form-select course-grade-select" data-index="${index}">${gradeOptions}</select></td>
            <td class="course-gradepoints">${gradePts.toFixed(2)}</td>
            <td class="course-qualitypoints">${qualityPts.toFixed(2)}</td>
            <td><button class="remove-row-btn" data-index="${index}" aria-label="Remove course">&times;</button></td>
        `;
    tbody.appendChild(tr);
  });

  attachTableListeners();
}

function attachTableListeners() {
  document.querySelectorAll(".course-name-input").forEach((input) => {
    input.addEventListener("input", (e) => {
      const idx = e.target.getAttribute("data-index");
      courses[idx].name = e.target.value;
    });
  });

  document.querySelectorAll(".course-cred-input").forEach((input) => {
    input.addEventListener("input", (e) => {
      const idx = e.target.getAttribute("data-index");
      courses[idx].credits = parseFloat(e.target.value) || 0;
      calculateGPA();
    });
  });

  document.querySelectorAll(".course-grade-select").forEach((select) => {
    select.addEventListener("change", (e) => {
      const idx = e.target.getAttribute("data-index");
      courses[idx].grade = e.target.value;
      calculateGPA();
      renderCourseTable(); // Re-render to update grade points and quality points dynamically
    });
  });

  document.querySelectorAll(".remove-row-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.getAttribute("data-index");
      courses.splice(idx, 1);
      renderCourseTable();
      calculateGPA();
    });
  });
}

function calculateGPA() {
  let totalCredits = 0;
  let totalQualityPoints = 0;
  let validCourseCount = courses.length;

  courses.forEach((course) => {
    const creds = parseFloat(course.credits) || 0;
    const gradePts =
      currentGradePoints[course.grade] !== undefined
        ? currentGradePoints[course.grade]
        : 0.0;
    totalCredits += creds;
    totalQualityPoints += creds * gradePts;
  });

  let gpa = totalCredits > 0 ? totalQualityPoints / totalCredits : 0.0;
  if (isNaN(gpa)) gpa = 0.0;

  // Update Dashboard UI
  const scaleSelect = document.getElementById("gpaScaleSelect").value;
  let maxScale = 4.0;
  if (scaleSelect === "5.0") maxScale = 5.0;
  else if (scaleSelect === "10.0") maxScale = 10.0;
  else if (scaleSelect === "custom")
    maxScale = Math.max(...Object.values(currentGradePoints)) || 4.0;

  document.getElementById("resultGpa").textContent = gpa.toFixed(2);
  document.getElementById("resultCredits").textContent = totalCredits;
  document.getElementById("resultQualityPoints").textContent =
    totalQualityPoints.toFixed(2);
  document.getElementById("resultCourseCount").textContent = validCourseCount;

  // Progress Meter
  const percentage = Math.min(Math.max((gpa / maxScale) * 100, 0), 100);
  document.getElementById("gpaMeterFill").style.width = percentage + "%";
  document.getElementById("meterMaxLabel").textContent = maxScale.toFixed(2);

  // Status Message
  let statusMsg = "GPA calculated successfully";
  if (gpa >= maxScale * 0.85)
    statusMsg = "Strong academic result (Dean's List caliber)";
  else if (gpa >= maxScale * 0.7) statusMsg = "Good academic standing";
  else if (totalCredits === 0)
    statusMsg = "Enter credit hours and grades to calculate GPA";
  else statusMsg = "GPA currently below scale midpoint";
  document.getElementById("gpaStatusMsg").textContent = statusMsg;

  // Calculate Cumulative & Target if inputs present
  calculateCumulativeGPA(gpa, totalCredits);
  calculateTargetGPA(gpa, totalCredits, maxScale);
}

function calculateCumulativeGPA(currentGpa, currentCredits) {
  const prevGpa = parseFloat(document.getElementById("prevGpaInput").value);
  const prevCreds = parseFloat(document.getElementById("prevCredInput").value);
  const resultBox = document.getElementById("cumulativeResultBox");

  if (
    !isNaN(prevGpa) &&
    !isNaN(prevCreds) &&
    (prevCreds > 0 || currentCredits > 0)
  ) {
    const totalCreds = prevCreds + currentCredits;
    const cumulative =
      totalCreds > 0
        ? (prevGpa * prevCreds + currentGpa * currentCredits) / totalCreds
        : 0.0;
    resultBox.innerHTML = `<span>Cumulative GPA: <strong>${cumulative.toFixed(2)}</strong> (${totalCreds} total credits)</span>`;
  } else {
    resultBox.innerHTML = `<span>Cumulative GPA: <strong>—</strong></span>`;
  }
}

function calculateTargetGPA(currentGpa, completedCredits, maxScale) {
  const targetGpa = parseFloat(document.getElementById("targetGpaInput").value);
  const upcomingCreds = parseFloat(
    document.getElementById("upcomingCredInput").value,
  );
  const resultBox = document.getElementById("targetResultBox");

  if (!isNaN(targetGpa) && !isNaN(upcomingCreds) && upcomingCreds > 0) {
    const totalCreds = completedCredits + upcomingCreds;
    const totalQualityPointsNeeded = targetGpa * totalCreds;
    const currentQualityPoints = currentGpa * completedCredits;
    const upcomingPointsNeeded =
      totalQualityPointsNeeded - currentQualityPoints;
    const requiredGpa = upcomingPointsNeeded / upcomingCreds;

    if (requiredGpa > maxScale) {
      resultBox.innerHTML = `<span>Target GPA is <strong>not achievable</strong> within the selected GPA scale (${maxScale.toFixed(2)} max). Requires ${requiredGpa.toFixed(2)}.</span>`;
    } else if (requiredGpa < 0) {
      resultBox.innerHTML = `<span>Target GPA is <strong>already achieved</strong>!</span>`;
    } else {
      resultBox.innerHTML = `<span>Required GPA over upcoming ${upcomingCreds} credits: <strong>${requiredGpa.toFixed(2)}</strong></span>`;
    }
  } else {
    resultBox.innerHTML = `<span>Required GPA: <strong>—</strong></span>`;
  }
}

function setupEventListeners() {
  document.getElementById("addCourseBtn").addEventListener("click", () => {
    courses.push({
      name: `Course ${courses.length + 1}`,
      credits: 3,
      grade: "A",
    });
    renderCourseTable();
    calculateGPA();
  });

  document
    .getElementById("heroLoadExampleBtn")
    .addEventListener("click", loadExampleData);
  document
    .getElementById("resetBtn")
    .addEventListener("click", resetCalculator);

  document.getElementById("gpaScaleSelect").addEventListener("change", (e) => {
    const val = e.target.value;
    const customSec = document.getElementById("customScaleSection");
    document.getElementById("resultScaleDisplay").textContent =
      e.target.options[e.target.selectedIndex].text;

    if (val === "custom") {
      customSec.style.display = "block";
      renderCustomScaleEditor();
    } else {
      customSec.style.display = "none";
      if (val === "4.0") currentGradePoints = { ...defaultGradePoints };
      else if (val === "5.0") {
        currentGradePoints = {
          "A+": 5.0,
          A: 5.0,
          "A-": 4.7,
          "B+": 4.3,
          B: 4.0,
          "B-": 3.7,
          "C+": 3.3,
          C: 3.0,
          "C-": 2.7,
          "D+": 2.3,
          D: 2.0,
          F: 0.0,
        };
      } else if (val === "10.0") {
        currentGradePoints = {
          "A+": 10.0,
          A: 9.0,
          "A-": 8.0,
          "B+": 7.0,
          B: 6.0,
          "B-": 5.0,
          "C+": 4.0,
          C: 3.0,
          "C-": 2.0,
          "D+": 1.0,
          D: 1.0,
          F: 0.0,
        };
      }
      renderCourseTable();
      calculateGPA();
    }
  });

  document.getElementById("saveLocalBtn").addEventListener("click", () => {
    try {
      localStorage.setItem("huzikit_gpa_courses", JSON.stringify(courses));
      showToast("Progress saved locally!");
    } catch (e) {
      showToast("Failed to save to local storage.");
    }
  });

  document.getElementById("copySummaryBtn").addEventListener("click", () => {
    const gpa = document.getElementById("resultGpa").textContent;
    const credits = document.getElementById("resultCredits").textContent;
    const qp = document.getElementById("resultQualityPoints").textContent;
    const count = document.getElementById("resultCourseCount").textContent;

    const summary = `Huzikit GPA Calculator\n\nGPA: ${gpa}\nTotal Credits: ${credits}\nQuality Points: ${qp}\nCourses: ${count}`;
    navigator.clipboard.writeText(summary).then(() => {
      showToast("GPA Summary copied to clipboard!");
    });
  });

  document
    .getElementById("prevGpaInput")
    .addEventListener("input", calculateGPA);
  document
    .getElementById("prevCredInput")
    .addEventListener("input", calculateGPA);
  document
    .getElementById("targetGpaInput")
    .addEventListener("input", calculateGPA);
  document
    .getElementById("upcomingCredInput")
    .addEventListener("input", calculateGPA);

  document.getElementById("addWhatIfBtn").addEventListener("click", () => {
    const name =
      document.getElementById("whatIfName").value.trim() ||
      "Hypothetical Course";
    const creds = parseFloat(document.getElementById("whatIfCreds").value);
    const gradePts = parseFloat(document.getElementById("whatIfGrade").value);

    if (isNaN(creds) || creds <= 0) {
      showToast("Please enter valid credit hours.");
      return;
    }

    whatIfCourses.push({ name, credits: creds, gradePts });
    renderWhatIfList();
    projectWhatIfGPA();
  });

  // Load saved localStorage if available
  try {
    const saved = localStorage.getItem("huzikit_gpa_courses");
    if (saved) {
      courses = JSON.parse(saved);
      renderCourseTable();
      calculateGPA();
    }
  } catch (e) {}
}

function renderCustomScaleEditor() {
  const grid = document.getElementById("customScaleGrid");
  grid.innerHTML = "";
  for (const [grade, pts] of Object.entries(currentGradePoints)) {
    const div = document.createElement("div");
    div.className = "custom-scale-item";
    div.innerHTML = `
            <label>${grade}</label>
            <input type="number" step="0.01" min="0" class="form-control custom-grade-input" data-grade="${grade}" value="${pts}">
        `;
    grid.appendChild(div);
  }

  document.getElementById("applyCustomScaleBtn").onclick = () => {
    document.querySelectorAll(".custom-grade-input").forEach((input) => {
      const grade = input.getAttribute("data-grade");
      const val = parseFloat(input.value);
      if (!isNaN(val)) currentGradePoints[grade] = val;
    });
    renderCourseTable();
    calculateGPA();
    showToast("Custom scale applied successfully!");
  };

  document.getElementById("resetCustomScaleBtn").onclick = () => {
    currentGradePoints = { ...defaultGradePoints };
    renderCustomScaleEditor();
    renderCourseTable();
    calculateGPA();
    showToast("Reset to default scale.");
  };
}

function renderWhatIfList() {
  const list = document.getElementById("whatIfResultsList");
  list.innerHTML = whatIfCourses
    .map(
      (item, idx) => `
        <div class="whatif-item">
            <span><strong>${item.name}</strong> — ${item.credits} Credits (${item.gradePts.toFixed(2)} pts)</span>
            <button class="remove-row-btn" onclick="removeWhatIf(${idx})">&times;</button>
        </div>
    `,
    )
    .join("");
}

window.removeWhatIf = function (idx) {
  whatIfCourses.splice(idx, 1);
  renderWhatIfList();
  projectWhatIfGPA();
};

function projectWhatIfGPA() {
  let currentCredits = 0;
  let currentQualityPoints = 0;

  courses.forEach((course) => {
    const creds = parseFloat(course.credits) || 0;
    const gradePts =
      currentGradePoints[course.grade] !== undefined
        ? currentGradePoints[course.grade]
        : 0.0;
    currentCredits += creds;
    currentQualityPoints += creds * gradePts;
  });

  whatIfCourses.forEach((item) => {
    currentCredits += item.credits;
    currentQualityPoints += item.credits * item.gradePts;
  });

  const projectedGpa =
    currentCredits > 0 ? currentQualityPoints / currentCredits : 0.0;
  if (whatIfCourses.length > 0) {
    document.getElementById("gpaStatusMsg").textContent =
      `Projected GPA with What-If courses: ${projectedGpa.toFixed(2)}`;
  }
}

function loadExampleData() {
  courses = [
    { name: "Mathematics", credits: 3, grade: "A" },
    { name: "English", credits: 3, grade: "B+" },
    { name: "Physics", credits: 4, grade: "A-" },
    { name: "Computer Science", credits: 3, grade: "A" },
  ];
  document.getElementById("gpaScaleSelect").value = "4.0";
  currentGradePoints = { ...defaultGradePoints };
  document.getElementById("customScaleSection").style.display = "none";
  document.getElementById("resultScaleDisplay").textContent = "4.0 Scale";
  renderCourseTable();
  calculateGPA();
  showToast("Example data loaded successfully!");
}

function resetCalculator() {
  courses = [
    { name: "Course 1", credits: 3, grade: "A" },
    { name: "Course 2", credits: 3, grade: "B" },
    { name: "Course 3", credits: 3, grade: "A" },
    { name: "Course 4", credits: 3, grade: "B+" },
  ];
  whatIfCourses = [];
  document.getElementById("prevGpaInput").value = "";
  document.getElementById("prevCredInput").value = "";
  document.getElementById("targetGpaInput").value = "";
  document.getElementById("upcomingCredInput").value = "";
  document.getElementById("whatIfName").value = "";
  document.getElementById("whatIfCreds").value = "";
  document.getElementById("whatIfResultsList").innerHTML = "";
  document.getElementById("gpaScaleSelect").value = "4.0";
  currentGradePoints = { ...defaultGradePoints };
  document.getElementById("customScaleSection").style.display = "none";
  document.getElementById("resultScaleDisplay").textContent = "4.0 Scale";
  renderCourseTable();
  calculateGPA();
  try {
    localStorage.removeItem("huzikit_gpa_courses");
  } catch (e) {}
  showToast("Calculator reset.");
}

function showToast(message) {
  const toast = document.getElementById("toastNotification");
  toast.textContent = message;
  toast.classList.add("active");
  setTimeout(() => {
    toast.classList.remove("active");
  }, 3000);
}
