import { styled } from "styled-components";
import { Branco, Font, VerdeClaro, VerdeClaro2, VerdeEscuro1, VerdeEscuro2 } from "./variaveis";

export const Box = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`
export const Titulo = styled.h1`
    color: ${VerdeEscuro2};
    font-size: ${({cadastro}) => (cadastro ? "3em": "4em")};
    font-family: ${Font};
    @media (max-width:768px){
    font-size: ${({cadastro}) => (cadastro ? "2em" : "3em")};
   }
`
export const BotaoPrincipal = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    width: 200px;
    padding: 10px;
    background-color: ${VerdeClaro};
    border: none;
    border-radius: 1em;
    font-size: 1.2em;
    font-family: ${Font};
    color: ${Branco};
    transition: all.5s;
    &:hover{
        background-color: ${VerdeEscuro2};
        color: ${VerdeClaro2};
        scale: 1.1;
    }
   
`
export const Lista = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    cursor: pointer;
    gap: 2rem;

    @media (max-width:768px){
        display: none;
      
    }
`
export const Logo = styled.h2`
    font-family: ${Font};
    font-weight: bolder;
    color: ${Branco};
`
export const Bolinha = styled.div`
    background-color: ${Branco};
    width: 15px;
    height: 15px;
    border-radius: 100%;
    transition: all.5s;
    
`
export const Imagem = styled.img `
    max-width: ${({sobre}) => (sobre ? "600px" : "400px")};
    height: auto;
    filter:drop-shadow(10px 10px 10px #000000a0);
   @media (max-width:768px){
    max-width: ${({sobre}) => (sobre ? "300px" : "350px")};
   }
`