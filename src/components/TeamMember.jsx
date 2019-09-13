import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import AllSocials from '../lib/Socials';
import { Col } from '../lib/Grid';

const { mediaQueryMin } = theme;

const TeamMemberWrapper = styled.div`
    @media (${mediaQueryMin.md}) {
        padding: 3rem 0 3rem 0;
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

const TeamMemberPhoto = styled.figure`
    @media (${mediaQueryMin.xs}) {
        height: 30rem;
    }
    margin: 1rem;
    overflow: hidden;

    transition: 0.5s;
    position: relative;

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
        width: auto;
    }
`;

const getAltText = (name, alt) => {
    if (alt) {
        return alt;
    }
    return `Een foto van ${name}`;
};

const TeamMemberName = styled.h4`
    font-size: 0.9em;
`;

const TeamMemberContainer = styled(Col)`
    text-align: center;
`;

const TeamMember = props => {
    const {
        name,
        title,
        img,
        alt,
        link,
        email,
        github,
        instagram,
        facebook,
        twitter,
    } = props;

    return (
        <TeamMemberContainer sm={6} md={6} lg={3} xl={3}>
            <TeamMemberWrapper>
                <TeamMemberPhoto img={img}>
                    <img src={img} alt={getAltText(name, alt)} />
                </TeamMemberPhoto>
                <TeamMemberName>{name}</TeamMemberName>
                <p>{title}</p>
                <AllSocials
                    link={link}
                    email={email}
                    github={github}
                    instagram={instagram}
                    facebook={facebook}
                    twitter={twitter}
                />
            </TeamMemberWrapper>
        </TeamMemberContainer>
    );
};

export default TeamMember;
