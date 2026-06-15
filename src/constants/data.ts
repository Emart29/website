export const HERO_TITLES = [
    "AI Data Scientist",
    "ML Infrastructure Engineer",
    "Applied AI Engineer",
    "MLOps Engineer",
    "AI Agent Systems Builder",
];

export const PHILOSOPHY = [
    {
        title: "Production Over Prototypes",
        content: "The gap between a notebook that runs and a system that performs is where most ML projects die. I design for reliability from the start: modular components, observable failure modes, and infrastructure that breaks explicitly rather than silently."
    },
    {
        title: "Evaluation Over Accuracy",
        content: "Evaluation-driven ML systems outlast accurate ones. I build rigorous evaluation harnesses (regression detection, behavioral diffing, drift monitoring) because a model that can't be measured can't be trusted in production."
    },
    {
        title: "Lineage and Observability",
        content: "A prediction without a lineage is a liability. I build systems where every inference can be traced to the exact data, pipeline, and model version that produced it — and where drift, latency, and token cost are visible before they become problems."
    },
    {
        title: "Build for Other Engineers",
        content: "The real test of infrastructure isn't whether it works in your repo — it's whether other engineers adopt it in theirs. I publish to PyPI, npm, and Homebrew because tools that live only on a branch aren't tools yet."
    }
];

export interface Project {
    id: string;
    tier: "infrastructure" | "applied-ai" | "data-science";
    title: string;
    label: string;
    description: string;
    stack: string[];
    github: string;
    article?: string;
    demo?: string;
    docs?: string;
}

export const PROJECTS: Project[] = [
    // TIER 1 — ML Infrastructure
    {
        id: "ml-feature-store",
        tier: "infrastructure",
        title: "Production ML Feature Store: Dual-Store Architecture",
        label: "Production MLOps Infrastructure",
        description: "Production-grade feature store with dual-store architecture: PostgreSQL offline store for training, Redis online store for sub-10ms inference serving. Point-in-time correct joins prevent data leakage, SHA-256 feature versioning ensures reproducibility, and built-in drift detection catches distribution shifts before they affect model performance. Solves training-serving skew at the infrastructure level.",
        stack: ["Python", "PostgreSQL", "Redis", "FastAPI", "Polars", "Evidently AI", "Docker"],
        github: "https://github.com/Emart29/ml-feature-store",
        article: "https://medium.com/towards-artificial-intelligence/the-mlops-component-nobody-builds-in-their-portfolio-and-why-it-matters-most-c5ceac9fe6b3?source=user_profile_page---------1-------------02f3a17b5bee----------------------", // TODO: replace with direct Towards AI article URL
    },
    {
        id: "pipeline-lineage-tracker",
        tier: "infrastructure",
        title: "ML Pipeline Lineage Tracker: End-to-End Audit Trail",
        label: "Production MLOps Infrastructure",
        description: "End-to-end dataset, pipeline, and model lineage system with SHA-256 versioning, full audit logging, lineage DAG visualization using pyvis, and impact analysis. Any prediction in the system can be traced back to the exact training data, pipeline version, and model that produced it. Built for teams that need reproducibility and accountability in production ML.",
        stack: ["Python", "PostgreSQL", "NetworkX", "MinIO", "Streamlit", "pyvis", "MLflow", "scikit-learn"],
        github: "https://github.com/Emart29/pipeline-lineage-tracker",
        article: "https://medium.com/towards-artificial-intelligence/can-you-trace-any-prediction-back-to-the-exact-data-that-caused-it-heres-how-i-built-that-17087294e423?source=user_profile_page---------0-------------02f3a17b5bee----------------------", // TODO: replace with direct Towards AI article URL
    },
    {
        id: "remembr",
        tier: "infrastructure",
        title: "Remembr: Shared Memory Layer for Multi-Agent AI Systems",
        label: "Open Source · PyPI + npm",
        description: "Shared memory infrastructure for multi-agent AI systems. Any agent across LangChain, LangGraph, CrewAI, AutoGen, or any of 8 supported frameworks reads from and writes to the same session — zero message passing, zero context drift. Hybrid search combines semantic, BM25, and recency signals with configurable weights per query. Zero-dependency self-hosting: one Docker Compose command starts PostgreSQL with pgvector, Redis, PgBouncer, and Ollama embeddings with no API keys required. Production-grade from day one: async Celery embedding pipeline, multi-tenant row-level security, JWT auth, GDPR compliance, and OpenTelemetry. Python SDK on PyPI, TypeScript SDK on npm.",
        stack: ["Python", "TypeScript", "PostgreSQL", "Redis", "PgBouncer", "FastAPI", "Celery"],
        github: "https://github.com/ai-emart/remembr",
    },
    {
        id: "evalflow",
        tier: "infrastructure",
        title: "evalflow: pytest for LLMs",
        label: "Open Source · PyPI · MIT",
        description: "CI/CD quality gates for LLM behavior regression. Catches silent model regressions after prompt changes, model updates, or provider switches by diffing live outputs against a saved baseline, failing CI with exit code 1 on regression. Multi-provider support: OpenAI, Anthropic, Groq, Gemini, Ollama — switchable via a single flag, no code changes. Drops into any GitHub Actions pipeline in minutes. The same way you don't find out your code is broken from users, you shouldn't find out your model is broken from users either.",
        stack: ["Python", "GitHub Actions", "OpenAI", "Anthropic", "Groq", "Gemini", "Ollama"],
        github: "https://github.com/emartai/evalflow",
        article: "https://medium.com/@Emar7/i-open-sourced-an-llm-regression-testing-framework-heres-why-every-ai-team-needs-one-c3aeb0a0966d",
        docs: "https://emartai.mintlify.app/",
    },
    {
        id: "playagent",
        tier: "infrastructure",
        title: "playagent: pytest for AI Agents",
        label: "Open Source · PyPI · MIT",
        description: "Pre-production agent testing, not post-production observability. LangSmith tells you what went wrong after users experienced it — PlayAgent stops it from happening in the first place. Drop-in adapters for OpenAI and Anthropic instrument your agent with zero logic changes, capturing every model call, tool invocation, parameter, and latency turn-by-turn. Assert on tool-call order, parameters, and counts with a fluent DSL — including MCP-native assertions for the dominant 2026 tool integration standard. Local SQLite, no cloud required, CI-ready via exit codes and JSON reports, vendor-neutral, and OSS forever.",
        stack: ["Python", "SQLite", "OpenAI", "Anthropic", "MCP", "GitHub Actions"],
        github: "https://github.com/emartai/playagent",
    },

    // TIER 2 — Applied AI
    {
        id: "phi4-finance-finetuning",
        tier: "applied-ai",
        title: "Phi-4 Mini Finance Fine-tuning: +69% ROUGE-L",
        label: "LLM Fine-tuning",
        description: "Fine-tuned Microsoft Phi-4 Mini (3.8B parameters) on SEC 10-K financial Q&A using QLoRA with 4-bit quantization on consumer hardware. Achieved +69% ROUGE-L improvement over the base model on a financial Q&A benchmark. Custom evaluation pipeline measuring semantic similarity and factual accuracy. Live demo deployed on Hugging Face.",
        stack: ["Python", "PyTorch", "PEFT/LoRA", "Hugging Face", "QLoRA"],
        github: "https://github.com/Emart29/phi4-finance-finetuning",
        article: "https://medium.com/@Emar7/i-trained-my-own-financial-ai-from-scratch-heres-what-a-69-improvement-actually-looks-like-8be7c7028c23?source=user_profile_page---------4-------------02f3a17b5bee----------------------",
        demo: "https://emar7-phi4-finance-demo.hf.space/",
    },
    {
        id: "ecommerce-product-classifier",
        tier: "applied-ai",
        title: "E-Commerce Product Classifier: Production NLP with Drift Detection",
        label: "Production NLP",
        description: "Fine-tuned DistilBERT across 19 product categories with FastAPI serving at ~42ms inference. Real-time data drift detection via Evidently AI alerts when incoming product data diverges from training distribution, catching silent accuracy degradation before it reaches production. React analytics dashboard for live monitoring. Fully containerized with Docker.",
        stack: ["PyTorch", "Hugging Face", "FastAPI", "Evidently AI", "Docker", "React"],
        github: "https://github.com/Emart29/ecommerce-product-classifier",
        article: "https://medium.com/datadriveninvestor/i-added-real-time-drift-detection-to-my-ml-classifier-heres-what-actually-broke-first-f3f6ffeaf6e5",
    },
    {
        id: "ragwell",
        tier: "applied-ai",
        title: "Production RAG Pipeline: Intelligent Document Q&A",
        label: "Production RAG",
        description: "Production RAG system combining semantic vector search (FAISS) with LLM reasoning for accurate, source-cited document question-answering. Features semantic chunking, hybrid retrieval, and integrated LLM observability monitoring token usage, query cost, and latency in real time. Sub-500ms retrieval on 100K+ document corpus. FastAPI backend deployed on Render, React frontend on Vercel.",
        stack: ["Python", "FAISS", "LangChain", "FastAPI", "ChromaDB", "React"],
        github: "https://github.com/Emart29/ragwell",
        article: "https://medium.com/nextgenllm/i-tested-5-rag-search-strategies-on-the-same-dataset-here-are-the-real-latency-numbers-603b01f5384d",
    },
    {
        id: "locksmith",
        tier: "applied-ai",
        title: "locksmith: Dangerous Postgres Migration Checker",
        label: "Open Source · Homebrew · MIT",
        description: "Go CLI tool that analyzes migration files and flags operations that acquire dangerous locks (table rewrites, exclusive locks, blocking ALTER TABLE) before they hit production databases. Deployed in CI pipelines to prevent accidental database outages. Distributed via Homebrew tap (brew install emartai/tap/locksmith, v1.0.4).",
        stack: ["Go", "Homebrew"],
        github: "https://github.com/emartai/locksmith",
    },

    // TIER 3 — Data Science
    {
        id: "heart-disease",
        tier: "data-science",
        title: "Heart Disease Risk Prediction: Production ML System",
        label: "Healthcare ML",
        description: "End-to-end production ML system for heart disease risk assessment. Full pipeline: feature engineering, model selection and cross-validation, hyperparameter tuning, achieving 88.5% accuracy. Deployed as FastAPI REST API with Streamlit clinician dashboard. SHAP explainability for interpretable risk outputs, MLflow experiment tracking, Docker deployment.",
        stack: ["Python", "scikit-learn", "FastAPI", "Streamlit", "SHAP", "MLflow", "Docker"],
        github: "https://github.com/Emart29/Heart-Disease-Prediction",
        article: "https://medium.com/datadriveninvestor/i-added-ci-cd-and-monitoring-to-my-ml-project-heres-what-i-learned-5cce67b028a1",
    },
    {
        id: "telecom-churn",
        tier: "data-science",
        title: "Telecom Churn Prediction: 80.4% Accuracy",
        label: "Business ML",
        description: "ML system predicting telecom customer churn with 80.4% accuracy using feature engineering on usage and contract data. Evaluated with precision, recall, and ROC-AUC optimized for retention strategy. Interactive Streamlit interface for business users to input customer attributes and receive churn risk predictions with interpretable driver explanations.",
        stack: ["Python", "scikit-learn", "Streamlit", "pandas"],
        github: "https://github.com/Emart29/customer-churn-prediction",
    },
    {
        id: "recommendation-system",
        tier: "data-science",
        title: "Hybrid Recommendation System: Collaborative + Content-Based",
        label: "Recommender Systems",
        description: "Sophisticated product recommendation engine combining Collaborative Filtering, Content-Based Filtering, and Matrix Factorization (SVD) to deliver personalized recommendations. Addresses the cold start problem through a hybrid approach. Evaluated with precision@k, recall@k, and NDCG metrics.",
        stack: ["Python", "scikit-learn", "pandas", "NumPy", "SVD"],
        github: "https://github.com/Emart29/recommendation-system",
        article: "https://medium.com/@Emar7/building-a-hybrid-recommendation-system-combining-collaborative-filtering-content-based-and-6be4e400ec3c?source=user_profile_page---------10-------------02f3a17b5bee----------------------",
    },
];

export const SKILL_LAYERS = [
    {
        name: "data/",
        skills: [
            "Advanced EDA & profiling",
            "Feature engineering",
            "Statistical testing & experiment design",
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
            "PyTorch & HuggingFace",
            "LLM fine-tuning (QLoRA/PEFT)"
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
            "Redis",
            "MLflow",
            "Model versioning",
            "GitHub Actions CI/CD",
            "PgBouncer & connection pooling"
        ]
    },
    {
        name: "llm_systems/",
        skills: [
            "Multi-provider LLM integration",
            "Prompt engineering",
            "System prompt design",
            "Function/tool calling",
            "RAG pipelines",
            "Embeddings & semantic retrieval",
            "Vector databases (pgvector, FAISS, ChromaDB)",
            "Prompt regression testing",
            "LLM evaluation frameworks"
        ]
    },
    {
        name: "agents/",
        skills: [
            "Multi-agent shared memory systems",
            "Agent behavioral testing & assertions",
            "MCP tool integration",
            "Async task queues (Celery)",
            "OSS SDK publishing (PyPI · npm · Homebrew)",
            "Go CLI tooling",
            "TypeScript SDK authoring"
        ]
    }
];

export const THOUGHTS = [
    {
        title: "Why most ML projects fail in production",
        content: "Most teams spend 80% of their time on the model and 20% on everything else. But production ML fails at the seams — training-serving skew, silent drift, predictions that can't be traced back to the data that caused them. The model is rarely the problem.",
        link: "https://medium.com/nextgenllm/everyones-building-ai-wrappers-few-are-solving-real-data-infrastructure-problems-517a4c8c20c4"
    },
    {
        title: "Evaluation > Accuracy",
        content: "A model that scores 99% on a benchmark but silently degrades after a prompt change isn't 99% accurate — it's untested. Real evaluation means regression gates, not leaderboard metrics.",
        link: "https://github.com/emartai/evalflow"
    },
    {
        title: "Agents don't have a prompting problem",
        content: "Most agent failures aren't prompt failures. They're memory failures — agents that forget context between sessions, lose nuance between handoffs, and drift from the original goal by step three. Better prompts don't fix broken memory architecture.",
        link: "https://github.com/ai-emart/remembr"
    },
    {
        title: "Your agent works in the notebook. That's the easy part.",
        content: "Demo agents pass every test because demos don't have tool failures, prompt regressions, or infinite loops. Production agents do. The gap between an agent that works in a notebook and one that works for users is a testing framework, not a better model.",
        link: "https://github.com/emartai/playagent"
    }
];

export const OS_CONTRIBUTIONS = {
    summary: "14 merged PRs across 215 contributors · 458 tests added · 33 tool READMEs written · Named contributor in aden-hive/hive v0.7.0 release notes.",
    contributions: [
        "BigQuery MCP tool integration (new feature)",
        "Credential exception handling (bug fix)",
        "EventBus comprehensive test coverage",
        "Security scanning test suites (7 tools)",
        "Cross-platform CI improvements (Windows + macOS)",
        "Resource leak prevention",
        "API integration unit tests (3 tools)",
    ],
    repo: "https://github.com/aden-hive/hive",
    stats: "10,000+ GitHub stars · 215 contributors",
};

export const RECENT_WRITINGS = [
    {
        title: "The MLOps Component Nobody Builds in Their Portfolio (And Why It Matters Most)",
        publication: "Towards AI",
        link: "https://medium.com/towards-artificial-intelligence/the-mlops-component-nobody-builds-in-their-portfolio-and-why-it-matters-most-c5ceac9fe6b3",
    },
    {
        title: "Can You Trace Any Prediction Back to the Exact Data That Caused It?",
        publication: "Towards AI",
        link: "https://medium.com/towards-artificial-intelligence/can-you-trace-any-prediction-back-to-the-exact-data-that-caused-it-heres-how-i-built-that-17087294e423",
    },
    {
        title: "Everyone's Building AI Wrappers. Few Are Solving Real Data Infrastructure Problems.",
        publication: "NextGenAI",
        link: "https://medium.com/nextgenllm/everyones-building-ai-wrappers-few-are-solving-real-data-infrastructure-problems-517a4c8c20c4",
    },
];
