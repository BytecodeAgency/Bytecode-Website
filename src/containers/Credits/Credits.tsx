import React from 'react';
import {
    Column,
    Container,
    CreditItem,
    CreditItemWithLinks,
    CreditsContainer,
    TitleContainer,
    // @ts-expect-error ts-migrate(6142) FIXME: Module './Credits.components' was resolved to '/ho... Remove this comment to see the full error message
} from './Credits.components';

type Props = {
    special: string[],
    resources: string[],
    resourceLinks: string[],
    columnOne: {
        title: string,
        content: string[],
    }[],
    columnTwo: {
        title: string,
        content: string[],
    }[],
};

const Credits = ({
    special,
    resources,
    resourceLinks,
    columnOne,
    columnTwo,
}: Props) => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <CreditsContainer>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TitleContainer>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <h2>Credits</h2>
        </TitleContainer>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Container>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Column>
                {columnOne.map(item => (
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <CreditItem credits={item.content} title={item.title} />
                ))}
            </Column>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Column>
                {columnTwo.map(item => (
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <CreditItem credits={item.content} title={item.title} />
                ))}
            </Column>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Column>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <CreditItem credits={special} title="Special Thanks" />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <CreditItemWithLinks
                    credits={resources}
                    links={resourceLinks}
                    title="Resources"
                />
            </Column>
        </Container>
    </CreditsContainer>
);

export default Credits;
