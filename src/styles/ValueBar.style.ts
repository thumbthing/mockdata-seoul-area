import styled from 'styled-components';

const Bar = styled.div<{ height: number; ishovered: string }>`
  width: 10px;
  height: ${(props) => (props.height ? `${props.height}px` : 0)};
  background-color: ${(props) => (props.ishovered === 'true' ? `orange` : 'yellow')};
`;

export default Bar;
