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
			xs: `url(${"/images/home-line2-mobile.svg"}) no-repeat left bottom , ${theme.colors.colorBrand4};`,
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
					description="Aenean vitae lectus non nulla pulvinar
						imperdiet et at ligula. Cras mattis dui sed urna tempus feugiat. In sagittis,
						mi iaculis cursus pharetra, magna ligula pulvinar augue, nec faucibus lacus arcu in nunc.
						Aliquam dapibus posuere laoreet. Nullam vel diam id risus fringilla efficitur."
					color="white"
				/>
				<StyledCollapsibleText
					title="Learning and improving on the way"
					description="Aenean vitae lectus non nulla pulvinar
						imperdiet et at ligula. Cras mattis dui sed urna tempus feugiat. In sagittis,
						mi iaculis cursus pharetra, magna ligula pulvinar augue, nec faucibus lacus arcu in nunc.
						Aliquam dapibus posuere laoreet. Nullam vel diam id risus fringilla efficitur."
					color="white"
				/>
				<StyledCollapsibleText
					title="We want to work with passionate founders who want to 'scratch their own itch'"
					description="Aenean vitae lectus non nulla pulvinar
						imperdiet et at ligula. Cras mattis dui sed urna tempus feugiat. In sagittis,
						mi iaculis cursus pharetra, magna ligula pulvinar augue, nec faucibus lacus arcu in nunc.
						Aliquam dapibus posuere laoreet. Nullam vel diam id risus fringilla efficitur."
					color="white"
				/>
			</CollapsibleTextContainer>
		</HowDoWeWannaContentContainer>
	</HowDoWeWannaContainer>

);

export default HowDoWeWanna;