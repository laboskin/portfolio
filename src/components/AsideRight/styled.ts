import styled from "styled-components";

export const Container = styled.aside`
  position: fixed;
  width: 40px;
  right: 40px;
  bottom: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  transition: var(--transition);

  @media screen and (max-width: 1080px){
    right: 20px;
  }
  @media screen and (max-width: 768px){
    display: none;
  }

  &:after{
    content: '';
    display: block;
    height: 100px;
    width: 1px;
    align-self: center;
    margin-top: 20px;
    background-color: var(--text-color-light-grey);
  }
  
  > a {
    padding: 10px;
    font-family: var(--font-monospace);
    font-size: 13px;
    letter-spacing: 0.1em;
    line-height: 1;
    writing-mode: vertical-lr;
    color: var(--text-color-light-grey);
    transform: translateX(0.2em);
    transition: var(--transition);

    &:hover{
      transform: translateX(0.2em) translateY(-3px);
    }
  }
`;