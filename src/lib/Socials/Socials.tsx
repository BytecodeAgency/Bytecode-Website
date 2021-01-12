import React from 'react';
import { SocialsContainer, SocialIcon } from './Socials.components';
import AllSocialsProps from './Socials.types';

const AllSocials: React.FC<AllSocialsProps> = ({
    isFooter,
    link,
    email,
    github,
    facebook,
    twitter,
    linkedin,
    instagram,
}) => (
    <SocialsContainer isFooter={isFooter}>
        <SocialIcon url={link} social="link" />
        <SocialIcon url={email} social="email" />
        <SocialIcon url={github} social="github" />
        <SocialIcon url={facebook} social="facebook" />
        <SocialIcon url={twitter} social="twitter" />
        <SocialIcon url={instagram} social="instagram" />
        <SocialIcon url={linkedin} social="linkedin" />
    </SocialsContainer>
);

export default AllSocials;
