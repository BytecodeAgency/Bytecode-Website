import React from 'react';
import {
    ServiceImage,
    ServiceImageContainer,
    ServiceName,
    ThumbnailContainer,
    Icon,
} from './Thumbnail.components';

interface ThumbnailProps {
    backgroundImage: string;
    serviceIcon?: string;
    serviceName: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({
    backgroundImage,
    serviceIcon = undefined,
    serviceName,
}) => (
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
