"use client";

import { Avatar } from "@nayhoo/ui/avatar";
import { useFixtureInput, useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [alt] = useFixtureInput("alt", "Ninten");

  const [fallback] = useFixtureInput("fallback", "N");

  const [inactive] = useFixtureInput("inactive", false);

  const [interactive] = useFixtureInput("interactive", false);

  const [shape] = useFixtureSelect("shape", {
    options: ["square", "circle"],
  });

  const [size] = useFixtureSelect("size", {
    options: ["1", "2", "3"],
  });

  const [src] = useFixtureInput(
    "src",
    "https://static.wikia.nocookie.net/earthbound/images/9/90/Ninten_clay_model.png/revision/latest?cb=20190101193139",
  );

  return (
    <Avatar
      alt={alt}
      fallback={fallback}
      inactive={inactive}
      interactive={interactive}
      shape={shape}
      size={size}
      src={src}
    />
  );
};
