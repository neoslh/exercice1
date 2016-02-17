define(['jquery','bootstrap','underscore','Backbone','TableauViewModule'], function ($,_bootstrap,_,Backbone,TableauViewModule) {

  var Router = Backbone.Router.extend({
      routes: {
          '': 'ajouterR',
          'ajouter': 'ajouterR',
          'afficher': 'afficherR',
      },
      ajouterR: function () {
       $(".verification").popover('destroy');
      $("#form").show();
      $("#table").hide();
      },
      afficherR: function () {
       $(".verification").popover('destroy');
        $("#form").hide();
        $("#table").show();
        var tableauvew=new TableauViewModule({collection:tableau});
        tableauvew.render();
      }
  });

  var initialize = function(){

    var router = new Router();
     Backbone.history.start();
    };
    return {
     initialize: initialize
    };
 });
