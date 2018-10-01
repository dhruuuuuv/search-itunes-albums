import PageableCollection from 'backbone.paginator';

let AlbumModel = Bb.Model.extend({
  urlRoot: 'https://itunes.apple.com/search?term="hello"&mediaType="music"',
  //url: 'http://localhost:3000/recipes',
  defaults: {
      // prep: '-',
      // cook: '-',
      // portions: '-',
      artworkUrl100: '_',
      artistName: '-',
      collectionName: '-',
  },
  schema: {
    artworkUrl100: { type: 'Image', validators: ['required'] },
    artistName: 'Text',
    CollectionName: 'Text',
    // title: { type: 'Text', validators: ['required'] },
    // prep: 'Text',
    // cook: 'Text',
    // directions: { type: 'TextArea', validators: ['required'] },
    // ingredients: { type: 'TextArea', validators: ['required'] },
  },
});

let AlbumsCollection = PageableCollection.extend({
  // TODO obviously reconfigure to take search as input
  url: 'https://itunes.apple.com/search?term="hello"&mediaType="music"',
  model: AlbumModel,
  // mode: 'infinite',
  state: {
    pageSize: 20,
  },
  queryParams: {
    // currentPage: '_page',
    pageSize: '_limit'
  },
  parse: function(response) {
    // return { totalRecords: this.totalRecords || 0};
    console.log(response.results);
    return response.results;
  },
  fetch: function(options) {
    var jqXHR = PageableCollection.prototype.fetch.call(this, options);
    jqXHR.done(() => {
      this.totalRecords = parseInt(
        jqXHR.getResponseHeader('X-Total-Count')
      );
    });
    return jqXHR;
  }
});

export default {
  AlbumModel,
  AlbumsCollection,
}
