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

    @media (max-width: 1024px) {
        max-width: 90%;
        margin-top: 80px;
        flex-direction: column;
        text-align: center;
    }

    @media (max-width: 768px) {
        max-width: 100%;
        margin-top: 60px;
        padding: 0 16px;
    }
`;

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFFFF;

    @media (max-width: 1024px) {
        width: 100%;
        font-size: 28px;
        line-height: 38px;
    }

    @media (max-width: 768px) {
        font-size: 24px;
        line-height: 34px;
    }
`;

export const TitleHighLight = styled.span`
    color: #E4105D;
`;

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    width: 420px;
    margin-bottom: 20px;
    line-height: 24px;
    color: #FFFFFF;

    @media (max-width: 1024px) {
        width: 100%;
        font-size: 18px;
        line-height: 28px;
    }

    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 22px;
    }
`;

export const ImageContainer = styled.div`
    img {
        max-width: 100%;
        height: auto;
    }

    @media (max-width: 1024px) {
        margin-top: 20px;
    }
`;
