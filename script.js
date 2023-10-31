// animation set for profession
var typed = new Typed(".section__text__p2", {
    strings: ["Fullstack developer", "Mobile developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// new page for demo/github
function openInNewTab(url) {
    var newTab = window.open(url, '_blank');
    newTab.focus();
}

// burgerMenu functionality
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// translation
document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language-toggle");
    const languageToggle2 = document.getElementById("language-toggle2");
    const languageToggle3 = document.getElementById("language-toggle3");
    const body = document.body;
  
    // Define translations for both languages
    const translations = {
      english: {
        greeting: "Hello, I'm",
        name: "Baseel Shanableh",
        language: "English",
        about: "About",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
        contactInfo: "Contact Info",
        checkCV: "Check my CV",
        getToKnowMore: "Get To Know More",
        aboutMe: "About Me",
        softwareDevelopment: "Software Development",
        networkEngineering: "Network Engineering",
        browseMyRecent: "Browse My Recent",
        projectOne: "Project One",
        projectTwo: "Project Two",
        projectThree: "Project Three",
        demo: "Live Demo",
        getInTouch: "Get in Touch",
        contactMe: "Contact Me",
        email: "Email",
        linkedIn: "LinkedIn",
        copyright: "Copyright © 2023 Baseel Shanableh. All Rights Reserved.",
        aboutDescription:"I am a dedicated programmer with a passion for crafting elegant solutions to complex problems.My journey in the world of programming has been an exciting exploration of code and its transformative power.I thrive on continuous learning, adaptability, and the opportunity to turn innovative ideas into functional software, making a tangible impact on the digital landscape.",
        education:"Education",
        SoftwareEngineering: "Software engineering",
        ETengineering: "Electrical and telecommunication engineering",
        Intermediate: "Intermediate",
        experienced: "Experienced",
        Firewall: "Firewall",
        Switching: "Switching",
        Routing: "Routing",
        ServerRAID: "Server RAID",
        Cloud: "Cloud",
        CCNP: "CCNP",
        CCNA: "CCNA",
        CSS: "CSS",
        HTML: "HTML",
        JavaScript: "JavaScript",
        React: "React.js",
        UIUX: "UI/UX",
        Flutter: "Flutter",
        Firebase: "Firebase",
        AWS: "AWS",
        Agile: "Agile",
        ISTQB: "ISTQB",
        Python: "Python",
        Ruby: "Ruby",
        SQL: "SQL",
        node: "Node.js",
        Php: "Php",
        explore: "Explore My",
        MobileDevelopment: "Mobile Development",
        FullstackDevelopment: "Fullstack Development",
        years: "2+ years",
        Experience: "Experience",
        Github: "Github",
      },
      arabic: {
        greeting: "مرحبا، انا",
        name: "باسل شنابله",
        language: "العربيه",
        about: "حول",
        experience: "الخبرة",
        projects: "المشاريع",
        contact: "اتصل",
        contactInfo: "معلومات الاتصال",
        checkCV: "تحقق من سيرتي الذاتية",
        getToKnowMore: "تعرف أكثر",
        aboutMe: "عني",
        softwareDevelopment: "تطوير البرمجيات",
        networkEngineering: "هندسة الشبكات",
        browseMyRecent: "تصفح مشروعاتي الأخيرة",
        projectOne: "المشروع الأول",
        projectTwo: "المشروع الثاني",
        projectThree: "المشروع الثالث",
        demo: "عرض حي",
        getInTouch: "ابقى على تواصل",
        contactMe: "تواصل معي",
        email: "البريد الإلكتروني",
        linkedIn: "لينكدإن",
        copyright: "حقوق النشر © 2023 باسل شنابله. كل الحقوق محفوظة .",
        aboutDescription: "أنا مبرمج متخصص ولدي شغف بصياغة حلول أنيقة للمشكلات المعقدة. لقد كانت رحلتي في عالم البرمجة عبارة عن استكشاف مثير للتعليمات البرمجية وقوتها التحويلية. أنا أزدهر من خلال التعلم المستمر والقدرة على التكيف وإتاحة الفرصة لتحويل الأفكار المبتكرة إلى عملية البرمجيات، مما يحدث تأثيرًا ملموسًا على المشهد الرقمي.",
        education: "التعليم",
        SoftwareEngineering: "هندسة البرمجيات",
        ETengineering: "الهندسة الكهربائية والاتصالات",
        Intermediate: "متوسط",
        experienced: "خبير",
        Firewall: "جدار الحماية",
        Switching: "التبديل",
        Routing: "التوجيه",
        ServerRAID: "غارة الخادم",
        Cloud: "الحوسبة السحابية",
        CCNP: "محترف شبكة معتمد من سيسكو",
        CCNA: "مساعد شبكة معتمد من سيسكو",
        CSS: "اوراق النمط المتعاقب",
        HTML: "لغة ترميز النص التشعبي",
        JavaScript: "جافا سكريبت",
        React: "رياكت",
        UIUX: "واجهة المستخدم/تجربة المستخدم",
        Flutter: "فلاتر",
        Firebase: "فايربيس",
        AWS: "أمازون لخدمات الويب",
        Agile: "أجاييل",
        ISTQB: "المجلس الدولي لمؤهلات اختبار البرمجيات",
        Python: "بايثون",
        Ruby: "روبي",
        SQL: "لغة الاستعلام الهيكلية",
        node: "نود",
        Php: "بي اتش بي",
        explore: "استكشف",
        MobileDevelopment: "تطوير الهاتف المحمول",
        FullstackDevelopment: "تطوير فولستاك",
        years: "2+ سنوات",
        Experience: "خبراتي",
        Github: "جيت هاب",
    },
    };
  
    // Initial language is English
    let currentLanguage = "english";
  
    // Function to change the language
    function toggleLanguage() {
      if (currentLanguage === "english") {
        currentLanguage = "arabic";
        typed.strings = ["مطور فولستاك","مطور الجوال","فريلانسر"];
        body.setAttribute("dir", "rtl"); // Set right-to-left for Arabic
      } else {
        currentLanguage = "english";
        typed.strings = ["Fullstack developer", "Mobile developer", "Freelancer"];
        body.setAttribute("dir", "ltr"); // Set left-to-right for English
      }
      updateContent();
    }
  
    // Function to update the content based on the selected language
    function updateContent() {
      const elementsToTranslate = document.querySelectorAll("[data-translate]");
      elementsToTranslate.forEach((element) => {
        const translationKey = element.getAttribute("data-translate");
        element.textContent = translations[currentLanguage][translationKey];
      });
    }
  
    // Add a click event listener to the language toggle
    languageToggle.addEventListener("click", toggleLanguage);
    languageToggle2.addEventListener("click", toggleLanguage);
    languageToggle3.addEventListener("click", toggleLanguage);
    
  
    // Initialize the content based on the selected language
    updateContent();
  });
  