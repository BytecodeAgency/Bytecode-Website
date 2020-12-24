import React from 'react';
import AllSocials from '../../lib/Socials';
import {
    TeamMemberContainer,
    TeamMemberName,
    TeamMemberPhoto,
    TeamMemberWrapper,
} from './TeamMember.components';
import { Caption } from '../../components/Typography';

const getAltText = (name: string, alt?: string) => {
    if (alt) {
        return alt;
    }
    return `Een foto van ${name}`;
};

interface TeamMemberProps {
    name: string;
    title: string;
    img: string;
    alt?: string;
    link?: string;
    email?: string;
    github?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
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
    linkedin,
}) => {
    return (
        <TeamMemberContainer>
            <TeamMemberWrapper>
                <TeamMemberPhoto>
                    <img src={img} alt={getAltText(name, alt)} />
                </TeamMemberPhoto>
                <TeamMemberName>{name}</TeamMemberName>
                <Caption>{title}</Caption>
                <AllSocials
                    link={link}
                    email={email}
                    github={github}
                    instagram={instagram}
                    facebook={facebook}
                    twitter={twitter}
                    linkedin={linkedin}
                />
            </TeamMemberWrapper>
        </TeamMemberContainer>
    );
};

export default TeamMember;
