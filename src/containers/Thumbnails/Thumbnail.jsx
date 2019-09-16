import React from 'react';
import PropTypes from 'prop-types';
import {
    ServiceImage,
    ServiceImageContainer,
    ServiceName,
    ThumbnailContainer,
    Icon,
} from './Thumbnail.components';

const Thumbnail = ({ backgroundImage, serviceIcon, serviceName }) => (
    <ThumbnailContainer>
        <ServiceImageContainer backgroundURL={backgroundImage}>
            <Icon>
                <ServiceImage src={serviceIcon} alt={serviceName} />
                <ServiceName>{serviceName}</ServiceName>
            </Icon>
        </ServiceImageContainer>
    </ThumbnailContainer>
);

export default Thumbnail;

Thumbnail.propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    serviceIcon: PropTypes.string, // TODO: Change to enum
    serviceName: PropTypes.string.isRequired,
};

Thumbnail.defaultProps = {
    serviceIcon: null,
};
