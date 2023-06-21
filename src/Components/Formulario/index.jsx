import React from 'react'
import { styled } from 'styled-components'
import { Font, VerdeClaro2, VerdeEscuro1 } from '../UI/variaveis'
import { Bolinha, BotaoPrincipal, Titulo } from '../UI'
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
    font-weight: bold;
    font-size: 1.5em;
`
const InputStyle = styled.input`
   font-size: 1.3em;
   font-style: ${Font};
   width: 400px;
   margin: 0 auto;

   padding: 10px;
   box-sizing: border-box;
   &:hover{
    border: 3px solid ${VerdeEscuro1}
   }
 

   @media (max-width:768px){
        width: 350px;
        
    }
`
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


export default function Formulario() {
  return (
   <>
    <BoxForm>
        <Titulo cadastro="true" >Faça seu Cadastro</Titulo>
        <FormStyle>
            <LabelStyle >Nome Completo:</LabelStyle>
            <InputStyle type="text"  placeholder='Seu nome completo'/>
            <LabelStyle>CPF:</LabelStyle>
            <InputStyle type="number"   placeholder='xxx.xxx.xxx-xx' />
            <LabelStyle>Email:</LabelStyle>
            <InputStyle type="email"  placeholder='name@dominio.com' />
            <LabelStyle >Criar uma Senha:</LabelStyle>
            <InputStyle type="password"  placeholder='Senha de 8 dgítos' />
            <LabelStyle>Repita a senha:</LabelStyle>
            <InputStyle type="password"   placeholder='Repita a senha' />
            <BoxSubmit>
                <BoxIcones>
                    <AiFillFacebook />
                    <AiFillGoogleCircle />
                    <AiFillTwitterCircle />
                </BoxIcones>
                <BotaoPrincipal>Enviar<Bolinha /></BotaoPrincipal>
                 
                
            </BoxSubmit>
        </FormStyle>
    </BoxForm>
  
   </>

  )
}
