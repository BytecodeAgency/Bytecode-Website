import React from 'react';
import PropTypes from 'prop-types';
import {
    Column,
    Container,
    CreditItem,
    CreditItemWithLinks,
    CreditsContainer,
    TitleContainer,
} from './Credits.components';

const Credits = ({
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
                {columnOne.map(item => (
                    <CreditItem credits={item.content} title={item.title} />
                ))}
            </Column>
            <Column>
                {columnTwo.map(item => (
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

Credits.propTypes = {
    special: PropTypes.arrayOf(PropTypes.string).isRequired,
    resources: PropTypes.arrayOf(PropTypes.string).isRequired,
    resourceLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
    columnOne: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.arrayOf(PropTypes.string).isRequired,
        }),
    ).isRequired,
    columnTwo: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.arrayOf(PropTypes.string).isRequired,
        }),
    ).isRequired,
};

export default Credits;
