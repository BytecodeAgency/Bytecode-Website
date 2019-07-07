import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from '../lib/Grid';
import theme from '../styles/theme';
import TextBlock from './TextBlock';

const Icon = styled.img`
    max-height: 10rem;
    margin-top: 3em;
    margin-left: 0em;
    padding: 0.1em;
    @media (max-width: ${theme.breakpoints[0]}px) {
        margin-top: 1.5em;
        margin-bottom: 1em;
        padding: 0em !important;
    }
`;

const ServiceWrapper = styled(Col)`
    padding: 1em;
`;
const ServiceRow = styled(Row)`
    margin: 1em;
    padding: 1em;
`;

const ServiceIcon = styled(Col)`
    margin: 0;
`;

const Service = ({ children, ...props }) => {
    const { iconName, title, fullWidth } = props;
    const iconSrc = require(`../images/icons/services/${iconName}.svg`);
    let width = 6;
    if (fullWidth) {
        width = 11;
    }
    return (
        <ServiceWrapper lg={width} md={width} xs={12}>
            <ServiceRow>
                <ServiceIcon xl={2} lg={2.5} md={3} xs={4}>
                    <Icon src={iconSrc} alt={iconName} />
                </ServiceIcon>
                <Col offset={{ md: 0.5 }} sm={8} xs={12}>
                    <TextBlock title={title} headingType="h3">
                        {children}
                    </TextBlock>
                </Col>
            </ServiceRow>
        </ServiceWrapper>
    );
};

export default Service;
