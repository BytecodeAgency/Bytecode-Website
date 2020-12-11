import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import theme from '../styles/theme';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/ArrowButton' was resolved to... Remove this comment to see the full error message
import ArrowButton from '../components/ArrowButton';

// @ts-expect-error ts-migrate(2339) FIXME: Property 'mediaQueryMin' does not exist on type '{... Remove this comment to see the full error message
const { colors, mediaQueryMin, containerWidth } = theme;

const arrowDown = require('../images/icons/ui/carret-down.svg');

const HeaderBase = styled.header`
    background: linear-gradient(to top, rgba(0, 0, 0, 0.95), transparent),
        url(${(props: any) => props.backgroundImage});
    background-size: cover !important;
    background-position: center !important;
    height: 100vh;
    padding: 1em;
    display: flex;
    align-items: flex-end;
    @media (${mediaQueryMin.sm}) {
        padding: 3em ${containerWidth.sm};
        background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent 50%),
            url(${(props: any) => props.backgroundImage});
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

type OwnProps = {
    title: string,
    subtitle: string,
    tagline: string,
    img: string,
    children: React.ReactNode,
    text?: string,
    href?: string,
    button?: string,
    useGatsbyLink?: boolean,
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof Header.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'Header' implicitly has type 'any' because it does... Remove this comment to see the full error message
const Header = ({
    title,
    subtitle,
    text,
    href,
    button,
    tagline,
    img,
    children,
    useGatsbyLink,
}: Props) => {
    return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <HeaderBase backgroundImage={img}>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <HeaderInformation>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <div>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <StyledSubtitle className="white subtitle">
                        {subtitle}
                    </StyledSubtitle>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <h1>{title}</h1>
                </div>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <div>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <Text>{tagline || text}</Text>
                    {children}
                    {href && (
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <ArrowButton useGatsbyLink={useGatsbyLink} href={href}>
                            {button || 'Lees meer'}
                        </ArrowButton>
                    )}
                </div>
            </HeaderInformation>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ArrowDown src={arrowDown} />
        </HeaderBase>
    );
};

export default Header;

Header.defaultProps = {
    text: null,
    href: null,
    button: null,
    useGatsbyLink: false,
};
