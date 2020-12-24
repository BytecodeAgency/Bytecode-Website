export type Social =
    | 'facebook'
    | 'twitter'
    | 'instagram'
    | 'linkedin'
    | 'email'
    | 'link'
    | 'github';

export interface SocialIconProps {
    url?: string;
    social: Social;
}

export default interface AllSocialsProps {
    isFooter?: boolean;
    link?: string;
    email?: string;
    github?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
}
