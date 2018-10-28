import styled from 'styled-components';

export const StyledButton = styled.button`
  margin-top: 16px;
  padding: 16px 32px;
  border-radius: 32px;
  border: solid 1px white;
  background: none;
  cursor: pointer;
  text-transform: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  font-family: oxygen,sans-serif;
  outline: none !important;
}

  @media(max-width: 768px) {
    font-size: 12px;
    padding: 8px 24px;
  }
`;