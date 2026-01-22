# AWS Academic Research Gallery

**Live Site:** https://scttfrdmn.github.io/aws-research-examples/

An interactive gallery showcasing 173 verified AWS-powered academic research projects from 2015-2025, spanning 10 countries.

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

- **173 total projects** across 10 countries
- **Temporal:** 2025 (10), 2024 (87), 2023 (39), 2022 (15), 2021 (27), 2015-2020 (varies)
- **Top domains:** AI/ML (93), Medical (46), Education (39), Genomics (29), Climate (24)
- **Major programs:** Build on Trainium, Science Hubs, GenAI Innovation Center, RONIN, Open Data

## Current Status

**✅ Complete:** All 173 research projects from the main README.md are now populated in the gallery!

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
