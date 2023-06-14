import { styled } from "styled-components";
import { Font, VerdeClaro2, VerdeEscuro2 } from "./variaveis";

export const Box = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`
export const Titulo = styled.h1`
    color: ${VerdeClaro2};
    font-size: 5em;
    font-style: ${Font};
    
`
export const BotaoPrincipal = styled.button`
    width: 200px;
    padding: 20px;
    background-color: ${VerdeEscuro2};
    border: none;
    border-radius: 1em;
`