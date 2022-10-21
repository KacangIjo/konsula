import React from "react";
import Container from "../Container";
import styled from "styled-components";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonyItem from "./TestimonyItem";

const Title = styled.h3`
  margin: 0 0 10px;
  font-size: 2rem;
  font-weight: 700;
`;

const Inner = styled(Container.Inner)`
  padding: 0 32px;
`;

const SliderWrapper = styled.div`
  padding: 10px 0;
`;

const Testimonies = () => {
  return (
    <Container style={{ padding: "0 0 100px" }}>
      <Inner>
        <Title>Apa Kata Mereka?</Title>
        <SliderWrapper>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
            speed={1000}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              991: {
                slidesPerView: 4,
              },
              767: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <TestimonyItem />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonyItem />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonyItem />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonyItem />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonyItem />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonyItem />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonyItem />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonyItem />
            </SwiperSlide>
          </Swiper>
        </SliderWrapper>
      </Inner>
    </Container>
  );
};

export default Testimonies;
