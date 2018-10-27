import styled from 'styled-components';

export const StyledButton = styled.button`
  text-transform: none;
  padding-left: 30px;
  color: white;
  background: none;
  border-style: none;
  font-weight: 600;
  font-size: 16px;
  font-family: oxigen, sans-serif;
  outline: none !important;
  cursor: pointer;

  @media(max-width: 768px) {
    font-size: 14px;
    padding-left: 12px;
  }
`;
