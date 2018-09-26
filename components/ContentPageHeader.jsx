import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from '../lib/Grid';
import TextBlock from './TextBlock';
import theme from '../styles/theme';

const MainHeader = styled.header`
    background-color: ${theme.colors.mediumgray};
    background-image: url('/static/img/content/group.jpg');
    background-blend-mode: luminosity;
    background-size: cover;
    margin-left: 1%;
    height: 80vh;
    display: flex;
    position: relative;
    flex-items: center;
`;

const ContentPageHeaderContainer = styled(Container)`
    display: flex;
    align-items: center;
    max-width: 100vw;
`;

const ContentPageHeaderRow = styled(Row)`
    flex-shrink: 1 !important;
`;

// eslint-disable-next-line
const TextBlockContent =
    'rem ipsum dolor sit amet consectetur adipisicing elit. Asperio';

const ContentPageHeader = () => (
    <MainHeader>
        <ContentPageHeaderContainer>
            <ContentPageHeaderRow>
                <Col md={6}>
                    <TextBlock
                        subtitle="De subtitel komt hier"
                        title="De titel maar dan een hele erge fucking lange
                        titel waar geen einde aan lijkt te komen"
                        href="//richardhotline.nl"
                        button="more"
                    >
                        {TextBlockContent}
                    </TextBlock>
                </Col>
            </ContentPageHeaderRow>
        </ContentPageHeaderContainer>
    </MainHeader>
);

export default ContentPageHeader;
