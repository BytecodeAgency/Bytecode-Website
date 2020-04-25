import React from 'react';
import Layout from '../layouts/MainLayout';
import { Container } from '../lib/Grid';
import ContactForm from '../containers/ContactForm/ContactForm';
import ServiceHeader from '../containers/Service/ServiceHeader';
import ServiceItemSmall from '../containers/Service/ServiceItemSmall';
import ServiceItem from '../containers/Service/ServiceItem';
import {
    ServiceBackgroundContainer,
    ServiceBackgroundImage,
} from '../containers/Service/Service.components';
import ServiceCard from '../containers/Service/ServiceCard';

const pageSettings = {
    title: 'Services - Bytecode Digital Agency B.V.',
    description: `Services, benieuwd wat Bytecode voor jou kan betekenen?
    Met onze expertise en maatwerk helpen we je om alles uit je digitale
    zelf te kunnen halen.`,
    keywords: 'diensten',
};

const Services = () => (
    <Layout pageSettings={pageSettings}>
        <ServiceHeader
            subtitle="SERVICES"
            title="Van inzicht tot impact"
            text="Door hulp bij onderzoek, ontwikkeling en uitvoering hoef jij je geen zorgen meer te maken om kleine,
            belemmerende randzaken of fricties. Handmatig, tijdrovend werk is verleden tijd.
            Jij kan je volledig focussen op datgene waar jij passie voor hebt.
            Zo maken we jouw visie realiteit."
            src={require('../images/img/services/mockup-nobg+no-desktop@2x.png')}
        />

        <ServiceItemSmall
            title="Research Based Development"
            text="Ons werkproces bestaat voor een groot en belangrijk deel uit het doen van onderzoek.
            Dit helpt ons om onder andere een duidelijk beeld te krijgen van de doelen
            en prioriteiten van een project, de beschikbare middelen,
            en de wensen van de bedenker en gebruiker."
            src={require('../images/img/services/Logox3.svg')}
        />

        <ServiceItem
            title="Digital Tools"
            text="Digitale gereedschappen zijn als een extensie van de gebruiker waardoor ze hun
            kunnen kunnen vergroten. Hierdoor wordt het mogelijk sneller dingen te doen die eerst heel veel tijd
            en moeite kosten. Zoals instant alle mogelijkheden voor een vrijwilligersbaan vinden
            of declaraties invoeren. Door deze tools creeëren we de omstandigheden
            waarin jij alle tijd hebt voor dingen waar je daadwerkelijk meer verder komt."
            src={require('../images/img/services/website-1-3a5d6696cffd856aeffc1f126868cf20@2x (copy).png')}
            image
            link="/services/digitaltools"
            light
        />

        <ServiceItem
            title="Digital Enviroment"
            text="Digitale omgeving gaat erom hoe jouw hele digitale workflow moet worden opgebouwd:
                wat is de beste manier om mijn applicaties te draaien?
                Hoe kan ik handmatig data knippen en plakken zoveel mogelijk voorkomen?
                Maar ook: wat in het geval dat ik moet opschalen?
                Het is een holistische strategie voor jouw digitale werkplek zodat er geen technical debt ontstaat.
                Hierdoor creeëren we een omgeving waarin je fijn en flexiebe kan werken
                zodat jij je kan richten op nieuwe dingen verzinnen in plaats van pleisters plakken."
            link="/services"
            listTitle="EXPERIENCE"
            listItems={[
                'API-Development',
                'Cloudcomputing',
                'IT-automatisering',
            ]}
        />
        <ServiceBackgroundContainer>
            <ServiceBackgroundImage
                src={require('../images/img/services/abstract graphx2.png')}
            />
        </ServiceBackgroundContainer>

        <ServiceItem
            title="Digital Commerce"
            text="Digitale  Commerce gaat er in essentie om hoe je de digitale wereld gebruikt
            om jouw bedrijf zo aantrekkelijk mogelijk te maken.
            Zoals digitale gereedschappen gaan om de gebruiker iets te laten doen wat ze zelf willen bereiken
            gaat commerce erom de gebruiker iets te laten bereiken wat jij wil.
            We kijken hier bijvoorbeeld hoe we een gebruikerservaring creeëren die meer verkopen oplevert,
            maar ook hoe we je goed laten voorkomen in zoekresultaten
            of hoe we digitaal adverteren in jouw voordeel kunnen gebruiken.
            Hierdoor hoef je minder zorgen te maken om klanten werven waardoor je fijner kan werken
            en nieuwe dingen kan verzinnen."
            src={require('../images/img/services/Shop Screenshot x2.png')}
            image
            link="/services"
        />

        <ServiceCard
            subtitle="OPROEP"
            title="Start-Up Mentoring"
            text="Bytecode wil graag start-ups helpen ontspruiten"
            link="/services"
            src={require('../images/img/services/ServiceCardImage x3.svg')}
        />
        <Container>
            <ContactForm />
        </Container>
    </Layout>
);

export default Services;
