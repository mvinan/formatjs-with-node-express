import gulp from 'gulp'
import sass from 'gulp-sass'
import browserSync from 'browser-sync'
import path from 'path'

function sassCompile () {
  return gulp.src(path.join(__dirname, '..', 'client', 'stylesheets', 'style.scss'))
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest(path.join(__dirname,'..', 'public', 'stylesheets')))
   .pipe(browserSync.stream())
}

export default sassCompile
