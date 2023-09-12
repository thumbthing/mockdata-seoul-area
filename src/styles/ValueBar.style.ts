import styled from 'styled-components';

const Bar = styled.div<{ height: number; ishovered: string }>`
  width: 10px;
  height: ${(props) => (props.height ? `${props.height}px` : 0)};
  border: 1px solid white;
  background-color: ${(props) => (props.ishovered === 'true' ? `black` : 'grey')};
  margin: 0.25px;
`;

export default Bar;
