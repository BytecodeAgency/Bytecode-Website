/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Layout from '../../layouts/MainLayout';

import { Container, Row, Col } from '../../lib/Grid';

import TextAndImage from '../../containers/ContentBlocks/ContentBlocks';
import theme from '../../styles/theme';
import { Big } from '../../components/Typography';

const pageSettings = {
    title: 'Styr',
    description: 'Functiewaardering in 2019',
    keywords: 'functiewaardering,online,platform,webapp',
};

const Checklist = styled.ul`
    margin: 2em 0;
`;

const CheckListItemBase = styled.li`
    display: flex;
    align-items: center;
    justify-items: left;
    margin: 1.33em 0;
    p {
        margin: 0;
    }
    img {
        width: 2rem;
        margin-right: 1.33em;
    }
`;

const CheckListItem = props => {
    const { children } = props;
    return (
        <CheckListItemBase>
            <img src={require('../../images/icons/ui/check.svg')} alt="- " />
            <p>
                <Big>{children}</Big>
            </p>
        </CheckListItemBase>
    );
};

CheckListItem.propTypes = {
    children: PropTypes.node.isRequired,
};

const testImg2 = require('../../images/img/cases/styr/website-2.png');

const CaseHeader = styled.header`
    background: url("${props => props.img}"), ${theme.colors.secondary};
    background-size: cover;
    height: 75vh;
    border-radius: 0.5em;
    margin-bottom: 3em;
`;

const temp = require('../../images/img/cases/styr/website-1.png');

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <CaseHeader img={testImg2} />
        </Container>
        <Container>
            <Row align="center">
                <Col offset={{ lg: 1 }} lg={5}>
                    <p className="subtitle">STYR</p>
                    <h1>Moderne functiewaardering</h1>
                </Col>
                <Col lg={5}>
                    <p>
                        <Big>
                            STYR is een consultancybedrijf dat zich
                            specialiseert in human resources met de missie om
                            loonschaalindelingen te moderniseren met behulp van
                            hun eigen STYR model. Met behulp van de STYR
                            allocator tool kunnen bedrijven effectiever
                            vacatures opstellen en werknemers waarderen en
                            indelen binnen zeventien verschillende niveaus. STYR
                            benaderde ons team voor de uitwerking van dit idee
                            tot een digitaal platform dat perfect aansluit op
                            haar klanten.
                        </Big>
                    </p>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <TextAndImage img={temp} alt="alt tag" fluid>
                <p className="subtitle">Ontdekking</p>
                <h2>Een high end shopbeleving</h2>
                <p>
                    <Big>
                        STYR’s’ doel is om de zwart/witte loonschalen van
                        vroeger aan de kant te schuiven voor een effectievere
                        oplossing die met veel meer criteria rekening houdt. Met
                        dit ideaal in gedachte hebben ze een beslisboom gemaakt
                        die de hiervoor genoemde verdeling van werknemers
                        mogelijk maakt. De vraag voor ons bestond voor de
                        uitwerking van de beslisboom naar een verkoopbaar
                        softwareproduct, de allocator, met de volgende functies:
                    </Big>
                </p>
                <Checklist>
                    <CheckListItem>
                        Mogelijk dat meerdere HR Medewerkers tegelijkertijd de
                        allocator gebruiken
                    </CheckListItem>
                    <CheckListItem>
                        Het model toegankelijker maken: gebruik zonder training
                        moet mogelijk zijn
                    </CheckListItem>
                    <CheckListItem>
                        Verschillende soorten gebruikers (beheerder,
                        administrator, professional) met verschillende rechten
                        voor het aanpassen van de beslisboom en content
                    </CheckListItem>
                    <CheckListItem>
                        Overzicht van bedrijven met hun gebruikers en allocaties
                    </CheckListItem>
                    <CheckListItem>
                        Verschillende stappen binnen de allocator tool, zoals
                        het invullen van de baan waarvoor de allocatie gedaan
                        wordt, en het kiezen van een ‘career path’ en kenmerken
                        die bij dit werk toepasbaar zijn
                    </CheckListItem>
                    <CheckListItem>
                        Allocatie-resultaat opslaan als PDF, activeren, als test
                        opslaan of verwijderen
                    </CheckListItem>
                    <CheckListItem>
                        Filteren van de gemaakte allocaties per bedrijf of op
                        status
                    </CheckListItem>
                    <CheckListItem>
                        Opzetten van een service desk voor vragen van gebruikers
                        inclusief een attachment-mogelijkheid en emailkoppeling
                    </CheckListItem>
                </Checklist>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={temp} alt="alt" reverse fluid>
                <p className="subtitle">Proces</p>
                <h2>Proces en technische details</h2>
                <p>
                    <Big>
                        Na een aantal productieve meetings zijn we begonnen met
                        een eerste UX/UI design voor het allocator platform.
                        Extra features die op basis van deze wireframes nog
                        gewenst waren zijn ook toegevoegd.
                    </Big>
                </p>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={temp} fluid>
                <h2>In Invision zijn prototypes gemaakt van het platform</h2>
                <p>
                    <Big>
                        In Invision zijn prototypes gemaakt van het platform
                    </Big>
                </p>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={temp} alt="alt" reverse fluid>
                <h2>
                    Het uiteindelijke design is zo goed als af, en kleine
                    puntjes feedback worden nog verwerkt. De allocator tool is
                    klaar om door bedrijven in gebruik genomen te worden.
                </h2>
                <p>
                    <Big>
                        De frontend van de allocator is gemaakt in React, en
                        voor de content van de beslisboom is een maatwerk
                        oplossing gemaakt in WordPress.
                    </Big>
                </p>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={temp}>
                <h2>Oplossing</h2>
                <p>
                    <Big>
                        Het design van de allocator is opgebouwd uit
                        opeenvolgende pagina’s die de gebruiker doorloopt,
                        waarbij keuzes gemaakt worden door op opties te klikken
                        die bij een werknemerprofiel passen.
                    </Big>
                </p>
                <Checklist>
                    <CheckListItem>
                        Een dashboard met recente allocaties en updates
                    </CheckListItem>
                    <CheckListItem>
                        Een overzicht van bedrijven voor STYR gebruikers, met
                        per bedrijf de allocator tool, resultaten en een
                        beheeroptie
                    </CheckListItem>
                    <CheckListItem>
                        Een pagina met een overzicht van het STYR model
                    </CheckListItem>
                    <CheckListItem>
                        Een STYR servicedesk waar een supportticket kan worden
                        aangemaakt
                    </CheckListItem>
                </Checklist>
            </TextAndImage>
        </Container>
    </Layout>
);

export default Case;
