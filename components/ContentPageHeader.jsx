import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from '../lib/Grid';
import TextBlock from './TextBlock';
import theme from '../styles/theme';

const MainHeader = styled.header`
    text-shadow: 5px 5px 100px rgba(0, 0, 0, 0.9);
    background-color: ${theme.colors.mediumgray};
    background-image: url(${props => props.img});

    margin-left: 1%;

    display: flex;
    position: relative;
    justify-items: center;
    background-size: cover;
    background-blend-mode: soft-light;
    /* background-blend-mode: soft-light; */
    @media (min-width: ${theme.breakpoints[3]}px) {
        background-size: 75%;
        background-repeat: no-repeat;
        background-position-x: 80%;
        /* background-blend-mode: normal; */
        height: 80vh;
    }
`;

// eslint-disable-next-line
const TextBlockContent =
    'rem ipsum dolor sit amet consectetur adipisicing elit. Asperio';

/* eslint-disable max-len */
const ContentPageHeader = () => (
    <MainHeader img="/static/img/content/team.png">
        <Container fluid>
            <Row>
                <Col offset={{ xl: 1, lg: 1 }} md={10} lg={9} xl={4}>
                    <TextBlock
                        subtitle="De subtitel komt hier"
                        title="De titel maar dan een hele erge fucking lange
                        titel waar geen einde aan lijkt te komen"
                        href="//bytecode.nl"
                        button="more"
                    >
                        {TextBlockContent}
                    </TextBlock>
                </Col>
            </Row>
        </Container>
    </MainHeader>
);

export default ContentPageHeader;
