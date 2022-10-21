import React, { useCallback } from 'react';
import { CommonProps } from '../../global-types';
import styled from 'styled-components';
import Container from '../Container';
import StepperItem from './StepperItem';

const Wrapper = styled(Container.Flex)`
  position: relative;
`;

type StepperProps = {
    labels: string[]
} & CommonProps;

const Stepper = ({labels, style, className}: StepperProps) => {
    const mapLabels = useCallback(() => {
        return labels.map((label, i) => <StepperItem connectorCarrier={i > 0} label={label} key={`${i}-${label}`}/>);
    }, [labels]);
    
    return (
        <Wrapper style={style} className={className}>
            {mapLabels()}
        </Wrapper>
    );
};

export default Stepper;
