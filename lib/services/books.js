// @flow

// utiliza la api de google books
// https://developers.google.com/books/docs/v1/getting_started

export default class BooksService {

  static async Get() {

    let res = {};
    const url = 'https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=40';

    try {
      const req = await fetch(url);
      res = await req.json();
    }
    catch (err) {
      // error de red o formato de respuesta
      res = { error: true, items: [] };
    }

    return res;
  }
}