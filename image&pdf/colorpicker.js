/**
 * HUZIKIT — PREMIUM COLOR PICKER & HEX COLOR TOOL
 * Complete Vanilla JavaScript Engine
 * Brand: Huzikit (https://huzikit.com)
 */

(function () {
  "use strict";

  /* ==========================================================================
     1. COLOR CONVERSION & MATH ENGINE
     ========================================================================== */

  // Clamp number between min and max
  function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }

  // HSV (0-360, 0-100, 0-100) to RGB (0-255, 0-255, 0-255)
  function hsvToRgb(h, s, v) {
    h = ((h % 360) + 360) % 360;
    s = clamp(s, 0, 100) / 100;
    v = clamp(v, 0, 100) / 100;

    var c = v * s;
    var x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    var m = v - c;

    var r1 = 0,
      g1 = 0,
      b1 = 0;
    if (h >= 0 && h < 60) {
      r1 = c;
      g1 = x;
      b1 = 0;
    } else if (h >= 60 && h < 120) {
      r1 = x;
      g1 = c;
      b1 = 0;
    } else if (h >= 120 && h < 180) {
      r1 = 0;
      g1 = c;
      b1 = x;
    } else if (h >= 180 && h < 240) {
      r1 = 0;
      g1 = x;
      b1 = c;
    } else if (h >= 240 && h < 300) {
      r1 = x;
      g1 = 0;
      b1 = c;
    } else {
      r1 = c;
      g1 = 0;
      b1 = x;
    }

    return {
      r: Math.round((r1 + m) * 255),
      g: Math.round((g1 + m) * 255),
      b: Math.round((b1 + m) * 255),
    };
  }

  // RGB (0-255) to HSV (0-360, 0-100, 0-100)
  function rgbToHsv(r, g, b) {
    r = clamp(r, 0, 255) / 255;
    g = clamp(g, 0, 255) / 255;
    b = clamp(b, 0, 255) / 255;

    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var delta = max - min;
    var h = 0;

    if (delta !== 0) {
      if (max === r) {
        h = ((g - b) / delta) % 6;
      } else if (max === g) {
        h = (b - r) / delta + 2;
      } else {
        h = (r - g) / delta + 4;
      }
      h = Math.round(h * 60);
      if (h < 0) h += 360;
    }

    var s = max === 0 ? 0 : Math.round((delta / max) * 100);
    var v = Math.round(max * 100);

    return { h: h, s: s, v: v };
  }

  // RGB to HEX string (#RRGGBB or #RRGGBBAA)
  function rgbToHex(r, g, b, a) {
    var rHex = clamp(Math.round(r), 0, 255).toString(16).padStart(2, "0");
    var gHex = clamp(Math.round(g), 0, 255).toString(16).padStart(2, "0");
    var bHex = clamp(Math.round(b), 0, 255).toString(16).padStart(2, "0");
    if (typeof a === "number" && a < 1) {
      var aHex = clamp(Math.round(a * 255), 0, 255)
        .toString(16)
        .padStart(2, "0");
      return ("#" + rHex + gHex + bHex + aHex).toUpperCase();
    }
    return ("#" + rHex + gHex + bHex).toUpperCase();
  }

  // Parse any HEX string to RGBA object
  function hexToRgba(hexStr) {
    if (!hexStr || typeof hexStr !== "string") return null;
    var clean = hexStr.trim().replace(/^#/, "");

    // 3 digits
    if (/^[0-9a-fA-F]{3}$/.test(clean)) {
      var r = parseInt(clean[0] + clean[0], 16);
      var g = parseInt(clean[1] + clean[1], 16);
      var b = parseInt(clean[2] + clean[2], 16);
      return { r: r, g: g, b: b, a: 1 };
    }
    // 4 digits (with alpha)
    if (/^[0-9a-fA-F]{4}$/.test(clean)) {
      var r = parseInt(clean[0] + clean[0], 16);
      var g = parseInt(clean[1] + clean[1], 16);
      var b = parseInt(clean[2] + clean[2], 16);
      var a = parseInt(clean[3] + clean[3], 16) / 255;
      return { r: r, g: g, b: b, a: Math.round(a * 100) / 100 };
    }
    // 6 digits
    if (/^[0-9a-fA-F]{6}$/.test(clean)) {
      var r = parseInt(clean.substring(0, 2), 16);
      var g = parseInt(clean.substring(2, 4), 16);
      var b = parseInt(clean.substring(4, 6), 16);
      return { r: r, g: g, b: b, a: 1 };
    }
    // 8 digits (with alpha)
    if (/^[0-9a-fA-F]{8}$/.test(clean)) {
      var r = parseInt(clean.substring(0, 2), 16);
      var g = parseInt(clean.substring(2, 4), 16);
      var b = parseInt(clean.substring(4, 6), 16);
      var a = parseInt(clean.substring(6, 8), 16) / 255;
      return { r: r, g: g, b: b, a: Math.round(a * 100) / 100 };
    }
    return null;
  }

  // RGB to HSL
  function rgbToHsl(r, g, b) {
    r = clamp(r, 0, 255) / 255;
    g = clamp(g, 0, 255) / 255;
    b = clamp(b, 0, 255) / 255;

    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var delta = max - min;
    var l = (max + min) / 2;
    var h = 0;
    var s = 0;

    if (delta !== 0) {
      s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
      if (max === r) {
        h = ((g - b) / delta) % 6;
      } else if (max === g) {
        h = (b - r) / delta + 2;
      } else {
        h = (r - g) / delta + 4;
      }
      h = Math.round(h * 60);
      if (h < 0) h += 360;
    }

    return {
      h: h,
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  }

  // HSL to RGB
  function hslToRgb(h, s, l) {
    h = ((h % 360) + 360) % 360;
    s = clamp(s, 0, 100) / 100;
    l = clamp(l, 0, 100) / 100;

    var c = (1 - Math.abs(2 * l - 1)) * s;
    var x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    var m = l - c / 2;

    var r1 = 0,
      g1 = 0,
      b1 = 0;
    if (h >= 0 && h < 60) {
      r1 = c;
      g1 = x;
      b1 = 0;
    } else if (h >= 60 && h < 120) {
      r1 = x;
      g1 = c;
      b1 = 0;
    } else if (h >= 120 && h < 180) {
      r1 = 0;
      g1 = c;
      b1 = x;
    } else if (h >= 180 && h < 240) {
      r1 = 0;
      g1 = x;
      b1 = c;
    } else if (h >= 240 && h < 300) {
      r1 = x;
      g1 = 0;
      b1 = c;
    } else {
      r1 = c;
      g1 = 0;
      b1 = x;
    }

    return {
      r: Math.round((r1 + m) * 255),
      g: Math.round((g1 + m) * 255),
      b: Math.round((b1 + m) * 255),
    };
  }

  // RGB to CMYK
  function rgbToCmyk(r, g, b) {
    var rN = clamp(r, 0, 255) / 255;
    var gN = clamp(g, 0, 255) / 255;
    var bN = clamp(b, 0, 255) / 255;

    var k = 1 - Math.max(rN, gN, bN);
    if (k === 1) {
      return { c: 0, m: 0, y: 0, k: 100 };
    }
    var c = (1 - rN - k) / (1 - k);
    var m = (1 - gN - k) / (1 - k);
    var y = (1 - bN - k) / (1 - k);

    return {
      c: Math.round(c * 100),
      m: Math.round(m * 100),
      y: Math.round(y * 100),
      k: Math.round(k * 100),
    };
  }

  // WCAG Relative Luminance calculation
  function getRelativeLuminance(r, g, b) {
    var a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  // Calculate Contrast Ratio between two RGB colors
  function getContrastRatio(rgb1, rgb2) {
    var lum1 = getRelativeLuminance(rgb1.r, rgb1.g, rgb1.b);
    var lum2 = getRelativeLuminance(rgb2.r, rgb2.g, rgb2.b);
    var brightest = Math.max(lum1, lum2);
    var darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  }

  /* ==========================================================================
     2. COLOR NAMING DATASET & DETECTOR
     ========================================================================== */
  var NAMED_COLORS = [
    { name: "Black", r: 0, g: 0, b: 0 },
    { name: "White", r: 255, g: 255, b: 255 },
    { name: "Huzikit Purple", r: 79, g: 70, b: 229 },
    { name: "Huzikit Violet", r: 124, g: 58, b: 237 },
    { name: "Dark Indigo", r: 21, g: 19, b: 43 },
    { name: "Charcoal", r: 54, g: 69, b: 79 },
    { name: "Slate Gray", r: 112, g: 128, b: 144 },
    { name: "Navy Blue", r: 0, g: 0, b: 128 },
    { name: "Royal Blue", r: 65, g: 105, b: 225 },
    { name: "Midnight Blue", r: 25, g: 25, b: 112 },
    { name: "Cobalt Blue", r: 0, g: 71, b: 171 },
    { name: "Deep Violet", r: 75, g: 0, b: 130 },
    { name: "Plum", r: 142, g: 69, b: 133 },
    { name: "Amethyst", r: 153, g: 102, b: 204 },
    { name: "Lavender", r: 230, g: 230, b: 250 },
    { name: "Periwinkle", r: 204, g: 204, b: 255 },
    { name: "Crimson", r: 220, g: 20, b: 60 },
    { name: "Scarlet", r: 255, g: 36, b: 0 },
    { name: "Ruby Red", r: 155, g: 17, b: 30 },
    { name: "Rose", r: 255, g: 0, b: 127 },
    { name: "Coral", r: 255, g: 127, b: 80 },
    { name: "Salmon", r: 250, g: 128, b: 114 },
    { name: "Amber", r: 255, g: 191, b: 0 },
    { name: "Gold", r: 255, g: 215, b: 0 },
    { name: "Tangerine", r: 242, g: 133, b: 0 },
    { name: "Emerald Green", r: 80, g: 200, b: 120 },
    { name: "Forest Green", r: 34, g: 139, b: 34 },
    { name: "Mint Green", r: 152, g: 255, b: 152 },
    { name: "Teal", r: 0, g: 128, b: 128 },
    { name: "Cyan", r: 0, g: 255, b: 255 },
    { name: "Aqua", r: 0, g: 255, b: 255 },
    { name: "Sky Blue", r: 135, g: 206, b: 235 },
    { name: "Steel Blue", r: 70, g: 130, b: 180 },
    { name: "Olive", r: 128, g: 128, b: 0 },
    { name: "Lime", r: 50, g: 205, b: 50 },
    { name: "Fuchsia", r: 255, g: 0, b: 255 },
    { name: "Magenta", r: 255, g: 0, b: 255 },
    { name: "Orchid", r: 218, g: 112, b: 214 },
    { name: "Hot Pink", r: 255, g: 105, b: 180 },
    { name: "Beige", r: 245, g: 245, b: 220 },
    { name: "Ivory", r: 255, g: 255, b: 240 },
    { name: "Silver", r: 192, g: 192, b: 192 },
  ];

  function getApproximateColorName(r, g, b) {
    var minDistance = Infinity;
    var closestName = "Custom Color";

    for (var i = 0; i < NAMED_COLORS.length; i++) {
      var c = NAMED_COLORS[i];
      // Euclidean distance in RGB space
      var d = Math.sqrt(
        Math.pow(r - c.r, 2) + Math.pow(g - c.g, 2) + Math.pow(b - c.b, 2),
      );
      if (d < minDistance) {
        minDistance = d;
        closestName = c.name;
      }
    }
    return closestName;
  }

  /* ==========================================================================
     3. APPLICATION STATE MANAGEMENT
     ========================================================================== */
  var state = {
    // Current Color state in HSV + Alpha
    h: 243, // 0 - 360 (Huzikit Indigo #4F46E5 hue)
    s: 69, // 0 - 100
    v: 90, // 0 - 100
    a: 1, // 0 - 1

    // Contrast Checker State
    contrastFg: "#4F46E5",
    contrastBg: "#FFFFFF",

    // Gradient Generator State
    gradColor1: "#4F46E5",
    gradColor2: "#7C3AED",
    gradAngle: 135,
    gradType: "linear",

    // Flag to prevent input recursion loops
    isUpdating: false,
  };

  /* ==========================================================================
     4. CORE COLOR PICKER CONTROLLER
     ========================================================================== */
  var pickerSurface = document.getElementById("pickerSurface");
  var pickerPointer = document.getElementById("pickerPointer");
  var hueTrack = document.getElementById("hueTrack");
  var hueThumb = document.getElementById("hueThumb");
  var alphaTrack = document.getElementById("alphaTrack");
  var alphaThumb = document.getElementById("alphaThumb");
  var alphaGradient = document.getElementById("alphaGradient");

  // Input fields
  var inputHex = document.getElementById("inputHex");
  var inputRgb = document.getElementById("inputRgb");
  var inputRgba = document.getElementById("inputRgba");
  var inputHsl = document.getElementById("inputHsl");
  var inputHsla = document.getElementById("inputHsla");
  var inputHsv = document.getElementById("inputHsv");
  var inputCmyk = document.getElementById("inputCmyk");

  // Preview elements
  var activeSwatchLayer = document.getElementById("activeSwatchLayer");
  var activeHexTag = document.getElementById("activeHexTag");
  var activeNameBadge = document.getElementById("activeNameBadge");
  var approxNameValue = document.getElementById("approxNameValue");
  var valReadoutHue = document.getElementById("valReadoutHue");
  var valReadoutAlpha = document.getElementById("valReadoutAlpha");

  // Developer CSS snippets
  var cssColorCode = document.getElementById("cssColorCode");
  var cssBgCode = document.getElementById("cssBgCode");
  var cssBorderCode = document.getElementById("cssBorderCode");
  var cssVarOutput = document.getElementById("cssVarOutput");
  var cssVarNameInput = document.getElementById("cssVarNameInput");

  // Update complete UI from current state
  function updateUI(skipInputs) {
    var rgb = hsvToRgb(state.h, state.s, state.v);
    var hex = rgbToHex(rgb.r, rgb.g, rgb.b, state.a);
    var hexSolid = rgbToHex(rgb.r, rgb.g, rgb.b, 1);
    var hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    var cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
    var approxName = getApproximateColorName(rgb.r, rgb.g, rgb.b);

    // 1. Surface background color (Pure hue at S=100%, V=100%)
    var pureHueRgb = hsvToRgb(state.h, 100, 100);
    pickerSurface.style.backgroundColor =
      "rgb(" + pureHueRgb.r + "," + pureHueRgb.g + "," + pureHueRgb.b + ")";

    // 2. Position Surface Pointer
    pickerPointer.style.left = state.s + "%";
    pickerPointer.style.top = 100 - state.v + "%";
    pickerPointer.style.backgroundColor = hex;

    // 3. Position Hue Thumb
    var huePercent = (state.h / 360) * 100;
    hueThumb.style.left = clamp(huePercent, 0, 100) + "%";
    valReadoutHue.textContent = Math.round(state.h) + "°";

    // 4. Alpha Track gradient & thumb
    alphaGradient.style.background =
      "linear-gradient(to right, transparent, " + hexSolid + ")";
    alphaThumb.style.left = state.a * 100 + "%";
    valReadoutAlpha.textContent = Math.round(state.a * 100) + "%";

    // 5. Active Preview Swatch
    activeSwatchLayer.style.backgroundColor =
      state.a < 1
        ? "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + state.a + ")"
        : hexSolid;

    activeHexTag.textContent = hex;
    activeNameBadge.textContent = approxName;
    approxNameValue.textContent = approxName;

    // 6. Update Input Fields (unless user is typing directly)
    if (!skipInputs) {
      inputHex.value = hex;
      inputRgb.value = "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")";
      inputRgba.value =
        "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + state.a + ")";
      inputHsl.value = "hsl(" + hsl.h + ", " + hsl.s + "%, " + hsl.l + "%)";
      inputHsla.value =
        "hsla(" + hsl.h + ", " + hsl.s + "%, " + hsl.l + "%, " + state.a + ")";
      inputHsv.value =
        "hsv(" +
        Math.round(state.h) +
        ", " +
        Math.round(state.s) +
        "%, " +
        Math.round(state.v) +
        "%)";
      inputCmyk.value =
        "cmyk(" +
        cmyk.c +
        "%, " +
        cmyk.m +
        "%, " +
        cmyk.y +
        "%, " +
        cmyk.k +
        "%)";
    }

    // 7. Developer CSS Snippets
    cssColorCode.textContent = "color: " + hex + ";";
    cssBgCode.textContent = "background-color: " + hex + ";";
    cssBorderCode.textContent = "border-color: " + hex + ";";
    updateCssVarOutput(hex);

    // 8. Regenerate Shades & Harmonies
    generateShadesScale(rgb);
    generateHarmonies(state.h, state.s, state.v);

    // 9. Auto-save to recent history (debounced)
    scheduleHistorySave(hexSolid);
  }

  function updateCssVarOutput(hex) {
    var varName = (cssVarNameInput.value || "--color-primary").trim();
    if (!varName.startsWith("--")) {
      varName = "--" + varName;
    }
    cssVarOutput.textContent = varName + ": " + hex + ";";
  }

  cssVarNameInput.addEventListener("input", function () {
    var rgb = hsvToRgb(state.h, state.s, state.v);
    var hex = rgbToHex(rgb.r, rgb.g, rgb.b, state.a);
    updateCssVarOutput(hex);
  });

  /* ==========================================================================
     5. INTERACTIVE SURFACE & SLIDER HANDLERS (Mouse & Touch)
     ========================================================================== */

  // Surface Dragging
  function handleSurfaceMove(e) {
    var rect = pickerSurface.getBoundingClientRect();
    var clientX =
      e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    var clientY =
      e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

    var x = clamp(clientX - rect.left, 0, rect.width);
    var y = clamp(clientY - rect.top, 0, rect.height);

    state.s = Math.round((x / rect.width) * 100);
    state.v = Math.round((1 - y / rect.height) * 100);

    updateUI();
  }

  pickerSurface.addEventListener("pointerdown", function (e) {
    pickerSurface.setPointerCapture(e.pointerId);
    handleSurfaceMove(e);

    function onPointerMove(ev) {
      handleSurfaceMove(ev);
    }
    function onPointerUp(ev) {
      pickerSurface.removeEventListener("pointermove", onPointerMove);
      pickerSurface.removeEventListener("pointerup", onPointerUp);
    }

    pickerSurface.addEventListener("pointermove", onPointerMove);
    pickerSurface.addEventListener("pointerup", onPointerUp);
  });

  // Hue Slider Dragging
  function handleHueMove(e) {
    var rect = hueTrack.getBoundingClientRect();
    var clientX =
      e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    var x = clamp(clientX - rect.left, 0, rect.width);
    state.h = Math.round((x / rect.width) * 360) % 360;
    updateUI();
  }

  hueTrack.addEventListener("pointerdown", function (e) {
    hueTrack.setPointerCapture(e.pointerId);
    handleHueMove(e);

    function onPointerMove(ev) {
      handleHueMove(ev);
    }
    function onPointerUp(ev) {
      hueTrack.removeEventListener("pointermove", onPointerMove);
      hueTrack.removeEventListener("pointerup", onPointerUp);
    }

    hueTrack.addEventListener("pointermove", onPointerMove);
    hueTrack.addEventListener("pointerup", onPointerUp);
  });

  // Alpha Slider Dragging
  function handleAlphaMove(e) {
    var rect = alphaTrack.getBoundingClientRect();
    var clientX =
      e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    var x = clamp(clientX - rect.left, 0, rect.width);
    state.a = Math.round((x / rect.width) * 100) / 100;
    updateUI();
  }

  alphaTrack.addEventListener("pointerdown", function (e) {
    alphaTrack.setPointerCapture(e.pointerId);
    handleAlphaMove(e);

    function onPointerMove(ev) {
      handleAlphaMove(ev);
    }
    function onPointerUp(ev) {
      alphaTrack.removeEventListener("pointermove", onPointerMove);
      alphaTrack.removeEventListener("pointerup", onPointerUp);
    }

    alphaTrack.addEventListener("pointermove", onPointerMove);
    alphaTrack.addEventListener("pointerup", onPointerUp);
  });

  /* ==========================================================================
     6. DIRECT INPUT SYNCHRONIZATION
     ========================================================================== */
  function applyColorFromHex(hexStr) {
    var rgba = hexToRgba(hexStr);
    if (!rgba) return false;
    var hsv = rgbToHsv(rgba.r, rgba.g, rgba.b);
    state.h = hsv.h;
    state.s = hsv.s;
    state.v = hsv.v;
    state.a = rgba.a;
    updateUI(true);
    return true;
  }

  inputHex.addEventListener("input", function () {
    var val = inputHex.value.trim();
    if (!val.startsWith("#")) val = "#" + val;
    applyColorFromHex(val);
  });

  inputRgb.addEventListener("input", function () {
    var match = inputRgb.value.match(
      /rgb\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/i,
    );
    if (match) {
      var r = parseInt(match[1], 10);
      var g = parseInt(match[2], 10);
      var b = parseInt(match[3], 10);
      var hsv = rgbToHsv(r, g, b);
      state.h = hsv.h;
      state.s = hsv.s;
      state.v = hsv.v;
      updateUI(true);
    }
  });

  inputHsl.addEventListener("input", function () {
    var match = inputHsl.value.match(
      /hsl\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)/i,
    );
    if (match) {
      var h = parseInt(match[1], 10);
      var s = parseInt(match[2], 10);
      var l = parseInt(match[3], 10);
      var rgb = hslToRgb(h, s, l);
      var hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
      state.h = hsv.h;
      state.s = hsv.s;
      state.v = hsv.v;
      updateUI(true);
    }
  });

  /* ==========================================================================
     7. ONE-CLICK COPY & CLIPBOARD SYSTEM
     ========================================================================== */
  function showToast(msg) {
    var container = document.getElementById("toastContainer");
    if (!container) {
      container = document.createElement("div");
      container.id = "toastContainer";
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    var toast = document.createElement("div");
    toast.className = "toast-msg";
    toast.innerHTML =
      '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> ' +
      msg;
    container.appendChild(toast);

    setTimeout(function () {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      toast.style.transition = "all 0.2s ease";
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 200);
    }, 2400);
  }

  function copyToClipboard(text, btnElement) {
    if (!text) return;

    function onSuccess() {
      showToast("Copied: " + text);
      if (btnElement) {
        btnElement.classList.add("copied");
        var originalHtml = btnElement.innerHTML;
        btnElement.innerHTML =
          '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';
        setTimeout(function () {
          btnElement.classList.remove("copied");
          btnElement.innerHTML = originalHtml;
        }, 1800);
      }
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(onSuccess)
        .catch(function () {
          fallbackCopy(text, onSuccess);
        });
    } else {
      fallbackCopy(text, onSuccess);
    }
  }

  function fallbackCopy(text, callback) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      if (callback) callback();
    } catch (err) {
      showToast("Copy failed, please copy manually.");
    }
    document.body.removeChild(textArea);
  }

  // Bind all copy buttons
  document.querySelectorAll("[data-copy-target]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var targetId = btn.getAttribute("data-copy-target");
      var targetEl = document.getElementById(targetId);
      if (targetEl) {
        var textToCopy =
          targetEl.value !== undefined ? targetEl.value : targetEl.textContent;
        copyToClipboard(textToCopy.trim(), btn);
      }
    });
  });

  /* ==========================================================================
     8. RANDOM COLOR GENERATOR & EYEDROPPER
     ========================================================================== */
  var btnRandomColor = document.getElementById("btnRandomColor");
  btnRandomColor.addEventListener("click", function () {
    state.h = Math.floor(Math.random() * 360);
    state.s = Math.floor(Math.random() * 60) + 40; // 40 - 100 for vibrant colors
    state.v = Math.floor(Math.random() * 40) + 60; // 60 - 100
    state.a = 1;
    updateUI();
    showToast("Generated random color!");
  });

  // Browser EyeDropper API
  var btnEyeDropper = document.getElementById("btnEyeDropper");
  if (window.EyeDropper) {
    btnEyeDropper.addEventListener("click", function () {
      var dropper = new window.EyeDropper();
      dropper
        .open()
        .then(function (result) {
          if (result && result.sRGBHex) {
            applyColorFromHex(result.sRGBHex);
            showToast("Picked: " + result.sRGBHex);
          }
        })
        .catch(function () {
          // user cancelled dropper
        });
    });
  } else {
    btnEyeDropper.addEventListener("click", function () {
      showToast(
        "EyeDropper API is available on desktop Chrome, Edge, and Opera.",
      );
    });
  }

  /* ==========================================================================
     9. COLOR SHADES & TINTS SCALE GENERATOR (Tailwind 50 - 950)
     ========================================================================== */
  var scaleGrid = document.getElementById("scaleGrid");
  var SCALE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  function generateShadesScale(rgb) {
    if (!scaleGrid) return;
    scaleGrid.innerHTML = "";

    // Interpolate between White (50), Current Color (500), and Dark Ink/Black (950)
    SCALE_STEPS.forEach(function (step) {
      var r, g, b;
      if (step === 500) {
        r = rgb.r;
        g = rgb.g;
        b = rgb.b;
      } else if (step < 500) {
        // Tint towards white
        var factor = (500 - step) / 500;
        r = Math.round(rgb.r + (255 - rgb.r) * factor);
        g = Math.round(rgb.g + (255 - rgb.g) * factor);
        b = Math.round(rgb.b + (255 - rgb.b) * factor);
      } else {
        // Shade towards dark
        var factor = (step - 500) / 450;
        r = Math.round(rgb.r * (1 - factor * 0.88));
        g = Math.round(rgb.g * (1 - factor * 0.88));
        b = Math.round(rgb.b * (1 - factor * 0.88));
      }

      var hex = rgbToHex(r, g, b);
      var item = document.createElement("div");
      item.className = "scale-item" + (step === 500 ? " active-base" : "");
      item.title = "Click to load " + hex;

      item.innerHTML =
        '<div class="scale-swatch" style="background-color: ' +
        hex +
        '"></div>' +
        '<div class="scale-meta">' +
        '<span class="scale-step">' +
        step +
        "</span>" +
        '<span class="scale-hex">' +
        hex +
        "</span>" +
        "</div>";

      item.addEventListener("click", function () {
        applyColorFromHex(hex);
        showToast("Loaded " + step + " (" + hex + ")");
      });

      scaleGrid.appendChild(item);
    });
  }

  /* ==========================================================================
     10. COLOR HARMONIES & PALETTES GENERATOR
     ========================================================================== */
  var harmoniesGrid = document.getElementById("harmoniesGrid");

  function generateHarmonies(h, s, v) {
    if (!harmoniesGrid) return;
    harmoniesGrid.innerHTML = "";

    var schemes = [
      {
        title: "Complementary",
        subtitle: "Opposite on color wheel (+180°)",
        hues: [h, (h + 180) % 360],
      },
      {
        title: "Analogous",
        subtitle: "Adjacent hues (-30°, base, +30°)",
        hues: [(h + 330) % 360, h, (h + 30) % 360],
      },
      {
        title: "Triadic",
        subtitle: "Three evenly spaced hues (120° apart)",
        hues: [h, (h + 120) % 360, (h + 240) % 360],
      },
      {
        title: "Split Complementary",
        subtitle: "Base + two adjacent to complement",
        hues: [h, (h + 150) % 360, (h + 210) % 360],
      },
      {
        title: "Tetradic (Square)",
        subtitle: "Four colors spaced 90° apart",
        hues: [h, (h + 90) % 360, (h + 180) % 360, (h + 270) % 360],
      },
      {
        title: "Monochromatic",
        subtitle: "Varied lightness and saturation",
        customColors: [
          hsvToRgb(h, clamp(s * 0.4, 15, 100), clamp(v * 1.1, 10, 100)),
          hsvToRgb(h, clamp(s * 0.7, 25, 100), clamp(v * 0.9, 10, 100)),
          hsvToRgb(h, s, v),
          hsvToRgb(h, clamp(s * 1.1, 10, 100), clamp(v * 0.65, 10, 100)),
          hsvToRgb(h, clamp(s * 1.2, 10, 100), clamp(v * 0.4, 10, 100)),
        ],
      },
    ];

    schemes.forEach(function (scheme) {
      var card = document.createElement("div");
      card.className = "harmony-card";

      var header = document.createElement("div");
      header.className = "harmony-card-header";
      header.innerHTML =
        "<div>" +
        '<div class="harmony-title">' +
        scheme.title +
        "</div>" +
        '<div class="harmony-subtitle">' +
        scheme.subtitle +
        "</div>" +
        "</div>";
      card.appendChild(header);

      var strip = document.createElement("div");
      strip.className = "harmony-swatches-strip";

      var hexList = [];
      if (scheme.customColors) {
        scheme.customColors.forEach(function (rgb) {
          var hex = rgbToHex(rgb.r, rgb.g, rgb.b);
          hexList.push(hex);
          createSwatchSlot(strip, hex);
        });
      } else {
        scheme.hues.forEach(function (hue) {
          var rgb = hsvToRgb(hue, s, v);
          var hex = rgbToHex(rgb.r, rgb.g, rgb.b);
          hexList.push(hex);
          createSwatchSlot(strip, hex);
        });
      }
      card.appendChild(strip);

      var footer = document.createElement("div");
      footer.className = "harmony-card-footer";
      footer.innerHTML =
        '<button class="btn-secondary" style="padding: 6px 10px; font-size: 0.8rem;">' +
        '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy All' +
        "</button>" +
        '<button class="btn-secondary" style="padding: 6px 10px; font-size: 0.8rem;">' +
        '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg> Save Favs' +
        "</button>";

      // Bind copy all
      footer.children[0].addEventListener("click", function () {
        copyToClipboard(hexList.join(", "), this);
      });
      // Bind save favs
      footer.children[1].addEventListener("click", function () {
        hexList.forEach(function (hx) {
          addFavorite(hx);
        });
        showToast("Saved palette to favorites!");
      });

      card.appendChild(footer);
      harmoniesGrid.appendChild(card);
    });
  }

  function createSwatchSlot(strip, hex) {
    var slot = document.createElement("div");
    slot.className = "harmony-swatch-slot";
    slot.style.backgroundColor = hex;
    slot.title = "Click to activate " + hex;

    var badge = document.createElement("span");
    badge.className = "harmony-swatch-hex";
    badge.textContent = hex;
    slot.appendChild(badge);

    slot.addEventListener("click", function () {
      applyColorFromHex(hex);
      showToast("Active color set to " + hex);
    });

    strip.appendChild(slot);
  }

  /* ==========================================================================
     11. WCAG ACCESSIBILITY CONTRAST CHECKER & TEXT PREVIEW
     ========================================================================== */
  var contrastFgPicker = document.getElementById("contrastFgPicker");
  var contrastFgInput = document.getElementById("contrastFgInput");
  var contrastBgPicker = document.getElementById("contrastBgPicker");
  var contrastBgInput = document.getElementById("contrastBgInput");
  var btnSwapContrast = document.getElementById("btnSwapContrast");
  var btnUseCurrentAsFg = document.getElementById("btnUseCurrentAsFg");
  var btnUseCurrentAsBg = document.getElementById("btnUseCurrentAsBg");

  var contrastRatioReadout = document.getElementById("contrastRatioReadout");
  var badgeAaNormal = document.getElementById("badgeAaNormal");
  var badgeAaLarge = document.getElementById("badgeAaLarge");
  var badgeAaaNormal = document.getElementById("badgeAaaNormal");
  var badgeAaaLarge = document.getElementById("badgeAaaLarge");

  var livePreviewBox = document.getElementById("livePreviewBox");

  function updateContrastChecker() {
    var fgRgba = hexToRgba(state.contrastFg) || { r: 0, g: 0, b: 0, a: 1 };
    var bgRgba = hexToRgba(state.contrastBg) || {
      r: 255,
      g: 255,
      b: 255,
      a: 1,
    };

    var ratio = getContrastRatio(fgRgba, bgRgba);
    var ratioFormatted = (Math.round(ratio * 100) / 100).toFixed(2);
    contrastRatioReadout.textContent = ratioFormatted + " : 1";

    // WCAG thresholds:
    // AA Normal: 4.5:1
    // AA Large: 3.0:1
    // AAA Normal: 7.0:1
    // AAA Large: 4.5:1
    setWcagBadge(badgeAaNormal, ratio >= 4.5, "AA Normal Text (4.5:1)");
    setWcagBadge(badgeAaLarge, ratio >= 3.0, "AA Large Text (3.0:1)");
    setWcagBadge(badgeAaaNormal, ratio >= 7.0, "AAA Normal Text (7.0:1)");
    setWcagBadge(badgeAaaLarge, ratio >= 4.5, "AAA Large Text (4.5:1)");

    // Live dynamic text preview styling
    livePreviewBox.style.backgroundColor = state.contrastBg;
    livePreviewBox.style.color = state.contrastFg;
  }

  function setWcagBadge(badgeEl, isPass, label) {
    if (isPass) {
      badgeEl.className = "wcag-badge pass";
      badgeEl.innerHTML =
        '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> ' +
        label;
    } else {
      badgeEl.className = "wcag-badge fail";
      badgeEl.innerHTML =
        '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> ' +
        label;
    }
  }

  // Bind foreground picker & text
  contrastFgPicker.addEventListener("input", function () {
    state.contrastFg = contrastFgPicker.value.toUpperCase();
    contrastFgInput.value = state.contrastFg;
    updateContrastChecker();
  });
  contrastFgInput.addEventListener("input", function () {
    var val = contrastFgInput.value.trim();
    if (!val.startsWith("#")) val = "#" + val;
    if (hexToRgba(val)) {
      state.contrastFg = val.toUpperCase();
      contrastFgPicker.value = val.substring(0, 7);
      updateContrastChecker();
    }
  });

  // Bind background picker & text
  contrastBgPicker.addEventListener("input", function () {
    state.contrastBg = contrastBgPicker.value.toUpperCase();
    contrastBgInput.value = state.contrastBg;
    updateContrastChecker();
  });
  contrastBgInput.addEventListener("input", function () {
    var val = contrastBgInput.value.trim();
    if (!val.startsWith("#")) val = "#" + val;
    if (hexToRgba(val)) {
      state.contrastBg = val.toUpperCase();
      contrastBgPicker.value = val.substring(0, 7);
      updateContrastChecker();
    }
  });

  // Swap colors button
  btnSwapContrast.addEventListener("click", function () {
    var temp = state.contrastFg;
    state.contrastFg = state.contrastBg;
    state.contrastBg = temp;

    contrastFgPicker.value = state.contrastFg.substring(0, 7);
    contrastFgInput.value = state.contrastFg;
    contrastBgPicker.value = state.contrastBg.substring(0, 7);
    contrastBgInput.value = state.contrastBg;

    updateContrastChecker();
  });

  // Use current color as FG or BG
  btnUseCurrentAsFg.addEventListener("click", function () {
    var rgb = hsvToRgb(state.h, state.s, state.v);
    var hex = rgbToHex(rgb.r, rgb.g, rgb.b, 1);
    state.contrastFg = hex;
    contrastFgPicker.value = hex;
    contrastFgInput.value = hex;
    updateContrastChecker();
    showToast("Set active color as Foreground");
  });

  btnUseCurrentAsBg.addEventListener("click", function () {
    var rgb = hsvToRgb(state.h, state.s, state.v);
    var hex = rgbToHex(rgb.r, rgb.g, rgb.b, 1);
    state.contrastBg = hex;
    contrastBgPicker.value = hex;
    contrastBgInput.value = hex;
    updateContrastChecker();
    showToast("Set active color as Background");
  });

  /* ==========================================================================
     12. GRADIENT GENERATOR
     ========================================================================== */
  var gradColor1Picker = document.getElementById("gradColor1Picker");
  var gradColor1Input = document.getElementById("gradColor1Input");
  var gradColor2Picker = document.getElementById("gradColor2Picker");
  var gradColor2Input = document.getElementById("gradColor2Input");
  var gradAngleSlider = document.getElementById("gradAngleSlider");
  var gradAngleValue = document.getElementById("gradAngleValue");
  var gradientPreviewCanvas = document.getElementById("gradientPreviewCanvas");
  var gradientCssOutput = document.getElementById("gradientCssOutput");
  var btnSwapGradient = document.getElementById("btnSwapGradient");

  function updateGradientGenerator() {
    var cssGradient;
    if (state.gradType === "radial") {
      cssGradient =
        "radial-gradient(circle, " +
        state.gradColor1 +
        ", " +
        state.gradColor2 +
        ")";
    } else {
      cssGradient =
        "linear-gradient(" +
        state.gradAngle +
        "deg, " +
        state.gradColor1 +
        ", " +
        state.gradColor2 +
        ")";
    }

    gradientPreviewCanvas.style.background = cssGradient;
    gradientCssOutput.textContent = "background: " + cssGradient + ";";
    gradAngleValue.textContent = state.gradAngle + "°";
  }

  gradColor1Picker.addEventListener("input", function () {
    state.gradColor1 = gradColor1Picker.value.toUpperCase();
    gradColor1Input.value = state.gradColor1;
    updateGradientGenerator();
  });
  gradColor1Input.addEventListener("input", function () {
    var val = gradColor1Input.value.trim();
    if (!val.startsWith("#")) val = "#" + val;
    if (hexToRgba(val)) {
      state.gradColor1 = val.toUpperCase();
      gradColor1Picker.value = val.substring(0, 7);
      updateGradientGenerator();
    }
  });

  gradColor2Picker.addEventListener("input", function () {
    state.gradColor2 = gradColor2Picker.value.toUpperCase();
    gradColor2Input.value = state.gradColor2;
    updateGradientGenerator();
  });
  gradColor2Input.addEventListener("input", function () {
    var val = gradColor2Input.value.trim();
    if (!val.startsWith("#")) val = "#" + val;
    if (hexToRgba(val)) {
      state.gradColor2 = val.toUpperCase();
      gradColor2Picker.value = val.substring(0, 7);
      updateGradientGenerator();
    }
  });

  gradAngleSlider.addEventListener("input", function () {
    state.gradType = "linear";
    state.gradAngle = parseInt(gradAngleSlider.value, 10);
    updateGradientGenerator();
  });

  document.querySelectorAll(".angle-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".angle-btn").forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      var val = btn.getAttribute("data-angle");
      if (val === "radial") {
        state.gradType = "radial";
      } else {
        state.gradType = "linear";
        state.gradAngle = parseInt(val, 10);
        gradAngleSlider.value = state.gradAngle;
      }
      updateGradientGenerator();
    });
  });

  btnSwapGradient.addEventListener("click", function () {
    var temp = state.gradColor1;
    state.gradColor1 = state.gradColor2;
    state.gradColor2 = temp;

    gradColor1Picker.value = state.gradColor1.substring(0, 7);
    gradColor1Input.value = state.gradColor1;
    gradColor2Picker.value = state.gradColor2.substring(0, 7);
    gradColor2Input.value = state.gradColor2;

    updateGradientGenerator();
  });

  /* ==========================================================================
     13. IMAGE COLOR PICKER & DOMINANT PALETTE EXTRACTOR
     ========================================================================== */
  var imageFileInput = document.getElementById("imageFileInput");
  var imageDropzone = document.getElementById("imageDropzone");
  var imageCanvasWrapper = document.getElementById("imageCanvasWrapper");
  var imageCanvas = document.getElementById("imageCanvas");
  var loupeMagnifier = document.getElementById("loupeMagnifier");
  var loupeCanvas = document.getElementById("loupeCanvas");
  var pixelSwatchDisc = document.getElementById("pixelSwatchDisc");
  var pixelHexReadout = document.getElementById("pixelHexReadout");
  var pixelRgbReadout = document.getElementById("pixelRgbReadout");
  var btnSetImagePixelActive = document.getElementById(
    "btnSetImagePixelActive",
  );
  var extractedSwatchesGrid = document.getElementById("extractedSwatchesGrid");

  var currentPickedImageHex = "#4F46E5";
  var loadedImageElement = null;

  // File drag and drop
  ["dragenter", "dragover"].forEach(function (evt) {
    imageDropzone.addEventListener(evt, function (e) {
      e.preventDefault();
      imageDropzone.classList.add("drag-over");
    });
  });

  ["dragleave", "drop"].forEach(function (evt) {
    imageDropzone.addEventListener(evt, function (e) {
      e.preventDefault();
      imageDropzone.classList.remove("drag-over");
    });
  });

  imageDropzone.addEventListener("drop", function (e) {
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageFile(e.dataTransfer.files[0]);
    }
  });

  imageDropzone.addEventListener("click", function () {
    imageFileInput.click();
  });

  imageFileInput.addEventListener("change", function () {
    if (imageFileInput.files && imageFileInput.files[0]) {
      handleImageFile(imageFileInput.files[0]);
    }
  });

  function handleImageFile(file) {
    if (!file || !file.type.match(/^image\/(png|jpeg|jpg|webp|gif)$/i)) {
      showToast("Please upload a valid image file (PNG, JPG, WebP, GIF).");
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      showToast("Image size exceeds 20MB limit.");
      return;
    }

    var reader = new FileReader();
    reader.onload = function (e) {
      var img = new Image();
      img.onload = function () {
        loadedImageElement = img;
        drawImageToCanvas(img);
        extractDominantPalette(img);
        imageCanvasWrapper.classList.add("has-image");
        showToast("Image loaded! Hover and click to pick colors.");
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  function drawImageToCanvas(img) {
    var ctx = imageCanvas.getContext("2d");
    var maxWidth = 800;
    var maxHeight = 460;
    var width = img.width;
    var height = img.height;

    if (width > maxWidth) {
      height = Math.round((height * maxWidth) / width);
      width = maxWidth;
    }
    if (height > maxHeight) {
      width = Math.round((width * maxHeight) / height);
      height = maxHeight;
    }

    imageCanvas.width = width;
    imageCanvas.height = height;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);
  }

  // Interactive Loupe & Pixel Picking
  imageCanvas.addEventListener("mousemove", function (e) {
    handleCanvasHover(e);
  });

  imageCanvas.addEventListener("mouseleave", function () {
    loupeMagnifier.style.display = "none";
  });

  imageCanvas.addEventListener("click", function (e) {
    handleCanvasHover(e);
    applyColorFromHex(currentPickedImageHex);
    showToast("Selected pixel color: " + currentPickedImageHex);
  });

  function handleCanvasHover(e) {
    var rect = imageCanvas.getBoundingClientRect();
    var scaleX = imageCanvas.width / rect.width;
    var scaleY = imageCanvas.height / rect.height;

    var clientX = e.clientX;
    var clientY = e.clientY;

    var x = Math.floor((clientX - rect.left) * scaleX);
    var y = Math.floor((clientY - rect.top) * scaleY);

    if (x < 0 || x >= imageCanvas.width || y < 0 || y >= imageCanvas.height) {
      loupeMagnifier.style.display = "none";
      return;
    }

    var ctx = imageCanvas.getContext("2d");
    var pixel = ctx.getImageData(x, y, 1, 1).data;
    var hex = rgbToHex(pixel[0], pixel[1], pixel[2]);

    currentPickedImageHex = hex;
    pixelSwatchDisc.style.backgroundColor = hex;
    pixelHexReadout.textContent = hex;
    pixelRgbReadout.textContent =
      "rgb(" + pixel[0] + ", " + pixel[1] + ", " + pixel[2] + ")";

    // Position and render Loupe
    loupeMagnifier.style.display = "block";
    loupeMagnifier.style.left = clientX - rect.left + "px";
    loupeMagnifier.style.top = clientY - rect.top + "px";

    var lCtx = loupeCanvas.getContext("2d");
    lCtx.imageSmoothingEnabled = false;
    lCtx.clearRect(0, 0, loupeCanvas.width, loupeCanvas.height);
    // Draw 9x9 zoomed pixel area
    lCtx.drawImage(
      imageCanvas,
      clamp(x - 4, 0, imageCanvas.width - 9),
      clamp(y - 4, 0, imageCanvas.height - 9),
      9,
      9,
      0,
      0,
      loupeCanvas.width,
      loupeCanvas.height,
    );
  }

  btnSetImagePixelActive.addEventListener("click", function () {
    applyColorFromHex(currentPickedImageHex);
    showToast("Loaded " + currentPickedImageHex + " into main picker");
  });

  // Client-side Dominant Palette Extractor (Quantization via 32-bin Color Cube)
  function extractDominantPalette(img) {
    var sampleCanvas = document.createElement("canvas");
    var sCtx = sampleCanvas.getContext("2d");
    var sampleW = 100;
    var sampleH = 100;
    sampleCanvas.width = sampleW;
    sampleCanvas.height = sampleH;
    sCtx.drawImage(img, 0, 0, sampleW, sampleH);

    var imgData = sCtx.getImageData(0, 0, sampleW, sampleH).data;
    var colorBuckets = {};

    for (var i = 0; i < imgData.length; i += 16) {
      // Sample every 4th pixel
      var r = Math.round(imgData[i] / 32) * 32;
      var g = Math.round(imgData[i + 1] / 32) * 32;
      var b = Math.round(imgData[i + 2] / 32) * 32;
      var key = r + "," + g + "," + b;
      colorBuckets[key] = (colorBuckets[key] || 0) + 1;
    }

    var sortedColors = Object.keys(colorBuckets).sort(function (a, b) {
      return colorBuckets[b] - colorBuckets[a];
    });

    extractedSwatchesGrid.innerHTML = "";
    var topColors = sortedColors.slice(0, 8);

    topColors.forEach(function (rgbKey) {
      var parts = rgbKey.split(",").map(function (n) {
        return parseInt(n, 10);
      });
      var hex = rgbToHex(parts[0], parts[1], parts[2]);

      var card = document.createElement("div");
      card.className = "extracted-swatch-card";
      card.title = "Click to activate " + hex;
      card.innerHTML =
        '<div class="extracted-swatch-block" style="background-color: ' +
        hex +
        '"></div>' +
        '<div class="extracted-swatch-label">' +
        hex +
        "</div>";

      card.addEventListener("click", function () {
        applyColorFromHex(hex);
        showToast("Active color set to " + hex);
      });

      extractedSwatchesGrid.appendChild(card);
    });
  }

  /* ==========================================================================
     14. COLOR HISTORY & FAVORITES (localStorage)
     ========================================================================== */
  var historyListContainer = document.getElementById("historyListContainer");
  var favoritesListContainer = document.getElementById(
    "favoritesListContainer",
  );
  var btnClearHistory = document.getElementById("btnClearHistory");
  var btnClearFavorites = document.getElementById("btnClearFavorites");
  var btnAddFavorite = document.getElementById("btnAddFavorite");
  var btnExportFavorites = document.getElementById("btnExportFavorites");

  var historyTimer = null;

  function scheduleHistorySave(hex) {
    clearTimeout(historyTimer);
    historyTimer = setTimeout(function () {
      addHistoryItem(hex);
    }, 800);
  }

  function getStorageList(key) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function setStorageList(key, list) {
    try {
      localStorage.setItem(key, JSON.stringify(list));
    } catch (e) {
      // localStorage quota or private mode
    }
  }

  function renderHistory() {
    if (!historyListContainer) return;
    var list = getStorageList("huzikit_color_history");
    historyListContainer.innerHTML = "";

    if (list.length === 0) {
      historyListContainer.innerHTML =
        '<span class="empty-history-note">No recent colors yet. Colors will automatically appear here as you explore.</span>';
      return;
    }

    list.forEach(function (hex, idx) {
      var pill = document.createElement("div");
      pill.className = "history-swatch-pill";
      pill.innerHTML =
        '<span class="history-disc" style="background-color: ' +
        hex +
        '"></span>' +
        '<span class="history-hex-label">' +
        hex +
        "</span>" +
        '<button class="history-delete-btn" title="Remove" aria-label="Remove">&times;</button>';

      pill.addEventListener("click", function (e) {
        if (e.target.classList.contains("history-delete-btn")) {
          e.stopPropagation();
          list.splice(idx, 1);
          setStorageList("huzikit_color_history", list);
          renderHistory();
        } else {
          applyColorFromHex(hex);
          showToast("Loaded " + hex);
        }
      });

      historyListContainer.appendChild(pill);
    });
  }

  function addHistoryItem(hex) {
    var list = getStorageList("huzikit_color_history");
    // Don't add duplicate at the very front
    if (list[0] === hex) return;
    list = list.filter(function (item) {
      return item !== hex;
    });
    list.unshift(hex);
    if (list.length > 20) list = list.slice(0, 20);
    setStorageList("huzikit_color_history", list);
    renderHistory();
  }

  btnClearHistory.addEventListener("click", function () {
    setStorageList("huzikit_color_history", []);
    renderHistory();
    showToast("History cleared");
  });

  function renderFavorites() {
    if (!favoritesListContainer) return;
    var list = getStorageList("huzikit_color_favorites");
    favoritesListContainer.innerHTML = "";

    if (list.length === 0) {
      favoritesListContainer.innerHTML =
        '<span class="empty-history-note">No favorite colors saved yet. Click the heart icon to bookmark colors.</span>';
      return;
    }

    list.forEach(function (hex, idx) {
      var pill = document.createElement("div");
      pill.className = "history-swatch-pill";
      pill.innerHTML =
        '<span class="history-disc" style="background-color: ' +
        hex +
        '"></span>' +
        '<span class="history-hex-label">' +
        hex +
        "</span>" +
        '<button class="history-delete-btn" title="Remove" aria-label="Remove">&times;</button>';

      pill.addEventListener("click", function (e) {
        if (e.target.classList.contains("history-delete-btn")) {
          e.stopPropagation();
          list.splice(idx, 1);
          setStorageList("huzikit_color_favorites", list);
          renderFavorites();
        } else {
          applyColorFromHex(hex);
          showToast("Loaded favorite " + hex);
        }
      });

      favoritesListContainer.appendChild(pill);
    });
  }

  function addFavorite(hex) {
    var list = getStorageList("huzikit_color_favorites");
    if (list.indexOf(hex) === -1) {
      list.unshift(hex);
      setStorageList("huzikit_color_favorites", list);
      renderFavorites();
      showToast("Added " + hex + " to favorites!");
    } else {
      showToast(hex + " is already in your favorites.");
    }
  }

  btnAddFavorite.addEventListener("click", function () {
    var rgb = hsvToRgb(state.h, state.s, state.v);
    var hex = rgbToHex(rgb.r, rgb.g, rgb.b, 1);
    addFavorite(hex);
  });

  btnClearFavorites.addEventListener("click", function () {
    setStorageList("huzikit_color_favorites", []);
    renderFavorites();
    showToast("Favorites cleared");
  });

  /* ==========================================================================
     15. EXPORT PALETTE MODAL (CSS, JSON, Plain Text)
     ========================================================================== */
  var exportModalBackdrop = document.getElementById("exportModalBackdrop");
  var btnCloseExportModal = document.getElementById("btnCloseExportModal");
  var exportTextarea = document.getElementById("exportTextarea");
  var btnCopyExport = document.getElementById("btnCopyExport");
  var btnDownloadExport = document.getElementById("btnDownloadExport");
  var currentExportFormat = "css";

  function openExportModal() {
    var favs = getStorageList("huzikit_color_favorites");
    if (favs.length === 0) {
      // fallback to current active color + basic scheme
      var rgb = hsvToRgb(state.h, state.s, state.v);
      favs = [
        rgbToHex(rgb.r, rgb.g, rgb.b, 1),
        "#7C3AED",
        "#EEEBFF",
        "#15132B",
      ];
    }
    updateExportText(favs);
    exportModalBackdrop.classList.add("is-active");
  }

  function updateExportText(colors) {
    if (currentExportFormat === "css") {
      var lines = [":root {"];
      colors.forEach(function (hex, i) {
        lines.push("  --color-" + (i + 1) + ": " + hex + ";");
      });
      lines.push("}");
      exportTextarea.value = lines.join("\n");
    } else if (currentExportFormat === "json") {
      exportTextarea.value = JSON.stringify(colors, null, 2);
    } else {
      exportTextarea.value = colors.join("\n");
    }
  }

  btnExportFavorites.addEventListener("click", openExportModal);
  btnCloseExportModal.addEventListener("click", function () {
    exportModalBackdrop.classList.remove("is-active");
  });

  exportModalBackdrop.addEventListener("click", function (e) {
    if (e.target === exportModalBackdrop) {
      exportModalBackdrop.classList.remove("is-active");
    }
  });

  document.querySelectorAll(".export-tab-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".export-tab-btn").forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      currentExportFormat = btn.getAttribute("data-format");
      var favs = getStorageList("huzikit_color_favorites");
      if (favs.length === 0) {
        var rgb = hsvToRgb(state.h, state.s, state.v);
        favs = [rgbToHex(rgb.r, rgb.g, rgb.b, 1), "#7C3AED", "#EEEBFF"];
      }
      updateExportText(favs);
    });
  });

  btnCopyExport.addEventListener("click", function () {
    copyToClipboard(exportTextarea.value, this);
  });

  btnDownloadExport.addEventListener("click", function () {
    var content = exportTextarea.value;
    var ext =
      currentExportFormat === "css"
        ? "css"
        : currentExportFormat === "json"
          ? "json"
          : "txt";
    var mime =
      currentExportFormat === "json" ? "application/json" : "text/plain";

    var blob = new Blob([content], { type: mime + ";charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "huzikit-palette." + ext;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("Downloaded huzikit-palette." + ext);
  });

  /* ==========================================================================
     16. GLOBAL SEARCH MODAL (ALL 30 HUZIKIT TOOLS)
     ========================================================================== */
  var ALL_TOOLS = [
    // Text Tools (8)
    {
      name: "Word Counter",
      cat: "Text Tools",
      url: "/texttools/word-counter.html",
      keys: "word character count letter sentence paragraph reading time",
    },
    {
      name: "Character Counter",
      cat: "Text Tools",
      url: "/texttools/character-counter.html",
      keys: "character count length letters spaces twitter limit",
    },
    {
      name: "Case Converter",
      cat: "Text Tools",
      url: "/texttools/case-converter.html",
      keys: "uppercase lowercase title case camelCase snake_case kebab-case capitalization",
    },
    {
      name: "Remove Duplicate Lines",
      cat: "Text Tools",
      url: "/texttools/remove-duplicate-lines.html",
      keys: "dedupe sort unique lines clean list filter",
    },
    {
      name: "Lorem Ipsum Generator",
      cat: "Text Tools",
      url: "/texttools/loremipsumgenerator.html",
      keys: "dummy text placeholder filler dummy copy latin",
    },
    {
      name: "Password Generator",
      cat: "Text Tools",
      url: "/texttools/passwordgenerator.html",
      keys: "secure random password strong entropy symbols credentials",
    },
    {
      name: "Text Reverser",
      cat: "Text Tools",
      url: "/texttools/text-reverser.html",
      keys: "reverse flip backwards mirror string invert",
    },
    {
      name: "Online Notepad",
      cat: "Text Tools",
      url: "/texttools/onlinenotepad.html",
      keys: "notes scratchpad memo text editor autosave write",
    },

    // Calculators (8)
    {
      name: "Age Calculator",
      cat: "Calculators",
      url: "/calculator/agecalculator.html",
      keys: "age date of birth birthday years months days exact age",
    },
    {
      name: "BMI Calculator",
      cat: "Calculators",
      url: "/calculator/bmi-calculator.html",
      keys: "body mass index health weight height fitness metric",
    },
    {
      name: "Percentage Calculator",
      cat: "Calculators",
      url: "/calculator/percentage-calculator.html",
      keys: "percent discount math increase decrease ratio fraction",
    },
    {
      name: "Calorie Calculator",
      cat: "Calculators",
      url: "/calculator/Calorie-Calculator.html",
      keys: "bmr tdee nutrition diet weight loss maintenance calories",
    },
    {
      name: "Discount Calculator",
      cat: "Calculators",
      url: "/calculator/discount-calculator.html",
      keys: "sale coupon price off percent savings shopping bargain",
    },
    {
      name: "Saving & Goal Calculator",
      cat: "Calculators",
      url: "/calculator/saving&goalcalculator.html",
      keys: "finance investment interest future value retirement goal compound",
    },
    {
      name: "Tip Calculator",
      cat: "Calculators",
      url: "/calculator/tip-calculator.html",
      keys: "bill split restaurant tip gratuity per person dine",
    },
    {
      name: "GPA Calculator",
      cat: "Calculators",
      url: "/calculator/gpa-calculator.html",
      keys: "grade point average college high school semester credits",
    },

    // Image & PDF (6)
    {
      name: "Image Compressor",
      cat: "Image & PDF",
      url: "/image&pdf/image-compressor.html",
      keys: "compress reduce kb size optimize photo jpeg png webp",
    },
    {
      name: "Image Resizer",
      cat: "Image & PDF",
      url: "/image&pdf/image-resizer.html",
      keys: "resize dimensions scale crop pixels aspect ratio width height",
    },
    {
      name: "PDF to Word Converter",
      cat: "Image & PDF",
      url: "/image&pdf/pdftowordconverter.html",
      keys: "pdf doc docx convert document text editable",
    },
    {
      name: "JPG to PNG Converter",
      cat: "Image & PDF",
      url: "/image&pdf/jpg-to-png.html",
      keys: "format convert transparency image format lossless",
    },
    {
      name: "Color Picker",
      cat: "Image & PDF",
      url: "/image&pdf/colorpicker.html",
      keys: "color picker hex rgb hsl hsv palette contrast wcag gradient shades eyedropper image picker",
    },
    {
      name: "QR Code Generator",
      cat: "Image & PDF",
      url: "/image&pdf/QRGenrator.html",
      keys: "qr barcode scanner link url wifi vcard customize qr",
    },

    // Developer Tools (8)
    {
      name: "JSON Formatter",
      cat: "Developer Tools",
      url: "/developertools/JSONFORMATTER.html",
      keys: "json format prettify validate minify parser syntax tree",
    },
    {
      name: "Base64 Encoder / Decoder",
      cat: "Developer Tools",
      url: "/developertools/base64encoderdecoder.html",
      keys: "base64 encode decode binary string ascii data uri",
    },
    {
      name: "URL Encoder / Decoder",
      cat: "Developer Tools",
      url: "/developertools/urlencoderdecoder.html",
      keys: "url percent encode uri query string decode unescape",
    },
    {
      name: "Meta Tag Generator",
      cat: "Developer Tools",
      url: "/developertools/meta-tag-generator.html",
      keys: "seo meta tags open graph twitter cards description html head",
    },
    {
      name: "Regex Tester",
      cat: "Developer Tools",
      url: "/developertools/regextester.html",
      keys: "regular expression regex pattern match test flags replace",
    },
    {
      name: "Markdown to HTML",
      cat: "Developer Tools",
      url: "/developertools/markdownhtml.html",
      keys: "markdown md html convert live preview parser markup",
    },
    {
      name: "CSS Minifier",
      cat: "Developer Tools",
      url: "/developertools/cssminifier.html",
      keys: "css minify compress optimize styles remove whitespace",
    },
    {
      name: "Unix Timestamp Converter",
      cat: "Developer Tools",
      url: "/developertools/unixtimestamp.html",
      keys: "unix epoch timestamp date time milliseconds convert seconds",
    },
  ];

  var searchModalBackdrop = document.getElementById("searchModalBackdrop");
  var searchInput = document.getElementById("searchInput");
  var searchResultsContainer = document.getElementById(
    "searchResultsContainer",
  );
  var btnCloseSearch = document.getElementById("btnCloseSearch");
  var btnSearchTriggerDesktop = document.getElementById(
    "btnSearchTriggerDesktop",
  );
  var btnSearchTriggerNav = document.getElementById("btnSearchTriggerNav");

  function openSearchModal() {
    searchModalBackdrop.classList.add("is-active");
    searchInput.value = "";
    renderSearchResults("");
    setTimeout(function () {
      searchInput.focus();
    }, 50);
  }

  function closeSearchModal() {
    searchModalBackdrop.classList.remove("is-active");
  }

  if (btnSearchTriggerDesktop)
    btnSearchTriggerDesktop.addEventListener("click", openSearchModal);
  if (btnSearchTriggerNav)
    btnSearchTriggerNav.addEventListener("click", openSearchModal);
  if (btnCloseSearch)
    btnCloseSearch.addEventListener("click", closeSearchModal);

  searchModalBackdrop.addEventListener("click", function (e) {
    if (e.target === searchModalBackdrop) {
      closeSearchModal();
    }
  });

  // Keyboard shortcut Ctrl+K / Cmd+K and ESC
  window.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (searchModalBackdrop.classList.contains("is-active")) {
        closeSearchModal();
      } else {
        openSearchModal();
      }
    } else if (e.key === "Escape") {
      if (searchModalBackdrop.classList.contains("is-active")) {
        closeSearchModal();
      }
      if (exportModalBackdrop.classList.contains("is-active")) {
        exportModalBackdrop.classList.remove("is-active");
      }
      closeMobileMenu();
    }
  });

  searchInput.addEventListener("input", function () {
    renderSearchResults(searchInput.value.trim());
  });

  function renderSearchResults(query) {
    searchResultsContainer.innerHTML = "";
    query = query.toLowerCase();

    var filtered = ALL_TOOLS.filter(function (t) {
      if (!query) return true;
      return (
        t.name.toLowerCase().indexOf(query) !== -1 ||
        t.cat.toLowerCase().indexOf(query) !== -1 ||
        t.keys.toLowerCase().indexOf(query) !== -1
      );
    });

    if (filtered.length === 0) {
      searchResultsContainer.innerHTML =
        '<div class="search-empty-state">No matching Huzikit tools found for "' +
        escapeHtml(query) +
        '".</div>';
      return;
    }

    filtered.forEach(function (tool, idx) {
      var a = document.createElement("a");
      a.className = "search-result-item" + (idx === 0 ? " is-selected" : "");
      a.href = tool.url;
      a.innerHTML =
        '<div class="search-result-info">' +
        '<span class="search-result-title">' +
        highlightText(tool.name, query) +
        "</span>" +
        '<span class="search-result-category">' +
        tool.cat +
        "</span>" +
        "</div>" +
        '<span class="search-result-arrow">&rarr;</span>';
      searchResultsContainer.appendChild(a);
    });
  }

  function highlightText(text, query) {
    if (!query) return text;
    var regex = new RegExp("(" + escapeRegExp(query) + ")", "gi");
    return text.replace(
      regex,
      '<strong style="color: var(--primary);">$1</strong>',
    );
  }

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  /* ==========================================================================
     17. MOBILE MENU HAMBURGER & ACCORDIONS
     ========================================================================== */
  var hamburgerBtn = document.getElementById("hamburgerBtn");
  var mobileNavBackdrop = document.getElementById("mobileNavBackdrop");
  var mobileNavPanel = document.getElementById("mobileNavPanel");

  function toggleMobileMenu() {
    var isOpen = hamburgerBtn.classList.contains("is-active");
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    hamburgerBtn.classList.add("is-active");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    mobileNavBackdrop.classList.add("is-open");
    mobileNavPanel.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    hamburgerBtn.classList.remove("is-active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    mobileNavBackdrop.classList.remove("is-open");
    mobileNavPanel.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  hamburgerBtn.addEventListener("click", toggleMobileMenu);
  mobileNavBackdrop.addEventListener("click", closeMobileMenu);

  // Mobile drawer accordions
  document.querySelectorAll(".mobile-acc-header").forEach(function (hdr) {
    hdr.addEventListener("click", function () {
      var item = hdr.parentElement;
      var isOpen = item.classList.contains("is-open");
      // close all siblings
      document.querySelectorAll(".mobile-acc-item").forEach(function (it) {
        it.classList.remove("is-open");
      });
      if (!isOpen) {
        item.classList.add("is-open");
      }
    });
  });

  /* ==========================================================================
     18. FAQ ACCORDIONS
     ========================================================================== */
  document.querySelectorAll(".faq-question-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.parentElement;
      var isOpen = item.classList.contains("is-active");
      // Toggle
      if (isOpen) {
        item.classList.remove("is-active");
        btn.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("is-active");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ==========================================================================
     19. INITIALIZATION
     ========================================================================== */
  function init() {
    // Render initial UI
    updateUI();
    updateContrastChecker();
    updateGradientGenerator();
    renderHistory();
    renderFavorites();

    // Setup navbar scroll styling
    window.addEventListener(
      "scroll",
      function () {
        var nav = document.querySelector(".navbar");
        if (window.scrollY > 20) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      },
      { passive: true },
    );
  }

  // Run when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
