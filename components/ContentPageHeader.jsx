import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from '../lib/Grid';
import TextBlock from './TextBlock';
import theme from '../styles/theme';

const MainHeader = styled.header`
    background-color: ${theme.colors.mediumgray};
    background-image: url(${props => props.img});
    background-blend-mode: soft-light;;
    background-size: cover;
    margin-left: 1%;
    height: 80vh;
    display: flex;
    position: relative;
    justify-items: center;
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
    <MainHeader img="https://www.grafixarts.com/wp-content/uploads/2018/06/gfx_shrink_artist_sheets_fan_julie.jpg">
        <ContentPageHeaderContainer>
            <ContentPageHeaderRow>
                <Col md={6}>
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
            </ContentPageHeaderRow>
        </ContentPageHeaderContainer>
    </MainHeader>
);

export default ContentPageHeader;
