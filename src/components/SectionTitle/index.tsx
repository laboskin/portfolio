import React from 'react';
import './styles.scss';

interface IProps {
  name: string;
}

export const SectionTitle: React.FC<IProps> = ({ name }) => {
  return <h2 className="SectionTitle">{name}</h2>;
};
