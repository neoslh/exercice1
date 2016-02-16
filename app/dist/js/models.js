var Materiel = Backbone.Model.extend({
  initialize: function() {
    console.log('--- init materiel model ');
  },
  defaults:{
    ID:'',
    Model:'',
    Marque:'',
    Type:'',
    Etat:'',
    Personne:'',
    Service:'',
    Desc:''
  }
});
var MaterielCollection = Backbone.Collection.extend({
  model: Materiel
});
