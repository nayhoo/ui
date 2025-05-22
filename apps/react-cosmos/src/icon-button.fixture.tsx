"use client";

import { IconButton } from "@nayhoo/ui/icon-button";
import { useFixtureInput, useFixtureSelect } from "react-cosmos/client";

// eslint-disable-next-line react/display-name
export default () => {
  const [loading, setLoading] = useFixtureInput("loading", false);

  const [size] = useFixtureSelect("size", {
    options: ["1", "2", "3", "4"],
  });

  const [variant] = useFixtureSelect("variant", {
    options: ["ghost", "outline"],
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
    >
      <svg
        clipRule="evenodd"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path
          d="m3.508 6.726c1.765-2.836 4.911-4.726 8.495-4.726 5.518 0 9.997 4.48 9.997 9.997 0 5.519-4.479 9.999-9.997 9.999-5.245 0-9.553-4.048-9.966-9.188-.024-.302.189-.811.749-.811.391 0 .715.3.747.69.351 4.369 4.012 7.809 8.47 7.809 4.69 0 8.497-3.808 8.497-8.499 0-4.689-3.807-8.497-8.497-8.497-3.037 0-5.704 1.597-7.206 3.995l1.991.005c.414 0 .75.336.75.75s-.336.75-.75.75h-4.033c-.414 0-.75-.336-.75-.75v-4.049c0-.414.336-.75.75-.75s.75.335.75.75z"
          fillRule="nonzero"
        />
      </svg>
    </IconButton>
  );
};
