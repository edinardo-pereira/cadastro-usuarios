import styled from "styled-components";

export const Button = styled.button`
    font-size: 16px;
    border: ${props =>
        props.theme === `primay`
            ? `none`
            : `1px solid #ff6378`};
    border-radius: 30px;
    background: ${props =>
        props.theme === 'primary'
            ? ` linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)`
            : `transparent`};
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