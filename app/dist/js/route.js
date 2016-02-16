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
      var tableauvew=new TableauView({collection:tableau});
      tableauvew.render();
    }
});
