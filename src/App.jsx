import React, { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGalleryList/ImageGalleryList';
// import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
// import Modal from 'components/Modal/Modal';
import LoadMoreBtn from 'components/Button/Button';
// import Loader from 'components/Loader/Loader';
import Container from 'components/Container/Container';

class App extends Component {
  state = {
    images: [],
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    // const { showModal } = this.state;

    return (
      <Container>
        <Searchbar />
        <ImageGallery />

        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <ImageGalleryItem />
          </Modal>
        )} */}

        <LoadMoreBtn />
        {/* <Loader /> */}

      </Container>
    );
  }
}

export default App;