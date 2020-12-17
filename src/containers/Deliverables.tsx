import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const plusBullet = require('../images/icons/ui/plus-bullet.svg');

const { colors, mediaQueryMin } = theme;
const { secondary } = colors;

const DeliverablesBase = styled.section`
    @media (${mediaQueryMin.sm}) {
        margin-left: 5vw;
        align-content: center;
        align-self: end;
    }
`;

const DeliverablesContent = styled.div`
    grid-row: 2/4;
    grid-column: 2/9;
    z-index: 1;
    background: ${secondary};
    padding: 3em 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (${mediaQueryMin.xs}) {
        columns: 2;
        padding: 10em 10vw;
    }
    @media (${mediaQueryMin.md}) {
        columns: 3;
    }
`;

const List = styled.ul`
    @media (${mediaQueryMin.xs}) {
        columns: 2;
        list-style-position: outside;
        list-style-image: url('${plusBullet}');
    }
    @media (${mediaQueryMin.md}) {
        columns: 3;
    }
`;

const Deliverable = styled.li`
    margin: 0 0.1em;
    margin-bottom: 0.66em;
    font-size: 1.11em;
`;

interface Props {
    deliverables: string[];
}

const Deliverables: React.FC<Props> = ({ deliverables }) => {
    return (
        <DeliverablesBase>
            <DeliverablesContent>
                <p className="subtitle">Deliverables</p>
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
