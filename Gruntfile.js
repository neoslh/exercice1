'use strict';
var LIVERELOAD_PORT = 35729;
var serveStatic = require('serve-static');
var the_inject_script = require('connect-livereload')({port: LIVERELOAD_PORT});
var monter_dossier = function (connect, dir) {
      return   connect().use(serveStatic(require('path').resolve(dir)));
};


module.exports = function (grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        watch: {
            options: {
                nospawn: true
            },
            bw:{
              files: ['app/components/*'],
              tasks:['wiredep','connect:livereload']
            },
            less: {
                files: ['app/src/less/*.less'],
                tasks: ['less:server','connect:livereload']
            },
            js: {
                files: ['app/src/js/index.js'],
                tasks: ['uglify','connect:livereload']
            },
            hbs: {
                files: ['app/dist/templates/*.handlebars'],
                tasks: ['handlebars','connect:livereload']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    'app/*.html',
                    'app/dist/css/{,*/}*.css',
                    'app/dist/js/{,*/}*.js',
                    'app/dist/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            monter_dossier(connect, 'app'),
                            the_inject_script
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        less: {
            server: {
                options: {
                    paths: ['app/components/bootstrap/less', 'app/src/less']
                },
                files: {
                    'app/dist/css/main.css': 'app/src/less/main.less'
                }
            }
        },
  uglify : {
              dist:{
                src: 'app/src/js/index.js',
                dest: 'app/dist/js/index.min.js'
              }
          },
handlebars: {
            all: {
              files: {
                "app/dist/js/templates.js": "app/dist/templates/*.handlebars"
              },
              options: {
              	namespace: 'Handlebars.templates',
                exportCommonJS: 'handlebars'
              }
            }
          },
  wiredep: {
       target: {
         src: 'app/index.html' // point to your HTML file.
       }
     },
    inject: {
        single: {
          scriptSrc: 'app/components/{,*/}*.js',
          files: {
            'app/index.html': 'app/index.html'
          }
        }
    }
    });
    grunt.registerTask('server', function (target) {
        grunt.task.run([
            'wiredep',
            'less:server',
            'uglify',
            'handlebars',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });
};
