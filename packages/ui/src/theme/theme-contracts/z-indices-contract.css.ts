import { createThemeContract } from "@vanilla-extract/css";

export const zIndicesContract = createThemeContract({
  /**
   * Tooltips
   * @examples Small hint overlays
   */
  1: null,
  /**
   * Dropdowns
   * @examples Dropdown menus, popovers
   */
  2: null,
  /**
   * Sticky elements
   * @examples Sticky sidebars, floating buttons
   */
  3: null,
  /**
   * Navigation
   * @examples Fixed/sticky nav-bars, headers
   */
  4: null,
  /**
   * Modals
   * @examples Modal dialogs, full overlays
   */
  5: null,
  /**
   * Notification
   * @examples Toasts
   */
  6: null,
  max: null,
});
