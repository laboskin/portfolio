import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  > div {
    width: 85px;
    height: 85px;
    color: var(--bg-color);

    svg{
      display: block;
      height: 100%;
      width: 100%;

      path{
        fill: var(--accent-color);
        opacity: 0;
      }
      polygon{
        stroke-dasharray: 270;
        stroke-dashoffset: 270;
        fill: none;
        stroke: var(--accent-color);
        stroke-width: 5;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

    }
  }
`;