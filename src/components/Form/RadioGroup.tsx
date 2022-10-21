import React from "react";
import Container from "../Container";
import styled from "styled-components";

const Wrapper = styled(Container.Flex)`
  width: 100%;

  & + & {
    margin-top: 15px;
  }
`;

type RadioGroupProps = {
  children?: React.ReactNode;
};

const RadioGroup = ({ children }: RadioGroupProps) => {
  return (
    <Wrapper alignItems="center" flexWrap="wrap" gap='15px'>
      {children}
    </Wrapper>
  );
};

export default RadioGroup;
