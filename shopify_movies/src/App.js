import React, { useState, useEffect, useRef } from 'react';

//styling
import styled from "styled-components";
import './App.css';

//components
import SearchBar from "./components/SearchBar";

//styled-components
const Top = styled.div`
  width: 80%;
  margin: 0 auto;
`;

function App(props) {
  return (
    <div className="App">

      <Top>

        <SearchBar />

      </Top>

    </div>
  );
}

export default App;
