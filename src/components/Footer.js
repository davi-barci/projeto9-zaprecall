import styled from "styled-components";
import iconeCerto from "../assets/icone_certo.png";
import iconeErro from "../assets/icone_erro.png";
import iconeQuase from "../assets/icone_quase.png";

export default function Footer(props){
    const imagens = [iconeErro, iconeQuase, iconeCerto];

    return (
        <ContainerFooter data-test="footer">
            <p>{props.cardResult.filter(elem => elem !== 0).length}/{props.cardResult.length} CONCLUÍDOS</p>
            {(props.lastResult.length !== 0) &&
                <div>
                    {props.lastResult.map((elem) => (
                        <img src={imagens[elem-1]}></img>
                    ))}
                </div>
            }
        </ContainerFooter>
    );
}

const ContainerFooter = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    p{
        height: 22px;
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }

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