var os = require('os'),
    gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open');

var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));

gulp.task('serve', function() {
    connect.server({
        root: './',
        livereload: true
    });
    gulp.src('./').pipe(open({
        uri: 'http://localhost:8080/app/index.html',
        app: browser
    }));
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html', './app/css/*.css', './app/js/*.js'], ['html']);
});

gulp.task('connect', ['serve', 'watch']);