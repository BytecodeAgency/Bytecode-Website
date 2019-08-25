import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from '../lib/Grid';
import theme from '../styles/theme';
import TextBlock from './TextBlock';

const { xs, sm, md, lg, xl, xxl } = theme.mediaQuery;

const Icon = styled.img`
    max-height: 10rem;
    margin-top: 3em;
    margin-left: 0em;
    padding: 0.1em;
    @media (max-width: ${theme.breakpoints[0]}px) {
        margin-top: 2em;
        margin-bottom: 0em;
        padding: 0em !important;
    }
`;

const ServiceWrapper = styled.div`
    min-height: 10em;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    @media screen and ${xs} {
        flex-direction: row;
    }
    @media screen and ${md} {
        padding: 0 6em 1em 0em;
        flex-basis: ${props => (props.fullWidth ? '100%' : '50%')};
    }
    @media screen and ${lg} {
    }
`;

const ServiceIcon = styled.figure`
    margin: 0;
    margin-right: 3em;
    transform: translateY(0.1em);
    flex-basis: 25%;
    width: 20%;
    @media ${sm} {
        margin: 0;
        margin-right: 3em;
        min-height: 100%;
        flex-basis: 25%;
        width: 20%;
    }
    @media ${md} {
        margin: 0;
        flex-basis: 15%;
        min-width: 15%;
        margin-right: 3em;
        min-height: 100%;
    }
`;

const Service = ({ children, ...props }) => {
    const { iconName, title, fullWidth } = props;
    const iconSrc = require(`../images/icons/services/${iconName}.svg`);
    return (
        <ServiceWrapper fullWidth={fullWidth}>
            <ServiceIcon>
                <Icon src={iconSrc} alt={iconName} />
            </ServiceIcon>
            <div>
                <TextBlock title={title} headingType="h3">
                    {children}
                </TextBlock>
            </div>
        </ServiceWrapper>
    );
};

export default Service;
