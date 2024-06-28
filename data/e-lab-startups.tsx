export interface Startup {
    id: string;
    name: string;
    description: string;
    founders: Founder[];
    metrics: Metrics;
    website: string;
    logo: string;
    about?: string;
}

export interface Founder {
    name: string;
    role: string;
}

export type Metrics = Record<string, string>;

export const startups: Startup[] = [
    {
        "id": "airbnb",
        "name": "Airbnb",
        "description": "Airbnb is an online marketplace for short-term homestays and experiences.",
        "founders": [
            {
            "name": "Brian Chesky",
            "role": "CEO, Co-founder"
            },
            {
            "name": "Joe Gebbia",
            "role": "Co-founder"
            },
            {
            "name": "Nathan Blecharczyk",
            "role": "Chief Strategy Officer, Co-founder"
            }
        ],
        "metrics": {
            "Year Founded": "2008",
            "Valuation": "$113 billion",
            "Funding Raised": "$6.4 billion",
            "Employees": "6,132"
        },
        "about": "Airbnb has revolutionized the travel industry by allowing homeowners to rent out their spaces to travelers. Founded in 2008, the company has grown from a small startup to a global phenomenon, operating in over 220 countries and regions. Airbnb's platform not only provides unique accommodation options for travelers but also empowers hosts to earn extra income. The company's success lies in its ability to create a trusted community marketplace and its continuous innovation in the travel and hospitality sector.",
        "website": "https://www.airbnb.com",
        "logo": "/assets/e-lab/startups/airbnb-logo.png"
    }
];