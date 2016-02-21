define(['underscore','Backbone','TableauViewModule','MaterielViewModule',  'FormlViewModule','TableauViewModule'], function (_,Backbone,TableauViewModule,MaterielViewModule, FormlViewModule,TableauViewModule) {

    var BodyViewModule = Backbone.View.extend({
              el: 'body',
              attributes: {
              tableauViewModule:TableauViewModule,
              formlViewModule:FormlViewModule,
              },
               initialize: function() {
                 //this.listenTo(this.attributes.formlViewModule, 'myEvent', this.attributes.formlViewModule.Ajouter(this.attributes.tableauViewModule.collection));
                 this.attributes.formlViewModule.on('ajouter_element',this.attributes.tableauViewModule.ajouter,this.attributes.tableauViewModule);

                },
                events:
                {
                  'click th a':'TriePar'
                },
                TriePar:function(e) {
                    var elem=$(e.toElement).parents().closest('th').text();
                    this.attributes.tableauViewModule.collection.TriePar(elem);
                },
               render: function() {
                 this.attributes.tableauViewModule.render();
                 this.attributes.formlViewModule.render();
                   return this;
              }
      });

    return BodyViewModule;
});
