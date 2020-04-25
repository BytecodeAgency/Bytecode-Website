import React from 'react';
import PropTypes from 'prop-types';
import {
    StyledImage,
    StyledRow,
    TextCol,
    Containment,
} from './ServiceHeader.components';
import { Col } from '../../lib/Grid';
import TextBlock from '../TextBlock/TextBlock';

const ServiceHeader = ({ title, subtitle, text, src }) => {
    return (
        <Containment>
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
        </Containment>
    );
};
export default ServiceHeader;

ServiceHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};
