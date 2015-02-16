var autoprefixer = require('autoprefixer-core');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'dist/fgrid.css': 'src/fgrid.scss',
          'dist/fg_extra.css': 'src/fg_extra.scss',
        }
      }
    },
    autoprefixer: {
      multiple_files: {
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

  // Load Plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task(s).
  grunt.registerTask('default',
  [
  'sass',
  'autoprefixer',
  'cssmin',
  ]);

};