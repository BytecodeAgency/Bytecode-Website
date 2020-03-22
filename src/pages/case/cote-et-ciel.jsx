/* eslint-disable max-len */
import React from 'react';
import Layout from '../../layouts/CaseLayout';
import {
    TextAndImage,
    Introduction,
    Section,
} from '../../containers/ContentBlocks/ContentBlocks';
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
        'Bytecode hielp côte&ciel met de stabiliteit van haar webshop.',
    image: homePage,
    title: 'Backpack webshop',
    keywords: 'côte&ciel, rugtassen, case, bytecode digital agency',
};

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <TextAndImage padded img={login} alt="Woningcorporatie offerte">
            <h2>Prestaties en migraties</h2>
            <p className="introduction">
                De bestaande webshop van côte&ciel voldeed niet meer aan de
                wensen. Er bestonden technische mankementen en problemen bij het
                uitrollen van nieuwe versies. Daarnaast moest de
                gebruiksvriendelijkheid onder handen genomen worden,
                bijvoorbeeld door het toevoegen van nieuwe betaalmethodes. Wij
                ondersteunden côte&ciel bij het opzetten van haar nieuwe
                platform op Shopify, het oplossen van kritieke problem op haar
                huidige Magento webshop en verzorgden zowel datamigratie als
                launch engineering.
            </p>
        </TextAndImage>

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
        <Section>
            <Introduction>
                <h2>De uitdaging</h2>
                <p className="introduction">
                    Samen met The Pumphouse, een samenwerkingspartner van
                    Bytecode, hebben we een assessment opgesteld met de
                    verbeterpunten. Op basis hiervan hebben we een plan van
                    aanpak gemaakt en een planning voor de komende maanden.
                    Gedurende het proces hebben we evaluatiemomenten ingelast om
                    in te spelen op de nieuwste data.
                </p>
            </Introduction>
            <TextAndImage
                img={dashboard}
                reverse
                alt="Magento server dashboard"
            >
                <p className="subtitle">Research</p>
                <h3>Oplossing</h3>
                <p>
                    De veranderingen aan de achterkant van de webshop hebben
                    ervoor gezorgd dat het nu mogelijk is om veel sneller nieuwe
                    functionaliteiten te ontwikkelen en uit te rollen.
                </p>
            </TextAndImage>
            <TextAndImage fluid img={product} alt="Shopify product pagina">
                <p className="subtitle">Resultaten</p>
                <h2>Realiseren</h2>
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
