import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 50px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ImagemForgot = styled.img`
    max-width: 80%;
    height: auto;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
`

export const InputForgot = styled.input`
    background: transparent;
    width: 100%;
    border: 1px solid transparent;
    border-bottom: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px 10px;
    color: #FFFFFF;
    margin-bottom: 30px;
`

export const RecuperationMessage = styled.p`
    color: #4CAF50;
    font-size: 14px;
    margin: 10px 0;
`

export const BacktoLogin = styled(Link)`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`