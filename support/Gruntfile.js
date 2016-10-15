module.exports = function(grunt) {
    grunt.initConfig({
        bowercopy: {
            options: {
                clean: false,
                srcPrefix: '../source/vendor/bower_components/',
                destPrefix: '../source/app/vendor/components/'
            },
            // Javascript
            libs: {
                files: {
                    'jquery/jquery.min.js': 'jquery/dist/jquery.min.js',
                    'bootstrap/bootstrap.min.js': 'bootstrap/dist/js/bootstrap.min.js',
                },
            },
            css: {
                files: {
                    'bootstrap/bootstrap.min.css': 'bootstrap/dist/css/bootstrap.min.css',
                    'font-awesome/css/font-awesome.min.css': 'font-awesome/css/font-awesome.min.css'
                },
            },
            folders: {
                files: {
                    'font-awesome/fonts/': 'font-awesome/fonts',
                    'bootstrap/fonts': 'bootstrap/dist/fonts'
                }
            }
        },
        clean: {
            // removes vendor/components folder before any new build
            folder: [
                '../source/app/vendor/components/'
            ],
            options: {
                force: true
            }
        },

        injector: {
            options: {
                addRootSlash: false,
                relative: true,
                min: true,
                template: '../source/app/index.html',
                ignorePath: '../source/app/'
            },
            local_dependencies: {
                files: {
                    '../source/app/index.html': [
                        '../source/app/assets/stylesheets/*.css',
                        //JQuery must be injected before bootstrap
                        '../source/app/vendor/components/jquery/*.js',
                        '../source/app/vendor/components/**/*.js',
                        '../source/app/vendor/components/**/*.css'
                    ]
                }
            }

        }
    });

    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-asset-injector');

    // task setup 
    grunt.registerTask('build', ['clean', 'bowercopy', 'injector']);

    grunt.registerTask('clear', ['clean']);
};