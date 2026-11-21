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

export default {
  default: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open dialog</Button>
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

          <Button sentiment="brand" variant="solid">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
