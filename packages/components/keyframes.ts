import { keyframes } from "./stitches.config";

export const pulse = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: "100%" },
});

export const spin = keyframes({
  to: { transform: "rotate(360deg)" },
});
