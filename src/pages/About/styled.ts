import styled from 'styled-components';
import { Section } from '../../components';

export const Container = styled(Section)`
  max-width: 900px;
  padding-right: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;

  @media screen and (max-width: 840px) {
    flex-flow: row wrap;
    justify-content: center;
  }
`;

export const Text = styled.div`
  flex: 1 0 calc((100% - 50px) * 0.6);
  margin-right: 50px;
  @media screen and (max-width: 840px) {
    flex: 1 1 auto;
    margin-right: 0;
    margin-bottom: 50px;
  }
`;

export const Paragraph = styled.div`
  margin-bottom: 20px;
`;

export const Image = styled.div`
  flex: 0 0 calc((100% - 50px) * 0.4);
  max-width: 300px;
  position: relative;
  border-radius: var(--border-radius);

  @media screen and (max-width: 840px) {
    flex: 0 0 70%;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 4%;
    left: 4%;
    width: 100%;
    height: 100%;
    z-index: -1;
    border: 2px solid var(--accent-color);
    border-radius: var(--border-radius);
    transition: var(--transition);
  }

  &:hover::after {
    top: 2%;
    left: 2%;
  }

  > div {
    width: 100%;
    height: 100%;
    will-change: opacity;
    background-color: var(--accent-color);
    border-radius: var(--border-radius);
    transition: var(--transition);
    cursor: pointer;

    &:hover {
      background-color: transparent;
    }

    > div {
      width: 100%;
      padding-top: 100%;
      position: relative;
      overflow: hidden;
      border-radius: var(--border-radius);
      filter: grayscale(1);
      transition: var(--transition);
      mix-blend-mode: multiply;

      &:hover {
        filter: none;
      }

      img {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
