"use client"
import Benefits from "@components/Benefit";
import FAQ from "@components/FAQ";
import Logos from "@components/Logos";
import Stat from "@components/Stat";
import Testimonials from "@components/Testimonials";
import Timeline from "@components/TimelineOneSided";
import Section from "@components/ui/Section";
import {
  faBook,
  faCircleNodes,
  faHandshakeSimple,
  faHandsHoldingCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faq, testimonials } from "data/e-lab";
import Link from "next/link";
import { Hero } from "./hero";
import locationIcon from "@public/assets/education/locationIcon.png"
import calendarIcon from "@public/assets/education/calendarIcon.png"
import discussion_image from "public/assets/education/discussion_image.jpg"
import interactive_image from  "public/assets/education/interactive_image.jpg"
import presentation_image from "public/assets/education/presentation_image.jpg"
import nvidia_logo from "public/assets/education/nvidia_logo.svg"
import microsoft_logo from "public/assets/education/microsoft_logo.png"
import accenture_logo from "public/assets/education/accenture_logo.svg"
import celonis_logo from "public/assets/education/celonis_logo.svg"
import airbus_logo from "public/assets/education/airbus_logo.png"
import deepset_logo from "public/assets/education/deepset_logo.svg"
import ryverai_logo from "public/assets/education/ryverai_logo.png"
import dps_logo from "public/assets/education/dps_logo.png"
import ibm_logo from "public/assets/education/ibm-logo.svg"
import appliedAI_logo from "public/assets/education/appliedAI_logo.svg"
import { useRef } from "react";


export default function Page() {
  const upcomingWorkshops = useRef(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement | HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero ref={upcomingWorkshops} scrollToSection={scrollToSection} />
      <Section className="items-center justify-center bg-purple-950 text-white">
        <h2 ref={upcomingWorkshops} className="mb-8 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-center text-3xl font-semibold uppercase tracking-widest text-transparent sm:text-5xl">
          Upcoming Workshops
        </h2>
        <div className="flex flex-col items-center justify-center gap-y-8">
            <h3 className="text-center text-3xl "> 8 workshops in May and June 2024</h3>
            <iframe
              src="https://lu.ma/embed/calendar/cal-GyF9L9O3ULx9C66/events?lt=dark"
              className="rounded-xl border-grey border-2 md:w-[500px] md:h-[250px] lg:w-[600px] lg:h-[450px]"
              aria-hidden="false"
            ></iframe>
        </div>
      </Section>
      <Section className="bg-purple-950 text-white">
        <div className="mb-8 sm:mb-16 lg:mb-32">
          <div className="md:w-3/5">
            <h2 className="mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-5xl font-bold uppercase text-transparent">
              What is the AI Academy?
            </h2>
          </div>
          <h2 className="mb-5 bg-yellow-500 bg-clip-text text-3xl font-semibold uppercase text-transparent"> 
            AI Academy is a series of interactive AI workshops focusing on the real-world applications of AI.
          </h2>
          <div className="md:w-3/5">
            <h3 className="text-2xl font-light">
              We invite industry experts to share their insights on practical AI uses-cases in beginner-friendly and interactive workshops.
            </h3>
          </div>
        </div>
        <div className="flex items-end justify-end">
          <div className="flex w-full flex-col items-end md:w-3/5">
            <div className="Ai-academy-details flex flex-col gap-y-4 mb-4">
                <div className="flex items-center gap-x-4 ">
                  <img src={calendarIcon.src} className="w-[50px]"></img>
                  <div className="text-2xl font-light">
                    <h3>May and June 2024</h3>
                    <h3> <span className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text font-bold text-transparent">Wednesday 18:30</span>, 90 min.</h3>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 ">
                  <img src={locationIcon.src} className="w-[50px]"></img>
                  <div className="text-2xl font-light">
                    <h3>TUM Main Campus</h3>
                    <h3> <span className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text font-bold text-transparent"> Room 2760</span>, 2nd Floor</h3>
                  </div>
                </div>
            </div>
            <h3 className="mb-4 text-4xl font-semibold text-yellow-500">
              Beginner-friendly and interactive!
            </h3>
          </div>
        </div>
      </Section>
      <Section className="bg-purple-950 text-white flex justify-center">
        <h2 className="mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-center text-3xl font-semibold uppercase tracking-widest text-transparent sm:text-5xl md:ml-0">
          Example Workshop Structure
        </h2>
        <div>
          <Timeline
            workshopParts={[
              {
                title: "Presentation",
                text: <h4 className="text-md lg:text-xl"> <b>35 minutes</b> of introduction to the topic and relevant real-world examples </h4>,
                image: presentation_image.src
              },
              {
                title: "Discussion / Q&A",
                text: <h4 className="text-md lg:text-xl"> <b> 5-10 minutes </b> of discussion or Q&A between the presentation and the interactive part</h4>,
                image: discussion_image.src
              },
              {
                title: "Interactive Part",
                text: <h4 className="text-md lg:text-xl"> <b> 45 minutes </b> of hands-on interactive individual or group work/discussion/coding/quizzes</h4>,
                image: interactive_image.src
              },
            ]}
          />
        </div>
      </Section>
      <Section className="bg-purple-950 text-white">
        <h2 className="mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-center text-3xl font-semibold uppercase tracking-widest text-transparent sm:text-5xl">
          Our Workshop Partners
        </h2>

        <Logos
          logos={[
            {
              src: nvidia_logo.src,
              alt: "nvidia",
              href: "https://www.nvidia.com/de-de/",
              width: 200,
            },
            {
              href: "https://www.microsoft.com/de-de/",
              src: microsoft_logo.src,
              alt: "Microsoft",
              width: 200,
            },
            {
              href: "https://www.accenture.com/de-de",
              src: accenture_logo.src,
              alt: "Accenture",
              width: 200,
            },
            {
              src: celonis_logo.src,
              alt: "celonis",
              href: "https://www.celonis.com/",
              width: 200,
            },
            {
              href: "https://www.airbus.com/en",
              src: airbus_logo.src,
              alt: "AIRBUS",
              width: 200,
            },
            {
              href: "https://www.deepset.ai/",
              src: deepset_logo.src,
              alt: "deepset",
              width: 200,
            },
            {
              src: ryverai_logo.src,
              alt: "RYVER AI",
              href: "https://ryver.ai/",
              width: 200,
            },
            {
              href: "https://www.digitalproductschool.io/",
              src: dps_logo.src,
              alt: "DIGITAL PRODUCT SCHOOl",
              width: 200,
            },
            {
              href: "https://www.ibm.com/de-de",
              src: ibm_logo.src,
              alt: "IBM",
              width: 200,
            },
            {
              src: appliedAI_logo.src,
              alt: "appliedAI",
              href: "https://www.appliedai.de/en/",
              width: 200,
            },
          ]}
        />
      </Section>
      <Section className="bg-purple-950 text-white">
        <h2 className="mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-3xl font-semibold uppercase tracking-widest text-transparent sm:text-5xl">
          How founders experience the E-Lab
        </h2>
        <p className="flex flex-col justify-start gap-2 text-3xl font-semibold text-yellow-500 sm:text-4xl">
          <span>you.</span>
          <span>yes you.</span>
          <span>you can build something great!</span>
        </p>

        <div className="my-12 grid gap-16 md:grid-cols-2">
          <p>
            Entrepreneurship means change and we believe that everyone is
            qualified to become an{" "}
            <span className="text-red-500">entrepreneur</span>. Think about your
            last big achievement, your perseverance over hurdles and what it
            took to succeed - you already proved that you are a real
            changemaker.
          </p>

          <p>
            Are you ready for your next step? Great. With our AI
            Entrepreneurship Lab we aim at making the founding of AI{" "}
            <span className="text-red-500">startups </span>
            accessible to everyone, including you. Bring your motivation and
            dedication, and we’ll provide the rest, striving to make founding as
            easy as possible for you.
          </p>
        </div>

        <div className="mt-16">
          <SnapSlider cards={testimonials} />
        </div>
      </Section>

      <Section className="bg-purple-950 text-white">
        <h2 className="mb-16 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-center text-3xl font-semibold uppercase tracking-widest text-transparent sm:text-5xl">
          Last AI E-Lab in numbers
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-24">
          <Stat description={"Workshops"} value={"17+"} />
          <Stat description={"Startups"} value={"16"} />
          <Stat description={"Winners"} value={"3"} />
        </div>

        <div className="mt-24">
          <h3 className="mb-16 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-center text-2xl font-medium uppercase tracking-widest text-transparent sm:text-4xl">
            Top 3 Startups have
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-24">
            <Stat description={"B2B customers"} value={"8"} />
            <Stat description={"Funding"} value={"165K"} />
            <Stat description={"Revenue"} value={"26K"} />
            <Stat description={"Hired employees"} value={"15"} />
          </div>
        </div>
      </Section>

      <Section className="bg-purple-950 text-white">
        <h2 className="mb-12 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-center text-3xl font-semibold uppercase tracking-widest text-transparent sm:text-5xl">
          Benefits
        </h2>

        <p className="mb-8 text-center text-4xl">
          We <span className="text-yellow-500">support </span>you in achieving
          your endeavors because your{" "}
          <span className="text-yellow-500">personal growth</span> is our{" "}
          <span className="text-yellow-500">goal</span>
        </p>
        <div className="my-24 flex flex-col gap-8 lg:px-24 xl:px-44">
          <p className="px-8 text-center">
            Are you passionate about AI and ready to make a real-world impact?
            TUM.ai invites you to join our AI E-Lab, a platform where
            visionaries, doers, and risk-takers with an interest in founding an
            AI-based startup come together to shape the future of AI. We value
            diversity, curiosity, and a commitment to learning and improvement.
          </p>
          <p className="px-8 text-center">
            As part of the AI E-Lab, you&apos;ll connect with a vibrant
            ecosystem of startups, industry partners, and like-minded peers.
            You&apos;ll have the opportunity to contribute to groundbreaking AI
            projects and drive positive social impact.
          </p>
          <p className="px-8 text-center">
            This is a part-time program and we expect you to provide us with
            intermediate deliverables on a weekly basis: pitches, MVPs, learning
            outcomes, sprint planning, etc. Our events are planned to take place
            in Munich, so you must be able join in person. The more you commit,
            the more you get.
          </p>
        </div>
        <Benefits
          benefits={[
            {
              icon: faCircleNodes,
              title: "Access to our network",
              text: "In order to shape something meaningful and have impact, knowledge alone does not suffice. You need a network of diverse people you can learn from and share your passion with. We therefore organise several events where you can meet and mingle with TUM.ai members, business and domain experts, startups, founders, investors and many more. Of course, you're also welcome to reach out at any time in between our scheduled events.",
            },
            {
              icon: faHandshakeSimple,
              title: "Count on our support",
              text: "We help you develop your final MVP and guide you through the program with individual coaching and tailored mentoring with founders and domain experts. You and your team have the opportunity to experience vivid discussions in our co-working spaces. We also provide you with software and hardware resources, and you can count on tech support.",
            },
            {
              icon: faBook,
              title: "Learn and grow",
              text: "Everyone has superpowers and we support you in using them to excel. With hands-on workshops we provide you with the knowledge to found your AI startup and encourage you to test it in a real-world setting. You’ll hear stories of other founders and have the possibility to learn from their experiences. Our program is customer-centric and feedback-oriented, emphasising the importance of listening and interacting with others for personal growth and success.",
            },
            {
              icon: faHandsHoldingCircle,
              title: "We are equity free",
              text: "Making AI and the founding process accessible to everyone is one of our missions at TUM.ai. We, therefore, do not charge any costs for the AI E-Lab and do not take any equity stake in your venture. Further, we don’t expect pre-seed readiness or any initial investment. The only investment you have to arrange is your time, eagerness and dedication.",
            },
          ]}
          color="yellow"
        />
      </Section>

      <Section className="bg-purple-950 text-center text-white">
        <Link
          className="rounded-full border-2 border-yellow-500 p-4 text-center text-center font-bold text-yellow-500"
          href="mailto:venture@tum-ai.com"
        >
          Become a partner
        </Link>
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
  function SnapSlider({ cards }) {
    return (
      <div className="scrollbar-hidden scrollbar-yellow flex snap-x space-x-8 overflow-x-auto pb-4">
        {cards.map((card) => (
          <div
            className="inline-flex min-h-[220px] min-w-[300px] snap-center align-middle sm:min-w-[400px]"
            key={`${card.name}-${card.text}`}
          >
            <Testimonials {...card} />
          </div>
        ))}
      </div>
    );
  }

  /* {
      /* This code is needed for the Mentors and Advisors, which will be added later on

    function SliderCard({imgSrc, name, text}) {
      return (
          <div className="min-w-sm relative h-full w-full overflow-hidden rounded-lg grayscale saturate-200">
            <Image src={imgSrc} alt={name} fill objectFit="cover"/>
            <div className="h-8 absolute bottom-0 w-full bg-black bg-opacity-80 p-2 text-white backdrop-blur">
              <h3 className="font-bold">{name}</h3>
              <p>{text}</p>
            </div>
          </div>
      );
    }


    } */
}
