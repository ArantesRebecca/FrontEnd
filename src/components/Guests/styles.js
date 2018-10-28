import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 320px;
    align-items: center;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    font-family: oxygen, sans-serif;
`;

export const AddButton = styled.p`
    height: 20px;
    width: 20px;
    border: 1px solid black;
    text-align: center;
    border-radius: 50%;
`;

export const Title = styled.h4`
    color: black;
    margin: 20px;
`;