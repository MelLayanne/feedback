import styled from "styled-components";

export const CardContainer = styled.div`
  background: ${props => props.theme.cardGradient};
  max-width: 41.2rem;
  padding: 3.2rem;
  border-radius: 3rem;
`;

export const IconContainer = styled.div`
  background: ${props => props.theme.feedbackButtonColor};
  padding: 1.6rem;
  width: 4.8rem;
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 2.4rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.2rem;

  button {
    width: 5.1rem;
    height: 5.1rem;
    border-radius: 50%;
    border: none;
    background: ${props => props.theme.feedbackButtonColor};
    color: ${props => props.theme.feedbackButtonText};
    font-weight: 700;
    line-height: 2.4rem;
    transition: all 0.4s;
    cursor: pointer;

    &:focus {
      color: ${props => props.theme.white};
      background: ${props => props.theme.feedbackButtonText};
    }

    &:hover {
      color: ${props => props.theme.white};
      background: ${props => props.theme.submitButtonColor};
    }
  }
`;

export const ResultContainer = styled.div`
  padding: 0.4rem 1.8rem;
  background: ${props => props.theme.feedbackButtonColor};
  width: fit-content;
  margin-inline: auto;
  margin-bottom: 3.2rem;

  p {
    color: ${props => props.theme.submitButtonColor};
  }
`;

export const ResulParagraph = styled.p`
  padding: 0.4rem 1.8rem;
  background: ${props => props.theme.feedbackButtonColor};
  width: fit-content;
  margin-inline: auto;
  margin-bottom: 3.2rem;

  p {
    color: ${props => props.theme.submitButtonColor};
  }
`;
