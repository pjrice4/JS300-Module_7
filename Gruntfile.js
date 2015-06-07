module.exports = function (grunt) {

	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js', 'app/**/*.js']
			option: {
				node: true,
				curly:true,
				eqeqeq:true,
				browser: true,
				globals: {
					jQuery: true,
					module: true,
					require: true,
					console: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint')
	grunt.registerTask('default', ['jshint']);
};