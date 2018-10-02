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
    pageSize: 20,
    media: 'music'
  },
  queryParams: {
    media: 'music',
  },
  parse: function(response) {
    console.log(response.results);
    return response.results;
  }
});

export default {
  AlbumModel,
  AlbumsCollection,
}
