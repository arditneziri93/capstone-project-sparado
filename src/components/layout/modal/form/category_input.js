import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { InputWrapper } from "@/src/components/shared/input/input_base_style";
import {
  IconComponent,
  IconType,
  IconSize,
} from "@/src/components/shared/icons";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 2000;
  width: 100%;
  background-color: ${({ theme }) => theme.surface.neutralAlt};
  border-radius: ${({ theme }) => theme.size.l};
  margin-top: ${({ theme }) => theme.size.s};
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Option = styled.div`
  padding: ${({ theme }) => theme.size.m + " " + theme.size.l};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.l};

  &:hover {
    background-color: ${({ theme }) => theme.surface.neutral};
  }
`;

const ColorDot = styled.div`
  width: ${({ theme }) => theme.size.ml};
  height: ${({ theme }) => theme.size.ml};
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const SelectedCategory = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.m};
  width: 100%;
  justify-content: space-between;
`;

const CategoryLabel = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.m};
`;

const PlaceholderText = styled.span`
  color: ${({ theme }) => theme.text.disabled};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CategoryInput = ({ value, onChange, categories }) => {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(value || null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleSelect = (id) => {
    setInternalValue(id);
    onChange?.(id);
    setOpen(false);
  };

  const selected = categories.find((c) => c.id === internalValue);

  const trailingIcon = (
    <IconWrapper>
      <IconComponent
        icon={open ? IconType.UP : IconType.DOWN}
        size={IconSize.S}
        color="#999"
      />
    </IconWrapper>
  );

  return (
    <Wrapper ref={wrapperRef}>
      <InputWrapper onClick={() => setOpen((o) => !o)}>
        <SelectedCategory>
          <CategoryLabel>
            {selected ? (
              <>
                <ColorDot color={selected.color} />
                {selected.name}
              </>
            ) : (
              <PlaceholderText>Select category...</PlaceholderText>
            )}
          </CategoryLabel>
          {trailingIcon}
        </SelectedCategory>
      </InputWrapper>

      {open && (
        <Dropdown>
          {categories.map((cat) => (
            <Option key={cat.id} onClick={() => handleSelect(cat.id)}>
              <ColorDot color={cat.color} />
              {cat.name}
            </Option>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
};

export default CategoryInput;
