import React from "react";
import Container from "../../../components/Container";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Inner = styled(Container.Inner)`
  max-width: 1000px;

  @media all and (max-width: 991px) {
    max-width: 500px;
  }

  @media all and (max-width: 767px) {
    padding: 0 32px;
    max-width: 400px;
  }

  @media all and (max-width: 575px) {
    max-width: 300px;
  }
`;

const Column = styled.div`
  padding: 0 15px;
  flex: 1 0 100%;

  max-width: 33.3333%;

  @media all and (max-width: 991px) {
    max-width: 100%;
  }
`;

const Square = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Content = styled(Container.Flex)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  padding: 20px;

  background-color: var(--color-primary);
  border-radius: 10px;
  text-align: center;
`;

const Text = styled.p`
  margin: 0 0 10px;
  color: #fff;
  font-size: 1.5rem;

  @media all and (max-width: 767px) {
    font-size: 1.25rem;
  }
`;

const TextFocused = styled(Text)`
  font-size: 3rem;
  font-weight: 700;

  @media all and (max-width: 767px) {
    font-size: 2.5rem;
  }
`;

const HomeGrid = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: "991px" });

  return (
    <Container style={{ padding: "100px 0 30px" }}>
      <Inner>
        <Container.Flex
          style={{ margin: "0 -15px" }}
          flexWrap={isSmallDevice ? "wrap" : undefined}
          gap={isSmallDevice ? "15px" : undefined}
        >
          <Column>
            <Square>
              <Content
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Text>
                  Tahukan Anda?
                  <br />
                  Inflasi Pendidikan Setiap Tahun
                </Text>
                <TextFocused>20% - 30%</TextFocused>
              </Content>
            </Square>
          </Column>
          <Column>
            <Square>
              <Content
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <TextFocused>5</TextFocused>
                <Text>
                  Kesalahan Orang Tua
                  <br />
                  Dalam Mempersiapkan Pendidikan
                </Text>
              </Content>
            </Square>
          </Column>
          <Column>
            <Square>
              <Content
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <TextFocused>70%</TextFocused>
                <Text>
                  Anak Gagal Kuliah
                  <br />
                  Di Universitas Idaman
                </Text>
              </Content>
            </Square>
          </Column>
        </Container.Flex>
      </Inner>
    </Container>
  );
};

export default HomeGrid;
