"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@nayhoo/ui/accordion";
import { Heading } from "@nayhoo/ui/heading";
import { Text } from "@nayhoo/ui/text";
import { useFixtureInput, useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [type] = useFixtureSelect("type", {
    options: ["single", "multiple"],
  });

  const [collapsible] = useFixtureInput("collapsible", true);

  return (
    <div style={{ maxWidth: "600px", margin: "20px" }}>
      <Heading level="2" style={{ marginBottom: "20px" }}>
        Accordion Component
      </Heading>

      <Accordion type={type} collapsible={collapsible}>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Heading level="4">What is an accordion?</Heading>
          </AccordionTrigger>
          <AccordionContent>
            <Text>
              An accordion is a vertically stacked set of interactive headings
              that each contain a title, content snippet, or thumbnail
              representing a section of content. The headings function as
              controls that enable users to reveal or hide their associated
              sections of content.
            </Text>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            <Heading level="4">How does it work?</Heading>
          </AccordionTrigger>
          <AccordionContent>
            <Text>
              When a user clicks on a heading, the associated section of content
              either expands or collapses, allowing users to navigate through
              different sections of content without having to scroll through a
              long page.
            </Text>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            <Heading level="4">When to use accordions?</Heading>
          </AccordionTrigger>
          <AccordionContent>
            <Text>
              Accordions are useful when you have a lot of content to display in
              a limited space, such as FAQs, product details, or any information
              that can be organized into collapsible sections.
            </Text>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            <Heading level="4">Accessibility considerations</Heading>
          </AccordionTrigger>
          <AccordionContent>
            <Text>
              Accordions should be keyboard accessible, with proper ARIA
              attributes, and should provide clear visual indicators for
              expanded/collapsed states. Screen readers should be able to
              navigate through the accordion items and understand their current
              state.
            </Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
