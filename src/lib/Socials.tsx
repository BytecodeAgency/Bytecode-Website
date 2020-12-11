import React from 'react';
import styled from 'styled-components';
import socialIcons from './SocialIcons';

const FooterSocialIcon = styled.a`
    display: inline;
    text-decoration: none;
    margin: 1em 0;
    svg {
        display: inline-block;
        width: 1.33em;
    }
`;
type Social =
    | 'facebook'
    | 'twitter'
    | 'instagram'
    | 'linkedin'
    | 'email'
    | 'link'
    | 'github';

export const getMinifiedSocial = (social: Social) => {
    const socialHtml = socialIcons[social];
    const twoOrMoreWhitespaceRegex = /\s{2,}/g;
    const minifiedHtml = socialHtml.replace(twoOrMoreWhitespaceRegex, ' ');
    return minifiedHtml;
};

const Icon = styled.span`
    display: inline-block;
    margin: 0 0.5rem;
    &:first-child {
        margin-left: 0;
    }
`;

interface SocialIconProps {
    url?: string;
    social: Social;
}

export const SocialIcon: React.FC<SocialIconProps> = ({
    url = undefined,
    social,
}) => {
    if (!url) {
        return null;
    }
    return (
        <FooterSocialIcon href={url} target="_blank" rel="noopener">
            <Icon
                dangerouslySetInnerHTML={{ __html: getMinifiedSocial(social) }}
            />
        </FooterSocialIcon>
    );
};
interface ContainerProps {
    isFooter?: boolean;
}
const SocialsContainer =
    styled.div <
    ContainerProps >
    `
    display: flex;
    justify-content: ${(props) => (props.isFooter ? 'left' : 'center')};
    margin-top: ${(props) => (props.isFooter ? '-40px' : 'initial')};
`;

interface AllSocialsProps {
    isFooter?: boolean;
    link?: string;
    email?: string;
    github?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
}
const AllSocials: React.FC<AllSocialsProps> = ({
    isFooter = false,
    link = undefined,
    email = undefined,
    github = undefined,
    facebook = undefined,
    twitter = undefined,
    linkedin = undefined,
    instagram = undefined,
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
