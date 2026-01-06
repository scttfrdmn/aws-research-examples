# Improved Search Methodology for AWS Academic Research Examples

## Current Approach Analysis

### Strengths
- ✅ Captured diverse research domains
- ✅ Found recent examples (2024-2025 focus)
- ✅ Mixed external and AWS sources
- ✅ Included arXiv/bioRxiv preprints

### Gaps Identified
- ❌ Ad-hoc institutional coverage (found examples opportunistically)
- ❌ Missing grant-funded research citations
- ❌ Limited conference proceeding searches
- ❌ Didn't systematically check research computing centers
- ❌ No coverage of university IT annual reports
- ❌ Missed many top R&D institutions

---

## Proposed Systematic Search Strategies

### Strategy 1: NSF HERD Top Institutions Systematic Search ⭐ **HIGH PRIORITY**

**Why This Works:**
- Top R&D spending institutions ($1-3B+ annually) are most likely AWS users
- These universities have dedicated research computing centers
- They publish regular newsletters, annual reports, and press releases
- Strong correlation between R&D spending and cloud adoption

**Data Source:**
- [NSF HERD Survey Rankings](https://ncsesdata.nsf.gov/profiles/site?method=rankingbysource&ds=herd)
- FY 2024 data available: [NSF 26-304](https://ncses.nsf.gov/surveys/higher-education-research-development/2024)
- 925 institutions surveyed, focus on top 100

**Top 20 Institutions by R&D Spending (FY 2022-2023):**
1. Johns Hopkins University ($3.4B)
2. UC San Francisco ($1.8B)
3. University of Pennsylvania ($1.8B)
4. University of Michigan ($1.8B)
5. University of Washington ($1.7B)
6. Stanford University ($1.6B)
7. Duke University ($1.5B)
8. Columbia University ($1.5B)
9. NYU ($1.5B)
10. UC San Diego ($1.5B)
11. MIT ($1.4B)
12. Harvard University ($1.3B)
13. UC Los Angeles ($1.3B)
14. Yale University ($1.2B)
15. University of Wisconsin-Madison ($1.2B)
16. Cornell University ($1.1B)
17. UC Berkeley ($1.1B)
18. University of Pittsburgh ($1.1B)
19. University of Minnesota ($1.0B)
20. Ohio State University ($1.0B)

**Execution Plan:**

For each top 100 institution, search:

1. **Research Computing Center + AWS**
   ```
   "[University] research computing" AWS
   "[University] high performance computing" AWS
   site:*.edu "[University] AWS" research computing
   ```

2. **Research News + AWS**
   ```
   site:[university].edu AWS research 2024
   site:[university].edu/news AWS cloud research
   "[University] researchers" AWS study 2024
   ```

3. **Research IT Annual Reports**
   ```
   site:[university].edu "research computing annual report" 2024
   site:[university].edu "IT services annual report" AWS
   "[University] research IT strategic plan" cloud
   ```

4. **Specific Researcher Pages**
   ```
   site:[university].edu CV AWS "acknowledgments"
   site:[university].edu publications "AWS" OR "Amazon Web Services"
   ```

**Expected Yield:** 100-200 additional examples from top 100 institutions

---

### Strategy 2: Federal Grant Database Mining ⭐ **HIGH PRIORITY**

**NSF Award Search**
- URL: https://www.nsf.gov/awardsearch/
- Search: "Amazon Web Services" OR "AWS" in abstracts/titles
- Filter: 2023-2025
- Advanced: Search by institution + cloud computing keywords

**Example Queries:**
```
Award Abstract: "AWS" OR "Amazon Web Services"
Start Date: 01/01/2023
Program: Computer and Information Science and Engineering
```

**NIH RePORTER**
- URL: https://reporter.nih.gov/
- Search: "AWS" OR "cloud computing" in project terms
- Filter by fiscal year 2023-2025
- Export results with institution data

**DOE PAGES (Department of Energy)**
- URL: https://www.osti.gov/pages/
- Search publications mentioning AWS
- Focus on national lab collaborations with universities

**Expected Yield:** 50-100 grant-funded projects

---

### Strategy 3: Research Computing Centers & HPC Consortia

**Organizations to Monitor:**

1. **XSEDE/ACCESS Program** (NSF-funded)
   - URL: https://access-ci.org/
   - Search news, publications, training materials

2. **Campus Champions (Cyberinfrastructure)**
   - URL: https://campuschampions.cyberinfrastructure.org/
   - Monthly meetings mention cloud usage

3. **Coalition for Academic Scientific Computation (CASC)**
   - Member institutions publish annual reports

4. **Internet2 Community**
   - Research computing working groups
   - Annual reports from member institutions

5. **EDUCAUSE Research Computing Community**
   - Conference presentations
   - Case studies

**Search Queries:**
```
site:access-ci.org AWS case study
site:campuschampions.cyberinfrastructure.org "Amazon Web Services"
"research computing" consortium AWS 2024
```

**Expected Yield:** 30-50 examples

---

### Strategy 4: Conference Proceedings Systematic Search

**Target Conferences:**

1. **SC (Supercomputing) Conference**
   - URL: https://sc24.supercomputing.org/
   - Search proceedings, posters, workshops
   - AWS booth presentations/papers

2. **PEARC (Practice and Experience in Advanced Research Computing)**
   - Annual proceedings published
   - University case studies common

3. **IEEE eScience Conference**
   - Cloud computing track

4. **ACM REP (Reproducibility)**
   - Many use cloud platforms

5. **RECOMB (Computational Biology)**
   - Genomics papers often mention AWS

**Search Approach:**
```
site:sc24.supercomputing.org AWS
"PEARC 2024" proceedings AWS university
"IEEE eScience" AWS academic
ACM digital library "AWS" university research 2024
```

**Expected Yield:** 40-60 papers

---

### Strategy 5: Preprint Server Deep Dive

**Expanded arXiv Search:**

Current coverage: Computer Science
Add systematic searches in:
- physics.comp-ph (Computational Physics)
- q-bio (Quantitative Biology)
- stat.ML (Machine Learning Statistics)
- eess.IV (Image and Video Processing)
- astro-ph (Astrophysics)

**Query Format:**
```
all:"Amazon Web Services" OR all:"AWS"
submitted:[20230101 TO 20251231]
category:physics.comp-ph
```

**bioRxiv/medRxiv Expanded:**
- Systematic search by category
- Check "Methods" sections specifically
- Search author acknowledgments

**Other Preprint Servers:**
- **ChemRxiv** (chemistry)
- **EarthArXiv** (earth sciences)
- **SocArXiv** (social sciences)
- **PsyArXiv** (psychology)
- **AgriXiv** (agricultural sciences)

**Expected Yield:** 50-100 preprints

---

### Strategy 6: University Research Newsletters Systematic Monitoring

**High-Value Sources:**

1. **Research Computing Newsletters**
   - MIT News - Research Computing
   - Stanford Research Computing Newsletter
   - Princeton Research Computing
   - Each top-100 HERD institution publishes these

2. **Research Communications/News Offices**
   - [University]/news/research
   - Weekly/monthly digests
   - Often highlight major cloud migrations

**Monitoring Strategy:**
Set up systematic checks (could be automated):
```
site:*.edu/research/news AWS 2024
site:*.edu/computing/news "Amazon Web Services"
"research highlights" newsletter AWS site:*.edu
```

**Expected Yield:** 30-50 examples

---

### Strategy 7: Research Data Repositories & Open Science

**Repositories to Mine:**

1. **Zenodo** (CERN-hosted)
   - Search: AWS in acknowledgments
   - Filter: university affiliations

2. **Figshare**
   - Datasets hosted on AWS
   - Check metadata

3. **Dryad**
   - Data availability statements

4. **Registry of Research Data Repositories (re3data)**
   - Filter by cloud infrastructure

**Search Queries:**
```
site:zenodo.org "Amazon Web Services" university
site:figshare.com "hosted on AWS"
"data availability" "AWS S3" university
```

**Expected Yield:** 20-40 datasets

---

### Strategy 8: Academic Social Media & Professional Networks

**LinkedIn Searches:**
```
"research computing" "AWS" university
"[University] researcher" "Amazon Web Services"
Posts mentioning: #ResearchComputing #AWS #Science
```

**Twitter/X (Scholar Accounts):**
```
from:science_accounts "AWS" OR "Amazon Web Services" research
#AcademicTwitter AWS research
Filter: accounts with .edu emails
```

**ResearchGate:**
- Search project descriptions
- Check computational methods sections

**Expected Yield:** 20-30 examples

---

### Strategy 9: University IT Strategic Plans & Annual Reports

**Documents to Target:**

1. **Research IT Strategic Plans**
   - Usually 3-5 year plans
   - Often mention cloud partnerships

2. **CIO Annual Reports**
   - Technology investments highlighted

3. **Office of Research Annual Reports**
   - Research infrastructure sections

**Search Strategy:**
```
site:[university].edu filetype:pdf "strategic plan" "AWS"
site:[university].edu filetype:pdf "annual report" research computing
"research cyberinfrastructure plan" cloud 2024
```

**Expected Yield:** 20-30 institutional partnerships

---

### Strategy 10: AWS-Specific Sources (Overlooked)

**AWS Resources Not Fully Exploited:**

1. **AWS Research Cloud Program**
   - Awardee lists published quarterly

2. **AWS Open Data Registry**
   - Filter by .edu contributors
   - Check dataset descriptions

3. **AWS Educate Program**
   - Member institutions list
   - Case studies buried in program materials

4. **AWS re:Invent/re:Inforce Conference**
   - Academic track sessions
   - Poster sessions

5. **AWS What's New Blog**
   - Filter announcements: "university" OR "research"

**Search Queries:**
```
site:aws.amazon.com/blogs "university research" 2024
site:aws.amazon.com "research cloud program" awardee
site:registry.opendata.aws university
```

**Expected Yield:** 40-60 examples

---

## Implementation Priority & Timeline

### Phase 1 (Week 1): Quick Wins
1. ✅ NSF HERD Top 20 institutions - systematic search (2-3 days)
2. ✅ NSF Award Search database (1 day)
3. ✅ SC24/PEARC recent proceedings (1 day)

**Expected: 50-80 examples**

### Phase 2 (Week 2): Deep Institutional Dive
1. ✅ NSF HERD institutions 21-50 (3 days)
2. ✅ Research computing newsletters (2 days)
3. ✅ NIH RePORTER database (2 days)

**Expected: 60-100 examples**

### Phase 3 (Week 3): Specialized Sources
1. ✅ Expanded preprint servers (2 days)
2. ✅ Data repositories (2 days)
3. ✅ IT strategic plans (2 days)
4. ✅ Conference proceedings (1 day)

**Expected: 50-80 examples**

### Phase 4 (Week 4): Long-tail & Verification
1. ✅ Social media mining (2 days)
2. ✅ AWS-specific overlooked sources (2 days)
3. ✅ Link verification and deduplication (2 days)
4. ✅ Documentation update (1 day)

**Expected: 30-50 examples**

---

## Total Expected Yield: 300-500 Additional Verified Examples

---

## Automation Opportunities

### Systematic Monitoring Scripts (Python/Bash)

**1. NSF HERD Institution Crawler**
```python
# Pseudo-code
for institution in top_100_herd:
    search_queries = [
        f'site:{institution.domain} AWS research',
        f'{institution.name} "research computing" AWS',
        f'site:{institution.domain}/news AWS 2024'
    ]
    results = automated_search(search_queries)
    filter_relevant(results)
    save_to_database(results)
```

**2. Preprint Server Monitor**
- Daily arXiv API queries for new papers
- bioRxiv RSS feed monitoring
- Automatic keyword extraction

**3. Grant Database Scraper**
- Weekly NSF award search
- NIH RePORTER API integration
- Automated extraction of AWS mentions

**4. Conference Proceeding Parser**
- PDF text extraction
- Keyword matching
- Citation extraction

---

## Quality Control Checklist

For each example found:

- [ ] Verify institution is academic (not just company research)
- [ ] Confirm AWS usage (not generic "cloud")
- [ ] Check publication/announcement date (prioritize 2023-2025)
- [ ] Validate URL is accessible and working
- [ ] Extract: Institution, Project, AWS Services, Year, Source URL
- [ ] Categorize by research domain
- [ ] Check for duplication against existing examples

---

## Search Query Templates

### University-Specific Template
```
# Template for each HERD institution
INSTITUTION="[University Name]"
DOMAIN="[university.edu]"

Query 1: site:${DOMAIN} "AWS" OR "Amazon Web Services" research 2024
Query 2: site:${DOMAIN}/news "cloud computing" research
Query 3: "${INSTITUTION}" "research computing" AWS case study
Query 4: site:${DOMAIN} filetype:pdf "annual report" AWS
Query 5: "${INSTITUTION}" researchers AWS "acknowledgments"
```

### Domain-Specific Templates
```
# Genomics
"genomics" OR "bioinformatics" university AWS 2024
site:biorxiv.org "Amazon Web Services" sequencing

# Climate Science
"climate model" OR "earth science" university AWS
site:eartharxiv.org "AWS" OR "cloud computing"

# Physics/Astronomy
"astrophysics" OR "particle physics" AWS cluster
site:arxiv.org category:astro-ph "Amazon Web Services"

# AI/ML
"machine learning" university AWS training
site:arxiv.org category:cs.LG "AWS" infrastructure

# Medical
"medical imaging" OR "clinical research" AWS
site:medrxiv.org "Amazon Web Services"
```

---

## Tools & Resources

### Search Tools
- **Google Custom Search Engine**: Create .edu-specific CSE
- **Bing Academic**: Academic-focused results
- **Semantic Scholar**: CS/science papers with AWS mentions
- **Dimensions.ai**: Research analytics platform
- **Web of Science/Scopus**: Citation databases

### Monitoring Tools
- **Google Alerts**: Set up for each top institution + AWS
- **Feedly/RSS**: Monitor research computing blogs
- **IFTTT/Zapier**: Automate social media monitoring

### Data Management
- **Airtable/Notion**: Track examples systematically
- **Zotero**: Manage academic references
- **Spreadsheet**: Institution checklist tracker

---

## Key Success Metrics

### Quantitative
- Number of examples per institution (target: avg 2-3 per top 50)
- Geographic diversity (target: 25+ countries)
- Temporal distribution (target: 75%+ from 2023-2025)
- Domain coverage (target: all 15 NSF research areas)
- External source ratio (target: 70%+ non-AWS sources)

### Qualitative
- Citation quality (peer-reviewed > preprints > news)
- Detail level (specific AWS services mentioned)
- Impact/scale (dataset size, compute hours, etc.)
- Reproducibility (working URLs)

---

## Lessons Learned from Current Search

1. **arXiv CS domain overrepresented** → Expand to physics, bio, stats
2. **AWS blogs easy to find** → Prioritize external validation
3. **Recent examples abundant** → Can be more selective
4. **Research computing newsletters gold mine** → Should be primary source
5. **Grant databases underutilized** → Rich source of validated research
6. **Conference proceedings valuable** → Time-consuming but high-quality
7. **Institutional coverage spotty** → NSF HERD systematic approach fixes this

---

## Next Steps

1. ✅ **Start with NSF HERD Top 20** - Systematic institutional search
2. ✅ **Mine NSF Award database** - Grant-funded research
3. ✅ **Review SC24/PEARC 2024** - Recent conference proceedings
4. ⏭️ **Build monitoring automation** - Ongoing example discovery
5. ⏭️ **Create institution tracker** - Ensure systematic coverage

---

*This methodology aims to increase example discovery from ~50/search to 300-500+ verified examples through systematic, reproducible approaches.*
