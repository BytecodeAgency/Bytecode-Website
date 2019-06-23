import React from 'react';
import { Container, Row, Col } from '../lib/Grid';
import styled from 'styled-components';
import theme from '../styles/theme';
import TextBlock from '../components/TextBlock';

const Icon = styled.img`
    max-height: 10rem;
    margin-top: 5em;
    margin-left: 2em;
    @media (max-width: ${theme.breakpoints[0]}px) {
        margin-top: 1.5em;
        margin-bottom: 1em;
        padding: 0 !important;
    }
`;

const ServiceWrapper = styled(Col)`
    padding: 1em;
`;
const ServiceRow = styled(Row)`
    margin: 1em;
    padding: 1em;
    font-size: 0.5rem;
`;

const ServiceIcon = styled(Col)`
    margin: 0;
`;

const Service = ({ children, ...props }) => {
    const { iconName, title, fullWidth } = props;
    const iconSrc = require(`../images/icons/services/${iconName}.svg`);
    let width = 5;
    if (fullWidth) {
        width = 11;
    }
    return (
        <ServiceWrapper lg={width} md={width} xs={12}>
            <ServiceRow>
                <ServiceIcon xs={4}>
                    <Icon src={iconSrc} alt={iconName} />
                </ServiceIcon>
                <Col sm={8} xs={12}>
                    <TextBlock title={title} headingType="h3">
                        {children}
                    </TextBlock>
                </Col>
            </ServiceRow>
        </ServiceWrapper>
    );
};

export default Service;
