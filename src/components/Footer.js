import styled from "styled-components";

export default function Footer(props){
    return (
        <ContainerFooter data-test="footer">
            <p>{props.cardResult.filter(elem => elem !== 0).length}/{props.cardResult.length} CONCLUÍDOS</p>
        </ContainerFooter>
    );
}

const ContainerFooter = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
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
`;