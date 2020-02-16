/* eslint-disable max-len */
import React from 'react';
import { Checklist, CheckListItem, CaseHeader } from '../../components/Case';
import Layout from '../../layouts/MainLayout';
import { Container, Row, Col } from '../../lib/Grid';
import { TextAndImage } from '../../containers/ContentBlocks/ContentBlocks';
import { Big } from '../../components/Typography';
import Header from '../../containers/Header';
import ImageBlock from '../../components/ImageBlock';
import Credits from '../../containers/Credits';
import Deliverables from '../../containers/Deliverables';

const pageSettings = {
    title: 'Dawny',
    description:
        'Bytecode werkt samen met het Reiner De Graaf Gasthuis aan valpreventie voor ouderen.',
    keywords: 'ouderen, zorg, platform, webapp, onderzoek',
};

const usecase = require('../../images/img/cases/dawny/usecase.png');
const lockup = require('../../images/img/cases/dawny/lockup.png');
const analysing = require('../../images/img/cases/dawny/analysing.jpg');
const graph = require('../../images/img/cases/dawny/graphs.png');
const tools = require('../../images/img/cases/dawny/tools.png');
const smilingGrandparents = require('../../images/img/cases/dawny/smiling_grandparents.jpg');
const usecase2 = require('../../images/img/cases/dawny/usecase2.jpg');
const devices = require('../../images/img/cases/dawny/devices.svg');

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <Header
            title="Levens redden met datavisualisatie"
            subtitle="Reinier De Graaf Gasthuis"
            tagline="Wij hebben een systeem gebouwd waarmee dokters de gezondheid van ouderen langdurig kunnen meten en zo ziekten en ongevallen proactief te voorkomen"
            img={usecase}
        >
        </Header>
        <TextAndImage padded img={devices} alt="Nonin apparaat met app">
                <h2>Inroducing Dawny</h2>
                <p class='introduction'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </TextAndImage>
        <Deliverables
            deliverables={['Graphic Design', 'SEO', 'Strategy', 'UX/UI-Design']}
            img={usecase2}
            alt="grootouders die op de kleine passen"
            client="Reinier de Graaf Gasthuis"
            clientBio="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Container>
            <Row>
                <Col md={6}>
                <h2>De uitdaging</h2>
                <p class='introduction'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Col>
            </Row>
        </Container>
        <TextAndImage img={analysing} alt="Nonin apparaat met app" fluid>
                <p class="subtitle">Research</p>
                <h2>Minder analyse. Meer controle</h2>
                <p class='big'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Minder analyse. Meer controle</p>
        </TextAndImage>
        <TextAndImage img={graph} alt="Nonin apparaat met app" fluid>
                <p class="subtitle">Research</p>
                <h2>Minder analyse. Meer controle</h2>
                <p class='big'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Minder analyse. Meer controle</p>
        </TextAndImage>
        <TextAndImage padded img={tools} alt="Nonin apparaat met app" reverse fluid>
                <h2>Inzichtgevende Tools</h2>
                <p class='big'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Minder analyse. Meer controle</p>
        </TextAndImage>
        <ImageBlock
            src={smilingGrandparents}
        />
        <Container>
            <Row>
                <Col md={6}>
                    <p class="subtitle">Resultaten</p>
                    <h2>Langere en gelukkigere levens</h2>
                </Col>
                <Col md={6}>
                    <p class="big">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                </Col>
            </Row>
        </Container>
        <Credits
            client='Dawny'
        />
    </Layout>
);

export default Case;
