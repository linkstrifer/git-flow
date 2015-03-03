var gulp = require('gulp');
var paths = require('../config.js').paths;
var browser = require('browser-sync');

gulp.task('js', ['jshint'], function() {
	return gulp.src(paths.scripts + '**/*.js')
		.pipe(browser.reload({stream: true}));
});