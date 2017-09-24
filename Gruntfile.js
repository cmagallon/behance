module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'public/scss/style.css' : 'public/scss/style.scss'
				}
			}
		},
		watch: {
			sass: {
				files: ['public/scss/style.scss', 'public/scss/base/*.scss', 'public/scss/components/*.scss', 'public/scss/pages/*.scss'],
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}
