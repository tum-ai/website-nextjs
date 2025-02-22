"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import * as Accordion from "@radix-ui/react-accordion";
import { cx } from "class-variance-authority";

interface FAQProps {
  questions: { question: string; answer: string }[];
}

const FAQ = ({ questions }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<string | undefined>();

  return (
    <Accordion.Root
      type="single"
      className="AccordionRoot grid grid-cols-1 gap-6 sm:grid-cols-2"
      collapsible
      onValueChange={(value) => setOpenIndex(value)}
    >
      {questions.map((question) => (
        <Accordion.Item
          className="AccordionItem"
          value={question.question}
          key={`${question.question}`}
        >
          <Accordion.Header>
            <Accordion.Trigger
              className="AccordionTrigger focus:shadow-outline-purple flex w-full justify-between gap-4
            rounded-lg bg-purple-900 px-4 py-3 text-left text-lg font-medium text-white focus:outline-none"
            >
              <span>{question.question}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                aria-hidden
                className={cx("transition-transform duration-300 ease-in-out", {
                  "rotate-180": openIndex === question.question,
                  "rotate-0": openIndex !== question.question,
                })}
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-4 py-3">
            <p className="text-white">{question.answer}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default FAQ;
