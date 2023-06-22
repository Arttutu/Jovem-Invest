import { styled } from "styled-components";
import Banner from "./Components/Banner";
import { GlobalStyle } from "./Components/GlobalStyles";
import Header from "./Components/Header";
import {  Branco } from "./Components/UI/variaveis";
import MenuMobile from "./Components/HeaderMobile";
import { useState } from "react";
import Rodape from "./Components/Rodape";
import SobreNos from "./Components/SobreNos";

const StylePage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Branco};
`


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return ( 
    <>
      <GlobalStyle/>
      <StylePage>
        <MenuMobile  menuopen = {menuOpen} setMenuOpen = {setMenuOpen}/>
        <Header setMenuOpen = {setMenuOpen}/>
        <main>
          <Banner/>
          <SobreNos />
        </main>
        <Rodape />
      </StylePage>
    </>
  )
}

export default App;
