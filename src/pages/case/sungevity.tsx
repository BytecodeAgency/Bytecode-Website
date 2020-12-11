/* eslint-disable max-len */
import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../layouts/CaseLayout' was resolved to ... Remove this comment to see the full error message
import Layout from '../../layouts/CaseLayout';
import {
    TextAndImage,
    Introduction,
    Section,
    // @ts-expect-error ts-migrate(6142) FIXME: Module '../../containers/ContentBlocks/ContentBloc... Remove this comment to see the full error message
} from '../../containers/ContentBlocks/ContentBlocks';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../containers/Deliverables' was resolve... Remove this comment to see the full error message
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
        'Door het gebruik van cloudservers is het platform van Sungevity een stabiele digitale omgeving. Daarnaast kunnen met gemak nieuwe features worden toegevoegd. Samen met Sungevity werken we aan het verduurzamen van Nederland!',
    image: header,
    title: 'Duurzame digitale omgeving',
    logo,
    keywords:
        'verduurzaming, energie, transitie, offerte, tool, digitaal, onderzoek',
    clientBio:
        "Sungevity is een bedrijf gespecialiseerd in het ontwerpen en installeren van zonnepanelen. Sungevity's missie is om groene energie op te wekken op alle daken die daarvoor geschikt zijn.",
};

const Case = () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout pageSettings={pageSettings}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TextAndImage padded img={woco} alt="Woningcorporatie offerteplatform">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <h2>Woningcorporatie offerteplatform</h2>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <p className="introduction">
                Het Sungevity woningcorporatie platform is een plek waar
                huurders zich kunnen inschrijven voor het Sungevity
                zonnepanelenprogramma. Helaas was deze tool niet stabiel genoeg
                en was er veel downtime. Door het gebruik van cloudservers heeft
                Bytecode de stabiliteit van het platform weten te verbeteren.
                Daarnaast zijn veel nieuwe features toegevoegd.
            </p>
        </TextAndImage>

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Section>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Introduction>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>De uitdaging</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="introduction">
                    Door een gedeelte van de tool te herschrijven en een stabile
                    digitale omgeving te creëren, door het gebruik van
                    verschillende cloudservers, is de stabiliteit van het
                    platform toegenomen en konden hierna gemakkelijk nieuwe
                    features aan worden toegevoegd.
                </p>
            </Introduction>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Section>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <TextAndImage img={servers} reverse alt="Uptime prestaties">
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <p className="subtitle">prestaties</p>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <h3>Cloudservers</h3>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <p>
                        Het opzetten van cloudservers zorgde voor betere
                        prestaties en het sneller kunnen toevoegen van nieuwe
                        woningcorporaties.
                    </p>
                </TextAndImage>
            </Section>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Section>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <TextAndImage img={houses} alt="Huurders">
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <p className="subtitle">prestaties</p>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <h3>Aanpasbaarheid</h3>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <p>
                        Door de verbeterde toegankelijkheid van het platform
                        voor werknemers kunnen zij gemakkelijk en vaker nieuwe
                        huuradressen toevoegen.
                    </p>
                </TextAndImage>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <TextAndImage
                    padded
                    img={uptime}
                    reverse
                    alt="Uptime prestaties"
                >
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <h3>99.9%+ uptime</h3>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TextAndImage img={offerte} alt="offerte pagina">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="subtitle">Resultaten</p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Realiseren</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
