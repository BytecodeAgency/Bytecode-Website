import React from "react";
import { breakpointNameToPx, responsiveValuesCSS, theme } from "../../../index";
import styled from "styled-components";
import { FullWidthContainer, Heading, Container } from "../../../components";
import { CollapsibleText } from "../../../containers";

const howDoWeWannaContainerResponsiveCSS = () => {
	const background = responsiveValuesCSS(
		"background",
		"",
		breakpointNameToPx({
			xs: `url(${"/images/home-line2-mobile.svg"}) no-repeat left bottom, ${theme.colors.colorBrand4};`,
			lg: `url(${"/images/home-line2.svg"}) no-repeat left bottom, ${theme.colors.colorBrand4};`
		})
	);
	const minHeight = responsiveValuesCSS(
		"min-height",
		"px",
		breakpointNameToPx({
			xs: 600,
			lg: 700
		})
	);
	return background + minHeight;
};
const HowDoWeWannaContainer = styled(FullWidthContainer)`
	${howDoWeWannaContainerResponsiveCSS};
`;

const howDoWeWannaContentContainerResponsiveCSS = () => {
	const padding = responsiveValuesCSS(
		"padding",
		"",
		breakpointNameToPx({
			xs: "40px 0 60px 0",
			lg: "200px 70px 200px 100px",
			xl: "200px 70px 200px 150px"
		})
	);
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			lg: "1fr 1fr",
		})
	);
	return padding + gridColumns;
};

const HowDoWeWannaContentContainer = styled(Container)`
	${howDoWeWannaContentContainerResponsiveCSS};
	display: grid;
`;


const StyledHeading = styled(Heading)`
	margin-bottom: 40px;
`;

const CollapsibleTextContainer = styled.div`
	justify-self: center;
`;

const StyledCollapsibleText = styled(CollapsibleText)`
	margin-bottom: 30px;
`;

const HowDoWeWanna = () => (
	<HowDoWeWannaContainer>
		<HowDoWeWannaContentContainer>
			<StyledHeading type="h1" text="How do we wanna work together?" color="white" />
			<CollapsibleTextContainer>
				<StyledCollapsibleText
					title="As a team, no client-agency relationship"
					description="Creating one product team, together. No client-agency relationship.
						This means a lot of transparency and working side by side to create a working version of your concept."
					color="white"
				/>
				<StyledCollapsibleText
					title="Learning and improving on the way"
					description="Learning from mistakes and improving as we go.
						Sometimes we face a challenge we have not seen before. We believe failure and learning from it are essential."
					color="white"
				/>
				<StyledCollapsibleText
					title="Working with passionate founders"
					description="Working with passionate founders who want to ‘scratch their own itch’.
						This boosts our enthusiasm and drives us to help you fulfill your mission."
					color="white"
				/>
			</CollapsibleTextContainer>
		</HowDoWeWannaContentContainer>
	</HowDoWeWannaContainer>

);

export default HowDoWeWanna;