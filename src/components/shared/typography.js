import styled from "styled-components";

const createTextComponent = (Tag, styleKey) =>
  styled(Tag)`
    font-size: ${({ theme }) => theme.typography[styleKey].size};
    font-family: ${({ isMonospace, theme }) =>
      isMonospace
        ? "'Roboto Mono', monospace"
        : theme.typography[styleKey].fontFamily};
    font-weight: ${({ theme, isHighlighted }) => {
      const weight = parseInt(theme.typography[styleKey].weight, 10) || 400;
      return isHighlighted ? weight + 100 : weight;
    }};
    color: ${({ $color }) => $color || "inherit"};
  `;

// Headings
export const H1 = createTextComponent("h1", "heading1");
export const H2 = createTextComponent("span", "heading2");
export const H3 = createTextComponent("span", "heading3");

// Body
export const BB = createTextComponent("span", "bodyBase");
export const BS = createTextComponent("span", "bodySmall");

// Labels
export const LL = createTextComponent("span", "labelLarge");
export const LM = createTextComponent("span", "labelMedium");
export const LS = createTextComponent("span", "labelSmall");
export const LXS = createTextComponent("span", "labelTiny");

// Caption
export const C = createTextComponent("span", "caption");
