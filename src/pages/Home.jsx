import React from "react";
import { ButtonContainer, CardContainer, IconContainer } from "./Holme.styles";
import IconStarImg from "../assets/images/icon-star.svg";

export function Home() {
  return (
    <CardContainer>
      <IconContainer>
        <img src={IconStarImg} alt="Ícone de estrela" />
      </IconContainer>

      <h1>Como foi o atendimento?</h1>
      <p>
        Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu
        feedback para podermos melhorar nosso atendimento!
      </p>
      <ButtonContainer>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </ButtonContainer>

      <button>Enviar</button>
    </CardContainer>
  );
}