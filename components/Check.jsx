import React from 'react';
import styled from 'styled-components';
import { Row } from '../lib/Grid';

const Content = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    padding: 1.5rem 0;
    margin-left: 1.75rem;
    max-width: 80%;
`;

const Label = styled.p`
    margin-left: 2.5rem;
`;

const Icon = styled.figure`
    width: 6rem;
    heigt: auto;
`;

const CheckItem = () => (
    <li>
        <Row>
            <Content>
                <Icon>
                    <img src="/static/icons/ui/check.svg" alt="Done!" />
                </Icon>
                <Label> {/* TODO: Remove this, maybe delete file? */}
                    Lorem Ipsum is simply dummy tex Lorem Ipsum is simply dummy
                    tex.
                </Label>
            </Content>
        </Row>
    </li>
);

export default CheckItem;
