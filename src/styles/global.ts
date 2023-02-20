import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
*{
    font-family: 'Raleway', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    overflow-x: hidden;
    background-color: #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;

main{
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
}

`