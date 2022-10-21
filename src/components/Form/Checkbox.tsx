import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { CommonProps } from "../../global-types";

const Label = styled.label`
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    margin-left: 3px;
    position: relative;
    bottom: 1px;
  }
`;

type RadioProps = {
  label: string;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
} & CommonProps;

const Checkbox = ({ label, ...rest }: RadioProps) => {
  return (
    <Label>
      <input {...rest} type="checkbox" />
      <span>{label}</span>
    </Label>
  );
};

export default Checkbox;
