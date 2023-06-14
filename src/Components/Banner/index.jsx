import React from 'react'
import { Box, Titulo } from '../UI'
import { styled } from 'styled-components'
import ImagemBanner from './Business growth-bro (2).png'
import Formulario from '../Formulario'
import { VerdeEscuro2 } from '../UI/variaveis'

const BoxBanner = styled.div `
    display: flex;
    align-items: center;
    padding-top: 100px;
    gap:2em;
    @media (max-width:768px){
        flex-direction: column;
    }
`
const BoxMensagem = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    width: 50%;
    box-sizing: border-box;
    border-right: 5px solid ${VerdeEscuro2};
    @media (max-width:768px){
        width: 100%;
        border-right: none;
        border-bottom:5px solid ${VerdeEscuro2};
        padding-bottom: 50px;
        margin-bottom: 50px;
    }
`
const Imagem = styled.img `
    max-width: 400px;
    height: auto;
`
export default function Banner() {
  return (
    <Box>
        <BoxBanner>
            <BoxMensagem>
                <Titulo>O melhor APP de finanças do Brasil</Titulo>
                <Imagem src={ImagemBanner}></Imagem>
            </BoxMensagem>
            <Formulario />
        </BoxBanner>
    </Box>
  )
}
