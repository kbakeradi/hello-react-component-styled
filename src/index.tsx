import * as React from 'react'
import styled from 'styled-components';
import './styles.scss'

type HelloProps = {
  name: string;
}

const Component = styled.div`
  background-color: rgb(143, 207, 249);
  color:#333;
  font-weight: bold;
  font-size: x-large;
`;

const HelloComponent:React.FC<HelloProps> = ({ name }) => {
  // name is string!
  return <Component>HelloComponent: "Hello {name}"</Component>
};

export default HelloComponent;
