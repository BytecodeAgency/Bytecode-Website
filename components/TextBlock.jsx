import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const SubtitleBase = ({ className, children }) => (
    <div className={`subtitle ${className}`}>{children}</div>
);

const Subtitle = styled(SubtitleBase)`
    margin-bottom: 2rem;
`;

const Title = styled.h1`
    margin-bottom: 4rem;
`;

const Paragraph = styled.p`
    margin: 0.5rem 0;
`;

const StyledButton = styled(Button)`
    margin-top: 6rem;
`;

const getButton = (href, button, useNextLink) => {
    if (href && button) {
        return (
            <StyledButton href={href} useNextLink={useNextLink}>
                {button}
            </StyledButton>
        );
    }
    return '';
};

const TextBlock = props => {
    const {
        subtitle,
        title,
        href = null,
        button = null,
        useNextLink,
        children,
    } = props;

    return (
        <div>
            <Subtitle>{subtitle}</Subtitle>
            <Title>{title}</Title>
            <Paragraph>{children}</Paragraph>
            {getButton(href, button, useNextLink)}
        </div>
    );
};

TextBlock.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string,
    button: PropTypes.string,
    useNextLink: PropTypes.bool,
};

export default TextBlock;
