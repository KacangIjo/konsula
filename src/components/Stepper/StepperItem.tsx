import React from 'react';
import styled from 'styled-components';
import { CommonProps } from '../../global-types';
import Container from '../Container';
import { useMediaQuery } from 'react-responsive';

const Wrapper = styled.div`
  position: relative;
  flex: 1;

  padding-left: 5px;
  padding-right: 5px;
`;

const Connector = styled.div`
  display: block;
  position: absolute;
  background-color: #000;
  height: 2px;

  top: 20.5px;
  left: calc(-50% + 25px);
  right: calc(50% + 25px);
  z-index: 1;
`;

const ContentWrapper = styled(Container.Flex)`
  position: relative;
  z-index: 2;
`;

const Dot = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: var(--color-primary);

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Label = styled.span`
  display: inline-block;
  margin-top: 20px;
  font-size: 1rem;
  text-align: center;
  
  @media all and (max-width: 575px) {
    font-size: 14px;
  }
`;

type StepperItemProps = {
    connectorCarrier?: boolean;
    label: string;
} & CommonProps;

const StepperItem = ({label, style, className, connectorCarrier = false}: StepperItemProps) => {
    return (
        <Wrapper style={style} className={className}>
            {
                connectorCarrier &&
                <Connector/>
            }
            
            <ContentWrapper flexDirection="column" alignItems="center">
                <Dot/>
                <Label>{label}</Label>
            </ContentWrapper>
        </Wrapper>
    );
};

export default StepperItem;
