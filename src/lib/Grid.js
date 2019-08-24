import styled from 'styled-components';
import {
    Row as RowBase,
    Col as ColBase,
    Hidden as HiddenBase,
    setConfiguration,
} from 'react-grid-system';
import theme from '../styles/theme';

const breakpoints = theme.mediaQuery;
const container = theme.containerWidth;

console.debug(breakpoints.lg);

export const Container = styled.section`
    margin: 3em ${container.sm};

    @media ${breakpoints.md} {
        margin: 5em ${container.md};
    }

    @media ${breakpoints.lg} {
        margin: 7vw ${container.lg};
    }

    @media ${breakpoints.xl} {
        margin: 5vw ${container.xl};
    }
`;

export const Row = styled(RowBase)``;

export const Col = styled(ColBase)``;

export const Hidden = styled(HiddenBase)`
    position: relative;
`;
