import React from "react";

// Source: https://github.com/mematthew123/3dFlipCards-demo

const steps = [
  {
    step: "01",
    name: "Initial Onboarding",
    gradient: "bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700",
    description:
      "During onboarding weekend you’ll get acquainted with your batch, meet members of TUM.ai community, familiarize yourself with the internal TUM.ai frameworks, hone your ideation skills, and discover various opportunities TUM.ai offers.",
  },
  {
    step: "02",
    name: "ML Project",
    gradient: "bg-gradient-to-b from-purple-700 via-purple-600 to-purple-500",
    description:
      "Over a semester, immerse yourself in an ML project based on your skill set. But it is also about community engagement. You’ll be able to develop new skills, participate in various learning opportunities, and even join trips and other special events.",
  },
  {
    step: "03",
    name: "Growth Opportunities",
    gradient: "bg-gradient-to-b from-purple-500 via-purple-400 to-purple-300",
    description:
      "After completing a semester, you aren’t limited to your initial project. You can shape tum.ai by creating or joining a strategic task force. Either helping out with Makeathon or developing your own applicactions with other enthusiastic members - everything is possible.",
  },
  {
    step: "04",
    name: "Research Exchange",
    gradient: "bg-gradient-to-b from-purple-400 via-purple-300 to-purple-200",
    description:
      "Now, we can send you off into research at prestigious institutions such as MIT, Harvard, or Berkeley. Through our network of alumni, we will not only help you find the right topic but also support you with the bureaucracy.",
  },
  {
    step: "05",
    name: "Alumni Program",
    gradient: "bg-gradient-to-b from-purple-300 via-purple-200 to-purple-100",
    description:
      "Once you’ve been with us for two semesters, you’re eligible to join the TUM.ai Alumni Program, marking an important milestone in your journey and opening up further opportunities for collaboration and networking.",
  },
];

const MemberFlipCardComponent = () => {
  return (
    <section className="py-10 mx-auto sm:py-14">
      <div className="mx-auto flex justify-center object-center px-4 sm:px-4 py-10 sm:py-14 lg:max-w-full">
        <div className="flex justify-center object-center flex-col gap-10">
          <div className="mx-auto grid grid-cols-1 gap-10">
            {steps.map((step) => (
              <div
                key={step.name}
                className="group h-200 w-[700px] transform transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`h-full w-full rounded-xl shadow-xl ${step.gradient} flex flex-col items-center justify-center text-white px-6 py-4 text-center`}
                >
                  <p className="text-2xl font-bold mb-4">{step.name}</p>
                  <p className="text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberFlipCardComponent;
