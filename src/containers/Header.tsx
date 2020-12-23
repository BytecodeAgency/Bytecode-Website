import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import Button from '../components/Button/Button';

const { colors, mediaQueryMin, containerWidth } = theme;

const arrowDown = require('../images/icons/ui/carret-down.svg');

interface HeaderBaseProps {
    backgroundImage: string;
}
const HeaderBase = styled.header<HeaderBaseProps>`
    background: linear-gradient(to top, rgba(0, 0, 0, 0.95), transparent),
        url(${(props) => props.backgroundImage});
    background-size: cover !important;
    background-position: center !important;
    height: 100vh;
    padding: 1em;
    display: flex;
    align-items: flex-end;
    @media (${mediaQueryMin.sm}) {
        padding: 3em ${containerWidth.sm};
        background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent 50%),
            url(${(props) => props.backgroundImage});
    }
    @media (${mediaQueryMin.md}) {
        padding: 2em ${containerWidth.md};
    }
    @media (${mediaQueryMin.lg}) {
        padding: 3em ${containerWidth.lg};
    }
    @media (${mediaQueryMin.xxl}) {
        padding: 7em ${containerWidth.xl};
    }
`;

const HeaderInformation = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: baseline;

    @media (${mediaQueryMin.xs}) {
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        & > * {
            width: 50%;
            padding: 1em;
            justify-content: center;
        }
    }
    @media (${mediaQueryMin.md}) {
        & > * {
            width: 40%;
        }
    }
`;

const StyledSubtitle = styled.p`
    color: ${colors.lightgray} !important;
    text-shadow: 0 0 1em #000;
`;

const ArrowDown = styled.img`
    width: 1em;
    position: absolute;
    right: 50vw;
    margin-right: 0.5em;
    opacity: 0.5;
`;

const Text = styled.p`
    text-shadow: 0 0 1em #000;
`;

interface HeaderProps {
    title: string;
    subtitle: string;
    tagline?: string;
    img: string;
    children?: React.ReactNode;
    text?: string;
    href?: string;
    button?: string;
    useGatsbyLink?: boolean;
}
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
                    <StyledSubtitle className="white subtitle">
                        {subtitle}
                    </StyledSubtitle>
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
