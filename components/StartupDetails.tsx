"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Person from "@components/Person";
import {Person as PersonType} from "@prisma/client";
import SocialMediaLinks from "@components/SocialMediaLinks";

export interface Metric {
    id: string;
    startupId: string;
    key: string;
    value: string;
}

export interface Job {
    id: string;
    startupId: string;
    name: string;
    location: string;
    salary: string;
    experience: string;

}

export interface LatestNews {
    id: string;
    startupId: string;
    message: string;
    link: string;
    date : string;
}

/*export interface PersonType {
    id: string;
    firstName: string;
    lastName: string;
    role?: string;
    description?: string;
    imgSrc?: string;
    imgAlt?: string;
    linkedin?: string;
    x?: string;
    instagram?: string;
    youtube?: string;
    website?: string;
    email?: string;
    type: string;
}*/

export interface Startup {
    id: string;
    name: string;
    description: string;
    website: string;
    logo: string;
    about?: string;
    tag?: string;
    batch?: string;
    industry: string;
    linkedin?: string;
    x?: string;
    instagram?: string;
    youtube?: string;
    email?: string;
    jobs?: Job[];
    latestNews: LatestNews[];
    metrics: Metric[];
    founders: PersonType[];
}

const StartupDetails = ({ startup }: { startup: Startup }) => {
  const [imageError, setImageError] = useState(false);
  const socialMedia = {
        linkedin: startup.linkedin,
        x: startup.x,
        instagram: startup.instagram,
        youtube: startup.youtube,
        website: startup.website,
        email: startup.email
  }
  const has_any_social_media = Object.values(socialMedia).some((value) => value !== null);

  return (
      <div className="bg-purple-950 text-white min-h-screen pt-16 p-8">

        <div className="max-w-4xl mx-auto">

          <div className="flex sm:items-center mb-8 flex-col sm:flex-row">
            <div className="flex items-center">
                <h1 className="text-4xl font-bold mr-4">{startup.name}</h1>
                {!imageError && (
                    <Image
                        src={startup.logo}
                        alt={`${startup.name} logo`}
                        width={100}
                        height={100}
                        onError={() => setImageError(true)}
                    />
                )}
            </div>

            <div className="sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-300 mt-4 sm:mt-0 flex flex-row">
              <h2 className="sr-only">Social Media Links</h2>
            {has_any_social_media && (
                  <div className="flex space-x-4">
                    <SocialMediaLinks socialMedia={socialMedia}
                    iconClassNames={"duration-500 hover:text-yellow-500"}/>
                  </div>
            )}
            </div>

        </div>

        <p className="text-xl mb-8">{startup.description}</p>

        <h2 className="text-2xl font-semibold mb-4">Metrics</h2>
          <ul className="mb-8">
            {startup.metrics.map((metric) => (
                <li key={metric.key} className="mb-2">
                  <span className="font-bold">{metric.key}:</span> {String(metric.value)}
                </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-4">About {startup.name}</h2>
          <p className="mb-8">{startup.about}</p>

          <h2 className="text-2xl font-semibold mb-4">Founders</h2>
          <div
              className="mb-8 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {startup.founders?.map((person) => (
                <Person person={person} key={person.id}/>
            ))}
          </div>

          <Link
              href={startup.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-600 transition-colors"
          >
            Visit Website
          </Link>


        </div>
      </div>
  );
};

export default StartupDetails;