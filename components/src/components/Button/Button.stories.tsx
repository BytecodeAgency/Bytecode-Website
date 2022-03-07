import React from "react";
import { Cars,Linkedin } from "../../icons";
import styled from "styled-components";
import Button from "../../components/Button";

export default {
	title: "Button",
	component: Button,
};

const Preview = styled.div`
	display: grid;
	grid-gap: 1em;
`;

export const Primary = () => (
	<Preview>
		<Button type="primary" text="Button text" />
		<Button type="secondary" text="Button text" />
		<Button type="primary" text="Button text" icon={Cars} />
		<Button type="primary" icon={Linkedin} />
	</Preview>
);