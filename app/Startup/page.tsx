import Section from "components/ui/Section";
import Card from "components/ui/Card";
import { startups } from "./e-lab-startups";


export default function Test() {
    return (
        <>
            <Section className="bg-purple-950 text-white">
                <h1 className="mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-5xl font-semibold uppercase text-transparent">
                    MEET THE TEAM BEHIND THE AI E-LAB
                </h1>

                <p className="text-2xl">
                    <span className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text font-semibold text-transparent">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui ducimus omnis consectetur, et nihil laborum,
                    </span>{" "}
                    commodi sint, accusamus nulla aliquam doloremque est quisquam deserunt totaam asperiores nobis deleniti aperiam.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    {startups.map((startup) => (
                        <Card
                            key={startup.id}
                            imageSrc='assets/home_img2.png' 
                            title={startup.name} 
                            description={startup.description} 
                        />
                    ))}
                </div>
            </Section>
        </>
    );
}
