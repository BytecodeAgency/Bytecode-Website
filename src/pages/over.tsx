import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/MainLayout/MainLayout';
import TextBlock from '../containers/TextBlock/TextBlock';
import Header from '../containers/Header/Header';
import TeamMember from '../containers/TeamMember/TeamMember';
import Container from '../containers/Container';
import ContactForm from '../containers/ContactForm/ContactForm';
import theme from '../styles/theme';

const { mediaQueryMin } = theme;

const pageSettings = {
    title: `De drijvende kracht achter Bytecode`,
    description: `Een multidisciplinair team van ontwikkelaars, ontwerpers, researchers, strategen en marketeers. Samen zoeken wij naar nieuwe manieren en inzichten om de digitale wereld naar jouw hand te zetten. Ontdek hier de drijvende kracht achter Bytecode!`,
    keywords: 'team',
};

const TeamMembers = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    & > * {
        width: 100%;
        flex-basis: 100%;
        padding: 0.5em;
    }
    @media (${mediaQueryMin.xs}) {
        flex-direction: row;
        align-items: center;
        & > * {
            width: 33%;
            flex-basis: 33%;
            padding: 0.5em;
            &:first-child {
                padding-right: 3em;
            }
        }
    }
    @media (${mediaQueryMin.md}) {
        & > * {
            width: 33%;
            flex-basis: 33%;
            padding: 0.5em;
            &:first-child {
                padding-right: 3em;
            }
        }
    }
`;

const Over: React.FC<Record<string, never>> = () => (
    <Layout pageSettings={pageSettings}>
        <Header
            img={require('../images/img/content/teamv2.png')}
            subtitle="Over ons"
            title="Partner in jouw ambities"
            text="Bytecode is een team van ontwikkelaars, ontwerpers, researchers, strategen en marketeers die zoeken naar nieuwe manieren en inzichten om de digitale wereld naar jouw hand te zetten."
        />

        <Container>
            <TeamMembers>
                <TextBlock
                    subtitle="Het team"
                    alt="Het team"
                    title="Unieke perspectieven door unieke personen"
                    headingType="h2"
                >
                    Ons hechte team werkt keihard om jouw doelen te bereiken.
                    Door onze multidisciplinaire kennis versterken we elkaar en
                    delen we onze ervaring. Daarnaast krijgt iedereen ruimte tot
                    inspraak in de toekomst van Bytecode, bijvoorbeeld door bij
                    te dragen aan vrije software-projecten. Hierdoor maken we
                    niet alleen gebruik van de nieuwste technieken, maar voegen
                    we er ook iets aan toe.
                </TextBlock>
                <TeamMember
                    name="Jeroen van Steijn"
                    title="Co-founder &amp; Operations manager"
                    img={require('../images/img/team/jeroen.jpg')}
                    link="https://jeroenvansteijn.nl"
                    email="mailto:jeroen@bytecode.nl"
                    github="https://github.com/JeroenVanSteijn"
                    instagram="https://www.instagram.com/jjvansteijn"
                    linkedin="https://www.linkedin.com/in/jjvansteijn"
                />
                <TeamMember
                    name="Luciano Nooijen"
                    title="Co-founder &amp; Technical lead"
                    img={require('../images/img/team/luciano.jpg')}
                    link="https://lucianonooijen.nl"
                    email="mailto:luciano@bytecode.nl"
                    github="https://github.com/lucianonooijen"
                    linkedin="https://www.linkedin.com/in/lucianonooijen"
                />
                {/* TODO: Generate from array, maybe later change via dashb. */}
                <TeamMember
                    name="Richard van 't Hof"
                    title="Junior art-director & Front-end developer"
                    img={require('../images/img/team/richard.jpg')}
                    email="mailto:richard@bytecode.nl"
                    link="https://www.therichard.space"
                    linkedin="https://www.linkedin.com/in/richard-van-t-hof"
                    github="https://www.github.com/RichART-Official"
                />
                <TeamMember
                    name="Thomas Bodlaender"
                    title="Online Marketeer"
                    img={require('../images/img/team/thomas.jpg')}
                    email="mailto:thomas@bytecode.nl"
                    instagram="https://www.instagram.com/thomasbodje"
                    linkedin="https://www.linkedin.com/in/thomasbodlaender"
                />
                <TeamMember
                    name="Julian van Dijk"
                    title="Full-stack developer web &amp; mobiel"
                    img={require('../images/img/team/julian.jpg')}
                    email="mailto:julian@bytecode.nl"
                    linkedin="https://www.linkedin.com/in/julian-v-66b098116"
                />
                <TeamMember
                    name="Nick Broekarts"
                    title="Partner &amp; Business Developer"
                    img={require('../images/img/team/nick.jpg')}
                    email="mailto:nick@bytecode.nl"
                    instagram="https://www.instagram.com/nickbroekarts"
                    linkedin="https://www.linkedin.com/in/nickbroekarts"
                />
                <TeamMember
                    name="Robin van Zeelst"
                    title="Online Marketeer"
                    img={require('../images/img/team/robin.jpg')}
                    email="mailto:robin@bytecode.nl"
                    linkedin="https://www.linkedin.com/in/robin-van-zeelst/"
                />
                <TeamMember
                    name="Christiaan Färber"
                    title="UI/UX Designer &amp; Front-end developer"
                    img={require('../images/img/team/chris.jpg')}
                    email="mailto:chris@bytecode.nl"
                />
                <TeamMember
                    name="Suzanne de Vries"
                    title="Marketing &amp; Communicatie"
                    img={require('../images/img/team/suzanne.jpg')}
                    email="mailto:suzanne@bytecode.nl"
                    linkedin="https://www.linkedin.com/in/suzanne-de-vries-11b088149/"
                />

                <TeamMember
                    name="Nahwin Chedoe"
                    title="Junior UI &amp; UX Designer"
                    img={require('../images/img/team/nawin.jpg')}
                    email="mailto:nahwin@bytecode.nl"
                />
                <TeamMember
                    name="Tiko Alarcón Rivero"
                    title="Full-stack developer web &amp; mobiel"
                    img={require('../images/img/team/tiko.jpg')}
                    email="mailto:tiko@bytecode.nl"
                />
            </TeamMembers>
        </Container>
        <Container>
            <ContactForm />
        </Container>
    </Layout>
);

export default Over;
