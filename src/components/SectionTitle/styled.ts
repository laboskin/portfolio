import styled from "styled-components";

export const Container = styled.h2`
  display: flex;
  align-items: center;
  margin: 10px 0 30px;
  color: var(--text-color-white);
  font-size: clamp(24px, 5vw, 28px);
  font-weight: 700;


  &::before{
    display: block;
    counter-increment: section;
    content: "0" counter(section) ".";
    margin-right: 10px;
    font-family: var(--font-monospace);
    color: var(--accent-color);
    font-size: clamp(16px, 3vw, 20px);
    font-weight: 400;
  }

  &::after{
    flex: 0 1 300px;
    content: "";
    display: block;
    height: 1px;
    margin-left: 20px;
    background-color: var(--bg-lightest-color);
    transition: var(--transition);

    @media screen and (max-width: 1080px) {
      flex: 0 1 200px;
    }

    @media screen and (max-width: 768px) {
      flex: 1 1 auto;
    }
  }
`;