import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import ContainerCards from './ContainerCards';
import Footer from './Footer';
import Title from './Title';
import cards from './mock';


export default function App() {
  const [cardState, setCardState] = useState([...cards].fill(0));
  const [cardResult, setCardResult] = useState([...cards].fill(0));

  return (
    <>
      <GlobalStyle/>
      <Title/>
      <ContainerCards 
          cards={cards} 
          cardState={cardState} 
          setCardState={setCardState}
          cardResult = {cardResult}
          setCardResult = {setCardResult}
      />
      <Footer/>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
        border: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0;
    }
  body {
        background-color: #FB6B6B;
  }
`;