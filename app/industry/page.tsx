import Logos from "@components/Logos";
import Tabs from "@components/ui/Tabs";
import Section from "@ui/Section";
import { partners_ip5, projects } from "data/industry";
import Image from "next/image";
import Link from "next/link";
import PictureHero from "@components/BannerHero";
import { bitter } from "@styles/fonts";
import { cx } from "class-variance-authority";
import { StudentsSection } from "./StudentsSection";
import { IndustrySection } from "./IndustrySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TUM.ai - Industry",
  description:
    "Work on real-world AI and Data solutions! 2250€ total compensation, 10 week working student arrangements, September 15th - end of November",
};

export default function Industry() {
  return (
    <>
      <PictureHero
        imageSrc="/assets/industry/header/pexels_googledeepmind_industry.jpg"
        titleImageSrc="/assets/industry/header/industry_header_no_date.svg"
        subtitle="Your stepping stone to a career in AI"
      />
      <Tabs
        tabs={{
          Students: <StudentsSection />,
          Industry: <IndustrySection />,
        }}
      />
      <Section>
        <h2 className={cx("mb-12 text-4xl font-semibold", bitter.className)}>
          Our partners from{" "}
          <span className="text-purple-600">Industry Phase 5.0</span>
        </h2>
        <Logos logos={partners_ip5} />
      </Section>
      <Section>
        <Image
          src="/assets/industry/header/test_header.svg"
          width={1775}
          height={795}
          alt="Industry Timeline"
          className="w-full"
        />
      </Section>
      <Section>
        <div className="justify-center sm:px-4">
          <h2 className={cx("mb-4 text-4xl font-semibold", bitter.className)}>
            Examples of previous AI Projects
          </h2>
          <p className="mb-8">
            Explore how our participants have created{" "}
            <span className="text-purple-600">measurable impact</span> in the
            past.
          </p>
          <div className="3xl:grid-cols-4 grid grid-cols-1 gap-14 lg:grid-cols-2 2xl:grid-cols-3">
            {projects.map((project, index) => (
              <div
                className="rounded-lg bg-white shadow-lg shadow-purple-800/10"
                key={index}
              >
                <div className="flex h-full flex-col">
                  <div className="relative h-60 w-full grayscale saturate-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="rounded-t-lg object-cover"
                    />
                  </div>
                  <div className="rounded-b-lg bg-white p-6 text-purple-950">
                    <h1 className="mb-2 text-lg font-semibold">
                      {project.title}
                    </h1>
                    <p className="mb-2 flex-grow text-sm">
                      {project.description.map((section, index) => (
                        <span key={index}>
                          {section.text && `${section.text} `}

                          {!!section.link &&
                            section.link.map((link, i) => (
                              <>
                                <a
                                  key={i}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-purple-700 underline"
                                >
                                  {link.displayText}
                                </a>
                                {i < section.link!.length - 1 && ", "}
                              </>
                            ))}
                          {section.moreText && ` ${section.moreText}`}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="mt-auto flex flex-col items-center justify-center space-y-3 px-6 pb-6 sm:flex-row sm:justify-start sm:space-y-0 md:space-x-2">
                    <Link href={project.organizationLink}>
                      <div className="min-w-30 flex max-w-max cursor-pointer items-center justify-center rounded-full bg-blue-700 px-4 py-1 text-purple-50 transition-colors duration-300 hover:bg-blue-400 hover:shadow-md">
                        {project.organization}
                      </div>
                    </Link>
                    <div className="flex min-w-min max-w-max items-center justify-center px-4 py-1 text-gray-400">
                      {project.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
