import React from 'react';
import Container from '../../../components/Container';
import styled from 'styled-components';

const Inner = styled(Container.Inner)`
  padding: 0 32px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
  text-align: center;
  word-wrap: break-word;

  @media all and(max-width: 767px) {
    font-size: 2rem;
  }
`;

const BookingTitleSection = () => {
    return (
        <Inner>
            <Title>
                Konsultasikan Perencanaan
                <br/>
                Pendidikan Bersama Kami!
            </Title>
        </Inner>
    );
};

export default BookingTitleSection;
