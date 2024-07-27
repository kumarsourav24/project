function showProjects() {
    var department = document.getElementById('department').value;
    var projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    var projectIdeas = {
        CSM: [
            "Unveiling Insights with Twitter Data: Exploring Trends, Sentiments",
            "Predicting BigMart Sales: A Regression Analysis of Product and Store Attributes",
            "Crafting Personalized Movie Recommendations: Exploring the Movielens Dataset and Word Cloud Visualization for Recommender Systems",
            "Machine Learning Approaches for Robot Fault Diagnosis in Industrial Settings: An Application of Industry 4.0",
            "Remote Patient Monitoring using Machine Learning Classifiers for IoT Healthcare",
            "Predicting home prices: A beginners journey with regression analysis using the Boston housing data set",
            "Classifying Iris Flowers: A Machine Learning Approach Based on Petal and Sepal",
            "Machine Learning-Based Anomaly Detection in IoT Sensor Data",
            "Classification of IoT Device States using Machine Learning Techniques",
            "Leafing through Data: Building a Plant Species Identification Algorithm with Machine Learning",
            "Predictive Modelling for Disease Outbreak Detection: Machine Learning Classifier Evaluation",
            "Medical Image Classification: A Machine Learning Approach for Disease",
            "Building Your Own Chatbots: Exploring Natural Language Processing Techniques with NLTK and Neural Networks"
        ],
        IOT: [
            "Analysis and Exploration of Heart Disease Data",
            "Exploring Data to Analyze Team Productivity in Garment Manufacturing.",
            "Investigating Magnetic Disturbances and Soil Properties for Detecting Landmines Passively.",
            "Exploratory Analytics for Mall Customer Data",
            "Analyzing Environmental Factors and Fault Detection in Urban Street Lighting Systems.",
            "Exploratory Data Analysis on Smart Home IoT Networks Faults to Enhance Home Security."
        ],
        DATA_SCIENCE: [
            "Airline Passenger Satisfaction: Data Preprocessing and EDA",
            "TRAFFIC ACCIDENT DATA: CLEANING EXPLORATION VISUALIZATION",
            "PATIENT RECORDS: PREPROCESSING AND EDA FOR HEALTHCARE INSIGHT",
            "SOCIAL MEDIA SENTIMENT ANALYSIS: DATA PREPROCESSING AND VISUALIZATION",
            "Cryptocurrency Price Dynamics: Graphical Analysis and Trend Detection",
            "PUBLIC HEALTH DATA: VISUALIZING EPIDEMIC OUTBREAK TRENDS",
            "STOCK MARKET DYNAMICS: TREND ANALYSIS AND VISUALIZATION",
            "WINE QUALITY DATA: EDA AND VISUALIZATION",
            "ELECTION DATA TRENDS: ANALYSIS AND VISUALIZATION",
            "EMPLOYMENT STATISTICS: DATA PREPROCESSING AND EXPLORATORY ANALYSIS",
            "AI TECHNOLOGICAL ADVANCES: TREND ANALYSIS",
            "TRANSPORT LOGISTICS DATA: GRAPHICAL REPRESENTATION"
        ],
        CSE: [
            "Developing a Platform for Assessing Job Skills with SQL Integration",
            "Building a Platform for Freelancers to Offer Services with SQL Integration",
            "Building a Site for Sharing and Discovering Music with SQL Integration",
            "Creating a Website for Sharing Gardening Tips and Resources with SQL",
            "Developing an App for Monitoring Pet Health and Vet Visits with SQL",
            "Designing web interface to manage events linked to SQL",
            "Building a Course Management System with SQL Integration",
            "Weather Forecasting App: Accurate and Location-Based Weather Updates",
            "Developing a website to Calculate Nutritional Information for Recipes with SQL",
            "Pet Adoption Portal",
            "Creating a Web App to Plan and Manage Weddings with SQL Backend",
            "Travel Itinerary Planner",
            "Developing a Website for Online Cooking Classes with SQL Integration",
            "Creating a website to Share Tips and Resources for Sustainable Living with SQL"
        ],
        IT: [
            "Exploring the Relationship Between Weather Patterns and Energy Consumption in Smart Homes",
            "Statistical Analysis of Breach Incident Data",
            "Study on Intrusion Detection Properties in Cybersecurity Through Data Analytics",
            "Enhancing Building Energy Efficiency by Analyzing IoT Sensor Data for Urban Development",
            "Deriving Insights into Machine Condition Monitoring for Predictive Maintenance in Industrial IoT",
            "Data Mining Models for Student Performance Analysis with EDA",
            "Systematic Study on Mechanical Failures in Manufacturing Industry 4.0 Through Data Exploration",
            "EDA on Optimal Water Management in Smart Irrigation Systems Using Node - MCU Data",
            "Identifying Structures in Aerospace Surveillance Through Analysis of Ionospheric Radar Returns",
            "Data Assessing on Industrial IoT Machine Health for Maintenance Analysis",
            "Examining Clinical and Microscopic Characteristics for Diagnosing Erythemato - Squamous Diseases"
        ]
    };

    if (projectIdeas[department]) {
        projectIdeas[department].forEach(function(project) {
            var li = document.createElement('li');
            li.textContent = project;
            projectList.appendChild(li);
        });
    } else {
        var li = document.createElement('li');
        li.textContent = "No projects available for this department.";
        projectList.appendChild(li);
    }
}
