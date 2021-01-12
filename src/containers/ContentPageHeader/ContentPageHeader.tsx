import React from 'react';
import TextBlock from '../TextBlock/TextBlock';
import { MainHeader, MainHeaderContent } from './ContentPageHeader.components';

interface Props {
    subtitle: string;
    title: string;
    button: string;
    href: string;
    text: string;
    useGatsbyLink?: boolean;
    img: string;
    hero?: boolean;
    shadow?: boolean;
}

const ContentPageHeader: React.FC<Props> = ({
    subtitle,
    title,
    button,
    href,
    text,
    useGatsbyLink,
    img,
    hero,
    shadow,
}) => {
    return (
        <MainHeader img={img} shadow={shadow} hero={hero}>
            <MainHeaderContent>
                <TextBlock
                    useGatsbyLink={useGatsbyLink}
                    subtitle={subtitle}
                    title={title}
                    href={href}
                    button={button}
                >
                    {text}
                </TextBlock>
            </MainHeaderContent>
        </MainHeader>
    );
};

export default ContentPageHeader;
