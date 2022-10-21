import React from "react";
import Container from "../../../components/Container";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  background-color: cornflowerblue;
  color: #fff;
`;

const Inner = styled(Container.Inner)`
  max-width: 600px;
  margin: 0 auto;
`;

const ContentWrapper = styled(Container.Flex)`
  padding: 50px 0;
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

const Photo = styled.img`
  flex: 1 0 250px;
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
`;

const TextWrapper = styled.div`
  flex: 1 0 350px;
  padding-left: 30px;
`;

const GetToKnowFooter = () => {
  return (
    <StyledContainer>
      <Inner>
        <ContentWrapper alignItems="flex-start">
          <Photo src="/images/student.jpeg" alt="Alumni" />
          <TextWrapper>
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
