var browserSync = require('browser-sync').create(),
    exec        = require('child_process').exec,
    gulp        = require('gulp'),
    runSequence = require('gulp-run-sequence'),
    sass        = require('gulp-sass');

gulp.task('dockerSync', function (cb) {
  exec('docker-sync sync', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('reload', function (done) {
  browserSync.reload();
  done();
});

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('sass:watch', function () {
  runSequence('sass', 'dockerSync', 'reload');
});

gulp.task('watch', function () {
  browserSync.init({
    proxy: 'http://localhost:8080'
  });
  gulp.watch('./src/**/*.scss', ['sass:watch']);
});

gulp.task('default', ['sass']);