module.exports = function(grunt) {

    grunt.initConfig({
        copy: {
            main: {
                expand: true,
                cwd: '/',
                src: ['**'],
                dest: 'dest/'
            }
        },

        bowercopy: {

            options: {
                    runBower: true,
                    report: true,
                },

            js: {
                options: {
                    srcPrefix: '../source/vendor/bower_components',
                    destPrefix: '../source/app/vendor/'
                },
                scripts: {
                    files: {
                        'jquery/jquery.js': 'jquery/dist/jquery.js'
                    }
                }
            },

            css: {},

            images: {
                options: {
                    destPrefix: '../source/app/vendor/images'
                },
                files: {
                    expand: true,
                    src: ['**'],
                    dest: 'dest/'
                }
            }
        }
    });



    grunt.loadNpmTasks('grunt-bowercopy');

    // task setup 
    grunt.registerTask('build', ['bowercopy']);
};