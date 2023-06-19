import { styled } from "styled-components";
import Banner from "./Components/Banner";
import { GlobalStyle } from "./Components/GlobalStyles";
import Header from "./Components/Header";
import {  Branco } from "./Components/UI/variaveis";
import MenuMobile from "./Components/HeaderMobile";
import { useState } from "react";

const StylePage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Branco};
`

const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
`
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return ( 
    <>
      <GlobalStyle/>
      <StylePage>
        <MenuMobile  menuopen = {menuOpen} setMenuOpen = {setMenuOpen}/>
        <Header setMenuOpen = {setMenuOpen}/>
        <Main>
          <Banner/>
        </Main>
      </StylePage>
    </>
  )
}

export default App;
