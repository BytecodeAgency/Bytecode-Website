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

const usecase = require('../../images/img/cases/dawny/usecase.png');
const lockup = require('../../images/img/cases/dawny/lockup2.png');
const graph = require('../../images/img/cases/dawny/graphs.png');
const tools = require('../../images/img/cases/dawny/dashboard.png');
const team = require('../../images/img/cases/dawny/team.png');
const usecase2 = require('../../images/img/cases/dawny/usecase2.jpg');
const logo = require('../../images/img/cases/dawny/logo.svg');
const data = require('../../images/img/cases/dawny/data.png');

const pageSettings = {
    title: 'Levens redden met datavisualisatie',
    client: 'Reinier de Graaf Gasthuis',
    image: usecase,
    logo,
    clientBio:
        'Onderzoeker Dr. A.W. Siegel en internist Dr. D.H. Schweitzer zijn vanuit het Reinier de Graaf Gasthuis het Dawny intiatief gestart om onderzoek te doen naar het voorkomen van fatale vallen bij ouderen.',
    description:
        'Een samenwerking met het Reinier De Graaf Gasthuis naar een oplossing die kan leiden tot het voorkomen van een nachtelijke val en het vroegtijdig herkennen van risicofactoren. Lees hier alles over de Android App en de uitdaging!',
    keywords: 'ouderen, zorg, platform, webapp, onderzoek',
};

const Case = () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout pageSettings={pageSettings}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TextAndImage padded img={lockup} alt="Nonin apparaat met app">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <h2>Introducing: Dawny</h2>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <p className="introduction">
                Bytecode en het Reinier de Graaf Gasthuis slaan de handen ineen
                om een oplossing te vinden die kan leiden tot het voorkomen van
                een nachtelijke val en het vroegtijdig herkennen van
                risicofactoren.
            </p>
        </TextAndImage>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Deliverables
            deliverables={[
                'Technical Research',
                'Android App',
                'Overzichtelijk dashboard',
                'Bluetooth connectivity',
                'Fitbit connectie',
                'Apple Watch research',
            ]}
            img={usecase2}
            alt="grootouders die op de kleine passen"
            client="Reinier de Graaf Gasthuis"
            clientLogo={logo}
        />

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Section>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Introduction>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>De uitdaging</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="introduction">
                    Van de senioren (55 jaar en ouder) die een heup breken,
                    overlijdt bijna 25% binnen een jaar na het oplopen van de
                    heupfractuur
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <a href="http://dx.doi.org/10.1007/978-90-313-9265-0_8">
                        &nbsp;(Verhaar et al., 2013)&nbsp;
                    </a>
                    Met Dawny onderzoeken wij manieren om dit te voorkomen.
                </p>
            </Introduction>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TextAndImage img={graph} alt="Nonin apparaat met app" fluid>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="subtitle">Development</p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h3>Minder analyse, meer controle</h3>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="big">
                    Een Android app verzamelt de slaapdata (hartslag,
                    zuurstofwaarden, PAI en HRV) vanaf de Nonin WristOx2
                    wearable.
                </p>
            </TextAndImage>
        </Section>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Section>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TextAndImage
                img={tools}
                alt="Nonin apparaat met app"
                reverse
                fluid
            >
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="subtitle">Design</p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h3>Inzichtgevende tools</h3>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="big">
                    Het dashboard biedt inzicht in de nachtelijke slaapdata.
                    Correlaties tussen slaapdata en slaapstadia kunnen worden
                    onderzocht, herkend en vergeleken.
                </p>
            </TextAndImage>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TextAndImage img={data} alt="Nonin apparaat met app" fluid>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h3>Statistische analyse</h3>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="big">
                    Door middel van verschillende export functies kan data
                    gemakkelijk in SPSS worden ingeladen voor statistische
                    analyses.
                </p>
            </TextAndImage>
        </Section>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Section>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TextAndImage padded fluid img={team} alt="Nonin apparaat met app">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="subtitle">Resultaten</p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Altijd in ontwikkeling</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="big">
                    Er is een uitgebreide roadmap voor het project opgesteld.
                    Met verbeteringen in het garanderen van de privacy van
                    patiënten en extra datapunten gaan de onderzoekers van het
                    Reinier de Graaf ziekenhuis aan de slag om het ultieme doel
                    te bereiken; geen doden meer door heupbreuken.
                </p>
            </TextAndImage>
        </Section>
    </Layout>
);

export default Case;
