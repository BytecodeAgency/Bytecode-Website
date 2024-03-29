import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin, colors } = theme;

const ImageBlockFigure = styled.figure`
    margin: 0;
    height: 100vh;
    object-fit: cover;
    object-position: bottom;
    @media (${mediaQueryMin.xs}) {
        max-height: 90vh;
        display: block;
        position: relative;
        right: 0px;
        overflow: hidden;
    }
    &:after {
        border: 0.1em ${colors.primary} solid;
        border-right: none;
        content: '';
        position: absolute;
        top: 0px;
        right: 0px;
        z-index: 10;
        margin: 3rem 0 3rem 3rem;
    }

    .content {
        transition: all 0.3s ease;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (min-width: ${theme.breakpointMobileMenu}) {
        &:after {
            margin: 6rem 0 6rem 6rem;
        }
    }
`;

export default ImageBlockFigure;
