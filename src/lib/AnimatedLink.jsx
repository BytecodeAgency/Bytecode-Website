import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import theme from '../styles/theme';

const Link = props => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AniLink paintDrip hex={theme.colors.primary} {...props} />
);

export default Link;
