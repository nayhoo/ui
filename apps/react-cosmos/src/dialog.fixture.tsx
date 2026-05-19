"use client";

import { Button } from "@nayhoo/ui/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@nayhoo/ui/dialog";

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Press me</Button>
      </DialogTrigger>

      <DialogContent fullWidth size="1" title="Title">
        <DialogBody>
          <DialogDescription>Description</DialogDescription>
        </DialogBody>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>

          <Button>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
