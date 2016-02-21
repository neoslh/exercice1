define(['underscore','Backbone','MaterielCollectionModule','MaterielViewModule','text!TableTemplate'], function (_,Backbone,MaterielCollectionModule,MaterielViewModule,TableTemplate) {

    var TableauViewModule = Backbone.View.extend({
               el: '#table',
               collection : MaterielCollectionModule,
               template:TableTemplate,
               initialize: function() {
                 this.listenTo(this.collection, 'add', this.render);
                 this.collection.on("Trie",this.render,this)
                 this.listenTo(this.collection, 'remove', this.render);
                },
               render: function() {
                 this.$el.html(this.template);
                 var av_this=this;
                 var element=$("#table tbody");
                  element.empty();
                  this.collection.forEach(function(e) {
                    var materialview = new MaterielViewModule({
                      model:e
                    });
                    element.append(materialview.render());
                    materialview.on("Supprimer_element",av_this.Supprimer,av_this);
                   });
                   return this;
              },
              ajouter:function(elem) {
                console.log('--------');
                console.log(elem);
                this.collection.push(elem);
              },
              Supprimer:function(elem) {
                this.collection.remove(elem);
              }
      });

    return TableauViewModule;
});
