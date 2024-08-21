import styled from "styled-components";

export const Button = styled.button `
    font-size: 16px;
    border: none;
    border-radius: 30px;
    background: linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%);
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
   
    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`