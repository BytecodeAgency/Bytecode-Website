import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const plusBullet = require('../images/icons/ui/plus-bullet.svg');

const { colors, mediaQueryMin, containerWidth } = theme;
const { secondary } = colors;

const DeliverablesBase = styled.section`
    @media (${mediaQueryMin.xs}) {
        display: grid;
        grid-template-columns: 10vw 1fr 1fr 1fr 1fr 1fr 1fr 10vw;
        grid-template-rows: 2fr 3em 3fr;
        grid-gap: 2em;
        align-content: center;
    }
`;

const DeliverablesContent = styled.div`
    grid-row: 2/4;
    grid-column: 2/9;
    z-index: 1;
    background: ${secondary};
    padding: 10vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ClientInfo = styled.div`
    grid-row: 1;
    grid-column: 5/8;
    padding: 1em;
    display: flex;
    justify-content: flex-end;
    & > * {
        width: 50%;
        padding: 1em;
    }
`;

const Figure = styled.figure`
    grid-row: 1/3;
    grid-column: 1/5;
    overflow: hidden;
    align-self: self-end;
`;

const List = styled.ul`
    columns: 3;
    list-style-position: outside;
    list-style-image: url('${plusBullet}');
`;

const LI = styled.li`
    margin: 0 0.1em;
    margin-bottom: 0.66em;
    font-size: 1.11em;
`;

const Deliverables = ({img, client}) => {
    return (
        <DeliverablesBase>
            <DeliverablesContent>
                <p class="subtitle">Deliverables</p>
                <List>
                    <LI>Workflow Strategy</LI>
                    <LI>API-development</LI>
                    <LI>Cloud deployment</LI>
                    <LI>Automatische deploystaat</LI>
                    <LI>UX/UI-Design</LI>
                    <LI>Service Design</LI>
                    <LI>Backend Development</LI>
                </List>
            </DeliverablesContent>
            <ClientInfo>
                <h6>{client}</h6>
                <p class="caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </ClientInfo>
            <Figure>
                <img alt="test" src={img} />
            </Figure>
        </DeliverablesBase>
    )
}

export default Deliverables;
