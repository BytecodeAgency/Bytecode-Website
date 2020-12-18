import React from 'react';
import {
    StyledImage,
    StyledContainer,
    StyledCol,
    StyledRow,
    ImageCol,
    StyledTextBlock,
    DeliverableList,
} from './ServiceItem.components';
import TextBlock from '../TextBlock/TextBlock';

interface TextColProps {
    children?: React.ReactNode;
    src?: string;
}

const TextCol: React.FC<TextColProps> = ({ children, src }) =>
    src ? (
        <StyledCol xl={5}>{children}</StyledCol>
    ) : (
        <StyledCol xl={6}>{children}</StyledCol>
    );

interface ServiceItemProps {
    title: string;
    subtitle: string;
    text: string;
    src?: string;
    link: string;
    light?: boolean;
    listItems?: string[];
}

const ServiceItem: React.FC<ServiceItemProps> = ({
    title,
    subtitle,
    text,
    src,
    link,
    light = false,
    listItems,
}) => {
    const RightCol = () => {
        if (src)
            return (
                <ImageCol xl={7}>
                    <StyledImage src={src} />
                </ImageCol>
            );
        return null;
    };
    const list = listItems?.join(', ');
    return (
        <StyledContainer src={src} light={light}>
            <StyledRow justify="between" light={light}>
                <TextCol src={src}>
                    <StyledTextBlock>
                        <TextBlock
                            title={title}
                            href={link}
                            headingType="h2"
                            subtitle={subtitle}
                        >
                            {text}
                        </TextBlock>
                        <DeliverableList>{list}</DeliverableList>
                    </StyledTextBlock>
                </TextCol>
                <RightCol />
            </StyledRow>
        </StyledContainer>
    );
};

export default ServiceItem;
