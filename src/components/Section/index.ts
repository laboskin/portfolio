import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  max-width: 1000px;
  padding-top: 100px;
  padding-bottom: 100px;

  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
  @media screen and (max-width: 480px) {
    padding: 60px 0;
  }
`;