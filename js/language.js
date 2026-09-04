const translations = {
       de: {
            "nav.home": "Home",
            "nav.about": "Über mich",
            "nav.skills": "Kenntnisse",
            "nav.projects": "Projekte",
            "nav.contact": "Kontakt",

            "about.title": "Über mich",
            "about.text":"Ich hatte schon immer eine Schwäche für logische Systeme, kreatives Arbeiten und dafür, Dinge Schritt für Schritt aufzubauen. Mein beruflicher Weg führte mich zunächst in das Rechnungswesen und SAP-Datenmanagement, doch in der Softwareentwicklung habe ich den Bereich gefunden, in dem ich analytisches Denken und Kreativität miteinander verbinden kann.Als Full Stack Developerin entwickle ich gerne Webanwendungen von der Idee bis zur funktionierenden Umsetzung. Im Frontend arbeite ich mit HTML, CSS, JavaScript, Bootstrap und Tailwind CSS, im Backend mit PHP, SQL und MySQL. Besonders wichtig sind mir responsive, übersichtliche und benutzerfreundliche Lösungen. Meine genaue und strukturierte Arbeitsweise hilft mir dabei, Probleme systematisch zu lösen und neue Technologien schnell zu lernen. Ich wohne in Linz und möchte meine technischen Kenntnisse, meine Lernbereitschaft und meine lösungsorientierte Arbeitsweise gerne in ein Entwicklungsteam einbringen.",

            "skills.title": "Kenntnisse",

            "projects.title": "Projekte",

            "buttons.liveDemo": "Live-Demo ansehen",
            "buttons.github": "Code auf GitHub",

            "projects.bucketList": "Eine responsive Full-Stack-Webanwendung zur Verwaltung persönlicher Reiseziele, entwickelt mit PHP, MySQL, JavaScript und Tailwind CSS. Die Anwendung bietet Benutzerregistrierung und Login, benutzerspezifische Reiseziele, Statusverwaltung, Suchfunktion sowie das Hochladen, Ersetzen und Löschen von Bildern.",

            "projects.memoryTitle": "Memory-Spiel",
            "projects.memoryGame": "Ein browserbasiertes Memory-Spiel, das mit HTML, CSS und Vanilla JavaScript entwickelt wurde. Ziel des Spiels ist es, alle zusammengehörenden Kartenpaare zu finden, während das Programm das zufällige Mischen der Karten, die Überprüfung der Paare sowie das Spielende verwaltet. Bei der Entwicklung dieses Projekts lag der Schwerpunkt auf der DOM-Manipulation, der Ereignisbehandlung und der Verwaltung des Spielzustands mit JavaScript.",

            "projects.seychelles": "Bei diesem Projekt habe ich eine statische, responsive Webseite für ein fiktives Reisebüro erstellt. Die Webseite besteht aus mehreren Unterseiten wie Startseite, Dienstleistungen, Inseln, Reiseplan, Galerie und Kontakt. Besonders geübt habe ich dabei den strukturierten Aufbau mit HTML, die Gestaltung mit CSS, responsive Layouts für verschiedene Bildschirmgrößen sowie einfache JavaScript-Funktionen für die Navigation und die Bildergalerie.",

            "projects.portfolio": "In diesem Projekt habe ich eine moderne und responsive Portfolio-Webseite erstellt, auf der ich meinen beruflichen Hintergrund, meine technischen Kenntnisse und einige meiner bisherigen Projekte präsentieren kann. Für die Umsetzung habe ich HTML5, CSS3, Bootstrap und JavaScript verwendet. Die Webseite bietet außerdem eine Sprachumschaltung zwischen Deutsch und Englisch, sodass Besucher die Sprache einfach wechseln können. Dabei war mir wichtig, dass die Webseite übersichtlich, benutzerfreundlich und auf verschiedenen Geräten gut dargestellt wird.",

            "contact.title": "Kontakt",
            "contact.text": "Habe ich Ihr Interesse geweckt? Ich freue mich auf Ihre Kontaktaufnahme!"
       },

        en: {
            "nav.home": "Home",
            "nav.about": "About me",
            "nav.skills": "Skills",
            "nav.projects": "Projects",
            "nav.contact": "Contact",

            "about.title": "About me",
            "about.text":"I have always had a strong interest in logical systems, creative work, and building things step by step. My professional path first led me into accounting and SAP data management, but in software development I found the field where I can combine analytical thinking with creativity. As a Full Stack Developer, I enjoy developing web applications from the first idea to a working solution. In frontend development, I work with HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS, while in backend development I use PHP, SQL, and MySQL. I especially value responsive, clear, and user-friendly solutions. My precise and structured way of working helps me solve problems systematically and learn new technologies quickly. I live in Linz and would like to bring my technical skills, willingness to learn, and solution-oriented approach into a development team.",

            "skills.title": "Skills",

            "projects.title": "Projects",

            "buttons.liveDemo": "View Live Demo",
            "buttons.github": "View on GitHub",

            "projects.bucketList": "A responsive full-stack web application for managing personal travel destinations, developed with PHP, MySQL, JavaScript, and Tailwind CSS. The application includes user registration and login, user-specific travel destinations, status management, search functionality, and the ability to upload, replace, and delete images.",

            "projects.memoryTitle": "Memory Game",
            "projects.memoryGame": "A browser-based memory game developed with HTML, CSS, and Vanilla JavaScript. The goal of the game is to find all matching pairs of cards, while the application handles random card shuffling, pair checking, and the end of the game. During the development of this project, the main focus was on DOM manipulation, event handling, and managing the game state with JavaScript.",

            "projects.seychelles": "In this project, I created a static and responsive website for a fictional travel agency. The website includes several pages such as Home, Services, Islands, Travel Plan, Gallery, and Contact. During this project, I especially practised building a clear structure with HTML, styling with CSS, creating responsive layouts for different screen sizes, and adding simple JavaScript functions for the navigation and image gallery.",

            "projects.portfolio": "In this project, I created a modern and responsive portfolio website to present my professional background, technical skills, and some of my previous projects. I used HTML5, CSS3, Bootstrap, and JavaScript to build the website. The site also includes a German and English language switcher, allowing visitors to easily change the displayed language. My main goal was to create a clear, user-friendly design that works well on different devices.",

            "contact.title": "Contact",
            "contact.text": "If you would like to get in touch, I would be happy to hear from you!"
        }
};
//function to switch the language
function setLanguage(language) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((htmlElement) => {
        const key = htmlElement.dataset.i18n;
        const selectedLanguage = translations[language];

        if (selectedLanguage) {
            const translation = selectedLanguage[key];

            if (translation !== undefined) {
                htmlElement.textContent = translation;
            }
        }
    });

    document.documentElement.lang = language;
}


