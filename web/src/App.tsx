import React from 'react';
import HomePage from "./app/containers/HomePage";
import styled from 'styled-components';
import tw from "twin.macro";
import "./App.css";

const AppContainer=styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `};
`;

function App() {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}

export default App;
