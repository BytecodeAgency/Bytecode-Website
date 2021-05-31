import React from 'react';
import Layout from '../layouts/MainLayout/MainLayout';
import IconText from '../containers/IconText/IconText';
import VacancyHeader from '../containers/Vacancy/VacancyHeader';
import Container from '../containers/Container';
import theme from '../styles/theme';

const { colors } = theme;

const pageSettings = {
    title: `Golang backend/full-stack software ontwikkelaar`,
    description: `Wij, het team van Bytecode, zijn op zoek naar een medior/senior backend/full-stack developer ter uitbreiding van ons team. Onze sterke voorkeur gaat uit naar een ontwikkelaar met HBO/WO werk- en denkniveau, maar een opleiding op dit niveau is geen eis.`,
    keywords: 'vacature',
};

const Vacancy: React.FC<Record<string, never>> = () => (
    <Layout pageSettings={pageSettings}>
        <VacancyHeader
            subtitle="Vacature"
            title="Golang backend/full-stack software ontwikkelaar"
            img={require('../images/img/content/teamv2.png')}
        />

        <Container>
            <div>
                <IconText
                    icon="FaRegClock"
                    fSize="15px"
                    iconColor={colors.primary}
                    text="Deeltijd: 24-40 uur"
                />
                <IconText
                    icon="FaMapMarkerAlt"
                    fSize="15px"
                    iconColor={colors.primary}
                    text="Delfgauw"
                />
            </div>


            <p>
                Wij, het team van Bytecode, zijn op zoek naar een medior/senior backend/full-stack developer ter uitbreiding van ons team. Onze sterke voorkeur gaat uit naar een ontwikkelaar met HBO/WO werk- en denkniveau, maar een opleiding op dit niveau is geen eis.
            </p>

            <h2>Over Bytecode</h2>
            <p>
                Bytecode is een softwareontwikkelingspartner voor start-ups, waarbij de rol van “interim CTO en technische partner” wordt ingenomen. Daarnaast zijn we bezig met verschillende eigen (open-source) onderzoeksprojecten, om betere software te kunnen ontwikkelen voor klanten en intern.
            </p>
            <p>
                Bytecode is opgericht door twee softwareontwikkelaars en kenmerkt zich door een informeel, open en hecht team waarbij iedereen zelf bepaalt waar en wanneer gewerkt wordt. Er heerst een cultuur van continue verbetering, zowel aan de technische kant als aan de business-kant.
            </p>
            <p>
                Ons team bestaat uit jonge mensen die gespecialiseerd zijn in development, (UX/UI) design, marketing en sales. Onze visie is dat elk potentievol idee een kans van slagen moet krijgen. Dit bereiken we door samen te werken als een team, waarbij we advies geven en passende technologie creëren.
            </p>
            <p>
                Spreekt een jong, hecht team jou aan? Heb jij ook behoefte aan gezamelijke lunches op kantoor? Ben je net zo competitief in ping-pong als wij, en sta jij ook te springen voor gezellige teamuitjes? Dan ben je bij Bytecode aan het juiste adres!
            </p>
        </Container>
    </Layout>
);

export default Vacancy;
