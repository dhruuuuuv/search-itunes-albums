import AlbumForm from 'album/form/index.js';

//BEGIN ROUTES
var routes = {
  'album/:id/edit': 'albumEdit',
  'album/new': 'albumNew'
}
//END ROUTES

export default (layout) => Backbone.Router.extend({
  routes,
  albumEdit(params) {
    layout.showChildView('region1', new AlbumForm({id: params}))
  },
  albumNew(params) {
    layout.showChildView('region1', new AlbumForm())
  },
})
