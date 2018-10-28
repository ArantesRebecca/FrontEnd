import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 64px;

  @media(max-width: 778px) {
    width: auto;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
}
`;