import React from 'react';
import ImageBlockProps from './ImageBlock.types';
import ImageBlockFigure from './ImageBlock.components';

const ImageBlock: React.FC<ImageBlockProps> = ({ src, alt }) => {
    return (
        <section>
            <ImageBlockFigure>
                <img src={src} alt={alt} />
            </ImageBlockFigure>
        </section>
    );
};

export default ImageBlock;
