import './App.css';
import React from 'react';
import Planer from './components/planer';
import { useState } from 'react';
import styled from 'styled-components';



const Body = styled.body`
  background-image: url("/static/winter.jpeg");
  width: 100vw;
`

function App() {

  return (
    <Body >
      <Planer/>
    </Body>
  );
}

export default App;
