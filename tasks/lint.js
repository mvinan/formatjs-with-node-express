import gulp from 'gulp'
import standard from 'gulp-standard'
import path from 'path'

function analyze () {
  return gulp.src([
    path.join(__dirname, '..', 'server', '/**/*.js'),
    path.join(__dirname, '..', 'client', '/js/*.js'),
    path.join(__dirname, '..', '!public/bower_components/**/*.js'),
  ])
  .pipe(standard())
  .pipe(standard.reporter('default', {
    breakOnError: true,
    quiet: true
  }))
}

export default analyze
