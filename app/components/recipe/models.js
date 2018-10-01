import PageableCollection from 'backbone.paginator';

let AlbumModel = Bb.Model.extend({
  urlRoot: 'https://itunes.apple.com/search?',
  //url: 'http://localhost:3000/recipes',
  defaults: {
      // prep: '-',
      // cook: '-',
      // portions: '-',
      artist: '-',
      album: '-',
  },
  schema: {
    artwork: { type: 'Image', validators: ['required'] },
    artist: 'Text',
    album: 'Text',
    // title: { type: 'Text', validators: ['required'] },
    // prep: 'Text',
    // cook: 'Text',
    // directions: { type: 'TextArea', validators: ['required'] },
    // ingredients: { type: 'TextArea', validators: ['required'] },
  },
});

let AlbumsCollection = PageableCollection.extend({
  url: 'https://itunes.apple.com/search?',
  model: AlbumModel,
  mode: 'infinite',
  state: {
    pageSize: 20,
  },
  queryParams: {
    currentPage: '_page',
    pageSize: '_limit'
  },
  parseState: function(response) {
    return { totalRecords: this.totalRecords || 0};
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
