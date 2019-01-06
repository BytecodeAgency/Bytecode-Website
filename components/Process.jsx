import styled from 'styled-components';
import theme from '../styles/theme';
import TextBlock from './TextBlock';
import { Row, Col } from '../lib/Grid'; // eslint-disable-line

const ContentBlockWrapper = styled.section`
    background-color: ${theme.colors.mediumgray};
    margin: 2rem 0% 10rem 4rem;
    padding: 7.5% 5%;
    position: relative;
    z-index: 100;
`;

const ProcessStepImage = styled.img`
    width: 75%;
    margin-top: 2rem;
    @media (min-width: ${theme.breakpoints[0]}px) {
        margin-bottom: 0rem;
    }
    @media (min-width: ${theme.breakpoints[1]}px) {
        margin-bottom: 0rem;
        width: 50%;
        height: 60rem;
    }
    @media (min-width: ${theme.breakpoints[2]}px) {
        margin-bottom: 0rem;
        width: 60%;
        height: 60rem;
    }
    @media (min-width: ${theme.breakpoints[3]}px) {
        margin-bottom: 15rem;
        width: 100%;
        height: 60rem;
    }
`;

const Process = () => (
    <ContentBlockWrapper>
        <Row>
            <Col md={6} lg={4} xl={3}>
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
            <Col offset={{ xl: 0.75 }} md={6} lg={4} xl={3}>
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
            <Col offset={{ xl: 0.75 }} md={12} lg={4} xl={3}>
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
