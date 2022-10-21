import React, { useState } from "react";
import Container from "../../../components/Container";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/Form";
import Button from "../../../components/Button";

const Inner = styled(Container.Inner)`
  padding: 0 32px;
`;

const UpperWrapper = styled(Container.Flex)`
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  flex: 1 0 40%;
  max-width: 40%;
  margin: 0;
  font-size: 2.5rem;
  text-transform: uppercase;
  padding: 0 30px 0 0;
`;

const TopicWrapper = styled.div`
  flex: 1 0 60%;
  max-width: 60%;
  border-left: 1px solid #000;
  padding: 0 0 0 30px;

  ul {
    margin: 0;
    padding-left: 10px;
  }
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

const UniversityPlannerForm = () => {
  const [dummyLoading, setDummyLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    setDummyLoading(true);

    const timeoutWa = setTimeout(() => {
      window.open("https://wa.link/nj8lrt", "_blank");
    }, 2000);

    const timeoutRedirect = setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    return () => {
      clearTimeout(timeoutWa);
      clearTimeout(timeoutRedirect);
    };
  };

  return (
    <Container style={{ padding: "50px 0 100px" }}>
      <Inner>
        <UpperWrapper style={{ padding: "0 0 30px" }} alignItems="stretch">
          <Title>Topik Yang Akan Dibahas</Title>
          <TopicWrapper>
            <ul>
              <li>Syarat-syarat pendaftaran</li>
              <li>Yang butuh dipersiapkan selain biaya</li>
              <li>Jenjang Karir</li>
              <li>Kurikulum</li>
              <li>Kehidupan di sekitar kampus</li>
              <li>Beasiswa</li>
            </ul>
          </TopicWrapper>
        </UpperWrapper>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <p
            style={{ margin: "0 0 20px", fontWeight: 700, fontSize: "1.25rem" }}
          >
            Kami Ingin Mengenal Anda lebih jauh
          </p>
          <Form.Control className="horizontal center">
            <Form.Label>Nama</Form.Label>
            <Form.Input placeholder="Nama Anda" {...register("name")} />
          </Form.Control>

          <Form.Control className="horizontal">
            <Form.Label>No. Handphone / WA</Form.Label>
            <Form.Input placeholder="Nomor Telepon" {...register("phone")} />
          </Form.Control>

          <Form.Control className="horizontal center">
            <Form.Label>Umur Anak</Form.Label>
            <Form.Input placeholder="Umur Anak" {...register("age")} />
          </Form.Control>

          <Form.Control className="horizontal center">
            <Form.Label>Perkiraan masuk kuliah</Form.Label>
            <Form.Input
              type="number"
              placeholder="ex. 2030"
              {...register("year")}
            />
          </Form.Control>

          <Form.Control>
            <Container.Flex
              style={{ padding: "30px 0 0" }}
              justifyContent="center"
            >
              <Button
                style={{ maxWidth: "200px" }}
                size="lg"
                loading={dummyLoading}
              >
                Ngobrol dengan representatif
                <br /> universitas sekarang
              </Button>
            </Container.Flex>
            <p
              style={{
                textAlign: "center",
                color: "var(--color-primary)",
                textTransform: "uppercase",
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

export default UniversityPlannerForm;
