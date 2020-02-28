/* eslint-disable max-len */
import React from 'react';
import Layout from '../../layouts/CaseLayout';
import {
    TextAndImage,
    Introduction,
    Section,
} from '../../containers/ContentBlocks/ContentBlocks';
import Deliverables from '../../containers/Deliverables';

const homePage = require('../../images/img/cases/cote-et-ciel/homepage.png');
const dashboardImg = require('../../images/img/cases/cote-et-ciel/dashboard.png');
const loginImg = require('../../images/img/cases/cote-et-ciel/login.png');
const productImg = require('../../images/img/cases/cote-et-ciel/product.png');
const countryImg = require('../../images/img/cases/cote-et-ciel/country.png');

const pageSettings = {
    client: 'côte&ciel',
    description:
        'Bytecode hielp côte&ciel met de stabiliteit van haar webshop.',
    image: homePage,
    title: 'côte&ciel',
    keywords: 'côte&ciel, rugtassen, case, bytecode digital agency',
};

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <TextAndImage padded img={dashboardImg} alt="Woning Corporatie offerte">
            <h2>De uitdaging</h2>
            <p className="introduction">
                De bestaande webshop van côte&ciel voldeed niet meer aan de
                wensen. Er bestonden technische mankementen en problemen bij het
                uitrollen van nieuwe versies. Daarnaast moest de
                gebruiksvriendelijkheid onder handen genomen worden,
                bijvoorbeeld door het toevoegen van nieuwe betaalmethodes. Wij
                ondersteunden côte&ciel bij het opzetten van haar nieuwe
                platform op Shopify, oplossen van kritieke problem op haar
                huidige Magento webshop en verzorgden zowel datamigratie als
                launch engineering.
            </p>
        </TextAndImage>

        <Deliverables
            deliverables={['Graphic Design', 'SEO', 'Strategy', 'UX/UI-Design']}
            alt="grootouders die op de kleine passen"
            client={pageSettings.client}
            clientLogo={countryImg}
            img={countryImg}
            clientBio="
                        côte&ciel is gespecialiseerd in het ontwerpen en maken
                        van designerrugtassen die verkocht worden via hun eigen
                        webshop, maar ook via externe kanalen zoals bijvoorbeeld
                        Amazon. Met hun tassen brengen ze de wereld van mode en
                        industrieel ontwerp samen, wat leidt tot stijlvolle
                        oplossingen en designs. côte&ciel heeft warenhuizen in
                        Azië, Europa en Noord-Amerika."
        />
        <Section>
            <Introduction>
                <h2>De uitdaging</h2>
                <p className="introduction">
                    Samen met The Pumphouse, een samenwerkingspartner van
                    Bytecode, hebben we een assessment opgesteld met de
                    verbeterpunten. Op basis hiervan hebben we een plan van
                    aanpak gemaakt en een planning voor de komende maanden.
                    Tussendoor hebben we vanzelfsprekend genoeg evaluatie- en
                    feedbackmomenten ingelast.
                </p>
            </Introduction>
            <TextAndImage img={loginImg} reverse alt="Nonin apparaat met app">
                <p className="subtitle">Research</p>
                <h3>Oplossing</h3>
                <p>
                    De veranderingen aan de achterkant van de webshop hebben
                    ervoor gezorgd dat het nu mogelijk is om veel sneller nieuwe
                    functionaliteiten te ontwikkelen en uit te rollen.
                </p>
            </TextAndImage>
            <TextAndImage fluid img={productImg} alt="Nonin apparaat met app">
                <p className="subtitle">Resultaten</p>
                <h2>Realiseren</h2>
                <p className="introduction">
                    Het côte&ciel project is inmiddels door ons overgezet naar
                    Shopify voor een stabielere omgeving en snellere frontend
                    ontwikkeling. Hierbij hebben wij zowel de launch engineering
                    als data migratie verzorgd.
                </p>
            </TextAndImage>
        </Section>
    </Layout>
);

export default Case;
