import {Person, SocialMedia} from "@data/e-lab";

export interface Startup {
    id: string;
    name: string;
    description: string;
    founders: Person[];
    metrics: Metrics;
    website: string;
    logo: string;
    about?: string;

    tag?: string;
    batch?: string;
    industry: string;
    jobs?: Job[];
    latest_news?: LatestNews[];
    socialMedia?: SocialMedia;
}

export type Metrics = Record<string, string>;

export interface Job {
    name: string;
    location: string;
    salary: string;
    experience: string;
}

export interface LatestNews {
    message: string;
    link: string;
    date: string;
}

export const startups: Startup[] = [
    {
        id: "airbnb",
        name: "Airbnb",
        description: "Airbnb is an online marketplace for short-term homestays and experiences.",
        founders: [
            {
                id: "laurenz-sommerlad",
                firstName: "Laurenz",
                lastName: "Sommerlad",
                role: "Head of Venture",
                description: "Hey, I am Laurenz and lead the amazing team behind the AI E-LAB. My journey began at a young age, building my first software projects at 12 and founding a student-led startup at 15. These early experiences paved the way for my burning passion in AI, Robotics and Entrepreneurship.\n\n" +
                    "Here is a quick overview of my academic achievements and work:\n\n" +
                    "- Ranked in the Top 2% at TUM Department of Computer Science and achieved an Abitur GPA of 1.0\n" +
                    "- Conducting research at LMU Hospital to predict rare child diseases using federated learning-based Graph ML techniques on patient phenotypes, genes, and proteins\n" +
                    "- Developing perception and path planning software for an Autonomous Mars Rover participating in International Rover Competitions with WARR Space Robotics, while also leading Partner & Sponsors | PR & Marketing subteams \n" +
                    "- Over 2+ years of work experience as a Software Engineer in Full-Stack web-based applications (working student)\n\n" +
                    "Outside of my professional endeavors, I enjoy doing a lot of different sports like weight training, martial arts (Wing Chun), marathons, technical and cave diving, wakeboarding, snowboarding, and preparing for my first Ironman. I am also in love with traveling, exploring foreign cultures and learning languages including French, Spanish, Japanese & Arabic which continues to enrich my life.\n\n" +
                    "Driven by a desire to make the world a better place, I am committed to solving the most challenging problems with technology. Feel free to reach out — I am always up for a coffee and a good conversation! ☕",
                imgSrc: "/assets/e-lab/team/laurenz_sommerlad.jpg",
                imgAlt: "Laurenz Sommerlad",
                socialMedia: {
                    linkedin: "https://www.linkedin.com/in/laurenzsommerlad/",
                    x: "https://x.com/Lauros_World",
                    instagram: "https://www.instagram.com/LaurenzSommerlad/",
                    youtube: "https://www.youtube.com/@LaurenzSommerlad",
                    website: "https://laurenzsommerlad.com",
                    email: "laurenz.sommerlad@tum-ai.com"
                }
            },
            {
                id: "jan-christopher-michalczik",
                firstName: "Jan-Christopher",
                lastName: "Michalczik",
                role: "Strategy & Events",
                description: "Hey, nice to meet you! During the course of my studies, I have had the chance to gather some business acumen across different B-Schools. Starting with traditional subjects like finance and accounting, I have continually expanded my horizon to areas more strongly focused on innovation and technology management. Herein, my focus currently lies on but is not limited to AI. My journey has taken me across different countries and industries like the financial sector, shipping, and fruits wholesale.\n\n" +
                    "More importantly, I have had the chance to get immersed in two European innovation hubs: Paris and Munich. The German capital of beer and Weißwurst specifically caught my attention due to its proximity between tech and business which is hard to find elsewhere at the same scale. In the two years since I stepped my foot into the city, it has done everything else but disappointed. So, I am looking very forward to learning how you are contributing to this awesome vibe!\n\n" +
                    "Whatever your challenge is, I am here to help you solve it. I cannot wait to brainstorm with you or connect you to one of the numerous experts that TUM.ai will get you access to. From organizing last year's E-Lab, I can tell you that our participants, organizers, and partners made it a blast. So, get your act together, handle your responsibilities, and make sure you set aside some time for this program. It is worth it!\n\n"+
                    "If you need more info than is presented on our website, sign up for our newsletter, go to one of our info events, or just reach out directly.",
                imgSrc: "/assets/e-lab/team/jan_michalczik.png",
                imgAlt: "Jan-Christopher Michalczik",
                socialMedia: {
                    linkedin: "https://www.linkedin.com/in/jan-michalczik/",
                    x: "",
                    instagram: "",
                    youtube: "",
                    website: "",
                    email: "jan-christopher.michalczik@tum-ai.com"
                }
            },
            {
                id: "benedikt-wieser",
                firstName: "Benedikt",
                lastName: "Wieser",
                role: "Strategy & Events",
                description: "Having a background in Business Administration from the University of St. Gallen and studies at Berkeley, I’ve worked on multiple startup projects, in venture capital, at a scale-up, and participated in the AI E-Lab 2.0 startup incubator.\n\nAdditional to my professional experience, I learnt to lead teams in high-stress situations as an officer cadet in the Austrian Armed Forces, instilling in me strong personal drive and get-things-done thinking.\n\nBesides being passionate about entrepreneurship I love outdoor adventures like whitewater rafting and hiking, and always strive to explore and feel the intensity of life. I am absolutely looking forward to accompanying you on your individual, entrepreneurial journey. Let’s build something amazing together!",
                imgSrc: "/assets/e-lab/team/benedikt_wieser.jpg",
                imgAlt: "Benedikt Wieser",
                socialMedia: {
                    linkedin: "https://www.linkedin.com/in/benedikt-wieser-6430a3139/",
                    x: "",
                    instagram: "",
                    youtube: "",
                    website: "",
                    email: ""
                }
            },
        ],
        metrics: {
            "Year Founded": "2008",
            "Valuation": "$113 billion",
            "Funding Raised": "$6.4 billion",
            "Employees": "6,132"
        },
        about: "Airbnb has revolutionized the travel industry by allowing homeowners to rent out their spaces to travelers. Founded in 2008, the company has grown from a small startup to a global phenomenon, operating in over 220 countries and regions. Airbnb's platform not only provides unique accommodation options for travelers but also empowers hosts to earn extra income. The company's success lies in its ability to create a trusted community marketplace and its continuous innovation in the travel and hospitality sector.",
        website: "https://www.airbnb.com",
        logo: "/assets/e-lab/startups/Airbnb_Logo_Bélo.svg.png",
        industry: "Travel & Hospitality",
        batch: "W09",
        tag: "Is Hiring",
        jobs: [{
            name: "Staff Software Engineer, Checkr Pay",
            location: "San Francisco, CA",
            salary: "$200,000 - $250,000 a year",
            experience: "5+ years",
        }],
        latest_news: [{
            message: "Airbnb is hiring a Staff Software Engineer, Checkr Pay in San Francisco, CA. The salary is $200,000 - $250,000 a year and requires 5+ years of experience.",
            link: "https://www.theverge.com/2023/5/9/23716903/airbnb-ceo-brian-chesky-rooms-ai-travel-future-of-work-summer-2023",
            date: "May 9, 2023",
        }, {
            message: "Airbnb is hiring a Staff Software Engineer, Checkr Pay in San Francisco, CA. The salary is $200,000 - $250,000 a year and requires 5+ years of experience.",
            link: "https://www.theverge.com/2023/5/9/23716903/airbnb-ceo-brian-chesky-rooms-ai-travel-future-of-work-summer-2023",
            date: "June 9, 2023",
        }],
        socialMedia: {
            linkedin: "https://www.linkedin.com/in/laurenzsommerlad/",
            x: "https://x.com/Lauros_World",
            instagram: "https://www.instagram.com/LaurenzSommerlad/",
            youtube: "https://www.youtube.com/@LaurenzSommerlad",
            website: "https://laurenzsommerlad.com",
            email: "laurenz.sommerlad@tum-ai.com"
        }
    },

    {
        id: "tesla",
        name: "Tesla",
        description: "Tesla, Inc. is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses. Founded in 2003 by a group of engineers who wanted to prove that people didn’t need to compromise to drive electric – that electric vehicles can be better, quicker and more fun to drive than gasoline cars.",
        founders: [
            {
                id: "laurenz-sommerlad",
                firstName: "Laurenz",
                lastName: "Sommerlad",
                role: "Head of Venture",
                description: "Hey, I am Laurenz and lead the amazing team behind the AI E-LAB. My journey began at a young age, building my first software projects at 12 and founding a student-led startup at 15. These early experiences paved the way for my burning passion in AI, Robotics and Entrepreneurship.\n\n" +
                    "Here is a quick overview of my academic achievements and work:\n\n" +
                    "- Ranked in the Top 2% at TUM Department of Computer Science and achieved an Abitur GPA of 1.0\n" +
                    "- Conducting research at LMU Hospital to predict rare child diseases using federated learning-based Graph ML techniques on patient phenotypes, genes, and proteins\n" +
                    "- Developing perception and path planning software for an Autonomous Mars Rover participating in International Rover Competitions with WARR Space Robotics, while also leading Partner & Sponsors | PR & Marketing subteams \n" +
                    "- Over 2+ years of work experience as a Software Engineer in Full-Stack web-based applications (working student)\n\n" +
                    "Outside of my professional endeavors, I enjoy doing a lot of different sports like weight training, martial arts (Wing Chun), marathons, technical and cave diving, wakeboarding, snowboarding, and preparing for my first Ironman. I am also in love with traveling, exploring foreign cultures and learning languages including French, Spanish, Japanese & Arabic which continues to enrich my life.\n\n" +
                    "Driven by a desire to make the world a better place, I am committed to solving the most challenging problems with technology. Feel free to reach out — I am always up for a coffee and a good conversation! ☕",
                imgSrc: "/assets/e-lab/team/laurenz_sommerlad.jpg",
                imgAlt: "Laurenz Sommerlad",
                socialMedia: {
                    linkedin: "https://www.linkedin.com/in/laurenzsommerlad/",
                    x: "https://x.com/Lauros_World",
                    instagram: "https://www.instagram.com/LaurenzSommerlad/",
                    youtube: "https://www.youtube.com/@LaurenzSommerlad",
                    website: "https://laurenzsommerlad.com",
                    email: "laurenz.sommerlad@tum-ai.com"
                }
            },
        ],
        metrics: {
            "Year Founded": "2008",
            "Valuation": "$113 billion",
            "Funding Raised": "$6.4 billion",
            "Employees": "6,132"
        },
        website: "http://tesla.com",
        logo: "/assets/e-lab/startups/Tesla_Motors.svg.png",
        industry: "Automotive",
        batch: "S10",
        tag: "Is Hiring",
        jobs: [{
            name: "Senior Autopilot Software Engineer",
            location: "Palo Alto, CA",
            salary: "$180,000 - $230,000 a year",
            experience: "4+ years",
        }],
        latest_news: [{
            message: "Tesla is looking for a Senior Autopilot Software Engineer in Palo Alto, CA. The salary range is $180,000 - $230,000 a year with a requirement of 4+ years of experience.",
            link: "https://www.tesla.com/blog/autopilot-future-of-driving",
            date: "April 15, 2023",
        }, {
            message: "Tesla announces a new project to expand its energy storage solutions, aiming to revolutionize the electric grid.",
            link: "https://www.tesla.com/blog/energy-storage-solutions",
            date: "May 20, 2023",
        }],
    },

    {
        id: "tesla1",
        name: "Tesla1",
        description: "Tesla, Inc. is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses. Founded in 2003 by a group of engineers who wanted to prove that people didn’t need to compromise to drive electric – that electric vehicles can be better, quicker and more fun to drive than gasoline cars.",
        founders: [
            {
                id: "laurenz-sommerlad",
                firstName: "Laurenz",
                lastName: "Sommerlad",
                role: "Head of Venture",
                description: "Hey, I am Laurenz and lead the amazing team behind the AI E-LAB. My journey began at a young age, building my first software projects at 12 and founding a student-led startup at 15. These early experiences paved the way for my burning passion in AI, Robotics and Entrepreneurship.\n\n" +
                    "Here is a quick overview of my academic achievements and work:\n\n" +
                    "- Ranked in the Top 2% at TUM Department of Computer Science and achieved an Abitur GPA of 1.0\n" +
                    "- Conducting research at LMU Hospital to predict rare child diseases using federated learning-based Graph ML techniques on patient phenotypes, genes, and proteins\n" +
                    "- Developing perception and path planning software for an Autonomous Mars Rover participating in International Rover Competitions with WARR Space Robotics, while also leading Partner & Sponsors | PR & Marketing subteams \n" +
                    "- Over 2+ years of work experience as a Software Engineer in Full-Stack web-based applications (working student)\n\n" +
                    "Outside of my professional endeavors, I enjoy doing a lot of different sports like weight training, martial arts (Wing Chun), marathons, technical and cave diving, wakeboarding, snowboarding, and preparing for my first Ironman. I am also in love with traveling, exploring foreign cultures and learning languages including French, Spanish, Japanese & Arabic which continues to enrich my life.\n\n" +
                    "Driven by a desire to make the world a better place, I am committed to solving the most challenging problems with technology. Feel free to reach out — I am always up for a coffee and a good conversation! ☕",
                imgSrc: "/assets/e-lab/team/laurenz_sommerlad.jpg",
                imgAlt: "Laurenz Sommerlad",
                socialMedia: {
                    linkedin: "https://www.linkedin.com/in/laurenzsommerlad/",
                    x: "https://x.com/Lauros_World",
                    instagram: "https://www.instagram.com/LaurenzSommerlad/",
                    youtube: "https://www.youtube.com/@LaurenzSommerlad",
                    website: "https://laurenzsommerlad.com",
                    email: "laurenz.sommerlad@tum-ai.com"
                }
            },
        ],
        metrics: {
            "Year Founded": "2008",
            "Valuation": "$113 billion",
            "Funding Raised": "$6.4 billion",
            "Employees": "6,132"
        },
        website: "http://tesla1.com",
        logo: "/assets/e-lab/startups/Tesla_Motors.svg.png",
        industry: "Automotive",
        batch: "S10",
        tag: "Is Hiring",
        jobs: [{
            name: "Senior Autopilot Software Engineer",
            location: "Palo Alto, CA",
            salary: "$180,000 - $230,000 a year",
            experience: "4+ years",
        }],
        latest_news: [{
            message: "Tesla is looking for a Senior Autopilot Software Engineer in Palo Alto, CA. The salary range is $180,000 - $230,000 a year with a requirement of 4+ years of experience.",
            link: "https://www.tesla.com/blog/autopilot-future-of-driving",
            date: "April 15, 2023",
        }, {
            message: "Tesla announces a new project to expand its energy storage solutions, aiming to revolutionize the electric grid.",
            link: "https://www.tesla.com/blog/energy-storage-solutions",
            date: "May 20, 2023",
        }],
    },

    {
        id: "tesla2",
        name: "Tesla2",
        description: "Tesla, Inc. is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses. Founded in 2003 by a group of engineers who wanted to prove that people didn’t need to compromise to drive electric – that electric vehicles can be better, quicker and more fun to drive than gasoline cars.",
        founders: [
            {
                id: "laurenz-sommerlad",
                firstName: "Laurenz",
                lastName: "Sommerlad",
                role: "Head of Venture",
                description: "Hey, I am Laurenz and lead the amazing team behind the AI E-LAB. My journey began at a young age, building my first software projects at 12 and founding a student-led startup at 15. These early experiences paved the way for my burning passion in AI, Robotics and Entrepreneurship.\n\n" +
                    "Here is a quick overview of my academic achievements and work:\n\n" +
                    "- Ranked in the Top 2% at TUM Department of Computer Science and achieved an Abitur GPA of 1.0\n" +
                    "- Conducting research at LMU Hospital to predict rare child diseases using federated learning-based Graph ML techniques on patient phenotypes, genes, and proteins\n" +
                    "- Developing perception and path planning software for an Autonomous Mars Rover participating in International Rover Competitions with WARR Space Robotics, while also leading Partner & Sponsors | PR & Marketing subteams \n" +
                    "- Over 2+ years of work experience as a Software Engineer in Full-Stack web-based applications (working student)\n\n" +
                    "Outside of my professional endeavors, I enjoy doing a lot of different sports like weight training, martial arts (Wing Chun), marathons, technical and cave diving, wakeboarding, snowboarding, and preparing for my first Ironman. I am also in love with traveling, exploring foreign cultures and learning languages including French, Spanish, Japanese & Arabic which continues to enrich my life.\n\n" +
                    "Driven by a desire to make the world a better place, I am committed to solving the most challenging problems with technology. Feel free to reach out — I am always up for a coffee and a good conversation! ☕",
                imgSrc: "/assets/e-lab/team/laurenz_sommerlad.jpg",
                imgAlt: "Laurenz Sommerlad",
                socialMedia: {
                    linkedin: "https://www.linkedin.com/in/laurenzsommerlad/",
                    x: "https://x.com/Lauros_World",
                    instagram: "https://www.instagram.com/LaurenzSommerlad/",
                    youtube: "https://www.youtube.com/@LaurenzSommerlad",
                    website: "https://laurenzsommerlad.com",
                    email: "laurenz.sommerlad@tum-ai.com"
                }
            },
        ],
        metrics: {
            "Year Founded": "2008",
            "Valuation": "$113 billion",
            "Funding Raised": "$6.4 billion",
            "Employees": "6,132"
        },
        website: "http://tesla2.com",
        logo: "/assets/e-lab/startups/Tesla_Motors.svg.png",
        industry: "Automotive",
        batch: "S10",
        tag: "Is Hiring",
        jobs: [{
            name: "Senior Autopilot Software Engineer",
            location: "Palo Alto, CA",
            salary: "$180,000 - $230,000 a year",
            experience: "4+ years",
        }],
        latest_news: [{
            message: "Tesla is looking for a Senior Autopilot Software Engineer in Palo Alto, CA. The salary range is $180,000 - $230,000 a year with a requirement of 4+ years of experience.",
            link: "https://www.tesla.com/blog/autopilot-future-of-driving",
            date: "April 15, 2023",
        }, {
            message: "Tesla announces a new project to expand its energy storage solutions, aiming to revolutionize the electric grid.",
            link: "https://www.tesla.com/blog/energy-storage-solutions",
            date: "May 20, 2023",
        }],
    },
];