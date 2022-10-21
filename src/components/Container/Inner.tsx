import React, { ReactNode } from "react";
import styled from "styled-components";
import { CommonProps } from "../../global-types";

const StyledDiv = styled.div`
  max-width: var(--inner-max-width-lg);

  margin-left: auto;
  margin-right: auto;
`;

type ContainerProps = {
  children?: ReactNode;
} & CommonProps;

const InnerContainer = ({ children, style, className }: ContainerProps) => {
  return (
    <StyledDiv style={style} className={className}>
      {children}
    </StyledDiv>
  );
};

export default InnerContainer;
