import styled, { keyframes } from "styled-components";
import emovieproject from "../../assets/emovieproject.png"

export const ProjectContainer = styled.section`
background-color: #e2e2e2;
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
margin: 40px 0px;
`

export const StyleArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    color: #303030;
    height: 70px;
    width: 70%;

    h1{
        letter-spacing: 1.5px;
    }
`

export const ProjectArea = styled.div`
    display: flex;
    width: 100%;
    height: 300px;
    align-items: center;
    justify-content: center;
    
`


export const ShowCarrousel = styled.div`
    display: flex;
    width: 75%;
    overflow-y: hidden;
    scroll-behavior: smooth;

    &::-webkit-scrollbar{
    display: none;
    }

    @media (max-width: 500px){
        width: 90%;
    }
 
`

export const DivImg = styled.div`
    margin-right: 20px;
    border-radius: 7px;
    min-width: 320px;
    height: 246px;
    cursor: pointer;

    div{
        border-radius: 7px;
        width: 100%;
        height: 100%;
        background-color: #00000055;
    }

    div:hover{
        background-color: transparent;
        transition: 0.5s;
    }

    @media (max-width: 500px){
        min-width: 86vw;
        height: 300px;
        background-size: cover;
    }

    @media (max-width: 400px){
        margin-right: 8px;
        min-width: 83vw;
        height: 250px;
        background-size: cover;
    }

    @media (max-width: 380px){
        margin-right: 8px;
        min-width: 82vw;
        height: 240px;
        background-size: cover;
    }

    @media (max-width: 300px){
        margin-right: 5px;
        min-width: 77vw;
        height: 160px;
        background-size: cover;
    }
`

export const ArrowButton = styled.button`
    color: #303030;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    font-size: 35px;
    cursor: pointer;

    @media (max-width: 500px){
        width: 30px;
        height: 30px;
    }
`

export const ModalDiv = styled.div`
    width: 100%;
    font-style: italic;
    color: #303030;
    flex-direction: column;
    height: 100%;
    display: flex;
    align-items: center;

    p{
        font-size: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    h1{
        font-size: 25px;
    }
`

export const LinkButton = styled.button`
    border-radius: 10px;
    cursor: pointer;
    font-size: 19px;
    border: none;
    width: 130px;
    margin: 5px;
    height: 35px;
    background-color: #a0a0a0;

    &:hover{
        background-color: #cac8c8;
        transition: 0.4s;
    }

    @media (max-width: 500px){

        width: 100px;

}
`