import type {Metadata} from "next";
import Section from "@ui/Section";
import Link from "next/link";
import {faq} from "../../../data/e-lab";
import FAQ from "@components/FAQ";
import VentureTeam from "@components/VentureTeam";

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