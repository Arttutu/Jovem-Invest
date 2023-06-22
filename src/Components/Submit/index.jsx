import React from 'react'
import {AiFillTwitterCircle, AiFillGoogleCircle, AiFillFacebook} from "react-icons/ai"
import { Bolinha, BotaoPrincipal } from '../UI'
import { VerdeEscuro1 } from '../UI/variaveis'
import { styled } from 'styled-components'

const BoxIcones = styled.div`
    display: flex;
    align-items: center;
    gap: 2em;
    cursor: pointer;
    >svg{
        transform: .7s;
        font-size: 35px;
        color: ${VerdeEscuro1};
    }
`
const BoxSubmit = styled.div`
    margin-top: 2em;
    display: flex;
    gap: 2em;
    align-items: center;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

export default function Submit() {
  return (
    <BoxSubmit>
        <BoxIcones>
            <AiFillFacebook />
            <AiFillGoogleCircle />
            <AiFillTwitterCircle />
        </BoxIcones>
        <BotaoPrincipal>Enviar<Bolinha /></BotaoPrincipal>
    </BoxSubmit>
  )
}
