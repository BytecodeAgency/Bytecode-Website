import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
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

export const getMinifiedSocial = (social: any) => {
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
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

type OwnSocialIconProps = {
    url?: string,
    social: string,
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'SocialIconProps' circularly references... Remove this comment to see the full error message
type SocialIconProps = OwnSocialIconProps & typeof SocialIcon.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'SocialIcon' implicitly has type 'any' because it ... Remove this comment to see the full error message
export const SocialIcon = ({ url, social }: SocialIconProps) => {
    if (!url) {
        return '';
    }
    return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FooterSocialIcon href={url} target="_blank" rel="noopener">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Icon
                dangerouslySetInnerHTML={{ __html: getMinifiedSocial(social) }}
            />
        </FooterSocialIcon>
    );
};

SocialIcon.defaultProps = {
    url: undefined,
};

const SocialsContainer = styled.div`
    display: flex;
    justify-content: ${(props: any) => (props.isFooter ? 'left' : 'center')};
    margin-top: ${(props: any) => (props.isFooter ? '-40px' : 'initial')};
`;

type OwnAllSocialsProps = {
    isFooter?: boolean,
    link?: string,
    email?: string,
    github?: string,
    facebook?: string,
    twitter?: string,
    linkedin?: string,
    instagram?: string,
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'AllSocialsProps' circularly references... Remove this comment to see the full error message
type AllSocialsProps = OwnAllSocialsProps & typeof AllSocials.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'AllSocials' implicitly has type 'any' because it ... Remove this comment to see the full error message
const AllSocials = ({
    isFooter,
    link,
    email,
    github,
    facebook,
    twitter,
    linkedin,
    instagram,
}: AllSocialsProps) => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <SocialsContainer isFooter={isFooter}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <SocialIcon url={link} social="link" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <SocialIcon url={email} social="email" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <SocialIcon url={github} social="github" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <SocialIcon url={facebook} social="facebook" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <SocialIcon url={twitter} social="twitter" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <SocialIcon url={instagram} social="instagram" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <SocialIcon url={linkedin} social="linkedin" />
    </SocialsContainer>
);

export default AllSocials;

AllSocials.defaultProps = {
    isFooter: false,
    link: undefined,
    email: undefined,
    github: undefined,
    facebook: undefined,
    twitter: undefined,
    linkedin: undefined,
    instagram: undefined,
};
