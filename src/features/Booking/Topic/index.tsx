import React, { useCallback } from 'react';
import styled from 'styled-components';
import Container from '../../../components/Container';
import useTopic from './useTopic';
import TopicItem from './TopicItem';
import { CommonProps } from '../../../global-types';

const Inner = styled(Container.Inner)`
  max-width: 600px;
  padding: 0 32px;
`;

const TopicWrapper = styled(Container.Flex)`
  flex-wrap: wrap;

  @media all and (max-width: 575px) {
    gap: 30px;
  }
`;

type TopicSectionProps = {} & CommonProps;

const TopicSection = ({style, className}: TopicSectionProps) => {
    const topics = useTopic();
    
    const mapTopic = useCallback(() => {
        return topics.map((t, i) => <TopicItem number={`${i + 1}`} label={t}/>);
    }, [topics]);
    
    return (
        <Container style={style} className={className}>
            <Inner>
                <TopicWrapper>
                    {mapTopic()}
                </TopicWrapper>
            </Inner>
        </Container>
    );
};

export default TopicSection;
