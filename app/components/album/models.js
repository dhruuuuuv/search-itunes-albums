import PageableCollection from 'backbone.paginator';

let AlbumModel = Bb.Model.extend({
  urlRoot: 'https://itunes.apple.com/search?',
  defaults: {
      artistName: '-',
      collectionName: '-',
  },
  schema: {
    artworkUrl100: { type: 'Image', validators: ['required'] },
    artistName: 'Text',
    CollectionName: 'Text',
  },
});

let AlbumsCollection = PageableCollection.extend({
  url: 'https://itunes.apple.com/search?',
  model: AlbumModel,
  mode: 'infinite',
  state: {
    pageSize: 20,
    media: 'music'
  },
  queryParams: {
    // currentPage: '_page',
    pageSize: 'limit',
    media: 'music'
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
