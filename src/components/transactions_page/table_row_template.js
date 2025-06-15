import styled from "styled-components";

export const TableRowTemplate = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 
    //-----------------------------------
    minmax(48px, 48px) // Checkbox
    minmax(64px, 64px) // Date
    minmax(96px, 164px) // Category
    minmax(96px, 100%) // Description
    minmax(96px, 128px) // Amount
    minmax(76px, 76px); // Actions
  //-------------------------------------
  align-items: center;
  gap: ${({ theme }) => theme.size.l};

  & > div {
    display: flex;
  }
`;

export const TCellRight = styled.div`
  justify-content: right;
`;

export const TCellLeft = styled.div`
  justify-content: left;
`;

export const TCellCenter = styled.div`
  justify-content: center;
`;
