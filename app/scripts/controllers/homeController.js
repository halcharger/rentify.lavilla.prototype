'use strict';

angular.module('rentifylavillaprototypeApp')
  .controller('homeController', function () {

    loadHeroImg();
    initFormElements();
    initDatePickers();
    initFormValidation();
    initBgImages();

  });
