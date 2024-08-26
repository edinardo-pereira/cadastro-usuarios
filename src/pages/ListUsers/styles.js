import styled from 'styled-components'

export const Container = styled.div `
    background-color: #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    
`

export const Title = styled.h3`
    color: #ffff;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600px;
    margin-top: 20px;
`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;

    @media (max-width: 1520px){
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 1150px){
        grid-template-columns: 1fr 1fr  ;
    }

    @media (max-width: 790px){
        grid-template-columns: 1fr ;
    }

    @media (max-width: 430px){
        grid-template-columns: 1fr ;
        
    }

`

export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    max-width: 380px;
    margin: 15px 10px;

    h3 {
        color: #25d248;
        font-size: 25px;
        margin-bottom: 3px;
        text-transform: capitalize;
    }

    P {
        color: #fff;
        font-size: 18px;
        font-weight: 200;
    }

`


export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 30px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

`

export const AvatarUser = styled.img`
    width: 60px;
`