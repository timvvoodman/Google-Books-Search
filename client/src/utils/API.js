//Get Data from Google Books API
import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyAkSf8R_bkgi3tU844nbit2EcfMaslUiW8";

export default {
  getBooks: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
};
