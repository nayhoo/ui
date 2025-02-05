import { Box, Button } from "@nayhoo/ui";

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <Box
      asChild
      onClick={() =>
        alert("onClick event passed from Box to Button with asChild!")
      }
    >
      <Button>Press me</Button>
    </Box>
  );
};
