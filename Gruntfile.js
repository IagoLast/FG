var autoprefixer = require('autoprefixer-core');

module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'dist/fgrid.css': 'src/fgrid.scss',
                }
            }
        },
        autoprefixer: {
            dist: {
                options: {
                    browsers: ['last 1 versions']
                },
                src: 'dist/*.css',
            },
        },
        cssmin: {
            minify: {
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist',
                    ext: '.min.css'
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', [
        'sass',
        'autoprefixer',
        'cssmin',
    ]);

};
