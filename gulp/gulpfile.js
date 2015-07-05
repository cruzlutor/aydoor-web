var gulp = require('gulp'),
	watch = require('gulp-watch'),
	connect = require('gulp-connect'),
	stylus = require('gulp-stylus');


// Get one .styl file and render 
gulp.task('stylus', function () {
  gulp.src('../css/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('../css/'))
    .pipe(connect.reload());
});


// Get one .styl file and render 
gulp.task('reload', function () {
  gulp.src('../**/*.html')
    .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        root: '../',
        livereload: true
    });
});

gulp.task('watch', function(){
	gulp.watch('../css/**/*.styl', ['stylus']);
	// gulp.watch('../**/*.html', ['reload']);
	// gulp.watch('../js/**/*.js', ['reload']);
})

gulp.task('default',  ['watch', 'connect']);