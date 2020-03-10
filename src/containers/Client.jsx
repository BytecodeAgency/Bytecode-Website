import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const Client = ({ logo, name, description }) => (
    <Content>
        <div>{logo ? <Logo src={logo} alt={name} /> : <h5>{name}</h5>}</div>
        <Bio className="caption">{description}</Bio>
    </Content>
);

export default Client;

Client.propTypes = {
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

Client.defaultProps = {
    logo: null,
};
