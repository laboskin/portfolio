import React from 'react';
import { Container } from './styled';

type SectionTitleProps = {
  name: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ name }) => {
  return <Container className="SectionTitle">{name}</Container>;
};
