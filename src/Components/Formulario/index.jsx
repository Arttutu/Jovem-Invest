import React from 'react'
import { styled } from 'styled-components'
import { Font, VerdeEscuro1 } from '../UI/variaveis'
import Submit from '../Submit'



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
        width: 300px;
        
    }
`
export default function Formulario() {
  return (
    <>
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
            <Submit />
        </FormStyle>
    </>
  )
}
