import React from "react";
import styled from "styled-components";
import { CommonProps } from "../../global-types";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;

  border: 1px solid transparent;
  transition: 200ms ease-in-out;

  &.active {
    border: 2px solid #000;
    border-radius: 10px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 75%;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Label = styled.p`
  margin: 10px 0;
  text-align: center;
  font-weight: 500;
  font-size: 1.25rem;
`;

type ConsultantChoiceProps = {
  imgUrl: string;
  label: string;
} & CommonProps;

const ConsultantChoice = ({
  imgUrl,
  label,
  style,
  className,
}: ConsultantChoiceProps) => {
  return (
    <Wrapper style={style} className={className}>
      <ImageWrapper>
        <Image src={imgUrl} />
      </ImageWrapper>
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default ConsultantChoice;
