import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../layouts/MainLayout' was resolved to '/h... Remove this comment to see the full error message
import Layout from '../layouts/MainLayout';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/TextBlock/TextBlock' was res... Remove this comment to see the full error message
import TextBlock from '../containers/TextBlock/TextBlock';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/Header' was resolved to '/ho... Remove this comment to see the full error message
import Header from '../containers/Header';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/TeamMember/TeamMember' was r... Remove this comment to see the full error message
import TeamMember from '../containers/TeamMember/TeamMember';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/Container' was resolved to '... Remove this comment to see the full error message
import Container from '../containers/Container';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/ContactForm/ContactForm' was... Remove this comment to see the full error message
import ContactForm from '../containers/ContactForm/ContactForm';

// eslint-disable-next-line import/extensions
import theme from '../styles/theme.js';

// @ts-expect-error ts-migrate(2339) FIXME: Property 'mediaQueryMin' does not exist on type '{... Remove this comment to see the full error message
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

const Over = () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout pageSettings={pageSettings}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Header
            img={require('../images/img/content/teamv2.png')}
            subtitle="Over ons"
            title="Partner in jouw ambities"
            text="Bytecode is een team van ontwikkelaars, ontwerpers, researchers, strategen en marketeers die zoeken naar nieuwe manieren en inzichten om de digitale wereld naar jouw hand te zetten."
            width={80}
            align="flex-end"
            hero
            shadow
        />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Container>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TeamMembers>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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

                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <TeamMember
                    name="Richard van 't Hof"
                    title="Junior art-director & Front-end developer"
                    img={require('../images/img/team/richard.jpg')}
                    email="mailto:richard@bytecode.nl"
                    link="https://www.therichard.space"
                    linkedin="https://www.linkedin.com/in/richard-van-t-hof"
                    behance="https://www.behance.net/therichartspace"
                    github="https://www.github.com/RichART-Official"
                />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <TeamMember
                    name="Thomas Bodlaender"
                    title="Online Marketeer"
                    img={require('../images/img/team/thomas.jpg')}
                    email="mailto:thomas@bytecode.nl"
                    instagram="https://www.instagram.com/thomasbodje"
                    linkedin="https://www.linkedin.com/in/thomasbodlaender"
                />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <TeamMember
                    name="Julian van Dijk"
                    title="Full-stack developer web &amp; mobiel"
                    img={require('../images/img/team/julian.jpg')}
                    email="mailto:julian@bytecode.nl"
                    linkedin="https://www.linkedin.com/in/julian-v-66b098116"
                />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <TeamMember
                    name="Nick Broekarts"
                    title="Partner &amp; Business Developer"
                    img={require('../images/img/team/nick.jpg')}
                    email="mailto:nick@bytecode.nl"
                    instagram="https://www.instagram.com/nickbroekarts"
                    linkedin="https://www.linkedin.com/in/nickbroekarts"
                />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <TeamMember
                    name="Robin van Zeelst"
                    title="Online Marketeer"
                    img={require('../images/img/team/robin.jpg')}
                    email="mailto:robin@bytecode.nl"
                    linkedin="https://www.linkedin.com/in/robin-van-zeelst/"
                />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <TeamMember
                    name="Christiaan Färber"
                    title="UI/UX Designer &amp; Front-end developer"
                    img={require('../images/img/team/chris.jpg')}
                    email="mailto:chris@bytecode.nl"
                />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <TeamMember
                    name="Suzanne de Vries"
                    title="Marketing &amp; Communicatie"
                    img={require('../images/img/team/suzanne.jpg')}
                    email="mailto:suzanne@bytecode.nl"
                    linkedin="https://www.linkedin.com/in/suzanne-de-vries-11b088149/"
                />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <TeamMember
                    name="Nahwin Chedoe"
                    title="Junior UI &amp; UX Designer"
                    img={require('../images/img/team/nawin.jpg')}
                    email="mailto:nahwin@bytecode.nl"
                />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <TeamMember
                    name="Tiko Alarcón Rivero"
                    title="Full-stack developer web &amp; mobiel"
                    img={require('../images/img/team/tiko.jpg')}
                    email="mailto:tiko@bytecode.nl"
                />
            </TeamMembers>
        </Container>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Container>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ContactForm />
        </Container>
    </Layout>
);

export default Over;
