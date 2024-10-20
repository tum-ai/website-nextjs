import React from "react";

// Source: https://github.com/mematthew123/3dFlipCards-demo

const steps = [
  {
    step: "01",
    name: "Initial Onboarding",
    gradient: "bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700",
    description:
      "Dive right into an onboarding weekend where you’ll get acquainted with your batch, familiarize yourself with the internal TUM.ai frameworks, hone your ideation skills, and discover various opportunities TUM.ai offers.",
  },
  {
    step: "02",
    name: "ML Project",
    gradient: "bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500",
    description:
      "Over a semester, immerse yourself in an ML project based on your skill set. This period is not just about project tasks but also about community engagement. You’ll be able to develop new skills, participate in various learning opportunities, and even join trips and other special events.",
  },
  {
    step: "03",
    name: "Growth Opportunities",
    gradient: "bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300",
    description:
      "After completing a semester, you aren’t limited to your initial project. You can shape tum.ai by creating or joining a strategic task force.",
  },
  {
    step: "04",
    name: "Research Exchange",
    gradient: "bg-gradient-to-r from-purple-400 via-purple-300 to-purple-200",
    description:
      "Now, we can send you off into research at prestigious institutions such as MIT, Harvard, or Berkeley. Through our network of alumni, we will not only help you find the right topic but also support you with the bureaucracy.",
  },
  {
    step: "05",
    name: "Alumni Program",
    gradient: "bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100",
    description:
      "Once you’ve been with us for two semesters, you’re eligible to join the TUM.ai Alumni Program, marking an important milestone in your journey and opening up further opportunities for collaboration and networking.",
  },
];

const MemberFlipCardComponent = () => {
  return (
    <section className="py-10 mx-auto sm:py-14">
      <div className="mx-auto flex justify-center object-center px-2 sm:px-2 py-10 sm:py-14 lg:max-w-full">
        <div className="flex justify-center object-center flex-col gap-6 sm:gap-8">
          <div className="mx-auto grid grid-cols-5 gap-4">
            {steps.map((step) => (
              <div
                key={step.name}
                className="group h-64 w-64 [perspective:1000px]"
              >
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div
                    className={`absolute inset-0 h-full w-full rounded-xl ${step.gradient} [backface-visibility:hidden] flex flex-col items-center justify-center text-white px-2 text-center`}
                  >
                    <p className="text-xl font-bold">{step.name}</p>
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-4 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <p className="text-sm text-center">{step.description}</p>
                    </div>
                  </div>
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
