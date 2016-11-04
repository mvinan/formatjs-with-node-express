var gulp = require('gulp')
var standard = require('gulp-standard')

module.exports = function () {
  gulp.task('lint', function () {
    return gulp.src([
      'src/**/*.js',
      '!src/public/bower_components/**/*.js',
    ])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true,
      quiet: true
    }))
  })
}
