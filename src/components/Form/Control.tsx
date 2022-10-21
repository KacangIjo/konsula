import styled from "styled-components";
import FormLabel from "./Label";
import FormInput from "./Input";
import FormTextArea from "./TextArea";

const FormControl = styled.div`
  display: block;
  margin: 0 0 20px;
  width: 100%;

  ${FormLabel} {
    display: block;
    margin: 0 0 10px;
  }

  ${FormInput},
  ${FormTextArea},
  select {
    display: block;
  }

  &.horizontal {
    display: flex;
    align-items: flex-start;
    gap: 10px;

    &.center {
      align-items: center;
    }

    ${FormLabel},
    ${FormTextArea} {
      flex: 0 0 22%;
      max-width: 22%;
    }

    ${FormInput},
    ${FormTextArea},
    select {
      flex: 0 0 calc(78% - 10px);
      max-width: calc(78% - 10px);
    }

    @media all and (max-width: 600px) {
      display: block;

      ${FormLabel},
      ${FormTextArea} {
        max-width: 100%;
      }

      ${FormInput},
      ${FormTextArea},
      select {
        width: 100%;
        flex: 0 0 100%;
        max-width: 100%;
      }
    }
  }
`;

export default FormControl;
