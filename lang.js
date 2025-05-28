
const translations = {
    fr: {
        title: "Bienvenue sur notre plateforme",
        description: "Réservez votre traducteur professionnel en temps réel.",
        signup: "S'inscrire",
        search: "Trouver un traducteur"
    },
    en: {
        title: "Welcome to our platform",
        description: "Book your professional translator in real time.",
        signup: "Sign up",
        search: "Find a translator"
    },
    ar: {
        title: "مرحبًا بكم في منصتنا",
        description: "احجز مترجمك المحترف في الوقت الفعلي.",
        signup: "تسجيل",
        search: "البحث عن مترجم"
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = translations[lang][key];
    });
}
