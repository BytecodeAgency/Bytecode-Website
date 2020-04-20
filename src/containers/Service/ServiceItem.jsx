import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { StyledImage, ListContainer } from './ServiceItem.components';
import TextBlock from '../TextBlock/TextBlock';
import { Container, Col, Row } from '../../lib/Grid';

const { mediaQueryMin } = theme;
/*
const oudItem = ({ title, text, src, link, listTitle, listItems, light }) => {
    return (
        <StyledContainer src={src} light={light}>
            <StyledTextContainer light={light} image={src}>
                <StyledTitleMedium wide={src}>{title}</StyledTitleMedium>
                <StyledText>{text}</StyledText>
                <ReadMoreButton link={link} />
            </StyledTextContainer>
            {src ? (
                <ImageContainer light={light}>
                    <StyledImage src={src} />
                </ImageContainer>
            ) : (
                <ListContainer>
                    <StyledSubtitle>{listTitle}</StyledSubtitle>
                    <StyledList>
                        {listItems.map(item => (
                            <>
                                {item}
                                <br />
                            </>
                        ))}
                    </StyledList>
                </ListContainer>
            )}
        </StyledContainer>
    );
};
*/

const Containment = styled(Container)`
    background-color: ${props => (props.light ? '#262626' : '#1a1a1a')};

    @media (${mediaQueryMin.md}) {
        margin-right: 0em !important;
        margin-left: 3em !important;
        height: 40em;
    }
`;
const StyledRow = styled(Row)`
    height: 100%;
`;
const StyledCol = styled(Col)`
    margin-left: 6em !important;

    align-self: center;
`;
const ImageCol = styled(Col)`
    align-self: flex-end;
    background-color: #262626;
    margin-left: ${props => (props.light ? 0 : '20em !important')};
`;
const ListCol = styled(Col)`
    align-self: flex-start;
`;

const TextCol = ({ children, src }) =>
    src ? (
        <StyledCol md={2.7}>{children}</StyledCol>
    ) : (
        <StyledCol md={3.8}>{children}</StyledCol>
    );

const ServiceItem = ({ title, text, src, link, light }) => {
    return (
        <Containment light={light}>
            <StyledRow>
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
                    <ImageCol light={light}>
                        <StyledImage src={src} />
                    </ImageCol>
                ) : (
                    <ListCol>
                        <ListContainer>
                            <TextBlock subtitle="EXPERIENCE">
                                API-Development
                                <br />
                                Cloudcomputing
                                <br />
                                IT-Automatisering
                                <br />
                            </TextBlock>
                        </ListContainer>
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
