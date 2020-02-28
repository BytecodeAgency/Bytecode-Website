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
    description: 'Wij brachten Breda bij elkaar door sporten in Breda toegankelijker te maken',
    image: featured,
    keywords: 'breda actief, mooiwerkbreda, case, bytecode digital agency',
};

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <TextAndImage padded img={responsive} alt="Responsive website van Breda Actief">
            <h2>Responsive website</h2>
            <p className="introduction">
                Voor een maatschappelijk betrokken organisatie zoals stichting
                Breda Actief is webtoegankelijkheid erg belangrijk om haar doel
                te bereiken, want als je er voor wil zorgen dat écht{' '}
                <strong>iedereen</strong> aan het sporten komt moet je er ook
                voor zorgen dat dan ook <strong>iedereen</strong> de website kan
                bedienen.
            </p>
        </TextAndImage>
        <Deliverables
            deliverables={['Online Strategie', 'Responsive Website', 'Maatwerk CMS', 'Cloud servers', 'Doorontwikkeling']}
            alt="breda-actief website"
            client={pageSettings.client}
            clientLogo={logo}
            img={challange}
            clientBio="Stichting Breda Actief&#39;s missie is om alle inwoners van
                Breda de mogelijkheid te geven om te sporten en bewegen."
        />
        <Section>
            <Introduction>
                <h2>De uitdaging</h2>
                <p className="introduction">
                    Breda Actief is een grote organisatie, en meerdere mensen binnen de organisatie willen de content op de website kunnen aanpassen. Toch is het belangrijk dat de website een consistente huissttijl heeft, toegankelijk is en goede prestaties levert.
                </p>
            </Introduction>
            <TextAndImage img={administration} reverse alt="Uptime prestaties">
                <p className="subtitle">prestaties</p>
                <h3>Toegankelijkheid</h3>
                <p>
                    De website is volledig toegankelijk voor mensen met een beperking,
                    zodat iedereen gebruik kan maken van Breda Actief.
                </p>
            </TextAndImage>
            <TextAndImage img={administration} alt="Uptime prestaties">
                <p className="subtitle">prestaties</p>
                <h3>Consistente huisstijl</h3>
                <p>
                    De website is volledig toegankelijk voor mensen met een beperking,
                    zodat iedereen gebruik kan maken van Breda Actief.
                </p>
            </TextAndImage>
            <TextAndImage fluid img={screens} alt="Meerdere schermen van de website">
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
