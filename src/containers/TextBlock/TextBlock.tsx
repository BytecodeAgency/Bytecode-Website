import React from 'react';
import {
    Figure,
    H1,
    H2,
    H3,
    H4,
    StyledButton,
    Subtitle,
} from './TextBlock.components';

interface ImageProps {
    src?: string;
    alt?: string;
}
const Image: React.FC<ImageProps> = ({ src, alt }) => {
    if (src) {
        return (
            <Figure>
                <img src={src} alt={alt} />
            </Figure>
        );
    }
    return null;
};

interface ButtonProps {
    href?: string;
    button?: string;
    useGatsbyLink?: boolean;
}
const Button: React.FC<ButtonProps> = ({ href, button, useGatsbyLink }) => {
    if (href && button) {
        return (
            <StyledButton href={href} useGatsbyLink={useGatsbyLink}>
                {button}
            </StyledButton>
        );
    }
    return null;
};

interface TitleProps {
    type: string;
    title?: string;
}
const Title: React.FC<TitleProps> = ({ type, title }) => {
    if (!title) {
        return null;
    }
    if (type === 'h1') {
        return <H1>{title}</H1>;
    }
    if (type === 'h2') {
        return <H2>{title}</H2>;
    }
    if (type === 'h3') {
        return <H3>{title}</H3>;
    }
    if (type === 'h4') {
        return <H4>{title}</H4>;
    }
    return <H1>{title}</H1>;
};

interface TextBlockProps {
    image?: string;
    alt?: string;
    subtitle?: string;
    title: string;
    headingType?: 'h1' | 'h2' | 'h3' | 'h4';
    href?: string;
    button?: string;
    useGatsbyLink?: boolean;
    children?: React.ReactNode;
}

const TextBlock: React.FC<TextBlockProps> = ({
    image,
    alt,
    subtitle,
    title,
    headingType = 'h1',
    href,
    button,
    useGatsbyLink,
    children,
}) => {
    return (
        <div>
            <Image src={image} alt={alt} />
            <Subtitle hasTitle={title}>{subtitle}</Subtitle>
            <Title type={headingType} title={title} />
            <p>{children}</p>
            <Button button={button} href={href} useGatsbyLink={useGatsbyLink} />
        </div>
    );
};

export default TextBlock;
