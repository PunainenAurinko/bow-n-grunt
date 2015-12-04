/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/font-awesome/fonts',
                        src: '*',
                        dest: 'dist/fonts/'
					},
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist/img',
                        src: '*',
                        dest: 'dist/img/'
					},
                    {
                        src: 'bower_components/bootstrap/dist/css/bootstrap.css',
                        dest: 'dist/css/bootstrap.css'
					},
                    {
                        src: 'bower_components/bootstrap/dist/css/bootstrap.js',
                        dest: 'bootstrap/dist/js/bootstrap.js',
                    },
                    {
                        src: 'bower_components/font-awesome/css/font-awesome.css',
                        dest: 'dist/css/font-awesome.css'
					},
                    {
                        src: 'bower_components/jquery/dist/jquery.js',
                        dest: 'dist/js/jquery.js'
					},
                    {
                        src: 'bower_components/bootstrap/dist/css/main.css',
                        dest: 'dist/css/main.css'
					},
                    {
                        src: 'bower_components/bootstrap/dist/js/main.js',
                        dest: 'dist/js/main.js'
					},
                    {
                        src: 'bower_components/bootstrap/dist/index.html',
                        dest: 'dist/index.html'
					},
     			],
            },
        },
        uglify: {
            dist: {
                src: 'dist/js/*.js',
                dest: 'dist/js/main.min.js'
            }
        },
        cssmin: {
            target: {
                files: {
                    "dist/css/main.min.css": 'dist/css/*.css'
                }
            }
        },
        clean: {
            css: ['dist/css/*.css', '!dist/css/*.min.css'],
            js: ['dist/js/*.js', '!dist/js/*.min.js']
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task.
    grunt.registerTask('default', ['copy', 'uglify', 'cssmin', 'clean']);

};