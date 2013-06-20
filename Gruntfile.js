module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      mobileJS: {
        options: {
          baseUrl: "public/js",
          paths: {
            "mobile": "MobileInit"
          },
          wrap: true,
          name: "../libs/almond",
          preserveLicenseComments: false,
          optimize: "uglify",
          optimizeCss: "standard",
          mainConfigFile: "public/js/config.js",
          include: ["mobile"],
          out: "./deploy/production.js"
        }
      },
      mobileCSS: {
        options: {
          optimizeCss: "standard",
          cssIn: "./public/css/mobile.css",
          out: "./deploy/production.css"
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'public/js/**/*.js', '!public/js/**/*min.js'],
      options: {
        globals: {
          jQuery: true,
          console: false,
          module: true,
          document: true,
          sloppy:false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('build', ['requirejs:mobileJS', 'requirejs:mobileCSS']);
  grunt.registerTask('default', ['test', 'build']);
};