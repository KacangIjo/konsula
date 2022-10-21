import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import { CommonProps } from '../../global-types';

const Wrapper = styled(Container.Flex)`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 50px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 10px;
`;

const DefaultContent = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
`;

type EmptyProps = {
    children: ReactNode;
} & CommonProps;

const Empty = ({style, className, children = <DefaultContent>Content is empty</DefaultContent>}: EmptyProps) => {
    return (
        <Wrapper style={style} className={className}>
            {children}
        </Wrapper>
    );
};

export default Empty;
