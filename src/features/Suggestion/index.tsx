import React, { useCallback, useEffect, useState } from 'react';
import Container from '../../components/Container';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UniversitySuggestionItem from './UniversitySuggestionItem';
import { Controller, useForm } from 'react-hook-form';
import Form from '../../components/Form';
import Button from '../../components/Button';
import { formatNumber } from '../../util';
import useUniversities from './useUniversities';
import UniversitiesFilter from './UniversitiesFilter';
import Empty from '../../components/Empty';

const Inner = styled(Container.Inner)`
  padding: 0 32px;
  max-width: 1000px;
`;

const Text = styled.p`
  margin: 0 0 10px;
  font-size: 1.25rem;
  font-weight: 500;
`;

const SubText = styled.p`
  margin: 0 0 10px;
  font-size: 1rem;
  font-weight: 500;
`;

const RadioWrapper = styled(Container.Flex)`
  gap: 10px;

  @media all and (max-width: 575px) {
    gap: 30px;
  }
`;

const ImageRadio = styled(Form.Radio)`
  flex: 1 0 100%;
  max-width: calc(25% - 7.5px);
  width: 100%;

  @media all and (max-width: 767px) {
    flex-basis: calc(50% - 7.5px);
    max-width: calc(50% - 7.5px);
  }

  @media all and (max-width: 575px) {
    flex-basis: calc(100%);
    max-width: calc(100%);
  }
`;

const ButtonContainer = styled(Container.Flex)`
  padding: 30px 0;
  gap: 10px;

  @media all and (max-width: 767px) {
    gap: 20px;
  }
`;

const ActionButton = styled(Button)`
  max-width: 325px;

  @media all and (max-width: 767px) {
    max-width: 100%;
  }
`;

const displayPrice = (tuition: number) => {
    return `IDR ${formatNumber(tuition)}`;
};

const Suggestion = () => {
    const navigate = useNavigate();
    const {handleSubmit, control, setValue} = useForm();
    const [dummyLoading, setDummyLoading] = useState(false);
    const {data, currentFilter, setFilter, year} = useUniversities();
    
    const mapUni = useCallback((name: string, value: string, onChange: (...event: any[]) => void) => {
        return data.map(d => <ImageRadio
            name={name}
            onChange={onChange}
            value={d.id}
            checked={d.id === value}
            custom={true}
        >
            <UniversitySuggestionItem
                imgUrl={d.imgUrl}
                nama={d.name}
                year={currentFilter.year.toString()}
                tuition={displayPrice(d.tuition)}
                living={displayPrice(d.living)}
                admin={displayPrice(d.admin)}
                rank={d.rank}
                isActive={d.id === value}
            />
        </ImageRadio>);
    }, [data]);
    
    const onWaClick = useCallback(() => {
        window.open('https://wa.link/nj8lrt', '_blank');
    }, []);
    
    const onSubmit = () => {
        setDummyLoading(true);
        setTimeout(() => {
            navigate('/booking');
        }, 2000);
    };
    
    useEffect(() => {
        setValue('uni', undefined);
    }, [currentFilter]);
    
    return (
        <Container style={{padding: '50px 0 50px'}}>
            <Inner>
                <Text style={{textAlign: 'center'}}>Pilih Universitas yang sesuai untuk anak Anda</Text>
                
                <UniversitiesFilter style={{padding: '50px 0 0'}} filter={currentFilter} setFilter={setFilter}/>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <RadioWrapper
                        style={{padding: '30px 0'}}
                        flexWrap={'wrap'}
                        alignItems="stretch"
                    >
                        <Controller
                            render={({field: {name, value, onChange}}) =>
                                <>
                                    {data.length > 0 ? mapUni(name, value, onChange) :
                                        <Empty><b>Universitas dengan kriteria di atas tidak ditemukan.</b></Empty>}
                                </>}
                            name="uni"
                            control={control}
                        />
                    </RadioWrapper>
                    <Container.Flex justifyContent="center" alignItems="center">
                        <Controller
                            render={({field: {name, value, onChange}}) => (
                                <Form.Checkbox
                                    label="Saya belum punya preferensi"
                                    name={name}
                                    checked={value}
                                    onChange={(e) => {
                                        onChange(e);
                                    }}
                                />
                            )}
                            control={control}
                            name="noPreference"
                            defaultValue={false}
                        />
                    </Container.Flex>
                    <ButtonContainer
                        justifyContent="center"
                        alignItems="stretch"
                        flexWrap="wrap"
                    >
                        <ActionButton style={{maxWidth: '350px'}} loading={dummyLoading}>
                            Tanya Jawab Dengan Konsultan Pendidikan Sekarang
                        </ActionButton>
                        
                        <ActionButton onClick={onWaClick} style={{maxWidth: '350px'}} type="button">
                            Bikin Perencanaan Keuangan Dengan Financial Planner Sekarang
                        </ActionButton>
                    </ButtonContainer>
                </form>
            </Inner>
        </Container>
    );
};

export default Suggestion;
