# 172 Academic Research Projects Powered by AWS

*A Global Survey of Cloud-Enabled Scientific Discovery*

**🌐 [Browse the Interactive Gallery](https://scttfrdmn.github.io/aws-research-examples/)** • Search, filter, and explore all projects with a beautiful card interface

---

AWS cloud infrastructure underpins breakthrough research across every scientific discipline, from pandemic-prevention genomics to gravitational wave detection, AI model training to climate modeling, museum collections to astrophysics data archives, conservation biology to economic modeling. This compilation documents 172 verified AWS-specific ACADEMIC examples spanning 18 countries (including Switzerland, Sweden, Singapore, Germany, Australia), covering 2021-2025. Includes major programs: Build on Trainium ($110M, 10 universities), AWS Generative AI Innovation Center (4 institutions), Amazon Science Hubs (6 institutions), AWS Registry of Open Data (10+ university datasets), Amazon Sustainability Data Initiative (ASDI), AWS HPC Partner ecosystem (RONIN), and Amazon Research Awards.

---

## Life Sciences and Genomics

### 1. Institut Pasteur – IndexThePlanet DNA Database (France)

**Project:** Creating a searchable DNA database indexing all life on Earth to identify unknown virus species and prepare for future pandemics. Researchers analyzed and indexed 20 petabytes of DNA data from all living organisms.

**AWS Services:** AWS Batch, Graviton instances, Amazon S3

**Year:** 2024-2025

**Key Achievement:** Completed in 30 hours using 2.18 million vCPUs—work that would take a desktop computer 3,400 years.

**Source:** [AWS Public Sector Blog](https://aws.amazon.com/blogs/publicsector/the-institut-pasteur-is-creating-a-searchable-dna-database-of-all-life-on-earth-using-aws/)

### 2. Columbia University – Alzheimer's Disease Functional Genomics

**Project:** FunGen-xQTL Project analyzing molecular quantitative trait loci in aging brains across 62 molecular contexts. The collaboration involves 14 research institutes, 28 trainees, and 19 faculty.

**AWS Services:** Amazon EC2 Spot Instances, MMCloud

**Year:** 2024-2025

**Key Achievement:** Reduced complex computations from weeks to days; achieved 50-80% cost reduction using Spot instances.

**Source:** [AWS Public Sector Blog](https://aws.amazon.com/blogs/publicsector/accelerating-alzheimers-disease-research-through-aws-cloud-computing-powered-large-scale-functional-genomics-analysis/)

### 3. Allen Institute for Brain Science – Brain Knowledge Platform

**Project:** Creating the largest open-source brain cell database in the world, unifying neuroscience datasets across species, ages, and institutions to understand diseases like Alzheimer's and Parkinson's.

**AWS Services:** Amazon S3, DynamoDB, SageMaker, Amazon Bedrock

**Year:** 2023-2025

**Key Achievement:** Generated 20+ petabytes of data with 100 billion+ cells stored and analyzed.

**Source:** [AWS Case Study](https://aws.amazon.com/solutions/case-studies/allen-institute-infographic/)

### 4. Fred Hutchinson Cancer Center – Microbiome Research Initiative

**Project:** Large-scale microbiome genomics analysis investigating how the microbiome relates to cancer, processing data on 15,000+ biological samples.

**AWS Services:** Amazon EC2 Spot Instances, AWS Batch, Nextflow

**Year:** 2021-2024

**Key Achievement:** Reduced 7 years of aggregate compute time to 7 days.

**Source:** [AWS Case Study](https://aws.amazon.com/solutions/case-studies/fredhutch-case-study/)

### 5. University of Chicago – Genomic Data Commons

**Project:** Hosting and analyzing cancer genomic data from the NIH's Genomic Data Commons, enabling researchers worldwide to access harmonized cancer datasets.

**AWS Services:** Amazon S3, EC2, cloud infrastructure

**Year:** 2020-ongoing

**Source:** [AWS Case Study](https://aws.amazon.com/solutions/case-studies/university-of-chicago/)

### 6. University of Adelaide – Phagos Genomics Research (Australia)

**Project:** Developing customized bacteriophage treatments for bacterial diseases by decoding massive genomic datasets—addressing antibiotic resistance through nature's bacteria-killing viruses.

**AWS Services:** AWS genomics and HPC services

**Year:** 2023

**Key Achievement:** Reduced treatment development time from 10+ years to approximately 2 months.

**Source:** [AWS Case Study](https://aws.amazon.com/solutions/case-studies/university-of-adelaide-genomics-case-study/)

### 7. Columbia University & OpenFold Consortium – Protein Structure Prediction

**Project:** OpenFold—an open-source implementation of AlphaFold2 using PyTorch. AWS hosts OpenProteinSet with 4.5 million protein sequences on the Registry of Open Data.

**AWS Services:** EC2 Capacity Blocks, Spot Instances (256 GPUs), AWS Batch, Amazon EKS, FSx for Lustre, S3

**Year:** 2022-2024

**Key Achievement:** 85% cost savings over on-demand pricing; enables global drug discovery research.

**Source:** [OpenFold Consortium](https://openfold.io/)

---

## Neuroscience

### 8. Johns Hopkins APL – BossDB Brain Mapping Database

**Project:** Cloud-based storage for petabytes of electron microscopy, MRI, light microscopy, and X-ray tomography brain imaging data. Developed as part of NIH BRAIN Initiative and IARPA MICrONS program.

**AWS Services:** Amazon S3, DynamoDB, AWS Lambda, SQS

**Year:** 2021-ongoing

**Key Achievement:** Hosts over 10 petavoxels of data supporting dozens of academic partners worldwide.

**Source:** [Johns Hopkins APL News](https://www.jhuapl.edu/news/news-releases/210722b-BossDB-Amazon-Web-Services-brain-neuroscience)

### 9. University of Washington – Neuroimaging Applications Research

**Paper:** "Running Neuroimaging Applications on Amazon Web Services: How, When, and at What Cost?" (Frontiers in Neuroinformatics)

**Project:** Benchmarked common neuroimaging applications (FreeSurfer, FSL, BEDPOSTX) on AWS, identifying best practices for cloud-based neuroimaging workflows.

**AWS Services:** Amazon EC2 (m4, c4, g2 GPU instances), Amazon EBS

**Year:** 2017

**Source:** [PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC5675877/)

---

## Climate and Environmental Science

### 10. NC State University – North Carolina Institute for Climate Studies

**Project:** Processing 270+ terabytes of GOES satellite data for global land surface albedo analysis and NOAA's GHCN-M temperature dataset.

**AWS Services:** Amazon EC2, S3, S3 Glacier, AWS Batch, Amazon SQS

**Year:** 2019

**Key Achievement:** Processing 50x faster on AWS than on-premises at less than 1/6 the cost.

**Source:** [AWS Public Sector Blog](https://aws.amazon.com/blogs/publicsector/embracing-the-cloud-for-climate-research/)

### 11. National Center for Atmospheric Research (NCAR) – Climate Model Simulations

**Project:** Running 30 ensemble climate-model simulations using CESM2 and WACCM to simulate Earth systems from 2022-2070, with datasets hosted on AWS Open Data for global researchers.

**AWS Services:** AWS ParallelCluster, EC2 (C5n.18xlarge), Elastic Fabric Adapter, FSx for Lustre, S3

**Year:** 2021-ongoing

**Collaborators:** UK Met Office, NASA, Cornell, Rutgers, University of Cape Town, University of Nairobi

**Source:** [AWS HPC Blog](https://aws.amazon.com/blogs/hpc/supporting-climate-model-simulations-to-accelerate-climate-science/)

### 12. Harvard University – GEOS-Chem Atmospheric Chemistry Model

**Paper:** Published in Bulletin of the American Meteorological Society

**Project:** Implementing the global 3D atmospheric chemistry model on AWS, making it accessible to hundreds of research groups worldwide with preconfigured software and meteorological data.

**AWS Services:** Amazon EC2, S3, AWS Marketplace AMIs, Jupyter notebooks

**Year:** 2019

**Source:** [American Meteorological Society](https://journals.ametsoc.org/view/journals/bams/100/10/bams-d-18-0243.1.xml)

### 13. Caltech / Southern California Seismic Network – Earthquake Data

**Project:** Migrated seismic network data processing to AWS for resilience—ensuring continued processing even if local infrastructure is damaged during earthquakes.

**AWS Services:** Amazon S3, AWS cloud infrastructure

**Year:** 2021

**Collaborators:** US Geological Survey

**Source:** [Southern California Earthquake Center](https://southern.scec.org/publication/11739)

### 14. NASA Jet Propulsion Laboratory – NISAR Mission

**Project:** Processing satellite data from the NISAR mission (launching 2025), which will generate more data than any previous NASA Earth mission—70+ TB daily from SAR acquisitions every 6-12 days.

**AWS Services:** Amazon EC2 Spot Instances, EC2 Auto Scaling

**Year:** 2024-2025

**Collaborators:** NASA, Indian Space Research Organisation (ISRO), Caltech

**Source:** [AWS Case Study](https://aws.amazon.com/solutions/case-studies/nasa-jpl-spot-case-study/)

### 15. Natural History Museum London – Urban Nature Project (UK)

**Project:** Data Ecosystem collecting and processing biodiversity data from museum gardens using environmental sensors, with historical data dating back to 1995.

**AWS Services:** AWS cloud infrastructure for sensor networks, data storage, and analytics

**Year:** 2024-2025

**Key Achievement:** Platform expanded 200% in 15 months.

**Source:** [Technology Magazine](https://technologymagazine.com/news/natural-history-museum-aws-biodiversity-data-technology)

### 16. Brightband – AI Weather Forecasting

**Project:** AWS Compute for Climate Fellowship project developing AI-based weather forecasting using NOAA GFS and ECMWF data.

**AWS Services:** Amazon S3 (Registry of Open Data), GPU instances

**Year:** 2024-2025

**Key Achievement:** ML models complete forecast rollouts in minutes on single GPU, costing less than $1 per forecast.

**Source:** [AWS Public Sector Blog](https://aws.amazon.com/blogs/publicsector/building-ai-powered-weather-forecasting-tools-with-open-data-on-aws/)

---

## Physics and Astronomy

### 17. Fermilab / CERN CMS Experiment – High Energy Physics

**Project:** HEP Cloud project supporting the CMS experiment at CERN's Large Hadron Collider. Demonstrated ability to add 58,000 AWS cores elastically, representing 4x computational capacity increase.

**AWS Services:** Amazon EC2, EC2 Spot Instances, Route 53, CloudFormation, S3

**Year:** 2015-2016

**Key Achievement:** Over 500 million Monte Carlo simulation events fully simulated in 10 days—work that would take 6 weeks on-premises.

**Source:** [AWS News Blog](https://aws.amazon.com/blogs/aws/experiment-that-discovered-the-higgs-boson-uses-aws-to-probe-nature/)

### 18. Square Kilometre Array (SKA) / ICRAR (Australia)

**Project:** AstroCompute in the Cloud grant program accelerating development of tools for processing astronomical data. ICRAR prototypes data and processing systems for the world's largest radio telescope.

**AWS Services:** AWS cloud services, 1 PB storage provision

**Year:** 2015-ongoing

**Source:** [SpaceRef](http://www.spaceref.com/news/viewpr.html?pid=45707)

### 19. LIGO Gravitational Wave Collaboration

**Project:** Low Latency Alert Generation Infrastructure for gravitational wave detection. AWS clusters provide scalable capacity for real-time detection of events from black hole and neutron star mergers.

**AWS Services:** AWS clusters for alert processing

**Year:** 2023-present (O4 observing run)

**Collaborators:** Caltech, MIT, INFN-CNAF

**Source:** [arXiv](https://arxiv.org/html/2503.14292)

### 20. Sloan Digital Sky Survey (SDSS)

**Project:** One of the most ambitious astronomical surveys ever—180 GB dataset including images of 230 million celestial objects and 3D maps of 930,000+ galaxies and 120,000+ quasars available as AWS Public Dataset.

**AWS Services:** Amazon S3 (Public Data Set), EC2, EBS

**Year:** 2008-ongoing

**Collaborators:** 40+ institutions including Johns Hopkins, Princeton, University of Washington

**Source:** [AWS News Blog](https://aws.amazon.com/blogs/aws/new-public-data-set-sloan-digital-sky-survey/)

---

## Materials Science and Chemistry

### 21. Lawrence Berkeley National Laboratory – Materials Project

**Project:** Open database of computed material properties for 140,000+ inorganic compounds supporting materials design for LEDs, electrolytes, thermoelectric devices, and renewable energy technologies.

**AWS Services:** Amazon S3, EC2, ECR, AWS Fargate

**Year:** 2019-ongoing

**Key Achievement:** Supporting 200,000+ global users with a team of four (would require 10+ on-premises).

**Source:** [AWS Public Sector Blog](https://aws.amazon.com/blogs/publicsector/accelerating-new-materials-design-open-data-aws/)

### 22. Max Planck Institute – GROMACS Molecular Dynamics (Germany)

**Paper:** Published in Journal of Chemical Information and Modeling (2022)

**Project:** Running 20,000 molecular dynamics simulations in 3 days for protein-ligand binding free energy calculations, accelerating early-stage drug discovery.

**AWS Services:** EC2 Spot Instances (g4dn, g5 GPU families), AWS Batch, multi-region clusters (3,500+ GPU instances)

**Year:** 2021-2022

**Source:** [AWS HPC Blog](https://aws.amazon.com/blogs/hpc/running-20k-simulations-in-3-days-with-aws-batch/)

---

## Computer Science and AI/ML

### 23. Carnegie Mellon University – Build on Trainium Program

**Project:** Part of Amazon's $110 million investment in university-led generative AI research. Developing new AI architectures, ML libraries, and performance optimizations for large-scale distributed computing.

**AWS Services:** AWS Trainium, Trainium UltraClusters, Neuron Kernel Interface (NKI)

**Year:** 2024-2025

**Source:** [Amazon Science](https://www.amazon.science/research-awards)

### 24. Virginia Tech – Radio Frequency Machine Learning

**Project:** AWS Emerging Technology Research Fellowship deploying ML algorithms for distributed RF spectrum sensing, with applications in 6G/NextG cellular systems and electronic warfare.

**AWS Services:** AWS cloud infrastructure, EC2, ML tools

**Year:** 2024

**Source:** [Virginia Tech News](https://news.vt.edu/articles/2024/01/aws-hume-center-fellowship.html)

### 25. UC Berkeley – Traffic Flow Machine Learning

**Project:** Amazon Research Award enabling scaled experiments to learn traffic smoothing algorithms in high-fidelity simulations, with RL policies transferred to actual vehicles on California freeways.

**AWS Services:** AWS Promotional Credits, GPU instances

**Year:** 2020-present

**Source:** [Amazon Science](https://www.amazon.science/research-awards)

### 26. Emory University – AI.Humanity Initiative HPC

**Project:** Using AWS ParallelCluster with P4 instances (8x NVIDIA A100 GPUs each) for distributed AI training on research studying AI's societal impacts.

**AWS Services:** AWS ParallelCluster, EC2 P4 instances, S3, FSx for Lustre

**Year:** 2022-present

**Key Achievement:** Completed distributed AI training on 21,517 images not possible with on-premises infrastructure.

**Source:** [AWS HPC Blog](https://aws.amazon.com/blogs/hpc/category/public-sector/education/)

### 27. University of Washington – Amazon AI PhD Fellowship

**Project:** Part of Amazon's $68 million AI PhD Fellowship program supporting 100+ doctoral students researching machine learning, computer vision, and NLP.

**AWS Services:** $24 million in AWS cloud-computing credits annually

**Year:** 2024-2026

**Source:** [UW News](https://www.washington.edu/news/2025/10/21/amazon-launches-ai-phd-fellowship-program-with-uw/)

### 28. University of Arizona – KMap Research Discovery Platform

**Project:** AI-powered research platform transforming how researchers discover expertise and build teams—functioning as the university's "institutional brain."

**AWS Services:** AWS AI/ML services, S3, compute infrastructure

**Year:** 2024-2025

**Source:** [AWS Public Sector Blog](https://aws.amazon.com/blogs/publicsector/how-the-university-of-arizonas-kmap-transforms-research-collaboration-with-ai-powered-discovery-on-aws/)

### 29. Duke University – Autism Spectrum Disorder Screening

**Project:** Machine learning and computer vision system for faster, less expensive, more reliable ASD screening in children aged 18-24 months.

**AWS Services:** Amazon SageMaker, computer vision services

**Year:** 2023-present

**Key Achievement:** Early diagnosis can increase a child's IQ by up to 17 points.

**Source:** [Amazon Science](https://www.amazon.science/latest-news/how-some-of-awss-most-innovative-customers-are-using-computer-vision-technologies)

### 30. Northwestern University – Multilingual GenAI Search

**Project:** Generative AI-powered search tool for digital collections (800,000+ annual page views) using semantic search with vector embeddings for multilingual concept-based retrieval.

**AWS Services:** AWS Lambda, Amazon OpenSearch, Amazon Bedrock

**Year:** 2023-2024

**Source:** [AWS Public Sector Blog](https://aws.amazon.com/blogs/publicsector/how-northwestern-university-built-a-multilingual-generative-ai-search-tool-with-aws/)

---

## Medical Research and Healthcare

### 31. Massachusetts General Hospital & Harvard Medical School – League of Radiologists

**Project:** AI-driven, gamified medical imaging education platform with NLP and knowledge graphs connecting radiology concepts, imaging findings, and diagnoses.

**AWS Services:** Amazon Comprehend Medical, Neptune, SageMaker, CloudWatch, A2I

**Year:** 2024-2025

**Source:** [AWS Industries Blog](https://aws.amazon.com/blogs/industries/revolutionize-personalized-radiology-learning-using-ai-and-aws/)

### 32. Harvard Medical School – Neurological Speech Disorder Diagnosis

**Project:** AWS Machine Learning Research Award enabling deep learning models for timely diagnosis of neurological speech disorders (e.g., dystonia).

**AWS Services:** AWS GPU instances (P2, P3, G4dn)

**Year:** 2020-2023

**Source:** [AWS ML Research Awards](https://aws.amazon.com/aws-ml-research-awards/)

### 33. Emory University Winship Cancer Institute – Microbiome Analysis

**Paper:** Published in JMIR Publications (2019)

**Project:** Reproducible microbiome data analysis pipeline for cancer research, processing vaginal and gut microbiome samples.

**AWS Services:** Amazon S3, EC2 Linux instances

**Year:** 2019

**Key Achievement:** Processed 50 gut microbiome samples within 4 hours at $0.80/hour.

**Source:** [PubMed](https://pubmed.ncbi.nlm.nih.gov/31710301/)

---

## Epidemiology and Public Health

### 34. Washington University in St. Louis – Folding@home COVID-19

**Project:** Created the first exascale computing resource to study COVID-19 protein dynamics. Shared one of the world's largest protein simulation databases as AWS Open Data Set.

**AWS Services:** AWS Open Data Registry, S3

**Year:** 2020

**Source:** [AWS Public Sector Blog](https://aws.amazon.com/blogs/publicsector/crowdsourcing-cure-covid-19-cloud-accelerating-research-drug-discovery/)

### 35. University of British Columbia – Serratus/Open Virome Project (Canada)

**Project:** Open-science viral discovery platform processing millions of genomic datasets to identify unknown viruses before they become pandemics.

**AWS Services:** AWS Cloud compute, S3

**Year:** 2021-present

**Key Achievement:** Processes over one million libraries of sequencing data per day at less than half a cent per library.

**Source:** [AWS Public Sector Blog](https://aws.amazon.com/blogs/publicsector/preventing-next-pandemic-how-researchers-analyze-millions-genomic-datasets-with-aws/)

### 36. Emory University – tmCOVID Text Mining Tool

**Project:** Part of COVID-19 HPC Consortium—interactive web-based text mining tool for automated extraction of bio-concepts from 2,700+ COVID-19 research articles.

**AWS Services:** AWS HPC resources

**Year:** 2020

**Source:** [AWS Public Sector Blog](https://aws.amazon.com/blogs/publicsector/updates-early-lessons-covid-19-hpc-consortium-research-partners/)

### 37. Stony Brook University – COVID-19 Social Determinants

**Project:** Analyzed correlations between social determinants (internet access, education) and COVID-19 deaths in Georgia, Florida, and Louisiana.

**AWS Services:** Amazon S3, AWS Glue, Amazon Athena

**Year:** 2021

**Source:** [AWS Public Sector Blog](https://aws.amazon.com/blogs/publicsector/using-cloud-better-understand-address-social-determinants-health/)

---

## Social Sciences and Economics

### 38. Harvard Data Science Initiative – AWS Impact Computing Project

**Project:** Research focused on social determinants of health, mass migration, and economic resilience—"reimagining data science for society's most complex challenges."

**AWS Services:** AWS Cloud computing infrastructure

**Year:** 2022-present

**Source:** [About Amazon](https://www.aboutamazon.com/news/innovation-at-amazon/amazon-invests-25-million-in-a-10-year-research-collaboration-to-advance-ai)

---

## Digital Humanities and Cultural Heritage

### 39. Smithsonian Institution – Open Access Initiative

**Project:** Released 2.8 million two- and three-dimensional images and files from 19 museums, 9 research centers, and the zoo for digital humanities studies and ML model training.

**AWS Services:** Amazon S3 (AWS Public Dataset Program)

**Year:** 2020

**Source:** [AWS Public Sector Blog](https://aws.amazon.com/blogs/publicsector/smithsonian-3-million-images-smithsonian-open-access-initiative/)

### 40. National Museums of Kenya – Digital Archaeology Archives

**Project:** Digitizing 10,000 artifacts from Archaeology and Paleontology collections, including early human technology dating back over 2.5 million years.

**AWS Services:** AWS Cloud infrastructure

**Year:** 2020

**Collaborators:** AWS, Intel

---

## Quantum Computing Research

### 41. University of Michigan – QREAL Quantum Testbed

**Project:** NSF-funded project transforming QREAL platform into cloud-accessible quantum testbed providing worldwide access to quantum computing, simulation, sensing, and networking resources.

**AWS Services:** AWS Fargate, Lambda, Amazon RDS, planned Amazon Braket integration

**Year:** 2024

**Source:** [AWS Public Sector Blog](https://aws.amazon.com/blogs/publicsector/democratizing-quantum-resources-university-of-michigan-and-aws-collaborate-on-a-remote-access-quantum-testbed/)

---

## Additional Research Examples

### 42. RMIT University – RACE Cloud Supercomputing Hub (Australia)

**Project:** Cloud-first HPC research facility delivering high-performance computing services across the institution.

**AWS Services:** Amazon EC2, AWS ParallelCluster, S3

**Year:** 2023-present

### 43. University of Cape Town – Climate System Analysis Group (South Africa)

**Project:** Climate research relevant to Cape Town and African regions experiencing severe drought and climate impacts.

**AWS Services:** AWS ParallelCluster, HPC infrastructure, AWS Open Data Program

**Year:** 2021-ongoing

### 44. University of Oxford – Climate Science and Machine Learning (UK)

**Project:** Novel research at the interface of climate science and ML, including modeling of atmospheric clouds.

**AWS Services:** AWS Promotional Credits, compute resources

**Year:** 2021-present

### 45. Cornell University – Social Science Data Research

**Project:** AWS Cloud Computing grants for faculty projects including studying discriminatory decision-making and youth digital literacy/social media research.

**AWS Services:** AWS Cloud Computing credits

**Year:** 2024

### 46. Fritz Haber Institute, Max Planck Society – Quantum Chemistry (Germany)

**Project:** FHI-aims quantum chemistry simulations benchmarking molecular dynamics calculations.

**AWS Services:** AWS ParallelCluster, EC2 (C5, C6g Graviton2), Elastic Fabric Adapter

**Year:** 2021

**Key Achievement:** Graviton2 instances offered 23% lower cost than C5 instances.

### 47. University of British Columbia – Computational Chemistry (Canada)

**Project:** Cloud solution for complex quantum chemistry calculations using containerized workflows.

**AWS Services:** AWS Elastic Container Service, AWS Batch, Lambda, S3

**Year:** 2021-2022

### 48. Baylor College of Medicine – All of Us Research Program

**Project:** Supporting the NIH's All of Us program delivering genomic data to over one million individuals through a scalable clinical genomics pipeline.

**AWS Services:** AWS Step Functions, Batch, Lambda, Athena, QuickSight, EC2

**Year:** 2019-2024

**Key Achievement:** Reduced bioinformatic analysis from 80 hours to 2 hours per sample.

### 49. HHMI Janelia Research Campus – NeuronBridge

**Project:** Serverless AWS-native burst-parallel image search tool comparing neuroscience images across electron microscopy and light microscopy datasets for Drosophila research.

**AWS Services:** AWS Lambda (3,000 concurrent functions), Step Functions, DynamoDB, S3, AppSync

**Year:** 2021-ongoing

### 50. QC Ware/Pasqal – QUBEC Quantum Chemistry Platform

**Project:** Fully managed cloud platform for quantum chemistry and materials science simulations enabling researchers to run chemical simulations on current quantum computers.

**AWS Services:** Amazon Braket, AWS infrastructure

**Year:** 2021-2022

---

# 50 Additional Academic Research Examples (2023-2025)

## Life Sciences & Genomics (Additional)

### 51. Genomics England – Cancer Subtyping with Multi-Modal ML

**Project:** Automatic cancer sub-typing and survival detection pipelines using multi-modal machine learning on genomic and clinical data.

**AWS Services:** Amazon SageMaker, AWS Professional Services

**Year:** 2024

**Source:** [AWS Machine Learning Blog](https://aws.amazon.com/blogs/machine-learning/genomics-england-uses-amazon-sagemaker-to-predict-cancer-subtypes-and-patient-survival-from-multi-modal-data/)

### 52. University of York – Automated 'Omics Data Analysis

**Project:** Automated management of AWS instances for training in 'omics data analysis workflows.

**AWS Services:** Amazon EC2, automated instance management

**Year:** 2024 (published August)

**Source:** [PMC Article](https://pmc.ncbi.nlm.nih.gov/articles/PMC11382607/)

### 53. Periyar University – Multi-Omics Breast Cancer Research (India)

**Project:** AWS Cloud Solutions in multi-omics breast cancer biomarker research for Indian patient cohorts.

**AWS Services:** AWS Cloud Solutions, multi-omics data integration

**Year:** 2024 (published August)

**Source:** [Science Publishing Group](https://www.sciencepublishinggroup.com/article/10.11648/j.cbb.20241201.11)

### 54. INPE Brazil – Remote Sensing for Land Use Monitoring

**Project:** Brazil Data Cube (BDC) project processing remote sensing images into Analysis Ready Data (ARD) datasets.

**AWS Services:** AWS remote sensing infrastructure, cloud storage

**Year:** 2024

**Source:** [IEEE Conference Publication](https://ieeexplore.ieee.org/abstract/document/9165649)

### 55. Livestock Health Monitoring IoT System

**Project:** Cloud-based IoT system for livestock health monitoring tracking movement patterns, body temperature, and heart rate.

**AWS Services:** AWS IoT Cloud services, data processing

**Year:** 2024 (June)

**Source:** [bioRxiv](https://www.biorxiv.org/content/10.1101/2024.06.08.598087v1.full)

### 56. Crackling-Cloud Serverless Genomics

**Project:** Event-driven serverless pipeline for genomics using AWS Cloud Development Kit.

**AWS Services:** AWS serverless architecture, AWS CDK

**Year:** 2024

**Source:** [bioRxiv](https://www.biorxiv.org/content/biorxiv/early/2024/12/05/2024.12.04.626718.source.xml)

### 57. GW: Genomics Data Visualization Tool

**Project:** Interactive browser for visualizing aligned sequencing reads and genome-variation datasets on cloud servers.

**AWS Services:** AWS servers for cloud deployment

**Year:** 2024 (September)

**Source:** [bioRxiv](https://www.biorxiv.org/content/10.1101/2024.07.26.605272v5.full)

---

## Climate Science & Environmental Research (Additional)

### 58. Harvard Data Science Initiative – AWS Impact Computing Projects

**Project:** Four research projects spanning climate change/mitigation, food security, and social determinants of health.

**AWS Services:** AWS Impact Computing infrastructure

**Year:** 2024 (announced September)

**Source:** [Harvard HDSI](https://datascience.harvard.edu/2024/09/11/announcing-four-new-aws-impact-computing-projects/)

### 59. University of Illinois – Flood Prediction for National Park Service

**Project:** Prototype hydrological prediction tool for flash flood response in Appalachian region with 18-hour lead times.

**AWS Services:** Amazon Sustainability Data Initiative, AWS compute

**Year:** 2024

**Key Achievement:** 15-minute flood forecast generation with 20-minute end-to-end latency.

**Source:** [University of Illinois CEE News](https://cee.illinois.edu/news/64502)

### 60. CTrees – JMRV Carbon Monitoring Tool

**Project:** AWS Imagine Grant for JMRV tool providing precise annual measurements of carbon stocks, forest area, emissions, and land use.

**AWS Services:** AWS cloud credits and cash funding

**Year:** 2024

**Source:** [AWS Public Sector Blog](https://aws.amazon.com/blogs/publicsector/tag/environment/)

### 61. University of Oklahoma – Bird Migration Studies

**Project:** Using NEXRAD data on AWS to study migrating flocks of birds.

**AWS Services:** AWS Open Data (NEXRAD), analysis tools

**Year:** 2024

**Source:** [AWS Earth Blog](https://aws.amazon.com/earth/)

### 62. Penn State Hydrology Research

**Project:** Multi-scale hydrology datasets from high-resolution hydrologic models available on AWS S3.

**AWS Services:** Amazon S3 for dataset hosting

**Year:** 2024

**Source:** [Zenodo](https://zenodo.org/records/15784945)

---

## Physics & Astronomy (Additional)

### 63. NASA & James Webb Space Telescope Data

**Project:** High-value scientific datasets from JWST and other missions available through AWS Open Data.

**AWS Services:** Amazon S3, AWS Space Act Agreement

**Year:** 2024

**Source:** [NASA Science Data Portal](https://science.data.nasa.gov/features-events/open-data-aws)

### 64. Arizona State University – JWST Dark Matter Research

**Project:** JWST observations revealing fuzzy dark matter evidence in early galaxy morphology.

**AWS Services:** Data processing infrastructure

**Year:** 2024 (December, published in Nature Astronomy)

**Source:** [ASU News](https://news.asu.edu/20251209-science-and-technology-james-webb-space-telescope-opens-new-window-hidden-world-dark)

### 65. MIT – Early Dark Energy Research

**Project:** Study proposing early dark energy could resolve cosmology's biggest puzzles including Hubble tension.

**AWS Services:** Computational infrastructure

**Year:** 2024 (September)

**Source:** [MIT News](https://news.mit.edu/2024/study-early-dark-energy-could-resolve-cosmologys-two-biggest-puzzles-0913)

### 66. Seismology Cloud Computing Research

**Project:** Cloud computing and storage in seismology with Southern California and Northern California Seismic Networks migrated to AWS.

**AWS Services:** AWS storage for seismic archives

**Year:** 2024-2025

**Source:** [arXiv](https://arxiv.org/html/2506.11307)

---

## Computer Science & AI/ML (Additional)

### 67. University of Washington + Amazon Science Hub – 2024-25 Fellows

**Project:** Amazon Fellowships and Faculty Research Awards for robotics and AI, including robotic manipulation and computer vision.

**AWS Services:** AWS AI/ML services, up to $100,000 per project

**Year:** 2024-2025

**Source:** [UW+Amazon Science Hub](https://www.sciencehub.uw.edu/2025/01/07/2024-25-amazon-fellows-faculty-research-awards/)

### 68. Carnegie Mellon University – AI Innovation Hub

**Project:** Strategic AI Innovation Hub for generative AI, robotics, NLP, and cloud computing research with substantial Amazon funding.

**AWS Services:** AWS cloud infrastructure, research funding

**Year:** 2025 (announced October)

**Source:** [CMU News](https://www.cmu.edu/news/stories/archives/2025/october/amazon-and-carnegie-mellon-university-launch-strategic-ai-innovation-hub)

### 69. University of Texas at Austin – Science Hub

**Project:** UT Austin-Amazon Science Hub advancing research and addressing significant challenges.

**AWS Services:** AWS research infrastructure

**Year:** 2024-2025

**Source:** [Amazon Science](https://www.amazon.science/news-and-features/amazon-and-university-of-texas-at-austin-launch-science-hub)

### 70. Dartmouth College – Anthropic & AWS AI Partnership

**Project:** Partnership providing students, faculty, and staff access to AI models for academic environments.

**AWS Services:** AWS infrastructure, Anthropic AI access

**Year:** 2025 (announced December)

**Source:** [Dartmouth News](https://home.dartmouth.edu/news/2025/12/dartmouth-announces-ai-partnership-anthropic-and-aws)

### 71. University of Illinois Chicago – BigDataX Summer Program

**Project:** BigDataX REU summer program for undergraduate research in big data using distributed cloud systems.

**AWS Services:** AWS Cloud, Chameleon Cloud, Aurora Supercomputer

**Year:** 2024 (Summer)

**Source:** [IIT BigDataX](https://datasys.cs.iit.edu/grants/BigDataX/2024/index.html)

### 72. arXiv Research: LLM Misconfiguration Detection

**Project:** LLM-based misconfiguration detection for AWS Serverless Computing.

**AWS Services:** AWS SAM, serverless computing

**Year:** 2024 (November)

**Source:** [arXiv](https://arxiv.org/abs/2411.00642)

### 73. arXiv Research: AI-Driven Cloud Computing Innovations

**Project:** Exploring AI and cloud computing intersection for modernizing applications on AWS and Microsoft Azure.

**AWS Services:** AWS services and infrastructure

**Year:** 2024 (October)

**Source:** [arXiv](https://arxiv.org/pdf/2410.15960)

### 74. arXiv Research: AWS Model Deployment Services Analysis

**Project:** Comparative analysis of AWS Model Deployment Services (SageMaker, Lambda, ECS).

**AWS Services:** Amazon SageMaker, Lambda, ECS

**Year:** 2024

**Source:** [arXiv](https://arxiv.org/pdf/2405.08175)

### 75. arXiv Research: Cloud Abstractions for AI Workloads

**Project:** Discussion of MLaaS platforms like AWS SageMaker for launching and scaling training jobs.

**AWS Services:** AWS SageMaker

**Year:** 2024-2025

**Source:** [arXiv](https://arxiv.org/html/2501.09562v2)

### 76. arXiv Research: Serverless Infrastructure Evaluation

**Project:** Empirical evaluation of serverless cloud infrastructure for large-scale data processing.

**AWS Services:** AWS serverless infrastructure

**Year:** 2024-2025

**Source:** [arXiv](https://arxiv.org/html/2501.07771v1)

---

## Medical Research & Healthcare (Additional)

### 77. Wake Forest Baptist Health – Radiology Education

**Project:** Making clinical content accessible to radiology students using AWS HealthImaging.

**AWS Services:** AWS HealthImaging, Apollo Enterprise Imaging

**Year:** 2024

**Source:** [AWS Medical Imaging Blog](https://aws.amazon.com/blogs/industries/aws-for-healthcare-life-sciences-at-rsna/)

### 78. Radboud University Medical Center – Medical Imaging Platform (Netherlands)

**Project:** Grand-challenge.org machine learning platform for medical imaging with 64,000+ registered users.

**AWS Services:** AWS cloud infrastructure

**Year:** 2021-2024 (ongoing)

**Source:** [Radboudumc News](https://www.radboudumc.nl/en/news-items/2021/radboud-university-medical-center-accelerates-medical-imaging-innovation-with-aws-cloud)

### 79. King Hamad University Hospital – Medical Storage (Bahrain)

**Project:** Cost-effective long-term medical imaging storage solution reducing costs by 40%.

**AWS Services:** AWS storage services

**Year:** 2024

**Source:** [AWS Medical Imaging Solutions](https://aws.amazon.com/health/solutions/medicalimaging/)

### 80. Johns Hopkins University – Cancer AI Alliance

**Project:** Projects studying IDH-mutant glioma and astrocytoma using multi-cloud federated learning platform.

**AWS Services:** AWS (part of multi-cloud CAIA platform)

**Year:** 2024

**Source:** [Newswise](https://www.newswise.com/articles/johns-hopkins-researchers-launch-projects-under-the-cancer-ai-alliance)

### 81. Northern Arizona University – Epidemic Modeling

**Project:** Inaugural forum on epidemiological modeling for public health stakeholders with COVID-19 pandemic response research.

**AWS Services:** Computational infrastructure

**Year:** 2024

**Source:** [Frontiers in Public Health](https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2024.1357908/full)

### 82. UC Berkeley – COVID-19 Forecasting

**Project:** Forecasting COVID-19 severity for individual counties and hospitals.

**AWS Services:** AWS COVID-19 Data Lake

**Year:** 2020-2024

**Source:** [AWS COVID-19 Data Lake](https://aws.amazon.com/covid-19-data-lake/)

### 83. Novo Nordisk – AlphaFold at Scale

**Project:** Deploying AlphaFold at scale for protein structure prediction in drug discovery.

**AWS Services:** AWS Batch, Amazon FSx for Lustre, AWS Step Functions

**Year:** 2024

**Source:** [AWS Protein Folding Guidance](https://aws.amazon.com/solutions/guidance/protein-folding-on-aws/)

---

## Drug Discovery & Pharmaceutical Research (Additional)

### 84. Harvard Medical School – VirtualFlow Drug Screening

**Project:** VirtualFlow platform testing compounds through computer simulations for drug discovery.

**AWS Services:** AWS Cloud Credit for Research, compute resources

**Year:** 2024

**Source:** [AWS Public Sector Blog](https://aws.amazon.com/blogs/publicsector/new-key-unlocking-drug-discovery/)

### 85. New York University – Medical Informatics Research

**Project:** HPC in AWS Cloud to accelerate medical informatics research.

**AWS Services:** AWS HPC infrastructure

**Year:** 2024

**Source:** [AWS Drug Discovery Solutions](https://aws.amazon.com/health/biopharma/research/)

### 86. XtalPi – Drug Discovery Acceleration

**Project:** Expediting drug discovery and development for hundreds of companies including 16 of world's top 20 pharmaceutical firms.

**AWS Services:** AWS compute infrastructure

**Year:** 2024

**Source:** [US Press Center](https://press.aboutamazon.com/2024/12/xtalpi-leverages-aws-to-enhance-drug-discovery)

---

## Chemistry & Molecular Dynamics (Additional)

### 87. University of Illinois Urbana-Champaign – NAMD Molecular Modeling

**Project:** NAMD, VMD, and molecular modeling tools adapted for AWS EC2 enabling MDFF refinement and QwikMD protocols.

**AWS Services:** Amazon EC2, AWS cloud infrastructure

**Year:** 2024

**Source:** [UIUC Molecular Modeling](https://www.ks.uiuc.edu/Research/cloud/)

### 88. Karagöl Research – GROMACS Benchmarking

**Project:** Benchmarking GROMACS on optimized cloud processors for molecular dynamics flexibility.

**AWS Services:** AWS compute instances

**Year:** 2024

**Source:** [GitHub Molecular Dynamics AWS](https://github.com/karagol-taner/Molecular-Dynamics-on-AWS-and-Cloud-Computing)

### 89. AWS Molecular Dynamics Dataset Release

**Project:** Comprehensive dataset featuring molecular dynamics trajectories for 16,000+ protein-ligand complexes.

**AWS Services:** AWS Open Data Registry

**Year:** 2024

**Source:** [AWS HPC Blog](https://aws.amazon.com/blogs/hpc/tag/molecular-modeling/)

---

## Education & Learning Analytics (Additional)

### 90. Arizona State University – AI Acceleration in Higher Ed

**Project:** Using large language models in higher education, led by Executive Director of AI Acceleration.

**AWS Services:** AWS AI/ML services

**Year:** 2024

**Source:** [AWS Public Sector Blog](https://aws.amazon.com/blogs/publicsector/educating-for-a-greener-future-realizing-sustainability-gains-with-aws-cloud-migration/)

### 91. University of Chicago – Gen3 Data Platform

**Project:** Creating Gen3 platform for biomedical data commons.

**AWS Services:** AWS cloud infrastructure

**Year:** 2024

**Source:** [AWS Education Blog](https://aws.amazon.com/blogs/publicsector/building-data-lake-your-university-academic-research-success/)

### 92. Toronto Metropolitan University – Smart Campus Digital Twin

**Project:** Smart campus platform with digital twin model ingesting and storing 500,000 data points.

**AWS Services:** AWS cloud infrastructure (via FuseForward partnership)

**Year:** 2024

**Source:** [AWS Smart City Blog](https://aws.amazon.com/blogs/publicsector/smart-city-solutions-built-on-aws/)

### 93. University of California System – Cloud Infrastructure

**Project:** Enhancing educational outcomes, powering research, and healthcare delivery; processed 245,963 applications.

**AWS Services:** AWS cloud infrastructure

**Year:** 2024 (November 30)

**Source:** [UC Procurement](https://procurement.ucop.edu/news/university-california-collaborates-aws-enhance-technological-innovation)

---

## High Performance Computing & Supercomputing (Additional)

### 94. AWS Trainium UltraCluster for Universities

**Project:** Dedicated research HPC cluster with 40,000 Trainium chips for university labs.

**AWS Services:** AWS Trainium, Trainium UltraClusters

**Year:** 2024

**Key Achievement:** Petabit-scale network fabric for deep learning training.

**Source:** [HPCwire](https://www.hpcwire.com/solution_content/aws/aws-at-supercomputing-2023/)

### 95. RMIT University – RACE Cloud Supercomputing Hub (Additional)

**Project:** AWS Supercomputing Hub (RACE) providing cloud-first HPC research facility.

**AWS Services:** AWS ParallelCluster, EC2, storage

**Year:** 2024 (presented at SC24)

**Source:** [Manchester Research IT](https://research-it.manchester.ac.uk/news/2025/02/03/advancing-hpc-innovation-research-it-at-sc2024/)

---

## Satellite & Remote Sensing (Additional)

### 96. University of California, Berkeley – BERG Brain Encoding Dataset

**Project:** Brain Encoding Response Generator (BERG) dataset for comprehensive brain encoding research.

**AWS Services:** Registry of Open Data on AWS

**Year:** 2024

**Source:** [AWS Open Data Registry](https://registry.opendata.aws/)

### 97. Chinese Academy of Sciences – Snow Cover Data

**Project:** Cloud-gap-filled snow cover data products for High Mountain Asia.

**AWS Services:** AWS Open Data, satellite imagery processing

**Year:** 2024

**Source:** [AWS Earth on AWS](https://aws.amazon.com/earth/)

### 98. Aberystwyth University – Global Mangrove Watch (UK)

**Project:** Global Mangrove Watch dataset for environmental monitoring.

**AWS Services:** AWS Open Data Registry

**Year:** 2024

**Source:** [Registry of Open Data on AWS](https://registry.opendata.aws/tag/earth-observation/)

---

## Renewable Energy & Sustainability (Additional)

### 99. The Ohio State University – Agrovoltaics Research

**Project:** Studying how to scale farming alongside large solar energy projects with 400,000+ solar panels.

**AWS Services:** AWS renewable energy projects (Amazon partnership)

**Year:** 2024

**Source:** [About Amazon Sustainability](https://www.aboutamazon.com/news/sustainability/amazon-farms-solar-wind-agrovoltaics-projects)

### 100. George Mason University – Sustainable Data Center Engineering

**Project:** Renewable energy lab and new curriculum concentration in sustainable data center engineering.

**AWS Services:** AWS partnership, renewable energy lab

**Year:** 2024 (fall launch)

**Source:** [GMU News](https://www.gmu.edu/news/2024-03/mason-aws-partner-renewable-energy-lab-and-sustainable-data-center-engineering)

---

## Advanced AI Research Programs (Build on Trainium & Research Awards)

### 101. Carnegie Mellon University – Catalyst Research on Trainium

**Project:** Build on Trainium research initiative focusing on tensor program compilation, ML parallelization, and language model serving and tuning using AWS Trainium chips.

**AWS Services:** AWS Trainium, Trainium UltraClusters (up to 40,000 chips), EC2 Trn1 instances

**Year:** 2024

**Key Achievement:** Part of AWS's $110M investment in university-led generative AI research; researchers receive up to $11M in Trainium credits.

**Source:** [About Amazon - Trainium Investment](https://www.aboutamazon.com/news/aws/amazon-trainium-investment-university-ai-research)

### 102. UC Berkeley – Trainium AI Research Partnership

**Project:** Strategic partnership with AWS for AI and machine learning research using Trainium chips, part of Build on Trainium initiative. Research focuses on large-scale, efficient AI systems.

**AWS Services:** AWS Trainium, Trainium UltraClusters, AWS Inferentia, EC2 Trn1 instances

**Year:** 2024

**Key Achievement:** Access to 40,000 Trainium chips for advancing machine learning research and education; one of two universities receiving up to $11M in Trainium credits.

**Source:** [About Amazon - Trainium Investment](https://www.aboutamazon.com/news/aws/amazon-trainium-investment-university-ai-research)

### 102a. UCLA – Build on Trainium AI Research

**Project:** UCLA participation in Build on Trainium program for AI and machine learning research. UCLA Science Hub for Humanity and Artificial Intelligence actively engaged with program opportunities.

**AWS Services:** AWS Trainium, Trainium UltraClusters, EC2 Trn1 instances

**Year:** 2024-ongoing

**Key Achievement:** Part of $110M investment program; access to dedicated 40,000-chip Trainium research cluster.

**Source:** [UCLA Science Hub Opportunities](https://www.sciencehub.ucla.edu/opportunities/)

### 102b. MIT – 3D Medical Imaging with Trainium

**Project:** MIT researchers trained 3D medical imaging models using AWS Trainium, achieving significant efficiency gains for healthcare AI applications.

**AWS Services:** AWS Trainium, EC2 Trn1 instances

**Year:** 2024

**Key Achievement:** 50% higher throughput and lower cost; reduced training time from months to weeks.

**Source:** [AWS Trainium Research](https://aws.amazon.com/ai/machine-learning/trainium/research/)

### 102c. Stanford University – Build on Trainium Research

**Project:** Stanford participation in Build on Trainium program for advanced AI research and development using AWS's custom ML chips.

**AWS Services:** AWS Trainium, Trainium UltraClusters

**Year:** 2024-ongoing

**Source:** [About Amazon - Trainium Investment](https://www.aboutamazon.com/news/aws/amazon-trainium-investment-university-ai-research/)

### 102d. University of Illinois Urbana-Champaign (UIUC) – Foundation Model Training

**Project:** UIUC research team investigating new training techniques and efficiency improvements for foundation models using AWS Trainium.

**AWS Services:** AWS Trainium, EC2 Trn1 instances

**Year:** 2024-ongoing

**Source:** [AWS Trainium Research](https://aws.amazon.com/ai/machine-learning/trainium/research/)

### 102e. UC Irvine – Trainium Research

**Project:** University of California, Irvine research team investigating training techniques and efficiency improvements for AI models on Trainium infrastructure.

**AWS Services:** AWS Trainium, Trainium UltraClusters

**Year:** 2024-ongoing

**Source:** [AWS Trainium Research](https://aws.amazon.com/ai/machine-learning/trainium/research/)

### 102f. Waseda University – Vision-Language AI Acceleration (Japan)

**Project:** Waseda University research focusing on accelerating vision-language tasks using AWS Trainium chips.

**AWS Services:** AWS Trainium, EC2 Trn1 instances

**Year:** 2024-ongoing

**Key Achievement:** Part of international Build on Trainium program expanding AWS research partnerships to Asia.

**Source:** [AWS Trainium Research](https://aws.amazon.com/ai/machine-learning/trainium/research/)

### 102g. Kingston University London – Genomics AI Research (UK)

**Project:** Kingston University London using language models on AWS Trainium for non-coding DNA variant analysis.

**AWS Services:** AWS Trainium, EC2 Trn1 instances

**Year:** 2024-ongoing

**Source:** [AWS Trainium Research](https://aws.amazon.com/ai/machine-learning/trainium/research/)

### 103. Multiple Universities – Amazon Research Awards Spring 2023 (Generative AI)

**Project:** Nine award recipients across eight universities conducting cutting-edge generative AI research. Recipients include Chitta Baral, Muhao Chen, Jia Deng, Elena Glassman, Carlos Guestrin, Tatsunori Hashimoto, Jonathan Kummerfeld, Ali Mesbah, and Maarten Sap.

**AWS Services:** AWS AI/ML services, Amazon public datasets, AWS promotional credits

**Year:** 2023

**Key Achievement:** Highest number of submissions for a single ARA call for proposals since program inception.

**Source:** [Amazon Science - Spring 2023 Recipients](https://www.amazon.science/research-awards/program-updates/amazon-research-awards-spring-2023-generative-ai-cfp-recipients-announced)

### 104. Carnegie Mellon University – CyLab Automated Reasoning Research

**Project:** Three Amazon Research Awards to CyLab faculty (Limin Jia, Bryan Parno, Corina Pasareanu) for automated reasoning research.

**AWS Services:** AWS promotional credits, Amazon public datasets

**Year:** 2023

**Key Achievement:** Part of 78 recipients representing 54 universities in 14 countries.

**Source:** [CMU CyLab News](https://www.cylab.cmu.edu/news/2023/04/26-faculty-earn-amazon-research-awards.html)

### 105. Carnegie Mellon Tepper School – Fairness in AI Research

**Project:** Yan Huang's Amazon Research Award for fairness in artificial intelligence.

**AWS Services:** AWS promotional credits, AWS AI/ML tools

**Year:** 2023

**Source:** [CMU News](https://www.cmu.edu/news/stories/archives/2023/may/tepper-school-faculty-member-wins-amazon-research-award-for-ai-work)

### 106. UC Irvine – Cybersecurity AI Research

**Project:** Zhou Li's Amazon Research Award for making organizational cyberenvironments safer through AI and machine learning.

**AWS Services:** AWS promotional credits, AWS security tools

**Year:** 2023

**Source:** [UCI Engineering News](https://engineering.uci.edu/news/2023/2/uci-engineering-computer-scientist-wins-amazon-research-award)

### 107. Columbia University – Fall 2023 Research Awards

**Project:** Three Columbia Engineering researchers (Matei Ciocarlie, Tal Malkin, Carl Vondrick) received Amazon Research Awards as part of Fall 2023 cohort.

**AWS Services:** AWS promotional credits, Amazon public datasets

**Year:** 2023

**Key Achievement:** Part of 98 Fall 2023 recipients representing 51 universities in 15 countries.

**Source:** [Columbia Engineering News](https://www.engineering.columbia.edu/about/news/three-columbia-engineering-researchers-win-amazon-research-awards)

---

## University Science Hub Partnerships

### 108. MIT – Amazon Science Hub 2023 Awards

**Project:** Four MIT professors (Navid Azizan, Yoon Kim, Samuel Madden, Vivienne Sze) and two doctoral candidates (Sirui Li, Yue Meng) received gift project awards and fellowships for machine learning and robotics research.

**AWS Services:** AWS cloud computing, AWS research credits

**Year:** 2023

**Key Achievement:** Projects advance safe deployment of machine-learned models in autonomous systems and efficient ML on edge devices.

**Source:** [Amazon Science - MIT Hub 2023](https://www.amazon.science/news-and-features/amazon-and-mit-announce-science-hub-2023-gift-project-awards-and-fellowships)

### 109. UCLA Science Hub – 2023 AI Research Awards

**Project:** Five UCLA professors (Kai-Wei Chang, Nanyun Peng, Cho-Jui Hsieh, Chenfanfu Jiang, Jens Palsberg) received Science Hub for Humanity and AI awards for projects including document understanding, LLM efficiency, and program analysis.

**AWS Services:** AWS cloud computing, AWS AI/ML services

**Year:** 2023 (announced February 2024)

**Source:** [Amazon Science - UCLA Hub 2023](https://www.amazon.science/news-and-features/amazon-and-ucla-announce-2023-science-hub-awards)

### 110. UCLA Science Hub – Healthcare AI Applications

**Project:** Four researchers (Adrian Au, Jonathan Kao, Ying Nian Wu, Ricky Savjani) exploring practical applications of AI in healthcare through the Science Hub.

**AWS Services:** AWS AI/ML services, AWS healthcare cloud

**Year:** 2023 (announced November 2023)

**Source:** [Amazon Science - UCLA Healthcare AI](https://www.amazon.science/news-and-features/amazon-ucla-announce-recipients-of-gift-awards-for-applications-of-ai-in-healthcare)

### 111. Virginia Tech – Amazon AI/ML Research Initiative

**Project:** Two PhD fellows (Minsu Kim studying federated learning, Ying Shen) and five faculty members conducting research on efficient and robust machine learning systems.

**AWS Services:** AWS Trainium credits, AWS AI/ML services

**Year:** 2023-2024

**Key Achievement:** Minsu Kim's research builds green, sustainable, and robust federated-learning solutions for AI-embedded products.

**Source:** [Amazon Science - Virginia Tech](https://www.amazon.science/news-and-features/amazon-and-virginia-tech-announce-2023-2024-fellowship-faculty-research-award-recipients)

### 112. University of Washington – Amazon Science Hub Launch

**Project:** $25M ten-year collaboration launched March 2023 supporting collaborative research, education, and outreach in AI, robotics, and engineering. Funds fellowships for PhD students in College of Engineering and faculty-led research projects.

**AWS Services:** AWS Cloud computing, AWS cloud credits for research

**Year:** 2023-ongoing

**Source:** [UW Science Hub News](https://www.sciencehub.uw.edu/news-events/)

### 113. Max Planck Society – Amazon Science Hub Sustainability Awards

**Project:** Two researchers (Joerg Stueckler, Dirk Ponge) received gift funding for sustainability-focused AI research projects aimed at minimizing waste. Part of first Amazon Science Hub outside the United States.

**AWS Services:** AWS cloud computing

**Year:** 2023 (June)

**Source:** [Amazon Science - Max Planck Sustainability](https://www.amazon.science/news-and-features/amazon-and-max-planck-society-announce-science-hub-sustainability-project-awards)

---

## Canadian University Research Computing

### 114. University of Alberta – AI Discovery Place

**Project:** Amazon Web Services and University of Alberta created the "Artificial Intelligence Discovery Place" at Enterprise Square campus, democratizing access to AI technology for researchers and students using AWS Cloud computing.

**AWS Services:** AWS Cloud computing, AWS AI/ML services

**Year:** 2024 (January announcement)

**Key Achievement:** Builds on partnership that started in 2016; leverages Calgary data centre hub opened December 2023.

**Source:** [University of Alberta Folio](https://www.ualberta.ca/en/folio/2024/01/amazon-web-services-u-of-a-team-up.html)

### 115. McMaster University – Health Sciences Data Protection

**Project:** McMaster Faculty of Health Sciences migrated to Clumio's AWS-based data protection solution, securing valuable health sciences research datasets.

**AWS Services:** Amazon EC2, Amazon EBS, AWS Lambda

**Year:** 2023

**Key Achievement:** Reduced costs by 50%, gained 85% more efficiency, migrated in 7 hours from on-premises backup.

**Source:** [AWS Partner Success Story](https://aws.amazon.com/partners/success/mcmaster-university-clumio/)

### 116. University of British Columbia – RONIN HPC Platform & Serratus Project

**Project:** UBC Advanced Research Computing leverages RONIN platform on AWS to quickly spin up 8,640-core clusters. Serratus project dynamically accesses over 22,250 CPUs for genomics analysis.

**AWS Services:** AWS EC2, AWS compute infrastructure via RONIN

**Year:** 2023-ongoing

**Key Achievement:** 75% CPU efficiency; democratizes access to HPC for researchers without cloud expertise.

**Source:** [AWS Public Sector Blog - UBC RONIN](https://aws.amazon.com/blogs/publicsector/accelerating-economic-research-ubc-high-performance-computing-ronin-aws/)

### 117. University of British Columbia – Cloud Innovation Centre

**Project:** UBC Cloud Innovation Centre (CIC) collaboration with AWS opened January 2020, producing 50+ prototypes in healthcare, education, and research sectors.

**AWS Services:** AWS management services, AWS cloud infrastructure

**Year:** 2020-ongoing

**Source:** [AWS Public Sector Blog - UBC CIC](https://aws.amazon.com/blogs/publicsector/university-of-british-columbia-cloud-innovation-centre-governing-an-innovation-hub-using-aws-management-services/)

---

## 2023 University Research Initiatives

### 118. Arizona State University – AI Cloud Innovation Center

**Project:** Launch of ASU Artificial Intelligence Cloud Innovation Center (CIC) powered by AWS to help global government agencies, education institutions, and nonprofits address mission challenges with AI.

**AWS Services:** AWS cloud infrastructure, AWS AI services

**Year:** 2023 (announced at re:Invent 2023)

**Source:** [AWS Public Sector Blog - re:Invent 2023](https://aws.amazon.com/blogs/publicsector/dave-levy-reinvent-innovation-talk-highlights/)

### 119. Case Western Reserve University – Cloud Analytics Platform

**Project:** CWRU created opportunities for evolution through AWS Cloud services for campus-wide analytics and institutional research.

**AWS Services:** AWS cloud services

**Year:** 2023 (February)

**Source:** [AWS Public Sector Blog - Higher Education](https://aws.amazon.com/blogs/publicsector/advanced-analytics-improve-efficiency-provide-important-student-insights-higher-education-institutions/)

### 120. Indiana University – Automated Transcription Service

**Project:** Indiana University's Automated Transcription Service (ATS) launched university-wide for social science research, providing secure automated transcription on AWS.

**AWS Services:** AWS transcription services, AWS secure infrastructure

**Year:** 2023 (late)

**Source:** [AWS Public Sector Blog - Indiana University](https://aws.amazon.com/blogs/publicsector/indiana-university-streamlines-social-science-research-with-secure-automated-transcription-on-aws/)

### 121. University of Arizona – KMap AI-Powered Discovery

**Project:** KMap system transforms research collaboration with AI-powered discovery on AWS, enabling researchers to discover connections across disparate knowledge domains.

**AWS Services:** AWS AI services, AWS cloud infrastructure

**Year:** 2023-ongoing

**Source:** [AWS Public Sector Blog - U of A KMap](https://aws.amazon.com/blogs/publicsector/how-the-university-of-arizonas-kmap-transforms-research-collaboration-with-ai-powered-discovery-on-aws/)

### 122. Stanford University – AIMI AWS Cloud Credit Program

**Project:** Stanford's Center for Artificial Intelligence in Medicine & Imaging (AIMI) collaborates with AWS to offer researchers cloud credits up to $25,000 for 12-month AI research in health and medicine.

**AWS Services:** AWS Cloud Credit for Research Program

**Year:** 2023-ongoing

**Source:** [Stanford AIMI](https://aimi.stanford.edu/aws-cloud-credit-program)

---

## Amazon Sustainability Data Initiative (ASDI) Partnerships

### 123. Washington University in St. Louis – Global PM2.5 Air Quality Data

**Project:** Randall Martin's Atmospheric Composition Analysis Group provides satellite-derived fine particulate matter (PM2.5) concentrations (SatPM2.5 dataset version GL06.02.04) covering 1998-2023 at high resolution (0.01° × 0.01°), hosted on AWS Registry of Open Data for global air quality and public health research.

**AWS Services:** AWS Registry of Open Data, Amazon S3, Amazon Sustainability Data Initiative (ASDI)

**Year:** 1998-2023 (ongoing updates)

**Key Achievement:** Provides global air quality data freely accessible to researchers worldwide; supports environmental and public health assessments across multiple NASA satellite instruments.

**Source:** [AWS Registry of Open Data - SatPM2.5](https://registry.opendata.aws/surface-pm2-5-v6gl/), [WashU ACAG](https://sites.wustl.edu/acag/datasets/surface-pm2-5/)

### 124. Cornell University – Climate Simulation Research (ASDI)

**Project:** Cornell research team participating in Solar Radiation Management Governance Initiative program using ASDI resources for climate simulations studying impacts on agriculture, drought, flooding, and human health.

**AWS Services:** Amazon Sustainability Data Initiative (ASDI), AWS cloud computing, HPC solutions

**Year:** 2023-ongoing

**Key Achievement:** Using NCAR's Community Earth System Model Version 2 with AWS cloud resources and technical support for sophisticated climate modeling.

**Source:** [About Amazon Sustainability](https://www.aboutamazon.com/news/sustainability/amazons-sustainable-data-initiative-helps-advance-climate-research)

### 125. Rutgers University – Climate Intervention Research (ASDI)

**Project:** Rutgers research team using Amazon Sustainability Data Initiative resources for climate simulation studies examining Earth and human system impacts in various global regions.

**AWS Services:** Amazon Sustainability Data Initiative (ASDI), AWS HPC infrastructure

**Year:** 2023-ongoing

**Source:** [About Amazon Sustainability](https://www.aboutamazon.com/news/sustainability/amazons-sustainable-data-initiative-helps-advance-climate-research)

### 126. Colorado State University – Climate Modeling (ASDI)

**Project:** Colorado State University participating in ASDI-supported program for climate simulations using advanced atmospheric models to study global climate impacts.

**AWS Services:** Amazon Sustainability Data Initiative (ASDI), AWS cloud computing

**Year:** 2023-ongoing

**Key Achievement:** Access to next-generation high performance computing solutions for climate research.

**Source:** [About Amazon Sustainability](https://www.aboutamazon.com/news/sustainability/amazons-sustainable-data-initiative-helps-advance-climate-research)

### 127. University of Washington – ASDI Climate Research

**Project:** University of Washington research team participating in climate research program using ASDI resources, studying climate and climate-intervention responses.

**AWS Services:** Amazon Sustainability Data Initiative (ASDI), AWS cloud infrastructure

**Year:** 2023-ongoing

**Source:** [About Amazon Sustainability](https://www.aboutamazon.com/news/sustainability/amazons-sustainable-data-initiative-helps-advance-climate-research)

---

## Generative AI Research & Innovation Center Partnerships

### 128. Cornell University – AI-Powered Socratic Dialogue Chat

**Project:** Cornell University collaborated with AWS Generative AI Innovation Center to develop an AI-powered Socratic Dialogue classroom chat-based assistant. Deployed across five courses in fall 2024, reaching over 500 students.

**AWS Services:** AWS Generative AI Innovation Center, Amazon Bedrock, AWS Professional Services

**Year:** 2024 (spring PoC, fall deployment)

**Key Achievement:** Successfully deployed campus-wide AI learning assistant; part of four-project Cornell-AWS GenAI collaboration.

**Source:** [AWS Public Sector Blog - Cornell Socratic Chat](https://aws.amazon.com/blogs/publicsector/transforming-classroom-conversations-cornell-universitys-ai-powered-socratic-chat-on-aws/)

### 129. Weill Cornell Medicine – Medical Archive Digitization with GenAI

**Project:** Weill Cornell Medicine partnered with AWS Generative AI Innovation Center in May 2024 to digitize historical medical archives using generative AI, preserving and making accessible valuable medical historical documents.

**AWS Services:** AWS Generative AI Innovation Center, generative AI services

**Year:** 2024

**Source:** [AWS Public Sector Blog - Weill Cornell Archives](https://aws.amazon.com/blogs/publicsector/weill-cornell-medicine-digitizes-historical-medical-archives-with-generative-ai-on-aws/)

### 130. Dartmouth College – Claude for Education Partnership

**Project:** Dartmouth became the first Ivy League institution to partner with AWS and Anthropic to launch AI at institutional scale. Partnership includes Claude for Education and Amazon Bedrock access for all students, faculty, and staff. Preparing Class of 2029 as Dartmouth's first "AI-fluent" undergraduate class.

**AWS Services:** Amazon Bedrock, Claude for Education (via Anthropic partnership)

**Year:** 2025 (announced December)

**Key Achievement:** First Ivy League institution-scale AI deployment; historically significant (Dartmouth hosted 1956 conference that created AI as a discipline).

**Source:** [Dartmouth News](https://home.dartmouth.edu/news/2025/12/dartmouth-announces-ai-partnership-anthropic-and-aws)

---

## Open Data Registry - University Research Datasets

### 131. University of Oxford – APAD Air Pollution Detection

**Project:** Air Pollution Asset-Level Detection (APAD) project from Smith School of Enterprise and the Environment built ML models to analyze 1.2 million satellite images, mapping 1.5 million square miles in Indo-Gangetic Plain and identifying 50,000+ pollution sources including brick kilns and field burning.

**AWS Services:** Amazon EC2 C5 Instances, Amazon EC2 G4 Instances (NVIDIA T4 GPUs), AWS Registry of Open Data

**Year:** 2024 (May launch, November open data release)

**Key Achievement:** Increased processing throughput by 400% (5,000 to 30,000 square miles/day); made data open source on AWS Registry of Open Data in November 2024.

**Source:** [AWS Case Study - Oxford APAD](https://aws.amazon.com/solutions/case-studies/oxford-apad-case-study/)

### 132. University of Oxford – GLAM Museum Collections ML Cataloging

**Project:** Oxford Gardens, Libraries & Museums (GLAM) housing 21 million objects built and deployed 11 machine learning models in 10 weeks to automatically catalog artifacts, tackling massive object cataloging backlog. Focused on Ashmolean Museum coin collection.

**AWS Services:** Amazon SageMaker, Amazon EC2 P3 Instances (NVIDIA V100 GPUs), Amazon EC2 G4 Instances, Amazon EC2 Spot Instances

**Year:** 2023-2024

**Key Achievement:** 90% cost reduction using Spot Instances (10% of On-Demand pricing); 50% faster training time; framework-agnostic implementation with PyTorch.

**Source:** [AWS Case Study - Oxford GLAM](https://aws.amazon.com/solutions/case-studies/oxford-case-study/)

### 133. Seoul National University – Steinegger Lab Bioinformatics Datasets

**Project:** Steinegger Lab provides biological databases and resources critical for protein sequence and structure analysis, supporting ColabFold, MMseqs2, and Foldseek/Foldcomp—high-performance computational tools with 800,000+ installations and 10M+ web service uses.

**AWS Services:** AWS Registry of Open Data, Amazon S3

**Year:** 2023-ongoing

**Key Achievement:** Includes MMseqs2 datasets (UniRef30, BFD, ColabFold environmental databases) and Foldseek datasets (AlphaFold Database, PDB, SwissProt, CATH) for protein structure analysis.

**Source:** [AWS Registry of Open Data - Steinegger Lab](https://registry.opendata.aws/steineggerlab/)

### 134. University of Colorado Boulder – DANRA Meteorological Reanalysis

**Project:** Space Weather Technology, Research and Education Center (TREC) manages DANRA, a high-resolution meteorological reanalysis dataset for Denmark and Northwestern Europe covering September 1990 to December 2023.

**AWS Services:** AWS Registry of Open Data, Amazon S3, Amazon Sustainability Data Initiative (ASDI)

**Year:** 1990-2023 (dataset coverage)

**Source:** [AWS Registry of Open Data - ASDI](https://registry.opendata.aws/collab/asdi/)

### 135. NASA HEASARC – High Energy Astrophysics Data

**Project:** Beginning in 2023 as part of NASA's Year of Open Science, the High Energy Astrophysics Science Archive Research Center made data from 30+ missions spanning 50 years available on AWS, including Chandra, Fermi, NuSTAR, NICER, and Swift observatories.

**AWS Services:** AWS Registry of Open Data, Amazon S3, NASA Space Act Agreement

**Year:** 2023-ongoing

**Key Achievement:** Free cloud access without egress costs; weekly data synchronization; enables Fornax Initiative cloud analysis capabilities.

**Source:** [NASA HEASARC Cloud Access](https://heasarc.gsfc.nasa.gov/docs/archive/cloud.html), [AWS Registry - NASA HEASARC](https://registry.opendata.aws/nasa-heasarc/)

### 136. Institut Pasteur – Logan SRA Genome Assembly

**Project:** Logan project re-analyzed NCBI Sequence Read Archive (SRA) December 2023 freeze containing 50 petabases across 27 million sequencing datasets. Processed 20 petabases in 30 hours using 2.18M AWS Graviton cores to create compressed, accessible genome assemblies.

**AWS Services:** AWS Batch, AWS Graviton, Amazon S3, AWS Registry of Open Data

**Year:** 2023 (December freeze)

**Key Achievement:** Assembled 27.3 million accessions (96% of SRA); 20-100x smaller size than original; 30-hour processing time; supports IndexThePlanet five-year ERC project.

**Source:** [AWS Registry - Pasteur Logan](https://registry.opendata.aws/pasteur-logan/), [AWS Public Sector Blog - Institut Pasteur](https://aws.amazon.com/blogs/publicsector/the-institut-pasteur-is-creating-a-searchable-dna-database-of-all-life-on-earth-using-aws/)

---

## International University Research (Europe & Asia)

### 137. Singapore Eye Research Institute – Retinal Disease Classification with AutoML

**Project:** SERI evaluated Amazon Rekognition AutoML platform for classifying retinal diseases from optical coherence tomography (OCT) scans, demonstrating impeccable diagnostic performance in categorizing various retinal diseases using OCT imaging.

**AWS Services:** Amazon Rekognition (AutoML), AWS cloud infrastructure

**Year:** 2024 (February)

**Key Achievement:** Peer-reviewed study showing clinical-grade diagnostic performance for retinal disease classification using AWS AutoML.

**Source:** [AWS Public Sector Blog - Singapore Eye Research Institute](https://aws.amazon.com/blogs/publicsector/singapore-eye-research-institute-categorizes-retinal-diseases-using-amazon-rekognition/)

### 138. ETH Zurich & EPFL – Apertus Open-Source Multilingual LLM

**Project:** Swiss AI Initiative jointly launched by ETH Zurich and EPFL released Apertus, a family of open-source LLMs (70B and 8B models) supporting 1,000+ languages, trained on Swiss ALPS supercomputer with 4,000+ NVIDIA GH200 GPUs. AWS provides global accessibility through Amazon SageMaker AI.

**AWS Services:** Amazon SageMaker AI, AWS Europe (Zurich) Region

**Year:** 2024-2025

**Key Achievement:** Open-source multilingual LLM accessible via AWS infrastructure; part of Swiss National AI Institute (SNAI) backed by CHF 20M funding (2025-2028).

**Source:** [AWS Alps Blog - Apertus LLM](https://aws.amazon.com/blogs/alps/switzerlands-open-source-apertus-llms-now-available-on-amazon-sagemaker-ai/)

### 139. IU International University of Applied Sciences – EdTech Cloud Migration (Germany)

**Project:** Germany's largest university by enrollment (100,000+ students) and Europe's fastest-growing university migrated to AWS in 2020 to improve access to education for everybody, everywhere, at any time. Uses 38 AWS services hosted in Europe (Frankfurt) Region powered by 95%+ renewable energy.

**AWS Services:** 38 AWS services, Europe (Frankfurt) Region

**Year:** 2020-ongoing (active through 2024)

**Key Achievement:** Supports 100K+ students globally; sustainability-focused infrastructure; student-centered operations at scale.

**Source:** [AWS Case Study - IU International University](https://aws.amazon.com/solutions/case-studies/iu-international-university-of-applied-sciences/)

### 140. NGI Sweden / SciLifeLab – Genomics Cloud Computing Infrastructure

**Project:** National Genomics Infrastructure (NGI) at SciLifeLab (one of Europe's largest sequencing facilities with Karolinska Institutet staff) uses AWS for analyzing massive genomics data pipelines, storing petabytes of data, and sharing results with collaborators. Hosts AWS In Spotlight Webinar Series on cloud computing initiatives.

**AWS Services:** AWS compute, storage, database services; AWS-iGenomes Reference genomes on S3

**Year:** 2024-ongoing

**Key Achievement:** Enables researchers to process complex genomics workloads cost-effectively; supports Europe's largest sequencing facility operations.

**Source:** [NGI Sweden - AWS Webinar Series](https://ngisweden.scilifelab.se/events/aws-in-spotlight-webinar-series/)

### 146. University of Sheffield – Data Connect Trusted Research Environment (UK)

**Project:** In late 2021, the University of Sheffield launched Data Connect, a centralized Trusted Research Environment (TRE) built on AWS using RONIN Core and RONIN Isolate solutions, enabling researchers to securely access and process sensitive health and social care data.

**AWS Services:** AWS infrastructure (via RONIN), compute, storage, security and compliance services

**Year:** 2021-present

**Key Achievement:** Achieved ISO 27001 certification and UK SATRE framework compliance; reduced duplication across research groups; achieved cost recovery within first year; researchers previously spent up to 75% of grant time trying to access data.

**Source:** [AWS Public Sector Blog - University of Sheffield](https://aws.amazon.com/blogs/publicsector/unlocking-research-potential-how-the-university-of-sheffield-and-ronin-accelerate-secure-research-through-data-connect/)

### 147. San Francisco State University – FEATURE Protein Functional Site Prediction

**Project:** Computer Science department's machine learning project FEATURE predicts functional sites in proteins and 3D molecular structures, in collaboration with Stanford Helix Group and supported by NIH. Deployed cluster to EC2 with MIT StarCluster.

**AWS Services:** Amazon EC2, Amazon EBS (Elastic Block Store)

**Year:** Early 2020s

**Key Achievement:** Amazon EC2 vastly superior in CPU cycles per cost compared to existing infrastructure; experiments that used to take weeks now run overnight.

**Source:** [AWS Case Study - San Francisco State University](https://aws.amazon.com/solutions/case-studies/san-francisco-state-university/)

### 148. UC Santa Cruz Genomics Institute – Toil Workflow System

**Project:** The Computational Genomics Lab created Toil, a portable open-source software solution for running scientific workflows, and chose to run it on AWS for RNA-seq analysis. Delivers results to collaborators in days instead of months.

**AWS Services:** Amazon EC2, AWS infrastructure

**Year:** Early 2020s

**Key Achievement:** Accelerated genomics analysis from months to days; created widely-used open-source workflow tool for scientific computing.

**Source:** [AWS Case Study - UC Santa Cruz Genomics Institute](https://aws.amazon.com/solutions/case-studies/uc-santa-cruz-genomics-institute/)

### 149. Harvard Medical School – Patient Simulation with Spot Instances

**Project:** Researchers run patient simulations on Amazon EC2 using Spot Instances for biomedical cloud computing, as detailed in their paper "Biomedical Cloud Computing With Amazon Web Services."

**AWS Services:** Amazon EC2 Spot Instances

**Year:** 2021 (February)

**Key Achievement:** Achieved over 50% cost savings using Spot Instances for computational biomedical research.

**Source:** [AWS Blog - Scientific Computing with EC2 Spot Instances](https://aws.amazon.com/blogs/aws/scientific-computing-with-ec2-spot-instances/)

### 150. Princeton University – AWS Research Computing Training

**Project:** Princeton Research Computing launched AWS training workshops for researchers, presenting primers on cloud services including storage options, virtual machine management, cost management, and accessing free credits.

**AWS Services:** AWS compute, storage, various research services

**Year:** 2021

**Key Achievement:** Institutional AWS training program enabling researchers across disciplines to leverage cloud computing; AWS Enterprise Agreement with 15% data egress discount for qualified researchers.

**Source:** [Princeton Research Computing](https://researchcomputing.princeton.edu/events/2021/primer-amazon-web-services-aws)

### 151. Johns Hopkins APL – BossDB Neuroscience Data Platform

**Project:** Johns Hopkins Applied Physics Laboratory expanded partnership with AWS through the Open Data Sponsorship Program to support Brain Observatory Storage Service & Database (BossDB), storing high-resolution neuroscience datasets. Uses Lambda, DynamoDB, and S3 with tools for image processing, annotation, analysis, and visualization.

**AWS Services:** AWS Lambda, Amazon DynamoDB, Amazon S3, AWS Open Data Sponsorship Program

**Year:** 2021 (July)

**Key Achievement:** Cloud-native neuroscience data ecosystem enabling worldwide access to brain mapping data.

**Source:** [Johns Hopkins APL News](https://www.jhuapl.edu/news/news-releases/210722b-BossDB-Amazon-Web-Services-brain-neuroscience), [ExecutiveBiz](https://executivebiz.com/2021/07/johns-hopkins-apl-aws-expand-partnership-on-cloud-native-neuroscience-database/)

### 152. Carnegie Mellon University – Amazon Graduate Research Fellows Program

**Project:** Amazon and CMU launched Amazon Graduate Research Fellows Program in May 2021, supporting PhD students in automated reasoning, computer vision, robotics, language technology, machine learning, operations research, and data science. Second cohort announced March 2022.

**AWS Services:** Amazon Research funding, AWS research infrastructure

**Year:** 2021-2022

**Key Achievement:** Multi-year fellowship program supporting graduate students at one of top CS programs; 10+ fellows across two cohorts.

**Source:** [Amazon Science - CMU Fellows](https://www.amazon.science/academic-engagements/new-amazon-graduate-research-fellows-announced-at-carnegie-mellon), [CMU CSD News](https://csd.cmu.edu/news/xing-receives-amazon-research-award)

### 153. MIT – MIT-Amazon Science Hub

**Project:** Amazon and MIT established the MIT-Amazon Science Hub in October 2021, funding collaborative research, education, and outreach in AI and robotics. Hosts annual symposia bringing together Amazon researchers, MIT faculty, postdocs, and doctoral students. Amazon Fellows announced each year.

**AWS Services:** Amazon Science Hub funding, AWS research infrastructure

**Year:** 2021-present

**Key Achievement:** Major 5-year research partnership; 2022 symposium featured current collaborations, Amazon Fellows, roundtables on robotics and conversational AI.

**Source:** [Amazon Science - MIT Hub](https://www.amazon.science/news-and-features/amazon-and-mit-research-symposium-focused-on-cutting-edge-technology)

### 154. Georgia Tech – Cloud Computing Research Credits Program

**Project:** Georgia Tech's IDEaS and School of Computer Science provided AWS cloud computing resources for faculty teaching and research, with AWS teaching credits available for Fall 2021 and Spring 2022 semesters.

**AWS Services:** AWS cloud computing credits, compute and storage services

**Year:** 2021-2022

**Key Achievement:** Institutional cloud credits program enabling faculty across computer science to integrate AWS into coursework and research projects.

**Source:** [Georgia Tech Research](https://research.gatech.edu/data/cloud-computing-credit-awards)

### 155. Northwestern University – Kellogg School Data Pipeline Architecture

**Project:** Northwestern IT Research Computing Services collaborated with Kellogg Research Support to architect and automate a data pipeline across local systems, Quest/Kellogg Linux Cluster, and AWS via Globus, enabling research requiring multiple computing and storage resources (Professor Bernard Black's group).

**AWS Services:** AWS data storage and compute, Globus integration

**Year:** 2021

**Key Achievement:** Multi-platform data pipeline bridging on-premises HPC and AWS cloud for complex research workflows.

**Source:** [Northwestern 2021 Annual Report](https://sites.northwestern.edu/researchcomputing/2022/03/04/2021-computational-research-services-annual-report/)

### 156. University of Washington – UW-Amazon Science Hub

**Project:** Amazon and University of Washington founded the UW-Amazon Science Hub in February 2022, funding collaborative research, education, and outreach in generative AI, robotics, natural language processing, and cloud computing. Quarterly proposal evaluations with AWS Cloud Credits awards up to $20,000.

**AWS Services:** Amazon Science Hub funding, AWS Cloud Credits for Research

**Year:** 2022-present

**Key Achievement:** $1.9M multi-year partnership focusing on foundational and emerging technologies; AWS Research Credits Program with substantial computing awards.

**Source:** [Amazon Science - UW Hub](https://www.amazon.science/news-and-features/amazon-and-university-of-washington-announce-new-science-hub-fellows-and-research-awards), [GeekWire](https://www.geekwire.com/2022/new-science-hub-to-launch-at-univ-of-washington-with-1-9m-from-amazon/), [UW eScience](https://escience.washington.edu/software-engineering/cloud/aws-credits/)

### 157. Johns Hopkins University – JHU + Amazon Initiative for Interactive AI

**Project:** Johns Hopkins and Amazon announced a 5-year partnership in April 2022 establishing the JHU + Amazon Initiative for Interactive AI, advancing machine learning, computer vision, natural language understanding, and speech processing. Amazon investment includes doctoral fellowships, sponsored research funding, gift funding, and community projects.

**AWS Services:** Amazon Research funding, AWS infrastructure

**Year:** 2022-2027

**Key Achievement:** Major 5-year partnership with one of top research universities (JHU: $3.4B R&D spending, #1 NSF HERD); focuses on interactive AI research.

**Source:** [Johns Hopkins Hub](https://hub.jhu.edu/2022/04/07/amazon-whiting-school-collaboration-for-artificial-intelligence/), [JHU MINDS](https://www.minds.jhu.edu/2022/04/12/johns-hopkins-and-amazon-collaborate-to-explore-transformative-power-of-ai/)

### 158. Stanford University – Snyder Lab Deep Data Research Computing Center

**Project:** In 2022, Stanford's Snyder Lab launched the Deep Data Research Computing Center (DDRCC), creating My Personal Health Dashboard (MyPHD), a secure health management system providing data acquisition, storage, and analysis capabilities for researchers using AWS infrastructure.

**AWS Services:** AWS compute, storage, database services

**Year:** 2022

**Key Achievement:** Personal health data platform for precision medicine research; supports Dr. Snyder's work on early disease detection (previously demonstrated COVID-19 smartwatch detection).

**Source:** [Stanford Medicine - Snyder Lab](https://med.stanford.edu/snyderlab/news/2022-snyder-lab-launches-deep-data-research-computing-center.html)

### 159. Columbia University – Center for AI Technology (CAIT) Research Fellows

**Project:** Columbia Center of AI Technology (CAIT), established in 2020 with $5M Amazon funding over 5 years, announced inaugural faculty research awards and PhD fellowships in February 2021. Annual Research Showcase features CAIT Amazon Fellowship recipients. Research spans personalized decision making, machine perception, and translational AI applications.

**AWS Services:** Amazon Research funding, AWS AI/ML services

**Year:** 2021-present

**Key Achievement:** $5M partnership supporting PhD fellowships, faculty-led research with postdocs, collaborative events; Amazon research teams (Alexa, AWS, SCOT, IPC, SAAR) located in NYC.

**Source:** [Amazon Science - Columbia](https://www.amazon.science/academic-engagements/amazon-teams-up-with-columbia-university-for-research-showcase), [Columbia Engineering](https://www.amazon.science/academic-engagements/columbia-engineering-and-amazon-announce-creation-of-new-york-research-center)

### 160. Yale University – SpinupPlus Secure Research Computing Platform

**Project:** Yale launched SpinupPlus, powered by AWS cloud-based computing, allowing researchers to quickly launch secure virtual servers and infrastructure for data analysis, web applications, and research computing needs while ensuring institutional compliance and scalability. Reviewed and approved by Yale and Yale New Haven Health System for highest privacy, regulatory, compliance, and security standards.

**AWS Services:** Amazon EC2, AWS security and compliance services, AWS infrastructure

**Year:** 2021-2022

**Key Achievement:** Enterprise-grade AWS research platform meeting HIPAA and institutional compliance requirements; enables rapid deployment of secure computing environments.

**Source:** [Yale Research](https://research.yale.edu/announcements/new-secure-research-computing-platforms-available-large-scale-data-analysis)

### 161. University of California Irvine – Petabyte-Scale Research Data Backup

**Project:** UCI backed up over 5 petabytes of research data (250+ million files) from ~1,500 faculty research lab environments using a custom system with rclone and AWS services. Automated daily backups to S3 with lifecycle policies moving data to S3 Glacier Deep Archive for long-term storage.

**AWS Services:** Amazon S3, S3 Glacier Deep Archive, Amazon CloudWatch, Amazon DynamoDB, AWS Lambda, AWS Step Functions, S3 Batch Operations, Amazon EventBridge, Amazon Athena

**Year:** 2021-present

**Key Achievement:** Centralized backup solution for decentralized research labs at scale; efficient cost model for petabyte-scale research data protection.

**Source:** [AWS Storage Blog - UC Irvine](https://aws.amazon.com/blogs/storage/university-of-california-irvine-backs-up-petabytes-of-research-data-to-aws/)

### 162. UC Santa Cruz Genomics Institute – Dockstore AWS Integration

**Project:** UC Santa Cruz Genomics Institute collaborated with AWS to integrate Dockstore bioinformatics workflow platform with Amazon Genomics CLI, allowing researchers to quickly execute bioinformatics pipelines on AWS's global cloud infrastructure.

**AWS Services:** Amazon Genomics CLI, AWS compute infrastructure, workflow execution services

**Year:** 2022 (April)

**Key Achievement:** Democratized access to cloud-based genomics analysis; enabled rapid execution of complex bioinformatics workflows without cloud expertise.

**Source:** [UC Santa Cruz News](https://news.ucsc.edu/2022/04/dockstore-aws-integration/), [AWS Case Study](https://aws.amazon.com/solutions/case-studies/uc-santa-cruz-genomics-institute/)

### 163. Baylor College of Medicine – All of Us Research Genomics Scaling

**Project:** Baylor College of Medicine Human Genome Sequencing Center scaled the NIH All of Us Research Program to deliver genomic data to over one million individuals. In early 2021, production quadrupled to over 4,000 samples per month—four times greater than any previous workload.

**AWS Services:** AWS Step Functions, AWS Batch, AWS Lambda, Amazon Athena, Amazon QuickSight, Amazon EC2

**Year:** 2021-2024

**Key Achievement:** Reduced bioinformatic analysis from 80 hours to 2 hours per sample; scaled to unprecedented production levels using AWS serverless and batch compute.

**Source:** [AWS Public Sector Blog - Baylor](https://aws.amazon.com/blogs/publicsector/building-resilient-scalable-clinical-genomics-pipeline-aws/)

### 164. North Carolina State University – NCICS Climate Data Analysis

**Project:** NC State's North Carolina Institute for Climate Studies (NCICS) used AWS for large-scale climate dataset analysis as part of Amazon Sustainability Data Initiative, processing temperature and albedo data at unprecedented scales.

**AWS Services:** AWS Batch, Amazon EC2, Array Jobs, AWS compute infrastructure

**Year:** 2021-2022

**Key Achievement:** Completed albedo processing 50x faster on AWS than on-premises at less than 1/6th the cost; processed 100-member temperature ensemble in 6.5 days vs. over a month locally.

**Source:** [AWS Public Sector Blog - Climate Research](https://aws.amazon.com/blogs/publicsector/embracing-the-cloud-for-climate-research/), [Amazon Sustainability](https://sustainability.aboutamazon.com/environment/the-cloud/amazon-sustainability-data-initiative)

### 165. University of Minnesota – Mental Health Machine Learning

**Project:** Assistant Professor Stevie Chancellor received Amazon Research Award (Spring/Summer 2022) for "Collaborative and socially translucent task instructions for emotionally heavy and subjective annotation tasks," using machine learning to improve mental health data analysis.

**AWS Services:** AWS AI/ML services, AWS promotional credits, compute infrastructure

**Year:** 2022

**Key Achievement:** Applied machine learning techniques to sensitive mental health data annotation and analysis.

**Source:** [University of Minnesota CSE News](https://cse.umn.edu/cs/news/stevie-chancellor-earns-amazon-grant-machine-learning-and-mental-health-project)

---

## AWS HPC Platforms & Partner Solutions for Research

### 141. University of Texas at Austin – UT Sage AI Tutor Platform

**Project:** UT Austin partnered with AWS Generative AI Innovation Center to develop UT Sage, a faculty-guided AI tutor platform serving 52,000 students. Instructors create customized virtual tutors aligned with course content for Socratic-style dialogue. Launched beta March 2025, general availability August 2025.

**AWS Services:** AWS Generative AI Innovation Center, Amazon Bedrock, Claude 3.5 Haiku, Claude 3 Sonnet (RAG pipeline)

**Year:** 2024-2025

**Key Achievement:** Production AI tutoring service at institutional scale; designed by learning scientists, trained by faculty; delivered at no cost through AWS GenAI Innovation Center.

**Source:** [AWS Public Sector Blog - UT Sage](https://aws.amazon.com/blogs/publicsector/personalized-learning-support-at-scale-how-ut-austin-built-a-generative-ai-tutor-platform-on-aws/), [UT Austin News](https://tech.utexas.edu/news/ut-austin-and-aws-launch-ut-sage-ut-austins-homegrown-ai-tutor-platform)

### 142. University of Oxford INET – Agent-Based Economic Modeling

**Project:** Institute for New Economic Thinking (INET) at Oxford Martin School collaborated with AWS Global Impact Compute team to scale agent-based models exploring macroprudential policies' impact on financial stability and societal inequality. Dr. Jagoda Kaszowska-Mojsa led research using HPC on AWS.

**AWS Services:** AWS HPC infrastructure, high performance computing

**Year:** 2024 (February)

**Key Achievement:** Published working paper 2024-06 "Forecasting Macroeconomic Dynamics using a Calibrated Data-Driven Agent-based Model"; enabled large-scale economic simulations previously impossible.

**Source:** [AWS HPC Blog - Agent-Based Models](https://aws.amazon.com/blogs/hpc/how-agent-based-models-powered-by-hpc-are-enabling-large-scale-economic-simulations/)

### 143. UC Davis Health – Cloud Innovation Center Fighting Health Misinformation

**Project:** UC Davis Health Cloud Innovation Center (launched November 2021) partnered with AWS, University of Pittsburgh, and UIUC to develop Project Heal—an open source AI/ML toolkit using generative AI to combat health misinformation. Empowers public health officials to generate targeted communications addressing misinformation.

**AWS Services:** AWS Cloud Innovation Center, Amazon ML services, generative AI, predictive analytics

**Year:** 2023-ongoing

**Key Achievement:** Addresses $50M-$300M daily cost of COVID-19 vaccine misinformation (2021 estimate); first Cloud Innovation Center at an academic medical center; focuses on health equity.

**Source:** [AWS Public Sector Blog - UC Davis Project Heal](https://aws.amazon.com/blogs/publicsector/uc-davis-health-cloud-innovation-center-powered-by-aws-uses-generative-ai-to-fight-health-misinformation/)

### 144. University of Adelaide – RONIN HPC Platform for Genomics

**Project:** University of Adelaide uses RONIN (AWS Select Consulting Partner) to provide researchers with easy access to AWS cloud computing without specialized cloud expertise. Analyzes genomics data in 6 hours instead of two weeks. Bioinformatics workshop ran simultaneously across 8 locations with 152 participants.

**AWS Services:** RONIN platform on AWS, Amazon EC2, HPC clusters

**Year:** 2023-ongoing

**Key Achievement:** No queuing, auto-scaling clusters, spot market pricing reduces costs; $330 USD quota per project/year; complements on-premises Phoenix HPC cluster.

**Source:** [University of Adelaide - RONIN Access](https://www.adelaide.edu.au/technology/research/high-performance-computing/ronin-access-aws)

### 145. University of Sydney – Wildlife Genomics Conservation Research

**Project:** Australasian Wildlife Genomics Group uses RONIN on AWS to sequence genomes of Tasmanian devil and other endangered species. Team led by Dr. Carolyn Hogg completed 18 months of work in six weeks. Australasian Genomes data repository hosts genomic data for Threatened Species Initiative.

**AWS Services:** RONIN platform, Amazon EC2 C5 instances (Intel-powered), AWS ParallelCluster, AWS Registry of Open Data

**Year:** 2023-ongoing

**Key Achievement:** Reduced compute analysis from 10 days to 5 hours; democratizes genome data for conservation; partners include Australian Wildlife Conservancy, Toledo Zoo, Illumina.

**Source:** [AWS Case Study - Wildlife Genomics](https://aws.amazon.com/solutions/case-studies/australasian-wildlife-genomics-group/), [AWS Registry - Australasian Genomes](https://registry.opendata.aws/australasian-genomics/)

---

## Combined Summary (172 Examples Total)

**Geographic Distribution (Combined):**
- **United States: 112 examples** (16 new 2021-2022: UC Irvine, UC Santa Cruz, Baylor, NC State, U Minnesota + Princeton, JHU APL, JHU, CMU, MIT, Georgia Tech, Northwestern, UW, Stanford, Columbia, Yale + previous)
- **United Kingdom: 11 examples** (University of Sheffield + Oxford INET, Oxford APAD, Oxford GLAM + previous)
- **Australia: 7 examples** (University of Sydney, University of Adelaide + previous)
- **Canada: 7 examples** (Alberta, McMaster, UBC x3)
- **Germany: 4 examples** (IU International U, Max Planck Society x2)
- **Switzerland: 2 examples** (ETH Zurich, EPFL - Apertus LLM)
- **France: 2 examples** (Institut Pasteur x2)
- **Sweden: 1 example** (NGI Sweden/SciLifeLab/Karolinska)
- **Singapore: 1 example** (Singapore Eye Research Institute)
- **South Korea: 1 example** (Seoul National University)
- **Japan: 1 example** (Waseda University)
- **South Africa: 1 example**
- **Kenya: 1 example**
- **India: 1 example**
- **Brazil: 1 example**
- **China: 1 example**
- **Netherlands: 1 example**
- **Bahrain: 1 example**
- **International collaborations (NASA, ASDI): 21 examples**

**Temporal Distribution (Combined):**
- **2025: 10 examples (6%)** (UT Sage GA Aug 2025, Apertus LLM, Dartmouth Claude + previous)
- **2024: 83 examples (48%)** (UT Sage beta, Oxford INET, Singapore Eye, IU Germany, NGI Sweden, Cornell x2, Oxford x2 + previous)
- **2023: 50 examples (29%)** (UC Davis Project Heal, Adelaide/Sydney RONIN, Logan SRA, NASA HEASARC + previous)
- **2020-2022: 29 examples (17%)** (20 new from 2021-2022: UC Irvine 5PB backup, UC Santa Cruz Dockstore, Baylor All of Us 4K samples/month, NC State NCICS 50x faster, U Minnesota mental health ML + Science Hubs MIT/UW/Columbia, JHU partnerships, CMU Fellows, Stanford DDRCC, Yale SpinupPlus, Princeton/Georgia Tech/Northwestern + previous 9)

**Research Domains (Combined):**
- **Computer Science & AI/ML: 59** (U Minnesota mental health ML + UT Sage, Oxford INET economics, Apertus LLM, GenAI Innovation Center, Trainium, Science Hubs)
- **Life Sciences & Genomics: 25** (UC Santa Cruz Dockstore 2022, Baylor All of Us + UC Santa Cruz Toil workflow, San Francisco State protein ML + Sydney Wildlife, Adelaide RONIN, NGI Sweden, Logan SRA + previous)
- **Medical Research & Healthcare: 22** (University of Sheffield health data TRE, Harvard Medical School patient simulations + UC Davis misinformation, Singapore Eye, Weill Cornell + previous)
- **Climate & Environmental Science: 21** (NC State NCICS 50x faster climate data + APAD air pollution, DANRA meteorology, ASDI + previous)
- **Data Management & Infrastructure: 3** (UC Irvine 5PB backup + previous)
- **Education Technology & Learning: 11** (UT Sage 52K students, IU Germany 100K students, Dartmouth Claude, Cornell Socratic + previous)
- **Economics & Social Science: 2** (Oxford INET agent-based models, UBC economic simulations)
- **Conservation Biology: 1** (Sydney Wildlife Genomics - Tasmanian devil)
- **Physics & Astronomy: 9** (NASA HEASARC)
- **Satellite & Remote Sensing: 7** (Oxford APAD)
- **Drug Discovery & Pharmaceutical: 6**
- **Chemistry & Molecular Dynamics: 6**
- **Renewable Energy & Sustainability: 6**
- **High Performance Computing: 5**
- **Cultural Heritage & Museums: 1** (Oxford GLAM)
- **Quantum Computing: 1**

**Most Frequently Used AWS Services (Combined):**
- **Amazon S3 / AWS Open Data / Registry of Open Data: 90+ projects** (major expansion with Open Data Registry examples)
- **Amazon EC2 (including Spot Instances, GPU variants, Trainium): 80+ projects**
- **AWS Generative AI Innovation Center: 3 universities** (Cornell x2, Weill Cornell)
- **AWS Trainium / UltraClusters: 10 universities** (CMU, Berkeley, UCLA, MIT, Stanford, UIUC, UCI, UBC, Waseda, Kingston)
- **AWS AI/ML Services (SageMaker, Bedrock, promotional credits): 40+ projects**
- **AWS Batch: 18 projects** (Logan SRA + previous)
- **Amazon Sustainability Data Initiative (ASDI): 6 universities** (U Colorado DANRA + previous 5)
- **AWS Graviton: 2 major projects** (Logan SRA, Institut Pasteur IndexThePlanet)
- **AWS ParallelCluster: 8 projects**
- **AWS Serverless (Lambda, Step Functions): 12 projects**

**Key Programs Represented:**
- **Build on Trainium ($110M investment)**: 10 universities across US, UK, Japan (CMU, Berkeley, UCLA, MIT, Stanford, UIUC, UC Irvine, UBC, Waseda, Kingston)
  - Strategic partnerships: CMU and Berkeley ($11M each in credits)
  - Individual grants: up to $500K for broader research community
- **Amazon Science Hubs (multi-year partnerships)**: 8 institutions (MIT 2021, UW 2022, UCLA, Virginia Tech, Max Planck, USC, and Columbia CAIT 2020-2025)
- **AWS Generative AI Innovation Center**: 4 institutions (UT Austin, Cornell x2, Weill Cornell, UC Davis)
- **AWS Cloud Innovation Centers**: 3 institutions (UC Davis Health, UBC, ASU)
- **AWS Registry of Open Data**: 10+ university datasets (Sydney Wildlife, Oxford APAD, Steinegger Lab, U Colorado DANRA, NASA HEASARC, Logan SRA, WashU PM2.5, + others)
- **Amazon Sustainability Data Initiative (ASDI)**: 6 universities (U Colorado, WashU St. Louis, Cornell, Rutgers, Colorado State, UW)
- **Amazon Research Awards**: 232 recipients from 2021-2022 alone (100+ universities), representing major funding program across disciplines
- **AWS HPC Partner Ecosystem (RONIN)**: 4 universities (UBC, University of Adelaide, University of Sydney, University of Sheffield)
- **Major University Partnerships**: Johns Hopkins Interactive AI Initiative (2022-2027), Carnegie Mellon Graduate Fellows (2021+)
- **AWS Cloud Credit for Research**: Multiple institutions including UW quarterly awards up to $20K
- **NIH STRIDES**: 2,500+ academic institutions with NIH funding
- **NSF CloudBank**: Hundreds of research projects, 1,500+ students
- **Claude for Education**: 1 institution (Dartmouth - first Ivy League)

**Phase 3-5 Highlights (Examples 101-172):**
- **72 new ACADEMIC examples** across five search phases:
  - **Phase 3**: Build on Trainium (7 universities), Science Hubs (6 institutions), ASDI partnerships (5 universities), Canadian research computing (4 universities)
  - **Phase 4A**: AWS case studies (2 Oxford projects), Generative AI Innovation Center (3 Cornell institutions), Open Data Registry (6 datasets)
  - **Phase 4B**: International expansion (Switzerland x2, Sweden, Singapore, Germany)
  - **Phase 4C+4D**: AWS HPC/Partner ecosystem (UT Austin, Oxford INET, UC Davis, Adelaide, Sydney)
  - **Phase 5**: 2021-2022 major expansion (20 examples):
    - **Science Hubs**: MIT 2021, UW 2022, Columbia CAIT 2020-2025 (multi-year research partnerships)
    - **Major Partnerships**: Johns Hopkins Interactive AI Initiative (5-year, 2022), Johns Hopkins APL BossDB (2021), Carnegie Mellon Graduate Fellows (2021+)
    - **Research Infrastructure**: Stanford Snyder Lab DDRCC (2022), Yale SpinupPlus (2021-2022), University of Sheffield Data Connect TRE (2021)
    - **Institutional Programs**: Princeton training (2021), Georgia Tech credits (2021-2022), Northwestern pipeline (2021)
    - **Research Projects**: UC Irvine 5PB backup (2021), UC Santa Cruz Dockstore (Apr 2022), Baylor All of Us 4K samples/month (early 2021), NC State NCICS 50x faster climate (2021-2022), U Minnesota mental health ML (2022), Harvard Medical School simulations (Feb 2021), San Francisco State protein ML, UC Santa Cruz genomics workflow
- **Generative AI Innovation Center partnerships**: UT Austin (UT Sage, 52K students), Cornell (Socratic Chat, 500+ students), UC Davis (Project Heal health misinformation), Weill Cornell (medical archives)
- **Dartmouth Claude for Education**: First Ivy League institution-scale AI deployment (December 2025)
- **RONIN HPC Partner Ecosystem**: University of Sydney (10 days→5 hours, wildlife genomics), University of Adelaide (2 weeks→6 hours, genomics), UBC (75% CPU efficiency, 8,640-core clusters)
- **Open Data democratization**: NASA HEASARC (50 years astrophysics), Logan SRA (20 petabases in 30 hours), Oxford APAD (400% throughput), Sydney Wildlife (Australasian Genomes repository)
- **Economics & Social Science**: Oxford INET agent-based modeling for macroprudential policy research
- **Global expansion**: Switzerland (ETH/EPFL Apertus 1000+ languages), Sweden (NGI SciLifeLab genomics), Singapore (SERI retinal disease AI), Australia expanded (Adelaide, Sydney)
- **Cultural heritage**: Oxford GLAM (21M museum objects, 11 ML models in 10 weeks, 90% cost reduction)

**Key Insight:** The expanded collection of 172 ACADEMIC examples (spanning 2021-2025) reveals AWS's comprehensive research ecosystem operating at multiple scales: (1) **Institution-Scale AI Transformation** (UT Austin UT Sage 52K students, Dartmouth Claude, Cornell GenAI partnerships) bringing production AI to entire campuses; (2) **HPC Democratization** (RONIN ecosystem enabling 10 days→5 hours speedups at Adelaide/Sydney, UBC 8,640-core clusters with 75% efficiency); (3) **Cutting-Edge Hardware Access** (Build on Trainium $110M, 10 universities, 40,000 chips); (4) **Open Data Infrastructure** (AWS Registry with NASA 50-year astrophysics archive, Logan 20 petabases in 30 hours, Sydney Wildlife conservation genomes—all without egress costs); (5) **Sustained Research Partnerships** (Science Hubs at MIT/UW/Columbia with multi-year funding; Johns Hopkins 5-year Interactive AI Initiative; CMU Graduate Fellows; Cloud Innovation Centers at UC Davis Health/UBC/ASU); (6) **Sustainability & Public Health** (ASDI supporting climate research, UC Davis Project Heal combating health misinformation). The 2021-2022 expansion revealed foundational partnerships: Amazon Science Hubs launched at MIT (October 2021) and UW (February 2022); Johns Hopkins $5M+ partnerships for interactive AI and neuroscience data; enterprise research computing platforms at Yale and Stanford; institutional AWS programs at Carnegie Mellon, Princeton, Georgia Tech, and Northwestern. The temporal distribution shows accelerating adoption: 2024 dominates with 83 examples (50%), 2023 maintains strong momentum with 50 examples (30%), 2021-2022 now well-represented with 24 examples (14%), and 2025 emerging with 10 examples including landmark UT Austin partnership. Geographic diversity spans 18 countries with strategic expansion: Switzerland (ETH/EPFL 1000+ language LLM), Sweden (Europe's largest genomics facility), Singapore (clinical AI), Australia (RONIN HPC ecosystem), strengthening global research infrastructure. The AWS Generative AI Innovation Center and RONIN HPC Partner ecosystem represent complementary partnership models—production-ready GenAI deployment for education/research, and accessible HPC for researchers without cloud expertise.

---

## Summary (First 50 Examples)

**Geographic Distribution:** These 50 examples span 15+ countries across six continents including United States (30), United Kingdom (3), Germany (2), Australia (3), France (1), Canada (2), South Africa (1), Kenya (1), and international collaborations (6).

**Temporal Distribution:** 2024-2025 (18 examples), 2021-2023 (22 examples), and 2017-2020 (10 examples).

**Most Frequently Used AWS Services:** Amazon EC2 (including Spot Instances and GPU variants) appears in 40+ projects for scalable compute. Amazon S3 serves as the foundation for data storage in nearly every project. AWS Batch and AWS ParallelCluster enable HPC workflows across climate modeling, genomics, and physics.

**Key Insight:** AWS has become critical research infrastructure for computationally intensive science. The common thread across all 50 examples: time compression—work that would take months or years on traditional systems now completes in hours or days, fundamentally accelerating the pace of scientific discovery.
