import React from "react";
import Logo, { Trademark } from "../../components/Branding";
import styled from "styled-components";
import { Arrows, LongArrow, Linkedin, Github, Cars, Envelope, Eye, Handshake, PeopleArrows, Train, Youtube } from "../../icons";

export default {
	title: "Logo",
	component: Logo,
	subcomponents: {
		Trademark,
		Arrows,
		LongArrow,
		Linkedin,
		Github,
		Cars,
		Envelope,
		Eye,
		Handshake,
		PeopleArrows,
		Train,
		Youtube
	}
};

const PreviewGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: auto;
`;

export const LogoPreview = () => (<PreviewGrid>
	<Logo color="black" />
	<Logo color="white" />
</PreviewGrid>);

export const TrademarkPreview = () => (<PreviewGrid>
	<Trademark color="black" />
	<Trademark color="white" />
</PreviewGrid>);

export const IconsPreview = () => (<PreviewGrid>
	<Arrows color="black" size={24} />
	<LongArrow color="black" size={24} />
	<Linkedin color="black" size={24} />
	<Github color="black" size={24} />
	<Cars color="black" size={24} />
	<Envelope color="black" size={24} />
	<Eye color="black" size={24} />
	<Handshake color="black" size={24} />
	<PeopleArrows color="black" size={24} />
	<Train color="black" size={24} />
	<Youtube color="black" size={24} />
</PreviewGrid>);
