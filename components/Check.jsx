import React from 'react';
import { Container, Row, Col } from '../lib/Grid';
import styled from 'styled-components';

const CheckItem = () => {
    return (
        <li>
            <Row>
                <Col xs={4}>
                    <img src="/static/icons/ui/check.svg" alt="Done!"/>
                </Col>
                <Col xs={8}>
                    Checkmate
                </Col>
            </Row>
        </li>
    )
}

export default CheckItem