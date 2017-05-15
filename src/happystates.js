'use strict';

// Main class definition
function States(prefix, attribute) {
  this.prefix = prefix || 'state-';
  this.attr = attribute || 'data-state';

  document.addEventListener(
    'click',
    function(evt) {
      var e = evt || window.event, target = e.target || e.srcElement;

      if (target && target.hasAttribute(this.attr)) {
        this.toggle(target.getAttribute(this.attr));
      }
    }.bind(this)
  );
}

// Main toggle method, user by other methods below
// Toggle the state of name `state` (true => false or false => true)
States.prototype.toggle = function(state, cb) {
  document.documentElement.classList.toggle(this.prefix + state);

  if (cb) {
    cb();
  }
};

// Unset the state of name `state` (true => false)
States.prototype.unset = function(state, cb) {
  if (this.is(state)) {
    this.toggle(state, cb);
  }
};

// Set the state of name `state` (false => true)
States.prototype.set = function(state, cb) {
  if (!this.is(state)) {
    this.toggle(state, cb);
  }
};

// Check if the state of name `state` is currently active
States.prototype.is = function(state) {
  return document.documentElement.classList.contains(this.prefix + state);
};

// UMD module definition
// Roughly taken from https://github.com/umdjs/umd/blob/master/templates/returnExports.js
if (typeof define === 'function' && define.amd) {
  // AMD. Register as an anonymous module.
  define([], States);
} else if (typeof module === 'object' && module.exports) {
  // Node. Does not work with strict CommonJS, but
  // only CommonJS-like environments that support module.exports,
  // like Node.
  module.exports = States;
} else {
  // Browser globals (root is window)
  window.States = States;
}
