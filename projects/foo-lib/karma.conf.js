// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-mocha-reporter'),
      require('karma-junit-reporter')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['mocha','kjhtml', 'junit'],
    // ,'progress', 'kjhtml'
    
    mochaReporter: {
      colors: {
        success: 'blue',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'bgRed'
      },
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x'
      },
    },


    // the default configuration 
    //Local env
    /* junitReporter: {
      outputDir: '', // results will be saved as $outputDir/$browserName.xml
      outputFile: 'test-results.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: '', // suite will become the package name attribute in xml testsuite element
      useBrowserName: true, // add browser name to report and classes names
      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
      properties: {} // key value pair of properties to add to the <properties> section of the report
    }, */

    //Jenkins env
    junitReporter: {
      outputFile: 'test-results.xml',
      useBrowserName: false,
    },
    
    //Local env
    /*port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'], */

    //Jenkins env
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--no-sandbox',
          '--remote-debugging-port=9222',
        ]
      }
    },
    //Jenkins env
    browsers: ['ChromeHeadless'],

    logLevel: config.LOG_INFO,

     //Jenkins env
    singleRun: true

     //Local env
     // singleRun: true
  });
  
};
