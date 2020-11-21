import React from 'react';
import './SectionTitle.scss';

interface IProps {
    name: string
}

function SectionTitle({name}: IProps) {

    return (
        <h2 className="SectionTitle">
            {name}
        </h2>
    );
}

export default SectionTitle;
