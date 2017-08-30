var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var jshint = require('gulp-jshint');

//GCS Tasks
gulp.task('minifyAppJSGcs', function() {
  gulp.src(['./src/gcs/app/**/*.js'])
    .pipe(concat('app.min.js'))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest('./build/gcs/app/'));
});

gulp.task('copyGcs', function() {
      gulp.src(['./src/gcs/**', '!./src/gcs/app/**/*.js', '!./src/gcs/index.html', '!./src/gcs/app/**/*.js~','!./src/gcs/**/*.html~']).pipe(gulp.dest('build/gcs'));
});

gulp.task('fixIndexGcs',function(){
	gulp.src('./src/gcs/index.html')
	.pipe(useref())
	.pipe(gulp.dest('build/gcs'));
});

//SPPU Tasks
gulp.task('minifyAppJSSppu', function() {
  gulp.src(['./src/sppu/vendor/moment.min.js','./src/sppu/vendor/calendar.js','./src/sppu/vendor/fullcalendar.min.js','./src/sppu/app/**/*.js'])
    .pipe(concat('app.min.js'))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest('./build/sppu/app/'));
});

gulp.task('copySppu', function() {
      gulp.src(['./src/sppu/**', '!./src/sppu/app/**/*.js', '!./src/sppu/index.html', '!./src/sppu/app/**/*.js~','!./src/sppu/**/*.html~']).pipe(gulp.dest('build/sppu'));
});

gulp.task('fixIndexSppu',function(){
	gulp.src('./src/sppu/index.html')
	.pipe(useref())
	.pipe(gulp.dest('build/sppu'));
});

//GCS Build Task
gulp.task('buildGcs', ['minifyAppJSGcs', 'copyGcs', 'fixIndexGcs'], function() {
  
});

//SPPU Build Task
gulp.task('buildSppu', ['minifyAppJSSppu', 'copySppu', 'fixIndexSppu'], function() {
  
});

//Release VVS
gulp.task('releaseVvs', function () {
    gulp.src('/var/www/gcs').pipe(gulp.dest('/var/bkp/gcs'));
    gulp.src('./build/gcs/**').pipe(gulp.dest('/var/www/gcs'));
    gulp.src('/var/www/sppu').pipe(gulp.dest('/var/bkp/sppu'));
    gulp.src('./build/sppu/**').pipe(gulp.dest('/var/www/sppu'));
});

gulp.task('default', function() {
  // place code for your default task here
});
