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
const houses = require('../../images/img/cases/sungevity/houses.jpg');
const offerte = require('../../images/img/cases/sungevity/result.png');
const woco = require('../../images/img/cases/sungevity/startscreen.png');
const uptime = require('../../images/img/cases/sungevity/results.png');
const servers = require('../../images/img/cases/sungevity/servers.jpg');

const pageSettings = {
    client: 'Sungevity',
    description:
        'Bytecode werkt samen met Sungevity aan het verduurzamen van Nederland.',
    image: header,
    title: 'Duurzame digitale omgeving',
    logo,
    keywords:
        'verduurzaming, energie, transitie, offerte, tool, digitaal, onderzoek',
    clientBio:
        "Sungevity is een bedrijf gespecialiseerd in het ontwerpen en installeren van zonnepanelen. Sungevity's missie is om groene energie op te wekken op alle daken die daarvoor geschikt zijn.",
};

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <TextAndImage padded img={woco} alt="Woningcorporatie offerteplatform">
            <h2>Woningcorporatie offerteplatform</h2>
            <p className="introduction">
                Het Sungevity woningcorporatie platform is een plek waar
                huurders zich kunnen inschrijven voor het Sungevity
                zonnepanelenprogramma. Helaas was deze tool niet stabiel genoeg
                en was er veel downtime. Door het gebruik van cloudservers heeft
                Bytecode de stabiliteit van het platform weten te verbeteren.
                Daarnaast zijn veel nieuwe features toegevoegd.
            </p>
        </TextAndImage>

        <Deliverables
            deliverables={[
                'Webapp',
                'Cloudservers',
                'Beheeromgeving',
                'Doorontwikkeling',
            ]}
            alt="offerte acceptatie pagina"
            clientLogo={logo}
            img={houses}
        />
        <Section>
            <Introduction>
                <h2>De uitdaging</h2>
                <p className="introduction">
                    Door een gedeelte van de tool te herschrijven en een stabile
                    digitale omgeving te creëren, door het gebruik van
                    verschillende cloudservers, is de stabiliteit van het
                    platform toegenomen en konden hierna gemakkelijk nieuwe
                    features aan worden toegevoegd.
                </p>
            </Introduction>
            <Section>
                <TextAndImage img={servers} reverse alt="Uptime prestaties">
                    <p className="subtitle">prestaties</p>
                    <h3>Cloudservers</h3>
                    <p>
                        Het opzetten van cloudservers zorgde voor betere
                        prestaties en het sneller kunnen toevoegen van nieuwe
                        woningcorporaties.
                    </p>
                </TextAndImage>
            </Section>
            <Section>
                <TextAndImage img={houses} alt="Huurders">
                    <p className="subtitle">prestaties</p>
                    <h3>Aanpasbaarheid</h3>
                    <p>
                        Door de verbeterde toegankelijkheid van het platform
                        voor werknemers kunnen zij gemakkelijk en vaker nieuwe
                        huuradressen toevoegen.
                    </p>
                </TextAndImage>
                <TextAndImage
                    padded
                    img={uptime}
                    reverse
                    alt="Uptime prestaties"
                >
                    <h3>99.9%+ uptime</h3>
                    <p>
                        Om het platform te optimaliseren voor meerdere
                        woningcorporaties hebben we in de Python Flask
                        applicatie verbeteringen doorgevoerd aan de offertetool.
                        Daarnaast hebben we gezorgd voor schaalbare cloudhosting
                        en Nginx routing- en serveroptimalisaties. Op het
                        platform kunnen woningcorporaties nu zelf aanpassingen
                        doorvoeren en is het gemakkelijk om een nieuwe
                        corporatie op te zetten in enkele uren.
                    </p>
                </TextAndImage>
            </Section>
            <TextAndImage img={offerte} alt="offerte pagina">
                <p className="subtitle">Resultaten</p>
                <h2>Realiseren</h2>
                <p className="introduction">
                    Inmiddels zijn er al acht woningcorporaties opgezet. Mocht
                    een van de websites downtime ondervinden, dan krijgen onze
                    site reliability engineers hier een melding van, zodat er
                    direct gehandeld kan worden.
                </p>
            </TextAndImage>
        </Section>
    </Layout>
);

export default Case;
