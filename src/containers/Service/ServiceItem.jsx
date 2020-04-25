import React from 'react';
import PropTypes from 'prop-types';
import {
    StyledImage,
    Containment,
    StyledCol,
    StyledRow,
    ImageCol,
    ListCol,
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

const ServiceItem = ({ title, text, src, link, light }) => {
    return (
        <Containment src={src} light={light}>
            <StyledRow justify="between" light={light}>
                <TextCol src={src}>
                    <TextBlock
                        title={title}
                        href={link}
                        headingType="h2"
                        button="Lees Meer"
                    >
                        {text}
                    </TextBlock>
                </TextCol>
                {src ? (
                    <ImageCol xl={7} light={light}>
                        <StyledImage src={src} />
                    </ImageCol>
                ) : (
                    <ListCol xl={4}>
                        <TextBlock subtitle="EXPERIENCE">
                            API-Development
                            <br />
                            Cloudcomputing
                            <br />
                            IT-Automatisering
                            <br />
                        </TextBlock>
                    </ListCol>
                )}
            </StyledRow>
        </Containment>
    );
};

export default ServiceItem;

ServiceItem.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    light: PropTypes.bool,
};

ServiceItem.defaultProps = {
    light: false,
};

TextCol.propTypes = {
    children: PropTypes.node,
    src: PropTypes.string,
};

TextCol.defaultProps = {
    children: undefined,
    src: undefined,
};
