import styled from 'styled-components';

const FormInput = styled.input`
  --padding: ${({type}) => type === 'range' ? '0px' : '10px'};

  padding: var(--padding);
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 6px;

  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export default FormInput;
