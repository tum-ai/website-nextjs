import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedin, faXTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faLink} from "@fortawesome/free-solid-svg-icons";
import {Person} from "../data/e-lab";
import Image from "next/image";

interface PersonProps {
    person: Person;
}

export default function Person ({person}:PersonProps) {
  return (
      <div className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
          <Link href={`/e-lab/${person.id}`}>
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                  <Image
                      src={person?.imgSrc}
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt={person?.imgAlt}
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
                      {person.youtube ? (
                          <Link href={person.youtube} target="_blank">
                              <FontAwesomeIcon
                                  icon={faYoutube}
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
          </div>
      </div>
  );
}