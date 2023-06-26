'use client';
import styled from 'styled-components';
import { BasicButton, ButtonProps } from './BasicButton';

function getButtonStyles(type = 'square') {
  switch (type) {
    case 'rounded':
      return `
        border-radius: 8px;
      `;
    case 'full-rounded':
      return `
        border-radius: 17px;
        `;
    case 'square':
      return `
            border-radius: 0;
          `;
    default:
      return `
        border-radius: 0;
      `;
  }
}

interface FillButtonProps extends ButtonProps {
  type: 'rounded' | 'square' | 'full-rounded';
}

const StyledButton = styled(BasicButton).attrs({
  className: 'bg-primary',
})<FillButtonProps>`
  color: #fff;
  ${props => getButtonStyles(props.type)}
`;

const FillButton: React.FC<FillButtonProps> = ({ ...props }) => {
  return <StyledButton {...props}></StyledButton>;
};

export default FillButton;
