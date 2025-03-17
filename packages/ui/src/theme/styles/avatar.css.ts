import { style } from "@vanilla-extract/css";

export const avatarImage = style({
  display: "flex",
  objectFit: "cover",
  boxSizing: "border-box",
  height: "100%",
  verticalAlign: "middle",
  width: "100%",
});
