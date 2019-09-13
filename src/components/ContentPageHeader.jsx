import React from 'react';
import styled from 'styled-components';
import TextBlock from './TextBlock';
import theme from '../styles/theme';

const { mediaQueryMin, colors, containerWidth } = theme;

const MainHeader = styled.header`
    background-color: ${colors.mediumgray};
    background-image: url(${props => props.img});
    background-blend-mode: soft-light;
    display: flex;
    background-size: cover;
    animation: fadeIn 2s;
    padding: 3em 1em;
    align-items: end;
    height: 100vh;
    max-height: 40em;
    transition: 0.5s ease-in-out;
    @media (${mediaQueryMin.sm}) {
        padding: 3em 3em;
        align-items: center;
    }
    @media (${mediaQueryMin.md}) {
        background-color: ${colors.mediumgray};
        background-image: url(${props => props.img});
        background-size: ${props => props.bgSize || 'cover'};
        background-repeat: no-repeat;
        background-position-x: ${props => props.bgX || '85%'};
        background-position-y: ${props => props.bgY || 0};
        min-height: 80vh;

        background-blend-mode: ${props => props.blendMode || 'soft-light'};
    }
    .content {
        margin-left: 0;
    }
`;

const MainHeaderContent = styled.div`
    margin: 2em ${containerWidth.xs};
    @media (${mediaQueryMin.sm}) {
        margin: 2em ${containerWidth.sm};
        width: 66vw;
    }

    @media (${mediaQueryMin.md}) {
        margin: 2em ${containerWidth.md};
        width: 33vw;
    }

    @media (${mediaQueryMin.lg}) {
        margin: 2.5vw ${containerWidth.lg};
    }

    @media (${mediaQueryMin.xl}) {
        margin: 4vw ${containerWidth.xl}};
    }
`;

const ContentPageHeader = props => {
    const { subtitle, title, button, href, text, useGatsbyLink } = props;
    return (
        <MainHeader {...props}>
            <MainHeaderContent fluid={true}>
                <TextBlock
                    useGatsbyLink
                    subtitle={subtitle || ''}
                    title={title || ''}
                    href={href}
                    button={button || ''}
                >
                    {text}
                </TextBlock>
            </MainHeaderContent>
        </MainHeader>
    );
};

export default ContentPageHeader;
