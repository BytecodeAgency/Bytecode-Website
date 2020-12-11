import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import theme from '../styles/theme';

const plusBullet = require('../images/icons/ui/plus-bullet.svg');

// @ts-expect-error ts-migrate(2339) FIXME: Property 'mediaQueryMin' does not exist on type '{... Remove this comment to see the full error message
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

type Props = {
    deliverables: string[],
};

const Deliverables = ({ deliverables }: Props) => {
    return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DeliverablesBase>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <DeliverablesContent>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="subtitle">Deliverables</p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <List>
                    {deliverables.map(item => {
                        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        return <Deliverable>{item}</Deliverable>;
                    })}
                </List>
            </DeliverablesContent>
        </DeliverablesBase>
    );
};

export default Deliverables;
