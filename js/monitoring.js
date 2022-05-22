// preloader variable
let preLoad = `.preload`;
// profile variables
let profile = `header .container .user-section .profile`;
let profileArrow = `header .container .user-section .profile .caret`;
let profileMenu = `.profile-pop`;
// navbar variables
let navBar = `nav`;
let navMenu = `header .container .toggle-menu`;
// color options variable
let optionBox = `.option`;
let optBtn = `.option .option-icon`;
let optIcon = `.option .option-icon > svg`;
let optColors = Array.from(document.querySelectorAll(`.option .option-box .color-option ul > li`));
let themeBar = `.option .mood-option .mood .mood-bar`;
let themeMoon = `.option .mood-option .mood .moon`;
let themeSun = `.option .mood-option .mood .sun`;
let langEnglish = `.option .lang-option .lang-box > a.english`;
let langArabic = `.option .lang-option .lang-box > a.arabic`;
let englishStyle = `link.style-en`;
let arabicStyle = `link.style-ar`;
// header & footer logo variables
let headerLogo = document.querySelector(`header .container .logo-icon img`);
let footerLogo = document.querySelector(`footer .container .top .end-wish img`);
// notification list variables
let notificationList = `.notification`;
let notificationBtn = `header .container .user-section .notification-icon`;
let notificationExit = `.notification .notification-exit`;
let notificationSetting = `.notification .notification-setting`;
// go up button variables
let goUpBtn = document.querySelector(`.go-up`);
// monitoring variables
let wholeStatus = `.monitoring .container .monitoring-head`;
let wholeStatusIcon = `.monitoring .container .monitoring-head svg`;
let tempNormalMinVal = parseInt($("body").css("--normal-temp-min"));
let tempNormalMaxVal = parseInt($("body").css("--normal-temp-max"));
let pulseNormalMinVal = parseInt($("body").css("--normal-pulse-min"));
let pulseNormalMaxVal = parseInt($("body").css("--normal-pulse-max"));
let glukoseNormalMinVal = parseInt($("body").css("--normal-glukose-min"));
let glukoseNormalMaxVal = parseInt($("body").css("--normal-glukose-max"));
let tempEmergencyMinVal = 15;
let tempEmergencyMaxVal = 75;
let pulseEmergencyMinVal = 20;
let pulseEmergencyMaxVal = 85;
let glukoseEmergencyMinVal = 10;
let glukoseEmergencyMaxVal = 65;
let tempNormalMinPos = `.monitoring .monitoring-temperature .current-section .monitoring-value .current-range span.normal-min`;
let tempNormalMaxPos = `.monitoring .monitoring-temperature .current-section .monitoring-value .current-range span.normal-max`;
let tempNormalScaleMin = `.monitoring .monitoring-temperature .normal-section .monitoring-value .normal-range span.normal-min`;
let tempNormalScaleMax = `.monitoring .monitoring-temperature .normal-section .monitoring-value .normal-range span.normal-max`;
let tempCurrentScale = `.monitoring .monitoring-temperature .current-section .monitoring-value .current-range .current-scale`;
let tempCurrentValue = `.monitoring .monitoring-temperature .current-section .monitoring-value .current-range .current-scale span.scale-value`;
let tempDealSection = `.monitoring .monitoring-temperature .deal-section`;
let tempMedicineSection = `.monitoring .monitoring-temperature .medicine-section`;
let pulseNormalMinPos = `.monitoring .monitoring-pulse .current-section .monitoring-value .current-range span.normal-min`;
let pulseNormalMaxPos = `.monitoring .monitoring-pulse .current-section .monitoring-value .current-range span.normal-max`;
let pulseNormalScaleMin = `.monitoring .monitoring-pulse .normal-section .monitoring-value .normal-range span.normal-min`;
let pulseNormalScaleMax = `.monitoring .monitoring-pulse .normal-section .monitoring-value .normal-range span.normal-max`;
let pulseCurrentScale = `.monitoring .monitoring-pulse .current-section .monitoring-value .current-range .current-scale`;
let pulseCurrentValue = `.monitoring .monitoring-pulse .current-section .monitoring-value .current-range .current-scale span.scale-value`;
let pulseDealSection = `.monitoring .monitoring-pulse .deal-section`;
let pulseMedicineSection = `.monitoring .monitoring-pulse .medicine-section`;
let glukoseNormalMinPos = `.monitoring .monitoring-glukose .current-section .monitoring-value .current-range span.normal-min`;
let glukoseNormalMaxPos = `.monitoring .monitoring-glukose .current-section .monitoring-value .current-range span.normal-max`;
let glukoseNormalScaleMin = `.monitoring .monitoring-glukose .normal-section .monitoring-value .normal-range span.normal-min`;
let glukoseNormalScaleMax = `.monitoring .monitoring-glukose .normal-section .monitoring-value .normal-range span.normal-max`;
let glukoseCurrentScale = `.monitoring .monitoring-glukose .current-section .monitoring-value .current-range .current-scale`;
let glukoseCurrentValue = `.monitoring .monitoring-glukose .current-section .monitoring-value .current-range .current-scale span.scale-value`;
let glukoseDealSection = `.monitoring .monitoring-glukose .deal-section`;
let glukoseMedicineSection = `.monitoring .monitoring-glukose .medicine-section`;
// localstorage values variables
let saveLogo = localStorage.getItem("logo-color");
let saveColor = localStorage.getItem("option-color");
let saveThemeStat = localStorage.getItem("theme-status");
let saveThemeBG = localStorage.getItem("theme-background");
let saveThemeClr = localStorage.getItem("theme-color");
let saveLanguage = localStorage.getItem("page-language");
// End Variables
// Start check Localstorage
// color option value
if (saveColor !== null) {
    document.documentElement.style.setProperty("--option-color", saveColor);
    optColors.forEach(li => {
        if (li.dataset.color == saveColor) {
            li.classList.add("active");
        } else {
            if (li.classList.contains("active")) {
                li.classList.remove("active");
            }
        }
    });
}
// logo color value
if (saveLogo !== null) {
    headerLogo.setAttribute("src", `assets/imgs/${saveLogo}`);
    footerLogo.setAttribute("src", `assets/imgs/${saveLogo}`);
}
// theme mood value
if (saveThemeStat !== null) {
    if (!$(themeBar).hasClass(saveThemeStat)) {
        $(themeBar).toggleClass("light dark");
    }
}
// theme background color value
if (saveThemeBG !== null) {
    $("body").css("--theme-background", saveThemeBG);
}
// theme color value
if (saveThemeClr !== null) {
    $("body").css("--theme-color", saveThemeClr);
}
// page language value
if (saveLanguage !== null) {
    if (saveLanguage == "en") {
        if (!$(langEnglish).hasClass("active")) {
            $(langEnglish).siblings().removeClass("active");
            $(langEnglish).addClass("active");
            $("html").attr("lang", "en");
            $("body").attr("translate", "no");
            if ($(arabicStyle).attr("href") != undefined) {
                $(arabicStyle).remove();
            }
        }
    } else if (saveLanguage == "ar") {
        if (!$(langArabic).hasClass("active")) {
            $(langArabic).siblings().removeClass("active");
            $(langArabic).addClass("active");
            $("html").attr("lang", "ar");
            $("body").attr("translate", "yes");
            $(englishStyle).after(`<link rel="stylesheet" href="css/monitoring-ar.css" class="style-ar" />`);
        }
    }
}
// End check Localstorage
// Update the current scale
$(document).ready(() => {
    updateTempNormlaRange();
    updateTempScale();
    updatePulseNormlaRange();
    updatePulseScale();
    updateGlukoseNormlaRange();
    updateGlukoseScale();
    updateWholeStatus();
});
// Fade preloader out
$(document).ready(() => {
    $(preLoad).fadeOut("slow");
});
// Toggle profile menu
$(profile).on("click", function() {
    toggleProfile();
});
// Toggle navbar menu
$(navMenu).on("click", function() {
    toggleNav();
});
// Fade navbar in after resizeing
$(window).on("resize", function() {
    if ($(document).width() >= 767) {
        $(navBar).slideDown("fast");
    } else {
        $(navBar).slideUp("fast");
        if ($(navMenu).hasClass("open")) {
            $(navMenu).removeClass("open");
        }
    }
});
// Toggle profile function
function toggleProfile() {
    if ($(navMenu).hasClass("open")) {
        $(navBar).slideUp("fast");
        $(navMenu).removeClass("open");
    }
    $(profileMenu).slideToggle("fast");
    $(profileArrow).toggleClass("fa-caret-down fa-caret-up");
}
// Toggle Navbar function
function toggleNav() {
    if ($(profileMenu).css("display") == "block") {
        $(profileMenu).slideUp("fast");
        $(profileArrow).removeClass("fa-caret-up").addClass("fa-caret-down");
    }
    $(navBar).slideToggle("fast");
    $(navMenu).toggleClass("open");
};
// toggle notification box
$(notificationBtn).on("click", function() {
    $(notificationList).toggleClass("show");
    $(notificationBtn).toggleClass("open");
});
// close notification box by clicking X
$(notificationExit).on("click", function() {
    $(notificationList).removeClass("show");
    $(notificationBtn).removeClass("open");
});
// toggle notification settings
$(notificationSetting).on("click", function() {
    $(notificationSetting).toggleClass("open");
});
// toggle colors option box
$(optBtn).on("click", function() {
    $(optionBox).toggleClass("open");
    $(optIcon).toggleClass("fa-spin");
});
// click on a color option
optColors.forEach(li => {
    li.style.backgroundColor = li.dataset.color;
    li.addEventListener("click", () => {
        document.documentElement.style.setProperty("--option-color", li.dataset.color);
        headerLogo.setAttribute("src", `assets/imgs/${li.dataset.logo}`);
        footerLogo.setAttribute("src", `assets/imgs/${li.dataset.logo}`);
        localStorage.setItem("option-color", li.dataset.color);
        localStorage.setItem("logo-color", li.dataset.logo);
        optColors.forEach(clr => {
            if (clr.classList.contains("active")) {
                clr.classList.remove("active");
            }
        });
        li.classList.add("active");
        $(optionBox).removeClass("open");
        $(optIcon).removeClass("fa-spin");
    })
});
// click on theme bar
$(themeBar).on("click", function() {
    if ($(themeBar).hasClass("light")) {
        $("body").css("--theme-background", "#333");
        $("body").css("--theme-color", "#fff");
        localStorage.setItem("theme-status", "dark");
        localStorage.setItem("theme-background", "#333");
        localStorage.setItem("theme-color", "#fff");
        $(themeBar).toggleClass("light dark");
    } else if ($(themeBar).hasClass("dark")) {
        $("body").css("--theme-background", "#fff");
        $("body").css("--theme-color", "#333");
        localStorage.setItem("theme-status", "light");
        localStorage.setItem("theme-background", "#fff");
        localStorage.setItem("theme-color", "#333");
        $(themeBar).toggleClass("dark light");
    }
});
// click on moon icon
$(themeMoon).on("click", function() {
    if ($(themeBar).hasClass("light")) {
        $("body").css("--theme-background", "#333");
        $("body").css("--theme-color", "#fff");
        localStorage.setItem("theme-status", "dark");
        localStorage.setItem("theme-background", "#333");
        localStorage.setItem("theme-color", "#fff");
        $(themeBar).toggleClass("light dark");
    }
});
// click on sun icon
$(themeSun).on("click", function() {
    if ($(themeBar).hasClass("dark")) {
        $("body").css("--theme-background", "#fff");
        $("body").css("--theme-color", "#333");
        localStorage.setItem("theme-status", "light");
        localStorage.setItem("theme-background", "#fff");
        localStorage.setItem("theme-color", "#333");
        $(themeBar).toggleClass("dark light");
    }
});
// click on english btn
$(langEnglish).on("click", function(e) {
    if (!$(langEnglish).hasClass("active")) {
        $(langEnglish).siblings().removeClass("active");
        $(langEnglish).addClass("active");
        $("html").attr("lang", "en");
        $("body").attr("translate", "no");
        if ($(arabicStyle).attr("href") != undefined) {
            $(arabicStyle).remove();
        }
        localStorage.setItem("page-language", "en");
    } else {
        e.preventDefault();
    }
});
// click on arabic btn
$(langArabic).on("click", function(e) {
    if (!$(langArabic).hasClass("active")) {
        $(langArabic).siblings().removeClass("active");
        $(langArabic).addClass("active");
        $("html").attr("lang", "ar");
        $("body").attr("translate", "yes");
        $(englishStyle).after(`<link rel="stylesheet" href="css/monitoring-ar.css" class="style-ar" />`);
        localStorage.setItem("page-language", "ar");
    } else {
        e.preventDefault();
    }
});
// Close opened menu by clicking Escape key
$(document).on("keydown", function(e) {
    if (e.key == "Escape") {
        if ($(profileMenu).css("display") == "block") {
            $(profileMenu).slideUp("fast");
            $(profileArrow).removeClass("fa-caret-up").addClass("fa-caret-down");
        }
        if ($(navBar).css("display") == "block" && $(document).width() <= 767) {
            $(navBar).slideUp("fast");
            $(navMenu).removeClass("open");
        }
        if ($(notificationList).hasClass("show")) {
            $(notificationList).removeClass("show");
            $(notificationBtn).removeClass("open");
        }
        if ($(optionBox).hasClass("open")) {
            $(optionBox).removeClass("open");
            $(optIcon).removeClass("fa-spin");
        }
        if ($(notificationSetting).hasClass("open")) {
            $(notificationSetting).removeClass("open");
        }
    }
});
// Close opened menu by clicking document body
$(document).on("click", function(e) {
    if ($(profileMenu).find(e.target).length == 0 && $(profile).find(e.target).length == 0 && e.target != $(profile)[0]) {
        if ($(profileMenu).css("display") == "block") {
            $(profileMenu).slideUp("fast");
            $(profileArrow).removeClass("fa-caret-up").addClass("fa-caret-down");
        }
    }
    if ($(navMenu).find(e.target).length == 0 && $(navBar).find(e.target).length == 0 && e.target != $(navMenu)[0]) {
        if ($(navMenu).hasClass("open")) {
            $(navBar).slideUp("fast");
            $(navMenu).removeClass("open");
        }
    }
    if ($(optionBox).find(e.target).length == 0 && $(optBtn).find(e.target).length == 0 && e.target != $(optionBox)[0]) {
        if ($(optionBox).hasClass("open")) {
            $(optionBox).removeClass("open");
            $(optIcon).removeClass("fa-spin");
        }
    }
    if ($(notificationList).find(e.target).length == 0 && $(notificationBtn).find(e.target).length == 0 && e.target != $(notificationList)[0]) {
        if ($(notificationList).hasClass("show")) {
            $(notificationList).removeClass("show");
            $(notificationBtn).removeClass("open");
        }
    }
    if ($(notificationSetting).find(e.target).length == 0 && e.target != $(notificationSetting)[0]) {
        if ($(notificationSetting).hasClass("open")) {
            $(notificationSetting).removeClass("open");
        }
    }
});
// showing the go up btn
window.onscroll = function() {
    if (window.scrollY >= window.innerHeight) {
        goUpBtn.classList.add("show");
    } else {
        goUpBtn.classList.remove("show");
    }
};
// click on go up button
goUpBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0
    });
});
// Changing scales
let changingTempScale = setInterval(function() {
    let newTempCurrent = Math.floor(Math.random() * 100);
    let newPulseCurrent = Math.floor(Math.random() * 100);
    let newGlukoseCurrent = Math.floor(Math.random() * 100);
    $(tempCurrentValue).text(newTempCurrent);
    $(pulseCurrentValue).text(newPulseCurrent);
    $(glukoseCurrentValue).text(newGlukoseCurrent);
    updateTempScale();
    updatePulseScale();
    updateGlukoseScale();
    updateWholeStatus();
}, 3000);
// Update The whole state
function updateWholeStatus() {
    if ($(tempCurrentScale).hasClass("current-emergency") || $(pulseCurrentScale).hasClass("current-emergency") || $(glukoseCurrentScale).hasClass("current-emergency")) {
        if ($(wholeStatus).hasClass("sick")) {
            $(wholeStatus).removeClass("sick").addClass("emergency");
            $(wholeStatusIcon).removeClass("fa-triangle-exclamation").addClass("fa-skull-crossbones");
        } else if ($(wholeStatus).hasClass("normal")) {
            $(wholeStatus).removeClass("normal").addClass("emergency");
            $(wholeStatusIcon).removeClass("fa-square-check").addClass("fa-skull-crossbones");
        }
    } else if ($(tempCurrentScale).hasClass("current-sick") || $(pulseCurrentScale).hasClass("current-sick") || $(glukoseCurrentScale).hasClass("current-sick")) {
        if ($(wholeStatus).hasClass("emergency")) {
            $(wholeStatus).removeClass("emergency").addClass("sick");
            $(wholeStatusIcon).removeClass("fa-skull-crossbones").addClass("fa-triangle-exclamation");
        } else if ($(wholeStatus).hasClass("normal")) {
            $(wholeStatus).removeClass("normal").addClass("sick");
            $(wholeStatusIcon).removeClass("fa-square-check").addClass("fa-triangle-exclamation");
        }
    } else if ($(tempCurrentScale).hasClass("current-normal") || $(pulseCurrentScale).hasClass("current-normal") || $(glukoseCurrentScale).hasClass("current-normal")) {
        if ($(wholeStatus).hasClass("emergency")) {
            $(wholeStatus).removeClass("emergency").addClass("normal");
            $(wholeStatusIcon).removeClass("fa-skull-crossbones").addClass("fa-square-check");
        } else if ($(wholeStatus).hasClass("sick")) {
            $(wholeStatus).removeClass("sick").addClass("normal");
            $(wholeStatusIcon).removeClass("fa-triangle-exclamation").addClass("fa-square-check");
        }
    }
}
// Update temperature current scale
function updateTempScale() {
    $(tempCurrentScale).width(`${$(tempCurrentValue).text()}%`);
    if ($(tempCurrentValue).text() >= tempEmergencyMaxVal || $(tempCurrentValue).text() <= tempEmergencyMinVal) {
        if ($(tempCurrentScale).hasClass("current-normal")) {
            $(tempCurrentScale).removeClass("current-normal").addClass("current-emergency");
        } else if ($(tempCurrentScale).hasClass("current-sick")) {
            $(tempCurrentScale).removeClass("current-sick").addClass("current-emergency");
        }
    } else if (($(tempCurrentValue).text() > tempNormalMaxVal && $(tempCurrentValue).text() < tempEmergencyMaxVal) || ($(tempCurrentValue).text() > tempEmergencyMinVal && $(tempCurrentValue).text() < tempNormalMinVal)) {
        if ($(tempCurrentScale).hasClass("current-normal")) {
            $(tempCurrentScale).removeClass("current-normal").addClass("current-sick");
        } else if ($(tempCurrentScale).hasClass("current-emergency")) {
            $(tempCurrentScale).removeClass("current-emergency").addClass("current-sick");
        }
    } else if (($(tempCurrentValue).text() >= tempNormalMinVal && $(tempCurrentValue).text() <= tempNormalMaxVal)) {
        if ($(tempCurrentScale).hasClass("current-sick")) {
            $(tempCurrentScale).removeClass("current-sick").addClass("current-normal");
        } else if ($(tempCurrentScale).hasClass("current-emergency")) {
            $(tempCurrentScale).removeClass("current-emergency").addClass("current-normal");
        }
    }
    if ($(tempCurrentScale).hasClass("current-sick") || $(tempCurrentScale).hasClass("current-emergency")) {
        if (!$(tempDealSection).hasClass("show")) {
            $(tempDealSection).slideDown("fast");
            $(tempDealSection).addClass("show");
        }
    } else if ($(tempCurrentScale).hasClass("current-normal")) {
        if ($(tempDealSection).hasClass("show")) {
            $(tempDealSection).slideUp("fast");
            $(tempDealSection).removeClass("show");
        }
    }
    if ($(tempCurrentScale).hasClass("current-sick") || $(tempCurrentScale).hasClass("current-emergency")) {
        if (!$(tempMedicineSection).hasClass("show")) {
            $(tempMedicineSection).slideDown("fast");
            $(tempMedicineSection).addClass("show");
        }
    } else if ($(tempCurrentScale).hasClass("current-normal")) {
        if ($(tempMedicineSection).hasClass("show")) {
            $(tempMedicineSection).slideUp("fast");
            $(tempMedicineSection).removeClass("show");
        }
    }
};
// Update temperature normal range positions
function updateTempNormlaRange() {
    $(tempNormalScaleMin).text($(tempNormalMinPos).text());
    $(tempNormalScaleMax).text($(tempNormalMaxPos).text());
    $("body").css("--normal-temp-min", `${$(tempNormalMinPos).text()}%`);
    $("body").css("--normal-temp-max", `${$(tempNormalMaxPos).text()}%`);
    normalMinVal = $(tempNormalMinPos).text();
    normalMaxVal = $(tempNormalMaxPos).text();
}
// Update Pulse current scale
function updatePulseScale() {
    $(pulseCurrentScale).width(`${$(pulseCurrentValue).text()}%`);
    if ($(pulseCurrentValue).text() >= pulseEmergencyMaxVal || $(pulseCurrentValue).text() <= pulseEmergencyMinVal) {
        if ($(pulseCurrentScale).hasClass("current-normal")) {
            $(pulseCurrentScale).removeClass("current-normal").addClass("current-emergency");
        } else if ($(pulseCurrentScale).hasClass("current-sick")) {
            $(pulseCurrentScale).removeClass("current-sick").addClass("current-emergency");
        }
    } else if (($(pulseCurrentValue).text() > pulseNormalMaxVal && $(pulseCurrentValue).text() < pulseEmergencyMaxVal) || ($(pulseCurrentValue).text() > pulseEmergencyMinVal && $(pulseCurrentValue).text() < pulseNormalMinVal)) {
        if ($(pulseCurrentScale).hasClass("current-normal")) {
            $(pulseCurrentScale).removeClass("current-normal").addClass("current-sick");
        } else if ($(pulseCurrentScale).hasClass("current-emergency")) {
            $(pulseCurrentScale).removeClass("current-emergency").addClass("current-sick");
        }
    } else if (($(pulseCurrentValue).text() >= pulseNormalMinVal && $(pulseCurrentValue).text() <= pulseNormalMaxVal)) {
        if ($(pulseCurrentScale).hasClass("current-sick")) {
            $(pulseCurrentScale).removeClass("current-sick").addClass("current-normal");
        } else if ($(pulseCurrentScale).hasClass("current-emergency")) {
            $(pulseCurrentScale).removeClass("current-emergency").addClass("current-normal");
        }
    }
    if ($(pulseCurrentScale).hasClass("current-sick") || $(pulseCurrentScale).hasClass("current-emergency")) {
        if (!$(pulseDealSection).hasClass("show")) {
            $(pulseDealSection).slideDown("fast");
            $(pulseDealSection).addClass("show");
        }
    } else if ($(pulseCurrentScale).hasClass("current-normal")) {
        if ($(pulseDealSection).hasClass("show")) {
            $(pulseDealSection).slideUp("fast");
            $(pulseDealSection).removeClass("show");
        }
    }
    if ($(pulseCurrentScale).hasClass("current-sick") || $(pulseCurrentScale).hasClass("current-emergency")) {
        if (!$(pulseMedicineSection).hasClass("show")) {
            $(pulseMedicineSection).slideDown("fast");
            $(pulseMedicineSection).addClass("show");
        }
    } else if ($(pulseCurrentScale).hasClass("current-normal")) {
        if ($(pulseMedicineSection).hasClass("show")) {
            $(pulseMedicineSection).slideUp("fast");
            $(pulseMedicineSection).removeClass("show");
        }
    }
};
// Update Pulse normal range positions
function updatePulseNormlaRange() {
    $(pulseNormalScaleMin).text($(pulseNormalMinPos).text());
    $(pulseNormalScaleMax).text($(pulseNormalMaxPos).text());
    $("body").css("--normal-pulse-min", `${$(pulseNormalMinPos).text()}%`);
    $("body").css("--normal-pulse-max", `${$(pulseNormalMaxPos).text()}%`);
    normalMinVal = $(pulseNormalMinPos).text();
    normalMaxVal = $(pulseNormalMaxPos).text();
}
// Update Glukose current scale
function updateGlukoseScale() {
    $(glukoseCurrentScale).width(`${$(glukoseCurrentValue).text()}%`);
    if ($(glukoseCurrentValue).text() >= glukoseEmergencyMaxVal || $(glukoseCurrentValue).text() <= glukoseEmergencyMinVal) {
        if ($(glukoseCurrentScale).hasClass("current-normal")) {
            $(glukoseCurrentScale).removeClass("current-normal").addClass("current-emergency");
        } else if ($(glukoseCurrentScale).hasClass("current-sick")) {
            $(glukoseCurrentScale).removeClass("current-sick").addClass("current-emergency");
        }
    } else if (($(glukoseCurrentValue).text() > glukoseNormalMaxVal && $(glukoseCurrentValue).text() < glukoseEmergencyMaxVal) || ($(glukoseCurrentValue).text() > glukoseEmergencyMinVal && $(glukoseCurrentValue).text() < glukoseNormalMinVal)) {
        if ($(glukoseCurrentScale).hasClass("current-normal")) {
            $(glukoseCurrentScale).removeClass("current-normal").addClass("current-sick");
        } else if ($(glukoseCurrentScale).hasClass("current-emergency")) {
            $(glukoseCurrentScale).removeClass("current-emergency").addClass("current-sick");
        }
    } else if (($(glukoseCurrentValue).text() >= glukoseNormalMinVal && $(glukoseCurrentValue).text() <= glukoseNormalMaxVal)) {
        if ($(glukoseCurrentScale).hasClass("current-sick")) {
            $(glukoseCurrentScale).removeClass("current-sick").addClass("current-normal");
        } else if ($(glukoseCurrentScale).hasClass("current-emergency")) {
            $(glukoseCurrentScale).removeClass("current-emergency").addClass("current-normal");
        }
    }
    if ($(glukoseCurrentScale).hasClass("current-sick") || $(glukoseCurrentScale).hasClass("current-emergency")) {
        if (!$(glukoseDealSection).hasClass("show")) {
            $(glukoseDealSection).slideDown("fast");
            $(glukoseDealSection).addClass("show");
        }
    } else if ($(glukoseCurrentScale).hasClass("current-normal")) {
        if ($(glukoseDealSection).hasClass("show")) {
            $(glukoseDealSection).slideUp("fast");
            $(glukoseDealSection).removeClass("show");
        }
    }
    if ($(glukoseCurrentScale).hasClass("current-sick") || $(glukoseCurrentScale).hasClass("current-emergency")) {
        if (!$(glukoseMedicineSection).hasClass("show")) {
            $(glukoseMedicineSection).slideDown("fast");
            $(glukoseMedicineSection).addClass("show");
        }
    } else if ($(glukoseCurrentScale).hasClass("current-normal")) {
        if ($(glukoseMedicineSection).hasClass("show")) {
            $(glukoseMedicineSection).slideUp("fast");
            $(glukoseMedicineSection).removeClass("show");
        }
    }
};
// Update Glukose normal range positions
function updateGlukoseNormlaRange() {
    $(glukoseNormalScaleMin).text($(glukoseNormalMinPos).text());
    $(glukoseNormalScaleMax).text($(glukoseNormalMaxPos).text());
    $("body").css("--normal-glukose-min", `${$(glukoseNormalMinPos).text()}%`);
    $("body").css("--normal-glukose-max", `${$(glukoseNormalMaxPos).text()}%`);
    normalMinVal = $(glukoseNormalMinPos).text();
    normalMaxVal = $(glukoseNormalMaxPos).text();
}
// Swipping Monitoring cards
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});