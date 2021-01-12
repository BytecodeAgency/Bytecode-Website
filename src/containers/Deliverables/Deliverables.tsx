import React from 'react';
import { Subtitle } from '../../components/Typography/Typography';
import {
    Deliverable,
    DeliverablesBase,
    DeliverablesContent,
    List,
} from './Deliverables.components';
import DeliverablesProps from './Deliverables.types';

const Deliverables: React.FC<DeliverablesProps> = ({ deliverables }) => {
    return (
        <DeliverablesBase>
            <DeliverablesContent>
                <Subtitle>Deliverables</Subtitle>
                <List>
                    {deliverables.map((item) => {
                        return <Deliverable>{item}</Deliverable>;
                    })}
                </List>
            </DeliverablesContent>
        </DeliverablesBase>
    );
};

export default Deliverables;
