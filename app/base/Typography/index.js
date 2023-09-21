import { defaultText } from '../Colors';
import { displayStyle, overlineStyle, textStyle, titleStyle } from './helpers';
import styled from 'styled-components';

const Display = styled.h1`
  color: ${(props) => (props.color ? props.color : defaultText)};
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  ${(props) => displayStyle(props.appearance)};
`;

const Overline = styled.h2`
  color: ${(props) => (props.color ? props.color : defaultText)};
  font-family: 'Public Sans', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  ${(props) => overlineStyle(props.appearance)};
`;

const Text = styled.p`
  color: ${(props) => (props.color ? props.color : defaultText)};
  font-family: 'Public Sans', sans-serif;
  font-weight: 400;
  ${(props) => textStyle(props.appearance)};
`;

const Title = styled.h1`
  color: ${(props) => (props.color ? props.color : defaultText)};
  font-family: 'Public Sans', sans-serif;
  font-weight: ${(props) => (props.extra ? '700' : '600')};
  ${(props) => titleStyle(props.appearance)};
`;

export { Display, Overline, Title, Text };
