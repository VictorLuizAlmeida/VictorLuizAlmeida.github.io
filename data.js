// Profile Data - Edit this file to update your profile
const profileData = {
    name: "Victor Luiz Almeida",
    title: "Data Scientist",
    location: "Based in Brazil, LATAM | Available for remote work globally",
    about: "I can help your business unlock value through comprehensive data solutions - from data analysis and strategic insights to advanced machine learning modeling, deployment, monitoring, and ongoing maintenance - ensuring all deliverables align with your strategic objectives and requirements.",
    profileImage: "profile.jpg",
    contact: {
        linkedin: "https://linkedin.com/in/yourprofile",
        email: "mailto:your.email@example.com"
    },
    skills: [
        "Python",
        "SQL",
        "Data Visualization",
        "Machine Learning",
        "Machine Learning Engineering",
        "Linux",
        "Docker",
        "FastAPI",
        "AWS"
    ]
};

// Experience Data - Edit this to update your experience
const experienceData = [
    {
        title: "Data Analyst Intern",
        company: "Itau Unibanco",
        period: "2017-2019",
        description: "Daily reporting development using Excel | Process automation with SAS Enterprise Guide for critical pricing workflows | Statistical analysis and PowerPoint presentations | Price elasticity analysis using Python and non-parametric statistical tests.",
        skills: ["Python", "SQL", "SAS", "Microsoft Office", "Statistics"]
    },
    {
        title: "Data Analyst",
        company: "Itau Unibanco",
        period: "2019-2021",
        description: "Machine Learning model development for product usage propensity prediction to guide commercial decisions | A/B testing audience construction for elasticity analysis | Credit product utilization analysis | Risk-based pricing policy development | Fee collection process automation using SAS Enterprise Guide.",
        skills: ["Machine Learning", "Python", "SQL", "Automation", "Parallel Computing"]
    },
    {
        title: "Data Scientist",
        company: "Itau Unibanco",
        period: "2022-2024",
        description: "End-to-end development of institutional global cost forecasting system to guide budget decisions using AWS SageMaker Studio and time series models | Ad hoc competitive analysis studies for Investor Relations regarding credit union competition | Dimensional data modeling for WhatsApp customer service operations.",
        skills: ["Machine Learning", "AWS", "Time Series Modeling", "Clustering"]
    },
    {
        title: "Data Scientist (Contract Work)",
        company: "Banco Mercantil",
        period: "2024",
        description: "3-month end-to-end complaint prediction system to identify high-risk customers for proactive treatment, significantly improving satisfaction scores and reducing complaint rates.",
        skills: ["SQL", "Python", "SnowFlake"]
    },
    {
        title: "Senior Data Scientist",
        company: "Data Insight",
        period: "2024-2025",
        description: "Predictive system development for high-risk markets and end-to-end model lifecycle management | Blockchain data analysis in Solana ecosystem | Model deployment using Docker, AWS EC2, AWS Lambda, and FastAPI | Monitoring system construction and deployment with Docker, Streamlit, and Ngrok | Neural network and deep learning model development with PyTorch.",
        skills: ["SQL", "Python", "MLOps", "Cloud", "Machine Learning"]
    }
];

// Education Data - Edit this to update your education
const educationData = [
    {
        degree: "Physics (Undergraduate, Teaching Specialization)",
        institution: "University Of Sao Paulo (USP)",
        period: "2015-2020",
        description: "5-year undergraduate program in Physics with Teaching Specialization | Extension Course: Statistics for Data Science - Theory and Practice with Python."
    },
    {
        degree: "Machine Learning Engineering (Postgraduate)",
        institution: "Federal University of Sao Carlos (UFSCar)",
        period: "2024-2025",
        description: "2-year postgraduate degree focusing on ML deployment, production systems, and engineering practices."
    }
];

// Projects Data - Edit this to update your projects
// Each project should have a STAR model (Situation, Task, Action, Result)
const projectsData = [
    {
        id: "banking-product-propensity",
        title: "Banking Product Usage Propensity Prediction",
        company: "Itau Unibanco",
        keywords: ["SQL", "Python", "Machine Learning", "Random Forest", "SAS Enterprise Guide"],
        description: "Full-cycle ML model to predict customer product adoption likelihood at Itau Unibanco. Increased overdraft utilization from 8% to 13% by prioritizing high-propensity prospects, improving revenue and reducing capital allocation losses.",
        image: "banking-product-propensity.png",
        star: {
            situation: "Commercial managers across Brazil were selling overdraft products to business customers, but the bank only generated profit when clients actually used the product after contracting. Many customers signed contracts but never used the overdraft, leading to capital allocation without returns and significant losses.",
            task: "Develop a data-driven prioritization system for prospecting lists to identify customers with the highest likelihood of actually using the overdraft product after contracting, enabling managers to focus their sales efforts on high-conversion prospects.",
            action: "Built a comprehensive machine learning model using historical customer data to predict product usage propensity within 3 months of onboarding. Analyzed behavioral patterns, transaction history, and customer profiles to create accurate predictions. Collaborated with commercial teams to design targeted engagement strategies based on the model's insights.",
            result: "Achieved a 62.5% improvement in product utilization rates, increasing from 8% to 13% within 3 months. This enhancement significantly boosted revenue generation, optimized capital allocation efficiency, and reduced losses from unused contracted products, directly improving the bank's profitability."
        }
    },
    {
        id: "institutional-cost-forecasting",
        title: "Institutional Cost Forecasting System",
        company: "Itau Unibanco",
        keywords: ["SQL", "Time Series Modeling", "SARIMAX", "Python", "Cloud"],
        description: "End-to-end institutional cost forecasting system using AWS SageMaker and SARIMAX models. Improved forecasting accuracy by 20% MAE reduction, replacing simple moving averages with sophisticated time series analysis for executive budget decisions.",
        image: "institutional-cost-forecasting.png",
        star: {
            situation: "The bank needed to periodically forecast institutional costs to allocate capital correctly, but the responsible team was using only simple techniques like moving averages. This approach frequently led to errors related to seasonal cost behavior patterns, resulting in poor budget planning and capital misallocation.",
            task: "Develop a comprehensive institutional cost forecasting system to predict various expense categories including rent, electricity, salaries, and other operational costs with higher accuracy and seasonal awareness, replacing the existing rudimentary forecasting methods.",
            action: "Led the complete data engineering process, organizing and harmonizing data from multiple sources across the organization. Collaborated with another data scientist to develop a sophisticated time series forecasting system based on SARIMAX models. Built a scenario-sensitive calculator that incorporated macroeconomic variables, enabling the finance team to simulate different cost scenarios and their potential impacts.",
            result: "The new system consistently outperformed the existing forecasting methods across all time series, achieving over 20% improvement in Mean Absolute Error (MAE). The enhanced accuracy and scenario modeling capabilities made the system a core component of executive budget decision-making processes, significantly improving capital allocation efficiency."
        }
    },
    {
        id: "customer-complaint-prevention",
        title: "Proactive Customer Complaint Prevention System",
        company: "Banco Mercantil",
        keywords: ["SQL", "Python", "Machine Learning", "Predictive Analytics"],
        description: "Complete development of ML system to predict customer complaint likelihood, enabling proactive customer treatment and significantly improving satisfaction metrics and complaint rates.",
        image: "customer-complaint-prevention.png",
        star: {
            situation: "Banco Mercantil was experiencing high customer complaint rates that negatively impacted customer satisfaction scores and operational efficiency. The bank needed a proactive approach to identify customers at risk of filing complaints before issues escalated, rather than reacting to complaints after they occurred.",
            task: "Develop an end-to-end machine learning system to predict customer complaint likelihood, enabling the customer service team to proactively engage with at-risk customers and prevent complaints before they happen.",
            action: "Built a complete ML prediction system from scratch, analyzing comprehensive customer data including behavioral patterns, transaction history, service interactions, and account activity. Developed predictive models using SQL for data extraction and Python for model development. Created a scoring system that identified high-risk customers and integrated it with the customer service workflow.",
            result: "The proactive complaint prevention system significantly improved customer satisfaction metrics and reduced complaint rates by enabling early intervention with at-risk customers. This approach transformed the bank's customer service from reactive to proactive, improving overall customer experience and operational efficiency."
        }
    },
    {
        id: "sports-betting-analytics",
        title: "Professional Sports Betting Analytics System",
        company: "Data Insight",
        keywords: ["Python", "Machine Learning", "MLOps", "Docker", "FastAPI"],
        description: "Development and deployment of 30+ ML models for sports betting analytics, successfully used by professional bettors to generate significant profits across multiple markets and betting strategies.",
        image: "sports-betting-analytics.png",
        star: {
            situation: "Professional bettors operating in competitive sports betting markets needed sophisticated analytics tools to gain a competitive edge. Traditional betting approaches lacked the data-driven insights and predictive capabilities required to consistently generate profits across multiple sports markets and diverse betting strategies.",
            task: "Develop and deploy a comprehensive machine learning analytics system with multiple specialized models covering various sports markets, betting types, and strategic approaches to provide professional bettors with actionable insights.",
            action: "Created 30+ specialized machine learning models tailored for different sports, betting markets, and strategic scenarios. Implemented end-to-end model lifecycle management including data pipelines, feature engineering, model training, and deployment. Deployed the system using Docker for containerization, AWS EC2 for compute resources, AWS Lambda for serverless functions, and FastAPI for API endpoints, ensuring scalability, reliability, and low-latency access for professional use.",
            result: "Successfully deployed the analytics system which was immediately adopted by professional bettors. The models provided actionable insights that consistently outperformed traditional betting strategies, enabling users to generate significant profits across multiple markets and betting strategies. The system's reliability and performance established it as a critical tool for professional betting operations."
        }
    },
    {
        id: "pricing-intelligence",
        title: "Pricing Intelligence Framework",
        company: "Itau Unibanco",
        keywords: ["Statistics", "A/B Testing", "Price Elasticity", "Revenue Optimization", "Experimental Design"],
        description: "Conducted A/B tests on banking product pricing — including selection of test/control groups, system implementation, and analysis. Used non-parametric tests to evaluate whether financial performance differences were statistically significant, supporting the development of pricing policies.",
        image: "pricing-intelligence.png",
        star: {
            situation: "The bank needed to optimize pricing strategies for banking products to maximize revenue while remaining competitive, but lacked data-driven evidence to support pricing policy decisions. Without rigorous experimental validation, pricing changes risked either leaving revenue on the table or losing customers to competitors.",
            task: "Design and implement a comprehensive A/B testing framework to evaluate different pricing strategies for banking products, including proper experimental design, test/control group selection, and statistical analysis to determine optimal pricing policies.",
            action: "Designed robust experimental frameworks for A/B testing, including proper randomization, test/control group selection, and sample size calculations. Implemented the testing infrastructure in the bank's systems to ensure accurate data collection. Conducted comprehensive price elasticity analysis using non-parametric statistical tests to evaluate whether financial performance differences between test and control groups were statistically significant, accounting for various confounding factors.",
            result: "The A/B testing framework provided statistically significant evidence supporting pricing policy development. The rigorous experimental approach enabled data-driven pricing decisions that optimized revenue while maintaining competitive positioning. The framework became a standard tool for evaluating pricing strategies across multiple banking products, leading to more informed and profitable pricing policies."
        }
    },
    {
        id: "etl-optimization",
        title: "Refactoring and Parallelization of Mission-Critical ETL Workflows",
        company: "Itau Unibanco",
        keywords: ["Data Engineering", "SQL", "Parallel Computing", "Performance Optimization"],
        description: "Refactored critical ETL pipelines composed of thousands of lines of SQL that frequently failed and took over 3 hours to run. Optimized code and implemented parallel processing, reducing runtime to 30 minutes. Improvements enhanced reliability, reduced maintenance, and accelerated data availability.",
        image: "etl-optimization.png",
        star: {
            situation: "Critical ETL workflows containing thousands of lines of SQL were unreliable, frequently failing, and taking over 3 hours to complete. These failures created significant bottlenecks in data availability, impacting downstream analytics, reporting, and business decision-making processes. The complex, monolithic structure made maintenance difficult and error-prone.",
            task: "Refactor and optimize the mission-critical ETL pipelines to improve reliability, dramatically reduce runtime, minimize maintenance overhead, and ensure consistent data availability for business operations.",
            action: "Conducted comprehensive code review and systematic refactoring of SQL workflows, breaking down monolithic processes into modular, maintainable components. Implemented parallel processing techniques to distribute workload across multiple processing units, enabling concurrent execution of independent data transformations. Optimized queries through indexing strategies, query rewriting, and data flow restructuring to eliminate bottlenecks and reduce redundant computations.",
            result: "Achieved an 83% reduction in runtime, from over 3 hours to 30 minutes. Enhanced system reliability with significantly reduced failure rates, ensuring consistent data availability. The modular architecture substantially reduced maintenance overhead and improved code maintainability. These improvements accelerated data availability for business operations and eliminated the previous bottlenecks."
        }
    }
];

