/* eslint-disable max-len */
import React from 'react';
import { Link } from 'gatsby';
import { Checklist, CheckListItem, CaseHeader } from '../../components/Case';
import Layout from '../../layouts/CaseLayout';
import { Container, Row, Col } from '../../lib/Grid';
import {
    TextAndImage,
    Introduction,
    Section,
} from '../../containers/ContentBlocks/ContentBlocks';
import Deliverables from '../../containers/Deliverables';

const websiteImg0 = require('../../images/img/cases/breda-actief/featured.svg');
const challange = require('../../images/img/cases/breda-actief/challange.svg');
const responsive = require('../../images/img/cases/breda-actief/responsive.svg');
const administration = require('../../images/img/cases/breda-actief/administration.svg');
const screens = require('../../images/img/cases/breda-actief/screens.png');
const websiteImg1 = require('../../images/img/cases/breda-actief/website-1.jpg');

const pageSettings = {
    title: 'Breng Breda in beweging',
    description:
        'Wij brachten mensen bij elkaar door vrijwilligerswerk vinden toegankelijker te maken',
    keywords: 'breda actief, mooiwerkbreda, case, bytecode digital agency',
    client: 'Breda Actief',
    image: websiteImg0,
};

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <Introduction>
            <p className="subtitle">Breda Actief</p>
            <h2>Breda in beweging</h2>
            <p>
                Stichting Breda Actief&#39;s missie is om alle inwoners van
                Breda de mogelijkheid te geven om te sporten en bewegen. Naar
                dit doel wordt gestreefd door middel van het aanbieden van onder
                andere sport- en beweegmomenten, het inzetten van sportcoaches,
                het aanbieden van advies en het helpen zoeken naar
                sportmogelijkheden voor mensen met een beperking.
            </p>
        </Introduction>
        <TextAndImage img={challange} alt="onderzoek" fluid>
            <p className="subtitle">Analyze</p>
            <h2>De uitdaging</h2>
            <p>
                Voor een maatschappelijk betrokken organisatie zoals stichting
                Breda Actief is webtoegankelijkheid erg belangrijk om haar doel
                te bereiken, want als je er voor wil zorgen dat écht{' '}
                <strong>iedereen</strong> aan het sporten komt moet je er ook
                voor zorgen dat dan ook <strong>iedereen</strong> de website kan
                bedienen. Met onderstaande problemen en wensen en het reeds
                uitgewerkte design zijn we aan de slag gegaan om voor Breda
                Actief het best mogelijke resulaat te behalen.
            </p>
        </TextAndImage>
        <TextAndImage img={responsive} alt="aandachtspunten" padded>
            <p className="subtitle">Analyze</p>
            <h2>De aandachtspunten</h2>
            <Checklist>
                <CheckListItem>
                    <a href="https://nl.wikipedia.org/wiki/Responsive_webdesign">
                        Responsive design
                    </a>
                </CheckListItem>
                <CheckListItem>
                    Voldoen aan de laatste webstandaarden
                </CheckListItem>
                <CheckListItem>
                    Volledig toegankelijk voor gebruikers met een beperking
                </CheckListItem>
                <CheckListItem>
                    Vrijheid om de content gemakkelijk aan te passen met
                    consistente huisstijl
                </CheckListItem>
            </Checklist>
        </TextAndImage>
        <Section>
        <TextAndImage img={administration} alt="proces" padded>
            <p className="subtitle">Strategize</p>
            <h2>Proces en techniek</h2>
            <ol>
                <li>
                    Design partner van Breda Actief Studio Maan heeft de website
                    ontworpen en bij ons aangeleverd in Sketch.
                </li>
                <li>
                    Aan de hand van dit design hebben wij, binnen een WordPress
                    maatwerkomgeving, de contentblokken en alle pagina’s
                    uitgewerkt. Op die manier hebben we ervoor gezorgd dat Breda
                    Actief in staat is om de website nu zelf met content te
                    vullen maar toch binnen de huisstijl te blijven.
                </li>
                <li>
                    De contentblokken zijn gemaakt met Advanced Custom Fields
                    Pro en de pagina’s zijn opgebouwd met de Blade templating
                    language binnen het Sage thema van roots.io. De CSS en
                    Javascript worden binnen Sage met NodeJS/Webpack gecompiled.
                </li>
            </ol>
            Deze technische tools stellen Breda Actief in staat om haar website
            geheel naar eigen wens in te richten.
        </TextAndImage>
        </Section>
        <Section>
        <TextAndImage img={screens} alt="functies" padded fluid>
            <Checklist>
                <CheckListItem>
                    Het platform met verschillende contentblokken ontwikkelen,
                    die gebruikt worden voor het opbouwen van de pagina’s
                </CheckListItem>
                <CheckListItem>
                    Door de contentblokken kan de content makkelijk beheerd
                    worden, zonder problemen voor de layout
                </CheckListItem>
                <CheckListItem>
                    De inhoud van de blokken wordt ingeladen in een maatwerk
                    Wordpress thema, zodat alle elementen goed toegankelijk
                    zijn, zelfs voor mensen met een screenreader of gebruikers
                    die geen muis kunnen bedienen
                </CheckListItem>
                <CheckListItem>
                    Een grote rol voor semantische HTML, iets wat pagebuilders
                    of templates vaak niet kunnen leveren
                </CheckListItem>
                <CheckListItem>
                    Voor het juridische deel van de website hebben we een
                    multisite opgezet, met als positieve consequentie dat de
                    styling van beide sites zonder dubbel werk aangepast kan
                    worden
                </CheckListItem>
            </Checklist>
        </TextAndImage>
        </Section>
        <Section>
            <TextAndImage padded img={websiteImg1} alt="resultaten">
                <p className="subtitle">Realize</p>
                <h2>Oplossing en Resultaten</h2>
                Om Breda Actief zo goed mogelijk te helpen bij het neerzetten van
                een succesvolle website, hebben we besloten het volgende als
                oplossing te bieden, om bij te dragen aan de online groei en de
                prachtige gestelde doelen. Het resultaat van dit project is te
                bekijken op breda-actief.nl. In overleg met Stichting Breda Actief
                is de broncode vrijgegeven onder GPL-3.0 licentie,
                <a href="https://git.bytecode.nl/breda-actief">&nbsp;hier&nbsp;</a>
                te bekijken.
            </TextAndImage>
        </Section>


    </Layout>
);

export default Case;
