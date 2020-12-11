// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import { Link } from 'gatsby';
import React from 'react';
import theme from '../../styles/theme';

// @ts-expect-error ts-migrate(2339) FIXME: Property 'mediaQueryMin' does not exist on type '{... Remove this comment to see the full error message
const { mediaQueryMin, colors } = theme;
const { secondary } = colors;

type OwnSubtitleBaseProps = {
    className?: string,
    children?: React.ReactNode,
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'SubtitleBaseProps' circularly referenc... Remove this comment to see the full error message
type SubtitleBaseProps = OwnSubtitleBaseProps &
    typeof SubtitleBase.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'SubtitleBase' implicitly has type 'any' because i... Remove this comment to see the full error message
const SubtitleBase = ({ className, children }: SubtitleBaseProps) => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={`subtitle ${className}`}>{children}</div>
);

SubtitleBase.defaultProps = {
    className: '',
    children: '',
};

export const Subtitle = styled(SubtitleBase)`
    margin-bottom: 0.66rem;
`;

export const ThumbnailBase = styled(Link)`
    padding-bottom: 2em;
    cursor: pointer;
    transition: all 0.4s ease;
    min-width: 10em;
    width: 100%;
    & > * {
        box-shadow: 0 0 0.1em 0 rgba(0, 0, 0, 0.05);
    }
    .thumbnail-cta {
        transition: 0.3s ease all;
        transform: translate(0em, -1em);
        img {
            transition: 0.3s ease all;
        }
    }
    &:hover {
        & > .thumbnail-img {
            transform: scale(1.02);
        }

        .thumbnail-cta {
            transform: translate(0.3em, -1em);
            img {
                transform: scaleX(1.1);
            }
        }
    }
`;

export const ThumbnailContent = styled.div`
    padding: 1.33em 1em;
    background-color: ${(props: any) =>
        props.big ? 'transparent' : theme.colors.secondary};
    height: ${(props: any) => (props.big ? '5rem' : '13rem')};
`;

const ThumbnailImgBase = styled.figure`
    background: ${secondary};
    background-position: center center;
    background-size: cover;
    transition: all 0.5s ease;
    height: ${(props: any) => (props.big ? '80vh' : '20rem')};
    overflow: hidden;
    object-fit: cover;
    @media (${mediaQueryMin.md}) {
        height: ${(props: any) => (props.big ? '85vh' : '20rem')};
    }
`;

const ThumbnailImgContent = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
`;

type OwnThumbnailImgProps = {
    img: string,
    alt: string,
    big?: boolean,
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'ThumbnailImgProps' circularly referenc... Remove this comment to see the full error message
type ThumbnailImgProps = OwnThumbnailImgProps &
    typeof ThumbnailImg.defaultProps;
// @ts-expect-error ts-migrate(7022) FIXME: 'ThumbnailImg' implicitly has type 'any' because i... Remove this comment to see the full error message
export const ThumbnailImg = ({ img, alt, big }: ThumbnailImgProps) => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ThumbnailImgBase big={big}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ThumbnailImgContent src={img} alt={alt || 'featured image'} />
    </ThumbnailImgBase>
);

export const Arrow = styled.img`
    margin-left: 0.01em;
`;

ThumbnailImg.defaultProps = {
    big: false,
};
