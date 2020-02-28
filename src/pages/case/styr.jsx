/* eslint-disable max-len */
import React from 'react';
import Layout from '../../layouts/CaseLayout';
import {
    TextAndImage,
    Introduction,
    Section,
} from '../../containers/ContentBlocks/ContentBlocks';
import Deliverables from '../../containers/Deliverables';

const logo = require('../../images/img/cases/styr/logo.png');
const login = require('../../images/img/cases/styr/login.png');
const serviceDesk = require('../../images/img/cases/styr/service-desk.png');
const model = require('../../images/img/cases/styr/model.png');
const invision = require('../../images/img/cases/styr/invision.png');

const pageSettings = {
    client: 'STYR',
    description:
        'De STYR Allocator tool is een praktische online waarderingstool waarmee de klanten van STYR zelf de zwaarte van rollen en functies kunnen vaststellen.',
    image: login,
    title: 'STYR',
    keywords: 'functiewaardering, online, platform, webapp',
};

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <TextAndImage padded img={serviceDesk} alt="Moderne functiewaardering">
            <h2>Moderne functiewaardering</h2>
            <p className="introduction">
                Door het STYR functiewaarderingsmodel te digitaliseren kan het
                werk van de STYR consultants geautomatiseerd worden. Zij kunnen
                hierdoor worden ingezet op hun echte expertise, en een meer
                adviserende rol innemen. De digitalisering van het model heeft
                een radicale impact, doordat de stappen van het model zijn
                gestandaardiseerd. Om dit voor elkaar te krijgen heeft bytecode
                advies geboden op strategisch niveau.
            </p>
        </TextAndImage>

        <Deliverables
            deliverables={[
                'Strategie',
                'UX Research',
                'UI Design',
                'Webapp Development',
            ]}
            alt="het STYR model"
            clientLogo={logo}
            img={model}
            clientBio="STYR is een specialistisch adviesbureau op het gebied van organisatiedesign, waarderen en belonen. STYR heeft het STYR model ontwikkeld, een moderne en vernieuwende manier van (functie)waardering."
        />
        <Section>
            <Introduction>
                <h2>De uitdaging</h2>
                <p className="introduction">
                    Ontwikkel een praktische online waarderingstool waarmee de
                    klanten van STYR zelf de zwaarte van rollen en functies
                    kunnen vaststellen.
                </p>
            </Introduction>
            <TextAndImage
                img={invision}
                reverse
                alt="Ontwerp van de service desk"
            >
                <p className="subtitle">Oplossing</p>
                <h3>UX Research</h3>
                <p>
                    Na een grondige intake zijn we begonnen met een eerste UX/UI
                    design voor het Allocator tool. Extra’s die op basis van
                    deze wireframes nog gewenst waren zijn ook toegevoegd.
                </p>
            </TextAndImage>
            <TextAndImage img={invision} alt="Ontwerp van de service desk">
                <p className="subtitle">Oplossing</p>
                <h3>UI Design</h3>
                <p>
                    In Invision zijn prototypes gemaakt van de Allocator tool.
                    Op basis hiervan is feedback verzamelt en zijn de
                    functionaliteiten en design aangescherpt.
                </p>
            </TextAndImage>
            <TextAndImage
                img={invision}
                reverse
                alt="Ontwerp van de service desk"
            >
                <p className="subtitle">Oplossing</p>
                <h3>Development</h3>
                <p>
                    De frontend van de allocator is gemaakt in React en voor de
                    content van de beslisboom is een maatwerk oplossing gemaakt
                    binnen WordPress.
                </p>
            </TextAndImage>
            <TextAndImage fluid img={login} alt="STYR login pagina">
                <p className="subtitle">Resultaten</p>
                <h2>Realiseren</h2>
                <p>
                    Het design van de allocator is opgebouwd uit opeenvolgende
                    pagina’s die de gebruiker doorloopt, waarbij keuzes gemaakt
                    worden door op opties te klikken die bij een
                    werknemerprofiel passen.
                </p>
                <p>
                    Meer informatie over het STYR model en de STYR Allocator
                    Tool vind je op&nbsp;
                    <a href="https://www.styrmodel.com">de website van STYR</a>.
                </p>
            </TextAndImage>
        </Section>
    </Layout>
);

export default Case;
