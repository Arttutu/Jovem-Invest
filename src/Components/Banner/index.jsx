import React from 'react'
import { Box, Imagem, Titulo } from '../UI'
import { styled } from 'styled-components'
import ImagemBanner from './banner.png'

import { VerdeEscuro2 } from '../UI/variaveis'
import CaixaFormulario from '../CaixaFormulario'

const BoxBanner = styled.div `
    height: 100%;
    margin: 100px 0px;
    display: flex;
    align-items: center;

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
        width: 90%;
        border-right: none;
        border-bottom:5px solid ${VerdeEscuro2};
        padding-bottom: 50px;
        margin-bottom: 50px;
    }
`

export default function Banner() {
  return (
    <Box>
        <BoxBanner>
            <BoxMensagem>
                <Titulo>O melhor APP de finanças do Brasil</Titulo>
                <Imagem src={ImagemBanner}></Imagem>
            </BoxMensagem>
           <CaixaFormulario />
        </BoxBanner>
    </Box>
  )
}
