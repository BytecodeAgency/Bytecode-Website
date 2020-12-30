import styled from 'styled-components';
import React from 'react';
import socialIcons from './SocialIcons';
import { Social, SocialIconProps } from './Socials.types';

const FooterSocialIcon = styled.a`
    display: inline;
    text-decoration: none;
    margin: 1em 0;
    svg {
        display: inline-block;
        width: 1.33em;
    }
`;

const getMinifiedSocial = (social: Social): string => {
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

export const SocialIcon: React.FC<SocialIconProps> = ({ url, social }) => {
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

export const SocialsContainer = styled.div<{ isFooter?: boolean }>`
    display: flex;
    justify-content: ${(props) => (props.isFooter ? 'left' : 'center')};
    margin-top: ${(props) => (props.isFooter ? '-40px' : 'initial')};
`;
