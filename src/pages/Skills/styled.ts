import styled from "styled-components";
import { Section } from '../../components';

export const Container = styled(Section)`
  max-width: 800px;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;

  @media screen and (max-width: 480px){
    flex-flow: row wrap;
  }
`;
export const Text = styled.div`
  flex: 0 0 auto;
  background-color: var(--bg-color);

  @media screen and (max-width: 480px){
    flex: 1 1 auto;
  }
`;
export const SkillGroup = styled.div`
  margin-bottom: 10px;
`;
export const Title = styled.div`
  font-size: 18px;
  margin-bottom: 3px;
  color: var(--text-color-white);

  @media screen and (max-width: 480px){
    font-size: 17px;
  }
`;
export const Paragraph = styled.p`
  position: relative;
  text-indent: 25px;
  margin-bottom: 5px;

  &::before{
    content: "▹";
    position: absolute;
    left: -25px;
    top: 6px;
    color: var(--accent-color);
    font-size: 12px;
    line-height: 12px;
  }
`;


export const Cloud = styled.div`
  flex: 1 1 100px;
  margin: 20px 20px 0 40px;
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 840px){
    margin: 20px 0 0 10px;
  }
  @media screen and (max-width: 480px){
    flex: 0 0 100%;
    margin: 0 0 10px 0;
    padding-top: 30%;
    order: -1;
  }
`;
export const CloudWrapper = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 480px){
    position: absolute;
  }
  > div {
    height: 100%;
    width: 100%;
    overflow: hidden !important;
    > div{
      font-family: var(--font-monospace) !important;
      font-size: 14px !important;
      transition: all 1s ease-in-out;
      color: var(--text-color-white);
    }
  }
`;