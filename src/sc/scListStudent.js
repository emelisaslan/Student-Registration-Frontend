import styled from "styled-components"
import { setTypography } from "./scMixins"

export const ListWrapper = styled.div`
    width: 90vw;
    background-color: white;
    box-shadow: 1rem 2rem 5rem rgba(0, 0, 0, .05);
    border-radius: 3rem;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
    margin: 5rem auto;

    @media only screen and (max-width: 600px) {
        margin: 2.5rem auto;
        border-radius: 1rem;
    }
`;

export const ListContainer = styled.div`
    padding: 10rem 0;
    width: 75%;

    @media only screen and (max-width: 1400px) {
        width: 85%;
    }

    @media only screen and (max-width: 600px) {
        padding: 5rem 0;
    }
`;

export const ListHeading = styled.h1`
    ${setTypography({ color: '#87ABB4', fontSize: '3rem', fontWeight: 'normal' })};

    @media only screen and (max-width: 600px) {
        font-size: 2.8rem;
    }
`;

export const ListDivider = styled.hr`
    width: 20%;
    margin-top: 1.35rem;
    border-bottom: 1px solid #5C99A2;
`;

export const ListHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5rem 0;
    flex-wrap: wrap-reverse;

    @media only screen and (max-width: 600px) {
        margin: 4rem 0;
    }
`;

export const ListSearch = styled.div`
    width: 50rem;
    position: relative;

    svg {
        width: 1.75rem;
        position: absolute;
        top: 50%;
        right: 2.5rem;
        transform: translateY(-50%);
    }
`;

export const ListSearchInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    color: #5D5D64;
    border-radius: 1.5rem;
    background-color: #F1F4F2;
    font-family: 'Ubuntu', sans-serif;
    padding: 2.25rem 5rem 2.25rem 2.5rem;

    &::placeholder {
        color: #ABABB0;
    }
`;

export const ListCreateStudent = styled.button`
    border: none;
    outline: none;
    background: transparent;
    background-color: #F7B245;
    padding: 2rem 3.5rem;
    border-radius: 1.5rem;
    color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: transform .5s ease;
    font-family: 'Ubuntu', sans-serif;
    ${setTypography({ color: 'white', fontSize: '1.4rem', fontWeight: 'normal' })}

    @media only screen and (max-width: 900px) {
        margin-bottom: 2rem;
    }

    svg {
        margin-left: 1rem;
        width: 1.4rem;
    }

    &:hover {
        transform: translateY(-5px);
    }
`;

export const ListTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const ListTableRow = styled.tr`
    text-align: left;
    border-radius: 1rem;
`;

export const ListTableHeading = styled.th`
    width: ${props => props.big ? '20%' : '16%'};
    padding: 3rem 1rem;
    border-bottom: 1px solid #ddd;
    ${setTypography({ color: '#83838A', fontSize: '1.4rem', fontWeight: 'normal' })};

    ${props => props.invisibleOnTablet && `
        @media only screen and (max-width: 1024px) {
            display: none;
        }
    `};

    ${props => props.invisibleOnMobile && `
        @media only screen and (max-width: 480px) {
            display: none;
        }
    `};

    ${props => props.invisibleOnSmallMobile && `
        @media only screen and (max-width: 360px) {
            display: none;
        }
    `};

    &:last-child {
        text-align: right;
    }
`;

export const ListTableData = styled.td`
    padding: 2.5rem 1rem;
    width: ${props => props.big ? '20%' : '16%'};
    ${setTypography({ color: '#A6A7AB', fontSize: '1.4rem', fontWeight: 'normal' })};

    ${props => props.invisibleOnTablet && `
        @media only screen and (max-width: 1024px) {
            display: none;
        }
    `};

    ${props => props.invisibleOnMobile && `
        @media only screen and (max-width: 480px) {
            display: none;
        }
    `};

    ${props => props.invisibleOnSmallMobile && `
        @media only screen and (max-width: 360px) {
            display: none;
        }
    `};
    
    ${props => props.photo && `
        div {
            width: 4rem;
            height: 4rem;
            overflow: hidden;
            background-color: lightcoral;
            font-size: 1.3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            border-radius: 50%;
        }

        img {
            width: 4rem;
            height: 4rem;
            object-fit: cover;
        }
    `};

    &:last-child {
        text-align: right;
    }
`;

export const ListTableButton = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    &:not(:last-child) {
        margin-right: 1.5rem;
    }

    svg {
        width: 1.5rem;
    }
`;

export const ListDeletePopup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    z-index: -1;
    text-align: center;
    transition: all .5s ease;

    ${props => props.deleteWindowOpen === 'true' && `
        opacity: 1;
        z-index: 9;
    `};
`;

export const ListDeletePopupContainer = styled.div`
    padding: 5rem 8rem;
    border-radius: 1.5rem;
    background-color: white;
`;


export const ListDeletePopupText = styled.h1`
    margin-top: 2.5rem;
    ${setTypography({ color: '#5D5D64', fontSize: '1.5rem', fontWeight: 'normal' })};
`;

export const ListDeletePopupButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
`;

export const ListDeletePopupButton = styled.button`
    border: none;
    outline: none;
    background-color: ${props => props.delete ? '#58D68D' : '#FF7979'};
    border-radius: 1rem;
    padding: 1.5rem 3rem;
    cursor: pointer;
    transition: transform .5s ease;
    font-family: 'Ubuntu', sans-serif;
    ${setTypography({ color: 'white', fontSize: '1.4rem', fontWeight: 'normal' })};

    &:hover {
        transform: translateY(-5px);
    }

    &:not(:last-child) {
        margin-right: 1.5rem;
    }
`;