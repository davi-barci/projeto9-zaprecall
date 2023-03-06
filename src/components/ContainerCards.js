import styled from "styled-components";
import QuestionCard from "./QuestionCard";
import { Card } from "./QuestionCard";
import { CardOpen } from "./QuestionCard";

export default function ContainerCards(props){
    return (
        <Cards>
            {props.cards.map((elem, index) => 
            <QuestionCard 
                key={index} 
                index={index} 
                pergunta={elem.question} 
                resposta={elem.answer}
                cardState = {props.cardState}
                setCardState = {props.setCardState}
                cardResult = {props.cardResult}
                setCardResult = {props.setCardResult}
                lastResult = {props.lastResult}
                setLastResult = {props.setLastResult}
            />)}
        </Cards>
    );
}

const Cards = styled.div`
    width: 100%;
    margin-top: 51px;
    margin-bottom: 121px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & ${Card}:nth-last-of-type(1){
        margin-bottom: 0px;
    }

    & ${CardOpen}:nth-last-of-type(1){
        margin-bottom: 0px;
    }
`;