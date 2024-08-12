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
    // {
    //     id: "airbnb",
    //     name: "Airbnb",
    //     description: "Airbnb is an online marketplace for short-term homestays and experiences.",
    //     founders: [
    //         {
    //         name: "Brian Chesky",
    //         role: "CEO, Co-founder"
    //         },
    //         {
    //         name: "Joe Gebbia",
    //         role: "Co-founder"
    //         },
    //         {
    //         name: "Nathan Blecharczyk",
    //         role: "Chief Strategy Officer, Co-founder"
    //         }
    //     ],
    //     metrics: {
    //         "Year Founded": "2008",
    //         "Valuation": "$113 billion",
    //         "Funding Raised": "$6.4 billion",
    //         "Employees": "6,132"
    //     },
    //     about: "Airbnb has revolutionized the travel industry by allowing homeowners to rent out their spaces to travelers. Founded in 2008, the company has grown from a small startup to a global phenomenon, operating in over 220 countries and regions. Airbnb's platform not only provides unique accommodation options for travelers but also empowers hosts to earn extra income. The company's success lies in its ability to create a trusted community marketplace and its continuous innovation in the travel and hospitality sector.",
    //     website: "https://www.airbnb.com",
    //     logo: "/assets/e-lab/startups/Airbnb_Logo_Bélo.svg.png",
    //     industry: "Travel & Hospitality",
    //     batch: "W09",
    //     tag: "Is Hiring",
    //     jobs: [{
    //         name: "Staff Software Engineer, Checkr Pay",
    //         location: "San Francisco, CA",
    //         salary: "$200,000 - $250,000 a year",
    //         experience: "5+ years",
    //     }],
    //     latest_news: [{
    //         message: "Airbnb is hiring a Staff Software Engineer, Checkr Pay in San Francisco, CA. The salary is $200,000 - $250,000 a year and requires 5+ years of experience.",
    //         link: "https://www.theverge.com/2023/5/9/23716903/airbnb-ceo-brian-chesky-rooms-ai-travel-future-of-work-summer-2023",
    //         date: "May 9, 2023",
    //     }, {
    //         message: "Airbnb is hiring a Staff Software Engineer, Checkr Pay in San Francisco, CA. The salary is $200,000 - $250,000 a year and requires 5+ years of experience.",
    //         link: "https://www.theverge.com/2023/5/9/23716903/airbnb-ceo-brian-chesky-rooms-ai-travel-future-of-work-summer-2023",
    //         date: "June 9, 2023",
    //     }],
    // },
];