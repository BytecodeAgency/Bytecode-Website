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

const logo = require('../../images/img/cases/cote-et-ciel/logo.png');
const homePage = require('../../images/img/cases/cote-et-ciel/homepage.png');
const dashboard = require('../../images/img/cases/cote-et-ciel/dashboard.png');
const login = require('../../images/img/cases/cote-et-ciel/login.png');
const product = require('../../images/img/cases/cote-et-ciel/product.png');
const country = require('../../images/img/cases/cote-et-ciel/country.png');

const pageSettings = {
    client: 'côte&ciel',
    description:
        'Het opzetten van een nieuw platform via Shopify heeft gezorgd voor een hogere gebruiksvriendelijkheid en een stabielere website. Lees de specificaties hier!',
    image: homePage,
    title: 'Backpack webshop',
    keywords: 'côte&ciel, rugtassen, case, bytecode digital agency',
};

const Case = () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout pageSettings={pageSettings}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TextAndImage padded img={login} alt="Woningcorporatie offerte">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <h2>Prestaties en migraties</h2>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <p className="introduction">
                De bestaande webshop van côte&ciel voldeed niet meer aan de
                wensen. Er bestonden technische mankementen en problemen bij het
                uitrollen van nieuwe versies. Daarnaast moest de
                gebruiksvriendelijkheid onder handen genomen worden,
                bijvoorbeeld door het toevoegen van nieuwe betaalmethodes. Wij
                ondersteunden côte&ciel bij het opzetten van haar nieuwe
                platform op Shopify, het oplossen van kritieke problemen op haar
                huidige Magento webshop en verzorgden zowel datamigratie als
                launch engineering.
            </p>
        </TextAndImage>

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Deliverables
            deliverables={[
                'Strategy',
                'SEO',
                'Magento Development',
                'Shopify Development',
                'Cloudservers',
                'Webshop migratie',
                'Conversie optimalisatie',
            ]}
            alt="cote et ciel country selectie"
            clientLogo={logo}
            img={country}
            clientBio="côte&ciel is gespecialiseerd in de ontwtikkeling van designerrugtassen. Met deze tassen brengen ze de wereld van mode en industrieel ontwerp samen."
        />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Section>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Introduction>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>De uitdaging</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="introduction">
                    Samen met The Pumphouse, een samenwerkingspartner van
                    Bytecode, hebben we een evaluatie opgesteld met de
                    verbeterpunten. Op basis hiervan hebben we een plan van
                    aanpak en een planning voor de komende maanden gemaakt.
                    Gedurende het proces hebben we evaluatiemomenten ingelast om
                    in te spelen op de nieuwste data.
                </p>
            </Introduction>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TextAndImage
                img={dashboard}
                reverse
                alt="Magento server dashboard"
            >
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="subtitle">Research</p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h3>Oplossing</h3>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    De veranderingen aan de achterkant van de webshop hebben
                    ervoor gezorgd dat het nu mogelijk is om veel sneller nieuwe
                    functionaliteiten te ontwikkelen en uit te rollen.
                </p>
            </TextAndImage>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TextAndImage fluid img={product} alt="Shopify product pagina">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="subtitle">Resultaten</p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Realiseren</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="introduction">
                    Het côte&ciel-project is inmiddels door ons overgezet naar
                    Shopify voor een stabielere omgeving en snellere
                    frontend-ontwikkeling. Hierbij hebben wij zowel de launch
                    engineering als datamigratie verzorgd.
                </p>
            </TextAndImage>
        </Section>
    </Layout>
);

export default Case;
