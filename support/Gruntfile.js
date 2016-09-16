module.exports = function(grunt) {
    grunt.initConfig({
        bowercopy: {
            options: {
                // Bower components folder will be removed afterwards
                clean: false,
                srcPrefix: '../source/vendor/bower_components/',
                destPrefix: '../source/app/vendor/components/'
            },
            // Javascript
            libs: {

                files: {
                    'jquery/jquery.js': 'jquery/dist/jquery.js',
                    'bootstrap/bootstrap.js': 'bootstrap/dist/js/bootstrap.js',
                },
            },

            // Less
            css: {

                files: {
                    //'jquery/jquery.js': 'jquery/dist/jquery.js',
                    //'Font-Awesome/': 'Font-Awesome/',
                    'bootstrap/bootstrap.css': 'bootstrap/dist/css/bootstrap.css',
                    'font-awesome/css/font-awesome.css': 'font-awesome/css/font-awesome.css'
                },
            },

            // Entire folders
            folders: {

                files: {
                    // Note: when copying folders, the destination (key) will be used as the location for the folder
                    'font-awesome/fonts/': 'font-awesome/fonts'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bowercopy');

    // task setup 
    grunt.registerTask('build', ['bowercopy']);
};