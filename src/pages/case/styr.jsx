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

const testImg2 = require('../../images/img/cases/styr/website-2.png');
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
                <p className="subtitle">Analyze</p>
                <h2>De uitdaging</h2>
                <p>
                    <Big>
                        STYR’s doel is om de zwart/witte loonschalen van vroeger
                        aan de kant te schuiven voor een effectievere oplossing
                        die met veel meer criteria rekening houdt. Met dit
                        ideaal in gedachte hebben ze een beslisboom gemaakt die
                        de hiervoor genoemde verdeling van werknemers mogelijk
                        maakt. De vraag voor ons bestond voor de uitwerking van
                        de beslisboom naar een verkoopbaarder en schaalbaarder
                        softwareproduct.
                    </Big>
                </p>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={temp} alt="alt tag" fluid reverse>
                <p className="subtitle">Analyze</p>
                <h2>De functionaliteiten</h2>
                <Checklist>
                    <CheckListItem>
                        Het STYR Model toegankelijker maken. Zelfs zonder
                        training te gebruiken.
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
            <TextAndImage img={temp} alt="alt" fluid>
                <p className="subtitle">Strategize</p>
                <h2>Proces en technische details</h2>
                <p>
                    <Big>
                        Na een aantal productieve meetings zijn we begonnen met
                        een eerste UX/UI design voor het allocator platform.
                        Extra features die op basis van deze wireframes nog
                        gewenst waren zijn ook toegevoegd.
                    </Big>
                    <Big>
                        De frontend van de allocator is gemaakt in React, en
                        voor de content van de beslisboom is een maatwerk
                        oplossing gemaakt binnen WordPress.
                    </Big>
                </p>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={temp} reverse fluid>
                <p className="subtitle">Realize</p>
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
