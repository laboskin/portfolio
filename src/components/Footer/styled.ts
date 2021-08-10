import styled from "styled-components";

export const Container = styled.footer`
  min-height: 70px;
  padding: 10px;
`;

export const Icons = styled.div`
  display: none;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media screen and (max-width: 840px) {
    display: flex;
  }
`;
export const Icon = styled.a`
  display: block;
  padding: 10px;
  margin: 0 7px;

  svg{
    display: block;
    height: 22px;
    width: 22px;
    fill: var(--text-color-light-grey);
  }

  &:hover svg{
    fill: var(--accent-color);
  }
`;

export const Credit = styled.div`
  padding-bottom: 15px;
  text-align: center;
  font-family: var(--font-monospace);
  font-size: 12px;
  color: var(--text-color-light-grey);
  
  > div:first-child {
    margin-bottom: 5px;
  }
`;