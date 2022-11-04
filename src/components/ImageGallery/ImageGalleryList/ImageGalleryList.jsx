import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGalleryList.module.css';

const ImageGalleryList = () => {
    return (
        <ul className={css.gallery}>
            <ImageGalleryItem/>
        </ul>
    )
}

export default ImageGalleryList;