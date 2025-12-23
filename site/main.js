import { content } from './content.js';

const icons = {
    mail: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
    `,
    github: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
    `,
    linkedin: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    `,
    location: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
    `,
    arrow: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
    `,
    document: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
    `,
    play: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>
    `,
    audio: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
        </svg>
    `,
    external: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
    `,
    phone: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
    `,
};

const createIcon = (name) => {
    const svg = icons[name];
    if (!svg) return null;
    const wrapper = document.createElement('span');
    wrapper.innerHTML = svg.trim();
    return wrapper.firstElementChild;
};

const setMeta = (meta) => {
    if (!meta) return;
    document.title = meta.title;
    const setTag = (selector, attr, value) => {
        const el = document.querySelector(selector);
        if (el && value) {
            el.setAttribute(attr, value);
        }
    };

    setTag('meta[name="description"]', 'content', meta.description);
    setTag('meta[name="keywords"]', 'content', meta.keywords);
    setTag('meta[name="author"]', 'content', meta.author);
    setTag('meta[property="og:title"]', 'content', meta.ogTitle);
    setTag('meta[property="og:description"]', 'content', meta.ogDescription);
    setTag('meta[property="og:url"]', 'content', meta.ogUrl);
};

const createAnchor = (link, className) => {
    const a = document.createElement('a');
    a.className = className || '';
    a.href = link.href;
    if (link.newTab) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
    }

    const iconEl = link.icon ? createIcon(link.icon) : null;
    if (link.icon && link.iconPosition === 'after') {
        a.append(document.createTextNode(link.label));
        if (iconEl) a.append(iconEl);
    } else {
        if (iconEl) a.append(iconEl);
        a.append(document.createTextNode(link.label));
    }
    return a;
};

const renderNav = () => {
    const logo = document.getElementById('nav-logo');
    const navLinks = document.getElementById('nav-links');
    if (!logo || !navLinks) return;

    logo.textContent = content.nav.name;
    navLinks.innerHTML = '';
    content.nav.links.forEach((item) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.label;
        li.append(a);
        navLinks.append(li);
    });
};

const renderHero = () => {
    const heading = document.getElementById('hero-heading');
    const bio = document.getElementById('hero-bio');
    const location = document.getElementById('hero-location');
    const links = document.getElementById('hero-links');
    if (!heading || !bio || !location || !links) return;

    heading.textContent = content.hero.heading;
    bio.innerHTML = content.hero.bio;
    location.innerHTML = '';
    const locIcon = createIcon('location');
    if (locIcon) location.append(locIcon);
    location.append(document.createTextNode(content.hero.location));

    links.innerHTML = '';
    content.hero.links.forEach((link) => {
        const anchor = createAnchor(link, 'hero-link');
        links.append(anchor);
    });
};

const renderExperience = () => {
    const container = document.getElementById('experience-list');
    if (!container) return;
    container.innerHTML = '';

    content.experience.forEach((item) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'experience-item';

        const header = document.createElement('div');
        header.className = 'experience-header';
        const title = document.createElement('h3');
        title.textContent = item.title;
        const date = document.createElement('span');
        date.className = 'experience-date';
        date.textContent = item.date;
        header.append(title, date);

        const company = document.createElement('div');
        company.className = 'experience-company';
        company.textContent = item.company;

        const description = document.createElement('p');
        description.className = 'experience-description';
        description.textContent = item.description;

        wrapper.append(header, company, description);
        container.append(wrapper);
    });
};

const renderEducation = () => {
    const container = document.getElementById('education-card');
    if (!container) return;
    const { education } = content;
    container.innerHTML = '';

    const degree = document.createElement('h3');
    degree.textContent = education.degree;
    const school = document.createElement('div');
    school.className = 'school';
    school.textContent = education.school;
    const detail = document.createElement('p');
    detail.textContent = education.detail;

    container.append(degree, school, detail);
};

const renderProjects = () => {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    grid.innerHTML = '';

    content.projects.forEach((project) => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const header = document.createElement('div');
        header.className = 'project-card-header';

        const title = document.createElement('h3');
        title.textContent = project.title;

        const linksWrapper = document.createElement('div');
        linksWrapper.className = 'project-links';
        const links = project.links?.length
            ? project.links
            : project.link
              ? [{ href: project.link, label: 'View Project', icon: 'external', newTab: true }]
              : [];
        links.forEach((link) => {
            const anchor = createAnchor({ ...link, iconPosition: link.iconPosition ?? 'before' }, 'project-card-link');
            linksWrapper.append(anchor);
        });

        header.append(title);
        if (linksWrapper.childElementCount) header.append(linksWrapper);

        const description = document.createElement('p');
        description.textContent = project.description;

        let detailsList;
        if (project.details?.length) {
            detailsList = document.createElement('ul');
            detailsList.className = 'project-details';
            project.details.forEach((detail) => {
                const li = document.createElement('li');
                li.textContent = detail;
                detailsList.append(li);
            });
        }

        const techList = document.createElement('div');
        techList.className = 'project-tech';
        project.tech.forEach((item) => {
            const chip = document.createElement('span');
            chip.textContent = item;
            techList.append(chip);
        });

        card.append(header, description);
        if (detailsList) card.append(detailsList);
        card.append(techList);
        grid.append(card);
    });
};

const renderResearch = () => {
    const container = document.getElementById('research-cards');
    if (!container) return;
    container.innerHTML = '';

    content.research.cards.forEach((cardData) => {
        const card = document.createElement('div');
        card.className = 'research-card';

        const title = document.createElement('h3');
        title.textContent = cardData.title;

        const meta = document.createElement('div');
        meta.className = 'research-meta';
        meta.textContent = cardData.meta;

        const description = document.createElement('p');
        description.textContent = cardData.description;

        const links = document.createElement('div');
        links.className = 'research-links';
        cardData.links.forEach((link) => {
            const anchor = createAnchor(link, 'research-link');
            links.append(anchor);
        });

        card.append(title, meta, description, links);
        container.append(card);
    });
};

const renderCreative = () => {
    const grid = document.getElementById('creative-grid');
    if (!grid) return;
    grid.innerHTML = '';

    content.research.creative.forEach((item) => {
        const anchor = document.createElement('a');
        anchor.className = 'creative-item';
        anchor.href = item.href;
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';

        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = item.tag;
        const title = document.createElement('h4');
        title.textContent = item.title;
        const desc = document.createElement('p');
        desc.textContent = item.description;

        anchor.append(tag, title, desc);
        grid.append(anchor);
    });
};

const renderContact = () => {
    const heading = document.getElementById('contact-heading');
    const description = document.getElementById('contact-description');
    const links = document.getElementById('contact-links');
    if (!heading || !description || !links) return;

    heading.textContent = content.contact.heading;
    description.textContent = content.contact.description;
    links.innerHTML = '';

    content.contact.links.forEach((link) => {
        const anchor = createAnchor(link, 'contact-link');
        links.append(anchor);
    });
};

const renderFooter = () => {
    const note = document.getElementById('footer-note');
    if (note) {
        note.textContent = content.footer.note;
    }
};

const setupNavScrollEffect = () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    const toggle = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    toggle();
    window.addEventListener('scroll', toggle);
};

const setupSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const selector = anchor.getAttribute('href');
            if (!selector || selector === '#') return;
            const target = document.querySelector(selector);
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
};

const renderPage = () => {
    setMeta(content.meta);
    renderNav();
    renderHero();
    renderExperience();
    renderEducation();
    renderProjects();
    renderResearch();
    renderCreative();
    renderContact();
    renderFooter();
    setupNavScrollEffect();
    setupSmoothScroll();
};

renderPage();
