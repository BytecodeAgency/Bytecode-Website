import styled from 'styled-components';
import theme from '../styles/theme';

const { mediaQueryMin, containerWidth } = theme;

interface ContainerProps {
    align?: string;
}
const Container =
    styled.section <
    ContainerProps >
    `
    padding: 1em ${containerWidth.xs};
    display: flex;
    flex-direction: column;
    align-items: ${(props) =>
        props.align || 'inherit'}; // TODO: check if the prop is still needed
    @media (${mediaQueryMin.sm}) {
        padding: 0 ${containerWidth.sm};
    }
    @media (${mediaQueryMin.md}) {
        padding: 0 ${containerWidth.md};
    }
    @media (${mediaQueryMin.lg}) {
        padding: 0 ${containerWidth.lg};
    }
    @media (${mediaQueryMin.xxl}) {
        padding: 0 ${containerWidth.xl};
    }
`;

export default Container;
