define(['handlebars'], function(Handlebars) {

this["Templates"] = this["Templates"] || {};

this["Templates"]["app/dist/templates/main.handlebars"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <h3> Anneé :"
    + alias4(((helper = (helper = helpers.Annee || (depth0 != null ? depth0.Annee : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Annee","hash":{},"data":data}) : helper)))
    + " | Desc: "
    + alias4(((helper = (helper = helpers.Desc || (depth0 != null ? depth0.Desc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Desc","hash":{},"data":data}) : helper)))
    + "</h3>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "<div class=\"personne\">\r\n  <h1>Nom : "
    + alias4(((helper = (helper = helpers.Nom || (depth0 != null ? depth0.Nom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Nom","hash":{},"data":data}) : helper)))
    + " Prenom: "
    + alias4(((helper = (helper = helpers.Prenom || (depth0 != null ? depth0.Prenom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Prenom","hash":{},"data":data}) : helper)))
    + "</h1>\r\n  <div class=\"body\">\r\n";
  stack1 = ((helper = (helper = helpers.Formation || (depth0 != null ? depth0.Formation : depth0)) != null ? helper : alias2),(options={"name":"Formation","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.Formation) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\r\n</div>\r\n";
},"useData":true});

this["Templates"]["app/dist/templates/material.handlebars"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr contenteditable=\"false\">\r\n  <td>"
    + alias4(((helper = (helper = helpers.ID || (depth0 != null ? depth0.ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ID","hash":{},"data":data}) : helper)))
    + "</td>\r\n  <td>"
    + alias4(((helper = (helper = helpers.Model || (depth0 != null ? depth0.Model : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Model","hash":{},"data":data}) : helper)))
    + "</td>\r\n  <td>"
    + alias4(((helper = (helper = helpers.Marque || (depth0 != null ? depth0.Marque : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Marque","hash":{},"data":data}) : helper)))
    + "</td>\r\n  <td>"
    + alias4(((helper = (helper = helpers.Etat || (depth0 != null ? depth0.Etat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Etat","hash":{},"data":data}) : helper)))
    + "</td>\r\n  <td>"
    + alias4(((helper = (helper = helpers.Type || (depth0 != null ? depth0.Type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Type","hash":{},"data":data}) : helper)))
    + "</td>\r\n  <td>"
    + alias4(((helper = (helper = helpers.Desc || (depth0 != null ? depth0.Desc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Desc","hash":{},"data":data}) : helper)))
    + "</td>\r\n  <td>\r\n    <a href=\"javascript:void(0)\" class=\"btn btn-success\" id =\"Affectation\">Affectation</a>\r\n    <a href=\"javascript:void(0)\" class=\"btn btn-danger\" id =\"Supprimer\">Supprimer</a>\r\n  </td>\r\n</tr>\r\n";
},"useData":true});

this["Templates"]["app/dist/templates/tableau.handlebars"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <tr contenteditable=\"false\">dd\r\n        <td>"
    + alias4(((helper = (helper = helpers.ID || (depth0 != null ? depth0.ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ID","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>"
    + alias4(((helper = (helper = helpers.Model || (depth0 != null ? depth0.Model : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Model","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>"
    + alias4(((helper = (helper = helpers.Type || (depth0 != null ? depth0.Type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Type","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>"
    + alias4(((helper = (helper = helpers.Etat || (depth0 != null ? depth0.Etat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Etat","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>"
    + alias4(((helper = (helper = helpers.Desc || (depth0 != null ? depth0.Desc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Desc","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>\r\n          <a href=\"#\" class=\"btn btn-success\" id =\"Affectation\">Affectation</a>\r\n          <a href=\"#\" class=\"btn btn-danger\" id =\"Supprimer\">Supprimer</a>\r\n        </td>\r\n      </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<div class=\"col-lg-12\">\r\n  <table class=\"table table-condensed\">\r\n    <thead>\r\n      <tr>\r\n        <th> titre 1 <a href=\"#\"><span class=\"glyphicon glyphicon-sort\" aria-hidden=\"true\"></span></a></th>\r\n        <th> titre 2 <a href=\"#\"><span class=\"glyphicon glyphicon-sort\" aria-hidden=\"true\"></span></a></th>\r\n        <th> titre 3 <a href=\"#\"><span class=\"glyphicon glyphicon-sort\" aria-hidden=\"true\"></span></a></th>\r\n        <th> titre 4 <a href=\"#\"><span class=\"glyphicon glyphicon-sort\" aria-hidden=\"true\"></span></a></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n";
  stack1 = ((helper = (helper = helpers.child || (depth0 != null ? depth0.child : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"child","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.child) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </tbody>\r\n</table>\r\n</div>\r\n";
},"useData":true});

return this["Templates"];

});