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
const home = require('../../images/img/cases/mooiwerk/home.png');
const vacatures = require('../../images/img/cases/mooiwerk/vacatures.png');
const team = require('../../images/img/cases/mooiwerk/team.png');
const advies = require('../../images/img/cases/mooiwerk/advies.png');
const registreren = require('../../images/img/cases/mooiwerk/registreren.png');
const kennis = require('../../images/img/cases/mooiwerk/kennis.png');

const pageSettings = {
    client: 'Mooiwerk Breda',
    description:
        'Wij brachten Breda bij elkaar door vrijwilligerswerk vinden gemakkelijker te maken',
    image: home,
    title: 'MOOIWERK',
    keywords: 'breda actief, mooiwerkbreda, case, bytecode digital agency',
};

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <TextAndImage
            padded
            img={vacatures}
            alt="Brengt Breda dichter bij elkaar"
        >
            <h2>Brengt Breda dichter bij elkaar</h2>
            <p className="introduction">
                Door een platform te ontwikkelen waar vrijwilligers en
                organisaties elkaar kunnen vinden maakten wij vrijwilligerswerk
                toegankelijker.
            </p>
        </TextAndImage>

        <Deliverables
            deliverables={[
                'Webapp',
                'Custom CMS',
                'Cloudservers',
                'Doorontwikkeling',
            ]}
            alt="website image mooiwerkbreda"
            clientLogo={logo}
            img={team}
            clientBio="Mooiwerk Breda is een platform van Stichting Breda
                        Actief. Op dit platform kunnen organisaties vacatures
                        plaatsen als zij op zoek zijn naar vrijwilligerswerk,
                        maar ook vrijwilligers kunnen hier terecht om een
                        vrijwilligersbaan te zoeken."
        />
        <Section>
            <Introduction>
                <h2>De uitdaging</h2>
                <p className="introduction">
                    De belangrijkste reden voor een maatwerkapplicatie is
                    controle over de functionaliteiten en de data.
                </p>
            </Introduction>
            <TextAndImage
                img={registreren}
                reverse
                alt="Pagina op de mooiwerkbreda website"
            >
                <p className="subtitle">Research</p>
                <h3>Agile-toepassing</h3>
                <p>
                    Aan de hand van de vastgestelde doelgroep en requirements
                    hebben we een MVP opgesteld van 4 sprints. Hierna was er
                    altijd de mogelijkheid voor doorontwikkeling en toekomstige
                    data-analyse hebben we in het achterhoofd gehouden.
                </p>
            </TextAndImage>
            <TextAndImage img={kennis} alt="Pagina op de mooiwerkbreda website">
                <p className="subtitle">Development</p>
                <h3>Open source</h3>
                <p>
                    De codebase van het project is open source ontwikkeld. Door
                    goede documentatie is het voor MOOIWERK altijd mogelijk om
                    door te ontwikkelen.
                </p>
            </TextAndImage>
            <TextAndImage
                fluid
                img={advies}
                alt="Pagina op de mooiwerkbreda website"
            >
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
