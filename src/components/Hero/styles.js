import styled from 'styled-components';

export const Title = styled.h1`
  background-color: #47286E;
  margin: 0;
  font-family: oxygen,sans-serif;
  font-size: 24px;
  color: white;
  
  @media(min-width: 768px) {
    font-size: 32px;
  }

  @media(min-width: 992px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.h4`
  background-color: #47286E;
  font-family: oxygen,sans-serif;
  font-size: 12px;
  color: white;

  @media(min-width: 768px) {
    font-size: 14px;
  }

  @media(min-width: 992px) {
    font-size: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 64px;
  margin-top: 40px;

  @media(min-width: 768px) {
    align-items: self-start;
    margin-top: 60px;
  }

  @media(min-width: 992px) {
    margin-top: 80px;
  }
`;