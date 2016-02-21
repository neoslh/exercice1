require.config({
  paths: {
    'jquery': '../../components/jquery/dist/jquery',
    'bootstrap':'../../components/bootstrap/dist/js/bootstrap',
    'underscore': '../../components/underscore/underscore',
    'Backbone': '../../components/backbone/backbone',
    'handlebars':'../../components/handlebars/handlebars',
    'MaterielViewModule':'views/MaterielView',
    'TableauViewModule':'views/TableauView',
    'FormlViewModule':'views/FormView',
    'BodyViewModule':'views/BodyView',
    'MaterielCollectionModule':'collections/MaterielCollection',
    'MaterielModule':'models/Materiel',
    'Router':'router/router',
    'Templates':'templates',
    'FormTemplate':'../templates/form.html',
    'TableTemplate':'../templates/tableau.html',
    'Traitement':'Traitement'
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
