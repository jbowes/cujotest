curl({
  baseUrl: 'js',
  packages:[ {
    name: 'thing',
    location: '.',
    main: 'thing.js',
    config: { moduleLoader: 'curl/loader/cjsm11' } /* <-- hey! */

  }],

  paths: {
    lodash: 'node_modules/lodash/dist/lodash.js'
  }

}, ['main'], function() {
  console.log('loaded');
});
