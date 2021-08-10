import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  width: 40px;
  left: 40px;
  bottom: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  transition: var(--transition);

  @media screen and (max-width: 1080px) {
    left: 20px;
  }
  @media screen and (max-width: 840px) {
    display: none;
  }

  &:after {
    content: '';
    display: block;
    height: 100px;
    width: 1px;
    align-self: center;
    margin-top: 20px;
    background-color: var(--text-color-light-grey);
  }
`;

export const Icon = styled.a`
  padding: 5px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 5px;
  }

  svg {
    display: block;
    height: 18px;
    width: 18px;
    fill: var(--text-color-light-grey);
    transition: var(--transition);
  }

  &:hover svg {
    fill: var(--accent-color);
    transform: translateY(-3px);
  }
`;
