import React, { ChangeEvent, ReactNode } from "react";
import styled from "styled-components";
import { CommonProps } from "../../global-types";

const Label = styled.label`
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    margin-left: 3px;
    position: relative;
    top: 2px;
  }

  &.custom {
    display: inline-block;

    input[type="radio"] {
      display: none;
    }
  }
`;

type RadioProps = {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  children?: ReactNode;
  custom?: boolean;
} & CommonProps;

const Radio = ({
  label,
  children,
  custom = false,
  className,
  ...rest
}: RadioProps) => {
  return (
    <Label className={[custom ? "custom" : undefined, className].join(" ")}>
      <input {...rest} type="radio" />

      {children == null && label && <span>{label}</span>}

      {children && children}
    </Label>
  );
};

export default Radio;
