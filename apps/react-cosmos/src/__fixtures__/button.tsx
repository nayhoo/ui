import { Button } from "@nayhoo/ui";
import { useFixtureInput, useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [color] = useFixtureSelect("color", {
    options: ["primary", "secondary", "error"],
  });

  const [fullWidth] = useFixtureInput("fullWidth", false);

  const [loading, setLoading] = useFixtureInput("loading", false);

  const [shape] = useFixtureSelect("shape", {
    options: ["square", "pill"],
  });

  const [size] = useFixtureSelect("size", {
    options: ["1", "2", "3"],
  });

  const [variant] = useFixtureSelect("variant", {
    options: ["default", "ghost", "outline"],
  });

  const handleOnClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Button
      color={color}
      fullWidth={fullWidth}
      loading={loading}
      shape={shape}
      size={size}
      variant={variant}
      onClick={handleOnClick}
    >
      Press me
    </Button>
  );
};
