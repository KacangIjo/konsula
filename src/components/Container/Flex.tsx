import React, { ReactNode } from "react";
import styled from "styled-components";
import { CommonProps } from "../../global-types";

type FlexPositioning =
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "center"
  | "left"
  | "right"
  | "normal"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch";

type FlexContainerProps = {
  justifyContent?: FlexPositioning;
  alignItems?: FlexPositioning;
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  gap?: string;
};

const StyledDiv = styled.div<FlexContainerProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-direction: ${({ flexDirection }) => flexDirection};
  gap: ${({ gap }) => gap};
`;

type ContainerProps = {
  children?: ReactNode;
} & FlexContainerProps &
  CommonProps;

const FlexContainer = ({
  style,
  className,
  justifyContent = "flex-start",
  alignItems = "stretch",
  flexWrap = "nowrap",
  flexDirection = "row",
  gap,
  children,
}: ContainerProps) => {
  return (
    <StyledDiv
      style={style}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexWrap={flexWrap}
      flexDirection={flexDirection}
      gap={gap}
      className={className}
    >
      {children}
    </StyledDiv>
  );
};

export default FlexContainer;
