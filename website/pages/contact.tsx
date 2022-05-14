import React from "react";
import { NextPage } from "next";
import MainLayout from "../layout/MainLayout";
import { Button, Container, FullWidthContainer, Heading, InitialContainer, Paragraph } from "@bytecode/ui-library/components";
import { PageIntro } from "@bytecode/ui-library/sections";
import { breakpointNameToPx, responsiveValuesCSS, theme, links } from "@bytecode/ui-library/utils";
import styled from "styled-components";
import { AddressBlock, CommunicationBlock } from "@bytecode/ui-library/containers";
import { LongArrow } from "@bytecode/ui-library/icons";
import { Train, Cars } from "@bytecode/ui-library/icons";

const content = {
	title: "Contact us at Bytecode.",
	metaDescription: "Bytecode is a technical partner and CTO for technology based start-ups."
};

const Contact: NextPage = () => {
	return (
		<MainLayout content={content}>
			<ContactBody />
		</MainLayout>
	);
};

const introImageContainerResponsiveCSS = () => {
	const imageWidths = responsiveValuesCSS("width", "", breakpointNameToPx({ xs: "100vw", lg: "100%" }));
	const marginLeft = responsiveValuesCSS("margin-left", "px", breakpointNameToPx({ xs: -24, md:-32, lg: 32, xl: 48, xxl: 64 }));
	const top = responsiveValuesCSS("top", "px", breakpointNameToPx({ xs: 50, lg: 200, xl: 230 }));
	return imageWidths + top + marginLeft;
};

const IntroImageContainer = styled.div`
	${introImageContainerResponsiveCSS};
	position: relative;
`;

const StyledImage = styled.img`
	width: 100%;
`;

const styledInitialContainerResponsiveCSS = responsiveValuesCSS(
	"background",
	"",
	breakpointNameToPx({
		lg: `url(${"/images/contact-line1.svg"}) no-repeat right bottom`
	})
);
const StyledInitialContainer = styled(InitialContainer)`
	${styledInitialContainerResponsiveCSS};
	padding-right: 0;
`;

const Intro = () => (
	<StyledInitialContainer>
		<PageIntro
			subtitle="Contact us"
			title="There you are! Let's chat."
			paragraph="Interested in working together? So are we! Tell us about your startup idea now."
			image={
				(
					<IntroImageContainer>
						<StyledImage
							src="/images/contact-header-big.png"
							alt="Members of Bytecode relaxing"
						/>
					</IntroImageContainer>
				)
			}
			columnSizes="3fr 5fr"
		/>
	</StyledInitialContainer>
);

const appointmentContainerResponsiveCSS = () => {
	const padding = responsiveValuesCSS(
		"padding",
		"",
		breakpointNameToPx({
			xs: "80px 0 60px 0",
			lg: "400px 50px 60px 50px"
		})
	);
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			md: "1fr 300px",
		})
	);
	const gridTemplateAreas = responsiveValuesCSS(
		"grid-template-areas",
		"",
		breakpointNameToPx({
			xs: "\"meeting\""+
				"\"button\""+
				"\"communication\"",
			md: "\"meeting communication\"" +
				"\"button .\""
		})
	);
	const columnGap = responsiveValuesCSS("column-gap", "px", breakpointNameToPx({ md: 30, lg:150, xl: 200, xxl: 300 }));
	return padding + gridColumns + gridTemplateAreas + columnGap;
};

const AppointmentContainer = styled(Container)`
	${appointmentContainerResponsiveCSS};
	display: grid;
	grid-template-rows: auto;
`;

const MeetingContainer = styled.div`
	grid-area: meeting;
`;

const StyledMeetingButtonContainer = styled.div`
	grid-area: button;
	padding-bottom: 60px;
	display: grid;
`;

const StyledMeetingButton = styled(Button)`
	justify-self: end;
`;

const styledCommunicationBlockResponsiveCSS = responsiveValuesCSS("justify-self", "", breakpointNameToPx({ xs: "start", md: "center" }));
const StyledCommunicationBlock = styled(CommunicationBlock)`
	${styledCommunicationBlockResponsiveCSS};
	grid-area: communication;
	align-self: end;
`;

const styledAppointmentFullWidthContainerResponsiveCSS = responsiveValuesCSS(
	"background",
	"",
	breakpointNameToPx({
		xs: `url(${"/images/contact-line2-mobile.svg"}) no-repeat left top, ${theme.colors.colorBrand3};`,
		lg: `url(${"/images/contact-line2.svg"}) no-repeat left top, ${theme.colors.colorBrand3};`
	})
);

const StyledAppointmentFullWidthContainer = styled(FullWidthContainer)`
	${styledAppointmentFullWidthContainerResponsiveCSS};
`;

const Appointment = () => {
	const goToMeetingPlanner = () => {
		window.open(links.meetingPlanner);
	};
	return(
		<StyledAppointmentFullWidthContainer>
			<AppointmentContainer>
				<MeetingContainer>
					<Heading type="h1" text="Make an appointment now" color="white"/>
					<Paragraph
						text="Make an appointment for a free (online) consult with Nick or come to our office at The Hague Tech.
							Let’s find out what we can accomplish together!"
						color="white"
					/>
				</MeetingContainer>
				<StyledMeetingButtonContainer>
					<StyledMeetingButton type="primary" text="Plan a meeting" icon={LongArrow} onClick={goToMeetingPlanner}/>
				</StyledMeetingButtonContainer>
				<StyledCommunicationBlock color="white"/>
			</AppointmentContainer>
		</StyledAppointmentFullWidthContainer>

	);
};

const addressAndRouteContainerResponsiveCSS = () => {
	const padding = responsiveValuesCSS(
		"padding",
		"",
		breakpointNameToPx({
			xs: "120px 0 120px",
			lg: "220px 0 220px 0",
			xl: "220px 50 220px 50px"
		})
	);
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			md:"1fr 1fr",
		})
	);
	return padding + gridColumns;
};

const AddressAndRouteContainer = styled(Container)`
	${addressAndRouteContainerResponsiveCSS};
	display: grid;
`;

const routeContainerResponsiveCSS = responsiveValuesCSS("padding-top", "px", breakpointNameToPx({ xs: 30, md: 0 }));
const RouteContainer = styled.div`
	${routeContainerResponsiveCSS};
`;

const StyledRouteButton = styled(Button)`
	width: 190px;
	margin-bottom: 20px;
	margin-right: 20px;
`;

const RouteButtonContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
`;

const addressBlockContainerResponsiveCSS = responsiveValuesCSS(
	"padding-left",
	"px",
	breakpointNameToPx({
		xs: 0,
		lg: 40,
		xl: 60,
		xxl: 80,
	})
);
const AddressBlockContainer = styled.div`
	${addressBlockContainerResponsiveCSS};
`;

const StyledFullWidthContainer = styled(FullWidthContainer)`
	background: url(${"/images/contact-line3.svg"}) no-repeat left bottom, ${theme.colors.colorBrand2};
`;

const AddressAndRoute = () => {
	const goToPublicTransportRoute = () => {
		window.open(links.publicTransportRoute);
	};
	const goToMapsRoute = () => {
		window.open(links.autoRoute);
	};
	return(
		<StyledFullWidthContainer>
			<AddressAndRouteContainer>
				<AddressBlockContainer>
					<AddressBlock large/>
				</AddressBlockContainer>
				<RouteContainer>
					<Heading type="h3" text="Route"/>
					<Paragraph text="Are you planning to drop by? Let us know and plan your route here!"/>
					<RouteButtonContainer>
						<StyledRouteButton type="secondary" text="Public transport" icon={Train} onClick={goToPublicTransportRoute}/>
						<StyledRouteButton type="secondary" text="Plan route" icon={Cars} onClick={goToMapsRoute}/>
					</RouteButtonContainer>
				</RouteContainer>
			</AddressAndRouteContainer>
		</StyledFullWidthContainer>

	);
};

const ContactBody = () => (
	<div>
		<Intro />
		<Appointment />
		<AddressAndRoute />
	</div>
);

export default Contact;
