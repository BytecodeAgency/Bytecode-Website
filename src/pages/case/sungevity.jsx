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
const cloud = require('../../images/img/cases/sungevity/cloud.png');
const header = require('../../images/img/cases/sungevity/header.jpg');
const houses = require('../../images/img/cases/sungevity/houses.jpg');
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
        <Section>
        <TextAndImage
            padded
            img={woco}
            alt="Woning Corporatie offerte platform"
        >
            <h2>Woning Corporatie offerte platform</h2>
            <p className="introduction">
                Het sungevity woningcorporatie platform is een plek waar
                huurders zich kunnen inschrijven voor het Sungevity zonnepanelen
                programma. Helaas was deze tool niet stabiel genoeg en er was
                veel downtime. Door het gebruik van cloudservers heeft Bytecode
                de stabliteit van het platform weten te verbeteren en nieuwe
                features toegevoegd.
            </p>
        </TextAndImage>
        </Section>


        <Deliverables
            deliverables={[
                'Webapp',
                'Cloud servers',
                'Beheeromgeving',
                'Doorontwikkeling',
            ]}
            alt="offerte acceptatie pagina"
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
                    Door een gedeelte van de tool te herschrijven, en een
                    stabiele digitale omgeving te creeeren door het gebruik van
                    verschillende cloud servers is de stabiliteit van het
                    platform toegenomen en konden er hierna gemakkelijk nieuwe
                    features aan worden toegevoegd.
                </p>
            </Introduction>
            <TextAndImage img={cloud} reverse alt="Uptime prestaties">
                <p className="subtitle">prestaties</p>
                <h3>Cloud Servers</h3>
                <p>
                    Het opzetten van cloud servers zorgde voor betere prestaties
                    en het sneller kunnen toevoegen van nieuwe
                    woningcorporaties.
                </p>
            </TextAndImage>
            <TextAndImage img={houses} alt="Huurders">
                <p className="subtitle">prestaties</p>
                <h3>Aanpasbaarheid</h3>
                <p>
                    Door het toevoegen van nieuwe huuradressen toegankelijk te
                    maken voor werknemers van Sungevity wordt het platform vaker
                    en gemakkelijker gebruikt.
                </p>
            </TextAndImage>
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
