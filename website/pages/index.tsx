import React from "react";
import type { NextPage } from "next";
import { InitialContainer } from "@bytecode/ui-library/components";
import { PageIntro } from "@bytecode/ui-library/sections";
import MainLayout from "layout/MainLayout";
import styled from "styled-components";
import { theme, breakpointNameToPx, responsiveValuesCSS } from "@bytecode/ui-library/utils";
import Image from "next/image";

const content = {
	title: "Bytecode",
	metaDescription: "Bytecode is a technical partner and CTO for technology based start-ups."
};

const Home: NextPage = () => {
	return (
		<MainLayout content={content}>
			<HomeBody />
		</MainLayout>
	);
};

const introContainerResponsiveCSS = responsiveValuesCSS(
	"background",
	"",
	breakpointNameToPx({
		lg: `url(${"/images/home-intro-line.svg"}) no-repeat right bottom content-box, ${theme.colors.colorBrand2}`
	})
);

const IntroContainer = styled(InitialContainer)`
	${introContainerResponsiveCSS};
	background-color: ${theme.colors.colorBrand2};
	padding-right: 0;
	padding-bottom: 40px;
	padding-top: 140px;
`;

const Intro = () => (
	<IntroContainer>
		<PageIntro
			title="Your startup partner for building software products"
			paragraph="There are many variations of passages of Lorem Ipsum available,
				but the majority have suffered alteration in some form, by injected humour,
				or randomised words which don't look even slightly believable. "
			image={
				<Image src="/images/home-intro.svg" alt="members of bytecode" height={564} width={601} />
			}
		/>
	</IntroContainer>
);

const HomeBody = () => (
	<div>
		<Intro />
	</div>
);

export default Home;
