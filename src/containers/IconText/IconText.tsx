import React from 'react';
import { FaRegClock } from '@react-icons/all-files/fa/FaRegClock';
import { FaMapMarkerAlt } from '@react-icons/all-files/fa/FaMapMarkerAlt';
import { IconTextProps, IconProps } from './IconText.types';
import { IconTextContainer, IconStyle } from './IconText.components';

// Creates the Icon
const Icon: React.FC<IconProps> = ({ iconName, iconColor }) => {
    let icon = null;
    if (iconName === 'FaMapMarkerAlt') {
        icon = <FaMapMarkerAlt />;
    }
    if (iconName === 'FaRegClock') {
        icon = <FaRegClock />;
    }
    return <IconStyle style={{ color: iconColor }}>{icon}</IconStyle>;
};

// Creates the Icon with Text
const IconText: React.FC<IconTextProps> = ({ iconName, iconColor, text }) => {
    return (
        <IconTextContainer>
            <Icon iconName={iconName} iconColor={iconColor} />
            <span style={{ fontSize: '15px' }}>{text}</span>
        </IconTextContainer>
    );
};

export default IconText;
