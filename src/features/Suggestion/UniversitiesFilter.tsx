import React, { useCallback } from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import Form from '../../components/Form';
import { Filter } from './useUniversities';
import { formatNumber } from '../../util';
import { CommonProps } from '../../global-types';

const Col = styled(Container.Flex)`
  flex-direction: column;
  gap: 15px;
`;

const Wrapper = styled(Container.Flex)`
  position: relative;
  gap: 20px;
  flex-wrap: wrap;

  & > ${Col} {
    flex: 0 0 calc(50% - 10px);

    @media all and (max-width: 767px) {
      flex-basis: 100%;
    }
  }
`;

const InnerRow = styled(Container.Flex)`
  align-items: flex-start;
  gap: 10px;

  span:first-child {
    flex: 1 0 30%;
    max-width: 30%;
  }

  @media all and (max-width: 400px) {
    flex-wrap: wrap;

    span:first-child {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
`;

const Text = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const CurrentPrice = styled.span`
  margin: 5px 0 0;
  display: block;
  width: 100%;
  text-align: center;
`;

type UniversitiesFilterProps = {
    filter: Filter;
    setFilter: (newFilter: Filter) => void;
} & CommonProps;

const UniversitiesFilter = ({filter, setFilter, style, className}: UniversitiesFilterProps) => {
    
    const onLocationChange = useCallback((value: string) => {
        setFilter(Object.assign({}, filter, {location: value}));
    }, [filter, setFilter]);
    
    const onTypeChange = useCallback((value: string) => {
        setFilter(Object.assign({}, filter, {type: value}));
    }, [filter, setFilter]);
    
    const onYearChange = useCallback((value: string) => {
        setFilter(Object.assign({}, filter, {year: +value}));
    }, [filter, setFilter]);
    
    const onTuitionChange = useCallback((value: string) => {
        setFilter(Object.assign({}, filter, {tuition: +value}));
    }, [filter, setFilter]);
    
    return (
        <Wrapper style={style} className={className}>
            <Col>
                <InnerRow>
                    <Text>Tujuan Universitas</Text>
                    <Col>
                        <Container.Flex>
                            <Form.Radio label="Luar Negeri" name="location"
                                        onChange={(e) => {
                                            if (e.target.checked) onLocationChange('abroad');
                                        }} value="abroad"
                                        checked={filter.location === 'abroad'}/>
                            <Form.Radio label="Dalam Negeri" name="location"
                                        onChange={(e) => {
                                            if (e.target.checked) onLocationChange('local');
                                        }}
                                        value="local" checked={filter.location === 'local'}/>
                        </Container.Flex>
                        
                        <Container.Flex>
                            <Form.Radio label="Negeri (Public)" name="type"
                                        onChange={(e) => {
                                            if (e.target.checked) onTypeChange('public');
                                        }} value="public"
                                        checked={filter.type === 'public'}/>
                            <Form.Radio label="Swasta (Private)" name="type"
                                        onChange={(e) => {
                                            if (e.target.checked) onTypeChange('private');
                                        }}
                                        value="private" checked={filter.type === 'private'}/>
                        </Container.Flex>
                    </Col>
                </InnerRow>
            
            </Col>
            <Col>
                <InnerRow>
                    <Text>Perkiraan masuk kuliah</Text>
                    <Form.Input type="number" defaultValue={'2023'} value={filter.year}
                                onChange={(e) => onYearChange(e.target.value)}/>
                </InnerRow>
                
                <InnerRow>
                    <Text>Biaya</Text>
                    <div>
                        <Form.Input type="range" defaultValue={250000000} min={0} max={500000000} step={10000000}
                                    onChange={(e) => onTuitionChange(e.target.value)}/>
                        <CurrentPrice>{`IDR ${formatNumber(filter.tuition)}`}</CurrentPrice>
                    </div>
                </InnerRow>
            </Col>
        </Wrapper>
    );
};

export default UniversitiesFilter;
