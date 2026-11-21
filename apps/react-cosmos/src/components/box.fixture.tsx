import { typedKeys } from "@/utils/typedKeys";
import { Box, BoxProps } from "@nayhoo/ui/box";
import { Text } from "@nayhoo/ui/text";
import { box } from "@nayhoo/ui/theme";

const columns = typedKeys(box.classNames.variants.columns);
const display = typedKeys(box.classNames.variants.display);
const rows = typedKeys(box.classNames.variants.rows);

const BoxFixture = (props: BoxProps) => (
  <Box style={{ border: "2px dashed blue" }} {...props} />
);

export default {
  default: () => (
    <BoxFixture>
      <Text>ninten :)</Text>
      <Text>ninten :)</Text>
      <Text>ninten :)</Text>
    </BoxFixture>
  ),
  columns: columns.map((c) => (
    <BoxFixture key={c} columns={c} display="grid" gap="4">
      <Text>{c} :)</Text>
      <Text>{c} :)</Text>
      <Text>{c} :)</Text>
    </BoxFixture>
  )),
  display: display.map((d) => (
    <BoxFixture key={d} display={d} gap="4">
      <Text>{d} :)</Text>
      <Text>{d} :)</Text>
      <Text>{d} :)</Text>
    </BoxFixture>
  )),
  rows: rows.map((r) => (
    <BoxFixture key={r} display="grid" gap="4" rows={r}>
      <Text>{r} :)</Text>
      <Text>{r} :)</Text>
      <Text>{r} :)</Text>
    </BoxFixture>
  )),
};
