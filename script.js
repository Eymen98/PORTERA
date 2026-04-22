const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");
const header = document.querySelector("header");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

/* =========================
   Mobile Menu
========================= */
function toggleMenu() {
  if (mobileMenu) {
    mobileMenu.classList.toggle("hidden");
  }
}

if (navToggle) {
  navToggle.addEventListener("click", toggleMenu);
}

/* =========================
   Active Nav Link on Scroll
   (for pages that have sections like index.html)
========================= */
function setActiveLink() {
  if (!sections.length || !navLinks.length) return;

  const scrollPos = window.scrollY + 150;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach((link) => link.classList.remove("active"));

      document
        .querySelectorAll(`.nav-link[data-section="${id}"]`)
        .forEach((link) => link.classList.add("active"));
    }
  });
}

window.addEventListener("scroll", () => {
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 80);
  }

  setActiveLink();
});

/* =========================
   Language Dropdown
========================= */
const langToggleDesktop = document.getElementById("langToggleDesktop");
const langMenuDesktop = document.getElementById("langMenuDesktop");
const langToggleMobile = document.getElementById("langToggleMobile");
const langMenuMobile = document.getElementById("langMenuMobile");

function closeLangMenus() {
  if (langMenuDesktop) langMenuDesktop.classList.add("hidden");
  if (langMenuMobile) langMenuMobile.classList.add("hidden");
}

if (langToggleDesktop) {
  langToggleDesktop.addEventListener("click", (e) => {
    e.stopPropagation();
    if (langMenuMobile) langMenuMobile.classList.add("hidden");
    if (langMenuDesktop) langMenuDesktop.classList.toggle("hidden");
  });
}

if (langToggleMobile) {
  langToggleMobile.addEventListener("click", (e) => {
    e.stopPropagation();
    if (langMenuDesktop) langMenuDesktop.classList.add("hidden");
    if (langMenuMobile) langMenuMobile.classList.toggle("hidden");
  });
}

document.addEventListener("click", (e) => {
  const clickedDesktop =
    langToggleDesktop &&
    (langToggleDesktop.contains(e.target) ||
      (langMenuDesktop && langMenuDesktop.contains(e.target)));

  const clickedMobile =
    langToggleMobile &&
    (langToggleMobile.contains(e.target) ||
      (langMenuMobile && langMenuMobile.contains(e.target)));

  if (!clickedDesktop && !clickedMobile) {
    closeLangMenus();
  }
});

/* =========================
   Translations
========================= */
const translations = {
  tr: {
    nav_home: "ANASAYFA",
    nav_services: "HİZMETLER",
    nav_about: "HAKKINDA",
    nav_contact: "İLETİŞİM",

    hero_title: "PORTERA DIŞ TİCARET",
    hero_text:
      "Global ticaret süreçlerinizi kolaylaştıran transit ticaret, güvenli SWIFT ödemeleri ve profesyonel lojistik çözümleri sunuyoruz",

    services_title: "Hizmetler",
    services_desc: "Uluslararası ticarette size entegre çözümler sunuyoruz",

    service1_title: "Transit Ticaret",
    service1_desc:
      "Farklı ülkeler arasında gerçekleştirilen transit ticaret işlemlerinde profesyonel çözümler sunuyoruz",

    service2_title: "Para Transferi",
    service2_desc:
      "Uluslararası ticaret işlemlerinde gerekli olan ödemeler için güvenli SWIFT para transfer hizmeti sağlıyoruz",

    service3_title: "Lojistik Hizmetleri",
    service3_desc:
      "Uluslararası ticarette ürünlerin doğru ve zamanında taşınabilmesi için kapsamlı lojistik çözümleri sunuyoruz",

    about_title: "Hakkında",
    about_desc:
      "Uluslararası ticaret süreçlerini daha kolay, güvenli ve verimli hale getirmek amacıyla kurulmuş bir dış ticaret şirketidir. Şirketimiz, özellikle transit ticaret, uluslararası finansal işlemler ve lojistik hizmetleri alanlarında profesyonel çözümler sunarak firmaların global pazarlara daha rahat ulaşmasına yardımcı olmaktadır. Transit ticaret operasyonlarının planlanması, uluslararası SWIFT ödemelerinin güvenli şekilde gerçekleştirilmesi ve lojistik süreçlerin etkin şekilde yönetilmesi sayesinde müşterilerimizin ticari faaliyetlerini kolaylaştırıyoruz. Profesyonellik, güven ve şeffaflık ilkeleri doğrultusunda çalışan şirketimiz, uluslararası ticaret alanında sürdürülebilir ve güçlü iş birlikleri kurmayı amaçlamaktadır.",

    footer_desc: "Uluslararası ticaret çözümleri",

    policy_privacy: "Gizlilik Politikası",
    policy_kvkk: "KVKK Aydınlatma Metni",
    policy_cookies: "Çerez Politikası",
    policy_shipping: "Gönderim Politikası",
    policy_terms: "Şartlar ve Koşullar",
    policy_accessibility: "Erişilebilirlik",

    contact_btn: "İLETİŞİM",

    contact_title: "İletişim",
    contact_company: "PORTERA",

    btn_whatsapp: "WhatsApp",
    btn_email: "E-posta Gönder",
    btn_call: "Ara"
  },

  en: {
    nav_home: "HOME",
    nav_services: "SERVICES",
    nav_about: "ABOUT",
    nav_contact: "CONTACT",

    hero_title: "PORTERA FOREIGN TRADE",
    hero_text:
      "We provide transit trade, secure SWIFT payments, and professional logistics solutions to simplify your global trade processes",

    services_title: "Services",
    services_desc: "We offer integrated solutions for international trade",

    service1_title: "Transit Trade",
    service1_desc:
      "We provide professional solutions for transit trade operations carried out between different countries",

    service2_title: "Money Transfer",
    service2_desc:
      "We provide secure SWIFT transfer services for payments required in international trade transactions",

    service3_title: "Logistics Services",
    service3_desc:
      "We offer comprehensive logistics solutions to ensure that products are transported accurately and on time in international trade",

    about_title: "About",
    about_desc:
      "Portera is a foreign trade company established to make international trade processes easier, safer, and more efficient. Our company provides professional solutions especially in transit trade, international financial transactions, and logistics services, helping businesses access global markets more easily. By planning transit trade operations, securely executing international SWIFT payments, and effectively managing logistics processes, we simplify our clients' commercial activities. Operating with principles of professionalism, trust, and transparency, our company aims to build sustainable and strong partnerships in international trade.",

    footer_desc: "International trade solutions",

    policy_privacy: "Privacy Policy",
    policy_kvkk: "KVKK Disclosure Statement",
    policy_cookies: "Cookie Policy",
    policy_shipping: "Shipping Policy",
    policy_terms: "Terms and Conditions",
    policy_accessibility: "Accessibility",

    contact_btn: "CONTACT",

    contact_title: "Contact",
    contact_company: "PORTERA",

    btn_whatsapp: "WhatsApp",
    btn_email: "Send Email",
    btn_call: "Call"
  },

  ar: {
    nav_home: "الرئيسية",
    nav_services: "الخدمات",
    nav_about: "من نحن",
    nav_contact: "اتصل بنا",

    hero_title: "بورتيرا للتجارة الخارجية",
    hero_text:
      "نقدم حلول تجارة الترانزيت، ومدفوعات SWIFT الآمنة، والخدمات اللوجستية الاحترافية لتسهيل عمليات تجارتكم العالمية",

    services_title: "الخدمات",
    services_desc: "نقدم لكم حلولاً متكاملة في التجارة الدولية",

    service1_title: "تجارة الترانزيت",
    service1_desc:
      "نقدم حلولاً احترافية لعمليات تجارة الترانزيت التي تتم بين مختلف الدول",

    service2_title: "تحويل الأموال",
    service2_desc:
      "نوفّر خدمات تحويل SWIFT الآمنة للمدفوعات المطلوبة في معاملات التجارة الدولية",

    service3_title: "الخدمات اللوجستية",
    service3_desc:
      "نقدم حلولاً لوجستية شاملة لضمان نقل المنتجات بدقة وفي الوقت المناسب في التجارة الدولية",

    about_title: "من نحن",
    about_desc:
      "بورتيرا هي شركة تجارة خارجية تأسست بهدف جعل عمليات التجارة الدولية أكثر سهولة وأماناً وكفاءة. تقدم شركتنا حلولاً احترافية خاصة في مجالات تجارة الترانزيت، والمعاملات المالية الدولية، والخدمات اللوجستية، مما يساعد الشركات على الوصول إلى الأسواق العالمية بسهولة أكبر. ومن خلال تخطيط عمليات تجارة الترانزيت، وتنفيذ مدفوعات SWIFT الدولية بشكل آمن، وإدارة العمليات اللوجستية بكفاءة، فإننا نسهّل الأنشطة التجارية لعملائنا. وتعمل شركتنا وفق مبادئ الاحترافية والثقة والشفافية، وتهدف إلى بناء شراكات قوية ومستدامة في مجال التجارة الدولية.",

    footer_desc: "حلول التجارة الدولية",

    policy_privacy: "سياسة الخصوصية",
    policy_kvkk: "بيان توضيح KVKK",
    policy_cookies: "سياسة ملفات تعريف الارتباط",
    policy_shipping: "سياسة الشحن",
    policy_terms: "الشروط والأحكام",
    policy_accessibility: "إمكانية الوصول",

    contact_btn: "اتصل بنا",

    contact_title: "اتصل بنا",
    contact_company: "PORTERA",

    btn_whatsapp: "واتساب",
    btn_email: "إرسال بريد",
    btn_call: "اتصال"
  }
};

/* =========================
   Direction + Layout Helpers
========================= */
function applyDirection(lang) {
  const isArabic = lang === "ar";

  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", isArabic ? "rtl" : "ltr");

  // Home hero text alignment
  const heroTextContainer = document.querySelector("#anasayfa .order-1");
  if (heroTextContainer) {
    if (isArabic) {
      heroTextContainer.classList.remove("md:text-left");
      heroTextContainer.classList.add("md:text-right");
    } else {
      heroTextContainer.classList.remove("md:text-right");
      heroTextContainer.classList.add("md:text-left");
    }
  }

  // Contact page blocks alignment
  const contactSection = document.querySelector("section.max-w-6xl");
  if (contactSection) {
    if (isArabic) {
      contactSection.classList.add("rtl-contact");
    } else {
      contactSection.classList.remove("rtl-contact");
    }
  }

  // Mobile menu text direction
  if (mobileMenu) {
    if (isArabic) {
      mobileMenu.classList.add("text-right");
    } else {
      mobileMenu.classList.remove("text-right");
    }
  }
}

/* =========================
   Apply Language
========================= */
function applyLang(lang) {
  const selected = translations[lang] || translations.tr;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (selected[key]) {
      el.innerText = selected[key];
    }
  });

  applyDirection(lang);
}

/* =========================
   Set Language
========================= */
function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyLang(lang);
  closeLangMenus();
}

/* =========================
   Init
========================= */
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "tr";
  applyLang(savedLang);
  setActiveLink();
});