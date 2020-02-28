/* eslint-disable max-len */
import React from 'react';
import Layout from '../../layouts/CaseLayout';
import {
    TextAndImage,
    Introduction,
    Section,
} from '../../containers/ContentBlocks/ContentBlocks';
import Deliverables from '../../containers/Deliverables';

const logo = require('../../images/img/cases/mooiwerk/logo.svg');
const websiteImg1 = require('../../images/img/cases/mooiwerk/website-1.png');
const websiteImg2 = require('../../images/img/cases/mooiwerk/website-2.png');
const websiteImg3 = require('../../images/img/cases/mooiwerk/website-3.png');
const websiteImg4 = require('../../images/img/cases/mooiwerk/website-4.png');
const websiteImg5 = require('../../images/img/cases/mooiwerk/website-5.png');

const pageSettings = {
    client: 'Mooiwerk Breda',
    description: 'Een vrijwilligersplatform gemaakt door Bytecode.',
    image: websiteImg1,
    title: 'Mooiwerk',
    keywords: 'breda actief, mooiwerkbreda, case, bytecode digital agency',
};

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <TextAndImage
            padded
            img={websiteImg2}
            alt="Breng Breda dichter bij elkaar"
        >
            <h2>Breng Breda dichter bij elkaar</h2>
            <p className="introduction">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
        </TextAndImage>

        <Deliverables
            deliverables={['Webapp', 'Custom CMS', 'Cloud servers', 'Doorontwikkeling']}
            alt="website image mooiwerkbreda"
            clientLogo={logo}
            img={websiteImg3}
            clientBio="Mooiwerk Breda is een platform van Stichting Breda
                        Actief. Op dit platform kunnen organisaties vacatures
                        plaatsen als zij op zoek zijn naar vrijwilligerswerk,
                        maar ook vrijwilligers kunnen hier terecht om een leuke
                        vrijwilligersbaan te zoeken. Op deze manier zorgt het
                        Mooiwerk-platform voor nieuwe contacten en hele mooie
                        samenwerkingsverbanden."
        />
        <Section>
            <Introduction>
                <h2>De uitdaging</h2>
                <p className="introduction">
                    Stichting Breda Actief heeft Bytecode benaderd voor het
                    vernieuwen en verbeteren van een bestaand platform. Zelf
                    hadden zij al een goed idee van de doelgroep en requirements
                    die aan het platform gekoppeld zijn. De belangrijkste reden
                    voor de vraag aan Bytecode was het feit dat zij zelf niet de
                    controle hadden over het platform en de data en dat ze hier
                    graag wel onafhankelijk in wilden zijn. Bij Bytecode vinden
                    wij eigen controle en een open omgeving ook erg belangrijk,
                    en samen met het doel dat Mooiwerk ondersteunt waren wij
                    daarom erg enthousiast om hier een bijdrage aan te leveren.
                </p>
            </Introduction>
            <TextAndImage
                img={websiteImg4}
                reverse
                alt="Pagina op de mooiwerkbreda website"
            >
                <p className="subtitle">Research</p>
                <h3>Oplossing</h3>
                <p>
                    Aan de hand van de vastgestelde doelgroep en requirements
                    hebben we een MVP opgesteld van 4 sprints. Hierna was er
                    altijd de mogelijkheid voor doorontwikkeling en toekomstige
                    data-analyse hebben we in het achterhoofd gehouden.
                </p>
            </TextAndImage>
            <TextAndImage fluid img={websiteImg5} alt="Pagina op de mooiwerkbreda website">
                <p className="subtitle">Resultaten</p>
                <h2>Realiseren</h2>
                <p className="introduction">
                    Het uiteindelijke platform zorgt ervoor dat Mooiwerk Breda
                    organisaties en vrijwilligers in Breda samen kan brengen en
                    met behulp van de doorgaande ontwikkeling blijven we Breda
                    Actief ondersteunen.
                </p>
                <p>
                    Het resultaat van dit project is te bekijken op
                    <a href="https://mooiwerkbreda.nl">
                        &nbsp;mooiwerkbreda.nl
                    </a>
                    . In overleg met Stichting Breda Actiefis de broncode
                    vrijgegeven onder GPL-3.0 licentie,
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
