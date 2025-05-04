document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const languageButtons = document.querySelectorAll('.language-btn');

    // Çoklu dil desteği
    const translations = {
        tr: {
            features: 'Özellikler',
            how: 'Nasıl Çalışır?',
            about: 'Hakkımızda',
            contact: 'İletişim',
            heroTitle: 'Almanca Öğrenmek Artık Çok Kolay!',
            heroDesc: 'DeutschApp ile Almanca öğrenmek için en etkili yöntemi keşfedin. İnteraktif dersler, pratik alıştırmalar ve gerçek zamanlı geri bildirimlerle dil öğrenme deneyiminizi en üst seviyeye taşıyın.',
            heroBtn: 'Hemen Başla',
            featuresTitle: 'Öne Çıkan Özellikler',
            feature1: 'Konuşma Pratiği',
            feature1Desc: 'Yapay zeka destekli konuşma pratiği ile telaffuzunuzu geliştirin.',
            feature2: 'Oyunlaştırılmış Öğrenme',
            feature2Desc: 'Eğlenceli oyunlar ve ödüllerle motivasyonunuzu yüksek tutun.',
            feature3: 'İlerleme Takibi',
            feature3Desc: 'Detaylı istatistiklerle öğrenme sürecinizi takip edin.',
            howTitle: 'Nasıl Çalışır?',
            step1: 'Kayıt Ol',
            step1Desc: 'Hızlı ve ücretsiz kayıt olun.',
            step2: 'Seviye Belirle',
            step2Desc: 'Seviye testi ile başlangıç noktanızı belirleyin.',
            step3: 'Öğrenmeye Başla',
            step3Desc: 'Kişiselleştirilmiş derslerle öğrenmeye başlayın.',
            aboutTitle: 'Hakkımızda',
            aboutP1: 'DeutschApp, Almanca öğrenmek isteyenler için özel olarak tasarlanmış yenilikçi bir dil öğrenme platformudur. 2024 yılında kurulan ekibimiz, dil öğrenme sürecini daha etkili ve eğlenceli hale getirmek için çalışmaktadır.',
            aboutP2: 'Uzman eğitmenlerimiz ve yapay zeka teknolojilerimiz sayesinde, her öğrencinin ihtiyaçlarına uygun kişiselleştirilmiş öğrenme deneyimi sunuyoruz. Amacımız, Almanca öğrenmek isteyen herkesin hedeflerine ulaşmasına yardımcı olmaktır.',
            stat1: 'Aktif Öğrenci',
            stat2: 'Uzman Eğitmen',
            stat3: 'Başarı Oranı',
            contactTitle: 'İletişim',
            name: 'Adınız',
            email: 'E-posta Adresiniz',
            message: 'Mesajınız',
            send: 'Gönder',
            footerDesc: 'Almanca öğrenmek için en iyi çözüm.',
            footerLinks: 'Bağlantılar',
            copyright: 'Tüm hakları saklıdır.'
        },
        de: {
            features: 'Funktionen',
            how: 'Wie funktioniert es?',
            about: 'Über uns',
            contact: 'Kontakt',
            heroTitle: 'Deutsch lernen war noch nie so einfach!',
            heroDesc: 'Entdecken Sie mit DeutschApp die effektivste Methode, Deutsch zu lernen. Interaktive Lektionen, praktische Übungen und Echtzeit-Feedback bringen Ihr Spracherlebnis auf das nächste Level.',
            heroBtn: 'Jetzt starten',
            featuresTitle: 'Hauptfunktionen',
            feature1: 'Sprechübung',
            feature1Desc: 'Verbessern Sie Ihre Aussprache mit KI-gestützter Sprechübung.',
            feature2: 'Gamifiziertes Lernen',
            feature2Desc: 'Bleiben Sie mit unterhaltsamen Spielen und Belohnungen motiviert.',
            feature3: 'Fortschrittsverfolgung',
            feature3Desc: 'Verfolgen Sie Ihren Lernfortschritt mit detaillierten Statistiken.',
            howTitle: 'Wie funktioniert es?',
            step1: 'Registrieren',
            step1Desc: 'Schnell und kostenlos registrieren.',
            step2: 'Niveau bestimmen',
            step2Desc: 'Bestimmen Sie Ihren Startpunkt mit einem Einstufungstest.',
            step3: 'Lernen beginnen',
            step3Desc: 'Beginnen Sie mit personalisierten Lektionen.',
            aboutTitle: 'Über uns',
            aboutP1: 'DeutschApp ist eine innovative Sprachlernplattform, die speziell für Deutschlernende entwickelt wurde. Unser Team wurde 2024 gegründet und arbeitet daran, den Lernprozess effektiver und unterhaltsamer zu gestalten.',
            aboutP2: 'Dank unserer Experten und KI-Technologien bieten wir jedem Schüler ein personalisiertes Lernerlebnis. Unser Ziel ist es, allen, die Deutsch lernen möchten, zu helfen, ihre Ziele zu erreichen.',
            stat1: 'Aktive Lernende',
            stat2: 'Experten',
            stat3: 'Erfolgsquote',
            contactTitle: 'Kontakt',
            name: 'Ihr Name',
            email: 'Ihre E-Mail-Adresse',
            message: 'Ihre Nachricht',
            send: 'Senden',
            footerDesc: 'Die beste Lösung zum Deutschlernen.',
            footerLinks: 'Links',
            copyright: 'Alle Rechte vorbehalten.'
        },
        en: {
            features: 'Features',
            how: 'How It Works?',
            about: 'About Us',
            contact: 'Contact',
            heroTitle: 'Learning German is Now Super Easy!',
            heroDesc: 'Discover the most effective way to learn German with DeutschApp. Take your language learning experience to the next level with interactive lessons, practical exercises, and real-time feedback.',
            heroBtn: 'Start Now',
            featuresTitle: 'Key Features',
            feature1: 'Speaking Practice',
            feature1Desc: 'Improve your pronunciation with AI-powered speaking practice.',
            feature2: 'Gamified Learning',
            feature2Desc: 'Stay motivated with fun games and rewards.',
            feature3: 'Progress Tracking',
            feature3Desc: 'Track your learning process with detailed statistics.',
            howTitle: 'How It Works?',
            step1: 'Sign Up',
            step1Desc: 'Register quickly and for free.',
            step2: 'Set Your Level',
            step2Desc: 'Determine your starting point with a level test.',
            step3: 'Start Learning',
            step3Desc: 'Start learning with personalized lessons.',
            aboutTitle: 'About Us',
            aboutP1: 'DeutschApp is an innovative language learning platform designed especially for those who want to learn German. Founded in 2024, our team works to make the learning process more effective and fun.',
            aboutP2: 'With our expert instructors and AI technologies, we offer a personalized learning experience tailored to each student. Our goal is to help everyone who wants to learn German achieve their goals.',
            stat1: 'Active Students',
            stat2: 'Expert Instructors',
            stat3: 'Success Rate',
            contactTitle: 'Contact',
            name: 'Your Name',
            email: 'Your Email Address',
            message: 'Your Message',
            send: 'Send',
            footerDesc: 'The best solution for learning German.',
            footerLinks: 'Links',
            copyright: 'All rights reserved.'
        }
    };

    // Dil değiştirme işlevi
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            languageButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const selectedLang = this.dataset.lang;
            localStorage.setItem('deutschapp-lang', selectedLang);
            changeLanguage(selectedLang);
        });
    });

    function changeLanguage(lang) {
        const t = translations[lang];
        // Menü
        document.querySelectorAll('.nav-links a')[0].textContent = t.features;
        document.querySelectorAll('.nav-links a')[1].textContent = t.how;
        document.querySelectorAll('.nav-links a')[2].textContent = t.about;
        document.querySelectorAll('.nav-links a')[3].textContent = t.contact;
        // Hero
        document.querySelector('.hero h1').textContent = t.heroTitle;
        document.querySelector('.hero p').textContent = t.heroDesc;
        document.querySelector('.cta-button').textContent = t.heroBtn;
        // Özellikler
        document.querySelector('.features h2').textContent = t.featuresTitle;
        document.querySelectorAll('.feature-card h3')[0].textContent = t.feature1;
        document.querySelectorAll('.feature-card p')[0].textContent = t.feature1Desc;
        document.querySelectorAll('.feature-card h3')[1].textContent = t.feature2;
        document.querySelectorAll('.feature-card p')[1].textContent = t.feature2Desc;
        document.querySelectorAll('.feature-card h3')[2].textContent = t.feature3;
        document.querySelectorAll('.feature-card p')[2].textContent = t.feature3Desc;
        // Nasıl Çalışır
        document.querySelector('.how-it-works h2').textContent = t.howTitle;
        document.querySelectorAll('.step h3')[0].textContent = t.step1;
        document.querySelectorAll('.step p')[0].textContent = t.step1Desc;
        document.querySelectorAll('.step h3')[1].textContent = t.step2;
        document.querySelectorAll('.step p')[1].textContent = t.step2Desc;
        document.querySelectorAll('.step h3')[2].textContent = t.step3;
        document.querySelectorAll('.step p')[2].textContent = t.step3Desc;
        // Hakkımızda
        document.querySelector('.about h2').textContent = t.aboutTitle;
        document.querySelectorAll('.about-text p')[0].textContent = t.aboutP1;
        document.querySelectorAll('.about-text p')[1].textContent = t.aboutP2;
        document.querySelectorAll('.stat-item p')[0].textContent = t.stat1;
        document.querySelectorAll('.stat-item p')[1].textContent = t.stat2;
        document.querySelectorAll('.stat-item p')[2].textContent = t.stat3;
        // İletişim
        document.querySelector('.contact h2').textContent = t.contactTitle;
        document.querySelector('input[placeholder="Adınız"], input[placeholder="Ihr Name"], input[placeholder="Your Name"]').placeholder = t.name;
        document.querySelector('input[placeholder^="E-posta"], input[placeholder^="Ihre"], input[placeholder^="Your"]').placeholder = t.email;
        document.querySelector('textarea').placeholder = t.message;
        document.querySelector('.contact button').textContent = t.send;
        // Footer
        document.querySelector('.footer-section h3').textContent = 'DeutschApp';
        document.querySelector('.footer-section p').textContent = t.footerDesc;
        document.querySelectorAll('.footer-section h3')[1].textContent = t.footerLinks;
        document.querySelector('.footer-bottom p').innerHTML = `&copy; 2024 DeutschApp. ${t.copyright}`;
        // Footer links
        document.querySelectorAll('.footer-section a')[0].textContent = t.features;
        document.querySelectorAll('.footer-section a')[1].textContent = t.how;
        document.querySelectorAll('.footer-section a')[2].textContent = t.about;
        // HTML lang
        document.documentElement.lang = lang;
    }

    // Sayfa yüklenince localStorage'dan dili al, yoksa varsayılan olarak 'de' (Almanca) kullan
    const savedLang = localStorage.getItem('deutschapp-lang') || 'de';
    changeLanguage(savedLang);
    languageButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === savedLang);
    });

    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navLinks.classList.remove('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Add animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
        }
    });
}); 