import React from 'react';
import PropTypes from 'prop-types';
import {
    StyledImage,
    Containment,
    StyledCol,
    StyledRow,
    ImageCol,
    ListCol, StyledTextBlock, DeliverableList,
} from './ServiceItem.components';
import TextBlock from '../TextBlock/TextBlock';
import styled from "styled-components";
import theme from '../../styles/theme';
const {mediaQueryMin} = theme;

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
    listTitle,
    listItems,
}) => {
    return (
        <Containment src={src} light={light}>
            <StyledRow justify="between" light={light}>
                <TextCol src={src}>
                    
                    <StyledTextBlock>
                        <TextBlock
                            title={title}
                            href={link}
                            headingType="h2"
                            button="Lees Meer"
                            subtitle={subtitle}
                        >
                            {text}
                        </TextBlock>
                    </StyledTextBlock>

                </TextCol>
                {src ? (
                    <ImageCol xl={7} light={light}>

                        <StyledImage src={src} />
                    </ImageCol>
                ) : (
                    <ListCol xl={4}>
                        <TextBlock subtitle={listTitle}>
                            {listItems.map(item => (
                                <>
                                    {item}
                                    <br />
                                </>
                            ))}
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
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    light: PropTypes.bool,
    listTitle: PropTypes.string,
    listItems: PropTypes.arrayOf(PropTypes.string),
};

ServiceItem.defaultProps = {
    light: false,
    listTitle: '',
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
