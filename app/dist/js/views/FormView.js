
define(['underscore','Backbone','text!FormTemplate','MaterielModule','Traitement'], function (_,Backbone,FormTemplate,MaterielModule,Traitement) {

  var FormlViewModule = Backbone.View.extend({
                  el:"#form",
                  template:FormTemplate,
                  initialize: function() {

                  },
                  render: function() {
                    this.$el.html(this.template);
                     return this;
                  },
                  events: {
                    'click #ajouter' : 'AjouterClick',
                  },
                  AjouterClick:function() {
                    //console.log('click');
                    var valid=true;
                    $('#form .verification').each(function(e){

                        valid = valid==false?false:Traitement.verification(this);
                    })
                    if(valid)
                    {
                      var m=new MaterielModule({
                        ID:$('#ID').val(),
                        Model:$('#Model').val(),
                        Marque:$('#Marque').val(),
                        Type:$('#Type').val(),
                        Etat:$('#Etat').val(),
                        Personne:$('#Personne').val(),
                        Service:$('#Service').val(),
                        Desc:$('#Desc').val()
                      });

                      $('#ID').val('');
                      $('#Model').val('');
                      $('#Marque').val('');
                      $('#Personne').val('');
                      $('#Service').val('');
                      $('#Desc').val('');
                      this.trigger('ajouter_element',m);
                        location.hash = '#/afficher';
                  }
                }
              });


     return FormlViewModule;
 });
