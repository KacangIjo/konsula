import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import Container from "../../components/Container";
import Form from "../../components/Form";
import ConsultantChoice from "./ConsultantChoice";
import Calendar from "react-calendar";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Text = styled.p`
  margin: 0 0 10px;
  font-weight: 500;
  font-size: 1.25rem;
`;

const RadioWrapper = styled(Container.Flex)`
  @media all and (max-width: 767px) {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ImageRadio = styled(Form.Radio)`
  flex: 0 0 calc(33.3333% - 10px);
  max-width: 33.3333%;
  cursor: pointer;

  @media all and (max-width: 767px) {
    flex: 0 0 calc(100%);
    max-width: 100%;
  }
`;

const ChooseConsultantForm = () => {
  const navigate = useNavigate();
  const [dummyLoading, setDummyLoading] = useState(false);
  const { handleSubmit, control, getValues } = useForm();

  const onSubmit = () => {
    setDummyLoading(true);
    setTimeout(() => {
      alert("Terima kasih! Team kami akan segera menghubungi Anda!");
      navigate("/");
    }, 2000);
  };

  console.log(getValues("consultant"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form.Control>
        <Text>Pilih konsultan yang terbaik untuk Anda</Text>
        <Controller
          render={({ field: { name, onChange, value } }) => {
            console.log(value);

            return (
              <RadioWrapper gap="15px" flexWrap="wrap">
                <ImageRadio
                  value="agency"
                  checked={value === "agency"}
                  name={name}
                  onChange={onChange}
                  custom={true}
                >
                  <ConsultantChoice
                    className={value === "agency" ? "active" : undefined}
                    imgUrl="/images/agency.jpg"
                    label="Representatif dari Universitas"
                  />
                </ImageRadio>
                <ImageRadio
                  value="alumni"
                  checked={value === "alumni"}
                  name={name}
                  onChange={onChange}
                  custom={true}
                >
                  <ConsultantChoice
                    className={value === "alumni" ? "active" : undefined}
                    imgUrl="/images/alumni.jpg"
                    label="Alumni"
                  />
                </ImageRadio>
                <ImageRadio
                  value="fplanner"
                  checked={value === "fplanner"}
                  name={name}
                  onChange={onChange}
                  custom={true}
                >
                  <ConsultantChoice
                    className={value === "fplanner" ? "active" : undefined}
                    imgUrl="/images/fplanner.jpg"
                    label="Financial Planner"
                  />
                </ImageRadio>
              </RadioWrapper>
            );
          }}
          name="consultant"
          defaultValue="agency"
          control={control}
        />
      </Form.Control>

      <Form.Control style={{ padding: "100px 0 0" }}>
        <Text style={{ textAlign: "center" }}>Tentukan Jadwal Konsultasi</Text>

        <Container.Flex style={{ padding: "10px 0 0" }} justifyContent="center">
          <Calendar />
        </Container.Flex>
      </Form.Control>

      <Form.Control>
        <Text>Topik Yang Akan Dibahas:</Text>
        <ol style={{ paddingLeft: "20px" }}>
          <li>Universitas yang tersedia</li>
          <li>Biaya yang diperlukan</li>
          <li>Living costs</li>
          <li>Kehidupan sosial di sekitar kampus</li>
          <li>Beasiswa yang ditawarkan</li>
        </ol>
      </Form.Control>

      <Form.Control style={{ padding: "30px 0 0" }}>
        <Container.Flex justifyContent="center">
          <Button loading={dummyLoading} size="lg">
            Jadwalkan Konsultasi
          </Button>
        </Container.Flex>
      </Form.Control>
    </form>
  );
};

export default ChooseConsultantForm;
