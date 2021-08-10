import styled from 'styled-components';

export const Main = styled.main`
  padding: 0 150px;
  transition: var(--transition);

  @media screen and (max-width: 1080px) {
    padding: 0 100px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 50px;
  }
  @media screen and (max-width: 480px) {
    padding: 0 25px;
  }
`;