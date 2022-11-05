import { Loading } from 'notiflix/build/notiflix-loading-aio';

export default class NotiflixLoading {
  onLoading() {
    return Loading.circle('Loading...', {
      backgroundColor: 'rgba(0,0,0,0.8)',
      svgColor: '#3f51b5',
      messageFontSize: '20px',
    });
  }

  onLoaded() {
    return Loading.remove();
  }
}
