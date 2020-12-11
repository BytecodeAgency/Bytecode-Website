import React from 'react';
import {
    AuthorBlock,
    AuthorBlockPhotoWrapper,
    AuthorBlockPhoto,
    AuthorInfo,
    Name,
    Position,
} from './Author.components';

type Props = {
    img: string;
    name: string;
    title?: string;
};

// @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'props'. Did you mean 'Props'?
const Author =props: Props => {
    // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'props'. Did you mean 'Props'?
    const { img, name, title } = props;
    const image = require(`../../images/img/authors/${img}`);
    return (
        <AuthorBlock>
            <AuthorBlockPhotoWrapper>
                <AuthorBlockPhoto src={image} />
            </AuthorBlockPhotoWrapper>
            <AuthorInfo>
                <Name>{name}</Name>
                <Position>{title}</Position>
            </AuthorInfo>
        </AuthorBlock>
    );
};

export default Author;

Author.defaultProps = {
    title: '',
};
