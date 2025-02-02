import { useState } from "react";

/**
 * Hook for copying text to the clipboard using the Clipboard API.
 * @returns An object with the state and function for copying text to the clipboard.
 */
export const useClipboard = () => {
  // State to track whether the text has been copied
  const [copied, setCopied] = useState<boolean>(false);

  /**
   * Function to copy text to the clipboard using the Clipboard API.
   * @param text - The text to be copied to the clipboard.
   */
  const copyText = async (text: string): Promise<void> => {
    try {
      // Use navigator.clipboard.writeText to copy text to the clipboard
      await navigator.clipboard.writeText(text);

      // Set the copied state to true
      setCopied(true);

      // Reset the copied state after a short delay
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      // Handle any errors that may occur during the copy operation
      console.error("Error copying text to clipboard:", error);
    }
  };

  // Return an object with the copied state and the copyText function
  return { copied, copyText };
};
