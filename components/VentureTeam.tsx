import Section from "@ui/Section";
import {team} from "../data/e-lab";
import Person from "@components/Person";

export default function VentureTeam() {
    return (
        <Section className="bg-purple-950 text-white">
                <div className="mt-8 sm:mt-0 mb-8 md:w-3/5 lg:mb-16">
                    <h1 className="mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-5xl font-semibold uppercase text-transparent">
                        Meet the Team behind the AI E-LAB
                    </h1>
                    <p className="text-2xl">
                        <span className="text-yellow-500">
                          The AI Entrepreneurship Lab is organized by passionate TUM.ai Members
                        </span>{" "}
                        who are committed to fostering the next generation of AI entrepreneurs. Our mission is to ignite
                        your innovative spirit and equip you with the relevant know-how to build your own AI startup with the help of the Munich Entrepreneurship Ecosystem.
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                    {team?.map((person) => (
                        <Person person={person} key={person.id}/>
                    ))}
                </div>
            </Section>
    );
}