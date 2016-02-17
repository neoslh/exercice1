require.config({
  paths: {
    'jquery': '../../components/jquery/dist/jquery',
    'bootstrap':'../../components/bootstrap/dist/js/bootstrap',
    'underscore': '../../components/underscore/underscore',
    'Backbone': '../../components/backbone/backbone',
    'handlebars':'../../components/handlebars/handlebars',
    'MaterielViewModule':'views/MaterielView',
    'TableauViewModule':'views/TableauView',
    'MaterielCollectionModule':'collections/MaterielCollection',
    'MaterielModule':'models/Materiel',
    'Router':'router/router',
    'Templates':'templates'
  },
  shim: {
       'bootstrap':{deps: ['jquery']}
   }

});

require([
  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});
