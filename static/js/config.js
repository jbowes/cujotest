curl({
  baseUrl: 'js',
  packages:[ {
    name: 'thing',
    main: 'js/thing.js',
    config: { moduleLoader: '../curl/src/curl/loader/cjsm11' } /* <-- hey! */

  }],

  paths: {
    lodash: 'node_modules/lodash/dist/lodash.js'
  }

}, ['main'], function() {
  console.log('loaded');
});
