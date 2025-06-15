import baseTheme from "./base.js";

const darkTheme = {
  ...baseTheme,
  mode: "dark",
  text: {
    accent: baseTheme.colors.primary.base,
    disabled: baseTheme.colors.neutral.n600,
    onDark: baseTheme.colors.primary.on,
    neutral: baseTheme.colors.neutral.n100,
    neutralAlt: baseTheme.colors.neutral.n400,
    success: baseTheme.colors.success.base,
    danger: baseTheme.colors.danger.base,
    warning: baseTheme.colors.warning.base,
    info: baseTheme.colors.info.base,
  },
  surface: {
    neutral: baseTheme.colors.neutral.n800,
    neutralHover: baseTheme.colors.neutral.n700,
    neutralAlt: baseTheme.colors.neutral.n900,
    neutralSpecial: baseTheme.colors.neutral.n900,
    accent: baseTheme.colors.primary.hover,
    accentHover: baseTheme.colors.primary.base,
    accentAlt: baseTheme.colors.primary.light,
    disabled: baseTheme.colors.neutral.n600,
    success: baseTheme.colors.success.hover,
    successHover: baseTheme.colors.success.base,
    successAlt: baseTheme.colors.success.dark,
    danger: baseTheme.colors.danger.hover,
    dangerHover: baseTheme.colors.danger.base,
    dangerAlt: baseTheme.colors.danger.dark,
    warning: baseTheme.colors.warning.hover,
    warningHover: baseTheme.colors.warning.base,
    warningAlt: baseTheme.colors.warning.dark,
    info: baseTheme.colors.info.hover,
    infoHover: baseTheme.colors.info.base,
    infoAlt: baseTheme.colors.info.dark,
  },
  border: {
    color: {
      accent: baseTheme.colors.primary.dark,
      neutral: baseTheme.colors.neutral.n400,
      success: baseTheme.colors.success.base,
      danger: baseTheme.colors.danger.base,
      warning: baseTheme.colors.warning.base,
      info: baseTheme.colors.info.base,
      disabled: baseTheme.colors.neutral.n600,
    },
    size: baseTheme.size.xs,
  },
};

export default darkTheme;
