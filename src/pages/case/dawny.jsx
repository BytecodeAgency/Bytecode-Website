/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { Checklist, CheckListItem, CaseHeader } from '../../components/Case';
import Layout from '../../layouts/CaseLayout';
import { Container, Row, Col } from '../../lib/Grid';
import { TextAndImage, Gallery, Introduction, Section } from '../../containers/ContentBlocks/ContentBlocks';
import { Big } from '../../components/Typography';
import Header from '../../containers/Header';
import Credits from '../../containers/Credits';
import Deliverables from '../../containers/Deliverables';

const usecase = require('../../images/img/cases/dawny/usecase.png');
const lockup = require('../../images/img/cases/dawny/lockup.png');
const analysing = require('../../images/img/cases/dawny/analysing.jpg');
const graph = require('../../images/img/cases/dawny/graphs.png');
const tools = require('../../images/img/cases/dawny/tools.png');
const smilingGrandparents = require('../../images/img/cases/dawny/smiling_grandparents.jpg');
const usecase2 = require('../../images/img/cases/dawny/usecase2.jpg');
const devices = require('../../images/img/cases/dawny/devices.svg');
const logo = require('../../images/img/cases/dawny/logo.svg')


const pageSettings = {
    title: 'Levens redden met datavisualisatie',
    client: 'Reinier de Graaf Gasthuis',
    image: usecase,
    description:
        'Bytecode werkt samen met het Reiner De Graaf Gasthuis aan valpreventie voor ouderen.',
    keywords: 'ouderen, zorg, platform, webapp, onderzoek',
};

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <Section>
        <TextAndImage padded img={lockup} alt="Nonin apparaat met app">
                <h2>Inroducing Dawny</h2>
                <p class='introduction'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </TextAndImage>
        </Section>
        <Deliverables
            deliverables={['Graphic Design', 'SEO', 'Strategy', 'UX/UI-Design']}
            img={usecase2}
            alt="grootouders die op de kleine passen"
            client="Reinier de Graaf Gasthuis"
            clientLogo={logo}
            clientBio="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        />

        <Section>
        <Introduction>
            <h2>De uitdaging</h2>
            <p class='introduction'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Introduction>
            <TextAndImage img={analysing} alt="Nonin apparaat met app" fluid>
                    <p class="subtitle">Research</p>
                    <h3>Minder analyse. Meer controle</h3>
                    <p class='big'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Minder analyse. Meer controle</p>
            </TextAndImage>
            <TextAndImage img={graph} alt="Nonin apparaat met app" fluid>
                    <h3>Minder analyse. Meer controle</h3>
                    <p class='big'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Minder analyse. Meer controle</p>
            </TextAndImage>
        </Section>
        <Section>
            <TextAndImage img={tools} alt="Nonin apparaat met app" reverse fluid>
                    <p class="subtitle">Design</p>
                    <h3>Inzichtgevende Tools</h3>
                    <p class='big'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Minder analyse. Meer controle</p>
            </TextAndImage>
            <TextAndImage img={tools} alt="Nonin apparaat met app" fluid>
                    <h3>Inzichtgevende Tools</h3>
                    <p class='big'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Minder analyse. Meer controle</p>
            </TextAndImage>
        </Section>
        <Section>
            <TextAndImage img={tools} alt="Nonin apparaat met app">
                    <p class="subtitle">Development</p>
                    <h3>Inzichtgevende Tools</h3>
                    <p class='big'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Minder analyse. Meer controle</p>
            </TextAndImage>
            <TextAndImage img={tools} alt="Nonin apparaat met app" reverse>
                    <h3>Inzichtgevende Tools</h3>
                    <p class='big'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Minder analyse. Meer controle</p>
            </TextAndImage>
        </Section>

        <Gallery width={100}>
         <img src={smilingGrandparents} alt="smiling grandparents" />
        </Gallery>
        <Section>
        <TextAndImage padded fluid img={tools} alt="Nonin apparaat met app" >
            <p class="subtitle">Resultaten</p>
            <h2>Inzichtgevende Tools</h2>
            <p class='big'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Minder analyse. Meer controle</p>
            <Gallery width={50}>
                <h1>50%</h1>
                <h1>2x</h1>
            </Gallery>
        </TextAndImage>
        </Section>

        <Credits
            client='Dawny'
        />
    </Layout>
);

export default Case;
