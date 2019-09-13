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

export const getMinifiedSocial = social => {
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

export const SocialIcon = ({ url, social }) => {
    if (!url) {
        return '';
    }
    return (
        <FooterSocialIcon href={url} target="_blank" rel="noopener">
            <Icon
                dangerouslySetInnerHTML={{ __html: getMinifiedSocial(social) }}
            />
        </FooterSocialIcon>
    );
};

const SocialsContainer = styled.div`
    display: flex;
    justify-content: ${props => (props.isFooter ? 'left' : 'center')};
    margin-top: ${props => (props.isFooter ? '-40px' : 'initial')};
`;

const AllSocials = ({
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
