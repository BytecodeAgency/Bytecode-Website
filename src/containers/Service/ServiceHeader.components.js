import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

// TODO: change float to flexbox

export const StyledImage = styled.img`
    max-width: 100%;
    max-height: 130vh;
    width: auto;
    height: auto;
    float: right;
`;
