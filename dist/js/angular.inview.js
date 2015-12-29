/**
 * Angular Inview
 * @author Surya
 * url https://github.com/iamssurya/angular-inview
 * Base https://github.com/zuk/jquery.inview
 */
'use strict';
var inview = angular.module('angular-inview', []);
inview.directive('slideInview', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      if (attrs.slideInview == 'up' || attrs.slideInview == 'down' || attrs.slideInview == 'left' || attrs.slideInview == 'right') {
        $(element[0].querySelector('*')).addClass('slide-' + attrs.slideInview + '-default');
        $(element).bind('inview', function (event, visible, topOrBottomOrBoth) {
          if (visible == true) {
            // element is now visible in the viewport
            if (topOrBottomOrBoth == 'top') {
            } else if (topOrBottomOrBoth == 'bottom') {
            } else {
              $(element[0].querySelector('*')).addClass('slide-' + attrs.slideInview);
            }
          } else {
          }
        });
      }
    }
  };
});