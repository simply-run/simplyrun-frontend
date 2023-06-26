import styled from 'styled-components';

function getHeight({ axis, size }: { axis: string; size: number }): number {
  return axis === 'horizontal' ? 1 : size;
}

function getWidth({ axis, size }: { axis: string; size: number }): number {
  return axis === 'vertical' ? 1 : size;
}

const Spacer = styled.span<{ axis: string; size: number }>`
  display: block;
  width: ${getWidth}px;
  height: ${getHeight}px;
  min-width: ${getWidth}px;
  min-height: ${getHeight}px;
`;
export default Spacer;
