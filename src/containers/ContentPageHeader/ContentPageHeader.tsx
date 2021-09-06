import React from 'react';
import ImageBlock from '../../components/ImageBlock/ImageBlock';
import TextBlock from '../TextBlock/TextBlock';
import {
    CenterParent,
    MainHeader,
    MainHeaderContent,
} from './ContentPageHeader.components';

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
    img,
    href,
    text,
    useGatsbyLink,
    hero,
    shadow,
}) => {
    return (
        <MainHeader shadow={shadow} hero={hero}>
            <MainHeaderContent>
                <CenterParent>
                    <TextBlock
                        verticalCenter
                        useGatsbyLink={useGatsbyLink}
                        subtitle={subtitle}
                        title={title}
                        href={href}
                        button={button}
                    >
                        {text}
                    </TextBlock>
                </CenterParent>
                <ImageBlock src={img} alt={title} />
            </MainHeaderContent>
        </MainHeader>
    );
};

export default ContentPageHeader;
