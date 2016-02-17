// Filename: app.js
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

    var tableau=new MaterielCollectionModule();

    Router.initialize();
  }

  return {
    initialize: initialize
  };
});
