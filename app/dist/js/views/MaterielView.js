
define(['underscore','Backbone','MaterielModule','handlebars','templates'], function (_,Backbone,MaterielModule,Handlebars,Templates) {

  var MaterielViewModule = Backbone.View.extend({
                  tagName: "tr",
                  model:MaterielModule,
                  template:Templates['app/dist/templates/material.handlebars'],
                  initialize: function() {

                  },
                  render: function() {
                    $(this.$el).html(this.template(this.model.attributes));
                     return this.$el;
                  },
                  events:
                  {
                    'click a.Supprimer':'Supprimer_element'
                  },
                  Supprimer_element:function() {
                    //console.log('Supprime');
                    this.trigger('Supprimer_element',this.model);
                  }
              });


     return MaterielViewModule;
 });
