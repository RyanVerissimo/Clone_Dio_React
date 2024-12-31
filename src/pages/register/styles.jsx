import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-size: 32px;
    font-weight: 700;
    font-style: normal;
    width: 320px;
    line-height: 44px;
    color: #FFFFFF;
`

export const TitleRegister = styled.p`
    font-family: 'Open Sans';
    font-size: 32px;
    font-weight: 700;
    font-style: normal;
    line-height: 44px;
    color: #FFFFFF;
    margin-bottom: 20px;
`

export const SubtitleRegister = styled.p`
    font-family: 'Open Sans';
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    line-height: 25px;
    color: #FFFFFF;
    margin-bottom: 20px;
`

export const DeclarationText = styled.p`
    font-family: 'Open Sans';
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    line-height: 25px;
    color: #FFFFFF;
    margin-top: 20px;
`

export const HaveAccountText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;
`

export const LogInText = styled(Link)`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #23DD7A;
`

export const RegisterMessage = styled.p`
    color: #4CAF50;
    font-size: 14px;
    margin: 10px 0;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    gap: 5px;
`