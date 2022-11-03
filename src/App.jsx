import React, { Component } from 'react';
import ApiService from 'components/services/API-service';
import Container from 'components/Container/Container';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGalleryList/ImageGalleryList';
import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import LoadMoreBtn from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import NotifyMessages from './components/Messages/NotifyMessages';

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
      <Container>
        <Searchbar />
                
        {isLoading &&
          <Loader />}
        
        <ImageGallery />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ImageGalleryItem />
          </Modal>
        )}

        <LoadMoreBtn />

      </Container>
    );
  }
}

export default App;