import React from 'react';
import Container from '../../../components/Container';
import styled from 'styled-components';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

const Background = styled.div`
  padding: 45px;
  border-radius: 10px;
  background-color: var(--color-primary);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Inner = styled(Container.Inner)`
  padding: 0 32px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;

  color: #fff;

  @media all and (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

const HomeAction = () => {
    const navigate = useNavigate();
    
    const onClick = () => {
        navigate('/suggestion', {preventScrollReset: false});
    };
    
    return (
        <Container style={{padding: '0 0 100px'}}>
            <Inner>
                <Background>
                    <Text>
                        Cari Tahu Biaya Kuliah Di Masa Depan
                    </Text>
                    
                    <Container.Flex
                        style={{padding: '30px 0 0'}}
                        justifyContent="center"
                    >
                        <Button onClick={onClick} size="lg" theming="white">
                            Cek Sekarang
                        </Button>
                    </Container.Flex>
                </Background>
            </Inner>
        </Container>
    );
};

export default HomeAction;
