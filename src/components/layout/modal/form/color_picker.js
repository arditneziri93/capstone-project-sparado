import styled, { useTheme } from "styled-components";

const ColorsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.size.m}; // mittlerer Abstand
  margin-top: ${({ theme }) => theme.size.s};
  justify-content: flex-start;
`;

const ColorDot = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: none;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid
      ${({ selected, theme }) =>
        selected ? theme.colors.primary.base : "transparent"};
    pointer-events: none;
    transition: border 0.2s ease;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export default function ColorPicker({ selectedColor, onSelect }) {
  const theme = useTheme();
  const colors = theme.colors.categoryColors || [];

  return (
    <ColorsGrid>
      {colors.map((color) => (
        <ColorDot
          key={color}
          color={color}
          selected={selectedColor === color}
          onClick={() => onSelect(color)}
        />
      ))}
    </ColorsGrid>
  );
}
