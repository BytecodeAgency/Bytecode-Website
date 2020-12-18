import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../TextBlock/TextBlock' was resolved to '/... Remove this comment to see the full error message
import TextBlock from '../TextBlock/TextBlock';
import {
    Icon,
    ServiceIcon,
    ServiceWrapper,
    ServiceText,
} from './Service.components';

type OwnProps = {
    children: React.ReactNode,
    iconName: string,
    title: string,
    fullWidth?: boolean,
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof Service.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'Service' implicitly has type 'any' because it doe... Remove this comment to see the full error message
const Service = ({ children, iconName, title, fullWidth }: Props) => {
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

Service.defaultProps = {
    fullWidth: false,
};
