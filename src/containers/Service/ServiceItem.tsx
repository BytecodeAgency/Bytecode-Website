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
// @ts-expect-error ts-migrate(6142) FIXME: Module '../TextBlock/TextBlock' was resolved to '/... Remove this comment to see the full error message
import TextBlock from '../TextBlock/TextBlock';

type OwnTextColProps = {
    children?: React.ReactNode,
    src?: string,
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'TextColProps' circularly references it... Remove this comment to see the full error message
type TextColProps = OwnTextColProps & typeof TextCol.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'TextCol' implicitly has type 'any' because it doe... Remove this comment to see the full error message
const TextCol = ({ children, src }: TextColProps) =>
    src ? (
        <StyledCol src={src} xl={5}>
            {children}
        </StyledCol>
    ) : (
        <StyledCol src={src} xl={6}>
            {children}
        </StyledCol>
    );

type OwnServiceItemProps = {
    title: string,
    subtitle: string,
    text: string,
    src: string,
    link: string,
    light?: boolean,
    listItems?: string[],
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'ServiceItemProps' circularly reference... Remove this comment to see the full error message
type ServiceItemProps = OwnServiceItemProps & typeof ServiceItem.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'ServiceItem' implicitly has type 'any' because it... Remove this comment to see the full error message
const ServiceItem = ({
    title,
    subtitle,
    text,
    src,
    link,
    light,
    listItems,
}: ServiceItemProps) => {
    const RightCol = () => {
        if (src)
            return (
                <ImageCol xl={7} light={light}>
                    <StyledImage src={src} />
                </ImageCol>
            );

        return null;
    };

    return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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

                        <DeliverableList>
                            {listItems.join(', ')}
                        </DeliverableList>
                    </StyledTextBlock>
                </TextCol>

                <RightCol />
            </StyledRow>
        </StyledContainer>
    );
};

export default ServiceItem;

ServiceItem.defaultProps = {
    light: false,
    listItems: [],
};

TextCol.defaultProps = {
    children: undefined,
    src: undefined,
};
