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

const featured = require('../../images/img/cases/breda-actief/featured.svg');
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

const Case: React.FC<Record<string, never>> = () => (
    <Layout pageSettings={pageSettings}>
        <TextAndImage
            padded
            img={responsive}
            alt="Responsive website van Breda Actief"
        >
            <h2>Responsive website</h2>
            <p>
                Voor een maatschappelijk betrokken organisatie zoals stichting
                Breda Actief is webtoegankelijkheid erg belangrijk om haar doel
                te bereiken, want als je er voor wil zorgen dat écht{' '}
                <strong>iedereen</strong> aan het sporten komt moet je er ook
                voor zorgen dat dan ook <strong>iedereen</strong> de website kan
                bedienen.
            </p>
        </TextAndImage>
        <Deliverables
            deliverables={[
                'Online Strategie',
                'Responsive Website',
                'Maatwerk CMS',
                'Cloudservers',
                'Doorontwikkeling',
            ]}
        />
        <Section>
            <Introduction>
                <h2>De uitdaging</h2>
                <p>
                    Breda Actief is een grote organisatie, en meerdere mensen
                    binnen de organisatie willen de content op de website kunnen
                    aanpassen. Toch is het belangrijk dat de website een
                    consistente huisstijl heeft, toegankelijk is en goede
                    prestaties levert.
                </p>
            </Introduction>
            <TextAndImage img={wieiswie} reverse alt="Uptime prestaties" padded>
                <Subtitle>prestaties</Subtitle>
                <h3>Toegankelijkheid</h3>
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
            <TextAndImage img={administration} alt="Uptime prestaties" padded>
                <Subtitle>prestaties</Subtitle>
                <h3>Consistente huisstijl</h3>
                <p>
                    Door het gebruik van maatwerk velden in het CMS zorgen we
                    voor een consistente huisstijl en blijft het invoeren van
                    content gemakkelijk.
                </p>
            </TextAndImage>
            <TextAndImage
                fluid
                img={screens}
                alt="Meerdere schermen van de website"
                padded
            >
                <Subtitle>Resultaten</Subtitle>
                <h2>Realiseren</h2>
                <p>
                    Om Breda Actief zo goed mogelijk te helpen bij het
                    neerzetten van een succesvolle website, hebben we besloten
                    het volgende als oplossing te bieden, om bij te dragen aan
                    de online groei en de prachtige gestelde doelen. Het
                    resultaat van dit project is te bekijken op breda-actief.nl.
                    In overleg met Stichting Breda Actief is de broncode
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
