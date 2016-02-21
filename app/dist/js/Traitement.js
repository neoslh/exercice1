define([], function () {

    var  verification = function(e) {

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
    return {
     verification: verification
    };
 });
