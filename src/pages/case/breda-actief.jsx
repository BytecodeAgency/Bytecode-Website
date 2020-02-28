/* eslint-disable max-len */
import React from 'react';
import Layout from '../../layouts/CaseLayout';
import {
    TextAndImage,
    Introduction,
    Section,
} from '../../containers/ContentBlocks/ContentBlocks';
import Deliverables from '../../containers/Deliverables';

const logo = require('../../images/img/cases/breda-actief/logo.jpg');
const featured = require('../../images/img/cases/breda-actief/featured.svg');
const challange = require('../../images/img/cases/breda-actief/challange.svg');
const responsive = require('../../images/img/cases/breda-actief/responsive.svg');
const administration = require('../../images/img/cases/breda-actief/administration.svg');
const screens = require('../../images/img/cases/breda-actief/screens.png');

const pageSettings = {
    title: 'Breng Breda in beweging',
    client: 'Breda Actief',
    description:
        'Wij brachten mensen bij elkaar door vrijwilligerswerk vinden toegankelijker te maken',
    image: featured,
    keywords: 'breda actief, mooiwerkbreda, case, bytecode digital agency',
};

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <TextAndImage padded img={responsive} alt="Woning Corporatie offerte">
            <h2>Woning Corporatie offerte</h2>
            <p className="introduction">
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

        <Deliverables
            deliverables={['Server management', 'Doorontwikkeling']}
            alt="breda-actief website"
            client={pageSettings.client}
            clientLogo={logo}
            img={challange}
            clientBio="Stichting Breda Actief&#39;s missie is om alle inwoners van
                Breda de mogelijkheid te geven om te sporten en bewegen. Naar
                dit doel wordt gestreefd door middel van het aanbieden van onder
                andere sport- en beweegmomenten, het inzetten van sportcoaches,
                het aanbieden van advies en het helpen zoeken naar
                sportmogelijkheden voor mensen met een beperking."
        />
        <Section>
            <Introduction>
                <h2>De uitdaging</h2>
                <p className="introduction">Lorem ipsum</p>
            </Introduction>
            <TextAndImage img={administration} reverse alt="Uptime prestaties">
                <p className="subtitle">prestaties</p>
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum</p>
            </TextAndImage>
            <TextAndImage fluid img={screens} alt="Nonin apparaat met app">
                <p className="subtitle">Resultaten</p>
                <h2>Realiseren</h2>
                <p className="introduction">
                    Om Breda Actief zo goed mogelijk te helpen bij het
                    neerzetten van een succesvolle website, hebben we besloten
                    het volgende als oplossing te bieden, om bij te dragen aan
                    de online groei en de prachtige gestelde doelen. Het
                    resultaat van dit project is te bekijken op breda-actief.nl.
                    In overleg met Stichting Breda Actief is de broncode
                    vrijgegeven onder GPL-3.0 licentie,
                    <a href="https://git.bytecode.nl/breda-actief">
                        &nbsp;hier&nbsp;
                    </a>
                    te bekijken.
                </p>
            </TextAndImage>
        </Section>
    </Layout>
);

export default Case;
