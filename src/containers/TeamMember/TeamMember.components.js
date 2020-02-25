import styled from 'styled-components';
import theme from '../../styles/theme';
import { Col } from '../../lib/Grid';

const { mediaQueryMin } = theme;

export const TeamMemberWrapper = styled.div`
    @media (${mediaQueryMin.md}) {
        padding: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 1em 1em;
    }
    transition: 0.5s;
    * {
        transition: 0.5s;
    }
    & > div {
        opacity: 0;
        transform: translate(0, -3em);
    }
    & > p {
        opacity: 1;
        height: 3em;
        transition-delay: 0.5s;
    }
    &:hover {
        & figure {
            background: ${theme.colors.red};
        }
    }
    &:hover {
        & img {
            transform: scale(1);
        }
        & figure::before {
            background-color: ${theme.colors.green};
            transform: translate(0, 30%) scale(0.85);
        }
        & > div {
            opacity: 1;
            transform: translate(0, -4em);
        }
        & > p {
            opacity: 0;
            transition-delay: 0s;
        }
    }
`;

export const TeamMemberPhoto = styled.figure`
    @media (${mediaQueryMin.xs}) {
        height: 30rem;
    }
    margin: 1rem;
    overflow: hidden;
    height: 25em;
    transition: 0.5s;
    position: relative;
    @media (${mediaQueryMin.lg}) {
        height: 30em;
    }

    &::before {
        content: '';
        width: 90%;
        height: 80%;
        background: ${theme.colors.mediumgray};
        position: absolute;
        left: 5%;
        transform: translate(0, 30%) scale(0.9);
        display: flex;
        top: -10%;
        transition: 0.3s ease;
    }
    img {
        transform: scale(0.95);
        transition: 0.3s ease;
        font-size: 3em;
        color: ${theme.colors.green} !important;
        min-height: 5em;
        height: 100%;
        max-width: 100%;
        object-fit: cover;
    }
    @media (${mediaQueryMin.xs}) {
        img {
            position: absolute;
            left: 0px;
            bottom: 0px;
        }
    }
`;

export const TeamMemberName = styled.h4`
    font-size: 0.9em;
`;

export const TeamMemberContainer = styled(Col)`
    text-align: center;
`;
