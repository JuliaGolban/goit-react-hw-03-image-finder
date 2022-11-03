import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { List, Item } from './ImageGalleryList.styled';

const ImageGallery = ({hits, onImageClick}) => {
    return (
        <List>
            {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
                <Item key={id}>
                    <ImageGalleryItem
                        id={id}
                        original={webformatURL}
                        preview={largeImageURL}
                        description={tags}
                        onClick={() => onImageClick(id)}
                    />
                </Item>
            ))}
        </List>
    )
}

ImageGallery.propTypes = {
    onImageClick: PropTypes.func,
    hits: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            webformatURL: PropTypes.string,
            largeImageURL: PropTypes.string,
            tags: PropTypes.string,
        })) 
}

export default ImageGallery;