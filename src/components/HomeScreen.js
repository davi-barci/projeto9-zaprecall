import styled from "styled-components";
import logo from "../assets/logo.png";

export default function HomeScreen(props){
    return (
        <ContainerHomeScreen>
            <div>
                <img src={logo}></img>
                <p>ZapRecall</p>
                <button data-test="start-btn" onClick={() => props.setCurrentPage(1)}>Iniciar Recall!</button>
            </div>
        </ContainerHomeScreen>
    );
}

const ContainerHomeScreen = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    justify-content: center;

    div{
        width: 246px;
        height: 100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img{
            width: 136px;
            height: 161px;
            margin-bottom: 13px;
        }

        p{
            width: 257px;
            height: 59px;
            font-family: 'Righteous';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            line-height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: -0.012em;
            color: #FFFFFF;
            margin-bottom: 30px;
        }

        button{
            width: 246px;
            height: 54px;
            background: #FFFFFF;
            border: 1px solid #D70900;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
            border-radius: 5px;
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            color: #D70900;
        }
    }
`;