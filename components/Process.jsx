import styled from 'styled-components';
import theme from '../styles/theme';
import TextBlock from './TextBlock';
import { Row, Col } from '../lib/Grid'; // eslint-disable-line

const ContentBlockWrapper = styled.section`
    background-color: ${theme.colors.mediumgray};
    margin: 5% 0% 5% 5%;
    padding: 7.5% 5%;
    position: relative;
    z-index: 100;
`;

const ProcessStepImage = styled.img`
    height: 60rem;
    max-height: 30vh;
    margin-bottom: 5rem;
    @media (max-width: ${theme.breakpoints[2]}px) {
        margin-top: 10rem;
    }
`;

const Process = () => (
    <ContentBlockWrapper>
        <Row>
            <Col md={4} lg={3}>
                <ProcessStepImage
                    src="/static/img/content/workflow/analyze.svg"
                    alt="Analyze"
                />
                <TextBlock subtitle="Stap 1" headingType="h2" title="Analyze">
                    Voordat we starten met ontwikkelen, maken we eerst een
                    gedetailleerde analyse. Dit stelt ons in staat om een helder
                    en volledig overzicht te krijgen van de huidige situatie.
                    Hierdoor kunnen wij de pijnpunten in beeld brengen en
                    analyseren welke punten het meeste prioriteit hebben.
                </TextBlock>
            </Col>
            <Col offset={{ lg: 1 }} md={4} lg={3}>
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
            </Col>
            <Col offset={{ lg: 1 }} md={4} lg={3}>
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
            </Col>
        </Row>
    </ContentBlockWrapper>
);

export default Process;
