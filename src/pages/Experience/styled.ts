import styled from 'styled-components';
import { Section } from '../../components';

export const Container = styled(Section)`
  max-width: 700px;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
`;

const TAB_HEIGHT = '42px';
export const TabsContainer = styled.div<{ selectedTab: number }>`
  flex: 0 0 auto;
  margin-right: 20px;
  border-left: 2px solid var(--bg-brightest-light-color);

  :after {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    top: ${({ selectedTab }) => `calc(${selectedTab} * ${TAB_HEIGHT})`};
    height: ${TAB_HEIGHT};
    width: 2px;
    border-radius: 2px;
    background-color: var(--accent-color);
    transition: var(--transition);
  }
`;
export const Tab = styled.div<{ selected: boolean }>`
  height: ${TAB_HEIGHT};
  padding: 0 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: var(--transition);
  cursor: pointer;

  font-size: 13px;
  font-family: var(--font-monospace);

  :hover {
    background-color: var(--bg-brighter-light-color);
    color: var(--accent-color);
  }

  color: ${({ selected }) => (selected ? 'var(--accent-color)' : 'unset')};
`;

export const Job = styled.div`
  flex: 1 1 auto;
  font-size: 16px;
`;
export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
`;
export const Position = styled.span`
  color: var(--text-color-white);

  :after {
    display: inline;
    color: var(--accent-color);
    content: ' @ ';
  }
`;

export const Period = styled.div`
  margin-bottom: 15px;
  font-size: 13px;
  font-family: var(--font-monospace);
`;

export const Description = styled.div``;
export const DescriptionResponsibility = styled.p`
  position: relative;
  text-indent: 25px;
  margin-bottom: 5px;

  &::before {
    content: '▹';
    position: absolute;
    left: -25px;
    top: 5px;
    color: var(--accent-color);
    font-size: 12px;
    line-height: 12px;
  }
`;
