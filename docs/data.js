// AWS Academic Research Projects Data
// Full dataset: 172 verified academic research projects
// Auto-generated from README.md

const projects = [
    {
        "id": "1",
        "institution": "Institut Pasteur",
        "country": "France",
        "project": "IndexThePlanet DNA Database",
        "year": "2024-2025",
        "domains": [
            "Genomics",
            "Climate",
            "Conservation"
        ],
        "programs": [],
        "services": [
            "AWS Batch",
            "Graviton instances",
            "Amazon S3"
        ],
        "achievement": "Completed in 30 hours using 2.18 million vCPUs—work that would take a desktop computer 3,400 years.",
        "url": "https://aws.amazon.com/blogs/publicsector/the-institut-pasteur-is-creating-a-searchable-dna-database-of-all-life-on-earth-using-aws/"
    },
    {
        "id": "2",
        "institution": "Columbia University",
        "country": "United States",
        "project": "Alzheimer's Disease Functional Genomics",
        "year": "2024-2025",
        "domains": [
            "Genomics",
            "AI/ML",
            "Medical",
            "Neuroscience",
            "Chemistry"
        ],
        "programs": [],
        "services": [
            "Amazon EC2 Spot Instances",
            "MMCloud"
        ],
        "achievement": "Reduced complex computations from weeks to days; achieved 50-80% cost reduction using Spot instances.",
        "url": "https://aws.amazon.com/blogs/publicsector/accelerating-alzheimers-disease-research-through-aws-cloud-computing-powered-large-scale-functional-genomics-analysis/"
    },
    {
        "id": "3",
        "institution": "Allen Institute for Brain Science",
        "country": "United States",
        "project": "Brain Knowledge Platform",
        "year": "2023-2025",
        "domains": [
            "AI/ML",
            "Medical",
            "Neuroscience",
            "Conservation"
        ],
        "programs": [],
        "services": [
            "Amazon S3",
            "DynamoDB",
            "SageMaker"
        ],
        "achievement": "Generated 20+ petabytes of data with 100 billion+ cells stored and analyzed.",
        "url": "https://aws.amazon.com/solutions/case-studies/allen-institute-infographic/"
    },
    {
        "id": "4",
        "institution": "Fred Hutchinson Cancer Center",
        "country": "United States",
        "project": "Microbiome Research Initiative",
        "year": "2021-2024",
        "domains": [
            "Genomics",
            "Medical"
        ],
        "programs": [],
        "services": [
            "Amazon EC2 Spot Instances",
            "AWS Batch",
            "Nextflow"
        ],
        "achievement": "Reduced 7 years of aggregate compute time to 7 days.",
        "url": "https://aws.amazon.com/solutions/case-studies/fredhutch-case-study/"
    },
    {
        "id": "5",
        "institution": "University of Chicago",
        "country": "United States",
        "project": "Genomic Data Commons",
        "year": "2020-ongoing",
        "domains": [
            "Medical"
        ],
        "programs": [],
        "services": [
            "Amazon S3",
            "EC2",
            "cloud infrastructure"
        ],
        "achievement": "Hosting and analyzing cancer genomic data from the NIH's Genomic Data Commons, enabling researchers worldwide to access harmonized cancer datasets.",
        "url": "https://aws.amazon.com/solutions/case-studies/university-of-chicago/"
    },
    {
        "id": "6",
        "institution": "University of Adelaide",
        "country": "Australia",
        "project": "Phagos Genomics Research",
        "year": "2023",
        "domains": [
            "Genomics",
            "AI/ML",
            "Medical",
            "Computer Science"
        ],
        "programs": [],
        "services": [
            "AWS genomics and HPC services"
        ],
        "achievement": "Reduced treatment development time from 10+ years to approximately 2 months.",
        "url": "https://aws.amazon.com/solutions/case-studies/university-of-adelaide-genomics-case-study/"
    },
    {
        "id": "7",
        "institution": "Columbia University & OpenFold Consortium",
        "country": "United States",
        "project": "Protein Structure Prediction",
        "year": "2022-2024",
        "domains": [
            "Genomics"
        ],
        "programs": [
            "Open Data"
        ],
        "services": [
            "EC2 Capacity Blocks",
            "Spot Instances (256 GPUs)",
            "AWS Batch"
        ],
        "achievement": "85% cost savings over on-demand pricing; enables global drug discovery research.",
        "url": "https://openfold.io/"
    },
    {
        "id": "8",
        "institution": "Johns Hopkins APL",
        "country": "United States",
        "project": "BossDB Brain Mapping Database",
        "year": "2021-ongoing",
        "domains": [
            "AI/ML",
            "Neuroscience"
        ],
        "programs": [],
        "services": [
            "Amazon S3",
            "DynamoDB",
            "AWS Lambda"
        ],
        "achievement": "Hosts over 10 petavoxels of data supporting dozens of academic partners worldwide.",
        "url": "https://www.jhuapl.edu/news/news-releases/210722b-BossDB-Amazon-Web-Services-brain-neuroscience"
    },
    {
        "id": "9",
        "institution": "University of Washington",
        "country": "United States",
        "project": "Neuroimaging Applications Research",
        "year": "2017",
        "domains": [
            "Neuroscience"
        ],
        "programs": [],
        "services": [
            "Amazon EC2 (m4",
            "c4",
            "g2 GPU instances)"
        ],
        "achievement": "Benchmarked common neuroimaging applications (FreeSurfer, FSL, BEDPOSTX) on AWS, identifying best practices for cloud-based neuroimaging workflows.",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5675877/"
    },
    {
        "id": "10",
        "institution": "NC State University",
        "country": "United States",
        "project": "North Carolina Institute for Climate Studies",
        "year": "2019",
        "domains": [
            "Climate"
        ],
        "programs": [],
        "services": [
            "Amazon EC2",
            "S3",
            "S3 Glacier"
        ],
        "achievement": "Processing 50x faster on AWS than on-premises at less than 1/6 the cost.",
        "url": "https://aws.amazon.com/blogs/publicsector/embracing-the-cloud-for-climate-research/"
    },
    {
        "id": "11",
        "institution": "National Center for Atmospheric Research (NCAR)",
        "country": "United States",
        "project": "Climate Model Simulations",
        "year": "2021-ongoing",
        "domains": [
            "Climate"
        ],
        "programs": [
            "Open Data"
        ],
        "services": [
            "AWS ParallelCluster",
            "EC2 (C5n.18xlarge)",
            "Elastic Fabric Adapter"
        ],
        "achievement": "Running 30 ensemble climate-model simulations using CESM2 and WACCM to simulate Earth systems from 2022-2070, with datasets hosted on AWS Open Data fo",
        "url": "https://aws.amazon.com/blogs/hpc/supporting-climate-model-simulations-to-accelerate-climate-science/"
    },
    {
        "id": "12",
        "institution": "Harvard University",
        "country": "United States",
        "project": "GEOS-Chem Atmospheric Chemistry Model",
        "year": "2019",
        "domains": [
            "Climate",
            "Chemistry"
        ],
        "programs": [],
        "services": [
            "Amazon EC2",
            "S3",
            "AWS Marketplace AMIs"
        ],
        "achievement": "Implementing the global 3D atmospheric chemistry model on AWS, making it accessible to hundreds of research groups worldwide with preconfigured softwa",
        "url": "https://journals.ametsoc.org/view/journals/bams/100/10/bams-d-18-0243.1.xml"
    },
    {
        "id": "13",
        "institution": "Caltech / Southern California Seismic Network",
        "country": "United States",
        "project": "Earthquake Data",
        "year": "2021",
        "domains": [
            "Climate"
        ],
        "programs": [],
        "services": [
            "Amazon S3",
            "AWS cloud infrastructure"
        ],
        "achievement": "Migrated seismic network data processing to AWS for resilience—ensuring continued processing even if local infrastructure is damaged during earthquake",
        "url": "https://southern.scec.org/publication/11739"
    },
    {
        "id": "14",
        "institution": "NASA Jet Propulsion Laboratory",
        "country": "United States",
        "project": "NISAR Mission",
        "year": "2024-2025",
        "domains": [
            "AI/ML",
            "Climate"
        ],
        "programs": [],
        "services": [
            "Amazon EC2 Spot Instances",
            "EC2 Auto Scaling"
        ],
        "achievement": "Processing satellite data from the NISAR mission (launching 2025), which will generate more data than any previous NASA Earth mission—70+ TB daily fro",
        "url": "https://aws.amazon.com/solutions/case-studies/nasa-jpl-spot-case-study/"
    },
    {
        "id": "15",
        "institution": "Natural History Museum London",
        "country": "UK",
        "project": "Urban Nature Project",
        "year": "2024-2025",
        "domains": [
            "Climate",
            "Cultural Heritage",
            "Conservation"
        ],
        "programs": [],
        "services": [
            "AWS cloud infrastructure for sensor networks",
            "data storage",
            "and analytics"
        ],
        "achievement": "Platform expanded 200% in 15 months.",
        "url": "https://technologymagazine.com/news/natural-history-museum-aws-biodiversity-data-technology"
    },
    {
        "id": "16",
        "institution": "Brightband",
        "country": "United States",
        "project": "AI Weather Forecasting",
        "year": "2024-2025",
        "domains": [
            "AI/ML",
            "Climate"
        ],
        "programs": [],
        "services": [
            "Amazon S3 (Registry of Open Data)",
            "GPU instances"
        ],
        "achievement": "ML models complete forecast rollouts in minutes on single GPU, costing less than $1 per forecast.",
        "url": "https://aws.amazon.com/blogs/publicsector/building-ai-powered-weather-forecasting-tools-with-open-data-on-aws/"
    },
    {
        "id": "17",
        "institution": "Fermilab / CERN CMS Experiment",
        "country": "United States",
        "project": "High Energy Physics",
        "year": "2015-2016",
        "domains": [
            "Physics"
        ],
        "programs": [],
        "services": [
            "Amazon EC2",
            "EC2 Spot Instances",
            "Route 53"
        ],
        "achievement": "Over 500 million Monte Carlo simulation events fully simulated in 10 days—work that would take 6 weeks on-premises.",
        "url": "https://aws.amazon.com/blogs/aws/experiment-that-discovered-the-higgs-boson-uses-aws-to-probe-nature/"
    },
    {
        "id": "18",
        "institution": "Square Kilometre Array (SKA) / ICRAR",
        "country": "Australia",
        "project": "Square Kilometre Array (SKA) / ICRAR (Australia)",
        "year": "2015-ongoing",
        "domains": [
            "Astronomy"
        ],
        "programs": [],
        "services": [
            "AWS cloud services",
            "1 PB storage provision"
        ],
        "achievement": "AstroCompute in the Cloud grant program accelerating development of tools for processing astronomical data. ICRAR prototypes data and processing syste",
        "url": "http://www.spaceref.com/news/viewpr.html?pid=45707"
    },
    {
        "id": "19",
        "institution": "LIGO Gravitational Wave Collaboration",
        "country": "United States",
        "project": "LIGO Gravitational Wave Collaboration",
        "year": "2023-present (O4 observing run)",
        "domains": [
            "Astronomy",
            "Physics"
        ],
        "programs": [],
        "services": [
            "AWS clusters for alert processing"
        ],
        "achievement": "Low Latency Alert Generation Infrastructure for gravitational wave detection. AWS clusters provide scalable capacity for real-time detection of events",
        "url": "https://arxiv.org/html/2503.14292"
    },
    {
        "id": "20",
        "institution": "Sloan Digital Sky Survey (SDSS)",
        "country": "United States",
        "project": "Sloan Digital Sky Survey (SDSS)",
        "year": "2008-ongoing",
        "domains": [
            "AI/ML"
        ],
        "programs": [],
        "services": [
            "Amazon S3 (Public Data Set)",
            "EC2",
            "EBS"
        ],
        "achievement": "One of the most ambitious astronomical surveys ever—180 GB dataset including images of 230 million celestial objects and 3D maps of 930,000+ galaxies ",
        "url": "https://aws.amazon.com/blogs/aws/new-public-data-set-sloan-digital-sky-survey/"
    },
    {
        "id": "21",
        "institution": "Lawrence Berkeley National Laboratory",
        "country": "United States",
        "project": "Materials Project",
        "year": "2019-ongoing",
        "domains": [
            "Chemistry"
        ],
        "programs": [
            "Open Data"
        ],
        "services": [
            "Amazon S3",
            "EC2",
            "ECR"
        ],
        "achievement": "Supporting 200,000+ global users with a team of four (would require 10+ on-premises).",
        "url": "https://aws.amazon.com/blogs/publicsector/accelerating-new-materials-design-open-data-aws/"
    },
    {
        "id": "22",
        "institution": "Max Planck Institute",
        "country": "Germany",
        "project": "GROMACS Molecular Dynamics",
        "year": "2021-2022",
        "domains": [
            "Genomics",
            "Medical",
            "Chemistry"
        ],
        "programs": [],
        "services": [
            "EC2 Spot Instances (g4dn",
            "g5 GPU families)",
            "AWS Batch"
        ],
        "achievement": "Running 20,000 molecular dynamics simulations in 3 days for protein-ligand binding free energy calculations, accelerating early-stage drug discovery.",
        "url": "https://aws.amazon.com/blogs/hpc/running-20k-simulations-in-3-days-with-aws-batch/"
    },
    {
        "id": "23",
        "institution": "Carnegie Mellon University",
        "country": "United States",
        "project": "Build on Trainium Program",
        "year": "2024-2025",
        "domains": [
            "AI/ML"
        ],
        "programs": [
            "Trainium"
        ],
        "services": [
            "AWS Trainium",
            "Trainium UltraClusters",
            "Neuron Kernel Interface (NKI)"
        ],
        "achievement": "Part of Amazon's $110 million investment in university-led generative AI research. Developing new AI architectures, ML libraries, and performance opti",
        "url": "https://www.amazon.science/research-awards"
    },
    {
        "id": "24",
        "institution": "Virginia Tech",
        "country": "United States",
        "project": "Radio Frequency Machine Learning",
        "year": "2024",
        "domains": [
            "AI/ML",
            "Education",
            "Computer Science"
        ],
        "programs": [],
        "services": [
            "AWS cloud infrastructure",
            "EC2",
            "ML tools"
        ],
        "achievement": "AWS Emerging Technology Research Fellowship deploying ML algorithms for distributed RF spectrum sensing, with applications in 6G/NextG cellular system",
        "url": "https://news.vt.edu/articles/2024/01/aws-hume-center-fellowship.html"
    },
    {
        "id": "25",
        "institution": "UC Berkeley",
        "country": "United States",
        "project": "Traffic Flow Machine Learning",
        "year": "2020-present",
        "domains": [
            "AI/ML",
            "Education",
            "Computer Science"
        ],
        "programs": [],
        "services": [
            "AWS Promotional Credits",
            "GPU instances"
        ],
        "achievement": "Amazon Research Award enabling scaled experiments to learn traffic smoothing algorithms in high-fidelity simulations, with RL policies transferred to ",
        "url": "https://www.amazon.science/research-awards"
    },
    {
        "id": "26",
        "institution": "Emory University",
        "country": "United States",
        "project": "AI.Humanity Initiative HPC",
        "year": "2022-present",
        "domains": [
            "AI/ML"
        ],
        "programs": [],
        "services": [
            "AWS ParallelCluster",
            "EC2 P4 instances",
            "S3"
        ],
        "achievement": "Completed distributed AI training on 21,517 images not possible with on-premises infrastructure.",
        "url": "https://aws.amazon.com/blogs/hpc/category/public-sector/education/"
    },
    {
        "id": "27",
        "institution": "University of Washington",
        "country": "United States",
        "project": "Amazon AI PhD Fellowship",
        "year": "2024-2026",
        "domains": [
            "AI/ML",
            "Education"
        ],
        "programs": [],
        "services": [
            "$24 million in AWS cloud-computing credits annually"
        ],
        "achievement": "Part of Amazon's $68 million AI PhD Fellowship program supporting 100+ doctoral students researching machine learning, computer vision, and NLP.",
        "url": "https://www.washington.edu/news/2025/10/21/amazon-launches-ai-phd-fellowship-program-with-uw/"
    },
    {
        "id": "28",
        "institution": "University of Arizona",
        "country": "United States",
        "project": "KMap Research Discovery Platform",
        "year": "2024-2025",
        "domains": [
            "AI/ML",
            "Neuroscience"
        ],
        "programs": [],
        "services": [
            "AWS AI/ML services",
            "S3",
            "compute infrastructure"
        ],
        "achievement": "AI-powered research platform transforming how researchers discover expertise and build teams—functioning as the university's \"institutional brain.\"",
        "url": "https://aws.amazon.com/blogs/publicsector/how-the-university-of-arizonas-kmap-transforms-research-collaboration-with-ai-powered-discovery-on-aws/"
    },
    {
        "id": "29",
        "institution": "Duke University",
        "country": "United States",
        "project": "Autism Spectrum Disorder Screening",
        "year": "2023-present",
        "domains": [
            "AI/ML",
            "Education"
        ],
        "programs": [],
        "services": [
            "Amazon SageMaker",
            "computer vision services"
        ],
        "achievement": "Early diagnosis can increase a child's IQ by up to 17 points.",
        "url": "https://www.amazon.science/latest-news/how-some-of-awss-most-innovative-customers-are-using-computer-vision-technologies"
    },
    {
        "id": "30",
        "institution": "Northwestern University",
        "country": "United States",
        "project": "Multilingual GenAI Search",
        "year": "2023-2024",
        "domains": [
            "AI/ML"
        ],
        "programs": [
            "GenAI"
        ],
        "services": [
            "AWS Lambda",
            "Amazon OpenSearch",
            "Amazon Bedrock"
        ],
        "achievement": "Generative AI-powered search tool for digital collections (800,000+ annual page views) using semantic search with vector embeddings for multilingual c",
        "url": "https://aws.amazon.com/blogs/publicsector/how-northwestern-university-built-a-multilingual-generative-ai-search-tool-with-aws/"
    },
    {
        "id": "31",
        "institution": "Massachusetts General Hospital & Harvard Medical School",
        "country": "United States",
        "project": "League of Radiologists",
        "year": "2024-2025",
        "domains": [
            "AI/ML",
            "Medical",
            "Education"
        ],
        "programs": [],
        "services": [
            "Amazon Comprehend Medical",
            "Neptune",
            "SageMaker"
        ],
        "achievement": "AI-driven, gamified medical imaging education platform with NLP and knowledge graphs connecting radiology concepts, imaging findings, and diagnoses.",
        "url": "https://aws.amazon.com/blogs/industries/revolutionize-personalized-radiology-learning-using-ai-and-aws/"
    },
    {
        "id": "32",
        "institution": "Harvard Medical School",
        "country": "United States",
        "project": "Neurological Speech Disorder Diagnosis",
        "year": "2020-2023",
        "domains": [
            "AI/ML",
            "Medical",
            "Education"
        ],
        "programs": [],
        "services": [
            "AWS GPU instances (P2",
            "P3",
            "G4dn)"
        ],
        "achievement": "AWS Machine Learning Research Award enabling deep learning models for timely diagnosis of neurological speech disorders (e.g., dystonia).",
        "url": "https://aws.amazon.com/aws-ml-research-awards/"
    },
    {
        "id": "33",
        "institution": "Emory University Winship Cancer Institute",
        "country": "United States",
        "project": "Microbiome Analysis",
        "year": "2019",
        "domains": [
            "Medical"
        ],
        "programs": [],
        "services": [
            "Amazon S3",
            "EC2 Linux instances"
        ],
        "achievement": "Processed 50 gut microbiome samples within 4 hours at $0.80/hour.",
        "url": "https://pubmed.ncbi.nlm.nih.gov/31710301/"
    },
    {
        "id": "34",
        "institution": "Washington University in St. Louis",
        "country": "United States",
        "project": "Folding@home COVID-19",
        "year": "2020",
        "domains": [
            "Genomics",
            "Medical"
        ],
        "programs": [
            "Open Data"
        ],
        "services": [
            "AWS Open Data Registry",
            "S3"
        ],
        "achievement": "Created the first exascale computing resource to study COVID-19 protein dynamics. Shared one of the world's largest protein simulation databases as AW",
        "url": "https://aws.amazon.com/blogs/publicsector/crowdsourcing-cure-covid-19-cloud-accelerating-research-drug-discovery/"
    },
    {
        "id": "35",
        "institution": "University of British Columbia",
        "country": "Canada",
        "project": "Serratus/Open Virome Project",
        "year": "2021-present",
        "domains": [
            "Genomics"
        ],
        "programs": [],
        "services": [
            "AWS Cloud compute",
            "S3"
        ],
        "achievement": "Processes over one million libraries of sequencing data per day at less than half a cent per library.",
        "url": "https://aws.amazon.com/blogs/publicsector/preventing-next-pandemic-how-researchers-analyze-millions-genomic-datasets-with-aws/"
    },
    {
        "id": "36",
        "institution": "Emory University",
        "country": "United States",
        "project": "tmCOVID Text Mining Tool",
        "year": "2020",
        "domains": [
            "AI/ML",
            "Medical"
        ],
        "programs": [],
        "services": [
            "AWS HPC resources"
        ],
        "achievement": "Part of COVID-19 HPC Consortium—interactive web-based text mining tool for automated extraction of bio-concepts from 2,700+ COVID-19 research articles",
        "url": "https://aws.amazon.com/blogs/publicsector/updates-early-lessons-covid-19-hpc-consortium-research-partners/"
    },
    {
        "id": "37",
        "institution": "Stony Brook University",
        "country": "United States",
        "project": "COVID-19 Social Determinants",
        "year": "2021",
        "domains": [
            "Medical",
            "Education"
        ],
        "programs": [],
        "services": [
            "Amazon S3",
            "AWS Glue",
            "Amazon Athena"
        ],
        "achievement": "Analyzed correlations between social determinants (internet access, education) and COVID-19 deaths in Georgia, Florida, and Louisiana.",
        "url": "https://aws.amazon.com/blogs/publicsector/using-cloud-better-understand-address-social-determinants-health/"
    },
    {
        "id": "38",
        "institution": "Harvard Data Science Initiative",
        "country": "United States",
        "project": "AWS Impact Computing Project",
        "year": "2022-present",
        "domains": [
            "Medical",
            "Economics",
            "Conservation"
        ],
        "programs": [],
        "services": [
            "AWS Cloud computing infrastructure"
        ],
        "achievement": "Research focused on social determinants of health, mass migration, and economic resilience—\"reimagining data science for society's most complex challe",
        "url": "https://www.aboutamazon.com/news/innovation-at-amazon/amazon-invests-25-million-in-a-10-year-research-collaboration-to-advance-ai"
    },
    {
        "id": "39",
        "institution": "Smithsonian Institution",
        "country": "United States",
        "project": "Open Access Initiative",
        "year": "2020",
        "domains": [
            "AI/ML",
            "Cultural Heritage"
        ],
        "programs": [],
        "services": [
            "Amazon S3 (AWS Public Dataset Program)"
        ],
        "achievement": "Released 2.8 million two- and three-dimensional images and files from 19 museums, 9 research centers, and the zoo for digital humanities studies and M",
        "url": "https://aws.amazon.com/blogs/publicsector/smithsonian-3-million-images-smithsonian-open-access-initiative/"
    },
    {
        "id": "40",
        "institution": "National Museums of Kenya",
        "country": "United States",
        "project": "Digital Archaeology Archives",
        "year": "2020",
        "domains": [
            "Cultural Heritage"
        ],
        "programs": [],
        "services": [
            "AWS Cloud infrastructure"
        ],
        "achievement": "Digitizing 10,000 artifacts from Archaeology and Paleontology collections, including early human technology dating back over 2.5 million years.",
        "url": "#"
    },
    {
        "id": "41",
        "institution": "University of Michigan",
        "country": "United States",
        "project": "QREAL Quantum Testbed",
        "year": "2024",
        "domains": [
            "Quantum Computing"
        ],
        "programs": [],
        "services": [
            "AWS Fargate",
            "Lambda",
            "Amazon RDS"
        ],
        "achievement": "NSF-funded project transforming QREAL platform into cloud-accessible quantum testbed providing worldwide access to quantum computing, simulation, sens",
        "url": "https://aws.amazon.com/blogs/publicsector/democratizing-quantum-resources-university-of-michigan-and-aws-collaborate-on-a-remote-access-quantum-testbed/"
    },
    {
        "id": "42",
        "institution": "RMIT University",
        "country": "Australia",
        "project": "RACE Cloud Supercomputing Hub",
        "year": "2023-present",
        "domains": [
            "HPC & Infrastructure"
        ],
        "programs": [],
        "services": [
            "Amazon EC2",
            "AWS ParallelCluster",
            "S3"
        ],
        "achievement": "Cloud-first HPC research facility delivering high-performance computing services across the institution.",
        "url": "#"
    },
    {
        "id": "43",
        "institution": "University of Cape Town",
        "country": "South Africa",
        "project": "Climate System Analysis Group",
        "year": "2021-ongoing",
        "domains": [
            "Climate"
        ],
        "programs": [],
        "services": [
            "AWS ParallelCluster",
            "HPC infrastructure",
            "AWS Open Data Program"
        ],
        "achievement": "Climate research relevant to Cape Town and African regions experiencing severe drought and climate impacts.",
        "url": "#"
    },
    {
        "id": "44",
        "institution": "University of Oxford",
        "country": "UK",
        "project": "Climate Science and Machine Learning",
        "year": "2021-present",
        "domains": [
            "AI/ML",
            "Climate",
            "Education"
        ],
        "programs": [],
        "services": [
            "AWS Promotional Credits",
            "compute resources"
        ],
        "achievement": "Novel research at the interface of climate science and ML, including modeling of atmospheric clouds.",
        "url": "#"
    },
    {
        "id": "45",
        "institution": "Cornell University",
        "country": "United States",
        "project": "Social Science Data Research",
        "year": "2024",
        "domains": [
            "Computer Science"
        ],
        "programs": [],
        "services": [
            "AWS Cloud Computing credits"
        ],
        "achievement": "AWS Cloud Computing grants for faculty projects including studying discriminatory decision-making and youth digital literacy/social media research.",
        "url": "#"
    },
    {
        "id": "46",
        "institution": "Fritz Haber Institute, Max Planck Society",
        "country": "Germany",
        "project": "Quantum Chemistry",
        "year": "2021",
        "domains": [
            "Quantum Computing",
            "AI/ML",
            "Chemistry"
        ],
        "programs": [],
        "services": [
            "AWS ParallelCluster",
            "EC2 (C5",
            "C6g Graviton2)"
        ],
        "achievement": "Graviton2 instances offered 23% lower cost than C5 instances.",
        "url": "#"
    },
    {
        "id": "47",
        "institution": "University of British Columbia",
        "country": "Canada",
        "project": "Computational Chemistry",
        "year": "2021-2022",
        "domains": [
            "Quantum Computing",
            "AI/ML",
            "Chemistry"
        ],
        "programs": [],
        "services": [
            "AWS Elastic Container Service",
            "AWS Batch",
            "Lambda"
        ],
        "achievement": "Cloud solution for complex quantum chemistry calculations using containerized workflows.",
        "url": "#"
    },
    {
        "id": "48",
        "institution": "Baylor College of Medicine",
        "country": "United States",
        "project": "All of Us Research Program",
        "year": "2019-2024",
        "domains": [
            "Genomics",
            "Medical"
        ],
        "programs": [],
        "services": [
            "AWS Step Functions",
            "Batch",
            "Lambda"
        ],
        "achievement": "Reduced bioinformatic analysis from 80 hours to 2 hours per sample.",
        "url": "#"
    },
    {
        "id": "49",
        "institution": "HHMI Janelia Research Campus",
        "country": "United States",
        "project": "NeuronBridge",
        "year": "2021-ongoing",
        "domains": [
            "Neuroscience"
        ],
        "programs": [],
        "services": [
            "AWS Lambda (3",
            "000 concurrent functions)",
            "Step Functions"
        ],
        "achievement": "Serverless AWS-native burst-parallel image search tool comparing neuroscience images across electron microscopy and light microscopy datasets for Dros",
        "url": "#"
    },
    {
        "id": "50",
        "institution": "QC Ware/Pasqal",
        "country": "United States",
        "project": "QUBEC Quantum Chemistry Platform",
        "year": "2021-2022\n\n---\n\n# 50 Additional Academic Research Examples (2023-2025)\n\n## Life Sciences & Genomics (Additional)",
        "domains": [
            "Quantum Computing",
            "Chemistry"
        ],
        "programs": [],
        "services": [
            "Amazon Braket",
            "AWS infrastructure"
        ],
        "achievement": "Fully managed cloud platform for quantum chemistry and materials science simulations enabling researchers to run chemical simulations on current quant",
        "url": "#"
    },
    {
        "id": "51",
        "institution": "Genomics England",
        "country": "United States",
        "project": "Cancer Subtyping with Multi-Modal ML",
        "year": "2024",
        "domains": [
            "Genomics",
            "AI/ML",
            "Medical",
            "Education"
        ],
        "programs": [],
        "services": [
            "Amazon SageMaker",
            "AWS Professional Services"
        ],
        "achievement": "Automatic cancer sub-typing and survival detection pipelines using multi-modal machine learning on genomic and clinical data.",
        "url": "https://aws.amazon.com/blogs/machine-learning/genomics-england-uses-amazon-sagemaker-to-predict-cancer-subtypes-and-patient-survival-from-multi-modal-data/"
    },
    {
        "id": "52",
        "institution": "University of York",
        "country": "United States",
        "project": "Automated 'Omics Data Analysis",
        "year": "2024 (published August)",
        "domains": [
            "AI/ML"
        ],
        "programs": [],
        "services": [
            "Amazon EC2",
            "automated instance management"
        ],
        "achievement": "Automated management of AWS instances for training in 'omics data analysis workflows.",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11382607/"
    },
    {
        "id": "53",
        "institution": "Periyar University",
        "country": "India",
        "project": "Multi-Omics Breast Cancer Research",
        "year": "2024 (published August)",
        "domains": [
            "Medical"
        ],
        "programs": [],
        "services": [
            "AWS Cloud Solutions",
            "multi-omics data integration"
        ],
        "achievement": "AWS Cloud Solutions in multi-omics breast cancer biomarker research for Indian patient cohorts.",
        "url": "https://www.sciencepublishinggroup.com/article/10.11648/j.cbb.20241201.11"
    },
    {
        "id": "54",
        "institution": "INPE Brazil",
        "country": "United States",
        "project": "Remote Sensing for Land Use Monitoring",
        "year": "2024",
        "domains": [
            "Climate"
        ],
        "programs": [],
        "services": [
            "AWS remote sensing infrastructure",
            "cloud storage"
        ],
        "achievement": "Brazil Data Cube (BDC) project processing remote sensing images into Analysis Ready Data (ARD) datasets.",
        "url": "https://ieeexplore.ieee.org/abstract/document/9165649"
    },
    {
        "id": "55",
        "institution": "Livestock Health Monitoring IoT System",
        "country": "United States",
        "project": "Livestock Health Monitoring IoT System",
        "year": "2024 (June)",
        "domains": [
            "Medical",
            "Computer Science"
        ],
        "programs": [],
        "services": [
            "AWS IoT Cloud services",
            "data processing"
        ],
        "achievement": "Cloud-based IoT system for livestock health monitoring tracking movement patterns, body temperature, and heart rate.",
        "url": "https://www.biorxiv.org/content/10.1101/2024.06.08.598087v1.full"
    },
    {
        "id": "56",
        "institution": "Crackling-Cloud Serverless Genomics",
        "country": "United States",
        "project": "Crackling-Cloud Serverless Genomics",
        "year": "2024",
        "domains": [
            "Genomics"
        ],
        "programs": [],
        "services": [
            "AWS serverless architecture",
            "AWS CDK"
        ],
        "achievement": "Event-driven serverless pipeline for genomics using AWS Cloud Development Kit.",
        "url": "https://www.biorxiv.org/content/biorxiv/early/2024/12/05/2024.12.04.626718.source.xml"
    },
    {
        "id": "57",
        "institution": "GW: Genomics Data Visualization Tool",
        "country": "United States",
        "project": "GW: Genomics Data Visualization Tool",
        "year": "2024 (September)",
        "domains": [
            "Genomics"
        ],
        "programs": [],
        "services": [
            "AWS servers for cloud deployment"
        ],
        "achievement": "Interactive browser for visualizing aligned sequencing reads and genome-variation datasets on cloud servers.",
        "url": "https://www.biorxiv.org/content/10.1101/2024.07.26.605272v5.full"
    },
    {
        "id": "58",
        "institution": "Harvard Data Science Initiative",
        "country": "United States",
        "project": "AWS Impact Computing Projects",
        "year": "2024 (announced September)",
        "domains": [
            "Medical",
            "Climate"
        ],
        "programs": [],
        "services": [
            "AWS Impact Computing infrastructure"
        ],
        "achievement": "Four research projects spanning climate change/mitigation, food security, and social determinants of health.",
        "url": "https://datascience.harvard.edu/2024/09/11/announcing-four-new-aws-impact-computing-projects/"
    },
    {
        "id": "59",
        "institution": "University of Illinois",
        "country": "United States",
        "project": "Flood Prediction for National Park Service",
        "year": "2024",
        "domains": [
            "Climate"
        ],
        "programs": [],
        "services": [
            "Amazon Sustainability Data Initiative",
            "AWS compute"
        ],
        "achievement": "15-minute flood forecast generation with 20-minute end-to-end latency.",
        "url": "https://cee.illinois.edu/news/64502"
    },
    {
        "id": "60",
        "institution": "CTrees",
        "country": "United States",
        "project": "JMRV Carbon Monitoring Tool",
        "year": "2024",
        "domains": [
            "Climate"
        ],
        "programs": [],
        "services": [
            "AWS cloud credits and cash funding"
        ],
        "achievement": "AWS Imagine Grant for JMRV tool providing precise annual measurements of carbon stocks, forest area, emissions, and land use.",
        "url": "https://aws.amazon.com/blogs/publicsector/tag/environment/"
    },
    {
        "id": "61",
        "institution": "University of Oklahoma",
        "country": "United States",
        "project": "Bird Migration Studies",
        "year": "2024",
        "domains": [
            "Conservation"
        ],
        "programs": [],
        "services": [
            "AWS Open Data (NEXRAD)",
            "analysis tools"
        ],
        "achievement": "Using NEXRAD data on AWS to study migrating flocks of birds.",
        "url": "https://aws.amazon.com/earth/"
    },
    {
        "id": "62",
        "institution": "Penn State Hydrology Research",
        "country": "United States",
        "project": "Penn State Hydrology Research",
        "year": "2024",
        "domains": [
            "AI/ML"
        ],
        "programs": [],
        "services": [
            "Amazon S3 for dataset hosting"
        ],
        "achievement": "Multi-scale hydrology datasets from high-resolution hydrologic models available on AWS S3.",
        "url": "https://zenodo.org/records/15784945"
    },
    {
        "id": "63",
        "institution": "NASA & James Webb Space Telescope Data",
        "country": "United States",
        "project": "NASA & James Webb Space Telescope Data",
        "year": "2024",
        "domains": [
            "AI/ML",
            "Astronomy"
        ],
        "programs": [
            "Open Data"
        ],
        "services": [
            "Amazon S3",
            "AWS Space Act Agreement"
        ],
        "achievement": "High-value scientific datasets from JWST and other missions available through AWS Open Data.",
        "url": "https://science.data.nasa.gov/features-events/open-data-aws"
    },
    {
        "id": "64",
        "institution": "Arizona State University",
        "country": "United States",
        "project": "JWST Dark Matter Research",
        "year": "2024 (December, published in Nature Astronomy)",
        "domains": [
            "Astronomy"
        ],
        "programs": [],
        "services": [
            "Data processing infrastructure"
        ],
        "achievement": "JWST observations revealing fuzzy dark matter evidence in early galaxy morphology.",
        "url": "https://news.asu.edu/20251209-science-and-technology-james-webb-space-telescope-opens-new-window-hidden-world-dark"
    },
    {
        "id": "65",
        "institution": "MIT",
        "country": "United States",
        "project": "Early Dark Energy Research",
        "year": "2024 (September)",
        "domains": [
            "Astronomy"
        ],
        "programs": [],
        "services": [
            "Computational infrastructure"
        ],
        "achievement": "Study proposing early dark energy could resolve cosmology's biggest puzzles including Hubble tension.",
        "url": "https://news.mit.edu/2024/study-early-dark-energy-could-resolve-cosmologys-two-biggest-puzzles-0913"
    },
    {
        "id": "66",
        "institution": "Seismology Cloud Computing Research",
        "country": "United States",
        "project": "Seismology Cloud Computing Research",
        "year": "2024-2025",
        "domains": [
            "Computer Science"
        ],
        "programs": [],
        "services": [
            "AWS storage for seismic archives"
        ],
        "achievement": "Cloud computing and storage in seismology with Southern California and Northern California Seismic Networks migrated to AWS.",
        "url": "https://arxiv.org/html/2506.11307"
    },
    {
        "id": "67",
        "institution": "University of Washington + Amazon Science Hub",
        "country": "United States",
        "project": "2024-25 Fellows",
        "year": "2024-2025",
        "domains": [
            "AI/ML",
            "Robotics"
        ],
        "programs": [
            "Science Hub"
        ],
        "services": [
            "AWS AI/ML services",
            "up to $100",
            "000 per project"
        ],
        "achievement": "Amazon Fellowships and Faculty Research Awards for robotics and AI, including robotic manipulation and computer vision.",
        "url": "https://www.sciencehub.uw.edu/2025/01/07/2024-25-amazon-fellows-faculty-research-awards/"
    },
    {
        "id": "68",
        "institution": "Carnegie Mellon University",
        "country": "United States",
        "project": "AI Innovation Hub",
        "year": "2025 (announced October)",
        "domains": [
            "AI/ML",
            "Computer Science",
            "Robotics"
        ],
        "programs": [],
        "services": [
            "AWS cloud infrastructure",
            "research funding"
        ],
        "achievement": "Strategic AI Innovation Hub for generative AI, robotics, NLP, and cloud computing research with substantial Amazon funding.",
        "url": "https://www.cmu.edu/news/stories/archives/2025/october/amazon-and-carnegie-mellon-university-launch-strategic-ai-innovation-hub"
    },
    {
        "id": "69",
        "institution": "University of Texas at Austin",
        "country": "United States",
        "project": "Science Hub",
        "year": "2024-2025",
        "domains": [
            "Other"
        ],
        "programs": [
            "Science Hub"
        ],
        "services": [
            "AWS research infrastructure"
        ],
        "achievement": "UT Austin-Amazon Science Hub advancing research and addressing significant challenges.",
        "url": "https://www.amazon.science/news-and-features/amazon-and-university-of-texas-at-austin-launch-science-hub"
    },
    {
        "id": "70",
        "institution": "Dartmouth College",
        "country": "United States",
        "project": "Anthropic & AWS AI Partnership",
        "year": "2025 (announced December)",
        "domains": [
            "AI/ML",
            "Education"
        ],
        "programs": [],
        "services": [
            "AWS infrastructure",
            "Anthropic AI access"
        ],
        "achievement": "Partnership providing students, faculty, and staff access to AI models for academic environments.",
        "url": "https://home.dartmouth.edu/news/2025/12/dartmouth-announces-ai-partnership-anthropic-and-aws"
    },
    {
        "id": "71",
        "institution": "University of Illinois Chicago",
        "country": "United States",
        "project": "BigDataX Summer Program",
        "year": "2024 (Summer)",
        "domains": [
            "Education"
        ],
        "programs": [],
        "services": [
            "AWS Cloud",
            "Chameleon Cloud",
            "Aurora Supercomputer"
        ],
        "achievement": "BigDataX REU summer program for undergraduate research in big data using distributed cloud systems.",
        "url": "https://datasys.cs.iit.edu/grants/BigDataX/2024/index.html"
    },
    {
        "id": "72",
        "institution": "arXiv Research: LLM Misconfiguration Detection",
        "country": "United States",
        "project": "arXiv Research: LLM Misconfiguration Detection",
        "year": "2024 (November)",
        "domains": [
            "AI/ML"
        ],
        "programs": [],
        "services": [
            "AWS SAM",
            "serverless computing"
        ],
        "achievement": "LLM-based misconfiguration detection for AWS Serverless Computing.",
        "url": "https://arxiv.org/abs/2411.00642"
    },
    {
        "id": "73",
        "institution": "arXiv Research: AI-Driven Cloud Computing Innovations",
        "country": "United States",
        "project": "arXiv Research: AI-Driven Cloud Computing Innovations",
        "year": "2024 (October)",
        "domains": [
            "AI/ML",
            "Computer Science"
        ],
        "programs": [],
        "services": [
            "AWS services and infrastructure"
        ],
        "achievement": "Exploring AI and cloud computing intersection for modernizing applications on AWS and Microsoft Azure.",
        "url": "https://arxiv.org/pdf/2410.15960"
    },
    {
        "id": "74",
        "institution": "arXiv Research: AWS Model Deployment Services Analysis",
        "country": "United States",
        "project": "arXiv Research: AWS Model Deployment Services Analysis",
        "year": "2024",
        "domains": [
            "Computer Science"
        ],
        "programs": [],
        "services": [
            "Amazon SageMaker",
            "Lambda",
            "ECS"
        ],
        "achievement": "Comparative analysis of AWS Model Deployment Services (SageMaker, Lambda, ECS).",
        "url": "https://arxiv.org/pdf/2405.08175"
    },
    {
        "id": "75",
        "institution": "arXiv Research: Cloud Abstractions for AI Workloads",
        "country": "United States",
        "project": "arXiv Research: Cloud Abstractions for AI Workloads",
        "year": "2024-2025",
        "domains": [
            "AI/ML"
        ],
        "programs": [],
        "services": [
            "AWS SageMaker"
        ],
        "achievement": "Discussion of MLaaS platforms like AWS SageMaker for launching and scaling training jobs.",
        "url": "https://arxiv.org/html/2501.09562v2"
    },
    {
        "id": "76",
        "institution": "arXiv Research: Serverless Infrastructure Evaluation",
        "country": "United States",
        "project": "arXiv Research: Serverless Infrastructure Evaluation",
        "year": "2024-2025",
        "domains": [
            "HPC & Infrastructure"
        ],
        "programs": [],
        "services": [
            "AWS serverless infrastructure"
        ],
        "achievement": "Empirical evaluation of serverless cloud infrastructure for large-scale data processing.",
        "url": "https://arxiv.org/html/2501.07771v1"
    },
    {
        "id": "77",
        "institution": "Wake Forest Baptist Health",
        "country": "United States",
        "project": "Radiology Education",
        "year": "2024",
        "domains": [
            "Medical",
            "Education"
        ],
        "programs": [],
        "services": [
            "AWS HealthImaging",
            "Apollo Enterprise Imaging"
        ],
        "achievement": "Making clinical content accessible to radiology students using AWS HealthImaging.",
        "url": "https://aws.amazon.com/blogs/industries/aws-for-healthcare-life-sciences-at-rsna/"
    },
    {
        "id": "78",
        "institution": "Radboud University Medical Center",
        "country": "Netherlands",
        "project": "Medical Imaging Platform",
        "year": "2021-2024 (ongoing)",
        "domains": [
            "AI/ML",
            "Medical",
            "Education"
        ],
        "programs": [],
        "services": [
            "AWS cloud infrastructure"
        ],
        "achievement": "Grand-challenge.org machine learning platform for medical imaging with 64,000+ registered users.",
        "url": "https://www.radboudumc.nl/en/news-items/2021/radboud-university-medical-center-accelerates-medical-imaging-innovation-with-aws-cloud"
    },
    {
        "id": "79",
        "institution": "King Hamad University Hospital",
        "country": "United States",
        "project": "Medical Storage (Bahrain)",
        "year": "2024",
        "domains": [
            "AI/ML",
            "Medical"
        ],
        "programs": [],
        "services": [
            "AWS storage services"
        ],
        "achievement": "Cost-effective long-term medical imaging storage solution reducing costs by 40%.",
        "url": "https://aws.amazon.com/health/solutions/medicalimaging/"
    },
    {
        "id": "80",
        "institution": "Johns Hopkins University",
        "country": "United States",
        "project": "Cancer AI Alliance",
        "year": "2024",
        "domains": [
            "AI/ML",
            "Medical",
            "Education"
        ],
        "programs": [],
        "services": [
            "AWS (part of multi-cloud CAIA platform)"
        ],
        "achievement": "Projects studying IDH-mutant glioma and astrocytoma using multi-cloud federated learning platform.",
        "url": "https://www.newswise.com/articles/johns-hopkins-researchers-launch-projects-under-the-cancer-ai-alliance"
    },
    {
        "id": "81",
        "institution": "Northern Arizona University",
        "country": "United States",
        "project": "Epidemic Modeling",
        "year": "2024",
        "domains": [
            "Medical"
        ],
        "programs": [],
        "services": [
            "Computational infrastructure"
        ],
        "achievement": "Inaugural forum on epidemiological modeling for public health stakeholders with COVID-19 pandemic response research.",
        "url": "https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2024.1357908/full"
    },
    {
        "id": "82",
        "institution": "UC Berkeley",
        "country": "United States",
        "project": "COVID-19 Forecasting",
        "year": "2020-2024",
        "domains": [
            "Medical"
        ],
        "programs": [],
        "services": [
            "AWS COVID-19 Data Lake"
        ],
        "achievement": "Forecasting COVID-19 severity for individual counties and hospitals.",
        "url": "https://aws.amazon.com/covid-19-data-lake/"
    },
    {
        "id": "83",
        "institution": "Novo Nordisk",
        "country": "United States",
        "project": "AlphaFold at Scale",
        "year": "2024",
        "domains": [
            "Genomics",
            "Medical"
        ],
        "programs": [],
        "services": [
            "AWS Batch",
            "Amazon FSx for Lustre",
            "AWS Step Functions"
        ],
        "achievement": "Deploying AlphaFold at scale for protein structure prediction in drug discovery.",
        "url": "https://aws.amazon.com/solutions/guidance/protein-folding-on-aws/"
    },
    {
        "id": "84",
        "institution": "Harvard Medical School",
        "country": "United States",
        "project": "VirtualFlow Drug Screening",
        "year": "2024",
        "domains": [
            "Medical"
        ],
        "programs": [],
        "services": [
            "AWS Cloud Credit for Research",
            "compute resources"
        ],
        "achievement": "VirtualFlow platform testing compounds through computer simulations for drug discovery.",
        "url": "https://aws.amazon.com/blogs/publicsector/new-key-unlocking-drug-discovery/"
    },
    {
        "id": "85",
        "institution": "New York University",
        "country": "United States",
        "project": "Medical Informatics Research",
        "year": "2024",
        "domains": [
            "Medical"
        ],
        "programs": [],
        "services": [
            "AWS HPC infrastructure"
        ],
        "achievement": "HPC in AWS Cloud to accelerate medical informatics research.",
        "url": "https://aws.amazon.com/health/biopharma/research/"
    },
    {
        "id": "86",
        "institution": "XtalPi",
        "country": "United States",
        "project": "Drug Discovery Acceleration",
        "year": "2024",
        "domains": [
            "Medical"
        ],
        "programs": [],
        "services": [
            "AWS compute infrastructure"
        ],
        "achievement": "Expediting drug discovery and development for hundreds of companies including 16 of world's top 20 pharmaceutical firms.",
        "url": "https://press.aboutamazon.com/2024/12/xtalpi-leverages-aws-to-enhance-drug-discovery"
    },
    {
        "id": "87",
        "institution": "University of Illinois Urbana-Champaign",
        "country": "United States",
        "project": "NAMD Molecular Modeling",
        "year": "2024",
        "domains": [
            "AI/ML",
            "Chemistry"
        ],
        "programs": [],
        "services": [
            "Amazon EC2",
            "AWS cloud infrastructure"
        ],
        "achievement": "NAMD, VMD, and molecular modeling tools adapted for AWS EC2 enabling MDFF refinement and QwikMD protocols.",
        "url": "https://www.ks.uiuc.edu/Research/cloud/"
    },
    {
        "id": "88",
        "institution": "Karagöl Research",
        "country": "United States",
        "project": "GROMACS Benchmarking",
        "year": "2024",
        "domains": [
            "Chemistry"
        ],
        "programs": [],
        "services": [
            "AWS compute instances"
        ],
        "achievement": "Benchmarking GROMACS on optimized cloud processors for molecular dynamics flexibility.",
        "url": "https://github.com/karagol-taner/Molecular-Dynamics-on-AWS-and-Cloud-Computing"
    },
    {
        "id": "89",
        "institution": "AWS Molecular Dynamics Dataset Release",
        "country": "United States",
        "project": "AWS Molecular Dynamics Dataset Release",
        "year": "2024",
        "domains": [
            "Genomics",
            "Chemistry"
        ],
        "programs": [],
        "services": [
            "AWS Open Data Registry"
        ],
        "achievement": "Comprehensive dataset featuring molecular dynamics trajectories for 16,000+ protein-ligand complexes.",
        "url": "https://aws.amazon.com/blogs/hpc/tag/molecular-modeling/"
    },
    {
        "id": "90",
        "institution": "Arizona State University",
        "country": "United States",
        "project": "AI Acceleration in Higher Ed",
        "year": "2024",
        "domains": [
            "AI/ML",
            "Education"
        ],
        "programs": [],
        "services": [
            "AWS AI/ML services"
        ],
        "achievement": "Using large language models in higher education, led by Executive Director of AI Acceleration.",
        "url": "https://aws.amazon.com/blogs/publicsector/educating-for-a-greener-future-realizing-sustainability-gains-with-aws-cloud-migration/"
    },
    {
        "id": "91",
        "institution": "University of Chicago",
        "country": "United States",
        "project": "Gen3 Data Platform",
        "year": "2024",
        "domains": [
            "Medical"
        ],
        "programs": [],
        "services": [
            "AWS cloud infrastructure"
        ],
        "achievement": "Creating Gen3 platform for biomedical data commons.",
        "url": "https://aws.amazon.com/blogs/publicsector/building-data-lake-your-university-academic-research-success/"
    },
    {
        "id": "92",
        "institution": "Toronto Metropolitan University",
        "country": "United States",
        "project": "Smart Campus Digital Twin",
        "year": "2024",
        "domains": [
            "Computer Science"
        ],
        "programs": [],
        "services": [
            "AWS cloud infrastructure (via FuseForward partnership)"
        ],
        "achievement": "Smart campus platform with digital twin model ingesting and storing 500,000 data points.",
        "url": "https://aws.amazon.com/blogs/publicsector/smart-city-solutions-built-on-aws/"
    },
    {
        "id": "93",
        "institution": "University of California System",
        "country": "United States",
        "project": "Cloud Infrastructure",
        "year": "2024 (November 30)",
        "domains": [
            "Medical",
            "Education"
        ],
        "programs": [],
        "services": [
            "AWS cloud infrastructure"
        ],
        "achievement": "Enhancing educational outcomes, powering research, and healthcare delivery; processed 245,963 applications.",
        "url": "https://procurement.ucop.edu/news/university-california-collaborates-aws-enhance-technological-innovation"
    },
    {
        "id": "94",
        "institution": "AWS Trainium UltraCluster for Universities",
        "country": "United States",
        "project": "AWS Trainium UltraCluster for Universities",
        "year": "2024",
        "domains": [
            "AI/ML"
        ],
        "programs": [
            "Trainium"
        ],
        "services": [
            "AWS Trainium",
            "Trainium UltraClusters"
        ],
        "achievement": "Petabit-scale network fabric for deep learning training.",
        "url": "https://www.hpcwire.com/solution_content/aws/aws-at-supercomputing-2023/"
    },
    {
        "id": "95",
        "institution": "RMIT University",
        "country": "United States",
        "project": "RACE Cloud Supercomputing Hub (Additional)",
        "year": "2024 (presented at SC24)",
        "domains": [
            "HPC & Infrastructure"
        ],
        "programs": [],
        "services": [
            "AWS ParallelCluster",
            "EC2",
            "storage"
        ],
        "achievement": "AWS Supercomputing Hub (RACE) providing cloud-first HPC research facility.",
        "url": "https://research-it.manchester.ac.uk/news/2025/02/03/advancing-hpc-innovation-research-it-at-sc2024/"
    },
    {
        "id": "96",
        "institution": "University of California, Berkeley",
        "country": "United States",
        "project": "BERG Brain Encoding Dataset",
        "year": "2024",
        "domains": [
            "AI/ML",
            "Neuroscience"
        ],
        "programs": [],
        "services": [
            "Registry of Open Data on AWS"
        ],
        "achievement": "Brain Encoding Response Generator (BERG) dataset for comprehensive brain encoding research.",
        "url": "https://registry.opendata.aws/"
    },
    {
        "id": "97",
        "institution": "Chinese Academy of Sciences",
        "country": "United States",
        "project": "Snow Cover Data",
        "year": "2024",
        "domains": [
            "AI/ML"
        ],
        "programs": [],
        "services": [
            "AWS Open Data",
            "satellite imagery processing"
        ],
        "achievement": "Cloud-gap-filled snow cover data products for High Mountain Asia.",
        "url": "https://aws.amazon.com/earth/"
    },
    {
        "id": "98",
        "institution": "Aberystwyth University",
        "country": "UK",
        "project": "Global Mangrove Watch",
        "year": "2024",
        "domains": [
            "Climate"
        ],
        "programs": [],
        "services": [
            "AWS Open Data Registry"
        ],
        "achievement": "Global Mangrove Watch dataset for environmental monitoring.",
        "url": "https://registry.opendata.aws/tag/earth-observation/"
    },
    {
        "id": "99",
        "institution": "The Ohio State University",
        "country": "United States",
        "project": "Agrovoltaics Research",
        "year": "2024",
        "domains": [
            "AI/ML"
        ],
        "programs": [],
        "services": [
            "AWS renewable energy projects (Amazon partnership)"
        ],
        "achievement": "Studying how to scale farming alongside large solar energy projects with 400,000+ solar panels.",
        "url": "https://www.aboutamazon.com/news/sustainability/amazon-farms-solar-wind-agrovoltaics-projects"
    },
    {
        "id": "100",
        "institution": "George Mason University",
        "country": "United States",
        "project": "Sustainable Data Center Engineering",
        "year": "2024 (fall launch)",
        "domains": [
            "AI/ML"
        ],
        "programs": [],
        "services": [
            "AWS partnership",
            "renewable energy lab"
        ],
        "achievement": "Renewable energy lab and new curriculum concentration in sustainable data center engineering.",
        "url": "https://www.gmu.edu/news/2024-03/mason-aws-partner-renewable-energy-lab-and-sustainable-data-center-engineering"
    },
    {
        "id": "101",
        "institution": "Carnegie Mellon University",
        "country": "United States",
        "project": "Catalyst Research on Trainium",
        "year": "2024",
        "domains": [
            "AI/ML"
        ],
        "programs": [
            "Trainium"
        ],
        "services": [
            "AWS Trainium",
            "Trainium UltraClusters (up to 40",
            "000 chips)"
        ],
        "achievement": "Part of AWS's $110M investment in university-led generative AI research; researchers receive up to $11M in Trainium credits.",
        "url": "https://www.aboutamazon.com/news/aws/amazon-trainium-investment-university-ai-research"
    },
    {
        "id": "102",
        "institution": "UC Berkeley",
        "country": "United States",
        "project": "Trainium AI Research Partnership",
        "year": "2024",
        "domains": [
            "AI/ML",
            "Education"
        ],
        "programs": [
            "Trainium"
        ],
        "services": [
            "AWS Trainium",
            "Trainium UltraClusters",
            "AWS Inferentia"
        ],
        "achievement": "Access to 40,000 Trainium chips for advancing machine learning research and education; one of two universities receiving up to $11M in Trainium credits.",
        "url": "https://www.aboutamazon.com/news/aws/amazon-trainium-investment-university-ai-research"
    },
    {
        "id": "102a",
        "institution": "UCLA",
        "country": "United States",
        "project": "Build on Trainium AI Research",
        "year": "2024-ongoing",
        "domains": [
            "AI/ML",
            "Education"
        ],
        "programs": [
            "Trainium",
            "Science Hub"
        ],
        "services": [
            "AWS Trainium",
            "Trainium UltraClusters",
            "EC2 Trn1 instances"
        ],
        "achievement": "Part of $110M investment program; access to dedicated 40,000-chip Trainium research cluster.",
        "url": "https://www.sciencehub.ucla.edu/opportunities/"
    },
    {
        "id": "102b",
        "institution": "MIT",
        "country": "United States",
        "project": "3D Medical Imaging with Trainium",
        "year": "2024",
        "domains": [
            "AI/ML",
            "Medical"
        ],
        "programs": [
            "Trainium"
        ],
        "services": [
            "AWS Trainium",
            "EC2 Trn1 instances"
        ],
        "achievement": "50% higher throughput and lower cost; reduced training time from months to weeks.",
        "url": "https://aws.amazon.com/ai/machine-learning/trainium/research/"
    },
    {
        "id": "102c",
        "institution": "Stanford University",
        "country": "United States",
        "project": "Build on Trainium Research",
        "year": "2024-ongoing",
        "domains": [
            "AI/ML"
        ],
        "programs": [
            "Trainium"
        ],
        "services": [
            "AWS Trainium",
            "Trainium UltraClusters"
        ],
        "achievement": "Stanford participation in Build on Trainium program for advanced AI research and development using AWS's custom ML chips.",
        "url": "https://www.aboutamazon.com/news/aws/amazon-trainium-investment-university-ai-research/"
    },
    {
        "id": "102d",
        "institution": "University of Illinois Urbana-Champaign (UIUC)",
        "country": "United States",
        "project": "Foundation Model Training",
        "year": "2024-ongoing",
        "domains": [
            "AI/ML"
        ],
        "programs": [
            "Trainium"
        ],
        "services": [
            "AWS Trainium",
            "EC2 Trn1 instances"
        ],
        "achievement": "UIUC research team investigating new training techniques and efficiency improvements for foundation models using AWS Trainium.",
        "url": "https://aws.amazon.com/ai/machine-learning/trainium/research/"
    },
    {
        "id": "102e",
        "institution": "UC Irvine",
        "country": "United States",
        "project": "Trainium Research",
        "year": "2024-ongoing",
        "domains": [
            "AI/ML"
        ],
        "programs": [
            "Trainium"
        ],
        "services": [
            "AWS Trainium",
            "Trainium UltraClusters"
        ],
        "achievement": "University of California, Irvine research team investigating training techniques and efficiency improvements for AI models on Trainium infrastructure.",
        "url": "https://aws.amazon.com/ai/machine-learning/trainium/research/"
    },
    {
        "id": "102f",
        "institution": "Waseda University",
        "country": "Japan",
        "project": "Vision-Language AI Acceleration",
        "year": "2024-ongoing",
        "domains": [
            "AI/ML"
        ],
        "programs": [
            "Trainium"
        ],
        "services": [
            "AWS Trainium",
            "EC2 Trn1 instances"
        ],
        "achievement": "Part of international Build on Trainium program expanding AWS research partnerships to Asia.",
        "url": "https://aws.amazon.com/ai/machine-learning/trainium/research/"
    },
    {
        "id": "102g",
        "institution": "Kingston University London",
        "country": "UK",
        "project": "Genomics AI Research",
        "year": "2024-ongoing",
        "domains": [
            "Genomics",
            "AI/ML"
        ],
        "programs": [
            "Trainium"
        ],
        "services": [
            "AWS Trainium",
            "EC2 Trn1 instances"
        ],
        "achievement": "Kingston University London using language models on AWS Trainium for non-coding DNA variant analysis.",
        "url": "https://aws.amazon.com/ai/machine-learning/trainium/research/"
    },
    {
        "id": "103",
        "institution": "Multiple Universities",
        "country": "United States",
        "project": "Amazon Research Awards Spring 2023 (Generative AI)",
        "year": "2023",
        "domains": [
            "AI/ML"
        ],
        "programs": [],
        "services": [
            "AWS AI/ML services",
            "Amazon public datasets",
            "AWS promotional credits"
        ],
        "achievement": "Highest number of submissions for a single ARA call for proposals since program inception.",
        "url": "https://www.amazon.science/research-awards/program-updates/amazon-research-awards-spring-2023-generative-ai-cfp-recipients-announced"
    },
    {
        "id": "104",
        "institution": "Carnegie Mellon University",
        "country": "United States",
        "project": "CyLab Automated Reasoning Research",
        "year": "2023",
        "domains": [
            "Other"
        ],
        "programs": [],
        "services": [
            "AWS promotional credits",
            "Amazon public datasets"
        ],
        "achievement": "Part of 78 recipients representing 54 universities in 14 countries.",
        "url": "https://www.cylab.cmu.edu/news/2023/04/26-faculty-earn-amazon-research-awards.html"
    },
    {
        "id": "105",
        "institution": "Carnegie Mellon Tepper School",
        "country": "United States",
        "project": "Fairness in AI Research",
        "year": "2023",
        "domains": [
            "AI/ML"
        ],
        "programs": [],
        "services": [
            "AWS promotional credits",
            "AWS AI/ML tools"
        ],
        "achievement": "Yan Huang's Amazon Research Award for fairness in artificial intelligence.",
        "url": "https://www.cmu.edu/news/stories/archives/2023/may/tepper-school-faculty-member-wins-amazon-research-award-for-ai-work"
    },
    {
        "id": "106",
        "institution": "UC Irvine",
        "country": "United States",
        "project": "Cybersecurity AI Research",
        "year": "2023",
        "domains": [
            "AI/ML",
            "Education"
        ],
        "programs": [],
        "services": [
            "AWS promotional credits",
            "AWS security tools"
        ],
        "achievement": "Zhou Li's Amazon Research Award for making organizational cyberenvironments safer through AI and machine learning.",
        "url": "https://engineering.uci.edu/news/2023/2/uci-engineering-computer-scientist-wins-amazon-research-award"
    },
    {
        "id": "107",
        "institution": "Columbia University",
        "country": "United States",
        "project": "Fall 2023 Research Awards",
        "year": "2023",
        "domains": [
            "Other"
        ],
        "programs": [],
        "services": [
            "AWS promotional credits",
            "Amazon public datasets"
        ],
        "achievement": "Part of 98 Fall 2023 recipients representing 51 universities in 15 countries.",
        "url": "https://www.engineering.columbia.edu/about/news/three-columbia-engineering-researchers-win-amazon-research-awards"
    },
    {
        "id": "108",
        "institution": "MIT",
        "country": "United States",
        "project": "Amazon Science Hub 2023 Awards",
        "year": "2023",
        "domains": [
            "AI/ML",
            "Education",
            "Robotics"
        ],
        "programs": [
            "Science Hub"
        ],
        "services": [
            "AWS cloud computing",
            "AWS research credits"
        ],
        "achievement": "Projects advance safe deployment of machine-learned models in autonomous systems and efficient ML on edge devices.",
        "url": "https://www.amazon.science/news-and-features/amazon-and-mit-announce-science-hub-2023-gift-project-awards-and-fellowships"
    },
    {
        "id": "109",
        "institution": "UCLA Science Hub",
        "country": "United States",
        "project": "2023 AI Research Awards",
        "year": "2023 (announced February 2024)",
        "domains": [
            "AI/ML"
        ],
        "programs": [
            "Science Hub"
        ],
        "services": [
            "AWS cloud computing",
            "AWS AI/ML services"
        ],
        "achievement": "Five UCLA professors (Kai-Wei Chang, Nanyun Peng, Cho-Jui Hsieh, Chenfanfu Jiang, Jens Palsberg) received Science Hub for Humanity and AI awards for p",
        "url": "https://www.amazon.science/news-and-features/amazon-and-ucla-announce-2023-science-hub-awards"
    },
    {
        "id": "110",
        "institution": "UCLA Science Hub",
        "country": "United States",
        "project": "Healthcare AI Applications",
        "year": "2023 (announced November 2023)",
        "domains": [
            "AI/ML",
            "Medical"
        ],
        "programs": [
            "Science Hub"
        ],
        "services": [
            "AWS AI/ML services",
            "AWS healthcare cloud"
        ],
        "achievement": "Four researchers (Adrian Au, Jonathan Kao, Ying Nian Wu, Ricky Savjani) exploring practical applications of AI in healthcare through the Science Hub.",
        "url": "https://www.amazon.science/news-and-features/amazon-ucla-announce-recipients-of-gift-awards-for-applications-of-ai-in-healthcare"
    },
    {
        "id": "111",
        "institution": "Virginia Tech",
        "country": "United States",
        "project": "Amazon AI/ML Research Initiative",
        "year": "2023-2024",
        "domains": [
            "AI/ML",
            "Education"
        ],
        "programs": [],
        "services": [
            "AWS Trainium credits",
            "AWS AI/ML services"
        ],
        "achievement": "Minsu Kim's research builds green, sustainable, and robust federated-learning solutions for AI-embedded products.",
        "url": "https://www.amazon.science/news-and-features/amazon-and-virginia-tech-announce-2023-2024-fellowship-faculty-research-award-recipients"
    },
    {
        "id": "112",
        "institution": "University of Washington",
        "country": "United States",
        "project": "Amazon Science Hub Launch",
        "year": "2023-ongoing",
        "domains": [
            "AI/ML",
            "Education",
            "Robotics"
        ],
        "programs": [
            "Science Hub"
        ],
        "services": [
            "AWS Cloud computing",
            "AWS cloud credits for research"
        ],
        "achievement": "$25M ten-year collaboration launched March 2023 supporting collaborative research, education, and outreach in AI, robotics, and engineering. Funds fel",
        "url": "https://www.sciencehub.uw.edu/news-events/"
    },
    {
        "id": "113",
        "institution": "Max Planck Society",
        "country": "United States",
        "project": "Amazon Science Hub Sustainability Awards",
        "year": "2023 (June)",
        "domains": [
            "AI/ML",
            "Climate"
        ],
        "programs": [
            "Science Hub"
        ],
        "services": [
            "AWS cloud computing"
        ],
        "achievement": "Two researchers (Joerg Stueckler, Dirk Ponge) received gift funding for sustainability-focused AI research projects aimed at minimizing waste. Part of",
        "url": "https://www.amazon.science/news-and-features/amazon-and-max-planck-society-announce-science-hub-sustainability-project-awards"
    },
    {
        "id": "114",
        "institution": "University of Alberta",
        "country": "United States",
        "project": "AI Discovery Place",
        "year": "2024 (January announcement)",
        "domains": [
            "AI/ML",
            "Education",
            "Computer Science"
        ],
        "programs": [],
        "services": [
            "AWS Cloud computing",
            "AWS AI/ML services"
        ],
        "achievement": "Builds on partnership that started in 2016; leverages Calgary data centre hub opened December 2023.",
        "url": "https://www.ualberta.ca/en/folio/2024/01/amazon-web-services-u-of-a-team-up.html"
    },
    {
        "id": "115",
        "institution": "McMaster University",
        "country": "United States",
        "project": "Health Sciences Data Protection",
        "year": "2023",
        "domains": [
            "Medical"
        ],
        "programs": [],
        "services": [
            "Amazon EC2",
            "Amazon EBS",
            "AWS Lambda"
        ],
        "achievement": "Reduced costs by 50%, gained 85% more efficiency, migrated in 7 hours from on-premises backup.",
        "url": "https://aws.amazon.com/partners/success/mcmaster-university-clumio/"
    },
    {
        "id": "116",
        "institution": "University of British Columbia",
        "country": "United States",
        "project": "RONIN HPC Platform & Serratus Project",
        "year": "2023-ongoing",
        "domains": [
            "Genomics"
        ],
        "programs": [
            "RONIN"
        ],
        "services": [
            "AWS EC2",
            "AWS compute infrastructure via RONIN"
        ],
        "achievement": "75% CPU efficiency; democratizes access to HPC for researchers without cloud expertise.",
        "url": "https://aws.amazon.com/blogs/publicsector/accelerating-economic-research-ubc-high-performance-computing-ronin-aws/"
    },
    {
        "id": "117",
        "institution": "University of British Columbia",
        "country": "United States",
        "project": "Cloud Innovation Centre",
        "year": "2020-ongoing",
        "domains": [
            "Medical",
            "Education"
        ],
        "programs": [],
        "services": [
            "AWS management services",
            "AWS cloud infrastructure"
        ],
        "achievement": "UBC Cloud Innovation Centre (CIC) collaboration with AWS opened January 2020, producing 50+ prototypes in healthcare, education, and research sectors.",
        "url": "https://aws.amazon.com/blogs/publicsector/university-of-british-columbia-cloud-innovation-centre-governing-an-innovation-hub-using-aws-management-services/"
    },
    {
        "id": "118",
        "institution": "Arizona State University",
        "country": "United States",
        "project": "AI Cloud Innovation Center",
        "year": "2023 (announced at re:Invent 2023)",
        "domains": [
            "AI/ML",
            "Education"
        ],
        "programs": [],
        "services": [
            "AWS cloud infrastructure",
            "AWS AI services"
        ],
        "achievement": "Launch of ASU Artificial Intelligence Cloud Innovation Center (CIC) powered by AWS to help global government agencies, education institutions, and non",
        "url": "https://aws.amazon.com/blogs/publicsector/dave-levy-reinvent-innovation-talk-highlights/"
    },
    {
        "id": "119",
        "institution": "Case Western Reserve University",
        "country": "United States",
        "project": "Cloud Analytics Platform",
        "year": "2023 (February)",
        "domains": [
            "HPC & Infrastructure"
        ],
        "programs": [],
        "services": [
            "AWS cloud services"
        ],
        "achievement": "CWRU created opportunities for evolution through AWS Cloud services for campus-wide analytics and institutional research.",
        "url": "https://aws.amazon.com/blogs/publicsector/advanced-analytics-improve-efficiency-provide-important-student-insights-higher-education-institutions/"
    },
    {
        "id": "120",
        "institution": "Indiana University",
        "country": "United States",
        "project": "Automated Transcription Service",
        "year": "2023 (late)",
        "domains": [
            "HPC & Infrastructure"
        ],
        "programs": [],
        "services": [
            "AWS transcription services",
            "AWS secure infrastructure"
        ],
        "achievement": "Indiana University's Automated Transcription Service (ATS) launched university-wide for social science research, providing secure automated transcript",
        "url": "https://aws.amazon.com/blogs/publicsector/indiana-university-streamlines-social-science-research-with-secure-automated-transcription-on-aws/"
    },
    {
        "id": "121",
        "institution": "University of Arizona",
        "country": "United States",
        "project": "KMap AI-Powered Discovery",
        "year": "2023-ongoing",
        "domains": [
            "AI/ML"
        ],
        "programs": [],
        "services": [
            "AWS AI services",
            "AWS cloud infrastructure"
        ],
        "achievement": "KMap system transforms research collaboration with AI-powered discovery on AWS, enabling researchers to discover connections across disparate knowledg",
        "url": "https://aws.amazon.com/blogs/publicsector/how-the-university-of-arizonas-kmap-transforms-research-collaboration-with-ai-powered-discovery-on-aws/"
    },
    {
        "id": "122",
        "institution": "Stanford University",
        "country": "United States",
        "project": "AIMI AWS Cloud Credit Program",
        "year": "2023-ongoing",
        "domains": [
            "AI/ML",
            "Medical"
        ],
        "programs": [],
        "services": [
            "AWS Cloud Credit for Research Program"
        ],
        "achievement": "Stanford's Center for Artificial Intelligence in Medicine & Imaging (AIMI) collaborates with AWS to offer researchers cloud credits up to $25,000 for ",
        "url": "https://aimi.stanford.edu/aws-cloud-credit-program"
    },
    {
        "id": "123",
        "institution": "Washington University in St. Louis",
        "country": "United States",
        "project": "Global PM2.5 Air Quality Data",
        "year": "1998-2023 (ongoing updates)",
        "domains": [
            "AI/ML",
            "Medical",
            "Climate"
        ],
        "programs": [
            "Open Data"
        ],
        "services": [
            "AWS Registry of Open Data",
            "Amazon S3",
            "Amazon Sustainability Data Initiative (ASDI)"
        ],
        "achievement": "Provides global air quality data freely accessible to researchers worldwide; supports environmental and public health assessments across multiple NASA satellite instruments.",
        "url": "https://registry.opendata.aws/surface-pm2-5-v6gl/"
    },
    {
        "id": "124",
        "institution": "Cornell University",
        "country": "United States",
        "project": "Climate Simulation Research (ASDI)",
        "year": "2023-ongoing",
        "domains": [
            "Genomics",
            "Medical",
            "Climate"
        ],
        "programs": [
            "ASDI"
        ],
        "services": [
            "Amazon Sustainability Data Initiative (ASDI)",
            "AWS cloud computing",
            "HPC solutions"
        ],
        "achievement": "Using NCAR's Community Earth System Model Version 2 with AWS cloud resources and technical support for sophisticated climate modeling.",
        "url": "https://www.aboutamazon.com/news/sustainability/amazons-sustainable-data-initiative-helps-advance-climate-research"
    },
    {
        "id": "125",
        "institution": "Rutgers University",
        "country": "United States",
        "project": "Climate Intervention Research (ASDI)",
        "year": "2023-ongoing",
        "domains": [
            "AI/ML",
            "Climate"
        ],
        "programs": [
            "ASDI"
        ],
        "services": [
            "Amazon Sustainability Data Initiative (ASDI)",
            "AWS HPC infrastructure"
        ],
        "achievement": "Rutgers research team using Amazon Sustainability Data Initiative resources for climate simulation studies examining Earth and human system impacts in",
        "url": "https://www.aboutamazon.com/news/sustainability/amazons-sustainable-data-initiative-helps-advance-climate-research"
    },
    {
        "id": "126",
        "institution": "Colorado State University",
        "country": "United States",
        "project": "Climate Modeling (ASDI)",
        "year": "2023-ongoing",
        "domains": [
            "Climate"
        ],
        "programs": [
            "ASDI"
        ],
        "services": [
            "Amazon Sustainability Data Initiative (ASDI)",
            "AWS cloud computing"
        ],
        "achievement": "Access to next-generation high performance computing solutions for climate research.",
        "url": "https://www.aboutamazon.com/news/sustainability/amazons-sustainable-data-initiative-helps-advance-climate-research"
    },
    {
        "id": "127",
        "institution": "University of Washington",
        "country": "United States",
        "project": "ASDI Climate Research",
        "year": "2023-ongoing",
        "domains": [
            "Climate"
        ],
        "programs": [
            "ASDI"
        ],
        "services": [
            "Amazon Sustainability Data Initiative (ASDI)",
            "AWS cloud infrastructure"
        ],
        "achievement": "University of Washington research team participating in climate research program using ASDI resources, studying climate and climate-intervention respo",
        "url": "https://www.aboutamazon.com/news/sustainability/amazons-sustainable-data-initiative-helps-advance-climate-research"
    },
    {
        "id": "128",
        "institution": "Cornell University",
        "country": "United States",
        "project": "AI-Powered Socratic Dialogue Chat",
        "year": "2024 (spring PoC, fall deployment)",
        "domains": [
            "AI/ML",
            "Education"
        ],
        "programs": [
            "GenAI"
        ],
        "services": [
            "AWS Generative AI Innovation Center",
            "Amazon Bedrock",
            "AWS Professional Services"
        ],
        "achievement": "Successfully deployed campus-wide AI learning assistant; part of four-project Cornell-AWS GenAI collaboration.",
        "url": "https://aws.amazon.com/blogs/publicsector/transforming-classroom-conversations-cornell-universitys-ai-powered-socratic-chat-on-aws/"
    },
    {
        "id": "129",
        "institution": "Weill Cornell Medicine",
        "country": "United States",
        "project": "Medical Archive Digitization with GenAI",
        "year": "2024",
        "domains": [
            "AI/ML",
            "Medical"
        ],
        "programs": [
            "GenAI"
        ],
        "services": [
            "AWS Generative AI Innovation Center",
            "generative AI services"
        ],
        "achievement": "Weill Cornell Medicine partnered with AWS Generative AI Innovation Center in May 2024 to digitize historical medical archives using generative AI, pre",
        "url": "https://aws.amazon.com/blogs/publicsector/weill-cornell-medicine-digitizes-historical-medical-archives-with-generative-ai-on-aws/"
    },
    {
        "id": "130",
        "institution": "Dartmouth College",
        "country": "United States",
        "project": "Claude for Education Partnership",
        "year": "2025 (announced December)",
        "domains": [
            "AI/ML",
            "Education"
        ],
        "programs": [],
        "services": [
            "Amazon Bedrock",
            "Claude for Education (via Anthropic partnership)"
        ],
        "achievement": "First Ivy League institution-scale AI deployment; historically significant (Dartmouth hosted 1956 conference that created AI as a discipline).",
        "url": "https://home.dartmouth.edu/news/2025/12/dartmouth-announces-ai-partnership-anthropic-and-aws"
    },
    {
        "id": "131",
        "institution": "University of Oxford",
        "country": "United States",
        "project": "APAD Air Pollution Detection",
        "year": "2024 (May launch, November open data release)",
        "domains": [
            "AI/ML",
            "Climate"
        ],
        "programs": [],
        "services": [
            "Amazon EC2 C5 Instances",
            "Amazon EC2 G4 Instances (NVIDIA T4 GPUs)",
            "AWS Registry of Open Data"
        ],
        "achievement": "Increased processing throughput by 400% (5,000 to 30,000 square miles/day); made data open source on AWS Registry of Open Data in November 2024.",
        "url": "https://aws.amazon.com/solutions/case-studies/oxford-apad-case-study/"
    },
    {
        "id": "132",
        "institution": "University of Oxford",
        "country": "United States",
        "project": "GLAM Museum Collections ML Cataloging",
        "year": "2023-2024",
        "domains": [
            "AI/ML",
            "Education",
            "Cultural Heritage"
        ],
        "programs": [],
        "services": [
            "Amazon SageMaker",
            "Amazon EC2 P3 Instances (NVIDIA V100 GPUs)",
            "Amazon EC2 G4 Instances"
        ],
        "achievement": "90% cost reduction using Spot Instances (10% of On-Demand pricing); 50% faster training time; framework-agnostic implementation with PyTorch.",
        "url": "https://aws.amazon.com/solutions/case-studies/oxford-case-study/"
    },
    {
        "id": "133",
        "institution": "Seoul National University",
        "country": "United States",
        "project": "Steinegger Lab Bioinformatics Datasets",
        "year": "2023-ongoing",
        "domains": [
            "Genomics"
        ],
        "programs": [],
        "services": [
            "AWS Registry of Open Data",
            "Amazon S3"
        ],
        "achievement": "Includes MMseqs2 datasets (UniRef30, BFD, ColabFold environmental databases) and Foldseek datasets (AlphaFold Database, PDB, SwissProt, CATH) for protein structure analysis.",
        "url": "https://registry.opendata.aws/steineggerlab/"
    },
    {
        "id": "134",
        "institution": "University of Colorado Boulder",
        "country": "United States",
        "project": "DANRA Meteorological Reanalysis",
        "year": "1990-2023 (dataset coverage)",
        "domains": [
            "Climate",
            "Astronomy",
            "Education"
        ],
        "programs": [],
        "services": [
            "AWS Registry of Open Data",
            "Amazon S3",
            "Amazon Sustainability Data Initiative (ASDI)"
        ],
        "achievement": "Space Weather Technology, Research and Education Center (TREC) manages DANRA, a high-resolution meteorological reanalysis dataset for Denmark and Nort",
        "url": "https://registry.opendata.aws/collab/asdi/"
    },
    {
        "id": "135",
        "institution": "NASA HEASARC",
        "country": "United States",
        "project": "High Energy Astrophysics Data",
        "year": "2023-ongoing",
        "domains": [
            "AI/ML",
            "Astronomy",
            "Physics"
        ],
        "programs": [],
        "services": [
            "AWS Registry of Open Data",
            "Amazon S3",
            "NASA Space Act Agreement"
        ],
        "achievement": "Free cloud access without egress costs; weekly data synchronization; enables Fornax Initiative cloud analysis capabilities.",
        "url": "https://heasarc.gsfc.nasa.gov/docs/archive/cloud.html"
    },
    {
        "id": "136",
        "institution": "Institut Pasteur",
        "country": "United States",
        "project": "Logan SRA Genome Assembly",
        "year": "2023 (December freeze)",
        "domains": [
            "Genomics",
            "AI/ML"
        ],
        "programs": [],
        "services": [
            "AWS Batch",
            "AWS Graviton",
            "Amazon S3"
        ],
        "achievement": "Assembled 27.3 million accessions (96% of SRA); 20-100x smaller size than original; 30-hour processing time; supports IndexThePlanet five-year ERC project.",
        "url": "https://registry.opendata.aws/pasteur-logan/"
    },
    {
        "id": "137",
        "institution": "Singapore Eye Research Institute",
        "country": "United States",
        "project": "Retinal Disease Classification with AutoML",
        "year": "2024 (February)",
        "domains": [
            "AI/ML",
            "Medical"
        ],
        "programs": [],
        "services": [
            "Amazon Rekognition (AutoML)",
            "AWS cloud infrastructure"
        ],
        "achievement": "Peer-reviewed study showing clinical-grade diagnostic performance for retinal disease classification using AWS AutoML.",
        "url": "https://aws.amazon.com/blogs/publicsector/singapore-eye-research-institute-categorizes-retinal-diseases-using-amazon-rekognition/"
    },
    {
        "id": "138",
        "institution": "ETH Zurich & EPFL",
        "country": "United States",
        "project": "Apertus Open-Source Multilingual LLM",
        "year": "2024-2025",
        "domains": [
            "AI/ML"
        ],
        "programs": [],
        "services": [
            "Amazon SageMaker AI",
            "AWS Europe (Zurich) Region"
        ],
        "achievement": "Open-source multilingual LLM accessible via AWS infrastructure; part of Swiss National AI Institute (SNAI) backed by CHF 20M funding (2025-2028).",
        "url": "https://aws.amazon.com/blogs/alps/switzerlands-open-source-apertus-llms-now-available-on-amazon-sagemaker-ai/"
    },
    {
        "id": "139",
        "institution": "IU International University of Applied Sciences",
        "country": "Germany",
        "project": "EdTech Cloud Migration",
        "year": "2020-ongoing (active through 2024)",
        "domains": [
            "Genomics",
            "AI/ML",
            "Education",
            "Conservation"
        ],
        "programs": [],
        "services": [
            "38 AWS services",
            "Europe (Frankfurt) Region"
        ],
        "achievement": "Supports 100K+ students globally; sustainability-focused infrastructure; student-centered operations at scale.",
        "url": "https://aws.amazon.com/solutions/case-studies/iu-international-university-of-applied-sciences/"
    },
    {
        "id": "140",
        "institution": "NGI Sweden / SciLifeLab",
        "country": "United States",
        "project": "Genomics Cloud Computing Infrastructure",
        "year": "2024-ongoing",
        "domains": [
            "Genomics",
            "Computer Science"
        ],
        "programs": [],
        "services": [
            "AWS compute",
            "storage",
            "database services; AWS-iGenomes Reference genomes on S3"
        ],
        "achievement": "Enables researchers to process complex genomics workloads cost-effectively; supports Europe's largest sequencing facility operations.",
        "url": "https://ngisweden.scilifelab.se/events/aws-in-spotlight-webinar-series/"
    },
    {
        "id": "146",
        "institution": "University of Sheffield",
        "country": "UK",
        "project": "Data Connect Trusted Research Environment",
        "year": "2021-present",
        "domains": [
            "Medical"
        ],
        "programs": [
            "RONIN"
        ],
        "services": [
            "AWS infrastructure (via RONIN)",
            "compute",
            "storage"
        ],
        "achievement": "Achieved ISO 27001 certification and UK SATRE framework compliance; reduced duplication across research groups; achieved cost recovery within first year; researchers previously spent up to 75% of grant time trying to access data.",
        "url": "https://aws.amazon.com/blogs/publicsector/unlocking-research-potential-how-the-university-of-sheffield-and-ronin-accelerate-secure-research-through-data-connect/"
    },
    {
        "id": "147",
        "institution": "San Francisco State University",
        "country": "United States",
        "project": "FEATURE Protein Functional Site Prediction",
        "year": "Early 2020s",
        "domains": [
            "Genomics",
            "AI/ML",
            "Education",
            "Computer Science",
            "Chemistry"
        ],
        "programs": [],
        "services": [
            "Amazon EC2",
            "Amazon EBS (Elastic Block Store)"
        ],
        "achievement": "Amazon EC2 vastly superior in CPU cycles per cost compared to existing infrastructure; experiments that used to take weeks now run overnight.",
        "url": "https://aws.amazon.com/solutions/case-studies/san-francisco-state-university/"
    },
    {
        "id": "148",
        "institution": "UC Santa Cruz Genomics Institute",
        "country": "United States",
        "project": "Toil Workflow System",
        "year": "Early 2020s",
        "domains": [
            "Genomics"
        ],
        "programs": [],
        "services": [
            "Amazon EC2",
            "AWS infrastructure"
        ],
        "achievement": "Accelerated genomics analysis from months to days; created widely-used open-source workflow tool for scientific computing.",
        "url": "https://aws.amazon.com/solutions/case-studies/uc-santa-cruz-genomics-institute/"
    },
    {
        "id": "149",
        "institution": "Harvard Medical School",
        "country": "United States",
        "project": "Patient Simulation with Spot Instances",
        "year": "2021 (February)",
        "domains": [
            "AI/ML",
            "Medical",
            "Computer Science"
        ],
        "programs": [],
        "services": [
            "Amazon EC2 Spot Instances"
        ],
        "achievement": "Achieved over 50% cost savings using Spot Instances for computational biomedical research.",
        "url": "https://aws.amazon.com/blogs/aws/scientific-computing-with-ec2-spot-instances/"
    },
    {
        "id": "150",
        "institution": "Princeton University",
        "country": "United States",
        "project": "AWS Research Computing Training",
        "year": "2021",
        "domains": [
            "AI/ML"
        ],
        "programs": [],
        "services": [
            "AWS compute",
            "storage",
            "various research services"
        ],
        "achievement": "Institutional AWS training program enabling researchers across disciplines to leverage cloud computing; AWS Enterprise Agreement with 15% data egress discount for qualified researchers.",
        "url": "https://researchcomputing.princeton.edu/events/2021/primer-amazon-web-services-aws"
    },
    {
        "id": "151",
        "institution": "Johns Hopkins APL",
        "country": "United States",
        "project": "BossDB Neuroscience Data Platform",
        "year": "2021 (July)",
        "domains": [
            "AI/ML",
            "Physics",
            "Neuroscience"
        ],
        "programs": [
            "Open Data"
        ],
        "services": [
            "AWS Lambda",
            "Amazon DynamoDB",
            "Amazon S3"
        ],
        "achievement": "Cloud-native neuroscience data ecosystem enabling worldwide access to brain mapping data.",
        "url": "https://www.jhuapl.edu/news/news-releases/210722b-BossDB-Amazon-Web-Services-brain-neuroscience"
    },
    {
        "id": "152",
        "institution": "Carnegie Mellon University",
        "country": "United States",
        "project": "Amazon Graduate Research Fellows Program",
        "year": "2021-2022",
        "domains": [
            "AI/ML",
            "Education",
            "Robotics"
        ],
        "programs": [],
        "services": [
            "Amazon Research funding",
            "AWS research infrastructure"
        ],
        "achievement": "Multi-year fellowship program supporting graduate students at one of top CS programs; 10+ fellows across two cohorts.",
        "url": "https://www.amazon.science/academic-engagements/new-amazon-graduate-research-fellows-announced-at-carnegie-mellon"
    },
    {
        "id": "153",
        "institution": "MIT",
        "country": "United States",
        "project": "MIT-Amazon Science Hub",
        "year": "2021-present",
        "domains": [
            "AI/ML",
            "Education",
            "Robotics"
        ],
        "programs": [
            "Science Hub"
        ],
        "services": [
            "Amazon Science Hub funding",
            "AWS research infrastructure"
        ],
        "achievement": "Major 5-year research partnership; 2022 symposium featured current collaborations, Amazon Fellows, roundtables on robotics and conversational AI.",
        "url": "https://www.amazon.science/news-and-features/amazon-and-mit-research-symposium-focused-on-cutting-edge-technology"
    },
    {
        "id": "154",
        "institution": "Georgia Tech",
        "country": "United States",
        "project": "Cloud Computing Research Credits Program",
        "year": "2021-2022",
        "domains": [
            "AI/ML",
            "Education",
            "Computer Science"
        ],
        "programs": [],
        "services": [
            "AWS cloud computing credits",
            "compute and storage services"
        ],
        "achievement": "Institutional cloud credits program enabling faculty across computer science to integrate AWS into coursework and research projects.",
        "url": "https://research.gatech.edu/data/cloud-computing-credit-awards"
    },
    {
        "id": "155",
        "institution": "Northwestern University",
        "country": "United States",
        "project": "Kellogg School Data Pipeline Architecture",
        "year": "2021",
        "domains": [
            "Genomics"
        ],
        "programs": [],
        "services": [
            "AWS data storage and compute",
            "Globus integration"
        ],
        "achievement": "Multi-platform data pipeline bridging on-premises HPC and AWS cloud for complex research workflows.",
        "url": "https://sites.northwestern.edu/researchcomputing/2022/03/04/2021-computational-research-services-annual-report/"
    },
    {
        "id": "156",
        "institution": "University of Washington",
        "country": "United States",
        "project": "UW-Amazon Science Hub",
        "year": "2022-present",
        "domains": [
            "AI/ML",
            "Education",
            "Computer Science",
            "Robotics"
        ],
        "programs": [
            "Science Hub"
        ],
        "services": [
            "Amazon Science Hub funding",
            "AWS Cloud Credits for Research"
        ],
        "achievement": "$1.9M multi-year partnership focusing on foundational and emerging technologies; AWS Research Credits Program with substantial computing awards.",
        "url": "https://www.amazon.science/news-and-features/amazon-and-university-of-washington-announce-new-science-hub-fellows-and-research-awards"
    },
    {
        "id": "157",
        "institution": "Johns Hopkins University",
        "country": "United States",
        "project": "JHU + Amazon Initiative for Interactive AI",
        "year": "2022-2027",
        "domains": [
            "AI/ML",
            "Education"
        ],
        "programs": [],
        "services": [
            "Amazon Research funding",
            "AWS infrastructure"
        ],
        "achievement": "Major 5-year partnership with one of top research universities (JHU: $3.4B R&D spending, #1 NSF HERD); focuses on interactive AI research.",
        "url": "https://hub.jhu.edu/2022/04/07/amazon-whiting-school-collaboration-for-artificial-intelligence/"
    },
    {
        "id": "158",
        "institution": "Stanford University",
        "country": "United States",
        "project": "Snyder Lab Deep Data Research Computing Center",
        "year": "2022",
        "domains": [
            "Medical"
        ],
        "programs": [],
        "services": [
            "AWS compute",
            "storage",
            "database services"
        ],
        "achievement": "Personal health data platform for precision medicine research; supports Dr. Snyder's work on early disease detection (previously demonstrated COVID-19 smartwatch detection).",
        "url": "https://med.stanford.edu/snyderlab/news/2022-snyder-lab-launches-deep-data-research-computing-center.html"
    },
    {
        "id": "159",
        "institution": "Columbia University",
        "country": "United States",
        "project": "Center for AI Technology (CAIT) Research Fellows",
        "year": "2021-present",
        "domains": [
            "AI/ML"
        ],
        "programs": [],
        "services": [
            "Amazon Research funding",
            "AWS AI/ML services"
        ],
        "achievement": "$5M partnership supporting PhD fellowships, faculty-led research with postdocs, collaborative events; Amazon research teams (Alexa, AWS, SCOT, IPC, SAAR) located in NYC.",
        "url": "https://www.amazon.science/academic-engagements/amazon-teams-up-with-columbia-university-for-research-showcase"
    },
    {
        "id": "160",
        "institution": "Yale University",
        "country": "United States",
        "project": "SpinupPlus Secure Research Computing Platform",
        "year": "2021-2022",
        "domains": [
            "Medical"
        ],
        "programs": [],
        "services": [
            "Amazon EC2",
            "AWS security and compliance services",
            "AWS infrastructure"
        ],
        "achievement": "Enterprise-grade AWS research platform meeting HIPAA and institutional compliance requirements; enables rapid deployment of secure computing environments.",
        "url": "https://research.yale.edu/announcements/new-secure-research-computing-platforms-available-large-scale-data-analysis"
    },
    {
        "id": "161",
        "institution": "University of California Irvine",
        "country": "United States",
        "project": "Petabyte-Scale Research Data Backup",
        "year": "2021-present",
        "domains": [
            "AI/ML"
        ],
        "programs": [],
        "services": [
            "Amazon S3",
            "S3 Glacier Deep Archive",
            "Amazon CloudWatch"
        ],
        "achievement": "Centralized backup solution for decentralized research labs at scale; efficient cost model for petabyte-scale research data protection.",
        "url": "https://aws.amazon.com/blogs/storage/university-of-california-irvine-backs-up-petabytes-of-research-data-to-aws/"
    },
    {
        "id": "162",
        "institution": "UC Santa Cruz Genomics Institute",
        "country": "United States",
        "project": "Dockstore AWS Integration",
        "year": "2022 (April)",
        "domains": [
            "Genomics"
        ],
        "programs": [],
        "services": [
            "Amazon Genomics CLI",
            "AWS compute infrastructure",
            "workflow execution services"
        ],
        "achievement": "Democratized access to cloud-based genomics analysis; enabled rapid execution of complex bioinformatics workflows without cloud expertise.",
        "url": "https://news.ucsc.edu/2022/04/dockstore-aws-integration/"
    },
    {
        "id": "163",
        "institution": "Baylor College of Medicine",
        "country": "United States",
        "project": "All of Us Research Genomics Scaling",
        "year": "2021-2024",
        "domains": [
            "Genomics",
            "Medical"
        ],
        "programs": [],
        "services": [
            "AWS Step Functions",
            "AWS Batch",
            "AWS Lambda"
        ],
        "achievement": "Reduced bioinformatic analysis from 80 hours to 2 hours per sample; scaled to unprecedented production levels using AWS serverless and batch compute.",
        "url": "https://aws.amazon.com/blogs/publicsector/building-resilient-scalable-clinical-genomics-pipeline-aws/"
    },
    {
        "id": "164",
        "institution": "North Carolina State University",
        "country": "United States",
        "project": "NCICS Climate Data Analysis",
        "year": "2021-2022",
        "domains": [
            "AI/ML",
            "Climate"
        ],
        "programs": [
            "ASDI"
        ],
        "services": [
            "AWS Batch",
            "Amazon EC2",
            "Array Jobs"
        ],
        "achievement": "Completed albedo processing 50x faster on AWS than on-premises at less than 1/6th the cost; processed 100-member temperature ensemble in 6.5 days vs. over a month locally.",
        "url": "https://aws.amazon.com/blogs/publicsector/embracing-the-cloud-for-climate-research/"
    },
    {
        "id": "165",
        "institution": "University of Minnesota",
        "country": "United States",
        "project": "Mental Health Machine Learning",
        "year": "2022",
        "domains": [
            "AI/ML",
            "Medical",
            "Education"
        ],
        "programs": [],
        "services": [
            "AWS AI/ML services",
            "AWS promotional credits",
            "compute infrastructure"
        ],
        "achievement": "Applied machine learning techniques to sensitive mental health data annotation and analysis.",
        "url": "https://cse.umn.edu/cs/news/stevie-chancellor-earns-amazon-grant-machine-learning-and-mental-health-project"
    },
    {
        "id": "141",
        "institution": "University of Texas at Austin",
        "country": "United States",
        "project": "UT Sage AI Tutor Platform",
        "year": "2024-2025",
        "domains": [
            "AI/ML",
            "Education"
        ],
        "programs": [
            "GenAI"
        ],
        "services": [
            "AWS Generative AI Innovation Center",
            "Amazon Bedrock",
            "Claude 3.5 Haiku"
        ],
        "achievement": "Production AI tutoring service at institutional scale; designed by learning scientists, trained by faculty; delivered at no cost through AWS GenAI Innovation Center.",
        "url": "https://aws.amazon.com/blogs/publicsector/personalized-learning-support-at-scale-how-ut-austin-built-a-generative-ai-tutor-platform-on-aws/"
    },
    {
        "id": "142",
        "institution": "University of Oxford INET",
        "country": "United States",
        "project": "Agent-Based Economic Modeling",
        "year": "2024 (February)",
        "domains": [
            "Economics"
        ],
        "programs": [],
        "services": [
            "AWS HPC infrastructure",
            "high performance computing"
        ],
        "achievement": "Published working paper 2024-06 \"Forecasting Macroeconomic Dynamics using a Calibrated Data-Driven Agent-based Model\"; enabled large-scale economic simulations previously impossible.",
        "url": "https://aws.amazon.com/blogs/hpc/how-agent-based-models-powered-by-hpc-are-enabling-large-scale-economic-simulations/"
    },
    {
        "id": "143",
        "institution": "UC Davis Health",
        "country": "United States",
        "project": "Cloud Innovation Center Fighting Health Misinformation",
        "year": "2023-ongoing",
        "domains": [
            "AI/ML",
            "Medical"
        ],
        "programs": [],
        "services": [
            "AWS Cloud Innovation Center",
            "Amazon ML services",
            "generative AI"
        ],
        "achievement": "Addresses $50M-$300M daily cost of COVID-19 vaccine misinformation (2021 estimate); first Cloud Innovation Center at an academic medical center; focuses on health equity.",
        "url": "https://aws.amazon.com/blogs/publicsector/uc-davis-health-cloud-innovation-center-powered-by-aws-uses-generative-ai-to-fight-health-misinformation/"
    },
    {
        "id": "144",
        "institution": "University of Adelaide",
        "country": "United States",
        "project": "RONIN HPC Platform for Genomics",
        "year": "2023-ongoing",
        "domains": [
            "Genomics",
            "AI/ML",
            "Computer Science"
        ],
        "programs": [
            "RONIN"
        ],
        "services": [
            "RONIN platform on AWS",
            "Amazon EC2",
            "HPC clusters"
        ],
        "achievement": "No queuing, auto-scaling clusters, spot market pricing reduces costs; $330 USD quota per project/year; complements on-premises Phoenix HPC cluster.",
        "url": "https://www.adelaide.edu.au/technology/research/high-performance-computing/ronin-access-aws"
    },
    {
        "id": "145",
        "institution": "University of Sydney",
        "country": "United States",
        "project": "Wildlife Genomics Conservation Research",
        "year": "2023-ongoing",
        "domains": [
            "Genomics",
            "Conservation"
        ],
        "programs": [
            "RONIN"
        ],
        "services": [
            "RONIN platform",
            "Amazon EC2 C5 instances (Intel-powered)",
            "AWS ParallelCluster"
        ],
        "achievement": "Reduced compute analysis from 10 days to 5 hours; democratizes genome data for conservation; partners include Australian Wildlife Conservancy, Toledo Zoo, Illumina.",
        "url": "https://aws.amazon.com/solutions/case-studies/australasian-wildlife-genomics-group/"
    }
];
