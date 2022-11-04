import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = () => {
    return (
        <li className={css.gallery_item}>
            <img className={css.gallery_image}
                src="" alt="" />
        </li>
    )
}

export default ImageGalleryItem;