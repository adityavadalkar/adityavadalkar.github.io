// components/Projects.js
import Card from './Card';

function Projects() {
    const projectData = [
        {
            url: "/climate.webp",
            videoUrl: "#",
            title: "Local Climate Impact Model",
            description: "Created visualizations and models to study local climate impact, enhancing model interpretability with SHAP plots and partial dependence plots.",
            technologies: ["Python", "SHAP", "Pandas"],
            date: "June 2024"
        },
        {
            url: "/ai_powered.png",
            videoUrl: "https://www.youtube.com/embed/OxJpZNXkeOE?si=c4wkO96vAHbVjT4n",
            title: "AI-Powered Sports Highlights Generator",
            description: "Developed a Retrieval-Augmented Generation (RAG) system with LangChain and OpenAI GPT-4 models for generating relevant highlights.",
            technologies: ["Python", "Flask", "AWS", "LangChain", "GPT-4"],
            highlight: true,
            date: "June 2024"
        },
        {
            url: "/covid_dashboard.png",
            videoUrl: "#",
            title: "COVID-19 Dashboard",
            description: "Developed interactive dashboards for COVID-19 analysis with R Shiny, optimized with asynchronous loading and data chunking.",
            technologies: ["Python", "R", "Shiny", "MapShaper"],
            highlight: true,
            date: "May 2024"
        },
        {
            url: "/thermal.webp",
            videoUrl: "#",
            title: "Cognitive Load Detection",
            description: "Implemented optimized TF Lite models for CPU-based cognitive load detection on facial ROI using thermal metadata from FLIR videos.",
            technologies: ["Python", "TensorFlow Lite", "OpenCV", "FLIR SDK"],
            date: "April 2024"
        },
        {
            url: "/distill.png",
            videoUrl: "#",
            title: "Step-by-Step Distillation - Llama to DialoGPT",
            description: "Utilized the QLoRA technique to finetune Llama7B on the Empathetic Dialogues dataset from Huggingface.",
            technologies: ["QLoRA", "Llama7B", "Huggingface"],
            highlight: true,
            date: "April 2024"
        },
        {
            url: "/lsi_wisconsin.png",
            videoUrl: "#",
            title: "Wisconsin Dashboard",
            description: "Developed an interactive dashboard for analyzing social determinants of health related to opioid use in Wisconsin.",
            technologies: ["R Shiny", "Python", "ShinyApps.io"],
            date: "March 2024"
        },
        {
            url: "/opioid.webp",
            videoUrl: "#",
            title: "Opioid Mortality Prediction Model",
            description: "Implemented regression models (CatBoost, XGBoost, Random Forest) to explain 99.5% variance in opioid mortality in the US.",
            technologies: ["Python", "R", "Shiny", "Scikit-learn"],
            date: "February 2024"
        },
        {
            url: "https://cdn.loom.com/sessions/thumbnails/2d224db2b0c94987891649cfbea2ea8b-1714161501968-with-play.gif",
            videoUrl: "https://www.loom.com/embed/2d224db2b0c94987891649cfbea2ea8b?sid=0ebba8bf-ae03-41a1-b7e0-2151ec837740",
            title: "Raven: AI-Powered Fashion Stylist",
            description: "Engineered a custom AI conversational agent using Streamlit, ChatGPT API, Langchain, and Pinecone vector database.",
            technologies: ["React", "Redux", "Figma", "ChatGPT API", "Langchain", "Pinecone"],
            highlight: true,
            date: "October 2023"
        },
        {
            url: "/tweet.png",
            videoUrl: "#",
            title: "Twitter Sentiment Browser Extension",
            description: "Engineered a Node.js server to generate sentiment scores using Huggingface models for tweets on the Twitter website.",
            technologies: ["Node.js", "Huggingface models", "JavaScript", "HTML", "CSS"],
            date: "January 2023"
        },
        {
            url: "/yelp.png",
            videoUrl: "#",
            title: "Lightweight Yelp",
            description: "Developed a website for optimized business detail retrieval with React by utilizing the Yelp API.",
            technologies: ["React", "Node.js", "Express", "Google API", "Java", "Volley"],
            date: "October 2022"
        },
        {
            url: "/asthma.png",
            videoUrl: "#",
            title: "Asthma and Diabetes Predictor",
            description: "Developed ML pipeline using a suite of regression models achieving R2_score ~0.95 for diabetes and asthma prediction.",
            technologies: ["Python", "Scikit-learn", "kepler.gl"],
            date: "September 2022"
        },
        {
            url: "/its.png",
            videoUrl: "#",
            title: "Intelligent Tutoring System",
            description: "Developed an NLP-driven e-learning platform for content summarization, question generation, and keyword extraction.",
            technologies: ["Python", "Flask", "TextRank", "T5 model", "YAKE", "GCP"],
            highlight: true,
            date: "May 2022"
        },
        {
            url: "/citation.jpeg",
            videoUrl: "#",
            title: "Citation Detection",
            description: "Enhanced citation detection/localization accuracy by 4% using Hierarchical Attention Networks and demonstrated Gated Multilayer Perceptrons' effectiveness in text alignment with qualitative analysis.",
            technologies: ["Python", "PyTorch", "Document Attention"],
            bgSize: "object-contain",
            date: "June 2022"
        },        
        {
            url: "/covid_spy.png",
            videoUrl: "#",
            title: "Covid Spy",
            description: "Devised a prototype for contact tracing by employing Bluetooth Low Energy Beacons (BLE) and RSSI.",
            technologies: ["Bluetooth Low Energy Beacons (BLE)", "RSSI", "Graph Theory"],
            date: "March 2020"
        },
        {
            url: "/pothole.png",
            videoUrl: "#",
            title: "Pothole Detection and Reporting System",
            description: "Led a team of 6 to develop an end-to-end solution to detect potholes at 92% accuracy and report them to authorities for efficient management of pothole repair projects.",
            technologies: ["Python", "Support Vector Machines", "Sensors"],
            date: "December 2019",
            bgSize: "object-contain",
        }
    ];
    
    

  return (
    <div className="relative">
      <div className='absolute animate-marquee-vertical'>
        {projectData.map((project, idx) => (
          <Card
            key={idx}
            url={project.url}
            videoUrl={project.videoUrl}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            date={project.date}
            bgSize={project.bgSize}
            highlight={project.highlight}
            index={idx}
          />
        ))}
      </div>
      <div className='absolute animate-marquee2-vertical'>
        {projectData.map((project, idx) => (
          <Card
            key={idx}
            url={project.url}
            videoUrl={project.videoUrl}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            date={project.date}
            bgSize={project.bgSize}
            highlight={project.highlight}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
