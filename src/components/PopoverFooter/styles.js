import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 320px;
    align-items: center;
`;

export const Footer = styled.div`
    margin-top: 80px;
`;

export const Line = styled.div`
    height: 1px;
    background-color: #D3D3D3;
`;

export const Title = styled.h4`
    color: ${props => props.clean ? '#A9A9A9' : '#ADFF2F'};
    margin: 16px;
`;