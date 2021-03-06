"use strict";

/**
 * Check if user is authenticate, or redirect him to /.
 */
export default {
  statics: {
    willTransitionTo: function(transition) {
      var nextPath = transition.path;
      if (!window.Auth.isLoggedIn()) {
        transition.redirect("/", {},
          {"nextPath": nextPath});
      }
    }
  }
};
