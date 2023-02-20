import styled from "styled-components";


export const FooterDiv = styled.footer`
    color: #303030;
    width: 100%;
    background-color: #d4d4d4;

    div{
        margin: 15px 0px;
    }

`

export const Contacts = styled.div`
    margin: 40px 0px 20px;
    width: 70%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    p{
        font-size: 17px;
    }

    div{
        width: 200px;
        height: 50px;
        font-size: 25px;
    }
`

export const SpanDiv = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;

    a{
        color: #303030;
        font-size: 25px;
        margin-left: 10px;
        cursor: pointer;
    }

    a:hover{
        transition: 0.4s;
        color: #8a8a8a;
    }

    p{
        font-size: 20px;
    }
    
`

export const TitleC = styled.h2`
    font-size: 20px;
    margin-left: 10px;
`
