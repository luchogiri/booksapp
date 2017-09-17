// @flow

import moment from 'moment';
const defaultImg = require('../../public/img/img-book-default.png');


export default class BooksModel {

  constructor(data) {

    this.items = data.items.map(i => new BookModel(i));
  }
}

class BookModel {

  constructor(data) {

    const { volumeInfo = {} } = data;
    const { imageLinks = {} } = volumeInfo;

    this.id = data.id;
    this.title = volumeInfo.title || '';
    this.description = volumeInfo.description || '- no description -';
    this.date = moment( volumeInfo.publishedDate || '' );
    this.publisher = volumeInfo.publisher || '';
    this.image = imageLinks.smallThumbnail ? { uri: imageLinks.smallThumbnail } : defaultImg;
  }
}