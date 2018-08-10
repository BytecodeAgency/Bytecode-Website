import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const SubtitleBase = ({ className, children }) => (
    <div className={`subtitle ${className}`}>{children}</div>
);

const Subtitle = styled(SubtitleBase)`
    /* Custom styling here */
`;

const Title = styled.h1`
    /* Custom styling here */
`;

const Paragraph = styled.p`
    /* Custom styling here */
`;

const getButton = (href, button) => {
    if (href && button) {
        return <Button href={href}>{button}</Button>;
    }
    return '';
};

const TextBlock = props => {
    // eslint-disable-next-line object-curly-newline
    const { subtitle, title, href = null, button = null, children } = props;
    return (
        <div>
            <Subtitle>{subtitle}</Subtitle>
            <Title>{title}</Title>
            <Paragraph>{children}</Paragraph>
            {getButton(href, button)}
        </div>
    );
};

TextBlock.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string,
    button: PropTypes.string,
};

export default TextBlock;
