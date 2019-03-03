import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from '../lib/Grid';
import TextBlock from './TextBlock';
import theme from '../styles/theme';

const MainHeader = styled.header`
    /* text-shadow: 5px 5px 100px rgba(0, 0, 0, 0.9); */
    background-color: ${theme.colors.mediumgray};
    background-image: url(${props => props.img});
    background-blend-mode: soft-light;
    margin-left: 1%;
    display: flex;
    position: relative;
    justify-items: bottom;
    background-size: cover;
    background-blend-mode: soft-light;
    animation: fadeIn 2s;
    @media (min-width: ${theme.breakpoints[3]}px) {
        background-color: ${theme.colors.mediumgray};
        background-image: url(${props => props.img});
        background-size: 75%;
        background-repeat: no-repeat;
        background-position-x: 85%;
        /* background-blend-mode: normal; */
        height: 80vh;
        & > div {
            transform: translateY(5em);
        }
    }

    @keyframes fadeIn;
`;

// eslint-disable-next-line
const TextBlockContent =
    'rem ipsum dolor sit amet consectetur adipisicing elit. Asperio';

/* eslint-disable max-len */
const ContentPageHeader = props => {
    // eslint-disable-next-line
    const {
        img, subtitle, title, button, href,
    } = props;
    // eslint-disable-next-line
    return (
        <MainHeader img={img}>
            <Container fluid>
                <Row>
                    <Col offset={{ xl: 1, lg: 0 }} md={10} lg={9} xl={5}>
                        <TextBlock
                            subtitle={subtitle || ''}
                            title={title || ''}
                            href={href}
                            button={button || ''}
                        >
                            {TextBlockContent}
                        </TextBlock>
                    </Col>
                </Row>
            </Container>
        </MainHeader>
    );
};

export default ContentPageHeader;
