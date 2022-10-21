import React from 'react';
import Container from '../../../components/Container';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  background-color: cornflowerblue;
  color: #fff;
`;

const Inner = styled(Container.Inner)`
  max-width: 600px;
  margin: 0 auto;

  @media all and (max-width: 767px) {
    max-width: 100%;
    margin: 0;

    padding: 0 32px;
  }
`;

const ContentWrapper = styled(Container.Flex)`
  padding: 50px 0;
  align-items: flex-start;

  @media all and (max-width: 767px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Name = styled.p`
  margin: 0 0 10px;
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
`;

const Desc = styled.p`
  font-size: 1rem;
  color: #fff;
`;

const Photo = styled.div`
  position: relative;
  flex: 1 0 250px;
  max-width: 250px;
  width: 250px;
  padding-top: 250px;
  margin: 0 auto;

  border-radius: 50%;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media all and (max-width: 400px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    padding-top: 100%;
  }
`;

const TextWrapper = styled.div`
  flex: 1 0 350px;
  padding-left: 30px;

  @media all and (max-width: 767px) {
    flex-basis: 100%;
    padding-left: 0;
    padding-top: 30px;
  }
`;

const GetToKnowFooter = () => {
    return (
        <StyledContainer>
            <Inner>
                <ContentWrapper>
                    <Photo>
                        <img src="/images/student.jpeg" alt="Alumni"/>
                    </Photo> <TextWrapper>
                    <Name>Marsha, 18</Name>
                    <Desc>
                        Tujuan awal saya adalah kuliah di Fakultas Teknik UI,
                        namun tidak lolos SBMPTN dan SIMAK. Saya lalu
                        mencari jalan lain dan akhirnya diterima di Jurusan Fisika NTU, Singapura.
                        Kendala saya adalah biaya Pendidikan dan living cost yang sangat tinggi
                        sehingga saya harus putar otak mencari-cari beasiswa yang tersedia.
                        Saya juga terpaksa tinggal di dormitori dan makan secukupnya karena uang beasiswa tidak cukup.
                    </Desc>
                </TextWrapper>
                </ContentWrapper>
            </Inner>
        </StyledContainer>
    );
};

export default GetToKnowFooter;
