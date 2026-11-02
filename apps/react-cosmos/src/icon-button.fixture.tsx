"use client";

import { IconButton } from "@nayhoo/ui/icon-button";
import { useFixtureInput, useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [loading, setLoading] = useFixtureInput("loading", false);

  const [size] = useFixtureSelect("size", {
    options: ["1", "2", "3"],
  });

  const [variant] = useFixtureSelect("variant", {
    options: ["bordered", "ghost"],
  });

  const [round] = useFixtureInput("round", false);

  const handleOnClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <IconButton
      loading={loading}
      round={round}
      size={size}
      variant={variant}
      onClick={handleOnClick}
    ></IconButton>
  );
};
