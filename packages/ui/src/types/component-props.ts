export type ComponentProps<E extends React.ElementType, Variants> = Variants &
  React.ComponentProps<E> & {
    asChild?: boolean;
  };
