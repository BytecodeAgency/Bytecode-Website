import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const plusBullet = require('../images/icons/ui/plus-bullet.svg');

const { colors, mediaQueryMin, containerWidth } = theme;
const { secondary } = colors;

const DeliverablesBase = styled.section`
    @media (${mediaQueryMin.sm}) {
        display: grid;
        grid-template-columns: 10vw 1fr 1fr 1fr 1fr 1fr 1fr 10vw;
        grid-template-rows: auto 3em auto;
        grid-gap: 2em;
        align-content: center;
        align-self: end;
    }
`;

const DeliverablesContent = styled.div`
    grid-row: 2/4;
    grid-column: 2/9;
    z-index: 1;
    background: ${secondary};
    padding: em 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (${mediaQueryMin.xs}) {
        columns: 2;
        padding: 5vw;
    }
    @media (${mediaQueryMin.md}) {
        columns: 3;
        padding: 10em 10vw;
    }
`;

const ClientInfo = styled.div`
    grid-row: 1;
    grid-column: 5/8;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    flex-direction: column;
    & > * {
        padding: 1em;
    }
    @media (${mediaQueryMin.md}) {
        max-height: 10em;
        flex-direction: row;
        & > * {
            width: 50%;
        }
    }
    align-self: flex-end;

`;

const ClientInfoHeader = styled.div`
    padding: 0 1em;
`;

const Figure = styled.figure`
    grid-row: 1/3;
    grid-column: 1/5;
    overflow: hidden;
    align-self: self-end;
`;

const List = styled.ul`
    @media (${mediaQueryMin.xs}) {
        columns: 2;
        list-style-position: outside;
        list-style-image: url('${plusBullet}');
    }
    @media (${mediaQueryMin.md}) {
        columns: 3;
    }


`;

const LI = styled.li`
    margin: 0 0.1em;
    margin-bottom: 0.66em;
    font-size: 1.11em;
`;

const Logo = styled.img`
    height: 1em;
    width: auto;
    margin: 0.3em;
    opacity: 0.66;
`;

const Deliverables = ({img, client, clientBio, clientLogo}) => {
    return (
        <DeliverablesBase>
            <ClientInfo>
                <ClientInfoHeader>
                    <Logo src={clientLogo} />
                    <h5>{client}</h5>
                </ClientInfoHeader>
                <p class="caption">{clientBio}</p>
            </ClientInfo>
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
            {img &&
            <Figure>
                <img alt="test" src={img} />
            </Figure>
            }
        </DeliverablesBase>
    )
}

export default Deliverables;
