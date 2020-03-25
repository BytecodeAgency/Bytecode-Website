import React from 'react';
import styled from 'styled-components';
import LeesMeerButton from "../../components/LeesMeerButton";

const StyledContainer = styled.section`
    min-height: ${props => (props.src ? '95vh' : '45vh')};
    width: 95%;
    margin-left: 5%;
    display: flex;
    flex-direction: row;
    background-color: ${props => (props.light ? '#262626' : '#1a1a1a')};
    position: relative;

    margin-bottom: 5%;
    margin-top: 5%;
    overflow: hidden;
`;

const ImageContainer = styled.section`
    max-height: 90vh;
    max-width: 65%;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #262626;
`;

const StyledTextContainer = styled.section`
    height: 90%;
    width: ${props => (props.image ? '26%' : '40%')};
    margin-left: 5%;
    padding-top: 6%;
    display: flex;
    flex-direction: column;
`;

const StyledTitle = styled.h3`
    height: 20%;
    width: ${props => (props.src ? '90%' : '70%')};
    color: #ffffff;
    font-family: Lato;
    font-size: 7vh;
    font-weight: bold;
    letter-spacing: 0.1vh;
    line-height: 7vh;
`;

const StyledText = styled.p`
    max-height: 70%;
    opacity: 0.99;
    color: #f7f7f7;
    font-family: Lato;
    font-size: 2.3vh;
    letter-spacing: 0;
    line-height: 3.6vh;
    font-weight: 400;
    text-align: left;
`;

const StyledImage = styled.img`
    max-height: 100%;
    max-width: 100%;
`;

const ListContainer = styled.section`
    width: 50%;
    padding-top: 7%;
    padding-left: 30%;
`;

const StyledSubtitle = styled.p`
    height: 3vh;
    color: #70c197;
    font-family: Lato;
    font-size: 2vh;
    font-weight: bold;
    letter-spacing: 0.4vh;
    line-height: 5vh;
    opacity: 75%;
`;

const StyledList = styled.p`
    opacity: 75%;
    height: 4vh;
    color: #f2f2f2;
    font-family: Lato;
    font-size: 2.1vh;
    font-weight: 400;
    letter-spacing: 0.04vh;
    line-height: 2.5vh;
`;

const ServiceItem = ({
    title,
    text,
    src,
    link,
    listTitle,
    listItems,
    light,
}) => {
    return (
        <StyledContainer src={src} light={light}>
            <StyledTextContainer image={src}>
                <StyledTitle src={src}>{title}</StyledTitle>
                <StyledText>{text}</StyledText>
                <LeesMeerButton width={"30%"} link={link}/>
            </StyledTextContainer>
            {src ? (
                <ImageContainer>
                    <StyledImage src={src} />
                </ImageContainer>
            ) : (
                <ListContainer>
                    <StyledSubtitle>{listTitle}</StyledSubtitle>
                    <StyledList>
                        {listItems.map(item => (
                            <>
                                {item}
                                <br />
                            </>
                        ))}
                    </StyledList>
                </ListContainer>
            )}

        </StyledContainer>
    );
};

export default ServiceItem;
