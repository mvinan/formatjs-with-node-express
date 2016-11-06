import gulp from 'gulp'
import browserSync from 'browser-sync'
import task from './tasks'

const reload = browserSync.reload

gulp.task('lint', task.analyze)
gulp.task('compileStyles', task.sassCompile)
gulp.task('webpack', task.runWebpack)

// Initialize Server with livereload
gulp.task('start-dev', task.nodemon.dev)
gulp.task('start', task.nodemon.production)
gulp.task('browser-sync', ['start-dev'], task.browserSyncInit.bind(null, 4000))

gulp.task('default', ['browser-sync'], () => {
  gulp.watch('client/stylesheets/**/*.scss', ['compileStyles'])
  gulp.watch('client/js/**/*.js', ['webpack'])
  gulp.watch('server/views/**/*.hbs').on("change", reload)
})
