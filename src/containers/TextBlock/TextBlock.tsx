import React from 'react';
import {
    Figure,
    H1,
    H2,
    H3,
    H4,
    StyledButton,
    Subtitle,
// @ts-expect-error ts-migrate(6142) FIXME: Module './TextBlock.components' was resolved to '/... Remove this comment to see the full error message
} from './TextBlock.components';

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'src' implicitly has an 'any' type.
const getImage = (src, alt) => {
    if (src) {
        return (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Figure>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <img src={src} alt={alt} />
            </Figure>
        );
    }
    return '';
};

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'href' implicitly has an 'any' type.
const getButton = (href, button, useGatsbyLink) => {
    if (href && button) {
        return (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <StyledButton href={href} useGatsbyLink={useGatsbyLink}>
                {button}
            </StyledButton>
        );
    }
    return '';
};

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'type' implicitly has an 'any' type.
const getTitle = (type, title) => {
    if (!title) {
        return '';
    }
    if (type === 'h1') {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <H1>{title}</H1>;
    }
    if (type === 'h2') {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <H2>{title}</H2>;
    }
    if (type === 'h3') {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <H3>{title}</H3>;
    }
    if (type === 'h4') {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <H4>{title}</H4>;
    }
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <H1>{title}</H1>;
};

type TextBlockProps = {
    image?: string;
    alt?: string;
    subtitle?: string;
    title: string;
    headingType?: 'h1' | 'h2' | 'h3' | 'h4';
    href?: string;
    button?: string;
    useGatsbyLink?: boolean;
    children?: React.ReactNode;
};

// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'props'.
const TextBlock =props: TextBlockProps => {
    const {
        image,
        alt,
        subtitle,
        title,
        headingType,
        href = null,
        button = null,
        useGatsbyLink,
        children,
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'props'.
    } = props;

    return (
        <div>
            {getImage(image, alt)}
            <Subtitle hasTitle={title}>{subtitle}</Subtitle>
            {getTitle(headingType, title)}
            <p>{children}</p>
            {getButton(href, button, useGatsbyLink)}
        </div>
    );
};

export default TextBlock;

TextBlock.defaultProps = {
    image: undefined,
    alt: undefined,
    subtitle: undefined,
    headingType: 'h1',
    href: null,
    button: null,
    useGatsbyLink: false,
    children: undefined,
};
