
define(['underscore','Backbone'], function (_,Backbone) {

      var MaterielModule = Backbone.Model.extend({
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


     return MaterielModule;
 });
