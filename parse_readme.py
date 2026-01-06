#!/usr/bin/env python3
"""
Parse README.md and extract all 172 research examples into JSON format for the gallery.
"""

import re
import json

def parse_readme(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    projects = []

    # Pattern to match project entries - more flexible
    # ### NUMBER. Institution – Project Title (NUMBER can have letter suffix like 102a)
    # Split content into sections by ### markers
    sections = re.split(r'\n### (\d+[a-z]?)\. ', content)

    # Process pairs of (number, content)
    matches = []
    for i in range(1, len(sections), 2):
        if i+1 < len(sections):
            num_str = sections[i]
            section_content = sections[i+1]
            matches.append((num_str, section_content))

    for num_str, section_content in matches:
        # Extract numeric part for ID (convert 102a to just "102a" string for ID)
        num = num_str  # Keep as string to preserve letter suffixes

        # Extract title line (Institution – Project) or just (Institution/Project)
        title_match = re.match(r'(.+?) – (.+?)\n', section_content)
        if title_match:
            institution_country = title_match.group(1).strip()
            project_title = title_match.group(2).strip()
        else:
            # Handle entries with just institution/project name (no "–" separator)
            simple_title_match = re.match(r'(.+?)\n', section_content)
            if not simple_title_match:
                print(f"Skipping project {num} - no title found")
                continue
            # Use the first line as both institution and project title for now
            # We'll extract a better project title from the description
            institution_country = simple_title_match.group(1).strip()
            project_title = simple_title_match.group(1).strip()

        # Extract fields
        project_match = re.search(r'\*\*Project:\*\* (.+?)(?=\n\n\*\*|\n###|$)', section_content, re.DOTALL)
        services_match = re.search(r'\*\*AWS Services:\*\* (.+?)(?=\n\n\*\*|\n###|$)', section_content, re.DOTALL)
        year_match = re.search(r'\*\*Year:\*\* (.+?)(?=\n\n\*\*|\n###|$)', section_content, re.DOTALL)
        achievement_match = re.search(r'\*\*Key Achievement:\*\* (.+?)(?=\n\n\*\*|\n###|$)', section_content, re.DOTALL)
        source_match = re.search(r'\*\*Source:\*\* (.+?)(?=\n\n\*\*|\n###|$)', section_content, re.DOTALL)

        if not all([project_match, services_match, year_match]):
            print(f"Skipping project {num} - missing required fields")
            continue

        description = project_match.group(1).strip()
        services = services_match.group(1).strip()
        year = year_match.group(1).strip()
        achievement = achievement_match.group(1).strip() if achievement_match else description[:150]
        source = source_match.group(1).strip() if source_match else ""

        # Extract country if present (in parentheses at end of either field)
        country = "United States"  # default
        institution = institution_country.strip()

        # Check if country is in institution field
        if '(' in institution and ')' in institution:
            parts = institution.rsplit('(', 1)
            institution = parts[0].strip()
            country = parts[1].rstrip(')').strip()
        # Check if country is in project title
        elif '(' in project_title and ')' in project_title:
            parts = project_title.rsplit('(', 1)
            project_title = parts[0].strip()
            country = parts[1].rstrip(')').strip()

        # Determine domains based on keywords
        domains = []
        combined_text = (institution + " " + project_title + " " + description).lower()

        # Domain classification
        if any(word in combined_text for word in ['genomics', 'genome', 'dna', 'rna', 'sequencing', 'protein', 'bioinformatics', 'phage']):
            domains.append("Genomics")
        if any(word in combined_text for word in ['ai', 'machine learning', 'ml', 'deep learning', 'neural', 'llm', 'gpt', 'claude', 'bedrock', 'artificial intelligence']):
            domains.append("AI/ML")
        if any(word in combined_text for word in ['medical', 'health', 'hospital', 'clinical', 'patient', 'disease', 'cancer', 'alzheimer']):
            domains.append("Medical")
        if any(word in combined_text for word in ['climate', 'weather', 'atmospheric', 'earth', 'environmental', 'meteorology', 'albedo']):
            domains.append("Climate")
        if any(word in combined_text for word in ['physics', 'astronomy', 'astrophysics', 'telescope', 'gravitational', 'particle', 'ligo', 'cern']):
            domains.append("Physics")
        if any(word in combined_text for word in ['education', 'learning', 'student', 'tutor', 'teaching', 'classroom']):
            domains.append("Education")
        if any(word in combined_text for word in ['neuroscience', 'brain', 'neuroimaging']):
            domains.append("Neuroscience")
        if any(word in combined_text for word in ['economics', 'economic', 'financial']):
            domains.append("Economics")
        if any(word in combined_text for word in ['robotics', 'robot']):
            domains.append("Robotics")
        if any(word in combined_text for word in ['chemistry', 'molecular', 'materials']):
            domains.append("Chemistry")
        if any(word in combined_text for word in ['museum', 'cultural', 'heritage', 'archaeology', 'artifact']):
            domains.append("Cultural Heritage")
        if any(word in combined_text for word in ['conservation', 'wildlife', 'biodiversity', 'species']):
            domains.append("Conservation")
        if not domains and any(word in combined_text for word in ['data', 'storage', 'backup', 'infrastructure']):
            domains.append("Data Infrastructure")

        if not domains:
            domains.append("Other")

        # Determine programs
        programs = []
        if 'trainium' in combined_text or 'build on trainium' in combined_text:
            programs.append("Trainium")
        if 'science hub' in combined_text or 'amazon science hub' in combined_text:
            programs.append("Science Hub")
        if 'genai' in combined_text or 'generative ai innovation center' in combined_text:
            programs.append("GenAI")
        if 'open data' in combined_text or 'registry of open data' in combined_text:
            programs.append("Open Data")
        if 'ronin' in combined_text:
            programs.append("RONIN")
        if 'asdi' in combined_text or 'sustainability data initiative' in combined_text:
            programs.append("ASDI")

        # Extract URL from source markdown links
        url_match = re.search(r'\[.+?\]\((.+?)\)', source)
        url = url_match.group(1) if url_match else "#"

        project = {
            "id": num,
            "institution": institution,
            "country": country,
            "project": project_title,
            "year": year,
            "domains": domains,
            "programs": programs,
            "services": [s.strip() for s in services.split(',')[:3]],  # First 3 services
            "achievement": achievement,
            "url": url
        }

        projects.append(project)

    return projects

def main():
    projects = parse_readme('README.md')

    print(f"Parsed {len(projects)} projects")

    # Write to JavaScript file
    with open('docs/data.js', 'w', encoding='utf-8') as f:
        f.write("// AWS Academic Research Projects Data\n")
        f.write(f"// Full dataset: {len(projects)} verified academic research projects\n")
        f.write("// Auto-generated from README.md\n\n")
        f.write("const projects = ")
        f.write(json.dumps(projects, indent=4, ensure_ascii=False))
        f.write(";\n")

    print(f"Wrote {len(projects)} projects to docs/data.js")

    # Print some stats
    domains_count = {}
    for p in projects:
        for d in p['domains']:
            domains_count[d] = domains_count.get(d, 0) + 1

    print("\nDomain distribution:")
    for domain, count in sorted(domains_count.items(), key=lambda x: x[1], reverse=True):
        print(f"  {domain}: {count}")

if __name__ == "__main__":
    main()
