// @flow

import BooksModel from '../models/books';

// utiliza la api de google books
// https://developers.google.com/books/docs/v1/getting_started

export default class BooksService {

  static async Get( params ) {

    let { term, limit = 20 } = params;
    if ( !term ) term = 'javascript'; // parametros por defecto

    const url = `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=${limit}`;
    let res = {};

    try {
      const req = await fetch(url);
      const data = await req.json();
      res = new BooksModel(data);
    }
    catch (err) {
      // error de red o formato de respuesta
      res = { error: true, items: [] };
    }

    return res;
  }
}