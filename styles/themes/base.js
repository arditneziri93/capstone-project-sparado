const baseTheme = {
  size: {
    none: "0px",
    xs2: "1px", // was "2xs"
    xs: "2px",
    s: "4px",
    sm: "6px",
    m: "8px",
    ml: "12px",
    l: "16px",
    xl: "24px",
    xl2: "32px", // was "2xl"
    xl3: "48px", // was "3xl"
    xl4: "64px", // was "4xl"
    xl5: "96px", // was "5xl"
    xl6: "128px", // was "6xl"
    xl7: "192px", // was "7xl"
    xl8: "256px", // was "8xl"
  },
  colors: {
    neutral: {
      n0: "#FFFFFF",
      n50: "#FBFCFE",
      n100: "#F0F4F8",
      n200: "#DDE7EE",
      n300: "#CDD7E1",
      n400: "#B6C2CD",
      n500: "#9FA6AD",
      n600: "#636B74",
      n700: "#32383E",
      n800: "#1A1D1F",
      n900: "#0B0D0E",
      n1000: "#000000",
    },
    primary: {
      base: "#0F80D1",
      light: "#D6EBFA",
      dark: "#0958BE",
      hover: "#0C6AB0",
      on: "#FFFFFF",
    },
    success: {
      base: "#10B981",
      light: "#D1FAE5",
      dark: "#047857",
      hover: "#0F9D75",
      on: "#FFFFFF",
    },
    danger: {
      base: "#DC5E5E",
      light: "#FEE2E2",
      dark: "#B91C1C",
      hover: "#C44F4F",
      on: "#FFFFFF",
    },
    warning: {
      base: "#E97D01",
      light: "#FEF3C7",
      dark: "#B45309",
      hover: "#D68B00",
      on: "#FFFFFF",
    },
    info: {
      base: "#2563EB",
      light: "#DBEAFE",
      dark: "#1E40AF",
      hover: "#1F56D8",
      on: "#FFFFFF",
    },
  },
  icons: {
    xs: "8px",
    s: "12px",
    m: "18px",
    l: "24px",
    xl: "32px",
  },
  typography: {
    heading1: {
      size: "32px",
      weight: "700",
    },
    heading2: {
      size: "24px",
      weight: "600",
    },
    heading3: {
      size: "20px",
      weight: "600",
    },
    bodyBase: {
      size: "16px",
      weight: "400",
    },
    bodySmall: {
      size: "14px",
      weight: "400",
    },
    labelLarge: {
      size: "16px",
      weight: "600",
    },
    labelMedium: {
      size: "14px",
      weight: "600",
    },
    labelSmall: {
      size: "12px",
      weight: "600",
    },
    labelTiny: {
      size: "8px",
      weight: "600",
    },
    caption: {
      size: "12px",
      weight: "400",
    },
    fontFamily: `'Inter', sans-serif`,
  },
};

export default baseTheme;
