import styled from "styled-components";
import iconeCerto from "../assets/icone_certo.png";
import iconeErro from "../assets/icone_erro.png";
import iconeQuase from "../assets/icone_quase.png";

export default function Footer(props){
    const imagens = [iconeErro, iconeQuase, iconeCerto];

    function showFeedback(){
        if(props.lastResult.length === props.cardResult.length && props.cardResult.filter(elem => elem === 1).length === 0){
            return 0;
        }else if(props.lastResult.length === props.cardResult.length && props.cardResult.filter(elem => elem === 1).length !== 0){
            return 1;
        }else{
            return 2;
        }
    }

    return (
        <ContainerFooter data-test="footer" showFeedback={showFeedback()}>
            {(showFeedback() === 0) ? <><FeedbackTitle>🥳 Parabéns!</FeedbackTitle> <FeedbackMessage>Você não esqueceu de <br/> nenhum flashcard!</FeedbackMessage></> 
            : (showFeedback() === 1) ? <><FeedbackTitle>😢 Putz...</FeedbackTitle> <FeedbackMessage>Ainda faltam alguns... <br/> Mas não desanime!</FeedbackMessage></>
            : <></>}
            <CountText>{props.cardResult.filter(elem => elem !== 0).length}/{props.cardResult.length} CONCLUÍDOS</CountText>
            {(props.lastResult.length !== 0) &&
                <div>
                    {props.lastResult.map((elem, index) => (
                        <img key={index} src={imagens[elem-1]}></img>
                    ))}
                </div>
            }
        </ContainerFooter>
    );
}

const ContainerFooter = styled.div`
    width: 100%;
    height: ${props => (props.showFeedback === 0 || props.showFeedback === 1) ? "170px" : "70px"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    div{
        width: 100%;
        height: 23px;
        margin-top: 6px;
        display: flex;
        justify-content: center;

        img{
            width: 23px;
            height: 23px;
            margin-right: 5px;
        }
    }
`;

const CountText = styled.p`
    width: 100%;
    height: 22px;
    text-align: center;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
`;

const FeedbackTitle = styled.p`
    width: 100%;
    height: 22px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    text-align: center;
    margin-bottom: 15px;
`

const FeedbackMessage = styled.p`
    width: 100%;
    height: 44px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #333333;
    margin-bottom: 14px;
`