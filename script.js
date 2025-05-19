// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('header');
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Data philosophy interaction
    const philosophyNodes = document.querySelectorAll('.philosophy-node');
    const philosophyDetails = document.getElementById('philosophy-details');
    
    // Experience timeline
    const prevExperience = document.getElementById('prev-experience');
    const nextExperience = document.getElementById('next-experience');
    const experienceCarousel = document.querySelector('.experience-carousel');
    const timelineIndicator = document.querySelector('.timeline-indicator');
    
    // Project filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectsGrid = document.querySelector('.projects-grid');
    
    // Skills tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Migration flow showcase
    const stepButtons = document.querySelectorAll('.step-btn');
    const migrationStepDetails = document.getElementById('migration-step-details');
    const migrationFlowDiagram = document.querySelector('.migration-flow-diagram');
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    
    // Initialize components
    initNavigation();
    initScrollEffects();
    initDataPhilosophy();
    initExperienceTimeline();
    initProjectsSection();
    initMigrationShowcase();
    initContactForm();
    
    // Navigation functions
    function initNavigation() {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
    
    // Scroll effects
    function initScrollEffects() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Add animation to sections when they come into view
            document.querySelectorAll('section').forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                    section.classList.add('in-view');
                }
            });
        });
    }
    
    // Data philosophy interaction
    function initDataPhilosophy() {
        const philosophyContent = {
            accuracy: "I prioritize data accuracy above all else. My migration processes include robust validation and reconciliation steps to ensure 99.9% data integrity, preventing costly business decisions based on faulty information.",
            scalability: "Building data architecture that scales with your business needs is essential. I design solutions with future growth in mind, ensuring they can handle increasing data volumes without sacrificing performance.",
            insights: "The true value of data is in the business insights it provides. I focus on transforming raw data into actionable intelligence that drives strategic decisions and competitive advantage.",
            efficiency: "My implementations emphasize operational efficiency through automation, optimized ETL processes, and performance tuning, reducing processing times and resource utilization."
        };
        
        philosophyNodes.forEach(node => {
            node.addEventListener('click', () => {
                const id = node.getAttribute('data-id');
                philosophyNodes.forEach(n => n.classList.remove('active'));
                node.classList.add('active');
                
                philosophyDetails.innerHTML = `<p>${philosophyContent[id]}</p>`;
                philosophyDetails.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');
            });
        });
    }
    
    // Experience timeline initialization
    function initExperienceTimeline() {
        // Experience data from resume
        const experiences = [
            {
                company: "Value Momentum",
                role: "Data & Analytics Scrum Lead - Insurance",
                client: "Country Financial",
                period: "Apr 2024 - Present",
                description: "Leading Agile delivery for policy data migration from Insurity to Guidewire. Managing cross-functional teams, coordinating dependencies, and ensuring data mapping consistency across workstreams.",
                achievements: [
                    "Led Agile delivery for complex insurance data migration",
                    "Coordinated dependencies across 4 parallel workstreams",
                    "Improved delivery cycle time by 18%",
                    "Reduced change requests by 25%",
                    "Oversaw data migration using Informatica, Power BI"
                ],
                tags: ["Guidewire", "Insurity", "Agile", "Data Migration", "Scrum"]
            },
            {
                company: "Value Momentum",
                role: "Technical Delivery Manager, Scrum Lead",
                client: "Hiscox USA",
                period: "Jun 2022 - Mar 2024",
                description: "Directed migration of 1M+ records from on-prem to Azure using ADF, Python, and Synapse Analytics. Automated reconciliation processes and optimized ETL packages.",
                achievements: [
                    "Migrated 1M+ records to Azure cloud platform",
                    "Reduced data validation time by 20%",
                    "Decreased incident recurrence by 35%",
                    "Optimized over 100 SSIS packages",
                    "Built Tableau dashboards for operational insights"
                ],
                tags: ["Azure", "ETL", "SSIS", "Tableau", "Python"]
            },
            {
                company: "Value Momentum",
                role: "Data Analyst, Solution Architect, Data Conversion Lead",
                client: "Hiscox USA",
                period: "Apr 2018 - May 2022",
                description: "Led a 12-member team for end-to-end policy conversion of P&C products to OneShield platform. Designed and implemented ETL solution for over 700,000 policy records.",
                achievements: [
                    "Converted 700,000+ policy records with high accuracy",
                    "Delivered 93% first-pass conversion accuracy",
                    "Conducted source-to-target mapping for 150+ attributes",
                    "Reduced QA cycle time by 25%",
                    "Built automated validation scripts"
                ],
                tags: ["OneShield", "ETL", "P&C Insurance", "Data Conversion"]
            },
            {
                company: "Syntel Inc.",
                role: "ETL Architect and Technical Lead",
                client: "Penn National Insurance",
                period: "Sep 2015 - Mar 2018",
                description: "Architected data mart solutions supporting Commercial Lines reporting using Duck Creek IDO. Designed ETL workflows using SSIS to process over 1TB of transactional data.",
                achievements: [
                    "Designed ETL for 1TB+ of transactional data",
                    "Maintained 98% on-time delivery rate",
                    "Improved ETL load time by 28%",
                    "Documented 200+ transformation rules"
                ],
                tags: ["Duck Creek", "SSIS", "Data Mart", "Commercial Lines"]
            },
            {
                company: "Syntel Inc.",
                role: "ETL Architect and Technical Lead",
                client: "Amtrust Financial Services",
                period: "Sep 2011 - Aug 2015",
                description: "Integrated Duck Creek policy data with Guidewire billing and claims systems using SSIS and stored procedures. Provided advanced reporting and analytics capabilities.",
                achievements: [
                    "Integrated multi-platform insurance systems",
                    "Implemented data audit mechanisms",
                    "Improved compliance reporting by 33%",
                    "Streamlined ETL codebase using modular design"
                ],
                tags: ["Duck Creek", "Guidewire", "SSIS", "SSRS", "SSAS"]
            },
        ];
        
        // Generate experience cards
        experiences.forEach((exp, index) => {
            const card = document.createElement('div');
            card.classList.add('experience-card');
            
            card.innerHTML = `
                <div class="card-header">
                    <h3>${exp.role}</h3>
                    <div class="company-client">
                        <span class="company">${exp.company}</span>
                        <span class="client">Client: ${exp.client}</span>
                    </div>
                    <div class="period">${exp.period}</div>
                </div>
                <div class="card-body">
                    <p>${exp.description}</p>
                    <h4>Key Achievements</h4>
                    <ul class="achievements-list">
                        ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                    <div class="tags">
                        ${exp.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            
            experienceCarousel.appendChild(card);
        });
        
        let currentExp = 0;
        const totalExp = experiences.length;
        
        // Timeline navigation
        function updateTimeline() {
            document.querySelectorAll('.experience-card').forEach((card, index) => {
                card.classList.remove('active', 'prev', 'next');
                
                // Only add classes for the current card and immediate prev/next
                if (index === currentExp) {
                    card.classList.add('active');
                } else if (index === currentExp - 1 || (currentExp === 0 && index === totalExp - 1)) {
                    card.classList.add('prev');
                } else if (index === currentExp + 1 || (currentExp === totalExp - 1 && index === 0)) {
                    card.classList.add('next');
                }
            });
            
            // Update progress indicator
            const progressPercent = ((currentExp) / (totalExp - 1)) * 100;
            timelineIndicator.style.width = `${progressPercent}%`;
        }
        
        prevExperience.addEventListener('click', () => {
            currentExp = (currentExp > 0) ? currentExp - 1 : totalExp - 1;
            updateTimeline();
        });
        
        nextExperience.addEventListener('click', () => {
            currentExp = (currentExp < totalExp - 1) ? currentExp + 1 : 0;
            updateTimeline();
        });
        
        // Initial setup - explicitly call updateTimeline to set the active card
        updateTimeline();
    }
    
    // Projects section
    function initProjectsSection() {
        // Project data based on resume experience
        const projects = [
            {
                title: "Insurity to Guidewire Migration",
                description: "End-to-end policy data migration from legacy Insurity system to modern Guidewire platform for a major insurance carrier.",
                client: "Country Financial",
                image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%234b86b4'/><text x='50%' y='50%' font-family='Arial' font-size='20' text-anchor='middle' fill='white' dominant-baseline='middle'>G</text></svg>",
                details: [
                    "Migrated policy, claims and billing data",
                    "Established data quality rules and validations",
                    "Implemented parallel testing strategy",
                    "Reduced go-live timeline by 15%"
                ],
                technologies: ["Guidewire", "Informatica", "SQL Server", "Power BI"],
                category: ["migration", "etl"]
            },
            {
                title: "On-Prem to Azure Cloud Migration",
                description: "Large-scale data migration from on-premises databases to Azure cloud platform with modernized pipeline architecture.",
                client: "Hiscox USA",
                image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%232a4d69'/><text x='50%' y='50%' font-family='Arial' font-size='20' text-anchor='middle' fill='white' dominant-baseline='middle'>AZ</text></svg>",
                details: [
                    "Migrated 1M+ records to Azure Synapse",
                    "Built Azure Data Factory pipelines",
                    "Implemented cloud-based validation framework",
                    "Achieved 20% faster data processing"
                ],
                technologies: ["Azure Synapse", "Azure Data Factory", "Python", "T-SQL"],
                category: ["migration", "cloud", "etl"]
            },
            {
                title: "Insurance Operations Dashboard",
                description: "Interactive business intelligence solution for monitoring key insurance operations metrics and KPIs.",
                client: "Hiscox USA",
                image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%2363ace5'/><text x='50%' y='50%' font-family='Arial' font-size='20' text-anchor='middle' fill='white' dominant-baseline='middle'>BI</text></svg>",
                details: [
                    "Created interactive Tableau dashboards",
                    "Implemented real-time data refresh",
                    "Designed executive and operational views",
                    "Increased reporting efficiency by 30%"
                ],
                technologies: ["Tableau", "SQL Server", "SSIS", "SSAS"],
                category: ["analytics"]
            },
            {
                title: "Legacy to OneShield ETL Pipeline",
                description: "Robust ETL solution for policy data conversion from legacy systems to OneShield platform.",
                client: "Hiscox USA",
                image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%231a2a3a'/><text x='50%' y='50%' font-family='Arial' font-size='20' text-anchor='middle' fill='white' dominant-baseline='middle'>ETL</text></svg>",
                details: [
                    "Designed high-throughput ETL architecture",
                    "Processed 700,000+ policy records",
                    "Implemented automated validation rules",
                    "Achieved 93% first-pass data accuracy"
                ],
                technologies: ["SSIS", "SQL Server", "T-SQL", "OneShield"],
                category: ["migration", "etl"]
            },
            {
                title: "Insurance Data Mart Design",
                description: "End-to-end design and implementation of data mart for Commercial Lines insurance reporting.",
                client: "Penn National Insurance",
                image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23e7eff6'/><text x='50%' y='50%' font-family='Arial' font-size='20' text-anchor='middle' fill='%232a4d69' dominant-baseline='middle'>DM</text></svg>",
                details: [
                    "Architected dimensional data model",
                    "Processed 1TB+ of transactional data",
                    "Improved query performance by 65%",
                    "Reduced reporting generation time by 40%"
                ],
                technologies: ["SSIS", "SSAS", "SQL Server", "Duck Creek"],
                category: ["analytics", "etl"]
            },
            {
                title: "Multi-Platform Insurance System Integration",
                description: "Integration solution connecting Duck Creek policy system with Guidewire claims and billing modules.",
                client: "Amtrust Financial Services",
                image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%234b86b4'/><text x='50%' y='50%' font-family='Arial' font-size='20' text-anchor='middle' fill='white' dominant-baseline='middle'>INT</text></svg>",
                details: [
                    "Designed cross-platform data integration",
                    "Implemented real-time and batch processing",
                    "Created comprehensive data lineage",
                    "Improved data consistency by 28%"
                ],
                technologies: ["SSIS", "SQL Server", "Duck Creek", "Guidewire"],
                category: ["etl", "migration"]
            }
        ];
        
        // Generate project cards
        projects.forEach(project => {
            const card = document.createElement('div');
            card.classList.add('project-card');
            project.category.forEach(cat => card.classList.add(cat));
            
            card.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <div class="project-client">${project.client}</div>
                    <p>${project.description}</p>
                    <div class="project-details">
                        <ul>
                            ${project.details.map(detail => `<li>${detail}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(card);
        });
        
        // Filter functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter projects
                document.querySelectorAll('.project-card').forEach(card => {
                    if (filter === 'all') {
                        card.style.display = 'block';
                    } else {
                        card.style.display = card.classList.contains(filter) ? 'block' : 'none';
                    }
                });
            });
        });
    }
    
    // Migration showcase
    function initMigrationShowcase() {
        const migrationSteps = {
            extract: {
                title: "Extract",
                description: "My data extraction process involves identifying source systems, establishing secure connections, and implementing intelligent data retrieval strategies that minimize impact on production systems.",
                bulletPoints: [
                    "Comprehensive source system analysis",
                    "Performance-optimized extraction patterns",
                    "Change data capture (CDC) implementation",
                    "Production impact mitigation"
                ]
            },
            transform: {
                title: "Transform",
                description: "Transformation is where my expertise truly shines. I implement sophisticated data cleansing, normalization, and enrichment processes that prepare data for target systems while preserving business meaning.",
                bulletPoints: [
                    "Business rule application",
                    "Data quality enhancement",
                    "Schema harmonization",
                    "Complex relationship mapping"
                ]
            },
            load: {
                title: "Load",
                description: "My loading strategies focus on maintaining referential integrity, optimizing performance through bulk operations, and ensuring transaction handling prevents partial loads.",
                bulletPoints: [
                    "Sequence-aware loading",
                    "Transaction management",
                    "Error handling and recovery",
                    "Performance-optimized bulk operations"
                ]
            },
            validate: {
                title: "Validate",
                description: "I implement multi-layered validation frameworks that compare source and target data, verify transformation rules, and provide detailed reconciliation reporting to ensure migration success.",
                bulletPoints: [
                    "Row count reconciliation",
                    "Field-level validation",
                    "Business rule verification",
                    "Statistical analysis and outlier detection"
                ]
            }
        };

        // Initialize migration flow diagram using D3.js
        function renderMigrationFlow() {
            const svg = d3.select('.migration-flow-diagram')
                .append('svg')
                .attr('width', '100%')
                .attr('height', '100%');
            
            // Create flow elements - initially static, will be animated when steps are clicked
            const flowWidth = 600;
            const flowHeight = 250;
            
            const steps = ['extract', 'transform', 'load', 'validate'];
            const stepWidth = flowWidth / steps.length;
            
            // Add nodes
            steps.forEach((step, i) => {
                svg.append('circle')
                    .attr('cx', (i * stepWidth) + 80)
                    .attr('cy', flowHeight / 2)
                    .attr('r', 30)
                    .attr('fill', '#e7eff6')
                    .attr('stroke', '#2a4d69')
                    .attr('stroke-width', 2)
                    .attr('class', `flow-node ${step}-node`)
                    .attr('data-step', step);
                
                svg.append('text')
                    .attr('x', (i * stepWidth) + 80)
                    .attr('y', flowHeight / 2 + 60)
                    .attr('text-anchor', 'middle')
                    .text(step.charAt(0).toUpperCase() + step.slice(1))
                    .attr('class', `flow-label ${step}-label`);

                // Add icons in nodes
                const iconMap = {
                    'extract': '\uf1c0', // database icon
                    'transform': '\uf0e7', // bolt icon
                    'load': '\uf090', // upload icon
                    'validate': '\uf00c'  // check icon
                };
                
                svg.append('text')
                    .attr('x', (i * stepWidth) + 80)
                    .attr('y', flowHeight / 2 + 5)
                    .attr('text-anchor', 'middle')
                    .attr('font-family', 'Font Awesome 5 Free')
                    .attr('font-weight', '900')
                    .attr('font-size', '18px')
                    .attr('fill', '#2a4d69')
                    .text(iconMap[step])
                    .attr('class', `flow-icon ${step}-icon`);
                
                // Connect nodes with lines
                if (i < steps.length - 1) {
                    svg.append('line')
                        .attr('x1', (i * stepWidth) + 115)
                        .attr('y1', flowHeight / 2)
                        .attr('x2', ((i + 1) * stepWidth) + 45)
                        .attr('y2', flowHeight / 2)
                        .attr('stroke', '#4b86b4')
                        .attr('stroke-width', 2)
                        .attr('stroke-dasharray', '6,3')
                        .attr('class', `flow-line ${step}-to-${steps[i+1]}`);
                }
            });
        }
        
        // Initialize the flow diagram
        renderMigrationFlow();
        
        // Handle step button clicks
        stepButtons.forEach(button => {
            button.addEventListener('click', () => {
                const step = button.getAttribute('data-step');
                
                // Update active button
                stepButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Update step details
                const stepData = migrationSteps[step];
                migrationStepDetails.innerHTML = `
                    <h4>${stepData.title}</h4>
                    <p>${stepData.description}</p>
                    <ul>
                        ${stepData.bulletPoints.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                `;
                
                // Update flow diagram to highlight current step
                document.querySelectorAll('.flow-node').forEach(node => {
                    node.setAttribute('fill', '#e7eff6');
                    node.setAttribute('r', 30);
                });
                
                document.querySelector(`.${step}-node`).setAttribute('fill', '#4b86b4');
                document.querySelector(`.${step}-node`).setAttribute('r', 35);
                
                // Animate the flow lines
                const flowLines = document.querySelectorAll('.flow-line');
                flowLines.forEach(line => {
                    line.setAttribute('stroke-dasharray', '6,3');
                    line.setAttribute('stroke', '#4b86b4');
                });
                
                const stepIndex = steps.indexOf(step);
                if (stepIndex > 0) {
                    const prevLine = document.querySelector(`.${steps[stepIndex-1]}-to-${step}`);
                    if (prevLine) {
                        prevLine.setAttribute('stroke-dasharray', '0');
                        prevLine.setAttribute('stroke', '#2a4d69');
                    }
                }
            });
        });
        
        // Initialize with first step active
        stepButtons[0].click();
    }
    
    // Contact form validation
    function initContactForm() {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple form validation
            let isValid = true;
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !subject || !message) {
                isValid = false;
                alert('Please fill in all fields.');
            }
            
            if (isValid) {
                // In a real scenario, this would submit the form data
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            }
        });
    }
});
