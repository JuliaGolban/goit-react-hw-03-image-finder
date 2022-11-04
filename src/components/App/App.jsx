import React, { Component } from 'react';
import ApiService from '../services/API-service';
import Searchbar from "../Searchbar/Searchbar";
import ImageGalleryList from "../ImageGallery/ImageGalleryList/ImageGalleryList"
import ImageGalleryItem from "../ImageGallery/ImageGalleryItem/ImageGalleryItem"
import TextButton from '../Buttons/TextButton/TextButton';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import NotifyMessages from '../Messages/NotifyMessages';
import css from './App.module.css';

const apiServise = new ApiService();
const notify = new NotifyMessages();

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    showModal: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const images = apiServise.fetchImages();
      this.setState({ images });
    } catch (error) {
      notify.onFetchError();
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleSearchbar = () => { }
  
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal, isLoading } = this.state;

    return (
      <div className={css.App}>
        <Searchbar />
        <ImageGalleryList />
        
        {isLoading &&
          <Loader />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ImageGalleryItem />
          </Modal>
        )}
        <TextButton text='Load more' />
      </div>
    );
  };
}

export default App;