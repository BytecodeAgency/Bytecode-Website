import { css } from 'styled-components';
import theme from './theme';

const { mediaQueryMin } = theme;

const textScaler = css`
    html,
    body {
        font-size: 16px; //equals 16px;
    }

    p {
        font-size: 0.775rem;
    }
    h1 {
        font-size: 1.725rem;
        line-height: 1.22em;
    }
    h2 {
        font-size: 1.432rem;
        line-height: 1.2em;
    }
    h3,
    h4,
    h5,
    h6 {
        font-size: 1.125rem;
    }
    .introduction {
        font-size: 1rem;
        line-height: 1.58em;
    }
    @media (${mediaQueryMin.xs}) {
        h1 {
            font-size: 2.5rem;
        }
        h2 {
            font-size: 1.938rem;
            line-height: 1.2em;
        }
        p {
            font-size: 1rem;
        }
    }

    @media (${mediaQueryMin.sm}) {
        .introduction {
            font-size: 1.115rem;
        }
    }

    @media (${mediaQueryMin.md}) {
        .introduction {
            font-size: 1.115rem;
        }
    }

    @media (${mediaQueryMin.lg}) {
        h1 {
            font-size: 3.33rem;
            line-height: 1.15em;
        }
    }

    @media (${mediaQueryMin.xl}) {
        p {
            font-size: 1.125rem;
        }
        .introduction {
            font-size: 1.135rem;
        }
    }

    @media (${mediaQueryMin.xxl}) {
    } ;
`;

export default textScaler;
