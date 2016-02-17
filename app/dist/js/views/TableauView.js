define(['underscore','Backbone','MaterielCollectionModule','MaterielViewModule'], function (_,Backbone,MaterielCollectionModule,MaterielViewModule) {

    var TableauViewModule = Backbone.View.extend({
              el: 'tbody',
               collection : MaterielCollectionModule,
               initialize: function() {
                },
               render: function() {
                 var element=this.$el;
                  element.empty();
                  this.collection.forEach(function(e) {
                    var materialview = new MaterielViewModule({
                      model:e
                    });
                    element.append(materialview.render());
                   });
                   return this;
              }
      });

    return TableauViewModule;
});
