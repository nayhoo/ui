import { AspectRatio, AspectRatioProps } from "@nayhoo/ui/aspect-ratio";
import { Image } from "@nayhoo/ui/image";

const AspectRatioFixture = (props: AspectRatioProps) => (
  <AspectRatio {...props}>
    <Image
      alt="A very tall building in the middle of a foggy day by Nick Night"
      src="https://images.unsplash.com/photo-1643552841160-a8b51beb92c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      style={{ height: "100%", objectFit: "cover", width: "100%" }}
    />
  </AspectRatio>
);

export default {
  default: () => <AspectRatioFixture />,
  "classic photo": () => <AspectRatioFixture ratio={3 / 2} />,
  anamorphic: () => <AspectRatioFixture ratio={2.39 / 1} />,
  flat: () => <AspectRatioFixture ratio={1.85 / 1} />,
  standard: () => <AspectRatioFixture ratio={4 / 3} />,
  ultrawide: () => <AspectRatioFixture ratio={21 / 9} />,
  vertical: () => <AspectRatioFixture ratio={9 / 16} />,
  widescreen: () => <AspectRatioFixture ratio={16 / 9} />,
};
