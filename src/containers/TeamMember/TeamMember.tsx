import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../lib/Socials' was resolved to '/home/... Remove this comment to see the full error message
import AllSocials from '../../lib/Socials';
import {
    TeamMemberContainer,
    TeamMemberName,
    TeamMemberPhoto,
    TeamMemberWrapper,
} from './TeamMember.components';

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'name' implicitly has an 'any' type.
const getAltText = (name, alt) => {
    if (alt) {
        return alt;
    }
    return `Een foto van ${name}`;
};

interface TeamMemberProps {
    name: string;
    title: string;
    img: string;
    alt: string;
    link?: string;
    email?: string;
    github?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
}

// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'props'.
const TeamMember: React.FC<TeamMemberProps> = ({
    name,
    title,
    img,
    alt,
    link = undefined,
    email = undefined,
    github = undefined,
    instagram = undefined,
    facebook = undefined,
    twitter = undefined,
}) => {
    return (
        <TeamMemberContainer>
            <TeamMemberWrapper>
                <TeamMemberPhoto img={img}>
                    <img src={img} alt={getAltText(name, alt)} />
                </TeamMemberPhoto>
                <TeamMemberName>{name}</TeamMemberName>
                <p className="caption">{title}</p>
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
