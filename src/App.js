import './App.css';
// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line import/namespace, import/default, import/no-named-as-default, import/no-named-as-default-member
import Planer from './components/planer';
import styled from 'styled-components';

const Body = styled.body`
  background-image: url('/static/winter.jpeg');
  width: 100vw;
`;

function App() {
  return (
    <Body>
      <Planer />
    </Body>
  );
}

export default App;
