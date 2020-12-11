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

const logo = require('../../images/img/cases/breda-actief/logo.png');
const featured = require('../../images/img/cases/breda-actief/featured.svg');
const challange = require('../../images/img/cases/breda-actief/challange.svg');
const responsive = require('../../images/img/cases/breda-actief/responsive.svg');
const administration = require('../../images/img/cases/breda-actief/administration.svg');
const wieiswie = require('../../images/img/cases/breda-actief/wie-is-wie.png');
const screens = require('../../images/img/cases/breda-actief/screens.png');

const pageSettings = {
    title: 'Brengt Breda in beweging',
    client: 'Breda Actief',
    description:
        'Door het ontwikkelen van een platform op maat brachten wij de organisaties en vrijwilligers van Breda dichter bij elkaar. Zo maakten wij vrijwilligerswerk toegankelijker. Bekijk hier het resultaat!',
    image: featured,
    keywords: 'breda actief, mooiwerk breda, bytecode',
};

const Case = () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout pageSettings={pageSettings}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TextAndImage
            padded
            img={responsive}
            alt="Responsive website van Breda Actief"
        >
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <h2>Responsive website</h2>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <p className="introduction">
                Voor een maatschappelijk betrokken organisatie zoals stichting
                Breda Actief is webtoegankelijkheid erg belangrijk om haar doel
                te bereiken, want als je er voor wil zorgen dat écht{' '}
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <strong>iedereen</strong> aan het sporten komt moet je er ook
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                voor zorgen dat dan ook <strong>iedereen</strong> de website kan
                bedienen.
            </p>
        </TextAndImage>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Deliverables
            deliverables={[
                'Online Strategie',
                'Responsive Website',
                'Maatwerk CMS',
                'Cloudservers',
                'Doorontwikkeling',
            ]}
            alt="breda-actief website"
            client={pageSettings.client}
            clientLogo={logo}
            img={challange}
            clientBio="Stichting Breda Actief&#39;s missie is om alle inwoners van
                Breda de mogelijkheid te geven om te sporten en bewegen."
        />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Section>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Introduction>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>De uitdaging</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="introduction">
                    Breda Actief is een grote organisatie, en meerdere mensen
                    binnen de organisatie willen de content op de website kunnen
                    aanpassen. Toch is het belangrijk dat de website een
                    consistente huisstijl heeft, toegankelijk is en goede
                    prestaties levert.
                </p>
            </Introduction>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TextAndImage img={wieiswie} reverse alt="Uptime prestaties">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="subtitle">prestaties</p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h3>Toegankelijkheid</h3>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    De website is volledig toegankelijk voor mensen met een
                    beperking, zodat iedereen gebruik kan maken van Breda
                    Actief. Dit betekent dat de website onder andere kan worden
                    gebruikt door het gebruik van screenreaders voor blinden en
                    slechtzienden en volledig genavigeerd kan worden met gebruik
                    van het toetsenbord voor mensen die geen muis kunnen
                    bedienen.
                </p>
            </TextAndImage>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TextAndImage img={administration} alt="Uptime prestaties">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="subtitle">prestaties</p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h3>Consistente huisstijl</h3>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    Door het gebruik van maatwerk velden in het CMS zorgen we
                    voor een consistente huisstijl en blijft het invoeren van
                    content gemakkelijk.
                </p>
            </TextAndImage>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TextAndImage
                fluid
                img={screens}
                alt="Meerdere schermen van de website"
            >
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="subtitle">Resultaten</p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Realiseren</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="introduction">
                    Om Breda Actief zo goed mogelijk te helpen bij het
                    neerzetten van een succesvolle website, hebben we besloten
                    het volgende als oplossing te bieden, om bij te dragen aan
                    de online groei en de prachtige gestelde doelen. Het
                    resultaat van dit project is te bekijken op breda-actief.nl.
                    In overleg met Stichting Breda Actief is de broncode
                    vrijgegeven onder GPL-3.0 licentie,
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
