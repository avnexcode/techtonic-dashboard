import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("font-heading tracking-tight relative", {
  variants: {
    variant: {
      default: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      muted: "text-muted-foreground",
      destructive: "text-destructive",
    },
    size: {
      h1: "text-4xl font-extrabold lg:text-5xl",
      h2: "text-3xl font-bold lg:text-4xl",
      h3: "text-2xl font-bold lg:text-3xl",
      h4: "text-xl font-semibold lg:text-2xl",
      h5: "text-lg font-semibold lg:text-xl",
      h6: "text-base font-semibold lg:text-lg",
    },
    alignment: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "h1",
    alignment: "left",
    weight: "bold",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { className, variant, size, alignment, weight, as = "h1", ...props },
    ref,
  ) => {
    const Component = as;

    return (
      <Component
        ref={ref}
        className={cn(
          headingVariants({
            variant,
            size,
            alignment,
            weight,
            className,
          }),
        )}
        {...props}
      />
    );
  },
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
