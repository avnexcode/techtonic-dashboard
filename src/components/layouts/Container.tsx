import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export const Container = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn("container flex h-full w-full flex-col", className)}
      {...props}
    >
      {children}
    </section>
  );
});

Container.displayName = "Container";
