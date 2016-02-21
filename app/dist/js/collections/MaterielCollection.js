define(['underscore','Backbone','MaterielModule'], function (_,Backbone,MaterielModule) {

      var MaterielCollectionModule = Backbone.Collection.extend({
        model: MaterielModule,
        TriePar: function(element){
            var T = _.sortBy(this.models, function(model){
                return model.get(element).toLowerCase();
            });
            this.models = T;
            this.trigger('Trie');
          }
      });

    return MaterielCollectionModule;
});
