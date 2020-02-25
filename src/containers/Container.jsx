import styled from 'styled-components';
import theme from '../styles/theme';

const { mediaQueryMin, containerWidth } = theme;

const Container = styled.section`
    padding: 1em ${containerWidth.xs};
    display: flex;
    flex-direction: column;
    @media (${mediaQueryMin.sm}) {
        padding: 3em ${containerWidth.sm};
    }
    @media (${mediaQueryMin.md}) {
        padding: 2em ${containerWidth.md};
    }
    @media (${mediaQueryMin.lg}) {
        padding: 3em ${containerWidth.lg};
    }
    @media (${mediaQueryMin.xxl}) {
        padding: 7em ${containerWidth.xl};
    }
`;

export default Container;
