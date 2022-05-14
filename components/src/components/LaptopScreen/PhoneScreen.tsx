import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div<{height: number}>`
	height: ${props=>`${props.height}px`};
	filter: drop-shadow(10px 10px 10px rgba(0,0,0,0.4));
	align-self: center;
	display: flex;
`;

const StyledImage = styled.img<{height: number}>`
	height: ${props=>`${props.height}px`};
	margin: 0 auto;
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