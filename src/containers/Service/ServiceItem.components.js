import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

//TODO: change float to fit flexbox

export const StyledImage = styled.img`
    max-width: 100%;
    height: auto;
    width: auto;
    float: right;
`;
