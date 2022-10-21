import React, { useState } from "react";
import Container from "../../../components/Container";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/Form";
import Button from "../../../components/Button";

const Inner = styled(Container.Inner)`
  padding: 0 32px;
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
  const navigate = useNavigate();
  const [dummyLoading, setDummyLoading] = useState(false);
  const [shouldDisable, setShouldDisable] = useState(false);
  const { register, handleSubmit, control } = useForm();

  const onSubmit = () => {
    setDummyLoading(true);

    setTimeout(() => {
      navigate("/suggestion");
    }, 2000);
  };

  return (
    <Container style={{ padding: "0 0 100px" }}>
      <Inner>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <p
            style={{ margin: "0 0 20px", fontWeight: 700, fontSize: "1.25rem" }}
          >
            Kami Ingin Mengenal Anda
          </p>
          <Form.Control className="horizontal center">
            <Form.Label>Nama</Form.Label>
            <Form.Input
              placeholder="Nama Anda"
              {...register("name", { disabled: shouldDisable })}
            />
          </Form.Control>

          <Form.Control className="horizontal">
            <Form.Label>Alamat</Form.Label>
            <Form.TextArea
              placeholder="Nama Anda"
              rows={5}
              {...register("address", { disabled: shouldDisable })}
            />
          </Form.Control>

          <Form.Control className="horizontal">
            <Form.Label>No. Handphone / WA</Form.Label>
            <Form.Input
              placeholder="Nomor Telepon"
              {...register("phone", { disabled: shouldDisable })}
            />
          </Form.Control>

          <Form.Control className="horizontal center">
            <Form.Label>
              Apakah Anda Nasabah
              <br />
              OCBC NISP?
            </Form.Label>
            <Form.Checkbox
              label="Ya"
              {...register("isCustomer", { disabled: shouldDisable })}
            />
          </Form.Control>

          <Form.Control className="horizontal center">
            <Form.Label>Umur Anak</Form.Label>
            <Form.Input
              placeholder="Umur Anak"
              {...register("age", { disabled: shouldDisable })}
            />
          </Form.Control>

          <Form.Control className="horizontal">
            <Form.Label>
              Jumlah Tabungan Pendidikan Yang Sudah Terkumpul
            </Form.Label>
            <Form.Input
              placeholder="Jumlah Tabungan"
              {...register("age", { disabled: shouldDisable })}
            />
          </Form.Control>

          <Form.Control className="horizontal">
            <Form.Label>Target Kampus</Form.Label>
            <div>
              <Form.Label>Lokasi</Form.Label>
              <div>
                <Form.RadioGroup>
                  <Form.Radio
                    label={"Luar Negeri"}
                    defaultChecked={true}
                    {...register("uniTargetDest", { disabled: shouldDisable })}
                  />
                  <Form.Radio
                    label={"Dalam Negeri"}
                    {...register("uniTargetDest", { disabled: shouldDisable })}
                  />
                </Form.RadioGroup>
              </div>

              <div style={{ margin: "20px 0 0" }}>
                <Form.Label>Tipe</Form.Label>
                <Form.RadioGroup>
                  <Form.Radio
                    label={"Swasta"}
                    defaultChecked={true}
                    {...register("uniTargetType", { disabled: shouldDisable })}
                  />
                  <Form.Radio
                    label={"Negeri"}
                    {...register("uniTargetType", { disabled: shouldDisable })}
                  />
                </Form.RadioGroup>
              </div>
            </div>
          </Form.Control>

          <Form.Control className="horizontal center">
            <Form.Label>Target masuk kuliah</Form.Label>
            <Form.Input
              type="number"
              placeholder="ex. 2030"
              {...register("year", { disabled: shouldDisable })}
            />
          </Form.Control>

          <Form.Control>
            <Controller
              render={({ field: { name, value, onChange } }) => (
                <Form.Checkbox
                  label="Saya belum memiliki preferensi"
                  name={name}
                  checked={value}
                  onChange={(e) => {
                    setShouldDisable(e.target.checked);
                    onChange(e);
                  }}
                />
              )}
              control={control}
              name="noPreference"
              defaultValue={false}
            />
          </Form.Control>

          <Form.Control>
            <Container.Flex
              style={{ padding: "30px 0 0" }}
              justifyContent="center"
            >
              <Button size="lg" loading={dummyLoading}>
                Mulai
              </Button>
            </Container.Flex>
          </Form.Control>
        </StyledForm>
      </Inner>
    </Container>
  );
};

export default UniversityPlannerForm;
