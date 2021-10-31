import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#d1495b",
  primaryBright: "#80ed99",
  primaryDark: "#2d6a4f",
  secondary: "#d1495b",
  success: "#9B9694",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#40916c",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#e6fbff",
  backgroundDisabled: "#d2f4fa",
  contrast: "#d2f4fa",
  invertedContrast: "#eef9fa",
  input: "#80ceed",
  tertiary: "#EFF4F5",
  text: "#04210a",
  textDisabled: "#a4a9ab",
  textSubtle: "#1C1B21",
  borderColor: "#5778cc",
  card: "#dbf7ff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#1df500",
  background: "#000000",
  backgroundDisabled: "#E9EAEB",
  contrast: "#b77e52",
  invertedContrast: "#261e13",
  input: "#916440",
  primaryDark: "#F2DA91",
  tertiary: "#75512f",
  text: "#E2FAFC",   // possibly change
  textDisabled: "#898d8f",
  textSubtle: "#d8f3f3",
  borderColor: "#524B63",
  card: "#1C1B21",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
