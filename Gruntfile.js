'use strict';


module.exports = function (grunt) {

    // Load the project's grunt tasks from a directory
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });



    // Register group tasks
    grunt.registerTask('build', ['dustjs', 'requirejs', 'copyto']);

    grunt.registerTask('test', [ 'eslint', 'mochacli' ]);


        grunt.registerTask('postinstall', ['copy-browser-modules']);

};
