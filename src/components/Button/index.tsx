import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { CommonProps } from '../../global-types';

type Props = {
    theming?: 'primary' | 'white';
    size?: 'md' | 'lg' | 'xl';
};

const StyledButton = styled.button<Props>`
  --bg-color: ${({theming}) =>
          theming === 'primary' ? 'var(--color-primary)' : '#fff'};
  --border-color: ${({theming}) =>
          theming === 'primary' ? 'var(--color-primary)' : '#fff'};
  --font-color: ${({theming}) => (theming === 'primary' ? '#fff' : '#000')};
  --padding: ${({size}) =>
          size === 'lg' ? '12px 30px' : size === 'xl' ? '16px 100px' : '8px 16px'};

  max-width: 100%;

  padding: var(--padding);
  outline: none;
  border: 1px solid var(--border-color);
  border-radius: 6px;

  font-family: "Fira Sans", sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;

  background-color: var(--bg-color);
  color: var(--font-color);

  cursor: pointer;

  opacity: 1;
  transition: 300ms ease-in-out;

  &:disabled {
    opacity: 0.7;
  }

  @media all and (max-width: 575px) {
    --padding: ${({size}) =>
            size === 'lg' ? '12px 5%' : size === 'xl' ? '16px 10%' : '8px 5%'};
  }
`;

type ButtonProps = {
    loading?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick?: (e: MouseEvent<HTMLButtonElement>) => any;
    children?: React.ReactNode;
} & Props &
    CommonProps;

const Button = ({
                    children,
                    type,
                    loading,
                    onClick,
                    size = 'md',
                    theming = 'primary',
                    style,
                    className
                }: ButtonProps) => {
    return (
        <StyledButton
            onClick={onClick}
            type={type}
            size={size}
            theming={theming}
            disabled={loading}
            style={style}
            className={className}
        >
            {loading && <span>Loading...</span>}
            {!loading && children}
        </StyledButton>
    );
};

export default Button;
