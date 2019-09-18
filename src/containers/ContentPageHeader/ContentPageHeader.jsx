/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import TextBlock from '../TextBlock/TextBlock';
import { MainHeader, MainHeaderContent } from './ContentPageHeader.components';

const ContentPageHeader = props => {
    const { subtitle, title, button, href, text, useGatsbyLink } = props;
    return (
        <MainHeader {...props}>
            <MainHeaderContent fluid>
                <TextBlock
                    useGatsbyLink={useGatsbyLink}
                    subtitle={subtitle || ''}
                    title={title || ''}
                    href={href}
                    button={button || ''}
                >
                    {text}
                </TextBlock>
            </MainHeaderContent>
        </MainHeader>
    );
};

export default ContentPageHeader;

ContentPageHeader.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string,
    button: PropTypes.string,
    href: PropTypes.string,
    text: PropTypes.node,
    useGatsbyLink: PropTypes.bool,
};

ContentPageHeader.defaultProps = {
    subtitle: '',
    title: '',
    button: '',
    href: '#',
    text: '',
    useGatsbyLink: false,
};
