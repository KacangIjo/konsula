import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { CommonProps } from '../../global-types';
import Stepper from '../Stepper';

const Wrapper = styled.div`
  padding: 0 32px;

  width: 100%;
  min-height: 500px;
  height: calc(80vh - 65px);

  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
  url("/images/hero-bg.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin: 0 auto;

  max-width: 1248px;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  margin: 0 0 5px;
  font-size: 3.5rem;

  color: #fff;

  @media all and (max-width: 767px) {
    font-size: 2.5rem;
  }

  @media all and (max-width: 575px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  margin: 0 0 10px;

  font-size: 1.5rem;

  color: #fff;

  @media all and (max-width: 767px) {
    font-size: 1.25rem;
  }
`;

const HeroSection = ({style, className}: CommonProps) => {
    return (
        <Wrapper style={style} className={className}>
            <Inner>
                <Title>Education Financial Planner</Title>
                <Subtitle>
                    Konsula dapat membantu Anda untuk merencanakan
                    <br/>masa depan pendidikan anak Anda
                </Subtitle>
            </Inner>
        </Wrapper>
    );
};

export default HeroSection;
