import React from 'react';
import {
    StyledImage,
    StyledRow,
    TextCol,
    StyledContainer,
} from './ServiceHeader.components';
import { Col } from '../../lib/Grid';
import TextBlock from '../TextBlock/TextBlock';

interface Props {
    title: string;
    subtitle: string;
    text: string;
    src: string;
}

const ServiceHeader: React.FC<Props> = ({ title, subtitle, text, src }) => {
    return (
        <StyledContainer>
            <StyledRow>
                <TextCol xl={6}>
                    <TextBlock title={title} subtitle={subtitle}>
                        {text}
                    </TextBlock>
                </TextCol>
                <Col xl={6}>
                    <StyledImage src={src} />
                </Col>
            </StyledRow>
        </StyledContainer>
    );
};
export default ServiceHeader;
