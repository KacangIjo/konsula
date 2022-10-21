import React from "react";
import Container from "../../../components/Container";
import styled from "styled-components";

const Inner = styled(Container.Inner)`
  padding: 0 32px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
  text-align: center;

  @media all and(max-width: 767px) {
    font-size: 2rem;
  }
`;

const UniversityPlannerTextSection = () => {
  return (
    <Container style={{ padding: "100px 0" }}>
      <Inner>
        <Title>
          Yuk, Rencanakan Tujuan Kuliah
          <br />
          Anak Anda Sekarang!
        </Title>
      </Inner>
    </Container>
  );
};

export default UniversityPlannerTextSection;
