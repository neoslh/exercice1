define(['underscore','Backbone','MaterielModule'], function (_,Backbone,MaterielModule) {

      var MaterielCollectionModule = Backbone.Collection.extend({
        model: MaterielModule
      });

    return MaterielCollectionModule;
});
