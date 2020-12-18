import React from 'react';

import styled from 'styled-components';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Container' was resolved to '/home/tiko-u... Remove this comment to see the full error message
import Container from './Container';
import theme from '../styles/theme';

const { mediumgray } = theme.colors;
const { sm } = theme.breakpoint;

const Content = styled(Container)`
    padding: 1em;
    background: ${mediumgray};
    padding: 5vh 0;
    display: flex;
    justify-content: center;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 1em;
    @media (${sm}) {
        align-items: center;
        flex-direction: row !important;
        justify-content: space-around;
        flex-basis: 50%;
        margin: 0 5sem;
        & > * {
            width: 50%;
            max-width: 75rem;
        }
        * {
            margin: 0;
        }
    }
`;

const Bio = styled.p`
    opacity: 0.5;
`;

const Logo = styled.img`
    height: 2em;
    margin: 1em 0;
    @media (${sm}) {
        height: 3rem;
        margin: 0;
    }
    width: unset;
`;

type OwnProps = {
    logo?: string,
    name: string,
    description: string,
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof Client.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'Client' implicitly has type 'any' because it does... Remove this comment to see the full error message
const Client = ({ logo, name, description }: Props) => (
    <Content>
        <div>{logo ? <Logo src={logo} alt={name} /> : <h5>{name}</h5>}</div>

        <Bio className="caption">{description}</Bio>
    </Content>
);

export default Client;

Client.defaultProps = {
    logo: null,
};
