import React from "react";
import { IconComponent } from "../../icons";
import { IconTitle, Paragraph } from "../../components";
import styled from "styled-components";
import { WithStyle } from "../../types/utils";

const BulletText = styled(Paragraph)`
	margin: 0;
	padding-left: 10px;
`;
type BulletProps = {
	text: string
}
const Bullet = ({ text }: BulletProps) => (
	<BulletText text={`• \u00A0${text}`}/>
);

const TextContainer = styled.div`
	padding-left: 58px
`;
type BulletListProps = {
	list?: string[];
}
const BulletList = ({ list }: BulletListProps) => list ? (
	<TextContainer>
		{list.map((item, index)=><Bullet key={index} text={item} />)}
	</TextContainer>
) : null;

const StyledParagraph = styled(Paragraph)`
	margin-bottom: 0;
`;

type TextProps = {
	text?: string;
}
const Text = ({ text }: TextProps) => text ? (
	<TextContainer>
		<StyledParagraph text={text} />
	</TextContainer>
) : null;


const IconSummaryBlockContainer = styled.div`
	max-width: 500px;
`;

type IconSummaryBlockProps = {
	Icon: IconComponent;
	title: string;
	paragraph?: string;
	list?: string[];
}

const IconSummaryBlock = ({ Icon, list, title, paragraph, className }:WithStyle<IconSummaryBlockProps>) => (
	<IconSummaryBlockContainer className={className}>
		<IconTitle icon={Icon} text={title} big/>
		<Text text={paragraph} />
		<BulletList list={list} />
	</IconSummaryBlockContainer>
);

export default IconSummaryBlock;