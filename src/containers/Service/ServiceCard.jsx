import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";

const CardContainer = styled.section`
    margin-top:30vh;
    width:80%;
    height: 100vh;
    left:10%;
    position: relative;
`;

const TextContainer = styled.section`
    width: 35vw;
    height: 60vh;
    background: #262626;
    padding: 8% 5%;
    margin-left: 10%;
`;

const StyledSubtitle = styled.p`
    height: 3vh;
    width: 24vw;
    color: #70c197;
    font-family: Lato;
    font-size: 2vh;
    font-weight: bold;
    line-height: 5vh;
    letter-spacing: 0.4vh;
`

const StyledTitle = styled.h3`
    height: 20%;
    width: 90%;
    color: #ffffff;
    font-family: Lato;
    font-size: 7vh;
    font-weight: bold;
    letter-spacing: 0.1vh;
    line-height: 7vh;
    margin-bottom: 8vh;
`;

const StyledText = styled.p`
    max-width:80%;
    color: #ffffff;
    font-family: Lato;
    font-size: 2.2vh;
    letter-spacing: 0;
    font-weight: 400;
    line-height: 4.2vh;
    margin-top: 10%;
`;

const LeesMeerButton = styled(Link)`
    height: 10vh;
    width: 13vw;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

const ArrowText = styled.p`
    width: 50%;
    align-self: stretch;
    color: #f7f7f7;
    font-size: 2.2vh;
`;
const ArrowImage = styled.img`
    padding-top: 7%;
    width: 26%;
    color: #f7f7f7;
`;

const ImageContainer = styled.section`
     width: 40vw;
    height: 65vh;
`

const StyledImage = styled.img`
    position: relative;
    bottom: 40vh;
    left: 30vw;
    z-index: -1;
`
const ServiceCard = ({
    subtitle,
    title,
    text,
    src,
    link,
                     }) => (
                         <CardContainer>
                             <TextContainer>
                                 <StyledSubtitle>{subtitle}</StyledSubtitle>
                                 <StyledTitle>{title}</StyledTitle>
                                 <StyledText>{text}</StyledText>
                                 <LeesMeerButton to={link}>
                                     <ArrowText>Lees meer</ArrowText>
                                     <ArrowImage
                                         src={require('../../images/img/arrow@3x.svg')}
                                     />
                                 </LeesMeerButton>
                             </TextContainer>
                             <ImageContainer>
                                 <StyledImage
                                    src={src}
                                 />
                             </ImageContainer>
                         </CardContainer>

);

export default ServiceCard;
