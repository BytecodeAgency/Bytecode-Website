import React from 'react';
import PropTypes from 'prop-types';
import {
    Column,
    Container,
    CreditItem, CreditItemWithLinks, CreditsContainer, TitleContainer,
} from '../Credits/Credits.components';



const Credits = ({
    partner,
    year,
    designers,
    backend,
    frontend,
    special,
    resources,
    resourceLinks,
}) => (
    <CreditsContainer>
        <TitleContainer>
            <h2>Credits</h2>
        </TitleContainer>
        <Container>
            <Column>
                <CreditItem credits={[partner]} title="Partner"/>
                <CreditItem credits={[year]} title="Jaar" />
            </Column>
            <Column>
                <CreditItem credits={designers} title="UX Design"/>
                <CreditItem credits={backend} title="Back-end developer"/>
                <CreditItem credits={frontend} title="Front-end developer"/>
            </Column>
            <Column>
                <CreditItem credits={special} title="Special Thanks"/>
                <CreditItemWithLinks credits={resources} links={resourceLinks} title="Resources"/>
            </Column>
        </Container>
    </CreditsContainer>

);

Credits.propTypes = {
    partner: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    designers: PropTypes.arrayOf(PropTypes.string).isRequired,
    backend: PropTypes.arrayOf(PropTypes.string).isRequired,
    frontend: PropTypes.arrayOf(PropTypes.string).isRequired,
    special: PropTypes.arrayOf(PropTypes.string).isRequired,
    resources: PropTypes.arrayOf(PropTypes.string).isRequired,
    resourceLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Credits;
