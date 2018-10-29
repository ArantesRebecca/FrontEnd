import styled from 'styled-components';

export const Wrapper = styled.div`
    min-width: 250px;
    padding: 20px;
    text-align: center;
    padding-top: 16px;

    @media(min-width: 992px) {
        min-width: 320px;
    }
`;

export const Title = styled.p`
    color: black;
    margin-bottom: 15px;
`;