"use client";

import Section from "@components/ui/Section";
import { bitter } from "@styles/fonts";
import { cx } from "class-variance-authority";
import Image from "next/image";
import Button from "@components/ui/Button";
import Dialog from "@components/ui/Dialog";

export const IndustrySection = () => {
  return (
    <Section className="flex animate-fadeIn justify-center lg:flex-col">
      <div className="rounded-3xl shadow-purple-800/10 sm:bg-gray-50 sm:p-14 sm:shadow-lg">
        <h2 className={cx("mb-8 text-4xl font-semibold", bitter.className)}>
          Industry Phase 8.0 starting in Spring 2025!
        </h2>
        <div className="grid grid-cols-1 items-center gap-4 xl:grid-cols-2 xl:gap-16">
          <div>
            <p className="mb-8">
              We manage Munich&apos;s top pool of
              <span className="font-bold text-purple-600"> AI talent </span>
              and offer affordable, high-quality solutions without any long-term
              liabilities!
            </p>
            <Dialog
              trigger={<Button>Let&apos;s Connect!</Button>}
              title="Let's connect!"
              body={
                <>
                  <p className="text-sm text-gray-700">
                    If you are interested in partnering with TUM.ai as a
                    sponsor, Makeathon challenge-setter, Industry project
                    partner, Workshop host, etc. please reach out to our
                    &quot;Partners & Sponsors&quot; department.
                  </p>
                  <p className="text-xl font-medium text-purple-500">
                    <a href="mailto:partners@tum-ai.com">partners@tum-ai.com</a>
                  </p>
                  <p className="text-sm text-gray-500">
                    TUM.ai Student Initiative
                    <br />
                    Arcisstraße 21.
                    <br />
                    80333 Munich
                  </p>
                </>
              }
              hasCloseButton
            />
          </div>
          <div className="flex flex-col items-center space-y-6 py-4 xl:items-start">
            <Image
              src={"/assets/industry/freearifiat.png"}
              className="rounded-xl shadow-lg shadow-purple-800/20"
              alt="Ferrari for Fiat"
              width={500}
              height={100}
            />
          </div>
        </div>

        <div className="mt-16 ">
          <h3 className={cx("mb-8 text-3xl font-semibold")}>
            What is an <span className="text-purple-600">AI Project</span>?
          </h3>
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-16">
            <div>
              <h4 className="text-xl font-semibold text-purple-600">
                Project Statement
              </h4>
              <p>
                Present your AI-related problem – we&apos;ll help define the
                ideal project:
              </p>
              <ol className="list-inside list-disc space-y-2 py-4 ">
                <li className="pl-2">Building proof of concept</li>
                <li className="pl-2">Conducting research topics</li>
                <li className="pl-2">Developing prototypes</li>
                <li className="pl-2">Improving products/processes</li>
              </ol>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-600">
                Outstanding Solutions
              </h4>
              <p className="max-w-lg py-2">
                We’ll advertise your project to a wide pool of talented students
                and present you with the most outstanding candidates.
              </p>
              <p className="max-w-lg py-2">
                A team of multi-disciplinary students will work exclusively for
                your company as working students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}