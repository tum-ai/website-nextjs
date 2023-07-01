import Logos from "@components/Logos";
import Button from "@components/ui/Button";
import Section from "@components/ui/Section";
import VerticalCards from "components/VerticalCards";
import { partners } from "data/industry";
import Image from "next/image";
import MartinTalk from "../public/assets/partners/martin_talk.jpg";

export default function Index() {
  return (
    <>
      <Header />
      <Section className="">
        <VerticalCards
          data={[
            {
              img: "/assets/home_img1.jpg",
              title: "AI Academy and educational offers",
              text: "a series of advanced AI workshops, featuring hands-on coding tutorials, provided by exciting tech companies, open for everyone!",
              subText:
                "sponsored online course certificates and company visits are exclusive to TUM.ai members",
              body: (
                <div className="m-auto flex w-fit flex-col items-center space-y-2">
                  <Button
                    link
                    href={"https://education.tum-ai.com/"}
                    className="bg-gray-400"
                  >
                    Learn more
                  </Button>
                  <Button
                    link
                    href={"https://www.eventbrite.de/o/tumai-31793295023"}
                    className="bg-purple-500"
                  >
                    Apply now
                  </Button>
                </div>
              ),
            },
            {
              img: "/assets/home_img2.png",
              title: "Makeathon Competitions",
              text: "AI product development Hackathon, 48 hours to solve challenges by our sponsors, open for tech and business students, online/in-person hybrid",
              subText: "applications closed, finished",
              body: (
                <div className="m-auto flex w-fit flex-col items-center space-y-2">
                  <Button
                    link
                    href={"https://makeathon.tum-ai.com/"}
                    className="bg-gray-400"
                  >
                    Learn more
                  </Button>
                  <Button
                    link
                    href={"https://makeathon23.tum-ai.com/apply"}
                    className="bg-gray-500"
                    disabled
                  >
                    Apply now
                  </Button>
                </div>
              ),
            },
            {
              img: "/assets/home_img3.png",
              title: "Industry Project Cooperations",
              text: "Teams of 4x paid working students, deployed to implement data-driven solutions and consult partner companies, over 10 weeks time-frame",
              subText: "applications closed, currently ongoing",
              body: (
                <div className="m-auto flex w-fit flex-col items-center space-y-2">
                  <Button
                    link
                    href={"https://www.tum-ai.com/industry-projects.html"}
                    className="bg-gray-400"
                  >
                    Learn more
                  </Button>
                  <Button
                    link
                    href={"https://industry.tum-ai.com/apply"}
                    className="bg-gray-500"
                    disabled
                  >
                    Apply now
                  </Button>
                </div>
              ),
            },
            {
              img: "/assets/home_img4.jpg",
              title: "AI E-Lab Entrepreneurship",
              text: `StartUp incubation program for students who are interested in founding AI Ventures, access TUM.ai's network to boost your vision`,
              subText: "applications closed, currently ongoing",
              body: (
                <div className="m-auto flex w-fit flex-col items-center space-y-2">
                  <Button
                    link
                    href={"https://aielab.tum-ai.com/"}
                    className="bg-gray-400"
                  >
                    Learn more
                  </Button>
                  <Button
                    link
                    href={"https://aielab.tum-ai.com/"}
                    className="bg-gray-500"
                    disabled
                  >
                    Apply now
                  </Button>
                </div>
              ),
            },
          ]}
        />
      </Section>
      <Content1 />
      <div className="relative h-[450px] w-full bg-blend-overlay">
        <div className="bg-primary-500 absolute z-10 h-full w-full opacity-20"></div>
        <Image
          src={"/assets/aibootcamp.jpg"}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <Content2 />
      <Logos
        title={
          <h3>
            Partners{" "}
            <span className="text-2xl text-purple-500">
              we have collaborated
            </span>{" "}
            with
          </h3>
        }
        data={partners}
      />
      <Logos title={<h3>Partners Initiatives</h3>} data={partners} />
    </>
  );
}

function Content1() {
  return (
    <Section>
      {/* title */}
      <h2 className="text-uppercase w-full text-center text-4xl font-bold">
        With over 170 active members, TUM.ai is{" "}
        <span className="text-purple-500">{`Germany's leading AI student initiative`}</span>{" "}
        , located in Munich.
      </h2>

      <hr className="my-16 border-gray-500" />

      <div className="grid gap-16 lg:grid-cols-2">
        {/* image */}
        <div className="relative h-[450px] w-full rounded bg-blend-overlay">
          <div className="absolute z-10 h-full w-full bg-purple-500 opacity-20"></div>
          <Image
            src={"/assets/aibootcamp.jpg"}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        {/* text */}
        <div className="mb-4 space-y-4">
          <p className="text-xl font-bold">
            Get access to our{" "}
            <span className="text-[#a450e6]">
              exclusive pre-selected talent pool
            </span>{" "}
            of highly qualified Software/Data Engineers and AI Strategists.
          </p>

          <div className="space-y-4">
            <p className="text-xl">
              "Since founded in 2020,{" "}
              <span className="text-primary-500 font-bold">
                TUM.ai's Vision
              </span>{" "}
              is to connect students and all relevant stakeholders to facilitate
              the application of AI across domains and drive positive societal
              impact through inter-disciplinary projects."
            </p>
            <p>
              Together with our highly-talented members, we run data science
              projects with industry, startup & VC partners, organize workshops
              and our "Makeathon" AI-product development competitions. We thrive
              to deploy AI solutions into new fields and industries! Do not
              hesitate to reach out to us, we are looking forward to ambitious
              collaborations.{" "}
            </p>
            <p>
              Under the Motto "
              <span className="text-primary-500 font-bold">
                Connect-Execute-Learn
              </span>
              " we aim at lowering the entry-bar to AI-creation and -usage for
              people of every domain by establishing a platform to make
              practical experience through a diverse set of applied AI projects.
              We therefore educate and connect students from diverse backgrounds
              to incentivize new interdisciplinary AI projects and push the
              creation and usage of applicable and safe AI in all domains.{" "}
            </p>
          </div>
        </div>
        {/* card */}
        <div className="flex flex-col items-center space-y-2 rounded bg-gray-100 p-8 shadow">
          <p className="text-center">
            <span className="text-primary-500 font-bold">
              Interested in joining TUM.ai?{" "}
            </span>
            Visit our Transparency Page to learn more! (application phase ended
            for this semester)
          </p>
          <div className="m-auto flex w-fit flex-col items-center space-x-0 space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
            <Button
              link
              href={"https://www.tum-ai.com/members.html"}
              intent="purple"
            >
              Meet our Members
            </Button>
            <Button link href={"https://join-us.tum-ai.com/"} intent="purple">
              Learn more!
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Content2() {
  return (
    <Section background="inverted">
      <h2 className="text-uppercase w-full text-center text-4xl font-bold text-white">
        We connect <span className="text-[#a450e6]">stellar</span> Students and
        Companies
      </h2>

      <hr className="my-16 border-gray-500" />

      <div className="grid gap-4 md:grid-cols-2">
        <div className="mb-4 space-y-4">
          <p className="text-xl font-bold">
            Get access to our{" "}
            <span className="text-[#a450e6]">
              exclusive pre-selected talent pool
            </span>{" "}
            of highly qualified Software/Data Engineers and AI Strategists.
          </p>

          <p>
            Join TUM.ai as a sponsor or cooperation partner of our non-profit
            student initiative. We are excited about engaging with your company
            via workshops, speaker events or as a challenge setter for our
            Makeathon competitions. If you are looking for a high-quality, but
            affordable team of Data Scientists and AI Strategists to solve
            problems for your firm, consider becoming a cooperation partner for
            TUM.ai's industry project format. (Student Data Consultancy)
          </p>

          <div className="flex w-fit flex-col items-start space-y-4 lg:flex-row lg:items-center lg:space-x-2 lg:space-y-0">
            <Button
              link
              href={"https://www.tum-ai.com/forPartners.html"}
              className="bg-gray-500"
            >
              Partner's of TUM.ai
            </Button>
            <Button
              link
              href={"https://join-us.tum-ai.com/"}
              className="bg-primary-500"
            >
              Apply as a partner
            </Button>
          </div>
        </div>
        <div className="relative h-[300px] w-full">
          <Image
            src={MartinTalk}
            alt="Martin talk"
            fill
            className="rounded object-cover"
          />
        </div>
      </div>
    </Section>
  );
}

function Header() {
  return (
    <div className="flex h-screen bg-blue-500 px-8 py-16">
      <div className="m-auto space-y-8 lg:inline-block">
        <Image
          src={"/assets/logo_new_white_standard.png"}
          alt="Logo"
          width={450}
          height={100}
        />
        <div className="m-auto flex w-fit flex-col items-center justify-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
          <Button
            link
            href={"https://www.tum-ai.com/forPartners.html"}
            intent="purple"
          >
            Become a Partner
          </Button>
          <Button link href={"https://join-us.tum-ai.com/"} intent="purple">
            Become a Member
          </Button>
        </div>
      </div>
    </div>
  );
}
