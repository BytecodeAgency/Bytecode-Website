import React from 'react';
import Layout from '../../layouts/MainLayout';
import Method from '../../containers/Service/ServiceSubpages/Method';

const pageSettings = {
    title: 'Digital Tools - Bytecode Digital Agency B.V.',
    description: `iets over digital tools`, // description needs to be added
    keywords: 'digital tools, mooiwerkbreda, service, bytecode digital agency',
};

const DigitalTools = () => (
    <Layout pageSettings={pageSettings}>
        <Method
            src={require('../../images/img/services/subpages/MooiwerkBreda@2x.png')}
            link="/services/digitaltools"
            text="Het is belangrijk om de doelgroep van jouw tool goed in kaart te brengen.
            Wat zouden gebruikers graag in jouw tool terugzien?
            We bekijken actief hoe jouw tool in het dagelijks leven gebruikt kan worden, en hoe we dit kunnen optimaliseren.
            Vanuit beide kanten worden de verwachtingen duidelijk gemaakt.
            De wensen en redenen voor het ontwikkelen van jouw tool komen uitgebreid ter sprake.
            We letten er tijdens onze samenwerking in het bijzonder op dat jouw tool van hoge kwaliteit is,
            duurzaam is voor de toekomst, makkelijk aanpasbaar is, en optimaal aansluit op de gebruiker en gebruikerscontext."
            title="Mooiwerk Breda"
            subtitle="We hebben tools ontwikkeld waarmee we mensen meer vrijwilligerswerk kunnen laten doen"
        />
    </Layout>
);

export default DigitalTools;
