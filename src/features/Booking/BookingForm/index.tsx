import React, { useState } from 'react';
import Container from '../../../components/Container';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Form from '../../../components/Form';
import Button from '../../../components/Button';

const Inner = styled(Container.Inner)`
  padding: 0 32px;
`;

const StyledForm = styled.form`
  display: block;
  margin: 0 auto;
  padding: 30px;
  width: 600px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media all and (max-width: 767px) {
    width: 100%;
  }
`;

const BookingForm = () => {
    const [dummyLoading, setDummyLoading] = useState(false);
    const {register, handleSubmit} = useForm();
    
    const onSubmit = () => {
        setDummyLoading(true);
        
        const timeoutWa = setTimeout(() => {
            window.open('https://wa.link/nj8lrt', '_blank');
        }, 2000);
        
        const timeoutRedirect = setTimeout(() => {
            window.location.href = '/';
        }, 3000);
        
        return () => {
            clearTimeout(timeoutWa);
            clearTimeout(timeoutRedirect);
        };
    };
    
    return (
        <Container style={{padding: '50px 0'}}>
            <Inner>
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
                    <p
                        style={{margin: '0 0 20px', textAlign: 'center', fontWeight: 700, fontSize: '1.25rem'}}
                    >
                        Kami Ingin Mengenal Anda lebih jauh
                    </p>
                    <Form.Control className="horizontal center">
                        <Form.Label>Nama</Form.Label>
                        <Form.Input placeholder="Nama Anda" {...register('name')} />
                    </Form.Control>
                    
                    <Form.Control className="horizontal">
                        <Form.Label>No. Handphone / WA</Form.Label>
                        <Form.Input placeholder="Nomor Telepon" {...register('phone')} />
                    </Form.Control>
                    
                    <Form.Control className="horizontal center">
                        <Form.Label>Tabungan Pendidikan Saat Ini</Form.Label>
                        <Form.Input placeholder="Tabungan" {...register('age')} />
                    </Form.Control>
                    
                    <Form.Control>
                        <Container.Flex
                            style={{padding: '30px 0 0'}}
                            justifyContent="center"
                        >
                            <Button
                                size="xl"
                                loading={dummyLoading}
                            >
                                Booking Jadwal Konsultasi
                            </Button>
                        </Container.Flex>
                        <p
                            style={{
                                textAlign: 'center',
                                color: 'var(--color-primary)',
                                textTransform: 'uppercase'
                            }}
                        >
                            Tidak dipungut biaya apapun
                        </p>
                    </Form.Control>
                </StyledForm>
            </Inner>
        </Container>
    );
};

export default BookingForm;
