import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Title(){
    return (
        <ContainerTitle>
            <img src={logo}></img>
            <h1>ZapRecall</h1>
        </ContainerTitle>
    )
}

const ContainerTitle = styled.div`
    width: 100%;
    height: 60px;
    margin-top: 42px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 52px;
        height: 60px;
    }

    h1{
        width: 203.17px;
        height: 44px;
        font-family: 'Righteous', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        justify-content: center;
        letter-spacing: -0.012em;
        color: #FFFFFF;
    }
`;

