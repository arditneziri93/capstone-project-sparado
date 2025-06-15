import styled from "styled-components";
import { H1, BB } from "@/src/components/shared/typography.js";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Custom404() {
  return (
    <Container>
      <H1>404</H1>

      <BB>This page could not be found.</BB>
    </Container>
  );
}
