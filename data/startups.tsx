interface Startup {
  href: string;
  src: string;
  alt: string;
  tag?: string; // Optional
  batch: string;
  industry: Record<string, string>;
  region: string;
  jobs?: { // Optional
    name: string;
    location: string;
    salary: string;
    experience: string;
  }[];
  about: string;
  latest?: { // Optional
    message: string;
    link: string;
    date: string;
  }[];
  active_founders: {
    name: string;
    position: string;
    linkedin: string;
  }[];
}

export const startups_until24: Startup[] = [
  {
    href: "http://airbnb.com",
    src: "/assets/industry/partners/IP4/ATOSS.png",
    alt: "Airbnb",
    tag: "Is Hiring",
    batch: "W09",
    industry: {"Consumer": "Travel, Leisure and Tourism"},
    region: "San Francisco Bay Area",
    jobs: [{
      name: "Staff Software Engineer, Checkr Pay",
      location: "San Francisco, CA",
      salary: "$200,000 - $250,000 a year",
      experience: "5+ years",
    }],
    about: "Airbnb is a community based on connection and belonging—a community that was born in 2008 when two hosts welcomed three guests to their San Francisco home, and has since grown to include hosts and guests in over 220 countries and territories.",
    latest: [{
      message: "Airbnb is hiring a Staff Software Engineer, Checkr Pay in San Francisco, CA. The salary is $200,000 - $250,000 a year and requires 5+ years of experience.",
      link: "https://www.theverge.com/2023/5/9/23716903/airbnb-ceo-brian-chesky-rooms-ai-travel-future-of-work-summer-2023",
      date: "May 9, 2023",
    }, {
      message: "Airbnb is hiring a Staff Software Engineer, Checkr Pay in San Francisco, CA. The salary is $200,000 - $250,000 a year and requires 5+ years of experience.",
      link: "https://www.theverge.com/2023/5/9/23716903/airbnb-ceo-brian-chesky-rooms-ai-travel-future-of-work-summer-2023",
      date: "June 9, 2023",
    }],
    active_founders: [{
      name: "Brian Chesky",
      position: "CEO",
      linkedin: "https://www.linkedin.com/in/brianchesky/",
    }, {
      name: "Joe Gebbia",
      position: "Co-Founder",
      linkedin: "https://www.linkedin.com/in/joegebbia/",
    }],
  },
  {
    href: "http://tesla.com",
    src: "/assets/industry/partners/IP5/TESLA.png",
    alt: "Tesla",
    tag: "Innovation Leader",
    batch: "S10",
    industry: {"Automotive": "Electric Vehicles, Energy Storage"},
    region: "Silicon Valley",
    jobs: [{
      name: "Senior Autopilot Software Engineer",
      location: "Palo Alto, CA",
      salary: "$180,000 - $230,000 a year",
      experience: "4+ years",
    }],
    about: "Tesla, Inc. is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses. Founded in 2003 by a group of engineers who wanted to prove that people didn’t need to compromise to drive electric – that electric vehicles can be better, quicker and more fun to drive than gasoline cars.",
    latest: [{
      message: "Tesla is looking for a Senior Autopilot Software Engineer in Palo Alto, CA. The salary range is $180,000 - $230,000 a year with a requirement of 4+ years of experience.",
      link: "https://www.tesla.com/blog/autopilot-future-of-driving",
      date: "April 15, 2023",
    }, {
      message: "Tesla announces a new project to expand its energy storage solutions, aiming to revolutionize the electric grid.",
      link: "https://www.tesla.com/blog/energy-storage-solutions",
      date: "May 20, 2023",
    }],
    active_founders: [{
      name: "Elon Musk",
      position: "CEO",
      linkedin: "https://www.linkedin.com/in/elonmusk/",
    }],
  },
];