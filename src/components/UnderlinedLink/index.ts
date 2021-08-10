import styled from "styled-components";

export const UnderlinedLink = styled.a`
  position: relative;
  display: inline-block;
  color: var(--accent-color);

  &:hover::after{
    width: 100%;
  }

  &::after{
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0.2em;
    background-color: var(--accent-color);
    opacity: 0.6;
    transition: var(--transition);
  }
`