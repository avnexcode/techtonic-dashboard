/**
 * Handles input events for form elements with specific validation and formatting rules.
 *
 * @param event - The type of input event to handle ('onChange' or 'onPaste')
 * @param type - The validation/formatting type to apply ('number' for numeric values)
 * @param e - The event object from the input element
 *
 * @example
 * ```tsx
 * // Handle numeric input on change
 * <input onChange={(e) => inputHandle('onChange', 'number', e)} />
 *
 * // Handle numeric input on paste
 * <input onPaste={(e) => inputHandle('onPaste', 'number', e)} />
 * ```
 */
type InputHandleEvent = "onChange" | "onPaste";
type InputHandleType = "number";

export const inputHandle = (
  event: InputHandleEvent,
  type: InputHandleType,
  e:
    | React.ChangeEvent<HTMLInputElement>
    | React.ClipboardEvent<HTMLInputElement>,
) => {
  if (event === "onChange" && type === "number") {
    const target = e.target as HTMLInputElement;
    const numericValue = target.value.replace(/\D/g, "");
    target.value = numericValue;
  }

  if (event === "onPaste" && type === "number") {
    e.preventDefault();
    const clipboardEvent = e as React.ClipboardEvent<HTMLInputElement>;
    const pastedData = clipboardEvent.clipboardData.getData("text");
    const numericValue = pastedData.replace(/\D/g, "");
    const target = e.target as HTMLInputElement;
    target.value = numericValue;
    target.dispatchEvent(new Event("change", { bubbles: true }));
  }
};

/**
 * Parses and formats input values according to specified rules.
 *
 * @param type - The type of parsing to perform:
 *               - 'string-to-number': Converts string to number, removing non-numeric characters
 *               - 'string-as-number': Returns string with only numeric characters
 * @param value - The input string to parse
 * @returns The parsed value according to the specified type
 *
 * @example
 * ```tsx
 * // Convert string to number
 * const num = inputParse('string-to-number', '123abc'); // Returns: 123
 *
 * // Get numeric characters as string
 * const str = inputParse('string-as-number', '123abc'); // Returns: "123"
 * ```
 */
type InputParseType = "string-to-number" | "string-as-number";

export const inputParse = (type: InputParseType, value: string) => {
  switch (type) {
    case "string-to-number":
      return parseInt(value.replace(/\D/g, "")) || 0;
    case "string-as-number":
      return value.replace(/\D/g, "");
    default:
      return value;
  }
};
