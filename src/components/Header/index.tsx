import React from "react";
import styled from "styled-components";
import Container from "../Container";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  align-items: stretch;
  flex-wrap: nowrap;

  padding: 0 30px;

  height: 65px;
  width: 100%;

  background-color: #fff;

  box-shadow: 0 8px 10px 1px rgb(0 0 0 / 5%), 0 3px 14px 3px rgb(0 0 0 / 5%),
    0 4px 5px 0 rgb(0 0 0 / 5%);

  z-index: 100;
`;

const InnerHeader = styled(Container.Inner)`
  flex: 1 0 33.3333%;
  padding: 10px 0;
`;

const Title = styled.h1`
  margin: 0;

  font-size: 1.75rem;
  font-weight: 700;
  line-height: 45px;
  text-transform: uppercase;

  cursor: pointer;

  @media all and (max-width: 575px) {
    text-align: center;
    font-size: 1.5rem;
  }
`;

const Index = () => {
  const navigate = useNavigate();

  const onTitleClick = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <InnerHeader>
        <Title onClick={onTitleClick}>Konsula</Title>
      </InnerHeader>
    </Wrapper>
  );
};

export default Index;
