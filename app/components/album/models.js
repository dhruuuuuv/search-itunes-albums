import PageableCollection from 'backbone.paginator';

let AlbumModel = Bb.Model.extend({
  urlRoot: 'https://itunes.apple.com/search?',
  defaults: {
      trackName: '-',
      artistName: '-',
      collectionName: '-',
  },
  schema: {
    artworkUrl100: { type: 'Image', validators: ['required'] },
    trackName: 'Text',
    artistName: 'Text',
    CollectionName: 'Text',
  },
});

let AlbumsCollection = PageableCollection.extend({
  url: 'https://itunes.apple.com/search?',
  model: AlbumModel,
  mode: 'client',
  state: {
    // firstPage: 0,
    pageSize: 20,
    media: 'music'
  },
  queryParams: {
  //   // currentPage: 'offset',
  //   // pageSize: 'limit',
    media: 'music',
  //   // directions: { "-20": "asc", "20": "desc" }
  },
  parse: function(response) {
    // return { totalRecords: this.totalRecords || 0};
    console.log(response.results);
    return response.results;
  },
  // fetch: function(options) {
  //   var jqXHR = PageableCollection.prototype.fetch.call(this, options);
  //   jqXHR.done(() => {
  //     this.totalRecords = parseInt(
  //       jqXHR.getResponseHeader('X-Total-Count')
  //     );
  //   });
  //   return jqXHR;
  // }
});

export default {
  AlbumModel,
  AlbumsCollection,
}
