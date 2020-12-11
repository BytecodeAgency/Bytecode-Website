// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import theme from '../styles/theme';

// @ts-expect-error ts-migrate(2339) FIXME: Property 'mediaQueryMin' does not exist on type '{... Remove this comment to see the full error message
const { mediaQueryMin, containerWidth } = theme;

const Container = styled.section`
    padding: 1em ${containerWidth.xs};
    display: flex;
    flex-direction: column;
    align-items: ${(props: any) => props.align || 'inherit'};
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
