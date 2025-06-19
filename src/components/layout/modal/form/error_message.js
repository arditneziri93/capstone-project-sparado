import styled from "styled-components";
import { C } from "@/src/components/shared/typography";

export const ErrorMessage = ({ message }) => {
  const ColoredText = styled(C)`
    padding-left: ${({ theme }) => theme.size.m};
    color: ${({ theme }) => theme.text.danger};
  `;

  return <ColoredText>{message}</ColoredText>;
};
