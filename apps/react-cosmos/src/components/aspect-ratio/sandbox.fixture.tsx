"use client";

import { AspectRatio } from "@nayhoo/ui/aspect-ratio";
import { Image } from "@nayhoo/ui/image";
import { useFixtureInput } from "react-cosmos/client";

const Img = () => (
  <Image
    alt="A very tall building in the middle of a foggy day by Nick Night"
    src="https://images.unsplash.com/photo-1643552841160-a8b51beb92c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    style={{ height: "100%", objectFit: "cover", width: "100%" }}
  />
);

// eslint-disable-next-line react/display-name
export default () => {
  const [ratio] = useFixtureInput("ratio", 1);

  return (
    <AspectRatio ratio={ratio}>
      <Img />
    </AspectRatio>
  );
};
