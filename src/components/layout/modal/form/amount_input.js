import { useState, useEffect } from "react";
import styled from "styled-components";
import TextInput from "@/src/components/shared/input/text_input";
import {
  IconComponent,
  IconType,
  IconSize,
} from "@/src/components/shared/icons";

export const AmountSign = {
  POSITIVE: { key: "POSITIVE", color: "#52c41a", icon: IconType.PLUS },
  NEGATIVE: { key: "NEGATIVE", color: "#ff4d4f", icon: IconType.MINUS },
};

const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function AmountInput({
  initialValue = 0,
  initialSign = AmountSign.POSITIVE,
  onChange,
}) {
  const [sign, setSign] = useState(initialSign);
  const [amount, setAmount] = useState(initialValue);

  useEffect(() => {
    onChange?.({ sign, amount });
  }, [sign, amount]);

  const toggleSign = () => {
    setSign((prev) =>
      prev === AmountSign.POSITIVE ? AmountSign.NEGATIVE : AmountSign.POSITIVE
    );
  };

  const handleChange = (e) => {
    let raw = e.target.value.replace(/^[-+]/, "").replace(",", ".");
    raw = raw.replace(/[^0-9.]/g, "");

    const parts = raw.split(".");
    let cleaned = parts[0].replace(/^0+(?=\d)/, "");
    if (parts.length > 1) cleaned += "." + parts[1].slice(0, 2);

    setAmount(cleaned);
  };

  const leadingIcon = () => (
    <IconWrapper>
      <IconComponent color={sign.color} icon={sign.icon} size={IconSize.M} />
    </IconWrapper>
  );

  const trailingIcon = () => (
    <IconWrapper onClick={toggleSign}>
      <IconComponent icon={IconType.SWAP} size={IconSize.S} />
    </IconWrapper>
  );

  return (
    <TextInput
      color={sign.color}
      value={amount}
      onChange={handleChange}
      iconLeft={leadingIcon}
      iconRight={trailingIcon}
      placeholder="0"
      isMonospace
      align="center"
    />
  );
}
