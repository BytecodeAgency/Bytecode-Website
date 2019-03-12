import styled from 'styled-components';
import theme from '../styles/theme';

const socialIconFillColor = theme.colors.primary;

const FooterSocialIcon = styled.a`
    display: inline;
    text-decoration: none;
    svg {
        display: inline-block;
        width: 3rem;
    }
`;

/* eslint-disable max-len */
export const socialIcons = {
    facebook: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.5 58.5">
            <defs>
                <style>
                    .cls-1 { fill: ${socialIconFillColor}; }
                    .cls-2 { fill: none; stroke: ${socialIconFillColor}; stroke-miterlimit: 10; stroke-width: 1.5px; }
                </style>
            </defs>
            <title>Facebook</title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_4" data-name="Layer 4">
                    <path class="cls-1" d="M25.82,46.25V31.1H20.75v-6h5.07V20.34c0-5.15,3.15-7.95,7.75-7.95a44.14,44.14,0,0,1,4.64.23V18H35c-2.5,0-3,1.19-3,2.93v4.15h5.64l-.77,6H32V46.25" />
                    <circle class="cls-2" cx="29.25" cy="29.25" r="28.5" />
                </g>
            </g>
        </svg>
    `,
    twitter: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.5 58.5">
            <defs>
                <style>
                    .cls-1 { fill: ${socialIconFillColor}; }
                    .cls-2 { fill: none; stroke: ${socialIconFillColor}; stroke-miterlimit: 10; stroke-width: 1.5px; }
                </style>
            </defs>
            <title>Twitter</title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_4" data-name="Layer 4">
                    <path class="cls-1" d="M44.78,23.23c0,.3,0,.61,0,.92,0,9.34-7.11,20.1-20.1,20.1a20,20,0,0,1-10.85-3.17,16,16,0,0,0,1.71.09,14.18,14.18,0,0,0,8.77-3,7.09,7.09,0,0,1-6.61-4.9,9.82,9.82,0,0,0,1.34.11,7.65,7.65,0,0,0,1.86-.24,7.07,7.07,0,0,1-5.67-6.94v-.09a7,7,0,0,0,3.19.9,7.06,7.06,0,0,1-3.15-5.88,6.94,6.94,0,0,1,1-3.57,20,20,0,0,0,14.56,7.39,8.62,8.62,0,0,1-.17-1.61,7.07,7.07,0,0,1,12.23-4.84,14,14,0,0,0,4.48-1.7,7,7,0,0,1-3.1,3.89,14.16,14.16,0,0,0,4.06-1.09,15.33,15.33,0,0,1-3.54,3.65Z" />
                    <circle class="cls-2" cx="29.25" cy="29.25" r="28.5" />
                </g>
            </g>
        </svg>
    `,
    instagram: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.5 58.5">
            <defs>
                <style>
                    .cls-1 { fill: ${socialIconFillColor}; }
                    .cls-2 { fill: none; stroke: ${socialIconFillColor}; stroke-miterlimit: 10; stroke-width: 1.5px; }
                </style>
            </defs>
            <title>Instagram</title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_4" data-name="Layer 4">
                    <path class="cls-1" d="M29.52,21.29a8.12,8.12,0,1,0,8.12,8.12A8.11,8.11,0,0,0,29.52,21.29Zm0,13.4a5.28,5.28,0,1,1,5.28-5.28,5.29,5.29,0,0,1-5.28,5.28ZM39.87,21A1.9,1.9,0,1,1,38,19.07,1.89,1.89,0,0,1,39.87,21Zm5.38,1.92a9.39,9.39,0,0,0-2.56-6.64,9.4,9.4,0,0,0-6.64-2.55c-2.61-.15-10.45-.15-13.07,0a9.44,9.44,0,0,0-6.64,2.55,9.4,9.4,0,0,0-2.55,6.63c-.15,2.62-.15,10.46,0,13.07a9.4,9.4,0,0,0,2.55,6.64A9.47,9.47,0,0,0,23,45.14c2.62.15,10.46.15,13.07,0a9.37,9.37,0,0,0,6.64-2.56,9.46,9.46,0,0,0,2.56-6.64c.14-2.61.14-10.44,0-13.06ZM41.87,38.75a5.37,5.37,0,0,1-3,3c-2.09.83-7,.64-9.34.64s-7.26.18-9.34-.64a5.37,5.37,0,0,1-3-3c-.83-2.09-.63-7-.63-9.34s-.19-7.26.63-9.33a5.35,5.35,0,0,1,3-3c2.09-.82,7-.63,9.34-.63s7.26-.19,9.34.63a5.38,5.38,0,0,1,3,3c.82,2.08.63,7,.63,9.33S42.69,36.67,41.87,38.75Z" />
                    <circle class="cls-2" cx="29.25" cy="29.25" r="28.5" />
                </g>
            </g>
        </svg>
    `,
    linkedin: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.5 58.5">
            <defs>
                <style>
                    .cls-1 { fill: ${socialIconFillColor}; }
                    .cls-2 { fill: none; stroke: ${socialIconFillColor}; stroke-miterlimit: 10; stroke-width: 1.5px; }
                </style>
            </defs>
            <title>LinkedIn</title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_4" data-name="Layer 4">
                    <path class="cls-1" d="M21.58,43.74H15.25V23.38h6.33ZM18.41,20.61a3.68,3.68,0,1,1,3.66-3.7A3.7,3.7,0,0,1,18.41,20.61ZM45.24,43.74H38.93V33.83c0-2.36,0-5.39-3.28-5.39s-3.8,2.57-3.8,5.22V43.74H25.54V23.38H31.6v2.78h.09a6.66,6.66,0,0,1,6-3.29c6.4,0,7.58,4.22,7.58,9.69V43.74Z" />
                    <circle class="cls-2" cx="29.25" cy="29.25" r="28.5" />
                </g>
            </g>
        </svg>
    `,
    email: `
        <!-- Envelope icon source: https://fontawesome.com/icons/envelope?style=regular --><?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 58.5 58.5" version="1.1" id="svg3937" sodipodi:docname="email.svg" inkscape:version="0.92.4 5da689c313, 2019-01-14"> <metadata id="metadata3941"> <rdf:RDF> <cc:Work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /> <dc:title>Email</dc:title> </cc:Work> </rdf:RDF> </metadata> <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1608" inkscape:window-height="2018" id="namedview3939" showgrid="false" inkscape:zoom="11.047788" inkscape:cx="9.3329891" inkscape:cy="19.758498" inkscape:window-x="19" inkscape:window-y="79" inkscape:window-maximized="0" inkscape:current-layer="Layer_4" /> <defs id="defs3927"> <style id="style3925">.cls-1{fill:${socialIconFillColor};}.cls-2{fill:none;stroke:${socialIconFillColor};stroke-miterlimit:10;stroke-width:1.5px;}</style> </defs> <title id="title3929">Email</title> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_4" data-name="Layer 4"> <circle class="cls-2" cx="29.25" cy="29.25" r="28.5" id="circle3933" /> <text xml:space="preserve" style="font-style:normal;font-weight:normal;font-size:26.65069199px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.66626728" x="21.592564" y="36.260834" id="text3945"><tspan sodipodi:role="line" id="tspan3943" x="21.592564" y="60.490421" style="stroke-width:0.66626728" /></text> <path inkscape:connector-curvature="0" style="fill:${socialIconFillColor};fill-opacity:1;stroke-width:0.06763811" d="M 43.318729,16.263481 H 15.181271 c -1.793089,0 -3.246629,1.453541 -3.246629,3.24663 v 19.479778 c 0,1.793083 1.45354,3.24663 3.246629,3.24663 h 28.137458 c 1.793082,0 3.246629,-1.453547 3.246629,-3.24663 V 19.510111 c 0,-1.793089 -1.453547,-3.24663 -3.246629,-3.24663 z m 0,3.24663 v 2.759973 c -1.516586,1.235006 -3.934375,3.155388 -9.103216,7.202785 -1.139091,0.895998 -3.395501,3.04858 -4.965513,3.023487 -1.569745,0.02538 -3.826897,-2.127828 -4.965521,-3.023487 -5.16802,-4.046792 -7.58642,-5.967578 -9.103208,-7.202785 V 19.510111 Z M 15.181271,38.989889 v -12.55377 c 1.549859,1.234466 3.747759,2.966742 7.097806,5.590019 1.478367,1.163716 4.067355,3.732674 6.970923,3.71705 2.889296,0.01562 5.445474,-2.516066 6.970311,-3.71651 3.349982,-2.623205 5.548488,-4.355963 7.098418,-5.590494 v 12.553705 z" id="path2" /> </g> </g> </svg>

    `,
};

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

// eslint-disable-next-line object-curly-newline
const AllSocials = ({ email, facebook, twitter, linkedin, instagram }) => (
    <SocialsContainer>
        <SocialIcon url={email} social="email" />
        <SocialIcon url={facebook} social="facebook" />
        <SocialIcon url={twitter} social="twitter" />
        <SocialIcon url={instagram} social="instagram" />
        <SocialIcon url={linkedin} social="linkedin" />
    </SocialsContainer>
);

export default AllSocials;
