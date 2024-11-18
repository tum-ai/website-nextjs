// Source: https://github.com/mematthew123/3dFlipCards-demo

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

interface Step {
  step: string;
  name: string;
  gradient: string;
  description: string;
}

const steps: Step[] = [
  {
    step: "00",
    name: "Batch Introduction Program",
    gradient: "bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700",
    description:
      "Kick off your journey with the Batch Introduction Program! Here, you’ll get introduced to TUM.ai, meet other new members, and participate in social events, setting the foundation for your journey.",
  },
  {
    step: "01A",
    name: "Impact Projects",
    gradient: "bg-gradient-to-b from-purple-800 via-purple-700 to-purple-600",
    description:
      "Engage in impactful AI projects that tackle real-world problems. This track will build your practical skills and introduce you to TUM.ai’s collaborative work environment.",
  },
  {
    step: "01B",
    name: "Leadership Track",
    gradient: "bg-gradient-to-b from-purple-800 via-purple-700 to-purple-600",
    description:
      "Focus on developing leadership skills by joining an initiative workgroup. You’ll contribute to TUM.ai's strategic direction and gain experience in organizing and leading teams.",
  },
  {
    step: "02",
    name: "Mission-based Task Force",
    gradient: "bg-gradient-to-b from-purple-700 via-purple-600 to-purple-500",
    description:
      "In the second semester, shift towards contributing to a mission-based task force, applying your skills to strategic initiatives and preparing for further TUM.ai involvement.",
  },
  {
    step: "03",
    name: "Research Exchange (REX) Program",
    gradient: "bg-gradient-to-b from-purple-600 via-purple-500 to-purple-400",
    description:
      "After completing two semesters, you're eligible for the REX Program. This program allows you to engage in research at prestigious institutions like MIT, Harvard, or Berkeley.",
  },
  {
    step: "04",
    name: "Alumni Program",
    gradient: "bg-gradient-to-b from-purple-500 via-purple-400 to-purple-300",
    description:
      "Having been with TUM.ai for two or more semesters, you can join the Alumni Program, opening up opportunities for continued networking and collaboration.",
  },
];

const ArrowPurple900 = () => (
  <div className="flex justify-center items-center my-2">
    <FontAwesomeIcon icon={faArrowDown} className="text-purple-900 text-4xl" />
  </div>
);

const ArrowPurple800 = () => (
  <div className="flex justify-center items-center my-2">
    <FontAwesomeIcon icon={faArrowDown} className="text-purple-800 text-4xl" />
  </div>
);

const ArrowPurple700 = () => (
  <div className="flex justify-center items-center my-2">
    <FontAwesomeIcon icon={faArrowDown} className="text-purple-700 text-4xl" />
  </div>
);

const ArrowPurple600 = () => (
  <div className="flex justify-center items-center my-2">
    <FontAwesomeIcon icon={faArrowDown} className="text-purple-600 text-4xl" />
  </div>
);

const MemberFlipCardComponent = () => {
  return (
    <section className="py-10 mx-auto sm:py-14">
      <div className="mx-auto flex justify-center object-center px-4 sm:px-4 py-10 sm:py-14 lg:max-w-full">
        <div className="flex justify-center object-center flex-col gap-10">
          <div className="mx-auto grid grid-cols-1 gap-10">
            
            <div className="group w-[700px] transform transition-all duration-300 hover:scale-105">
              <div
                className={`min-h-[250px] h-full w-full rounded-xl shadow-xl ${steps[0]?.gradient} flex flex-col items-center justify-center text-white px-6 py-4 text-center`}
              >
                <p className="text-2xl font-bold mb-4">{steps[0]?.name}</p>
                <p className="text-base">{steps[0]?.description}</p>
              </div>
            </div>

            <ArrowPurple900 />

            <div className="flex gap-10 justify-center">
              {steps.slice(1, 3).map((step) => (
                <div
                  key={step.name}
                  className="group w-[340px] transform transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`min-h-[250px] h-full w-full rounded-xl shadow-xl ${step?.gradient} flex flex-col items-center justify-center text-white px-6 py-4 text-center`}
                  >
                    <p className="text-2xl font-bold mb-4">{step?.name}</p>
                    <p className="text-base">{step?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-20 justify-center">
              <ArrowPurple800 />
              <ArrowPurple800 />
            </div>

            <div className="group w-[700px] transform transition-all duration-300 hover:scale-105">
              <div
                className={`min-h-[250px] h-full w-full rounded-xl shadow-xl ${steps[3]?.gradient} flex flex-col items-center justify-center text-white px-6 py-4 text-center`}
              >
                <p className="text-2xl font-bold mb-4">{steps[3]?.name}</p>
                <p className="text-base">{steps[3]?.description}</p>
              </div>
            </div>

            <ArrowPurple700 />

            <div className="group w-[700px] transform transition-all duration-300 hover:scale-105">
              <div
                className={`min-h-[250px] h-full w-full rounded-xl shadow-xl ${steps[4]?.gradient} flex flex-col items-center justify-center text-white px-6 py-4 text-center`}
              >
                <p className="text-2xl font-bold mb-4">{steps[4]?.name}</p>
                <p className="text-base">{steps[4]?.description}</p>
              </div>
            </div>

            <ArrowPurple600 />

            <div className="group w-[700px] transform transition-all duration-300 hover:scale-105">
              <div
                className={`min-h-[250px] h-full w-full rounded-xl shadow-xl ${steps[5]?.gradient} flex flex-col items-center justify-center text-white px-6 py-4 text-center`}
              >
                <p className="text-2xl font-bold mb-4">{steps[5]?.name}</p>
                <p className="text-base">{steps[5]?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberFlipCardComponent;
