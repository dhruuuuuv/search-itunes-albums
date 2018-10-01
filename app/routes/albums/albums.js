import AlbumList from 'album/list/index.js';

//BEGIN ROUTES
var routes = {
  '': 'albums'
}
//END ROUTES

export default (layout) => Backbone.Router.extend({
  routes,
  initialize(options) {
  },
  albums(params) {
    layout.showChildView('region1', new AlbumList());
  },
})
