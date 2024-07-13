export interface Startup {
    id: string;
    name: string;
    description: string;
    founders: Founder[];
    metrics: Metrics;
    website: string;
    logo: string;
    about?: string;

    tag?: string;
    batch?: string;
    industry: string;
    jobs?: Job[];
    latest_news?: LatestNews[];
}

export interface Founder {
    name: string;
    role: string;
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
            name: "Brian Chesky",
            role: "CEO, Co-founder"
            },
            {
            name: "Joe Gebbia",
            role: "Co-founder"
            },
            {
            name: "Nathan Blecharczyk",
            role: "Chief Strategy Officer, Co-founder"
            }
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
    },

    {
        id: "tesla",
        name: "Tesla",
        description: "Tesla, Inc. is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses. Founded in 2003 by a group of engineers who wanted to prove that people didn’t need to compromise to drive electric – that electric vehicles can be better, quicker and more fun to drive than gasoline cars.",
        founders: [
            {
                name: "Elon Musk",
                role: "CEO"
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
                name: "Elon Musk",
                role: "CEO"
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
                name: "Elon Musk",
                role: "CEO"
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