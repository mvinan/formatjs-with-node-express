import gulp from 'gulp'
import nodemon from 'gulp-nodemon'
import sass from 'gulp-sass'

// //imported tasks
// gulp.task('lint', require('./tasks/standard'))
//
// //Tasks
// gulp.task('analyze', ['lint'])
// gulp.task('pre-push', ['lint'])

gulp.task('sass', () => {
  return gulp.src('./src/stylesheets/**/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./src/public/stylesheets'));
})

gulp.task('start-dev', () => {
  gulp.watch('src/stylesheets/*.scss', ['sass'])
  nodemon({
    script: 'src/server.js',
    ext: 'js',
    env: {
      'NODE_ENV': 'development'
    }
  })
})

gulp.task('start', () => {
  nodemon({
    script: 'src/server.js',
    ext: 'js',
    env: {
      'NODE_ENV': 'production'
    }
  })
})

gulp.task('default', ['start-dev'])
