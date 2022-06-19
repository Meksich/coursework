import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
`

export const ModalClose = styled.span`
    position: absolute;
    right: 15px;
    top: 4px;
    color: white;
    float: right;
    font-size: 28px;
    font-weight: bold;
    transition: 0.3s color;
    :hover{
    color: rgb(238, 83, 83);
    text-decoration: none;
    cursor: pointer;
    }
`

export const ModalContent = styled.div`
    width: 25vw;
    height: auto;
    margin: 5% auto;
    display: flex;
    background-color: white;
    flex-direction: column;
`

export const ModalHeader = styled.div`
    position: relative;
    background-color: lightgray;
`

export const ModalBody = styled.div`
    padding-top: 40px;
    padding-bottom: 70px;
    display: flex;
    justify-content: center;
`