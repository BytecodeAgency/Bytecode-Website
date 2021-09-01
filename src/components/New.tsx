import React from 'react';
import styled from 'styled-components';
import InputField from '../components/InputField';
import theme from '../experimental/styles/theme';
import { Container, Col } from '../lib/Grid';
import { Subtitle } from './Typography/Typography';

const meeting = require('../images/img/startups/meeting.jpeg');
const team = require('../images/img/startups/bytecode-team.jpeg');
const group = require('../images/img/startups/group.jpg');

const { size, height, spacing, font, weight, color, border } =
theme.typography.button;
const { mediaQueryMin, colors } = theme;

export const Header = styled.header`
    height: 100vh;
    min-height: 600px;
    display: flex;
    flex-direction: row;
    @media (max-width: ${theme.breakpoint.xs}) {
        flex-direction: column;
        justify-content: flex-end;
    }
    align-items: center;
`;

export const HeaderContainer = styled(Container)`
    flex: 1;
    /* !important used to overwrite standard behaviour react-grid-system, may the code gods forgive me*/
    margin-top: 0 !important;
    margin-bottom: 0 !important;
`;

export const HeaderContent = styled.div`
    grid-column: 1;
    flex-basis: 30%;
    @media (max-width: ${theme.breakpoint.sm}) {
        padding-bottom: 5vh;
    }
    @media (max-width: ${theme.breakpoint.lg}) {
        flex-basis: 60%;
    }
`;

export const GridFig = styled.img`
    width: 7rem;
    position: absolute;
    transform: translate(-3rem, -3rem);
`;

export const HeaderFigure = styled.figure`
    display: none;
    grid-column: 2;
    height: 80vh;
    width: 60vw;
    transform: translateX(5vw);
    @media (${mediaQueryMin.sm}) {
        display: block;
    }
    @media (max-width: ${theme.breakpoint.md}) {
        height: 75vh;
        width: 50vw;
        transform: translateX(10vw);
    }
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

export const SlantedBackground = styled.div`
    width: 100%;
    height: 40vh;
    background-image: url(${group});
    opacity: 0.58;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    background-size: 150%;
    background-position: 29% 61%;
    @media (${mediaQueryMin.sm}) {
        background: #271c25;
        opacity: 1;
        clip-path: polygon(0 0, 100% 0, 100% 66%, 0 100%);
        /* 35rem */
    }
`;

export const Process = styled.ol`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    list-style-position: inside;
    counter-reset: elementcounter;
    padding-left: 0;
    @media (${mediaQueryMin.xs}) {
        width: 80%;
        margin: 0 auto;
    }
    @media (${mediaQueryMin.sm}) {
        flex-direction: row;
        width: 100%;
        padding-left: 1em;
        li {
            padding-right: 2em;
            p {
                padding-right: 4em;
            }
        }
    }
    li {
        flex-basis: 33%;
        font-size: 20px;
        color: ${colors.primary};
        position: relative;
        &:before {
            content: '0' counter(elementcounter) '. ';
            counter-increment: elementcounter;
            position: absolute;
            right: 1em;
            @media (${mediaQueryMin.sm}) {
                left: -2em;
            }
        }
        h3 {
            display: inline-block;
        }
    }
`;

export const Icon = styled.img`
    height: 4rem;
    width: auto;
    @media (${mediaQueryMin.sm}) {
        height: 4rem;
    }
`;

export const CircledIcon = styled(Icon)`
    height: 5rem;
    width: auto;
    display: block;
    margin: 0 auto;
    @media (${mediaQueryMin.xs}) {
        height: 5rem;
    }
`;

export const IconList = styled.ul`
    list-style: none;
    margin-left: 0;
    transform: translateX(-0.33rem);
    display: flex;
    align-items: stretch;
    width: 100%;
    max-width: 30rem;
    margin: 0 0 2.66em 0;
    li {
        flex-direction: column;
        display: inline-flex;
        width: 100%;
        font-size: 0.8rem;
        text-align: center;
        align-items: center;
        justify-content: start;
        margin: 0;
        img {
            @media (${mediaQueryMin.sm}) {
                width: min-content;
            }
        }
        p {
            margin: 0;
        }
    }
`;

export const ParallaxImage = styled.div`
    background-image: url(${team});
    min-height: 500px;
    width: 100%;
    display: block;
    border: none;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media (${mediaQueryMin.sm}) {
        background-image: url(${meeting});
    }
    & img {
        width: 100%;
        height: auto;
    }
`;

export const Deliverables = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;
    align-items: flex-start;
    justify-items: center;
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        width: 33%;

        & > * {
            margin-top: 1rem;
        }
    }

    @media (${mediaQueryMin.xs}) {
        margin: 0.5em 1em 0 1em;
    }
`;

export const PathsRight = styled.img`
    display: none;
    position: absolute;
    height: 120%;
    width: fit-content;
    right: -10%;
    z-index: 0;
    @media (${mediaQueryMin.sm}) {
        display: block;
    }
`;

export const PathsLeft = styled(PathsRight)`
    left: -10%;
    transform: scaleX(-1);
`;

export const Card = styled.div`
    background: #271c25;
    padding: 1em;
    margin-top: 1em;
    border-radius: 0.1em;
    text-align: center;
    @media (${mediaQueryMin.xs}) {
        padding: 3em;
        margin: 0.5em;
    }
    div {
        position: relative;
        height: 5em;
        margin: 0 auto;
    }
    h3 {
        margin: 2em 0;
    }
`;

export const FlexCol = styled(Col)`
    display: flex;
`;

export const PathFig = styled.img`
    position: absolute;
    left: 0;
    top: 30%;
    z-index: -1;
`;

export const Section = styled.section`
    position: relative;
    padding: 3em 0;
`;

export const CTA = styled(Section)`
    background: #271c25;
    text-align: center;
    min-height: 35em;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    justify-content: center;
    padding: 10vh 2em;
`;

export const IconCaption = styled.p`
    width: 90%;
    text-align: center;
`;

export const NewsletterSection = styled(Section)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NewsletterContainer = styled.div`
    margin-top: 2vh;
    padding: 10vw;
    text-align: center;
    max-width: 800px;
    @media (min-width: ${theme.breakpoint.md}) {
        padding: 3vw;
    }
`;

export const NewsletterSubscribeForm = styled.form`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 50% 50%;
    text-align: center;
    @media (max-width: ${theme.breakpoint.xs}) {
        display: block;
    }
    > input {
        grid-column: span 2;
        background: ${theme.colors.white};
        color: ${theme.colors.black};
        @media (max-width: ${theme.breakpoint.xs}) {
            grid-column: none;
        }
    }
`;

export const NewsletterSubscribeInputField = styled(InputField)`
    background: ${theme.colors.secondary} !important;
    font-size: 16px;
    padding: 1em 1.33em;
    color: white !important;
`;

export const NewsletterSubscribeButton = styled.button`
    display: inline-block;
    background: transparent;
    padding: 0.66em 2em;
    grid-column: 2 / span 2;
    border: ${border};
    border-radius: 5px;
    transition: all 0.2s ease;
    font-size: ${size};
    line-height: ${height};
    letter-spacing: ${spacing};
    font-family: ${font};
    font-weight: ${weight};
    color: ${color};
    text-decoration: none;
    margin: 1em 0;

    @media (max-width: ${theme.breakpoint.xs}) {
        grid-column: none;
        width: 100%;
    }

    &:hover {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
        cursor: pointer;
    }
`;

export const CTAContent = styled.div`
    max-width: 60em;
`;

export const ProcessSteps = () => (

    <Section style={{ display: 'flex', alignItems: 'center' }}>
    <Container>
        <Subtitle>Het proces</Subtitle>
        <h2 style={{ paddingBottom: '3em' }}>
            Hoe gaan we je helpen?
        </h2>
        <Process>
            <li>
                <h3>Strategie</h3>
                <p className="introduction">
                    Als startup wil je innoveren en voorop lopen. De
                    eerste stap is een strategie. Wat is je
                    doel, hoe ga je dit bereiken en wie is je ideale gebruiker?
                    Na ons eerste gesprek gaan we hier
                    meteen mee aan de slag, door kwantitatief en
                    kwalitatief onderzoek. Door creatief &
                    innovatief te denken, creëren we de samen de juiste
                    strategie. De basis van jouw (en dus ons) succes.
                </p>
            </li>
            <li>
                <h3>Design</h3>
                <p className="introduction">
                    Wij ontwerpen een technisch hoogstaand
                    eindproduct dat jouw idee goed overbrengt. Een
                    interactief web design, app of platform dat
                    passie en creativiteit uitstraalt. Daarbij hoort
                    een geoptimaliseerde gebruikservaring en een
                    passende user interface. Om dit te bereiken
                    maken we regelmatig prototypes om te evalueren
                    of het design werkt.
                </p>
            </li>
            <li>
                <h3>Development</h3>
                <p className="introduction">
                    Als de basis goed is, kunnen we beginnen met het
                    bouwen van jouw digitale idee. We zijn ooit
                    gestart als webbureau en beschikken over de
                    kennis en expertise om een stabiel product te
                    bouwen dat snel getest kan worden! Jouw passie
                    wordt werkelijkheid.
                </p>
            </li>
        </Process>
    </Container>
    <PathFig src={require('../images/img/startups/path.svg')} />
</Section>
)