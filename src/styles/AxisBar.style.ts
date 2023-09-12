import styled from 'styled-components';

export const AxisBarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LabelValue = styled.div<{ styleLabel: string }>`
  display: flex;
  flex-direction: ${(props) => (props.styleLabel === 'bar' ? 'column' : 'column-reverse')};
  justify-content: space-between;
`;
