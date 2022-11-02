import React, { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGalleryList/ImageGalleryList';
import Modal from 'components/Modal/Modal';
import LoadMoreBtn from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Container from "./components/Container/Container";

class App extends Component {
  state = {
  };
  render() {
    return (
      <Container>
        <Searchbar />
        <ImageGallery />
        <LoadMoreBtn />
        <Loader />
        <Modal />
      </Container>
    );
  }
}

export default App;