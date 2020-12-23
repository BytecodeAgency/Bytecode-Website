import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import { Subtitle } from '../../components/Typography';

interface SubtitleBaseProps {
    children?: React.ReactNode;
}
const SubtitleBase: React.FC<SubtitleBaseProps> = ({ children }) => (
    <Subtitle>{children}</Subtitle>
);

export const Figure = styled.figure`
    position: relative;
    width: 100%;

    padding-left: 10px;
    margin-bottom: 4rem;
`;

interface SubtitleProps {
    hasTitle?: string;
}
export const StyledSubtitle = styled(SubtitleBase)<SubtitleProps>`
    margin-bottom: ${(props) => (props.hasTitle ? '2rem' : '1.2em')};
`;

export const H1 = styled.h1``;

export const H2 = styled.h2``;

export const H3 = styled.h3``;

export const H4 = styled.h4``;

export const StyledButton = styled(Button)`
    margin: 1em 0;
`;
