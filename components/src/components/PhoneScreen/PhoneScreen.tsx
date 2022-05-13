import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div<{height: number}>`
	background-image: url(${"/images/iphone.svg"});
    background-size: auto ${props=>`${props.height}px`};
	background-repeat: no-repeat;
	background-position: center;
	height: ${props=>`${props.height}px`};
	filter: drop-shadow(10px 10px 10px rgba(0,0,0,0.4));
	align-self: center;
`;

const StyledImage = styled.img<{height: number}>`
	height: ${props=>`${props.height}px`};;
	mask-image: url(${"/images/iphone.svg"});
    mask-size: auto ${props=>`${props.height}px`};
	mask-repeat: no-repeat;
	mask-position: center;
`;

type PhoneScreenProps = {
    image: string;
    alt: string;
    height: number;
};

const  PhoneScreen = ({ image, alt, height }: PhoneScreenProps) => (
	<ImageContainer height={height}>
		<StyledImage src={image} alt={alt} height={height} />
	</ImageContainer>
);

export default PhoneScreen;