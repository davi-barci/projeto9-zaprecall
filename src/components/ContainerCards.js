import styled from "styled-components";
import QuestionCard from "./QuestionCard";
import { NewCard } from "./QuestionCard";

export default function ContainerCards(){
    return (
        <Cards>
            <QuestionCard index="1" />
            <QuestionCard index="2" />
            <QuestionCard index="3" />
            <QuestionCard index="4" />
            <QuestionCard index="5" />
            <QuestionCard index="6" />
            <QuestionCard index="7" />
            <QuestionCard index="8" />
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

    & ${NewCard}:nth-last-of-type(1){
        margin-bottom: 0px;
    }
`;