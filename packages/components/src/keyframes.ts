import { keyframes } from "./stitches.config";

export const hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

export const pulse = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: "100%" },
});

export const spin = keyframes({
  to: { transform: "rotate(360deg)" },
});
