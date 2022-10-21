import React from 'react';
import Container from '../../../components/Container';
import styled from 'styled-components';
import Title from '../../../components/Title';
import Stepper from '../../../components/Stepper';

const Inner = styled(Container.Inner)`
  max-width: 1000px;
  padding: 50px 0;

  @media all and (max-width: 991px) {
    padding: 50px 32px;
  }
`;

const labels = ['Anda sekarang di sini', 'Ngobrol dengan konsultan edukasi', 'Rencanakan keuangan bersama financial planner'];

const HomeStepperJourney = () => {
    return (
        <Inner>
            <Title as="h2" style={{maxWidth: '400px'}}>Bukan Hanya Uang Semesteran Yang Perlu Disiapkan</Title>
            <Stepper style={{padding: '45px 0'}} labels={labels}/>
        </Inner>
    );
};

export default HomeStepperJourney;
