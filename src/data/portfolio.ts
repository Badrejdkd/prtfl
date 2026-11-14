// =====================================================================
//  Contenu du portfolio — source unique de vérité.
//  Modifiez ce fichier pour mettre à jour le site (pas d'admin, pas de base de données).
// =====================================================================

// Affiche des cadres en pointillés pour les images pas encore ajoutées.
// Passez à false avant la mise en ligne si certaines images manquent encore.
export const showImagePlaceholders = true;

export const profile = {
  name: "Firdaous Moufti",
  firstName: "Firdaous",
  lastName: "Moufti",
  initials: "MF",
  title: "Data Scientist & AI Engineer",
  subtitle: "Élève ingénieure en 5e année — Data Science & IA, EMSI Casablanca",
  location: "Casablanca, Maroc",
  email: "mouftifirdaous@gmail.com",
  phone: "+212 651 518 715",
  phoneHref: "+212651518715",
  cvPath: "/cv-firdaous-moufti.pdf",
  // Photo portrait (format 4:5 conseillé, 800 x 1000 px minimum pour un rendu net).
  photo: "/images/profile.jpg",
  availability: "Disponible pour un stage PFE de 6 mois — février 2027",
  // Laissez un lien vide ("") pour le masquer.
  links: {
    linkedin: "",
    github: "",
  },
  headline:
    "Je conçois des pipelines de données fiables et des applications d'IA générative, de l'ingestion des données jusqu'à l'interface utilisateur.",
  about: [
    "Élève ingénieure en 5e année à l'École Marocaine des Sciences de l'Ingénieur (EMSI), spécialisée en Data Science et Intelligence Artificielle.",
    "Mon parcours associe Data Engineering, IA générative et développement d'applications intelligentes : pipelines ETL et OCR sur des données douanières à l'ADII, systèmes RAG et multi-agents LLM, applications web et mobiles en production.",
    "Je recherche un stage de fin d'études de 6 mois à partir de février 2027 pour contribuer à des projets innovants en Data et IA.",
  ],
};

// Mots qui défilent sous le nom (hero) — 4 éléments max.
export const roles = ["IA générative", "Data Engineering", "Agents LLM", "Applications intelligentes"];

export const stats = [
  { value: "3", label: "Stages en entreprise" },
  { value: "4", label: "Projets IA & Data" },
  { value: "2", label: "Certifications" },
  { value: "Fév. 2027", label: "Début du PFE" },
];

// Domaines d'expertise (section « Expertise »)
export const expertise = [
  {
    title: "IA générative & LLM",
    text: "Chatbots RAG, orchestration multi-agents avec validation humaine, enrichissement de documents avec des LLM locaux.",
    tools: ["LangChain", "LangGraph", "Ollama", "ChromaDB", "OpenAI", "PyTorch"],
  },
  {
    title: "Data Engineering",
    text: "Pipelines ETL avec validation et règles métier, architecture Bronze / Silver, flux en streaming et orchestration.",
    tools: ["Pandera", "Kafka", "RabbitMQ", "Airflow", "MinIO", "SSIS"],
  },
  {
    title: "Applications intelligentes",
    text: "Des API aux interfaces : back-ends Python et Java, front-ends React, tableaux de bord et tests automatisés.",
    tools: ["FastAPI", "Django", "Flask", "React", "Streamlit", "Docker"],
  },
];

export type Experience = {
  role: string;
  company: string;
  companyFull?: string;
  logo?: string;
  period: string;
  type: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Stage Data Scientist",
    company: "ADII",
    companyFull: "Administration des Douanes et Impôts Indirects",
    logo: "/images/logos/adii.png",
    period: "Juil. 2026 — Août 2026",
    type: "Stage",
    points: [
      "Conception d'un prototype modulaire de traitement des données douanières structurées (CSV) et non structurées (PDF, images).",
      "Développement de pipelines ETL : ingestion, validation avec Pandera, règles métier et séparation Bronze / Silver / Rejected.",
      "Extraction du texte et des tableaux des PDF, OCR avec PaddleOCR, classification des documents et enrichissement local avec Ollama.",
      "Mise en place du stockage (local / MinIO) et expérimentation de flux Kafka / RabbitMQ en micro-lots.",
      "Création d'une interface de suivi Streamlit et automatisation des tests (pytest, GitHub Actions).",
    ],
    stack: ["Python", "Pandas", "Pandera", "PaddleOCR", "Ollama", "MinIO", "Kafka", "RabbitMQ", "Streamlit", "pytest", "GitHub Actions"],
  },
  {
    role: "Stage Développeuse Web",
    company: "RAZNET",
    logo: "/images/logos/raznet.png",
    period: "Sept. 2023 — Mars 2024",
    type: "Stage",
    points: [
      "Développement d'une application de messagerie sécurisée pour une entreprise : frontend React, backend Flask, base MySQL, API REST et authentification JWT.",
    ],
    stack: ["React", "Flask", "MySQL", "API REST", "JWT"],
  },
  {
    role: "Stage Développeuse Mobile",
    company: "AI SYSTEM",
    logo: "/images/logos/ai-system.png",
    period: "Mars 2023 — Mai 2023",
    type: "Stage",
    points: [
      "Conception des interfaces Flutter de l'application « Espace Étudiant » et enrichissement du backend existant (CodeIgniter / PHP, MySQL).",
    ],
    stack: ["Flutter", "CodeIgniter", "PHP", "MySQL"],
  },
];

export type Project = {
  title: string;
  category: string;
  summary: string;
  stack: string[];
  image?: string; // capture 16:10 conseillée (1600 x 1000 px)
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Assistant juridique intelligent",
    category: "IA générative · RAG",
    summary:
      "Plateforme pour entreprises avec chatbot RAG, analyse de contrats PDF et assistant vocal.",
    stack: ["Django", "React", "SQL Server", "ChromaDB", "OpenAI", "LangChain"],
    image: "/images/projects/assistant-juridique.jpg",
  },
  {
    title: "Système multi-agents médical",
    category: "Agents LLM",
    summary:
      "Orchestration d'agents LLM avec validation humaine (Human-in-the-Loop).",
    stack: ["LangGraph", "LangChain", "FastAPI", "React"],
    image: "/images/projects/multi-agents-medical.jpg",
  },
  {
    title: "Analyse des offres d'emploi",
    category: "Data Engineering",
    summary:
      "Pipeline de données automatisé et tableau de bord interactif.",
    stack: ["Python", "Kafka", "Airflow", "MinIO", "MySQL", "Docker", "Streamlit"],
    image: "/images/projects/offres-emploi.jpg",
  },
  {
    title: "Analyse de réseaux criminels",
    category: "Graphes",
    summary:
      "Modélisation et exploration d'un réseau sous forme de graphe.",
    stack: ["Neo4j", "Python", "React"],
    image: "/images/projects/reseaux-criminels.jpg",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "IA & GenAI",
    items: ["Machine Learning", "PyTorch", "LLM", "RAG", "LangChain", "LangGraph", "Ollama", "OCR (PaddleOCR)", "NumPy", "Pandas"],
  },
  {
    group: "Data Engineering",
    items: ["Pipelines ETL", "Kafka", "RabbitMQ", "Airflow", "Hadoop", "SSIS", "MinIO", "Pandera", "Data Warehousing", "Web scraping"],
  },
  {
    group: "Bases de données",
    items: ["MySQL", "SQL Server", "Oracle", "MongoDB", "Cassandra", "Neo4j", "ChromaDB"],
  },
  {
    group: "Développement",
    items: ["Python", "Java", "PHP", "JavaScript", "React", "Flask", "FastAPI", "Django", "Spring Boot", "Streamlit"],
  },
  {
    group: "Outils & DevOps",
    items: ["Git / GitHub", "GitHub Actions", "pytest", "Docker", "Linux", "Power BI"],
  },
];

export const softSkills = ["Esprit d'équipe", "Autonomie", "Rigueur", "Curiosité", "Capacité d'adaptation"];

export const education = [
  {
    degree: "Cycle d'ingénieur d'État — Informatique et Réseaux, option Data Science & IA",
    school: "École Marocaine des Sciences de l'Ingénieur (EMSI), Casablanca",
    period: "2025 — en cours",
  },
  {
    degree: "Licence professionnelle — Ingénierie de Conception et de Développement d'Applications",
    school: "Faculté des Sciences et Techniques (FST), Settat",
    period: "2022 — 2023",
  },
  {
    degree: "Licence professionnelle — Méthodes Informatiques Appliquées à la Gestion d'Entreprise",
    school: "Faculté des Sciences Juridiques, Économiques et Sociales Aïn Sebaâ, Casablanca",
    period: "2022 — 2023",
  },
  {
    degree: "Diplôme de Technicien Spécialisé — Développement Web et Multimédia",
    school: "Institut Spécialisé de Technologie Appliquée Arts Graphiques, Casablanca",
    period: "2020 — 2022",
  },
];

export const certifications: { name: string; issuer: string; link?: string }[] = [
  { name: "Applications of AI for Anomaly Detection", issuer: "NVIDIA" },
  { name: "Spring Boot", issuer: "Ajincodew" },
];

export const languages = [
  { name: "Arabe", level: "Langue maternelle" },
  { name: "Français", level: "Maîtrise" },
  { name: "Anglais", level: "Maîtrise" },
];

export const nav = [
  { id: "profil", label: "Profil" },
  { id: "experience", label: "Expérience" },
  { id: "projets", label: "Projets" },
  { id: "competences", label: "Compétences" },
  { id: "formation", label: "Formation" },
  { id: "contact", label: "Contact" },
];
