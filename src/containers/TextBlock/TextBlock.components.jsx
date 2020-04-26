import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../components/Button';

const SubtitleBase = ({ className, children }) => (
    <div className={`subtitle ${className}`}>{children}</div>
);

SubtitleBase.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

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
    margin-bottom: ${props => (props.title ? '2rem' : '1.2em')};
`;

export const H1 = styled.h1``;

export const H2 = styled.h2``;

export const H3 = styled.h3``;

export const H4 = styled.h4``;

export const StyledButton = styled(Button)`
    margin: 1em 0;
`;
