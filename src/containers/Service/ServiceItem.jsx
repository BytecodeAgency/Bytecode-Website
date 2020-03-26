import React from 'react';
import PropTypes from 'prop-types';
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
            <StyledTextContainer light={light} image={src}>
                <StyledTitleMedium wide={src}>{title}</StyledTitleMedium>
                <StyledText>{text}</StyledText>
                <LeesMeerButton width="30%" link={link} />
            </StyledTextContainer>
            {src ? (
                <ImageContainer light={light}>
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

ServiceItem.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    listTitle: PropTypes.string,
    listItems: PropTypes.arrayOf(PropTypes.string),
    light: PropTypes.bool,
};

ServiceItem.defaultProps = {
    listTitle: '',
    listItems: [],
    light: false,
};
