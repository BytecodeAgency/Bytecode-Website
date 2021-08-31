import React from 'react';
import Layout from '../../layouts/CaseLayout/CaseLayout';
import {
    TextAndImage,
    Introduction,
    Section,
} from '../../containers/ContentBlocks/ContentBlocks';
import Deliverables from '../../containers/Deliverables/Deliverables';
import Credits from '../../containers/Credits/Credits';
import Gallery from '../../containers/Gallery';
import PostThumbnail from '../../containers/Thumbnails/PostThumbnail';

const header = require('../../images/img/cases/dearly/header.png');
const intro = require('../../images/img/cases/dearly/intro.png');
const rouwen = require('../../images/img/cases/dearly/rouwen.png');
const app = require('../../images/img/cases/dearly/app.png');

const dawny = require('../../images/img/cases/dawny/usecase.png');
const dearly = require('../../images/img/cases/dearly/header.png');
const styr = require('../../images/img/cases/styr/allocator.png');

const websiteUrl = 'https://www.airchip.com/';

const pageSettings = {
    title: 'Barman in je broekzak',
    client: 'airchip',
    clientBio:
        'Nooit meer in de rij op een festival of evenement: bestel en betaal via de app van Airchip. Bekend van Dragon’s Den!',
    description:
        'Nooit meer in de rij op een festival of evenement: bestel en betaal via de app van Airchip. Bekend van Dragon’s Den!',
    keywords: 'festivals, airchip, app, dragons den',
    image: header,
};

const creditColumnOne = [
    {
        title: 'Architectuur',
        content: ['Luciano Nooijen'],
    },
    {
        title: 'Design',
        content: ['Christiaan Färber'],
    },
];
const creditColumnTwo = [
    {
        title: 'Back-end',
        content: ['Luciano Nooijen', 'Jeroen van Steijn'],
    },
    {
        title: 'Infrastructuur',
        content: ['Luciano Nooijen'],
    },
];

const Dearly: React.FC<Record<string, never>> = () => (
    <Layout pageSettings={pageSettings}>
        <TextAndImage
            padded
            img={intro}
            alt="Nooit meer in de rij op een festival of evenement: bestel en betaal met Airchip."
        >
            <h3>Barman in je broekzak</h3>
            <p>
                Airchip is een mobiele app voor iOS en Android waarmee je op
                evenementen gemakkelijk en snel jouw drankjes en hapjes bestelt.
                Airchip blijft zelfs zonder internet werken dankzij Bluetooth
                Low Energy.
            </p>
        </TextAndImage>
        <Deliverables
            deliverables={[
                'CTO rol',
                'Hulp bij UX design',
                'Code quality-verbeteringen',
                'Betrouwbaarheid en veiligheid van betalingen',
                'Robuustere en schaalbare cloudomgeving en backend',
                'Recruiten extra native iOS en Android ontwikkelaars',
                'On-call support tijdens evenementen',
                'Opstellen van ontwikkelingsguidelines en verbeteringen in bedrijfscultuur',
                'Nieuwe features',
            ]}
        />
        <Section>
            <Introduction>
                <h3>Airchip</h3>
                <p>
                    In maart 2020 was een eerste versie van Airchip klaar voor
                    gebruik. Corona gooide roet in het eten. Deze zomer zijn wij
                    betrokken voor ontwerp en ontwikkeling. We hebben veel
                    processen geautomatiseerd en de app is beter schaalbaar. Tot
                    nu toe is Airchip al op meerdere evenementen getest en is
                    via Dragon’s Den een mooie investering binnengehaald.
                </p>
            </Introduction>
            <TextAndImage img={rouwen} alt="Maak rouwen bespreekbaar" reverse>
                <h3>Doel van Airchip</h3>
                <p>
                    Airchip wil het maximale halen uit de tijd die jij met vrienden en geliefden besteedt. Je mist geen moment meer van je favoriete festival omdat jij de drankjes ging halen. Je wordt geholpen waar en wanneer je wilt. Het enige dat je nodig hebt is een telefoon en geld op je wallet. Airchip zorgt voor een betere en snellere bestel- en betaalmethode.
                </p>
            </TextAndImage>
        </Section>
        <Section>
            <TextAndImage img={app} alt="Airchip app" padded>
                <h3>Resultaten</h3>
                <p>
                    Wij hebben gewerkt aan de drie apps (iOS, Android en POS-app
                    voor iOS), de backend-applicatie (servers) en de
                    cloudomgeving voor Site Reliability Engineering en
                    schaalbaarheid De echte waarde van Airchip zal gaan blijken
                    wanneer grootschalige festivals weer toegestaan zijn. De
                    eerste festivals van ca. 2500 bezoekers zijn al succesvol
                    verlopen.
                </p>
            </TextAndImage>
        </Section>
        <Section>
            <Credits
                special={[
                    'Daniel van Drunen (Airchip)',
                    'Jan ten Kate (Airchip)',
                ]}
                resources={['Airchip website']}
                resourceLinks={[websiteUrl]}
                columnOne={creditColumnOne}
                columnTwo={creditColumnTwo}
            />
            <Gallery padded sm={33}>
                <PostThumbnail
                    title="Ondersteuning bij rouwverwerking"
                    slug="/case/dearly"
                    postImageUrl={dearly}
                    category="Dearly"
                />
                <PostThumbnail
                    title="Valpreventie voor ouderen"
                    category="Reinier de Graaf ziekenhuis"
                    slug="/case/dawny"
                    postImageUrl={dawny}
                />
                <PostThumbnail
                    title="Moderne en eerlijke functiewaardering"
                    category="STYR"
                    slug="/case/styr"
                    postImageUrl={styr}
                />
            </Gallery>
        </Section>
    </Layout>
);
export default Dearly;
