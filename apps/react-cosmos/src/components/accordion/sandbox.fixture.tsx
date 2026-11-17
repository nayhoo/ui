"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@nayhoo/ui/accordion";
import { useFixtureInput, useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [type] = useFixtureSelect("type", {
    options: ["single", "multiple"],
  });

  const [collapsible] = useFixtureInput("collapsible", true);

  return (
    <Accordion type={type} collapsible={collapsible}>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is an accordion?</AccordionTrigger>
        <AccordionContent>
          An accordion is a vertically stacked set of interactive headings that
          each contain a title, content snippet, or thumbnail representing a
          section of content. The headings function as controls that enable
          users to reveal or hide their associated sections of content.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>How does it work?</AccordionTrigger>
        <AccordionContent>
          When a user clicks on a heading, the associated section of content
          either expands or collapses, allowing users to navigate through
          different sections of content without having to scroll through a long
          page.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>When to use accordions?</AccordionTrigger>
        <AccordionContent>
          Accordions are useful when you have a lot of content to display in a
          limited space, such as FAQs, product details, or any information that
          can be organized into collapsible sections.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Accessibility considerations</AccordionTrigger>
        <AccordionContent>
          Accordions should be keyboard accessible, with proper ARIA attributes,
          and should provide clear visual indicators for expanded/collapsed
          states. Screen readers should be able to navigate through the
          accordion items and understand their current state.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
