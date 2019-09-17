import React from 'react';
import PropTypes from 'prop-types';
import AllSocials from '../../lib/Socials';
import {
    TeamMemberContainer,
    TeamMemberName,
    TeamMemberPhoto,
    TeamMemberWrapper,
} from './TeamMember.components';

const getAltText = (name, alt) => {
    if (alt) {
        return alt;
    }
    return `Een foto van ${name}`;
};

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

TeamMember.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    link: PropTypes.string,
    email: PropTypes.string,
    github: PropTypes.string,
    instagram: PropTypes.string,
    facebook: PropTypes.string,
    twitter: PropTypes.string,
};

TeamMember.defaultProps = {
    link: undefined,
    email: undefined,
    github: undefined,
    instagram: undefined,
    facebook: undefined,
    twitter: undefined,
};
