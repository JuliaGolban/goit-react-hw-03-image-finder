import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ id, preview, original, description, onImageClick }) => {
    return (
        <Image
            src={preview}
            data-source={original}
            alt={description}
            onClick={onImageClick}
            loading="lazy" width="240" height="170"
        />
    )
}

ImageGalleryItem.propTypes = {
    id: PropTypes.string,
    preview: PropTypes.string,
    original: PropTypes.string,
    description: PropTypes.string,
    onImageClick: PropTypes.func,
}

export default ImageGalleryItem;