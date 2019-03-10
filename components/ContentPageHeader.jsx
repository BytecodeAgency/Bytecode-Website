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
    margin-left: 1% !important;
    display: flex;
    position: relative;
    justify-items: bottom;
    background-size: cover;
    background-blend-mode: soft-light;
    animation: fadeIn 2s;
    padding: 3em 1em;
    @media (min-width: ${theme.breakpoints[2]}px) {
        padding: 3em 3em;
    }
    @media (min-width: ${theme.breakpoints[3] * 0.75}px) {
        background-color: ${theme.colors.mediumgray};
        background-image: url(${props => props.img});
        background-size: ${props => props.bgSize || '75%'};
        background-repeat: no-repeat;
        background-position-x: ${props => props.bgX || '85%'};
        background-position-y: ${props => props.bgY || 0};
        height: 80vh;
        & > div {
            transform: translateY(5em);
        }
        background-blend-mode: ${props => props.blendMode || 'soft-light'};
    }
    .content {
        margin-left: none !important;
    }

    @keyframes fadeIn;
`;

const MainHeaderContent = styled('Container')`
    margin-left: none !important;

    @media (min-width: ${theme.breakpoints[1]}px) {
        margin-top: 10em;
    }
`;

// eslint-disable-next-line
const TextBlockContent =
    'rem ipsum dolor sit amet consectetur adipisicing elit. Asperio';

/* eslint-disable max-len */
const ContentPageHeader = props => {
    // eslint-disable-next-line
    const {
        img,
        subtitle,
        title,
        button,
        href,
        blendMode,
        bgSize,
        bgX,
        bgY,
    } = props;
    // eslint-disable-next-line
    return (
        <MainHeader img={img}>
            <MainHeaderContent fluid>
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
            </MainHeaderContent>
        </MainHeader>
    );
};

export default ContentPageHeader;
