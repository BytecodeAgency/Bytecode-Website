import React, { useState } from "react";
import { theme } from "../../theme";
import { UserPictureContainer, Image, ShadowContainer, Container } from "./UserPictures.styling";
import { WithStyle } from "../../types/utils";
import { UserPictureProps } from "./UserPicture.types";

const UserPicture = ({ size, color, person, shadowPosition }: WithStyle<UserPictureProps>) => {

	const [isHovered, setIshovered] = useState<boolean>(false);

	const handleHover = () => setIshovered(!isHovered);

	const { bgColor, shadowColor, shadowColorHover } = theme.colors.boxes[color];

	const shadowAngle = theme.shadows.circles[shadowPosition];

	const RenderInnerContent = () => {
		if (person) {
			return <Image src={`/images/founder-${person}.jpeg`} alt={`Startup founder ${person}`} />;
		}

		return <Image src={"/images/user-empty.png"} alt={`Startup founder ${person}`} />;
	};

	return (
		<Container size={size} >
			<UserPictureContainer
				onMouseEnter={handleHover}
				onMouseLeave={handleHover}
				bgColor={bgColor}
				shadowColor={shadowColor}
				shadowColorHover={shadowColorHover}
				size={size}
			>
				<RenderInnerContent />
			</UserPictureContainer>
			<ShadowContainer
				bgColor={bgColor}
				shadowColor={shadowColor}
				shadowColorHover={shadowColorHover}
				size={size}
				shadowPosition={shadowAngle}
			/>
		</Container>
	);
};

export default UserPicture;