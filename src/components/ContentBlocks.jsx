import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from '../lib/Grid';
import theme from '../styles/theme';

const container = theme.containerWidth;
const { xs, sm, md, lg, xl, xxl } = theme.mediaQuery;

const TextAndImageBase = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${sm} {
        display: grid;
        grid-template: auto / ${container.sm} 1fr 1fr ${container.sm};
        grid-template-areas: 'imgLeft imgLeft imgRight imgRight';
        padding: 5vh 0;
        grid-column-gap: 3em;
    }
    @media ${md} {
        grid-template: auto / ${container.md} 1fr 1fr ${container.md};
    }
    @media ${lg} {
        grid-template: auto / ${container.lg} 1fr 1fr ${container.lg};
        grid-column-gap: 6em;
    }
    @media ${xl} {
        grid-template: auto / ${container.xl} 1fr 1fr ${container.xl};
    }
`;

const ImageWrapper = styled.figure`
    grid-area: ${props => props.pos};

    margin: 1em 0;
    @media ${sm} {
        transform: translateX(${props => props.translate});
    }
`;

const ContentWrapper = styled.div`
    grid-area: ${props => (props.reverse ? '1 / 3 / 1 / 4' : '1 / 2 / 1 / 3')};
`;

const TextAndImage = props => {
    const { children, img, alt, reverse, fluid } = props;

    const getImgPos = () => {
        if(reverse) {
            if(fluid) {
                return {
                    pos: "1 / 1 / 1 / 3",
                    translate: '-3vw'
                };
            } else {
                return {
                    pos: "1 / 2 / 1 / 3",
                    translate: "0"
                };
            }
        }
            if(fluid){
                return {
                    pos: "1 / 3 / 1 / 5",
                    translate: "3vw"
                };
            } else {
                return {
                    pos: "1 / 3 / 1 / 4",
                    translate: "0"
                };
            }



    };

    return (
        <TextAndImageBase>
            <ImageWrapper reverse={reverse} fluid={fluid} translate={getImgPos().translate} pos={getImgPos().pos}>
                <img src={img} alt={alt} />
            </ImageWrapper>
            <ContentWrapper reverse={reverse}>{children}</ContentWrapper>
        </TextAndImageBase>
    );
};


export default TextAndImage;
