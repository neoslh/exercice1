
 var tableau;
define([
  'jquery',
  'Router',
  'MaterielCollectionModule',
  'MaterielModule'
], function($,Router,MaterielCollectionModule,MaterielModule){
  var initialize = function(){
    Data = [
    	{ID : "5", Marque : "marque5",Model : "mod1",Etat : "Disponible", Type : "UC",Desc : "Unité central"},
    	{ID : "2", Marque : "marque2",Model : "mod1",Etat : "Hors service", Type : "ecran",Desc : "écran"},
    	{ID : "1", Marque : "marque1",Model : "mod1",Etat : "En réparation", Type : "pc",Desc : "pc portable"},
    	{ID : "4", Marque : "marque4",Model : "mod1",Etat : "En réparation", Type : "clavier",Desc : "clavier"},
    	{ID : "3", Marque : "marque3",Model : "mod1",Etat : "En réparation", Type : "tel",Desc : "téléphone"},
    	{ID : "7", Marque : "marque7",Model : "mod1",Etat : "Disponible", Type : "UC",Desc : "Unité central"}
    	];
      tableau=new MaterielCollectionModule();
      Data.forEach(function(e) {
        tableau.push(new MaterielModule(e));
      });

    Router.initialize();
  }

  function verification(e) {

            if(!$(e).is(':visible')) return true;

            switch ($(e).attr('data-type')) {
              case 'nombre':
                return (/^[0-9]{1,}$/.test($(e).val()));
                break;
                case 'nom':
                  return (/^[a-zA-Z]{1,}$/.test($(e).val()));
                  break;
                  case 'text':
                    return (/^[a-zA-Z0-9.,]{1,}$/.test($(e).val()));
                    break;
              default:
            }
            return false;
        }

  $(document).on('change','#Etat',function() {
        if($(this).val()=='Affecté')
          $('.hide_input').show();
        else{
          $(".verification").popover('destroy');
          $('.hide_input').hide();
        }

  }).on('change','.verification',function(){
      if(!verification(this)){
        $(this).css("border-color", "#C0392B");
        $(".verification").popover('destroy');
        $(this).popover({
             placement: 'right',
             template:'<div class="popover popover_verification" role="tooltip"><div class="arrow arrow_verification"></div><div class="popover-content"></div></div>',
             html:true,
             container:'body',
             content: function() {
                return "<span> vérifier le contenu du champ </span>";
             }
         });
         $(this).popover('show');
      }
      else {
        $(this).css("border-color", "#E67E22");
        $(this).popover('destroy');
      }
  }).on('click','#ajouter',function(){
    var valid=true;
    $('#form .verification').each(function(e){
        valid = valid==false?false:verification(this);
    })
    if(valid)
    {
      tableau.push(new MaterielModule({
        ID:$('#ID').val(),
        Model:$('#Model').val(),
        Marque:$('#Marque').val(),
        Type:$('#Type').val(),
        Etat:$('#Etat').val(),
        Personne:$('#Personne').val(),
        Service:$('#Service').val(),
        Desc:$('#Desc').val()
      }));

      $('#ID').val('');
      $('#Model').val('');
      $('#Marque').val('');
      $('#Personne').val('');
      $('#Service').val('');
      $('#Desc').val('');
        location.hash = '#/afficher';
    }
  }).on('click','.marketing thead th a',function(){

    var index=$(this).parents().closest('tr').children().index($(this).parent());
    for(var i = ($(this).parents().closest('table').find('tbody').children().length -1) ; i > 0 ; i--)
    {
      var i_min=i;
       var min=$( $( $(this).parents().closest('table').find('tbody').children()[i] ).children()[index]).html().toUpperCase();
      for(var j = (i-1) ; j >=0 ; j--)
        if( min  < $( $( $(this).parents().closest('table').find('tbody').children()[j] ).children()[index]).html().toUpperCase())
        {
          i_min=j;
          min=$( $( $(this).parents().closest('table').find('tbody').children()[j] ).children()[index]).html();
         }
        var tmp=$($(this).parents().closest('table').find('tbody').children()[i_min]).html();
        $($(this).parents().closest('table').find('tbody').children()[i_min]).html($($(this).parents().closest('table').find('tbody').children()[i]).html())
        $($(this).parents().closest('table').find('tbody').children()[i]).html(tmp);
    }

  }).on('click','#Supprimer',function() {
    $(this).parents().closest('tr').remove();
  })


  return {
    initialize: initialize
  };
});
