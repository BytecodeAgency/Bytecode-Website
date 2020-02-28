/* eslint-disable max-len */
import React from 'react';
import Layout from '../../layouts/CaseLayout';
import {
    TextAndImage,
    Introduction,
    Section,
} from '../../containers/ContentBlocks/ContentBlocks';
import Deliverables from '../../containers/Deliverables';

const logo = require('../../images/img/cases/sungevity/logo.svg');
const header = require('../../images/img/cases/sungevity/header.jpg');
const offerte = require('../../images/img/cases/sungevity/offerte.png');
const offerteAccept = require('../../images/img/cases/sungevity/accept.png');
const woco = require('../../images/img/cases/sungevity/woco.png');
const uptime = require('../../images/img/cases/sungevity/uptime.png');

const pageSettings = {
    client: 'Sungevity',
    description:
        'Bytecode werkt samen met Sungevity aan het verduurzamen van Nederland.',
    image: header,
    title: 'Duurzame digitale omgeving',
    keywords:
        'verduurzaming, energie, tranistie, offerte, tool, digitaal, onderzoek',
};

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <TextAndImage padded img={woco} alt="Woning Corporatie offerte">
            <h2>Woning Corporatie offerte</h2>
            <p className="introduction">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </TextAndImage>

        <Deliverables
            deliverables={['Server management', 'Doorontwikkeling']}
            alt="offerte acceptatie pagina"
            client={pageSettings.client}
            clientLogo={logo}
            img={offerteAccept}
            clientBio="
                    Sungevity is een bedrijf gespecialiseerd in het ontwerpen en
                    installeren van zonnepanelen. Sungevity's missie is om groene energie op
                    te wekken op alle daken die daarvoor geschikt zijn."
        />
        <Section>
            <Introduction>
                <h2>De uitdaging</h2>
                <p className="introduction">
                    Sungevity had een basis voor een platform voor
                    woningcorporaties, maar dit was niet stabiel en er was veel
                    downtime. Daarnaast was er de wens om nog zeven
                    woningcorporaties toe te voegen, maar hier was het platform
                    niet op ingericht. De corporaties wilden hiernaast graag de
                    brieven die zij versturen een eigen look-en-feel kunnen
                    geven in samenwerking met Sungevity. Nadat deze brieven zijn
                    uitgestuurd komen de huurders op het platform om aan te
                    geven of zij akkoord gaan met de installatie van
                    zonnepanelen en hoeveel.
                </p>
            </Introduction>
            <TextAndImage img={uptime} reverse alt="Uptime prestaties">
                <p className="subtitle">prestaties</p>
                <h3>99.9%+ uptime</h3>
                <p>
                    Om het platform te optimaliseren voor meerdere woning
                    corporaties hebben we in de Python Flask applicatie
                    verbeteringen doorgevoerd aan de offertetool. Daarnaast
                    hebben we gezorgd voor schaalbare cloudhosting en Nginx
                    routing- en serveroptimalisaties. Op het platform kunnen
                    woningcorporaties nu zelf aanpassingen doorvoeren en is het
                    gemakkelijk om een nieuwe corporatie op te zetten in enkele
                    uren.
                </p>
            </TextAndImage>
            <TextAndImage fluid img={offerte} alt="offerte pagina">
                <p className="subtitle">Resultaten</p>
                <h2>Realiseren</h2>
                <p className="introduction">
                    Inmiddels zijn er al acht woningcorporaties opgezet. Mocht
                    een van de websites downtime ondervinden dan krijgen onze
                    site reliability engineers hier een melding van zodat er
                    direct gehandeld kan worden.
                </p>
            </TextAndImage>
        </Section>
    </Layout>
);

export default Case;
