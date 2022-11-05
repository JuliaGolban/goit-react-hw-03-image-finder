import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGalleryList.module.css';

const ImageGalleryList = ({ images, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          original={webformatURL}
          preview={largeImageURL}
          description={tags}
          onClick={() => onImageClick(id)}
        />
      ))}
    </ul>
  );
};

ImageGalleryList.propTypes = {
  onImageClick: PropTypes.func,
  hits: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ),
};

export default ImageGalleryList;
