import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/Button' was resolved to '... Remove this comment to see the full error message
import Button from '../../components/Button';

type OwnProps = {
    className?: string,
    children?: React.ReactNode,
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof SubtitleBase.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'SubtitleBase' implicitly has type 'any' because i... Remove this comment to see the full error message
const SubtitleBase = ({ className, children }: Props) => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={`subtitle ${className}`}>{children}</div>
);

SubtitleBase.defaultProps = {
    className: '',
    children: undefined,
};

export const Figure = styled.figure`
    position: relative;
    width: 100%;

    padding-left: 10px;
    margin-bottom: 4rem;
`;

export const Subtitle = styled(SubtitleBase)`
    margin-bottom: ${(props: any) => (props.hasTitle ? '2rem' : '1.2em')};
`;

export const H1 = styled.h1``;

export const H2 = styled.h2``;

export const H3 = styled.h3``;

export const H4 = styled.h4``;

export const StyledButton = styled(Button)`
    margin: 1em 0;
`;
