export const projects = [
  {
    id: 'csv-analyzer',
    title: "Plateforme d'analyse CSV",
    excerpt: 'Application web Django pour analyser, filtrer et visualiser des CSV.',
    details:
      "Charge des fichiers, applique des filtres, génère des graphiques (histogrammes, corrélations) et exporte les résultats pour accélérer l'exploration.",
    tech: ['Python', 'Django', 'Pandas', 'Matplotlib'],
    image: '/urdata.png',
  },
  {
    id: 'ml-models',
    title: 'Machine Learning Hub',
    excerpt:
      'Suite de modèles de classification et régression avec suivi des performances.',
    details:
      "Expérimentation d'algorithmes, gestion d'hyperparamètres et visualisation des métriques pour choisir le meilleur modèle.",
    tech: ['scikit-learn', 'TensorFlow', 'Logistic Regression','KNN – K-Nearest Neighbors','SVM – Support Vector Machine','Naive Bayes (Gaussian, Multinomial)','Decision Tree Classifier','Random Forest Classifier','Gradient Boosting Classifier','AdaBoost'],
    image: '/machin.jpg',
  },
  {
    id: 'object-detection',
    title: 'Détection multi-capteurs',
    excerpt:
      'Caméra + capteurs pour détecter des objets et estimer leur distance en temps réel.',
    details:
      'Pipeline vision + capteurs ultra-sons embarqué avec interface temps réel et alertes intelligentes.',
    tech: ['YOLOv8','MobileNetV2','mobilenet SSD', 'OpenCV', 'ESP32'],
    image: '/detec.jpg',
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
    image: '/prediction.png',
  },
  {
    id: 'ai-website',
    title: 'Site vitrine + assistant IA',
    excerpt: 'Site orienté produit avec chatbot personnalisé pour guider les visiteurs.',
    details:
      'Déploiement serverless, intégration API LLM et personnalisation dynamique du contenu.',
    tech: ['React','js'],
    image: '/site.jpg',
  },
  {
    id: 'stock-app',
    title: 'Application Gestion de Stock',
    excerpt: 'Suivi, prévisions et alertes de stock pour supply-chain.',
    details:
      'Dashboards interactifs, prévision par séries temporelles et notifications automatiques.',
    tech: ['django', 'pandas','numpy','scikit-learn','matplotlib','seaborn'],
    image: '/appgestion-de-stock.jpg',
  },
];

