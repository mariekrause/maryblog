module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-164743872-1","head":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Delog GatbsyJS Starter","short_name":"Delog","start_url":"/","background_color":"#fff","theme_color":"#381696","display":"standalone","icon":"src/images/icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"fb3f3f1f0eb79016665dc2c3d852b9ca"},
    },{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
