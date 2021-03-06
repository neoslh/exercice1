define(['handlebars'], function(Handlebars) {

this["Templates"] = this["Templates"] || {};

this["Templates"]["app/dist/templates/main.handlebars"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <h3> Anneé :"
    + alias4(((helper = (helper = helpers.Annee || (depth0 != null ? depth0.Annee : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Annee","hash":{},"data":data}) : helper)))
    + " | Desc: "
    + alias4(((helper = (helper = helpers.Desc || (depth0 != null ? depth0.Desc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Desc","hash":{},"data":data}) : helper)))
    + "</h3>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "<div class=\"personne\">\n  <h1>Nom : "
    + alias4(((helper = (helper = helpers.Nom || (depth0 != null ? depth0.Nom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Nom","hash":{},"data":data}) : helper)))
    + " Prenom: "
    + alias4(((helper = (helper = helpers.Prenom || (depth0 != null ? depth0.Prenom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Prenom","hash":{},"data":data}) : helper)))
    + "</h1>\n  <div class=\"body\">\n";
  stack1 = ((helper = (helper = helpers.Formation || (depth0 != null ? depth0.Formation : depth0)) != null ? helper : alias2),(options={"name":"Formation","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.Formation) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n</div>\n";
},"useData":true});

this["Templates"]["app/dist/templates/material.handlebars"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n  <td>"
    + alias4(((helper = (helper = helpers.ID || (depth0 != null ? depth0.ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ID","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>"
    + alias4(((helper = (helper = helpers.Model || (depth0 != null ? depth0.Model : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Model","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>"
    + alias4(((helper = (helper = helpers.Marque || (depth0 != null ? depth0.Marque : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Marque","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>"
    + alias4(((helper = (helper = helpers.Etat || (depth0 != null ? depth0.Etat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Etat","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>"
    + alias4(((helper = (helper = helpers.Type || (depth0 != null ? depth0.Type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Type","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>"
    + alias4(((helper = (helper = helpers.Desc || (depth0 != null ? depth0.Desc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Desc","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>\n    <a href=\"javascript:void(0)\" class=\"btn btn-success Affectation\">Affectation</a>\n    <a href=\"javascript:void(0)\" class=\"btn btn-danger Supprimer\">Supprimer</a>\n  </td>\n";
},"useData":true});

this["Templates"]["app/dist/templates/tableau.handlebars"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <tr contenteditable=\"false\">dd\n        <td>"
    + alias4(((helper = (helper = helpers.ID || (depth0 != null ? depth0.ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ID","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias4(((helper = (helper = helpers.Model || (depth0 != null ? depth0.Model : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Model","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias4(((helper = (helper = helpers.Type || (depth0 != null ? depth0.Type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Type","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias4(((helper = (helper = helpers.Etat || (depth0 != null ? depth0.Etat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Etat","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias4(((helper = (helper = helpers.Desc || (depth0 != null ? depth0.Desc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Desc","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>\n          <a href=\"#\" class=\"btn btn-success\" id =\"Affectation\">Affectation</a>\n          <a href=\"#\" class=\"btn btn-danger\" id =\"Supprimer\">Supprimer</a>\n        </td>\n      </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<div class=\"col-lg-12\">\n  <table class=\"table table-condensed\">\n    <thead>\n      <tr>\n        <th> titre 1 <a href=\"#\"><span class=\"glyphicon glyphicon-sort\" aria-hidden=\"true\"></span></a></th>\n        <th> titre 2 <a href=\"#\"><span class=\"glyphicon glyphicon-sort\" aria-hidden=\"true\"></span></a></th>\n        <th> titre 3 <a href=\"#\"><span class=\"glyphicon glyphicon-sort\" aria-hidden=\"true\"></span></a></th>\n        <th> titre 4 <a href=\"#\"><span class=\"glyphicon glyphicon-sort\" aria-hidden=\"true\"></span></a></th>\n      </tr>\n    </thead>\n    <tbody>\n";
  stack1 = ((helper = (helper = helpers.child || (depth0 != null ? depth0.child : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"child","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.child) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </tbody>\n</table>\n</div>\n";
},"useData":true});

return this["Templates"];

});