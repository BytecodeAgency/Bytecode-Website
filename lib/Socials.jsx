import styled from 'styled-components';
import theme from '../styles/theme';

const socialIconFillColor = theme.colors.primary;

const FooterSocialIcon = styled.a`
    display: inline;
    text-decoration: none;
    svg {
        display: inline-block;
        width: 3rem;
        margin-right: 1rem;
    }
`;

/* eslint-disable max-len */
export const socialIcons = {
    facebook: `
        <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 57.5 57.5"><defs><style>.cls-1{fill:${socialIconFillColor};}.cls-2{fill:none;stroke:${socialIconFillColor};stroke-miterlimit:10;stroke-width:0.5px;}</style>
        </defs><title>Facebook</title>
        <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_4" data-name="Layer 4">
        <path class="cls-1" d="M25.32,45.75V30.6H20.25v-6h5.07V19.84c0-5.15,3.15-7.95,7.75-7.95a44.14,44.14,0,0,1,4.64.23v5.39H34.52c-2.5,0-3,1.19-3,2.93v4.15h5.64l-.77,6H31.54V45.75"/>
        <circle class="cls-2" cx="28.75" cy="28.75" r="28.5"/>
        </g>
        </g>
        </svg>
    `,
    twitter: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.5 57.5">
        <defs>
        <style>.cls-1{fill:${socialIconFillColor};}.cls-2{fill:none;stroke:${socialIconFillColor};stroke-miterlimit:10;stroke-width:0.5px;}</style>
        </defs><title>Twitter</title>
        <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_4" data-name="Layer 4">
        <path class="cls-1" d="M44.28,22.73c0,.3,0,.61,0,.92,0,9.34-7.11,20.1-20.1,20.1a20,20,0,0,1-10.85-3.17,16,16,0,0,0,1.71.09,14.18,14.18,0,0,0,8.77-3,7.09,7.09,0,0,1-6.61-4.9,9.82,9.82,0,0,0,1.34.11,7.65,7.65,0,0,0,1.86-.24,7.07,7.07,0,0,1-5.67-6.94v-.09a7,7,0,0,0,3.19.9,7.06,7.06,0,0,1-3.15-5.88,6.94,6.94,0,0,1,1-3.57,20,20,0,0,0,14.56,7.39,8.62,8.62,0,0,1-.17-1.61A7.07,7.07,0,0,1,42.38,18a14,14,0,0,0,4.48-1.7,7,7,0,0,1-3.1,3.89,14.16,14.16,0,0,0,4.06-1.09,15.33,15.33,0,0,1-3.54,3.65Z"/>
        <circle class="cls-2" cx="28.75" cy="28.75" r="28.5"/></g></g>
        </svg>
    `,
    instagram: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.5 57.5">
        <defs>
        <style>.cls-1{fill:${socialIconFillColor};}.cls-2{fill:none;stroke:${socialIconFillColor};stroke-miterlimit:10;stroke-width:0.5px;}</style>
        </defs>
        <title>Instagram</title>
        <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_4" data-name="Layer 4">
        <path class="cls-1" d="M29,20.79a8.12,8.12,0,1,0,8.12,8.12A8.11,8.11,0,0,0,29,20.79Zm0,13.4a5.28,5.28,0,1,1,5.28-5.28A5.29,5.29,0,0,1,29,34.19ZM39.37,20.46a1.9,1.9,0,1,1-1.9-1.89A1.89,1.89,0,0,1,39.37,20.46Zm5.38,1.92a9.39,9.39,0,0,0-2.56-6.64,9.4,9.4,0,0,0-6.64-2.55c-2.61-.15-10.45-.15-13.07,0a9.44,9.44,0,0,0-6.64,2.55,9.4,9.4,0,0,0-2.55,6.63c-.15,2.62-.15,10.46,0,13.07a9.4,9.4,0,0,0,2.55,6.64,9.47,9.47,0,0,0,6.64,2.56c2.62.15,10.46.15,13.07,0a9.37,9.37,0,0,0,6.64-2.56,9.46,9.46,0,0,0,2.56-6.64c.14-2.61.14-10.44,0-13.06ZM41.37,38.25a5.37,5.37,0,0,1-3,3c-2.09.83-7,.64-9.34.64s-7.26.18-9.34-.64a5.37,5.37,0,0,1-3-3c-.83-2.09-.63-7-.63-9.34s-.19-7.26.63-9.33a5.35,5.35,0,0,1,3-3c2.09-.82,7-.63,9.34-.63s7.26-.19,9.34.63a5.38,5.38,0,0,1,3,3c.82,2.08.63,7,.63,9.33S42.19,36.17,41.37,38.25Z"/><circle class="cls-2" cx="28.75" cy="28.75" r="28.5"/>
        </g>
        </g>
        </svg>
    `,
    linkedin: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.5 57.5">
        <defs>
        <style>.cls-1{fill:${socialIconFillColor};}.cls-2{fill:none;stroke:${socialIconFillColor};stroke-miterlimit:10;stroke-width:0.5px;}</style>
        </defs>
        <title>Linkedin</title>
        <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_4" data-name="Layer 4">
        <path class="cls-1" d="M21.08,43.24H14.75V22.88h6.33ZM17.91,20.11a3.68,3.68,0,1,1,3.66-3.7A3.7,3.7,0,0,1,17.91,20.11ZM44.74,43.24H38.43V33.33c0-2.36,0-5.39-3.28-5.39s-3.8,2.57-3.8,5.22V43.24H25V22.88H31.1v2.78h.09a6.66,6.66,0,0,1,6-3.29c6.4,0,7.58,4.22,7.58,9.69V43.24Z"/>
        <circle class="cls-2" cx="28.75" cy="28.75" r="28.5"/>
        </g>
        </g>
        </svg>
    `,
};

/* eslint-disable react/no-danger */
export const SocialIcon = ({ url, social }) => (
    <FooterSocialIcon href={url}>
        <span dangerouslySetInnerHTML={{ __html: socialIcons[social] }} />
    </FooterSocialIcon>
);

const AllSocials = () => (
    <div>
        <SocialIcon url="#" social="facebook" />
        <SocialIcon url="#" social="twitter" />
        <SocialIcon url="#" social="instagram" />
        <SocialIcon url="#" social="linkedin" />
    </div>
);

export default AllSocials;
