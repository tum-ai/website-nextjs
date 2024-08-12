import type {Metadata} from "next";
import Section from "@ui/Section";
import Link from "next/link";
import {alumni, faq, team} from "../../../data/e-lab";
import FAQ from "@components/FAQ";
import VentureTeam from "@components/VentureTeam";
import Person from "@components/Person";

export const metadata: Metadata = {
    title: "Team - AI E-LAB | TUM.ai",
    description:
        "Meet the Team behind the AI Entrepreneurship Lab. Join us if you are up for a 3-month founding journey designed to ignite your innovative spirit and equip you with the relevant know-how to build your own AI startup in Munich.",
};

export default function Page() {
    return (
        <>
            <VentureTeam />
            <Section className="bg-purple-950 text-white">
                <div className="mt-8 sm:mt-0 mb-8 md:w-3/5 lg:mb-16">
                    <h1 className="mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-5xl font-semibold uppercase text-transparent">
                        Advisors & Honorable Alumni
                    </h1>
                </div>
                <div
                    className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                    {alumni?.map((person) => (
                        <Person person={person} key={person.id}/>
                    ))}
                </div>
            </Section>
            <Section className="bg-purple-950 text-white">
                <h3 className="text-primary mb-2 block text-center text-lg font-semibold">
                    FAQ
                </h3>
                <h4 className="text-dark mb-12 text-center text-3xl font-bold sm:text-4xl">
                    Do you have any questions?
                </h4>
                <FAQ questions={faq} />
                <div className="flex flex-col items-center justify-center gap-6 ">
                    <h3 className="mt-20 text-center text-2xl font-semibold">
                        You still have other questions?
                    </h3>
                    <Link
                        className="min-w-[300px] rounded-full border-2 border-yellow-500 p-4 text-center font-semibold transition-colors duration-300 hover:border-red-500 sm:min-w-[400px]"
                        href="mailto:venture@tum-ai.com"
                    >
                        Ask us here
                    </Link>
                </div>
            </Section>
        </>
    );
}