import styled from "styled-components";
import { setTypography } from "./scMixins";

export const CUSWrapper = styled.div`
    position: fixed !important;
    top: 0;
    left: 0;
    transform: ${props => props.openWindow === "true" ? 'translateY(0)' : 'translateY(100%)'};
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F9FAFA;
    position: relative;
    transition: transform .8s ease;
    will-change: transform;
    z-index: 2;
    overflow: hidden;

    @media only screen and (max-width: 600px) {
        height: 100vh;
        display: block;
        overflow-y: scroll;
        overflow-x: hidden;
    }
`;

export const CUSForm = styled.form`
    width: 95%;
    max-width: 80rem;
    margin: 10rem auto;
    padding: 5rem 7.5rem;
    border-radius: 3rem;
    background-color: white;
    box-shadow: 1rem 2rem 5rem rgba(0, 0, 0, .05);
    position: relative;
    z-index: 1;
    transform: scale(.9);

    @media only screen and (max-width: 900px) {
        padding: 5rem;
    }

    @media only screen and (max-width: 600px) {
        margin: 2.5rem auto;
        border-radius: 1rem;
    }

    @media only screen and (max-width: 320px) {
        padding: 5rem 2.5rem;
    }
`;

export const CUSHeading = styled.h1`
    text-align: center;
    margin-bottom: 2.5rem;
    ${setTypography({ color: '#87ABB4', fontSize: '3.2rem', fontWeight: 'normal', lineHeight: '1.7'})};

    @media only screen and (max-width: 600px) {
        font-size: 2.8rem;
    }
`;

export const CUSFormGroup = styled.div`
    display: flex;
    padding: 1.35rem 0;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        padding: 0;
    }

    ${props => props.hasButton && `
        padding-top: 2rem;
        padding-bottom: 0;
        justify-content: center;
    `};
`;

export const CUSInputItem = styled.div`
    width: ${props => props.hasDescription ? '100%' : '47.5%'};
    position: relative;

    @media only screen and (max-width: 600px) {
        width: 100%;
        margin-bottom: 2rem;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 2rem;
        transform: translateY(-50%);
        width: 1.4rem;
    }

    svg path {
        fill: #ABABB0;
    }

    &:not(:last-child) {
        margin-right: 5%;
    }
`;

export const CUSInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    background-color: #F7F7F7;
    padding: ${props => props.hasDescription ? '3rem 0' : '2.25rem 0'};
    border-radius: 1.5rem;
    padding-left: 4.75rem;
    padding-right: 2rem;
    font-family: 'Ubuntu', sans-serif;
    color: #5D5D64;

    &::placeholder {
        color: #ABABB0;
    }
`;

export const CUSSelect = styled.select`
    width: 100%;
    border: none;
    outline: none;
    background-color: #F7F7F7;
    padding: ${props => props.hasDescription ? '3rem 0' : '2.25rem 0'};
    border-radius: 1.5rem;
    padding-left: 4.75rem;
    padding-right: 2rem;
    font-family: 'Ubuntu', sans-serif;
    color: #5D5D64;

    &::placeholder {
        color: #ABABB0;
    }
`;

export const CUSButton = styled.button`
    outline: none;
    border: none;
    background: #82C7BC;
    cursor: pointer;
    padding: 2rem 7rem;
    border-radius: 10rem;
    font-family: 'Ubuntu', sans-serif;
    transition: transform .5s ease;
    ${setTypography({ color: 'white', fontSize: '1.4rem', fontWeight: 'normal' })};

    @media only screen and (max-width: 600px) {
        margin-top: 2rem;
    }

    &:hover {
        transform: translateY(-5px);
    }
`;

export const CUSCloseButton = styled.button`
    position: fixed;
    top: 3rem;
    right: 3rem;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: transform .5s ease;
    z-index: 1000;

    @media only screen and (max-width: 600px) {
        top: 4rem;
        right: 2rem;
        width: 4rem;
        height: 4rem;

        svg {
            width: inherit;
            height: inherit;
        }
    }

    &:hover {
        transform: translateY(-5px);
    }
`;

export const CUSDecorationGreen = styled.svg`
    position: fixed;
    top: -10rem;
    left: -3rem;
    z-index: 0;
    width: 50rem;
`;

export const CUSDecorationPink = styled.svg`
    position: fixed;
    bottom: -10rem;
    right: -3rem;
    z-index: 0;
    width: 50rem;
`;
