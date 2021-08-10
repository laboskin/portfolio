import styled from 'styled-components';

export const ImageWrapper = styled.a`
  display: block;
  position: relative;
  z-index: 1;
  flex: 0 0 60%;
  border-radius: var(--border-radius);
  overflow: hidden;
  background-color: var(--accent-color);
  transition: var(--transition);
  cursor: pointer;
  will-change: opacity;

  &:hover {
    background-color: transparent;

    @media screen and (max-width: 840px) {
      background-color: var(--accent-color);
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    z-index: 3;
    transition: var(--transition);
    background-color: var(--bg-color);
    mix-blend-mode: screen;
  }

  &:hover::before {
    background-color: transparent;

    @media screen and (max-width: 840px) {
      background-color: var(--bg-color);
    }
  }

  &:hover > div {
    filter: none;
    @media screen and (max-width: 840px) {
      filter: grayscale(1) brightness(0.8);
    }
  }

  @media screen and (max-width: 840px) {
    flex: 0 0 100%;
    opacity: 0.2;
    z-index: unset;
  }

  > div {
    width: 100%;
    padding-top: calc(100% * 10 / 16);
    position: relative;
    filter: grayscale(1) brightness(0.7);
    mix-blend-mode: multiply;
    transition: var(--transition);

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
`;

export const Content = styled.div`
  flex: 0 0 50%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  position: relative;
  transition: var(--transition);

  @media screen and (max-width: 1080px) {
    flex: 0 0 60%;
    padding-top: 20px;
  }
  @media screen and (max-width: 840px) {
    flex: 0 0 100%;
    padding: 45px 40px 40px;
  }
  @media screen and (max-width: 480px) {
    flex: 0 0 100%;
    padding: 25px 25px 0;
  }
`;

export const Period = styled.div`
  font-size: 13px;
  font-family: var(--font-monospace);
  color: var(--accent-color);
`;
export const Title = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
  color: var(--text-color-white);
  transition: var(--transition);

  @media screen and (max-width: 840px) {
    margin-bottom: 15px;
    color: var(--text-color-extra-white);
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 10px;
    color: var(--text-color-extra-white);
  }
`;
export const Description = styled.div`
  padding: 25px;
  border-radius: var(--border-radius);
  background-color: var(--bg-lighter-color);
  color: var(--text-color-light-grey);
  box-shadow: 0 10px 30px -15px var(--shadow-color);
  transition: var(--transition);
  z-index: 2;

  @media screen and (max-width: 840px) {
    background-color: unset;
    box-shadow: unset;
    padding: 15px 0;
  }
`;

export const TechList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 20px 0 5px;
  transition: var(--transition);
  z-index: 2;

  @media screen and (max-width: 840px) {
    margin: 10px 0 10px;
  }
  @media screen and (max-width: 480px) {
    margin: 10px 0 5px;
  }
`;
export const Tech = styled.li`
  font-family: var(--font-monospace);
  font-size: 15px;
  color: var(--text-color-light-grey);
  margin-bottom: 5px;
  @media screen and (max-width: 840px) {
    color: var(--text-color-white);
    font-size: 13px;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
`;
export const Link = styled.a`
  display: block;
  padding: 10px;

  &:first-of-type {
    margin-left: -10px;
  }

  &:last-of-type {
    margin-right: -10px;
  }

  svg {
    display: block;
    height: 25px;
    width: 25px;
    fill: var(--text-color-white);
    transition: var(--transition);

    @media screen and (max-width: 480px) {
      height: 22px;
      width: 22px;
    }
  }

  &:hover svg {
    fill: var(--accent-color);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 100px;
  transition: var(--transition);

  :nth-child(2n) {
    ${ImageWrapper} {
      order: 0;
    }

    ${Content} {
      order: 1;
      right: 10%;
      align-items: flex-end;
      text-align: right;
      @media screen and (max-width: 1080px) {
        right: 20%;
      }
      @media screen and (max-width: 840px) {
        right: 100%;
      }
    }

    ${TechList} {
      justify-content: flex-end;
    }

    ${Tech} {
      margin-left: 15px;
    }
  }

  :nth-child(2n + 1) {
    ${ImageWrapper} {
      order: 1;
      right: 10%;
      @media screen and (max-width: 1080px) {
        right: 20%;
      }
      @media screen and (max-width: 840px) {
        right: 100%;
      }
    }

    ${Content} {
      order: 0;
      align-items: flex-start;
      text-align: left;
    }

    ${TechList} {
      justify-content: flex-start;
    }

    ${Tech} {
      margin-right: 15px;
    }
  }

  @media screen and (max-width: 840px) {
    align-items: flex-start;
    margin-bottom: 70px;
  }
`;
