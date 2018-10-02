import AlbumGrid from 'album/grid/index.js';

//BEGIN ROUTES
var routes = {
  '': 'albumgrid'
}
//END ROUTES

export default (layout) => Backbone.Router.extend({
  routes,
  initialize(options) {
  },
  albumgrid(params) {
    layout.showChildView('region1', new AlbumGrid());
  },
})
