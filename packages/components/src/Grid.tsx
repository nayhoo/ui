import { styled } from "./stitches.config";

/**
 * Nayhoo grid component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Grid.stories.tsx
 */
export const Grid = styled("div", {
  boxSizing: "border-box",
  display: "grid",

  variants: {
    align: {
      start: {
        alignItems: "start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "end",
      },
      stretch: {
        alignItems: "stretch",
      },
      baseline: {
        alignItems: "baseline",
      },
    },
    justify: {
      start: {
        justifyContent: "start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "end",
      },
      between: {
        justifyContent: "space-between",
      },
    },
    flow: {
      row: {
        gridAutoFlow: "row",
      },
      column: {
        gridAutoFlow: "column",
      },
      dense: {
        gridAutoFlow: "dense",
      },
      rowDense: {
        gridAutoFlow: "row dense",
      },
      columnDense: {
        gridAutoFlow: "column dense",
      },
    },
    columns: {
      1: {
        gridCols: 1,
      },
      2: {
        gridCols: 2,
      },
      3: {
        gridCols: 3,
      },
      4: {
        gridCols: 4,
      },
      5: {
        gridCols: 5,
      },
      6: {
        gridCols: 6,
      },
      7: {
        gridCols: 7,
      },
      8: {
        gridCols: 8,
      },
      9: {
        gridCols: 9,
      },
      10: {
        gridCols: 10,
      },
    },
    rows: {
      1: {
        gridRows: 1,
      },
      2: {
        gridRows: 2,
      },
      3: {
        gridRows: 3,
      },
      4: {
        gridRows: 4,
      },
      5: {
        gridRows: 5,
      },
      6: {
        gridRows: 6,
      },
      7: {
        gridRows: 7,
      },
      8: {
        gridRows: 8,
      },
      9: {
        gridRows: 9,
      },
      10: {
        gridRows: 10,
      },
    },
    gap: {
      1: {
        gap: "$1",
      },
      2: {
        gap: "$2",
      },
      3: {
        gap: "$3",
      },
      4: {
        gap: "$4",
      },
      5: {
        gap: "$5",
      },
      6: {
        gap: "$6",
      },
      7: {
        gap: "$7",
      },
      8: {
        gap: "$8",
      },
      9: {
        gap: "$9",
      },
      10: {
        gap: "$10",
      },
    },
    gapX: {
      1: {
        columnGap: "$1",
      },
      2: {
        columnGap: "$2",
      },
      3: {
        columnGap: "$3",
      },
      4: {
        columnGap: "$4",
      },
      5: {
        columnGap: "$5",
      },
      6: {
        columnGap: "$6",
      },
      7: {
        columnGap: "$7",
      },
      8: {
        columnGap: "$8",
      },
      9: {
        columnGap: "$9",
      },
      10: {
        columnGap: "$10",
      },
    },
    gapY: {
      1: {
        rowGap: "$1",
      },
      2: {
        rowGap: "$2",
      },
      3: {
        rowGap: "$3",
      },
      4: {
        rowGap: "$4",
      },
      5: {
        rowGap: "$5",
      },
      6: {
        rowGap: "$6",
      },
      7: {
        rowGap: "$7",
      },
      8: {
        rowGap: "$8",
      },
      9: {
        rowGap: "$9",
      },
      10: {
        rowGap: "$10",
      },
    },
  },
});
