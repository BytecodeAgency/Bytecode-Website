import React from 'react';
import { Container, Row, Col } from '../lib/Grid';
import styled from 'styled-components';

const Content = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    padding: 1.5rem 0;
`
const Label = styled.p`
    margin-left: 2.5rem;
`
const CheckItem = () => {
    return (
        <li>
            <Row>
                <Content>
                    <img src="/static/icons/ui/check.svg" alt="Done!"/>
                    <Label>Lorem Ipsum is simply dummy tex Lorem Ipsum is simply dummy tex.</Label>
                </Content>
            </Row>
        </li>
    )
}

export default CheckItem