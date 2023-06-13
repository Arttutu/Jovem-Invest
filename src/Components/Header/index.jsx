import React from 'react'
import { styled } from 'styled-components'
import {GrMoney} from "react-icons/gr"
import { Branco, Font, VerdeClaro } from '../UI/variaveis'

const HeaderStyle = styled.header`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    background-color: ${VerdeClaro} ;
    padding: 20px;
    border-radius: 20px;
    margin-top: 20px;
`
const BoxLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
    color: ${Branco};
    font-family: ${Font};
    font-weight: 900;
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
        <BoxLogo>
            Fintech APP
           <GrMoney size="25" color='#fff'/>
        </BoxLogo>
      <nav>
        <Lista>
            <ListaItem>Login</ListaItem>
            <ListaItem>Cadastre</ListaItem>
            <ListaItem>Sobre Nós</ListaItem>
            <ListaItem>Fale Conosco</ListaItem>
        </Lista>
      </nav>
    </HeaderStyle>
  )
}
