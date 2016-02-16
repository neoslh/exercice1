
var MaterielView = Backbone.View.extend({
                model:Materiel,
                template: Handlebars.templates['app/dist/templates/material.handlebars'],
                initialize: function() {

                },
                render: function() {
                   return this.template(this.model.attributes);
                }
            });

var TableauView = Backbone.View.extend({
          el: 'tbody',
           collection : MaterielCollection,
           initialize: function() {
            },
           render: function() {
             var element=this.$el;
              element.empty();
              this.collection.forEach(function(e) {
                var materialview = new MaterielView({
                  model:e
                });
                element.append(materialview.render());
               });
               return this;
          }
  });
