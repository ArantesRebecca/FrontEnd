import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 8px 16px;
  height: 60px;
  width: 100%;
  background-color: #47286E;

  @media(min-width: 768px) {
    padding: 8px 32px;
  }

  @media(min-width: 992px) {
    height: 80px;
  }
`;

export const Logo = styled.img`
  max-width: 8%;

  @media(min-width: 768px) {
    max-width: 5%
  }

  @media(min-width: 992px) {
    max-height: 90%;
  }
`

export const ButtonWrapper = styled.div`
  display: none;

  @media(min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`

// Fills the remaining space of the flex view
export const Divider = styled.div`
  flex: 1;
`
