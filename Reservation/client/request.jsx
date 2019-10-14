import axios from 'axios';

const request = {
  getReservations: callback => {
    axios.get('/now', { params: { date: new Date() } }).then(result => {
      let listing = result.data[0];
      callback(listing);
    });
  }
};

export default request;
