curl({
  baseUrl: 'js',
  packages:[ {
    name: 'thing',
    main: 'js/thing.js',
    config: { moduleLoader: '../curl/src/curl/loader/cjsm11' } /* <-- hey! */

  }]

}, ['main'], function() {
  console.log('loaded');
});
