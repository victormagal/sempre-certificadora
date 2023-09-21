import styled from 'styled-components';

const Card = styled.section`
  background-color: ${(props) =>
    props.background ? props.background : 'white'};
  border-radius: 0.75rem;
`;

export { Card };
