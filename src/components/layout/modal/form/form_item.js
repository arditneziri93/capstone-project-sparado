import styled from "styled-components";
import { LL } from "@/src/components/shared/typography";

const FormItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size.s};
`;

const Label = styled.label`
  padding-left: ${({ theme }) => theme.size.m};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.xs};
`;

const Required = styled(LL)`
  color: ${({ theme }) => theme.text.danger};
`;

export default function FormItem({ title, isRequired, children }) {
  return (
    <FormItemWrapper>
      <Label>
        <LL>{title}</LL>
        {isRequired && <Required>*</Required>}
      </Label>
      {children}
    </FormItemWrapper>
  );
}
