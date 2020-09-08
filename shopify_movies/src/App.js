import React, { useState, useEffect, useRef } from 'react';

//styling
import styled from "styled-components";
import './App.css';

//components
import Movies from "./components/Movies";

//styled-components
const Top = styled.div`
  width: 80%;
  margin: 0 auto;
`;

function App(props) {
  return (
    <div className="App">

      <Top>

        <Movies />

      </Top>

    </div>
  );
}

export default App;
