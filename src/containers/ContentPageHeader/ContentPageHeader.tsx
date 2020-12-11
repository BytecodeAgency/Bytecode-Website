/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../TextBlock/TextBlock' was resolved to '/... Remove this comment to see the full error message
import TextBlock from '../TextBlock/TextBlock';
import { MainHeader, MainHeaderContent } from './ContentPageHeader.components';

type Props = {
    subtitle?: string;
    title?: string;
    button?: string;
    href?: string;
    text?: React.ReactNode;
    useGatsbyLink?: boolean;
};

// @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'props'. Did you mean 'Props'?
const ContentPageHeader =props: Props => {
    // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'props'. Did you mean 'Props'?
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

ContentPageHeader.defaultProps = {
    subtitle: '',
    title: '',
    button: '',
    href: '#',
    text: '',
    useGatsbyLink: false,
};
