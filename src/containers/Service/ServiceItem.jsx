import React from 'react';
import PropTypes from 'prop-types';
import {
    StyledImage,
    StyledContainer,
    StyledCol,
    StyledRow,
    ImageCol,
    StyledTextBlock,
    DeliverableList,
} from './ServiceItem.components';
import TextBlock from '../TextBlock/TextBlock';

const TextCol = ({ children, src }) =>
    src ? (
        <StyledCol src={src} xl={5}>
            {children}
        </StyledCol>
    ) : (
        <StyledCol src={src} xl={6}>
            {children}
        </StyledCol>
    );

const ServiceItem = ({
    title,
    subtitle,
    text,
    src,
    link,
    light,
    listItems,
}) => {
    const RightCol = () => {
        if (src)
            return (
                <ImageCol xl={7} light={light}>
                    <StyledImage src={src} />
                </ImageCol>
            );

        return null;
    };

    return (
        <StyledContainer src={src} light={light}>
            <StyledRow justify="between" light={light}>
                <TextCol src={src}>
                    <StyledTextBlock>
                        <TextBlock
                            title={title}
                            href={link}
                            headingType="h2"
                            subtitle={subtitle}
                        >
                            {text}
                        </TextBlock>
                        <DeliverableList>
                            {listItems.join(', ')}
                        </DeliverableList>
                    </StyledTextBlock>
                </TextCol>
                <RightCol />
            </StyledRow>
        </StyledContainer>
    );
};

export default ServiceItem;

ServiceItem.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    light: PropTypes.bool,
    listItems: PropTypes.arrayOf(PropTypes.string),
};

ServiceItem.defaultProps = {
    light: false,
    listItems: [],
};

TextCol.propTypes = {
    children: PropTypes.node,
    src: PropTypes.string,
};

TextCol.defaultProps = {
    children: undefined,
    src: undefined,
};
