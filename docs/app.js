// AWS Research Gallery App
let currentProjects = [...projects];
let filters = {
    domain: 'all',
    year: 'all',
    program: 'all',
    search: ''
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderProjects(currentProjects);
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
            if (filters.year === '2021-2022') {
                if (!project.year.includes('2021') && !project.year.includes('2022')) {
                    return false;
                }
            } else {
                if (!project.year.includes(filters.year)) {
                    return false;
                }
            }
        }

        // Program filter
        if (filters.program !== 'all') {
            if (!project.programs.some(p => p.includes(filters.program))) {
                return false;
            }
        }

        return true;
    });

    renderProjects(currentProjects);
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
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${index * 0.05}s`;

    // Determine primary domain for tag coloring
    const primaryDomain = project.domains[0] || 'default';
    const domainClass = primaryDomain.toLowerCase().replace(/\//g, '-').replace(/\s/g, '-');

    card.innerHTML = `
        <div class="card-header">
            <div class="institution">${project.institution}</div>
            <div class="year-badge">${project.year}</div>
        </div>
        <div class="project-title">${project.project}</div>
        <div class="tags">
            ${project.domains.map(domain => {
                const className = getDomainClass(domain);
                return `<span class="tag ${className}">${domain}</span>`;
            }).join('')}
        </div>
        <div class="achievement">${project.achievement}</div>
    `;

    // Click to open URL
    card.addEventListener('click', () => {
        window.open(project.url, '_blank');
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

// Shuffle projects
function shuffleProjects() {
    currentProjects = [...currentProjects].sort(() => Math.random() - 0.5);
    renderProjects(currentProjects);
}

// Reset all filters
function resetFilters() {
    filters = {
        domain: 'all',
        year: 'all',
        program: 'all',
        search: ''
    };

    document.getElementById('search').value = '';
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.value === 'all') {
            btn.classList.add('active');
        }
    });

    currentProjects = [...projects];
    renderProjects(currentProjects);
}
