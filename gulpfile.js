"use strict";
let gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	connect = require('connect'),	
	concat = require('gulp-concat'),
	jade = require('gulp-jade'),
	scss = require("gulp-scss"),
	jsImport = require('gulp-js-import');

gulp.task('jade', function() {
	gulp.src('./src/templates/*.jade')
	.pipe(jade({
		pretty: true
	}))
	.on('error', console.log)
	.pipe(gulp.dest('./build'))
	.pipe(livereload());
});

gulp.task('scss', function() {
	gulp.src('src/static/scss/style.scss')
	.pipe(scss())
	.on('error', console.log)
	.pipe(concat('style.css'))
	.pipe(gulp.dest('build'))
	.pipe(livereload());
});

gulp.task('js', function() {
	gulp.src(['./src/static/js/libs/libs.js',	
		'./src/static/js/*.js'])
	.pipe(jsImport({hideConsole: true}))
	.pipe(concat('bundle.js'))
	.pipe(gulp.dest('./build'))
	.pipe(livereload());
});

gulp.task('images', function() {
	gulp.src('./src/static/images/*')
	.pipe(gulp.dest('./build/images'));
});

gulp.task('fonts', function() {
	gulp.src('./src/static/fonts/*')
	.pipe(gulp.dest('./build/fonts'));
});

gulp.task('http-server', function() {
	connect()
	.use(require('connect-livereload')())
	.use(connect.static('./build'))
	.listen('9000');
	console.log('Server listening on http://localhost:9000');
});

gulp.task('default', function() {
	gulp.run('jade');
	gulp.run('scss');
	gulp.run('js');
	gulp.run('images');
	gulp.run('fonts');	
	livereload.listen();
	gulp.watch('src/templates/*.jade', ['jade']);
	gulp.watch('src/static/scss/*.scss', ['scss']);
	gulp.watch('src/static/js/*.js', ['js']);	
	gulp.run('http-server');
});