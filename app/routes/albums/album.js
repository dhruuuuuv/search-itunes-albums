import AlbumDetail from 'album/detail/index.js';

//BEGIN ROUTES
var routes = {
  'album/:id': 'album'
}
//END ROUTES

export default (layout) => Backbone.Router.extend({
  routes,
  initialize(options) {},
  album(params) {
    layout.showChildView('region1', new AlbumDetail({id: params}))
  },
})
