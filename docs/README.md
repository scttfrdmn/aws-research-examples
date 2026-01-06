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
- **Top domains:** AI/ML (59), Genomics (25), Medical (22), Climate (21)
- **Major programs:** Build on Trainium, Science Hubs, GenAI Innovation Center, RONIN

## Current Status

**Sample Dataset:** Currently showing 20 representative examples
**Next Step:** Full data population with all 172 projects from main README.md

## Local Development

```bash
# Serve locally
cd docs
python -m http.server 8000
# Open http://localhost:8000
```

## Contributing

The full dataset should be extracted and added to `data.js`. Each project entry should include:
- institution, country
- project title
- year(s)
- domains (array)
- programs (array)
- services used
- key achievement
- source URL

## Design Credits

Card interface design inspired by [helloworlds.io](https://helloworlds.io) - a beautiful gallery of programming languages.
