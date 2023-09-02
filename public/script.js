// Shuffle function to randomly reorder an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const questions = [
    {
        question: "What is the Accuracy Score?",
        choices: [
            "Measures model performance based on correct predictions.",
            "Measures the speed of computation.",
            "Measures the size of data.",
            "Measures temperature fluctuations."
        ],
        correctAnswer: "Measures model performance based on correct predictions.",
        explanation: "An accuracy score is an evaluation metric used to estimate a machine learning model’s performance, and show the ratio of the number of correct predictions to the total number of predictions."
    },
    {
        question: "What is the Activation Function?",
        choices: [
            "Determines whether a neuron should be activated in a neural network.",
            "Controls the brightness of a computer screen.",
            "Decides the output color for graphics.",
            "Calculates the cooking time for a recipe."
        ],
        correctAnswer: "Determines whether a neuron should be activated in a neural network.",
        explanation: "An activation function is used in artificial neural networks (ANN) that determines whether a neuron should be activated or not by calculating its output to the next hidden layer (or output layer) based on the input from the previous layer (or input layer). The activation function is responsible for the non-linear transformation of a neural network."
    },
    {
        question: "What is a API?",
        choices: [
            "A type of pasta dish.",
            "A software intermediary for connecting applications.",
            "A musical instrument.",
            "A method for designing graphics."
        ],
        correctAnswer: "A software intermediary for connecting applications.",
        explanation: "API is an acronym for Application Programming Interface, a software intermediary that ensures a connection between applications or computers. An example of an API is embedding Google Maps in a Rideshare application. Data scientists often work with APIs to access data (e.g., Twitter API to download tweets), or to package a solution they made (e.g., an API that calls a machine learning model in production)."
    },
    {
        question: "What is Artificial Intelligence (AI)?",
        choices: [
            "A type of household appliance.",
            "A branch of philosophy.",
            "A branch of computer science that enables intelligent behavior in machines.",
            "A type of fast food."
        ],
        correctAnswer: "A branch of computer science that enables intelligent behavior in machines.",
        explanation: "Artificial intelligence is a branch of computer science that involves using machine learning, programming, and data science techniques that enable computers to behave intelligently. AI systems are broad and have varying degrees of complexity. They can range from rule-based systems, to machine learning based systems, and can perform abilities such as fraud detection, object recognition, language translation, stock price prediction, and so much more."
    },
    {
        question: "What is Artificial Neural Networks (ANN)?",
        choices: [
            "A type of garden plant.",
            "A machine learning model inspired by biological neural networks.",
            "A type of clothing material.",
            "A type of candy."
        ],
        correctAnswer: "A machine learning model inspired by biological neural networks.",
        explanation: "An Artificial Neural Network is a machine learning model that is loosely inspired by biological neural networks in human brains. Neural networks consist of up to hundreds of layers of interconnected units called neurons. Conceptually, an artificial neural network has the following types of layers: input, output, and hidden layers used to filter the data through, process it with an activation function, and make predictions at the output. ANN are the building blocks of a subset of machine learning called deep learning, which delivers complex outputs such as image or sound recognition, object detection, language translation, and more."
    },
    {
        question: "What is Backpropagation (BP)?",
        choices: [
            "A method for training deep learning networks.",
            "A technique for calculating conditional probabilities.",
            "A type of neural network layer.",
            "A method for compressing data."
        ],
        correctAnswer: "A method for training deep learning networks.",
        explanation: "Backpropagation is a technique used in training deep learning networks and is based on implementing gradient descent to iteratively tune the weights and biases to enhance the accuracy of a network. The algorithm calculates the error of the output in each training iteration and then propagates it back into the network, thus enabling it to minimize error in future training iterations."
    },
    {
        question: "What is a Bayesian Network?",
        choices: [
            "A type of social network.",
            "A probabilistic graph showing relationships between random variables.",
            "A type of computer network.",
            "A type of search algorithm."
        ],
        correctAnswer: "A probabilistic graph showing relationships between random variables.",
        explanation: "A Bayesian Network is a probabilistic graph showing the relationship between random variables for an uncertain domain, where the graph nodes represent those variables, and the links between each pair of nodes (the edges) represent the conditional probability for the corresponding variables. An example of Bayesian Networks is in medical diagnoses, where researchers predict health outcomes while taking into account all the factors that may affect an outcome."
    },
    {
        question: "What is Bayes' Theorem?",
        choices: [
            "A theorem in geometry.",
            "A mathematical equation for conditional probability.",
            "A type of neural network.",
            "A theorem in physics."
        ],
        correctAnswer: "A mathematical equation for conditional probability.",
        explanation: "Bayes' Theorem is a mathematical equation for the calculation of conditional probability, i.e., the probability of event B occurring given that related event A has already happened. One of the applications of this theorem in data science is building Bayesian networks for large datasets."
    },
    {
        question: "What is Bias?",
        choices: [
            "A statistical measure of spread.",
            "A tendency of models to underfit the data.",
            "A type of machine learning algorithm.",
            "A measure of central tendency."
        ],
        correctAnswer: "A tendency of models to underfit the data.",
        explanation: "Bias refers to the tendency of models to underfit the data, leading to inaccurate predictions in machine learning and data science. This is the definition of bias that is often discussed in the bias-variance tradeoff. Moreover, bias can also mean algorithmic bias, which refers to the propensity of machine learning models to reproduce harmful societal biases by treating different groups of individuals differently based on protected attributes such as race, sexual orientation, gender identity, age, pregnancy, veteran status, and more."
    },
    {
        question: "What is Bias-Variance Tradeoff?",
        choices: [
            "A trading strategy in finance.",
            "A measure of data variability.",
            "A tradeoff between bias and variance in machine learning.",
            "A type of data preprocessing technique."
        ],
        correctAnswer: "A tradeoff between bias and variance in machine learning.",
        explanation: "The bias-variance tradeoff is the tradeoff between bias and variance when creating a machine learning model. Bias and variance are two types of prediction errors when creating machine learning models—where a high bias indicates model underfitting, and high variance indicates model overfitting. Minimizing both of these factors to an optimal level decreases the overall error of predictions."
    },
    {
        question: "What is Big Data?",
        choices: [
            "The field of processing and extracting information from small data sets.",
            "The processing of data using traditional tools.",
            "The field that deals with data sets that are too small for analysis.",
            "The field that revolves around large and complex data sets."
        ],
        correctAnswer: "The field that revolves around large and complex data sets.",
        explanation: "Big Data is the field that revolves around processing, treating, and extracting information from data sets that are too large or complex for traditional data processing tools. Big data is defined by the five Vs; velocity—the speed of data generation; volume—the amount of data generated; variety—the variety of data types e.g., text, images, tabular data etc.; veracity—the quality and truthfulness of the data; and value—the data’s propensity to be translated to valuable business insights."
    },
    {
        question: "What is Binomial Distribution?",
        choices: [
            "A continuous probability distribution.",
            "A probability distribution with a constant probability of success.",
            "A distribution that doesn't involve independent trials.",
            "A distribution of outcomes in an event with infinite trials."
        ],
        correctAnswer: "A probability distribution with a constant probability of success.",
        explanation: "Binomial distribution is the discrete probability distribution of outcomes of independent trials, with two mutually exclusive possible outcomes (success and failure), a finite number of trials, and a constant probability of success. In simple terms, a binomial distribution can be thought of as the probability of a particular outcome (success or failure) in an event that is repeated multiple times (e.g., the probability of getting 3 in a dice that is rolled 5 times)."
    },
    {
        question: "What is a Categorical Variable?",
        choices: [
            "A variable with infinite possible values.",
            "A variable with intrinsic ordering involved.",
            "A variable with continuous numerical values.",
            "A variable with a limited number of possible values without ordering."
        ],
        correctAnswer: "A variable with a limited number of possible values without ordering.",
        explanation: "A categorical variable is a variable that can have one of a limited number of possible values (categories) without any intrinsic ordering involved. An example of a categorical variable would be marital status (e.g., married, single, divorced). It is also called a nominal or qualitative variable."
    },
    {
        question: "What is Classification?",
        choices: [
            "A problem concerned with predicting numerical outcomes.",
            "A problem with predefined outcome categories.",
            "An unsupervised learning problem.",
            "A problem where similarity among observations is not considered."
        ],
        correctAnswer: "A problem with predefined outcome categories.",
        explanation: "Classification is a supervised learning problem when it is necessary to predict categorical outcomes based on input features. Examples of classification problems are fraud detection (e.g., is this transaction fraudulent given the set of input features?) and email spam filters (e.g. Is this email spam or not?). Commonly used classification algorithms are k-nearest neighbors, decision trees, random forest, etc."
    },
    {
        question: "What is Clustering?",
        choices: [
            "A problem focused on predicting numerical values.",
            "A problem where groups are predefined by humans.",
            "An unsupervised learning problem concerned with grouping observations by similarity.",
            "A problem where elements in each group are similar among themselves."
        ],
        correctAnswer: "An unsupervised learning problem concerned with grouping observations by similarity.",
        explanation: "Clustering is an unsupervised learning problem concerned with grouping all the observations of a dataset according to their similarity by some common characteristics. Unlike a classification problem, these groups (called clusters) are not predefined by humans, but identified by machine learning algorithms while learning the input data. The elements in each cluster are similar among themselves and different from all the others. Common clustering algorithms are k-means, hierarchical clustering, spectral clustering, etc."
    },
    {
        question: "What is Computer Vision?",
        choices: [
            "The study of computer algorithms for solving mathematical problems.",
            "Enabling computers to understand spoken language.",
            "Achieving high-level understanding from digital images or videos.",
            "Analyzing network traffic data."
        ],
        correctAnswer: "Achieving high-level understanding from digital images or videos.",
        explanation: "Computer vision is an area of computer science concerned with enabling computers to achieve high-level understanding from digital images or videos, near to how humans can see them. Computer vision became especially popular with the evolution of deep learning and the accumulation of big data. Some of its applications are object and facial recognition, motion analysis, self-driving cars, and optical character recognition."
    },
    {
        question: "What is a Confusion Matrix?",
        choices: [
            "A matrix used for matrix multiplication in linear algebra.",
            "A table illustrating the performance of a classification model.",
            "A matrix used for image processing.",
            "A table illustrating the relationships between data variables."
        ],
        correctAnswer: "A table illustrating the performance of a classification model.",
        explanation: "A confusion matrix is a table illustrating the predictive performance of a classification model. Usually, a confusion matrix is created for a binary output (i.e., prediction problems with only two types of prediction—e.g., whether a transaction is fraudulent or not), so the resulting table is a two by two table. A confusion matrix represents the relationships between predictions vs. actual labels for both classes. It easily surfaces the amount of accurate predictions made (true positives and true negatives), and the amount of false positives (type I error) and false negatives (type II error) made."
    },
    {
        question: "What is a Continuous Variable?",
        choices: [
            "A variable with a finite set of values.",
            "A variable that takes on only integer values.",
            "A variable that can take on an infinite set of values within a particular range.",
            "A variable that has discrete values."
        ],
        correctAnswer: "A variable that can take on an infinite set of values within a particular range.",
        explanation: "A continuous variable is a variable that can take on an infinite set of values within a particular range. Examples of continuous variables are height and weight."
    },
    {
        question: "What is Correlation?",
        choices: [
            "The measurement of variations within the same variable.",
            "The strength and direction of the relationship between two or more variables.",
            "The ratio of covariance to the product of standard deviations.",
            "A perfect negative correlation."
        ],
        correctAnswer: "The strength and direction of the relationship between two or more variables.",
        explanation: "Correlation is the strength and direction of the relationship between two or more variables, measured by a correlation coefficient, or Pearson coefficient. Statistically, a correlation coefficient is the ratio of the covariance of two variables to the product of their standard deviations. It can take the values from -1 (a perfect negative correlation) to 1 (a perfect positive correlation). The presence of correlation between two variables does not imply a cause-effect relation."
    },
    {
        question: "What is a Cost Function?",
        choices: [
            "A function used to calculate the cost of data storage.",
            "A function for calculating the average of differences between predicted and actual values.",
            "A function used to measure computational costs.",
            "A function for calculating the square root of differences."
        ],
        correctAnswer: "A function for calculating the average of differences between predicted and actual values.",
        explanation: "Cost function is a machine learning function used to measure the average of the differences between the predicted and actual values over the training set and is supposed to be minimized."
    },
    {
        question: "What is Covariance?",
        choices: [
            "A measure of the relationship between variations in one variable and variations in another.",
            "A measure of the relationship between variations in one variable.",
            "A measure of the relationship between variations in two unrelated variables.",
            "A measure of the relationship between variations in the same variable."
        ],
        correctAnswer: "A measure of the relationship between variations in one variable and variations in another.",
        explanation: "Covariance is a measure of the relationship between two variables. Unlike variance that measures variations inside the same variable, covariance shows how variations in one variable influence changes in the second one. Covariance is used for calculating a correlation coefficient."
    },
    {
        question: "What is Cross-Validation?",
        choices: [
            "A data visualization technique.",
            "A method for splitting labeled data into training and test sets.",
            "A machine learning algorithm.",
            "A method for summarizing data."
        ],
        correctAnswer: "A method for splitting labeled data into training and test sets.",
        explanation: "Cross-validation is a resampling method used when training machine learning models that splits labeled data into training and test sets. In each iteration of cross-validation, different parts of the data are used to train and test the model. The training set is used to train a model, and the test set is used to make predictions and compare them with the actual labels for those entries. Afterwards, an overall accuracy metric is calculated to estimate the predictive performance of the resulting model."
    },
    {
        question: "What is a Dashboard?",
        choices: [
            "A programming language used for data analysis.",
            "A non-coding tool for data visualization.",
            "A database management system.",
            "A structured storage space for data."
        ],
        correctAnswer: "A non-coding tool for data visualization.",
        explanation: "A dashboard is an interactive, graphical user interface used to visualize, summarize, and report key performance indicators (KPI), progress metrics, and information around business processes that allows the target audience to easily grasp the most important insights at many levels. Dashboards are built using non-coding tools such as Excel, Tableau, or PowerBI, or even coding tools such as Python and R. A dashboard is often linked to regularly updated databases and services."
    },
    {
        question: "What is a Database?",
        choices: [
            "A data storage device.",
            "A software package for data analysis.",
            "A structured storage space for data organized in tables.",
            "A graphical user interface for data visualization."
        ],
        correctAnswer: "A structured storage space for data organized in tables.",
        explanation: "A database is a structured storage space where the data is organized in many different tables in a way such that the necessary information can be easily accessed and summarized. Databases are mostly used with a relational database management system (RDBMS) such as Oracle or PostgreSQL. The most common programming language used to interact with the data from a database is SQL."
    },
    {
        question: "What is a Database Management System (DBMS)?",
        choices: [
            "A software package for machine learning.",
            "A programming language for data analysis.",
            "A system for data retrieval.",
            "A software package for easily performing operations on data in a database."
        ],
        correctAnswer: "A software package for easily performing operations on data in a database.",
        explanation: "A database management system is a software package used to easily perform different operations on the data: accessing, manipulating, retrieving, managing, and storing the data in a database. Based on the way the data is organized and structured, there are different types of DBMS: relational, graph, hierarchical, etc. Some examples of DBMS include Oracle, MySQL, PostgreSQL, Microsoft SQL Server, and MongoDB."
    },
    {
        question: "What is a Data Consumer?",
        choices: [
            "A data professional responsible for data analysis.",
            "A software application for data visualization.",
            "A non-technical role that consumes data insights and analytics.",
            "A type of data storage system."
        ],
        correctAnswer: "A non-technical role that consumes data insights and analytics.",
        explanation: "Data consumers are often in non-technical roles but consume data insights and analytics provided by data professionals to make data-driven decisions. Data consumers often need to have conversations with data professionals and should be able to distinguish when data can and cannot be used to answer business questions."
    },
    {
        question: "What is Data Engineering (DE)?",
        choices: [
            "A specialization in data analysis.",
            "Focusing on data scaling within the organization.",
            "A process for refining data quality.",
            "The planning and control of data governance."
        ],
        correctAnswer: "Focusing on data scaling within the organization.",
        explanation: "Data engineering is a specialization that focuses on scaling data access within the organization. Data engineers work on data acquisition, collection, management, and storage—as well as setting up data pipelines and transforming data into high-quality, usable data for the rest of the organization."
    },
    {
        question: "What is Data Enrichment?",
        choices: [
            "A process for data collection.",
            "Enhancing and refining raw data for better insights.",
            "A method for data storage.",
            "A framework for data governance."
        ],
        correctAnswer: "Enhancing and refining raw data for better insights.",
        explanation: "Data enrichment is the process of enhancing, refining, and augmenting raw data to make it more useful for the organization and, as a result, to obtain more meaningful business insights and optimize predictive analytics."
    },
    {
        question: "What is a Dataframe?",
        choices: [
            "A specialized database management system.",
            "A tabular data structure with labeled axes (rows and columns).",
            "A type of data visualization tool.",
            "A technique for data transformation."
        ],
        correctAnswer: "A tabular data structure with labeled axes (rows and columns).",
        explanation: "A dataframe is a tabular data structure with labeled axes (rows and columns) of potentially different types. It is commonly used in data analysis and manipulation."
    },
    {
        question: "What is Data Governance?",
        choices: [
            "The process of managing data access control.",
            "A framework for data literacy.",
            "The planning, oversight, and control over the management of data and data-related sources.",
            "The organization's data storage strategy."
        ],
        correctAnswer: "The planning, oversight, and control over the management of data and data-related sources.",
        explanation: "Data governance is defined as the planning, oversight, and control over the management of data and data-related sources. It sets the roles, responsibilities, and processes for ensuring data availability, relevance, quality, usability, integrity, and security."
    },
    {
        question: "What is a Data Lake?",
        choices: [
            "A specialized data storage system.",
            "A repository for structured data only.",
            "A storage repository for unprocessed data with a defined purpose.",
            "A single storage repository containing raw, unprocessed data from various sources."
        ],
        correctAnswer: "A single storage repository containing raw, unprocessed data from various sources.",
        explanation: "A data lake is a single storage repository containing a large amount of raw, unprocessed data of any kind from various sources, which as yet has no defined purpose. It includes both structured and unstructured data, keeping the raw data as an original source of information."
    },
    {
        question: "What is Data Literacy?",
        choices: [
            "The ability to perform advanced technical data tasks.",
            "The ability to read and write code for data analysis.",
            "The ability to generate data insights.",
            "The ability to read, write, analyze, communicate, and reason with data to make better data-driven decisions."
        ],
        correctAnswer: "The ability to read, write, analyze, communicate, and reason with data to make better data-driven decisions.",
        explanation: "Data literacy is the ability to read, write, analyze, communicate, and reason with data to make better data-driven decisions. It ranges from data-driven decision making to advanced technical skills in data science, data engineering, and machine learning, enabling individuals and organizations to generate value from data."
    },
    {
        question: "What is Data Mining?",
        choices: [
            "The process of extracting data from a database.",
            "The process of transforming data into visual representations.",
            "The process of collecting and analyzing data to discover trends and patterns.",
            "The process of securely storing data."
        ],
        correctAnswer: "The process of collecting and analyzing data to discover trends and patterns.",
        explanation: "Data mining is the process of collecting relevant data from various sources, cleaning and transforming it to the right format, detecting and extracting meaningful hidden trends, patterns, and interconnections between the data, and communicating actionable insights to help the organization make data-driven decisions and develop better strategies. Various analytical and modeling techniques, including statistical analysis, data visualization, regression, and classification, are used in data mining."
    },
    {
        question: "What is Data Modeling?",
        choices: [
            "The process of building predictive models from data.",
            "The process of developing visual representations of data connections and structures.",
            "The process of creating data visualizations.",
            "The process of data transformation and cleansing."
        ],
        correctAnswer: "The process of developing visual representations of data connections and structures.",
        explanation: "Data modeling is the process of developing a visual representation of either a whole IT system or parts of it to communicate connections between data points and structures. Data models showcase the types of data used and stored within the system, the relationships between these different data sources, and how data is grouped according to different attributes and characteristics. It helps in understanding the critical business needs, data sources, and provides a relevant data-driven framework."
    },
    {
        question: "What is a Data Pipeline?",
        choices: [
            "A physical pipeline for transporting data.",
            "A set of data processing scripts linked to automate data flow.",
            "A data visualization tool.",
            "A database management system."
        ],
        correctAnswer: "A set of data processing scripts linked to automate data flow.",
        explanation: "A data pipeline is a set of data processing scripts that are linked together to automate the flow of data through an organization. Data is extracted, transformed, and loaded (ETL) so that it's ready to be used for various purposes within the organization."
    },
    {
        question: "What is Data Science (DS)?",
        choices: [
            "The study of collecting and organizing data.",
            "The application of scientific methods to data analysis.",
            "The process of data visualization.",
            "The process of securely storing data."
        ],
        correctAnswer: "The application of scientific methods to data analysis.",
        explanation: "Data science is a multifaceted interdisciplinary field of study that uses various scientific methods, advanced analytics techniques, and predictive modeling algorithms to extract meaningful insights from data. It helps answer strategic business or scientific questions in various domains. Data science requires a wide range of technical and non-technical skills, along with domain knowledge in the industry where it is applied."
    },
    {
        question: "What is a Dataset?",
        choices: [
            "A collection of data representing real-life observations.",
            "A data storage format.",
            "A data visualization tool.",
            "A type of data processing script."
        ],
        correctAnswer: "A collection of data representing real-life observations.",
        explanation: "A dataset is a collection of data of one or many types representing real-life or synthetically generated observations. Datasets are used for statistical analysis or data modeling. The data in a dataset can be gathered from various sources and is typically stored in some kind of data structure, often a table, where columns correspond to different variables, and rows to different data entries."
    },
    {
        question: "What is a Data Structure?",
        choices: [
            "A method of encrypting data.",
            "A way of organizing and storing data efficiently.",
            "A process for visualizing data.",
            "A technique for cleaning and transforming data."
        ],
        correctAnswer: "A way of organizing and storing data efficiently.",
        explanation: "A data structure is a way of organizing and storing data so that it can be accessed and worked with efficiently. It defines the relationship between the data and the operations that can be performed on it. Common data structures encountered in data science include dataframes, lists, arrays, and more."
    },
    {
        question: "What is Data Visualization?",
        choices: [
            "A method for data cleaning.",
            "A field focused on representing data visually.",
            "A type of data storage.",
            "A technique for data transformation."
        ],
        correctAnswer: "A field focused on representing data visually.",
        explanation: "Data visualization is an interdisciplinary field that deals with condensing and representing information in visual format. Data can be visualized using a variety of charts such as maps, histograms, barplots, and line-charts, which can be combined into infographics, dashboards, and more. Data visualization helps the target audience better understand the underlying data and obtained results."
    },
    {
        question: "What is a Data Warehouse?",
        choices: [
            "A central repository for storing data without transformation.",
            "A database for unstructured data.",
            "A storage system for real-time data.",
            "A central repository for storing structured, cleaned, and transformed data from multiple sources."
        ],
        correctAnswer: "A central repository for storing structured, cleaned, and transformed data from multiple sources.",
        explanation: "A data warehouse is a central repository for storing structured, cleaned, and transformed data collected from multiple sources through the ETL (extraction, transformation, loading) process. Data professionals can access the necessary information from the data warehouse through business intelligence tools, SQL queries, etc., for further analysis and modeling to answer business questions."
    },
    {
        question: "What is Data Wrangling?",
        choices: [
            "A process of data visualization.",
            "A method for encrypting data.",
            "A process of data preparation, cleaning, restructuring, and transforming.",
            "A technique for data access."
        ],
        correctAnswer: "A process of data preparation, cleaning, restructuring, and transforming.",
        explanation: "Data wrangling, also known as data munging, involves tasks related to data cleaning, restructuring, merging, aggregating, and transforming data into an appropriate format for a specific purpose. It is the process of data preparation to ensure easy access and data analysis."
    },
    {
        question: "What is a Decision Tree?",
        choices: [
            "A tree-like representation of data storage.",
            "A decision-making process in data analysis.",
            "A supervised machine learning algorithm used for classification.",
            "A method for data encryption."
        ],
        correctAnswer: "A supervised machine learning algorithm used for classification.",
        explanation: "A decision tree is a supervised machine learning algorithm primarily used for classification but also for regression problems. It makes a sequence of if-else questions about individual features to infer class labels. Decision trees benefit from graphical tree-like representations, imitate human decision-making ability, and offer intuitively understandable logic. However, they can tend to overfit."
    },
    {
        question: "What is Deep Learning (DL)?",
        choices: [
            "A subset of machine learning algorithms inspired by the structure of the brain.",
            "A technique for data visualization.",
            "A method for data cleaning and transformation.",
            "A method for data encryption."
        ],
        correctAnswer: "A subset of machine learning algorithms inspired by the structure of the brain.",
        explanation: "Deep learning is a subset of machine learning algorithms based on multilayered artificial neural networks (ANN) that are largely inspired by the structure of the brain. ANN are very flexible and can learn from huge amounts of data to deliver highly accurate outputs. They are often used in data science and machine learning for tasks such as image or sound recognition, language translation, and other advanced problems."
    },
    {
        question: "What is Dimensionality Reduction?",
        choices: [
            "A process of increasing the number of features in the training set.",
            "A technique for data cleaning.",
            "A process of reducing the number of features in the training set to enhance model performance.",
            "A method for data encryption."
        ],
        correctAnswer: "A process of reducing the number of features in the training set to enhance model performance.",
        explanation: "Dimensionality reduction is the process of reducing the number of features in the training set, leaving only the most relevant features that capture most of the variation. This process helps enhance the model's performance, especially for large datasets with many variables. One popular technique for dimensionality reduction is PCA (principal component analysis)."
    },
    {
        question: "What is EDA?",
        choices: [
            "A data visualization technique.",
            "An algorithm for deep learning.",
            "An exploratory data analysis phase focused on basic data exploration.",
            "A method for data encryption."
        ],
        correctAnswer: "An exploratory data analysis phase focused on basic data exploration.",
        explanation: "EDA stands for exploratory data analysis and refers to the initial phase of data analysis. It involves the basic exploration of available data, summarizing its main characteristics, finding initial patterns and trends, identifying issues to address, and formulating questions for further investigation. EDA provides a general understanding of the data as a foundation for more detailed analysis."
    },
    {
        question: "What is ELT?",
        choices: [
            "A data visualization technique.",
            "A data pipeline system designed for data transformation.",
            "A method for data cleaning.",
            "A method for data encryption."
        ],
        correctAnswer: "A data pipeline system designed for data transformation.",
        explanation: "ELT (extract, load, transform) is a data pipeline system designed by data engineers. It involves extracting raw data and loading it into a data lake before performing transformations in place. ELT is advantageous for processing large datasets, requires less time, and is cost-effective."
    },
    {
        question: "What is ETL?",
        choices: [
            "A data visualization technique.",
            "A data pipeline system designed for data transformation.",
            "A method for data cleaning.",
            "A method for data encryption."
        ],
        correctAnswer: "A data pipeline system designed for data transformation.",
        explanation: "ETL (extract, transform, load) is a data pipeline system designed by data engineers. It involves extracting data from multiple sources, transforming it from its raw form into a consistent format, and loading it into a target data warehouse. ETL prepares data for further analysis and modeling to address various business challenges."
    },
    {
        question: "What is Evaluation Metrics?",
        choices: [
            "A collection of metrics used to estimate the performance of a statistical or machine learning model.",
            "The process of feature engineering in machine learning.",
            "A set of features used as input in a machine learning model.",
            "An algorithm for data visualization."
        ],
        correctAnswer: "A collection of metrics used to estimate the performance of a statistical or machine learning model.",
        explanation: "Evaluation metrics are a collection of metrics used to estimate the performance of a statistical or machine learning model. They help measure how well the model's predictions align with the actual outcomes. Examples of evaluation metrics include accuracy score, f-score, recall, and RMSE."
    },
    {
        question: "What is False Negative (FN, Type II Error)?",
        choices: [
            "An outcome when a classification model incorrectly predicts the negative class for a binary target variable.",
            "An outcome when a classification model correctly predicts the negative class for a binary target variable.",
            "An outcome when a classification model incorrectly predicts the positive class for a binary target variable.",
            "An outcome when a classification model correctly predicts the positive class for a binary target variable."
        ],
        correctAnswer: "An outcome when a classification model incorrectly predicts the negative class for a binary target variable.",
        explanation: "A false negative (FN) is an outcome when a classification model incorrectly predicts the negative class for a binary target variable. For example, if the model predicts 'won't churn' when the actual label is 'will churn' in customer churn prediction, it's a false negative."
    },
    {
        question: "What is False Positive (FP, Type I Error)?",
        choices: [
            "An outcome when a classification model incorrectly predicts the negative class for a binary target variable.",
            "An outcome when a classification model correctly predicts the negative class for a binary target variable.",
            "An outcome when a classification model incorrectly predicts the positive class for a binary target variable.",
            "An outcome when a classification model correctly predicts the positive class for a binary target variable."
        ],
        correctAnswer: "An outcome when a classification model incorrectly predicts the positive class for a binary target variable.",
        explanation: "A false positive (FP) is an outcome when a classification model incorrectly predicts the positive class for a binary target variable. For instance, if the model predicts 'will churn' when the actual label is 'won't churn' in customer churn prediction, it's a false positive."
    },
    {
        question: "What is a Feature?",
        choices: [
            "A collection of metrics used to estimate the performance of a statistical or machine learning model.",
            "A set of features used as input in a machine learning model.",
            "The process of feature engineering in machine learning.",
            "An algorithm for data visualization."
        ],
        correctAnswer: "A set of features used as input in a machine learning model.",
        explanation: "A feature is an independent variable used as input in a machine learning model. Features are used to make predictions or classifications based on their values. For example, in predicting the likelihood of diabetes, features could include height, weight, and sugar intake."
    },
    {
        question: "What is Feature Engineering?",
        choices: [
            "The process of selecting a subset of features from the dataset.",
            "A collection of metrics used to estimate the performance of a statistical or machine learning model.",
            "The process of using domain knowledge to transform raw features into better-suited features for machine learning.",
            "An algorithm for data visualization."
        ],
        correctAnswer: "The process of using domain knowledge to transform raw features into better-suited features for machine learning.",
        explanation: "Feature engineering is the process of using domain knowledge and subject matter expertise to transform raw features into features that better reflect the underlying problem and are better suited for machine learning algorithms. It involves extracting new features from the available data or manipulating existing features."
    },
    {
        question: "What is Feature Selection?",
        choices: [
            "The process of selecting a subset of features from the dataset that are the most relevant for predicting the target variable.",
            "A collection of metrics used to estimate the performance of a statistical or machine learning model.",
            "The process of data cleaning in machine learning.",
            "An algorithm for data visualization."
        ],
        correctAnswer: "The process of selecting a subset of features from the dataset that are the most relevant for predicting the target variable.",
        explanation: "Feature selection is the process of selecting a subset of features from the dataset that are the most relevant for predicting the target variable. It helps reduce model complexity, prevent overfitting, reduce computational time, and improve model accuracy, especially for large datasets."
    },
    {
        question: "What is a F-Score?",
        choices: [
            "A metric for measuring the accuracy of a model's predictions.",
            "An evaluation metric that combines precision and recall using the harmonic mean, often represented as F1-score.",
            "A machine learning algorithm for gradient descent optimization.",
            "An attribute used for hyperparameter tuning in machine learning models."
        ],
        correctAnswer: "An evaluation metric that combines precision and recall using the harmonic mean, often represented as F1-score.",
        explanation: "The F-Score, specifically the F1-score, is an evaluation metric for estimating the model performance that combines both precision and recall using the harmonic mean. It is commonly used in classification tasks to balance the trade-off between precision and recall."
    },
    {
        question: "What is Gradient Descent?",
        choices: [
            "An iterative optimization process used in machine learning to minimize the cost function.",
            "A clustering algorithm used to identify centroids in a dataset.",
            "A technique for imputing missing values in a dataset.",
            "An evaluation metric for measuring the model's performance."
        ],
        correctAnswer: "An iterative optimization process used in machine learning to minimize the cost function.",
        explanation: "Gradient descent is an iterative optimization process used in machine learning to minimize the cost function by finding the optimal values for the parameters of a function. It is commonly used for training machine learning models, especially in the context of deep learning."
    },
    {
        question: "What is a Hyperparameter?",
        choices: [
            "Attributes learned directly from the data during the training process.",
            "Attributes that are set manually before starting the training process and cannot be learned from the data.",
            "Parameters used in imputation techniques for filling missing values in a dataset.",
            "Parameters used in the K-Means clustering algorithm."
        ],
        correctAnswer: "Attributes that are set manually before starting the training process and cannot be learned from the data.",
        explanation: "Hyperparameters are attributes pertaining to a machine learning model that are set manually before starting the training process. They cannot be estimated or learned directly from the data. Tuning hyperparameters is essential to optimize a model's performance."
    },
    {
        question: "What is a Hypothesis?",
        choices: [
            "A proven fact about a problem or event.",
            "An assumption that cannot be tested.",
            "An assumption about a problem or event that needs to be tested.",
            "A conclusion drawn from experimental data."
        ],
        correctAnswer: "An assumption about a problem or event that needs to be tested.",
        explanation: "A hypothesis is an assumption about some problem or event that needs to be tested through experiments or observations. Depending on the outcome of the experiment, the hypothesis can be proven or rejected."
    },
    {
        question: "What is Imputation?",
        choices: [
            "A process for filling in missing values in a dataset.",
            "A statistical technique for reducing the dimensionality of data.",
            "A technique for estimating model performance.",
            "A type of machine learning algorithm."
        ],
        correctAnswer: "A process for filling in missing values in a dataset.",
        explanation: "Imputation is the process of filling in missing values in a dataset. Various imputation techniques can be used, including statistical methods like mean/mode imputation or machine learning techniques like K-nearest neighbors (KNN) imputation."
    },
    {
        question: "What is K-Means?",
        choices: [
            "A supervised machine learning algorithm.",
            "A clustering algorithm used to identify cluster centers based on data similarity.",
            "An evaluation metric for classification models.",
            "A technique for hyperparameter tuning."
        ],
        correctAnswer: "A clustering algorithm used to identify cluster centers based on data similarity.",
        explanation: "K-Means is a popular clustering algorithm used to identify K cluster centers (centroids) in a dataset based on the similarity of data points. It groups similar data points into clusters and is commonly used in unsupervised machine learning."
    },
    {
        question: "What is K-Nearest Neighbors (KNN)?",
        choices: [
          "A supervised learning algorithm for linear regression",
          "An unsupervised learning algorithm for clustering",
          "A supervised learning algorithm for classification",
          "A dimensionality reduction technique"
        ],
        correctAnswer: "A supervised learning algorithm for classification",
        explanation:
          "K-nearest neighbors are supervised learning algorithms that classify observations based on their similarity to their nearest neighbors."
      },
      {
        question: "What is Linear Algebra?",
        choices: [
          "A branch of mathematics focused on statistics",
          "A branch of mathematics focused on calculus",
          "A branch of mathematics focused on geometry",
          "A branch of mathematics focused on linear systems"
        ],
        correctAnswer: "A branch of mathematics focused on linear systems",
        explanation:
          "Linear algebra is a branch of mathematics concerned with linear systems: lines, planes, vector spaces, matrices, and operations on them."
      },
      {
        question: "What is Linear Regression used for?",
        choices: [
          "Clustering data",
          "Classifying data",
          "Modeling linear relationships between variables",
          "Reducing dimensionality of data"
        ],
        correctAnswer: "Modeling linear relationships between variables",
        explanation:
          "Linear regression is a regression algorithm that deals with modeling a linear relationship between a continuous target variable and one or several continuous features."
      },
      {
        question: "What is Logistic Regression?",
        choices: [
          "A regression algorithm for predicting continuous values",
          "A classification algorithm for predicting probabilities or class labels",
          "A clustering algorithm for grouping similar data points",
          "A dimensionality reduction technique"
        ],
        correctAnswer:
          "A classification algorithm for predicting probabilities or class labels",
        explanation:
          "Logistic regression is a regression algorithm that uses a logistic function on the input features to predict the class probability or directly the class label for the target variable."
      },
      {
        question: "What is Machine Learning (ML)?",
        choices: [
          "A branch of artificial intelligence focused on robotics",
          "A branch of mathematics focused on calculus",
          "A branch of artificial intelligence focused on expert systems",
          "A branch of artificial intelligence focused on learning from data"
        ],
        correctAnswer: "A branch of artificial intelligence focused on learning from data",
        explanation:
          "Machine learning is a branch of artificial intelligence (AI) that provides a set of algorithms designed to learn patterns and trends from historical data."
      },
      {
        question: "What is the Mean?",
        choices: [
          "The median value of a dataset",
          "The sum of all values in a dataset",
          "The most frequent value in a dataset",
          "The arithmetic average value of a dataset"
        ],
        correctAnswer: "The arithmetic average value of a dataset",
        explanation:
          "The mean is the arithmetic average value for a set of numbers, calculated as the sum of all the values divided by the number of values."
      },
      {
        question: "What is Mean Absolute Error (MAE)?",
        choices: [
          "A measure of the average error in predictions as the absolute difference between predicted and actual values.",
          "A measure of the average error in predictions as the squared difference between predicted and actual values.",
          "The median value in a dataset.",
          "The most frequent value in a dataset."
        ],
        correctAnswer: "A measure of the average error in predictions as the absolute difference between predicted and actual values."
      },
      {
        question: "What is Mean Squared Error (MSE)?",
        choices: [
          "A measure of the average error in predictions as the absolute difference between predicted and actual values.",
          "A measure of the average error in predictions as the squared difference between predicted and actual values.",
          "The median value in a dataset.",
          "The most frequent value in a dataset."
        ],
        correctAnswer: "A measure of the average error in predictions as the squared difference between predicted and actual values."
      },
      {
        question: "Define the median of a dataset.",
        choices: [
          "The average value of the dataset.",
          "The middle value in the dataset when sorted.",
          "The most frequent value in a dataset.",
          "The sum of all values in a dataset."
        ],
        correctAnswer: "The middle value in the dataset when sorted."
      },
      {
        question: "How is the mode identified in a set of data?",
        choices: [
          "By calculating the average of the data.",
          "By finding the middle value in the data.",
          "By identifying the most frequent value(s) in the data.",
          "By finding the smallest value in the data."
        ],
        correctAnswer: "By identifying the most frequent value(s) in the data."
      },
      {
        question: "What does the term 'model tuning' refer to in machine learning?",
        choices: [
          "It refers to creating a new machine learning model from scratch.",
          "It refers to the process of adjusting the hyperparameters of a machine learning model to optimize its performance.",
          "It refers to training a model without any hyperparameters.",
          "It refers to selecting a random model from a set of pre-built models."
        ],
        correctAnswer: "It refers to the process of adjusting the hyperparameters of a machine learning model to optimize its performance."
      },
      {
        question: "What is Multivariate Modeling in data science?",
        choices: [
          "It focuses on modeling data with a single variable.",
          "It involves modeling relationships between multiple variables and a target variable.",
          "It involves using only one feature for modeling.",
          "It involves modeling data with no variables."
        ],
        correctAnswer: "It involves modeling relationships between multiple variables and a target variable."
      },
      {
        question: "Explain the Naive Bayes classification algorithm.",
        choices: [
          "It's a classification algorithm that considers complex dependencies between features.",
          "It's a classification algorithm that assumes independence between features used in the classifier.",
          "It's a regression algorithm that calculates bayesian probabilities.",
          "It's a clustering algorithm used for image segmentation."
        ],
        correctAnswer: "It's a classification algorithm that assumes independence between features used in the classifier."
      },
      {
        question: "What is Natural Language Processing (NLP)?",
        choices: [
          "A branch of computer science dealing with making computer applications understand and analyze human language.",
          "A technique used in photography to enhance natural colors.",
          "A type of software used for network management.",
          "A method for optimizing search engine rankings."
        ],
        correctAnswer: "A branch of computer science dealing with making computer applications understand and analyze human language."
      },
      {
        question: "What is Normalization in data analysis?",
        choices: [
          "The process of rescaling data attributes so that they have the same scale for meaningful comparisons.",
          "A method for converting audio data into text data.",
          "A technique for extracting features from images.",
          "A way to increase the brightness of images."
        ],
        correctAnswer: "The process of rescaling data attributes so that they have the same scale for meaningful comparisons."
      },
      {
        question: "What does 'NoSQL' stand for in database management?",
        choices: [
          "Not only SQL.",
          "Numerical Optimization and Structured Query Language.",
          "Non-Sequential Query Language.",
          "Network-oriented Structured Query Language."
        ],
        correctAnswer: "Not only SQL."
      },
      {
        question: "What is the Null Hypothesis in statistics?",
        choices: [
          "A hypothesis that states there is no significant statistical relationship between variables and observations are based on chance.",
          "A hypothesis that claims there is a significant statistical relationship between variables.",
          "A hypothesis used in machine learning to evaluate model performance.",
          "A hypothesis that predicts future outcomes."
        ],
        correctAnswer: "A hypothesis that states there is no significant statistical relationship between variables and observations are based on chance."
      },
      {
        question: "What is an Ordinal Variable?",
        choices: [
          "A variable that can have a limited number of possible values with an intrinsic ordering involved.",
          "A variable that can only take on binary values (0 or 1).",
          "A variable that represents time-based data.",
          "A variable used to store text data."
        ],
        correctAnswer: "A variable that can have a limited number of possible values with an intrinsic ordering involved."
      },
      {
        question: "What is an Outlier in a dataset?",
        choices: [
          "An abnormal value that deviates considerably from the rest of the observations.",
          "The mean value of a dataset.",
          "A value that is always zero in a dataset.",
          "A value that represents the sum of all other values in a dataset."
        ],
        correctAnswer: "An abnormal value that deviates considerably from the rest of the observations."
      },
      {
        question: "What is Overfitting in machine learning?",
        choices: [
          "When a model learns too much information from the training set, becomes too complex, and fails on unseen data.",
          "A technique for reducing noise in data.",
          "The process of fitting data points to a curve.",
          "When a model learns too little from the training set and underperforms."
        ],
        correctAnswer: "When a model learns too much information from the training set, becomes too complex, and fails on unseen data."
      },
      {
        question: "What is a Parameter in machine learning?",
        choices: [
          "A named variable passed into a function in programming and data science.",
          "A specific data point used for training a model.",
          "A mathematical equation used in machine learning algorithms.",
          "A type of data visualization technique."
        ],
        correctAnswer: "A named variable passed into a function in programming and data science."
      },
      {
        question: "What is Precision in the context of machine learning?",
        choices: [
          "The ratio of correctly predicted positive cases to the total number of predicted positive cases.",
          "A measure of how close a predicted value is to the actual value.",
          "The ability of a model to make predictions quickly.",
          "A method for reducing the complexity of a model."
        ],
        correctAnswer: "The ratio of correctly predicted positive cases to the total number of predicted positive cases."
      },
      {
        question: "What is Predictive Analytics?",
        choices: [
          "The process of analyzing historical data to make predictions about future events in a business.",
          "A type of data visualization technique.",
          "The practice of analyzing data to understand past events.",
          "A technique for reducing noise in data."
        ],
        correctAnswer: "The process of analyzing historical data to make predictions about future events in a business."
      },
      {
        question: "What is Principal Component Analysis (PCA)?",
        choices: [
          "A statistical technique that transforms correlated initial features into linearly uncorrelated features.",
          "A machine learning algorithm used for classification.",
          "The process of fitting a curve to data points.",
          "A type of data preprocessing technique."
        ],
        correctAnswer: "A statistical technique that transforms correlated initial features into linearly uncorrelated features."
      },
      {
        question: "What is Python?",
        choices: [
          "An open-source, high-level programming language widely used in data science and general-purpose programming.",
          "A type of snake found in the rainforest.",
          "A popular data visualization tool.",
          "A type of machine learning model."
        ],
        correctAnswer: "An open-source, high-level programming language widely used in data science and general-purpose programming."
      },
      {
        question: "What is R in data science?",
        choices: [
          "A popular programming language and free software for data science and machine learning.",
          "A type of machine learning algorithm.",
          "A database management system for storing relational data.",
          "A type of data visualization tool."
        ],
        correctAnswer: "A popular programming language and free software for data science and machine learning."
      },
      {
        question: "What is Random Forest?",
        choices: [
          "A supervised learning algorithm that combines the outputs of many decision trees.",
          "A type of random data generation technique.",
          "An algorithm for natural language processing.",
          "A data preprocessing method."
        ],
        correctAnswer: "A supervised learning algorithm that combines the outputs of many decision trees."
      },
      {
        question: "What is Recall in machine learning?",
        choices: [
          "The ratio of correctly predicted positive cases to the total number of actual positive cases.",
          "A measure of how close a predicted value is to the actual value.",
          "The ability of a model to make predictions quickly.",
          "A technique for reducing noise in data."
        ],
        correctAnswer: "The ratio of correctly predicted positive cases to the total number of actual positive cases."
      },
      {
        question: "What is Regression in machine learning?",
        choices: [
          "A supervised learning problem for predicting continuous outcomes based on input features.",
          "A data visualization technique.",
          "A type of unsupervised learning algorithm.",
          "An optimization method."
        ],
        correctAnswer: "A supervised learning problem for predicting continuous outcomes based on input features."
      },
      {
        question: "What is Reinforcement Learning (RL) in machine learning?",
        choices: [
          "A stand-alone branch of machine learning where an algorithm learns by interacting with an environment.",
          "A technique for cleaning and preprocessing data.",
          "A type of unsupervised learning algorithm.",
          "A method for generating synthetic data."
        ],
        correctAnswer: "A stand-alone branch of machine learning where an algorithm learns by interacting with an environment."
      },
      {
        question: "What is a Relational Database?",
        choices: [
          "A type of database that stores data in tables related to each other by unique IDs (keys).",
          "A type of machine learning model.",
          "A data visualization tool.",
          "A distributed computing system."
        ],
        correctAnswer: "A type of database that stores data in tables related to each other by unique IDs (keys)."
      },
      {
        question: "What is RMSE in data analysis?",
        choices: [
          "The square root of the variance of a population.",
          "A statistical measure of dispersion.",
          "The square root of the mean squared error.",
          "The absolute error between predicted and actual values."
        ],
        correctAnswer: "The square root of the mean squared error."
      },
      {
        question: "What does Sampling Error refer to?",
        choices: [
          "The difference between training and testing data.",
          "The difference between the population and a sample.",
          "The error introduced by rounding numbers.",
          "The difference between the mean and median values."
        ],
        correctAnswer: "The difference between the population and a sample."
      },
      {
        question: "What is SQL primarily used for?",
        choices: [
          "Creating graphical user interfaces.",
          "Interacting with relational database management systems.",
          "Performing complex mathematical calculations.",
          "Developing machine learning algorithms."
        ],
        correctAnswer: "Interacting with relational database management systems."
      },
      {
        question: "What does Standard Deviation measure?",
        choices: [
          "The amount of dispersion of values in a population.",
          "The absolute difference between the largest and smallest values in a dataset.",
          "The square root of the mean squared error.",
          "The relationship between inputs and outputs in a model."
        ],
        correctAnswer: "The amount of dispersion of values in a population."
      },
      {
        question: "What is Supervised Learning in machine learning?",
        choices: [
          "A method for teaching models using unlabeled data.",
          "A technique for clustering similar data points.",
          "Learning without historical data.",
          "Teaching a model on a labeled training set of historical data."
        ],
        correctAnswer: "Teaching a model on a labeled training set of historical data."
      },
      {
        question: "What is SVM used for in machine learning?",
        choices: [
          "Image recognition.",
          "Natural language processing.",
          "Classification and regression problems.",
          "Unsupervised learning."
        ],
        correctAnswer: "Classification and regression problems."
      },
      {
        question: "What is Synthetic Data in data science?",
        choices: [
          "Data collected from natural sources.",
          "Data artificially created to reflect statistical properties.",
          "Data obtained from the government.",
          "Data with high privacy risks."
        ],
        correctAnswer: "Data artificially created to reflect statistical properties."
      },
      {
        question: "In machine learning, what is a Target Variable?",
        choices: [
          "A variable used for testing models.",
          "A variable that is irrelevant for prediction.",
          "The variable to be predicted using features.",
          "A variable used for model training."
        ],
        correctAnswer: "The variable to be predicted using features."
      },
      {
        question: "What does a Test Set represent in model evaluation?",
        choices: [
          "A set of data used for model training.",
          "A subset of features in the dataset.",
          "A subset of the available data used for evaluation.",
          "A set of data used for generating synthetic data."
        ],
        correctAnswer: "A subset of the available data used for evaluation."
      },
      {
        question: "What is a Time Series in data analysis?",
        choices: [
          "A sequence of observations of a variable taken at different times.",
          "A dataset with irregularly spaced time intervals.",
          "A set of data used for model training over time.",
          "A sequence of random observations."
        ],
        correctAnswer: "A sequence of observations of a variable taken at different times."
      },
      {
        question: "What is the purpose of a Training Set in machine learning?",
        choices: [
          "To evaluate model accuracy.",
          "To generate synthetic data.",
          "To predict the target variable.",
          "To fit the model before testing it."
        ],
        correctAnswer: "To fit the model before testing it."
      },
      {
        question: "What does True Negative (TN) represent in classification?",
        choices: [
          "A negative test result that is true.",
          "An incorrect prediction of the negative class.",
          "A true prediction of the positive class.",
          "A true prediction of the negative class."
        ],
        correctAnswer: "A true prediction of the negative class."
      },
      {
        question: "What does True Positive (TP) represent in classification?",
        choices: [
          "A positive test result that is true.",
          "A true prediction of the negative class.",
          "An incorrect prediction of the positive class.",
          "A true prediction of the positive class."
        ],
        correctAnswer: "A true prediction of the positive class."
      },
      {
        question: "What is Underfitting in machine learning?",
        choices: [
          "When a model is overly complex and overfits the training data.",
          "When a model is too simple and fails to detect patterns in the data.",
          "When a model is able to generalize well to unseen data.",
          "When a model has a perfect fit to the training data."
        ],
        correctAnswer: "When a model is too simple and fails to detect patterns in the data."
      },
      {
        question: "What is Univariate Modeling typically used for?",
        choices: [
          "Time series analysis.",
          "Classification tasks.",
          "Image recognition.",
          "Natural language processing."
        ],
        correctAnswer: "Time series analysis."
      },
      {
        question: "What does Unstructured Data refer to?",
        choices: [
          "Data with a predefined structure like a database.",
          "Data that consists of images, text, audio, etc., with no predefined structure.",
          "Data that is highly organized and structured.",
          "Data with missing values."
        ],
        correctAnswer: "Data that consists of images, text, audio, etc., with no predefined structure."
      },
      {
        question: "What is the primary goal of Unsupervised Learning?",
        choices: [
          "To predict a target variable accurately.",
          "To learn patterns and structures in data without a target variable.",
          "To classify data into distinct categories.",
          "To perform regression analysis."
        ],
        correctAnswer: "To learn patterns and structures in data without a target variable."
      },
      {
        question: "In machine learning, what does Variance measure?",
        choices: [
          "The average squared difference between individual values and the mean.",
          "The total sum of squared differences in the dataset.",
          "The degree of underfitting in a model.",
          "The sensitivity of a model to small variations in the training set."
        ],
        correctAnswer: "The sensitivity of a model to small variations in the training set."
      },
      {
        question: "What is the process of Web Scraping?",
        choices: [
          "Extracting specific data from databases.",
          "Automatically generating random data.",
          "Capturing necessary information from websites.",
          "Analyzing data for patterns and trends."
        ],
        correctAnswer: "Capturing necessary information from websites."
      },
      {
        question: "What does the Z-Score measure in statistics?",
        choices: [
          "The number of standard deviations above or below the mean.",
          "The percentage of data points above the mean.",
          "The difference between the maximum and minimum values.",
          "The median value of a dataset."
        ],
        correctAnswer: "The number of standard deviations above or below the mean."
      }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const completionBar = document.getElementById("completion-bar");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;

    // Shuffle the choices array before displaying them
    const shuffledChoices = [...current.choices];
    shuffleArray(shuffledChoices);

    choicesElement.innerHTML = ""; // Clear previous choices

    for (let i = 0; i < shuffledChoices.length; i++) {
        const choice = document.createElement("button");
        choice.textContent = shuffledChoices[i];
        choice.addEventListener("click", () => checkAnswer(shuffledChoices[i]));
        choicesElement.appendChild(choice);
    }

    // Update the completion bar
    const completionPercentage = ((currentQuestion + 1) / questions.length) * 100;
    completionBar.style.width = completionPercentage + "%";
}

function checkAnswer(choiceText) {
    const current = questions[currentQuestion];

    if (choiceText === current.correctAnswer) {
        score++;
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.textContent = "Incorrect.";
    }

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestion++;
    feedbackElement.textContent = "";
    nextButton.style.display = "none";

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        // Display the final score or redirect to another page.
        questionElement.textContent = `Quiz Completed. Your Score: ${score} / ${questions.length}`;
        choicesElement.innerHTML = "";
        completionBar.style.width = "100%"; // Set completion bar to 100% at the end
    }
});

loadQuestion();
