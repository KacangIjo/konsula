import React from "react";
import ChooseConsultantForm from "./ChooseConsultantForm";
import Container from "../../components/Container";
import styled from "styled-components";

const Inner = styled(Container.Inner)`
  padding: 0 32px;
  max-width: 1000px;
`;

const Consultants = () => {
  return (
    <Container style={{ padding: "50px 0 100px" }}>
      <Inner>
        <ChooseConsultantForm />
      </Inner>
    </Container>
  );
};

export default Consultants;
