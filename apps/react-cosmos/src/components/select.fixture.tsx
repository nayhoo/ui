import { typedKeys } from "@/utils/typedKeys";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@nayhoo/ui/dialog";
import {
  Select,
  SelectContent,
  SelectContentProps,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectTriggerProps,
  SelectValue,
} from "@nayhoo/ui/select";
import { selectTrigger } from "@nayhoo/ui/theme";

const sizes = typedKeys(selectTrigger.classNames.variants.size);
const variants = typedKeys(selectTrigger.classNames.variants.variant);

type SelectFixtureProps = {
  placeholder?: string;
  selectContentProps?: SelectContentProps;
  selectTriggerProps?: SelectTriggerProps;
};

const SelectFixture = ({
  placeholder = "Select a fruit",
  selectContentProps,
  selectTriggerProps,
}: SelectFixtureProps) => (
  <Select>
    <SelectTrigger {...selectTriggerProps}>
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent {...selectContentProps}>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectGroup>

      <SelectSeparator />

      <SelectGroup>
        <SelectLabel>Vegetables</SelectLabel>
        <SelectItem value="aubergine">Aubergine</SelectItem>
        <SelectItem value="broccoli">Broccoli</SelectItem>
        <SelectItem value="carrot" disabled>
          Carrot
        </SelectItem>
        <SelectItem value="courgette">Courgette</SelectItem>
        <SelectItem value="leek">Leek</SelectItem>
      </SelectGroup>

      <SelectSeparator />

      <SelectGroup>
        <SelectLabel>Meat</SelectLabel>
        <SelectItem value="beef">Beef</SelectItem>
        <SelectItem value="chicken">Chicken</SelectItem>
        <SelectItem value="lamb">Lamb</SelectItem>
        <SelectItem value="pork">Pork</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);

export default {
  default: () => <SelectFixture />,
  onOverlay: () => (
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>onOverlay example</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <SelectFixture selectContentProps={{ onOverlay: true }} />
        </DialogBody>
      </DialogContent>
    </Dialog>
  ),
  popper: () => <SelectFixture selectContentProps={{ position: "popper" }} />,
  sizes: () =>
    sizes.map((size) => (
      <SelectFixture
        key={size}
        placeholder={`Size ${size}`}
        selectContentProps={{ size }}
        selectTriggerProps={{ size }}
      />
    )),
  variants: () =>
    variants.map((variant) => (
      <SelectFixture
        key={variant}
        placeholder={variant}
        selectTriggerProps={{ variant }}
      />
    )),
};
