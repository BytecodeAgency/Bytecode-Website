import React from 'react';
import Layout from '../layouts/MainLayout/MainLayout';
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

// TODO: remake this page using the Contentblocks available
const pageSettings = {
    title: 'Services',
    description: `Benieuwd wat Bytecode voor jou kan betekenen? Met onze expertise in maatwerk helpen we je om alles uit je digitale zelf te kunnen halen. Ontdek onze services!`,
    keywords: 'diensten',
};
const dawny = require('../images/img/services/dawnyheader.png');
const logo = require('../images/img/services/smallserviceitemlogo.svg');
const website = require('../images/img/services/mooiwerksite.png');
const abstractBackground = require('../images/img/services/abstractbackground.png');
const webshop = require('../images/img/services/shopscreenshot.png');
const abstractCardBackground = require('../images/img/services/abstractcardbackground.svg');

const Services: React.FC<Record<string, never>> = () => (
    <Layout pageSettings={pageSettings}>
        <ServiceHeader
            subtitle="Services"
            title="Van inzicht tot impact"
            text="Door hulp bij onderzoek, ontwikkeling en uitvoering hoef jij je geen zorgen meer te maken om kleine,
            belemmerende randzaken of fricties. Handmatig, tijdrovend werk is verleden tijd.
            Jij kan je volledig focussen op datgene waar jij passie voor hebt.
            Zo maken we jouw visie realiteit."
            src={dawny}
        />

        <ServiceItemSmall
            title="Research-Based Development"
            text="Ons werk is volledig gebaseerd op onderzoek.
            Het is essentieel om bij het ontwikkelen van een project met echte validatie richting een passende oplossing te werken,
            zonder aannames. Met ons unieke research-based development bouwen we mobiele apps en andere platforms,
            UX/UI design, API development en nog veel meer."
            src={logo}
        />

        <ServiceItem
            title="Bereik meer met minder werk"
            subtitle="Digital Tools"
            text="Als je een doel hebt, maar dit niet zelf kunt bereiken, vereist dit een oplossing die jouw vermogens vergroot.
            Wij creëren overzicht en inzicht, brengen mensen samen en automatiseren handwerk."
            src={website}
            link="/services"
            light
            listItems={['Mobiele apps', 'Webapps', 'Websites', 'Webshops']}
        />

        <ServiceItem
            title="Een betrouwbare en stabiele basis"
            subtitle="Digital Enviroment"
            text="We creëren een flexibele omgeving als basis, waarin jouw tools op een optimale manier met elkaar verbonden worden.
            Door goede communicatie tussen deze tools win je tijd en wordt de infrastructuur gebruiksvriendelijk.
            Zorgen en handwerk zijn verleden tijd."
            link="/services"
            listItems={[
                'Platformontwikkeling',
                'API development',
                'Cloudcomputing',
                'IT-automatisering',
            ]}
        />

        <ServiceBackgroundContainer>
            <ServiceBackgroundImage src={abstractBackground} />
        </ServiceBackgroundContainer>

        <ServiceItem
            title="Advies voor een echt succes"
            subtitle="Digital Expression"
            text="Digitale expressie is essentieel om jouw tool zichtbaar te maken voor potentiële gebruikers.
            Jouw tool wordt met ons advies representatief, toegankelijk en van hoge kwaliteit."
            src={webshop}
            link="/services"
            listItems={[
                'UX/UI design',
                'Advies en strategie',
                'Branding en identiteit',
                'Start-up begeleiding',
                'Partnership',
            ]}
        />

        <ServiceCard
            subtitle="oproep"
            title="Start-Up Mentoring"
            text="Bytecode ondersteunt start-ups tijdens alle fases van hun groeiproces."
            link="/services"
            src={abstractCardBackground}
        />

        <Container>
            <ContactForm />
        </Container>
    </Layout>
);

export default Services;
