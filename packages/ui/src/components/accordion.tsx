import {
  accordion,
  accordionContent,
  accordionContentText,
  accordionHeader,
  accordionItem,
  accordionTrigger,
  chevron,
} from "@/theme/styles/accordion.css";
import { mergeClasses } from "@/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

type AccordionProps =
  | AccordionPrimitive.AccordionSingleProps
  | AccordionPrimitive.AccordionMultipleProps;

export const Accordion = ({ children, ...props }: AccordionProps) => {
  return (
    <AccordionPrimitive.Root
      {...props}
      className={mergeClasses(accordion, props.className)}
    >
      {children}
    </AccordionPrimitive.Root>
  );
};

export const AccordionContent = ({
  children,
  ...props
}: AccordionPrimitive.AccordionContentProps) => (
  <AccordionPrimitive.Content
    {...props}
    className={mergeClasses(accordionContent, props.className)}
  >
    <div className={accordionContentText}>{children}</div>
  </AccordionPrimitive.Content>
);

export const AccordionItem = ({
  children,
  ...props
}: AccordionPrimitive.AccordionItemProps) => (
  <AccordionPrimitive.Item
    {...props}
    className={mergeClasses(accordionItem, props.className)}
  >
    {children}
  </AccordionPrimitive.Item>
);

export const AccordionTrigger = ({
  children,
  ...props
}: AccordionPrimitive.AccordionTriggerProps) => (
  <AccordionPrimitive.Header className={accordionHeader}>
    <AccordionPrimitive.Trigger
      {...props}
      className={mergeClasses(accordionTrigger, props.className)}
    >
      {children}

      <ChevronDownIcon aria-hidden className={chevron} />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);
