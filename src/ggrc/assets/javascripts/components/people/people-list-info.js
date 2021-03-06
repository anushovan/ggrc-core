/*!
 Copyright (C) 2017 Google Inc.
 Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
 */

(function (can, GGRC) {
  'use strict';

  var template = can.view(GGRC.mustache_path +
    '/components/people/people-list-info.mustache');

  var viewModel = can.Map.extend({
    instance: null,
    isOpen: false,
    isHidden: false
  });

  GGRC.Components('peopleListInfo', {
    tag: 'people-list-info',
    template: template,
    viewModel: viewModel,
    events: {
      click: function () {
        if (arguments[2] === undefined) {
          return;
        }
        this.viewModel.attr('isHidden', arguments[2]);
        this.viewModel.attr('isOpen', true);
      }
    }
  });
})(window.can, window.GGRC);
