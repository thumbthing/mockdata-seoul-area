import styled from 'styled-components';

export const AxisBarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LabelValue = styled.div<{ stylelabel: string }>`
  display: flex;
  flex-direction: ${(props) => (props.stylelabel === 'bar' ? 'column' : 'column-reverse')};
  justify-content: space-between;
`;
