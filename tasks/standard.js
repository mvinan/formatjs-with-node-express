import gulp from 'gulp'
import standard from 'gulp-standard'

export default function () {
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
