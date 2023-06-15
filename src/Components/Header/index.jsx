import React from 'react'
import { styled } from 'styled-components'
import { Branco, Font, VerdeEscuro2 } from '../UI/variaveis'
import { Box, Lista, Logo } from '../UI'
import {RxHamburgerMenu} from "react-icons/rx"

const HeaderStyle = styled.header`
    width: 100%;
    background-color: ${VerdeEscuro2} ;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0px 10px 10px #0000003f ;
`
const BoxLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${Branco};
    font-family: ${Font};
    font-weight: 900;
    > svg{
        font-size: 30px;
        color: ${Branco};
        display: none;
        @media (max-width:768px){
          display: block;
        
      }
    }
`
const BoxNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`
const ListaItem = styled.li`
    font-size: 1.4;
    font-weight: normal;
    color: ${Branco};
    font-family: ${Font};
`

export default function Header({setMenuOpen}) {
  return (
    <HeaderStyle>
      <Box>
        <BoxNav>
          <BoxLogo>
                <Logo>Home</Logo>  
                <RxHamburgerMenu onClick={() => setMenuOpen(true)} />          
          </BoxLogo>
          <nav>
            <Lista>
                <ListaItem>Login</ListaItem>
                <ListaItem>Cadastre</ListaItem>
                <ListaItem >SobreNós</ListaItem>
                
            </Lista>
          </nav>
        </BoxNav>
      
      </Box>
   
    </HeaderStyle>
  )
}
