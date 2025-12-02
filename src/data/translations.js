export const translations = {
  fr: {
    logo: "Ilham Alami Chentoufi",
    language: "FR",
    nav: ["Accueil", "Compétences", "Projets", "Contact"],
    heroBadge: "Étudiante en Data science & IA",
    heroTitle: "Salut, je suis Ilham ",
    heroSubtitle: "Passionnée par la conception d’applications intelligentes et orientées données.",
    heroDescription: "Je combine IA, visualisation de données, IoT et automatisation pour créer des solutions utiles et élégantes.",
    primaryCta: "Me contacter →",
    secondaryCta: "Voir mes projets",
    resumeCta: "Mon CV",
    aboutCta: "Plus sur moi",
    aboutTitle: "À propos de moi",
    aboutContent: `Je suis Ilham Alami Chentoufi, étudiante passionnée en Data Science et Intelligence Artificielle. Mon parcours est guidé par une curiosité profonde pour l’analyse des données, la compréhension des algorithmes d’apprentissage automatique et la création de solutions technologiques innovantes. Actuellement, je poursuis un Bachelor en Data Science & Intelligence Artificielle, après avoir obtenu mon DUT en Intelligence Artificielle et Technologies Émergentes. Ces formations m’ont permis d’acquérir une solide base en traitement des données, modélisation, développement d’applications intelligentes et résolution de problèmes complexes. Je m’efforce de transformer des ensembles de données en insights pertinents, de concevoir des modèles performants et de développer des solutions intelligentes capables d’avoir un impact réel. Mon objectif est de contribuer à l’avancement de l’IA appliquée, tout en continuant à apprendre, à expérimenter et à évoluer dans un environnement dynamique et stimulant.`,
    skillsTitle: "Compétences",
    skillsCategories: {
      ai: "AI & Data Science",
      programming: "Programmation",
      frameworks: "Frameworks & Librairies",
      cloud: "Big Data & Cloud",
      security: "Cybersécurité",
    },
    skillsList: [
      { id: "prog", title: "Programmation", items: ["Python", "Java", "PHP", "JavaScript", "TypeScript", "SQL"] },
      { id: "frameworks", title: "Frameworks & Librairies", items: ["React", "Django", "Flask", "Pandas", "NumPy", "Matplotlib"] },
      { id: "cloud", title: "Big Data & Cloud", items: ["Spark", "Kafka", "Docker", "Linux", "MinIO", "OpenFaaS"] },
      { id: "security", title: "Cybersécurité", items: ["MobSF", "Kali Linux", "Genymotion"] },
    ],
    modal: { close: "Fermer le modal", scrollUp: "Faire défiler vers le haut", scrollDown: "Faire défiler vers le bas" },
    modalTech: "Technologies",
    projectsTitle: "Projets",
    projects: [
      {
        id: 'csv-analyzer',
        title: "Plateforme d'analyse CSV",
        excerpt: 'Application web Django pour analyser, filtrer et visualiser des CSV.',
        details: "Charge des fichiers, applique des filtres, génère des graphiques (histogrammes, corrélations) et exporte les résultats pour accélérer l'exploration.",
        tech: ['Python', 'Django', 'Pandas', 'Matplotlib'],
        image: `${import.meta.env.BASE_URL}urdata.png`,
      },
      {
        id: 'ml-models',
        title: 'Machine Learning Hub',
        excerpt: 'Suite de modèles de classification et régression avec suivi des performances.',
        details: "Expérimentation d'algorithmes, gestion d'hyperparamètres et visualisation des métriques pour choisir le meilleur modèle.",
        tech: ['scikit-learn', 'TensorFlow', 'Logistic Regression','KNN – K-Nearest Neighbors','SVM – Support Vector Machine','Naive Bayes (Gaussian, Multinomial)','Decision Tree Classifier','Random Forest Classifier','Gradient Boosting Classifier','AdaBoost'],
        image: `${import.meta.env.BASE_URL}machin.jpg`,
      },
      {
        id: 'object-detection',
        title: 'Détection multi-capteurs',
        excerpt: 'Caméra + capteurs pour détecter des objets et estimer leur distance en temps réel.',
        details: 'Pipeline vision + capteurs ultra-sons embarqué avec interface temps réel et alertes intelligentes.',
        tech: ['YOLOv8','MobileNetV2','mobilenet SSD', 'OpenCV', 'ESP32'],
        image: `${import.meta.env.BASE_URL}detec.jpg`,
      },
      {
        id: 'bigdata-pipeline',
        title: 'Big Data Pipeline',
        excerpt: 'Streaming Kafka + Spark avec interface Streamlit pour le monitoring.',
        details: `– Traitement par lot (PySpark, Spark ML, MongoDB, Streamlit)
- Ingestion depuis HDFS → Pandas DataFrame
- Modèles : Régression Linéaire (durée de séjour), Random Forest (risque de réadmission), Régression Logistique (disposition de sortie)
- Sauvegarde des résultats dans MongoDB et visualisation sur Streamlit.

– Traitement en temps réel (Kafka, Spark Streaming, PostgreSQL, Streamlit)
- Kafka Producer alimente le flux
- Spark Streaming calcule les prédictions en continu
- Résultats persistés dans PostgreSQL + dashboard Streamlit live.

Ce pipeline combine batch + streaming et m’a permis d’intégrer plusieurs stacks ML/Big Data sur un cas métier complet.`,
        tech: ['PySpark', 'Kafka', 'Spark Streaming', 'MongoDB', 'PostgreSQL', 'Streamlit'],
        image: `${import.meta.env.BASE_URL}prediction.png`,
      },
      {
        id: 'ai-website',
        title: 'Site vitrine + assistant IA',
        excerpt: 'Site orienté produit avec chatbot personnalisé pour guider les visiteurs.',
        details: 'Déploiement serverless, intégration API LLM et personnalisation dynamique du contenu.',
        tech: ['React','js'],
        image: `${import.meta.env.BASE_URL}site.jpg`,
      },
      {
        id: 'stock-app',
        title: 'Application Gestion de Stock',
        excerpt: 'Suivi, prévisions et alertes de stock pour supply-chain.',
        details: 'Dashboards interactifs, prévision par séries temporelles et notifications automatiques.',
        tech: ['django', 'pandas','numpy','scikit-learn','matplotlib','seaborn'],
        image: `${import.meta.env.BASE_URL}appgestion-de-stock.jpg`,
      },
    ],
    contactTitle: "Contact",
    contactEmail: "Email",
    contactPhone: "Téléphone",
    contactLocation: "Localisation",
    contactAvailability: "Disponible pour des missions freelance, stages ou collaborations.",
    contactCta: "Discutons",
    footer: "© 2025 Ilham Alami Chentoufi",
  },

  en: {
    logo: "Ilham Alami Chentoufi",
    language: "EN",
    nav: ["Home", "Skills", "Projects", "Contact"],
    heroBadge: "Data Science & AI Student",
    heroTitle: "Hello, I'm Ilham ",
    heroSubtitle: "Obsessed with intelligent, data-driven experiences.",
    heroDescription: "I mix ML, data viz, IoT and automation to build useful and elegant apps.",
    primaryCta: "Get in touch →",
    secondaryCta: "View my work",
    resumeCta: "Check my resume",
    aboutCta: "More about me",
    aboutTitle: "About me",
    aboutContent: `I am Ilham Alami Chentoufi, a passionate student in Data Science and Artificial Intelligence. My journey is driven by a deep curiosity for data analysis, understanding machine learning algorithms, and creating innovative technological solutions.

Currently, I am pursuing a Bachelor’s degree in Data Science & Artificial Intelligence, after obtaining my DUT in Artificial Intelligence and Emerging Technologies. These programs have allowed me to build a strong foundation in data processing, modeling, intelligent application development, and solving complex problems.

I strive to transform datasets into meaningful insights, design high-performing models, and develop intelligent solutions that can make a real impact. My goal is to contribute to the advancement of applied AI while continuing to learn, experiment, and grow in a dynamic and stimulating environment.`,
    skillsTitle: "Skills",
    skillsCategories: {
      ai: "AI & Data Science",
      programming: "Programming",
      frameworks: "Frameworks & Libraries",
      cloud: "Big Data & Cloud",
      security: "Cybersecurity",
    },
    skillsList: [
      { id: "prog", title: "Programming", items: ["Python", "Java", "PHP", "JavaScript", "TypeScript", "SQL"] },
      { id: "frameworks", title: "Frameworks & Libraries", items: ["React", "Django", "Flask", "Pandas", "NumPy", "Matplotlib"] },
      { id: "cloud", title: "Big Data & Cloud", items: ["Spark", "Kafka", "Docker", "Linux", "MinIO", "OpenFaaS"] },
      { id: "security", title: "Cybersecurity", items: ["MobSF", "Kali Linux", "Genymotion"] },
    ],
    modal: { close: "Close modal", scrollUp: "Scroll up", scrollDown: "Scroll down" },
    modalTech: "Tech stack",
    projectsTitle: "Projects",
    projects: [
      {
        id: 'csv-analyzer',
        title: "CSV Analysis Platform",
        excerpt: "Django web app to analyze, filter and visualize CSV files.",
        details: "Load files, apply filters, generate charts (histograms, correlations), and export results for faster exploration.",
        tech: ['Python', 'Django', 'Pandas', 'Matplotlib'],
        image: `${import.meta.env.BASE_URL}urdata.png`,
      },
      {
        id: 'ml-models',
        title: "Machine Learning Hub",
        excerpt: "Classification and regression model suite with performance tracking.",
        details: "Algorithm experimentation, hyperparameter tuning, and metric visualization to choose the best model.",
        tech: ['scikit-learn', 'TensorFlow', 'Logistic Regression','KNN – K-Nearest Neighbors','SVM – Support Vector Machine','Naive Bayes (Gaussian, Multinomial)','Decision Tree Classifier','Random Forest Classifier','Gradient Boosting Classifier','AdaBoost'],
        image: `${import.meta.env.BASE_URL}machin.jpg`,
      },
      {
        id: 'object-detection',
        title: "Multi-Sensor Detection",
        excerpt: "Camera + sensors for real-time object detection.",
        details: "Embedded vision + ultrasonic sensors pipeline with live interface and smart alerts.",
        tech: ['YOLOv8','MobileNetV2','mobilenet SSD', 'OpenCV', 'ESP32'],
        image: `${import.meta.env.BASE_URL}detec.jpg`,
      },
      {
        id: 'bigdata-pipeline',
        title: "Big Data Pipeline",
        excerpt: "Kafka + Spark streaming with Streamlit monitoring dashboard.",
        details: `– Batch processing (PySpark, Spark ML, MongoDB, Streamlit)
- Ingestion from HDFS → Pandas DataFrame
- Models: Linear Regression (length of stay), Random Forest (readmission risk), Logistic Regression (discharge disposition)
- Save results in MongoDB and visualize on Streamlit.

– Real-time processing (Kafka, Spark Streaming, PostgreSQL, Streamlit)
- Kafka Producer feeds stream
- Spark Streaming calculates predictions continuously
- Results persisted in PostgreSQL + live Streamlit dashboard.

This pipeline combines batch + streaming and allowed me to integrate multiple ML/Big Data stacks on a complete business case.`,
        tech: ['PySpark', 'Kafka', 'Spark Streaming', 'MongoDB', 'PostgreSQL', 'Streamlit'],
        image: `${import.meta.env.BASE_URL}prediction.png`,
      },
      {
        id: 'ai-website',
        title: "Showcase Website + AI Assistant",
        excerpt: "Product website with custom chatbot for guiding visitors.",
        details: "Serverless deployment, LLM API integration, and dynamic content personalization.",
        tech: ['React','js'],
        image: `${import.meta.env.BASE_URL}site.jpg`,
      },
      {
        id: 'stock-app',
        title: "Stock Management App",
        excerpt: "Stock tracking, forecasting and alerts for supply chain.",
        details: "Interactive dashboards, time series forecasting and automated notifications.",
        tech: ['django', 'pandas','numpy','scikit-learn','matplotlib','seaborn'],
        image: `${import.meta.env.BASE_URL}appgestion-de-stock.jpg`,
      },
    ],
    contactTitle: "Contact",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactLocation: "Location",
    contactAvailability: "Available for freelance projects, internships, or collaborations.",
    contactCta: "Let's talk",
    footer: "© 2025 Ilham Alami Chentoufi",
  },

  es: {
    logo: "Ilham Alami Chentoufi",
    language: "ES",
    nav: ["Inicio", "Habilidades", "Proyectos", "Contacto"],
    heroBadge: "Estudiante de Ciencia de Datos e IA",
    heroTitle: "Hola, soy Ilham ",
    heroSubtitle: "Creando experiencias inteligentes basadas en datos.",
    heroDescription: "Combino ML, visualización de datos, IoT y automatización.",
    primaryCta: "Contáctame →",
    secondaryCta: "Ver proyectos",
    resumeCta: "Mi CV",
    aboutCta: "Más sobre mí",
    aboutTitle: "Sobre mí",
    aboutContent: `Soy Ilham Alami Chentoufi, una estudiante apasionada por la Ciencia de Datos y la Inteligencia Artificial. Mi trayectoria está guiada por una profunda curiosidad por el análisis de datos, la comprensión de algoritmos de aprendizaje automático y la creación de soluciones tecnológicas innovadoras.

Actualmente, estoy cursando una Licenciatura en Ciencia de Datos e Inteligencia Artificial, después de haber obtenido mi DUT en Inteligencia Artificial y Tecnologías Emergentes. Estas formaciones me han permitido adquirir una sólida base en el procesamiento de datos, modelado, desarrollo de aplicaciones inteligentes y resolución de problemas complejos.

Me esfuerzo por transformar conjuntos de datos en insights relevantes, diseñar modelos de alto rendimiento y desarrollar soluciones inteligentes capaces de generar un impacto real. Mi objetivo es contribuir al avance de la IA aplicada, mientras continúo aprendiendo, experimentando y creciendo en un entorno dinámico y estimulante.`,
    skillsTitle: "Habilidades",
    skillsCategories: {
      ai: "IA y Ciencia de Datos",
      programming: "Programación",
      frameworks: "Frameworks y Librerías",
      cloud: "Big Data & Cloud",
      security: "Ciberseguridad",
    },
    skillsList: [
      { id: "prog", title: "Programación", items: ["Python", "Java", "PHP", "JavaScript", "TypeScript", "SQL"] },
      { id: "frameworks", title: "Frameworks y Librerías", items: ["React", "Django", "Flask", "Pandas", "NumPy", "Matplotlib"] },
      { id: "cloud", title: "Big Data & Cloud", items: ["Spark", "Kafka", "Docker", "Linux", "MinIO", "OpenFaaS"] },
      { id: "security", title: "Ciberseguridad", items: ["MobSF", "Kali Linux", "Genymotion"] },
    ],
    modal: { close: "Cerrar modal", scrollUp: "Desplazar hacia arriba", scrollDown: "Desplazar hacia abajo" },
    modalTech: "Tecnologías",
    projectsTitle: "Proyectos",
    projects: [
      {
        id: 'csv-analyzer',
        title: "Plataforma de análisis CSV",
        excerpt: "Aplicación Django para analizar, filtrar y visualizar CSV.",
        details: "Carga archivos, aplica filtros, genera gráficos (histogramas, correlaciones) y exporta resultados para acelerar la exploración.",
        tech: ['Python', 'Django', 'Pandas', 'Matplotlib'],
        image: `${import.meta.env.BASE_URL}urdata.png`,
      },
      {
        id: 'ml-models',
        title: "Machine Learning Hub",
        excerpt: "Suite de modelos de clasificación y regresión con seguimiento de desempeño.",
        details: "Experimentación de algoritmos, ajuste de hiperparámetros y visualización de métricas para elegir el mejor modelo.",
        tech: ['scikit-learn', 'TensorFlow', 'Logistic Regression','KNN – K-Nearest Neighbors','SVM – Support Vector Machine','Naive Bayes (Gaussian, Multinomial)','Decision Tree Classifier','Random Forest Classifier','Gradient Boosting Classifier','AdaBoost'],
        image: `${import.meta.env.BASE_URL}machin.jpg`,
      },
      {
        id: 'object-detection',
        title: "Detección Multisensor",
        excerpt: "Cámara + sensores para detección en tiempo real.",
        details: "Pipeline de visión + sensores ultrasónicos con interfaz en vivo y alertas inteligentes.",
        tech: ['YOLOv8','MobileNetV2','mobilenet SSD', 'OpenCV', 'ESP32'],
        image: `${import.meta.env.BASE_URL}detec.jpg`,
      },
      {
        id: 'bigdata-pipeline',
        title: "Pipeline Big Data",
        excerpt: "Kafka + Spark Streaming con dashboard de monitorización en Streamlit.",
        details: `– Procesamiento batch (PySpark, Spark ML, MongoDB, Streamlit)
- Ingesta desde HDFS → Pandas DataFrame
- Modelos: Regresión lineal (duración de estancia), Random Forest (riesgo de reingreso), Regresión logística (disposición de salida)
- Guardar resultados en MongoDB y visualización en Streamlit.

– Procesamiento en tiempo real (Kafka, Spark Streaming, PostgreSQL, Streamlit)
- Kafka Producer alimenta el flujo
- Spark Streaming calcula predicciones continuamente
- Resultados persistidos en PostgreSQL + dashboard Streamlit en vivo.

Este pipeline combina batch + streaming e integró múltiples stacks ML/Big Data en un caso completo.`,
        tech: ['PySpark', 'Kafka', 'Spark Streaming', 'MongoDB', 'PostgreSQL', 'Streamlit'],
        image: `${import.meta.env.BASE_URL}prediction.png`,
      },
      {
        id: 'ai-website',
        title: "Sitio web + asistente IA",
        excerpt: "Sitio orientado a producto con chatbot personalizado para guiar a los visitantes.",
        details: "Despliegue serverless, integración API LLM y personalización dinámica del contenido.",
        tech: ['React','js'],
        image: `${import.meta.env.BASE_URL}site.jpg`,
      },
      {
        id: 'stock-app',
        title: "Aplicación de Gestión de Stock",
        excerpt: "Seguimiento, predicciones y alertas de stock para supply-chain.",
        details: "Dashboards interactivos, predicción por series temporales y notificaciones automáticas.",
        tech: ['django', 'pandas','numpy','scikit-learn','matplotlib','seaborn'],
        image: `${import.meta.env.BASE_URL}appgestion-de-stock.jpg`,
      },
    ],
    contactTitle: "Contacto",
    contactEmail: "Email",
    contactPhone: "Teléfono",
    contactLocation: "Ubicación",
    contactAvailability: "Disponible para proyectos freelance, prácticas o colaboraciones.",
    contactCta: "Hablemos",
    footer: "© 2025 Ilham Alami Chentoufi",
  },
};
