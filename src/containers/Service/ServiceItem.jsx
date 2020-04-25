import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { StyledImage} from './ServiceItem.components';
import TextBlock from '../TextBlock/TextBlock';
import { Container, Col, Row } from '../../lib/Grid';

const { mediaQueryMin } = theme;

const Containment = styled(Container)`
    @media (${mediaQueryMin.sm}) {
        margin: ${props =>
            props.light || !props.src
                ? '5em 0em 5em 3em'
                : '5em 0 5em 0'} !important;
    }
`;
const StyledRow = styled(Row)`
    background-color: ${props =>
        props.light ? '#262626' : '#1a1a1a'}!important;
    flex-direction: column-reverse;
    @media (${mediaQueryMin.sm}) {
        flex-direction: row;
    }
    min-height: 85vh;
`;
const StyledCol = styled(Col)`
    align-self: center;
    padding-right: 7em !important;
    padding-left: 7em !important;
`;
const ImageCol = styled(Col)`
    background-color: #262626;
    align-self: flex-end;
`;
const ListCol = styled(Col)`
    padding: 14em 8em !important;
`;

const TextCol = ({ children, src }) =>
    src ? (
        <StyledCol xl={5}>{children}</StyledCol>
    ) : (
        <StyledCol xl={6}>{children}</StyledCol>
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
