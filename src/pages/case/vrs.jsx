/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { Checklist, CheckListItem, CaseHeader } from '../../components/Case';
import Layout from '../../layouts/CaseLayout';
import { Container, Row, Col } from '../../lib/Grid';
import {
    TextAndImage,
    Gallery,
    Introduction,
    Section,
} from '../../containers/ContentBlocks/ContentBlocks';
import { Big } from '../../components/Typography';
import Header from '../../containers/Header';
import Credits from '../../containers/Credits';
import Deliverables from '../../containers/Deliverables';

const cover = require('../../images/img/cases/vrs/cover.svg');
const app = require('../../images/img/cases/vrs/app.svg');
const phones = require('../../images/img/cases/vrs/Phones.svg');
const code = require('../../images/img/cases/vrs/code.svg');
const logo = require('../../images/img/cases/vrs/logo.svg');
const highway = require('../../images/img/cases/vrs/highway.jpg');

const pageSettings = {
    title: 'Hulpverlening op de weg',
    client: 'Van Eijck International Car Rescue',
    image: cover,
    description:
        'Bytecode werkt samen met het Reiner De Graaf Gasthuis aan valpreventie voor ouderen.',
    keywords: 'ouderen, zorg, platform, webapp, onderzoek',
};

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <TextAndImage padded img={app} alt="Nonin apparaat met app">
            <h2>Introducing VRS</h2>
            <p className="introduction">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
        </TextAndImage>

        <Deliverables
            deliverables={['Graphic Design', 'SEO', 'Strategy', 'UX/UI-Design']}
            alt="grootouders die op de kleine passen"
            client={pageSettings.client}
            clientLogo={logo}
            img={highway}
            clientBio="Van Eijck is gespecialiseerd in auto- en vrachtwagentransport, berging van auto’s en vrachtwagens, hulpverlening en vervangend vervoer."
        />
        <Section>
            <Introduction>
                <h2>De uitdaging</h2>
                <p className="introduction">
                    De takelwagens van Van Eijck worden vanuit een centrale
                    beheerd. Deze centrale stuurt tevens de bestuurders van de
                    takelwagens aan. Op de plaats van een ongeval moeten
                    bestuurders informatie vergaren en vastleggen voor de
                    verzekering. Voor dit project is bij een outsourcing-partij
                    een project ontwikkeld, maar nog niet alle gewenste
                    functionaliteiten waren geïmplementeerd. Van Eijck werkt nu
                    samen met Delta-N voor de backend van de centrale, met
                    behulp van Microsoft Azure software.
                </p>
            </Introduction>
            <TextAndImage img={code} reverse alt="Nonin apparaat met app">
                <p className="subtitle">Research</p>
                <h3>Oplossing</h3>
                <p>
                    We hebben de bestaande codebase bestudeerd, en voerden een
                    analyse uit om pijnpunten te achterhalen. Deze punten pakken
                    we in meerdere ‘sprints’ aan. Een aantal bestaande features
                    zijn afgemaakt en kritieke bugs zijn opgelost. Zo zorgen we
                    voor betere doorontwikkeling en stabiliteit. Er zijn minder
                    administratieve handelingen nodig, zodat de focus meer kan
                    liggen op het plannen en coördineren. Tot slot hebben we
                    nice-to-have features toegevoegd.
                </p>
            </TextAndImage>
            <TextAndImage fluid img={phones} alt="Nonin apparaat met app">
                <p className="subtitle">Resultaten</p>
                <h2>Realiseren</h2>
                <p className="introduction">
                    Door onze analyse van de codebase is de kwaliteit
                    significant verbeterd. Binnenkort gaat de nieuwe mobiele app
                    live. We blijven doorontwikkelen aan het platform.
                </p>
            </TextAndImage>
        </Section>
    </Layout>
);

export default Case;
