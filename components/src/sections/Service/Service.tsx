import React from "react";
import styled from "styled-components";
import { Container, Heading, Paragraph, Subtitle } from "../../components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../helpers";

const deliverablesContainerResponsiveCSS = responsiveValuesCSS(
	"grid-template-columns",
	"",
	breakpointNameToPx({
		xs: "1fr",
		md: "1fr 1fr 1fr"
	})
);

const DeliverablesContainer = styled.div`
	${deliverablesContainerResponsiveCSS};
	display: grid;
	justify-content: start;
`;

const DeliverablesTitle = styled(Paragraph)`
	margin-bottom: 0;
`;

const styledImageResponsiveCSS = (reverse?: boolean) => {
	const justify = responsiveValuesCSS(
		"justify-self",
		"",
		breakpointNameToPx({
			xs: "center",
			lg: `${reverse ? "start" : "end"}`
		})
	);
	const width = responsiveValuesCSS(
		"max-width",
		"px",
		breakpointNameToPx({
			xs: 350,
			sm: 600
		})
	);
	return justify + width;
};
const StyledImage = styled.img<{reverse?: boolean}>`
	${props => styledImageResponsiveCSS(props.reverse)};
	grid-area: image;
	height: 300px;
`;

const TextContainer = styled.div`
	grid-area: text;
`;

const serviceContainerResponsiveCSS = (reverse?: boolean, imageBackground?: string) => {
	const areas = responsiveValuesCSS(
		"grid-template-areas",
		"",
		breakpointNameToPx({
			xs: "\"text\"" +
				"\"image\"",
			lg: `${reverse ? "\"image text\"" : "\"text image\""}`
		})
	);
	const columns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			lg: "1fr 1fr"
		})
	);
	let background = "";
	if(imageBackground){
		background = responsiveValuesCSS(
			"background",
			"",
			breakpointNameToPx({
				lg: `url(${imageBackground}) no-repeat center ${reverse ? "left" : "right"}`
			})
		);
	}
	return areas + columns + background;
};

const ServiceContainer = styled(Container)<{reverse?: boolean, imageBackground?: string}>`
	${props => serviceContainerResponsiveCSS(props.reverse, props.imageBackground)};
	display: grid;
	align-items: center;
	grid-column-gap: 3em;
	padding-top: 80px;
	padding-bottom: 80px;
`;

type ServiceProps = {
	title: string;
	type: string;
	description: string;
	deliverables: string[];
	image: string;
	reverse?: boolean;
	imageBackground?: string;
}

const Service = ({ title, type, description, deliverables, image, reverse, imageBackground }: ServiceProps) => (
	<ServiceContainer reverse={reverse} imageBackground={imageBackground}>
		<TextContainer>
			<Subtitle text={type} />
			<Heading type="h2" text={title} />
			<Paragraph text={description} />
			<DeliverablesTitle text="Deliverables" fontWeight="bold" />
			<DeliverablesContainer>
				{
					deliverables.map((deliverable, index) => <Paragraph key={index} text={deliverable} />)
				}
			</DeliverablesContainer>
		</TextContainer>
		<StyledImage reverse={reverse} src={image} alt={type}/>
	</ServiceContainer>
);

export default Service;
