import React from 'react';
import Button from '../../components/Button/Button';
import HeaderProps from './Header.types';
import {
    HeaderBase,
    StyledSubtitle,
    ArrowDown,
    HeaderInformation,
    Text,
} from './Header.components';

const arrowDown = require('../../images/icons/ui/carret-down.svg');

const Header: React.FC<HeaderProps> = ({
    title,
    subtitle,
    text,
    href,
    button,
    tagline,
    img,
    children,
    useGatsbyLink,
}) => {
    return (
        <HeaderBase backgroundImage={img}>
            <HeaderInformation>
                <div>
                    <StyledSubtitle>{subtitle}</StyledSubtitle>
                    <h1>{title}</h1>
                </div>
                <div>
                    <Text>{tagline || text}</Text>
                    {children}
                    {href && (
                        <Button useGatsbyLink={useGatsbyLink} href={href}>
                            {button || 'Lees meer'}
                        </Button>
                    )}
                </div>
            </HeaderInformation>
            <ArrowDown src={arrowDown} />
        </HeaderBase>
    );
};

export default Header;
