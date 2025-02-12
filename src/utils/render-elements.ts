import * as React from "react";

/**
 * Props for RenderElements component
 * @template T - The type of items in the array
 */
type RenderElementsProps<T> = {
  /** Array of items to render */
  of?: T[] | null;
  /** Render function for each item */
  render: (item: T, index: number) => React.ReactElement;
  /** Optional key extractor function */
  keyExtractor?: (item: T, index: number) => string | number;
  /** Optional fallback element when array is empty */
  fallback?: React.ReactNode;
};

/**
 * A utility function to render an array of items with proper key handling
 * @template T - The type of items in the array
 * @param props - The RenderElements props
 * @returns An array of React elements
 */
export const renderElements = <T>({
  of = [],
  render,
  keyExtractor,
  fallback,
}: RenderElementsProps<T>): React.ReactNode => {
  // Handle null or undefined array
  if (!of) return fallback ?? null;

  // Handle non-array input
  if (!Array.isArray(of)) {
    console.warn('renderElements: "of" prop must be an array');
    return fallback ?? null;
  }

  // Handle empty array
  if (of.length === 0) return fallback ?? null;

  return of.map((item, index) => {
    const element = render(item, index);

    // Type guard to ensure we're dealing with a ReactElement
    if (!React.isValidElement(element)) {
      console.warn(
        "renderElements: render function must return a valid React element",
      );
      return null;
    }

    // If the element already has a key, use it
    if (element.key != null) {
      return element;
    }

    // If keyExtractor is provided, use it
    if (keyExtractor) {
      const key = keyExtractor(item, index);
      return React.cloneElement(element, { key });
    }

    // Fallback to using index as key with warning in development
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "renderElements: No key provided for element. Consider providing a keyExtractor or adding keys to rendered elements.",
        { item, index },
      );
    }

    return React.cloneElement(element, { key: index });
  });
};
