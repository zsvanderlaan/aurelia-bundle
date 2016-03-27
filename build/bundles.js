module.exports = {
  "bundles": {
    "dist/common/core": {
      "includes": [
        "[*.js]",
        "*.html!text",
        "*.css!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": true,
        "rev": false
      }
    },
    "dist/common/lib": {
      "includes": [
        "jquery",
        "bootstrap"
      ],
      "options": {
        "inject": true,
        "minify": false,
        "depCache": true,
        "rev": false
      }
    },
    "dist/features/fooFeature": {
      "includes": [
        "features/fooFeature/*.js",
        "features/fooFeature/*.html!text",
        "features/fooFeature/*.css!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": true,
        "rev": false
      }
    },
    "dist/features/barFeature": {
      "includes": [
        "features/barFeature/*.js",
        "features/barFeature/*.html!text",
        "features/barFeature/*.css!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": true,
        "rev": false
      }
    },
    "dist/aurelia": {
      "includes": [
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-fetch-client",
        "aurelia-router",
        "aurelia-animator-css",
        "aurelia-templating-binding",
        "aurelia-polyfills",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-loader-default",
        "aurelia-history-browser",
        "aurelia-logging-console",
        "bootstrap/css/bootstrap.css!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": false,
        "rev": false
      }
    }
  }
};
