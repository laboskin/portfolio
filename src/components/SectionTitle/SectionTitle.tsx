import React from 'react';
import './SectionTitle.scss';

interface IProps {
    count: number,
    name: string
}

function SectionTitle({count, name}: IProps) {

    return (
        <h2 className="SectionTitle">
            <div className="SectionTitle-Number">0{count}.</div>
            <div className="SectionTitle-Name">{name}</div>
        </h2>
    );
}

export default SectionTitle;
