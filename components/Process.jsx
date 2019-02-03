import styled from 'styled-components';
import { Container } from 'react-grid-system';
import theme from '../styles/theme';
import TextBlock from './TextBlock';
import { Row, Col } from '../lib/Grid'; // eslint-disable-line

const Step = styled(Col)`
    margin: 3em 0;
`;

const ProcessStepImage = styled.img`
    margin: 1;
    margin-left: 3rem;
    width: 50%;
    text-align: center;
    @media (min-width: ${theme.breakpoints[0]}px) {
        margin-bottom: 4em;
    }
    @media (min-width: ${theme.breakpoints[1]}px) {
        width: 50%;
    }
    @media (min-width: ${theme.breakpoints[2]}px) {
        width: 60%;
    }
    @media (min-width: ${theme.breakpoints[3]}px) {
        margin: 5rem;
        width: 50%;
    }
`;

const Process = () => (
    <Container fluid>
        <Row>
            <Step offset={{ xl: 2.5, lg: 2 }} md={6} lg={2} xl={2}>
                <ProcessStepImage
                    src="/static/img/content/workflow/analyze.svg"
                    alt="Analyze"
                />
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
            <Step offset={{ xl: 0.5, lg: 2 }} md={6} lg={4} xl={2}>
                <ProcessStepImage
                    src="/static/img/content/workflow/strategize.svg"
                    alt="Strategize"
                />
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
            <Step offset={{ xl: 0.5, lg: 2 }} md={12} lg={12} xl={2}>
                <ProcessStepImage
                    src="/static/img/content/workflow/realize.svg"
                    alt="Realize"
                />
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
