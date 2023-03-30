
'use client';
import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    display: flex;
    align-items: center;

`;

export const InputCharacters = styled.input`
    height: 40px;
    width: 35%;
    border: none;
    background: transparent;
    border-bottom: 1px solid #fff;
    display: flex;
    outline:none;
    color:#fff;
    text-align:center;

`;
export const CardList = styled.div`
    width: 80%;
    height: 100%;
    margin-bottom: 2rem;
    border: none;
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    margin-top: 1rem;
`;
