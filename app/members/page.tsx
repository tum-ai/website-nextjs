import { bitter } from "@styles/fonts";
import Section from "@ui/Section";
import { cx } from "class-variance-authority";
import Hero from "@components/Hero";
import type { Metadata } from "next";
import MemberFlipCardComponent from "./memberFlipCard";

export const metadata: Metadata = {
  title: "TUM.ai - Members",
};

export default function Members() {
  return (
    <>
      <Hero
        imageSrc={"/assets/tu_cropped.jpg"}
        title="Innovative & Passionate"
        subtitle="Who is behind the success of our initiative?"
      />

      <Section>
        <h2 className={cx("mb-12 text-4xl font-semibold", bitter.className)}>
          The TUM.ai Member Journey
        </h2>
        <div className="mb-8">
          <p>
            All of our active members go though an exiting journey, involving project work, contibuting to AI innovation, building of TUMai community, and more. There is always room for growth and development, and our community supports its members in every step of the way.
          </p>
        </div>
        <MemberFlipCardComponent />
      </Section>
    </>
  );
}
