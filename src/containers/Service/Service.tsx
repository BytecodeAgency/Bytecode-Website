import React from 'react';
import PropTypes from 'prop-types';
import TextBlock from '../TextBlock/TextBlock';
import {
    Icon,
    ServiceIcon,
    ServiceWrapper,
    ServiceText,
} from './Service.components';

const Service = ({ children, iconName, title, fullWidth }) => {
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

Service.propTypes = {
    children: PropTypes.node.isRequired,
    iconName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool,
};

Service.defaultProps = {
    fullWidth: false,
};
