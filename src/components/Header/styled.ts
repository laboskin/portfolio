import styled from 'styled-components';

export const Content = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: var(--transition);

  @media screen and (max-width: 1080px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 25px;
  }
`;

export const LogoWrapper = styled.a`
  position: relative;
  z-index: 100;
  height: 42px;
  width: 42px;

  &:hover > svg > polygon {
    fill: var(--accent-glow-color);
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
    transition: var(--transition);

    path {
      fill: var(--accent-color);
    }

    polygon {
      stroke: var(--accent-color);
      fill: none;
      stroke-width: 5;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: var(--transition);
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    height: 100vh;
    right: -100vw;
    width: calc(min(75vw, 400px));
    z-index: 30;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    background-color: var(--bg-lighter-color);
    box-shadow: -10px 0 30px -15px var(--shadow-color);
    visibility: hidden;
    transition: var(--transition);
  }
`;
export const NavList = styled.ul`
  display: flex;
  flex-flow: row nowrap;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
`;
export const NavItem = styled.li`
  margin: 0 5px;

  @media screen and (max-width: 768px) {
    margin: 0 0 10px;
    width: 100%;
  }
`;
export const NavLink = styled.a`
  display: block;
  padding: 10px;
  color: var(--text-color-white);
  font-family: var(--font-monospace);
  font-size: 13px;
  transition: color 0.25s ease-in-out;

  &::before {
    counter-increment: section-link;
    content: '0' counter(section-link) '.';
    margin-right: 5px;
    color: var(--accent-color);
    font-size: 12px;

    @media screen and (max-width: 768px) {
      display: block;
      margin-right: 0;
      margin-bottom: 5px;
      font-size: 14px;
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 20px 20px;
    font-size: 16px;
    text-align: center;
  }
`;
export const NavLanguageButton = styled.button`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-left: 15px;
  border: 1px solid var(--accent-color);
  border-radius: var(--border-radius);
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    padding: 13px 30px;
  }

  &:hover {
    background-color: var(--accent-glow-color);
  }
`;
export const NavLanguageIcon = styled.div`
  height: 22px;
  width: 22px;
  margin-right: 4px;

  @media screen and (max-width: 768px) {
    height: 24px;
    width: 24px;
    margin-right: 6px;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
    fill: var(--accent-color);
  }
`;
export const NavLanguageText = styled.div`
  color: var(--accent-color);
  font-size: 13px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Hamburger = styled.div`
  display: none;
  height: 24px;
  width: 28px;
  position: relative;
  z-index: 100;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }

  div,
  ::before,
  ::after {
    position: absolute;
    left: 0;
    width: 100%;
    content: '';
    height: 2px;
    border-radius: 2px;
    background-color: var(--accent-color);
    transform: rotate(0);
    transform-origin: center;
    transition: var(--transition);
  }

  > div {
    top: calc(50% - 1px);
    opacity: 1;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`;

export const Overlay = styled.div`
  display: none;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

export const Container = styled.header<{
  isSidebarVisible: boolean;
  isScrolled: boolean;
  isHidden: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  height: 100px;
  background-color: var(--bg-color);
  transform: translateY(0px);
  transition: var(--transition);

  ${({ isSidebarVisible }) => (isSidebarVisible ? '&' : '&:not(&)')} {
    @media screen and (max-width: 768px) {
      backdrop-filter: none;

      & ~ * {
        filter: blur(5px) brightness(0.7);
      }

      ${Overlay} {
        display: block;
      }

      ${Nav} {
        right: 0;
        visibility: visible;
      }

      ${Hamburger} {
        div {
          opacity: 0;
        }

        ::before {
          top: calc(50% - 1px);
          transform: rotate(45deg);
        }

        ::after {
          bottom: calc(50% - 1px);
          transform: rotate(135deg);
        }
      }
    }
  }

  ${({ isHidden }) => (isHidden ? '&' : '&:not(&)')} {
    transform: translateY(-100px);

    @media screen and (max-width: 768px) {
      ${Nav} {
        transform: translateY(100px);
      }
    }
  }

  ${({ isScrolled }) => (isScrolled ? '&' : '&:not(&)')} {
    height: 70px;
    box-shadow: 0 10px 30px -10px var(--shadow-color);
    background-color: var(--bg-low-opacity-color);
    backdrop-filter: blur(10px);
  }
`;
