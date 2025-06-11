import baseTheme from "./base.js";

const lightTheme = {
  ...baseTheme,
  mode: "light",
  text: {
    accent: baseTheme.colors.primary.base,
    disabled: baseTheme.colors.neutral.n500,
    onDark: baseTheme.colors.primary.on,
    neutral: baseTheme.colors.neutral.n700,
    neutralAlt: baseTheme.colors.neutral.n600,
    success: baseTheme.colors.success.dark,
    danger: baseTheme.colors.danger.dark,
    warning: baseTheme.colors.warning.dark,
    info: baseTheme.colors.info.dark,
  },
  surface: {
    neutral: baseTheme.colors.neutral.n0,
    neutralHover: baseTheme.colors.neutral.n100,
    neutralAlt: baseTheme.colors.neutral.n100,
    accent: baseTheme.colors.primary.base,
    accentHover: baseTheme.colors.primary.hover,
    accentAlt: baseTheme.colors.primary.light,
    disabled: baseTheme.colors.neutral.n500,
    success: baseTheme.colors.success.base,
    successHover: baseTheme.colors.success.hover,
    successAlt: baseTheme.colors.success.light,
    danger: baseTheme.colors.danger.base,
    dangerHover: baseTheme.colors.danger.hover,
    dangerAlt: baseTheme.colors.danger.light,
    warning: baseTheme.colors.warning.base,
    warningHover: baseTheme.colors.warning.hover,
    warningAlt: baseTheme.colors.warning.light,
    info: baseTheme.colors.info.base,
    infoHover: baseTheme.colors.info.hover,
    infoAlt: baseTheme.colors.info.light,
  },
  border: {
    color: {
      accent: baseTheme.colors.primary.base,
      neutral: baseTheme.colors.neutral.n700,
      disabled: baseTheme.colors.neutral.n500,
    },
  },
};

export default lightTheme;
