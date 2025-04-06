// Data source for problem statements - could be replaced with API call

export function getProblemStatementsDescriptions() {
  return [
    {
      id: "problem1",
      title: "BookEasy – Event Booking Platform",
      domain: "WEB",
      description: "Design and build a web application called BookEasy, a simple but powerful platform where local businesses (like gyms, co-working spaces, banquet halls, cafes, etc.) can list their spaces/events, and users can browse, book, and manage reservations.",
      imageSrc: "booking-platform.jpg",
      sections: {
        objective: {
          title: "Objective",
          content: "Create a comprehensive booking platform that connects local businesses with customers seeking to reserve spaces and events."
        },
        coreFeatures: {
          title: "Core Features",
          features: [
            {
              title: "Business Panel (Vendor Side)",
              items: [
                "Register/login as a business",
                "Add/edit/delete event listings (title, images, time, price, capacity)",
                "View upcoming bookings"
              ]
            },
            {
              title: "User Panel (Customer Side)",
              items: [
                "Browse/search events/venues",
                "Filter by date, location, type",
                "View event details",
                "Book slot(s) (mock booking)",
                "View upcoming & past bookings"
              ]
            },
            {
              title: "Common Features",
              items: [
                "Auth system (email/OTP)",
                "Responsive UI (mobile-first)",
                "Deployment (live link)"
              ]
            }
          ]
        },
        bonusFeatures: {
          title: "Bonus Features",
          items: [
            "Calendar view for event slots",
            "Email or in-app booking confirmation",
            "QR code for check-in",
            "Admin Panel for moderation",
            "Business verification process"
          ]
        },
        judgingCriteria: {
          title: "Judging Criteria",
          totalPoints: 100,
          criteria: [
            {
              checkpoint: "Functionality & Features",
              description: "Core features working end-to-end: login, service listing, booking, dashboard, etc.",
              maxPoints: 30
            },
            {
              checkpoint: "UI/UX Design",
              description: "Clean, responsive UI, consistent design, intuitive UX. Extra points for animations and accessibility.",
              maxPoints: 20
            },
            {
              checkpoint: "Code Quality & Architecture",
              description: "Modular code, proper folder structure, use of version control, readable naming conventions",
              maxPoints: 10
            },
            {
              checkpoint: "Innovation",
              description: "Creative additions, e.g., gamification, referral system, smart search, etc.",
              maxPoints: 10
            },
            {
              checkpoint: "API Integration",
              description: "Use of external APIs (e.g., Google Maps, Geolocation, Firebase, etc.)",
              maxPoints: 10
            },
            {
              checkpoint: "Team Collaboration",
              description: "Proper team coordination, visible use of GitHub/CI tools, clear division of tasks",
              maxPoints: 5
            },
            {
              checkpoint: "Deployment",
              description: "Working live deployment with link shared",
              maxPoints: 5
            }
          ]
        }
      }
    },
    {
      id: "problem2",
      title: "Kognizance – AI Chat App",
      domain: "APP",
      description: "Participants will implement a minimum viable product (MVP) with the following four essential features. You can use any app development framework of your choice (e.g., Flutter, React Native, Android Studio, etc.) to create the application. The final output should be a mobile app (APK) that demonstrates all core functionalities.",
      imageSrc: "ai-chat.jpg",
      sections: {
        objective: {
          title: "Core Objective",
          content: "In this challenge, participants are tasked with building a smart, responsive AI Chat Application that leverages the power of Large Language Models (LLMs) to create an interactive and human-like communication experience. The goal is to develop a seamless chat system that feels intuitive, fast, and intelligent. Participants are encouraged to use the free and powerful Gemini API by Google, which offers robust natural language processing capabilities ideal for intelligent conversational experiences. The Gemini API is freely accessible, easy to integrate, and capable of delivering real-time AI responses."
        },
        coreFeatures: {
          title: "Core Features",
          features: [
            {
              title: "Basic Chat Implementation",
              items: [
                "Text-based interface for LLM interaction",
                "Live and responsive chat experience",
                "Context-aware conversations",
                "Integration with Gemini API"
              ]
            },
            {
              title: "Authentication System",
              items: [
                "User signup functionality",
                "Login system",
                "Session management",
                "Secure authentication flow"
              ]
            },
            {
              title: "UI Features",
              items: [
                "Dark/Light theme toggle",
                "Responsive design",
                "User-friendly chat interface",
                "Voice-to-text input capability"
              ]
            }
          ]
        },
        developmentGuide: {
          title: "Development Guidelines",
          items: [
            "Use any mobile app development framework (Flutter/React Native/Android Studio)",
            "Implement real-time chat functionality",
            "Ensure proper error handling",
            "Focus on app performance and response time"
          ]
        },
        judgingCriteria: {
          title: "Judging Criteria",
          totalPoints: 100,
          criteria: [
            {
              checkpoint: "Basic Chat Implementation",
              description: "Develop a text-based interface where users can chat with an LLM (preferably Gemini). Ensure the chat is live, responsive, and context-aware.",
              maxPoints: 25
            },
            {
              checkpoint: "Login System",
              description: "Implement basic user authentication — including login and signup features. This ensures sessions are personalized and secure.",
              maxPoints: 25
            },
            {
              checkpoint: "Theme Toggle",
              description: "Provide an option to switch between dark mode and light mode. This improves accessibility and user comfort.",
              maxPoints: 25
            },
            {
              checkpoint: "Voice-to-Text Input",
              description: "Enable voice input where users can speak instead of typing. Use voice recognition APIs to convert speech to text.",
              maxPoints: 25
            }
          ]
        },
        submissionGuidelines: {
          title: "Submission Guidelines",
          items: [
            "GitHub Repository Link with complete source code",
            "Detailed README with setup instructions",
            "Compiled APK file demonstrating functionality",
            "Documentation of API integration"
          ]
        }
      }
    },
    {
      id: "problem3",
      title: "ML Track Problems",
      domain: "ML",
      description: "Choose any one problem statement from the following three options. Each problem focuses on different aspects of machine learning and has specific metrics to optimize.",
      imageSrc: "ml-problems.jpg",
      sections: {
        problems: {
          title: "Available Problem Statements",
          items: [
            {
              title: "QuickCommerce Insights",
              subtitle: "Analyzing Customer Sentiment and Platform Comparison",
              description: " In the fast-paced world of quick commerce, platforms like BlinkIt, Zepto, and JioMart face growing customer dissatisfaction, as revealed through aggregated reviews and ratings. This dataset offers a unique chance to conduct Sentiment Analysis to classify feedback and perform Platform vs Platform Analysis to benchmark satisfaction. The objective is to identify key pain points and improve user experiences, with evaluation based on F1 Score for sentiment classification and ANOVA for platform analysis. This analysis aims to drive actionable insights for enhancing customer loyalty and maintaining a competitive edge.",
              objective: "Identify key pain points and improve user experiences through sentiment analysis and platform comparison",
              metrics: ["F1-score", "ANOVA"],
              datasetUrl: "https://drive.google.com/file/d/1x1mQS4PgxcKE-3h814cm1EMxT8Zh7Q9a/view" // Replace with actual dataset link
            },
            {
              title: "CaptchaSolver",
              subtitle: "Machine Learning for Accurate Captcha Recognition",
              description: "Develop a machine learning model that can accurately recognize and decode 6-digit numbers from captcha images. The dataset consists of captcha images with corresponding numeric solutions, organized into three subsets: training, testing, and validation. The training subset contains 6,000 images used to train the model, while the test and validation subsets contain 2,000 images each for evaluating and validating the model’s performance. The dataset also includes a CSV file with the image path and the corresponding 6-digit solution label. The model’s performance will be assessed based on classification accuracy, aiming to build an effective solution for captcha recognition.",
              objective: "Build an effective solution for captcha recognition with high accuracy",
              metrics: ["Accuracy"],
              datasetUrl: "https://drive.google.com/file/d/1nn7vWXQwkIEF-AVRdoCBv-PN3m-ieIJQ/view" // Replace with actual dataset link
            },
            {
              title: "Sentiment Surge",
              subtitle: "Predicting Stock Movements Through Market Sentiment",
              description: ": Develop a model to scrape real-time financial news from sources like Reuters or Bloomberg, perform sentiment analysis using Large Language Models (LLMs) and correlate sentiment data with realtime stock prices using financial APIs like Yahoo Finance or Alpha Vantage. The objective is to classify news sentiment into categories (positive, negative, or neutral), analyze how these sentiments correlate with stock price movements of target stocks like Tesla (TSLA) and NVIDIA (NVDA), and generate actionable insights for making better investment decisions.",
              objective: "Generate actionable insights for investment decisions through sentiment analysis",
              metrics: ["PCC", "MAPE"],
              datasetUrl: "N/A"
            }
          ]
        },
        judgingCriteria: {
          title: "Judging Criteria",
          note: "Any team might be required to answer questions pertaining to the solutions they've submitted",
          criteria: [
            {
              title: "Ultimate Precision",
              description: "The Accuracy of the Model will be the foremost criterion for judgement. The Metrics to compare the model will be provided in the Problem Statement. The Model with the highest/best metrics wins!"
            },
            {
              title: "Deadlock",
              description: "If there's a tie, the team that developed and submitted their solution earlier shall be declared the winner."
            },
            {
              title: "Swift and Concise Solutions",
              description: "The total run-time of the participant's notebook/code in Google Colab and the code conciseness will be evaluated. The team with the least runtime or least lines of code will proceed further."
            }
          ]
        },
        submissionGuidelines: {
          title: "Submission Guidelines",
          items: [
            "Jupyter Notebook or Google Colab link with complete code and documentation",
            "Dataset preprocessing and model training steps",
            "Model evaluation metrics and results",
            "README file explaining the approach and setup instructions"
          ]
        }
      }
    }
  ];
}
