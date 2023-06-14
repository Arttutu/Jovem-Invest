import React from 'react'
import { styled } from 'styled-components'
import {GrMoney} from "react-icons/gr"
import { Branco, Font, VerdeClaro, VerdeEscuro2 } from '../UI/variaveis'
import { Box } from '../UI'

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
    gap: 1em;
    color: ${Branco};
    font-family: ${Font};
    font-weight: 900;
    .icone{
      color: ${Branco};
      font-size: 35px;
    }
`
const Lista = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    cursor: pointer;
    gap: 2rem;
`
const ListaItem = styled.li`
    font-size: 1.4;
    font-weight: normal;
    color: ${Branco};
    font-family: ${Font};
`
export default function Header() {
  return (
    <HeaderStyle>
      <Box>
        <BoxLogo>
              <h2>Home</h2>
            <GrMoney  className='icone'/>
        </BoxLogo>
        <nav>
          <Lista>
              <ListaItem>Login</ListaItem>
              <ListaItem>Cadastre</ListaItem>
              <ListaItem>Sobre Nós</ListaItem>
          </Lista>
        </nav>
      </Box>
   
    </HeaderStyle>
  )
}
