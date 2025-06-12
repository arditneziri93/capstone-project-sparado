import styled from "styled-components";
import { IconType } from "./icons";
import IconButton from "./icon_button";
import { BB } from "./typography";

const Container = styled.div`
  background-color: ${({ theme }) => theme.surface.neutral};
  border-radius: ${({ theme }) => theme.size.m};
  padding: ${({ theme }) => `${theme.size.ml} ${theme.size.l}`};
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover .actions {
    opacity: 1;
    pointer-events: auto;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.m};
  flex: 1;
  min-width: 0;
`;

const ColorDot = styled.div`
  width: ${({ theme }) => theme.size.xl};
  height: ${({ theme }) => theme.size.xl};
  margin: ${({ theme }) => theme.size.m};
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const Label = styled(BB)`
  flex: 1;
  min-width: 0;
  margin: ${({ theme }) => theme.size.m};
  color: ${({ theme }) => theme.text.neutral};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export default function CategoryItem({ label, color, onEdit, onDelete }) {
  return (
    <Container>
      <ContentWrapper>
        <ColorDot color={color} />
        <Label>{label}</Label>
      </ContentWrapper>
      <ActionsWrapper className="actions">
        <IconButton icon={IconType.EDIT} onClick={onEdit} isCompact />
        <IconButton icon={IconType.DELETE} onClick={onDelete} isCompact />
      </ActionsWrapper>
    </Container>
  );
}
