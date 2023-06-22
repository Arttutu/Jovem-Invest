import React from 'react'
import { styled } from 'styled-components'
import { Titulo } from '../UI'
import Formulario from '../Formulario'


const BoxForm = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:2rem;
    justify-content: center;
    width: 50%;  
    @media (max-width:768px){
        width: 100%;
        margin: 0 20px;
    }
`




export default function CaixaFormulario() {
  return (
   <>
    <BoxForm>
       <Titulo cadastro>Faça o seu Cadastro</Titulo>
        <Formulario />
    </BoxForm>
  
   </>

  )
}
