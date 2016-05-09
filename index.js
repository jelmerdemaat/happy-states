'use strict';

var States = function () {
  var self = this;

  this.states = {};
  this.prefix = 'state-';

  document.addEventListener('click', function (evt) {
    var e = evt || window.event,
        target = e.target || e.srcElement;

    if (target && target.hasAttribute('data-state')) {
      self.toggle(target.getAttribute('data-state'));
    }
  });
};

States.prototype.unset = function (state, cb) {
  if (this.is(state)) {
    this.toggle(state, cb);
  }
};

States.prototype.set = function (state, cb) {
  if (!this.is(state)) {
    this.toggle(state, cb);
  }
};

States.prototype.is = function (state) {
  return document.documentElement.classList.contains(this.prefix + state);
};

States.prototype.toggle = function (state, cb) {
  document.documentElement.classList.toggle(this.prefix + state);
  this.states[state] = !(this.states[state] && this.states[state] === true);

  if (cb) {
    cb();
  }
};

var states = new States();
