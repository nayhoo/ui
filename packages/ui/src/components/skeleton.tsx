import { skeleton, skeletonStandalone } from "@/theme/styles/skeleton.css";
import { mergeClasses } from "@/utils/merge-classes";
import React from "react";

export type SkeletonProps = React.ComponentProps<"div"> & {
  loaded?: boolean;
};

export const Skeleton = ({
  children,
  className,
  loaded = false,
  ...props
}: SkeletonProps) => {
  if (loaded) {
    return <>{children}</>;
  }

  if (React.isValidElement(children)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const child = children as React.ReactElement<any>;

    return React.cloneElement(child, {
      "aria-busy": true,
      tabIndex: -1,
      ...props,
      className: mergeClasses(child.props.className, skeleton, className),
    });
  }

  return (
    <div
      aria-busy="true"
      className={mergeClasses(skeleton, skeletonStandalone, className)}
      {...props}
    >
      {children && <span>{children}</span>}
    </div>
  );
};
