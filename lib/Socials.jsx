import styled from 'styled-components';
import socialIcons from './SocialIcons';

const FooterSocialIcon = styled.a`
    display: inline;
    text-decoration: none;
    svg {
        display: inline-block;
        width: 3rem;
    }
`;

// eslint-disable-next-line arrow-parens
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

/* eslint-disable react/no-danger */
export const SocialIcon = ({ url, social }) => {
    if (!url) {
        return '';
    }
    return (
        <FooterSocialIcon href={url}>
            <Icon
                dangerouslySetInnerHTML={{ __html: getMinifiedSocial(social) }}
            />
        </FooterSocialIcon>
    );
};

const SocialsContainer = styled.div`
    display: flex;
    justify-content: center;
`;

// eslint-disable-next-line object-curly-newline, max-len, prettier/prettier
const AllSocials = ({ link, email, facebook, twitter, linkedin, instagram }) => (
    <SocialsContainer>
        <SocialIcon url={link} social="link" />
        <SocialIcon url={email} social="email" />
        <SocialIcon url={facebook} social="facebook" />
        <SocialIcon url={twitter} social="twitter" />
        <SocialIcon url={instagram} social="instagram" />
        <SocialIcon url={linkedin} social="linkedin" />
    </SocialsContainer>
);

export default AllSocials;
