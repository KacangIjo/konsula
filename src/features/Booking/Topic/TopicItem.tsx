import React from 'react';
import styled from 'styled-components';
import Container from '../../../components/Container';

const Wrapper = styled(Container.Flex)`
  flex: 1;
  flex-direction: column;
  align-items: center;

  @media all and (max-width: 575px) {
    flex: 1 0 100%;
    width: 100%;
  }
`;

const NumberDot = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 50%;
  background-color: var(--color-primary);

  span {
    display: inline-block;
    line-height: 30px;
    color: #fff;
    font-weight: 700;
  }
`;

const Text = styled.p`
  margin: 15px 0 0;
  font-size: 14px;

  text-align: center;
  max-width: 90%;

  @media all and (max-width: 575px) {
    margin: 10px 0 0;
  }
`;

type TopicItemProps = {
    number: string;
    label: string;
}

const TopicItem = ({number, label}: TopicItemProps) => {
    return (
        <Wrapper>
            <NumberDot>
                <span>{number}</span>
            </NumberDot>
            <Text>{label}</Text>
        </Wrapper>
    );
};

export default TopicItem;
