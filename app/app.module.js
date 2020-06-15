'use strict';
require('bootstrap/dist/css/bootstrap.css');
require('./app.css');
require('./app.animations.css');

window.jQuery = require('jquery');
const angular = require('angular');
require('angular-animate');
require('angular-resource');
require('angular-route');

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList'
]);

require('./app.config');
require('./app.animations');
require('./core/core.module');
require('./core/checkmark/checkmark.filter');
require('./core/phone/phone.module');
require('./phone-detail/phone-detail.module');
require('./phone-list/phone-list.module');