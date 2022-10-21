import React, { useState } from 'react';
import Container from '../../components/Container';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UniversitySuggestionItem from './UniversitySuggestionItem';
import { Controller, useForm } from 'react-hook-form';
import Form from '../../components/Form';
import Button from '../../components/Button';

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

const Suggestion = () => {
    const navigate = useNavigate();
    const {handleSubmit, control} = useForm();
    const [dummyLoading, setDummyLoading] = useState(false);
    
    const onSubmit = () => {
        setDummyLoading(true);
        setTimeout(() => {
            navigate('/consultant');
        }, 2000);
    };
    
    return (
        <Container style={{padding: '50px 0 50px'}}>
            <Inner>
                <Text>Bukan Hanya Uang Semesteran Yang Perlu Disiapkan</Text>
                <SubText>Pilih Universitas yang sesuai untuk anak Anda</SubText>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <RadioWrapper
                        style={{padding: '30px 0'}}
                        flexWrap={'wrap'}
                        alignItems="stretch"
                    >
                        <Controller
                            render={({field: {name, value, onChange}}) => (
                                <>
                                    <ImageRadio
                                        name={name}
                                        onChange={onChange}
                                        value="1"
                                        checked={value === '1'}
                                        custom={true}
                                    >
                                        <UniversitySuggestionItem
                                            imgUrl="/images/ui.jpg"
                                            nama="Universitas Indonesia"
                                            tuition="IDR 0 - 35.000.000/semester"
                                            living="+/- 5.000.000/bulan"
                                            rank="248"
                                            isActive={value === '1'}
                                        />
                                    </ImageRadio>
                                    <ImageRadio
                                        name={name}
                                        onChange={onChange}
                                        value="2"
                                        checked={value === '2'}
                                        custom={true}
                                    >
                                        <UniversitySuggestionItem
                                            imgUrl="/images/itb.jpg"
                                            nama="Institut Teknologi Bandung"
                                            tuition="IDR 0 - 25.000.000/semester"
                                            living="+/- IDR 5.000.000/bulan"
                                            rank="235"
                                            isActive={value === '2'}
                                        />
                                    </ImageRadio>
                                    
                                    <ImageRadio
                                        name={name}
                                        onChange={onChange}
                                        value="3"
                                        checked={value === '3'}
                                        custom={true}
                                    >
                                        <UniversitySuggestionItem
                                            imgUrl="/images/prasmul.jpg"
                                            nama="Prasetiya Mulya"
                                            tuition="IDR 12.000.000 - 25.000.000/semester"
                                            living="+/- IDR 6.000.000/bulan"
                                            rank="9230"
                                            isActive={value === '3'}
                                        />
                                    </ImageRadio>
                                    
                                    <ImageRadio
                                        name={name}
                                        onChange={onChange}
                                        value="4"
                                        checked={value === '4'}
                                        custom={true}
                                    >
                                        <UniversitySuggestionItem
                                            imgUrl="/images/ntu.jpg"
                                            nama="Nanyang Technological University, Singapore"
                                            tuition="IDR 0 - 180.000.000/semester"
                                            living="+/- IDR 8.000.000/bulan"
                                            rank="19"
                                            isActive={value === '4'}
                                        />
                                    </ImageRadio>
                                    
                                    <ImageRadio
                                        name={name}
                                        onChange={onChange}
                                        value="5"
                                        checked={value === '5'}
                                        custom={true}
                                    >
                                        <UniversitySuggestionItem
                                            imgUrl="/images/uva.jpg"
                                            nama="University Van Amsterdam, Netherlands"
                                            tuition="IDR 0 - 75.000.000/semester"
                                            living="+/- IDR 15.000.000/bulan"
                                            rank="58"
                                            isActive={value === '5'}
                                        />
                                    </ImageRadio>
                                    
                                    <ImageRadio
                                        name={name}
                                        onChange={onChange}
                                        value="6"
                                        checked={value === '6'}
                                        custom={true}
                                    >
                                        <UniversitySuggestionItem
                                            imgUrl="/images/monash.jpg"
                                            nama="Monash University"
                                            tuition="IDR 0 - 70.000.000/semester"
                                            living="+/- IDR 8.000.000/bulan"
                                            rank="57 (Group)"
                                            isActive={value === '6'}
                                        />
                                    </ImageRadio>
                                </>
                            )}
                            name="uni"
                            control={control}
                            defaultValue={'1'}
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
                    <Container.Flex
                        style={{padding: '15px 0'}}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button size="xl" loading={dummyLoading}>
                            Lanjut
                        </Button>
                    </Container.Flex>
                </form>
            </Inner>
        </Container>
    );
};

export default Suggestion;
