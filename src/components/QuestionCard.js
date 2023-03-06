import styled from "styled-components";
import setaPlay from "../assets/seta_play.png";
import iconeCerto from "../assets/icone_certo.png";
import iconeErro from "../assets/icone_erro.png";
import iconeQuase from "../assets/icone_quase.png";
import setaVirar from "../assets/seta_virar.png";

export default function QuestionCard(props){
    
    const imagens = [setaPlay, iconeErro, iconeQuase, iconeCerto];
    const dataTestImagens = ["play-btn", "no-icon", "partial-icon", "zap-icon"];

    function changeState(state){
        let cardArray = [...props.cardState];
        cardArray[props.index] = state;
        props.setCardState(cardArray);
    }

    function changeResult(result){
        let cardArray = [...props.cardResult];
        cardArray[props.index] = result;
        props.setCardResult(cardArray);
        changeState(0);
    }

    if (props.cardState[props.index] === 0){
        return (
            <Card result={props.cardResult[props.index]} data-test="flashcard"> 
                <p data-test="flashcard-text">{`Pergunta ${props.index + 1}`}</p> 
                <img src={imagens[props.cardResult[props.index]]} onClick={() => (props.cardResult[props.index] === 0) && changeState(1)} data-test={dataTestImagens[props.cardResult[props.index]]}></img> 
            </Card>
        );
    }else if (props.cardState[props.index] === 1){
        return (
            <CardOpen state="1" data-test="flashcard">
                <p data-test="flashcard-text">{props.pergunta}</p>
                <div>
                    <img src={setaVirar} data-test="turn-btn" onClick={()=> changeState(2)}/>
                </div>
            </CardOpen>
        );
    }else if (props.cardState[props.index] === 2){
        return (
            <CardOpen state="2" data-test="flashcard">
                <p data-test="flashcard-text">{props.resposta}</p>
                <div>
                    <ButtonOption data-test="no-btn" color="#FF3030" onClick={() => changeResult(1)}>Não <br/> lembrei</ButtonOption>
                    <ButtonOption data-test="partial-btn" color="#FF922E" onClick={() => changeResult(2)}>Quase não lembrei</ButtonOption>
                    <ButtonOption data-test="zap-btn" color="#2FBE34" onClick={() => changeResult(3)}>Zap!</ButtonOption>
                </div>
            </CardOpen>
        );
    }
}

export const Card = styled.div`
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
        font-family: 'Recursive', sans-serif;;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => (props.result === 0) ? "#333333" : (props.result === 1) ? "#FF3030" : (props.result === 2) ? "#FF922E" : "#2FBE34"};
        margin-left: 15px;
        text-decoration-line: ${props => (props.result !== 0) ? "line-through" : "none"} ;
    }

    img{
        width: 23px;
        height: 23px;
        margin-right: 15px;
    }
`;

export const CardOpen = styled.div`
    width: 300px;
    height: 177px;
    background-color: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        width: 270px;
        height: 90px;
        margin-top: 18px;
        margin-bottom: 21.80px;
        word-wrap: break-word;
        overflow-y: auto;
        font-family: 'Recursive',  sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }

    div{
        width: 100%;
        height: 47.17px;
        display: flex;
        justify-content: ${props => (props.state === "1") ? "flex-end" : "space-around"};
        align-items: center;

        img{
            width: 30px;
            height: 20px;
            margin-right: 15px;
        }
    }
`

export const ButtonOption = styled.button`
    width: 85.17px;
    height: 37.17px;
    background-color: ${props => props.color};
    border-radius: 5px;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
`