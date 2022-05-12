import React, { useState } from "react";
import { theme } from "../../theme";
import { UserPictureContainer, Image, ShadowContainer, Container, Balloon, Photo } from "./UserPictures.styling";
import { WithStyle } from "../../types/utils";
import { UserPictureProps } from "./UserPicture.types";
import TextBalloon from "../TextBalloon";

const UserPicture = ({ size, color, person, shadowPosition, balloonText }: WithStyle<UserPictureProps>) => {

	const [isHovered, setIshovered] = useState<boolean>(false);

	const handleHover = () => setIshovered(!isHovered);

	const { bgColor, shadowColor, shadowColorHover } = theme.colors.boxes[color];

	const shadowAngle = theme.shadows.circles[shadowPosition];

	const RenderInnerContent = () => {
		if (person) {
			return <Image src={`/images/${person}.jpeg`} alt={`Startup founder ${person}`} />;
		}

		return <Image src={"/images/user-empty.png"} alt={`Startup founder ${person}`} />;
	};

	const RenderTextBalloon = () => {
		if (balloonText) return <Balloon><TextBalloon text={balloonText} width={200} /></Balloon>;

		return null;
	};

	return (
		<Container>
			<RenderTextBalloon />
			<Photo size={size}>
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
			</Photo>
		</Container>
	);
};

export default UserPicture;