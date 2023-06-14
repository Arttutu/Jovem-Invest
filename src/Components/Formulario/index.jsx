import React from 'react'
import { styled } from 'styled-components'
import { Font } from '../UI/variaveis'
import { BotaoPrincipal } from '../UI'
const BoxForm = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;  
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
   width: 400px;
   padding: 10px;
`
export default function Formulario() {
  return (
   
    <BoxForm>
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
            <BotaoPrincipal></BotaoPrincipal>
        </FormStyle>
    </BoxForm>
  
  )
}
