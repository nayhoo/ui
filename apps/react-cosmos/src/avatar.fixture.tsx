"use client";

import { Avatar } from "@nayhoo/ui/avatar";
import { useFixtureInput, useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [alt] = useFixtureInput("alt", "Sad Clown Girl. @stickwhack");

  const [fallback] = useFixtureInput("fallback", "S");

  const [inactive] = useFixtureInput("inactive", false);

  const [interactive] = useFixtureInput("interactive", false);

  const [shape] = useFixtureSelect("shape", {
    options: ["square", "circle"],
  });

  const [size] = useFixtureSelect("size", {
    options: ["1", "2", "3", "4", "5", "6"],
  });

  const [src] = useFixtureInput(
    "src",
    "https://www.stickwhack.com/static/media/Mask%20Group%208.3146f06ac072ddba9fa7.png",
  );

  const [status] = useFixtureSelect("status", {
    options: ["gray", "red", "blue", "green"],
  });

  return (
    <Avatar
      alt={alt}
      fallback={fallback}
      inactive={inactive}
      interactive={interactive}
      shape={shape}
      size={size}
      src={src}
      status={status}
    />
  );
};
