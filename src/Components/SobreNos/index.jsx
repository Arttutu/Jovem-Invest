import React from 'react'
import { Box, Imagem, Titulo } from '../UI'
import { styled } from 'styled-components'
import { Font } from '../UI/variaveis'
import ilustracao from './sobre.png'
import { Element } from 'react-scroll'

const BoxConteudo  =styled.section`
    margin: 100px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width:769px){
        flex-direction: column;
        margin: 100px 10px;
    }
`
const BoxDescricao = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.2em;
    width: 50%;

    @media (max-width:769px){
       width: 100%;
       margin: 0 20px;
    }
`
const BoxImagem = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 50%;
    @media (max-width:769px){
      max-width: 100%;
    }
`

const Texto  = styled.p`
    font-family: ${Font};
    font-size: 1.3em;
  
`
    
export default function SobreNos() {
  return (
    <Box>
        <Element name='sobre'>
            <BoxConteudo>
                    <BoxDescricao>
                        <Titulo>Nossa História</Titulo>
                        <Texto>Bem-vindo à Jovem Investe, a sua plataforma de educação financeira online para jovens profissionais e estudantes universitários.
                            Simplificamos o mundo dos serviços financeiros, oferecendo uma opção simples e intuitiva</Texto>
                        <Texto>Nosso objetivo é desmistificar o investimento, oferecendo uma experiência descomplicada. 
                            Através da plataforma Jovem Investe, você terá acesso a diversos produtos financeiros selecionados de acordo com o seu perfil pessoal,
                            além de materiais educativos personalizados.</Texto>
                        <Texto>Acreditamos que a educação financeira é essencial para uma vida financeira saudável e tranquila.
                            Por isso, estamos aqui para ajudá-lo a entender melhor suas finanças e criar um plano financeiro ideal para seus estudos.</Texto>
                        <Texto>Se junte a nós na jornada para um futuro financeiro mais seguro e próspero.
                            Bem-vindo à Jovem Investe, onde o seu futuro financeiro começa hoje!</Texto>
                    </BoxDescricao>
                    <BoxImagem>
                        <Imagem sobre src={ilustracao}/>
                    </BoxImagem>
            
            </BoxConteudo>
       </Element>
       
    </Box>
  )
}
