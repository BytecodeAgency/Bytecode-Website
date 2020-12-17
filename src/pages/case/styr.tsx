/* eslint-disable max-len */
import React from 'react';
import Layout from '../../layouts/CaseLayout';
import {
    TextAndImage,
    Introduction,
    Section,
} from '../../containers/ContentBlocks/ContentBlocks';
import Deliverables from '../../containers/Deliverables';

const login = require('../../images/img/cases/styr/login.png');
const serviceDesk = require('../../images/img/cases/styr/service-desk.png');
const model = require('../../images/img/cases/styr/model.png');
const invision = require('../../images/img/cases/styr/invision.png');
const development = require('../../images/img/content/collaboration/code.svg');
const research = require('../../images/img/content/collaboration/say.svg');

const pageSettings = {
    client: 'STYR',
    description:
        'Door de digitalisatie van het functiewaarderingsmodel, is het werk van de STYR consultants geautomatiseerd. Hierdoor kunnen zij worden ingezet op hun echte expertise. Lees hier het resultaat!',
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
                gestandaardiseerd. Om dit voor elkaar te krijgen heeft Bytecode
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
        />
        <Section>
            <Introduction>
                <h2>De uitdaging</h2>
                <p className="introduction">
                    Wij hebben een praktische online waarderingstool ontwikkeld
                    waarmee de klanten van STYR zelf de zwaarte van rollen en
                    functies kunnen vaststellen.
                </p>
            </Introduction>
            <TextAndImage
                img={research}
                reverse
                alt="Onderzoek naar de allocatortool"
            >
                <p className="subtitle">Oplossing</p>
                <h3>UX Research</h3>
                <p>
                    Na een grondige intake zijn we begonnen met een eerste UX/UI
                    design voor het Allocatortool. Extra’s die op basis van deze
                    wireframes nog gewenst waren, zijn ook toegevoegd.
                </p>
            </TextAndImage>
            <TextAndImage img={invision} alt="Ontwerp van de service desk">
                <p className="subtitle">Oplossing</p>
                <h3>UI Design</h3>
                <p>
                    In Invision zijn prototypes gemaakt van de Allocatortool. Op
                    basis hiervan is feedback verzameld en zijn de
                    functionaliteiten en design aangescherpt.
                </p>
            </TextAndImage>

            <TextAndImage
                img={development}
                reverse
                alt="Ontwikkeling van de service desk"
            >
                <p className="subtitle">Oplossing</p>

                <h3>Development</h3>

                <p>
                    De frontend van de Allocator is ontwikkeld in React. Voor de
                    content van de beslisboom is een maatwerk oplossing
                    ontwikkeld voor het WordPress CMS.
                </p>
            </TextAndImage>

            <TextAndImage fluid img={model} alt="STYR login pagina">
                <p className="subtitle">Resultaten</p>

                <h2>Realiseren</h2>

                <p>
                    Het design van de Allocator is opgebouwd uit opeenvolgende
                    pagina’s die de gebruiker doorloopt, waarbij keuzes gemaakt
                    worden door op opties te klikken die bij een
                    werknemerprofiel passen.
                </p>

                <p>
                    Meer informatie over het STYR model en de STYR Allocator
                    Tool vind je op&nbsp;
                    <a href="https://styr.nl">de website van STYR</a>.
                </p>
            </TextAndImage>
        </Section>
    </Layout>
);

export default Case;
