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
      n100: "#E9EDF3", // before: #F0F4F8
      n200: "#D8E1E9", // before: #DDE7EE
      n300: "#C7D2DD", // before: #CDD7E1
      n400: "#B6C2CD",
      n500: "#9FA6AD",
      n600: "#636B74",
      n700: "#363C42", // before: #32383E
      n800: "#1D2023", // before: #1A1D1F
      n900: "#0E1011", // before: #0B0D0E
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
    categoryColors: {
      category1: "#F23B2F", // Health
      category2: "#EA2E66", // Shopping
      category3: "#BB33D6", // Insurance
      category4: "#885BFB", // Rent
      category5: "#566CFC", // Utilities
      category6: "#3897EF", // Education
      category7: "#4FB6EE", // Travel
      category8: "#60CFDF", // ?
      category9: "#15C1B0", // Salary
      category10: "#53C757", // Groceries
      category11: "#95ED36", // Savings
      category12: "#D2E430", // Subscriptions
      category13: "#F1D70A", // Entertainment
      category14: "#FFBE1C", // Pets
      category15: "#FF930D", // Restaurants
      category16: "#B66D11", // Transportation
      category17: "#946555", // Miscellaneous
      category18: "#71898E", // Other
    },
  },
  icons: {
    xxs: "10px",
    xs: "12px",
    s: "16px",
    m: "20px",
    l: "24px",
    xl: "32px",
    xxl: "48px",
  },
  typography: {
    heading1: {
      size: "32px",
      fontFamily: `'Poppins', sans-serif`,
      weight: "700",
    },
    heading2: {
      size: "24px",
      fontFamily: `'Poppins', sans-serif`,
      weight: "600",
    },
    heading3: {
      size: "20px",
      fontFamily: `'Poppins', sans-serif`,
      weight: "600",
    },
    bodyBase: {
      size: "16px",
      fontFamily: `'Poppins', sans-serif`,
      weight: "400",
    },
    bodySmall: {
      size: "14px",
      fontFamily: `'Poppins', sans-serif`,
      weight: "400",
    },
    labelLarge: {
      size: "16px",
      fontFamily: `'Poppins', sans-serif`,
      weight: "500",
    },
    labelMedium: {
      size: "14px",
      fontFamily: `'Poppins', sans-serif`,
      weight: "500",
    },
    labelSmall: {
      size: "12px",
      fontFamily: `'Poppins', sans-serif`,
      weight: "500",
    },
    labelTiny: {
      size: "8px",
      fontFamily: `'Poppins', sans-serif`,
      weight: "500",
    },
    caption: {
      size: "12px",
      fontFamily: `'Poppins', sans-serif`,
      weight: "400",
    },
  },
};

export default baseTheme;
