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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              accumsan mattis metus, at congue sapien volutpat a. Donec pharetra
              viverra orci, sit amet scelerisque sapien consequat nec. Nullam
              congue leo ut sapien facilisis, non placerat lectus viverra
            </Desc>
          </TextWrapper>
        </ContentWrapper>
      </Inner>
    </StyledContainer>
  );
};

export default GetToKnowFooter;
