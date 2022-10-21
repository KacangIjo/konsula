import React, { ReactNode } from "react";
import styled from "styled-components";
import InnerContainer from "./Inner";
import FlexContainer from "./Flex";
import { CommonProps } from "../../global-types";

const StyledDiv = styled.div`
  padding: 0 15px;
`;

type ContainerProps = {
  children?: ReactNode;
} & CommonProps;

const Container = ({ children, style, className }: ContainerProps) => {
  return (
    <StyledDiv style={style} className={className}>
      {children}
    </StyledDiv>
  );
};

Container.Inner = InnerContainer;
Container.Flex = FlexContainer;

export default Container;
