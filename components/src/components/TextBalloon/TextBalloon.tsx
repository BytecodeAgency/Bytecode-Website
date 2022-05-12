import React from "react";
import styled from "styled-components";
import { Paragraph } from "../Typography";

const Container = styled.div<{width?: number}>`
    position: relative;
    width: ${props => props.width ? `${props.width}px` : "100%"};
`;

const TextBalloonContainer = styled.div`
    padding: 20px 20px 0;
    background-color: #fff;
    position: relative;
    bottom: 10px;
    left: 0;
    z-index: 1;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-top: 2px solid #000;
    border-left: 2px solid #000;
    border-right: 2px solid #000;
    box-shadow: 3px 3px #253A8F40;
`;

const TextBalloonBottom = styled.div`
    width: calc(100% - 4px);
    height: 15px;
    background-color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-left: 2px solid #000;
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;
    box-shadow: 3px 3px #253A8F40;
    position: absolute;
    bottom: -7px;
    left: 0;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        bottom: 0;
        right: 43px;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-top-color: #fff;
        border-bottom: 0;
        border-left: 0;
        margin-left: -20px;
        margin-bottom: -20px;
        z-index: 3;
    }
    :after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 40px;
        width: 0;
        height: 0;
        border: 25px solid transparent;
        border-top-color: #000;
        border-bottom: 0;
        border-left: 0;
        margin-left: -20px;
        margin-bottom: -25px;
        z-index: 2;
    }
`;

interface TextBalloonProps {
    text: string;
    width?: number;
}

const TextBalloon: React.FC<TextBalloonProps> = ({ text, width }) => {
	return <Container width={width}><TextBalloonContainer><Paragraph text={text} size="small" /></TextBalloonContainer><TextBalloonBottom /></Container>;
};

export default TextBalloon; 3;