import styled from "styled-components";

const FormTextArea = styled.textarea`
  padding: 10px;

  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 6px;

  font-family: "Fira Sans", sans-serif;
  font-size: 16px;
  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: "Fira Sans", sans-serif;
  }
`;

export default FormTextArea;
