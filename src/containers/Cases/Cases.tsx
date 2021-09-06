import React from 'react';
import TextBlock from '../TextBlock/TextBlock';
import {
    Left,
    Right,
    LeftInner,
    StyledRow,
    CenteredRow,
} from './Cases.components';
import Button from '../../components/Button/Button';

const dearlyImg = require('../../images/img/cases/dearly/home.png');
const airchipImg = require('../../images/img/cases/airchip/airchip.png');

const Cases: React.FC = () => (
    <div>
        <StyledRow>
            <Left>
                <LeftInner>
                    <TextBlock
                        subtitle="Dearly"
                        headingType="h3"
                        title="Ondersteuning bij rouwverwerking"
                    >
                        Een nieuwe mobiele rouwapp voor persoonlijke
                        ondersteuning en maatschappelijke ontwikkeling
                    </TextBlock>
                    <Button href="/case/dearly">Bekijk case</Button>
                </LeftInner>
            </Left>
            <Right>
                <img src={dearlyImg} alt="" />
            </Right>
        </StyledRow>
        <StyledRow>
            <Left>
                <LeftInner>
                    <TextBlock
                        subtitle="Airchip"
                        headingType="h3"
                        title="Barman in je broekzak"
                    >
                        Nooit meer in de rij op een festival of evenement:
                        bestel en betaal met Airchip.
                    </TextBlock>
                    <Button href="/case/airchip">Bekijk case</Button>
                </LeftInner>
            </Left>
            <Right>
                <img src={airchipImg} alt="" />
            </Right>
        </StyledRow>
        <CenteredRow>
            <Button wide href="/cases">
                Bekijk meer cases
            </Button>
        </CenteredRow>
    </div>
);

export default Cases;
