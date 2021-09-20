import styled from "styled-components";
import { setTypography } from "./scMixins";

export const ErrorBox = styled.div`
    position: fixed !important;
    z-index: 10;
    background-color: #F57B76;
    border: 2px solid #F63A3A;
    bottom: 3rem;
    right: 3rem;
    width: 30rem;
    border-radius: 0.7rem;
    padding: 2.1rem 2.5rem;
    display: inline-block;
    word-wrap: break-word;
    transform: ${props => props.openBox === "true" ? 'translateX(0)' : 'translateX(120%)'};
    transition: transform .8s ease;
    will-change: transform;
`;

export const ErrorParagraph = styled.text`
    ${setTypography({ color: 'white', fontSize: '1.4rem', fontWeight: 'normal' })};
`;

export const ErrorCloseButton = styled.button`
    position: absolute;
    top: 40%;
    right: 3%;
    cursor: pointer;
    background: transparent;
    border: none;
    transition: 0.3s ease;

    svg {
        width: 1.2rem;
        height: 1.2rem;
    }

    &:hover{
        transform: translateY(-3px);
    }
`;