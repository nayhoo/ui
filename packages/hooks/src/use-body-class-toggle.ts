import { useEffect } from "react";

/**
 * A React hook that toggles a class on the document.body based on a condition.
 *
 * @param className - The class name to toggle on the document.body.
 * @param condition - The condition to determine whether to add or remove the class.
 */
export const useBodyClassToggle = (
  className: string,
  condition: boolean,
): void => {
  useEffect(() => {
    // Get a reference to the document.body
    const { body } = document;

    // Add or remove the specified class based on the condition
    if (condition) {
      body.classList.add(className);
    } else {
      body.classList.remove(className);
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      body.classList.remove(className);
    };
  }, [className, condition]); // Re-run effect when className or condition changes
};
