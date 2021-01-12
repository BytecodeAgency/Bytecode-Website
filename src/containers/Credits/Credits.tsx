import React from 'react';
import {
    Column,
    Container,
    CreditItem,
    CreditItemWithLinks,
    CreditsContainer,
    TitleContainer,
} from './Credits.components';
import CreditsProps from './Credits.types';

const getGridTemplateRows = (lengthOne: number, lengthTwo: number): string => {
    const largestNumber = Math.max(lengthOne, lengthTwo, 2);
    const gridTemplateRows = `${'1fr '.repeat(largestNumber)};`;
    return gridTemplateRows;
};

const Credits: React.FC<CreditsProps> = ({
    special,
    resources,
    resourceLinks,
    columnOne,
    columnTwo,
}) => {
    const gridTemplate = getGridTemplateRows(
        columnOne.length,
        columnTwo.length
    );
    return (
        <CreditsContainer>
            <TitleContainer>
                <h2>Credits</h2>
            </TitleContainer>
            <Container>
                <Column gridTemplateRows={gridTemplate}>
                    {columnOne.map((item) => (
                        <CreditItem credits={item.content} title={item.title} />
                    ))}
                </Column>
                <Column gridTemplateRows={gridTemplate}>
                    {columnTwo.map((item) => (
                        <CreditItem credits={item.content} title={item.title} />
                    ))}
                </Column>
                <Column gridTemplateRows={gridTemplate}>
                    <CreditItem credits={special} title="Special Thanks" />
                    <CreditItemWithLinks
                        credits={resources}
                        links={resourceLinks}
                        title="Resources"
                    />
                </Column>
            </Container>
        </CreditsContainer>
    );
};

export default Credits;
