import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedin, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faLink} from "@fortawesome/free-solid-svg-icons";

interface PersonProps {
    person: {
        firstName: string;
        lastName: string;
        role: string;
        description?: string;
        imgSrc: string;
        imgAlt: string;
        linkedin: string;
        x?: string;
        instagram?: string;
        youtube?: string;
        website?: string;
        email?: string;
    };
}

export default function Person ({person}:PersonProps) {
  return (
      <div className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
          <Link href={`/e-lab/${person.firstName.toLowerCase() + "-" + person.lastName.toLowerCase()}`}>
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                  <img
                      src={person?.imgSrc}
                      alt={person?.imgAlt}
                      className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                  />
              </div>
          </Link>
          <div className="flex-1 p-4 space-y-2 flex flex-col">
              <div className="flex flex-row justify-between">
                  <h3 className="text-m font-medium text-gray-900">
                      <Link href={`/e-lab/${person.firstName.toLowerCase() + "-" + person.lastName.toLowerCase()}`}>
                         {person.firstName} {person.lastName}
                      </Link>
                      </h3>
                  <div className="space-x-4">
                      <Link href={person.linkedin} target="_blank">
                          <FontAwesomeIcon
                              icon={faLinkedin}
                              size="lg"
                              className="text-black duration-500 hover:text-purple-300"
                          />
                      </Link>
                      {person.x ? (
                          <Link href={person.x} target="_blank">
                              <FontAwesomeIcon
                                  icon={faXTwitter}
                                  size="lg"
                                  className="text-black duration-500 hover:text-purple-300"
                              />
                          </Link>
                      ) : null}
                      {person.instagram ? (
                      <Link href={person.instagram} target="_blank">
                          <FontAwesomeIcon
                              icon={faInstagram}
                              size="lg"
                              className="text-black duration-500 hover:text-purple-300"
                          />
                      </Link>
                      ) : null}
                      {person.website ? (
                          <Link href={person.website} target="_blank">
                              <FontAwesomeIcon
                                  icon={faLink}
                                  size="lg"
                                  className="text-black duration-500 hover:text-purple-300"
                              />
                          </Link>
                      ) : null}
                      {person.email ? (
                          <Link href={`mailto:${person.email}`}>
                              <FontAwesomeIcon
                                  icon={faEnvelope}
                                  size="lg"
                                  className="text-black duration-500 hover:text-purple-300"
                              />
                          </Link>
                      ) : null}
                  </div>
              </div>
              <p className="text-sm text-gray-500">
                  {person.role}
              </p>

              {
                  /*
                  <div className="flex-1 flex flex-col justify-end">
                  {person.description ? (
                      <p className="text-sm italic text-red-500">
                          Should we add short description here?
                      </p>
                  ) : (
                      <p className="text-sm italic text-gray-500">
                          Placeholder for shortDescription
                      </p>
                  )}
              </div>

                   */
              }
          </div>
      </div>
  );
}