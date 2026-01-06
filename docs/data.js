// AWS Academic Research Projects Data
// Full dataset: 172 verified academic research projects
// This is a sample subset - full data to be populated from README.md

const projects = [
    {
        id: 1,
        institution: "University of Texas at Austin",
        country: "United States",
        project: "UT Sage AI Tutor Platform",
        year: "2024-2025",
        domains: ["AI/ML", "Education"],
        programs: ["GenAI"],
        services: ["Bedrock", "Claude"],
        achievement: "Production AI tutoring service at institutional scale serving 52,000 students",
        url: "https://aws.amazon.com/blogs/publicsector/personalized-learning-support-at-scale-how-ut-austin-built-a-generative-ai-tutor-platform-on-aws/"
    },
    {
        id: 2,
        institution: "Stanford University",
        country: "United States",
        project: "Build on Trainium - AI Model Training",
        year: "2024",
        domains: ["AI/ML"],
        programs: ["Trainium"],
        services: ["Trainium", "UltraClusters"],
        achievement: "Access to 40,000 Trainium chips for AI research through $110M AWS investment",
        url: "https://press.aboutamazon.com/2024/6/aws-announces-110-million-commitment-for-ai-research-and-education"
    },
    {
        id: 3,
        institution: "MIT",
        country: "United States",
        project: "MIT-Amazon Science Hub",
        year: "2021",
        domains: ["AI/ML", "Robotics"],
        programs: ["Science Hub"],
        services: ["Research Funding"],
        achievement: "5-year research partnership advancing AI and robotics innovation",
        url: "https://www.amazon.science/news-and-features/amazon-and-mit-research-symposium-focused-on-cutting-edge-technology"
    },
    {
        id: 4,
        institution: "University of British Columbia",
        country: "Canada",
        project: "Serratus - Coronavirus Discovery",
        year: "2020",
        domains: ["Genomics", "Virology"],
        programs: [],
        services: ["EC2", "S3", "Batch"],
        achievement: "Processed ~20 petabytes of genomic data in weeks; discovered 130,000 novel RNA viruses",
        url: "https://aws.amazon.com/solutions/case-studies/university-of-british-columbia/"
    },
    {
        id: 5,
        institution: "University of Oxford",
        country: "United Kingdom",
        project: "GLAM - Museum ML Models",
        year: "2024",
        domains: ["AI/ML", "Cultural Heritage"],
        programs: ["Open Data"],
        services: ["SageMaker", "S3"],
        achievement: "Built 11 ML models in 10 weeks, achieved 90% cost reduction vs on-premises",
        url: "https://registry.opendata.aws/oxford-glam/"
    },
    {
        id: 6,
        institution: "Cornell University",
        country: "United States",
        project: "Socratic Chat GenAI Tool",
        year: "2024",
        domains: ["AI/ML", "Education"],
        programs: ["GenAI"],
        services: ["Bedrock", "Claude"],
        achievement: "GenAI chatbot serving 500+ students for critical thinking",
        url: "https://aws.amazon.com/blogs/publicsector/cornell-university-develops-socratic-genai-tool-with-aws/"
    },
    {
        id: 7,
        institution: "University of California Irvine",
        country: "United States",
        project: "Petabyte-Scale Research Data Backup",
        year: "2021",
        domains: ["Data Infrastructure"],
        programs: [],
        services: ["S3", "Glacier", "Lambda", "DynamoDB"],
        achievement: "Backed up 5 PB of research data from 1,500 labs",
        url: "https://aws.amazon.com/blogs/storage/university-of-california-irvine-backs-up-petabytes-of-research-data-to-aws/"
    },
    {
        id: 8,
        institution: "Baylor College of Medicine",
        country: "United States",
        project: "All of Us Research Genomics Scaling",
        year: "2021",
        domains: ["Genomics", "Medical"],
        programs: [],
        services: ["Step Functions", "Batch", "Lambda", "Athena"],
        achievement: "Scaled to 4,000 samples/month, reduced analysis from 80 hours to 2 hours per sample",
        url: "https://aws.amazon.com/blogs/publicsector/building-resilient-scalable-clinical-genomics-pipeline-aws/"
    },
    {
        id: 9,
        institution: "NC State University",
        country: "United States",
        project: "NCICS Climate Data Analysis",
        year: "2021-2022",
        domains: ["Climate"],
        programs: ["ASDI"],
        services: ["Batch", "EC2"],
        achievement: "Completed albedo processing 50x faster at 1/6th the cost",
        url: "https://aws.amazon.com/blogs/publicsector/embracing-the-cloud-for-climate-research/"
    },
    {
        id: 10,
        institution: "University of Washington",
        country: "United States",
        project: "UW-Amazon Science Hub",
        year: "2022",
        domains: ["AI/ML", "Robotics"],
        programs: ["Science Hub"],
        services: ["Cloud Credits"],
        achievement: "$1.9M multi-year partnership with quarterly research awards up to $20K",
        url: "https://www.amazon.science/news-and-features/amazon-and-university-of-washington-announce-new-science-hub-fellows-and-research-awards"
    },
    {
        id: 11,
        institution: "Johns Hopkins University",
        country: "United States",
        project: "JHU + Amazon Initiative for Interactive AI",
        year: "2022",
        domains: ["AI/ML"],
        programs: ["Science Hub"],
        services: ["Research Funding"],
        achievement: "5-year partnership with #1 NSF HERD university ($3.4B R&D spending)",
        url: "https://hub.jhu.edu/2022/04/07/amazon-whiting-school-collaboration-for-artificial-intelligence/"
    },
    {
        id: 12,
        institution: "Dartmouth College",
        country: "United States",
        project: "Claude for Education",
        year: "2025",
        domains: ["AI/ML", "Education"],
        programs: [],
        services: ["Claude"],
        achievement: "First Ivy League institution-scale AI deployment",
        url: "https://home.dartmouth.edu/news/2024/12/dartmouth-leads-higher-education-claude-ai"
    },
    {
        id: 13,
        institution: "University of Sydney",
        country: "Australia",
        project: "Wildlife Genomics via RONIN",
        year: "2023",
        domains: ["Genomics", "Conservation"],
        programs: ["RONIN", "Open Data"],
        services: ["RONIN", "EC2", "S3"],
        achievement: "Reduced Tasmanian devil genome analysis from 10 days to 5 hours",
        url: "https://aws.amazon.com/solutions/case-studies/australasian-wildlife-genomics-group/"
    },
    {
        id: 14,
        institution: "ETH Zurich & EPFL",
        country: "Switzerland",
        project: "Apertus - 1000+ Language LLM",
        year: "2024",
        domains: ["AI/ML", "NLP"],
        programs: [],
        services: ["Trainium", "EC2"],
        achievement: "Trained 1000+ language LLM challenging English dominance in AI",
        url: "https://aws.amazon.com/blogs/machine-learning/training-large-language-models-on-aws-trainium-with-apertus-technologies/"
    },
    {
        id: 15,
        institution: "NASA",
        country: "United States",
        project: "HEASARC Astrophysics Archive",
        year: "2023",
        domains: ["Physics", "Astronomy"],
        programs: ["Open Data"],
        services: ["S3", "Open Data"],
        achievement: "50 years of high-energy astrophysics data publicly accessible",
        url: "https://registry.opendata.aws/nasa-heasarc/"
    },
    {
        id: 16,
        institution: "University of Sheffield",
        country: "United Kingdom",
        project: "Data Connect Trusted Research Environment",
        year: "2021",
        domains: ["Medical", "Data Infrastructure"],
        programs: ["RONIN"],
        services: ["RONIN", "Security"],
        achievement: "ISO 27001 certified TRE, cost recovery within first year",
        url: "https://aws.amazon.com/blogs/publicsector/unlocking-research-potential-how-the-university-of-sheffield-and-ronin-accelerate-secure-research-through-data-connect/"
    },
    {
        id: 17,
        institution: "UC Santa Cruz",
        country: "United States",
        project: "Dockstore AWS Integration",
        year: "2022",
        domains: ["Genomics", "Bioinformatics"],
        programs: [],
        services: ["Genomics CLI", "Batch"],
        achievement: "Democratized cloud-based genomics workflows for researchers",
        url: "https://news.ucsc.edu/2022/04/dockstore-aws-integration/"
    },
    {
        id: 18,
        institution: "Carnegie Mellon University",
        country: "United States",
        project: "Amazon Graduate Research Fellows",
        year: "2021-2022",
        domains: ["AI/ML", "Robotics"],
        programs: [],
        services: ["Research Funding"],
        achievement: "10+ PhD fellows across automated reasoning, robotics, ML",
        url: "https://www.amazon.science/academic-engagements/new-amazon-graduate-research-fellows-announced-at-carnegie-mellon"
    },
    {
        id: 19,
        institution: "Singapore Eye Research Institute",
        country: "Singapore",
        project: "Retinal Disease AI Screening",
        year: "2024",
        domains: ["Medical", "AI/ML"],
        programs: [],
        services: ["SageMaker", "EC2"],
        achievement: "AI-powered screening for retinal diseases in clinical settings",
        url: "https://aws.amazon.com/blogs/publicsector/singapore-eye-research-institute-uses-aws-to-develop-ai-powered-retinal-disease-screening/"
    },
    {
        id: 20,
        institution: "Yale University",
        country: "United States",
        project: "SpinupPlus Secure Research Platform",
        year: "2021-2022",
        domains: ["Data Infrastructure", "Medical"],
        programs: [],
        services: ["EC2", "Security"],
        achievement: "Enterprise-grade AWS research platform meeting HIPAA compliance",
        url: "https://research.yale.edu/announcements/new-secure-research-computing-platforms-available-large-scale-data-analysis"
    }
];

// Note: This is a sample of 20 projects out of 172 total
// Full dataset to be populated with all examples from README.md
// Categories represented: AI/ML (59), Genomics (25), Medical (22), Climate (21), Physics (9), Education (11), Economics (2)
// Years: 2025 (10), 2024 (83), 2023 (50), 2021-2022 (29)
// Countries: 18 total including US, UK, Canada, Australia, Switzerland, Singapore, Germany, Sweden, and more
