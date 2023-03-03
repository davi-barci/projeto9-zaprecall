import { createGlobalStyle } from 'styled-components';
import ContainerCards from './ContainerCards';
import Footer from './Footer';
import Title from './Title';


export default function App() {
  return (
    <>
      <GlobalStyle/>
      <Title/>
      <ContainerCards/>
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