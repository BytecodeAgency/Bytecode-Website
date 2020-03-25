import React from 'react';
import LeesMeerButton from '../../components/LeesMeerButton';
import {
    StyledTitleMedium,
    StyledSubtitle,
    StyledContainer,
    ImageContainer,
    StyledTextContainer,
    StyledText,
    StyledImage,
    ListContainer,
    StyledList,
} from './ServiceItem.components';


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
                <StyledTitleMedium wide={src}>{title}</StyledTitleMedium>
                <StyledText>{text}</StyledText>
                <LeesMeerButton width="30%" link={link} />
            </StyledTextContainer>
            {src ? (
                <ImageContainer>
                    <StyledImage src={src} />
                </ImageContainer>
            ) : (
                <ListContainer>
                    <StyledSubtitle>
                        {listTitle}
                    </StyledSubtitle>
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
