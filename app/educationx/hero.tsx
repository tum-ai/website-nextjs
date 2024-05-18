"use client";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import logo from "@public/assets/education/ai-academy-4-logo.png"

export const Hero = () => {
  return (
    <section className="relative h-screen bg-purple-950">
      <img src={logo.src} className="absolute right-[10vw] top-[30vh] h-[70vh] max-h-[500px] brightness-[70%]">
      </img>
      <div className="absolute top-0 flex h-full w-full items-center text-white">
        <div className="max-w-8xl top-0 mx-auto space-y-6 p-8 md:p-16 pb-20">
          <h1 className="text-center font-bold">
            <span className="sm:text-2xl md:text-6xl xl:text-8xl">
              AI Academy
            </span>
          </h1>
          <div className="flex flex-col items-center">
            <p className="mb-8 max-w-2xl text-center sd:text-sm md:text-lg xl:text-2xl font-bold">
              Join our beginner-friendly AI workshops with industry experts to learn about real-world AI applications
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-6">
            {/* //TODO add link to sign up .*/}
            <Link
              className="min-w-[100px] max-w-lg rounded-full border-none bg-gradient-to-b from-yellow-500 to-red-500 p-3 text-center sm:min-w-[200px]"
              href="https://www.eventbrite.de/e/ai-e-lab-final-pitch-competition-tickets-784536669297?aff=oddtdtcreator"
            >
              Sign Up
            </Link>
            <Link
              className="min-w-[100px] max-w-lg rounded-full border-none bg-gradient-to-b from-yellow-500 to-red-500 p-3 text-center sm:min-w-[200px]"
              href="https://www.eventbrite.de/e/ai-e-lab-final-pitch-competition-tickets-784536669297?aff=oddtdtcreator"
            >
              Upcoming Workshops
            </Link>

          </div>
        </div>
      </div>

      <button
        className="absolute bottom-16 left-[50%] -translate-x-[50%]"
        onClick={() => window.scrollBy({ top: 500, behavior: "smooth" })}
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          size="2xl"
          className="animate-bounce text-white"
        />
      </button>
    </section>
  );
};
