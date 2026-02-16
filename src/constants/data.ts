export const HERO_TITLES = [
    "Applied Data Scientist",
    "Machine Learning Engineer",
    "LLM Systems Builder",
    "AI Product Engineer",
];

export const PHILOSOPHY = [
    {
        title: "Systems Over Scripts",
        content: "Accuracy is not production readiness. I build robust, modular architectures that transition seamlessly from notebooks to reliable serving layers."
    },
    {
        title: "Reproducibility & Evaluation",
        content: "Evaluation-driven ML systems are more important than complex models. I implement strict testing to ensure every model update is backed by rigorous regression metrics."
    },
    {
        title: "Deployment-Aware AI Design",
        content: "From dataset to Docker container—inference latency and horizontal scalability are first-class citizens in my design process."
    }
];

export const PROJECTS = [
    {
        id: "heart-disease",
        title: "Heart Disease Risk Prediction System",
        subtitle: "End-to-end ML pipeline",
        problem: "Identifying cardiac risk factors accurately and providing actionable clinical insights in a production environment.",
        approach: "Designed a systematic pipeline from data ingestion to explainable inference.",
        architecture: "Modular feature engineering with scikit-learn, MLflow for experiment tracking, and FastAPI for real-time inference.",
        deployment: "Containerized via Docker, deployed with automated health checks and logging.",
        impact: "Achieved 88.5% accuracy with high interpretability using SHAP values for clinical decision support.",
        tech: ["FastAPI", "Streamlit", "SHAP", "MLflow", "Docker", "Scikit-learn"],
        github: "https://github.com/Emart29/Heart-Disease-Prediction", // Generic link as requested
    },
    {
        id: "llm-quality-gate",
        title: "LLM Quality Gate",
        subtitle: "Production-grade LLM evaluation pipeline",
        problem: "Lack of systematic way to detect prompt regressions and output quality degradation in production LLM applications.",
        approach: "Built a CI/CD compatible evaluation framework using LLM-as-a-judge patterns.",
        architecture: "Semantic similarity checks, JSON schema validation, and automated red-teaming modules.",
        deployment: "Integrated into GitHub Actions as a mandatory quality gate for production deployments.",
        impact: "Reduced prompt regression incidents by 40% and standardized model comparison metrics.",
        tech: ["Python", "OpenAI", "LangChain", "Pytest", "GitHub Actions"],
        github: "https://github.com/Emart29/llm-quality-gate",
    },
    {
        id: "telecom-churn",
        title: "Telecom Churn Prediction",
        subtitle: "Business-framed ML system",
        problem: "High customer attrition rates affecting revenue stability without clear visibility into underlying causes.",
        approach: "Engineered time-based features and behavioral markers to predict churn likelihood.",
        architecture: "Gradient Boosted Trees with business-weighted loss functions and automated retraining triggers.",
        deployment: "Batch processing pipeline integrated with CRM systems for proactive customer outreach.",
        impact: "Detected 75% of potential churners with enough lead time for retention campaigns.",
        tech: ["XGBoost", "Pandas", "SQL", "Airflow"],
        github: "https://github.com/Emart29/customer-churn-prediction",
    },
    {
        id: "recommendation-system",
        title: "Hybrid Recommendation Engine",
        subtitle: "Business-framed ML system",
        problem: "Designing a scalable recommendation system capable of delivering personalized product suggestions by learning from user behavior and item similarity while handling sparse interaction data.",
        approach: "Implemented a hybrid recommendation framework combining Collaborative Filtering, Content-Based Filtering, and Matrix Factorization (SVD) to balance personalization, cold-start handling, and ranking accuracy.",
        architecture: "Modular ML pipeline for preprocessing, user–item matrix construction, similarity computation, and latent factor modeling. Designed for reproducible experimentation and extensibility.",
        deployment: "Structured as a reusable Python package with evaluation scripts and reproducible experiments, enabling integration into API-based serving environments.",
        impact: "Demonstrated improved recommendation relevance through hybrid modeling, showcasing how personalization strategies can drive engagement and data-driven decision systems.",
        tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Matrix Factorization (SVD)", "Collaborative Filtering", "Content-Based Filtering"],
        github: "https://github.com/Emart29/recommendation-system",
    },
    {
        id: "iopsai",
        title: "iOpsAI (In Progress AI Platform)",
        subtitle: "AI analytics copilot",
        status: "In Progress — Evolving AI Platform",
        problem: "Bridging the gap between raw database query results and high-level business insights through natural language.",
        approach: "Developing a multi-agent system that translates natural language to SQL and visualizes insights.",
        architecture: "FastAPI backend, PostgreSQL for state management, JWT for secure agent communication.",
        deployment: "Kubernetes-ready microservices designed for sub-500ms API response times.",
        impact: "Currently enabling non-technical stakeholders to perform complex data analysis on the fly.",
        tech: ["FastAPI", "PostgreSQL", "JWT", "LLM Integration", "React"],
        github: "https://github.com/Emart29/iOpsAI",
    },
];

export const SKILL_LAYERS = [
    {
        name: "data/",
        skills: [
            "Advanced EDA & profiling",
            "Feature engineering",
            "Statistical testing & experiment design",
            "KPI modeling",
            "Time series forecasting",
            "SQL (PostgreSQL, MySQL, BigQuery)",
            "ETL workflows"
        ]
    },
    {
        name: "modeling/",
        skills: [
            "Supervised ML",
            "Cross-validation",
            "Hyperparameter optimization",
            "Imbalanced data handling",
            "SHAP interpretability",
            "Error analysis",
            "PyTorch fundamentals"
        ]
    },
    {
        name: "api/",
        skills: [
            "FastAPI model serving",
            "REST design",
            "JWT authentication",
            "Structured JSON outputs",
            "Latency-aware inference"
        ]
    },
    {
        name: "deployment/",
        skills: [
            "Docker",
            "MLflow",
            "Model versioning",
            "Reproducible environments",
            "CI/CD fundamentals"
        ]
    },
    {
        name: "llm_systems/",
        skills: [
            "LLM API integration",
            "Prompt engineering",
            "System prompt design",
            "Function/tool calling",
            "JSON schema prompting",
            "RAG pipelines",
            "Embeddings & semantic retrieval",
            "Vector databases",
            "Prompt regression testing",
            "LLM evaluation frameworks"
        ]
    }
];

export const THOUGHTS = [
    {
        title: "Why most ML projects fail in production",
        content: "The gap between code that runs and systems that perform. Many teams focus on the model (the code) while neglecting the data flywheel, monitoring, and reproducible infrastructure."
    },
    {
        title: "Evaluation > Accuracy",
        content: "A model with 99% accuracy but high latency or bias in long-tail scenarios is often useless. Real-world performance is defined by how well your evaluation metrics align with business outcomes."
    },
    {
        title: "LLM reasoning vs prompting",
        content: "Stop fighting the prompt; start designing the reasoning loop. Better results come from architectural structure (like Chain of Thought or Agentic patterns) rather than just adding more adjectives to a prompt."
    },
    {
        title: "Shipping vs experimenting",
        content: "Exploration is essential, but shipping is the goal. I prioritize MVP architectures that allow for rapid experimentation within a production-ready framework."
    }
];

export const OS_CONTRIBUTIONS = [
    {
        project: "adenhq",
        description: "BigQuery MCP tool contribution",
        role: "Collaborating on agent infrastructure and AI tooling."
    }
];
