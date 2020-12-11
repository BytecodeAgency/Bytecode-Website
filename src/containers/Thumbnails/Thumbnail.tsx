import React from 'react';
import {
    ServiceImage,
    ServiceImageContainer,
    ServiceName,
    ThumbnailContainer,
    Icon,
} from './Thumbnail.components';

type OwnProps = {
    backgroundImage: string,
    serviceIcon?: string,
    serviceName: string,
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof Thumbnail.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'Thumbnail' implicitly has type 'any' because it d... Remove this comment to see the full error message
const Thumbnail = ({ backgroundImage, serviceIcon, serviceName }: Props) => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ThumbnailContainer>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ServiceImageContainer backgroundURL={backgroundImage}>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Icon>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <ServiceImage src={serviceIcon} alt={serviceName} />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <ServiceName>{serviceName}</ServiceName>
            </Icon>
        </ServiceImageContainer>
    </ThumbnailContainer>
);

export default Thumbnail;

Thumbnail.defaultProps = {
    serviceIcon: null,
};
