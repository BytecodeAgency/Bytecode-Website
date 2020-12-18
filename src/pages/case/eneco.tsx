import React from 'react';
import Layout from '../../layouts/CaseLayout';
import {
    Introduction,
    Section,
    TextAndImage,
} from '../../containers/ContentBlocks/ContentBlocks';
import Deliverables from '../../containers/Deliverables';
import Credits from '../../containers/Credits/Credits';
import Gallery from '../../containers/Gallery';
import PostThumbnail from '../../containers/Thumbnails/PostThumbnail';

// All images
const useCase = require('../../images/img/cases/eneco/header.png');
const duurzaam = require('../../images/img/cases/eneco/intro.png');
const electra = require('../../images/img/cases/eneco/eneco.png');
const resultaat = require('../../images/img/cases/eneco/omschakelaar.png');

const omschakelaar = 'https://www.eneco.nl/duurzaam-advies/';

const dawny = require('../../images/img/cases/dawny/usecase.png');
const coteetciel = require('../../images/img/cases/cote-et-ciel/homepage.png');
const sungevity = require('../../images/img/cases/sungevity/header.jpg');

const pageSettings = {
    title: 'Omschakelen met Eneco',
    client: 'eneco',
    clientBio: '', // TODO: add client bio
    description: 'Nieuwe tool voor persoonlijk duurzaamheidsadvies',
    keywords: '', // TODO: add keywords
    image: useCase,
};

const creditColumnOne = [
    {
        title: 'Client',
        content: ['Eneco'],
    },
    {
        title: 'Jaar',
        content: ['2019-2020'],
    },
];
const creditColumnTwo = [
    {
        title: 'Front-end development',
        content: ['Luciano Nooijen'],
    },
];

const Case: React.FC<Record<string, never>> = () => (
    <Layout pageSettings={pageSettings}>
        <TextAndImage
            padded
            img={duurzaam}
            alt="Afbeelding van een eneco webpagina"
        >
            <h3>Ga voor duurzaam</h3>
            <p className="Paragraph Big (introduction">
                Energiebedrijf Eneco is in het afgelopen jaar bezig geweest met
                de ontwikkeling <a href={omschakelaar}>“De Omschakelaar”</a>,
                een nieuwe online tool. Met behulp van deze tool kunnen
                gebruikers persoonlijk advies krijgen over duurzaamheid.
                Luciano, onze co-founder en technical lead, heeft op ad
                interim-basis geholpen met de realisatie van De Omschakelaar.
            </p>
        </TextAndImage>
        <Deliverables
            deliverables={[
                'Frontend development',
                'Technisch en strategisch advies',
                'Architectuele verbeteringen',
            ]}
        />
        <Section>
            <Introduction>
                <h3>De uitdaging</h3>
                <p className="Paragraph Big (introduction)">
                    Om bewust te worden van het “omschakeltype” dat zij zijn,
                    doorlopen gebruikers een aantal stellingen die ingaan op hun
                    houding tegenover duurzaamheid. Op basis van dit type en de
                    huidige woonsituatie geeft Eneco een persoonlijk
                    duurzaamheisadvies. Hoe kun jij energie besparen en
                    duurzamer leven? Welke energieproducten passen hierbij?
                    Hoeveel energiekosten kun jij besparen?
                </p>
            </Introduction>
            <TextAndImage
                img={electra}
                alt="Afbeelding van hogespanningsapparatuur"
                padded
            >
                <h2>Eneco</h2>
                <p className="big">
                    Eneco is een energiebedrijf met een grote focus op
                    duurzaamheid en maatschappelijke betrokkenheid. Met&nbsp;
                    <a href={omschakelaar}>De Omschakelaar</a> beantwoordt Eneco
                    vragen over bijvoorbeeld energietransitie en het loslaten
                    van gas als energiebron.
                </p>
            </TextAndImage>
        </Section>
        <Section>
            <TextAndImage
                img={resultaat}
                alt="Afbeelding van de omschakelaar tool"
                reverse
                padded
            >
                <h2>Resultaat</h2>
                <p className="big">
                    Het resultaat van de “De Omschakelaar”-tool staat nu{' '}
                    <a href={omschakelaar}>online</a> en is klaar om mensen naar
                    een duurzamere levensstijl te helpen. Op dit moment promoot
                    Eneco de nieuwe tool via reclames op internet en tv. Deze
                    tool is nu het hoofddoel van de marketing en op hun website.
                </p>
            </TextAndImage>
        </Section>
        <Credits
            columnOne={creditColumnOne}
            columnTwo={creditColumnTwo}
            special={['Dept & Eneco']}
            resourceLinks={['https://eneco.nl']}
            resources={['Eneco Website']}
        />
        <Gallery padded sm={33}>
            <PostThumbnail
                title="Valpreventie voor ouderen"
                category="Reinier de Graaf ziekenhuis"
                slug="/case/dawny"
                postImageUrl={dawny}
            />
            <PostThumbnail
                title="Hoge kwaliteit rugtassen"
                category="côte&ciel"
                slug="/case/cote-et-ciel"
                postImageUrl={coteetciel}
            />
            <PostThumbnail
                title="Een digitale omgeving voor zonnepanelen op huurdaken"
                category="Sungevity"
                slug="/case/sungevity"
                postImageUrl={sungevity}
            />
        </Gallery>
    </Layout>
);

export default Case;
