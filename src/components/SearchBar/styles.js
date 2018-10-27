import styled from 'styled-components';

export const TextField = styled.input`
    box-sizing: border-box;
    outline: none !important;
    margin-left: 20px;
    width: 90%;
    padding: 8px 12px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: oxigen, sans-serif;
    color: black;

    @media(min-width: 768px) { 
      margin: 12px 32px 12px 16px;
      padding: 8px 16px;
      width: 40%;
    }

    @media(min-width: 992px) { 
      margin: 8px 32px 8px;
      padding: 12px 20px;
    }
`
