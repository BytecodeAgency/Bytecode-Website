import React from 'react';
import {
    Column,
    Container,
    CreditItem,
    CreditItemWithLinks,
    CreditsContainer,
    TitleContainer,
} from './Credits.components';

type ColumnData = {
    title: string;
    content: string[];
};

interface Props {
    special: string[];
    resources: string[];
    resourceLinks: string[];
    columnOne: ColumnData[];
    columnTwo: ColumnData[];
}

const Credits: React.FC<Props> = ({
    special,
    resources,
    resourceLinks,
    columnOne,
    columnTwo,
}) => (
    <CreditsContainer>
        <TitleContainer>
            <h2>Credits</h2>
        </TitleContainer>
        <Container>
            <Column>
                {columnOne.map((item) => (
                    <CreditItem credits={item.content} title={item.title} />
                ))}
            </Column>
            <Column>
                {columnTwo.map((item) => (
                    <CreditItem credits={item.content} title={item.title} />
                ))}
            </Column>
            <Column>
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

export default Credits;
