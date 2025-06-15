import IconButton from "./icon_button";
import { IconType } from "./icons";
import { LM } from "./typography";
import styled from "styled-components";

export const PaginatorWidth = {
  MONTH: "85px",
  YEAR: "50px",
};

export const PaginatorConfig = (
  iconLeft = IconType.LEFT,
  iconRight = IconType.RIGHT,
  labelWidth = PaginatorWidth.MONTH
) => {
  return {
    iconLeft,
    iconRight,
    labelWidth,
  };
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.m};
`;

const Label = styled(LM)`
  width: ${({ $width }) => $width};
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  white-space: nowrap;
`;

export function Paginator({
  onClickLeft,
  onClickRight,
  label = "Paginator",
  config = PaginatorConfig(),
}) {
  const isLeftDisabled = !onClickLeft;
  const isRightDisabled = !onClickRight;

  return (
    <Wrapper>
      <IconButton
        icon={config.iconLeft}
        onClick={onClickLeft}
        isDisabled={isLeftDisabled}
      />
      <Label $width={config.labelWidth}>{label}</Label>
      <IconButton
        icon={config.iconRight}
        onClick={onClickRight}
        isDisabled={isRightDisabled}
      />
    </Wrapper>
  );
}
