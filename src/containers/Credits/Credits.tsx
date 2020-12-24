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

const Credits: React.FC<CreditsProps> = ({
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
