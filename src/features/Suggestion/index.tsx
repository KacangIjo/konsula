import React, { useState } from "react";
import Container from "../../components/Container";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import UniversitySuggestionItem from "./UniversitySuggestionItem";
import { useForm, Controller } from "react-hook-form";
import Form from "../../components/Form";
import Button from "../../components/Button";

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

const ImageRadio = styled(Form.Radio)`
  flex: 1 0 100%;
  max-width: calc(25% - 7.5px);
  width: 100%;
`;

const Suggestion = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const [dummyLoading, setDummyLoading] = useState(false);

  const onSubmit = () => {
    setDummyLoading(true);
    setTimeout(() => {
      navigate("/consultant");
    }, 2000);
  };

  return (
    <Container style={{ padding: "50px 0 50px" }}>
      <Inner>
        <Text>Bukan Hanya Uang Semesteran Yang Perlu Disiapkan</Text>
        <SubText>Pilih Universitas yang sesuai untuk anak Anda</SubText>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Container.Flex
            style={{ padding: "30px 0" }}
            flexWrap={"wrap"}
            alignItems="stretch"
            gap={"10px"}
          >
            <Controller
              render={({ field: { name, value, onChange } }) => (
                <>
                  <ImageRadio
                    name={name}
                    onChange={onChange}
                    value="1"
                    checked={value === "1"}
                    custom={true}
                  >
                    <UniversitySuggestionItem
                      imgUrl="/images/ntu.jpg"
                      tuition="IDR 200.000.000"
                      admin="IDR 15.000.000"
                      living="IDR 30.000.000"
                      rank="4"
                      isActive={value === "1"}
                    />
                  </ImageRadio>
                  <ImageRadio
                    name={name}
                    onChange={onChange}
                    value="2"
                    checked={value === "2"}
                    custom={true}
                  >
                    <UniversitySuggestionItem
                      imgUrl="/images/ntu.jpg"
                      tuition="IDR 200.000.000"
                      admin="IDR 15.000.000"
                      living="IDR 30.000.000"
                      rank="4"
                      isActive={value === "2"}
                    />
                  </ImageRadio>

                  <ImageRadio
                    name={name}
                    onChange={onChange}
                    value="3"
                    checked={value === "3"}
                    custom={true}
                  >
                    <UniversitySuggestionItem
                      imgUrl="/images/ntu.jpg"
                      tuition="IDR 200.000.000"
                      admin="IDR 15.000.000"
                      living="IDR 30.000.000"
                      rank="4"
                      isActive={value === "3"}
                    />
                  </ImageRadio>

                  <ImageRadio
                    name={name}
                    onChange={onChange}
                    value="4"
                    checked={value === "4"}
                    custom={true}
                  >
                    <UniversitySuggestionItem
                      imgUrl="/images/ntu.jpg"
                      tuition="IDR 200.000.000"
                      admin="IDR 15.000.000"
                      living="IDR 30.000.000"
                      rank="4"
                      isActive={value === "4"}
                    />
                  </ImageRadio>
                </>
              )}
              name="uni"
              control={control}
              defaultValue={"1"}
            />
          </Container.Flex>
          <Container.Flex justifyContent="center" alignItems="center">
            <Controller
              render={({ field: { name, value, onChange } }) => (
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
            style={{ padding: "15px 0" }}
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
