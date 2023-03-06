import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import ContainerCards from './ContainerCards';
import Footer from './Footer';
import Title from './Title';
import cards from './mock';
import HomeScreen from './HomeScreen';


export default function App() {
  const [cardState, setCardState] = useState([...cards].fill(0));
  const [cardResult, setCardResult] = useState([...cards].fill(0));
  const [lastResult, setLastResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  return (
      <>
      <GlobalStyle/>
      {(currentPage === 0) ? 
        <HomeScreen setCurrentPage={setCurrentPage}/> : 
        <>
        <Title/>
        <ContainerCards 
            cards={cards} 
            cardState={cardState} 
            setCardState={setCardState}
            cardResult = {cardResult}
            setCardResult = {setCardResult}
            lastResult = {lastResult}
            setLastResult = {setLastResult}
        />
        <Footer
            cardResult = {cardResult}
            lastResult = {lastResult}
        />
        </>}
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