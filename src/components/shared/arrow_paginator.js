import IconButton from "./icon_button";
import { IconType } from "./icons";
import { LM } from "./typography";
import styled from "styled-components";

const ArrowPaginatorConfig = (
  iconLeft = IconType.LEFT,
  iconRight = IconType.RIGHT
) => {
  return {
    iconLeft,
    iconRight,
  };
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.l};
`;

export function ArrowPaginator({
  onClickLeft,
  onClickRight,
  label = "Paginator",
  config = ArrowPaginatorConfig(),
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
      <LM>{label}</LM>
      <IconButton
        icon={config.iconRight}
        onClick={onClickRight}
        isDisabled={isRightDisabled}
      />
    </Wrapper>
  );
}
