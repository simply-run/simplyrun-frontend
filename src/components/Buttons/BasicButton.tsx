'use client';

import styled, { css } from 'styled-components';

export type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
};

const getSizeStyles = ({ size = 'medium' }) => {
  switch (size) {
    case 'small':
      return css`
        font-size: 0.8rem;
      `;
    case 'large':
      return css`
        font-size: 1.2rem;
      `;
    default:
      return css`
        font-size: 1rem;
      `;
  }
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  cursor: pointer;
  line-height: 15.6px;
  height: 24px;
  font-weight: 600;
  padding: 4px 10px;

  ${props => getSizeStyles(props)}
  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
    // box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.25);
  }
`;

export const BasicButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
