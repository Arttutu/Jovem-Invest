import { styled } from "styled-components";
import Banner from "./Components/Banner";
import { GlobalStyle } from "./Components/GlobalStyles";
import Header from "./Components/Header";
import {  Branco } from "./Components/UI/variaveis";

const StylePage = styled.div`
  width: 100%;
  background-color: ${Branco};
`
function App() {
  return ( 
    <>
      <GlobalStyle/>
      <StylePage>
        <Header />
        <main>
          <Banner/>
        </main>
      </StylePage>
    </>
  )
}

export default App;
