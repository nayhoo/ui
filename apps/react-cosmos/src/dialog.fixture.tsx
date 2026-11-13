"use client";

import { Button } from "@nayhoo/ui/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@nayhoo/ui/dialog";

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Press me</Button>
      </DialogTrigger>

      <DialogContent fullWidth size="1">
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
        </DialogHeader>

        <DialogBody>
          <DialogDescription>Description</DialogDescription>
        </DialogBody>

        <DialogFooter>
          <DialogClose asChild>
            <Button>Cancel</Button>
          </DialogClose>

          <Button sentiment="accented" variant="solid">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
