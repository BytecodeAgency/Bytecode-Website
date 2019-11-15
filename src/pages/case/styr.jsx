/* eslint-disable max-len */
import React from 'react';
import { Checklist, CheckListItem, CaseHeader } from '../../components/Case';
import Layout from '../../layouts/MainLayout';
import { Container, Row, Col } from '../../lib/Grid';
import TextAndImage from '../../containers/ContentBlocks/ContentBlocks';
import { Big } from '../../components/Typography';

const pageSettings = {
    title: 'Styr',
    description: 'Moderne functiewaardering',
    keywords: 'functiewaardering,online,platform,webapp',
};

const designImg1 = require('../../images/img/cases/styr/design-1.png');
const designImg2 = require('../../images/img/cases/styr/design-2.png');
const websiteImg1 = require('../../images/img/cases/styr/website-1.png');
const websiteImg2 = require('../../images/img/cases/styr/website-2.png');
const websiteImg3 = require('../../images/img/cases/styr/website-3.png');

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <CaseHeader img={websiteImg3} />
        </Container>
        <Container>
            <Row align="center">
                <Col offset={{ lg: 1 }} lg={5}>
                    <p className="subtitle">STYR</p>
                    <h1>Moderne functiewaardering</h1>
                </Col>
                <Col lg={5}>
                        <Big>
                            Een HR consultancybedrijf met een missie:
                            loonschaalindelingen moderniseren met behulp van het
                            STYR model.
                        </Big>
                    <p>
                        Door middel van de STYR allocator tool kunnen bedrijven
                        effectiever vacatures opstellen en werknemers waarderen
                        en indelen binnen zeventien verschillende niveaus. STYR
                        benaderde ons team voor de uitwerking van dit idee tot
                        een digitaal platform dat perfect aansluit op haar
                        klanten.
                    </p>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <TextAndImage img={websiteImg1} alt="alt tag" fluid>
                <p className="subtitle">Analyze</p>
                <h2>De uitdaging</h2>
                    <Big>
                        STYR’s doel is om de zwart/witte loonschalen van vroeger
                        aan de kant te schuiven voor een effectievere oplossing
                        die met veel meer criteria rekening houdt.
                    </Big>
                <p>
                    Met dit ideaal in gedachte hebben ze een beslisboom gemaakt
                    die de hiervoor genoemde verdeling van werknemers mogelijk
                    maakt. De vraag voor ons bestond voor de uitwerking van de
                    beslisboom naar een verkoopbaarder en schaalbaarder
                    softwareproduct.
                </p>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={designImg1} alt="alt tag" fluid reverse>
                <p className="subtitle">Analyze</p>
                <h2>De functionaliteiten</h2>
                <Checklist>
                    <CheckListItem>
                        Het STYR Model toegankelijker maken. Zelfs zonder
                        training te gebruiken
                    </CheckListItem>
                    <CheckListItem>
                        Verschillende gebruikersrollen (beheerder,
                        administrator, professional) met verschillende rechten
                        voor het aanpassen van de beslisboom en content
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
                        Filteren van de gemaakte allocaties
                    </CheckListItem>
                    <CheckListItem>
                        Opzetten van een service desk voor vragen van gebruikers
                        inclusief een attachment-mogelijkheid en emailkoppeling
                    </CheckListItem>
                </Checklist>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={designImg2} alt="alt" fluid>
                <p className="subtitle">Strategize</p>
                <h2>Proces en technische details</h2>
                    <Big>
                        Na een kickoff-meeting zijn we begonnen met een eerste
                        UX design en wireframe voor het allocator platform.
                        Extra features die op basis van deze wireframes nog
                        gewenst waren zijn toegevoegd.
                    </Big>
                    <Big>
                        De frontend van de allocator is gemaakt in React, en
                        voor de content van de beslisboom is een maatwerk
                        oplossing gemaakt binnen WordPress.
                    </Big>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={websiteImg2} reverse fluid>
                <p className="subtitle">Realize</p>
                <h2>Oplossing</h2>
                    <Big>
                        Het design van de allocator is opgebouwd uit
                        opeenvolgende pagina’s die de gebruiker doorloopt,
                        waarbij keuzes gemaakt worden door op opties te klikken
                        die bij een werknemerprofiel passen.
                    </Big>
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
