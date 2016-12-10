var browserSync = require("browser-sync").create(),
    gulp        = require('gulp'),
    sass        = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./app/dist'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  browserSync.init({
    proxy: 'http://localhost:8080'
  });
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);