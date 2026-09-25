# Personal Portfolio Website

**This README is available in English and German.**  
**Diese README ist auf Englisch und Deutsch verfügbar.**

- [English](#english)
- [Deutsch](#deutsch)

---

# English

## Overview

This repository contains my personal portfolio website, created to present my professional background, technical skills, and web development projects.

The website is built as a responsive single-page portfolio using HTML5, CSS3, Bootstrap, and JavaScript. It also includes a custom German and English language switcher implemented with JavaScript.

🌐 **Live Website:**  
https://hellaszabo94-prog.github.io/portfolio_website/

---

## Features

- Responsive design for desktop, tablet, and mobile devices
- Mobile-friendly navigation
- German and English language support
- Custom JavaScript language switcher
- Language preference saved with `localStorage`
- Personal introduction and professional profile
- Visual presentation of technical skills
- Project showcase with screenshots and descriptions
- Links to live demos and GitHub repositories
- Contact section
- Single-page navigation

---

## Language Switching

The website supports both German and English.

Each translatable HTML element uses a custom `data-i18n` attribute:

```html
<h2 data-i18n="about.title">Über mich</h2>
```

The translations are stored in a JavaScript object:

```javascript
const translations = {
    de: {
        "about.title": "Über mich"
    },

    en: {
        "about.title": "About me"
    }
};
```

JavaScript reads the `data-i18n` key of each translatable element, selects the corresponding text from the translation object, and updates the content dynamically.

The selected language is also stored in the browser using `localStorage`, so the website remembers the visitor's language preference after the page is reloaded.

---

## Technologies

### Frontend

- HTML5
- CSS3
- JavaScript
- Bootstrap

### Design & UI

- Responsive Web Design
- UI/UX principles
- Google Fonts
- Devicon
- Bootstrap Icons

### Development & Deployment

- Git
- GitHub
- GitHub Pages

---

## Main Sections

The portfolio contains the following main sections:

- Home
- About Me
- Skills
- Projects
- Contact

---

## Purpose

This project was created both as my personal portfolio and as a practical web development project.

The main goal is to present my technical skills, professional background, and previous projects while also improving my knowledge of responsive web design, DOM manipulation, JavaScript event handling, multilingual content management, and browser storage.

I continue to improve the website as I learn new technologies and complete new development projects.

---

## Author

**Hella Haraszti-Szabo**  
Full Stack Developer

GitHub:  
https://github.com/hellaszabo94-prog

---

# Deutsch

## Überblick

Dieses Repository enthält meine persönliche Portfolio-Webseite, die ich erstellt habe, um meinen beruflichen Hintergrund, meine technischen Kenntnisse und meine bisherigen Entwicklungsprojekte zu präsentieren.

Die Webseite wurde als responsive Single-Page-Portfolio mit HTML5, CSS3, Bootstrap und JavaScript entwickelt. Zusätzlich verfügt sie über eine selbst entwickelte Sprachumschaltung zwischen Deutsch und Englisch.

🌐 **Live-Webseite:**  
https://hellaszabo94-prog.github.io/portfolio_website/

---

## Funktionen

- Responsive Darstellung auf Desktop, Tablet und Smartphone
- Für mobile Geräte optimierte Navigation
- Deutsche und englische Sprachversion
- Eigene JavaScript-Sprachumschaltung
- Speicherung der ausgewählten Sprache mit `localStorage`
- Persönliche Vorstellung und berufliches Profil
- Visuelle Darstellung der technischen Kenntnisse
- Präsentation eigener Projekte mit Bildern und Beschreibungen
- Links zu Live-Demos und GitHub-Repositories
- Kontaktbereich
- Navigation innerhalb einer Single-Page-Webseite

---

## Sprachumschaltung

Die Webseite unterstützt Deutsch und Englisch.

Alle übersetzbaren HTML-Elemente verwenden ein eigenes `data-i18n`-Attribut:

```html
<h2 data-i18n="about.title">Über mich</h2>
```

Die Übersetzungen werden in einem JavaScript-Objekt gespeichert:

```javascript
const translations = {
    de: {
        "about.title": "Über mich"
    },

    en: {
        "about.title": "About me"
    }
};
```

JavaScript liest den jeweiligen `data-i18n`-Schlüssel aus, sucht den passenden Text im Übersetzungsobjekt und aktualisiert den Inhalt der HTML-Elemente dynamisch.

Die ausgewählte Sprache wird außerdem mit `localStorage` im Browser gespeichert. Dadurch bleibt die gewählte Sprache auch nach dem Neuladen der Webseite erhalten.

---

## Technologien

### Frontend

- HTML5
- CSS3
- JavaScript
- Bootstrap

### Design & UI

- Responsive Web Design
- UI/UX-Prinzipien
- Google Fonts
- Devicon
- Bootstrap Icons

### Entwicklung & Deployment

- Git
- GitHub
- GitHub Pages

---

## Hauptbereiche

Die Portfolio-Webseite besteht aus folgenden Bereichen:

- Home
- Über mich
- Kenntnisse
- Projekte
- Kontakt

---

## Ziel des Projekts

Dieses Projekt wurde sowohl als persönliche Portfolio-Webseite als auch als praktisches Webentwicklungsprojekt erstellt.

Das Hauptziel ist es, meine technischen Kenntnisse, meinen beruflichen Hintergrund und meine bisherigen Projekte zu präsentieren und gleichzeitig meine Kenntnisse in Responsive Web Design, DOM-Manipulation, JavaScript-Event-Handling, mehrsprachigen Inhalten und Browser-Speicherung weiterzuentwickeln.

Die Webseite wird kontinuierlich erweitert und aktualisiert, während ich neue Technologien lerne und weitere Entwicklungsprojekte umsetze.

---

## Autorin

**Hella Haraszti-Szabo**  
Full Stack Developer

GitHub:  
https://github.com/hellaszabo94-prog
