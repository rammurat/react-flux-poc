module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'jasmine'],
    files: [
      'test/**/*.js'
    ],
    preprocessors: {
      'js/components/*.js': ['babel', 'browserify'],
      'test/**/*.js': ['babel', 'browserify']
    },
    babelPreprocessor: {
      options: {
        presets: ['airbnb']
      }
    },
    browserify: {
      debug: true,
      transform: [
        ['babelify', { presets: ['airbnb'] }]
      ],
      configure: function(bundle) {
          bundle.on('prebundle', function() {
              bundle.external('react/lib/ReactContext');
              bundle.external('react/lib/ExecutionEnvironment');
              bundle.external('react/addons',true);
          });
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: false,
  })
};
