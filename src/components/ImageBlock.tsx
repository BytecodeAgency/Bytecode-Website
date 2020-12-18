import React from 'react';

import styled from 'styled-components';
import theme from '../styles/theme';

// @ts-expect-error ts-migrate(2339) FIXME: Property 'mediaQueryMin' does not exist on type '{... Remove this comment to see the full error message
const { mediaQueryMin, colors } = theme;

const ImageBlockFigure = styled.figure`
    margin: 0;
    height: 100vh;
    object-fit: cover;
    object-position: bottom;
    @media (${mediaQueryMin.xs}) {
        max-height: 90vh;
        display: block;
        position: relative;
        right: 0px;
        overflow: hidden;
    }
    &:after {
        border: 0.1em ${colors.primary} solid;
        border-right: none;
        content: '';
        position: absolute;
        top: 0px;
        right: 0px;
        z-index: 10;
        margin: 3rem 0 3rem 3rem;
    }

    .content {
        transition: all 0.3s ease;
    }

    @media (min-width: ${theme.breakpointMobileMenu}) {
        &:after {
            margin: 6rem 0 6rem 6rem;
        }
    }
`;

type Props = {
    src: string;
    alt: string;
};

// @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'props'. Did you mean 'Props'?
const ImageBlock =props: Props => {
    // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'props'. Did you mean 'Props'?
    const { src, alt } = props;
    return (
        <section>
            <ImageBlockFigure>
                <img className="content" src={src} alt={alt} />
            </ImageBlockFigure>
        </section>
    );
};

export default ImageBlock;
