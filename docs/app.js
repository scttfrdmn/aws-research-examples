// AWS Research Gallery App
let currentProjects = [...projects];
let filters = {
    domain: 'all',
    year: 'all',
    program: 'all',
    country: 'all',
    search: ''
};
let currentSort = 'default';

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadFiltersFromURL();
    applyFilters();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search
    document.getElementById('search').addEventListener('input', (e) => {
        filters.search = e.target.value.toLowerCase();
        applyFilters();
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filterType = e.target.dataset.filter;
            const filterValue = e.target.dataset.value;

            // Update active state
            document.querySelectorAll(`[data-filter="${filterType}"]`).forEach(b => {
                b.classList.remove('active');
            });
            e.target.classList.add('active');

            // Update filter
            filters[filterType] = filterValue;
            applyFilters();
        });
    });

    // Sort buttons
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const sortValue = e.target.dataset.sort;

            // Update active state
            document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            // Update sort and re-render
            currentSort = sortValue;
            sortProjects();
            renderProjects(currentProjects);
            updateURL();
        });
    });

    // Action buttons
    document.getElementById('shuffle').addEventListener('click', shuffleProjects);
    document.getElementById('reset').addEventListener('click', resetFilters);
}

// Apply all filters
function applyFilters() {
    currentProjects = projects.filter(project => {
        // Search filter
        if (filters.search) {
            const searchMatch =
                project.institution.toLowerCase().includes(filters.search) ||
                project.project.toLowerCase().includes(filters.search) ||
                project.country.toLowerCase().includes(filters.search) ||
                project.achievement.toLowerCase().includes(filters.search) ||
                project.domains.some(d => d.toLowerCase().includes(filters.search));

            if (!searchMatch) return false;
        }

        // Domain filter
        if (filters.domain !== 'all') {
            if (!project.domains.some(d => d.includes(filters.domain))) {
                return false;
            }
        }

        // Year filter
        if (filters.year !== 'all') {
            if (!project.year.includes(filters.year)) {
                return false;
            }
        }

        // Program filter
        if (filters.program !== 'all') {
            if (!project.programs.some(p => p.includes(filters.program))) {
                return false;
            }
        }

        // Country filter
        if (filters.country !== 'all') {
            if (filters.country === 'Other') {
                // Show countries not in the main list
                if (['United States', 'UK', 'Australia', 'Germany', 'Canada'].includes(project.country)) {
                    return false;
                }
            } else {
                if (project.country !== filters.country) {
                    return false;
                }
            }
        }

        return true;
    });

    sortProjects();
    renderProjects(currentProjects);
    updateURL();
}

// Render projects to the grid
function renderProjects(projectsToRender) {
    const grid = document.getElementById('grid');
    const countElement = document.getElementById('count');

    grid.innerHTML = '';
    countElement.textContent = projectsToRender.length;

    projectsToRender.forEach((project, index) => {
        const card = createCard(project, index);
        grid.appendChild(card);
    });
}

// Create a card element
function createCard(project, index) {
    const card = document.createElement('article');
    card.className = 'card';
    card.style.animationDelay = `${index * 0.05}s`;
    card.setAttribute('itemscope', '');
    card.setAttribute('itemtype', 'https://schema.org/ResearchProject');

    // Determine primary domain for tag coloring
    const primaryDomain = project.domains[0] || 'default';
    const domainClass = primaryDomain.toLowerCase().replace(/\//g, '-').replace(/\s/g, '-');

    card.innerHTML = `
        <div class="card-header">
            <div class="institution" itemprop="sourceOrganization">${project.institution}</div>
            <div class="year-badge"><time itemprop="datePublished">${project.year}</time></div>
        </div>
        <h3 class="project-title" itemprop="name">${project.project}</h3>
        <div class="tags" itemprop="keywords">
            ${project.domains.map(domain => {
                const className = getDomainClass(domain);
                return `<span class="tag ${className}">${domain}</span>`;
            }).join('')}
        </div>
        <p class="achievement" itemprop="description">${project.achievement}</p>
        <meta itemprop="url" content="${project.url}">
        <meta itemprop="spatialCoverage" content="${project.country}">
    `;

    // Click to open URL
    card.addEventListener('click', () => {
        window.open(project.url, '_blank', 'noopener,noreferrer');
    });

    // Keyboard accessibility
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'link');
    card.setAttribute('aria-label', `${project.project} at ${project.institution}`);
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.open(project.url, '_blank', 'noopener,noreferrer');
        }
    });

    return card;
}

// Get CSS class for domain
function getDomainClass(domain) {
    const domainMap = {
        'AI/ML': 'tag-ai',
        'Genomics': 'tag-genomics',
        'Medical': 'tag-medical',
        'Climate': 'tag-climate',
        'Physics': 'tag-physics',
        'Astronomy': 'tag-physics',
        'Education': 'tag-education',
        'Robotics': 'tag-ai',
        'NLP': 'tag-ai',
        'Virology': 'tag-genomics',
        'Bioinformatics': 'tag-genomics',
        'Conservation': 'tag-genomics',
        'Cultural Heritage': 'tag-education'
    };

    return domainMap[domain] || 'tag-default';
}

// Sort projects
function sortProjects() {
    switch (currentSort) {
        case 'newest':
            currentProjects.sort((a, b) => {
                // Extract the latest year from year string
                const yearA = Math.max(...a.year.match(/\d{4}/g).map(Number));
                const yearB = Math.max(...b.year.match(/\d{4}/g).map(Number));
                return yearB - yearA;
            });
            break;
        case 'oldest':
            currentProjects.sort((a, b) => {
                // Extract the earliest year from year string
                const yearA = Math.min(...a.year.match(/\d{4}/g).map(Number));
                const yearB = Math.min(...b.year.match(/\d{4}/g).map(Number));
                return yearA - yearB;
            });
            break;
        case 'alphabetical':
            currentProjects.sort((a, b) => a.institution.localeCompare(b.institution));
            break;
        case 'default':
            // Sort by ID to maintain original order
            currentProjects.sort((a, b) => {
                const idA = typeof a.id === 'string' ? parseInt(a.id.match(/\d+/)[0]) : a.id;
                const idB = typeof b.id === 'string' ? parseInt(b.id.match(/\d+/)[0]) : b.id;
                return idA - idB;
            });
            break;
    }
}

// Shuffle projects
function shuffleProjects() {
    currentProjects = [...currentProjects].sort(() => Math.random() - 0.5);
    currentSort = 'default';
    document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.sort-btn[data-sort="default"]').classList.add('active');
    renderProjects(currentProjects);
}

// Reset all filters
function resetFilters() {
    filters = {
        domain: 'all',
        year: 'all',
        program: 'all',
        country: 'all',
        search: ''
    };
    currentSort = 'default';

    document.getElementById('search').value = '';
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.value === 'all') {
            btn.classList.add('active');
        }
    });
    document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.sort-btn[data-sort="default"]').classList.add('active');

    currentProjects = [...projects];
    renderProjects(currentProjects);
    updateURL();
}

// Load filters from URL parameters
function loadFiltersFromURL() {
    const params = new URLSearchParams(window.location.search);

    if (params.has('domain')) filters.domain = params.get('domain');
    if (params.has('year')) filters.year = params.get('year');
    if (params.has('program')) filters.program = params.get('program');
    if (params.has('country')) filters.country = params.get('country');
    if (params.has('search')) {
        filters.search = params.get('search');
        document.getElementById('search').value = filters.search;
    }
    if (params.has('sort')) currentSort = params.get('sort');

    // Update UI to reflect loaded filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const filterType = btn.dataset.filter;
        const filterValue = btn.dataset.value;
        if (filters[filterType] === filterValue) {
            btn.classList.add('active');
        } else if (filterValue !== 'all') {
            btn.classList.remove('active');
        }
    });

    // Update sort UI
    document.querySelectorAll('.sort-btn').forEach(btn => {
        if (btn.dataset.sort === currentSort) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Update URL with current filters (for shareability)
function updateURL() {
    const params = new URLSearchParams();

    if (filters.domain !== 'all') params.set('domain', filters.domain);
    if (filters.year !== 'all') params.set('year', filters.year);
    if (filters.program !== 'all') params.set('program', filters.program);
    if (filters.country !== 'all') params.set('country', filters.country);
    if (filters.search) params.set('search', filters.search);
    if (currentSort !== 'default') params.set('sort', currentSort);

    const newURL = params.toString() ? `${window.location.pathname}?${params.toString()}` : window.location.pathname;
    window.history.replaceState({}, '', newURL);
}
