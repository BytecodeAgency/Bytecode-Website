import React from 'react';
import IconTextProps from './IconText.types';
import { IconTextContainer, IconStyle } from './IconText.components';
import * as FontAwesome from 'react-icons/fa';

const Icon = (props: { iconName: string; size: string; color: string; }) => {
    const { iconName, size, color } = props;
    const icon = React.createElement(FontAwesome[iconName]);
    return <IconStyle style={{ fontSize: size, color: color }}>{icon}</IconStyle>;
};

const IconText: React.FC<IconTextProps> = ({
    icon,
    fSize,
    iconColor,
    text
}) => {
    return (
        <IconTextContainer>
            <Icon iconName={icon} size={fSize} color={iconColor} />
            <span style={{ fontSize: fSize, marginBottom: (parseInt(fSize) / 3) }}>{text}</span>
        </IconTextContainer>
    );
};

export default IconText;
