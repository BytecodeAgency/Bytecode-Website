import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../layouts/MainLayout' was resolved to '/h... Remove this comment to see the full error message
import Layout from '../layouts/MainLayout';
import { Container } from '../lib/Grid';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/ContactForm/ContactForm' was... Remove this comment to see the full error message
import ContactForm from '../containers/ContactForm/ContactForm';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/Service/ServiceHeader' was r... Remove this comment to see the full error message
import ServiceHeader from '../containers/Service/ServiceHeader';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/Service/ServiceItemSmall' wa... Remove this comment to see the full error message
import ServiceItemSmall from '../containers/Service/ServiceItemSmall';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/Service/ServiceItem' was res... Remove this comment to see the full error message
import ServiceItem from '../containers/Service/ServiceItem';
import {
    ServiceBackgroundContainer,
    ServiceBackgroundImage,
} from '../containers/Service/Service.components';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/Service/ServiceCard' was res... Remove this comment to see the full error message
import ServiceCard from '../containers/Service/ServiceCard';

const pageSettings = {
    title: 'Services',
    description: `Benieuwd wat Bytecode voor jou kan betekenen? Met onze expertise in maatwerk helpen we je om alles uit je digitale zelf te kunnen halen. Ontdek onze services!`,
    keywords: 'diensten',
};

const Services = () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout pageSettings={pageSettings}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ServiceHeader
            subtitle="Services"
            title="Van inzicht tot impact"
            text="Door hulp bij onderzoek, ontwikkeling en uitvoering hoef jij je geen zorgen meer te maken om kleine,
            belemmerende randzaken of fricties. Handmatig, tijdrovend werk is verleden tijd.
            Jij kan je volledig focussen op datgene waar jij passie voor hebt.
            Zo maken we jouw visie realiteit."
            src={require('../images/img/services/dawnyheader.png')}
        />

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ServiceItemSmall
            title="Research-Based Development"
            text="Ons werk is volledig gebaseerd op onderzoek.
            Het is essentieel om bij het ontwikkelen van een project met echte validatie richting een passende oplossing te werken,
            zonder aannames. Met ons unieke research-based development bouwen we mobiele apps en andere platforms,
            UX/UI design, API development en nog veel meer."
            src={require('../images/img/services/smallserviceitemlogo.svg')}
        />

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ServiceItem
            title="Bereik meer met minder werk"
            subtitle="Digital Tools"
            text="Als je een doel hebt, maar dit niet zelf kunt bereiken, vereist dit een oplossing die jouw vermogens vergroot.
            Wij creëren overzicht en inzicht, brengen mensen samen en automatiseren handwerk."
            src={require('../images/img/services/mooiwerksite.png')}
            image
            link="/services"
            light
            listItems={['Mobiele apps', 'Webapps', 'Websites', 'Webshops']}
        />

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ServiceBackgroundContainer>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ServiceBackgroundImage
                src={require('../images/img/services/abstractbackground.png')}
            />
        </ServiceBackgroundContainer>

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ServiceItem
            title="Advies voor een echt succes"
            subtitle="Digital Expression"
            text="Digitale expressie is essentieel om jouw tool zichtbaar te maken voor potentiële gebruikers.
            Jouw tool wordt met ons advies representatief, toegankelijk en van hoge kwaliteit."
            src={require('../images/img/services/shopscreenshot.png')}
            image
            link="/services"
            listItems={[
                'UX/UI design',
                'Advies en strategie',
                'Branding en identiteit',
                'Start-up begeleiding',
                'Partnership',
            ]}
        />

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ServiceCard
            subtitle="oproep"
            title="Start-Up Mentoring"
            text="Bytecode ondersteunt start-ups tijdens alle fases van hun groeiproces."
            link="/services"
            src={require('../images/img/services/abstractcardbackground.svg')}
        />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Container>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ContactForm />
        </Container>
    </Layout>
);

export default Services;
