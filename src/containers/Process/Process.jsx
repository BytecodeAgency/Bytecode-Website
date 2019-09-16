import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import TextBlock from '../TextBlock/TextBlock';
import { Container, Row, Col } from '../../lib/Grid';

const step1 = require('../../images/img/content/workflow/analyze.svg');
const step2 = require('../../images/img/content/workflow/strategize.svg');
const step3 = require('../../images/img/content/workflow/realize.svg');

const { mediaQueryMin } = theme;

const Step = styled(Col)`
    @media (${mediaQueryMin.xs}) {
        margin: 0 2em;
    }
`;

const ProcessStepImage = styled.img`
    margin: 5rem 5rem 5rem 3rem;
    height: 400px;
    width: auto;
    text-align: center;
    @media (${mediaQueryMin.xs}) {
        margin-bottom: 4em;
    }
    @media (${mediaQueryMin.sm}) {
        width: 50%;
    }
`;

const Process = () => (
    <Container>
        <Row gutterWidth={30}>
            <Step md={5.55} lg={3.55}>
                <ProcessStepImage src={step1} alt="Analyze" />
                <TextBlock
                    className="padded"
                    subtitle="Stap 1"
                    headingType="h2"
                    title="Analyze"
                >
                    Voordat we starten met ontwikkelen, maken we eerst een
                    gedetailleerde analyse. Dit stelt ons in staat om een helder
                    en volledig overzicht te krijgen van de huidige situatie.
                    Hierdoor kunnen wij de pijnpunten in beeld brengen en
                    analyseren welke punten het meeste prioriteit hebben.
                </TextBlock>
            </Step>
            <Step md={5.55} lg={3.55}>
                <ProcessStepImage src={step2} alt="Strategize" />
                <TextBlock
                    subtitle="Stap 2"
                    headingType="h2"
                    title="Strategize"
                >
                    Vervolgens maken wij een duidelijke strategie, waarin we
                    uiteenzetten welke punten we aan gaan pakken en vooral op
                    welke manier we dat doen. Bij het ontwikkelen van deze
                    strategie wegen we de verschillende opties af, zodat we het
                    best haalbare resultaat met het oog op de toekomst gaan
                    halen.
                </TextBlock>
            </Step>
            <Step md={5.55} lg={3.55}>
                <ProcessStepImage src={step3} alt="Realize" />
                <TextBlock subtitle="Stap 3" headingType="h2" title="Realize">
                    Nadat we alles helemaal hebben geanalyseerd en gepland, is
                    het tijd om de handen uit de mouwen te steken en het plan te
                    realiseren. Hierbij werken we volgens de scrum-methode. Op
                    het moment dat het plan uitgevoerd is, is het tijd om het
                    resultaat te analyzeren en om te kijken hoe het nóg beter
                    kan. We blijven dus verbeteren en doorontwikkelen.
                </TextBlock>
            </Step>
        </Row>
    </Container>
);

export default Process;
