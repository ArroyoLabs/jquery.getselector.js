(function($){
 $.fn.getSelector = function() {
   element = this[0];
   var str = '';
     while(element && element.nodeType == 1) {
       var id = $(element.parentNode).children(element.tagName).index(element) + 1;
       id > 1 ? (id = ':nth-child(' + id + ')') : (id = '');
       if(str.length > 0) {
         str = ' > ' + str;
       }
       str = element.tagName.toLowerCase() + id + str;
       element = element.parentNode;
     }
     return str;
   };
 })(jQuery);