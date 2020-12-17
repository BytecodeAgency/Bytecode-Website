/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import TextBlock from '../TextBlock/TextBlock';
import { MainHeader, MainHeaderContent } from './ContentPageHeader.components';

// eslint-disable-next-line no-unused-vars
interface Props {
    subtitle?: string;
    title?: string;
    button?: string;
    href?: string;
    text?: React.ReactNode;
    useGatsbyLink?: boolean;
}

// TODO: find a way to pass ...props in TypeScript
const ContentPageHeader: React.FC<any> = ({
    subtitle = '',
    title = '',
    button = '',
    href = '',
    text = '',
    useGatsbyLink = false,
    ...props
}) => {
    return (
        <MainHeader {...props}>
            <MainHeaderContent>
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
