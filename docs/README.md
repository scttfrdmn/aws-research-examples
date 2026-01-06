# AWS Academic Research Gallery

**Live Site:** https://scttfrdmn.github.io/aws-research-examples/

An interactive gallery showcasing 172 verified AWS-powered academic research projects from 2021-2025, spanning 18 countries.

## Features

- 🔍 **Full-text search** across institutions, projects, and keywords
- 🏷️ **Multi-dimensional filtering** by domain, year, and program
- 🎨 **Clean card-based interface** inspired by helloworlds.io
- 📱 **Fully responsive** design
- ⚡ **Fast, static site** - no backend required

## Filters

- **Domains:** AI/ML, Genomics, Medical, Climate, Physics, Education
- **Years:** 2025, 2024, 2023, 2021-2022
- **Programs:** Trainium, Science Hub, GenAI, Open Data, RONIN

## Technology Stack

- Pure HTML, CSS, and vanilla JavaScript
- No frameworks or build process
- Hosted on GitHub Pages
- Data extracted from comprehensive research compiled in main README

## Data Coverage

- **172 total projects** across 18 countries
- **Temporal:** 2025 (10), 2024 (83), 2023 (50), 2021-22 (29)
- **Top domains:** AI/ML (90), Medical (39), Education (37), Genomics (27), Climate (19)
- **Major programs:** Build on Trainium, Science Hubs, GenAI Innovation Center, RONIN, Open Data

## Current Status

**✅ Complete:** All 172 research projects from the main README.md are now populated in the gallery!

## Local Development

```bash
# Serve locally
cd docs
python -m http.server 8000
# Open http://localhost:8000
```

## Contributing

We welcome contributions! You can suggest additions, edits, or removals in two ways:

1. **Via the Gallery:** Click the "➕ Suggest Addition/Edit" button in the gallery interface
2. **Direct PR:** Create a pull request on GitHub

Each project entry includes:
- Institution, country
- Project title
- Year(s)
- Domains (array)
- Programs (array)
- Services used
- Key achievement
- Source URL

Our PR template will guide you through the submission process.

## Design Credits

Card interface design inspired by [helloworlds.io](https://helloworlds.io) - a beautiful gallery of programming languages.
