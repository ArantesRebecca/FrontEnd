import styled from 'styled-components'

export const Message = styled.h4`
  font-family: oxygen,sans-serif;
  font-size: 12px;
  color: #383838;

  @media(min-width: 768px) {
    font-size: 14px;
  }

  @media(min-width: 992px) {
    font-size: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row-wrap;
  padding: 8px;
`;