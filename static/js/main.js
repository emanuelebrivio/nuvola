/*jshint browser:true, indent:2, laxcomma:true, loopfunc: true */
/*global NodeList, HTMLCollection, html2markdown */

(function () {

  'use strict';

  NodeList.prototype.forEach = Array.prototype.forEach;
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  NodeList.prototype.on = function (event, listener) {
    this.forEach(function (el) {
      el.addEventListener(event, listener);
    });
  };

  document.querySelector('#raw').addEventListener('keyup', function () {
    var html = this.innerHTML;
    document.querySelector('#export').value = html2markdown(html, { inlineStyle: true });
  });

  document.querySelector('#export').addEventListener('click', function () {
    this.select();
  });

})();
