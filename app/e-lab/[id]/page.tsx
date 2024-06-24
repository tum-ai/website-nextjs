import {type Metadata} from 'next';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedin, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faLink} from "@fortawesome/free-solid-svg-icons";
import {team} from "../../../data/e-lab";
import Link from "next/link";
import NotFound from "next/dist/client/components/not-found-error";

interface PersonProps {
    id: string;
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
}
/*
export const getStaticProps: GetStaticProps = (context) => {
    console.warn("context", context.params);
    const id = context.params?.personID;
    const person = team.find((person: PersonProps) => id === person.id);

    if (!person) {
        return {
            props: { hasError: true },
        }
    }

    return {
        props: {
            person: person
        }
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    const pathsWithParams = team.map((person: PersonProps) => ({ params: { person: person.id }}))
    console.warn("paths", pathsWithParams);
    return {
        paths: pathsWithParams,
        fallback: false
    }
}

 */
export function generateStaticParams() {
    //console.warn("team", team);
    return team.map((person) => ({
        id: person.id,
    }));
}

/*
export const metadata: Metadata = {
    title: {id}+" - AI E-LAB | TUM.ai",
    description:
        "Meet the Team behind the AI Entrepreneurship Lab. Join us if you are up for a 3-month founding program designed to ignite your innovative spirit and equip you with the relevant know-how to build your own AI startup.",
};

 */
export function generateMetadata({params: {id}}: { params: { id: string } }) {
    const person = team.find((person: PersonProps) => id === person.id);

    return {
        title: person?.firstName + " " + person?.lastName + " - AI E-LAB | TUM.ai",
        description:
            "Meet the Team behind the AI Entrepreneurship Lab. Join us if you are up for a 3-month founding program designed to ignite your innovative spirit and equip you with the relevant know-how to build your own AI startup.",
    };
}

export default function Page({params: {id}}: { params: { id: string } }) {
    const person = team.find((person: PersonProps) => id === person.id);
    console.log("person", person);
    if (!person) {
        return <NotFound />;
    }
    return(
        <>
            <div className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
                <Link href={`/e-lab/${id}`}>
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
                            <Link
                                href={`/e-lab/${person?.firstName.toLowerCase() + "-" + person.lastName.toLowerCase()}`}>
                                {person?.firstName} {person?.lastName}
                            </Link>
                        </h3>
                        <div className="space-x-4">
                            <Link href={person?.linkedin} target="_blank">
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
        </>
    );
}

