module.exports = function(grunt)
{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            appModules: {
                files: {
                    'app/build/app_modules.js': ['app/scripts/**/*.module.js']
                }
            },
            appComponents: {
                files: {
                    'app/build/app_components.js': ['app/scripts/**/*.js', '!app/scripts/**/*.module.js']
                }
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            modules: {
                src: 'app/build/app_modules.js',
                dest: 'app/build/app_modules.min.js'
            },
            components: {
                src: 'app/build/app_components.js',
                dest: 'app/build/app_components.min.js'
            }
        },

        watch: {
            scripts: {
                files: ['app/scripts/**/*.js'],
                tasks: ['concat', 'uglify']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify']);
};
