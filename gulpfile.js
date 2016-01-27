var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	cssnano = require('gulp-cssnano'),
	rename = require("gulp-rename");

gulp.task('compress-js', function() {
  return gulp.src('src/*.js')
    .pipe(uglify()).on('error', errorHandler)
    .pipe(rename({        suffix: '.min'   }))
    .pipe(gulp.dest('dist'));
});

gulp.task('compress-css', function() {
  return gulp.src('src/flatpickr.css')
    .pipe(cssnano()).on('error', errorHandler)
    .pipe(rename({        suffix: '.min'   }))
    .pipe(gulp.dest('dist'));
});

// Handle the error
function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('default', ['compress-js', 'compress-css']);