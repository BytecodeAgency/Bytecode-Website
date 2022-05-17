import React from "react";
import { breakpointNameToPx, responsiveValuesCSS, theme } from "../../../index";
import styled from "styled-components";
import { InitialContainer } from "../../../components";
import { PageIntro } from "../../../sections";
import Image from "next/image";

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
			paragraph="Building a successful startup is hard, but finding the right people to develop your software product is perhaps even more difficult.
				That is why we offer a partnership with us. We are your technical co-founder & interim-CTO."
			image={
				<Image src="/images/home-intro.svg" alt="members of bytecode" height={564} width={601} />
			}
		/>
	</IntroContainer>
);

export default Intro;