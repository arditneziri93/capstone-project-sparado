import styled from "styled-components";

export const FormRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.size.l};
  flex-wrap: wrap;

  & > * {
    flex: 1;
  }
`;
