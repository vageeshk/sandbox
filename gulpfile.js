var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var jshint = require('gulp-jshint');

//Release VVS
gulp.task('releaseVvs', function () {
    gulp.src('/var/www/gcs').pipe(gulp.dest('/var/bkp/gcs'));
    gulp.src('./src/gcs/dist/**').pipe(gulp.dest('/var/www/gcs'));
    gulp.src('/var/www/sppu').pipe(gulp.dest('/var/bkp/sppu'));
    gulp.src('./src/sppu/dist/**').pipe(gulp.dest('/var/www/sppu'));
});

gulp.task('default', function() {
  // place code for your default task here
});
