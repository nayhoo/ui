import {
  accordion,
  accordionContent,
  accordionContentText,
  accordionHeader,
  accordionItem,
  accordionTrigger,
  chevron,
} from "@/theme/styles/accordion.css";
import { mergeClasses } from "@/utils/merge-classes";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export type AccordionProps =
  | AccordionPrimitive.AccordionSingleProps
  | AccordionPrimitive.AccordionMultipleProps;

export const Accordion = ({ className, ...props }: AccordionProps) => (
  <AccordionPrimitive.Root
    {...props}
    className={mergeClasses(accordion, className)}
  />
);

export type AccordionContentProps = AccordionPrimitive.AccordionContentProps;

export const AccordionContent = ({
  children,
  className,
  ...props
}: AccordionPrimitive.AccordionContentProps) => (
  <AccordionPrimitive.Content
    {...props}
    className={mergeClasses(accordionContent, className)}
  >
    <div className={accordionContentText}>{children}</div>
  </AccordionPrimitive.Content>
);

export type AccordionItemProps = AccordionPrimitive.AccordionItemProps;

export const AccordionItem = ({
  className,
  ...props
}: AccordionPrimitive.AccordionItemProps) => (
  <AccordionPrimitive.Item
    {...props}
    className={mergeClasses(accordionItem, className)}
  />
);

export type AccordionTriggerProps = AccordionPrimitive.AccordionTriggerProps;

export const AccordionTrigger = ({
  children,
  className,
  ...props
}: AccordionPrimitive.AccordionTriggerProps) => (
  <AccordionPrimitive.Header className={accordionHeader}>
    <AccordionPrimitive.Trigger
      {...props}
      className={mergeClasses(accordionTrigger, className)}
    >
      {children}

      <ChevronDownIcon aria-hidden className={chevron} />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);
