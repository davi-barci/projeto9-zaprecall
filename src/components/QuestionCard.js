import styled from "styled-components";
import setaPlay from "../assets/seta_play.png";
import setaVirar from "../assets/seta_virar.png";

export default function QuestionCard(props){

    if (props.cardState[props.index] === 0){
        return (
            <Card> 
                <p>{`Pergunta ${props.index + 1}`}</p> 
                <img src={setaPlay}></img> 
            </Card>
        );
    }else if (props.cardState[props.index] === 1){
        return (
            <CardOpen>
                <p>{props.pergunte}</p>
                <div>
                    <img src={setaVirar}/>
                </div>
            </CardOpen>
        );
    }else if (props.cardState[props.index] === 2){
        return (
            <CardOpen>
                <p>{props.resposta}</p>
                <div>
                    <ButtonOption color="#FF3030">Não <br/> lembrei</ButtonOption>
                    <ButtonOption color="#FF922E">Quase não lembrei</ButtonOption>
                    <ButtonOption color="#2FBE34">Zap!</ButtonOption>
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

export const CardOpen = styled.div`
    width: 300px;
    height: 131px;
    background-color: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        width: 270px;
        height: 44px;
        margin-top: 18px;
        margin-bottom: 21.80px;
        word-wrap: break-word;
        overflow-y: auto;
        font-family: 'Recursive';
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
        justify-content: space-around;
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
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
`