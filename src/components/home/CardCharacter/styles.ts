'use client';
import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 20rem;
    height: 150px;
    display: flex;
    background: #8E9094;
    border-radius: 8px;
`;
export const CardInfos = styled.div`
    width: 100%;
    margin: .75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`;
export const RowName = styled.div`

`;
export const Name = styled.h3`
    margin: 0;
    color: #fff;
    font-weight: 700;
`;
export const TextNormal = styled.p`
    margin: 0;
    color: #fff;
`;
export const TextBold = styled.p`
    margin: 0;
    color: #fff;
    font-weight: 700;

`;
export const RowAlive = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

`;
export const Alive = styled.div`
    width: 13px;
    height: 13px;
    border-radius: 100px;
    background: #c22;
    margin-right: .75rem;
`;
