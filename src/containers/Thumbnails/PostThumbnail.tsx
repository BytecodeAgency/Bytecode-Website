import React from 'react';
import {
    Subtitle,
    ThumbnailBase,
    ThumbnailContent,
    ThumbnailImg,
    // @ts-expect-error ts-migrate(6142) FIXME: Module './PostThumbnail.components' was resolved t... Remove this comment to see the full error message
} from './PostThumbnail.components';

const cutOffText = (string: any, maxLength: any) => {
    if (string.length > maxLength) {
        const subString = `${string.substring(0, maxLength)}...`;
        return subString;
    }
    return string;
};

type OwnPostThumbnailProps = {
    big?: boolean,
    title: string,
    slug: string,
    category?: string,
    postImageUrl: string,
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'PostThumbnailProps' circularly referen... Remove this comment to see the full error message
type PostThumbnailProps = OwnPostThumbnailProps &
    typeof PostThumbnail.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'PostThumbnail' implicitly has type 'any' because ... Remove this comment to see the full error message
const PostThumbnail = ({
    big,
    title,
    slug,
    category,
    postImageUrl,
}: PostThumbnailProps) => {
    return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ThumbnailBase big={big} to={slug}>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ThumbnailImg
                big={big}
                className="thumbnail-img"
                img={postImageUrl}
            />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ThumbnailContent big={big}>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Subtitle className="subtitle">{category}</Subtitle>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h5>{cutOffText(title, 80)}</h5>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <a className="thumbnail-cta caption" href={slug}>
                    Lees meer
                </a>
            </ThumbnailContent>
        </ThumbnailBase>
    );
};

export default PostThumbnail;

PostThumbnail.defaultProps = {
    big: false,
    category: undefined,
};
