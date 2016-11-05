import gulp from 'gulp'
import nodemon from 'gulp-nodemon'
import sass from 'gulp-sass'
import browserSync from 'browser-sync'
import standard from 'gulp-standard'
import config from './src/lib/config'

const reload = browserSync.reload
const port = config().serverPort || 3000

gulp.task('lint', () => {
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

gulp.task('compileStyles', () => {
  return gulp.src('./src/stylesheets/style.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./src/public/stylesheets'))
   .pipe(browserSync.stream())
})

gulp.task('browser-sync', ['start-dev'], () => {
  browserSync.init(null, {
    proxy: `http://0.0.0.0:${port}`,
    files: ['public/**/*.*'],
    browser: "google chrome",
    port: 4000,
    open: false
  });
});

gulp.task('start-dev', cb => {
  let called = false
  nodemon({
    script: 'src/server.js',
    ext: 'js',
    env: { 'NODE_ENV': 'development' }
  })
  .on('start', () => {
    if (!called) { cb() }
    called = true
  })
  .on('restart', () => {
    browserSync.notify('<span style="color:red;">Reiniciando el server...</span>', 1400)
    setTimeout(() => {
      reload({stream: false})
    }, 2000)
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

gulp.task('default', ['browser-sync'], () => {
  gulp.watch('src/stylesheets/**/*.scss', ['compileStyles'])
  gulp.watch('src/views/**/*.hbs').on("change", reload)
})
