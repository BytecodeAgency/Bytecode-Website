import React from 'react';
import VacancyHeaderProps from './VacancyHeader.types';
import {
    VacancyHeaderBase,
    StyledSubtitle,
    VacancyHeaderInformation,
} from './VacancyHeader.components';

const VacancyHeader: React.FC<VacancyHeaderProps> = ({
    title,
    subtitle,
    img,
}) => {
    return (
        <VacancyHeaderBase backgroundImage={img}>
            <VacancyHeaderInformation>
                <div style={{ width: '80%' }}>
                    <StyledSubtitle>{subtitle}</StyledSubtitle>
                    <h1>{title}</h1>
                </div>
            </VacancyHeaderInformation>
        </VacancyHeaderBase>
    );
};

export default VacancyHeader;
