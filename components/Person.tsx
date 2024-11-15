import Link from "next/link";
import Image from "next/image";
import SocialMediaLinks from "@components/SocialMediaLinks";
import {Person} from "@prisma/client";

interface PersonProps {
    person: Person;
}

export default function Person ({person}:PersonProps) {
  return (
      <div className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
          <Link href={`/e-lab/${person.id}`}>
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                  <Image
                      src={person?.imgSrc ?? ""}
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt={person?.imgAlt ?? ""}
                      className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                  />
              </div>
          </Link>
          <div className="flex-1 p-4 space-y-2 flex flex-col">
              <div className="flex flex-col xl:flex-row xl:justify-between">
                  <div>
                      <h3 className="text-m font-medium text-gray-900">
                          {person.firstName} {person.lastName}
                      </h3>
                      <p className="text-sm text-gray-500">
                          {person.role}
                      </p>
                  </div>
                  <div className="space-x-4 mt-2 xl:mt-0">
                      <SocialMediaLinks socialMedia={{
                          linkedin: person.linkedin,
                          x: person.x,
                          instagram: person.instagram,
                          youtube: person.youtube,
                          website: person.website,
                          email: person.email
                      }} iconClassNames={"text-black duration-500 hover:text-purple-300"}/>
                  </div>
              </div>
          </div>
      </div>
  );
}