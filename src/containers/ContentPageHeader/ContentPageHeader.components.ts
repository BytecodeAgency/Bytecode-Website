import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

export const MainHeader = styled.header<{
    shadow?: boolean;
    align?: string;
    bgSize?: string;
    bgX?: string;
    bgY?: string;
    hero?: boolean;
    blendMode?: string;
}>`
    display: flex;
    animation: fadeIn 2s;
    padding: 3em 1em;
    height: 100vh;
    max-height: 40em;
    transition: 0.5s ease-in-out;
    @media (${mediaQueryMin.xs}) {
        padding: 3em 3em;
        max-height: 75em;
        min-height: 30em;
    }
    @media (${mediaQueryMin.lg}) {
        min-height: ${(props) => (props.hero ? '100vh' : '80vh')};
    }
    .content {
        margin-left: 0;
    }
`;

export const MainHeaderContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    @media screen and (${mediaQueryMin.sm}) {
        grid-template-columns: 1fr 1fr;
    }
    max-width: 1300px;
    margin: auto;
`;
