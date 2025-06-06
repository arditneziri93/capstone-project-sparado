// styles/Typography.js
import styled from "styled-components";

let fontFamily = "Inter, sans-serif";

// Headings
export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.typography.heading1.size};
  font-family: ${fontFamily};
  font-weight: ${({ theme }) => theme.typography.heading1.weight};
  color: ${({ color }) => color || "inherit"};
`;

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.typography.heading2.size};
  font-family: ${fontFamily};
  font-weight: ${({ theme }) => theme.typography.heading2.weight};
  color: ${({ color }) => color || "inherit"};
`;

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.typography.heading3.size};
  font-family: ${fontFamily};
  font-weight: ${({ theme }) => theme.typography.heading3.weight};
  color: ${({ color }) => color || "inherit"};
`;

// Body Text
export const BB = styled.p`
  font-size: ${({ theme }) => theme.typography.bodyBase.size};
  font-family: ${fontFamily};
  font-weight: ${({ theme }) => theme.typography.bodyBase.weight};
  color: ${({ color }) => color || "inherit"};
`;

export const BS = styled.p`
  font-size: ${({ theme }) => theme.typography.bodySmall.size};
  font-family: ${fontFamily};
  font-weight: ${({ theme }) => theme.typography.bodySmall.weight};
  color: ${({ color }) => color || "inherit"};
`;

// Labels
export const LL = styled.span`
  font-size: ${({ theme }) => theme.typography.labelLarge.size};
  font-family: ${fontFamily};
  font-weight: ${({ theme }) => theme.typography.labelLarge.weight};
  color: ${({ color }) => color || "inherit"};
`;

export const LabelMedium = styled.span`
  font-size: ${({ theme }) => theme.typography.labelMedium.size};
  font-family: ${fontFamily};
  font-weight: ${({ theme }) => theme.typography.labelMedium.weight};
  color: ${({ color }) => color || "inherit"};
`;

export const LS = styled.span`
  font-size: ${({ theme }) => theme.typography.labelSmall.size};
  font-family: ${fontFamily};
  font-weight: ${({ theme }) => theme.typography.labelSmall.weight};
  color: ${({ color }) => color || "inherit"};
`;

export const LXS = styled.span`
  font-size: ${({ theme }) => theme.typography.labelTiny.size};
  font-family: ${fontFamily};
  font-weight: ${({ theme }) => theme.typography.labelTiny.weight};
  color: ${({ color }) => color || "inherit"};
`;

// Caption
export const C = styled.span`
  font-size: ${({ theme }) => theme.typography.labelTiny.size};
  font-family: ${fontFamily};
  font-weight: ${({ theme }) => theme.typography.labelTiny.weight};
  color: ${({ color }) => color || "inherit"};
`;
