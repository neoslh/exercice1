
define(['underscore','Backbone','MaterielModule','handlebars','templates'], function (_,Backbone,MaterielModule,Handlebars,Templates) {

  var MaterielViewModule = Backbone.View.extend({
                  model:MaterielModule,
                  template:Templates['app/dist/templates/material.handlebars'],
                  initialize: function() {

                  },
                  render: function() {
                     return this.template(this.model.attributes);
                  }
              });


     return MaterielViewModule;
 });
