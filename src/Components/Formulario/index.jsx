import React from 'react'
import { styled } from 'styled-components'
import { Font, VerdeClaro2, VerdeEscuro1 } from '../UI/variaveis'
import { BotaoPrincipal, Titulo } from '../UI'
import {AiFillTwitterCircle, AiFillGoogleCircle, AiFillFacebook} from "react-icons/ai"
const BoxForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:2rem;
    justify-content: center;
    width: 50%;  
    @media (max-width:768px){
        width: 100%;
    }
`
const FormStyle = styled.form`
    display: flex;
    gap: 1em;
    flex-direction: column;
`
const LabelStyle = styled.label`
    font-style: ${Font};
    font-size: 1.5em;
`
const InputStyle = styled.input`
   font-size: 1.3em;
   font-style: ${Font};
   width: 400px;
   margin: 0 auto;
   height: auto;
   padding: 10px;
   box-sizing: border-box;
   @media (max-width:768px){
        width: 350px;
        
    }
`
const BoxIcones = styled.div`
margin-top: 2em;
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

export default function Formulario() {
  return (
   <>
    <BoxForm>
        <Titulo cadastro >Faça seu Cadastro</Titulo>
        <FormStyle>
            <LabelStyle >Nome Completo:</LabelStyle>
            <InputStyle type="text" id="fname" name="fname" />
            <LabelStyle>CPF:</LabelStyle>
            <InputStyle type="number" id="lname" name="lname" />
            <LabelStyle>Email:</LabelStyle>
            <InputStyle type="email" id="lname" name="lname" />
            <LabelStyle >Criar uma Senha:</LabelStyle>
            <InputStyle type="password" id="lname" name="lname" />
            <LabelStyle>Repita a senha:</LabelStyle>
            <InputStyle type="password" id="lname" name="lname" />
            <BoxIcones>
                <AiFillFacebook />
                <AiFillGoogleCircle />
                <AiFillTwitterCircle />
            <BotaoPrincipal>Enviar</BotaoPrincipal>
            </BoxIcones>
        </FormStyle>
    </BoxForm>
  
   </>

  )
}
