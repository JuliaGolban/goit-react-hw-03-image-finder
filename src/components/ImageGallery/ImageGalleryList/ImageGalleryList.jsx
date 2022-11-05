import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGalleryList.module.css';

const ImageGalleryList = ({ images, toogleModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          original={largeImageURL}
          preview={webformatURL}
          description={tags}
          onClick={() => toogleModal()}
        />
      ))}
    </ul>
  );
};

ImageGalleryList.propTypes = {
  toogleModal: PropTypes.func,
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
