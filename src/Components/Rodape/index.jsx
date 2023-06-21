import React from 'react'
import { styled } from 'styled-components'
import {Branco, Font, VerdeEscuro1, VerdeEscuro2 } from '../UI/variaveis'
const StyledRodape = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;
    background-color: ${VerdeEscuro2};
`
const Legenda = styled.span`
    font-family: ${Font};
    font-size: 1em;
    color: ${Branco};
`
export default function Rodape() {
  return (
    <StyledRodape>
        <Legenda>Site Desenvolvido por Arthur Gomes todos os direitos reservados 2023. </Legenda>
    </StyledRodape>
  )
}
