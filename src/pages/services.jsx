import React from 'react';
import Layout from '../layouts/MainLayout';
import TextBlock from '../containers/TextBlock/TextBlock';
import { Container, Row, Col } from '../lib/Grid';
import ContactForm from '../containers/ContactForm/ContactForm';
import ImageBlock from '../components/ImageBlock';
import Process from '../containers/Process/Process';
import Header from '../containers/Header';
import Wrapper from '../components/Wrapper';
import Service from '../containers/Service/Service';
import DigitalOceanPartnerLogo from '../components/DigitalOceanPartnerLogo';
import ServiceHeader from "../containers/Service/ServiceHeader";
import ServiceItemSmall from "../containers/Service/ServiceItemSmall";

const pageSettings = {
    title: 'Services - Bytecode Digital Agency B.V.',
    description: `Services, benieuwd wat Bytecode voor jou kan betekenen?
    Met onze expertise en maatwerk helpen we je om alles uit je digitale
    zelf te kunnen halen.`,
    keywords: 'diensten',
};



const Services = () => (
    <Layout padded pageSettings={pageSettings}>
        <ServiceHeader
            subtitle="SERVICES"
            title="Van inzicht tot impact"
            text="Door hulp bij onderzoek, ontwikkeling en uitvoering hoef jij je geen zorgen meer te maken om kleine,
            belemmerende randzaken of fricties. Handmatig, tijdrovend werk is verleden tijd.
            Jij kan je volledig focussen op datgene waar jij passie voor hebt.
            Zo maken we jouw visie realiteit."
        />
        <ServiceItemSmall
            title="Research Based Development"
            text="Ons werkproces bestaat voor een groot en belangrijk deel uit het doen van onderzoek.
            Dit helpt ons om onder andere een duidelijk beeld te krijgen van de doelen
            en prioriteiten van een project, de beschikbare middelen,
            en de wensen van de bedenker en gebruiker."
        />
        <Container>
            <ContactForm />
        </Container>
    </Layout>
);

export default Services;
