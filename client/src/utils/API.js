//Get Data from Google Books API
import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyAkSf8R_bkgi3tU844nbit2EcfMaslUiW8";

const API = {
  getBooks: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },

  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },

  getSaved: function () {
    return axios.get("/api/books");
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
};

export default API;
