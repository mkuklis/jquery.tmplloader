/*
 * jQuery Template loader
 * Copyright 2010 Michal Kuklis
 * Released under the MIT and GPL licenses.
 */

jQuery.tmplLoader = (function() {
  // cached templates
  var templates = {};
  
  // various options
  var options = {
    tmplPath: "templates/_",
    tmplExt: ".tmpl.html"
  };

  // overrides default options
  var init = function(opts) {
    $.extend(true, options, opts);
  }

  // executes callback after template 
  // is loaded and cached
  // 3 argument is optional and it represents
  // hash of options which could be used to override
  // current options
  var get = function(name, callback) {
    opts = $.extend(true, options, arguments[2] || {});
    if (templates[name]) {
      callback(templates[name]);
    }
    else {
      // TODO handle error
      $.get(opts.tmplPath + name + opts.tmplExt, function(template){
        templates[name] = template;
        callback(template);
      });
    }
  }
  
  // public api
  return {
    init: init,
    get: get  
  }
})();
