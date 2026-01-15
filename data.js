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
        description: "Daily reporting development using Excel; Process automation with SAS Enterprise Guide for critical pricing workflows; Statistical analysis and PowerPoint presentations; Price elasticity analysis using Python and non-parametric statistical tests.",
        skills: ["Python", "SQL", "SAS", "Microsoft Office", "Statistics"]
    },
    {
        title: "Data Analyst",
        company: "Itau Unibanco",
        period: "2019-2021",
        description: "Machine Learning model development for product usage propensity prediction to guide commercial decisions; A/B testing audience construction for elasticity analysis; Credit product utilization analysis; Risk-based pricing policy development; Fee collection process automation using SAS Enterprise Guide.",
        skills: ["Machine Learning", "Python", "SQL", "Automation", "Parallel Computing"]
    },
    {
        title: "Data Scientist",
        company: "Itau Unibanco",
        period: "2022-2024",
        description: "End-to-end development of institutional global cost forecasting system to guide budget decisions using AWS SageMaker Studio and time series models; Ad hoc competitive analysis studies for Investor Relations regarding credit union competition; Dimensional data modeling for WhatsApp customer service operations.",
        skills: ["Machine Learning", "AWS", "Time Series Modeling", "Clustering"]
    },
    {
        title: "Data Scientist (Contract Work)",
        company: "Banco Mercantil",
        period: "2024",
        description: "3-month end-to-end complaint prediction system to identify high-risk customers for proactive treatment, significantly improving satisfaction scores and reducing complaint rates.",
        skills: ["SQL", "Python", "Snowflake"]
    },
    {
        title: "Senior Data Scientist",
        company: "Data Insight",
        period: "2024-2025",
        description: "Predictive system development for high-risk markets and end-to-end model lifecycle management; Blockchain data analysis in Solana ecosystem; Model deployment using Docker, AWS EC2, AWS Lambda, and FastAPI; Monitoring system construction and deployment with Docker, Streamlit, and Ngrok; Neural network and deep learning model development with PyTorch.",
        skills: ["SQL", "Python", "MLOps", "Cloud", "Machine Learning"]
    }
];

// Education Data - Edit this to update your education
const educationData = [
    {
        degree: "Physics",
        institution: "University Of Sao Paulo (USP)",
        period: "2015-2020",
        description: "5-year undergraduate program in Physics with Teaching Specialization; Extension Course: Statistics for Data Science - Theory and Practice with Python."
    },
    {
        degree: "Machine Learning Engineering",
        institution: "Federal University of Sao Carlos (UFSCar)",
        period: "2024-2025",
        description: "Graduate program in Machine Learning Engineering."
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
            situation: "Itau Unibanco needed to improve the efficiency of their product marketing campaigns by identifying customers most likely to adopt banking products, particularly overdraft services.",
            task: "Develop a machine learning model to predict customer product adoption propensity, enabling targeted marketing efforts and optimizing capital allocation.",
            action: "Built a full-cycle ML solution using Random Forest algorithms, processed customer data with SQL and SAS Enterprise Guide, and implemented the model in Python. Created a scoring system to rank customers by adoption likelihood.",
            result: "Successfully increased overdraft utilization from 8% to 13% by prioritizing high-propensity prospects. This improvement enhanced revenue generation while reducing wasted capital allocation on low-probability customers."
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
            situation: "The bank relied on simple moving averages for institutional cost forecasting, leading to inaccurate budget predictions that affected executive decision-making.",
            task: "Develop a sophisticated time series forecasting system to provide accurate cost predictions for budget planning and strategic decision-making.",
            action: "Designed and implemented an end-to-end forecasting system using AWS SageMaker Studio. Built SARIMAX (Seasonal AutoRegressive Integrated Moving Average with eXogenous variables) models to capture seasonal patterns and trends in institutional costs.",
            result: "Achieved a 20% reduction in Mean Absolute Error (MAE) compared to previous methods. The system now provides reliable forecasts that support executive budget decisions and strategic planning."
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
            situation: "Banco Mercantil was experiencing high customer complaint rates and needed a way to identify at-risk customers before they filed complaints.",
            task: "Develop a machine learning system to predict customer complaint likelihood, enabling proactive intervention and improved customer satisfaction.",
            action: "Built a complete ML prediction system from scratch, analyzing customer behavior patterns, transaction history, and interaction data using SQL and Python. Developed models to identify high-risk customers early.",
            result: "Significantly improved customer satisfaction metrics and reduced complaint rates by enabling proactive treatment of at-risk customers before issues escalated."
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
            situation: "Professional bettors needed sophisticated analytics tools to gain an edge in competitive sports betting markets across multiple sports and betting strategies.",
            task: "Develop and deploy a comprehensive ML analytics system with multiple models covering various sports markets and betting strategies.",
            action: "Created 30+ specialized machine learning models for different sports and betting scenarios. Deployed the system using Docker, AWS EC2, AWS Lambda, and FastAPI, ensuring scalability and reliability for professional use.",
            result: "Successfully deployed system used by professional bettors to generate significant profits across multiple markets. The models provided actionable insights that outperformed traditional betting strategies."
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
            situation: "The bank needed to optimize pricing strategies for banking products but lacked data-driven evidence to support pricing policy decisions.",
            task: "Design and implement A/B testing framework to evaluate pricing strategies and determine optimal pricing policies based on statistical evidence.",
            action: "Designed experimental frameworks for A/B testing, including proper test/control group selection and system implementation. Conducted price elasticity analysis using non-parametric statistical tests to evaluate financial performance differences.",
            result: "Provided statistically significant evidence supporting pricing policy development. The framework enabled data-driven pricing decisions that optimized revenue while maintaining competitive positioning."
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
            situation: "Critical ETL workflows containing thousands of lines of SQL were unreliable, frequently failing, and taking over 3 hours to complete, creating bottlenecks in data availability.",
            task: "Refactor and optimize the ETL pipelines to improve reliability, reduce runtime, and minimize maintenance overhead.",
            action: "Conducted comprehensive code review and refactoring of SQL workflows. Implemented parallel processing techniques to distribute workload across multiple processing units. Optimized queries and data flow to eliminate bottlenecks.",
            result: "Reduced runtime from over 3 hours to 30 minutes (83% improvement). Enhanced system reliability, significantly reduced failure rates, and accelerated data availability. Maintenance overhead was substantially reduced."
        }
    }
];

