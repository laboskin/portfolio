import styled from 'styled-components';
import { Section } from '../../components';

export const Container = styled(Section)`
  max-width: 600px;
  margin-bottom: 100px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 840px) {
    margin-bottom: 50px;
  }
`;

export const Overline = styled.div`
  font-family: var(--font-monospace);
  color: var(--accent-color);
  font-size: clamp(14px, 1.25vw, 16px);

  &::before {
    counter-increment: section;
    content: '0' counter(section) '.';
    margin-right: 10px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  color: var(--text-color-white);
  font-size: clamp(34px, 4vw, 48px);
  font-weight: 700;
`;

export const Description = styled.div`
  margin-bottom: 50px;
`;

export const Button = styled.a`
  display: block;
  font-family: var(--font-monospace);
  color: var(--accent-color);
  font-size: 15px;
  padding: 1rem 2rem;
  border: 1px solid var(--accent-color);
  border-radius: var(--border-radius);
  transition: var(--transition);

  &:hover {
    background-color: var(--accent-glow-color);
  }
`;
