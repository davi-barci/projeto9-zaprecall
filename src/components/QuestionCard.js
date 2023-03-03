import styled from "styled-components";
import setaPlay from "../assets/seta_play.png";

export default function QuestionCard(props){
    return (
        <NewCard>
            <p>{`Pergunta ${props.index}`}</p>
            <img src={setaPlay}></img>
        </NewCard>
    );
}

export const NewCard = styled.div`
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;

    p{
        width: 87px;
        height: 19px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
        margin-left: 15px;
    }

    img{
        width: 20px;
        height: 23px;
        margin-right: 15px;
    }
`;