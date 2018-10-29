import styled from 'styled-components';

export const Content = styled.div`
  margin: 16px 32px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;

  @media(min-width: 768px) {
    margin: 16px 64px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media(min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Placeholder = styled.div`
  min-height: 200px;
  background-color: #D3D3D3;

  @media(min-width: 768px) {
    min-height: 300px;
  }

  @media(min-width: 992px) {
    min-height: 400px;
  }
`;