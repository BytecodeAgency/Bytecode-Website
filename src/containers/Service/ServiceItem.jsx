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
    background-color: ${props =>
        props.light ? '#262626' : '#1a1a1a'}!important;
    margin: 5vh 0em 15vh 0em !important;
    @media (${mediaQueryMin.sm}) {
        margin: 5vh 0em 15vh 3em !important;
    }
    min-height: 80vh;
`;
const StyledRow = styled(Row)`
    min-height: 90vh;
    flex-direction: column-reverse;
    @media (${mediaQueryMin.sm}) {
        flex-direction: row;
        min-height: 80vh;
    }
`;
const StyledCol = styled(Col)`
    margin-left: 3em !important;
    @media (${mediaQueryMin.sm}) {
        margin-left: 2.3em !important;
    }
    @media (${mediaQueryMin.lg}) {
        margin-left: 6em !important;
    }
    align-self: center;
`;
const ImageCol = styled(Col)`
    //visibility: hidden;
    align-self: flex-end;
    background-color: #262626;
    overflow: hidden;
    @media (${mediaQueryMin.xs}) {
        visibility: visible;
    }
`;
const ListCol = styled(Col)`
    visibility: hidden;
    position: relative;
    top: 10em;
    @media (${mediaQueryMin.xs}) {
        visibility: visible;
    }
    @media (${mediaQueryMin.sm}) {
        align-self: flex-start;
        top: 0;
    }
`;

const TextCol = ({ children, src }) =>
    src ? (
        <StyledCol sm={10} lg={4} xl={3.6}>
            {children}
        </StyledCol>
    ) : (
        <StyledCol lg={5} xl={3.8}>
            {children}
        </StyledCol>
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
