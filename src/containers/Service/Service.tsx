import React from 'react';
import TextBlock from '../TextBlock/TextBlock';
import {
    Icon,
    ServiceIcon,
    ServiceWrapper,
    ServiceText,
} from './Service.components';

interface Props {
    children: React.ReactNode;
    iconName: string;
    title: string;
    fullWidth?: boolean;
}

const Service: React.FC<Props> = ({
    children,
    iconName,
    title,
    fullWidth = false,
}) => {
    const iconSrc = require(`../../images/icons/services/${iconName}.svg`);
    return (
        <ServiceWrapper fullWidth={fullWidth}>
            <ServiceIcon>
                <Icon src={iconSrc} alt={iconName} />
            </ServiceIcon>
            <ServiceText>
                <TextBlock title={title} headingType="h3">
                    {children}
                </TextBlock>
            </ServiceText>
        </ServiceWrapper>
    );
};

export default Service;
