/* eslint-disable max-len */
import React from 'react';
import Layout from '../../layouts/CaseLayout';
import {
    TextAndImage,
    Introduction,
    Section,
} from '../../containers/ContentBlocks/ContentBlocks';
import Deliverables from '../../containers/Deliverables';
import { Subtitle } from '../../components/Typography';

const homePage = require('../../images/img/cases/cote-et-ciel/homepage.png');
const dashboard = require('../../images/img/cases/cote-et-ciel/dashboard.png');
const login = require('../../images/img/cases/cote-et-ciel/login.png');
const product = require('../../images/img/cases/cote-et-ciel/product.png');

const pageSettings = {
    client: 'côte&ciel',
    description:
        'Het opzetten van een nieuw platform via Shopify heeft gezorgd voor een hogere gebruiksvriendelijkheid en een stabielere website. Lees de specificaties hier!',
    image: homePage,
    title: 'Backpack webshop',
    keywords: 'côte&ciel, rugtassen, case, bytecode digital agency',
};

const Case: React.FC<Record<string, never>> = () => (
    <Layout pageSettings={pageSettings}>
        <TextAndImage padded img={login} alt="Woningcorporatie offerte">
            <h2>Prestaties en migraties</h2>
            <p>
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
        />
        <Section>
            <Introduction>
                <h2>De uitdaging</h2>
                <p>
                    Samen met The Pumphouse, een samenwerkingspartner van
                    Bytecode, hebben we een evaluatie opgesteld met de
                    verbeterpunten. Op basis hiervan hebben we een plan van
                    aanpak en een planning voor de komende maanden gemaakt.
                    Gedurende het proces hebben we evaluatiemomenten ingelast om
                    in te spelen op de nieuwste data.
                </p>
            </Introduction>
            <TextAndImage
                img={dashboard}
                reverse
                alt="Magento server dashboard"
            >
                <Subtitle>Research</Subtitle>
                <h3>Oplossing</h3>
                <p>
                    De veranderingen aan de achterkant van de webshop hebben
                    ervoor gezorgd dat het nu mogelijk is om veel sneller nieuwe
                    functionaliteiten te ontwikkelen en uit te rollen.
                </p>
            </TextAndImage>
            <TextAndImage fluid img={product} alt="Shopify product pagina">
                <Subtitle>Resultaten</Subtitle>
                <h2>Realiseren</h2>
                <p>
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
